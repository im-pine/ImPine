"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ShowMoreToggle } from "@/components/ui/ShowMoreToggle";
import { StaggeredReveal, staggerItem } from "@/components/ui/StaggeredReveal";
import { ProjectCardDesktop } from "@/components/sections/ProjectCardDesktop";
import { ProjectCardMobile } from "@/components/sections/ProjectCardMobile";

const MOBILE_QUERY = "(max-width: 639px)";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export function Projects() {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useIsMobile();
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <SectionContainer
      id="projects"
      eyebrow="Projects"
      title="프로젝트"
      className="bg-primary-200"
    >
      <div className="space-y-14 sm:space-y-20">
        {featured.map((project, index) => {
          const isEven = index % 2 === 0;
          return isMobile ? (
            <ProjectCardMobile key={project.id} project={project} isEven={isEven} />
          ) : (
            <ProjectCardDesktop key={project.id} project={project} isEven={isEven} />
          );
        })}
      </div>

      {others.length > 0 && (
        <div className="mt-20 sm:mt-28">
          <StaggeredReveal show={expanded} className="mb-6 space-y-4">
            {others.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-medium text-primary-900">
                    {project.title}
                  </h4>
                  {project.period && (
                    <span className="text-xs text-muted">
                      {project.period}
                    </span>
                  )}
                </div>
                <p className="text-card-body mt-1 text-primary-700 sm:text-sm">
                  {project.summary}
                </p>
              </motion.div>
            ))}
          </StaggeredReveal>

          <ShowMoreToggle
            expanded={expanded}
            onToggle={() => setExpanded((prev) => !prev)}
            variant="light"
          />
        </div>
      )}
    </SectionContainer>
  );
}
