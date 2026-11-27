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
        if (demo) {
          root.querySelectorAll('[data-cart-count]').forEach(function (c) { c.textContent = Number(c.textContent || 0) + 1; c.hidden = false; });
          open(); done(); return;
        }
        var fd = new FormData(f);
        var item = { quantity: Number(fd.get('quantity')) || 1, id: Number(fd.get('id')) };
        if (fd.get('selling_plan')) item.selling_plan = Number(fd.get('selling_plan'));
        post('/cart/add.js', { items: [item], sections: 'cart-drawer' })
          .then(function (res) {
            if (res.status && res.status >= 400) { window.alert(res.description || res.message); return; }
            paint(res.sections); open();
          })
          .then(done, done);
      });
    }
  });
})();
