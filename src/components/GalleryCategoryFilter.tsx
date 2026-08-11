import Link from "next/link";
import type { GalleryCategory } from "@/lib/gallery-data";

// A single-row, horizontally scrollable strip rather than a grid that wraps
// onto more and more lines as categories are added. This keeps a fixed
// footprint regardless of how many categories exist (10 today or 100 later)
// — visitors scroll sideways instead of scanning an ever-growing wall of
// buttons. The faded edges hint that the strip continues off-screen.
export function GalleryCategoryFilter({
  categories,
  activeSlug,
}: {
  categories: GalleryCategory[];
  activeSlug: string;
}) {
  return (
    <div className="relative mt-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-cream to-transparent" />

      <div className="no-scrollbar flex gap-3 overflow-x-auto scroll-smooth px-1 py-1">
        {categories.map((cat) => (
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
  );
}
