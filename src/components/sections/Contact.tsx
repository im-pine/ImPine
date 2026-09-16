"use client";

import { profile } from "@/data/profile";
import { SectionContainer } from "@/components/ui/SectionContainer";

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v10.5c0 .621-.504 1.125-1.125 1.125H3.375A1.125 1.125 0 0 1 2.25 17.25V6.75Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 7.5l9.75 6.5 9.75-6.5"
      />
    </svg>
  );
}

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = formData.get("name")?.toString() ?? "";
  const email = formData.get("email")?.toString() ?? "";
  const message = formData.get("message")?.toString() ?? "";

  const subject = encodeURIComponent(`포트폴리오 문의 - ${name}`);
  const body = encodeURIComponent(
    `이름: ${name}\n이메일: ${email}\n\n${message}`,
  );

  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
}

export function Contact() {
  return (
    <SectionContainer
      id="contact"
      eyebrow="Contact"
      title="연락하기"
      className="bg-primary-200"
    >
      <p className="-mt-6 mb-12 max-w-md text-primary-700">
        Im Pine Thank You :)
      </p>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-800 text-white">
              <MailIcon />
            </span>
            <div>
              <p className="font-mono text-xs text-muted">Email</p>
              <p className="text-primary-700">{profile.email}</p>
            </div>
          </div>

          {profile.links.map((link) => (
            <div key={link.label} className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-800 text-white">
                <MailIcon />
              </span>
              <div>
                <p className="font-mono text-xs text-muted">{link.label}</p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-700 hover:text-primary"
                >
                  {link.url}
                </a>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-muted">
              이름
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="이송미"
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-primary-700 placeholder:text-primary-600/70 focus:border-primary-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-muted">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="im.pine.dev@gmail.com"
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-primary-700 placeholder:text-primary-600/70 focus:border-primary-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm text-muted"
            >
              메시지
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-primary-700 placeholder:text-primary-600/70 focus:border-primary-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
          >
            보내기
          </button>
        </form>
      </div>

      {/* <footer className="mt-16 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer> */}
    </SectionContainer>
  );
}
