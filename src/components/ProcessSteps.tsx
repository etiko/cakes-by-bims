import { processSteps } from "@/lib/services-data";
import { StaggerGroup, StaggerItem } from "./motion/Reveal";

export function ProcessSteps() {
  return (
    <StaggerGroup className="grid gap-8 md:grid-cols-4">
      {processSteps.map((step, index) => (
        <StaggerItem key={step.title}>
          <div className="relative h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-cocoa/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <span className="font-serif-display text-5xl font-semibold text-blush-dark">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-serif-display text-xl font-semibold text-cocoa">{step.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-cocoa-light">{step.description}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
