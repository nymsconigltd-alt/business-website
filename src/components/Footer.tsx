import Link from "next/link";
import { COMPANY, POLICY_LINKS } from "@/config/company";

export function Footer() {
  const year = 2026;

  return (
    <footer className="mt-auto border-t border-slate-200 bg-[#0F2942] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-600 text-base font-bold text-white">
                N
              </div>
              <div>
                <p className="font-bold text-white">{COMPANY.legalName}</p>
                <p className="text-xs text-slate-400">{COMPANY.rcNumber}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {COMPANY.tagline}. Delivering compliant, transparent, and reliable
              commercial services across Nigeria.
            </p>
            <p className="text-xs text-slate-400">
              Accepted Currencies: {COMPANY.currency}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-400 transition-colors"
                >
                  About {COMPANY.displayName}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Services &amp; Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact &amp; Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Policies (Flutterwave Verification) */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Legal &amp; Policies
            </h3>
            <ul className="space-y-2.5 text-sm">
              {POLICY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Registered Office & Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Registered Office
            </h3>
            <address className="not-italic space-y-2.5 text-sm text-slate-300">
              <p>{COMPANY.fullAddress}</p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-amber-400 hover:underline"
                >
                  {COMPANY.email}
                </a>
              </p>
              <p>
                Support:{" "}
                <a
                  href={`mailto:${COMPANY.supportEmail}`}
                  className="text-amber-400 hover:underline"
                >
                  {COMPANY.supportEmail}
                </a>
              </p>
              <p>Phone: {COMPANY.phone}</p>
              <p className="text-xs text-slate-400">{COMPANY.businessHours}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-700/80 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>
            &copy; {year} {COMPANY.legalName}. All rights reserved.
          </p>
          <p>
            Payments processed securely via{" "}
            <span className="font-semibold text-slate-200">Flutterwave</span>{" "}
            (PCI-DSS Compliant).
          </p>
        </div>
      </div>
    </footer>
  );
}

