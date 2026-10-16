"use client";

import { motion } from "motion/react";
import { aiUsageGroups, type AiUsageKind } from "@/data/aiUsage";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { staggerContainer, staggerItem } from "@/components/ui/StaggeredReveal";

// Per-group HUD accent. Class strings are written out in full so Tailwind
// can pick them up statically.
const ACCENTS: Record<
  AiUsageKind,
  {
    index: string;
    code: string;
    tab: string;
    line: string;
    fill: string;
    rail: string;
    label: string;
    divider: string;
    border: string;
  }
> = {
  dev: {
    index: "01",
    code: "DEV_USE",
    tab: "bg-primary-800",
    line: "border-primary-600",
    fill: "bg-primary-600",
    rail: "bg-primary-300",
    label: "text-primary-500",
    divider: "bg-primary-300",
    border: "border-primary-300/80",
  },
  work: {
    index: "02",
    code: "WORK_USE",
    tab: "bg-secondary-800",
    line: "border-secondary-600",
    fill: "bg-secondary-600",
    rail: "bg-secondary-600",
    label: "text-secondary-700",
    divider: "bg-secondary-600",
    border: "border-secondary-600/50",
  },
};

const CHAMFER =
  "[clip-path:polygon(4px_0,100%_0,100%_calc(100%-4px),calc(100%-4px)_100%,0_100%,0_4px)]";

export function AiUsage() {
  return (
    <SectionContainer
      id="ai"
      eyebrow="AI"
      title="AI 활용"
      className="relative isolate overflow-hidden bg-primary-100"
    >
      <HudBackdrop />

      <div className="grid items-start gap-10 sm:grid-cols-2 sm:gap-8">
        {aiUsageGroups.map((group) => {
          const accent = ACCENTS[group.kind];
          return (
            <div
              key={group.kind}
              className={`relative min-w-0 border bg-primary-50/70 p-5 backdrop-blur-[2px] sm:p-7 ${accent.border}`}
            >
              <CornerBrackets className={accent.line} />

              <div className="flex items-center justify-between gap-4">
                <p
                  className={`py-1.5 pr-7 pl-3 text-base font-semibold text-white [clip-path:polygon(0_0,calc(100%-14px)_0,100%_100%,0_100%)] sm:text-lg ${accent.tab}`}
                >
                  {group.label}
                </p>
                <div className="flex shrink-0 gap-1">
                  {group.items.map((_, i) => (
                    <span
                      key={i}
                      className={`h-2.5 w-1.5 -skew-x-20 ${accent.fill}`}
                    />
                  ))}
                </div>
              </div>

              <div
                className={`mt-3 flex items-center gap-2 font-mono text-[11px] tracking-widest ${accent.label}`}
              >
                <span>
                  {accent.index} {"//"} {accent.code}
                </span>
                <span className={`h-px flex-1 ${accent.divider}`} />
                <span className={`h-1.5 w-1.5 ${accent.fill}`} />
              </div>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-6 space-y-4"
              >
                {group.items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={staggerItem}
                    className="relative pl-6 text-card-body leading-relaxed text-primary-800 sm:text-sm"
                  >
                    {/* Rail runs from this node's center to the next node's
                        center (li height + space-y-4 gap), so it never
                        overshoots past the last node when items wrap. */}
                    {i < group.items.length - 1 && (
                      <span
                        className={`absolute top-3 left-[5px] h-[calc(100%+1rem)] w-px ${accent.rail}`}
                      />
                    )}
                    <span
                      className={`absolute top-[7px] left-0 h-[11px] w-[11px] rounded-full border-2 bg-primary-50 ${accent.line}`}
                    />
                    <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="font-semibold text-primary-900">
                        {item.title}
                      </span>
                      {item.tools?.map((tool) => (
                        <span
                          key={tool}
                          className={`bg-primary-200 px-2 font-mono text-[11px] whitespace-nowrap text-primary-700 ${CHAMFER}`}
                        >
                          {tool}
                        </span>
                      ))}
                    </p>
                    <p className="mt-1 text-primary-700">{item.text}</p>
                    {(item.site || item.links) && (
                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        {item.site && (
                          <a
                            href={item.site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 py-0.5 pr-2.5 pl-2 font-mono text-xs text-white transition-opacity hover:opacity-85 ${accent.tab} ${CHAMFER}`}
                          >
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white motion-reduce:animate-none" />
                            {new URL(item.site).host}
                            <span aria-hidden>↗</span>
                          </a>
                        )}
                        {item.links?.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs text-primary-500 underline decoration-primary-300 underline-offset-4 transition-colors hover:text-primary-800"
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}

function CornerBrackets({ className }: { className: string }) {
  // 3px bracket offset by 2px so the panel's 1px border runs through its
  // middle (1px of bracket on each side of the line).
  const base = `pointer-events-none absolute h-4 w-4 ${className}`;
  return (
    <>
      <span
        className={`${base} -top-0.5 -left-0.5 border-t-[3px] border-l-[3px]`}
      />
      <span
        className={`${base} -top-0.5 -right-0.5 border-t-[3px] border-r-[3px]`}
      />
      <span
        className={`${base} -bottom-0.5 -left-0.5 border-b-[3px] border-l-[3px]`}
      />
      <span
        className={`${base} -right-0.5 -bottom-0.5 border-r-[3px] border-b-[3px]`}
      />
    </>
  );
}

// Decorative layer: a faint grid fading out from the top-right plus a slowly
// rotating HUD ring. Sits at -z-10 inside the section's own stacking context
// (`isolate`) so it paints above the section background but under content.
function HudBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in srgb, var(--primary-300) 45%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--primary-300) 45%, transparent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 80% at 100% 0%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 80% at 100% 0%, black, transparent)",
        }}
      />

      <svg
        viewBox="0 0 200 200"
        fill="none"
        className="absolute -top-24 -right-32 h-[340px] w-[340px] text-primary-300 opacity-70 sm:-top-20 sm:-right-24 sm:h-[460px] sm:w-[460px] sm:opacity-100"
      >
        <g
          className="animate-[spin_60s_linear_infinite] motion-reduce:animate-none"
          style={{ transformOrigin: "100px 100px" }}
        >
          <circle
            cx="100"
            cy="100"
            r="96"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeDasharray="2 4"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            stroke="currentColor"
            strokeWidth="4"
            pathLength="360"
            strokeDasharray="0.8 5.2"
          />
        </g>
        <circle
          cx="100"
          cy="100"
          r="86"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <g
          className="animate-[spin_40s_linear_infinite_reverse] motion-reduce:animate-none"
          style={{ transformOrigin: "100px 100px" }}
        >
          <circle
            cx="100"
            cy="100"
            r="74"
            stroke="currentColor"
            strokeWidth="3"
            pathLength="360"
            strokeDasharray="70 18 40 52 30 150"
          />
          <circle
            cx="100"
            cy="100"
            r="74"
            stroke="currentColor"
            strokeWidth="3"
            pathLength="360"
            strokeDasharray="0 300 22 38"
          />
        </g>
        <circle
          cx="100"
          cy="100"
          r="40"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        <circle cx="100" cy="100" r="3" fill="currentColor" />
        <path
          d="M100 48v18M100 134v18M48 100h18M134 100h18"
          stroke="currentColor"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  );
}
