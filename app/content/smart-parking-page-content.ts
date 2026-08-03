/**
 * Smart Parking & Traffic Solutions, verbatim from official Content.docx.
 * Single source of truth. Do not rewrite.
 */

export const smartParkingPageContent = {
  metadata: {
    title: "Smart Parking & Traffic Solutions | Astrenox",
    description:
      "We architect and deploy AI-driven parking and traffic management systems. By integrating IoT sensors, computer vision, and structured data analytics, we transform manual operations into automated, frictionless ecosystems for commercial, residential, and smart city infrastructure.",
  },

  pageTitle: "Smart Parking & Traffic Solutions",

  heroIntro:
    "We architect and deploy AI-driven parking and traffic management systems. By integrating IoT sensors, computer vision, and structured data analytics, we transform manual operations into automated, frictionless ecosystems for commercial, residential, and smart city infrastructure.",

  mobilityComparisons: [
    {
      traditional:
        "We deploy hybrid recognition technologies to automate entry, exit, and real-time space allocation without manual friction.",
      smart: [
        {
          title: "ANPR & FASTag Integration:",
          body: "We integrate Advanced Number Plate Recognition (ANPR) and FASTag RFID readers to facilitate seamless, ticketless multi-lane entry and exit.",
        },
        {
          title: "Dynamic Slot Allocation:",
          body: "We implement algorithms that assign parking slots sequentially or dynamically based on real-time availability, maximizing space and preventing entry-point congestion.",
        },
        {
          title: "Automated Barrier Operations:",
          body: "We deploy IoT boom barriers and flap gates linked directly to vehicle authentication frameworks for unified building access control.",
        },
      ],
    },
    {
      traditional:
        "We implement precise guidance and tracking systems to optimize internal vehicle movement and reduce search times.",
      smart: [
        {
          title: "Real-Time Guidance Systems:",
          body: "We link ultrasonic and camera sensors directly to LED indicators and digital signage, routing drivers to open bays instantly.",
        },
        {
          title: "Offline Car Finding:",
          body: "We provide mobile-based tracking operating independently of internet connectivity, allowing users to locate vehicles via partial plate numbers and precise walking paths.",
        },
        {
          title: "QR Slot Booking & Payments:",
          body: "We enable advance reservations and cashless payments via dynamic QR codes, streamlining access for guests, employees, and VIPs.",
        },
      ],
    },
    {
      traditional:
        "We enforce strict perimeters at the parking layer to ensure only authorized vehicles and personnel access designated zones.",
      smart: [
        {
          title: "Digital Locks & Exit Barriers:",
          body: "Users can set specific exit times or toggle digital locks via mobile applications, auto-blocking exit barriers during unauthorized movement.",
        },
        {
          title: "Facial Recognition Mapping:",
          body: "We utilize AI to map drivers' faces to authorized vehicle profiles at entry, preventing vehicle theft and unauthorized facility access.",
        },
        {
          title: "Visitor Management Integration:",
          body: "We deploy guest modules combining automated registration, OTP verification, and temporary parking allocation into a single digital pass.",
        },
      ],
    },
    {
      traditional:
        "We adapt deployments to handle distinct operational workflows across diverse real estate portfolios.",
      smart: [
        {
          title: "Digital Valet Systems:",
          body: "We deploy ticketless valet management utilizing GPS tagging and secure OTP handoffs to manage vehicle tracking, drop-offs, and retrievals.",
        },
        {
          title: "Residential Management:",
          body: "We configure dedicated access parameters for residential complexes, managing permanent resident vehicles alongside visitor tracking.",
        },
        {
          title: "Analytics & Reconciliation:",
          body: "We provide centralized dashboards delivering role-based reporting, continuous occupancy metrics, and automated financial reconciliation.",
        },
      ],
    },
  ],

  parkingPlatform: {
    title: "Core Architecture & Access Control",
    intro:
      "We deploy hybrid recognition technologies to automate entry, exit, and real-time space allocation without manual friction.",
    items: [
      {
        id: "anpr",
        title: "ANPR & FASTag Integration:",
        body: "We integrate Advanced Number Plate Recognition (ANPR) and FASTag RFID readers to facilitate seamless, ticketless multi-lane entry and exit.",
        spotType: "entry" as const,
      },
      {
        id: "slot",
        title: "Dynamic Slot Allocation:",
        body: "We implement algorithms that assign parking slots sequentially or dynamically based on real-time availability, maximizing space and preventing entry-point congestion.",
        spotType: "available" as const,
      },
      {
        id: "barrier",
        title: "Automated Barrier Operations:",
        body: "We deploy IoT boom barriers and flap gates linked directly to vehicle authentication frameworks for unified building access control.",
        spotType: "reserved" as const,
      },
    ],
  },

  navigationBooking: {
    title: "Navigation & Digital Booking",
    intro:
      "We implement precise guidance and tracking systems to optimize internal vehicle movement and reduce search times.",
    items: [
      {
        title: "Real-Time Guidance Systems:",
        body: "We link ultrasonic and camera sensors directly to LED indicators and digital signage, routing drivers to open bays instantly.",
      },
      {
        title: "Offline Car Finding:",
        body: "We provide mobile-based tracking operating independently of internet connectivity, allowing users to locate vehicles via partial plate numbers and precise walking paths.",
      },
      {
        title: "QR Slot Booking & Payments:",
        body: "We enable advance reservations and cashless payments via dynamic QR codes, streamlining access for guests, employees, and VIPs.",
      },
    ],
  },

  trafficWorkflow: [
    {
      id: "detect",
      label: "Detect",
      items: [
        {
          title: "ANPR & FASTag Integration:",
          body: "We integrate Advanced Number Plate Recognition (ANPR) and FASTag RFID readers to facilitate seamless, ticketless multi-lane entry and exit.",
        },
        {
          title: "Automated Barrier Operations:",
          body: "We deploy IoT boom barriers and flap gates linked directly to vehicle authentication frameworks for unified building access control.",
        },
      ],
    },
    {
      id: "analyze",
      label: "Analyze",
      items: [
        {
          title: "Dynamic Slot Allocation:",
          body: "We implement algorithms that assign parking slots sequentially or dynamically based on real-time availability, maximizing space and preventing entry-point congestion.",
        },
        {
          title: "Real-Time Guidance Systems:",
          body: "We link ultrasonic and camera sensors directly to LED indicators and digital signage, routing drivers to open bays instantly.",
        },
      ],
    },
    {
      id: "predict",
      label: "Predict",
      items: [
        {
          title: "Offline Car Finding:",
          body: "We provide mobile-based tracking operating independently of internet connectivity, allowing users to locate vehicles via partial plate numbers and precise walking paths.",
        },
        {
          title: "QR Slot Booking & Payments:",
          body: "We enable advance reservations and cashless payments via dynamic QR codes, streamlining access for guests, employees, and VIPs.",
        },
      ],
    },
    {
      id: "optimize",
      label: "Optimize",
      items: [
        {
          title: "Digital Locks & Exit Barriers:",
          body: "Users can set specific exit times or toggle digital locks via mobile applications, auto-blocking exit barriers during unauthorized movement.",
        },
        {
          title: "Facial Recognition Mapping:",
          body: "We utilize AI to map drivers' faces to authorized vehicle profiles at entry, preventing vehicle theft and unauthorized facility access.",
        },
      ],
    },
    {
      id: "control",
      label: "Control",
      items: [
        {
          title: "Visitor Management Integration:",
          body: "We deploy guest modules combining automated registration, OTP verification, and temporary parking allocation into a single digital pass.",
        },
        {
          title: "Digital Valet Systems:",
          body: "We deploy ticketless valet management utilizing GPS tagging and secure OTP handoffs to manage vehicle tracking, drop-offs, and retrievals.",
        },
      ],
    },
    {
      id: "monitor",
      label: "Monitor",
      items: [
        {
          title: "Residential Management:",
          body: "We configure dedicated access parameters for residential complexes, managing permanent resident vehicles alongside visitor tracking.",
        },
        {
          title: "Analytics & Reconciliation:",
          body: "We provide centralized dashboards delivering role-based reporting, continuous occupancy metrics, and automated financial reconciliation.",
        },
      ],
    },
  ],

  visionPipeline: [
    {
      id: "camera",
      label: "Camera",
      title: "Real-Time Guidance Systems:",
      body: "We link ultrasonic and camera sensors directly to LED indicators and digital signage, routing drivers to open bays instantly.",
    },
    {
      id: "edge",
      label: "Edge Device",
      title: "Offline Car Finding:",
      body: "We provide mobile-based tracking operating independently of internet connectivity, allowing users to locate vehicles via partial plate numbers and precise walking paths.",
    },
    {
      id: "vision",
      label: "Vision AI",
      title: "Facial Recognition Mapping:",
      body: "We utilize AI to map drivers' faces to authorized vehicle profiles at entry, preventing vehicle theft and unauthorized facility access.",
    },
    {
      id: "detection",
      label: "Detection",
      title: "ANPR & FASTag Integration:",
      body: "We integrate Advanced Number Plate Recognition (ANPR) and FASTag RFID readers to facilitate seamless, ticketless multi-lane entry and exit.",
    },
    {
      id: "analytics",
      label: "Analytics",
      title: "Analytics & Reconciliation:",
      body: "We provide centralized dashboards delivering role-based reporting, continuous occupancy metrics, and automated financial reconciliation.",
    },
    {
      id: "dashboard",
      label: "Dashboard",
      title: "Analytics & Reconciliation:",
      body: "We provide centralized dashboards delivering role-based reporting, continuous occupancy metrics, and automated financial reconciliation.",
    },
  ],

  ecosystemModules: [
    {
      id: "parking",
      label: "Parking",
      title: "Dynamic Slot Allocation:",
      body: "We implement algorithms that assign parking slots sequentially or dynamically based on real-time availability, maximizing space and preventing entry-point congestion.",
    },
    {
      id: "traffic",
      label: "Traffic",
      title: "ANPR & FASTag Integration:",
      body: "We integrate Advanced Number Plate Recognition (ANPR) and FASTag RFID readers to facilitate seamless, ticketless multi-lane entry and exit.",
    },
    {
      id: "safety",
      label: "Public Safety",
      title: "Facial Recognition Mapping:",
      body: "We utilize AI to map drivers' faces to authorized vehicle profiles at entry, preventing vehicle theft and unauthorized facility access.",
    },
    {
      id: "emergency",
      label: "Emergency Response",
      title: "Digital Locks & Exit Barriers:",
      body: "Users can set specific exit times or toggle digital locks via mobile applications, auto-blocking exit barriers during unauthorized movement.",
    },
    {
      id: "signage",
      label: "Digital Signage",
      title: "Real-Time Guidance Systems:",
      body: "We link ultrasonic and camera sensors directly to LED indicators and digital signage, routing drivers to open bays instantly.",
    },
    {
      id: "iot",
      label: "IoT Sensors",
      title: "Automated Barrier Operations:",
      body: "We deploy IoT boom barriers and flap gates linked directly to vehicle authentication frameworks for unified building access control.",
    },
    {
      id: "ops",
      label: "Operations Center",
      title: "Visitor Management Integration:",
      body: "We deploy guest modules combining automated registration, OTP verification, and temporary parking allocation into a single digital pass.",
    },
    {
      id: "analytics",
      label: "Analytics",
      title: "Analytics & Reconciliation:",
      body: "We provide centralized dashboards delivering role-based reporting, continuous occupancy metrics, and automated financial reconciliation.",
    },
  ],

  industryApplications: [
    {
      title: "Core Architecture & Access Control",
      intro:
        "We deploy hybrid recognition technologies to automate entry, exit, and real-time space allocation without manual friction.",
      items: [
        {
          title: "ANPR & FASTag Integration:",
          body: "We integrate Advanced Number Plate Recognition (ANPR) and FASTag RFID readers to facilitate seamless, ticketless multi-lane entry and exit.",
        },
        {
          title: "Dynamic Slot Allocation:",
          body: "We implement algorithms that assign parking slots sequentially or dynamically based on real-time availability, maximizing space and preventing entry-point congestion.",
        },
        {
          title: "Automated Barrier Operations:",
          body: "We deploy IoT boom barriers and flap gates linked directly to vehicle authentication frameworks for unified building access control.",
        },
      ],
    },
    {
      title: "Navigation & Digital Booking",
      intro:
        "We implement precise guidance and tracking systems to optimize internal vehicle movement and reduce search times.",
      items: [
        {
          title: "Real-Time Guidance Systems:",
          body: "We link ultrasonic and camera sensors directly to LED indicators and digital signage, routing drivers to open bays instantly.",
        },
        {
          title: "Offline Car Finding:",
          body: "We provide mobile-based tracking operating independently of internet connectivity, allowing users to locate vehicles via partial plate numbers and precise walking paths.",
        },
        {
          title: "QR Slot Booking & Payments:",
          body: "We enable advance reservations and cashless payments via dynamic QR codes, streamlining access for guests, employees, and VIPs.",
        },
      ],
    },
    {
      title: "Enterprise Security & Visitor Management",
      intro:
        "We enforce strict perimeters at the parking layer to ensure only authorized vehicles and personnel access designated zones.",
      items: [
        {
          title: "Digital Locks & Exit Barriers:",
          body: "Users can set specific exit times or toggle digital locks via mobile applications, auto-blocking exit barriers during unauthorized movement.",
        },
        {
          title: "Facial Recognition Mapping:",
          body: "We utilize AI to map drivers' faces to authorized vehicle profiles at entry, preventing vehicle theft and unauthorized facility access.",
        },
        {
          title: "Visitor Management Integration:",
          body: "We deploy guest modules combining automated registration, OTP verification, and temporary parking allocation into a single digital pass.",
        },
      ],
    },
    {
      title: "Specialized Operational Modules",
      intro:
        "We adapt deployments to handle distinct operational workflows across diverse real estate portfolios.",
      items: [
        {
          title: "Digital Valet Systems:",
          body: "We deploy ticketless valet management utilizing GPS tagging and secure OTP handoffs to manage vehicle tracking, drop-offs, and retrievals.",
        },
        {
          title: "Residential Management:",
          body: "We configure dedicated access parameters for residential complexes, managing permanent resident vehicles alongside visitor tracking.",
        },
        {
          title: "Analytics & Reconciliation:",
          body: "We provide centralized dashboards delivering role-based reporting, continuous occupancy metrics, and automated financial reconciliation.",
        },
      ],
    },
  ],

  businessImpact: [
    {
      display: "reduce search times",
      label:
        "We implement precise guidance and tracking systems to optimize internal vehicle movement and reduce search times.",
    },
    {
      display: "maximizing space",
      label:
        "We implement algorithms that assign parking slots sequentially or dynamically based on real-time availability, maximizing space and preventing entry-point congestion.",
    },
    {
      display: "continuous occupancy metrics",
      label:
        "We provide centralized dashboards delivering role-based reporting, continuous occupancy metrics, and automated financial reconciliation.",
    },
    {
      display: "automated financial reconciliation",
      label:
        "We provide centralized dashboards delivering role-based reporting, continuous occupancy metrics, and automated financial reconciliation.",
    },
  ],

  ecosystemSectionIntros: [
    {
      title: "Enterprise Security & Visitor Management",
      intro:
        "We enforce strict perimeters at the parking layer to ensure only authorized vehicles and personnel access designated zones.",
    },
    {
      title: "Specialized Operational Modules",
      intro:
        "We adapt deployments to handle distinct operational workflows across diverse real estate portfolios.",
    },
  ],

  infrastructureMetrics: [
    { value: 4, label: "Core Platform Domains" },
    { value: 12, label: "Integrated Capability Modules" },
    { value: 8, label: "Ecosystem Integrations" },
    { value: 6, label: "Traffic Intelligence Phases" },
  ],

  cta: {
    headline: "Transform urban mobility with Astrenox smart parking and traffic intelligence.",
    supporting:
      "Book a smart mobility consultation with our infrastructure specialists or speak directly with experts who engineer intelligent city systems.",
    primary: "Book Smart Mobility Consultation",
    primaryHref: "/contact?intent=smart-mobility",
    secondary: "Talk to Infrastructure Experts",
    secondaryHref: "/contact?intent=infrastructure-experts",
  },
} as const;
