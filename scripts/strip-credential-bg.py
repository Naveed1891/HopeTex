"""Remove checkerboard/light backgrounds from credential PNGs."""
from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
CREDENTIALS = ROOT / "public" / "images" / "credentials"
ASSETS = Path(
    r"C:\Users\navee\.cursor\projects\d-hopetex-platform\assets"
)
CAA_SOURCE = ASSETS / (
    "c__Users_navee_AppData_Roaming_Cursor_User_workspaceStorage_"
    "8c6a3e149ffcb119a2ee56afe4a669be_images_image-c2e86e7c-"
    "6b86-47dc-a89f-7b7fedd04f92.png"
)


def is_background(r: int, g: int, b: int, a: int) -> bool:
    if a < 20:
        return True
    # Solid black / dark matte exports
    if r <= 30 and g <= 30 and b <= 30:
        return True
    # Checkerboard: neutral light grays and white
    if abs(r - g) <= 18 and abs(g - b) <= 18 and abs(r - b) <= 18:
        if r >= 175:
            return True
    return False


def flood_transparent(path: Path, out_path: Path) -> None:
    img = Image.open(path).convert("RGBA")
    pixels = img.load()
    w, h = img.size
    visited: set[tuple[int, int]] = set()
    queue: deque[tuple[int, int]] = deque()

    for x in range(w):
        queue.append((x, 0))
        queue.append((x, h - 1))
    for y in range(h):
        queue.append((0, y))
        queue.append((w - 1, y))

    while queue:
        x, y = queue.popleft()
        if (x, y) in visited or x < 0 or y < 0 or x >= w or y >= h:
            continue
        visited.add((x, y))
        r, g, b, a = pixels[x, y]
        if is_background(r, g, b, a):
            pixels[x, y] = (r, g, b, 0)
            queue.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])

    img.save(out_path, "PNG", optimize=True)


def main() -> None:
    CREDENTIALS.mkdir(parents=True, exist_ok=True)

    if CAA_SOURCE.exists():
        flood_transparent(CAA_SOURCE, CREDENTIALS / "caa-logo.png")
    else:
        flood_transparent(CREDENTIALS / "caa-logo.png", CREDENTIALS / "caa-logo.png")

    acsp_path = CREDENTIALS / "acsp-logo.png"
    if acsp_path.exists():
        flood_transparent(acsp_path, acsp_path)

    print("Processed credential logos with transparent backgrounds.")


if __name__ == "__main__":
    main()
