"use client";

import { motion } from "motion/react";
import type { Project } from "@/data/projects";

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

  return (
    // overflow-hidden + padding: contains the badge sticker (which sits
    // outside the card's own box via `-top-4`) so it doesn't get cut off by
    // overflow-hidden the way an un-padded version once clipped the sticker
    // on the very first card. Horizontal clipping also guards against any
    // residual bounding-box growth from the perspective transform below.
    <div className="overflow-hidden px-3 pt-8 pb-6">
      <motion.article
        variants={isEven ? MOBILE_CARD_VARIANTS.left : MOBILE_CARD_VARIANTS.right}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ transformPerspective: 1000 }}
        className={`relative max-w-2xl  overflow-visible rounded-2xl border-2 bg-white p-8 sm:p-10 ${articleStyle}`}
      >
        <span
          className={`absolute -top-4 max-w-[80%] -rotate-3 rounded-full px-4 py-2 text-sm font-bold shadow-sm ${stickerStyle} ${
            isEven ? "left-6" : "right-6"
          }`}
        >
          {project.title}
        </span>

        <p className={`text-lg font-bold ${headlineStyle}`}>
          {project.summary}
        </p>

        <div
          className={`mt-2 flex font-mono text-xs text-primary-600 ${
            isEven ? "justify-end" : "justify-start"
          }`}
        >
          {project.period}
          {project.contribution && ` · ${project.contribution}`}
        </div>

        {project.tech.length > 0 && (
          <div className="scrollbar-hidden mt-6 flex gap-2 overflow-x-auto">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="shrink-0 rounded-full bg-primary-800 px-3 py-1 font-mono text-xs whitespace-nowrap text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.achievements && project.achievements.length > 0 && (
          <div className="mt-4 space-y-2">
            {project.achievements.map((achievement, i) => (
              <p
                key={i}
                className="text-card-body leading-relaxed text-primary-700 sm:text-sm"
              >
                {achievement}
              </p>
            ))}
          </div>
        )}
      </motion.article>
    </div>
  );
}
