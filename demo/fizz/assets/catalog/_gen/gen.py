import json, math, os
OUT = "/Users/silver/Documents/Blocko/blockogithub/demo/fizz/assets/catalog"
CREAM = "#fff3d6"

def darken(h, f):
    h = h.lstrip('#')
    r, g, b = [int(h[i:i+2], 16) for i in (0, 2, 4)]
    return "#%02x%02x%02x" % (int(r*f), int(g*f), int(b*f))

# handle, name, line1, line2, tagline, fiber, line, color, accent, tile, ink-factor, compare
P = [
 ("cherry-pop", "Cherry Pop", "Cherry", "Pop", "Bright, juicy, and a little bit sweet", "9g", "Classics", "#c8203a", "#ffd0d6", "#fde1e3", 0.4, 34.0),
 ("orange-burst", "Orange Burst", "Orange", "Burst", "Sunny citrus with a zesty finish", "9g", "Classics", "#f26b1d", "#ffe0b8", "#fde9d2", 0.4, None),
 ("strawberry-lime", "Strawberry Lime", "Strawberry", "Lime", "Ripe berries meet a sharp lime twist", "6g", "Fruit punch", "#e8587a", "#c6f08a", "#fde2ea", 0.4, None),
 ("lemon-lime-zing", "Lemon Lime Zing", "Lemon Lime", "Zing", "Crisp, cold, and wildly refreshing", "6g", "Classics", "#7fb41a", "#fff08a", "#eef6cf", 0.38, None),
 ("mango-tango", "Mango Tango", "Mango", "Tango", "Tropical, golden, summer in a can", "9g", "Limited", "#f2a516", "#ffd98a", "#fff0cc", 0.35, 34.0),
 ("mint-mojito", "Mint Mojito", "Mint", "Mojito", "Cool mint, bright lime, zero guilt", "6g", "Fruit punch", "#1ea58b", "#bff0e2", "#d6f1ea", 0.4, None),
 ("grape-soda", "Grape Soda", "Grape", "Soda", "Old-school purple, brand-new fizz", "9g", "Classics", "#6d3fa6", "#d9c2f5", "#e8defa", 0.4, None),
 ("root-beer", "Root Beer", "Root", "Beer", "Creamy, bold, and nostalgic", "9g", "Classics", "#7b4526", "#e9c9a6", "#f0e1d1", 0.45, None),
]

def circ(cx, cy, r, fill, extra=""):
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}" {extra}/>'

