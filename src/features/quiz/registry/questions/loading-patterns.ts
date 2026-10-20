import type { QuizQuestion } from "../types";

export const LOADING_PATTERNS: QuizQuestion[] = [
  {
    id: "loading-patterns-1",
    post: "loading-patterns",
    question: "글 목록 화면에서 스피너 대신 스켈레톤을 쓰면 얻는 이득으로 가장 알맞은 것은?",
    choices: [
      "데이터를 더 빨리 받아 온다",
      "자리를 미리 잡아 두어 내용이 와도 레이아웃이 밀리지 않는다",
      "서버 요청 수가 줄어든다",
      "모양을 모르는 결과에도 그대로 쓸 수 있다",
    ],
    answer: 1,
    explanation:
      "스켈레톤은 받는 속도를 바꾸지 않는다. 무엇이 올지 미리 보여 주고 실제 화면과 같은 높이로 자리를 잡아 두어 CLS를 줄인다. 모양을 모르는 결과에는 오히려 작은 스피너가 맞다.",
    anchor: "무엇이-올지-모양을-아는가",
  },
  {
    id: "loading-patterns-2",
    post: "loading-patterns",
    question: "스피너를 300ms 늦게 띄우고 최소 500ms 보여 줄 때, 요청이 450ms에 끝나면 스피너는 언제 사라지나?",
    choices: ["450ms", "750ms", "800ms", "스피너를 띄우지 않는다"],
    answer: 2,
    explanation:
      "300ms에도 끝나지 않았으니 스피너는 300ms에 뜬다. 내리는 시각은 로딩이 끝난 450ms와 300 + 500 = 800ms 중 늦은 쪽이라 800ms다. 150ms짜리 깜빡임을 막으려고 조금 더 보여 주는 것이다.",
    anchor: "스피너가-깜빡이면-더-느려-보인다",
  },
  {
    id: "loading-patterns-3",
    post: "loading-patterns",
    question: "타이머로 90%까지 채우고 멈추는 가짜 진행률이 문제가 되는 이유는?",
    choices: [
      "브라우저가 role=\"progressbar\"를 무시해서",
      "애니메이션이 많아 CPU를 많이 써서",
      "결정형 표시는 10초 안쪽 작업에만 쓸 수 있어서",
      "실제 진행과 상관없이 끝에서 멈춰 고장 난 것처럼 보여서",
    ],
    answer: 3,
    explanation:
      "가짜 진행률은 처음엔 빨라 보이지만 99% 근처에서 오래 서 있으면 사용자는 멈췄다고 판단한다. 진짜 수치가 없으면 스피너와 예상 시간 문구, 단계를 안다면 스테퍼가 정직하다.",
    anchor: "얼마나-남았는지-아는가",
  },
  {
    id: "loading-patterns-4",
    post: "loading-patterns",
    question: "optimistic UI를 쓰기에 가장 알맞지 않은 동작은?",
    choices: ["좋아요 누르기", "송금하기", "북마크 추가", "할 일 체크하기"],
    answer: 1,
    explanation:
      "낙관적 UI는 거의 항상 성공하고 실패해도 되돌리기 쉬운 동작에 쓴다. 송금처럼 실패가 치명적인 동작은 화면이 완료를 보여 줬다가 뒤집히면 신뢰를 잃으니, loading button으로 서버 결과를 기다린다.",
    anchor: "버튼을-누른-사람에게-먼저-답한다",
  },
  {
    id: "loading-patterns-5",
    post: "loading-patterns",
    question: "첫 화면 맨 위의 큰 대표 이미지에 loading=\"lazy\"를 붙이면 어떻게 되나?",
    choices: [
      "LCP 대상 이미지를 늦게 받아 LCP가 늦어진다",
      "CLS가 크게 줄어든다",
      "이미지가 흐린 미리보기부터 보인다",
      "아무 차이가 없다. 브라우저가 무시한다",
    ],
    answer: 0,
    explanation:
      "첫 화면의 큰 이미지는 보통 LCP 대상이라 지연 로딩하면 LCP가 그대로 늦어지고, Lighthouse도 이를 경고한다. 첫 화면 이미지는 즉시 받고 아래쪽 이미지만 지연시킨다. 흐린 미리보기는 blur-up을 따로 써야 생긴다.",
    anchor: "보일-때-받기-흐린-것부터-보여-주기",
  },
];
