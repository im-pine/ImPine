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
  links: [],
};
