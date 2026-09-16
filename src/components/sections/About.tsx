"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { profile } from "@/data/profile";
import { education, certifications, activities } from "@/data/background";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { TypedBio } from "@/components/ui/TypedBio";
import { scrollToElementTop } from "@/lib/scroll";

// How many pixels off from perfectly flush against the viewport top still
// counts as pinned there (accounts for wheel-delta granularity landing a
// frame slightly before/after the exact boundary).
const PIN_TOLERANCE_PX = 8;

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const hasTriggeredBackRef = useRef(false);

  // Checked fresh on every gesture rather than derived from scrollYProgress:
  // that motion value clamps at 1 once About's top scrolls past the viewport
  // top and never comes back down until scrolled all the way back up to it,
  // so it can't tell "flush against the top" apart from "scrolled anywhere
  // further down the page" (e.g. inside Skills).
  const isPinnedAtTop = () => {
    const rect = sectionRef.current?.getBoundingClientRect();
    return !!rect && Math.abs(rect.top) <= PIN_TOLERANCE_PX;
  };

  // While About is pinned flush against the top of the viewport, block native
  // scroll on an upward gesture and jump straight to Hero instead — this way
  // the page never natively scrolls through the empty space left behind once
  // Hero's own sticky pin has released, which would otherwise flash blank.
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (
        event.deltaY < 0 &&
        !hasTriggeredBackRef.current &&
        isPinnedAtTop()
      ) {
        event.preventDefault();
        hasTriggeredBackRef.current = true;
        scrollToElementTop("hi");
      } else if (!isPinnedAtTop()) {
        hasTriggeredBackRef.current = false;
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };
    const handleTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY ?? 0;
      const draggedDown = currentY - touchStartY; // finger moving down = scroll up
      if (
        draggedDown > 10 &&
        !hasTriggeredBackRef.current &&
        isPinnedAtTop()
      ) {
        event.preventDefault();
        hasTriggeredBackRef.current = true;
        scrollToElementTop("hi");
      } else if (!isPinnedAtTop()) {
        hasTriggeredBackRef.current = false;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    window.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <motion.div ref={sectionRef} style={{ opacity }}>
      <SectionContainer
        id="about"
        eyebrow="About"
        title="About Me"
        className="bg-primary-100"
      >
      <div className="relative mx-auto mb-16 max-w-3xl px-10 py-8 text-center bg-primary-50">
        <span className="absolute top-0 left-0 h-10 w-10 border-t-2 border-l-2 border-secondary-500" />
        <span className="absolute right-0 bottom-0 h-10 w-10 border-r-2 border-b-2 border-secondary-500" />

        <TypedBio lead={profile.bio.lead} paragraphs={profile.bio.paragraphs} />
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary-500 uppercase">
            학력
          </h3>
          <ul className="space-y-4">
            {education.map((item) => (
              <li key={item.school} className="flex items-center gap-2">
                <span className="text-sm text-primary-700">{item.school}</span>
                <span className="rounded-full bg-primary-200 px-2 py-1 text-xs text-primary-700">
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary-500 uppercase">
            자격증
          </h3>
          <ul className="space-y-4">
            {certifications.map((item) => (
              <li key={item.name}>
                <p className="text-sm text-primary-700">{item.name}</p>
                <p className="font-mono text-xs text-muted">{item.issuer}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary-500 uppercase">
            수상
          </h3>
          <ul className="space-y-4">
            {profile.awards.map((award) => (
              <li key={award.title}>
                <p className="text-sm text-primary-700">{award.title}</p>
                <p className="font-mono text-xs text-muted">{award.org}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-md mb-8 font-semibold tracking-[0.2em] text-primary-500 uppercase">
          대외활동
        </h3>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {activities.map((activity, index) => {
            const isEven = index % 2 === 0;
            const noteStyle = isEven ? "bg-secondary-300" : "bg-primary-200";
            const pinStyle = isEven ? "bg-primary-700" : "bg-secondary-600";
            const rotateStyle = isEven ? "-rotate-2" : "rotate-2";

            return (
              <div key={activity.title} className={`relative ${rotateStyle}`}>
                <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                  <span
                    className={`relative block h-6 w-6 rounded-full shadow-md ${pinStyle}`}
                  >
                    <span className="absolute top-1 left-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                  </span>
                </span>

                <div
                  className={`flex min-h-72 flex-col rounded-sm p-6 shadow-md ${noteStyle}`}
                >
                  <span className="font-mono text-xs text-primary-900/60">
                    {activity.period}
                  </span>
                  <h4 className="mt-2 text-lg font-bold text-primary-900">
                    {activity.title}
                  </h4>
                  <p className="mt-1 text-xs text-primary-900/70">
                    {activity.organizer}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {activity.notes.map((line, i) => (
                      <li
                        key={i}
                        className="text-card-body leading-snug text-primary-900/80 sm:text-sm"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </SectionContainer>
    </motion.div>
  );
}
