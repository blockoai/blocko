/* Fizz chrome behavior: mega menu panels, cart page auto-update, cookie consent. Idempotent custom elements, no libraries. */
(function () {
  var define = function (name, ctor) { if (!customElements.get(name)) customElements.define(name, ctor); };

  /* Mega menu: [data-mega-row] activates the matching [data-mega-panel]. Each panel's can row is a blko-soda-slider (blko-soda.js). */
  define('blko-soda-mega', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.bound) return;
      this.dataset.bound = '';
      var root = this;
      var rows = root.querySelectorAll('[data-mega-row]');
      var panels = root.querySelectorAll('[data-mega-panel]');
      var show = function (i) {
        rows.forEach(function (r) { r.classList.toggle('is-active', r.dataset.megaRow === i); });
        panels.forEach(function (p) { p.classList.toggle('is-active', p.dataset.megaPanel === i); });
      };
      rows.forEach(function (r) {
        r.addEventListener('mouseenter', function () { show(r.dataset.megaRow); });
        r.addEventListener('focus', function () { show(r.dataset.megaRow); });
      });
    }
  });

  /* Cart page: steppers and remove post to /cart/change.js, then re-render this section. Wrap lines with [data-cp-key] / [data-cp-to]. */
  define('blko-soda-cartpage', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.bound) return;
      this.dataset.bound = '';
      var root = this;
      var cart = root.closest('blko-soda-cart');
      var base = ((cart && cart.dataset.root) || '/').replace(/\/$/, '');
      var count = function () { var c = root.querySelector('[data-cp-count]'); return c ? c.dataset.cpCount : ''; };
      var last = count();
      var busy = false;
      var swapDrawer = function (sections) {
        var html = sections && sections['cart-drawer'];
        var d = document.querySelector('[data-cart-drawer]');
        if (!html || !d) return;
        var next = new DOMParser().parseFromString(html, 'text/html').querySelector('[data-drawer-content]');
        var cur = d.querySelector('[data-drawer-content]');
        if (next && cur) {
          cur.replaceWith(next);
          document.querySelectorAll('[data-cart-count]').forEach(function (c) { var n = Number(next.dataset.count) || 0; c.textContent = n; c.hidden = n === 0; });
        }
      };
      var rerender = function () {
        var id = root.dataset.sectionId;
        var url = location.pathname + '?section_id=' + encodeURIComponent(id);
        return fetch(url, { headers: { Accept: 'text/html' } }).then(function (r) { return r.text(); }).then(function (html) {
          var next = new DOMParser().parseFromString(html, 'text/html').querySelector('blko-soda-cartpage');
          if (next) { root.innerHTML = next.innerHTML; last = count(); }
        });
      };
      root.addEventListener('click', function (e) {
        var b = e.target.closest && e.target.closest('[data-cp-key]');
        if (!b || busy) return;
        busy = true;
        root.classList.add('is-loading');
        fetch(base + '/cart/change.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ id: b.dataset.cpKey, quantity: Number(b.dataset.cpTo), sections: 'cart-drawer' }) })
          .then(function (r) { return r.json(); })
          .then(function (res) { swapDrawer(res.sections); return rerender(); })
          .catch(function () {})
          .then(function () { busy = false; root.classList.remove('is-loading'); });
      });
      /* Add from the upsell row goes through the cart element; follow the drawer's item count. */
      var d = document.querySelector('[data-cart-drawer]');
      if (d && window.MutationObserver) {
        new MutationObserver(function () {
          if (busy) return;
          var c = d.querySelector('[data-drawer-content]');
          if (c && last !== '' && c.dataset.count !== last) { busy = true; rerender().catch(function () {}).then(function () { busy = false; }); }
        }).observe(d, { childList: true, subtree: true });
      }
    }
  });

  /* Cookie consent. Shopify: Customer Privacy API. Demo ([data-demo]): localStorage "fizz-demo-consent". */
  define('blko-soda-cookie', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.bound) return;
      this.dataset.bound = '';
      var root = this;
      var demo = root.hasAttribute('data-demo');
      var panel = root.querySelector('[data-cookie-panel]');
      var KEY = 'fizz-demo-consent';
      var show = function (withPanel) { root.hidden = false; if (panel) panel.hidden = !withPanel; };
      var hide = function () { root.hidden = true; };
      var read = function () { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
      var choices = function (all) {
        var f = panel ? panel.elements : {};
        var v = function (n) { return all ? true : !!(f[n] && f[n].checked); };
        return { analytics: v('analytics'), marketing: v('marketing'), preferences: v('preferences') };
      };
      var commit = function (c) {
        if (demo) { try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) { /* ignore */ } hide(); return; }
        var api = window.Shopify && window.Shopify.customerPrivacy;
        if (api && api.setTrackingConsent) api.setTrackingConsent(c, function () { hide(); }); else hide();
      };
      var ac = root.querySelector('[data-cookie-accept]');
      var cu = root.querySelector('[data-cookie-custom]');
      if (ac) ac.addEventListener('click', function () { commit(choices(true)); });
      if (cu) cu.addEventListener('click', function () { if (panel) panel.hidden = !panel.hidden; });
      if (panel) panel.addEventListener('submit', function (e) { e.preventDefault(); commit(choices(false)); });
      document.addEventListener('click', function (e) {
        var o = e.target.closest && e.target.closest('[data-cookie-open]');
        if (!o) return;
        e.preventDefault();
        if (demo) { try { localStorage.removeItem(KEY); } catch (err) { /* ignore */ } }
        show(true);
      });
      if (demo) { if (!read()) show(false); return; }
      var regionsOnly = root.dataset.regionsOnly !== 'false';
      var start = function () {
        var api = window.Shopify && window.Shopify.customerPrivacy;
        if (!api) return;
        var cur = api.currentVisitorConsent ? api.currentVisitorConsent() : {};
        var decided = ['analytics', 'marketing', 'preferences'].some(function (k) { return cur && cur[k] === 'yes' || cur && cur[k] === 'no'; });
        if (decided) return;
        if (!regionsOnly || api.shouldShowBanner()) show(false);
      };
      if (window.Shopify && window.Shopify.loadFeatures) {
        window.Shopify.loadFeatures([{ name: 'consent-tracking-api', version: '0.1' }], function (err) { if (!err) start(); });
      }
    }
  });
})();
