"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { MenuIcon, CloseIcon } from "./icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cocoa/10 bg-cream/95 backdrop-blur">
      <div className="section-container flex h-20 items-center justify-between">
        <Link href="/" className="font-serif-display text-2xl text-cocoa" onClick={() => setOpen(false)}>
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  active ? "text-rose" : "text-cocoa hover:text-rose"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-rose px-5 py-2.5 text-sm font-medium uppercase tracking-wide text-cream transition-colors hover:bg-rose-dark"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="text-cocoa md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-cocoa/10 bg-cream md:hidden">
          <ul className="section-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-3 text-base font-medium uppercase tracking-wide ${
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
                className="mt-2 block rounded-full bg-rose px-4 py-3 text-center text-base font-medium uppercase tracking-wide text-cream"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
