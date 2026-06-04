# Astrenox Content Migration & Audit Report

**Source:** https://astrean.vercel.app/ + `Astrenox-website/` source repo  
**Target:** Premium redesign (`astreanox-new`)  
**Last audit:** May 2026

---

## Audit summary

A full comparison was run against the live site, the original `Header.tsx` / `Footer.tsx` navigation, and all service pages. Gaps found in the first multi-page migration were **filled in this pass** while keeping the premium design system.

---

## Pages (18 routes)

| Route | Status |
|-------|--------|
| `/` | Complete — all major home sections |
| `/about` | Complete |
| `/services` | Complete |
| `/services/ai-engineering` | Complete |
| `/services/ai-transformation` | Complete |
| `/services/intelligent-automations` | Complete |
| `/services/digital-it-consulting` | **Added** (was in nav source, 404 on live deploy) |
| `/services/mvp-studio` | Complete |
| `/services/industries` | Complete |
| `/projects` | Complete (products + case studies) |
| `/research` | Complete |
| `/careers` | Complete |
| `/contact` | Complete |
| `/privacy` | **Added** |
| `/legal` | **Added** |

---

## Home sections — audit vs live site

| Original block | Status after audit |
|----------------|-------------------|
| News ticker (Metal / Base10) | Added `NewsTicker` |
| PE logos (Clearlake, Berkshire, Blue Wolf) | Added `HeroPETrust` |
| Hero metrics (25%, 20%, Step-change ROI) | Added |
| Request access CTA | Added |
| Email capture + 3 pillars | Added `EmailCaptureSection` |
| Ship AI / capabilities bento | Present `Features` |
| Methodology Part A (bottleneck flow) | Added `MethodologyBottleneck` |
| Methodology Part B (Think → Align → Execute) | Present `ProcessTimeline` |
| Ecosystem provider cards (OpenAI, Anthropic, Google, Meta) | Added `EcosystemProviders` |
| Vendor-Agnostic Strategy pillar | Added to `researchPillars` |
| Success stories / projects | Present `Projects` |
| Disruption choice copy | Added `DisruptionSection` |
| Statistics | Present `Statistics` |
| Industries / trusted network | Present `TrustedCompanies` |
| Built by builders marquee | Added `TrustMarquee` |
| Delivery Velocity / Ownership / Proof cards | Added `DeliveryProofBar` |
| Talk to our AI experts | Added `TalkToExperts` |
| FAQ + “Still have questions?” | Present + email line |
| Future-Proof CTA banner | Present `CTABanner` |

---

## Navigation — aligned with original IA

**Navbar (dropdowns):**

- **Services:** AI Transformation, AI Engineering, Intelligent Automations, Digital & IT Consulting
- **Solutions:** Hire Talent → `/careers`, MVP Studio
- **Top level:** Home, About Us, Industries, Products, Research, Contact
- **CTA:** Book a call

**Footer:**

- Full **Quick links** list (matches original footer)
- **Contact:** Noida, Ghaziabad, phone, emails
- **Social:** LinkedIn (company URL), X, GitHub, mailto
- **Privacy** / **Legal** links

---

## Content still not on live deploy (in source repo only)

| Item | Notes |
|------|--------|
| Repo home 8-anchor service grid (Vision, Capability Readiness, etc.) | Different IA from live marketing site; live uses 5-step Think/Align/Execute — **live version used** |
| `/digital-it-consulting` on Vercel | Was 404; **page created** from `Astrenox-website` source |

---

## Remaining optional gaps

| Item | Notes |
|------|--------|
| Twitter/GitHub URLs | Generic placeholders; LinkedIn uses real company URL |
| News “Metal $5M” | No public article URL found |
| Server-side form API | Mailto-based (matches static-site behavior) |
| Instagram/YouTube | On live home partner strip only; not in source footer |

---

## Build

`npm run build` — **18 static routes**, passes.

---

*Premium visual system unchanged: navbar float, glass cards, bento, Framer Motion, brand palette.*
