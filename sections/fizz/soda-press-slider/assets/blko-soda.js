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
      root.querySelectorAll('[data-thumb]').forEach(function (b) {
        b.addEventListener('click', function () {
          if (main) main.src = b.dataset.thumb;
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
})();
