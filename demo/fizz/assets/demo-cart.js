/* Fizz static demo only. Answers the Shopify cart calls blko-soda.js makes (no backend in the demo).
   Cart lives in localStorage under "fizz-demo-cart". Not part of the Shopify theme. */
(function () {
  if (window.__blkoDemoCart) return;
  window.__blkoDemoCart = true;

  var KEY = 'fizz-demo-cart';
  var THRESHOLD = 3500;
  var src = (document.currentScript && document.currentScript.src) || location.href;
  var url = function (rel) { return new URL(rel, src).href; };
  /* Catalog cans (assets/catalog/cans). Row: [name, pack, cents, can image, compare-at cents, tile bg, handle] */
  var can = function (h) { return url('catalog/cans/' + h + '.svg'); };
  /* Variant ids match the [data-variants] JSON on the product pages; values come from catalog/products.json. */
  var CATALOG = {
    1: ['Cherry Pop', '12-pack', 2900, can('cherry-pop'), 3400, '#fde1e3', 'cherry-pop'],
    2: ['Cherry Pop', '24-pack', 5400, can('cherry-pop'), 0, '#fde1e3', 'cherry-pop'],
    11: ['Orange Burst', '12-pack', 2900, can('orange-burst'), 0, '#fde9d2', 'orange-burst'],
    111: ['Orange Burst', '24-pack', 5400, can('orange-burst'), 0, '#fde9d2', 'orange-burst'],
    12: ['Strawberry Lime', '12-pack', 2900, can('strawberry-lime'), 0, '#fde2ea', 'strawberry-lime'],
    112: ['Strawberry Lime', '24-pack', 5400, can('strawberry-lime'), 0, '#fde2ea', 'strawberry-lime'],
    16: ['Lemon Lime Zing', '12-pack', 2900, can('lemon-lime-zing'), 0, '#eef6cf', 'lemon-lime-zing'],
    116: ['Lemon Lime Zing', '24-pack', 5400, can('lemon-lime-zing'), 0, '#eef6cf', 'lemon-lime-zing'],
    13: ['Mango Tango', '12-pack', 2900, can('mango-tango'), 3400, '#fff0cc', 'mango-tango'],
    113: ['Mango Tango', '24-pack', 5400, can('mango-tango'), 0, '#fff0cc', 'mango-tango'],
    15: ['Mint Mojito', '12-pack', 2900, can('mint-mojito'), 0, '#d6f1ea', 'mint-mojito'],
    115: ['Mint Mojito', '24-pack', 5400, can('mint-mojito'), 0, '#d6f1ea', 'mint-mojito'],
    20: ['Grape Soda', '12-pack', 2900, can('grape-soda'), 0, '#e8defa', 'grape-soda'],
    120: ['Grape Soda', '24-pack', 5400, can('grape-soda'), 0, '#e8defa', 'grape-soda'],
    21: ['Root Beer', '12-pack', 2900, can('root-beer'), 0, '#f0e1d1', 'root-beer'],
    121: ['Root Beer', '24-pack', 5400, can('root-beer'), 0, '#f0e1d1', 'root-beer'],
    10: ['Cherry Pop', '12-pack', 2900, can('cherry-pop'), 3400, '#fde1e3', 'cherry-pop'],
    14: ['Lemon Lime Zing', '12-pack', 2900, can('lemon-lime-zing'), 0, '#eef6cf', 'lemon-lime-zing'],
    17: ['Mango Tango', '12-pack', 2900, can('mango-tango'), 3400, '#fff0cc', 'mango-tango'],
    18: ['Strawberry Lime', '12-pack', 2900, can('strawberry-lime'), 0, '#fde2ea', 'strawberry-lime'],
    19: ['Mint Mojito', '12-pack', 2900, can('mint-mojito'), 0, '#d6f1ea', 'mint-mojito'],
    300: ['Fan Favorites Variety Pack', '4 flavors \u00b7 12 cans', 3600, url('catalog/variety-fan-favorites.svg'), 0, '#fff0cc', 'fan-favorites'],
    301: ['Build Your Own 12-Pack', '4 flavors \u00b7 12 cans', 3600, url('catalog/variety-fan-favorites.svg'), 0, '#fff0cc', 'build-your-own'],
    /* demo-bundles.js pages: base price 0, the line carries its own price in hidden _price / _compare / _disc / _sub properties */
    310: ['Mix & Match Case', 'Mix & match', 0, url('catalog/case-mix-match.svg'), 0, '#fff0cc', 'mix-match-case'],
    311: ['Fizz Gift Box', 'Gift box', 0, url('catalog/gift-box.svg'), 0, '#fde1e3', 'fizz-gift-box'],
    312: ['Monthly Fizz Box', 'Subscription box', 0, url('catalog/monthly-box.svg'), 0, '#d6f1ea', 'monthly-fizz-box'],
    313: ['Starter Kit', 'Kit', 0, url('catalog/starter-kit.svg'), 0, '#e8defa', 'starter-kit']
  };
  /* Where a line links to: the variety pack has its own page, flavors use the flavor switcher on pdp.html. */
  var PAGES = { 'fan-favorites': 'pdp-bundle', 'build-your-own': 'pdp-only-bundle', 'mix-match-case': 'pdp-bundle-size', 'fizz-gift-box': 'pdp-bundle-gift', 'monthly-fizz-box': 'pdp-bundle-subscription', 'starter-kit': 'pdp-bundle-starter' };
  var pdpOf = function (c) { return PAGES[c[6]] ? url('../templates/' + PAGES[c[6]] + '.html') : url('../templates/pdp.html') + '?flavor=' + c[6]; };
  /* Visible line properties (no leading underscore), the same rule the theme drawer uses. */
  var metaHtml = function (l, cls) {
    var out = '';
    Object.keys(l.props || {}).forEach(function (k) { if (k.charAt(0) !== '_' && l.props[k]) out += '<p' + (cls ? ' class="' + cls + '"' : '') + '>' + esc(k) + ': ' + esc(l.props[k]) + '</p>'; });
    return out;
  };
  var UPSELL = [1, 11, 12, 13, 16, 15, 20, 21];
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
    var c = CATALOG[l.id] || ['Item', '', 0, '', 0, '#fde1e3', ''];
    var pr = l.props || {};
    if (pr._price) {
      /* priced by the page (demo-bundles.js): unit price already has every discount, _compare is the undiscounted price */
      var u = Number(pr._price), w = Math.max(u, Number(pr._compare) || 0);
      if (pr._sub) c = [c[0], pr._sub].concat(c.slice(2));
      return { c: c, original: w * l.quantity, compare: w * l.quantity, final: u * l.quantity, disc: (w - u) * l.quantity, title: pr._disc || '' };
    }
    var unit = l.plan ? Math.round(c[2] * (100 - PLAN_OFF) / 100) : c[2];
    var original = c[2] * l.quantity;
    var line = unit * l.quantity;
    var disc = 0, title = '';
    if (l.props && l.props._bundle) { disc = Math.round(line * 0.1); title = 'Variety pack 10%'; }
    else if (!l.plan && !(l.props && (l.props._bundle || l.props._aov_offerId))) {
      if (l.quantity >= 3) { disc = Math.round(line * 0.15); title = 'Volume discount 15%'; }
      else if (l.quantity === 2) { disc = Math.round(line * 0.1); title = 'Volume discount 10%'; }
    }
    var compare = Math.max(original, (c[4] || 0) * l.quantity);
    if (l.plan && !title) title = 'Subscribe & Save ' + PLAN_OFF + '%';
    return { c: c, original: original, compare: compare, final: line - disc, disc: disc, title: title };
  };
  var count = function () { return lines.reduce(function (s, l) { return s + l.quantity; }, 0); };
  var total = function () { return lines.reduce(function (s, l) { return s + price(l).final; }, 0); };

  var X_ICON = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  var TRASH = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6"/></svg>';
  var WAVE = '<svg class="blko-soda-drawer__wave" viewBox="0 0 480 24" preserveAspectRatio="none" aria-hidden="true"><path d="M0 12Q30 0 60 12T120 12T180 12T240 12T300 12T360 12T420 12T480 12V24H0Z" fill="currentColor"/></svg>';
  var priceHtml = function (p) { return (p.compare > p.final ? '<s>' + money(p.compare) + '</s>' : '') + money(p.final); };
  var savedTotal = function () { return lines.reduce(function (s, l) { var p = price(l); return s + Math.max(0, p.compare - p.final); }, 0); };
  var unlocked = function () { return lines.some(function (l) { var p = price(l); return p.disc > 0 || l.plan; }); };

  /* Recommendation cards: same markup as snippets/blko-soda-rec-card.liquid. 12-pack variants whose flavor is not in the cart, in UPSELL order. */
  var recPick = function (max) {
    var inCart = lines.map(function (l) { return (CATALOG[l.id] || [])[6]; });
    return UPSELL.filter(function (id) { return inCart.indexOf(CATALOG[id][6]) < 0; }).slice(0, max);
  };
  var recCard = function (id, tile) {
    var c = CATALOG[id], pdp = url('../templates/pdp.html') + '?flavor=' + c[6];
    return '<li class="blko-soda-rec" data-rec-id="' + id + '"><a class="blko-soda-rec__img" href="' + pdp + '"' + (tile ? ' style="--tile-bg:' + c[5] + '"' : '') + '><img src="' + esc(c[3]) + '" alt="' + esc(c[0]) + '" width="100" height="100" loading="lazy"></a>' +
      '<a class="blko-soda-rec__name" href="' + pdp + '">' + esc(c[0]) + '</a>' +
      '<p class="blko-soda-rec__price">' + (c[4] > c[2] ? '<s>' + money(c[4]) + '</s>' : '') + '<span>' + money(c[2]) + '</span></p>' +
      '<button type="button" class="blko-soda-rec__add" data-add-to-cart data-id="' + id + '">+ Add</button></li>';
  };
  var SLIDER_BTN = {
    prev: '<button type="button" class="blko-soda-slider__btn" data-prev aria-label="Previous"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4l-6 6 6 6"/></svg></button>',
    next: '<button type="button" class="blko-soda-slider__btn" data-next aria-label="Next"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 4l6 6-6 6"/></svg></button>'
  };
  var recsHtml = function (heading, layout, max) {
    var pick = recPick(max);
    if (!pick.length) return '';
    var cards = pick.map(function (id) { return recCard(id, layout === 'grid'); }).join('');
    var head = '<blko-soda-recs class="blko-soda-recs blko-soda-recs--' + layout + '" data-recs><h3 class="blko-soda-recs__title">' + esc(heading) + '</h3>';
    if (layout === 'grid') return head + '<ul class="blko-soda-recs__row" data-recs-list>' + cards + '</ul></blko-soda-recs>';
    return head + '<blko-soda-slider class="blko-soda-recs__slider">' + SLIDER_BTN.prev + '<div class="blko-soda-slider__viewport"><ul class="blko-soda-slider__track blko-soda-recs__row" data-recs-list>' + cards + '</ul></div>' + SLIDER_BTN.next + '</blko-soda-slider></blko-soda-recs>';
  };

  var drawerHtml = function () {
    var n = count();
    var t = total();
    var h = '<div data-drawer-content data-count="' + n + '"><div class="blko-soda-drawer__head"><h2>Your Cart' + (n ? ' (' + n + ')' : '') + '</h2><button type="button" class="blko-soda-drawer__close" data-cart-close aria-label="Close">' + X_ICON + '</button></div><div class="blko-soda-drawer__scroll">';
    var left = THRESHOLD - t;
    var pct = Math.min(100, Math.floor(t * 100 / THRESHOLD));
    h += '<div class="blko-soda-ship"><p>' + (left > 0 ? 'You are ' + money(left) + ' away from free shipping!' : 'You\'ve unlocked FREE shipping!') + '</p><div class="blko-soda-ship__track"><span style="width:' + pct + '%"></span></div></div>';
    if (lines.length && unlocked()) h += '<p class="blko-soda-dpromo">You\'ve unlocked your discount!</p>';
    h += '<div class="blko-soda-drawer__items">';
    if (!lines.length) {
      h += '<div class="blko-soda-drawer__empty"><p>Your cart is empty. Let\'s fix that.</p><a class="blko-soda-drawer__btn" href="' + url('../templates/collection.html') + '">Shop flavors</a></div>';
    }
    lines.forEach(function (l) {
      var p = price(l), k = esc(keyOf(l)), pdp = pdpOf(p.c);
      h += '<div class="blko-soda-line"><a class="blko-soda-line__img" href="' + pdp + '"><img src="' + esc(p.c[3]) + '" alt="' + esc(p.c[0]) + '" width="72" height="120" loading="lazy"></a><div class="blko-soda-line__body">' +
        '<a class="blko-soda-line__title" href="' + pdp + '">' + esc(p.c[0]) + '</a>' +
        '<p class="blko-soda-line__meta">' + esc(p.c[1]) + '</p>' + metaHtml(l, 'blko-soda-line__meta') +
        (l.plan ? '<p class="blko-soda-line__meta">Subscription: ' + esc(PLANS[l.plan] || 'Subscribe & Save') + '</p>' : '') +
        '<div class="blko-soda-line__qty"><button type="button" data-qty="' + k + '" data-to="' + (l.quantity - 1) + '" aria-label="Decrease quantity">&minus;</button><span>' + l.quantity + '</span><button type="button" data-qty="' + k + '" data-to="' + (l.quantity + 1) + '" aria-label="Increase quantity">+</button></div></div>' +
        '<div class="blko-soda-line__side"><button type="button" class="blko-soda-line__remove" data-qty="' + k + '" data-to="0" aria-label="Remove ' + esc(p.c[0]) + '">' + TRASH + '</button>' +
        (p.title ? '<p class="blko-soda-line__disc">' + esc(p.title) + '</p>' : '') +
        '<p class="blko-soda-line__price">' + priceHtml(p) + '</p></div></div>';
    });
    h += '</div>' + (lines.length ? recsHtml('You may also like', 'row', 4) : recsHtml('Start with a favorite', 'grid', 4)) + '</div>';
    if (lines.length) {
      h += '<div class="blko-soda-drawer__foot">' + WAVE + '<div class="blko-soda-drawer__foot-in"><p class="blko-soda-drawer__sub"><span>Subtotal</span><span>' + money(t) + '</span></p><a class="blko-soda-drawer__btn blko-soda-drawer__btn--block" href="#" data-checkout>Checkout</a><p class="blko-soda-drawer__guarantee">45-day money-back guarantee</p></div></div>';
    }
    return h + '</div>';
  };

  /* Cart page: lines left, summary card right, upsell row of 4 cans */
  var pageHtml = function () {
    var n = count(), t = total(), saved = savedTotal();
    var left = THRESHOLD - t;
    var pct = Math.min(100, Math.floor(t * 100 / THRESHOLD));
    var shop = url('../templates/collection.html');
    var h = '<h1>Your cart</h1>';
    if (!lines.length) {
      return h + '<p class="blko-soda-cartpage__empty" data-cp-count="0">Nothing fizzy in here yet. <a href="' + shop + '">Shop flavors</a></p>' + upsellHtml();
    }
    h += '<form class="blko-soda-cartpage__form" onsubmit="return false"><div class="blko-soda-cartpage__grid"><div class="blko-soda-cartpage__main" data-cp-count="' + n + '">' +
      '<div class="blko-soda-cartpage__cols" aria-hidden="true"><span>Product</span><span></span><span>Quantity</span><span>Total</span></div><ul class="blko-soda-cartpage__items">';
    lines.forEach(function (l) {
      var p = price(l), k = esc(keyOf(l)), pdp = pdpOf(p.c);
      h += '<li><a class="blko-soda-cartpage__tile" href="' + pdp + '" style="--tile-bg:' + p.c[5] + '"><img src="' + esc(p.c[3]) + '" alt="' + esc(p.c[0]) + '" width="96" height="96" loading="lazy"></a>' +
        '<div class="blko-soda-cartpage__info"><a class="blko-soda-cartpage__title" href="' + pdp + '">' + esc(p.c[0]) + '</a><p>' + esc(p.c[1]) + '</p>' + metaHtml(l) +
        (l.plan ? '<p>' + esc(PLANS[l.plan] || 'Subscribe & Save') + '</p>' : '') +
        (p.title ? '<p class="blko-soda-cartpage__disc">' + esc(p.title) + '</p>' : '') +
        '<button type="button" class="blko-soda-cartpage__remove" data-cp-key="' + k + '" data-cp-to="0">Remove</button></div>' +
        '<div class="blko-soda-cartpage__step"><button type="button" data-cp-key="' + k + '" data-cp-to="' + (l.quantity - 1) + '" aria-label="Decrease quantity">&minus;</button><span>' + l.quantity + '</span><button type="button" data-cp-key="' + k + '" data-cp-to="' + (l.quantity + 1) + '" aria-label="Increase quantity">+</button></div>' +
        '<p class="blko-soda-cartpage__price">' + (p.compare > p.final ? '<s>' + money(p.compare) + '</s>' : '') + '<strong>' + money(p.final) + '</strong></p></li>';
    });
    h += '</ul></div><aside class="blko-soda-cartpage__summary"><h2>Order summary</h2>' +
      '<div class="blko-soda-cartpage__ship"><b>' + (left > 0 ? 'You are ' + money(left) + ' away from free shipping!' : 'You\'ve unlocked FREE shipping!') + '</b><i><span style="width:' + pct + '%"></span></i></div>' +
      '<p><span>Subtotal</span><strong>' + money(t + saved) + '</strong></p>' +
      (saved ? '<p class="is-save"><span>Savings</span><strong>-' + money(saved) + '</strong></p>' : '') +
      '<p><span>Shipping</span><span>' + (left > 0 ? 'Calculated at checkout' : 'Free') + '</span></p>' +
      '<p class="is-total"><span>Total</span><span>' + money(t) + '</span></p>' +
      '<button type="submit" data-checkout>Check out</button><small>Taxes are calculated at checkout.</small></aside></div></form>';
    return h + upsellHtml();
  };
  var upsellHtml = function () { return recsHtml('You might also like', 'grid', 4); };
  var pageEl = function () { return '<blko-soda-cartpage class="blko-soda-cartpage" data-section-id="cart">' + pageHtml() + '</blko-soda-cartpage>'; };
  window.FizzDemoCart = { drawerHtml: drawerHtml, pageHtml: pageEl };

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
    if (u.searchParams.get('section_id') === 'cart') {
      return Promise.resolve(new Response(pageEl(), { status: 200, headers: { 'Content-Type': 'text/html' } }));
    }
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
