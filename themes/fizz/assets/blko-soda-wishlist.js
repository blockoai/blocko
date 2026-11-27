/* Fizz wishlist: heart toggles, header count, toast, wishlist page. Handles live in localStorage ("blko-wishlist"), mirrored in memory
   when storage is blocked, synced across tabs, and announced with a "blko:wishlist:change" event on window.
   Optional (theme setting, off by default): when a #blko-wishlist-config script says sync is on, handles are also POSTed to the
   customer app proxy and merged on load. Any failure there is silent, localStorage stays the source of truth.
   Same file in the Shopify theme and in the static demo. Markup hooks: [data-wishlist-toggle] (data-handle, data-name),
   [data-wishlist-count], [data-wishlist-link], <blko-soda-wishlist-page>. */
(function () {
  'use strict';
  if (window.BlkoWishlist) return;

  var KEY = 'blko-wishlist';
  var EVT = 'blko:wishlist:change';
  var HANDLE = /^[a-z0-9][a-z0-9_-]{0,254}$/i;
  var cfg = {};
  try {
    var cel = document.getElementById('blko-wishlist-config');
    if (cel) cfg = JSON.parse(cel.textContent) || {};
  } catch (e) { cfg = {}; }

  var T = {
    save: 'Save {name} to wishlist',
    remove: 'Remove {name} from wishlist',
    saveText: 'Save to wishlist',
    savedText: 'Saved',
    saved: 'Saved to your wishlist',
    removed: 'Removed from your wishlist',
    view: 'View',
    copied: 'Link copied',
    cleared: 'Wishlist cleared',
    merged: 'Added to your wishlist',
    nothing: 'Nothing to add'
  };
  if (cfg.labels) Object.keys(cfg.labels).forEach(function (k) { if (cfg.labels[k]) T[k] = cfg.labels[k]; });
  var fmt = function (s, name) { return String(s).replace('{name}', name || ''); };

  /* ---- storage ---- */
  var memory = { items: [], ts: 0 };
  var clean = function (list) {
    var out = [];
    (Array.isArray(list) ? list : []).forEach(function (h) {
      h = String(h || '').trim();
      if (HANDLE.test(h) && out.indexOf(h) < 0) out.push(h);
    });
    return out;
  };
  var read = function () {
    try {
      var raw = window.localStorage.getItem(KEY);
      if (raw) {
        var d = JSON.parse(raw);
        var items = clean(Array.isArray(d) ? d : d && d.items);
        memory = { items: items, ts: (d && d.ts) || 0 };
      }
    } catch (e) { /* storage blocked or corrupt: keep the memory copy */ }
    return memory;
  };
  var state = read();

  var emit = function (source) {
    window.dispatchEvent(new CustomEvent(EVT, { detail: { items: state.items.slice(), source: source || 'local' } }));
  };
  var write = function (items, source) {
    state = { items: clean(items), ts: Date.now() };
    memory = state;
    try { window.localStorage.setItem(KEY, JSON.stringify({ items: state.items, ts: state.ts })); } catch (e) { /* memory only */ }
    emit(source);
  };

  window.addEventListener('storage', function (e) {
    if (e.key !== KEY && e.key !== null) return;
    state = read();
    emit('storage');
  });

  var api = window.BlkoWishlist = {
    event: EVT,
    list: function () { return state.items.slice(); },
    count: function () { return state.items.length; },
    has: function (h) { return state.items.indexOf(h) > -1; },
    add: function (h) { if (HANDLE.test(h) && !api.has(h)) write(state.items.concat([h])); },
    addMany: function (list) { write(state.items.concat(clean(list))); },
    remove: function (h) { write(state.items.filter(function (x) { return x !== h; })); },
    toggle: function (h) { if (api.has(h)) api.remove(h); else api.add(h); return api.has(h); },
    clear: function () { write([]); }
  };

  /* ---- optional customer account sync (app proxy) ---- */
  var pushTimer = null;
  var push = function () {
    if (!cfg.sync || !cfg.proxy) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(function () {
      try {
        fetch(cfg.proxy, { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items: state.items, ts: state.ts }) }).catch(function () {});
      } catch (e) { /* ignore */ }
    }, 600);
  };
  if (cfg.sync && cfg.proxy) {
    window.addEventListener(EVT, function (e) { if (e.detail && e.detail.source === 'local') push(); });
    try {
      fetch(cfg.proxy, { credentials: 'same-origin', headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('proxy'); return r.json(); })
        .then(function (d) {
          var remote = clean(Array.isArray(d) ? d : d && (d.items || d.handles));
          var merged = clean(state.items.concat(remote));
          if (merged.length !== state.items.length) write(merged, 'sync');
          if (merged.length !== remote.length) push();
        })
        .catch(function () {});
    } catch (e) { /* ignore */ }
  }

  /* ---- toast ---- */
  var toastEl = null;
  var toastTimer = null;
  var wishUrl = function () {
    var a = document.querySelector('[data-wishlist-link]');
    return a ? a.getAttribute('href') : '';
  };
  var onWishlistPage = function () { return !!document.querySelector('blko-soda-wishlist-page'); };
  var toast = function (msg, withView) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'blko-soda-toast';
      toastEl.setAttribute('role', 'status');
      toastEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = '';
    var span = document.createElement('span');
    span.textContent = msg;
    toastEl.appendChild(span);
    var href = wishUrl();
    if (withView && href && !onWishlistPage()) {
      var dot = document.createElement('span');
      dot.setAttribute('aria-hidden', 'true');
      dot.textContent = '·';
      var a = document.createElement('a');
      a.href = href;
      a.textContent = T.view;
      toastEl.appendChild(dot);
      toastEl.appendChild(a);
    }
    void toastEl.offsetWidth;
    toastEl.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-visible'); }, 2500);
  };
  api.toast = toast;

  /* ---- hearts, pills and counts ---- */
  var flavorName = function (h) {
    var c = window.FizzCatalog && window.FizzCatalog.get && window.FizzCatalog.get(h);
    return c ? c.name : '';
  };
  var handleOf = function (b) {
    var param = b.getAttribute('data-wl-param');
    if (param) {
      var v = new URLSearchParams(window.location.search).get(param);
      if (v && HANDLE.test(v)) return v;
    }
    return b.getAttribute('data-handle') || '';
  };
  var nameOf = function (b, h) {
    if (b.getAttribute('data-wl-param')) {
      var live = document.querySelector('[data-flavor-name]');
      var n = flavorName(h) || (live && live.textContent.trim());
      if (n) return n;
    }
    return b.getAttribute('data-name') || h;
  };
  var paint = function () {
    var items = state.items;
    document.querySelectorAll('[data-wishlist-toggle]').forEach(function (b) {
      var h = handleOf(b);
      var on = items.indexOf(h) > -1;
      var name = nameOf(b, h);
      b.classList.toggle('is-saved', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      var txt = b.querySelector('[data-wl-text]');
      if (txt) txt.textContent = on ? T.savedText : T.saveText;
      else b.setAttribute('aria-label', fmt(on ? T.remove : T.save, name));
    });
    document.querySelectorAll('[data-wishlist-count]').forEach(function (c) {
      c.textContent = items.length;
      c.hidden = items.length === 0;
    });
    document.querySelectorAll('[data-wishlist-link]').forEach(function (a) {
      if (a.hasAttribute('data-wl-labelled')) a.setAttribute('aria-label', 'Wishlist (' + items.length + ')');
    });
  };
  var queued = false;
  var schedule = function () {
    if (queued) return;
    queued = true;
    (window.requestAnimationFrame || setTimeout)(function () { queued = false; paint(); });
  };
  window.addEventListener(EVT, paint);

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-wishlist-toggle]');
    if (!b) return;
    e.preventDefault();
    e.stopPropagation();
    var h = handleOf(b);
    if (!h) return;
    var on = api.toggle(h);
    var icon = b.querySelector('svg');
    b.classList.remove('is-pop');
    void b.offsetWidth;
    b.classList.add('is-pop');
    if (icon) icon.addEventListener('animationend', function () { b.classList.remove('is-pop'); }, { once: true });
    toast(on ? T.saved : T.removed, on);
  }, true);

  /* ---- wishlist page ---- */
  var PASTEL = ['#fde1e3', '#fde9d2', '#fde2ea', '#eef6cf', '#fff0cc', '#d6f1ea', '#e8defa', '#f0e1d1'];
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var tintOf = function (h) {
    var n = 0;
    for (var i = 0; i < h.length; i++) n = (n * 31 + h.charCodeAt(i)) >>> 0;
    return PASTEL[n % PASTEL.length];
  };
  var HEART = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 20.5C5.5 16 3 12.6 3 9.2 3 6.6 5 4.8 7.3 4.8c1.8 0 3.5 1 4.7 2.9 1.2-1.9 2.9-2.9 4.7-2.9C19 4.8 21 6.6 21 9.2c0 3.4-2.5 6.8-9 11.3z"/></svg>';
  var CROSS = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="fill:none"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>';

  if (!customElements.get('blko-soda-wishlist-page')) {
    customElements.define('blko-soda-wishlist-page', class extends HTMLElement {
      connectedCallback() {
        if (this.dataset.bound) { if (this._on) window.addEventListener(EVT, this._on); return; }
        this.dataset.bound = '';
        var root = this;
        var $ = function (s) { return root.querySelector(s); };
        var grid = $('[data-wl-grid]');
        var empty = $('[data-wl-empty]');
        var bar = $('[data-wl-bar]');
        var shared = $('[data-wl-shared]');
        var countEl = $('[data-wl-count]');
        var base = (root.dataset.root || '/').replace(/\/?$/, '/');
        var demo = root.hasAttribute('data-catalog') && !!window.FizzCatalog;
        var addLabel = root.dataset.addLabel || 'Add 12-pack';
        var badge = root.dataset.badge || '';
        var saleLabel = root.dataset.saleLabel || 'Sale';
        var currency = root.dataset.currency || 'USD';
        var map = {};
        try { var mj = root.querySelector('[data-wl-map]'); if (mj) map = JSON.parse(mj.textContent) || {}; } catch (e) { map = {}; }
        var nf;
        try { nf = new Intl.NumberFormat(document.documentElement.lang || undefined, { style: 'currency', currency: currency }); } catch (e) { nf = null; }
        var money = function (c) { return nf ? nf.format(c / 100) : '$' + (c / 100).toFixed(2); };

        var sharedList = null;
        var q = new URLSearchParams(window.location.search).get('items');
        if (q) sharedList = clean(q.split(',')).slice(0, 24);

        var resolved = {};
        var loading = {};
        var chosen = {};
        var token = 0;

        /* data sources */
        var fromCatalog = function (h) {
          var c = window.FizzCatalog.get(h);
          if (!c) return null;
          var m = map[h] || {};
          var b = window.FizzCatalog.base || '';
          var vars = (c.variants || []).map(function (v, i) {
            return { id: m.ids && m.ids[i], title: v.title, price: Math.round(v.price * 100), available: !!(m.ids && m.ids[i]) };
          });
          if (!vars.length && m.ids && m.ids[0]) vars = [{ id: m.ids[0], title: c.name, price: m.price || 0, available: true }];
          var price = c.price != null ? Math.round(c.price * 100) : (m.price || 0);
          var img = c.can ? b + c.can : c.image ? b + c.image : '';
          return {
            handle: h, title: c.name, url: m.url || ('pdp.html?flavor=' + h), image: img,
            alt: c.can ? b + 'banners/flavor-' + h + '.svg' : '', price: price,
            compare: c.compare_at ? Math.round(c.compare_at * 100) : 0, tint: c.tile_bg || '#fff0cc', variants: vars, label: m.label || ''
          };
        };
        var fromShopify = function (p) {
          if (!p || !p.handle) return null;
          var img = function (u) { return u ? u + (u.indexOf('?') > -1 ? '&' : '?') + 'width=600' : ''; };
          var vars = (p.variants || []).map(function (v) { return { id: v.id, title: v.title, price: v.price, available: v.available }; });
          return {
            handle: p.handle, title: p.title, url: p.url, image: img(p.featured_image),
            alt: img(p.images && p.images[1]), price: p.price, compare: p.compare_at_price || 0, tint: tintOf(p.handle), variants: vars
          };
        };
        var load = function (h) {
          if (demo) return Promise.resolve(fromCatalog(h));
          return fetch(base + 'products/' + encodeURIComponent(h) + '.js', { headers: { Accept: 'application/json' } })
            .then(function (r) { return r.ok ? r.json() : null; })
            .then(fromShopify)
            .catch(function () { return null; });
        };

        /* markup */
        var variantOf = function (p) {
          var id = chosen[p.handle];
          var v = p.variants.filter(function (x) { return String(x.id) === String(id); })[0];
          return v || p.variants.filter(function (x) { return x.available; })[0] || p.variants[0];
        };
        var multi = function (p) { return p.variants.length > 1 && !(p.variants.length === 1 && p.variants[0].title === 'Default Title'); };
        var labelFor = function (p, v) { return p.label || (multi(p) && v ? 'Add ' + v.title : addLabel); };
        var priceHtml = function (p, v) {
          var price = v ? v.price : p.price;
          var cmp = p.compare > price && !multi(p) ? '<s>' + money(p.compare) + '</s>' : '';
          return price ? cmp + money(price) : '';
        };
        var card = function (p, readonly) {
          var h = esc(p.handle), t = esc(p.title);
          var v = variantOf(p);
          var sale = p.compare > p.price && badge;
          var ctl = readonly
            ? '<button type="button" class="blko-soda-heart" data-wishlist-toggle data-handle="' + h + '" data-name="' + t + '" aria-pressed="false" aria-label="' + esc(fmt(T.save, p.title)) + '">' + HEART + '</button>'
            : '<button type="button" class="blko-soda-heart blko-soda-heart--remove" data-wl-remove="' + h + '" aria-label="' + esc(fmt(T.remove, p.title)) + '">' + CROSS + '</button>';
          var sel = '';
          if (multi(p)) {
            sel = '<select class="blko-soda-wl__select" data-wl-variant="' + h + '" aria-label="' + t + '">' + p.variants.map(function (x) {
              return '<option value="' + esc(x.id) + '"' + (v && x.id === v.id ? ' selected' : '') + (x.available ? '' : ' disabled') + '>' + esc(x.title) + (x.price ? ' · ' + money(x.price) : '') + '</option>';
            }).join('') + '</select>';
          }
          var buy = v && v.id && v.available
            ? '<button type="button" class="blko-soda-wl__add" data-wl-add="' + h + '">' + esc(labelFor(p, v)) + '</button>'
            : '<a class="blko-soda-wl__add" href="' + esc(p.url) + '">' + (v && v.id ? 'Sold out' : 'Choose options') + '</a>';
          return '<li class="blko-soda-wl__item" data-handle="' + h + '"><article class="blko-soda-card blko-soda-wl-card">' +
            '<div class="blko-soda-card__media-wrap"><a class="blko-soda-card__media" href="' + esc(p.url) + '" aria-label="' + t + '">' +
            '<div class="blko-soda-tile" style="--tile-bg:' + esc(p.tint) + '">' +
            (p.image ? '<img class="blko-soda-tile__img blko-soda-tile__img--can" src="' + esc(p.image) + '" alt="' + t + '" width="300" height="300" loading="lazy">' : '') +
            (p.alt ? '<img class="blko-soda-tile__img blko-soda-tile__img--alt" src="' + esc(p.alt) + '" alt="" width="300" height="300" loading="lazy">' : '') +
            (sale ? '<img class="blko-soda-tile__badge" src="' + esc(badge) + '" alt="' + esc(saleLabel) + '" width="64" height="64">' : '') +
            '</div></a>' + ctl + '</div>' +
            '<div class="blko-soda-wl-card__info"><h3 class="blko-soda-wl-card__title"><a href="' + esc(p.url) + '">' + t + '</a></h3>' +
            '<p class="blko-soda-wl-card__price" data-wl-price="' + h + '">' + priceHtml(p, v) + '</p></div>' +
            '<div class="blko-soda-wl__buy">' + sel + buy + '</div></article></li>';
        };
        var skeleton = '<li class="blko-soda-wl__item blko-soda-wl__skel" aria-hidden="true"><div class="blko-soda-tile"></div><i style="width:60%"></i><i style="width:35%"></i></li>';

        var plural = function (n) {
          var one = root.dataset.countOne || '{n} saved item';
          var other = root.dataset.countOther || '{n} saved items';
          return (n === 1 ? one : other).replace('{n}', n);
        };

        var render = function () {
          var my = ++token;
          var handles = sharedList || api.list();
          var pending = handles.filter(function (h) { return !(h in resolved); });
          var shown = handles.filter(function (h) { return resolved[h]; });
          var isEmpty = !pending.length && !shown.length;
          if (grid) {
            grid.hidden = isEmpty;
            grid.setAttribute('aria-busy', pending.length ? 'true' : 'false');
            grid.innerHTML = handles.map(function (h) {
              if (!(h in resolved)) return skeleton;
              return resolved[h] ? card(resolved[h], !!sharedList) : '';
            }).join('');
          }
          if (empty) empty.hidden = !isEmpty;
          if (bar) {
            bar.hidden = isEmpty;
            ['[data-wl-share]', '[data-wl-clear]'].forEach(function (s) { var n = $(s); if (n) n.hidden = !!sharedList; });
          }
          if (shared) shared.hidden = !sharedList || isEmpty;
          if (countEl) countEl.textContent = isEmpty ? '' : plural(pending.length ? handles.length : shown.length);
          if (countEl) countEl.hidden = isEmpty;
          if (pending.length) {
            Promise.all(pending.map(function (h) {
              loading[h] = loading[h] || load(h).then(function (p) { resolved[h] = p; });
              return loading[h];
            })).then(function () { if (token === my) render(); });
          }
        };

        /* actions */
        var cart = function () { return root.closest('blko-soda-cart'); };
        var addToCart = function (items, btn) {
          var c = cart();
          if (!items.length) { toast(T.nothing); return; }
          if (!c || typeof c.add !== 'function') return;
          if (btn) btn.disabled = true;
          var done = function () { if (btn) btn.disabled = false; };
          c.add(items).then(done, done);
        };
        root.addEventListener('click', function (e) {
          var t = e.target;
          var rm = t.closest('[data-wl-remove]');
          if (rm) {
            api.remove(rm.getAttribute('data-wl-remove'));
            toast(T.removed, false);
            return;
          }
          var add = t.closest('[data-wl-add]');
          if (add) {
            var p = resolved[add.getAttribute('data-wl-add')];
            var v = p && variantOf(p);
            if (v && v.id) addToCart([{ id: Number(v.id), quantity: 1 }], add);
            return;
          }
          if (t.closest('[data-wl-add-all]')) {
            var items = [];
            (sharedList || api.list()).forEach(function (h) {
              var p2 = resolved[h];
              var v2 = p2 && variantOf(p2);
              if (v2 && v2.id && v2.available) items.push({ id: Number(v2.id), quantity: 1 });
            });
            addToCart(items, t.closest('[data-wl-add-all]'));
            return;
          }
          if (t.closest('[data-wl-clear]')) {
            api.clear();
            toast(T.cleared, false);
            return;
          }
          if (t.closest('[data-wl-share]')) {
            var url = window.location.href.split(/[?#]/)[0] + '?items=' + api.list().map(encodeURIComponent).join(',');
            var ok = false;
            var done2 = function () { toast(T.copied, false); };
            var legacy = function () {
              var ta = document.createElement('textarea');
              ta.value = url;
              ta.setAttribute('readonly', '');
              ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
              document.body.appendChild(ta);
              ta.select();
              try { ok = document.execCommand('copy'); } catch (er) { ok = false; }
              ta.remove();
              if (ok) done2(); else window.prompt('Copy this link', url);
            };
            if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done2, legacy);
            else legacy();
            root.dataset.lastShare = url;
            return;
          }
          if (t.closest('[data-wl-merge]')) {
            api.addMany((sharedList || []).filter(function (h) { return resolved[h]; }));
            sharedList = null;
            try { window.history.replaceState(null, '', window.location.href.split(/[?#]/)[0]); } catch (er) { /* file:// or sandbox */ }
            toast(T.merged, false);
            render();
          }
        });
        root.addEventListener('change', function (e) {
          var s = e.target.closest && e.target.closest('[data-wl-variant]');
          if (!s) return;
          var h = s.getAttribute('data-wl-variant');
          var p = resolved[h];
          if (!p) return;
          chosen[h] = s.value;
          var v = variantOf(p);
          var item = s.closest('.blko-soda-wl__item');
          var pr = item && item.querySelector('[data-wl-price]');
          var btn = item && item.querySelector('[data-wl-add]');
          if (pr) pr.innerHTML = priceHtml(p, v);
          if (btn && v) btn.textContent = labelFor(p, v);
        });
        this._on = function () { if (!sharedList) render(); };
        window.addEventListener(EVT, this._on);
        render();
      }
      disconnectedCallback() {
        if (this._on) window.removeEventListener(EVT, this._on);
      }
    });
  }

  /* ---- boot ---- */
  var boot = function () {
    paint();
    if (window.MutationObserver) new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
