import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions governing commercial transactions and services provided by ${COMPANY.legalName}.`,
};

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      subtitle={`Governing terms for all quotations, purchases, and services rendered by ${COMPANY.legalName}.`}
      currentPath="/policies/terms-and-conditions"
    >
      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing {COMPANY.domain}, requesting a quotation, or making a
          payment to {COMPANY.legalName} ({COMPANY.rcNumber}), you agree to be
          bound by these Terms &amp; Conditions, our Privacy Policy, Refund
          Policy, and Delivery Policy.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          2. Scope of Services &amp; Quotations
        </h2>
        <p>
          {COMPANY.legalName} provides corporate procurement, logistics and
          distribution, business advisory, and general contracting services.
          Written pro-forma invoices and quotes are valid for 14 calendar days
          from the date of issue unless otherwise stated.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          3. Pricing, Currency &amp; Payment
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            All prices are stated in Nigerian Naira (NGN / ₦) or US Dollars (USD
            / $) and are exclusive of applicable statutory taxes (such as VAT)
            unless explicitly marked as tax-inclusive.
          </li>
          <li>
            Online payments are processed securely via{" "}
            <strong>Flutterwave</strong>. Orders or project mobilization
            commence only after payment confirmation or cleared bank transfer.
          </li>
          <li>
            You represent that all funds used for transactions originate from
            legitimate sources and comply with applicable Anti-Money Laundering
            (AML) laws.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          4. Client Responsibilities
        </h2>
        <p>
          Clients must provide accurate delivery addresses, technical
          specifications, and authorized recipient details. Delays caused by
          incomplete specifications or inaccessible delivery sites may extend
          scheduled timelines.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          5. Limitation of Liability
        </h2>
        <p>
          To the fullest extent permitted by Nigerian law, {COMPANY.legalName}
          &apos;s aggregate liability for any claim arising from a transaction
          shall not exceed the total amount actually paid by the client for the
          specific order or milestone giving rise to the claim. We are not
          liable for indirect or consequential losses, or delays caused by force
          majeure events.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          6. Governing Law &amp; Dispute Resolution
        </h2>
        <p>
          These Terms &amp; Conditions are governed by the laws of the Federal
          Republic of Nigeria. Any dispute shall first be referred to amicable
          negotiation through our support desk ({COMPANY.supportEmail}) within
          14 days before pursuing mediation or courts of competent jurisdiction
          in Nigeria.
        </p>
      </section>
    </PolicyLayout>
  );
}

