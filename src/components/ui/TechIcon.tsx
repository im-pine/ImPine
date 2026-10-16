"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMantine,
  SiRedux,
  SiRecoil,
  SiSwr,
  SiZod,
  SiLaravel,
  SiMysql,
  SiDocker,
  SiJenkins,
  SiGit,
  SiFigma,
  SiJira,
  SiNotion,
  SiCursor,
  SiNaver,
  SiGoogleanalytics,
  SiKubernetes,
  SiPrisma,
  SiPostgresql,
  SiBootstrap,
  SiFramer,
  SiPython,
  SiReactquery,
} from "react-icons/si";
// AWS has no logo in react-icons/si (Simple Icons dropped it), so this one
// icon comes from Font Awesome's brand set instead.
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";
import { findSkillDetail } from "@/data/skillGroups";

const ICONS: Record<string, IconType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  php: SiPhp,
  react: SiReact,
  nextdotjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  mantine: SiMantine,
  redux: SiRedux,
  recoil: SiRecoil,
  swr: SiSwr,
  zod: SiZod,
  laravel: SiLaravel,
  mysql: SiMysql,
  docker: SiDocker,
  jenkins: SiJenkins,
  git: SiGit,
  figma: SiFigma,
  jira: SiJira,
  notion: SiNotion,
  cursor: SiCursor,
  naver: SiNaver,
  googleanalytics: SiGoogleanalytics,
  kubernetes: SiKubernetes,
  prisma: SiPrisma,
  postgresql: SiPostgresql,
  bootstrap: SiBootstrap,
  framer: SiFramer,
  python: SiPython,
  reactquery: SiReactquery,
  aws: FaAws,
};

// react-icons/si slugs that don't reduce cleanly from the display name via
// simple normalization (lowercase + strip non-alphanumerics).
const ICON_KEY_ALIASES: Record<string, string> = {
  "next.js": "nextdotjs",
  "tailwind css": "tailwindcss",
  "google analytics": "googleanalytics",
  "react query": "reactquery",
};

const FALLBACK_COLOR = "#719470";

// Resolves a plain tech-stack display name (e.g. "Next.js", "PostgreSQL")
// to icon/color props for <TechIcon>. Checks skillGroups.ts first (the
// canonical source for name/iconKey/color), then falls back to a
// normalized-name lookup in ICONS for tech that isn't in the Skills section
// yet, using a neutral color since no brand color is on hand for those.
export function resolveTechIcon(name: string): {
  iconKey?: string;
  color: string;
} {
  const skill = findSkillDetail(name);
  if (skill) return { iconKey: skill.iconKey, color: skill.color };

  const normalized = name.toLowerCase();
  const key =
    ICON_KEY_ALIASES[normalized] ?? normalized.replace(/[^a-z0-9]/g, "");
  const iconKey = key in ICONS ? key : undefined;

  return { iconKey, color: FALLBACK_COLOR };
}

const SIZE_STYLES = {
  md: { badge: "h-14 w-14 ring-2", icon: 26, initials: "text-sm" },
  sm: { badge: "h-6 w-6 ring-1", icon: 14, initials: "text-[8px]" },
};

interface TechIconProps {
  name: string;
  iconKey?: string;
  color: string;
  size?: "sm" | "md";
}

export function TechIcon({ name, iconKey, color, size = "md" }: TechIconProps) {
  const Icon = iconKey ? ICONS[iconKey] : undefined;
  const styles = SIZE_STYLES[size];
  const triggerRef = useRef<HTMLSpanElement>(null);
  // A single Pointer Events state covers both cases: for mouse, enter/leave
  // fire on hover as usual; for touch (no real hover), enter fires on
  // contact and leave/up fire on release, which already matches "visible
  // only while held" — no separate hover vs. press state needed.
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);

  // The tooltip renders in a portal specifically so it isn't clipped by the
  // horizontally-scrolling tech-icon row on mobile project cards: that row
  // needs `overflow-x-auto` to scroll, but the CSS overflow spec then forces
  // `overflow-y` to compute as `auto` too, clipping anything (like this
  // tooltip popping up above its icon) that would otherwise render above the
  // row's clipped bounds. A z-index can't fix that — overflow clipping
  // happens regardless of stacking order — so the tooltip has to render
  // outside that ancestor entirely.
  useLayoutEffect(() => {
    if (!isVisible) return;
    const rect = triggerRef.current?.getBoundingClientRect();
    if (rect) setCoords({ top: rect.top, left: rect.left + rect.width / 2 });
  }, [isVisible]);

  const hide = () => setIsVisible(false);

  return (
    <>
      <span
        ref={triggerRef}
        className="relative inline-flex"
        onPointerEnter={() => setIsVisible(true)}
        onPointerLeave={hide}
        onPointerUp={hide}
        onPointerCancel={hide}
      >
        <span
          className={`flex shrink-0 items-center justify-center rounded-full bg-primary-50 ring-primary-400 ${styles.badge}`}
        >
          {Icon ? (
            <Icon size={styles.icon} color={color} />
          ) : (
            <span className={`font-bold text-primary-700 ${styles.initials}`}>
              {name.slice(0, 2).toUpperCase()}
            </span>
          )}
        </span>
      </span>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isVisible && coords && (
              <motion.span
                role="tooltip"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: "fixed",
                  top: coords.top,
                  left: coords.left,
                  transform: "translate(-50%, calc(-100% - 8px))",
                }}
                className="pointer-events-none z-50 rounded-md bg-primary-900 px-2 py-1 text-xs whitespace-nowrap text-white shadow-md"
              >
                {name}
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary-900" />
              </motion.span>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
