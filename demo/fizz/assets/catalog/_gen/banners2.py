import os, sys, math, json, random
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from banners import *   # regenerates set 1
K = "#5a3a1a"
ALL = [p[0] for p in P]
def grp(x, y, sc, rot, inner): return f'<g transform="translate({x} {y}) rotate({rot}) scale({sc})">{inner}</g>'
def heart(fill="#e8587a", st="#8a1f3a"): return f'<path d="M0 70 C-120 -10 -90 -100 -40 -90 C-15 -85 0 -60 0 -45 C0 -60 15 -85 40 -90 C90 -100 120 -10 0 70Z" fill="{fill}" stroke="{st}" stroke-width="5" stroke-linejoin="round"/>'
def leaf(fill="#4c9a3a"): return f'<path d="M0 0 C30 -40 80 -40 100 -80 C60 -90 10 -60 0 0Z" fill="{fill}" stroke="{K}" stroke-width="4" stroke-linejoin="round"/><path d="M4 -4 C30 -30 60 -50 90 -76" stroke="{K}" stroke-width="3" fill="none" opacity=".5"/>'
def sun(r=60): return f'<g stroke="#f2a516" stroke-width="10" stroke-linecap="round">' + ''.join(f'<path d="M{(r+16)*math.cos(i*math.pi/6):.0f} {(r+16)*math.sin(i*math.pi/6):.0f} L{(r+40)*math.cos(i*math.pi/6):.0f} {(r+40)*math.sin(i*math.pi/6):.0f}"/>' for i in range(12)) + f'</g><circle r="{r}" fill="#ffd54a" stroke="{K}" stroke-width="5"/>'
def recycle(): return '<circle r="62" fill="#2fa05a" stroke="%s" stroke-width="5"/>' % CREAM + ''.join(f'<g transform="rotate({k})"><path d="M0 -34 A34 34 0 0 1 29 17" stroke="{CREAM}" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M20 4 L40 22 L14 28Z" fill="{CREAM}"/></g>' for k in (0, 120, 240))
def pin(): return f'<ellipse cx="0" cy="6" rx="46" ry="10" fill="#000" opacity=".15"/><path d="M0 0 C-40 -50 -60 -80 -60 -110 A60 60 0 1 1 60 -110 C60 -80 40 -50 0 0Z" fill="#c8203a" stroke="#5a1520" stroke-width="5" stroke-linejoin="round"/><circle cy="-112" r="24" fill="{CREAM}" stroke="#5a1520" stroke-width="4"/>'
def envelope(w=400, h=260, seal=True):
    s = f'<rect x="{-w/2}" y="{-h/2}" width="{w}" height="{h}" rx="14" fill="{CREAM}" stroke="{K}" stroke-width="6"/><path d="M{-w/2} {-h/2} L0 {h*.1} L{w/2} {-h/2}" fill="#f6dfaa" stroke="{K}" stroke-width="6" stroke-linejoin="round"/><path d="M{-w/2} {h/2} L{-w*.12} {-h*.05} M{w/2} {h/2} L{w*.12} {-h*.05}" stroke="{K}" stroke-width="5" fill="none"/>'
    if seal: s += f'<circle cy="{h*.1}" r="26" fill="#c8203a" stroke="#5a1520" stroke-width="4"/><path d="M0 {h*.1+11} C-18 {h*.1-2} -10 {h*.1-16} 0 {h*.1-6} C10 {h*.1-16} 18 {h*.1-2} 0 {h*.1+11}Z" fill="{CREAM}"/>'
    return s
def newspaper(w=240, h=300):
    s = f'<rect x="{-w/2}" y="{-h/2}" width="{w}" height="{h}" rx="6" fill="#fdfaf0" stroke="{K}" stroke-width="5"/><rect x="{-w/2+16}" y="{-h/2+16}" width="{w-32}" height="34" fill="{K}"/><rect x="{-w/2+16}" y="{-h/2+64}" width="{w*.5}" height="{h*.3}" fill="#e8c9a0" stroke="{K}" stroke-width="3"/>'
    for i in range(7): s += f'<rect x="{-w/2+16+(w*.5+10 if i<4 else 0)}" y="{-h/2+64+(i%4)*(h*.3/4) if i<4 else -h/2+64+h*.3+12+(i-4)*16}" width="{w*.5-22 if i<4 else w-32}" height="7" rx="3" fill="#b8ad98"/>'
    return s
