import { career } from "@/data/career";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function Career() {
  return (
    <SectionContainer id="career" eyebrow="Career" title="경력" className="bg-primary-50">
      <div className="relative">
        <div className="absolute top-2 bottom-2 left-[7.5rem] hidden w-px bg-border sm:block" />

        <div className="space-y-12">
          {career.map((entry) => (
            <div
              key={entry.company}
              className="relative grid grid-cols-1 gap-2 sm:grid-cols-[7rem_2rem_1fr] sm:gap-x-6"
            >
              <div className="font-mono text-sm text-muted sm:text-right">
                {entry.period}
              </div>

              <div className="hidden sm:flex sm:justify-center">
                <span className="relative z-10 mt-1 h-3 w-3 rounded-full border-2 border-primary-500 bg-primary-50" />
              </div>

              <div>
                <p className="text-xs text-muted">{entry.company}</p>
                <h3 className="mt-1 text-lg font-semibold text-primary-700">
                  {entry.roles[0]}
                </h3>

                <ul className="mt-3 space-y-2">
                  {entry.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex gap-2 text-sm leading-relaxed text-primary-700"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-400" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full bg-primary-800 px-3 py-1 font-mono text-xs text-white"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
