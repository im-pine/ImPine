export interface CareerEntry {
  company: string;
  roles: string[];
  period?: string;
  overview: string;
  achievements: string[];
}

export const career: CareerEntry[] = [
  {
    company: "위브릭스",
    roles: ["Frontend Main Developer"],
    period: "2023.12 ~ 2025.06",
    overview: "B2B 복지 커머스 플랫폼",
    achievements: [
      "글로벌 화폐 교환 플랫폼 3종 웹 개발 (Frontend Main)",
      "사내 CS 운영 Back Office, 의료 대시보드 개발",
      "프로젝트 초기 세팅 및 개발·온보딩 문서 체계 구축",
    ],
  },
  {
    company: "팀플백",
    roles: ["Full Stack Developer"],
    period: "2020.08 ~ 2022.12",
    overview: "전국 4,000+ 학급이 사용하는 온라인 글쓰기 교육 플랫폼 (MOU 3건)",
    achievements: [
      "자작자작 글쓰기 플랫폼 Full Stack 개발",
      "교육 서비스 MVP(챕피) Frontend 개발",
      "MOU 기반 서비스 연동·요구사항 대응 개발(삼성 스마트 스쿨, 경남 아이톡톡, 대구광역시교육청)",
    ],
  },
];
