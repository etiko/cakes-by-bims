"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { ServiceItem } from "@/lib/services-data";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-cocoa/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-rose/20"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-serif-display text-2xl font-semibold text-cocoa">{service.title}</h3>
        <p className="flex-1 text-base leading-relaxed text-cocoa-light">{service.description}</p>
        <Link
          href="/contact"
          className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-rose-dark transition-colors hover:text-cocoa"
        >
          Get a Quote
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
