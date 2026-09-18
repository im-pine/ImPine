"use client";

import { motion } from "motion/react";
import {
  getMetaParts,
  type MultiRichText,
  type Project,
} from "@/data/projects";
import { RichText } from "@/components/ui/RichText";
import { Divider } from "@/components/ui/Divider";
import { MultiRichTextShowMore } from "@/components/ui/MultiRichTextShowMore";
import { TechIcon, resolveTechIcon } from "@/components/ui/TechIcon";

// Left cards drift in from the left while rotating clockwise into place;
// right cards mirror that from the right, rotating counter-clockwise.
const CARD_VARIANTS = {
  left: {
    hidden: { opacity: 0, x: -80, y: 48, rotate: -12 },
    visible: { opacity: 1, x: 0, y: 0, rotate: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 80, y: 48, rotate: 12 },
    visible: { opacity: 1, x: 0, y: 0, rotate: 0 },
  },
};

interface MultiRichTextBlockProps {
  label: string;
  lines: MultiRichText;
}

function MultiRichTextBlock({ label, lines }: MultiRichTextBlockProps) {
  if (lines.length === 0) return null;

  return (
    <div>
      <p className="text-[11px] font-bold tracking-wide text-primary-500 uppercase">
        {label}
      </p>
      <div className="mt-1 space-y-1 ml-2">
        {lines.map((line, i) => (
          <p
            key={i}
            className="text-card-body leading-relaxed text-primary-700 sm:text-sm"
          >
            <RichText value={line} />
          </p>
        ))}
      </div>
    </div>
  );
}

interface ProjectCardDesktopProps {
  project: Project;
  isEven: boolean;
}

export function ProjectCardDesktop({
  project,
  isEven,
}: ProjectCardDesktopProps) {
  const stickerStyle = isEven
    ? "bg-primary-700 text-white"
    : "bg-secondary-500 text-primary-900";
  const headlineStyle = isEven ? "text-primary-700" : "text-secondary-700";
  const articleStyle = isEven
    ? "mr-auto border-primary-600"
    : "ml-auto border-secondary-600";

  const metaParts = [
    ...getMetaParts(project.meta),
    project.organization,
  ].filter((part): part is string => Boolean(part));

  return (
    <motion.article
      variants={isEven ? CARD_VARIANTS.left : CARD_VARIANTS.right}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative max-w-3xl  overflow-visible rounded-2xl border-2 bg-white p-8 sm:p-10 ${articleStyle}`}
    >
      <span
        className={`absolute -top-4 max-w-[80%] -rotate-3 rounded-full px-4 py-2 text-sm font-bold shadow-sm ${stickerStyle} ${
          isEven ? "left-6" : "right-6"
        }`}
      >
        {project.name}
      </span>

      <p className={`text-lg font-bold ${headlineStyle}`}>{project.headline}</p>

      {project.overview && (
        <p className="text-xs leading-relaxed text-primary-600">
          {project.overview}
        </p>
      )}

      {metaParts.length > 0 && (
        <div
          className={`flex flex-wrap items-center gap-x-1 font-mono text-xs text-primary-500`}
        >
          {metaParts.map((part, i) => (
            <span key={i}>
              {i > 0 && <span className="mr-1">·</span>}
              {part}
            </span>
          ))}
        </div>
      )}

      <Divider />

      {project.coreContribution && (
        <div className="mt-4">
          <p className="text-sm font-bold text-primary-900">
            <RichText value={project.coreContribution.subtitle} />
          </p>
          <div className="mt-4 space-y-4">
            <MultiRichTextBlock
              label="과제"
              lines={project.coreContribution.task}
            />
            <MultiRichTextBlock
              label="해결"
              lines={project.coreContribution.solution}
            />
            <MultiRichTextBlock
              label="결과"
              lines={project.coreContribution.result}
            />
          </div>
        </div>
      )}

      <MultiRichTextShowMore
        lines={project.contributions}
        className={project.coreContribution ? "" : "mt-6"}
        topDivider={!!project.coreContribution}
        bottomDivider={project.tech.length > 0}
      />

      {project.contributions.length === 0 && project.tech.length > 0 && (
        <Divider />
      )}

      {project.tech.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => {
            const { iconKey, color } = resolveTechIcon(tech);
            return (
              <TechIcon key={tech} name={tech} iconKey={iconKey} color={color} size="sm" />
            );
          })}
        </div>
      )}

      {/* {project.tags && project.tags.length > 0 && (
        <div className="mt-3 flex justify-end flex-wrap gap-x-2 gap-y-1 font-mono text-[10px] text-primary-500">
          {project.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      )} */}
    </motion.article>
  );
}
