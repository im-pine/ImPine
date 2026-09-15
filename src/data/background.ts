export interface Education {
  school: string;
  status: string;
}

export interface Activity {
  title: string;
  organizer: string;
  period: string;
  notes: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export const education: Education[] = [
  { school: "학산여자고등학교", status: "졸업" },
  { school: "창원대학교 정보통신공학과", status: "졸업" },
];

export const certifications: Certification[] = [
  { name: "IOT지식능력검정", issuer: "한국사물인터넷협회" },
];

export const activities: Activity[] = [
  {
    title: "해외 활동 프로그램",
    organizer: "창원대학교 · [중국] 연태 한국 학교",
    period: "2018.06 ~ 2018.08",
    notes: [
      "학교 내 방과후 활동 프로그램 초등 파이썬 강사",
      "학교 방학 기간동안 방과후 학교 프로그램을 신규 개설",
      "초등학생을 대상으로한 파이썬 강의 수업 진행",
      "PPT 강의 자료 및 A4 학습지 제작",
      "정식 프로그램으로 정착, 다음년도 해외 활동 요청으로 이어짐",
    ],
  },
  {
    title: "교육지원 봉사 활동",
    organizer: "굿네이버스",
    period: "2018.09 ~ 2019.01",
    notes: [
      "좋은 이웃 지역 아동센터에서 아동들을 대상으로 한 교육 지원",
      "센터 소속 초등학생 학업 보조 및 문제집 풀이·검사 진행",
    ],
  },
];
