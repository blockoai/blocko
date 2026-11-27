/* Fizz write-a-review dialog. Loaded on demand by <blko-soda-reviews> (blko-soda.js). No libraries.
   Modes (root.dataset.mode): "demo" saves locally through root.addLocalReview, "jdgm" posts to Judge.me's public API,
   anything else posts JSON to the app proxy in data-endpoint. */
var uid = 0;
var STAR = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6L1.3 7.8l6.1-.7z"/></svg>';
var slug = function (t) { return String(t || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); };

function build(root) {
  var id = 'rf' + (++uid);
  var mode = root.dataset.mode || 'demo';
  var d = root.dataset;
  var dlg = document.createElement('dialog');
  dlg.className = 'blko-soda-rform';
  dlg.setAttribute('aria-labelledby', id + '-t');
  var stars = '';
  for (var v = 1; v <= 5; v++) {
    stars += '<input type="radio" name="rating" value="' + v + '" id="' + id + '-r' + v + '"><label for="' + id + '-r' + v + '" data-v="' + v + '"><span style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">' + v + (v === 1 ? ' star' : ' stars') + '</span>' + STAR + '</label>';
  }
  var field = function (key, label, control, extra) {
    return '<div class="blko-soda-rform__field"><label for="' + id + '-' + key + '">' + label + '</label>' + control + (extra || '') + '<p class="blko-soda-rform__err" id="' + id + '-' + key + '-e" data-err="' + key + '" hidden></p></div>';
  };
  dlg.innerHTML =
    '<form class="blko-soda-rform__panel" novalidate>' +
    '<button type="button" class="blko-soda-rform__x" data-rf-close aria-label="Close"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13"/></svg></button>' +
    '<h2 class="blko-soda-rform__title" id="' + id + '-t">Write a review</h2>' +
    '<p class="blko-soda-rform__alert" role="alert" data-rf-alert hidden></p>' +
    '<fieldset class="blko-soda-rform__field" aria-describedby="' + id + '-rating-e"><legend>Your rating <span aria-hidden="true">*</span></legend><div class="blko-soda-rform__stars" data-rf-stars>' + stars + '</div><p class="blko-soda-rform__err" id="' + id + '-rating-e" data-err="rating" hidden></p></fieldset>' +
    field('title', 'Title <span aria-hidden="true">*</span>', '<input class="blko-soda-rform__input" id="' + id + '-title" name="title" maxlength="80" autocomplete="off" aria-describedby="' + id + '-title-e">') +
    field('body', 'Your review <span aria-hidden="true">*</span>', '<textarea class="blko-soda-rform__input" id="' + id + '-body" name="body" maxlength="1000" rows="5" aria-describedby="' + id + '-body-e ' + id + '-body-h"></textarea>', '<p class="blko-soda-rform__help blko-soda-rform__help--row" id="' + id + '-body-h"><span>At least 20 characters</span><span data-rf-count>0 / 1000</span></p>') +
    '<div class="blko-soda-rform__row">' +
    field('name', 'Name <span aria-hidden="true">*</span>', '<input class="blko-soda-rform__input" id="' + id + '-name" name="name" autocomplete="name" aria-describedby="' + id + '-name-e">') +
    field('email', 'Email <span aria-hidden="true">*</span>', '<input class="blko-soda-rform__input" id="' + id + '-email" name="email" type="email" autocomplete="email" aria-describedby="' + id + '-email-e ' + id + '-email-h">', '<p class="blko-soda-rform__help" id="' + id + '-email-h">Never shown. Used only to verify your review.</p>') +
    '</div>' +
    field('flavor', 'Flavor', '<select class="blko-soda-rform__input" id="' + id + '-flavor" name="flavor"></select>') +
    (mode === 'jdgm' ? '' :
      '<div class="blko-soda-rform__field" data-rf-photo-wrap><span class="blko-soda-rform__lbl" style="font-size:.9rem;font-weight:700">Photo (optional)</span><div class="blko-soda-rform__photo"><label class="blko-soda-rform__btn" for="' + id + '-photo">Add a photo</label><input type="file" id="' + id + '-photo" accept="image/*" aria-describedby="' + id + '-photo-h ' + id + '-photo-e"><img alt="Your photo" hidden><button type="button" class="blko-soda-rform__btn" data-rf-unphoto hidden>Remove</button></div><p class="blko-soda-rform__help" id="' + id + '-photo-h">Image files only, up to 5MB.</p><p class="blko-soda-rform__err" id="' + id + '-photo-e" data-err="photo" hidden></p></div>') +
    '<fieldset class="blko-soda-rform__field"><legend>Recommend this?</legend><div class="blko-soda-rform__choices"><input type="radio" name="recommend" value="yes" id="' + id + '-ry"><label for="' + id + '-ry">Yes</label><input type="radio" name="recommend" value="no" id="' + id + '-rn"><label for="' + id + '-rn">No</label></div></fieldset>' +
    '<div class="blko-soda-rform__field"><label class="blko-soda-rform__consent"><input type="checkbox" name="consent" aria-describedby="' + id + '-consent-e"><span>I confirm this review is about my own experience</span></label><p class="blko-soda-rform__err" id="' + id + '-consent-e" data-err="consent" hidden></p></div>' +
    '<div class="blko-soda-rform__actions"><button type="submit" class="blko-soda-rform__btn blko-soda-rform__btn--solid" data-rf-submit>Submit review</button><button type="button" class="blko-soda-rform__btn" data-rf-close>Cancel</button></div>' +
    '</form>' +
    '<div class="blko-soda-rform__done" data-rf-done hidden><h2 class="blko-soda-rform__title">Thank you</h2><p data-rf-msg role="status"></p><button type="button" class="blko-soda-rform__btn blko-soda-rform__btn--solid" data-rf-close>Close</button></div>';
  root.appendChild(dlg);
  return dlg;
}

