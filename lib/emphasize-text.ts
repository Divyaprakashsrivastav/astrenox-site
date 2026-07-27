/** Auto-emphasize important terms in body copy (wraps with ** for FormattedText). */

const PHRASES = [
  "production-grade",
  "enterprise-grade",
  "technically validated",
  "AI-native",
  "AI-powered",
  "AI-first",
  "high-impact",
  "high-ROI",
  "high-yield",
  "end-to-end",
  "real-time",
  "real time",
  "data pipelines",
  "data architecture",
  "data quality",
  "data leakage",
  "vector search",
  "vector databases",
  "vector infrastructure",
  "foundation models",
  "multi-agent orchestration",
  "operational bottlenecks",
  "operational workflows",
  "operational constraints",
  "technical roadmap",
  "technical audit",
  "technical constraints",
  "technical reality",
  "engineering feasibility",
  "engineering resource allocation",
  "execution risk",
  "capital allocation",
  "cost-benefit modeling",
  "compute overhead",
  "compute cost projections",
  "developer handoff",
  "MLOps handoff",
  "feasibility matrix",
  "legacy debt",
  "API infrastructure",
  "API layers",
  "API availability",
  "RAG architectures",
  "secure boundaries",
  "contextual reasoning",
  "task resolution",
  "compliance-heavy industries",
  "fragmented pilots",
  "scalable deployments",
  "validated deployment plan",
  "sequenced deployment plan",
  "remediation pathways",
  "risk mitigation",
  "fine-tuning",
  "custom models",
  "code or text generation",
  "digital transformation",
  "measurable business value",
  "measurable business impact",
  "measurable outcomes",
  "proof-of-concept",
  "business operations",
  "workflow automation",
  "intelligent automation",
  "computer vision",
  "video analytics",
  "cloud infrastructure",
  "system integration",
  "quality engineering",
  "software factory",
  "supply chain",
  "use-case discovery",
  "readiness assessment",
  "transformation roadmap",
  "governance framework",
  "security guardrails",
  "infrastructure blueprint",
  "sprint-by-sprint breakdown",
  "prioritized use-case matrix",
  "AI systems that scale",
].sort((a, b) => b.length - a.length);

const TERMS = [
  "AI",
  "RAG",
  "LLM",
  "LLMs",
  "GenAI",
  "MLOps",
  "DevOps",
  "API",
  "APIs",
  "ERP",
  "CRM",
  "RFx",
  "ROI",
  "NDA",
  "SaaS",
  "IoT",
  "GPU",
  "GPUs",
  "Kubernetes",
  "Terraform",
  "Snowflake",
  "Databricks",
  "AWS",
  "Azure",
  "GCP",
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "Docker",
  "CI/CD",
  "BMS",
  "GCC",
  "MVP",
  "QA",
  "UAT",
  "SLA",
  "KPI",
  "KPIs",
  "ETL",
  "OCR",
  "NLP",
  "CV",
  "IoT",
  "Web3",
  "blockchain",
  "governance",
  "compliance",
  "security",
  "scalability",
  "latency",
  "throughput",
  "automation",
  "orchestration",
  "integration",
  "deployment",
  "infrastructure",
  "architecture",
  "roadmap",
  "workflows",
  "pipelines",
  "guardrails",
  "hallucinations",
  "fine-tuning",
  "embeddings",
  "agents",
  "platforms",
  "production",
  "enterprise",
  "operational",
  "technical",
  "engineering",
  "transformation",
  "advisory",
  "consulting",
  "discovery",
  "assessment",
  "feasibility",
  "prioritization",
  "remediation",
  "mitigation",
  "validation",
  "execution",
  "deployment",
  "handoff",
  "constraints",
  "outcomes",
  "deliverables",
  "interventions",
  "capabilities",
  "governance",
  "compliance",
  "monitoring",
  "observability",
  "telemetry",
  "analytics",
  "intelligence",
  "optimization",
  "modernization",
  "digitization",
  "scalable",
  "secure",
  "reliable",
  "actionable",
  "validated",
  "qualified",
  "structured",
  "integrated",
  "automated",
  "intelligent",
  "contextual",
  "predictive",
  "prescriptive",
  "diagnostic",
  "proactive",
  "real-time",
  "mission-critical",
  "business-critical",
];

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function wrapMatch(text: string, start: number, end: number): string {
  const before = text.slice(0, start);
  const match = text.slice(start, end);
  const after = text.slice(end);
  if (before.endsWith("**") || after.startsWith("**")) return text;
  return `${before}**${match}**${after}`;
}

function findPhraseMatches(sentence: string): Array<{ start: number; end: number; len: number }> {
  const matches: Array<{ start: number; end: number; len: number }> = [];
  const lower = sentence.toLowerCase();

  for (const phrase of PHRASES) {
    const re = new RegExp(`\\b${escapeRegExp(phrase)}\\b`, "gi");
    let match: RegExpExecArray | null;
    while ((match = re.exec(sentence)) !== null) {
      const start = match.index;
      const end = start + match[0].length;
      if (sentence.slice(Math.max(0, start - 2), start).includes("**")) continue;
      if (matches.some((m) => start < m.end && end > m.start)) continue;
      matches.push({ start, end, len: phrase.length });
      void lower;
    }
  }

  for (const term of TERMS) {
    const re = new RegExp(`\\b${escapeRegExp(term)}\\b`, "g");
    let match: RegExpExecArray | null;
    while ((match = re.exec(sentence)) !== null) {
      const start = match.index;
      const end = start + match[0].length;
      if (sentence.slice(Math.max(0, start - 2), start).includes("**")) continue;
      if (matches.some((m) => start < m.end && end > m.start)) continue;
      matches.push({ start, end, len: term.length });
    }
  }

  return matches;
}

function emphasizeSentence(sentence: string, maxEmphasis = 3): string {
  if (!sentence.trim() || sentence.includes("**")) return sentence;

  const matches = findPhraseMatches(sentence);
  if (matches.length === 0) return sentence;

  const seed = hashString(sentence);
  const sorted = [...matches].sort((a, b) => {
    const scoreA = a.len * 10 + ((seed + a.start) % 7);
    const scoreB = b.len * 10 + ((seed + b.start) % 7);
    return scoreB - scoreA;
  });

  const selected: typeof matches = [];
  for (const candidate of sorted) {
    if (selected.length >= maxEmphasis) break;
    if (selected.some((m) => candidate.start < m.end && candidate.end > m.start)) continue;
    selected.push(candidate);
  }

  selected.sort((a, b) => b.start - a.start);

  let result = sentence;
  for (const { start, end } of selected) {
    result = wrapMatch(result, start, end);
  }
  return result;
}

/** Adds **emphasis** to important words/phrases. Skips text that already contains markers. */
export function emphasizeImportantWords(text: string, maxPerSentence = 3): string {
  if (!text || text.includes("**")) return text;

  const sentenceParts = text.split(/(?<=[.!?])\s+/);
  if (sentenceParts.length <= 1) {
    return emphasizeSentence(text, maxPerSentence);
  }

  return sentenceParts.map((part) => emphasizeSentence(part, maxPerSentence)).join(" ");
}
