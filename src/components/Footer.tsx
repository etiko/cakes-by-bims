import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-cocoa text-blush">
      <div className="section-container grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif-display text-2xl text-cream">{siteConfig.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-blush/80">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="CakesbyBIMS on Facebook"
              className="rounded-full border border-blush/30 p-2.5 text-cream transition-colors hover:bg-rose hover:border-rose"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="CakesbyBIMS on Instagram"
              className="rounded-full border border-blush/30 p-2.5 text-cream transition-colors hover:bg-rose hover:border-rose"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Message CakesbyBIMS on WhatsApp"
              className="rounded-full border border-blush/30 p-2.5 text-cream transition-colors hover:bg-rose hover:border-rose"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-blush/80 hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Get in touch</p>
          <ul className="mt-4 space-y-2 text-sm text-blush/80">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-cream">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-cream">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>{siteConfig.serviceArea}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blush/10 py-6">
        <p className="section-container text-center text-xs text-blush/60">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
