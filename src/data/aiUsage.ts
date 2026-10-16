export type AiUsageKind = "dev" | "work";

export interface AiUsageLink {
  label: string;
  href: string;
}

export interface AiUsageItem {
  title: string;
  text: string;
  tools?: string[];
  // Live result site — rendered as the emphasized link.
  site?: string;
  // Supporting docs / code (Wiki, repository, demo PRs) — rendered secondary.
  links?: AiUsageLink[];
}

export interface AiUsageGroup {
  kind: AiUsageKind;
  label: string;
  items: AiUsageItem[];
}

// 원본: Brain_of_Pine "10.9 AI 활용 사례". 순서는 원본의 우선순위를 따르고,
// 수치·표현의 경계도 원본 문서를 따른다.
export const aiUsageGroups: AiUsageGroup[] = [
  {
    kind: "dev",
    label: "개발 활용 사례",
    items: [
      {
        title: "FigmaMcp 베이커리 쇼핑몰",
        text: "AI로 쇼핑몰·관리자를 7시간 40분 만에 완성하고, 이후 모바일 Lighthouse 점수를 78–97 → 93–99로 개선",
        tools: ["Figma MCP", "Claude Code"],
        site: "https://bakery.im-pine.com/",
        links: [
          { label: "Wiki", href: "https://github.com/im-pine/FigmaMcp/wiki" },
          { label: "GitHub", href: "https://github.com/im-pine/FigmaMcp" },
        ],
      },
      {
        title: "AI PR 리뷰봇",
        text: "AI가 만든 PR을 AI가 다시 검증해 승인·머지까지 하는 리뷰봇을 만들어, 사람 개입을 3/6 → 1/7로 감소",
        tools: ["Claude Code", "GitHub Actions"],
        links: [
          {
            label: "시연 PR",
            href: "https://github.com/im-pine/review-bot-sandbox/pulls",
          },
          {
            label: "GitHub",
            href: "https://github.com/im-pine/review-bot-sandbox",
          },
        ],
      },
      {
        title: "포트폴리오 사이트",
        text: "디자인 방향·레퍼런스 조합·내용 정리는 직접 하고 개발은 AI에 맡겨, 4일 동안 1차 완성",
        tools: ["Figma Make", "Claude Code"],
        links: [{ label: "GitHub", href: "https://github.com/im-pine/ImPine" }],
      },
      {
        title: "ToDoToDo",
        text: "6일 동안 AI 없이 직접 설계·구현한 Next.js 풀스택 구조 위에, 하루 동안 구조를 지시해 AI로 나머지 기능 마무리",
        tools: ["Claude Code"],
        site: "https://todo.im-pine.com/",
        links: [
          { label: "Wiki", href: "https://github.com/im-pine/ToDoToDo/wiki" },
          { label: "GitHub", href: "https://github.com/im-pine/ToDoToDo" },
        ],
      },
      {
        title: "글로벌 화폐 결제 쇼핑몰 PoC",
        text: "사내 AI 프롬프트 코드베이스를 확장해 큰 범위는 AI, 버그·디테일은 직접 수정하며 쇼핑몰·관리자·플랫폼 연동을 12영업일 동안 구축",
        tools: ["Cursor"],
      },
    ],
  },
  {
    kind: "work",
    label: "업무 활용 사례",
    items: [
      {
        title: "Obsidian 기반 AI 개인 지식 시스템",
        text: "경력·개발 지침·디자인 레퍼런스·아이디어를 한 볼트에 모아 AI 세션이 읽고 쓰는 지식 시스템 운영. 커리어 관리는 에이전트 4개가 권한을 나눠 담당",
        tools: ["Claude Code", "Obsidian"],
      },
      {
        title: "개발 문서 초안",
        text: "Tech Spec 양식과 개발 방향을 주고 받은 초안을 직접 다듬어 개발 문서 작성",
        tools: ["ChatGPT"],
      },
      {
        title: "업무 관리 플로우 사내 세미나",
        text: "Jira 문서를 플러그인으로 Todoist·캘린더·Session과 연계해 업무·일정을 관리하는 방법을 공유",
        tools: ["Jira", "Todoist"],
      },
    ],
  },
];