def phone(): return f'<rect x="-70" y="-130" width="140" height="260" rx="26" fill="#2d2a3a" stroke="{K}" stroke-width="5"/><rect x="-58" y="-104" width="116" height="204" rx="10" fill="#fff3d6"/><rect x="-18" y="-120" width="36" height="8" rx="4" fill="#555"/><rect x="-46" y="-86" width="70" height="40" rx="14" fill="#c8203a"/><rect x="-24" y="-30" width="70" height="40" rx="14" fill="#7fd0c0"/><rect x="-46" y="26" width="70" height="40" rx="14" fill="#c8203a"/><circle cy="114" r="6" fill="#555"/>'
def flask(): return f'<path d="M-30 -110 H30 V-44 L92 78 Q104 112 70 112 H-70 Q-104 112 -92 78 L-30 -44Z" fill="#eaf7fb" stroke="{K}" stroke-width="6" stroke-linejoin="round"/><path d="M-62 22 L62 22 L92 78 Q104 112 70 112 H-70 Q-104 112 -92 78Z" fill="#7fd08a"/><rect x="-38" y="-122" width="76" height="16" rx="6" fill="#d9dde0" stroke="{K}" stroke-width="5"/><circle cx="-20" cy="60" r="9" fill="#fff" opacity=".6"/><circle cx="18" cy="76" r="6" fill="#fff" opacity=".6"/><circle cx="6" cy="40" r="5" fill="#fff" opacity=".6"/>'
def clipboard():
    s = f'<rect x="-110" y="-150" width="220" height="300" rx="16" fill="#fff3d6" stroke="{K}" stroke-width="6"/><rect x="-44" y="-166" width="88" height="34" rx="12" fill="#b27a47" stroke="{K}" stroke-width="5"/>'
    for i in range(4):
        y = -90 + i * 60
        s += f'<rect x="-80" y="{y-16}" width="32" height="32" rx="8" fill="#fff" stroke="{K}" stroke-width="4"/><path d="M-73 {y} l8 9 l14 -18" fill="none" stroke="#2fa05a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><rect x="-30" y="{y-6}" width="{100-i*12}" height="12" rx="6" fill="#c9bfa4"/>'
    return s
def glass():
    return f'<path d="M-70 -150 H70 L56 130 Q54 150 34 150 H-34 Q-54 150 -56 130Z" fill="#cfeef7" fill-opacity=".6" stroke="{K}" stroke-width="6" stroke-linejoin="round"/><path d="M-64 -90 H64 L54 124 Q52 140 34 140 H-34 Q-52 140 -54 124Z" fill="#6b3418"/><path d="M-64 -90 H64" stroke="#e8c48e" stroke-width="12"/><circle cx="-24" cy="-30" r="9" fill="#fff" opacity=".5"/><circle cx="20" cy="30" r="7" fill="#fff" opacity=".5"/><circle cx="-8" cy="80" r="10" fill="#fff" opacity=".5"/><path d="M30 -170 L50 -60" stroke="#c8203a" stroke-width="10" stroke-linecap="round"/>'
