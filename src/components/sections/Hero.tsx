import Image from "next/image";
import { profile } from "@/data/profile";

const RINGS = [
  { size: 340, opacity: "border-primary-300/20" },
  { size: 500, opacity: "border-primary-300/14" },
  { size: 660, opacity: "border-primary-300/8" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-20 items-center justify-center overflow-hidden bg-primary-900 pt-20"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {RINGS.map((ring, index) => (
          <span
            key={ring.size}
            className={`absolute rounded-full border opacity-0 ${ring.opacity}`}
            style={{
              width: ring.size,
              height: ring.size,
              animation: "ripple-expand 1.1s ease-out forwards",
              animationDelay: `${index * 200}ms`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="relative h-40 w-40 overflow-hidden rounded-full border border-primary-400/40 bg-primary-800 sm:h-52 sm:w-52">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            priority
            sizes="(min-width: 640px) 13rem, 10rem"
            className="object-cover"
          />
        </div>

        <p className="mt-6 text-xs font-medium tracking-[0.2em] text-primary-300 uppercase">
          {profile.role}
        </p>

        <h1 className="mt-4 text-4xl leading-tight font-bold tracking-tight text-white sm:text-6xl">
          안녕하세요,
          <br />
          <span className="text-primary-200">{profile.name}</span>입니다.
        </h1>

        <p className="mt-6 text-base text-primary-400 sm:text-lg">
          {profile.tagline}
        </p>

        <span className="mt-8 h-px w-10 bg-secondary-500" />

        {/* <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg border border-primary-400/50 px-6 py-3 text-sm font-semibold text-primary-100 transition-colors hover:bg-primary-800/50"
          >
            연락하기
          </a>
        </div> */}
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs tracking-[0.2em] text-primary-500 lowercase">
          scroll
        </span>
        <span className="h-8 w-px animate-bounce bg-primary-500/60" />
      </div>
    </section>
  );
}
