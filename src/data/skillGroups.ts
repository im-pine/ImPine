export interface SkillDetail {
  name: string;
  iconKey?: string;
  color: string;
  notes: string[];
}

export interface SkillGroup {
  label: string;
  skills: SkillDetail[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Language",
    skills: [
      {
        name: "JavaScript",
        iconKey: "javascript",
        color: "#F7DF1E",
        notes: [
          "비동기 처리와 클로저, 프로토타입 기반 객체지향을 활용해 로직을 구현할 수 있습니다.",
          "실무 프로젝트 전반에서 주력으로 사용해 왔습니다.",
        ],
      },
      {
        name: "TypeScript",
        iconKey: "typescript",
        color: "#3178C6",
        notes: [
          "제네릭, 유틸리티 타입을 활용해 타입 안정성을 높인 코드를 작성합니다.",
          "여러 프로젝트에 점진적으로 도입한 경험이 있습니다.",
        ],
      },
      {
        name: "PHP",
        iconKey: "php",
        color: "#777BB4",
        notes: [
          "Laravel 기반 백엔드 개발 시 주로 사용했습니다.",
          "기본 문법과 서버 사이드 로직 작성이 가능합니다.",
        ],
      },
    ],
  },
  {
    label: "FrontEnd",
    skills: [
      {
        name: "React",
        iconKey: "react",
        color: "#61DAFB",
        notes: [
          "여러 프로젝트를 진행하며 컴포넌트 설계와 상태 관리를 다뤄왔습니다.",
          "커스텀 훅을 활용한 로직 재사용 경험이 있습니다.",
        ],
      },
      {
        name: "Next.js",
        iconKey: "nextdotjs",
        color: "#000000",
        notes: [
          "상황에 따라 SSR, SSG, CSR을 구분해 활용할 수 있습니다.",
          "Middleware와 API Route를 작성한 경험이 있습니다.",
        ],
      },
      {
        name: "Tailwind CSS",
        iconKey: "tailwindcss",
        color: "#06B6D4",
        notes: [
          "유틸리티 클래스 기반으로 빠르게 반응형 UI를 구성할 수 있습니다.",
          "커스텀 테마 설정 경험이 있습니다.",
        ],
      },
      {
        name: "Mantine",
        iconKey: "mantine",
        color: "#339AF0",
        notes: ["컴포넌트 라이브러리를 프로젝트 디자인 시스템에 맞게 커스터마이징한 경험이 있습니다."],
      },
      {
        name: "Redux",
        iconKey: "redux",
        color: "#764ABC",
        notes: ["전역 상태 관리 구조 설계 및 미들웨어 활용 경험이 있습니다."],
      },
      {
        name: "Recoil",
        iconKey: "recoil",
        color: "#3578E5",
        notes: ["Atom·Selector 기반의 세분화된 상태 관리를 적용한 경험이 있습니다."],
      },
      {
        name: "SWR",
        iconKey: "swr",
        color: "#000000",
        notes: ["데이터 fetching과 캐싱, 재검증 전략을 프로젝트에 적용했습니다."],
      },
      {
        name: "Zod",
        iconKey: "zod",
        color: "#3E67B1",
        notes: ["스키마 기반 런타임 유효성 검증을 API 응답 및 폼 데이터에 적용했습니다."],
      },
      {
        name: "next-intl",
        color: "#719470",
        notes: ["다국어 지원 구조를 설계하고 적용한 경험이 있습니다."],
      },
      {
        name: "SSE",
        color: "#719470",
        notes: ["실시간 이벤트 수신 및 알림 기능 구현에 활용했습니다."],
      },
      {
        name: "ContentLayer",
        color: "#719470",
        notes: ["마크다운 기반 콘텐츠 관리 구조를 구축한 경험이 있습니다."],
      },
      {
        name: "react-pdf-html",
        color: "#719470",
        notes: ["HTML 템플릿 기반 PDF 생성 기능을 구현했습니다."],
      },
    ],
  },
  {
    label: "BackEnd",
    skills: [
      {
        name: "Laravel",
        iconKey: "laravel",
        color: "#FF2D20",
        notes: ["MVC 구조 기반 API 서버 개발 경험이 있습니다."],
      },
    ],
  },
  {
    label: "Database",
    skills: [
      {
        name: "MySQL",
        iconKey: "mysql",
        color: "#4479A1",
        notes: ["관계형 데이터베이스 설계 및 쿼리 최적화 경험이 있습니다."],
      },
    ],
  },
  {
    label: "ETC",
    skills: [
      {
        name: "Docker",
        iconKey: "docker",
        color: "#2496ED",
        notes: ["컨테이너 기반 개발·배포 환경을 구성한 경험이 있습니다."],
      },
      {
        name: "Jenkins",
        iconKey: "jenkins",
        color: "#D24939",
        notes: ["CI/CD 파이프라인 구성 및 자동 배포 환경 운영 경험이 있습니다."],
      },
      {
        name: "Git",
        iconKey: "git",
        color: "#F05032",
        notes: ["브랜치 전략 수립과 협업 워크플로우 운영 경험이 있습니다."],
      },
      {
        name: "Figma",
        iconKey: "figma",
        color: "#F24E1E",
        notes: ["디자인 시안 분석 및 컴포넌트 스펙 확인에 활용합니다."],
      },
      {
        name: "Jira",
        iconKey: "jira",
        color: "#0052CC",
        notes: ["이슈 트래킹 및 스프린트 관리에 활용한 경험이 있습니다."],
      },
      {
        name: "Notion",
        iconKey: "notion",
        color: "#000000",
        notes: ["프로젝트 문서화 및 온보딩 자료 정리에 활용합니다."],
      },
      {
        name: "Slack",
        color: "#4A154B",
        notes: ["팀 커뮤니케이션 및 알림 자동화 연동에 활용했습니다."],
      },
      {
        name: "Cursor",
        iconKey: "cursor",
        color: "#000000",
        notes: ["AI 기반 코드 작성 및 리팩토링 보조 도구로 활용하고 있습니다."],
      },
      {
        name: "Open Graph",
        color: "#719470",
        notes: ["소셜 공유 시 노출되는 메타 정보를 구성했습니다."],
      },
      {
        name: "Sitemap",
        color: "#719470",
        notes: ["검색엔진 크롤링을 위한 사이트맵을 구성했습니다."],
      },
      {
        name: "robots.txt",
        color: "#719470",
        notes: ["검색엔진 크롤링 정책을 설정했습니다."],
      },
      {
        name: "네이버 서치어드바이저",
        iconKey: "naver",
        color: "#03C75A",
        notes: ["네이버 검색 노출 및 색인 현황을 관리했습니다."],
      },
      {
        name: "Google Analytics",
        iconKey: "googleanalytics",
        color: "#E37400",
        notes: ["사용자 트래픽 분석 및 지표 모니터링에 활용했습니다."],
      },
    ],
  },
];
