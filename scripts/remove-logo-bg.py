"""Remove near-black backgrounds from Astrenox logos via edge flood-fill.

Also clears enclosed black pockets outside the center pupil (common when
logo artwork rings trap the original black canvas). Preserves the pupil.
"""

from __future__ import annotations

import collections
import shutil
from pathlib import Path

from PIL import Image

BRAND = Path(__file__).resolve().parents[1] / "public" / "brand"
THRESHOLD = 48
SOFT = 24


def is_near_black(r: int, g: int, b: int, a: int = 255) -> bool:
    if a < 8:
        return True
    mx = max(r, g, b)
    if mx <= THRESHOLD:
        return True
    # Soft dark purple/navy glow fringe on full lockup
    if mx <= THRESHOLD + 30 and abs(r - b) < 45 and g <= mx:
        if (r + g + b) / 3 <= THRESHOLD + 22:
            return True
    return False


def clear_pixel(px, x: int, y: int, soft: bool = False) -> None:
    r, g, b, a = px[x, y]
    mx = max(r, g, b)
    if not soft or mx <= THRESHOLD:
        px[x, y] = (0, 0, 0, 0)
    else:
        t = min(1.0, (mx - THRESHOLD) / max(SOFT, 1))
        px[x, y] = (r, g, b, int(a * t))


def flood_from_edges(px, w: int, h: int) -> None:
    visited = [[False] * w for _ in range(h)]
    q: collections.deque[tuple[int, int]] = collections.deque()

    def try_enqueue(x: int, y: int) -> None:
        if x < 0 or y < 0 or x >= w or y >= h or visited[y][x]:
            return
        r, g, b, a = px[x, y]
        if is_near_black(r, g, b, a):
            visited[y][x] = True
            q.append((x, y))

    for x in range(w):
        try_enqueue(x, 0)
        try_enqueue(x, h - 1)
    for y in range(h):
        try_enqueue(0, y)
        try_enqueue(w - 1, y)

    while q:
        x, y = q.popleft()
        clear_pixel(px, x, y, soft=True)
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            try_enqueue(nx, ny)


def clear_enclosed_black_keep_pupil(px, w: int, h: int) -> None:
    """Remove near-black pockets trapped inside the artwork; keep center pupil."""
    cx, cy = w // 2, h // 2
    visited = [[False] * w for _ in range(h)]

    def component(sx: int, sy: int) -> list[tuple[int, int]]:
        q: collections.deque[tuple[int, int]] = collections.deque([(sx, sy)])
        visited[sy][sx] = True
        cells: list[tuple[int, int]] = []
        while q:
            x, y = q.popleft()
            cells.append((x, y))
            for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                if nx < 0 or ny < 0 or nx >= w or ny >= h or visited[ny][nx]:
                    continue
                r, g, b, a = px[nx, ny]
                if a < 8:
                    visited[ny][nx] = True
                    continue
                if is_near_black(r, g, b, a):
                    visited[ny][nx] = True
                    q.append((nx, ny))
        return cells

    # Preserve only the near-black component that contains the image center.
    pupil: set[tuple[int, int]] = set()
    r0, g0, b0, a0 = px[cx, cy]
    if a0 >= 8 and is_near_black(r0, g0, b0, a0):
        pupil = set(component(cx, cy))

    for y in range(h):
        for x in range(w):
            if visited[y][x]:
                continue
            r, g, b, a = px[x, y]
            if a < 8 or not is_near_black(r, g, b, a):
                continue
            cells = component(x, y)
            for cx_, cy_ in cells:
                if (cx_, cy_) not in pupil:
                    clear_pixel(px, cx_, cy_, soft=True)


def zero_transparent_rgb(px, w: int, h: int) -> None:
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0 and (r or g or b):
                px[x, y] = (0, 0, 0, 0)


def content_bbox(px, w: int, h: int, alpha_min: int = 12) -> tuple[int, int, int, int]:
    min_x, min_y, max_x, max_y = w, h, 0, 0
    found = False
    for y in range(h):
        for x in range(w):
            if px[x, y][3] >= alpha_min:
                found = True
                if x < min_x:
                    min_x = x
                if y < min_y:
                    min_y = y
                if x > max_x:
                    max_x = x
                if y > max_y:
                    max_y = y
    if not found:
        return (0, 0, w - 1, h - 1)
    return (min_x, min_y, max_x, max_y)


def crop_to_square(im: Image.Image, pad_ratio: float = 0.08) -> Image.Image:
    px = im.load()
    w, h = im.size
    x0, y0, x1, y1 = content_bbox(px, w, h)
    bw, bh = x1 - x0 + 1, y1 - y0 + 1
    side = max(bw, bh)
    pad = int(side * pad_ratio)
    side_p = side + pad * 2
    out = Image.new("RGBA", (side_p, side_p), (0, 0, 0, 0))
    ox = (side_p - bw) // 2
    oy = (side_p - bh) // 2
    cropped = im.crop((x0, y0, x1 + 1, y1 + 1))
    out.paste(cropped, (ox, oy), cropped)
    return out


def remove_bg(path: Path, square_crop: bool = False) -> None:
    backup = path.with_name(path.stem + ".bg-backup.png")
    if backup.exists():
        shutil.copy2(backup, path)
    else:
        shutil.copy2(path, backup)

    im = Image.open(path).convert("RGBA")
    w, h = im.size
    px = im.load()

    flood_from_edges(px, w, h)
    clear_enclosed_black_keep_pupil(px, w, h)
    zero_transparent_rgb(px, w, h)

    if square_crop:
        im = crop_to_square(im)

    im.save(path, "PNG")
    # quick stats
    px2 = im.load()
    ww, hh = im.size
    tot = ww * hh
    transparent = sum(1 for y in range(hh) for x in range(ww) if px2[x, y][3] == 0)
    print(f"saved {path.name} {im.size} transparent={transparent / tot * 100:.1f}%")


def main() -> None:
    remove_bg(BRAND / "astrenox-logo.png", square_crop=False)
    remove_bg(BRAND / "astrenox-mark.png", square_crop=True)
    print("done")


if __name__ == "__main__":
    main()
