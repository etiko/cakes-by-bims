"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      cakeType: String(data.get("cakeType") ?? ""),
      eventDate: String(data.get("eventDate") ?? ""),
      message: String(data.get("message") ?? ""),
      // Honeypot — hidden from real users via CSS, bots often fill it in.
      company: String(data.get("company") ?? ""),
    };

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative grid gap-5 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-cocoa/5"
    >
      {/* Honeypot field: hidden from sighted and screen-reader users, bots often fill it in. */}
      <label className="absolute -left-[9999px]" aria-hidden="true">
        Company
        <input name="company" type="text" tabIndex={-1} autoComplete="off" />
      </label>

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
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-medium uppercase tracking-wide text-cream transition-colors hover:bg-rose-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>

      <p className="text-xs text-cocoa-light">
        Your enquiry is sent straight to our team at {siteConfig.email}. We typically reply
        within 24 hours.
      </p>

      {status === "success" ? (
        <p role="status" className="rounded-xl bg-blush/60 px-4 py-3 text-sm text-rose-dark">
          Thanks! Your enquiry has been sent — we&apos;ll be in touch within 24 hours.
        </p>
      ) : null}

      {status === "error" ? (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage} You can also email us directly at {siteConfig.email}.
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
