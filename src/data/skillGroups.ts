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

export function findSkillDetail(name: string): SkillDetail | undefined {
  for (const group of skillGroups) {
    const skill = group.skills.find((skill) => skill.name === name);
    if (skill) return skill;
  }
  return undefined;
}

export const skillGroups: SkillGroup[] = [
  {
    label: "FrontEnd",
    skills: [
      {
        name: "Next.js",
        iconKey: "nextdotjs",
        color: "#000000",
        notes: [
          "복잡한 RBAC 구현과 같이 SSR·Middleware가 필요할 때 주로 사용",
          "반대로 별도 백엔드 서버를 운영할 필요가 없는 규모에서 간단하게 백엔드 작업이 필요할 때도 사용",
        ],
      },
      {
        name: "React",
        iconKey: "react",
        color: "#61DAFB",
        notes: [
          "요구사항과 확장 방향을 기준으로 컴포넌트 구조를 판단해 설계",
          "기업마다 UI가 달라지는 환경에서는 로직과 UI를 분리한 Headless Component 패턴으로, 디자인 변경이 기능 수정으로 이어지지 않는 구조 구성",
          "대시보드 검색·필터처럼 조건 종류가 다양한 영역은 Compound Component 패턴으로 구성해, 텍스트·날짜·목록 선택 등 필요한 조건만 조합해 화면마다 재사용",
        ],
      },

      {
        name: "Tailwind CSS",
        iconKey: "tailwindcss",
        color: "#06B6D4",
        notes: [
          "디자인 시스템을 처음부터 만들 수 없는 규모에서 색상·간격 등 기본 디자인 기준을 제공받으면서도 제약 없이 확장·커스텀할 수 있어 선택",
          "반복되는 스타일은 완성형 컴포넌트로 정리하고, 그 외에는 유틸리티 클래스로 빠르게 적용",
        ],
      },
      {
        name: "Mantine",
        iconKey: "mantine",
        color: "#339AF0",
        notes: [
          "컴포넌트 라이브러리를 프로젝트 디자인 시스템에 맞게 커스터마이징한 경험이 있습니다.",
        ],
      },
      {
        name: "Bootstrap",
        iconKey: "bootstrap",
        color: "#7952B3",
        notes: ["빠른 프로토타이핑 및 초기 UI 개발에 활용한 경험이 있습니다."],
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
        notes: [
          "Atom·Selector 기반의 세분화된 상태 관리를 적용한 경험이 있습니다.",
        ],
      },
      {
        name: "SWR",
        iconKey: "swr",
        color: "#000000",
        notes: [
          "데이터 fetching과 캐싱, 재검증 전략을 프로젝트에 적용했습니다.",
        ],
      },
      {
        name: "Zod",
        iconKey: "zod",
        color: "#3E67B1",
        notes: [
          "스키마 기반 런타임 유효성 검증을 API 응답 및 폼 데이터에 적용했습니다.",
        ],
      },
      {
        name: "React Query",
        iconKey: "reactquery",
        color: "#FF4154",
        notes: ["서버 상태 관리와 캐싱, 리페칭 전략에 활용한 경험이 있습니다."],
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
        name: "iron-session",
        color: "#719470",
        notes: ["세션 기반 인증·권한 관리 구조 구현에 활용한 경험이 있습니다."],
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
    label: "Language",
    skills: [
      {
        name: "TypeScript",
        iconKey: "typescript",
        color: "#3178C6",
        notes: [
          "컴포넌트의 사용 조건을 타입으로 표현해, 동료 개발자가 에디터 자동완성과 타입 에러만으로 올바른 사용법을 파악할 수 있도록 설계",
          "Interface·Type으로 데이터 구조를 정의하고, 직접 통제하기 어려운 사용자 입력 영역은 Zod를 함께 사용해 보완",
        ],
      },
      {
        name: "JavaScript",
        iconKey: "javascript",
        color: "#F7DF1E",
        notes: [
          "중첩 구조 데이터를 목적에 맞게 재구성해, 화면에서 다루기 쉬운 형태와 서버가 요구하는 형태 사이의 변환을 담당",
          "프레임워크를 사용할 때도 비동기 처리·이벤트 흐름 등 언어 단위의 동작을 이해한 상태로 구현",
        ],
      },
      {
        name: "PHP",
        iconKey: "php",
        color: "#777BB4",
        notes: [
          "Laravel 기반 API·데이터 처리 로직을 직접 구현하며 백엔드 영역까지 담당",
          "프론트엔드 개발 시에도 백엔드 코드를 직접 확인해 데이터 구조·응답 형태를 파악",
        ],
      },
      {
        name: "Python",
        iconKey: "python",
        color: "#3776AB",
        notes: [
          "자연어 처리 기반 감정 분석 로직 구현에 활용한 경험이 있습니다.",
        ],
      },
    ],
  },
  {
    label: "BackEnd",
    skills: [
      {
        name: "MySQL",
        iconKey: "mysql",
        color: "#4479A1",
        notes: [
          "기능 단위로 DB 설계부터 API·화면까지 전 구간을 담당하며, 테이블 구조와 관계를 직접 정의",
          "서비스 운영에 필요한 지표는 직접 쿼리를 작성해 조회하고, 결과를 정리해 운영 판단에 활용할 수 있는 형태로 제공",
        ],
      },
      {
        name: "Prisma",
        iconKey: "prisma",
        color: "#2D3748",
        notes: [
          "쇼핑몰 PoC에서 스키마 정의부터 DB 구축까지 직접 진행하며, PostgreSQL 기반 데이터 구조 설계",
          "SQL을 직접 작성하던 방식과 달리 스키마 정의만으로 타입과 쿼리가 함께 제공돼, 프론트엔드 개발과 동일한 기준으로 데이터 처리",
        ],
      },
      {
        name: "NHN",
        color: "#719470",
        notes: [
          "운영 중인 서비스의 배포 과정을 직접 수행하며, 개발 이후 실제 서비스 반영까지의 흐름 경험",
          "배포 절차는 인수인계받은 기준을 그대로 따르는 범위로, 인프라 구성·운영은 담당하지 않음",
        ],
      },
      {
        name: "PostgreSQL",
        iconKey: "postgresql",
        color: "#4169E1",
        notes: ["관계형 데이터베이스 설계 및 Prisma 연동 경험이 있습니다."],
      },

      {
        name: "Laravel",
        iconKey: "laravel",
        color: "#FF2D20",
        notes: ["MVC 구조 기반 API 서버 개발 경험이 있습니다."],
      },
      {
        name: "AWS",
        iconKey: "aws",
        color: "#FF9900",
        notes: ["EC2·S3 등을 활용한 배포·운영 환경 구성 경험이 있습니다."],
      },
    ],
  },
  {
    label: "ETC",
    skills: [
      {
        name: "Figma",
        iconKey: "figma",
        color: "#F24E1E",
        notes: [
          "디자인 시스템을 Figma와 코드 양쪽에 동일한 기준으로 구성해, 디자이너가 만든 컴포넌트를 개발이 코드로 구현하고 기획이 화면 구성을 직접 조합해볼 수 있는 협업 기반 마련",
          "간단한 디자인 확인·수정 요청은 Figma 댓글로 즉시 공유해, 별도 회의 없이 기획·디자인·개발 간 논의를 진행",
        ],
      },
      {
        name: "Jira",
        iconKey: "jira",
        color: "#0052CC",
        notes: [
          "Frontend Tech Spec·개발 문서를 이슈와 연결해, 진행 상황과 논의 내용을 팀이 같은 기준으로 확인할 수 있는 체계 구축",
          "Automation으로 반복적인 이슈 관리를 자동화해, 문서 등록부터 일정 반영까지 수동 관리 범위 축소",
          "Jira 문서 등록 한 번으로 할 일 목록·캘린더·작업 시간 관리까지 이어지도록 외부 도구와 연계해, 개인 업무 루틴 자동화",
        ],
      },
      {
        name: "Jenkins",
        iconKey: "jenkins",
        color: "#D24939",
        notes: [
          "기존 구성을 참고해 프로젝트 CI/CD 파이프라인을 직접 구축하고, Docker 기반 빌드·배포 자동화 환경 구성",
        ],
      },
      {
        name: "Docker",
        iconKey: "docker",
        color: "#2496ED",
        notes: ["컨테이너 기반 개발·배포 환경을 구성한 경험이 있습니다."],
      },
      {
        name: "Kubernetes",
        iconKey: "kubernetes",
        color: "#326CE5",
        notes: ["컨테이너 오케스트레이션 환경 구성 및 배포 경험이 있습니다."],
      },

      {
        name: "Git",
        iconKey: "git",
        color: "#F05032",
        notes: ["브랜치 전략 수립과 협업 워크플로우 운영 경험이 있습니다."],
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
        name: "Naver Search Advisor",
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
      {
        name: "Framer",
        iconKey: "framer",
        color: "#0055FF",
        notes: [
          "프로토타이핑 및 인터랙션·애니메이션 구현에 활용한 경험이 있습니다.",
        ],
      },
    ],
  },
];
