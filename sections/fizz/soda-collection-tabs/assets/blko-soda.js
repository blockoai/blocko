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

  /* Product form: gallery thumbs, variants, one-time vs Subscribe & Save, selling_plan */
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
      var planInput = form.querySelector('[data-selling-plan]');
      var select = form.querySelector('[data-plan-select]');
      var freq = form.querySelector('[data-freq]');
      var btn = form.querySelector('[data-submit]');
      var price = root.querySelector('[data-price]');
      var cmp = root.querySelector('[data-compare]');
      var sync = function () {
        var chosen = Array.prototype.map.call(form.querySelectorAll('[data-option]:checked'), function (i) { return i.value; });
        var v = chosen.length ? data.filter(function (x) { return x.options.join('|') === chosen.join('|'); })[0] : data[0];
        if (!v) { if (btn) btn.disabled = true; return; }
        var idField = form.querySelector('[name=id]');
        if (idField) idField.value = v.id;
        if (btn) { btn.disabled = !v.available; btn.textContent = v.available ? btn.dataset.add : btn.dataset.sold; }
        var type = form.querySelector('[data-purchase-type]:checked');
        var sub = !!(planInput && type && type.value === 'sub');
        var plan = select && v.plans ? v.plans[select.value] : null;
        if (planInput) {
          planInput.disabled = !sub;
          planInput.value = sub && select ? select.value : '';
          if (freq) freq.hidden = !sub;
          var o = form.querySelector('[data-once-price]');
          var s = form.querySelector('[data-sub-price]');
          if (o) o.textContent = v.price;
          if (s && plan) s.textContent = plan;
        }
        var shown = sub && plan ? plan : v.price;
        if (price) price.textContent = shown;
        if (cmp) {
          var c = sub && plan ? v.price : v.compare;
          cmp.hidden = !c;
          cmp.textContent = c || '';
        }
      };
      form.addEventListener('change', sync);
      sync();
    }
  });

  /* Bundles: volume tier cards and a build-your-own variety pack. Posts items to /cart/add through blko-soda-cart. */
  define('blko-soda-bundle', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.bound) return;
      this.dataset.bound = '';
      var root = this;
      var unit = Number(root.dataset.price) || 0;
      var cans = Number(root.dataset.cans) || 1;
      var size = Number(root.dataset.pack) || 3;
      var off = Number(root.dataset.discount) || 0;
      var money = function (c) {
        try { return new Intl.NumberFormat(document.documentElement.lang || 'en', { style: 'currency', currency: root.dataset.currency || 'USD' }).format(c / 100); }
        catch (e) { return (c / 100).toFixed(2); }
      };
      var tiers = root.querySelectorAll('[data-tier]');
      var tierQty = root.querySelector('[data-tier-qty]');
      var tierAdd = root.querySelector('[data-tier-add]');
      var syncTiers = function () {
        var chosen = null;
        tiers.forEach(function (r) {
          var d = Number(r.dataset.off) || 0;
          var per = Math.round(unit * (100 - d) / 100 / cans);
          var label = r.closest('label').querySelector('[data-tier-per]');
          if (label) label.textContent = money(per) + '/can';
          if (r.checked) chosen = r;
        });
        if (!chosen) return;
        var q = Number(chosen.value) || 1;
        var total = Math.round(unit * q * (100 - (Number(chosen.dataset.off) || 0)) / 100);
        if (tierQty) tierQty.value = q;
        if (tierAdd) tierAdd.textContent = tierAdd.dataset.label + ' · ' + money(total);
      };
      var tf = root.querySelector('[data-tier-form]');
      if (tf) { tf.addEventListener('change', syncTiers); syncTiers(); }

      var picks = root.querySelectorAll('[data-pick]');
      var bar = root.querySelector('[data-bar]');
      var progress = root.querySelector('[data-progress]');
      var was = root.querySelector('[data-was]');
      var total = root.querySelector('[data-total]');
      var add = root.querySelector('[data-pack-add]');
      var items = root.querySelector('[data-bundle-items]');
      var counts = new Map();
      var sync = function () {
        var n = 0, sum = 0, list = [];
        picks.forEach(function (p) {
          var c = counts.get(p) || 0;
          n += c; sum += c * Number(p.dataset.price);
          if (c) list.push({ id: Number(p.dataset.id), quantity: c, properties: { _bundle: 'variety-pack' } });
          p.querySelector('[data-count]').textContent = c;
          p.classList.toggle('is-picked', c > 0);
          p.querySelector('[data-minus]').disabled = c === 0;
          if (!p.hasAttribute('data-soldout')) p.querySelector('[data-plus]').disabled = n >= size;
        });
        picks.forEach(function (p) { if (!p.hasAttribute('data-soldout')) p.querySelector('[data-plus]').disabled = n >= size; });
        if (bar) bar.style.width = Math.min(100, n / size * 100) + '%';
        if (progress) progress.textContent = (progress.dataset.template || '{picked} of {total} picked').replace('{picked}', n).replace('{total}', size);
        if (was) { was.textContent = sum && off ? money(sum) : ''; was.hidden = !(sum && off); }
        if (total) total.textContent = money(Math.round(sum * (100 - off) / 100));
        if (items) items.value = JSON.stringify(list);
        if (add) add.disabled = n !== size;
      };
      picks.forEach(function (p) {
        p.querySelector('[data-plus]').addEventListener('click', function () { counts.set(p, (counts.get(p) || 0) + 1); sync(); });
        p.querySelector('[data-minus]').addEventListener('click', function () { counts.set(p, Math.max(0, (counts.get(p) || 0) - 1)); sync(); });
      });
      if (picks.length) sync();
    }
  });

  /* Cart: drawer open/close, ajax add to cart, quantity changes. Wrap the whole page in <blko-soda-cart>. */
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
      var paint = function (sections) {
        var html = sections && sections['cart-drawer'];
        var d = drawer();
        if (!html || !d) return;
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var next = doc.querySelector('[data-drawer-content]');
        var cur = d.querySelector('[data-drawer-content]');
        if (next && cur) cur.replaceWith(next);
        var n = next ? Number(next.dataset.count) : 0;
        root.querySelectorAll('[data-cart-count]').forEach(function (c) { c.textContent = n; c.hidden = n === 0; });
      };
      var post = function (url, body) {
        return fetch(base + url, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) })
          .then(function (r) { return r.json(); });
      };
      root.addEventListener('click', function (e) {
        var t = e.target;
        if (t.closest('[data-cart-open]')) {
          e.preventDefault();
          if (demo) { open(); return; }
          fetch(base + '/?sections=cart-drawer', { headers: { Accept: 'application/json' } })
            .then(function (r) { return r.json(); }).then(paint).then(open).catch(open);
          return;
        }
        if (t.closest('[data-cart-close]')) { close(); return; }
        var q = t.closest('[data-qty]');
        if (q && !demo) {
          var d = drawer(); if (d) d.classList.add('is-loading');
          post('/cart/change.js', { id: q.dataset.qty, quantity: Number(q.dataset.to), sections: 'cart-drawer' })
            .then(function (res) { paint(res.sections); })
            .then(function () { var d2 = drawer(); if (d2) d2.classList.remove('is-loading'); });
        }
      });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
      root.addEventListener('submit', function (e) {
        var f = e.target;
        if (!f.matches || !f.matches('form[action*="/cart/add"]')) return;
        e.preventDefault();
        var btn = f.querySelector('[type=submit]');
        if (btn) btn.disabled = true;
        var done = function () { if (btn) btn.disabled = false; };
        var bundled = f.querySelector('[data-bundle-items]');
        var list = null;
        try { list = bundled && bundled.value ? JSON.parse(bundled.value) : null; } catch (err) { list = null; }
        if (demo) {
          var added = list ? list.reduce(function (s, i) { return s + i.quantity; }, 0) : (Number(new FormData(f).get('quantity')) || 1);
          root.querySelectorAll('[data-cart-count]').forEach(function (c) { c.textContent = Number(c.textContent || 0) + added; c.hidden = false; });
          open(); done(); return;
        }
        var fd = new FormData(f);
        var item = { quantity: Number(fd.get('quantity')) || 1, id: Number(fd.get('id')) };
        if (fd.get('selling_plan')) item.selling_plan = Number(fd.get('selling_plan'));
        post('/cart/add.js', { items: list || [item], sections: 'cart-drawer' })
          .then(function (res) {
            if (res.status && res.status >= 400) { window.alert(res.description || res.message); return; }
            paint(res.sections); open();
          })
          .then(done, done);
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
