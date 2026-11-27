/* Fizz static demo only. Answers the Shopify cart calls blko-soda.js makes (no backend in the demo).
   Cart lives in localStorage under "fizz-demo-cart". Not part of the Shopify theme. */
(function () {
  if (window.__blkoDemoCart) return;
  window.__blkoDemoCart = true;

  var KEY = 'fizz-demo-cart';
  var THRESHOLD = 3500;
  var src = (document.currentScript && document.currentScript.src) || location.href;
  var url = function (rel) { return new URL(rel, src).href; };
  var IMG = {
    cherry: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=700&q=80',
    orange: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80',
    lime: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=700&q=80',
    mango: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=700&q=80',
    lemon: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=700&q=80',
    mojito: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=80'
  };
  var CATALOG = {
    1: ['Cherry Pop', '12-pack', 2900, IMG.cherry],
    2: ['Cherry Pop', '24-pack', 5400, IMG.cherry],
    10: ['Cherry Pop', '12-pack', 2900, IMG.cherry],
    11: ['Orange Burst', '12-pack', 2900, IMG.orange],
    12: ['Strawberry Lime', '12-pack', 2900, IMG.lime],
    13: ['Mango Tango', '12-pack', 2900, IMG.mango],
    14: ['Lemon Mint', '12-pack', 2900, IMG.lemon],
    15: ['Lime Mojito', '12-pack', 2900, IMG.mojito],
    16: ['Lemon Lime Zing', '12-pack', 2900, IMG.lemon],
    17: ['Tropical Punch', '12-pack', 2900, IMG.mango],
    18: ['Strawberry Fizz', '12-pack', 2900, IMG.lime],
    19: ['Mint Lime Fizz', '12-pack', 2400, IMG.mojito]
  };
  var PLANS = { 101: 'Every 2 weeks', 102: 'Every 4 weeks', 103: 'Every 8 weeks' };
  var PLAN_OFF = 15;

  var money = function (c) { return '$' + (c / 100).toFixed(2); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  var load = function () {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* storage blocked */ }
    return [{ id: 1, quantity: 1, plan: 0, props: {} }, { id: 11, quantity: 1, plan: 0, props: {} }];
  };
  var lines = load();
  var save = function () { try { localStorage.setItem(KEY, JSON.stringify(lines)); } catch (e) { /* ignore */ } };
  var keyOf = function (l) { return l.id + ':' + (l.plan || 0) + ':' + JSON.stringify(l.props || {}); };

  /* Price one line: unit price (plan applied), discount allocations, final price */
  var price = function (l) {
    var c = CATALOG[l.id] || ['Item', '', 0, ''];
    var unit = l.plan ? Math.round(c[2] * (100 - PLAN_OFF) / 100) : c[2];
    var original = c[2] * l.quantity;
    var line = unit * l.quantity;
    var disc = 0, title = '';
    if (l.props && l.props._bundle) { disc = Math.round(line * 0.1); title = 'Variety pack 10%'; }
    else if (!l.plan && !(l.props && Object.keys(l.props).length)) {
      if (l.quantity >= 3) { disc = Math.round(line * 0.15); title = 'Volume discount 15%'; }
      else if (l.quantity === 2) { disc = Math.round(line * 0.1); title = 'Volume discount 10%'; }
    }
    return { c: c, original: original, final: line - disc, disc: disc, title: title };
  };
  var count = function () { return lines.reduce(function (s, l) { return s + l.quantity; }, 0); };
  var total = function () { return lines.reduce(function (s, l) { return s + price(l).final; }, 0); };

  var drawerHtml = function () {
    var n = count();
    var t = total();
    var h = '<div data-drawer-content data-count="' + n + '"><div class="blko-soda-drawer__head"><h2>Your cart' + (n ? ' (' + n + ')' : '') + '</h2><button type="button" class="blko-soda-drawer__close" data-cart-close aria-label="Close">&times;</button></div>';
    var left = THRESHOLD - t;
    var pct = Math.min(100, Math.floor(t * 100 / THRESHOLD));
    h += '<div class="blko-soda-ship"><p>' + (left > 0 ? 'You are ' + money(left) + ' away from free shipping!' : 'You unlocked free shipping!') + '</p><div class="blko-soda-ship__track"><span style="width:' + pct + '%"></span></div></div>';
    h += '<div class="blko-soda-drawer__items">';
    if (!lines.length) {
      h += '<div class="blko-soda-drawer__empty"><p>Your cart is empty. Let\'s fix that.</p><a class="blko-soda-drawer__btn" href="' + url('../collection.html') + '">Shop flavors</a></div>';
    }
    lines.forEach(function (l) {
      var p = price(l), k = esc(keyOf(l)), pdp = url('../templates/pdp.html');
      h += '<div class="blko-soda-line"><a href="' + pdp + '"><img src="' + esc(p.c[3]) + '" alt="' + esc(p.c[0]) + '" width="84" height="84" loading="lazy"></a><div>' +
        '<a class="blko-soda-line__title" href="' + pdp + '">' + esc(p.c[0]) + '</a>' +
        '<p class="blko-soda-line__meta">' + esc(p.c[1]) + '</p>' +
        (l.plan ? '<p class="blko-soda-line__meta">Subscription: ' + esc(PLANS[l.plan] || 'Subscribe & Save') + '</p>' : '') +
        (p.disc ? '<p class="blko-soda-line__discount">' + esc(p.title) + ' (-' + money(p.disc) + ')</p>' : '') +
        '<div class="blko-soda-line__qty"><button type="button" data-qty="' + k + '" data-to="' + (l.quantity - 1) + '" aria-label="Decrease quantity">&minus;</button><span>' + l.quantity + '</span><button type="button" data-qty="' + k + '" data-to="' + (l.quantity + 1) + '" aria-label="Increase quantity">+</button></div>' +
        '<button type="button" class="blko-soda-line__remove" data-qty="' + k + '" data-to="0">Remove</button></div>' +
        '<p class="blko-soda-line__price">' + (p.final < (l.plan ? p.final : p.original) ? '<s>' + money(p.original) + '</s> ' : '') + money(p.final) + '</p></div>';
    });
    h += '</div>';
    if (lines.length) {
      h += '<div class="blko-soda-drawer__foot"><p class="blko-soda-drawer__sub"><span>Subtotal</span><span>' + money(t) + '</span></p><a class="blko-soda-drawer__btn blko-soda-drawer__btn--block" href="#" data-checkout>Check out</a></div>';
    }
    return h + '</div>';
  };

  var paintDom = function () {
    var html = drawerHtml();
    document.querySelectorAll('[data-cart-drawer] [data-drawer-content]').forEach(function (cur) {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      cur.replaceWith(doc.querySelector('[data-drawer-content]'));
    });
    var n = count();
    document.querySelectorAll('[data-cart-count]').forEach(function (c) { c.textContent = n; c.hidden = n === 0; });
  };

  var cartJson = function () {
    return {
      item_count: count(),
      total_price: total(),
      original_total_price: lines.reduce(function (s, l) { return s + price(l).original; }, 0),
      currency: 'USD',
      discount_codes: [],
      items: lines.map(function (l) {
        var p = price(l);
        return { key: keyOf(l), id: l.id, variant_id: l.id, quantity: l.quantity, title: p.c[0] + ' - ' + p.c[1], product_title: p.c[0], variant_title: p.c[1], selling_plan_allocation: l.plan ? { selling_plan: { id: l.plan, name: PLANS[l.plan] } } : null, properties: l.props || {}, original_line_price: p.original, final_line_price: p.final, line_price: p.final };
      })
    };
  };
  var reply = function (body, status) {
    return Promise.resolve(new Response(JSON.stringify(body), { status: status || 200, headers: { 'Content-Type': 'application/json' } }));
  };
  var withSections = function (body, wants) {
    if (wants) { body.sections = { 'cart-drawer': '<div>' + drawerHtml() + '</div>' }; }
    return body;
  };

  var nativeFetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    var u;
    try { u = new URL(typeof input === 'string' ? input : input.url, location.href); } catch (e) { return nativeFetch(input, init); }
    var path = u.pathname;
    var body = {};
    try { body = init && init.body ? JSON.parse(init.body) : {}; } catch (e) { body = {}; }
    var wants = u.searchParams.get('sections') === 'cart-drawer' || body.sections === 'cart-drawer';
    if (/\/cart\/add\.js$/.test(path)) {
      var items = body.items || [body];
      var bad = items.filter(function (i) { return !CATALOG[Number(i.id)]; })[0];
      if (bad) return reply({ status: 422, message: 'Cannot find variant', description: 'The item you are trying to add is not available in this demo.' }, 422);
      items.forEach(function (i) {
        var l = { id: Number(i.id), quantity: Number(i.quantity) || 1, plan: Number(i.selling_plan) || 0, props: i.properties || {} };
        var hit = lines.filter(function (x) { return keyOf(x) === keyOf(l); })[0];
        if (hit) hit.quantity += l.quantity; else lines.push(l);
      });
      save();
      paintDom();
      return reply(withSections(body.items ? { items: items } : items[0], wants));
    }
    if (/\/cart\/change\.js$/.test(path)) {
      var line = body.line ? lines[Number(body.line) - 1] : lines.filter(function (x) { return keyOf(x) === String(body.id) || String(x.id) === String(body.id); })[0];
      if (line) {
        line.quantity = Math.max(0, Number(body.quantity) || 0);
        lines = lines.filter(function (x) { return x.quantity > 0; });
        save();
        paintDom();
      }
      return reply(withSections(cartJson(), wants));
    }
    if (/\/cart\/update\.js$/.test(path)) {
      if (body.updates) {
        var upd = body.updates;
        Object.keys(upd).forEach(function (k) {
          var l = lines.filter(function (x) { return String(x.id) === k || keyOf(x) === k; })[0];
          if (l) l.quantity = Math.max(0, Number(upd[k]) || 0);
        });
        lines = lines.filter(function (x) { return x.quantity > 0; });
        save();
        paintDom();
      }
      return reply(withSections(cartJson(), wants));
    }
    if (/\/cart\.js$/.test(path)) return reply(cartJson());
    if (u.searchParams.get('sections') === 'cart-drawer') {
      return reply({ 'cart-drawer': '<div>' + drawerHtml() + '</div>' });
    }
    return nativeFetch(input, init);
  };

  /* Check out: demo store, so close the drawer and say so */
  var toast = function (text) {
    var t = document.createElement('div');
    t.className = 'blko-demo-toast';
    t.setAttribute('role', 'status');
    t.textContent = text;
    t.style.cssText = 'position:fixed;left:50%;bottom:1.5rem;z-index:200;transform:translateX(-50%);padding:.8rem 1.4rem;border-radius:999px;background:var(--color-text, #0f3b2e);color:var(--color-bg-alt, #f3e8cd);font:700 .95rem var(--font-body, "Outfit", sans-serif);box-shadow:0 10px 30px rgba(0,0,0,.25)';
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2800);
  };
  document.addEventListener('click', function (e) {
    var c = e.target.closest && e.target.closest('[data-checkout]');
    if (!c) return;
    e.preventDefault();
    document.querySelectorAll('[data-cart-drawer]').forEach(function (d) { d.classList.remove('is-open'); });
    document.documentElement.style.overflow = '';
    toast('Demo store: checkout is turned off.');
  });

  paintDom();
})();