def fruit(handle, ink):
    s = []
    if handle == "cherry-pop":
        s.append(f'<path d="M142 258 Q150 232 176 222 M176 222 Q180 240 160 292" fill="none" stroke="#3d6b2a" stroke-width="4" stroke-linecap="round"/>')
        s.append(f'<path d="M176 222 Q198 206 206 224 Q190 236 176 222Z" fill="#4c9a3a"/>')
        s.append(circ(132, 302, 26, "#d4203c", f'stroke="{ink}" stroke-width="3"'))
        s.append(circ(172, 306, 26, "#b8182f", f'stroke="{ink}" stroke-width="3"'))
        s.append(circ(124, 294, 6, "#fff", 'opacity=".5"'))
        s.append(circ(164, 298, 6, "#fff", 'opacity=".5"'))
        s.append(f'<path d="M176 222 L160 290" stroke="#3d6b2a" stroke-width="4" fill="none" stroke-linecap="round"/>')
    elif handle == "orange-burst":
        s.append(circ(150, 290, 50, "#f58a1f", f'stroke="{ink}" stroke-width="3"'))
        s.append(circ(150, 290, 40, "#ffd58a"))
        for i in range(8):
            a = i*math.pi/4
            s.append(f'<path d="M150 290 L{150+38*math.cos(a):.1f} {290+38*math.sin(a):.1f}" stroke="#f58a1f" stroke-width="3" stroke-linecap="round"/>')
        s.append(circ(150, 290, 5, "#f58a1f"))
        s.append('<path d="M186 246 Q210 228 218 244 Q202 256 186 246Z" fill="#4c9a3a"/>')
    elif handle == "strawberry-lime":
        s.append('<path d="M150 336 C108 314 100 268 112 256 C124 244 140 252 150 256 C160 252 176 244 188 256 C200 268 192 314 150 336Z" fill="#e0304f" stroke="%s" stroke-width="3" stroke-linejoin="round"/>' % ink)
        for x, y in [(130,274),(150,270),(170,274),(124,292),(144,290),(164,290),(184,292),(136,308),(156,308),(150,322)]:
            s.append(f'<ellipse cx="{x}" cy="{y}" rx="2.6" ry="4" fill="#ffe6a8"/>')
        s.append('<path d="M150 258 L128 240 L142 248 L146 230 L152 246 L162 232 L162 250 L176 240Z" fill="#4c9a3a" stroke="%s" stroke-width="2" stroke-linejoin="round"/>' % ink)
    elif handle == "lemon-lime-zing":
        s.append(circ(130, 296, 36, "#f6d51f", f'stroke="{ink}" stroke-width="3"'))
        s.append(circ(130, 296, 28, "#fff2a0"))
        s.append(circ(172, 288, 32, "#7fb41a", f'stroke="{ink}" stroke-width="3"'))
        s.append(circ(172, 288, 24, "#c6e86a"))
        for cx, cy, r, c in [(130,296,28,"#f6d51f"),(172,288,24,"#7fb41a")]:
            for i in range(6):
                a = i*math.pi/3
                s.append(f'<path d="M{cx} {cy} L{cx+r*math.cos(a):.1f} {cy+r*math.sin(a):.1f}" stroke="{c}" stroke-width="2.5" stroke-linecap="round"/>')
    elif handle == "mango-tango":
        s.append('<path d="M120 268 C132 244 178 240 196 270 C214 304 176 340 140 330 C108 322 108 288 120 268Z" fill="#f08a1c" stroke="%s" stroke-width="3"/>' % ink)
        s.append('<path d="M130 276 C142 256 172 254 186 274 C176 262 150 266 138 290 C132 292 126 286 130 276Z" fill="#ffd45a" opacity=".85"/>')
        s.append('<path d="M184 252 Q200 226 226 232 Q214 258 184 252Z" fill="#4c9a3a" stroke="%s" stroke-width="2"/>' % ink)
        s.append('<path d="M182 252 Q172 244 168 240" stroke="#3d6b2a" stroke-width="4" fill="none" stroke-linecap="round"/>')
    elif handle == "mint-mojito":
        s.append('<path d="M150 336 L150 286" stroke="#1c6e5c" stroke-width="4" stroke-linecap="round"/>')
        s.append('<path d="M150 296 C112 292 94 266 100 248 C128 246 148 266 150 296Z" fill="#2fbf6e" stroke="%s" stroke-width="3" stroke-linejoin="round"/>' % ink)
        s.append('<path d="M150 296 C188 292 206 266 200 248 C172 246 152 266 150 296Z" fill="#46d17f" stroke="%s" stroke-width="3" stroke-linejoin="round"/>' % ink)
        s.append('<path d="M150 286 C132 262 138 238 150 226 C162 238 168 262 150 286Z" fill="#2fbf6e" stroke="%s" stroke-width="3" stroke-linejoin="round"/>' % ink)
        s.append('<path d="M150 284 L150 238 M148 292 L112 258 M152 292 L188 258" stroke="#1c6e5c" stroke-width="2" fill="none" stroke-linecap="round"/>')
    elif handle == "grape-soda":
        pos = [(126,278),(150,274),(174,278),(138,300),(162,300),(126,300),(174,300),(150,322),(138,320),(162,320)]
        pos = [(124,272),(150,272),(176,272),(137,296),(163,296),(150,320),(111,296),(189,296)]
        pos = [(122,276),(150,276),(178,276),(136,298),(164,298),(150,320)]
        for i, (x, y) in enumerate(pos):
            s.append(circ(x, y, 15, "#8a55c8" if i % 2 else "#7440b5", f'stroke="{ink}" stroke-width="2.5"'))
            s.append(circ(x-5, y-5, 3.5, "#fff", 'opacity=".5"'))
        s.append('<path d="M150 262 L150 246" stroke="#3d6b2a" stroke-width="4" stroke-linecap="round"/>')
        s.append('<path d="M150 250 Q176 226 198 240 Q180 258 150 250Z" fill="#4c9a3a" stroke="%s" stroke-width="2"/>' % ink)
    elif handle == "root-beer":
        s.append('<path d="M176 282 C212 276 212 326 176 322" fill="none" stroke="%s" stroke-width="9" stroke-linecap="round"/>' % ink)
        s.append('<path d="M176 282 C212 276 212 326 176 322" fill="none" stroke="#f6e7c8" stroke-width="4" stroke-linecap="round"/>')
        s.append('<path d="M108 270 L176 270 L172 332 Q172 340 164 340 L120 340 Q112 340 112 332Z" fill="#8a4a22" stroke="%s" stroke-width="3" stroke-linejoin="round"/>' % ink)
        s.append('<rect x="118" y="290" width="12" height="40" rx="5" fill="#fff" opacity=".22"/>')
        for x, y, r in [(116,266,13),(134,260,15),(154,261,14),(170,267,12)]:
            s.append(circ(x, y, r, "#fffaf0", f'stroke="{ink}" stroke-width="2.5"'))
    return "\n".join(s)

