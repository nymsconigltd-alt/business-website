import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/config/company";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: `Explore ${COMPANY.legalName} services, transparent starting rates in NGN, deliverables, and fulfillment timelines.`,
};

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-[#0F2942] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Service Catalog
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Services &amp; Transparent Pricing
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            All services by {COMPANY.legalName} are quoted in {COMPANY.currency}{" "}
            with itemized pro-forma invoices and clear fulfillment timelines.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 md:flex-row md:items-center">
                <div>
                  <h2 className="text-2xl font-bold text-[#0F2942]">
                    {service.title}
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
                <div className="shrink-0 rounded-xl bg-slate-50 px-5 py-4 text-left md:text-right">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Starting From
                  </p>
                  <p className="mt-1 text-2xl font-bold text-[#0F2942]">
                    {service.startingPriceNgn}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Timeline: {service.timeline}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Included Deliverables
                  </p>
                  <ul className="mt-3 grid gap-2.5 text-sm text-slate-700 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="shrink-0 rounded-lg bg-[#0F2942] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#173a5c]"
                >
                  Request Invoice / Quote
                </Link>
              </div>
            </div>
          ))}

          {/* Billing & Payment Terms Note */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6 text-sm text-slate-700">
            <h3 className="font-bold text-[#0F2942]">
              Payment &amp; Billing Information
            </h3>
            <p className="mt-2 leading-relaxed">
              Invoices are issued in NGN (₦) or USD ($) upon scope approval.
              Online payments are processed securely via{" "}
              <strong>Flutterwave</strong> (Visa, Mastercard, Verve, Bank
              Transfer, and USSD). All transactions are subject to our{" "}
              <Link
                href="/policies/refund-policy"
                className="font-semibold text-amber-800 underline"
              >
                Refund &amp; Cancellation Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/policies/delivery-policy"
                className="font-semibold text-amber-800 underline"
              >
                Delivery &amp; Fulfillment Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

