"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { MenuIcon, CloseIcon } from "./icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-20 border-b transition-all duration-500 ${
        scrolled
          ? "border-cocoa/10 bg-cream/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="section-container flex h-full items-center justify-between">
        <Link
          href="/"
          className={`font-serif-display text-xl font-medium tracking-wide transition-all hover:scale-[1.02] md:text-2xl ${
            scrolled ? "text-cocoa" : "text-cream"
          }`}
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                  active
                    ? scrolled
                      ? "text-rose"
                      : "text-cream"
                    : scrolled
                      ? "text-cocoa/80 hover:text-rose"
                      : "text-cream/90 hover:text-cream"
                }`}
              >
                {link.label}
                {active ? (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute -bottom-1.5 left-0 h-px w-full rounded-full ${
                      scrolled ? "bg-rose" : "bg-cream"
                    }`}
                  />
                ) : null}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5 hover:border-rose hover:text-rose ${
              scrolled ? "border-cocoa/20 text-cocoa" : "border-cream/40 text-cream"
            }`}
          >
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          className={scrolled ? "text-cocoa md:hidden" : "text-cream md:hidden"}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-cocoa/10 bg-cream md:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-3 text-base font-semibold uppercase tracking-wide ${
                        active ? "bg-blush text-rose-dark" : "text-cocoa"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full bg-rose px-4 py-3 text-center text-base font-semibold uppercase tracking-wide text-cream"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
