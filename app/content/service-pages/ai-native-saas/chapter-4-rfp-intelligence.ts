import type { ServicePageChapter } from "../types";

export const chapter4RfpIntelligence: ServicePageChapter = {
  id: "section-4",
  title: "AI-Native RFP Intelligence",
  subtitle: "AI for Tender Analysis, Bid Preparation, and Contract Review",
  overview: {
    paragraphs: [
      "Tendering teams do not lose time only because documents are long.",
      "They lose time because requirements, eligibility criteria, technical specifications, commercial terms, forms, annexures, risks, and clarifications are spread across hundreds or thousands of pages.",
      "We build AI-native RFP intelligence systems that help teams identify relevant tenders, analyze tender packs faster, prepare review-ready bid documents, and manage claims-related communication with greater control.",
      "The system converts complex tender and contract documents into structured, reviewable, and action-ready outputs for bid, legal, finance, and project teams.",
      "Our AI workflows help teams move from manual tender reading to structured bid intelligence.",
    ],
  },
  capabilities: {
    title: "Core Modules",
    items: [
      {
        title: "Opportunity Scouting Agent",
        paragraphs: [
          "The system helps teams find and shortlist relevant tenders based on business fit, eligibility requirements, project category, location, technical capacity, financial thresholds, and prior bidding criteria.",
          "Instead of manually scanning multiple portals and tender documents, teams get a filtered view of opportunities that match their qualification profile.",
        ],
        enables: [
          "Faster tender discovery",
          "Better opportunity fit",
          "Early rejection of unsuitable tenders",
          "Reduced wasted bid effort",
          "Cleaner pipeline visibility",
        ],
        icon: "Target",
      },
      {
        title: "Qualification Gate Agent",
        paragraphs: [
          "Before committing time to a bid, teams need to know whether the tender is worth pursuing.",
          "The system analyzes eligibility conditions, pre-qualification requirements, financial criteria, past experience requirements, technical capacity, bid security, timelines, and submission constraints.",
          "It generates a structured Go / No-Go view so leadership can decide quickly whether to pursue, reject, or review further.",
        ],
        enables: [
          "Faster bid decisions",
          "Early eligibility checks",
          "Reduced manual qualification review",
          "Better leadership alignment",
          "Fewer resources spent on low-fit tenders",
        ],
        icon: "ShieldCheck",
      },
      {
        title: "Tender Briefing Agent",
        paragraphs: [
          "Large tender packs often take hours or days to summarize manually.",
          "The system generates a clear synopsis of the tender, covering scope of work, key dates, submission requirements, eligibility conditions, technical obligations, commercial terms, evaluation criteria, and major risks.",
          "This gives bid teams a fast starting point before deeper review begins.",
        ],
        enables: [
          "Quick executive summaries",
          "Faster first-pass understanding",
          "Better handoff across teams",
          "Reduced dependency on manual reading",
          "Cleaner internal bid review meetings",
        ],
        icon: "BookOpen",
      },
      {
        title: "Source Intelligence Agent",
        paragraphs: [
          "Tender requirements are often scattered across multiple PDFs, annexures, corrigenda, forms, drawings, schedules, and contract conditions.",
          "The system allows teams to search across the full tender pack using natural language.",
          "Instead of relying on keyword search, users can ask questions such as:",
          "What are the eligibility requirements?",
          "What are the payment terms?",
          "What are the LD clauses?",
          "Which documents are mandatory for submission?",
          "Are there any conflicting technical specifications?",
          "What are the warranty or defect liability obligations?",
          "The answer is returned with relevant document references so teams can verify the source.",
        ],
        enables: [
          "Faster document navigation",
          "Better clause discovery",
          "Reduced missed requirements",
          "Easier cross-document review",
          "Stronger source-backed decision-making",
        ],
        icon: "Database",
      },
      {
        title: "Commercial Risk Agent",
        paragraphs: [
          "The system reviews tender and contract documents to identify risk-heavy clauses, compliance gaps, missing requirements, unusual obligations, and unfavorable commercial terms.",
          "It can flag areas such as liquidated damages, payment delays, performance guarantees, termination rights, indemnities, penalty clauses, scope ambiguity, and submission non-compliance.",
          "The goal is not to replace legal or commercial review.",
          "The goal is to give reviewers a structured risk map before final decision-making.",
        ],
        enables: [
          "Faster risk identification",
          "Better legal and commercial review",
          "Reduced missed compliance items",
          "Clearer escalation to leadership",
          "More disciplined bid governance",
        ],
        icon: "Scale",
      },
      {
        title: "Requirement Conflict Agent",
        paragraphs: [
          "Tender packs often contain conflicting requirements across the main RFP, annexures, BOQs, technical specifications, drawings, corrigenda, and contract conditions.",
          "The system detects inconsistencies and contradictions across documents.",
          "For example, it can flag mismatched dates, conflicting technical standards, inconsistent quantities, different payment conditions, or unclear submission instructions.",
        ],
        enables: [
          "Fewer bid errors",
          "Better clarification planning",
          "Reduced ambiguity before submission",
          "Stronger commercial protection",
          "Cleaner technical and legal review",
        ],
        icon: "Zap",
      },
      {
        title: "Clarification Drafting Agent",
        paragraphs: [
          "When the tender contains unclear, risky, or contradictory requirements, the system drafts structured pre-bid clarification questions.",
          "It connects each query to the relevant clause, document, or requirement so teams can submit precise clarification requests before the deadline.",
        ],
        enables: [
          "Faster clarification preparation",
          "Better quality pre-bid queries",
          "Reduced ambiguity before bidding",
          "Stronger audit trail for tender decisions",
          "Better coordination between technical, legal, and commercial teams",
        ],
        icon: "FileCheck",
      },
      {
        title: "Submission Forms Agent",
        paragraphs: [
          "Tender submissions often include repetitive forms, declarations, certificates, schedules, and compliance formats.",
          "The system identifies required forms and fills them using approved company data, past bid information, and current tender requirements.",
          "Human review remains in control before final submission.",
        ],
        enables: [
          "Faster form completion",
          "Fewer repetitive manual entries",
          "Reduced missed annexures",
          "More consistent company information",
          "Lower submission error risk",
        ],
        icon: "Blocks",
      },
      {
        title: "Bid Assembly Agent",
        paragraphs: [
          "The system helps teams assemble submission-ready bid packages by identifying required documents, annexures, certificates, forms, technical attachments, commercial schedules, and supporting files.",
          "It checks whether mandatory documents are missing and helps teams track completion status before submission.",
        ],
        enables: [
          "Cleaner bid package assembly",
          "Reduced last-minute submission stress",
          "Better document completeness",
          "Fewer missed forms or certificates",
          "More reliable tender submission workflows",
        ],
        icon: "Layers",
      },
      {
        title: "Proposal Response Agent",
        paragraphs: [
          "The system assists in drafting proposal content based on tender requirements, company credentials, past project experience, technical approach, and approved response language.",
          "It helps create structured first drafts for technical proposals, capability statements, methodology sections, executive summaries, and compliance responses.",
        ],
        enables: [
          "Faster proposal writing",
          "Better reuse of approved company content",
          "More consistent bid language",
          "Cleaner alignment with tender requirements",
          "Reduced drafting workload for bid teams",
        ],
        icon: "Code",
      },
      {
        title: "Post-Award Claims Agent",
        paragraphs: [
          "After project award, claims-related communication can become difficult to manage across emails, letters, notices, contract clauses, delay records, and supporting documents.",
          "The system organizes claims-related material into a structured workspace so teams can find relevant correspondence, track claim context, and respond with better clarity.",
          "All claims-related outputs remain subject to legal, commercial, and project review before use.",
        ],
        enables: [
          "Better claims visibility",
          "Faster response preparation",
          "Cleaner documentation history",
          "Stronger coordination across legal, commercial, and project teams",
          "Reduced risk of losing important claim evidence",
        ],
        icon: "Briefcase",
      },
    ],
  },
};