def cube(x, y, r=0): return f'<g transform="translate({x} {y}) rotate({r})"><rect x="-26" y="-26" width="52" height="52" rx="8" fill="#fff" stroke="{K}" stroke-width="4"/><path d="M-26 -10 L-10 -26 M26 -10 L10 -26" stroke="#d9d2c0" stroke-width="3"/><circle cx="-8" cy="6" r="2.5" fill="#cfc7b2"/><circle cx="10" cy="12" r="2.5" fill="#cfc7b2"/></g>'
def bubble_speech(): return f'<path d="M-170 -100 Q-170 -140 -130 -140 H130 Q170 -140 170 -100 V40 Q170 80 130 80 H-20 L-90 150 L-80 80 H-130 Q-170 80 -170 40Z" fill="{CREAM}" stroke="{K}" stroke-width="6" stroke-linejoin="round"/><path d="M-34 -64 a34 34 0 1 1 50 30 q-16 10 -16 34" fill="none" stroke="#c8203a" stroke-width="16" stroke-linecap="round"/><circle cx="0" cy="40" r="11" fill="#c8203a"/>'
def awning(x, y, w, n=8):
    sw = w / n; s = ''
    for i in range(n): s += f'<path d="M{x+i*sw:.0f} {y} h{sw:.0f} v70 a{sw/2:.0f} {sw/2:.0f} 0 0 1 -{sw:.0f} 0z" fill="{"#c8203a" if i%2==0 else CREAM}" stroke="#5a1520" stroke-width="4"/>'
    return s
def rays(cx, cy, c1, c2, n=24, W=1600):
    s = ''
    for i in range(n):
        a0 = math.radians(i*360/n); a1 = math.radians((i+1)*360/n)
        s += f'<path d="M{cx} {cy} L{cx+3000*math.cos(a0):.0f} {cy+3000*math.sin(a0):.0f} L{cx+3000*math.cos(a1):.0f} {cy+3000*math.sin(a1):.0f}Z" fill="{c1 if i%2 else c2}"/>'
    return s
def disc(cx, cy, r, c, n=18): return scallop(cx, cy, r, n, c)

W, H = 1600, 700
AV = (320, 80, 1280, 620)
def page(name, bg, cans, fruits, body, seed, disc_c="#fff"):
    b = defs(cans, fruits) + f'<rect width="{W}" height="{H}" fill="{bg}"/>' + disc(800, 350, 290, disc_c) .replace('<g fill', '<g opacity=".55" fill', 1) if False else defs(cans, fruits) + f'<rect width="{W}" height="{H}" fill="{bg}"/>'
    b += f'<g opacity=".5">{scallop(800, 350, 280, 18, "#fff")}</g>'
    b += bubbles(16, W, H, seed, 8, 28, "#fff", avoid=AV)
    out(f"{name}.svg", W, H, b + body)

page("why-fizz", "#d6f1ea", ["lemon-lime-zing"], ["lemon-lime-zing", "mint-mojito"],
     grp(560, 380, 1, 0, glass()) + cube(380, 570) + cube(440, 575, 8) + cube(500, 580, -6) + cube(410, 520, -4) + cube(470, 522, 10) + cube(440, 470, 3)
     + f'<path d="M720 110 V590" stroke="{K}" stroke-width="5" stroke-dasharray="4 16" stroke-linecap="round"/><circle cx="720" cy="350" r="34" fill="{CREAM}" stroke="{K}" stroke-width="5"/><path d="M706 336 L734 364 M734 336 L706 364" stroke="#c8203a" stroke-width="7" stroke-linecap="round"/>'
     + can("lemon-lime-zing", 1000, 350, 1.0, 0, True) + fr("mint-mojito", 1230, 520, .8, 10) + fr("lemon-lime-zing", 1200, 180, .9, -10), 1)

page("sustainability", "#cdeefa", ["orange-burst", "mint-mojito"], [],
     f'<g transform="translate(1340 120)">{sun()}</g><path d="M0 560 Q300 480 600 540 T1200 530 T1600 520 V700 H0Z" fill="#7cc46a" stroke="{K}" stroke-width="5"/><path d="M0 630 Q400 580 800 630 T1600 610 V700 H0Z" fill="#4c9a3a"/>'
     + grp(250, 600, 1.2, -30, leaf()) + grp(1320, 640, 1.3, 200, leaf("#2fa05a")) + grp(1100, 590, .9, -50, leaf())
     + can("orange-burst", 690, 340, .9, -6, True) + can("mint-mojito", 910, 340, .9, 6, True) + grp(800, 560, 1, 0, recycle()), 2, "#fff")

