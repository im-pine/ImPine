export interface Award {
  title: string;
  org: string;
}

export interface ContactLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: {
    lead: string;
    paragraphs: string[];
  };
  awards: Award[];
  email: string;
  photo: string;
  links: ContactLink[];
}

export const profile: Profile = {
  name: "이송미(李松美)",
  role: "Frontend Developer",
  tagline:
    "잡초처럼 유연하게 적응하고, 소나무(松)처럼 든든하게 신뢰를 쌓으려 합니다.",
  bio: {
    lead: "잡초처럼 어디서든 유연하게 적응하고, 소나무처럼 동료에게 든든한 신뢰를 주는 이송미입니다.",
    paragraphs: [
      "새로운 환경에는 빠르게 적응하고, 중요한 업무는 문서화해 생산성을 높이고 반복 소통을 줄여갑니다.",
      "새로운 시도가 필요할 때는 먼저 실행하고, 경험과 결과를 공유해 팀의 불확실성을 낮추려 합니다.",
      "함께 일하는 사람이 편하게 의지하고 신뢰할 수 있는 동료를 지향합니다.",
    ],
  },
  awards: [
    {
      title: "제20회 정보통신기술대전(졸업작품전시회) 최우수상",
      org: "창원대학교 정보통신공학과",
    },
    {
      title: "캡스톤디자인 우수상",
      org: "LINC+사업단",
    },
  ],
  email: "im.pine.dev@gmail.com",
  photo: "/images/profile.png",
  links: [
    { label: "GitHub", url: "https://github.com/im-pine" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/im-pine" },
  ],
};
