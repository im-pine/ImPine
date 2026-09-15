import type { ReactNode } from "react";

interface SectionContainerProps {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export function SectionContainer({
  id,
  title,
  eyebrow,
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 sm:py-24 ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 sm:mb-14">
          {eyebrow && (
            <p className="mb-2 flex items-center gap-2 text-sm font-medium tracking-[0.15em] text-secondary-600 uppercase">
              <span className="h-px w-4 bg-secondary-500" />
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-bold tracking-tight text-primary-900 sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
