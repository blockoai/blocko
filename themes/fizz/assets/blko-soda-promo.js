/* Fizz promo popup: timed, exit intent or scroll trigger, once per X days, focus trap, theme editor aware. Idempotent custom element, no libraries. */
(function () {
  if (customElements.get('blko-soda-popup')) return;
  var FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])';

  customElements.define('blko-soda-popup', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.bound) return;
      this.dataset.bound = '';
      var root = this;
      var d = root.dataset;
      var design = !!(window.Shopify && window.Shopify.designMode);
      var trigger = d.trigger || 'timer';
      var delay = Math.max(0, Number(d.delay) || 0) * 1000;
      var scrollPct = Math.min(100, Math.max(1, Number(d.scroll) || 40));
      var days = Math.max(0, Number(d.days) || 0);
      var KEY = 'blko-soda-popup-' + (d.sectionId || 'main');
      var seenThisLoad = false;
      var prev = null;
      var lockedOverflow = '';
      var timers = [];
      var wait = null;
      var done = false;

      var isOpen = function () { return root.classList.contains('is-open'); };
      var blocked = function () {
        var drawer = document.querySelector('[data-cart-drawer].is-open');
        var cookie = document.querySelector('blko-soda-cookie:not([hidden])');
        var modal = document.querySelector('dialog[open]');
        return !!(drawer || cookie || modal);
      };
      var seenRecently = function () {
        if (seenThisLoad) return true;
        try {
          var t = Number(localStorage.getItem(KEY));
          return !!t && Date.now() - t < days * 86400000;
        } catch (e) { return false; }
      };
      var remember = function () {
        seenThisLoad = true;
        try { localStorage.setItem(KEY, String(Date.now())); } catch (e) { /* storage blocked: once per page load */ }
      };

      var open = function () {
        if (isOpen()) return;
        prev = document.activeElement;
        root.classList.add('is-open');
        root.removeAttribute('aria-hidden');
        lockedOverflow = document.documentElement.style.overflow;
        document.documentElement.style.overflow = 'hidden';
        var first = root.querySelector('[data-popup-close]') || root;
        window.setTimeout(function () { var f = root.querySelector('input[type=email]') || root.querySelector('[data-popup-cta]') || first; f.focus({ preventScroll: true }); }, 30);
      };
      var close = function () {
        if (!isOpen()) return;
        root.classList.remove('is-open');
        root.setAttribute('aria-hidden', 'true');
        document.documentElement.style.overflow = lockedOverflow;
        if (prev && prev.focus && document.contains(prev)) prev.focus({ preventScroll: true });
        prev = null;
      };

      /* Show once the page is clear of the cart drawer and the cookie banner. */
      var tryShow = function () {
        if (done || isOpen()) return;
        if (!design && seenRecently()) { done = true; return; }
        if (blocked()) {
          if (!wait) wait = window.setInterval(function () { if (!blocked()) { window.clearInterval(wait); wait = null; tryShow(); } }, 500);
          return;
        }
        done = true;
        remember();
        open();
      };

      root.addEventListener('click', function (e) {
        if (e.target === root || e.target.closest('[data-popup-close]')) close();
      });
      root.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { e.stopPropagation(); close(); return; }
        if (e.key !== 'Tab') return;
        var items = Array.prototype.filter.call(root.querySelectorAll(FOCUSABLE), function (el) { return el.offsetParent !== null; });
        if (!items.length) return;
        var a = items[0], z = items[items.length - 1];
        if (e.shiftKey && (document.activeElement === a || !root.contains(document.activeElement))) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      });

      /* Theme editor: open while the section is selected, close on deselect. */
      if (design) {
        document.addEventListener('shopify:section:select', function (e) { if (e.target.contains(root) || root.contains(e.target)) open(); });
        document.addEventListener('shopify:section:deselect', function (e) { if (e.target.contains(root) || root.contains(e.target)) close(); });
        if (/customer_posted=true/.test(location.search)) open();
        return;
      }

      /* Email capture just posted (Shopify returns ?customer_posted=true): show the success state now, whatever the frequency. */
      if (/customer_posted=true/.test(location.search)) { done = true; remember(); open(); return; }

      if (trigger === 'exit') {
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
        var onLeave = function (e) { if (e.clientY <= 0 && !e.relatedTarget) { document.removeEventListener('mouseout', onLeave); tryShow(); } };
        document.addEventListener('mouseout', onLeave);
      } else if (trigger === 'scroll') {
        var onScroll = function () {
          var h = document.documentElement.scrollHeight - window.innerHeight;
          if (h > 0 && window.scrollY / h * 100 >= scrollPct) { window.removeEventListener('scroll', onScroll); tryShow(); }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
      } else {
        timers.push(window.setTimeout(tryShow, delay));
      }
    }
  });
})();
