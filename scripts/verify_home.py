"""Verify homepage document strings appear in content files."""
import re
from pathlib import Path

extract = Path(r"c:\Users\restd\astreanox-new\home_extract.txt").read_text(encoding="utf-8")
content = (
    Path(r"c:\Users\restd\astreanox-new\app\content\homepage-content.ts").read_text(encoding="utf-8")
    + Path(r"c:\Users\restd\astreanox-new\app\content\homepage-content-remainder.ts").read_text(
        encoding="utf-8"
    )
)

paras = []
for line in extract.splitlines():
    m = re.match(r"^\[(\d+)\] (.+)$", line)
    if m:
        paras.append(m.group(2))

skip = {
    "Primary CTA",
    "Secondary CTA",
    "---",
}

missing = []
for p in paras:
    if p in skip or p.startswith("---"):
        continue
    # Normalize markdown bullets
    normalized = p.replace("**", "").replace("* ", "").strip()
    if p not in content and normalized not in content:
        missing.append(p)

print(f"Checked {len(paras)} paragraphs")
print(f"Missing: {len(missing)}")
for m in missing[:40]:
    print(" -", m[:100])
