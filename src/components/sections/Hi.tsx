"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { profile } from "@/data/profile";
import { scrollToElementTop } from "@/lib/scroll";

const RINGS = [
  { size: 340, opacity: "border-primary-300/20" },
  { size: 500, opacity: "border-primary-300/14" },
  { size: 660, opacity: "border-primary-300/8" },
];

const AUTO_SCROLL_TRIGGER = 0.35;
const AUTO_SCROLL_RESET = 0.1;

export function Hi() {
  const pinRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);
  const [pinHeight, setPinHeight] = useState(0);

  // Raw, page-wide scroll position — used to fade/blur Hero smoothly across
  // the *entire* distance between Hero and About, so the fade-in on the way
  // back never sits on a blank background waiting for a threshold to be
  // crossed.
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateHeight = () => setPinHeight(pinRef.current?.offsetHeight ?? 0);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const fadeRange = pinHeight || 1;
  const blur = useTransform(scrollY, [0, fadeRange], [0, 16]);
  const opacity = useTransform(scrollY, [0, fadeRange], [1, 0]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  // Listen for actual wheel/touch gestures rather than a scroll-position
  // motion value: the latter also changes for programmatic/anchor-driven
  // scrolls (e.g. clicking a Nav link to Projects scrolls straight through
  // Hero's pin range on the way there), which would otherwise cross the
  // trigger threshold and hijack that navigation into landing on About.
  // Progress is measured fresh off the DOM on each gesture (matching
  // About's own back-to-Hero trigger) rather than off a motion value, since
  // 'wheel'/'touchmove' fire before the browser applies that frame's
  // scroll, so a motion value driven by the scroll event would still be
  // reading the previous, stale position.
  useEffect(() => {
    // Unclamped: once the page has scrolled well past Hi (e.g. the user
    // tapped a Nav link straight to Projects), rect.top is deeply negative
    // and clamping this to 1 would make every section below Hi permanently
    // read as "past the trigger" — so the very next real scroll gesture
    // anywhere on the page, no matter how far from Hi, would force a jump
    // back to About. Leaving it unclamped lets the `<= 1` check below tell
    // "still inside Hi's own pin range" apart from "long past it".
    const getRawProgress = () => {
      const rect = pinRef.current?.getBoundingClientRect();
      if (!rect) return null;
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return null;
      return -rect.top / scrollable;
    };

    const tryTrigger = (isForward: boolean) => {
      const progress = getRawProgress();
      if (progress === null) return;
      if (
        isForward &&
        progress >= AUTO_SCROLL_TRIGGER &&
        progress <= 1 &&
        !hasTriggeredRef.current
      ) {
        hasTriggeredRef.current = true;
        scrollToElementTop("about");
      } else if (progress < AUTO_SCROLL_RESET) {
        hasTriggeredRef.current = false;
      }
    };

    const handleWheel = (event: WheelEvent) => tryTrigger(event.deltaY > 0);

    let touchStartY = 0;
    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };
    const handleTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY ?? 0;
      tryTrigger(touchStartY - currentY > 10);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div ref={pinRef} id="hi" className="relative h-[150vh]">
      <motion.section
        style={{ filter, opacity }}
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-primary-900 pt-20"
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {RINGS.map((ring, index) => (
            <span
              key={ring.size}
              className={`absolute rounded-full border border-primary-700 opacity-0 ${ring.opacity}`}
              style={{
                width: ring.size,
                height: ring.size,
                animation: "ripple-expand 1.1s ease-out forwards",
                animationDelay: `${index * 200}ms`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-primary-400/40 bg-primary-800 sm:h-52 sm:w-52">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="(min-width: 640px) 13rem, 10rem"
              className="object-cover"
            />
          </div>

          <p className="mt-6 text-xs font-medium tracking-[0.2em] text-primary-300 uppercase">
            {profile.role}
          </p>

          <h1 className="mt-4 text-4xl leading-tight font-bold tracking-tight text-white sm:text-6xl">
            안녕하세요,
            <br />
            <span className="text-primary-200">{profile.name}</span>입니다.
          </h1>

          <p className="mt-6 text-base text-primary-400 sm:text-lg">
            {profile.tagline}
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-xs tracking-[0.2em] text-primary-500 lowercase">
            scroll
          </span>
          <span className="h-8 w-px animate-bounce bg-primary-500/60" />
        </div>
      </motion.section>
    </div>
  );
}
