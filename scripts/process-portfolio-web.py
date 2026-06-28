"""Odstráň biele pozadie z používateľovho orezu úplne (flood-fill od rohov)
a orež na obsah (zariadenia), pomer 4:3, pre tmavý web."""
from PIL import Image, ImageDraw

SRC = r"C:\Users\kingm\Downloads\Untitled design.png"
OUT = r"C:\Users\kingm\matewlogic-web\public\portfolio-web.png"
INK = (10, 10, 11)

im = Image.open(SRC).convert("RGB")
W, H = im.size

# 1) flood-fill biele pozadie (vrátane anti-aliasing prechodu) -> tmavá
for seed in [(0, 0), (W - 1, 0), (0, H - 1), (W - 1, H - 1),
             (W // 2, 0), (W // 2, H - 1), (0, H // 2), (W - 1, H // 2)]:
    ImageDraw.floodfill(im, seed, INK, thresh=210)

px = im.load()

# 2) bbox obsahu (nie tmavé pozadie)
def d(p):
    return abs(p[0] - INK[0]) + abs(p[1] - INK[1]) + abs(p[2] - INK[2])

minx, miny, maxx, maxy = W, H, 0, 0
for y in range(0, H, 2):
    for x in range(0, W, 2):
        if d(px[x, y]) > 24:
            if x < minx: minx = x
            if y < miny: miny = y
            if x > maxx: maxx = x
            if y > maxy: maxy = y
print("content bbox", minx, miny, maxx, maxy)

# malý inset dovnútra, aby nezostal žiadny svetlý okraj dosky
inset = int((maxx - minx) * 0.015)
minx += inset; maxx -= inset; miny += inset; maxy -= inset
crop = im.crop((minx, miny, maxx, maxy))
cw, ch = crop.size
print("content crop", cw, ch, "ratio %.3f" % (cw / ch))

# na presné 4:3
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
