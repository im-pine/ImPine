export interface CareerEntry {
  company: string;
  roles: string[];
  period?: string;
  achievements: string[];
}

export const career: CareerEntry[] = [
  {
    company: "위브릭스",
    roles: ["Frontend Developer", "Frontend Main", "Main Developer"],
    period: "2023.12 ~ 2025.06",
    achievements: [
      "B2B 복지포인트·이커머스 서비스의 Frontend Main으로 프로젝트 초기 환경 구축, 아키텍처 설계, 주요 기능 개발 및 운영 담당",
      "사용자·입점업체·관리자 3개 서비스의 Multi Tenant 구조와 Design System 구축",
      "신규 기업 구축 공수를 약 40시간에서 1시간 이내로 단축해 약 97.5% 감소",
      "20개 이상의 CRUD 권한을 관리하는 RBAC 구조와 Server·Client 권한 관리, Middleware 기반 접근 제어 구축",
      "Frontend Tech Spec·README·Jira Automation 기반 개발·온보딩 체계 구축",
      "Frontend Sub 인수인계 약 1시간, 신규 개발자 약 3일 내 실무 참여 가능한 환경 마련",
      "사내 CS 운영 Back Office, 코인 기반 이커머스 MVP, 의료 연구용 Dashboard 등 다양한 프로젝트의 Frontend 개발 수행",
      "코인 기반 쇼핑몰·관리자 MVP를 12일 내 구축하고 이후 4일간 Refactoring 진행",
    ],
  },
  {
    company: "팀플백",
    roles: ["Full Stack Developer", "Frontend 중심 개발"],
    period: "2020.08 ~ 2022.12",
    achievements: [
      "React·Next.js 기반 Frontend와 Laravel·PHP·MySQL 기반 Backend를 활용해 온라인 글쓰기 교육 서비스 개발",
      "수기 원고 취합과 디자인팀 중심의 문집 제작 과정을 온라인 서비스로 전환",
      "학급 > 글감 > 글의 3중 Depth 문집 데이터 선별·정렬·전처리 Flow 구현",
      "HTML Template 기반 PDF 문집 생성 구조 구축",
      "아이톡톡·웨일 계정 연동 및 학급 초대 가입 Flow 구축",
      "Metadata·Open Graph·Sitemap·robots·네이버 서치어드바이저·Google Analytics 기반 검색 노출 및 분석 환경 구축",
      "전국 학교·기관에서 개별 개설된 4,000+ 학급에서 활용되는 서비스로 확장",
      "삼성 스마트 스쿨 사업, 경남 아이톡톡, 대구미래교육원과의 MOU 기반 서비스·콘텐츠 공급 및 배포",
      "온라인 문집·교육 콘텐츠 판매 채널 구축을 통해 추가 매출 발생",
    ],
  },
];
