import os
from PIL import Image, ImageDraw, ImageFont

width, height = 1200, 630
bg_color = "#F5F1E8"
text_color = "#1B1B1B"
accent_color = "#7A1F1F"

img = Image.new("RGB", (width, height), bg_color)
draw = ImageDraw.Draw(img)

border_margin = 60
draw.rectangle(
    [border_margin, border_margin, width - border_margin, height - border_margin],
    outline=text_color, width=4
)

try:
    font_large = ImageFont.truetype("arialbd.ttf", 90)
    font_small = ImageFont.truetype("ariali.ttf", 40)
except IOError:
    try:
        font_large = ImageFont.load_default(size=90)
        font_small = ImageFont.load_default(size=40)
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()

title = "THE GLOBAL GRID"
bbox_large = draw.textbbox((0,0), title, font=font_large)
w_large = bbox_large[2] - bbox_large[0]
h_large = bbox_large[3] - bbox_large[1]
draw.text(((width - w_large)/2, height/2 - 80), title, font=font_large, fill=text_color)

tagline = "Connecting the World's Stories"
bbox_small = draw.textbbox((0,0), tagline, font=font_small)
w_small = bbox_small[2] - bbox_small[0]
draw.text(((width - w_small)/2, height/2 + 40), tagline, font=font_small, fill=accent_color)

os.makedirs("public", exist_ok=True)
img.save("public/og.png")
print("Saved public/og.png")
