"use client";

import { useState } from "react";
import { skillGroups } from "@/data/skillGroups";
import { TechIcon } from "@/components/ui/TechIcon";

const VISIBLE_COUNT = 5;

export function Skills() {
  const [activeLabel, setActiveLabel] = useState(skillGroups[0].label);
  const [expanded, setExpanded] = useState(false);

  const activeGroup =
    skillGroups.find((group) => group.label === activeLabel) ?? skillGroups[0];
  const primarySkills = activeGroup.skills.slice(0, VISIBLE_COUNT);
  const extraSkills = activeGroup.skills.slice(VISIBLE_COUNT);
  const hasMore = extraSkills.length > 0;

  return (
    <section id="skills" className="scroll-mt-20 bg-primary-900 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 sm:mb-14">
          <p className="mb-2 flex items-center gap-2 text-sm font-medium tracking-[0.15em] text-secondary-400 uppercase">
            <span className="h-px w-4 bg-secondary-400" />
            Skills
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            기술 스택
          </h2>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
          <div className="flex shrink-0 gap-1 overflow-x-auto sm:w-40 sm:flex-col sm:gap-2 sm:overflow-visible">
            {skillGroups.map((group) => {
              const isActive = group.label === activeLabel;
              return (
                <button
                  key={group.label}
                  type="button"
                  onClick={() => {
                    setActiveLabel(group.label);
                    setExpanded(false);
                  }}
                  className={`shrink-0 border-l-2 px-4 py-2 text-left text-sm font-medium whitespace-nowrap transition-colors sm:whitespace-normal ${
                    isActive
                      ? "border-primary-300 text-primary-100"
                      : "border-transparent text-primary-500 hover:text-primary-300"
                  }`}
                >
                  {group.label}
                </button>
              );
            })}
          </div>

          <div className="min-h-[583px] min-w-0 flex-1">
            <p className="mb-6 text-lg font-semibold text-primary-100">
              Skill Stack{" "}
              <span className="text-secondary-400">@ {activeGroup.label}</span>
            </p>

            <div className="space-y-8">
              {primarySkills.map((skill) => (
                <div key={skill.name} className="flex items-start gap-4">
                  <TechIcon
                    name={skill.name}
                    iconKey={skill.iconKey}
                    color={skill.color}
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-white">{skill.name}</p>
                    <ul className="mt-1.5 space-y-1">
                      {skill.notes.map((note, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm leading-relaxed text-primary-300"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-500" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {expanded && extraSkills.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {extraSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-primary-600 bg-primary-800/60 px-3 py-1.5 text-sm whitespace-nowrap text-primary-100"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            )}

            {hasMore && (
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                className="mt-8 flex w-full items-center gap-4 text-sm font-medium text-primary-300 transition-colors hover:text-white"
              >
                <span className="h-px flex-1 bg-primary-600" />
                <span>{expanded ? "Show Less" : "Load More"}</span>
                <span className="h-px flex-1 bg-primary-600" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
