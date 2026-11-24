import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY.legalName}, our corporate registration, mission, governance, and commitment to transparent business operations in Nigeria.`,
};

const VALUES = [
  {
    title: "Regulatory Compliance",
    description:
      "We operate in full alignment with Nigerian corporate, tax, data protection (NDPA), and commercial contracting standards.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Every engagement is backed by itemized pro-forma invoices, clear payment milestones, and zero hidden charges.",
  },
  {
    title: "Accountable Delivery",
    description:
      "We track every shipment and project milestone with signed documentation, inspection reports, and responsive support.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#0F2942] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Corporate Profile
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            About {COMPANY.displayName}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            {COMPANY.legalName} is a Nigerian limited liability company
            delivering structured procurement, supply chain logistics, general
            contracting, and operational advisory services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="space-y-6 lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#0F2942]">
              Our Mission &amp; Operational Standards
            </h2>
            <p className="text-sm leading-7 text-slate-700">
              Founded to bridge the reliability gap in Nigerian commercial
              supply and contracting, {COMPANY.displayName} combines vetted
              vendor networks with disciplined project management. Whether
              sourcing specialized equipment, coordinating interstate freight, or
              outfitting commercial facilities, we prioritize on-time execution
              and verifiable quality.
            </p>
            <p className="text-sm leading-7 text-slate-700">
              We serve corporate organizations, SMEs, NGOs, and institutional
              buyers across all 36 states and the Federal Capital Territory. All
              customer transactions are governed by clear Terms &amp; Conditions,
              Refund &amp; Cancellation rules, and Delivery SLAs published
              openly on our website.
            </p>

            <div className="grid gap-6 pt-4 sm:grid-cols-3">
              {VALUES.map((val) => (
                <div
                  key={val.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-sm font-bold text-[#0F2942]">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Registration Card */}
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-fit">
            <h3 className="text-base font-bold text-[#0F2942]">
              Corporate Registration Details
            </h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="border-b border-slate-100 pb-3">
                <dt className="text-xs font-medium text-slate-500">
                  Registered Legal Name
                </dt>
                <dd className="mt-1 font-semibold text-slate-900">
                  {COMPANY.legalName}
                </dd>
              </div>
              <div className="border-b border-slate-100 pb-3">
                <dt className="text-xs font-medium text-slate-500">
                  CAC Registration Number
                </dt>
                <dd className="mt-1 font-semibold text-slate-900">
                  {COMPANY.rcNumber}
                </dd>
              </div>
              <div className="border-b border-slate-100 pb-3">
                <dt className="text-xs font-medium text-slate-500">
                  Registered Office
                </dt>
                <dd className="mt-1 text-slate-700">{COMPANY.fullAddress}</dd>
              </div>
              <div className="border-b border-slate-100 pb-3">
                <dt className="text-xs font-medium text-slate-500">
                  Official Email
                </dt>
                <dd className="mt-1 font-medium text-amber-700">
                  {COMPANY.email}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">
                  Business Hours
                </dt>
                <dd className="mt-1 text-slate-700">{COMPANY.businessHours}</dd>
              </div>
            </dl>
            <Link
              href="/contact"
              className="mt-6 block w-full rounded-lg bg-[#0F2942] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#173a5c]"
            >
              Get in Touch
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}

