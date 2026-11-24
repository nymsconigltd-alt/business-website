import type { Metadata } from "next";
import { COMPANY } from "@/config/company";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Support",
  description: `Contact ${COMPANY.legalName} for commercial quotes, customer support, billing inquiries, and dispute resolution.`,
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-[#0F2942] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Get in Touch
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Contact &amp; Customer Support
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            Reach our commercial or customer support desk for pro-forma
            invoices, order tracking, or billing inquiries.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-bold text-[#0F2942]">
                Head Office &amp; Support Desk
              </h2>
              <dl className="mt-5 space-y-4 text-sm text-slate-700">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Legal Entity
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    {COMPANY.legalName} ({COMPANY.rcNumber})
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Physical Address
                  </dt>
                  <dd className="mt-1">{COMPANY.fullAddress}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    General Inquiries
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="font-medium text-amber-700 hover:underline"
                    >
                      {COMPANY.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Customer Support &amp; Disputes
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${COMPANY.supportEmail}`}
                      className="font-medium text-amber-700 hover:underline"
                    >
                      {COMPANY.supportEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Telephone
                  </dt>
                  <dd className="mt-1">{COMPANY.phone}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Business Hours
                  </dt>
                  <dd className="mt-1">{COMPANY.businessHours}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

