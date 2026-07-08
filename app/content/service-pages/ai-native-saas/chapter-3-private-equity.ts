import type { ServicePageChapter } from "../types";

export const chapter3PrivateEquity: ServicePageChapter = {
  id: "section-3",
  title: "AI for Private Equity",
  subtitle: "Institutional Intelligence for Deal Execution and Portfolio Value Creation",
  overview: {
    title: "Solution Brief",
    paragraphs: [
      "Private equity firms do not lack information.",
      "They lack a system that can turn scattered deal knowledge into repeatable conviction.",
      "Most private equity knowledge is trapped across deal rooms, CIMs, financial models, expert calls, CRM notes, IC memos, portfolio reports, and individual partner memory. This creates friction across sourcing, diligence, investment committee preparation, portfolio monitoring, and post-merger value creation.",
      "We engineer secure AI intelligence layers for private equity firms that unify these fragmented sources into one structured execution system. The platform organizes firm knowledge around companies, sectors, metrics, risks, people, funds, historical decisions, and value creation patterns.",
      "Instead of treating AI as simple document search, the system acts as a private-capital intelligence layer. Every new document, call note, memo, model, and portfolio update enriches the firm's knowledge base, improving future diligence, sourcing, decision-making, and portfolio oversight.",
      "The result is faster diligence, stronger investment consistency, better portfolio monitoring, and a firm-wide memory that compounds with every deal reviewed.",
    ],
  },
  capabilities: {
    title: "Core Intelligence Modules",
    items: [
      {
        title: "Firm-Wide Context Graph and Institutional Memory",
        paragraphs: [
          "We build a private, structured context graph that connects every deal, company, sector, advisor, metric, thesis, risk, and historical decision across the firm.",
          "Instead of treating every data room as a fresh document search problem, the system understands how each new opportunity relates to past deals, prior diligence findings, rejected investments, portfolio company performance, and market patterns already seen by the firm.",
          "This creates a durable institutional memory that does not disappear when team members move, projects end, or folders become buried.",
        ],
        enables: [
          "Faster retrieval of prior deal knowledge",
          "Better comparison against historical investment patterns",
          "Reduced dependency on individual memory",
          "Stronger continuity across deal teams",
          "A proprietary intelligence layer that compounds over time",
        ],
        icon: "Network",
      },
      {
        title: "AI-Powered Data Room and Diligence Analysis",
        paragraphs: [
          "We engineer AI pipelines that ingest, classify, and analyze unstructured data rooms across financial, legal, commercial, operational, and technical diligence workstreams.",
          "The system reads CIMs, contracts, board materials, customer files, management presentations, quality of earnings reports, HR documents, product metrics, and operational records.",
          "It extracts key facts, identifies inconsistencies, flags missing documents, and maps findings to your firm's diligence framework.",
          "Instead of manually searching through hundreds of files, deal teams can ask targeted questions and receive source-linked answers with document references.",
        ],
        enables: [
          "Faster VDR review",
          "Cleaner diligence synthesis",
          "Automated issue spotting",
          "Source-backed answers for analyst and associate teams",
          "Consistent diligence standards across deals",
        ],
        icon: "Database",
      },
      {
        title: "Investment Thesis and Risk Scoring",
        paragraphs: [
          "We build structured scoring engines that evaluate opportunities against your firm's investment criteria.",
          "The system can assess market attractiveness, revenue quality, customer concentration, margin profile, churn risk, management depth, debt capacity, technology maturity, compliance exposure, and value creation potential.",
          "Each score is linked back to supporting evidence from the data room, CRM, expert calls, financial models, and prior deal history.",
          "This allows teams to move from subjective document review to evidence-backed investment logic.",
        ],
        enables: [
          "Standardized opportunity evaluation",
          "Better IC preparation",
          "Faster comparison across targets",
          "Early detection of red flags",
          "Stronger conviction before committing diligence resources",
        ],
        icon: "Target",
      },
      {
        title: "Automated IC Memo and Deal Document Generation",
        paragraphs: [
          "Investment teams spend significant time converting diligence findings into IC memos, investment summaries, risk sections, deal updates, DDQs, and partner-ready materials.",
          "We engineer workflow agents that compile verified deal intelligence into structured outputs aligned with your firm's templates.",
          "The system can generate first drafts of:",
          "IC memos",
          "Executive summaries",
          "Diligence trackers",
          "Risk registers",
          "Investment thesis briefs",
          "DDQ responses",
          "Market mapping reports",
          "Partner update notes",
          "Every output is grounded in approved source material and can be routed through human review before use.",
        ],
        enables: [
          "Faster memo preparation",
          "Less repetitive analyst work",
          "More consistent investment documentation",
          "Better traceability from claims to source documents",
          "Cleaner handoff between deal team members",
        ],
        icon: "FileCheck",
      },
      {
        title: "Deal Flow Automation and Opportunity Prioritization",
        paragraphs: [
          "Inbound opportunities often arrive through emails, CRM records, banker materials, founder updates, market scans, and relationship networks.",
          "We build agentic workflows that ingest these signals, classify opportunities, enrich company profiles, compare them against investment criteria, and prioritize them for review.",
          "The system can automatically summarize the opportunity, identify sector fit, detect possible conflicts with existing portfolio companies, surface similar historical deals, and route the opportunity to the correct team.",
        ],
        enables: [
          "Faster deal triage",
          "Better CRM hygiene",
          "Less manual sourcing administration",
          "More consistent opportunity scoring",
          "Higher-quality pipeline visibility",
        ],
        icon: "Workflow",
      },
      {
        title: "Expert Call and Market Signal Intelligence",
        paragraphs: [
          "Expert calls contain high-value insight, but most firms underuse them after the deal process ends.",
          "We build AI systems that transcribe, structure, and analyze expert calls against your investment thesis, diligence questions, and historical sector knowledge.",
          "The system extracts market risks, customer behavior patterns, competitor references, pricing pressure, regulatory concerns, and operational assumptions.",
          "These insights are stored in the firm memory layer so future deal teams can reuse them across similar sectors or target profiles.",
        ],
        enables: [
          "Better expert call synthesis",
          "Faster thesis validation",
          "Reusable sector intelligence",
          "Stronger pattern recognition across deals",
          "Less knowledge loss after a process ends",
        ],
        icon: "Users",
      },
      {
        title: "Portfolio Monitoring and Value Creation Intelligence",
        paragraphs: [
          "After acquisition, value creation depends on timely visibility across portfolio company performance, operating metrics, strategic initiatives, and risk signals.",
          "We engineer AI workflows that connect portfolio reports, board decks, finance updates, CRM data, product metrics, operational KPIs, and management notes into one monitoring layer.",
          "The system tracks progress against the original investment thesis and value creation plan. It can detect performance drift, summarize monthly updates, flag risks, and prepare partner-level portfolio briefs.",
        ],
        enables: [
          "Better PortCo visibility",
          "Faster board and operating updates",
          "Early detection of underperformance",
          "Stronger 100-day plan execution",
          "Clearer tracking of value creation initiatives",
        ],
        icon: "BarChart3",
      },
    ],
  },
};