page("guarantee", "#fde1e3", ["cherry-pop"], ["cherry-pop"],
     grp(800, 340, 2.6, 0, heart("#f3a0b4", "#8a1f3a")).replace('stroke-width="5"', 'stroke-width="3"')
     + can("cherry-pop", 800, 340, 1.0, 0, True)
     + f'<g transform="translate(1010 470)"><path d="M-30 20 L-50 110 L-20 90 L0 120 L10 30Z" fill="#c8203a" stroke="#5a1520" stroke-width="4" stroke-linejoin="round"/><path d="M30 20 L50 110 L20 90 L0 120 L-10 30Z" fill="#a8182f" stroke="#5a1520" stroke-width="4" stroke-linejoin="round"/>{scallop(0, 0, 54, 14, "#f2a516")}<circle r="46" fill="none" stroke="{CREAM}" stroke-width="4" stroke-dasharray="3 8"/><path d="M-22 4 L-6 20 L24 -16" fill="none" stroke="{CREAM}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></g>'
     + fr("cherry-pop", 560, 540, .8, -10) + grp(1180, 190, .55, 12, heart("#e8587a")), 3, "#fff")

page("quality", "#e6f2d2", ["lemon-lime-zing"], ["lemon-lime-zing"],
     grp(560, 380, 1.15, -4, flask()) + can("lemon-lime-zing", 800, 350, 1.0, 0, True) + grp(1060, 360, 1.1, 5, clipboard()) + fr("lemon-lime-zing", 1240, 560, .6, 0), 4, "#fff")

page("press", "#efe5d0", ["grape-soda"], [],
     grp(520, 430, 1.1, -5, newspaper()) + grp(580, 410, 1.1, 4, newspaper()) + grp(640, 380, 1.1, -1, newspaper()) + can("grape-soda", 1000, 340, 1.0, 5, True)
     + grp(1250, 520, 1, 0, f'<circle r="34" fill="#c8203a" stroke="#5a1520" stroke-width="4"/><path d="M0 -18 L5 -5 L19 -5 L8 4 L12 18 L0 10 L-12 18 L-8 4 L-19 -5 L-5 -5Z" fill="{CREAM}"/>'), 5, "#fff")

page("faq", "#e8defa", ["cherry-pop", "mint-mojito", "orange-burst"], [],
     can("cherry-pop", 560, 400, .8, -8, True) + can("orange-burst", 1040, 400, .8, 8, True) + grp(800, 280, 1.15, 0, bubble_speech()) + can("mint-mojito", 800, 520, .55, 0, True), 6, "#fff")

page("contact", "#fff0cc", ["mango-tango"], [],
     grp(520, 400, 1, -6, envelope()) + can("mango-tango", 800, 340, 1.0, 0, True) + grp(1080, 360, 1.1, 8, phone())
     + bubbles(4, 400, 200, 3, 10, 22, "#e6b95c") .replace('cx="', 'cx="').replace('', ''), 7, "#fff")

page("store-locator", "#d6f1ea", ["cherry-pop", "orange-burst", "mint-mojito", "grape-soda"], [],
     f'<rect x="0" y="560" width="1600" height="140" fill="#bfe2d8"/><rect x="420" y="190" width="760" height="380" fill="#fdf0d5" stroke="{K}" stroke-width="6"/><rect x="450" y="450" width="700" height="14" fill="#a87344" stroke="{K}" stroke-width="4"/>'
     + awning(400, 150, 800) + ''.join(can(c, 560 + i * 160, 450 - 150, .55, 0) for i, c in enumerate(["cherry-pop", "orange-burst", "mint-mojito", "grape-soda"]))
     + f'<g transform="translate(1260 580)">{pin()}</g>', 8, "#fff")