function downscale(file, max) {
  return new Promise(function (resolve, reject) {
    var url = URL.createObjectURL(file);
    var img = new Image();
    img.onload = function () {
      var k = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
      var c = document.createElement('canvas');
      c.width = Math.max(1, Math.round(img.naturalWidth * k));
      c.height = Math.max(1, Math.round(img.naturalHeight * k));
      var x = c.getContext('2d');
      x.fillStyle = '#fff';
      x.fillRect(0, 0, c.width, c.height);
      x.drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      resolve(c.toDataURL('image/jpeg', 0.82));
    };
    img.onerror = function () { URL.revokeObjectURL(url); reject(new Error('read')); };
    img.src = url;
  });
}

function setup(root) {
  var mode = root.dataset.mode || 'demo';
  var d = root.dataset;
  var dlg = build(root);
  var form = dlg.querySelector('form');
  var done = dlg.querySelector('[data-rf-done]');
  var alertEl = dlg.querySelector('[data-rf-alert]');
  var submit = dlg.querySelector('[data-rf-submit]');
  var count = dlg.querySelector('[data-rf-count]');
  var flavorSel = form.elements.flavor;
  var photoInput = form.querySelector('input[type=file]');
  var photoImg = form.querySelector('.blko-soda-rform__photo img');
  var unphoto = form.querySelector('[data-rf-unphoto]');
  var starLabels = Array.prototype.slice.call(dlg.querySelectorAll('[data-rf-stars] label'));
  var st = { photo: '', trigger: null, card: null, busy: false };

  var paint = function (n) { starLabels.forEach(function (l) { l.classList.toggle('is-on', Number(l.dataset.v) <= n); }); };
  var rating = function () { var c = form.querySelector('input[name=rating]:checked'); return c ? Number(c.value) : 0; };
  starLabels.forEach(function (l) {
    l.addEventListener('mouseenter', function () { paint(Number(l.dataset.v)); });
    l.addEventListener('mouseleave', function () { paint(rating()); });
  });
  dlg.querySelector('[data-rf-stars]').addEventListener('change', function () { paint(rating()); clearErr('rating'); });

  var errEl = function (k) { return dlg.querySelector('[data-err="' + k + '"]'); };
  var setErr = function (k, msg) {
    var e = errEl(k);
    if (e) { e.textContent = msg; e.hidden = false; }
    var f = k === 'rating' ? null : form.elements[k];
    if (f && f.setAttribute) f.setAttribute('aria-invalid', 'true');
  };
  function clearErr(k) {
    var e = errEl(k);
    if (e) { e.hidden = true; e.textContent = ''; }
    var f = k === 'rating' ? null : form.elements[k];
    if (f && f.removeAttribute) f.removeAttribute('aria-invalid');
  }
  var checks = {
    rating: function () { return rating() ? '' : 'Please choose a star rating.'; },
    title: function () { return form.elements.title.value.trim() ? '' : 'Please add a title.'; },
    body: function () {
      var n = form.elements.body.value.trim().length;
      return n < 20 ? 'Please write at least 20 characters (' + n + ' so far).' : n > 1000 ? 'Please keep it under 1000 characters.' : '';
    },
    name: function () { return form.elements.name.value.trim() ? '' : 'Please add your name.'; },
    email: function () {
      var v = form.elements.email.value.trim();
      return !v ? 'Please add your email.' : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email address.';
    },
    consent: function () { return form.elements.consent.checked ? '' : 'Please confirm this review is about your own experience.'; }
  };
  var order = ['rating', 'title', 'body', 'name', 'email', 'consent'];
  form.addEventListener('input', function (e) {
    var k = e.target.name;
    if (k === 'body') count.textContent = e.target.value.length + ' / 1000';
    if (checks[k] && errEl(k) && !errEl(k).hidden) { var m = checks[k](); if (m) setErr(k, m); else clearErr(k); }
  });
  form.addEventListener('change', function (e) { if (e.target.name === 'consent') clearErr('consent'); });
  form.elements.email.addEventListener('blur', function () { if (form.elements.email.value) { var m = checks.email(); if (m) setErr('email', m); else clearErr('email'); } });

  if (photoInput) {
    var clearPhoto = function () { st.photo = ''; photoInput.value = ''; photoImg.hidden = true; photoImg.removeAttribute('src'); unphoto.hidden = true; };
    unphoto.addEventListener('click', function () { clearPhoto(); clearErr('photo'); photoInput.focus(); });
    photoInput.addEventListener('change', function () {
      var f = photoInput.files[0];
      clearErr('photo');
      if (!f) { clearPhoto(); return; }
      if (!/^image\//.test(f.type)) { clearPhoto(); setErr('photo', 'Please choose an image file.'); return; }
      if (f.size > 5 * 1024 * 1024) { clearPhoto(); setErr('photo', 'That image is over 5MB. Please choose a smaller one.'); return; }
      downscale(f, 600).then(function (url) {
        st.photo = url; photoImg.src = url; photoImg.hidden = false; unphoto.hidden = false;
      }, function () { clearPhoto(); setErr('photo', 'We could not read that image. Try another one.'); });
    });
  }

  var fillFlavors = function () {
    var title = d.productTitle || (document.querySelector('[data-flavor-title]') || document.querySelector('h1') || {}).textContent || '';
    title = title.trim();
    var names = [];
    root.querySelectorAll('select[data-flavor] option').forEach(function (o) { if (o.value) names.push(o.textContent.trim()); });
    if (title && names.map(slug).indexOf(slug(title)) < 0) names.unshift(title);
    flavorSel.textContent = '';
    var none = document.createElement('option'); none.value = ''; none.textContent = 'Choose a flavor'; flavorSel.appendChild(none);
    names.forEach(function (n) { var o = document.createElement('option'); o.value = n; o.textContent = n; flavorSel.appendChild(o); });
    var cur = names.filter(function (n) { return slug(n) === slug(title); })[0];
    flavorSel.value = cur || '';
  };

  var reset = function () {
    form.reset();
    paint(0);
    order.forEach(clearErr);
    clearErr('photo');
    if (photoInput) { st.photo = ''; photoImg.hidden = true; unphoto.hidden = true; }
    count.textContent = '0 / 1000';
    alertEl.hidden = true;
    submit.disabled = false; submit.textContent = 'Submit review';
    st.busy = false;
    fillFlavors();
  };

  var showDone = function (msg) {
    form.hidden = true; done.hidden = false; delete form.dataset.touched;
    done.querySelector('[data-rf-msg]').textContent = msg;
    done.querySelector('button').focus();
  };
  var fail = function (msg) {
    st.busy = false; submit.disabled = false; submit.textContent = 'Submit review';
    alertEl.textContent = msg; alertEl.hidden = false;
    alertEl.scrollIntoView({ block: 'nearest' });
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (st.busy) return;
    var first = '';
    order.forEach(function (k) { var m = checks[k](); if (m) { setErr(k, m); if (!first) first = k; } else clearErr(k); });
    if (first) {
      var tgt = first === 'rating' ? form.querySelector('input[name=rating]') : form.elements[first];
      if (tgt) tgt.focus();
      return;
    }
    alertEl.hidden = true;
    var rec = form.querySelector('input[name=recommend]:checked');
    var data = {
      rating: rating(),
      title: form.elements.title.value.trim(),
      body: form.elements.body.value.trim(),
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      flavor: flavorSel.value,
      recommend: rec ? rec.value === 'yes' : null
    };
    st.busy = true; submit.disabled = true; submit.textContent = 'Sending...';
    if (mode === 'demo') {
      try {
        st.card = root.addLocalReview({
          id: 'u' + Date.now(), rating: data.rating, title: data.title, body: data.body, name: data.name,
          flavorName: data.flavor, flavor: slug(data.flavor), recommend: data.recommend, photo: st.photo || '', ts: new Date().toISOString()
        });
        showDone('Thanks! Your review is live.');
      } catch (err) {
        fail('We could not save your review in this browser. Try removing the photo.');
      }
      return;
    }
    var url, body;
    if (mode === 'jdgm') {
      url = 'https://judge.me/api/v1/reviews';
      body = { shop_domain: d.shop, platform: 'shopify', id: Number(d.productId), name: data.name, email: data.email, rating: data.rating, title: data.title, body: data.body };
      if (d.nameFormat && d.nameFormat !== 'full') body.reviewer_name_format = d.nameFormat;
    } else {
      url = d.endpoint || '/apps/blocko/reviews';
      body = {
        product_id: d.productId, handle: d.handle, rating: data.rating, title: data.title, body: data.body, name: data.name,
        email: data.email, flavor: data.flavor, recommend: data.recommend, photo: st.photo || null, source: 'fizz-theme'
      };
    }
    fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) })
      .then(function (r) {
        if (r.ok) showDone(mode === 'jdgm' ? (d.successJdgm || 'Thanks! Your review was sent and will appear in a few minutes.') : (d.success || 'Thanks! Your review was submitted and will appear after approval.'));
        else fail(d.error || "Reviews aren't connected yet. Please try again later.");
      })
      .catch(function () { fail(d.error || "Reviews aren't connected yet. Please try again later."); });
  });

  var lock = '';
  var close = function () { if (dlg.open) dlg.close(); };
  dlg.addEventListener('click', function (e) {
    if (e.target === dlg || e.target.closest('[data-rf-close]')) close();
  });
  dlg.addEventListener('close', function () {
    document.documentElement.style.overflow = lock;
    var t = st.trigger;
    if (t && t.focus) t.focus({ preventScroll: !!st.card });
    if (st.card && st.card.isConnected) st.card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    st.card = null;
  });
  dlg.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    var f = Array.prototype.filter.call(dlg.querySelectorAll('button,input,select,textarea,a[href]'), function (n) {
      return !n.disabled && !n.closest('[hidden]') && n.offsetParent !== null && !(n.type === 'radio' && !n.checked && form.querySelector('input[name="' + n.name + '"]:checked'));
    });
    if (!f.length) return;
    var a = f[0], z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
    else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
  });

  return {
    show: function (trigger) {
      st.trigger = trigger;
      if (!done.hidden) { done.hidden = true; form.hidden = false; }
      if (!form.dataset.touched) { reset(); form.dataset.touched = '1'; } else if (!flavorSel.value) fillFlavors();
      lock = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
      dlg.showModal();
      var c = form.querySelector('input[name=rating]:checked') || form.querySelector('input[name=rating]');
      c.focus();
    },
    fresh: function () { reset(); }
  };
}

export default function open(root, trigger) {
  if (!root._rform) root._rform = setup(root);
  root._rform.show(trigger);
}
