import os, sys, random, math, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gen
from gen import P, can_inner, fruit, darken, CREAM, OUT
B = os.path.join(OUT, "banners")
PD = {p[0]: p for p in P}

def mix(h, k):  # mix with white
    h = h.lstrip('#'); r, g, b = [int(h[i:i+2], 16) for i in (0, 2, 4)]
    return "#%02x%02x%02x" % tuple(int(c + (255 - c) * k) for c in (r, g, b))

def ink(h): return darken(PD[h][7], PD[h][10])

def defs(cans=(), fruits=(), extra=""):
    s = "<defs>"
    for h in cans: s += f'<g id="c-{h}">{can_inner(PD[h])}</g>'
    for h in fruits: s += f'<g id="f-{h}">{fruit(h, ink(h))}</g>'
    return s + extra + "</defs>"

def can(h, x, y, sc, rot=0, shadow=False):
    s = ''
    if shadow:
        s += f'<ellipse cx="{x}" cy="{y+246*sc:.0f}" rx="{105*sc:.0f}" ry="{14*sc:.0f}" fill="#000" opacity=".16"/>'
    return s + f'<use href="#c-{h}" transform="translate({x} {y}) rotate({rot}) scale({sc}) translate(-150 -290)"/>'

def fr(h, x, y, sc, rot=0):
    return f'<use href="#f-{h}" transform="translate({x} {y}) rotate({rot}) scale({sc}) translate(-150 -300)"/>'

def bubbles(n, w, h, seed, rmin=8, rmax=34, stroke=CREAM, avoid=None):
    r = random.Random(seed); s = ''
    for _ in range(n):
        x, y, rad = r.uniform(0, w), r.uniform(0, h), r.uniform(rmin, rmax)
        if avoid and avoid[0] < x < avoid[2] and avoid[1] < y < avoid[3]: continue
        s += f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{rad:.0f}" fill="#fff" fill-opacity=".2" stroke="{stroke}" stroke-width="3" stroke-opacity=".85"/>'
        s += f'<path d="M{x-rad*.55:.0f} {y-rad*.1:.0f} A{rad*.6:.0f} {rad*.6:.0f} 0 0 1 {x-rad*.1:.0f} {y-rad*.55:.0f}" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>'
    return s

def scallop(cx, cy, r, n, fill, op=1):
    pr = r * math.sin(math.pi / n) * 1.15
    s = f'<g fill="{fill}" opacity="{op}">'
    for i in range(n):
        a = 2 * math.pi * i / n
        s += f'<circle cx="{cx+r*math.cos(a):.0f}" cy="{cy+r*math.sin(a):.0f}" r="{pr:.0f}"/>'
    return s + f'<circle cx="{cx}" cy="{cy}" r="{r:.0f}"/></g>'