# ---------- flavor scenes ----------
for h in ALL:
    p = PD[h]; col, acc = p[7], p[8]
    b = defs([h], [h]) + f'<rect width="1200" height="1200" fill="{mix(col, .55)}"/>' + scallop(600, 580, 400, 18, mix(acc, .2) if False else acc, .55) + f'<circle cx="600" cy="580" r="370" fill="{darken(col, .8)}"/><circle cx="600" cy="580" r="370" fill="none" stroke="{CREAM}" stroke-width="5" stroke-dasharray="3 14" stroke-linecap="round"/>'
    b += fr(h, 170, 210, 1.7, -15) + fr(h, 1040, 230, 1.6, 18)
    b += bubbles(20, 1200, 1200, len(h) + 11, 8, 32, CREAM, avoid=(300, 200, 900, 1000))
    b += can(h, 600, 560, 1.3, -4, True)
    for x, y, s_, r in [(240, 980, 1.1, -10), (430, 1060, 1.0, 8), (770, 1060, 1.0, -8), (960, 985, 1.1, 12), (130, 760, .9, 10), (1080, 770, .9, -14)]:
        b += fr(h, x, y, s_, r)
    for k in range(14):
        a = random.Random(k + 3).uniform(0, 6.28); b += f'<circle cx="{600+420*math.cos(a):.0f}" cy="{580+380*math.sin(a):.0f}" r="{6+k%4*3}" fill="{CREAM}" opacity=".9"/>'
    out(f"flavor-{h}.svg", 1200, 1200, b)

# ---------- social ----------
def S(name, w_bg, cans, fruits, body):
    out(f"{name}.svg", 1000, 1000, defs(cans, fruits) + f'<rect width="1000" height="1000" fill="{w_bg}"/>' + body)
# 1 picnic
chk = ''.join(f'<rect x="{x}" y="{y}" width="60" height="60" fill="#c8203a" opacity=".85"/>' for x in range(-300, 300, 120) for y in range(-100, 100, 120)) + ''.join(f'<rect x="{x+60}" y="{y+60}" width="60" height="60" fill="#c8203a" opacity=".85"/>' for x in range(-300, 300, 120) for y in range(-100, 100, 120))
S("social-1", "#cdeefa", ["cherry-pop", "mint-mojito"], ["strawberry-lime"],
  f'<g transform="translate(1520 150) scale(.2)"></g><g transform="translate(850 140)">{sun(50)}</g><path d="M0 520 Q300 470 600 520 T1000 500 V1000 H0Z" fill="#7cc46a" stroke="{K}" stroke-width="5"/>'
  + f'<g transform="translate(500 760) skewX(-25)"><rect x="-340" y="-150" width="680" height="300" fill="{CREAM}" stroke="{K}" stroke-width="6"/><g clip-path="none">{chk}</g><rect x="-340" y="-150" width="680" height="300" fill="none" stroke="{K}" stroke-width="6"/></g>'
  .replace(chk, '') + ''.join(f'<rect x="{200+i*70}" y="{650+j*60}" width="35" height="30" fill="#c8203a" opacity=".6" transform="skewX(0)"/>' for i in range(8) for j in range(3) if (i+j) % 2 == 0)
  + can("cherry-pop", 400, 560, .72, -4, True) + can("mint-mojito", 580, 580, .72, 5, True) + fr("strawberry-lime", 760, 800, 1.0, 10))
# 2 desk
S("social-2", "#d6f1ea", ["orange-burst"], [],
  f'<rect x="150" y="150" width="700" height="440" rx="20" fill="#2d2a3a" stroke="{K}" stroke-width="6"/><rect x="180" y="180" width="640" height="380" rx="8" fill="#fff3d6"/>'
  + ''.join(f'<rect x="{230+i*110}" y="{480-h_}" width="70" height="{h_}" rx="8" fill="{c}"/>' for i, (h_, c) in enumerate([(120, "#f26b1d"), (200, "#f2a516"), (160, "#1ea58b"), (260, "#c8203a"), (190, "#6d3fa6")]))
  + f'<rect x="100" y="600" width="800" height="26" rx="10" fill="#d9dde0" stroke="{K}" stroke-width="5"/><rect x="0" y="700" width="1000" height="300" fill="#8a5a35"/><rect x="0" y="690" width="1000" height="26" fill="#b27a47" stroke="{K}" stroke-width="4"/>'
  + f'<g transform="translate(130 640)"><path d="M0 60 H90 L76 0 H14Z" fill="#c8955a" stroke="{K}" stroke-width="5"/>{grp(45, -10, 1, 0, leaf())}{grp(45, -10, 1, 0, leaf()).replace("rotate(0)", "rotate(-70)")}</g>'
  + can("orange-burst", 800, 520, .62, 0, True) + '<circle cx="560" cy="880" r="40" fill="#fff3d6" stroke="#5a3a1a" stroke-width="5"/>')
