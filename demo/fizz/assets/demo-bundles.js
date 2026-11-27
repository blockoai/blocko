/* Fizz static demo only: behavior for the four extra bundle pages (mix & match, gift box, subscription box, starter kit).
   Each page adds ONE line to the demo cart through <blko-soda-cart>.add(). The line carries its final price in hidden
   _price / _compare / _disc / _sub properties that demo-cart.js reads. Not part of the Shopify theme. */
(function () {
  var root = document.querySelector('[data-bx]');
  if (!root) return;
  var kind = root.dataset.bx;
  var $ = function (s, r) { return (r || root).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || root).querySelectorAll(s)); };
  var money = function (c) { return '$' + (c / 100).toFixed(2); };
  var text = function (sel, v) { $$(sel).forEach(function (n) { n.textContent = v; }); };
  var show = function (sel, on) { $$(sel).forEach(function (n) { n.hidden = !on; }); };
  var cut = function (n, p) { return Math.round(n * (100 - p) / 100); };
  var plural = function (n, w) { return n + ' ' + w + (n === 1 ? '' : 's'); };
  var fmtDate = function (d) { return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }); };
  var addDays = function (d, n) { var x = new Date(d.getTime()); x.setDate(x.getDate() + n); return x; };
  var CAN = 300;
  var PCT = { 6: 0, 12: 10, 24: 15 };
  var FAV = ['cherry-pop', 'orange-burst', 'strawberry-lime', 'mango-tango'];
  var stepOf = function (size) { return size === 6 ? 2 : 3; };

  /* Buttons that add the bundle (the buy box one and the mobile bar one) */
  var setReady = function (ok) { $$('[data-bx-add]').forEach(function (b) { b.disabled = !ok; }); };
  var setLabel = function (label) { $$('[data-bx-add]').forEach(function (b) { b.textContent = label; }); };
  var addLine = function (item, after) {
    var c = document.querySelector('blko-soda-cart');
    if (!c || !c.add) return;
    $$('[data-bx-add]').forEach(function (b) { b.disabled = true; });
    var done = function () { after(); };
    c.add([item]).then(done, done);
  };

  /* Fill meter, shared by the case, gift and subscription pages */
  var meter = function (have, size) {
    var left = size - have;
    text('[data-bx-state]', have + ' of ' + size + ' cans');
    $$('[data-bx-fill]').forEach(function (n) { n.style.width = Math.round(have * 100 / size) + '%'; });
    root.classList.toggle('is-full', left === 0);
    text('[data-bx-hint]', left > 0 ? 'Pick ' + plural(left, 'more can') + ' to fill it' : 'Full. Ready to ship.');
  };

  /* Flavor grid with steppers. Counts are in cans, in steps of 2 (6-can) or 3 (12 and 24-can). */
  var Picker = function (onChange) {
    var self = this;
    self.size = 12;
    self.items = $$('[data-bx-flavor]').map(function (el) {
      return { el: el, h: el.dataset.handle, name: el.dataset.name, img: el.dataset.img, bg: el.dataset.bg, n: 0, out: $('[data-bx-count]', el), plus: $('[data-bx-plus]', el), minus: $('[data-bx-minus]', el) };
    });
    self.step = function () { return stepOf(self.size); };
    self.total = function () { return self.items.reduce(function (s, i) { return s + i.n; }, 0); };
    self.left = function () { return self.size - self.total(); };
    self.picked = function () { return self.items.filter(function (i) { return i.n > 0; }); };
    self.summary = function () { return self.picked().map(function (i) { return i.name + ' x' + i.n; }).join(', '); };
    self.render = function () {
      var st = self.step(), left = self.left();
      self.items.forEach(function (i) {
        i.out.textContent = i.n;
        i.minus.disabled = i.n < st;
        i.plus.disabled = left < st;
        i.el.classList.toggle('is-picked', i.n > 0);
      });
      text('[data-bx-step-note]', 'in steps of ' + st);
      text('[data-bx-pick-note]', 'Counts are in cans, ' + st + ' at a time. Tap + to add.');
      onChange();
    };
    self.setSize = function (n) {
      self.size = n;
      var st = self.step();
      self.items.forEach(function (i) { i.n = Math.floor(i.n / st) * st; });
      while (self.total() > n) {
        var last = self.items.filter(function (i) { return i.n >= st; }).pop();
        if (!last) break;
        last.n -= st;
      }
      self.render();
    };
    self.clear = function () { self.items.forEach(function (i) { i.n = 0; }); self.render(); };
    /* Spread the remaining cans over a list of flavor handles, one step at a time */
    self.fill = function (list) {
      var st = self.step(), pool = self.items.filter(function (i) { return list.indexOf(i.h) >= 0; });
      if (!pool.length) return;
      for (var k = 0; self.left() >= st; k++) pool[k % pool.length].n += st;
      self.render();
    };
    $$('[data-bx-flavor]').forEach(function (el, idx) {
      var it = self.items[idx];
      it.plus.addEventListener('click', function () { if (self.left() >= self.step()) { it.n += self.step(); self.render(); } });
      it.minus.addEventListener('click', function () { if (it.n >= self.step()) { it.n -= self.step(); self.render(); } });
    });
  };
  var listen = function (sel, ev, fn) { $$(sel).forEach(function (n) { n.addEventListener(ev, fn); }); };
  var checkedSize = function () { var r = $('[data-bx-size-radio]:checked'); return r ? Number(r.value) : 12; };

  /* ---------- 1. Mix & Match Case ---------- */
  var initSize = function () {
    var pk = new Picker(update);
    var price = function () { var list = pk.size * CAN; return { list: list, fin: cut(list, PCT[pk.size]), pct: PCT[pk.size] }; };
    function update() {
      var p = price(), have = pk.total();
      meter(have, pk.size);
      text('[data-bx-total]', money(p.fin));
      text('[data-bx-was]', money(p.list));
      show('[data-bx-was]', p.pct > 0);
      show('[data-bx-badge]', p.pct > 0);
      show('[data-bx-off]', p.pct > 0);
      text('[data-bx-off]', 'Save ' + p.pct + '%');
      text('[data-bx-per]', money(Math.round(p.fin / pk.size)) + ' / can');
      $$('[data-bx-fillbtn]').forEach(function (b) { b.disabled = have === pk.size; });
      setReady(have === pk.size);
    }
    listen('[data-bx-size-radio]', 'change', function () { pk.setSize(checkedSize()); });
    listen('[data-bx-fillbtn]', 'click', function () { pk.fill(FAV); });
    listen('[data-bx-clear]', 'click', function () { pk.clear(); });
    listen('[data-bx-add]', 'click', function () {
      var p = price();
      addLine({ id: 310, quantity: 1, properties: {
        'Size': pk.size + ' cans', 'Flavors': pk.summary(),
        '_price': p.fin, '_compare': p.list, '_disc': p.pct ? 'Case discount ' + p.pct + '%' : '', '_sub': pk.size + ' cans · ' + plural(pk.picked().length, 'flavor')
      } }, update);
    });
    pk.setSize(checkedSize());
  };

  /* ---------- 2. Fizz Gift Box ---------- */
  var initGift = function () {
    var FEE = 200, NAMES = { 6: 'Starter', 12: 'Party', 24: 'Big Fizz' };
    var pk = new Picker(update);
    var card = $('[data-bx-card]'), msg = $('[data-bx-msg]'), date = $('[data-bx-date]');
    var iso = function (d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
    var today = new Date();
    date.min = iso(addDays(today, 1));
    date.value = iso(addDays(today, 3));
    var sendOn = function () { return date.value ? fmtDate(new Date(date.value + 'T00:00:00')) : 'a date to pick'; };
    var wrap = function () { return $('[name=bx-wrap]:checked'); };
    var price = function () { var cans = pk.size * CAN; return { list: cans + FEE, fin: cut(cans, PCT[pk.size]) + FEE, pct: PCT[pk.size] }; };
    function update() {
      var p = price(), have = pk.total(), w = wrap();
      meter(have, pk.size);
      text('[data-bx-total]', money(p.fin));
      text('[data-bx-was]', money(p.list));
      show('[data-bx-was]', p.list > p.fin);
      show('[data-bx-badge]', p.list > p.fin);
      text('[data-bx-sum]', NAMES[pk.size] + ' box, ' + w.dataset.name + ' wrap, sends ' + sendOn());
      card.style.setProperty('--wrap', w.dataset.wrap);
      card.style.setProperty('--ribbon', w.dataset.ribbon);
      text('[data-bx-card-msg]', msg.value.trim() || 'Your message appears here.');
      text('[data-bx-card-box]', NAMES[pk.size] + ' box · ' + pk.size + ' cans');
      text('[data-bx-card-date]', 'Sends ' + sendOn());
      text('[data-bx-count-msg]', msg.value.length + ' / 150');
      $('[data-bx-card-cans]').innerHTML = pk.picked().slice(0, 6).map(function (i) { return '<span style="--tile-bg:' + i.bg + '"><img src="' + i.img + '" alt="' + i.name + '" width="28" height="28"></span>'; }).join('');
      setReady(have === pk.size && !!date.value);
    }
    listen('[data-bx-size-radio]', 'change', function () { pk.setSize(checkedSize()); });
    listen('[name=bx-wrap]', 'change', update);
    msg.addEventListener('input', update);
    date.addEventListener('change', update);
    listen('[data-bx-preset]', 'click', function (e) {
      var b = e.currentTarget, list = b.dataset.list.split(',');
      if (b.dataset.list === 'random') list = pk.items.map(function (i) { return i.h; }).sort(function () { return Math.random() - .5; }).slice(0, 4);
      pk.clear();
      pk.fill(list);
      $$('[data-bx-preset]').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
    });
    $$('[data-bx-flavor]').forEach(function (el) { el.addEventListener('click', function (e) { if (e.target.closest('button')) $$('[data-bx-preset]').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); }); }); });
    listen('[data-bx-add]', 'click', function () {
      var p = price(), w = wrap();
      addLine({ id: 311, quantity: 1, properties: {
        'Box': NAMES[pk.size] + ' · ' + pk.size + ' cans', 'Flavors': pk.summary(), 'Wrap': w.dataset.name, 'Message': msg.value.trim(), 'Send on': sendOn(),
        '_price': p.fin, '_compare': p.list, '_disc': p.list > p.fin ? 'Gift box savings' : '', '_sub': NAMES[pk.size] + ' box · ' + pk.size + ' cans'
      } }, update);
    });
    pk.setSize(checkedSize());
  };

  /* ---------- 3. Monthly Fizz Box ---------- */
  var initSub = function () {
    var PLAN = { 2: 101, 4: 102, 8: 103 }, SS = 15;
    var pk = new Picker(update);
    var weeks = function () { return Number($('[name=bx-freq]:checked').value); };
    var first = addDays(new Date(), 3);
    var price = function () {
      var list = pk.size * CAN, bundle = cut(list, PCT[pk.size]), fin = cut(bundle, SS);
      return { list: list, bundle: bundle, fin: fin, bPct: PCT[pk.size] };
    };
    var plan = function () { return 'Monthly Fizz Box, every ' + weeks() + ' weeks'; };
    var setStep = function (n) {
      $$('[data-bx-tab]').forEach(function (t) { var on = Number(t.dataset.bxTab) === n; t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1; });
      $$('[data-bx-panel]').forEach(function (p) { p.hidden = Number(p.dataset.bxPanel) !== n; });
    };
    function update() {
      var p = price(), have = pk.total(), w = weeks(), off = p.list - p.fin;
      meter(have, pk.size);
      text('[data-bx-total]', money(p.fin));
      text('[data-bx-was]', money(p.list));
      show('[data-bx-was]', true);
      show('[data-bx-badge]', true);
      text('[data-bx-off]', 'Save ' + Math.round(off * 100 / p.list) + '%');
      text('[data-bx-per]', money(Math.round(p.fin / pk.size)) + ' / can, delivered every ' + w + ' weeks');
      text('[data-bx-row-list]', pk.size + ' cans x ' + money(CAN));
      text('[data-bx-row-list-v]', money(p.list));
      show('[data-bx-row-bundle]', p.bPct > 0);
      text('[data-bx-row-bundle-l]', 'Bundle discount (' + p.bPct + '%)');
      text('[data-bx-row-bundle-v]', '-' + money(p.list - p.bundle));
      text('[data-bx-row-ss-v]', '-' + money(p.bundle - p.fin));
      text('[data-bx-save]', 'You save ' + money(off) + ' (' + Math.round(off * 100 / p.list) + '%) on every box');
      text('[data-bx-plan]', plan());
      text('[data-bx-plan-sub]', pk.size + ' cans, first box ships ' + fmtDate(first));
      $('[data-bx-cal]').innerHTML = [0, 1, 2].map(function (i) {
        var d = addDays(first, i * w * 7);
        return '<li' + (i === 0 ? ' class="is-first"' : '') + '><span>' + d.toLocaleDateString('en-US', { month: 'short' }) + '</span><b>' + d.getDate() + '</b><small>' + d.toLocaleDateString('en-US', { weekday: 'short' }) + '</small><em>' + (i === 0 ? 'First box' : 'Box ' + (i + 1)) + '</em></li>';
      }).join('');
      $$('[data-bx-fillbtn]').forEach(function (b) { b.disabled = have === pk.size; });
      $$('[data-bx-need-full]').forEach(function (b) { b.disabled = have !== pk.size; });
      setReady(have === pk.size);
    }
    listen('[data-bx-size-radio]', 'change', function () { pk.setSize(checkedSize()); });
    listen('[name=bx-freq]', 'change', update);
    listen('[data-bx-fillbtn]', 'click', function () { pk.fill(FAV); });
    listen('[data-bx-clear]', 'click', function () { pk.clear(); });
    listen('[data-bx-tab]', 'click', function (e) { setStep(Number(e.currentTarget.dataset.bxTab)); });
    listen('[data-bx-next]', 'click', function (e) { setStep(Number(e.currentTarget.dataset.bxNext)); });
    listen('[data-bx-add]', 'click', function () {
      var p = price(), w = weeks();
      addLine({ id: 312, quantity: 1, selling_plan: PLAN[w], properties: {
        'Box': pk.size + ' cans', 'Flavors': pk.summary(), 'Plan': plan(), 'First delivery': fmtDate(first),
        '_price': p.fin, '_compare': p.list, '_disc': (p.bPct ? 'Bundle ' + p.bPct + '% + ' : '') + 'Subscribe & Save ' + SS + '%', '_sub': pk.size + ' cans · ' + plural(pk.picked().length, 'flavor')
      } }, update);
    });
    pk.setSize(checkedSize());
  };

  /* ---------- 4. Starter Kit ---------- */
  var initKit = function () {
    var boxes = $$('[data-bx-item]');
    var calc = function () {
      var anyAddOn = boxes.some(function (b) { return b.dataset.main !== '1' && b.checked; });
      var list = 0, fin = 0, n = 0, names = [];
      boxes.forEach(function (b, i) {
        var price = Number(b.dataset.price), off = b.dataset.main === '1' ? (anyAddOn ? Number(b.dataset.off) : 0) : Number(b.dataset.off);
        var now = cut(price, off), li = b.closest('.blko-soda-bxitem');
        var was = $('[data-bx-item-was]', li);
        $('[data-bx-item-now]', li).textContent = money(b.checked ? now : price);
        was.textContent = money(price);
        was.hidden = !(b.checked && now < price);
        li.classList.toggle('is-off', !b.checked);
        $('[data-bx-tile="' + i + '"]').classList.toggle('is-off', !b.checked);
        if (b.checked) { list += price; fin += now; n++; names.push(b.dataset.main === '1' ? 'Fan Favorites Variety Pack (12 cans)' : b.dataset.name); }
      });
      return { list: list, fin: fin, n: n, names: names, save: list - fin };
    };
    function update() {
      var k = calc();
      text('[data-bx-total]', money(k.fin));
      text('[data-bx-was]', money(k.list));
      show('[data-bx-was]', k.save > 0);
      show('[data-bx-badge]', k.save > 0);
      text('[data-bx-save]', k.save > 0 ? 'Save ' + money(k.save) + ' when bought together' : 'Check an add-on to unlock kit savings');
      text('[data-bx-count-note]', plural(k.n, 'item'));
      text('[data-bx-state]', plural(k.n, 'item'));
      setLabel('Add ' + plural(k.n, 'item') + ' to cart');
      $$('.blko-soda-bxbar__btn').forEach(function (b) { b.textContent = 'Add kit'; });
      setReady(true);
    }
    boxes.forEach(function (b) { b.addEventListener('change', update); });
    listen('[data-bx-add]', 'click', function () {
      var k = calc();
      addLine({ id: 313, quantity: 1, properties: {
        'Includes': k.names.join(', '),
        '_price': k.fin, '_compare': k.list, '_disc': k.save > 0 ? 'Kit savings ' + money(k.save) : '', '_sub': plural(k.n, 'item')
      } }, update);
    });
    update();
  };

  ({ size: initSize, gift: initGift, sub: initSub, kit: initKit })[kind]();
})();