def out(name, w, h, body):
    open(os.path.join(B, name), "w").write(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" preserveAspectRatio="xMidYMid slice">\n{body}\n</svg>\n')

# ---------- hero ----------
HF = {"cherry-pop": ("cherry-pop", "cherry-pop"), "orange-burst": ("orange-burst", "orange-burst"), "lemon-lime-zing": ("lemon-lime-zing", "lemon-lime-zing")}
def hero(h, w, hh):
    p = PD[h]; col = p[7]; bg = mix(col, .38); dk = darken(col, .72)
    m = min(w, hh); cx, cy = w/2, hh/2 + 10
    big = 1.42 * m / 1200 if w == hh else 1.3
    side = big * (.8 if w == hh else .82)
    dx = 235 * m / 1200 if w == hh else 285
    fa = (190, 250, 2.2*m/1200, -15) if w == hh else (210, 220, 2.0*hh/900, -15)
    fb = (w-180, hh-230, 2.4*m/1200, 20) if w == hh else (w-210, hh-210, 2.2*hh/900, 20)
    b = defs([h], [h])
    b += f'<rect width="{w}" height="{hh}" fill="{bg}"/>'
    b += scallop(cx, cy, 0.33*m, 16, CREAM, .4)
    b += f'<circle cx="{cx}" cy="{cy}" r="{0.34*m:.0f}" fill="{dk}"/>'
    b += f'<circle cx="{cx}" cy="{cy}" r="{0.34*m:.0f}" fill="none" stroke="{CREAM}" stroke-width="5" stroke-dasharray="3 14" stroke-linecap="round"/>'
    b += fr(h, *fa[:2], fa[2], fa[3]) + fr(h, *fb[:2], fb[2], fb[3])
    b += bubbles(22, w, hh, 3 + len(h), avoid=(w*.3, hh*.2, w*.7, hh*.8))
    b += can(h, cx - dx, cy + 40*m/1200, side, -13, True) + can(h, cx + dx, cy + 40*m/1200, side, 13, True)
    b += can(h, cx, cy, big, 0, True)
    # splash droplets
    for k in range(10):
        a = random.Random(k+7).uniform(0, 6.28); r0 = 0.4*m
        b += f'<circle cx="{cx+r0*math.cos(a)*1.1:.0f}" cy="{cy+r0*math.sin(a)*.9:.0f}" r="{6+k%4*3}" fill="{CREAM}" opacity=".85"/>'
    return b
for h in HF:
    out(f"hero-{h}.svg", 1200, 1200, hero(h, 1200, 1200))
    out(f"hero-{h}-wide.svg", 1600, 900, hero(h, 1600, 900))

# ---------- story ----------
def story():
    w, h = 1500, 1000
    fl = ["orange-burst", "cherry-pop", "mint-mojito", "mango-tango", "grape-soda"]
    b = defs(fl, ["orange-burst", "cherry-pop", "strawberry-lime", "lemon-lime-zing", "mango-tango"],
             '<pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="5" fill="#f3dcae"/></pattern>')
    b += '<rect width="1500" height="1000" fill="#fdf0d5"/><rect width="1500" height="1000" fill="url(#dots)"/>'
    # window
    b += '<rect x="1120" y="230" width="260" height="290" rx="130" fill="#bfe6f0" stroke="#5a3a1a" stroke-width="6"/><path d="M1250 230 V520 M1120 380 H1380" stroke="#5a3a1a" stroke-width="6"/><circle cx="1190" cy="310" r="22" fill="#fff" opacity=".5"/>'
    # shelf w/ jars
    b += '<rect x="90" y="300" width="300" height="14" rx="4" fill="#a87344" stroke="#5a3a1a" stroke-width="4"/>'
    for i, c in enumerate(["#f26b1d", "#c8203a", "#7fb41a"]):
        b += f'<rect x="{120+i*90}" y="236" width="64" height="64" rx="12" fill="{c}" stroke="#5a3a1a" stroke-width="4"/><rect x="{126+i*90}" y="222" width="52" height="16" rx="5" fill="{CREAM}" stroke="#5a3a1a" stroke-width="4"/>'
    # awning
    for i in range(15):
        c = "#c8203a" if i % 2 == 0 else CREAM
        b += f'<path d="M{i*100} 0 h100 v130 a50 50 0 0 1 -100 0z" fill="{c}" stroke="#5a1520" stroke-width="4"/>'
    b += '<rect x="0" y="0" width="1500" height="24" fill="#5a1520" opacity=".25"/>'
    # lamps
    for x in (360, 1140):
        b += f'<path d="M{x} 180 V270" stroke="#5a3a1a" stroke-width="4"/><path d="M{x-40} 320 a40 40 0 0 1 80 0z" fill="#f2a516" stroke="#5a3a1a" stroke-width="4"/><circle cx="{x}" cy="326" r="12" fill="#fff3a0"/>'
    # counter
    b += '<rect x="0" y="780" width="1500" height="220" fill="#8a5a35"/><rect x="0" y="770" width="1500" height="36" fill="#b27a47" stroke="#5a3a1a" stroke-width="4"/>'
    for x in range(0, 1500, 250): b += f'<path d="M{x} 806 V1000" stroke="#5a3a1a" stroke-width="4" opacity=".6"/>'
    # crates
    def crate(x, fruits):
        s = ''
        for i, (f, dx, dy, sc) in enumerate(fruits): s += fr(f, x+dx, 650+dy, sc)
        s += f'<rect x="{x-130}" y="680" width="260" height="100" rx="8" fill="#c8955a" stroke="#5a3a1a" stroke-width="5"/>'
        s += f'<path d="M{x-130} 714 H{x+130} M{x-130} 748 H{x+130}" stroke="#5a3a1a" stroke-width="4"/>'
        return s
    b += crate(240, [("orange-burst", -70, 20, .55), ("orange-burst", 0, 10, .55), ("orange-burst", 70, 20, .55)])
    b += crate(1260, [("lemon-lime-zing", -60, 5, .55), ("strawberry-lime", 30, 10, .5), ("mango-tango", 95, 20, .5)])
    b += crate(480, []) if False else ''
    xs = [490, 620, 750, 880, 1010]
    for i, (c, x) in enumerate(zip(fl, xs)):
        b += can(c, x, 778 - 192 - (0 if i == 2 else 6), .8, [-5, -2, 0, 2, 5][i], i == 2)
    b += fr("cherry-pop", 1000+170, 770, .5) if False else ''
    b += bubbles(10, w, 700, 5, 10, 26, "#e6b95c", avoid=(400, 200, 1100, 700))
    return b
out("story.svg", 1500, 1000, story())

# ---------- ingredients ----------
def ingredients():
    b = defs(["lemon-lime-zing"], ["orange-burst", "strawberry-lime", "mint-mojito", "lemon-lime-zing", "mango-tango"])
    K = "#5a3a1a"
    b += '<rect width="1500" height="1000" fill="#e6f2d2"/>'
    b += scallop(750, 500, 330, 18, "#fff3d6", .9) + f'<circle cx="750" cy="500" r="330" fill="#fff3d6" stroke="#9cc46a" stroke-width="5" stroke-dasharray="3 14" stroke-linecap="round"/>'
    root = f'<path d="M0 0 C34 4 44 50 34 130 C28 180 10 220 0 270 C-10 220 -28 180 -34 130 C-44 50 -34 4 0 0Z" fill="#e3c08a" stroke="{K}" stroke-width="5" stroke-linejoin="round"/><path d="M-32 50 H32 M-35 100 H35 M-26 150 H26 M-16 200 H16" stroke="{K}" stroke-width="3" opacity=".5"/><path d="M0 0 C-40 -40 -50 -90 -20 -120 C-8 -80 0 -50 0 0Z M0 0 C40 -40 50 -90 20 -120 C8 -80 0 -50 0 0Z M0 0 C-8 -50 -4 -100 0 -140 C4 -100 8 -50 0 0Z" fill="#4c9a3a" stroke="{K}" stroke-width="4" stroke-linejoin="round"/>'
    cas = f'<path d="M-26 0 C-40 60 -30 180 -8 280 C0 300 14 296 22 270 C46 180 40 60 26 0Z" fill="#8a5a35" stroke="{K}" stroke-width="5" stroke-linejoin="round"/><path d="M-22 70 L-6 84 M10 40 L24 56 M-14 150 L2 164 M12 140 L26 154 M-6 220 L8 234" stroke="#5a3a1a" stroke-width="4" stroke-linecap="round"/><ellipse cx="0" cy="0" rx="26" ry="10" fill="#fff3d6" stroke="{K}" stroke-width="5"/>'
    b += f'<g transform="translate(330 300) rotate(24)">{root}</g><g transform="translate(240 560) rotate(-8) scale(.9)">{root}</g>'
    b += f'<g transform="translate(470 880) rotate(-75) scale(1.1)">{cas}</g>'
    b += can("lemon-lime-zing", 750, 500, 1.25, 0, True)
    b += fr("orange-burst", 1130, 300, 1.5, 10) + fr("strawberry-lime", 1200, 600, 1.4, -12) + fr("mint-mojito", 1060, 830, 1.4, 8) + fr("lemon-lime-zing", 980, 150, .8, 0) + fr("mango-tango", 560, 160, .6, 0) if False else ''
    b += fr("orange-burst", 1130, 300, 1.5, 10) + fr("strawberry-lime", 1210, 610, 1.4, -12) + fr("mint-mojito", 1060, 850, 1.3, 8) + fr("lemon-lime-zing", 1290, 880, .9, 0)
    b += bubbles(14, 1500, 1000, 9, 8, 26, "#9cc46a", avoid=(300, 200, 1200, 800))
    return b
out("ingredients.svg", 1500, 1000, ingredients())

# ---------- subscribe ----------
def subscribe():
    fl = ["cherry-pop", "orange-burst", "mint-mojito"]
    K = "#5a3a1a"
    b = defs(fl)
    b += '<rect width="1500" height="1000" fill="#d6f1ea"/>' + scallop(660, 520, 400, 20, "#eaf9f5") + '<circle cx="660" cy="520" r="400" fill="#eaf9f5"/>'
    b += f'<path d="M360 560 L260 410 L120 480 L240 620Z" fill="#d9a96c" stroke="{K}" stroke-width="5" stroke-linejoin="round"/><path d="M880 560 L980 410 L1120 480 L1000 620Z" fill="#d9a96c" stroke="{K}" stroke-width="5" stroke-linejoin="round"/>'
    b += f'<path d="M400 430 H840 L880 560 H360Z" fill="#8a5a35" stroke="{K}" stroke-width="5" stroke-linejoin="round"/>'
    for c, x, y, r in zip(fl, (490, 620, 750), (470, 405, 470), (-6, 0, 6)): b += can(c, x, y, .7, r)
    b += f'<path d="M360 560 H880 L860 900 H380Z" fill="#c8955a" stroke="{K}" stroke-width="5" stroke-linejoin="round"/><path d="M590 560 H650 L645 900 H595Z" fill="#e8c48e" opacity=".8"/><rect x="420" y="620" width="400" height="130" rx="22" fill="{CREAM}" stroke="{K}" stroke-width="4"/><text x="620" y="722" font-family="Fraunces, Georgia, serif" font-weight="900" font-size="96" text-anchor="middle" fill="#c8203a" stroke="#5a1520" stroke-width="5" paint-order="stroke">fizz</text>'
    b += '<ellipse cx="620" cy="918" rx="270" ry="18" fill="#000" opacity=".14"/>'
    # calendar
    cal = f'<g transform="translate(1050 480) rotate(7)"><rect x="-130" y="-150" width="260" height="290" rx="26" fill="#000" opacity=".12" transform="translate(10 12)"/><rect x="-130" y="-150" width="260" height="290" rx="26" fill="{CREAM}" stroke="{K}" stroke-width="5"/><path d="M-130 -90 V-124 a26 26 0 0 1 26 -26 H104 a26 26 0 0 1 26 26 V-90Z" fill="#c8203a" stroke="{K}" stroke-width="5"/><rect x="-80" y="-176" width="16" height="50" rx="8" fill="#0f3b2e"/><rect x="64" y="-176" width="16" height="50" rx="8" fill="#0f3b2e"/>'
    for r in range(3):
        for c in range(4):
            x, y = -90 + c * 60, -50 + r * 55
            cal += f'<circle cx="{x}" cy="{y}" r="14" fill="{"#0f3b2e" if (r, c) == (1, 2) else "#e8d8b4"}"/>'
    cal += '<path d="M-98 28 l22 20 l22 -24" fill="none" stroke="#fff" stroke-width="0"/></g>'
    b += cal
    # repeat arrows
    b += f'<g transform="translate(1160 700)"><circle r="62" fill="#0f3b2e" stroke="{CREAM}" stroke-width="5"/><path d="M-30 -8 A32 32 0 0 1 24 -22" fill="none" stroke="{CREAM}" stroke-width="8" stroke-linecap="round"/><path d="M30 8 A32 32 0 0 1 -24 22" fill="none" stroke="{CREAM}" stroke-width="8" stroke-linecap="round"/><path d="M12 -40 L36 -20 L8 -8Z M-12 40 L-36 20 L-8 8Z" fill="{CREAM}"/></g>'
    b += bubbles(14, 1500, 1000, 21, 8, 26, "#4fbfa6", avoid=(300, 200, 1200, 800))
    return b
out("subscribe.svg", 1500, 1000, subscribe())

# ---------- variety ----------
def variety():
    fl = ["cherry-pop", "orange-burst", "strawberry-lime", "lemon-lime-zing", "mint-mojito", "grape-soda"]
    
    order = [("cherry-pop", -60), ("grape-soda", 60), ("orange-burst", -36), ("mint-mojito", 36), ("strawberry-lime", -12), ("lemon-lime-zing", 12)]
    b = defs(fl)
    b += '<rect width="1500" height="1000" fill="#fff3d6"/>'
    cols = ["#fbe3b0", "#fff3d6"]
    for i in range(24):
        a0, a1 = math.radians(-90 + i * 15 - 180 + 90 - 7.5), math.radians(-90 + (i + 1) * 15 - 180 + 90 - 7.5)
        # rays from pivot
        a0 = math.radians(i * 15 + 180); a1 = math.radians((i + 1) * 15 + 180)
        b += f'<path d="M750 960 L{750+2000*math.cos(a0):.0f} {960+2000*math.sin(a0):.0f} L{750+2000*math.cos(a1):.0f} {960+2000*math.sin(a1):.0f}Z" fill="{cols[i%2]}"/>'
    for c, a in order:
        b += f'<use href="#c-{c}" transform="translate(750 960) rotate({a}) translate(0 -420) scale(1.05) translate(-150 -290)"/>'
    b += '<ellipse cx="750" cy="990" rx="320" ry="26" fill="#000" opacity=".1"/>'
    b += bubbles(18, 1500, 1000, 31, 8, 30, "#e6b95c", avoid=(300, 100, 1200, 1000))
    return b
out("variety.svg", 1500, 1000, variety())

# ---------- collection header ----------
def header():
    hs = [p[0] for p in P]
    b = defs(hs)
    b += '<rect width="1600" height="500" fill="#fff3d6"/><path d="M0 400 Q200 350 400 400 T800 400 T1200 400 T1600 400 V500 H0Z" fill="#f6e3b8"/><path d="M0 440 Q200 400 400 440 T800 440 T1200 440 T1600 440 V500 H0Z" fill="#efd49b"/>'
    b += bubbles(26, 1600, 500, 41, 8, 26, "#e6b95c", avoid=(300, 0, 1300, 500))
    for i, h in enumerate(hs):
        b += can(h, 800 + (i - 3.5) * 140, 250 + (10 if i % 2 else -10), .68, (-4 if i % 2 else 4))
    return b
out("collection-header.svg", 1600, 500, header())

# ---------- mega promo ----------
def mega():
    h = "cherry-pop"
    b = defs([h], [h])
    b += '<rect width="800" height="800" fill="#fde1e3"/>' + scallop(400, 410, 270, 18, "#ffd0d6") + '<circle cx="400" cy="410" r="270" fill="#ffd0d6"/>'
    b += bubbles(16, 800, 800, 51, 8, 28, "#c8203a", avoid=(160, 100, 640, 720))
    b += fr(h, 130, 640, 1.0, -15) + fr(h, 690, 700, .8, 15) if False else fr(h, 120, 660, .9, -15)
    b += can(h, 400, 430, 1.2, -6, True)
    b += scallop(600, 190, 96, 12, "#0f3b2e") + f'<circle cx="600" cy="190" r="92" fill="none" stroke="{CREAM}" stroke-width="3" stroke-dasharray="3 9" stroke-linecap="round"/>'
    return b
out("mega-promo.svg", 800, 800, mega())

# ---------- products.json banners ----------
meta = {
 "hero-cherry-pop": ("hero-cherry-pop.svg", [1200,1200], "3 cans center, shape inside central 60%"),
 "hero-cherry-pop-wide": ("hero-cherry-pop-wide.svg", [1600,900], "3 cans center, fruit in far corners"),
 "hero-orange-burst": ("hero-orange-burst.svg", [1200,1200], "3 cans center, shape inside central 60%"),
 "hero-orange-burst-wide": ("hero-orange-burst-wide.svg", [1600,900], "3 cans center, fruit in far corners"),
 "hero-lemon-lime-zing": ("hero-lemon-lime-zing.svg", [1200,1200], "3 cans center, shape inside central 60%"),
 "hero-lemon-lime-zing-wide": ("hero-lemon-lime-zing-wide.svg", [1600,900], "3 cans center, fruit in far corners"),
 "story": ("story.svg", [1500,1000], "5 cans on the counter, center; crates and window at the sides"),
 "ingredients": ("ingredients.svg", [1500,1000], "can center in cream disc; roots left, fruit right"),
 "subscribe": ("subscribe.svg", [1500,1000], "open box center-left; calendar right of center"),
 "variety": ("variety.svg", [1500,1000], "6 cans fanned from bottom center"),
 "collection-header": ("collection-header.svg", [1600,500], "8 cans in a row, center 60% shows cans 2-7"),
 "mega-promo": ("mega-promo.svg", [800,800], "single can center; NEW starburst top right, text drawn in HTML"),
}
pj = os.path.join(OUT, "products.json"); d = json.load(open(pj))
d["banners"] = {k: {"path": "banners/" + v[0], "size": v[1], "focal": v[2]} for k, v in meta.items()}
open(pj, "w").write(json.dumps(d, indent=2) + "\n")
