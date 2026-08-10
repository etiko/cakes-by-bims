import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { FacebookIcon, InstagramIcon, PhoneIcon } from "@/components/icons";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CakesbyBIMS to enquire about wedding cakes, celebration cakes and cupcakes.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Get In Touch"
        title="Let's plan your cake"
        description="Share your event details below, or reach us directly on social media — we typically reply within 24 hours."
        image="/images/dessert-favours.jpg"
        imageAlt="Pastel mint cupcakes with sprinkles"
        compact
      />

      <section className="section-container grid gap-12 py-24 lg:grid-cols-[3fr_2fr]">
        <Reveal>
          <ContactForm />
        </Reveal>

        <StaggerGroup className="flex flex-col gap-8">
          <StaggerItem className="rounded-3xl bg-blush/40 p-8">
            <h3 className="font-serif-display text-xl font-semibold text-cocoa">Contact details</h3>
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="group mt-4 flex items-center gap-3 rounded-2xl bg-white/70 p-4 ring-1 ring-cocoa/5 transition-colors hover:bg-rose"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose text-cream transition-colors group-hover:bg-white group-hover:text-rose">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-cocoa-light group-hover:text-cream/80">
                  Call or text
                </span>
                <span className="block text-lg font-semibold text-cocoa group-hover:text-cream">
                  {siteConfig.phone}
                </span>
              </span>
            </a>
            <ul className="mt-4 space-y-3 text-base text-cocoa-light">
              <li>
                <span className="block font-semibold text-cocoa">Serving</span>
                {siteConfig.serviceArea}
              </li>
              <li>
                <span className="block font-semibold text-cocoa">Email</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-rose-dark">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </StaggerItem>

          <StaggerItem className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-cocoa/5">
            <h3 className="font-serif-display text-xl font-semibold text-cocoa">Opening hours</h3>
            <ul className="mt-4 space-y-2 text-base text-cocoa-light">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="font-medium text-cocoa">{h.time}</span>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="rounded-3xl bg-cocoa p-8 text-cream">
            <h3 className="font-serif-display text-xl font-semibold">Prefer to message us?</h3>
            <p className="mt-2 text-base text-blush">
              Reach out on social media for a quicker response.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Message on Instagram"
                className="rounded-full bg-rose p-3 transition-colors hover:bg-rose-dark"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Message on Facebook"
                className="rounded-full bg-rose p-3 transition-colors hover:bg-rose-dark"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </section>
    </>
  );
}