# 3 gym bag
S("social-3", "#e8defa", ["grape-soda", "lemon-lime-zing"], [],
  f'<rect x="0" y="760" width="1000" height="240" fill="#cbb6ee"/><path d="M300 520 Q500 360 700 520" fill="none" stroke="#1d5f66" stroke-width="22" stroke-linecap="round"/>'
  + can("grape-soda", 640, 420, .75, 10, True)
  + f'<rect x="170" y="490" width="660" height="300" rx="60" fill="#2d8a91" stroke="{K}" stroke-width="6"/><path d="M170 590 H830" stroke="{K}" stroke-width="5"/><path d="M240 630 H760" stroke="{CREAM}" stroke-width="8" stroke-dasharray="3 18" stroke-linecap="round"/><rect x="620" y="650" width="150" height="100" rx="24" fill="#1d5f66" stroke="{K}" stroke-width="5"/><circle cx="260" cy="540" r="16" fill="#f2a516" stroke="{K}" stroke-width="4"/>'
  + f'<g transform="translate(180 860)"><rect x="-90" y="-8" width="180" height="16" rx="6" fill="#9aa0a6" stroke="{K}" stroke-width="4"/><rect x="-100" y="-34" width="30" height="68" rx="8" fill="#2d2a3a" stroke="{K}" stroke-width="4"/><rect x="70" y="-34" width="30" height="68" rx="8" fill="#2d2a3a" stroke="{K}" stroke-width="4"/></g>'
  + can("lemon-lime-zing", 830, 800, .5, -8, True))
# 4 beach
S("social-4", "#bfe9f7", ["mango-tango", "lemon-lime-zing"], [],
  f'<g transform="translate(180 170)">{sun(60)}</g><rect y="420" width="1000" height="160" fill="#4fbfd8"/><path d="M0 440 Q100 410 200 440 T400 440 T600 440 T800 440 T1000 440" fill="none" stroke="#fff" stroke-width="8" opacity=".7"/><rect y="560" width="1000" height="440" fill="#f6dfaa"/>'
  + f'<g transform="translate(500 780) rotate(-8)"><rect x="-360" y="-170" width="720" height="340" rx="14" fill="{CREAM}" stroke="{K}" stroke-width="6"/>' + ''.join(f'<rect x="{-360+i*120}" y="-170" width="60" height="340" fill="{"#c8203a" if i%2==0 else "#1ea58b"}" opacity=".9"/>' for i in range(0, 6)) + f'<rect x="-360" y="-170" width="720" height="340" rx="14" fill="none" stroke="{K}" stroke-width="6"/></g>'
  + can("mango-tango", 430, 600, .7, -4, True) + can("lemon-lime-zing", 640, 610, .7, 6, True)
  + f'<g transform="translate(800 860) rotate(12)"><circle cx="-34" r="26" fill="#2d2a3a" stroke="{K}" stroke-width="4"/><circle cx="34" r="26" fill="#2d2a3a" stroke="{K}" stroke-width="4"/><path d="M-8 -4 Q0 -12 8 -4" stroke="{K}" stroke-width="5" fill="none"/></g>')
