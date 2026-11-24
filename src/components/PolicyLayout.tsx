import Link from "next/link";
import { ReactNode } from "react";
import { COMPANY, POLICY_LINKS } from "@/config/company";

interface PolicyLayoutProps {
  title: string;
  subtitle: string;
  currentPath: string;
  children: ReactNode;
}

export function PolicyLayout({
  title,
  subtitle,
  currentPath,
  children,
}: PolicyLayoutProps) {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0F2942]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700 font-medium">{title}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar policy switcher */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Compliance Policies
              </p>
              <ul className="space-y-1.5 text-sm">
                {POLICY_LINKS.map((policy) => {
                  const active = policy.href === currentPath;
                  return (
                    <li key={policy.href}>
                      <Link
                        href={policy.href}
                        className={`block rounded-lg px-3 py-2 font-medium transition-colors ${active
                            ? "bg-[#0F2942] text-white"
                            : "text-slate-700 hover:bg-slate-100"
                          }`}
                      >
                        {policy.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Policy Content */}
          <article className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <header className="border-b border-slate-200 pb-6">
              <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                Effective Date: {COMPANY.policyEffectiveDate}
              </span>
              <h1 className="mt-3 text-2xl font-bold tracking-tight text-[#0F2942] sm:text-3xl">
                {title}
              </h1>
              <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
            </header>

            <div className="mt-8 space-y-6 text-sm leading-7 text-slate-700">
              {children}
            </div>

            <footer className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
              <p className="font-semibold text-[#0F2942]">
                Compliance &amp; Customer Support Contact
              </p>
              <p className="mt-1">
                {COMPANY.legalName} ({COMPANY.rcNumber})
              </p>
              <p>{COMPANY.fullAddress}</p>
              <p className="mt-1">
                Email:{" "}
                <a
                  href={`mailto:${COMPANY.supportEmail}`}
                  className="font-medium text-amber-700 hover:underline"
                >
                  {COMPANY.supportEmail}
                </a>{" "}
                | Phone: {COMPANY.phone}
              </p>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
}

