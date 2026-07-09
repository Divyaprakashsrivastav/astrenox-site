from pathlib import Path

part2 = r'''
  label: "FLAGSHIP PROJECTS & PRODUCTS",
  title: "Applied AI Systems Built for Measurable Business Outcomes",
  description:
    "Successful AI adoption is not defined by experiments, demos, or isolated features.\n\nIt is defined by whether the system solves a real operational problem, integrates into existing workflows, and produces measurable business value.\n\nAstrenox builds AI-native platforms, automation engines, and enterprise intelligence systems that move beyond proof-of-concept and into production. Each flagship system is designed around a clear business bottleneck, a secure technical architecture, and a measurable operational outcome.\n\nWhat These Projects Prove\n\nAcross industries, Astrenox systems follow the same execution principle: AI should solve a specific operational bottleneck, integrate into existing workflows, and generate measurable business impact.\n\nOur flagship work demonstrates capability across:\n\nHealthcare access and care coordination\nReal estate operations and property management\nConstruction ERP and project execution\nTender intelligence and bid preparation\nComputer vision and facility analytics\nSupply chain execution and logistics coordination\nPrivate equity deal intelligence and portfolio monitoring\nEnterprise-grade workflow integration\nSecure deployment and measurable ROI\n\nAstrenox does not build AI experiments.\nWe build applied intelligence systems that move into production and compound business value.",
  items: [
'''

Path(r"c:\Users\restd\astreanox-new\app\content\homepage-content.ts").write_text(
    Path(r"c:\Users\restd\astreanox-new\app\content\homepage-content.ts").read_text(encoding="utf-8").rstrip()
    + part2,
    encoding="utf-8",
)
print("appended header")
