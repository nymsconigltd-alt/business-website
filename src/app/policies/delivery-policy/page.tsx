import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Delivery & Fulfillment Policy",
  description: `Shipping, service commencement, timelines, and proof-of-delivery standards for ${COMPANY.legalName}.`,
};

export default function DeliveryPolicyPage() {
  return (
    <PolicyLayout
      title="Delivery & Fulfillment Policy"
      subtitle={`How ${COMPANY.legalName} schedules, dispatches, and confirms delivery of goods and services across Nigeria.`}
      currentPath="/policies/delivery-policy"
    >
      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          1. Processing &amp; Dispatch Timelines
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>In-Stock / Standard Procurement:</strong> Orders confirmed
            and paid before 12:00 PM WAT are processed the same business day and
            dispatched within <strong>1 to 3 business days</strong>.
          </li>
          <li>
            <strong>Interstate Freight &amp; Distribution:</strong> Delivery
            across major Nigerian commercial corridors typically takes{" "}
            <strong>1 to 5 business days</strong> from dispatch, depending on
            destination state.
          </li>
          <li>
            <strong>Advisory &amp; Contracting Services:</strong> Kickoff
            begins within <strong>2 business days</strong> of payment
            confirmation, with deliverables tracked against the agreed Statement
            of Work (SOW).
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          2. Delivery Coverage &amp; Fees
        </h2>
        <p>
          We deliver across all 36 states of Nigeria and the FCT Abuja.
          Applicable freight, haulage, or handling charges are itemized upfront
          on your pro-forma invoice prior to payment—never added retroactively.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          3. Inspection &amp; Proof of Delivery (POD)
        </h2>
        <p>
          Every physical consignment is accompanied by a waybill and packing
          list. Recipients are required to inspect packages upon arrival and
          sign the Proof of Delivery (POD). Any visible transit damage or
          shortage must be noted on the POD and reported to{" "}
          <a
            href={`mailto:${COMPANY.supportEmail}`}
            className="font-semibold text-amber-700 underline"
          >
            {COMPANY.supportEmail}
          </a>{" "}
          within 48 hours.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          4. Tracking &amp; Delays
        </h2>
        <p>
          Clients receive dispatch confirmation and status updates via email or
          telephone. In the event of unforeseen transit or customs delays, our
          logistics desk notifies the client promptly with revised delivery
          estimates.
        </p>
      </section>
    </PolicyLayout>
  );
}

