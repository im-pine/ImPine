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
} from "react-icons/si";
import type { IconType } from "react-icons";

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
};

interface TechIconProps {
  name: string;
  iconKey?: string;
  color: string;
}

export function TechIcon({ name, iconKey, color }: TechIconProps) {
  const Icon = iconKey ? ICONS[iconKey] : undefined;

  return (
    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-50 ring-2 ring-primary-400">
      {Icon ? (
        <Icon size={26} color={color} />
      ) : (
        <span className="text-sm font-bold text-primary-700">
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </span>
  );
}
