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

  return (
    <span className="group relative inline-flex">
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

      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded-md bg-primary-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100"
      >
        {name}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary-900" />
      </span>
    </span>
  );
}
