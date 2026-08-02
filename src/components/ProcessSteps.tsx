import { processSteps } from "@/lib/services-data";

export function ProcessSteps() {
  return (
    <ol className="grid gap-8 md:grid-cols-4">
      {processSteps.map((step, index) => (
        <li key={step.title} className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-cocoa/5">
          <span className="font-serif-display text-4xl text-blush-dark">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-serif-display text-lg text-cocoa">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-cocoa-light">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