def can_inner(p):
    handle, name, l1, l2, tag, fiber, line, color, accent, tile, f, cmp_ = p
    ink = darken(color, f)
    rim = "#d9dde0"; rim2 = "#aeb4b9"
    fs1 = 26 if len(l1) <= 7 else (23 if len(l1) <= 9 else 21)
    g = f'''<g>
<path d="M62 524 Q62 534 76 536 L224 536 Q238 534 238 524 L238 500 L62 500Z" fill="{rim}"/>
<path d="M62 524 Q62 534 76 536 L224 536 Q238 534 238 524 L238 514 Q150 524 62 514Z" fill="{rim2}" opacity=".6"/>
<path d="M50 112 Q50 96 66 90 L84 56 Q150 44 216 56 L234 90 Q250 96 250 112 L250 500 Q150 512 50 500Z" fill="{rim}"/>
<path d="M50 112 L250 112 L250 500 Q150 512 50 500Z" fill="{color}"/>
<path d="M50 112 Q150 122 250 112" fill="none" stroke="{ink}" stroke-width="3" opacity=".5"/>
<path d="M84 56 Q150 44 216 56 L234 90 L66 90Z" fill="#c5cacf"/>
<ellipse cx="150" cy="52" rx="66" ry="12" fill="#eef0f2" stroke="{rim2}" stroke-width="2"/>
<ellipse cx="150" cy="52" rx="50" ry="8" fill="#cfd4d8"/>
<rect x="132" y="46" width="36" height="12" rx="6" fill="#eef0f2" stroke="{rim2}" stroke-width="2"/>
<ellipse cx="150" cy="52" rx="9" ry="3.5" fill="#8d949a"/>
<rect x="62" y="128" width="176" height="358" rx="22" fill="none" stroke="{CREAM}" stroke-width="3" opacity=".9"/>
<rect x="68" y="134" width="164" height="346" rx="17" fill="none" stroke="{CREAM}" stroke-width="1.2" stroke-dasharray="2 5" opacity=".6"/>
<rect x="60" y="112" width="26" height="388" fill="#fff" opacity=".2"/>
<rect x="94" y="112" width="7" height="388" fill="#fff" opacity=".14"/>
<rect x="222" y="112" width="28" height="388" fill="#000" opacity=".12"/>
<path id="arc-{handle}" d="M68 190 Q150 130 232 190" fill="none"/>
<text font-family="Fraunces, 'Baloo 2', Georgia, serif" font-weight="900" font-size="64" text-anchor="middle" fill="{CREAM}" stroke="{ink}" stroke-width="7" stroke-linejoin="round" paint-order="stroke" letter-spacing="1"><textPath href="#arc-{handle}" startOffset="50%">fizz</textPath></text>
<circle cx="150" cy="292" r="74" fill="{CREAM}" stroke="{ink}" stroke-width="3"/>
<circle cx="150" cy="292" r="67" fill="{accent}" opacity=".55"/>
{fruit(handle, ink)}
<g font-family="Fraunces, Georgia, serif" font-weight="900" text-anchor="middle" fill="{CREAM}" stroke="{ink}" stroke-width="5" stroke-linejoin="round" paint-order="stroke">
<text x="150" y="410" font-size="{fs1}">{l1}</text>
<text x="150" y="440" font-size="{fs1}">{l2}</text>
</g>
<rect x="108" y="452" width="84" height="22" rx="11" fill="{CREAM}"/>
<text x="150" y="468" font-family="Fraunces, Georgia, serif" font-weight="700" font-size="13" text-anchor="middle" fill="{ink}">{fiber} fiber</text>
</g>'''
    return g

def svg(vb, body):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}">\n{body}\n</svg>\n'

def write(path, s):
    full = os.path.join(OUT, path)
    open(full, "w").write(s)

