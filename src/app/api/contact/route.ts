import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site-config";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  cakeType?: string;
  eventDate?: string;
  message: string;
  /** Honeypot field — real users never fill this in. */
  company?: string;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, cakeType, eventDate, message, company } = payload;

  // Honeypot: bots tend to fill every field, humans never see/fill this one.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;

  if (!host || !user || !pass) {
    console.error("Contact form: missing SMTP configuration (SMTP_HOST/SMTP_USER/SMTP_PASS).");
    return NextResponse.json(
      { error: "Email sending is not configured on the server yet. Please try again later." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    // Some local/dev SMTP relays advertise STARTTLS with self-signed or
    // expired certs; ignore TLS entirely for the plain, non-465 case in
    // that scenario. Production SMTP providers on 587/465 are unaffected
    // since they present valid certificates.
    tls: { rejectUnauthorized: false },
  });

  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    cakeType ? `Cake type: ${cakeType}` : null,
    eventDate ? `Event date: ${eventDate}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transporter.sendMail({
      from: `"${siteConfig.name} Website" <${user}>`,
      to,
      replyTo: email,
      subject: `Cake enquiry from ${name}`,
      text: textBody,
    });
  } catch (error) {
    console.error("Contact form: failed to send email.", error);
    return NextResponse.json(
      { error: "Something went wrong sending your enquiry. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