# 5 party
fl = "".join(f'<path d="M{80+i*140} {80+int(40*math.sin(i))} l60 0 l-30 70z" fill="{c}" stroke="{K}" stroke-width="4"/>' for i, c in enumerate(["#c8203a", "#f2a516", "#1ea58b", "#6d3fa6", "#e8587a", "#7fb41a", "#f26b1d"]))
bal = "".join(f'<path d="M{x} {y+90} Q{x+8} {y+200} {x-10} {y+300}" stroke="{K}" stroke-width="3" fill="none"/><ellipse cx="{x}" cy="{y}" rx="55" ry="68" fill="{c}" stroke="{K}" stroke-width="5"/><ellipse cx="{x-18}" cy="{y-22}" rx="10" ry="18" fill="#fff" opacity=".4"/>' for x, y, c in [(120, 350, "#e8587a"), (240, 280, "#f2a516"), (880, 340, "#1ea58b"), (770, 270, "#6d3fa6")])
conf = "".join(f'<rect x="{random.Random(i).uniform(0,980):.0f}" y="{random.Random(i+50).uniform(120,900):.0f}" width="14" height="14" rx="3" fill="{["#c8203a","#f2a516","#1ea58b","#6d3fa6"][i%4]}" transform="rotate({i*37})"/>' for i in range(40))
S("social-5", "#ffe0e8", ["strawberry-lime", "orange-burst"], [],
  f'<path d="M0 100 Q500 190 1000 100" stroke="{K}" stroke-width="4" fill="none"/>' + fl + bal + conf + f'<rect y="780" width="1000" height="220" fill="#f0b4c4"/>'
  + can("strawberry-lime", 410, 590, .8, -6, True) + can("orange-burst", 600, 610, .8, 6, True))
# 6 fridge
S("social-6", "#e4f3f8", ["cherry-pop", "mint-mojito", "grape-soda"], [],
  f'<rect x="60" y="60" width="880" height="880" rx="30" fill="#f4fbfd" stroke="{K}" stroke-width="8"/><rect x="100" y="100" width="800" height="800" rx="10" fill="#e1f2f8"/>'
  + ''.join(f'<rect x="100" y="{y}" width="800" height="16" fill="#bfe0ea" stroke="{K}" stroke-width="4"/>' for y in (430, 760))
  + can("cherry-pop", 400, 280 - 10, .5, 0) + can("mint-mojito", 500, 280 - 10, .5, 0) + can("grape-soda", 600, 280 - 10, .5, 0)
  + f'<rect x="180" y="540" width="120" height="190" rx="10" fill="#fff" stroke="{K}" stroke-width="5"/><path d="M180 580 L240 550 L300 580" fill="#6bb6e0" stroke="{K}" stroke-width="5"/>'
  + f'<rect x="700" y="640" width="110" height="90" rx="14" fill="#f2a516" stroke="{K}" stroke-width="5"/><rect x="706" y="620" width="98" height="26" rx="8" fill="{CREAM}" stroke="{K}" stroke-width="5"/>'
  + can("cherry-pop", 480, 660, .5, 0) + can("mint-mojito", 580, 660, .5, 0)
  + f'<path d="M100 100 H900 V150 Q500 190 100 150Z" fill="#fff" opacity=".55"/>')

# ---------- promo strips ----------
def strip(name, bg, cans, body, seed, fruits=()):
    b = defs(cans, fruits) + f'<rect width="1600" height="400" fill="{bg}"/>' + bubbles(18, 1600, 400, seed, 8, 26, "#fff", avoid=(320, 40, 1280, 380)) + body
    out(f"{name}.svg", 1600, 400, b)
