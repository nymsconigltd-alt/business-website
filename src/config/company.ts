export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  deliverables: string[];
  startingPriceNgn: string;
  timeline: string;
}

export const COMPANY = {
  legalName: "NYMSCO NIG LTD",
  displayName: "Nymsco Nig Ltd",
  tagline: "Enterprise Procurement, Supply Chain & Business Solutions",
  rcNumber: "RC-1735274",
  tin: "00000000-0001", // Replace with your FIRS TIN if applicable
  incorporatedYear: "2020",
  address: "No 3 St Anthony Street, Adankolo",
  city: "Lokoja",
  state: "Kogi State",
  country: "Nigeria",
  fullAddress:
    "No 3 St Anthony Street, Adankolo, Lokoja, Kogi State, Nigeria",
  email: "info@nymsconigltd.com",
  supportEmail: "support@nymsconigltd.com",
  phone: "+234 (0) 800 000 0000",
  businessHours: "Monday – Friday: 8:00 AM – 5:00 PM WAT",
  domain: "https://nymsconigltd.com",
  policyEffectiveDate: "November 23, 2026",
  currency: "NGN (₦) / USD ($)",
} as const;

export const SERVICES: ServiceItem[] = [
  {
    id: "procurement-supply",
    title: "Corporate Procurement & General Supply",
    shortDescription:
      "End-to-end sourcing, vendor vetting, and bulk delivery of commercial equipment, office infrastructure, and industrial consumables.",
    description:
      "We manage the full procurement lifecycle for corporate organizations, institutions, and growing enterprises across Nigeria—ensuring verified quality, transparent invoicing, and on-schedule delivery.",
    deliverables: [
      "Vendor sourcing & quality verification",
      "Pro-forma invoicing & milestone billing",
      "Nationwide logistics & tracked delivery",
      "Manufacturer warranty & after-sales support",
    ],
    startingPriceNgn: "₦250,000",
    timeline: "3 – 14 business days",
  },
  {
    id: "logistics-distribution",
    title: "Logistics, Freight & Distribution",
    shortDescription:
      "Reliable interstate haulage, last-mile commercial distribution, and warehousing coordination across major Nigerian corridors.",
    description:
      "Our distribution network connects ports, warehouses, and commercial hubs with real-time dispatch updates, goods-in-transit accountability, and proof-of-delivery documentation.",
    deliverables: [
      "Scheduled interstate commercial freight",
      "Last-mile corporate & retail distribution",
      "Waybill & signed proof-of-delivery (POD)",
      "Dedicated dispatch & tracking support",
    ],
    startingPriceNgn: "₦120,000",
    timeline: "1 – 5 business days",
  },
  {
    id: "business-consulting",
    title: "Business Advisory & Operations Support",
    shortDescription:
      "Structured operational consulting, compliance readiness, and vendor management systems for Nigerian businesses.",
    description:
      "We partner with leadership teams to streamline supply operations, standardize vendor contracts, and implement measurable service-level controls.",
    deliverables: [
      "Operations & supply chain audit",
      "Vendor onboarding & SLA framework",
      "Procurement cost-optimization roadmap",
      "Monthly executive performance reporting",
    ],
    startingPriceNgn: "₦350,000",
    timeline: "2 – 4 weeks",
  },
  {
    id: "project-contracting",
    title: "General Contracting & Facility Setup",
    shortDescription:
      "Turnkey workspace outfitting, equipment installation, and commercial facility maintenance under fixed-scope contracts.",
    description:
      "From office fit-outs to commercial facility upgrades, Nymsco Nig Ltd delivers milestone-driven project execution with clear scopes of work and sign-off inspections.",
    deliverables: [
      "Site assessment & bill of quantities (BOQ)",
      "Turnkey installation & commissioning",
      "Milestone inspection & handover report",
      "90-day workmanship assurance",
    ],
    startingPriceNgn: "₦500,000",
    timeline: "2 – 8 weeks",
  },
];

export const POLICY_LINKS = [
  { href: "/policies/privacy-policy", label: "Privacy Policy" },
  { href: "/policies/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/policies/refund-policy", label: "Refund & Cancellation Policy" },
  { href: "/policies/delivery-policy", label: "Delivery & Fulfillment Policy" },
] as const;

