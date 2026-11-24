import Link from "next/link";
import { COMPANY, SERVICES } from "@/config/company";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation & Scope",
    description:
      "Submit your procurement, logistics, or contracting requirements. We review specifications and confirm feasibility within 1 business day.",
  },
  {
    step: "02",
    title: "Pro-Forma Invoice",
    description:
      "Receive a transparent, itemized quote in NGN (₦) or USD ($) detailing unit costs, taxes, delivery timelines, and milestone terms.",
  },
  {
    step: "03",
    title: "Secure Payment",
    description:
      "Settle invoices securely via Flutterwave (card, bank transfer, USSD) or direct corporate bank transfer with instant receipt confirmation.",
  },
  {
    step: "04",
    title: "Tracked Fulfillment",
    description:
      "We execute, ship, or deliver on schedule with signed waybills, inspection sign-off, and dedicated post-delivery support.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F2942] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
              {COMPANY.legalName} &bull; {COMPANY.rcNumber}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Reliable Procurement, Logistics &amp; Enterprise Solutions in Nigeria
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              {COMPANY.displayName} partners with corporations, institutions, and
              commercial enterprises to deliver verified supply chain sourcing,
              interstate distribution, and turnkey facility contracting—backed by
              transparent pricing and strict service-level accountability.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-lg bg-amber-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-500"
              >
                Explore Services &amp; Pricing
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-slate-400/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request a Commercial Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Strip */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Corporate Status
            </p>
            <p className="mt-1 text-sm font-bold text-[#0F2942]">
              CAC Registered ({COMPANY.rcNumber})
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Service Coverage
            </p>
            <p className="mt-1 text-sm font-bold text-[#0F2942]">
              36 States &amp; FCT Abuja
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Billing Currencies
            </p>
            <p className="mt-1 text-sm font-bold text-[#0F2942]">
              {COMPANY.currency}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Payment Gateway
            </p>
            <p className="mt-1 text-sm font-bold text-[#0F2942]">
              Secured by Flutterwave
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                What We Do
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2942]">
                Core Business Services
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-amber-700 hover:text-amber-600"
            >
              View full service catalog &amp; pricing &rarr;
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-slate-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-bold text-[#0F2942]">
                      {service.title}
                    </h3>
                    <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      From {service.startingPriceNgn}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {service.shortDescription}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-700">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <span>Typical Timeline: {service.timeline}</span>
                  <Link
                    href="/contact"
                    className="font-semibold text-[#0F2942] hover:text-amber-700"
                  >
                    Request Quote &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Transparent Workflow
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2942]">
              How We Deliver Every Engagement
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Every order or contract with {COMPANY.displayName} follows a
              documented, auditable process from initial quote to final delivery.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="text-2xl font-bold text-amber-600">
                  {item.step}
                </span>
                <h3 className="mt-3 text-base font-bold text-[#0F2942]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#0F2942] p-8 text-white sm:flex-row sm:items-center sm:p-12">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Ready to work with {COMPANY.displayName}?
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Contact our commercial desk for custom pro-forma invoices,
                corporate vendor onboarding, or logistics scheduling.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-lg bg-amber-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-500"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
