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
import { AutoScrollText } from "@/components/ui/AutoScrollText";
import { TechIcon, resolveTechIcon } from "@/components/ui/TechIcon";

const MOBILE_SPIN_DEGREES = 75;

// Spins the card in on its vertical (Y) axis in place (no x/y drift) instead
// of the desktop version's slide-in-from-the-side, since on a narrow mobile
// viewport a card sliding in from off-screen has nowhere to go but past the
// edge of the screen, widening the page's scrollable area into a horizontal
// scrollbar. A Y-axis spin — unlike a flat Z-axis rotate — foreshortens the
// card as it turns rather than widening its bounding box, so it doesn't
// reintroduce that same overflow risk.
const MOBILE_CARD_VARIANTS = {
  left: {
    hidden: { opacity: 0, x: 0, y: 0, rotateY: -MOBILE_SPIN_DEGREES },
    visible: { opacity: 1, x: 0, y: 0, rotateY: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 0, y: 0, rotateY: MOBILE_SPIN_DEGREES },
    visible: { opacity: 1, x: 0, y: 0, rotateY: 0 },
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
      <div className="mt-1 ml-2 space-y-1">
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

interface ProjectCardMobileProps {
  project: Project;
  isEven: boolean;
}

export function ProjectCardMobile({ project, isEven }: ProjectCardMobileProps) {
  const stickerStyle = isEven
    ? "bg-primary-700 text-white"
    : "bg-secondary-500 text-primary-900";
  const headlineStyle = isEven ? "text-primary-700" : "text-secondary-700";
  const articleStyle = isEven
    ? "mr-auto border-primary-600"
    : "ml-auto border-secondary-600";

  const metaParts = [
    project.meta?.period ?? "",
    project.meta?.role ?? "",
    // ...getMetaParts(project.meta),
    // project.organization,
  ].filter((part): part is string => Boolean(part));

  return (
    // overflow-hidden + padding: contains the badge sticker (which sits
    // outside the card's own box via `-top-4`) so it doesn't get cut off by
    // overflow-hidden the way an un-padded version once clipped the sticker
    // on the very first card. Horizontal clipping also guards against any
    // residual bounding-box growth from the perspective transform below.
    <div className="overflow-hidden px-3 pt-8 pb-6">
      <motion.article
        variants={
          isEven ? MOBILE_CARD_VARIANTS.left : MOBILE_CARD_VARIANTS.right
        }
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ transformPerspective: 1000 }}
        className={`relative max-w-2xl overflow-visible rounded-2xl border-2 bg-white p-6 px-4 sm:p-10 ${articleStyle}`}
      >
        <span
          className={`absolute -top-4 max-w-[80%] -rotate-3 rounded-full px-4 py-2 text-sm font-bold shadow-sm ${stickerStyle} ${
            isEven ? "left-6" : "right-6"
          }`}
        >
          {project.name}
        </span>

        <p className={`text-lg font-bold ${headlineStyle}`}>
          {project.headline}
        </p>

        {project.overview && (
          <AutoScrollText className="text-xs leading-relaxed text-primary-600">
            {project.overview}
          </AutoScrollText>
        )}

        {metaParts.length > 0 && (
          <AutoScrollText className="font-mono text-xs text-primary-500">
            {metaParts.join(" · ")}
          </AutoScrollText>
        )}

        <Divider />

        {project.coreContribution && (
          <div className="mt-4">
            <AutoScrollText className="text-sm font-bold text-primary-900">
              <RichText value={project.coreContribution.subtitle} />
            </AutoScrollText>
            <div className="mt-4 space-y-2">
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
          <div className="scrollbar-hidden flex gap-2 overflow-x-auto">
            {project.tech.map((tech) => {
              const { iconKey, color } = resolveTechIcon(tech);
              return (
                <TechIcon key={tech} name={tech} iconKey={iconKey} color={color} size="sm" />
              );
            })}
          </div>
        )}

        {/* {project.tags && project.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap justify-end gap-x-2 gap-y-1 font-mono text-[10px] text-primary-500">
            {project.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        )} */}
      </motion.article>
    </div>
  );
}
