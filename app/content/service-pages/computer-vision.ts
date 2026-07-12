import type { ServicePageContent } from "./types";

export const computerVisionContent: ServicePageContent = {
  capabilitiesAfterInterventions: true,
  serviceOfferingsAfterImpact: true,
  metadata: {
    title: "Custom Built Computer Vision & Video Analytics | Astrenox",
    description:
      "Convert existing camera networks into real-time intelligence systems for security, safety, quality control, operations, and customer experience.",
  },
  hero: {
    label: "",
    title: "Custom built Computer Vision & Video Analytics",
    subtitle: "",
    primaryCta: "Request a Computer Vision Audit",
    secondaryCta: "Explore Vision Intelligence Architecture",
    primaryHref: "/contact",
    secondaryHref: "#core-platform-capabilities",
  },
  intro: {
    paragraphs: [
      "Convert existing camera networks into real-time intelligence systems for security, safety, quality control, operations, and customer experience.",
      "Most organizations already have cameras across plants, warehouses, stores, campuses, public spaces, infrastructure sites, and commercial facilities. But in many cases, those cameras only record events after they happen.",
      "Astrenox engineers custom computer vision and video analytics systems that turn CCTV, IP cameras, DVRs, NVRs, and VMS infrastructure into active intelligence layers. The system detects events, flags anomalies, generates alerts, monitors compliance, tracks movement patterns, and gives teams a live view of what is happening across physical environments.",
    ],
  },
  overview: {
    title: "Product Brief",
    items: [
      {
        title: "Beyond Basic Surveillance",
        icon: "ShieldCheck",
        paragraphs: [
          "Custom-Built Computer Vision & Video Analytics is designed for organizations that need more than basic surveillance.",
        ],
      },
      {
        title: "Flexible Intelligence Stack",
        icon: "Brain",
        paragraphs: [
          "The system analyzes live or recorded video feeds using computer vision, deep learning, object detection, behavior recognition, crowd analytics, anomaly detection, OCR, and operational monitoring models. It can be deployed across edge devices, on-premise servers, private cloud, or hybrid infrastructure depending on latency, privacy, bandwidth, and governance requirements.",
        ],
      },
      {
        title: "Real-Time Operational Visibility",
        icon: "Monitor",
        paragraphs: [
          "The goal is not only to detect security risks. The goal is to help teams understand physical operations in real time: where safety violations occur, where queues build up, where production quality drops, where people or vehicles move, where assets are underutilized, and where abnormal activity needs immediate attention.",
        ],
      },
    ],
  },
  capabilities: {
    id: "core-platform-capabilities",
    label: "",
    title: "Core Platform Capabilities",
    items: [
      {
        title: "Live Vision Intelligence Dashboard",
        paragraphs: [
          "A centralized dashboard allows teams to monitor multiple camera feeds, sites, alerts, incidents, and operational events from one interface.",
          "The dashboard can show live feeds, detection events, camera health, location-wise alerts, compliance violations, incident history, and operational trends.",
        ],
        enables: [
          "Centralized monitoring across locations",
          "Faster incident visibility",
          "Reduced manual camera watching",
          "Better coordination between security, operations, and facility teams",
        ],
        icon: "Monitor",
      },
      {
        title: "Real-Time Alert Engine",
        paragraphs: [
          "The system detects predefined events and sends instant alerts to the right team.",
          "Alerts can be generated for unauthorized access, safety violations, crowding, fire or smoke detection, suspicious movement, PPE non-compliance, queue buildup, equipment misuse, vehicle movement, or abnormal behavior.",
        ],
        enables: [
          "Faster incident response",
          "Lower monitoring workload",
          "Reduced missed violations",
          "Clearer escalation discipline",
        ],
        icon: "Zap",
      },
      {
        title: "Smart Incident and Ticket Management",
        paragraphs: [
          "Every detected event can be converted into a trackable incident or ticket.",
          "The system can assign incidents to security teams, operations managers, floor supervisors, facility heads, or compliance owners based on location, severity, department, or incident type.",
        ],
        enables: [
          "Clear incident ownership",
          "Defined escalation workflows",
          "Better resolution tracking",
          "Audit-ready incident history",
        ],
        icon: "Workflow",
      },
      {
        title: "Edge and Hybrid Deployment Architecture",
        paragraphs: [
          "For environments where low latency, bandwidth control, and data privacy matter, the system can run inference close to the camera source.",
          "Lightweight models can be deployed on edge devices, local servers, or hybrid infrastructure, while dashboards, analytics, and long-term monitoring can be connected through cloud or private network layers.",
        ],
        enables: [
          "Lower video transmission load",
          "Faster local event detection",
          "Reduced cloud dependency",
          "Better data governance",
        ],
        icon: "Cpu",
      },
      {
        title: "Existing Camera and VMS Integration",
        paragraphs: [
          "The system is designed to work with existing camera infrastructure wherever possible.",
          "It can connect with IP cameras, CCTV networks, DVRs, NVRs, video management systems, access control systems, and internal operational tools through APIs or integration layers.",
        ],
        enables: [
          "No unnecessary camera replacement",
          "Faster deployment",
          "Better use of existing surveillance investments",
          "Unified camera-to-dashboard intelligence",
        ],
        icon: "Layers",
      },
      {
        title: "Custom Computer Vision Model Layer",
        paragraphs: [
          "The intelligence layer can include object detection, person detection, vehicle detection, OCR, zone monitoring, motion analytics, crowd density mapping, queue analysis, defect detection, anomaly detection, and face or attribute recognition where legally and operationally permitted.",
          "Models are selected and trained based on camera angle, lighting conditions, site layout, risk type, and business objective.",
        ],
        enables: [
          "Custom detection logic",
          "Higher relevance to site-specific conditions",
          "Better alignment with safety, quality, security, and operations goals",
          "Improved accuracy over generic video analytics",
        ],
        icon: "Brain",
      },
      {
        title: "Continuous Model Optimization",
        paragraphs: [
          "Camera environments change over time because of lighting, layouts, seasonal conditions, crowd behavior, process changes, and new risk patterns.",
          "The system can improve through feedback loops, false-positive review, threshold tuning, retraining, and site-specific calibration.",
        ],
        enables: [
          "Reduced false positives",
          "More reliable alerts",
          "Better detection accuracy over time",
          "Continuous improvement after deployment",
        ],
        icon: "Gauge",
      },
    ],
  },
  interventions: {
    label: "",
    title: "Deployed Solutions",
    items: [
      {
        title: "Safety and PPE Compliance Monitoring",
        description:
          "Detect missing helmets, missing safety vests, unsafe zone entry, machine proximity risks, unsafe workstation behavior, and other safety violations across plants, warehouses, construction sites, and industrial facilities.",
        icon: "ShieldCheck",
      },
      {
        title: "Fire, Smoke, and Hazard Detection",
        description:
          "Monitor camera feeds for early signs of fire, smoke, blocked exits, hazardous movement, unsafe zones, or environmental risks, with alerts routed to security, facility, EHS, or emergency response teams.",
        icon: "Zap",
      },
      {
        title: "Perimeter and Intrusion Detection",
        description:
          "Monitor restricted zones, boundary walls, gates, warehouses, campuses, plants, and infrastructure assets for unauthorized access, loitering, after-hours movement, wrong-direction movement, or unusual zone activity.",
        icon: "Lock",
      },
      {
        title: "Crowd Monitoring and Density Analytics",
        description:
          "Measure crowd density, cluster formation, congestion, abnormal gathering patterns, and people movement across public spaces, campuses, malls, hospitals, events, stations, and smart city environments.",
        icon: "Users",
      },
      {
        title: "Queue and Wait-Time Analytics",
        description:
          "Track queue length, wait time, service counters, customer flow, and abandonment risk across retail stores, hospitals, banks, airports, hospitality spaces, QSRs, and service centers.",
        icon: "LineChart",
      },
      {
        title: "Footfall and Visitor Movement Intelligence",
        description:
          "Analyze entry counts, exit counts, heat maps, dwell zones, visitor paths, peak hours, and location-level traffic patterns to improve space utilization and physical operations planning.",
        icon: "Target",
      },
      {
        title: "Visual Quality Inspection",
        description:
          "Detect product defects, packaging issues, labeling errors, missing components, incorrect assembly, surface defects, and visual process deviations across manufacturing, FMCG, automotive, electronics, pharmaceuticals, food processing, and packaging operations.",
        icon: "FileCheck",
      },
      {
        title: "SOP and Process Compliance Monitoring",
        description:
          "Monitor whether defined operational steps are being followed on the floor, including process deviations, missed checks, unsafe practices, housekeeping gaps, equipment misuse, and workflow bottlenecks.",
        icon: "Workflow",
      },
      {
        title: "Vehicle and ANPR-Based Movement Tracking",
        description:
          "Track vehicle entry, exit, number plates, route history, parking violations, loading and unloading activity, gate movement, and logistics flow across warehouses, plants, campuses, smart cities, tolling environments, and infrastructure sites.",
        icon: "Truck",
      },
      {
        title: "Inventory, Load, and Dispatch Monitoring",
        description:
          "Monitor loading docks, storage zones, dispatch areas, pallet movement, inventory handling, material flow, idle zones, dispatch mismatches, and unsafe handling activity.",
        icon: "Database",
      },
    ],
  },
  serviceOfferings: {
    label: "",
    title: "Industry-Wise Use Cases",
    items: [
      {
        service: "Manufacturing",
        outcome:
          "PPE detection, machine guarding, fire and smoke detection, quality inspection, defect detection, SOP monitoring, production line visibility, worker safety, and dispatch monitoring.",
      },
      {
        service: "Warehousing and Logistics",
        outcome:
          "Loading and unloading visibility, inventory movement, dock activity, vehicle entry and exit, worker productivity, dispatch accuracy, pallet movement, and safety risk detection.",
      },
      {
        service: "Retail and Consumer Spaces",
        outcome:
          "Footfall analytics, queue monitoring, visitor heat maps, customer journey tracking, occupancy monitoring, shelf-zone activity, suspicious behavior detection, and store operations visibility.",
      },
      {
        service: "Infrastructure and Real Estate",
        outcome:
          "Perimeter monitoring, visitor management, access control intelligence, parking visibility, safety compliance, housekeeping checks, facility monitoring, and anomaly alerts.",
      },
      {
        service: "Public Sector and Smart Cities",
        outcome:
          "Crowd monitoring, traffic congestion analysis, ANPR, public safety alerts, restricted-zone monitoring, incident detection, city-wide surveillance intelligence, and emergency response coordination.",
      },
      {
        service: "Healthcare and Hospitals",
        outcome:
          "Queue monitoring, patient flow visibility, restricted-area access alerts, safety monitoring, emergency detection, crowding alerts, hygiene checks, and facility movement intelligence.",
      },
      {
        service: "Construction and Industrial Sites",
        outcome:
          "Helmet and vest detection, restricted-zone monitoring, worker movement visibility, equipment proximity alerts, perimeter breach detection, unsafe behavior detection, and incident documentation.",
      },
    ],
  },
  workflow: {
    id: "how-it-works",
    label: "",
    title: "How the System Works",
    steps: [
      {
        name: "Step 1: Camera and Site Audit",
        description:
          "We review existing CCTV, IP cameras, DVRs, NVRs, VMS, network conditions, camera angles, lighting, coverage gaps, and operational objectives.",
      },
      {
        name: "Step 2: Use-Case Prioritization",
        description:
          "We identify the most valuable use cases across safety, security, quality, productivity, customer experience, compliance, and operations.",
      },
      {
        name: "Step 3: Vision Architecture Design",
        description:
          "We define the required computer vision models, edge or cloud deployment structure, alert logic, dashboards, integrations, and governance requirements.",
      },
      {
        name: "Step 4: Pilot Deployment and Calibration",
        description:
          "The first workflows are deployed on selected locations or camera groups. Alerts, thresholds, false positives, and site-specific conditions are calibrated before scale-up.",
      },
      {
        name: "Step 5: Full Rollout and Continuous Optimization",
        description:
          "The system expands across locations, use cases, and departments while performance is continuously monitored and improved through feedback and model tuning.",
      },
    ],
  },
  impact: {
    title: "Measurable Operational Impact",
    items: [
      {
        title: "Faster Incident Response",
        description:
          "Real-time alerts help teams detect, verify, and act on security, safety, and operational events faster.",
      },
      {
        title: "Reduced Manual Monitoring",
        description:
          "AI reduces the need for continuous human camera watching by automatically surfacing important events and exceptions.",
      },
      {
        title: "Better Safety and Compliance",
        description:
          "PPE violations, unsafe behavior, restricted-zone breaches, and SOP deviations are detected more consistently.",
      },
      {
        title: "Improved Operational Visibility",
        description:
          "Teams gain real-time insight into movement, queues, productivity, quality, dispatch, and site-level execution.",
      },
      {
        title: "Higher Value from Existing Cameras",
        description:
          "Current camera infrastructure becomes an active intelligence layer instead of only a recording system.",
      },
    ],
  },
  cta: {
    title: "Secure Your Physical Operations with Vision Intelligence",
    paragraphs: [
      "Bring us your camera network, facility layout, operational constraints, safety requirements, quality checks, and monitoring workflows.",
      "We will engineer a custom computer vision and video analytics system that turns your existing camera infrastructure into a real-time intelligence layer for security, compliance, productivity, quality, and operational control.",
    ],
    primaryCta: "Schedule a Technical Scoping Session",
    primaryHref: "/contact",
  },
};
