"use client";

import Image from "next/image";
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
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif-display text-xl font-semibold text-cocoa">{service.title}</h3>
          <span className="whitespace-nowrap rounded-full bg-blush px-3 py-1 text-xs font-semibold text-rose-dark">
            From {service.startingFrom}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-cocoa-light">{service.description}</p>
      </div>
    </motion.div>
  );
}
