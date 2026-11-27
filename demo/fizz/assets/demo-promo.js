/* Fizz demo promo popup. Self-contained: injects markup and CSS. Opens after 4s, once per day (localStorage "fizz-demo-promo"). ?promo=1 forces it open. */
(function () {
  if (window.__fizzDemoPromo) return;
  window.__fizzDemoPromo = true;
  var KEY = 'fizz-demo-promo';
  var script = document.currentScript;
  var base = script && script.src ? script.src.replace(/[^/]*$/, '') : '../assets/';
  var forced = /[?&]promo=1(&|$)/.test(location.search);
  var FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),[tabindex]:not([tabindex="-1"])';
  var CSS = "html.blko-popup-open blko-soda-cookie{visibility:hidden}.blko-soda-popup{position:fixed;inset:0;z-index:120;display:flex;align-items:center;justify-content:center;padding:12px;background:rgba(15,59,46,.55);font-family:var(--font-body, \"Outfit\", sans-serif);opacity:0;visibility:hidden;transition:opacity .25s ease,visibility 0s linear .25s}\n.blko-soda-popup.is-open{opacity:1;visibility:visible;transition-delay:0s}\n.blko-soda-popup__modal{box-sizing:border-box;display:grid;grid-template-columns:1fr 1fr;gap:16px;width:min(846px,100%);min-height:484px;max-height:100%;padding:16px;border-radius:16px;background:#fdf6ea;box-shadow:0 24px 80px rgba(15,59,46,.35);overflow:auto;transform:scale(.96);transition:transform .25s ease}\n.blko-soda-popup.is-open .blko-soda-popup__modal{transform:none}\n.blko-soda-popup__media{min-height:0;border-radius:12px;overflow:hidden;background:#cdf26b}\n.blko-soda-popup__media img{display:block;width:100%;height:100%;object-fit:cover}\n.blko-soda-popup__panel{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;padding:2.25rem 1.75rem 1.25rem;border-radius:12px;background:var(--popup-panel, #0f6b4f);color:#fdf6ea;text-align:center;overflow:hidden;isolation:isolate}\n.blko-soda-popup__confetti{position:absolute;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none;opacity:.7}\n.blko-soda-popup__close{position:absolute;top:10px;right:10px;display:grid;place-items:center;width:28px;height:28px;padding:0;border:0;border-radius:50%;background:transparent;color:#fdf6ea;cursor:pointer}\n.blko-soda-popup__close:hover{background:rgba(253,246,234,.18)}\n.blko-soda-popup__close:focus-visible,.blko-soda-popup__cta:focus-visible,.blko-soda-popup__form input:focus-visible,.blko-soda-popup__fine a:focus-visible{outline:3px solid #fdf6ea;outline-offset:2px}\n.blko-soda-popup__eyebrow{margin:0;font:700 18px/1.2 var(--font-heading, \"Fraunces\", Georgia, serif)}\n.blko-soda-popup__h1,.blko-soda-popup__h2{margin:0;color:var(--popup-headline, #f5f06b);font-family:var(--font-heading, \"Fraunces\", Georgia, serif);font-weight:900;letter-spacing:-.01em}\n.blko-soda-popup__h1{font-size:64px;line-height:1}\n.blko-soda-popup__h2{font-size:40px;line-height:1.05}\n.blko-soda-popup__sub{margin:0;font-size:15px;line-height:1.35}\n.blko-soda-popup__divider{display:flex;align-items:center;gap:.75rem;width:80%;margin:.35rem 0;color:#fdf6ea;font:700 18px/1 var(--font-body, \"Outfit\", sans-serif)}\n.blko-soda-popup__divider::before,.blko-soda-popup__divider::after{content:\"\";flex:1;height:1px;background:rgba(253,246,234,.55)}\n.blko-soda-popup__cta{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:192px;height:52px;margin-top:.75rem;padding:0 1.75rem;border:0;border-radius:999px;background:var(--popup-cta-bg, #f5f06b);color:var(--popup-cta-text, #0f3b2e);font:600 18px/1 var(--font-body, \"Outfit\", sans-serif);text-decoration:none;cursor:pointer;transition:transform .2s ease,filter .2s ease}\n.blko-soda-popup__cta:hover{transform:translateY(-1px);filter:brightness(1.05)}\n.blko-soda-popup__form{display:flex;gap:.4rem;width:100%;max-width:21rem;margin-top:.75rem}\n.blko-soda-popup__form input{flex:1;min-width:0;height:52px;padding:0 1.1rem;border:0;border-radius:999px;background:#fdf6ea;color:#0f3b2e;font:500 16px var(--font-body, \"Outfit\", sans-serif)}\n.blko-soda-popup__form .blko-soda-popup__cta{min-width:0;margin:0;padding:0 1.25rem;font-size:16px}\n.blko-soda-popup__ok{margin:.75rem 0 0;color:var(--popup-headline, #f5f06b);font:700 20px/1.25 var(--font-heading, \"Fraunces\", Georgia, serif)}\n.blko-soda-popup__err{margin:.4rem 0 0;font-size:13px}\n.blko-soda-popup__fine{margin:.75rem 0 0;font-size:11px;line-height:1.4;opacity:.9}\n.blko-soda-popup__fine p{margin:0}\n.blko-soda-popup__fine a{color:inherit;text-decoration:underline}\n@media(max-width:640px){.blko-soda-popup{align-items:flex-start;padding:12px}.blko-soda-popup__modal{grid-template-columns:1fr;grid-template-rows:180px auto;gap:12px;min-height:0;max-height:calc(100dvh - 24px);margin:auto 0}.blko-soda-popup__panel{padding:2rem 1.25rem 1.25rem}.blko-soda-popup__h1{font-size:48px}.blko-soda-popup__h2{font-size:34px}.blko-soda-popup__form{flex-direction:column}}\n@media(prefers-reduced-motion:reduce){.blko-soda-popup,.blko-soda-popup__modal,.blko-soda-popup__cta{transition:none}.blko-soda-popup__modal{transform:none}}\n.blko-soda-popup__form-wrap{display:flex;flex-direction:column;align-items:center;width:100%}";
  var HTML = "<div class=\"blko-soda-popup__modal\"><div class=\"blko-soda-popup__media\"><img src=\"@IMG@\" alt=\"Fizz cans at a party\" width=\"800\" height=\"800\"></div><div class=\"blko-soda-popup__panel\"><svg class=\"blko-soda-popup__confetti\" viewBox=\"0 0 400 452\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M182 242Q182 252 192 252Q182 252 182 262Q182 252 172 252Q182 252 182 242Z\" fill=\"#cdf26b\"/><circle cx=\"46\" cy=\"141\" r=\"2.8\" fill=\"#ff8fb0\"/><circle cx=\"383\" cy=\"427\" r=\"4.8\" fill=\"#8fd3ff\"/><path d=\"M211 28Q211 36 219 36Q211 36 211 44Q211 36 203 36Q211 36 211 28Z\" fill=\"#f5f06b\"/><circle cx=\"102\" cy=\"23\" r=\"4.1\" fill=\"#cdf26b\"/><circle cx=\"184\" cy=\"130\" r=\"6.0\" fill=\"#ff8fb0\"/><path d=\"M329 307Q329 316 338 316Q329 316 329 325Q329 316 320 316Q329 316 329 307Z\" fill=\"#8fd3ff\"/><circle cx=\"157\" cy=\"424\" r=\"5.5\" fill=\"#f5f06b\"/><circle cx=\"10\" cy=\"101\" r=\"5.7\" fill=\"#cdf26b\"/><path d=\"M189 424Q189 434 198 434Q189 434 189 443Q189 434 179 434Q189 434 189 424Z\" fill=\"#ff8fb0\"/><circle cx=\"38\" cy=\"282\" r=\"5.2\" fill=\"#8fd3ff\"/><circle cx=\"113\" cy=\"48\" r=\"3.7\" fill=\"#f5f06b\"/><path d=\"M376 330Q376 337 384 337Q376 337 376 345Q376 337 369 337Q376 337 376 330Z\" fill=\"#cdf26b\"/><circle cx=\"104\" cy=\"54\" r=\"2.7\" fill=\"#ff8fb0\"/><circle cx=\"60\" cy=\"288\" r=\"2.9\" fill=\"#8fd3ff\"/><path d=\"M379 348Q379 357 388 357Q379 357 379 366Q379 357 370 357Q379 357 379 348Z\" fill=\"#f5f06b\"/><circle cx=\"346\" cy=\"101\" r=\"3.9\" fill=\"#cdf26b\"/><circle cx=\"335\" cy=\"287\" r=\"2.9\" fill=\"#ff8fb0\"/><path d=\"M386 94Q386 102 394 102Q386 102 386 111Q386 102 377 102Q386 102 386 94Z\" fill=\"#8fd3ff\"/><circle cx=\"38\" cy=\"49\" r=\"4.5\" fill=\"#f5f06b\"/><circle cx=\"182\" cy=\"424\" r=\"4.2\" fill=\"#cdf26b\"/><path d=\"M69 391Q69 402 80 402Q69 402 69 414Q69 402 57 402Q69 402 69 391Z\" fill=\"#ff8fb0\"/><circle cx=\"367\" cy=\"95\" r=\"5.8\" fill=\"#8fd3ff\"/><circle cx=\"345\" cy=\"271\" r=\"4.0\" fill=\"#f5f06b\"/><path d=\"M49 14Q49 27 62 27Q49 27 49 39Q49 27 37 27Q49 27 49 14Z\" fill=\"#cdf26b\"/><circle cx=\"323\" cy=\"268\" r=\"3.5\" fill=\"#ff8fb0\"/><circle cx=\"77\" cy=\"321\" r=\"2.7\" fill=\"#8fd3ff\"/><path d=\"M243 123Q243 131 252 131Q243 131 243 139Q243 131 235 131Q243 131 243 123Z\" fill=\"#f5f06b\"/><circle cx=\"16\" cy=\"126\" r=\"4.1\" fill=\"#cdf26b\"/><circle cx=\"33\" cy=\"86\" r=\"3.8\" fill=\"#ff8fb0\"/></svg><button type=\"button\" class=\"blko-soda-popup__close\" data-popup-close aria-label=\"Close\"><svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6L6 18\"/></svg></button><p class=\"blko-soda-popup__eyebrow\">Fizzy Friday came early</p><h2 class=\"blko-soda-popup__h1\" id=\"fizz-demo-promo-title\">50% off</h2><p class=\"blko-soda-popup__sub\">Sitewide on orders of 2 or more cases</p><div class=\"blko-soda-popup__divider\" aria-hidden=\"true\">+</div><p class=\"blko-soda-popup__h2\">Free shipping</p><p class=\"blko-soda-popup__sub\">on orders of $50+</p><a class=\"blko-soda-popup__cta\" data-popup-cta href=\"collection.html\">Shop the sale</a><div class=\"blko-soda-popup__fine\"><p>*Some exclusions may apply. Offer cannot be combined with other offers. We use your information in accordance with our <a href=\"faq.html\">Privacy Policy</a>.</p></div></div></div>";

  var seen = function () {
    try { var t = Number(localStorage.getItem(KEY)); return !!t && Date.now() - t < 86400000; } catch (e) { return false; }
  };
  var blocked = function () { return !!document.querySelector('[data-cart-drawer].is-open, blko-soda-cookie:not([hidden])'); };

  var init = function () {
    var style = document.createElement('style');
    style.id = 'fizz-demo-promo-css';
    style.textContent = CSS;
    document.head.appendChild(style);
    var root = document.createElement('div');
    root.className = 'blko-soda-popup';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-labelledby', 'fizz-demo-promo-title');
    root.setAttribute('aria-hidden', 'true');
    root.innerHTML = HTML.replace('@IMG@', base + 'catalog/banners/social-5.svg');
    document.body.appendChild(root);

    var prev = null, overflow = '', loadSeen = false;
    var isOpen = function () { return root.classList.contains('is-open'); };
    var open = function () {
      if (isOpen()) return;
      prev = document.activeElement;
      root.classList.add('is-open');
      document.documentElement.classList.add('blko-popup-open');
      root.removeAttribute('aria-hidden');
      overflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
      setTimeout(function () { var c = root.querySelector('[data-popup-cta]'); if (c) c.focus({ preventScroll: true }); }, 30);
    };
    var close = function () {
      if (!isOpen()) return;
      root.classList.remove('is-open');
      document.documentElement.classList.remove('blko-popup-open');
      root.setAttribute('aria-hidden', 'true');
      document.documentElement.style.overflow = overflow;
      if (prev && prev.focus && document.contains(prev)) prev.focus({ preventScroll: true });
    };
    root.addEventListener('click', function (e) { if (e.target === root || e.target.closest('[data-popup-close]')) close(); });
    root.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.stopPropagation(); close(); return; }
      if (e.key !== 'Tab') return;
      var items = root.querySelectorAll(FOCUSABLE);
      var a = items[0], z = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === a || !root.contains(document.activeElement))) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    });

    if (forced) { requestAnimationFrame(function () { requestAnimationFrame(open); }); return; }
    var attempt = function () {
      if (loadSeen || seen()) return;
      if (blocked()) { setTimeout(attempt, 500); return; }
      loadSeen = true;
      try { localStorage.setItem(KEY, String(Date.now())); } catch (e) { /* once per page load */ }
      open();
    };
    setTimeout(attempt, 4000);
  };
  if (document.body) init(); else document.addEventListener('DOMContentLoaded', init);
})();