def can_use(p, x, y, sc, suffix):
    # can bbox: x 50..250, y 44..536
    inner = '\n'.join(l for l in can_inner(p).split('\n') if 'stroke-dasharray' not in l and '<rect x="94"' not in l).replace(f'arc-{p[0]}', f'arc-{p[0]}-{suffix}')
    return f'<g transform="translate({x} {y}) scale({sc}) translate(-50 -44)">{inner}</g>'

for p in P:
    h = p[0]
    write(f"cans/{h}.svg", svg("0 0 300 536", f'<g transform="translate(0 -22)">{can_inner(p)}</g>'))
    # pack
    color, accent = p[7], p[8]
    ink = darken(color, p[10])
    body = ''
    for i, x in enumerate((125, 215)):
        body += can_use(p, x, 18, .38, f"p{i}")
    body += f'''
<path d="M22 150 L398 150 L398 292 Q398 304 386 304 L34 304 Q22 304 22 292Z" fill="{color}" stroke="{ink}" stroke-width="3"/>
<path d="M22 150 L398 150 L398 168 L22 168Z" fill="{ink}" opacity=".35"/>
<rect x="22" y="150" width="376" height="154" rx="12" fill="none"/>
<rect x="34" y="162" width="352" height="130" rx="14" fill="none" stroke="{CREAM}" stroke-width="2.5" opacity=".9"/>
<rect x="22" y="150" width="40" height="154" fill="#fff" opacity=".14"/>
<text x="210" y="222" font-family="Fraunces, 'Baloo 2', Georgia, serif" font-weight="900" font-size="64" text-anchor="middle" fill="{CREAM}" stroke="{ink}" stroke-width="7" stroke-linejoin="round" paint-order="stroke">fizz</text>
<text x="210" y="256" font-family="Fraunces, Georgia, serif" font-weight="900" font-size="22" text-anchor="middle" fill="{CREAM}" stroke="{ink}" stroke-width="4" stroke-linejoin="round" paint-order="stroke">{p[1]}</text>
<rect x="150" y="266" width="120" height="20" rx="10" fill="{CREAM}"/>
<text x="210" y="280.5" font-family="Fraunces, Georgia, serif" font-weight="700" font-size="12" text-anchor="middle" fill="{ink}">12 cans · {p[5]} fiber</text>
<circle cx="66" cy="228" r="22" fill="{CREAM}" stroke="{ink}" stroke-width="2"/>
<text x="66" y="234" font-family="Fraunces, Georgia, serif" font-weight="900" font-size="18" text-anchor="middle" fill="{ink}">12</text>
'''
    write(f"packs/{h}.svg", svg("0 0 420 322", body))

# variety
fav = [P[0], P[1], P[2], P[4]]
body = ''
for i, (x, y) in enumerate([(10, 10), (150, 10), (10, 270), (150, 270)]):
    body += can_use(fav[i], x, y, .5, f"v{i}")
write("variety-fan-favorites.svg", svg("0 0 260 526", body))

# badge
cs = ''.join(f'<circle cx="{60+42*math.cos(i*math.pi/6):.2f}" cy="{60+42*math.sin(i*math.pi/6):.2f}" r="14" fill="#0f3b2e"/>' for i in range(12))
badge = cs + f'<circle cx="60" cy="60" r="44" fill="#0f3b2e"/><circle cx="60" cy="60" r="38" fill="none" stroke="{CREAM}" stroke-width="1.5" stroke-dasharray="2 4"/><text x="60" y="71" font-family="Fraunces, Georgia, serif" font-weight="900" font-size="32" text-anchor="middle" fill="{CREAM}">Sale</text>'
write("badge-sale.svg", svg("0 0 120 120", badge))

