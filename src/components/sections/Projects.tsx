import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function Projects() {
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
          const stickerStyle = isEven
            ? "bg-primary-700 text-white"
            : "bg-secondary-500 text-primary-900";
          const headlineStyle = isEven
            ? "text-primary-700"
            : "text-secondary-700";
          const borderStyle = isEven
            ? "border-primary-600"
            : "border-secondary-600";

          return (
            <article
              key={project.id}
              className={`relative overflow-visible rounded-2xl border-2 bg-white p-8 sm:p-10 ${borderStyle}`}
            >
              <span
                className={`absolute -top-4 max-w-[80%] -rotate-3 rounded-full px-4 py-1.5 text-sm font-bold shadow-sm ${stickerStyle} ${
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
                <div className="mt-4 space-y-1.5">
                  {project.achievements.map((achievement, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed text-primary-700"
                    >
                      {achievement}
                    </p>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {others.length > 0 && (
        <div className="mt-20 sm:mt-28">
          <h3 className="mb-4 text-sm font-semibold text-muted">
            그 외 프로젝트
          </h3>
          <div className="space-y-3">
            {others.map((project) => (
              <div
                key={project.id}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-medium text-primary-900">
                    {project.title}
                  </h4>
                  {project.period && (
                    <span className="text-xs text-muted">{project.period}</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-primary-700">
                  {project.summary}
                </p>

                {project.tech.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                )}

                {project.achievements && project.achievements.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {project.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm leading-relaxed text-primary-700"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-400" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionContainer>
  );
}
