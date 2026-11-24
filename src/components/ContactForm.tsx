"use client";

import { FormEvent, useState } from "react";
import { COMPANY, SERVICES } from "@/config/company";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>(SERVICES[0].title);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <h3 className="text-xl font-bold text-emerald-900">
          Inquiry Received
        </h3>
        <p className="mt-2 text-sm text-emerald-800">
          Thank you, {name}. Our commercial desk at {COMPANY.displayName} will
          review your request for <strong>{service}</strong> and respond to{" "}
          <strong>{email}</strong> within 1 business day.
        </p>
        <p className="mt-4 text-xs text-emerald-700">
          For urgent support, email{" "}
          <a
            href={`mailto:${COMPANY.supportEmail}`}
            className="font-semibold underline"
          >
            {COMPANY.supportEmail}
          </a>{" "}
          or call {COMPANY.phone}.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setMessage("");
          }}
          className="mt-6 rounded-lg bg-[#0F2942] px-5 py-2.5 text-sm font-semibold text-white"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="text-xl font-bold text-[#0F2942]">
        Send Us a Message or Quote Request
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
          >
            Full Name / Organization *
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Adebayo Adeyemi"
            className="mt-2 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0F2942] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="mt-2 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0F2942] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
          >
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+234 800 000 0000"
            className="mt-2 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0F2942] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
          >
            Service Needed
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0F2942] focus:outline-none"
          >
            {SERVICES.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
            <option value="General Support / Billing">
              General Support / Billing
            </option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
        >
          Project Scope / Inquiry Details *
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your requirements, quantity, delivery location, or support question..."
          className="mt-2 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0F2942] focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-[#0F2942] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#173a5c] sm:w-auto"
      >
        Submit Request
      </button>
    </form>
  );
}

