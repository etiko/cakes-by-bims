import Image from "next/image";
import Link from "next/link";
import { navLinks, secondaryNavLinks, siteConfig } from "@/lib/site-config";
import { FacebookIcon, InstagramIcon, PhoneIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-cocoa text-blush">
      <div className="section-container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={512}
            height={512}
            className="h-14 w-14 object-contain"
          />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-blush/80">
            {siteConfig.tagline}
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
              href={`tel:${siteConfig.phoneHref}`}
              aria-label={`Call ${siteConfig.name} on ${siteConfig.phone}`}
              className="group relative rounded-full border border-blush/30 p-2.5 text-cream transition-colors hover:bg-rose hover:border-rose"
            >
              <PhoneIcon className="h-4 w-4" />
              <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-blush/20 bg-cocoa px-3 py-1.5 text-xs font-semibold text-cream opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
                {siteConfig.phone}
              </span>
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-blush/80 hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
            {secondaryNavLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-blush/80 hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Opening Hours</p>
          <ul className="mt-4 space-y-2 text-sm text-blush/80">
            {siteConfig.hours.map((slot) => (
              <li key={slot.day} className="flex justify-between gap-4">
                <span>{slot.day}</span>
                <span className="text-cream">{slot.time}</span>
              </li>
            ))}
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
