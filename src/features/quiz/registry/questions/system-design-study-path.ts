import type { QuizQuestion } from "../types";

export const SYSTEM_DESIGN_STUDY_PATH: QuizQuestion[] = [
  {
    id: "system-design-study-path-1",
    post: "system-design-study-path",
    question: "기초 편에서 웹 서버를 여러 대로 늘리기 전에 먼저 해야 하는 일은?",
    choices: [
      "DB를 샤드로 나눈다",
      "세션 같은 상태를 웹 서버 밖으로 옮긴다",
      "CDN을 붙인다",
      "데이터 센터를 하나 더 둔다",
    ],
    answer: 1,
    explanation:
      "로드 밸런서가 요청을 어느 서버로 보내도 같은 결과가 나오려면 웹 서버가 무상태여야 한다. 샤딩이나 CDN은 다른 문제를 푸는 부품이라 웹 서버를 늘리는 전제 조건이 아니다.",
    anchor: "서버-한-대가-지도-전체로-자라는-과정",
  },
  {
    id: "system-design-study-path-2",
    post: "system-design-study-path",
    question: "하루 1천만 건 요청을 평균 QPS로 바꾸고 피크 2배를 적용하면 대략 얼마인가?",
    choices: ["약 1,160", "약 23,150", "약 232", "약 11,575"],
    answer: 2,
    explanation:
      "1천만을 86,400초로 나누면 약 115.7이고, 올림해서 116, 피크 2배면 232다. 11,575는 하루 1천만 명이 100번씩 읽을 때의 평균값이다.",
    anchor: "숫자-하나는-손으로-뽑아-본다",
  },
  {
    id: "system-design-study-path-3",
    post: "system-design-study-path",
    question: "설계 사례 48편을 효율적으로 공부하는 방법으로 이 글이 권하는 것은?",
    choices: [
      "사례마다 최종 구조도를 외운다",
      "사례마다 처음 깊게 나오는 부품을 챙기고, 다시 나오면 차이에 집중한다",
      "가장 어려운 결제 묶음부터 읽는다",
      "기초 편은 건너뛰고 사례부터 읽는다",
    ],
    answer: 1,
    explanation:
      "사례들은 일관된 해싱, 고유 ID, 큐, 멱등 키 같은 부품을 반복해서 쓴다. 부품 단위로 익혀 두면 처음 보는 문제도 아는 부품의 조합으로 바꿔 말할 수 있다. 결제 묶음은 앞의 부품을 모두 꺼내 쓰기 때문에 마지막에 읽는다.",
    anchor: "같은-부품이-여러-사례에-다시-나온다",
  },
  {
    id: "system-design-study-path-4",
    post: "system-design-study-path",
    question: "키-값 저장소 묶음을 사례의 첫머리에 두는 이유로 가장 알맞은 것은?",
    choices: [
      "가장 쉬운 사례라서",
      "면접에 가장 자주 나오는 문제라서",
      "데이터 나누기, 복제, 장애 대응을 한꺼번에 다뤄 뒤 사례에서 계속 다시 쓰이기 때문에",
      "다른 사례와 겹치는 부품이 없어서",
    ],
    answer: 2,
    explanation:
      "키-값 저장소는 어렵지만 링과 쿼럼, 가십, 커밋 로그처럼 뒤의 메시지 큐, 지표, 객체 저장소에서 다시 나오는 개념이 처음 깊게 나온다. 그래서 여기서 한 번 깊게 파 두면 뒤의 사례를 링크로 넘기며 빠르게 읽을 수 있다.",
    anchor: "한-대에-안-들어가는-데이터-키-값-저장소",
  },
  {
    id: "system-design-study-path-5",
    post: "system-design-study-path",
    question: "면접에서 깊이 파기 단계의 주제를 고르는 기준으로 가장 알맞은 것은?",
    choices: [
      "어림한 숫자가 가리키는 병목",
      "내가 가장 잘 아는 기술",
      "그림에 있는 모든 상자를 고르게",
      "가장 최신 기술이 들어가는 부분",
    ],
    answer: 0,
    explanation:
      "읽기가 쓰기의 100배라면 캐시와 복제본, 돈이 걸리면 멱등성처럼 숫자와 요구 사항이 병목을 가리킨다. 모든 상자를 조금씩 설명하면 깊이가 드러나지 않고, 아는 기술만 고르면 문제와 상관없는 답이 되기 쉽다.",
    anchor: "면접에서-나올-만한-질문",
  },
];
