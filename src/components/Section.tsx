import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
}

export function Section({ children, className, id, fullHeight = true }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden px-6 md:px-12",
        fullHeight && "min-h-screen py-24",
        className
      )}
    >
      <div className="mx-auto max-w-7xl h-full w-full">
        {children}
      </div>
    </section>
  );
}
