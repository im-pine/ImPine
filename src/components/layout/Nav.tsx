"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "career", label: "Career" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Tech" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [activeId, setActiveId] = useState<string>(NAV_ITEMS[0].id);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-800 bg-primary-900/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 overflow-x-auto px-6 py-4">
        <a href="#hero" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Im.Pine :)" className="h-5 w-auto" />
        </a>
        <ul className="flex shrink-0 gap-1 sm:gap-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`inline-block whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  activeId === item.id
                    ? "bg-primary-100/10 text-primary-100"
                    : "text-primary-400 hover:text-primary-100"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
