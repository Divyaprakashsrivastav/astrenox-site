import type { ServicePageContent } from "../service-pages/types";

export const bmsSmartParkingContent: ServicePageContent = {
  metadata: {
    title: "Building Management and Smart Parking Solutions | Astrenox",
    description:
      "We help organisations assess their physical environment, define the required digital architecture and implement integrated building, parking and mobility systems, from solution design through commissioning and lifecycle optimisation.",
  },
  hero: {
    label: "Infrastructure Solutions",
    title: "Building Management and\nSmart Parking Solutions",
    subtitle: "",
    primaryCta: "Discuss Your Facility",
    secondaryCta: "Explore Capabilities",
    primaryHref: "/contact",
    secondaryHref: "#building-management-systems",
  },
  intro: {
    paragraphs: [
      "Buildings and parking environments are often managed through disconnected systems, manual processes and limited real-time visibility. This increases operating costs, slows incident response and creates an inconsistent experience for facility teams, occupants and visitors.",
      "We help organisations assess their physical environment, define the required digital architecture and implement integrated building, parking and mobility systems, from solution design through commissioning and lifecycle optimisation.",
    ],
  },
  chapters: [
    {
      id: "building-management-systems",
      label: "Building Management",
      title: "Building Management Systems",
      subtitle:
        "We provide implementation and integration services for enterprise Building Management System environments, including solutions based on Siemens and Honeywell technologies.",
      capabilities: {
        title: "BMS Capabilities",
        items: [
          {
            title: "BMS Assessment and Design",
            paragraphs: [
              "We assess existing equipment, control systems, facility workflows, energy consumption, network architecture and future expansion requirements.",
              "The resulting roadmap defines integration priorities, control logic, hardware requirements, network and cybersecurity architecture, migration phases and expected operational outcomes.",
              "This allows organisations to modernise facilities without unnecessarily replacing functional infrastructure.",
            ],
            icon: "Target",
          },
          {
            title: "Platform and Systems Integration",
            paragraphs: [
              "We implement building-management software, automation controllers, room controls, field devices and sensor networks according to the facility architecture.",
              "Open protocols such as BACnet, Modbus and OPC can connect equipment from different manufacturers, integrate legacy systems and reduce isolated data silos.",
              "Secure IT/OT integration allows building systems to exchange data with enterprise applications while maintaining network segmentation and access controls.",
            ],
            icon: "Network",
          },
          {
            title: "Integrated Facility Automation",
            paragraphs: ["The BMS can centralise monitoring and control across:"],
            enables: [
              "HVAC and indoor environmental conditions",
              "Lighting and room automation",
              "Energy metering and power management",
              "Fire and life-safety systems",
              "Video surveillance and access control",
              "Elevators, utilities and critical equipment",
              "Occupancy and environmental sensors",
            ],
            enablesLabel: "Monitoring and control scope",
            afterEnables: [
              "A unified operating environment gives facility teams real-time visibility into alarms, equipment health, energy consumption and operating conditions.",
            ],
            icon: "Building2",
          },
          {
            title: "Energy and Predictive Operations",
            paragraphs: [
              "Smart metering, occupancy-based controls, scheduling and automated load management help reduce unnecessary energy consumption.",
              "Equipment telemetry can also identify abnormal behaviour and emerging maintenance needs, enabling a shift from reactive intervention towards predictive, performance-led facility management.",
              "Lifecycle services can include remote monitoring, preventive maintenance, system optimisation, cybersecurity reviews, upgrades and facility-team training.",
            ],
            icon: "Gauge",
          },
        ],
      },
    },
    {
      id: "smart-parking-traffic",
      label: "Smart Parking",
      title: "Smart Parking and Traffic Solutions",
      subtitle:
        "We design and implement integrated parking and on-site traffic-management solutions for commercial campuses, malls, hospitals, residential developments, transport facilities, mixed-use properties and smart-city environments.",
      capabilities: {
        title: "Parking Capabilities",
        items: [
          {
            title: "Parking Assessment and Design",
            paragraphs: [
              "We analyse parking inventory, entry and exit volumes, peak-hour congestion, vehicle categories, payment processes and user journeys.",
              "The resulting solution design defines lane infrastructure, cameras, sensors, barriers, signage, applications and integration requirements.",
            ],
            icon: "Target",
          },
          {
            title: "Ticketless Access and Lane Automation",
            paragraphs: [
              "ANPR, RFID and FASTag-based identification can automate vehicle authentication, entry and exit.",
              "Boom barriers are linked with authorised vehicle records, permits, reservations and payment status to support ticketless access for employees, residents, visitors, VIPs, commercial fleets and service operators.",
            ],
            icon: "Zap",
          },
          {
            title: "Occupancy, Allocation and Guidance",
            paragraphs: [
              "IoT sensors and camera-based detection provide real-time visibility into occupied and available spaces.",
              "Dynamic allocation, LED indicators, mobile guidance and digital signage can route drivers towards suitable bays, reduce search time and improve traffic flow.",
              "Car-finding functionality can help users locate vehicles through number-plate details, QR navigation or mobile applications.",
            ],
            icon: "Monitor",
          },
          {
            title: "Booking, Payments and Visitor Management",
            paragraphs: [
              "Users can reserve spaces, receive digital credentials and complete cashless payments through mobile applications, QR codes, RFID or FASTag-enabled workflows.",
              "Visitor journeys can include pre-registration, OTP verification, temporary access and designated parking allocation.",
            ],
            icon: "FileCheck",
          },
          {
            title: "Valet and Specialised Operations",
            paragraphs: [
              "Digital valet modules can manage vehicle intake, tagging, parking-location tracking, retrieval requests, workforce allocation and secure OTP-based handover.",
              "Specialised workflows can also support residential parking, hospital access, event parking, tenant parking and controlled commercial zones.",
            ],
            icon: "Users",
          },
          {
            title: "Centralised Operations and Analytics",
            paragraphs: ["A central dashboard can provide visibility into:"],
            enables: [
              "Real-time occupancy and traffic flow",
              "Lane, barrier and equipment activity",
              "Transactions and revenue",
              "Unauthorised access and overstays",
              "Utilisation and peak demand",
              "Payment and settlement reconciliation",
            ],
            enablesLabel: "Dashboard visibility",
            afterEnables: [
              "Multi-site operators can manage several facilities through one platform while retaining role-based access and location-specific policies.",
              "The result is a more secure and efficient parking environment with stronger operational control and a smoother user journey.",
            ],
            icon: "BarChart3",
          },
        ],
      },
      cta: {
        title: "Modernise Your Buildings and Parking Operations",
        paragraphs: [
          "From BMS assessment and systems integration to ticketless parking and centralised analytics, we deliver the full journey from solution design through commissioning and lifecycle optimisation.",
        ],
        primaryCta: "Discuss Your Facility",
        secondaryCta: "Explore All Infrastructure Solutions",
        primaryHref: "/contact",
        secondaryHref: "/infrastructure-solutions",
      },
    },
  ],
};
