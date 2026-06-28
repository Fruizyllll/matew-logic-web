"""Spracovanie loga MatewLogic pre tmavý web.
- oreže priehľadné okraje
- svetlá verzia (tmavomodrý text -> biely, gradient M ostáva)
- vyseparuje samotné M ako štvorcovú značku
"""
from PIL import Image
import os

SRC = r"C:\Users\kingm\Downloads\matewlogiclogo-removebg-preview.png"
OUT = r"C:\Users\kingm\matewlogic-web\public"

img = Image.open(SRC).convert("RGBA")
print("source size:", img.size)

# orez na obsah
bbox = img.getbbox()
img = img.crop(bbox)
print("cropped size:", img.size)

px = img.load()
w, h = img.size

# --- svetlá verzia: tmavé pixely -> biele (alpha zachovaná) ---
light = img.copy()
lp = light.load()
for y in range(h):
    for x in range(w):
        r, g, b, a = lp[x, y]
        if a == 0:
            continue
        lum = 0.299 * r + 0.587 * g + 0.114 * b
        warm = r > 150 and r > b + 40  # gradient M (pink/orange)
        if lum < 120 and not warm:
            # text -> biely, intenzita podľa alfa zachovaná
            lp[x, y] = (245, 246, 248, a)
light.save(os.path.join(OUT, "matewlogic-logo-light.png"))
print("saved matewlogic-logo-light.png", light.size)

# --- originál (tmavý text) pre svetlé pozadie / referenciu ---
img.save(os.path.join(OUT, "matewlogic-logo-dark.png"))
print("saved matewlogic-logo-dark.png", img.size)

# --- vyseparovať M (teplé pixely) ---
minx, miny, maxx, maxy = w, h, 0, 0
found = False
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if a > 40 and r > 150 and r > b + 30:
            found = True
            if x < minx: minx = x
            if y < miny: miny = y
            if x > maxx: maxx = x
            if y > maxy: maxy = y

if found:
    pad = 6
    minx = max(0, minx - pad); miny = max(0, miny - pad)
    maxx = min(w, maxx + pad); maxy = min(h, maxy + pad)
    m = img.crop((minx, miny, maxx, maxy))
    mw, mh = m.size
    side = max(mw, mh)
    square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    square.paste(m, ((side - mw) // 2, (side - mh) // 2))
    square.save(os.path.join(OUT, "matewlogic-mark.png"))
    print("saved matewlogic-mark.png", square.size)
else:
    print("WARN: M not detected")
