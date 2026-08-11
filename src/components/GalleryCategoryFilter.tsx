"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { GalleryCategory } from "@/lib/gallery-data";
import { galleryGroups } from "@/lib/gallery-data";

// Two-level filter: a small, fixed set of theme tabs (Weddings, Celebrations,
// Kids, etc.) that stays a bounded, stable control no matter how many
// categories exist — plus a horizontally-scrollable, non-wrapping strip of
// category pills nested inside the active tab. Growth in category count is
// absorbed by the (already scrollable) strip, not by adding more tabs.
export function GalleryCategoryFilter({
  categories,
  activeSlug,
}: {
  categories: GalleryCategory[];
  activeSlug: string;
}) {
  const activeCategory = categories.find((cat) => cat.slug === activeSlug);
  const [activeGroup, setActiveGroup] = useState(activeCategory?.group ?? galleryGroups[0].slug);

  const visibleCategories = categories.filter((cat) => cat.group === activeGroup);

  const stripRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollFades = () => {
    const el = stripRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollFades();
  }, [activeGroup]);

  return (
    <div className="mt-8">
      {/* Theme tabs — an underlined tab bar (not pills) so it reads as a
          distinct, higher-level control from the category pills below it.
          Fixed set, never scrolls, never wraps beyond a line or two. */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-cocoa/10">
        {galleryGroups.map((group) => (
          <button
            key={group.slug}
            type="button"
            onClick={() => setActiveGroup(group.slug)}
            className={`relative pb-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
              group.slug === activeGroup ? "text-cocoa" : "text-cocoa/50 hover:text-cocoa"
            }`}
          >
            {group.label}
            {group.slug === activeGroup && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-rose" />
            )}
          </button>
        ))}
      </div>

      {/* Category pills within the active theme — horizontally scrollable so
          a theme can hold any number of categories without growing taller.
          The edge fades only appear once there's actually more to scroll to
          in that direction, so the first/last pill is never obscured. */}
      <div className="relative mt-5">
        {canScrollLeft && (
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-cream to-transparent" />
        )}
        {canScrollRight && (
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-cream to-transparent" />
        )}

        <div
          ref={stripRef}
          onScroll={updateScrollFades}
          className="no-scrollbar flex gap-3 overflow-x-auto scroll-smooth px-1 py-1"
        >
          {visibleCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/gallery/${cat.slug}`}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                cat.slug === activeSlug
                  ? "bg-rose text-cream"
                  : "bg-white text-cocoa ring-1 ring-cocoa/10 hover:bg-blush"
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


