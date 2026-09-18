"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const DEFAULT_HOLD_MS = 2000;
const DEFAULT_SPEED_PX_PER_SECOND = 25;

type Phase = "idle" | "holding-start" | "scrolling" | "holding-end" | "resetting";

interface AutoScrollTextProps {
  children: ReactNode;
  className?: string;
  holdDurationMs?: number;
  speedPxPerSecond?: number;
}

export function AutoScrollText({
  children,
  className = "",
  holdDurationMs = DEFAULT_HOLD_MS,
  speedPxPerSecond = DEFAULT_SPEED_PX_PER_SECOND,
}: AutoScrollTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [overflowPx, setOverflowPx] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");

  // Measure overflow on mount and whenever either element's box changes —
  // observing both the container (catches resizes/layout shifts) and the
  // text span itself (catches content changes, since swapping in different
  // children changes the span's own scrollWidth without necessarily
  // resizing the container).
  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    if (!container || !textEl) return;

    const measure = () => {
      // A change in overflow (including mid-cycle, from a resize) always
      // aborts whatever phase was running and restarts the cycle cleanly
      // rather than trying to patch an in-flight scroll.
      const next = Math.max(0, textEl.scrollWidth - container.clientWidth);
      setOverflowPx(next);
      setPhase(next > 0 ? "holding-start" : "idle");
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    observer.observe(textEl);
    return () => observer.disconnect();
  }, []);

  // Drives the hold -> scroll -> hold -> reset -> repeat cycle.
  useEffect(() => {
    if (phase === "holding-start") {
      const id = setTimeout(() => setPhase("scrolling"), holdDurationMs);
      return () => clearTimeout(id);
    }

    if (phase === "scrolling") {
      const duration = (overflowPx / speedPxPerSecond) * 1000;
      const id = setTimeout(() => setPhase("holding-end"), duration);
      return () => clearTimeout(id);
    }

    if (phase === "holding-end") {
      const id = setTimeout(() => setPhase("resetting"), holdDurationMs);
      return () => clearTimeout(id);
    }

    if (phase === "resetting") {
      // One frame with the transition off so the snap back to the start
      // commits before transitions are re-enabled in "holding-start" —
      // otherwise the reset itself would animate backwards.
      const id = requestAnimationFrame(() => setPhase("holding-start"));
      return () => cancelAnimationFrame(id);
    }
  }, [phase, overflowPx, holdDurationMs, speedPxPerSecond]);

  const isScrolling = phase === "scrolling";
  const translateX = phase === "scrolling" || phase === "holding-end" ? -overflowPx : 0;
  const scrollDurationMs = (overflowPx / speedPxPerSecond) * 1000;

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
    >
      <span
        ref={textRef}
        className="inline-block will-change-transform"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: isScrolling
            ? `transform ${scrollDurationMs}ms linear`
            : "none",
        }}
      >
        {children}
      </span>
    </div>
  );
}
