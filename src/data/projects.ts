export interface ProjectMeta {
  period?: string;
  role?: string;
  teamSize?: string;
  contribution?: number;
  etc?: string[];
}

export function getMetaParts(meta?: ProjectMeta): string[] {
  if (!meta) return [];
  return [
    meta.period,
    meta.role,
    meta.teamSize,
    meta.contribution !== undefined
      ? `기여도 ${meta.contribution}%`
      : undefined,
    ...(meta.etc ?? []),
  ].filter((part): part is string => Boolean(part));
}

export function formatMetaLine(meta?: ProjectMeta): string {
  return getMetaParts(meta).join(" · ");
}

export type TextSegment =
  | { type: "bold"; contents: string }
  | { type: "highlight"; contents: string };

export type RichText = string | (string | TextSegment)[];

// A field made of multiple RichText lines (e.g. a list of sentences), as
// opposed to RichText itself which is always a single line.
export type MultiRichText = RichText[];

export interface ProjectCoreContribution {
  subtitle: RichText;
  task: MultiRichText;
  solution: MultiRichText;
  result: MultiRichText;
}

export interface Project {
  id: string;
  name: string;
  headline: string;
  meta?: ProjectMeta;
  overview: string;
  coreContribution?: ProjectCoreContribution;
  contributions: MultiRichText;
  tech: string[];
  tags?: string[];
  organization?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "wevrix-global-currency-platform",
    name: "글로벌 화폐 교환 플랫폼",
    headline: "Multi Tenant 구조로 신규 기업 추가 약 1주 → 1시간 이내 단축",
    meta: {
      period: "2024.07 ~ 2025.03",
      role: "Frontend Main",
      teamSize: "4인 (FE1·BE2·PM1)",
      contribution: 40,
      etc: ["FE 기준 90%"],
    },
    overview: "B2B 복지포인트 플랫폼의 사용자·입점업체·관리자 3종 웹 구축",
    coreContribution: {
      subtitle:
        "도메인 기반 Multi Tenant와 Headless 컴포넌트로 기업별 UI 자동 전환",
      task: [
        [
          "기업 계약마다 3종 웹의 PHP 코드를 통째로 복사해 사이트가 ",
          { type: "bold", contents: "기업 수×3" },
          "으로 늘어나는 구조.",
        ],
        [
          "기업 1곳 추가에 통상 ",
          { type: "bold", contents: "약 1주" },
          " 소요.",
        ],
      ],
      solution: [
        [
          { type: "bold", contents: "• 기업 식별: " },
          "도메인 기준으로 기업별 Config 자동 적용",
        ],
        [
          { type: "bold", contents: "• 디자인 시스템 구축: " },
          "Tailwind CSS 기준으로 Mantine UI를 커스텀해 ",
          { type: "bold", contents: "단일 디자인 시스템으로 통합" },
        ],
        [
          { type: "bold", contents: "• 컴포넌트 설계: " },
          "Headless 컴포넌트 패턴으로 로직과 UI를 분리해 ",
          {
            type: "bold",
            contents: "Config에 따라 UI가 자동 전환되는 확장 구조",
          },
        ],
      ],
      result: [
        [
          "기업이 늘어도 ",
          { type: "bold", contents: "웹별 단일 코드베이스 3개로 유지" },
          ".",
        ],
        [
          "기업 1곳 추가 시 소요시간 ",
          { type: "highlight", contents: "약 1주 → 1시간 이내" },
          " (Frontend 기준)",
        ],
      ],
    },
    contributions: [
      [
        { type: "bold", contents: "RBAC 권한 시스템: " },
        "4개 사용자 유형 × 20개 이상 메뉴 권한을 중앙 집중식으로 관리하고, 권한 데이터 등록만으로 메뉴·접근 제어·권한 설정 UI 자동 반영",
      ],
      [
        { type: "bold", contents: "온보딩 환경 구축: " },
        "페이지 템플릿·온보딩 문서로 React 미경험 합류 FE 2명 3일 내 실무 투입",
      ],
      [
        { type: "bold", contents: "실시간 알림: " },
        "SSE 공통 Hook으로 재연결·중복 이벤트 방지 처리",
      ],
      [
        { type: "bold", contents: "다국어: " },
        "next-intl 기반 한국어·영어 지원",
      ],
      [
        { type: "bold", contents: "오류 모니터링: " },
        "오류 로깅과 Slack 자동 알림 연동",
      ],
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "SWR",
      "Recoil",
      "Zod",
      "Tailwind CSS",
      "Mantine",
      "next-intl",
      "SSE",
      "iron-session",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "Git",
      "Figma",
      "Jira",
      "Slack",
    ],
    tags: ["Headless 컴포넌트", "Design System", "RBAC"],
    organization: "위브릭스",
    featured: true,
  },
  {
    id: "teampleback-jajakjajak",
    name: "자작자작",
    headline: "온라인 문집 제작 기능으로 신규 수익원 창출",
    meta: {
      period: "2020.08 ~ 2022.12",
      role: "Full Stack Developer (Frontend 중심)",
      teamSize: "3~5인",
    },
    overview:
      "학생 글쓰기·교사 관리·문집 제작을 연결한 온라인 글쓰기 교육 플랫폼",
    coreContribution: {
      subtitle:
        "목차형 편집 UI와 양방향 데이터 동기화로 Server-Driven UI 데이터 가공",
      task: [
        [
          { type: "bold", contents: "온라인 문집 제작 서비스" },
          "를 위해, ",
          { type: "bold", contents: "3중 Depth 글 데이터" },
          "를 문집 에디터용 ",
          { type: "bold", contents: "Server-Driven UI 형식" },
          "으로 가공 필요",
        ],
      ],
      solution: [
        [
          { type: "bold", contents: "• 사용자 편의성 설계: " },
          "데이터 선택과 정렬을 좌우로 나눈 2열 구조로, 순서 변경 기능을 통해 ",
          {
            type: "bold",
            contents: "책 목차처럼 직관적",
          },
          "인 문집 구성",
        ],
        [
          { type: "bold", contents: "• 데이터 가공: " },
          "정렬 순서를 유지한 채 글·글감 ",
          {
            type: "bold",
            contents: "추가·삭제를 좌우 양방향 동기화",
          },
          ".",
        ],
        [
          "글 선택 시 상위 글감 자동 포함 등 ",
          { type: "bold", contents: "상하위 연동 반영" },
          ". Server-Driven UI 형태로 데이터 변환",
        ],
        [
          { type: "bold", contents: "• PDF 생성: " },
          "에디터 편집 데이터를 디자인별 문집 템플릿에 적용해 ",
          { type: "bold", contents: "인쇄용 PDF 문집 생성" },
        ],
      ],
      result: [
        [
          "해당 기능으로 ",
          { type: "bold", contents: "문집 제작 사례가 발생" },
          "하며 ",
          { type: "highlight", contents: "신규 수익원 창출" },
        ],
      ],
    },
    contributions: [
      [
        { type: "bold", contents: "계정 연동 가입: " },
        "아이톡톡·웨일 계정 유형별 가입 흐름을 Redux로 관리해 계정 생성과 학급 참여를 한 흐름으로 연결",
      ],
      [
        { type: "bold", contents: "마이그레이션: " },
        "PHP·React 기반 서비스의 Next.js 전환 중 세부 기능 마이그레이션 담당",
      ],
      [
        { type: "bold", contents: "검색 노출·분석: " },
        "Metadata·Sitemap 설정, 네이버 서치어드바이저·Google Analytics 연동",
      ],
      [
        { type: "bold", contents: "글쓰기 조건 자동 검증: " },
        "글자 수·필수 단어 포함 여부 자동 판정",
      ],
      [
        { type: "bold", contents: "Word Cloud: " },
        "학생 글의 주요 단어 시각화",
      ],
      [
        { type: "bold", contents: "온라인 강의 판매: " },
        "강의 상세·구매 흐름 구현, 운영 강의 3개 중 2개 완판",
      ],
    ],
    tech: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "React Query",
      "PHP",
      "Laravel",
      "MySQL",
      "NHN",
      "Docker",
      "react-pdf-html",
      "Google Analytics",
      "Naver Search Advisor",
      "Bootstrap",
      "Notion",
      "Framer",
      "Figma",
    ],
    tags: ["Full Stack", "Server-Driven UI", "PDF 생성"],
    organization: "팀플백",
    featured: true,
  },
  {
    id: "wevrix-global-currency-shop-poc",
    name: "글로벌 화폐 결제 쇼핑몰 PoC",
    headline: "화폐 사용처 확장 쇼핑몰 PoC, AI 활용 영업일 12일 구축",
    meta: {
      period: "2025.04 ~ 2025.05",
      role: "Main Developer",
      teamSize: "2인 (Main · Backend Sub)",
      contribution: 85,
    },
    overview: "글로벌 화폐 교환 플랫폼의 화폐로 결제하는 쇼핑몰·관리자 PoC",
    coreContribution: {
      subtitle: "AI 생성·직접 수정 병행으로 기존 플랫폼 연동 커머스 구현",
      task: [
        [
          "기업 복지몰에 한정된 ",
          {
            type: "bold",
            contents: "플랫폼 화폐의 사용처를 쇼핑몰로 확장",
          },
          "하기 위해, AI 활용 시 ",
          {
            type: "bold",
            contents: "개발 소요 기간을 확인해 사업화 가능성 판단",
          },
          " 필요",
        ],
      ],
      solution: [
        [
          { type: "bold", contents: "• 코드베이스 활용: " },
          "AI 강의 자료의 프롬프트로 ",
          { type: "bold", contents: "쇼핑몰·관리자 뼈대 생성" },
        ],
        [
          { type: "bold", contents: "• 기존 플랫폼 연동: " },
          "글로벌 화폐 교환 플랫폼의 ",
          { type: "bold", contents: "계정 로그인·화폐 결제 구현" },
          ", Prisma·PostgreSQL로 쇼핑몰 DB 구축",
        ],
        [
          { type: "bold", contents: "• AI 활용: " },
          "페이지 구조·디자인 틀 등 ",
          { type: "bold", contents: "큰 범위 변경은 AI" },
          "로 빠르게 처리하고, 버그·디자인 디테일은 ",
          {
            type: "bold",
            contents: "직접 수정",
          },
        ],
      ],
      result: [
        [
          { type: "highlight", contents: "영업일 12일 구축" },
          "으로 ",
          { type: "bold", contents: "단기 사업화 가능성 확인" },
        ],
      ],
    },
    contributions: [],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Jira",
      "Docker",
      "Git",
      "Cursor",
    ],
    tags: ["Cursor", "플랫폼 연동", "Full Stack"],
    organization: "위브릭스",
    featured: true,
  },
  {
    id: "cs-back-office",
    name: "사내 CS 운영 Back Office",
    headline:
      "개발팀을 거치던 반복 CS 업무를 비개발 운영 인력이 직접 처리할 수 있도록 만든 사내 운영 도구",
    meta: {
      period: "2024.02.12 ~ 2024.04.29",
      etc: ["Frontend Main / Frontend 1, Backend 1 / 기여도 약 50%"],
    },
    overview:
      "개발팀을 거치던 반복 CS 업무를 비개발 운영 인력이 직접 처리할 수 있도록 만든 Back Office 제작",
    tech: [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "SWR",
      "ContentLayer",
      "Docker",
      "Jenkins",
      "Git",
    ],
    contributions: [
      "회원·OTP·블랙리스트·거래내역 조회 및 관리 기능 구축",
      "CS팀이 반복 운영 업무를 직접 처리할 수 있는 Dashboard 구축",
      "ContentLayer 기반 웹 운영 가이드 제공으로 비개발자의 자가 처리 기반 마련",
    ],
    organization: "위브릭스",
    featured: false,
  },
  {
    id: "datacore-medical-dashboard",
    name: "DataCore 의료 대시보드",
    headline:
      "교수 연구 및 논문 발표를 위한 병실·환자 위험도 모니터링 Dashboard",
    meta: {
      period: "2023.12.13 ~ 2023.12.27",
      etc: ["Frontend Main / 4인 팀 / 기여도 약 35%"],
    },
    overview:
      "클라이언트의 연구 및 논문 발표를 위한 병실·환자 위험도 모니터링 Dashboard 제작",
    tech: ["React", "Next.js", "JavaScript", "AWS", "Docker", "Git"],
    contributions: [
      "병원 → 병실 → 환자 계층 구조 기반 위험 병실 표시, 알림음, 최근 업데이트 상태, 위험도 조회 기능 구현",
      "예상 약 12일 규모의 작업을 약 10영업일 내 마무리",
    ],
    organization: "위브릭스",

    featured: false,
  },
  {
    id: "jajakjajak-class",
    name: "자작자작 클래스",
    headline: "온라인 글쓰기 교육 콘텐츠 판매·수강 영역",
    meta: {
      etc: ["Full Stack / Frontend 중심"],
    },
    overview: "온라인 글쓰기 교육 콘텐츠 판매 페이지 제작",
    tech: ["Next.js", "TypeScript", "Notion"],
    contributions: [
      "강의 상품 정보, 상세 페이지, 구매 Flow 등 온라인 강의 판매 기능 구현",
      "운영된 3개 강의 중 2개 강의 완판",
    ],
    organization: "팀플백",
    featured: false,
  },
  {
    id: "chappy",
    name: "챕피",
    headline: "교사-학생 질문·답변·피드백 Workflow를 연결한 교육 서비스 MVP",
    meta: {
      etc: ["Frontend Developer"],
    },
    overview: "교사-학생 질문·답변·피드백 Workflow를 연결한 교육 서비스 MVP",
    tech: ["Next.js", "TypeScript", "React Query", "Notion"],
    contributions: [
      "자주 사용하는 피드백 문구를 말풍선 형태로 선택해 입력할 수 있는 UI 구현으로 반복 입력 부담 감소",
      "신용보증기금 퍼스트펭귄 선정 프로젝트",
    ],
    organization: "팀플백",
    featured: false,
  },
  {
    id: "maeum-sildarae",
    name: "마음실타래",
    headline: "논문 기반 감정분석 다이어리 대학교 졸업작품",
    meta: {
      period: "2020.11 ~ 2020.12",
      etc: ["Frontend Developer / 2인 팀"],
    },
    overview: "자연어 처리 기술 기반 심리 분석 다이어리 서비스",
    tech: ["React", "Redux", "JavaScript", "Python"],
    contributions: [
      "감정 분석 결과 시각화, Word Cloud 기반 주요 단어 표현, 감정별 색상화 및 Calendar 시각화",
      "졸업작품 최우수상 수상",
    ],
    organization: "2인 사이드 프로젝트",
    featured: false,
  },
  {
    id: "devrel",
    name: "DevRel",
    headline: "기업 기술 블로그 통합 플랫폼 Side Project",
    meta: {
      period: "2022.12 ~ 2023.02",
      etc: ["Frontend Developer"],
    },
    overview: "기업 기술 블로그 통합 플랫폼 Side Project",
    tech: ["Next.js", "TypeScript", "Mantine"],
    contributions: [
      "사용자 웹·관리자 웹 Frontend 구현",
      "기존 화면을 7일 내 리디자인",
    ],
    organization: "팀 데브렐 사이드 프로젝트",
    featured: false,
  },
];
