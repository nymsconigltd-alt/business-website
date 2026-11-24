import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: `Clear refund, cancellation, and payment dispute rules for ${COMPANY.legalName}.`,
};

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      title="Refund & Cancellation Policy"
      subtitle={`Transparent rules for order cancellations, service refunds, and payment dispute resolution at ${COMPANY.legalName}.`}
      currentPath="/policies/refund-policy"
    >
      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          1. Order &amp; Service Cancellation
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Before Dispatch or Mobilization:</strong> Clients may cancel
            a standard procurement or logistics order within{" "}
            <strong>24 hours</strong> of payment—provided goods have not been
            dispatched or third-party vendor commitments have not been
            executed—for a full refund minus any non-recoverable payment gateway
            processing fees.
          </li>
          <li>
            <strong>Custom or Milestone Contracts:</strong> For bespoke sourcing
            or facility contracting engagements, cancellation after project
            mobilization is billed strictly for completed milestones and
            verified costs incurred up to the cancellation notice date.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          2. Eligibility for Refunds
        </h2>
        <p>A full or partial refund is issued under the following conditions:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Duplicate payment or verified overcharge on an invoice processed via
            Flutterwave.
          </li>
          <li>
            Inability of {COMPANY.legalName} to fulfill a confirmed order within
            the agreed SLA window (where an alternative timeline is declined).
          </li>
          <li>
            Goods delivered are materially defective, damaged in transit, or
            fail to match the approved invoice specification, and are reported
            within <strong>48 hours</strong> of delivery with photographic
            evidence.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          3. How to Request a Refund
        </h2>
        <p>
          Send a written request to{" "}
          <a
            href={`mailto:${COMPANY.supportEmail}`}
            className="font-semibold text-amber-700 underline"
          >
            {COMPANY.supportEmail}
          </a>{" "}
          with your invoice number, Flutterwave transaction reference, payment
          date, and reason for the request. Our team acknowledges all refund
          requests within <strong>1 business day</strong>.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          4. Refund Processing Timeline
        </h2>
        <p>
          Approved refunds are processed back to the{" "}
          <strong>original payment method</strong> (card or bank account via
          Flutterwave) within <strong>5 to 10 business days</strong> from
          approval, subject to banking settlement timelines.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          5. Chargebacks &amp; Payment Disputes
        </h2>
        <p>
          We encourage customers to contact our support desk first so we can
          resolve any billing or fulfillment issue promptly. In the event of a
          card or bank dispute, {COMPANY.legalName} cooperates with Flutterwave
          and issuing banks by providing signed waybills, invoices, and
          correspondence records.
        </p>
      </section>
    </PolicyLayout>
  );
}

