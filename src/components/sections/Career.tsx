"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { career } from "@/data/career";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { staggerContainer, staggerItem } from "@/components/ui/StaggeredReveal";

// Fixed length for the traveling highlight, independent of how tall the
// timeline track ends up being — it should always read as a short "comet"
// moving down the line, not a growing fill.
const SEGMENT_HEIGHT = 80;

export function Career() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackHeight, setTrackHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => setTrackHeight(trackRef.current?.offsetHeight ?? 0);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const travelDistance = Math.max(trackHeight - SEGMENT_HEIGHT, 0);

  return (
    <SectionContainer id="career" eyebrow="Career" title="경력" className="bg-primary-50">
      <div className="relative">
        <div
          ref={trackRef}
          className="absolute top-2 bottom-2 left-[7.5rem] hidden w-px sm:block"
        >
          <div className="absolute inset-0 bg-border" />
          {trackHeight > 0 && (
            <motion.div
              className="absolute inset-x-0 top-0 rounded-full"
              initial={{ y: 0, opacity: 1 }}
              whileInView={{ y: travelDistance, opacity: [1, 1, 0] }}
              viewport={{ once: true }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                opacity: { duration: 5, times: [0, 0.9, 1] },
              }}
              style={{
                height: SEGMENT_HEIGHT,
                background:
                  "linear-gradient(to bottom, transparent, var(--secondary-700), transparent)",
              }}
            />
          )}
        </div>

        <div className="space-y-12">
          {career.map((entry) => (
            <div
              key={entry.company}
              className="relative grid grid-cols-1 gap-2 sm:grid-cols-[7rem_2rem_1fr] sm:gap-x-6"
            >
              <div className="font-mono text-sm text-muted sm:text-right">
                {entry.period}
              </div>

              <div className="hidden sm:flex sm:justify-center">
                <span className="relative z-10 mt-1 h-3 w-3 rounded-full border-2 border-primary-500 bg-primary-50" />
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.p variants={staggerItem} className="text-xs text-muted">
                  {entry.company}
                </motion.p>
                <motion.h3
                  variants={staggerItem}
                  className="mt-1 text-lg font-semibold text-primary-700"
                >
                  {entry.roles[0]}
                </motion.h3>

                <motion.ul variants={staggerContainer} className="mt-4 space-y-2">
                  {entry.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      variants={staggerItem}
                      className="flex gap-2 text-card-body leading-relaxed text-primary-700 sm:text-sm"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-400" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div variants={staggerItem} className="mt-4 flex flex-wrap gap-2">
                  {entry.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full bg-primary-800 px-3 py-1 font-mono text-xs text-white"
                    >
                      {role}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
