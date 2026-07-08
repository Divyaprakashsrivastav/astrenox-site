"""Verify all CoE document strings appear in content + page."""
from pathlib import Path
import re

extract = Path(r"c:\Users\restd\astreanox-new\coe_extract.txt").read_text(encoding="utf-8")
content = Path(r"c:\Users\restd\astreanox-new\app\content\center-of-excellence-content.ts").read_text(encoding="utf-8")
client = Path(r"c:\Users\restd\astreanox-new\app\component\center-of-excellence\CenterOfExcellencePageClient.tsx").read_text(encoding="utf-8")
combined = content + client

paras = []
for line in extract.splitlines():
    m = re.match(r"^\[(\d+)\] (.+)$", line)
    if m:
        paras.append(m.group(2))

# CTA line in doc
cta_doc = "[CTA: Connect With Our Technology COE Experts]"
cta_page = "Connect With Our Technology COE Experts"

missing = []
for p in paras:
    if p == cta_doc:
        if cta_page not in combined:
            missing.append(p)
        continue
    if p not in combined:
        missing.append(p)

# Table cells
for block in extract.split("---TABLES---")[1].split("TABLE"):
    for line in block.splitlines():
        if " | " in line and not line.startswith("TABLE"):
            for cell in line.split(" | "):
                cell = cell.strip()
                if cell and cell not in combined:
                    missing.append(f"TABLE CELL: {cell[:80]}...")

print(f"Checked {len(paras)} paragraphs")
print(f"Missing: {len(missing)}")
for m in missing:
    print(" -", m[:120])
