import zipfile
import xml.etree.ElementTree as ET
import re
from pathlib import Path

DOC = Path(r"c:\Users\restd\Downloads\Content.docx")
CONTENT = Path(__file__).resolve().parents[1] / "app" / "content" / "enterprise-cloud-page-content.ts"


def doc_paragraphs():
    with zipfile.ZipFile(DOC) as z:
        root = ET.fromstring(z.read("word/document.xml"))
    paras = []
    for p in root.iter("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p"):
        texts = [
            t.text or ""
            for t in p.iter("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t")
        ]
        line = "".join(texts).strip()
        if line:
            paras.append(line.replace("\ufffd", "—"))
    return paras


def flatten_content(text: str) -> str:
    strings = re.findall(r'"((?:\\.|[^"\\])*)"', text)
    decoded = [bytes(s, "utf-8").decode("unicode_escape") for s in strings]
    return " ".join(decoded)


def main():
    doc = doc_paragraphs()
    raw = CONTENT.read_text(encoding="utf-8")
    flat = flatten_content(raw)

    missing = []
    for para in doc:
        if para in raw or para in flat:
            continue
        if ": " in para:
            title, _, body = para.partition(": ")
            if title in flat and body in flat:
                continue
        missing.append(para)

    print(f"DOC_PARAS={len(doc)}")
    print(f"MISSING={len(missing)}")
    for m in missing:
        print(f"  - {m[:120]}")


if __name__ == "__main__":
    main()
