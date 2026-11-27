/* Fizz soda storefront behavior. Custom elements are registered idempotently. No libraries. */
(function () {
  var define = function (name, ctor) { if (!customElements.get(name)) customElements.define(name, ctor); };

  /* Rotating slides (announcement bar, press quotes). Slides: [data-slide], dots: [data-dot], arrows: [data-dir] */
  define('blko-soda-rotator', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.bound) return;
      this.dataset.bound = '';
      var slides = this.querySelectorAll('[data-slide]');
      var dots = this.querySelectorAll('[data-dot]');
      if (slides.length < 2) return;
      var i = 0, timer = null, ms = Number(this.dataset.interval) || 5000;
      var show = function (n) {
        i = (n + slides.length) % slides.length;
        slides.forEach(function (s, k) { s.classList.toggle('is-active', k === i); });
        dots.forEach(function (d, k) { d.classList.toggle('is-active', k === i); });
      };
      var start = function () { stop(); timer = setInterval(function () { show(i + 1); }, ms); };
      var stop = function () { if (timer) clearInterval(timer); timer = null; };
      this.querySelectorAll('[data-dir]').forEach(function (b) {
        b.addEventListener('click', function () { show(i + Number(b.dataset.dir)); start(); });
      });
      dots.forEach(function (d, k) { d.addEventListener('click', function () { show(k); start(); }); });
      this.addEventListener('mouseenter', stop);
      this.addEventListener('mouseleave', start);
      this._stop = stop;
      start();
    }
    disconnectedCallback() { if (this._stop) this._stop(); }
  });

  /* Tabs: [data-tab] buttons toggle [data-panel] panels by matching value */
  define('blko-soda-tabs', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.bound) return;
      this.dataset.bound = '';
      var tabs = this.querySelectorAll('[data-tab]');
      var panels = this.querySelectorAll('[data-panel]');
      tabs.forEach(function (t) {
        t.addEventListener('click', function () {
          tabs.forEach(function (x) {
            x.classList.toggle('is-active', x === t);
            x.setAttribute('aria-selected', x === t ? 'true' : 'false');
          });
          panels.forEach(function (p) { p.classList.toggle('is-active', p.dataset.panel === t.dataset.tab); });
        });
      });
    }
  });

  /* Collection jump pills: highlight the group in view */
  define('blko-soda-jump', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.bound) return;
      this.dataset.bound = '';
      var links = Array.prototype.slice.call(this.querySelectorAll('a[href^="#"]'));
      if (!links.length || !('IntersectionObserver' in window)) return;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id); });
        });
      }, { rootMargin: '-30% 0px -60% 0px' });
      links.forEach(function (a) { var g = document.getElementById(a.getAttribute('href').slice(1)); if (g) io.observe(g); });
    }
  });

  /* Header: mobile menu toggle */
  define('blko-soda-nav', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.bound) return;
      this.dataset.bound = '';
      var toggle = this.querySelector('[data-toggle]');
      var menu = this.querySelector('[data-menu]');
      if (!toggle || !menu) return;
      toggle.addEventListener('click', function () {
        var open = menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
  });

  /* Product form: gallery thumbs, variants, one-time vs Subscribe & Save, selling_plan from product.selling_plan_groups */
  define('blko-soda-product', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.bound) return;
      this.dataset.bound = '';
      var root = this;
      var main = root.querySelector('[data-main-image]');
      /* Demo flavor switcher: ?flavor=<handle> re-skins the page from the [data-flavors] catalog JSON */
      var fl = root.querySelector('[data-flavors]');
      if (fl) {
        try {
          var handle = new URLSearchParams(location.search).get('flavor');
          var f = JSON.parse(fl.textContent).filter(function (x) { return x.handle === handle; })[0];
          if (f) {
            var scope = root.closest('[data-flavor-scope]') || root;
            scope.style.setProperty('--tile-bg', f.tint);
            scope.style.setProperty('--flv', f.color);
            scope.style.setProperty('--flv-accent', f.accent);
            root.querySelectorAll('[data-flavor-can]').forEach(function (i) { i.src = f.can; });
            root.querySelectorAll('[data-flavor-name]').forEach(function (i) { i.textContent = f.name; });
            root.querySelectorAll('.blko-soda-tile,.blko-soda-sticky__thumb,.blko-soda-flavor summary .blko-soda-flavor__dot').forEach(function (i) { i.style.setProperty('--tile-bg', f.tint); });
            var set = function (sel, fn) { var n = root.querySelector(sel); if (n) fn(n); };
            set('[data-flavor-title]', function (n) { n.textContent = f.name; });
            set('[data-flavor-line]', function (n) { n.textContent = f.line; });
            set('[data-flavor-desc]', function (n) { n.textContent = f.desc; });
            set('[data-thumb-can]', function (n) { n.src = f.can; n.closest('[data-thumb]').dataset.thumb = f.can; });
            set('[data-thumb-spot]', function (n) { n.src = f.spot; n.closest('[data-thumb]').dataset.thumb = f.spot; });
            set('[data-thumb-pack]', function (n) { n.src = f.pack; n.closest('[data-thumb]').dataset.thumb = f.pack; });
            set('[data-variants]', function (n) { n.textContent = f.variants; var v = JSON.parse(f.variants)[0]; var idf = root.querySelector('[name=id]'); if (idf) idf.value = v.id; });
            root.querySelectorAll('[data-flavor-link]').forEach(function (a) { if (a.dataset.flavorLink === handle) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
            document.title = f.name + ' · Fizz';
          }
        } catch (e) { /* demo only */ }
      }
      root.querySelectorAll('[data-thumb]').forEach(function (b) {
        b.addEventListener('click', function () {
          if (main) {
            main.src = b.dataset.thumb;
            var tl = main.closest('.blko-soda-tile');
            if (tl) tl.classList.toggle('is-full', b.hasAttribute('data-full'));
          }
          root.querySelectorAll('[data-thumb]').forEach(function (x) { x.classList.toggle('is-active', x === b); });
        });
      });
      var form = root.querySelector('[data-product-form]');
      var json = root.querySelector('[data-variants]');
      if (!form || !json) return;
      var data = [];
      try { data = JSON.parse(json.textContent); } catch (e) { return; }
      var box = form.querySelector('[data-purchase]');
      var planInput = form.querySelector('[data-selling-plan]');
      var select = form.querySelector('[data-plan-select]');
      var freq = form.querySelector('[data-freq]');
      var save = form.querySelector('[data-save]');
      var btn = form.querySelector('[data-submit]');
      var price = root.querySelector('[data-price]');
      var cmp = root.querySelector('[data-compare]');
      var saveWord = box ? box.dataset.saveLabel || 'Save' : 'Save';
      var sync = function () {
        var chosen = Array.prototype.map.call(form.querySelectorAll('[data-option]:checked'), function (i) { return i.value; });
        var v = chosen.length ? data.filter(function (x) { return x.options.join('|') === chosen.join('|'); })[0] : data[0];
        if (!v) { if (btn) btn.disabled = true; return; }
        var idField = form.querySelector('[name=id]');
        if (idField) idField.value = v.id;
        if (btn) { btn.disabled = !v.available; btn.textContent = v.available ? btn.dataset.add : btn.dataset.sold; }
        var plans = v.plans || {};
        var hasPlans = !!(planInput && Object.keys(plans).length);
        if (box) box.hidden = !hasPlans;
        if (select) {
          Array.prototype.forEach.call(select.options, function (o) {
            var p = plans[o.value];
            o.hidden = !p;
            o.disabled = !p;
            if (p) o.textContent = o.dataset.name + (p.pct > 0 ? ' (' + saveWord + ' ' + p.pct + '%)' : '') + ' · ' + p.price;
          });
          if (!plans[select.value]) {
            var first = Array.prototype.filter.call(select.options, function (o) { return !o.disabled; })[0];
            if (first) select.value = first.value;
          }
        }
        var type = form.querySelector('[data-purchase-type]:checked');
        var forced = !!(box && box.dataset.required === 'true');
        var sub = hasPlans && (forced || !!(type && type.value === 'sub'));
        var plan = select && hasPlans ? plans[select.value] : null;
        if (planInput) {
          planInput.disabled = !sub;
          planInput.value = sub && select ? select.value : '';
          if (freq) freq.hidden = !sub;
          var o = form.querySelector('[data-once-price]');
          var s = form.querySelector('[data-sub-price]');
          if (o) o.textContent = v.price;
          if (s && plan) s.textContent = plan.price;
          if (save && plan) { save.textContent = saveWord + ' ' + plan.pct + '%'; save.hidden = !(plan.pct > 0); }
        }
        var shown = sub && plan ? plan.price : v.price;
        if (price) price.textContent = shown;
        if (cmp) {
          var c = sub && plan && plan.pct > 0 ? v.price : v.compare;
          cmp.hidden = !c;
          cmp.textContent = c || '';
        }
      };
      form.addEventListener('change', sync);
      sync();

      /* Sticky add-to-cart bar: slides in once the main buy button has scrolled out above the viewport */
      var bar = root.querySelector('[data-sticky]');
      if (bar && btn) {
        var sOpt = bar.querySelector('[data-sticky-opt]');
        var sPrice = bar.querySelector('[data-sticky-price]');
        var sCmp = bar.querySelector('[data-sticky-compare]');
        var sBtn = bar.querySelector('[data-sticky-add]');
        var paint = function () {
          var chosen = Array.prototype.map.call(form.querySelectorAll('[data-option]:checked'), function (i) { return i.value; });
          var type = form.querySelector('[data-purchase-type]:checked');
          var plan = select && type && type.value === 'sub' && !(box && box.hidden) ? select.options[select.selectedIndex] : null;
          if (sOpt) sOpt.textContent = chosen.concat(plan ? [plan.dataset.name] : []).join(' · ');
          if (sPrice && price) sPrice.textContent = price.textContent;
          if (sCmp && cmp) { sCmp.textContent = cmp.textContent; sCmp.hidden = cmp.hidden || !cmp.textContent.trim(); }
          if (sBtn) { sBtn.disabled = btn.disabled; sBtn.textContent = btn.textContent; }
        };
        form.addEventListener('change', paint);
        paint();
        var show = function (on) {
          bar.classList.toggle('is-visible', on);
          bar.setAttribute('aria-hidden', on ? 'false' : 'true');
          if (sBtn) sBtn.tabIndex = on ? 0 : -1;
        };
        if (sBtn) sBtn.addEventListener('click', function () { if (form.requestSubmit) form.requestSubmit(); else btn.click(); });
        if ('IntersectionObserver' in window) {
          new IntersectionObserver(function (entries) {
            var e = entries[entries.length - 1];
            paint();
            show(!e.isIntersecting && e.boundingClientRect.top < 0);
          }).observe(btn);
        }
      }
    }
  });

  /* AOV.ai offers: read the shop metafield avada_bundle.offer (JSON array, sometimes a JSON string). */
  var aovOffers = function (scope) {
    var el = scope.querySelector('[data-aov-offers]');
    var list = [];
    try { list = JSON.parse(el.textContent); if (typeof list === 'string') list = JSON.parse(list); } catch (e) { list = []; }
    if (list && !Array.isArray(list)) list = list.id ? [list] : Object.keys(list).map(function (k) { return list[k]; });
    return (list || []).filter(function (o) { return o && o.status === 'active'; });
  };
  var gidOf = function (id) { return String(id == null ? '' : id).split('/').pop(); };
  var triggers = function (o, pid) { return (o.triggerProducts || []).some(function (p) { return gidOf(p.id) === pid; }); };
  /* Best discount of an offer as { pct, fixed } where fixed is in cents. */
  var offerDiscount = function (o) {
    var rows = (o.discountInformation && o.discountInformation.length) ? o.discountInformation : [o];
    var best = { pct: 0, fixed: 0 };
    rows.forEach(function (r) {
      var v = Number(r.discountValue) || 0;
      if (r.discountType === 'percentage' && v > best.pct) best = { pct: v, fixed: 0 };
      else if (r.discountType !== 'percentage' && !best.pct && v * 100 > best.fixed) best = { pct: 0, fixed: Math.round(v * 100) };
    });
    return best;
  };

  /* Bundles: volume tiers (AOV.ai offer or section tiers) and a build-your-own variety pack. */
  define('blko-soda-bundle', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.bound) return;
      this.dataset.bound = '';
      var root = this;
      var pid = gidOf(root.dataset.productId);
      var unit = Number(root.dataset.price) || 0;
      var cans = Number(root.dataset.cans) || 1;
      var size = Number(root.dataset.pack) || 3;
      var packOff = Number(root.dataset.discount) || 0;
      var packFixed = 0;
      var saveWord = root.dataset.saveLabel || 'Save';
      var buyWord = root.dataset.buyLabel || 'Buy';
      var money = function (c) {
        try { return new Intl.NumberFormat(document.documentElement.lang || 'en', { style: 'currency', currency: root.dataset.currency || 'USD' }).format(c / 100); }
        catch (e) { return (c / 100).toFixed(2); }
      };
      var el = function (tag, cls, text, parent) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text) n.textContent = text;
        if (parent) parent.appendChild(n);
        return n;
      };
      var offers = aovOffers(root);
      var volume = offers.filter(function (o) { return /volume/i.test(o.type || '') && triggers(o, pid); })[0] || null;
      var mix = offers.filter(function (o) { return /mix/i.test(o.type || '') && triggers(o, pid); })[0] ||
        offers.filter(function (o) { return /mix/i.test(o.type || '') && !(o.triggerProducts || []).length; })[0] || null;
      var note = function (name, aovText) {
        var n = root.querySelector('[data-note="' + name + '"]');
        if (!n) return;
        if (aovText) n.textContent = aovText; else n.hidden = false;
      };
      var add = function (items, code, btn) {
        var cart = root.closest('blko-soda-cart');
        var label = btn ? btn.textContent : '';
        if (btn) btn.disabled = true;
        var p = cart && cart.add ? cart.add(items, code) : fetch('/cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: items }) }).then(function () { location.href = '/cart'; });
        return p.then(function () { if (btn) btn.disabled = false; }, function (err) {
          if (!btn) return;
          btn.textContent = (err && err.message) || label;
          setTimeout(function () { btn.textContent = label; btn.disabled = false; }, 2500);
        });
      };

      /* Volume tiers */
      var tierBlock = root.querySelector('[data-tier-block]');
      var tf = root.querySelector('[data-tier-form]');
      var tierBox = root.querySelector('[data-tiers]');
      var tierQty = root.querySelector('[data-tier-qty]');
      var tierAdd = root.querySelector('[data-tier-add]');
      if (volume && tierBox && volume.discountInformation && volume.discountInformation.length) {
        tierBox.textContent = '';
        var def = 0;
        volume.discountInformation.forEach(function (t, i) {
          var pct = t.discountType === 'percentage' ? Number(t.discountValue) || 0 : 0;
          var fixed = t.discountType === 'percentage' ? 0 : Math.round((Number(t.discountValue) || 0) * 100);
          if (t.isDefault) def = i;
          var lab = el('label', 'blko-soda-tier', '', tierBox);
          var inp = el('input', '', '', lab);
          inp.type = 'radio'; inp.name = 'tier'; inp.value = t.quantity; inp.setAttribute('data-tier', '');
          inp.dataset.off = pct; inp.dataset.fixed = fixed;
          inp.checked = i === def;
          var badge = el('span', 'blko-soda-tier__badge', t.isDefault && t.badgeText ? t.badgeText : '', lab);
          badge.hidden = !(t.isDefault && t.badgeText);
          el('span', 'blko-soda-tier__name', buyWord + ' ' + t.quantity, lab);
          el('span', 'blko-soda-tier__save', pct > 0 ? saveWord + ' ' + pct + '%' : (fixed > 0 ? saveWord + ' ' + money(fixed) : ' '), lab);
          var per = el('span', 'blko-soda-tier__per', '', lab);
          per.setAttribute('data-tier-per', '');
        });
        if (tierBlock) tierBlock.hidden = false;
        note('tiers', root.dataset.noteAov);
      } else if (tierBlock && !tierBox.children.length) {
        tierBlock.hidden = true;
        volume = null;
      } else {
        volume = null;
        note('tiers');
      }
      var tierTotal = function (r) {
        var q = Number(r.value) || 1;
        return Math.max(0, Math.round(unit * q * (100 - (Number(r.dataset.off) || 0)) / 100) - (Number(r.dataset.fixed) || 0));
      };
      var syncTiers = function () {
        var chosen = null;
        root.querySelectorAll('[data-tier]').forEach(function (r) {
          var q = Number(r.value) || 1;
          var label = r.closest('label').querySelector('[data-tier-per]');
          if (label) label.textContent = money(Math.round(tierTotal(r) / q / cans)) + '/' + (root.dataset.canLabel || 'can');
          if (r.checked) chosen = r;
        });
        if (!chosen) return;
        if (tierQty) tierQty.value = Number(chosen.value) || 1;
        if (tierAdd) tierAdd.textContent = tierAdd.dataset.label + ' · ' + money(tierTotal(chosen));
      };
      if (tf) {
        tf.addEventListener('change', syncTiers);
        syncTiers();
        tf.addEventListener('submit', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var chosen = tf.querySelector('[data-tier]:checked');
          var item = { id: Number(tf.querySelector('[name=id]').value), quantity: chosen ? Number(chosen.value) || 1 : 1 };
          var code = null;
          if (volume) {
            item.properties = { _aov_bundles: JSON.stringify({ offerId: volume.id }) };
            if (chosen && (Number(chosen.dataset.off) > 0 || Number(chosen.dataset.fixed) > 0)) code = volume.code || null;
          }
          add([item], code, tierAdd);
        });
      }

      /* Variety pack */
      if (mix) {
        var d = offerDiscount(mix);
        packOff = d.pct;
        packFixed = d.fixed;
        note('pack', root.dataset.noteAov);
      } else {
        note('pack');
      }
      var picks = root.querySelectorAll('[data-pick]');
      var bar = root.querySelector('[data-bar]');
      var progress = root.querySelector('[data-progress]');
      var hint = root.querySelector('[data-hint]');
      var was = root.querySelector('[data-was]');
      var total = root.querySelector('[data-total]');
      var badgeEl = root.querySelector('[data-off]');
      var addPack = root.querySelector('[data-pack-add]');
      var items = root.querySelector('[data-bundle-items]');
      var pf = root.querySelector('[data-pack-form]');
      var counts = new Map();
      var picked = function () {
        var list = [];
        picks.forEach(function (p) { var c = counts.get(p) || 0; if (c) list.push({ id: Number(p.dataset.id), quantity: c }); });
        return list;
      };
      var sync = function () {
        var n = 0, sum = 0;
        picks.forEach(function (p) { var c = counts.get(p) || 0; n += c; sum += c * Number(p.dataset.price); });
        var full = n === size;
        picks.forEach(function (p) {
          var c = counts.get(p) || 0;
          p.querySelector('[data-count]').textContent = c;
          p.classList.toggle('is-picked', c > 0);
          p.querySelector('[data-minus]').disabled = c === 0;
          if (!p.hasAttribute('data-soldout')) p.querySelector('[data-plus]').disabled = n >= size;
        });
        var saves = packOff > 0 || packFixed > 0;
        var after = Math.max(0, Math.round(sum * (100 - packOff) / 100) - packFixed);
        if (bar) bar.style.width = Math.min(100, n / size * 100) + '%';
        if (progress) progress.textContent = (progress.dataset.template || '{picked} of {total} picked').replace('{picked}', n).replace('{total}', size);
        if (was) { was.textContent = full && saves ? money(sum) : ''; was.hidden = !(full && saves); }
        if (total) total.textContent = money(full && saves ? after : sum);
        var offText = packOff > 0 ? packOff + '%' : money(packFixed);
        if (badgeEl) { badgeEl.textContent = saveWord + ' ' + offText; badgeEl.hidden = !(full && saves); }
        if (hint) {
          hint.hidden = full || !saves;
          hint.textContent = (hint.dataset.template || 'Pick {left} more to save {discount}').replace('{left}', size - n).replace('{discount}', offText);
        }
        var list = picked();
        if (items) items.value = JSON.stringify(list);
        if (addPack) addPack.disabled = !full;
      };
      picks.forEach(function (p) {
        p.querySelector('[data-plus]').addEventListener('click', function () { counts.set(p, (counts.get(p) || 0) + 1); sync(); });
        p.querySelector('[data-minus]').addEventListener('click', function () { counts.set(p, Math.max(0, (counts.get(p) || 0) - 1)); sync(); });
      });
      if (picks.length) sync();
      if (pf) {
        pf.addEventListener('submit', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var list = picked();
          var n = list.reduce(function (s, i) { return s + i.quantity; }, 0);
          if (n !== size) return;
          var group = Math.random().toString(36).slice(2, 5).toUpperCase();
          list.forEach(function (i) {
            i.properties = mix
              ? { _aov_offerId: mix.id, _aov_offerType: 'mix-match-bundle', _aov_bundleGroup: mix.id + '|' + group + '|0' }
              : { _bundle: 'variety-pack' };
          });
          add(list, mix && (packOff > 0 || packFixed > 0) ? mix.code || null : null, addPack);
        });
      }
    }
  });

  /* Cart: drawer open/close, ajax add to cart (any form or [data-add-to-cart] button), quantity changes. Wrap the page in <blko-soda-cart>. */
  define('blko-soda-cart', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.bound) return;
      this.dataset.bound = '';
      var root = this;
      var demo = root.hasAttribute('data-demo');
      var base = (root.dataset.root || '/').replace(/\/$/, '');
      var drawer = function () { return root.querySelector('[data-cart-drawer]'); };
      var open = function () { var d = drawer(); if (d) { d.classList.add('is-open'); document.documentElement.style.overflow = 'hidden'; } };
      var close = function () { var d = drawer(); if (d) d.classList.remove('is-open'); document.documentElement.style.overflow = ''; };
      var bump = function (n) {
        root.querySelectorAll('[data-cart-count]').forEach(function (c) { c.textContent = n; c.hidden = n === 0; });
      };
      var paint = function (sections) {
        var html = sections && sections['cart-drawer'];
        var d = drawer();
        if (!html || !d) return;
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var next = doc.querySelector('[data-drawer-content]');
        var cur = d.querySelector('[data-drawer-content]');
        if (next && cur) cur.replaceWith(next);
        bump(next ? Number(next.dataset.count) : 0);
      };
      var refresh = function () {
        return fetch(base + '/?sections=cart-drawer', { headers: { Accept: 'application/json' } })
          .then(function (r) { return r.json(); }).then(paint);
      };
      var post = function (url, body) {
        return fetch(base + url, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) })
          .then(function (r) { return r.json(); });
      };
      /* Public: add line items, optionally apply a discount code, then show the drawer. Used by the bundle section. */
      this.add = function (items, code) {
        if (demo) {
          var added = items.reduce(function (s, i) { return s + (i.quantity || 1); }, 0);
          var cur = 0;
          root.querySelectorAll('[data-cart-count]').forEach(function (c) { cur = Math.max(cur, Number(c.textContent) || 0); });
          bump(cur + added);
          open();
          return Promise.resolve();
        }
        return post('/cart/add.js', { items: items }).then(function (res) {
          if (res.status && res.status >= 400) throw new Error(res.description || res.message);
          if (!code) return null;
          return fetch(base + '/cart.js', { headers: { Accept: 'application/json' } }).then(function (r) { return r.json(); }).then(function (c) {
            var codes = (c.discount_codes || []).map(function (x) { return x.code; });
            if (codes.indexOf(code) < 0) codes.push(code);
            return post('/cart/update.js', { discount: codes.join(',') });
          });
        }).then(refresh).then(open);
      };
      var fail = function (btn) {
        return function (err) {
          if (btn) { btn.disabled = false; }
          window.alert((err && err.message) || 'Could not add to cart');
        };
      };
      root.addEventListener('click', function (e) {
        var t = e.target;
        if (t.closest('[data-cart-open]')) {
          e.preventDefault();
          if (demo) { open(); return; }
          refresh().then(open, open);
          return;
        }
        if (t.closest('[data-cart-close]')) { close(); return; }
        var q = t.closest('[data-qty]');
        if (q && !demo) {
          var d = drawer(); if (d) d.classList.add('is-loading');
          post('/cart/change.js', { id: q.dataset.qty, quantity: Number(q.dataset.to), sections: 'cart-drawer' })
            .then(function (res) { paint(res.sections); })
            .then(function () { var d2 = drawer(); if (d2) d2.classList.remove('is-loading'); }, function () { var d3 = drawer(); if (d3) d3.classList.remove('is-loading'); });
          return;
        }
        var b = t.closest('[data-add-to-cart]');
        if (b && !b.closest('form') && b.dataset.id) {
          e.preventDefault();
          var item = { id: Number(b.dataset.id), quantity: Number(b.dataset.quantity) || 1 };
          if (b.dataset.sellingPlan) item.selling_plan = Number(b.dataset.sellingPlan);
          b.disabled = true;
          root.add([item]).then(function () { b.disabled = false; }, fail(b));
        }
      });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
      root.addEventListener('submit', function (e) {
        var f = e.target;
        if (!f.matches || !f.matches('form[action*="/cart/add"]')) return;
        e.preventDefault();
        var btn = f.querySelector('[type=submit]');
        if (btn) btn.disabled = true;
        var fd = new FormData(f);
        var item = { quantity: Number(fd.get('quantity')) || 1, id: Number(fd.get('id')) };
        if (fd.get('selling_plan')) item.selling_plan = Number(fd.get('selling_plan'));
        root.add([item]).then(function () { if (btn) btn.disabled = false; }, fail(btn));
      });
    }
  });

  /* Recommendations ("You may also like"): the server renders the fallback cards. When data-url is set, swap in product
     recommendations for the first cart line via the Section Rendering API. Cart changes re-render the drawer or cart page,
     which reconnects this element; results are cached per product id and the fetch is debounced. */
  var recsCache = {};
  var recsTimer = null;
  define('blko-soda-recs', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.bound) return;
      this.dataset.bound = '';
      var root = this;
      var url = root.dataset.url;
      var pid = root.dataset.productId;
      if (!url || !pid) return;
      var limit = Number(root.dataset.limit) || 4;
      var skip = (root.dataset.cartIds || '').split(',').filter(Boolean);
      var intent = root.dataset.intent === 'complementary' ? 'complementary' : 'related';
      var key = pid + '|' + intent + '|' + limit;
      var apply = function (html) {
        if (!root.isConnected) return;
        var doc = new DOMParser().parseFromString(html || '', 'text/html');
        var cards = Array.prototype.filter.call(doc.querySelectorAll('[data-rec-id]'), function (c) { return skip.indexOf(c.dataset.recId) < 0; }).slice(0, limit);
        var list = root.querySelector('[data-recs-list]');
        if (!cards.length || !list) return;
        list.textContent = '';
        cards.forEach(function (c, i) {
          if (root.hasAttribute('data-tiles')) { var t = c.querySelector('.blko-soda-rec__img'); if (t) t.style.setProperty('--tile-bg', 'var(--color-pastel-' + (i % 5 + 1) + ', #ffc9d6)'); }
          list.appendChild(document.importNode(c, true));
        });
        root.hidden = false;
      };
      var load = function () {
        if (!recsCache[key]) {
          var q = '?product_id=' + encodeURIComponent(pid) + '&limit=' + Math.min(10, limit + skip.length) + '&intent=' + intent + '&section_id=blko-soda-cart-recs';
          recsCache[key] = fetch(url + q, { headers: { Accept: 'text/html' } }).then(function (r) { return r.ok ? r.text() : ''; }).catch(function () { return ''; });
          recsCache[key].then(function (h) { if (!h) delete recsCache[key]; });
        }
        recsCache[key].then(apply);
      };
      if (recsCache[key]) { load(); return; }
      clearTimeout(recsTimer);
      recsTimer = setTimeout(load, 250);
    }
  });

  /* Store locator: filter [data-store] by flavor chips, text and zip prefix. */
  define('blko-soda-locator', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.bound) return;
      this.dataset.bound = '';
      var root = this, stores = this.querySelectorAll('[data-store]');
      var q = this.querySelector('[data-q]'), zip = this.querySelector('[data-zip]');
      var count = this.querySelector('[data-count]'), empty = this.querySelector('[data-empty]');
      var chips = this.querySelectorAll('[data-flavor]');
      var apply = function () {
        var text = (q.value || '').trim().toLowerCase();
        var z = (zip.value || '').trim().slice(0, 3);
        var on = [].filter.call(chips, function (c) { return c.getAttribute('aria-pressed') === 'true'; }).map(function (c) { return c.dataset.flavor; });
        var n = 0;
        stores.forEach(function (s) {
          var fl = (s.dataset.flavors || '').split(',');
          var ok = (!text || (s.dataset.text || '').indexOf(text) > -1) &&
            (!z || (s.dataset.zip || '').indexOf(z) === 0) &&
            on.every(function (f) { return fl.indexOf(f) > -1; });
          s.hidden = !ok;
          if (ok) n++;
        });
        count.textContent = n;
        empty.hidden = n > 0;
      };
      chips.forEach(function (c) {
        c.addEventListener('click', function () { c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); apply(); });
      });
      q.addEventListener('input', apply);
      zip.addEventListener('input', apply);
      this.querySelector('form').addEventListener('submit', function (e) { e.preventDefault(); apply(); });
      apply();
    }
  });

  /* FAQ category filter. */
  define('blko-soda-qa', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.bound) return;
      this.dataset.bound = '';
      var items = this.querySelectorAll('[data-item]'), tabs = this.querySelectorAll('[data-cat]:not([data-item])');
      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          tabs.forEach(function (o) { o.setAttribute('aria-pressed', o === tab ? 'true' : 'false'); });
          items.forEach(function (i) { i.hidden = !!tab.dataset.cat && i.dataset.cat !== tab.dataset.cat; });
        });
      });
    }
  });

  /* Arrow slider: <blko-soda-slider> holds [data-prev], [data-next], .blko-soda-slider__viewport (overflow hidden) and
     .blko-soda-slider__track (translateX). No native scrolling: arrows and touch swipes move one page of fully visible items.
     Optional attributes: loop (endless: the track is padded with clones on both sides and one step moves by a page of slides, the first
     and last slides wrap around) and edge-arrows (CSS only: arrows sit at the left and right edge of the row). In loop mode the first full slide
     starts after a lead so partial slides peek at both edges.
     Re-measures on resize, on content or [hidden] changes in the track, and when the element is re-inserted (cart drawer re-renders). */
  define('blko-soda-slider', class extends HTMLElement {
    connectedCallback() {
      var root = this;
      if (root._on) return;
      root._on = true;
      var pos = 0;
      var loop = root.hasAttribute('loop');
      var idx = 0, copies = 0, built = '', lead = 0, page = 1, count = 0;
      var view = function () { return root.querySelector('.blko-soda-slider__viewport'); };
      var track = function () { return root.querySelector('.blko-soda-slider__track'); };
      var items = function () {
        var t = track();
        return t ? Array.prototype.filter.call(t.children, function (c) { return !c.hidden && c.offsetWidth > 0; }) : [];
      };
      var left = function (el) { return el.offsetLeft; };
      var maxPos = function () { var v = view(), t = track(); return v && t ? Math.max(0, t.offsetWidth - v.clientWidth) : 0; };
      var snap = function (fn) {
        var t = track();
        t.style.transition = 'none';
        fn();
        void t.offsetWidth;
        t.style.transition = '';
      };
      var build = function () {
        var t = track(), v = view();
        if (!t || !v || !v.clientWidth) return false;
        var o = Array.prototype.filter.call(t.children, function (c) { return !c.hasAttribute('data-clone'); });
        if (o.length < 2 || !o[0].offsetWidth) return false;
        var step = o[0].offsetWidth, vw = v.clientWidth;
        var key = vw + '|' + o.length + '|' + step;
        if (key !== built) {
          Array.prototype.slice.call(t.querySelectorAll(':scope > [data-clone]')).forEach(function (c) { c.remove(); });
          copies = Math.ceil(vw * 1.5 / (o.length * step)) + 1;
          var before = document.createDocumentFragment(), after = document.createDocumentFragment();
          for (var c = 0; c < copies; c++) {
            o.forEach(function (el) {
              [before, after].forEach(function (frag) {
                var k = el.cloneNode(true);
                k.setAttribute('data-clone', '');
                k.setAttribute('aria-hidden', 'true');
                k.removeAttribute('id');
                Array.prototype.forEach.call(k.querySelectorAll('[id]'), function (n) { n.removeAttribute('id'); });
                Array.prototype.forEach.call(k.querySelectorAll('a,button,input,select,textarea'), function (n) { n.tabIndex = -1; });
                frag.appendChild(k);
              });
            });
          }
          t.insertBefore(before, o[0]);
          t.appendChild(after);
          built = key;
          if (root._mo) root._mo.takeRecords();
        }
        count = o.length;
        var n = Math.max(1, Math.floor(vw / step)), rest = vw - n * step;
        if (rest < step * 0.3 && n > 1) { n--; rest += step; }
        lead = rest / 2;
        page = Math.max(1, n - 1);
        return true;
      };
      var applyLoop = function () {
        var t = track(), v = view();
        if (!t || !v) return;
        var prev = root.querySelector('[data-prev]'), next = root.querySelector('[data-next]');
        var was = built, ok = build();
        if (prev) { prev.hidden = !ok; prev.disabled = false; }
        if (next) { next.hidden = !ok; next.disabled = false; }
        root.classList.toggle('is-fit', !ok);
        if (!ok) { t.style.transform = ''; return; }
        var lim = copies * count - page - 1;
        idx = Math.max(-lim, Math.min(idx, count + lim));
        var el = t.children[copies * count + idx];
        if (el) {
          var set = function () { pos = el.offsetLeft - lead; t.style.transform = 'translateX(' + (-pos) + 'px)'; };
          if (was !== built) snap(set); else set();
        }
        if (v.scrollLeft) v.scrollLeft = 0;
      };
      var wrap = function () {
        if (!loop || !count || (idx >= 0 && idx < count)) return;
        snap(function () { idx = ((idx % count) + count) % count; applyLoop(); });
      };
      var apply = function () {
        if (loop) return applyLoop();
        var t = track(), v = view();
        if (!t || !v) return;
        var max = maxPos();
        pos = Math.max(0, Math.min(pos, max));
        t.style.transform = pos ? 'translateX(' + (-pos) + 'px)' : '';
        if (v.scrollLeft) v.scrollLeft = 0;
        var prev = root.querySelector('[data-prev]'), next = root.querySelector('[data-next]');
        var fits = v.clientWidth > 0 && max <= 1;
        if (prev) { prev.hidden = fits; prev.disabled = pos <= 1; }
        if (next) { next.hidden = fits; next.disabled = pos >= max - 1; }
        root.classList.toggle('is-fit', fits);
      };
      var go = function (dir) {
        if (loop) { build(); idx += dir * page; applyLoop(); return; }
        var v = view(), list = items();
        if (!v || !list.length) return;
        var vw = v.clientWidth, max = maxPos(), target = pos, i;
        if (dir > 0) {
          for (i = 0; i < list.length; i++) { if (left(list[i]) + list[i].offsetWidth > pos + vw + 1) break; }
          target = i < list.length ? left(list[i]) : max;
        } else {
          for (i = list.length - 1; i >= 0; i--) { if (left(list[i]) < pos - 1) break; }
          if (i < 0) target = 0;
          else {
            var k = i;
            while (k > 0 && left(list[i]) + list[i].offsetWidth - left(list[k - 1]) <= vw + 1) k--;
            target = left(list[k]);
          }
        }
        pos = Math.max(0, Math.min(target, max));
        apply();
      };
      var reveal = function (el) {
        var v = view(), a = el, t = track();
        while (a && a.parentNode !== t) a = a.parentNode;
        if (!a) return;
        if (loop) {
          var at = a.offsetLeft - pos;
          if (count && (at < 0 || at + a.offsetWidth > v.clientWidth)) { idx = Array.prototype.indexOf.call(t.children, a) - copies * count; applyLoop(); }
          return;
        }
        var l = left(a), r = l + a.offsetWidth;
        if (l < pos) pos = l; else if (r > pos + v.clientWidth) pos = r - v.clientWidth;
        apply();
      };
      root.addEventListener('click', function (e) {
        if (root._swiped) { root._swiped = false; if (!e.target.closest('[data-prev],[data-next]')) { e.preventDefault(); e.stopPropagation(); return; } }
        var b = e.target.closest && e.target.closest('[data-prev],[data-next]');
        if (b && root.contains(b) && !b.disabled) go(b.hasAttribute('data-next') ? 1 : -1);
      }, true);
      root.addEventListener('focusin', function (e) { var t = track(); if (t && t.contains(e.target)) reveal(e.target); });
      root.addEventListener('scroll', function (e) { if (e.target && e.target.scrollLeft) e.target.scrollLeft = 0; }, true);
      var sx = 0, sy = 0, down = false;
      root.addEventListener('pointerdown', function (e) {
        if (e.pointerType === 'mouse' || !e.target.closest('.blko-soda-slider__viewport')) return;
        down = true; sx = e.clientX; sy = e.clientY; root._swiped = false;
      });
      root.addEventListener('pointerup', function (e) {
        if (!down) return;
        down = false;
        var dx = e.clientX - sx, dy = e.clientY - sy;
        if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy)) { root._swiped = true; go(dx < 0 ? 1 : -1); setTimeout(function () { root._swiped = false; }, 400); }
      });
      root.addEventListener('pointercancel', function () { down = false; });
      var again = function () { requestAnimationFrame(apply); };
      root.addEventListener('transitionend', function (e) { if (loop && e.target === track() && e.propertyName === 'transform') wrap(); });
      if (window.ResizeObserver) {
        root._ro = new ResizeObserver(again);
        root._ro.observe(root);
        var v0 = view(); if (v0) root._ro.observe(v0);
        var t0 = track(); if (t0) root._ro.observe(t0);
      }
      if (window.MutationObserver) {
        root._mo = new MutationObserver(again);
        root._mo.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden'] });
      }
      window.addEventListener('resize', again);
      root._off = function () { window.removeEventListener('resize', again); };
      apply();
    }
    disconnectedCallback() {
      if (this._ro) this._ro.disconnect();
      if (this._mo) this._mo.disconnect();
      if (this._off) this._off();
      this._on = false;
    }
  });
})();
