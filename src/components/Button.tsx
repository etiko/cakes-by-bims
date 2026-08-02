import Link from "next/link";
import { ArrowRightIcon } from "./icons";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const variants = {
  primary:
    "bg-rose text-cream hover:bg-rose-dark",
  secondary:
    "bg-cocoa text-cream hover:bg-cocoa-light",
  outline:
    "bg-transparent text-cocoa border border-cocoa/40 hover:bg-cocoa hover:text-cream",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