# tile
t = can_use(P[0], 204.9, 66, 0.951, "t")
write("tile.svg", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" style="color:#fde1e3">\n<rect width="600" height="600" rx="20" fill="var(--tile-bg, currentColor)"/>\n' + t + '\n</svg>\n')
# json
RATINGS = {'cherry-pop': 4.8, 'orange-burst': 4.7, 'strawberry-lime': 4.6, 'lemon-lime-zing': 4.9, 'mango-tango': 4.5, 'mint-mojito': 4.7, 'grape-soda': 4.8, 'root-beer': 4.6}
prods = []
for p in P:
    h = p[0]
    prods.append({
        "handle": h, "name": p[1], "tagline": p[4], "fiber": p[5], "line": p[6],
        "price": 29.00, "compare_at": p[11],
        "color": p[7], "accent": p[8], "tile_bg": p[9], "rating": RATINGS.get(h, 4.7),
        "can": f"cans/{h}.svg", "pack": f"packs/{h}.svg",
        "variants": [{"title": "12-pack", "cans": 12, "price": 29.00}, {"title": "24-pack", "cans": 24, "price": 54.00}],
        "subscription": {"discount_percent": 15, "every_weeks": [2, 4, 8]},
    })
data = {"currency": "USD", "products": prods, "bundles": [
    {"handle": "fan-favorites", "name": "Fan Favorites", "tagline": "Four top flavors, one box", "price": 36.00,
     "flavors": ["cherry-pop", "orange-burst", "strawberry-lime", "mango-tango"], "image": "variety-fan-favorites.svg"},
    {"handle": "build-your-own", "name": "Build your own", "tagline": "Pick any 3 flavors, save 10%", "pick": 3, "discount_percent": 10},
]}
js = json.dumps(data, indent=2)
_old = os.path.join(OUT, "products.json")
if os.path.exists(_old):
    try: data["banners"] = json.load(open(_old)).get("banners", {})
    except Exception: pass
js = json.dumps(data, indent=2)
open(_old, "w").write(js + "\n")

catalog = '''/* Fizz demo catalog. Works over file:// (inline fallback) and http (fetches products.json). */
(function () {
  var DATA = %s;
  var base = (function () {
    var s = document.currentScript && document.currentScript.src;
    return s ? s.replace(/[^\\/]*$/, "") : "";
  })();
  function money(n) { return "$" + Number(n).toFixed(2); }
  var C = window.FizzCatalog = {
    base: base,
    data: DATA,
    all: function () { return C.data.products.slice(); },
    get: function (h) {
      var a = C.data.products.concat(C.data.bundles || []);
      for (var i = 0; i < a.length; i++) if (a[i].handle === h) return a[i];
      return null;
    },
    byLine: function (l) { return C.data.products.filter(function (p) { return p.line === l; }); },
    render: function (root) {
      (root || document).querySelectorAll("[data-product]").forEach(function (el) {
        var p = C.get(el.getAttribute("data-product"));
        if (!p) return;
        var n = el.querySelector("[data-name]"); if (n) n.textContent = p.name;
        var pr = el.querySelector("[data-price]"); if (pr) pr.textContent = money(p.price);
        var c = el.querySelector("[data-compare]");
        if (c) { c.textContent = p.compare_at ? money(p.compare_at) : ""; c.hidden = !p.compare_at; }
        var im = el.querySelector("img[data-can]");
        if (im && p.can) { im.src = base + p.can; im.alt = p.name; }
      });
    }
  };
  try {
    if (location.protocol !== "file:" && window.fetch) {
      fetch(base + "products.json").then(function (r) { return r.json(); }).then(function (d) { C.data = d; C.render(document); }).catch(function () {});
    }
  } catch (e) {}
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { C.render(document); });
  else C.render(document);
})();
''' % js
open(os.path.join(OUT, "catalog.js"), "w").write(catalog)

readme = '''# Fizz catalog
1. Add `<script src="assets/catalog/catalog.js"></script>` at the end of the page body.
2. Wrap a product in `<div data-product="cherry-pop">` with `[data-name]`, `[data-price]`, `[data-compare]` and `<img data-can>` inside.
3. `FizzCatalog.render()` runs on load; call `FizzCatalog.render(el)` after you inject new markup.
4. Use `FizzCatalog.all()`, `.get(handle)`, `.byLine("Classics")` to build grids; add `tile_bg` as the card background.
5. Other art: `packs/<handle>.svg`, `variety-fan-favorites.svg`, `badge-sale.svg`; edit `products.json` only, then rerun the generator.
'''
open(os.path.join(OUT, "sample-tile.html"), "w").write('''<!doctype html><meta charset="utf-8"><title>Fizz tiles</title>
<style>body{margin:0;padding:24px;background:#fffaf0;font-family:Georgia,serif}.g{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:960px}
.t{aspect-ratio:1;border-radius:calc(100%% * 20 / 600);display:flex;align-items:center;justify-content:center}.t img{height:78%%;display:block}</style>
<div class="g" id="g"></div><script src="catalog.js"></script>
<script>FizzCatalog.all().forEach(function(p){var d=document.createElement("div");d.className="t";d.style.background=p.tile_bg;d.innerHTML='<img src="'+p.can+'" alt="'+p.name+'">';document.getElementById("g").appendChild(d)})</script>
''')
open(os.path.join(OUT, "README.md"), "w").write(readme)