fl3 = ["cherry-pop", "orange-burst", "mint-mojito"]
strip("promo-subscribe", "#d6f1ea", fl3,
      f'<g opacity=".6">{scallop(800, 200, 170, 16, "#fff")}</g>'
      + f'<path d="M560 290 L500 190 L400 240 L490 320Z" fill="#d9a96c" stroke="{K}" stroke-width="4"/><path d="M840 290 L900 190 L1000 240 L910 320Z" fill="#d9a96c" stroke="{K}" stroke-width="4"/><path d="M590 230 H810 L840 290 H560Z" fill="#8a5a35" stroke="{K}" stroke-width="4"/>'
      + ''.join(can(c, x, y, .44, r) for c, x, y, r in zip(fl3, (645, 700, 755), (250, 210, 250), (-6, 0, 6)))
      + f'<path d="M560 290 H840 L826 380 H574Z" fill="#c8955a" stroke="{K}" stroke-width="4"/><path d="M690 290 H710 V380 H690Z" fill="#e8c48e"/>'
      + grp(1010, 200, .75, 7, f'<rect x="-130" y="-150" width="260" height="290" rx="26" fill="{CREAM}" stroke="{K}" stroke-width="6"/><path d="M-130 -90 V-124 a26 26 0 0 1 26 -26 H104 a26 26 0 0 1 26 26 V-90Z" fill="#c8203a" stroke="{K}" stroke-width="6"/>' + ''.join(f'<circle cx="{-90+c*60}" cy="{-50+r*55}" r="14" fill="{"#0f3b2e" if (r,c)==(1,2) else "#e8d8b4"}"/>' for r in range(3) for c in range(4)))
      + grp(1130, 310, .6, 0, f'<circle r="62" fill="#0f3b2e" stroke="{CREAM}" stroke-width="5"/><path d="M-30 -8 A32 32 0 0 1 24 -22" fill="none" stroke="{CREAM}" stroke-width="8" stroke-linecap="round"/><path d="M30 8 A32 32 0 0 1 -24 22" fill="none" stroke="{CREAM}" stroke-width="8" stroke-linecap="round"/><path d="M12 -40 L36 -20 L8 -8Z M-12 40 L-36 20 L-8 8Z" fill="{CREAM}"/>'), 61)
fan5 = [("cherry-pop", -48), ("mint-mojito", 48), ("orange-burst", -24), ("grape-soda", 24), ("lemon-lime-zing", 0)]
strip("promo-bundle", "#fff3d6", [c for c, _ in fan5],
      rays(800, 470, "#fbe3b0", "#fff3d6") + ''.join(f'<use href="#c-{c}" transform="translate(800 470) rotate({a}) translate(0 -215) scale(.55) translate(-150 -290)"/>' for c, a in fan5) + '<ellipse cx="800" cy="392" rx="200" ry="10" fill="#000" opacity=".08"/>', 62)
strip("promo-newsletter", "#fde9d2", ["cherry-pop"],
      can("cherry-pop", 800, 130, .38, 0) + grp(800, 250, .9, 0, envelope(460, 280))
      + bubbles(1, 1, 1, 1) + ''.join(f'<circle cx="{800+dx}" cy="{y}" r="{r_}" fill="#fff" fill-opacity=".35" stroke="{CREAM}" stroke-width="3"/>' for dx, y, r_ in [(-120, 70, 24), (-60, 40, 14), (100, 60, 20), (170, 30, 12), (40, 20, 10), (-190, 120, 14), (230, 100, 16)]), 63)
# draw envelope over can (can pokes out behind): reorder handled by body order above -> can drawn after envelope; fix by swapping

# ---------- json map ----------
pj = os.path.join(OUT, "products.json"); d = json.load(open(pj))
M = d["banners"]
def add(k, size, note): M[k] = {"path": f"banners/{k}.svg", "size": size, "focal": note}
for k in ["why-fizz","sustainability","guarantee","quality","press","faq","contact","store-locator"]:
    add(k, [1600,700], "page hero: main can/subject in the center 60%, props at sides")
for h in ALL: add(f"flavor-{h}", [1200,1200], "can center in its fruit world; fruit pile at the base")
for i in range(1,7): add(f"social-{i}", [1000,1000], "scene center, 1-2 cans")
add("promo-subscribe", [1600,400], "box and calendar center")
add("promo-bundle", [1600,400], "5-can fan center")
add("promo-newsletter", [1600,400], "envelope center with can and bubbles above")
open(pj, "w").write(json.dumps(d, indent=2) + "\n")
