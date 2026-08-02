interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-4 ${alignment} max-w-2xl`}>
      {eyebrow ? (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.25em] ${
            light ? "text-blush" : "text-rose"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-serif-display text-3xl md:text-4xl ${
          light ? "text-cream" : "text-cocoa"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed ${light ? "text-blush" : "text-cocoa-light"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
