export interface Project {
  id: string;
  title: string;
  period?: string;
  summary: string;
  tech: string[];
  achievements?: string[];
  contribution?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "global-currency-exchange",
    title: "글로벌 화폐 교환 플랫폼",
    period: "2024.07.02 ~ 2025.03.07",
    summary:
      "B2B 복지포인트·이커머스 기반 글로벌 플랫폼의 Multi Tenant 전환 및 공통 Frontend 구조 구축",
    tech: [
      "React",
      "Next.js",
      "SWR",
      "Recoil",
      "Zod",
      "Tailwind CSS",
      "Mantine",
      "next-intl",
      "SSE",
      "Docker",
      "Jenkins",
      "Figma",
      "Jira",
      "Git",
      "Slack",
    ],
    contribution: "Frontend Main / 4인 팀",
    achievements: [
      "Host 기반 기업 식별, Config·기업별 Style 적용을 통한 Multi Tenant 구조 구축",
      "Tailwind Color Palette와 Mantine Custom Theme를 연결한 Design System 구축",
      "Core와 UI Component를 분리해 기업별 디자인 변경에도 공통 비즈니스 로직 재사용",
      "20개 이상의 CRUD 권한을 관리하는 RBAC 구조와 권한 설정 UI 자동화",
      "iron-session·Recoil·Next.js Middleware 기반 Server·Client 권한 관리 및 선제적 접근 제어",
      "SWR Focus Revalidation과 인증 상태 확인을 결합한 데이터 최신성·인증 운영 구조 구성",
      "Frontend Tech Spec·README·Jira Automation 기반 개발 문서 및 온보딩 체계 구축",
      "next-intl 기반 한국어·영어 다국어 구조 구축",
      "SSE 기반 실시간 이벤트 수신·알림 공통 구조 구축",
      "오류 Logging·Slack 자동 알림 기반 Troubleshooting 환경 구축",
      "신규 기업 구축 시간 약 40시간 → 1시간 이내, 약 97.5% 감소",
      "Frontend Sub 인수인계 약 1시간, 신규 개발자 약 3일 내 실무 참여",
    ],
    featured: true,
  },
  {
    id: "coin-shopping-mall-mvp",
    title: "코인 기반 쇼핑몰 + 관리자 MVP",
    period: "2025.04.16 ~ 2025.05.12",
    summary: "기존 지갑 자산과 연동해 코인 결제가 가능한 쇼핑몰·관리자 MVP",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Docker", "Git", "Cursor"],
    contribution: "Main Developer / 2인 팀 / 기여도 약 90%",
    achievements: [
      "사내에 준비되어 있던 이커머스 제작용 AI Prompt와 초기 코드 베이스를 활용해 회사 요구사항에 맞게 수정·확장",
      "상품·장바구니·주문·결제·배송·관리자 Flow 구현",
      "기존 지갑 정보와 쇼핑 API를 연결한 코인 구매 Flow 구현",
      "MVP 12일 내 구축, 이후 4일간 Refactoring",
    ],
    featured: true,
  },
  {
    id: "jajakjajak",
    title: "자작자작",
    period: "2020.08 ~ 2022.12",
    summary:
      "학생 글쓰기·교사 관리·과제·문집 제작을 하나의 흐름으로 연결한 온라인 글쓰기 교육 플랫폼",
    tech: [
      "React",
      "Next.js",
      "Redux",
      "TypeScript",
      "JavaScript",
      "PHP",
      "Laravel",
      "MySQL",
      "Docker",
    ],
    contribution: "Full Stack Developer / Frontend 중심 / 3~5인 팀",
    achievements: [
      "학생 글쓰기·교사 학생 관리·과제 제출·어휘·문집 기능의 화면과 API·데이터 처리 영역 개발",
      "학급 > 글감 > 글의 3중 Depth 데이터를 Drag & Drop으로 선별·정렬하고 Server-Driven UI 형식으로 전처리하는 Flow 구현",
      "react-pdf-html 기반 HTML Template PDF 문집 생성 구조 구축",
      "아이톡톡·웨일 계정 연동 및 학급 초대 가입 Flow 구축",
      "최소 글자 수·필수 단어 포함 여부 등 글쓰기 조건 자동 검증 기능 구현",
      "Metadata·Open Graph·Sitemap·robots·네이버 서치어드바이저·Google Analytics 기반 검색 노출 및 분석 환경 구축",
      "온라인 글쓰기 강의 판매 영역 및 Word Cloud 기반 글쓰기 데이터 시각화 기능 구현",
      "전국 학교·기관에서 개별 개설된 4,000+ 학급에서 서비스 활용",
      "삼성 스마트 스쿨 사업 MOU 체결 및 교육 콘텐츠 공급",
      "경남 아이톡톡 MOU 체결 및 경남 초등학교에서 활용 가능한 서비스 배포",
      "대구미래교육원 MOU 체결",
      "온라인 문집·교육 콘텐츠 판매 채널을 통한 추가 매출 발생",
    ],
    featured: true,
  },
  {
    id: "cs-back-office",
    title: "사내 CS 운영 Back Office",
    period: "2024.02.12 ~ 2024.04.29",
    summary:
      "개발팀을 거치던 반복 CS 업무를 비개발 운영 인력이 직접 처리할 수 있도록 만든 사내 운영 도구",
    tech: ["React", "Next.js", "JavaScript", "Tailwind CSS", "SWR", "ContentLayer", "Docker", "Git"],
    contribution: "Frontend Main / Frontend 1, Backend 1 / 기여도 약 50%",
    achievements: [
      "회원·OTP·블랙리스트·거래내역 조회 및 관리 기능 구축",
      "CS팀이 반복 운영 업무를 직접 처리할 수 있는 Dashboard 구축",
      "ContentLayer 기반 웹 운영 가이드 제공으로 비개발자의 자가 처리 기반 마련",
    ],
    featured: true,
  },
  {
    id: "datacore-medical-dashboard",
    title: "DataCore 의료 대시보드",
    period: "2023.12.13 ~ 2023.12.27",
    summary: "교수 연구 및 논문 발표를 위한 병실·환자 위험도 모니터링 Dashboard",
    tech: ["React", "Next.js", "JavaScript", "Docker", "Git"],
    contribution: "Frontend Main / 4인 팀 / 기여도 약 35%",
    achievements: [
      "병원 → 병실 → 환자 계층 구조 기반 위험 병실 표시, 알림음, 최근 업데이트 상태, 위험도 조회 기능 구현",
      "예상 약 12일 규모의 작업을 약 10영업일 내 마무리",
    ],
    featured: false,
  },
  {
    id: "jajakjajak-class",
    title: "자작자작 클래스",
    summary: "온라인 글쓰기 교육 콘텐츠 판매·수강 영역",
    tech: [],
    contribution: "Full Stack / Frontend 중심",
    achievements: [
      "강의 상품 정보, 상세 페이지, 구매 Flow 등 온라인 강의 판매 기능 구현",
      "운영된 3개 강의 중 2개 강의 완판",
    ],
    featured: false,
  },
  {
    id: "chappy",
    title: "챕피",
    summary: "교사-학생 질문·답변·피드백 Workflow를 연결한 교육 서비스 MVP",
    tech: [],
    contribution: "Frontend Developer",
    achievements: [
      "자주 사용하는 피드백 문구를 말풍선 형태로 선택해 입력할 수 있는 UI 구현으로 반복 입력 부담 감소",
      "신용보증기금 퍼스트펭귄 선정 프로젝트",
    ],
    featured: false,
  },
  {
    id: "maeum-sildarae",
    title: "마음실타래",
    period: "2020.11 ~ 2020.12",
    summary: "논문 기반 감정분석 다이어리 대학교 졸업작품",
    tech: ["React", "Redux", "JavaScript"],
    contribution: "Frontend Developer / 2인 팀",
    achievements: [
      "감정 분석 결과 시각화, Word Cloud 기반 주요 단어 표현, 감정별 색상화 및 Calendar 시각화",
      "졸업작품 최우수상 수상",
    ],
    featured: false,
  },
  {
    id: "devrel",
    title: "DevRel",
    period: "2022.12 ~ 2023.02",
    summary: "기업 기술 블로그 통합 플랫폼 Side Project",
    tech: [],
    contribution: "Frontend Developer",
    achievements: ["사용자 웹·관리자 웹 Frontend 구현", "기존 화면을 7일 내 리디자인"],
    featured: false,
  },
];
