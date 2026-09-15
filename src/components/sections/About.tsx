import { profile } from "@/data/profile";
import { education, certifications, activities } from "@/data/background";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function About() {
  return (
    <SectionContainer
      id="about"
      eyebrow="About"
      title="About Me"
      className="bg-primary-100"
    >
      <div className="relative mx-auto mb-16 max-w-3xl px-10 py-8 text-center bg-primary-50">
        <span className="absolute top-0 left-0 h-10 w-10 border-t-2 border-l-2 border-secondary-500" />
        <span className="absolute right-0 bottom-0 h-10 w-10 border-r-2 border-b-2 border-secondary-500" />

        <p className="text-lg font-semibold text-primary-900">
          {profile.bio.lead}
        </p>
        <div className="mt-4 space-y-4">
          {profile.bio.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-md leading-relaxed text-primary-700">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary-500 uppercase">
            학력
          </h3>
          <ul className="space-y-3">
            {education.map((item) => (
              <li key={item.school} className="flex items-center gap-2">
                <span className="text-sm text-primary-700">{item.school}</span>
                <span className="rounded-full bg-primary-200 px-2 py-0.5 text-xs text-primary-700">
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary-500 uppercase">
            자격증
          </h3>
          <ul className="space-y-3">
            {certifications.map((item) => (
              <li key={item.name}>
                <p className="text-sm text-primary-700">{item.name}</p>
                <p className="font-mono text-xs text-muted">{item.issuer}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary-500 uppercase">
            수상
          </h3>
          <ul className="space-y-3">
            {profile.awards.map((award) => (
              <li key={award.title}>
                <p className="text-sm text-primary-700">{award.title}</p>
                <p className="font-mono text-xs text-muted">{award.org}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-md mb-8 font-semibold tracking-[0.2em] text-primary-500 uppercase">
          대외활동
        </h3>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {activities.map((activity, index) => {
            const isEven = index % 2 === 0;
            const noteStyle = isEven ? "bg-secondary-300" : "bg-primary-200";
            const pinStyle = isEven ? "bg-primary-700" : "bg-secondary-600";
            const rotateStyle = isEven ? "-rotate-2" : "rotate-2";

            return (
              <div key={activity.title} className={`relative ${rotateStyle}`}>
                <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                  <span
                    className={`relative block h-6 w-6 rounded-full shadow-md ${pinStyle}`}
                  >
                    <span className="absolute top-1 left-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                  </span>
                </span>

                <div
                  className={`flex min-h-72 flex-col rounded-sm p-6 shadow-md ${noteStyle}`}
                >
                  <span className="font-mono text-xs text-primary-900/60">
                    {activity.period}
                  </span>
                  <h4 className="mt-2 text-lg font-bold text-primary-900">
                    {activity.title}
                  </h4>
                  <p className="mt-1 text-xs text-primary-900/70">
                    {activity.organizer}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {activity.notes.map((line, i) => (
                      <li
                        key={i}
                        className="text-sm leading-snug text-primary-900/80"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
