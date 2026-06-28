"""Univerzálne: z mockupu s bielym pozadím sprav verziu pre tmavý web.
Použitie: python process-portfolio.py <vstup.png> <vystup.png>
- flood-fill biele pozadie (vrátane anti-aliasingu) -> tmavá
- orež na obsah, malý inset, pomer 4:3, retina-friendly
"""
import sys
from PIL import Image, ImageDraw

SRC = sys.argv[1]
OUT = sys.argv[2]
INK = (10, 10, 11)

im = Image.open(SRC).convert("RGB")
W, H = im.size

for seed in [(0, 0), (W - 1, 0), (0, H - 1), (W - 1, H - 1),
             (W // 2, 0), (W // 2, H - 1), (0, H // 2), (W - 1, H // 2)]:
    ImageDraw.floodfill(im, seed, INK, thresh=210)

px = im.load()

def d(p):
    return abs(p[0] - INK[0]) + abs(p[1] - INK[1]) + abs(p[2] - INK[2])

minx, miny, maxx, maxy = W, H, 0, 0
for y in range(0, H, 2):
    for x in range(0, W, 2):
        if d(px[x, y]) > 24:
            minx = min(minx, x); miny = min(miny, y)
            maxx = max(maxx, x); maxy = max(maxy, y)
print("content bbox", minx, miny, maxx, maxy)

inset = int((maxx - minx) * 0.015)
minx += inset; maxx -= inset; miny += inset; maxy -= inset
crop = im.crop((minx, miny, maxx, maxy))
cw, ch = crop.size
print("content crop", cw, ch, "ratio %.3f" % (cw / ch))

target = 4 / 3
if cw / ch > target:
    nw = int(round(ch * target)); left = (cw - nw) // 2
    crop = crop.crop((left, 0, left + nw, ch))
else:
    nh = int(round(cw / target)); top = (ch - nh) // 2
    crop = crop.crop((0, top, cw, top + nh))
print("4:3 crop", crop.size)

if crop.size[0] > 1400:
    nh = int(round(crop.size[1] * 1400 / crop.size[0]))
    crop = crop.resize((1400, nh), Image.LANCZOS)

crop.save(OUT)
print("saved", OUT, crop.size)
