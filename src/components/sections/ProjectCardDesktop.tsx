"use client";

import { motion } from "motion/react";
import type { Project } from "@/data/projects";

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

interface ProjectCardDesktopProps {
  project: Project;
  isEven: boolean;
}

export function ProjectCardDesktop({ project, isEven }: ProjectCardDesktopProps) {
  const stickerStyle = isEven
    ? "bg-primary-700 text-white"
    : "bg-secondary-500 text-primary-900";
  const headlineStyle = isEven ? "text-primary-700" : "text-secondary-700";
  const articleStyle = isEven
    ? "mr-auto border-primary-600"
    : "ml-auto border-secondary-600";

  return (
    <motion.article
      variants={isEven ? CARD_VARIANTS.left : CARD_VARIANTS.right}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative max-w-2xl  overflow-visible rounded-2xl border-2 bg-white p-8 sm:p-10 ${articleStyle}`}
    >
      <span
        className={`absolute -top-4 max-w-[80%] -rotate-3 rounded-full px-4 py-2 text-sm font-bold shadow-sm ${stickerStyle} ${
          isEven ? "left-6" : "right-6"
        }`}
      >
        {project.title}
      </span>

      <div
        className={`flex font-mono text-xs text-primary-600 ${
          isEven ? "justify-end" : "justify-start"
        }`}
      >
        {project.period}
        {project.contribution && ` · ${project.contribution}`}
      </div>

      {project.tech.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary-800 px-3 py-1 font-mono text-xs text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <p className={`mt-6 text-lg font-bold ${headlineStyle}`}>
        {project.summary}
      </p>

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
  );
}
