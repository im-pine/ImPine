"use client";

import { useEffect, useState } from "react";

const HERO_ID = "hi";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "career", label: "Career" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Tech" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [activeId, setActiveId] = useState<string>(HERO_ID);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Hero isn't a nav item, but it still needs to be observed alongside the
    // real nav sections — otherwise nothing intersects while it's on screen,
    // `setActiveId` never fires, and the initial `activeId` (whatever it
    // defaulted to) stays stuck as "active" the whole time the user is on
    // Hero.
    const sections = [HERO_ID, ...NAV_ITEMS.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-800 bg-primary-900/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <a
            href={`#${HERO_ID}`}
            onClick={() => setMenuOpen(false)}
            className="shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Im.Pine :)" className="h-5 w-auto" />
          </a>

          <ul className="hidden shrink-0 gap-1 sm:flex sm:gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`inline-block whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
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

          <button
            type="button"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-60 flex h-6 w-6 shrink-0 flex-col items-center justify-center sm:hidden"
          >
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-primary-100 transition-transform duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-primary-100 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-primary-100 transition-transform duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`fixed top-14.25 right-0 bottom-0 z-40 w-64 max-w-[80vw] transform border-l border-primary-800 bg-primary-900 shadow-xl transition-transform duration-300 ease-in-out sm:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 pt-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-full px-4 py-3 text-sm font-medium transition-colors ${
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
      </div>
    </>
  );
}
