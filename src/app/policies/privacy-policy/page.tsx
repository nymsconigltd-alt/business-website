import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${COMPANY.legalName} in compliance with the Nigeria Data Protection Act (NDPA).`,
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle={`How ${COMPANY.legalName} collects, uses, stores, and protects your personal and corporate data in compliance with the Nigeria Data Protection Act (NDPA).`}
      currentPath="/policies/privacy-policy"
    >
      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">1. Introduction</h2>
        <p>
          {COMPANY.legalName} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
          &ldquo;us&rdquo;) respects your privacy and is committed to protecting
          personal data in accordance with the Nigeria Data Protection Act
          (NDPA) 2023 and applicable Nigerian regulations. This Privacy Policy
          explains how we handle information collected through our website (
          {COMPANY.domain}) and commercial engagements.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          2. Information We Collect
        </h2>
        <p>We may collect and process the following categories of data:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Identity &amp; Contact Data:</strong> Full name, company
            name, CAC registration details, email address, phone number, and
            delivery/billing address.
          </li>
          <li>
            <strong>Transaction &amp; Billing Data:</strong> Invoice references,
            purchase orders, payment status, and limited transaction metadata.
            Card and bank details entered during online checkout are processed
            directly by our PCI-DSS compliant payment processor,{" "}
            <strong>Flutterwave</strong>; we do not store full card numbers or
            banking credentials on our servers.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type, device
            information, and basic access logs required for security and site
            reliability.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            To prepare pro-forma invoices, fulfill procurement orders, and
            deliver contracted services.
          </li>
          <li>
            To process payments, issue receipts, and handle refunds or dispute
            inquiries.
          </li>
          <li>
            To comply with statutory obligations, including Know Your Customer
            (KYC), Anti-Money Laundering (AML), and tax reporting requirements.
          </li>
          <li>To respond to customer support and commercial inquiries.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          4. Data Sharing &amp; Third Parties
        </h2>
        <p>
          We do not sell or rent personal data. We share information only with
          trusted service providers necessary to fulfill your order or comply
          with law, including payment processors (Flutterwave), licensed
          logistics partners, and regulatory authorities where legally required.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">
          5. Data Retention &amp; Security
        </h2>
        <p>
          We retain commercial and transaction records for as long as necessary
          to fulfill contractual obligations and satisfy Nigerian statutory
          retention periods. We implement technical and organizational
          safeguards—including HTTPS encryption and access controls—to protect
          your data against unauthorized access.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#0F2942]">6. Your Rights</h2>
        <p>
          Under the NDPA, you have the right to request access to, correction
          of, or deletion of your personal data, as well as to withdraw consent
          where processing is based on consent. To exercise these rights,
          contact us at{" "}
          <a
            href={`mailto:${COMPANY.supportEmail}`}
            className="font-semibold text-amber-700 underline"
          >
            {COMPANY.supportEmail}
          </a>
          .
        </p>
      </section>
    </PolicyLayout>
  );
}

