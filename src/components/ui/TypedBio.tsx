"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const CHAR_INTERVAL_MS = 48;
const PARAGRAPH_FADE_MS = 1700;

interface TypedBioProps {
  lead: string;
  paragraphs: string[];
}

export function TypedBio({ lead, paragraphs }: TypedBioProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  const [charCount, setCharCount] = useState(0);
  const isTyping = isInView && charCount < lead.length;
  const leadDone = charCount >= lead.length;

  useEffect(() => {
    if (!isInView || charCount >= lead.length) return;
    const id = setTimeout(
      () => setCharCount((count) => count + 1),
      CHAR_INTERVAL_MS,
    );
    return () => clearTimeout(id);
  }, [isInView, charCount, lead.length]);

  return (
    <div ref={containerRef}>
      <p className="text-lg font-semibold text-primary-900">
        {lead.slice(0, charCount)}
        {isTyping && <span className="typewriter-cursor" />}
      </p>
      <div className="mt-4 space-y-4">
        {paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className="text-md leading-relaxed text-primary-700 transition-opacity ease-out"
            style={{
              opacity: leadDone ? 1 : 0,
              transitionDuration: `${PARAGRAPH_FADE_MS}ms`,
              transitionDelay: leadDone ? `${i * 150}ms` : "0ms",
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
