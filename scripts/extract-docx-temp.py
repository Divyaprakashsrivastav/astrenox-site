import sys
import zipfile
import xml.etree.ElementTree as ET

path = sys.argv[1] if len(sys.argv) > 1 else r"c:\Users\restd\Downloads\Content.docx"
with zipfile.ZipFile(path) as z:
    xml = z.read("word/document.xml")
root = ET.fromstring(xml)
ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
paras = []
for p in root.findall(".//w:p", ns):
    texts = [t.text or "" for t in p.findall(".//w:t", ns)]
    line = "".join(texts).strip()
    if line:
        paras.append(line)
print("TOTAL", len(paras))
for i, p in enumerate(paras, 1):
    print(f"{i:03d}|{p}")
