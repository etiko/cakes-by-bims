"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const cakeType = String(data.get("cakeType") ?? "");
    const eventDate = String(data.get("eventDate") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Cake enquiry from ${name || "your website"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Cake type: ${cakeType}`,
      `Event date: ${eventDate}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-cocoa/5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Email address" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone number" name="phone" type="tel" />
        <Field label="Event date" name="eventDate" type="date" />
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-cocoa">
        Cake type
        <select
          name="cakeType"
          defaultValue=""
          className="rounded-xl border border-cocoa/15 bg-cream px-4 py-3 text-sm text-cocoa focus:border-rose focus:outline-none"
        >
          <option value="" disabled>
            Select an occasion
          </option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-cocoa">
        Tell us about your celebration
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Guest count, theme, colours, flavours, allergies…"
          className="resize-none rounded-xl border border-cocoa/15 bg-cream px-4 py-3 text-sm text-cocoa placeholder:text-cocoa-light/60 focus:border-rose focus:outline-none"
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-medium uppercase tracking-wide text-cream transition-colors hover:bg-rose-dark"
      >
        Send Enquiry
      </button>

      <p className="text-xs text-cocoa-light">
        Submitting opens your email app with your enquiry pre-filled, addressed to{" "}
        {siteConfig.email}.
      </p>

      {submitted ? (
        <p role="status" className="rounded-xl bg-blush/60 px-4 py-3 text-sm text-rose-dark">
          Thanks! Your email app should now be open with your enquiry ready to send. If it
          didn&apos;t open, email us directly at {siteConfig.email}.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-cocoa">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-cocoa/15 bg-cream px-4 py-3 text-sm text-cocoa focus:border-rose focus:outline-none"
      />
    </label>
  );
}
