import type { QuizQuestion } from "../types";

export const SD_CAPACITY_ESTIMATION: QuizQuestion[] = [
  {
    id: "sd-capacity-estimation-1",
    post: "sd-capacity-estimation",
    question: "DAU 400만 명이 하루 30번씩 읽는다. 평균 읽기 QPS에 가장 가까운 것은?",
    choices: ["약 140", "약 1,400", "약 14,000", "약 120,000,000"],
    answer: 1,
    explanation:
      "하루 1억 2천만 번을 하루의 초 86,400으로 나누면 약 1,389다. 암산으로 10만으로 나눠 1,200이라고 해도 자릿수는 같다. 1억 2천만은 초당이 아니라 하루 요청 수다.",
    anchor: "하루를-86400초로-나누면-초당-요청-수",
  },
  {
    id: "sd-capacity-estimation-2",
    post: "sd-capacity-estimation",
    question: "서버 대수를 평균 QPS가 아니라 피크 QPS로 정하는 이유는?",
    choices: [
      "평균 QPS는 계산할 수 없어서",
      "사람들이 특정 시간대에 몰려 쓰고, 서버는 가장 바쁜 시간을 버텨야 해서",
      "피크 QPS가 항상 평균의 10배라서",
      "로드 밸런서가 평균을 지원하지 않아서",
    ],
    answer: 1,
    explanation:
      "맛집 앱은 저녁에 몰리고 새벽에는 거의 쓰지 않는다. 평균으로 맞추면 저녁에 무너진다. 피크 배수는 서비스마다 달라서 실제로는 분 단위 그래프에서 읽고, 자료가 없으면 2~3배로 가정한다.",
    anchor: "평균으로-서버를-고르면-저녁에-무너진다",
  },
  {
    id: "sd-capacity-estimation-3",
    post: "sd-capacity-estimation",
    question: "읽기와 쓰기 비율이 600 : 1이고 쓰기 피크가 초당 7개다. 이 숫자에서 나오는 결정으로 알맞은 것은?",
    choices: [
      "쓰기를 나누기 위해 바로 샤딩한다",
      "캐시를 빼고 DB를 키운다",
      "읽기는 복제본과 캐시로 나누고, 쓰기는 주 DB 한 대로 받는다",
      "모든 요청을 큐에 넣고 나중에 처리한다",
    ],
    answer: 2,
    explanation:
      "읽기가 압도적으로 많으니 복제본과 캐시가 효과가 크다. 쓰기가 초당 7개 정도면 주 DB 한 대가 충분히 받으니 쓰기를 나누는 샤딩은 아직 필요 없다.",
    anchor: "읽기와-쓰기를-따로-센다",
  },
  {
    id: "sd-capacity-estimation-4",
    post: "sd-capacity-estimation",
    question: "한글 144자 리뷰 본문이 360바이트로 나왔다. 왜 글자 수보다 바이트가 훨씬 클까?",
    choices: [
      "UTF-8에서 한글 한 글자가 3바이트라서",
      "PostgreSQL이 문자열을 두 번 저장해서",
      "인덱스가 본문 크기에 포함돼서",
      "TOAST 압축이 크기를 늘려서",
    ],
    answer: 0,
    explanation:
      "UTF-8에서 영문과 공백은 1바이트지만 한글은 3바이트다. 그래서 한글 위주의 글은 글자 수의 2~3배를 잡는다. 인덱스와 행 머리 정보는 그 위에 따로 붙어 리뷰 하나가 디스크 502바이트를 썼다.",
    anchor: "한-줄이-몇-바이트인지는-재-보면-된다",
  },
  {
    id: "sd-capacity-estimation-5",
    post: "sd-capacity-estimation",
    question: "리뷰 텍스트는 5년에 183GB, 사진은 365TB로 나왔다. 저장 공간을 어림할 때 이 차이가 알려 주는 것은?",
    choices: [
      "텍스트를 더 정밀하게 계산해야 한다",
      "가장 큰 항목 하나만 제대로 세면 자릿수가 맞는다",
      "사진도 DB에 함께 넣어야 관리가 쉽다",
      "저장 공간은 어림할 수 없다",
    ],
    answer: 1,
    explanation:
      "365TB 앞에서 183GB는 0.05%다. 사진처럼 가장 큰 항목을 빼먹으면 수천 배 틀리지만 작은 항목을 소수점까지 따지는 건 의미가 없다. 그리고 이 크기 때문에 사진은 DB가 아니라 오브젝트 저장소에 둔다.",
    anchor: "사진이-저장-공간의-거의-전부다",
  },
  {
    id: "sd-capacity-estimation-6",
    post: "sd-capacity-estimation",
    question: "하루 40TB를 내보낸다. 평균 전송 속도를 구할 때 가장 흔한 실수는?",
    choices: [
      "86,400으로 나누는 것",
      "피크 배수를 곱하는 것",
      "TB를 10¹²바이트로 보는 것",
      "바이트를 비트로 바꾸며 8을 곱하지 않는 것",
    ],
    answer: 3,
    explanation:
      "저장은 바이트, 회선은 비트로 센다. 40TB에 8을 곱해 비트로 바꾼 뒤 86,400초로 나누면 약 3.7Gbps다. 8을 빼먹으면 회선을 8배 작게 잡는다.",
    anchor: "밖으로-나가는-바이트",
  },
  {
    id: "sd-capacity-estimation-7",
    post: "sd-capacity-estimation",
    question: "피크 4,167 QPS, 한 대가 초당 1,000건을 받고 사용률 60%를 목표로 한다. 예비 1대를 포함한 웹 서버 대수는?",
    choices: ["5대", "6대", "8대", "42대"],
    answer: 2,
    explanation:
      "4,167 ÷ (1,000 × 0.6) = 6.9라서 올림하면 7대이고, 한 대가 죽어도 버티게 예비 1대를 더해 8대다. 100%까지 쓰도록 맞추면 5대지만 응답 시간이 급격히 늘고 장애 때 받을 자리가 없다.",
    anchor: "캐시에-올릴-몫과-서버-대수",
  },
];
