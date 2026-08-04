"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { MenuIcon, CloseIcon, FacebookIcon, InstagramIcon } from "./icons";

const overlayVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
  exit: { opacity: 0, transition: { duration: 0.25, delay: 0.1, ease: "easeIn" as const } },
};

const panelVariants = {
  hidden: { x: "100%" },
  show: {
    x: "0%",
    transition: { type: "spring" as const, stiffness: 320, damping: 34, mass: 0.9 },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] as const },
  },
};

const linkListVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.18 } },
  exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const linkItemVariants = {
  hidden: { opacity: 0, x: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: { opacity: 0, x: 12, transition: { duration: 0.2 } },
};

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on route change (every nav link also closes it directly
  // on click, this is a safety net for back/forward navigation).
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const showSolidChrome = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-20 border-b transition-all duration-500 ${
        showSolidChrome
          ? "border-cocoa/10 bg-cream/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="section-container flex h-full items-center justify-between">
        <Link
          href="/"
          className={`z-10 font-serif-display text-xl font-medium tracking-wide transition-all hover:scale-[1.02] md:text-2xl ${
            showSolidChrome ? "text-cocoa" : "text-cream"
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
          className={`z-10 md:hidden ${showSolidChrome ? "text-cocoa" : "text-cream"}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div key="mobile-menu" className="fixed inset-0 top-0 z-0 md:hidden">
            <motion.div
              initial="hidden"
              animate="show"
              exit="exit"
              variants={overlayVariants}
              className="absolute inset-0 bg-cocoa/40 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial="hidden"
              animate="show"
              exit="exit"
              variants={panelVariants}
              className="absolute inset-y-0 right-0 flex h-dvh w-[86%] max-w-sm flex-col bg-cream pt-20 shadow-2xl"
            >
              <motion.ul
                variants={linkListVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-1 flex-col items-start justify-center gap-1 px-8"
              >
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <motion.li key={link.href} variants={linkItemVariants} className="w-full">
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`font-serif-display block py-2 text-4xl font-semibold leading-tight transition-colors ${
                          active ? "text-rose" : "text-cocoa"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
                <motion.li variants={linkItemVariants} className="mt-6 w-full">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-rose-dark"
                  >
                    Get a Quote
                  </Link>
                </motion.li>
              </motion.ul>

              <motion.div
                variants={linkItemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex items-center justify-between gap-4 border-t border-cocoa/10 px-8 py-8 text-sm text-cocoa-light"
              >
                <span>{siteConfig.email}</span>
                <div className="flex items-center gap-4">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram"
                    className="text-cocoa transition-colors hover:text-rose"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Facebook"
                    className="text-cocoa transition-colors hover:text-rose"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

