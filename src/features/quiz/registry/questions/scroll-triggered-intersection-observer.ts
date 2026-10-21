import type { QuizQuestion } from "../types";

export const SCROLL_TRIGGERED_INTERSECTION_OBSERVER: QuizQuestion[] = [
  {
    id: "scroll-triggered-intersection-observer-1",
    post: "scroll-triggered-intersection-observer",
    question:
      "화면 아래 멀리 있는 이미지에 관찰자를 걸었더니 페이지를 열자마자 콜백이 불려 이미지를 전부 받아 왔다. 원인은?",
    choices: [
      "rootMargin 기본값이 화면 높이만큼 넓기 때문이다",
      "관찰을 시작하면 현재 상태를 알려 주는 콜백이 한 번 불리는데, isIntersecting을 확인하지 않았다",
      "threshold 기본값 0은 언제나 참이기 때문이다",
      "관찰자는 스크롤 이벤트가 없으면 매 프레임 콜백을 부른다",
    ],
    answer: 1,
    explanation:
      "observe 직후에는 요소가 화면 밖이어도 isIntersecting: false인 기록과 함께 콜백이 한 번 온다. 콜백에서 isIntersecting을 확인하지 않고 바로 '보였다'고 처리하면 이런 일이 생긴다.",
    anchor: "처음-한-번은-무조건-불린다",
  },
  {
    id: "scroll-triggered-intersection-observer-2",
    post: "scroll-triggered-intersection-observer",
    question:
      "threshold: [0, 0.5, 1]로 관찰하며 30px씩 스크롤했더니 들어올 때 첫 기록의 intersectionRatio가 0이 아니라 0.05였다. 왜일까?",
    choices: [
      "관찰자는 프레임마다 잰 값이 지난번과 다른 구간에 있을 때 알려 주므로, 경계를 넘은 뒤 처음 잰 값이 온다",
      "threshold 0은 5%로 반올림되기 때문이다",
      "rootMargin이 없어서 오차가 생겼다",
      "콜백이 스크롤 이벤트보다 먼저 실행되어 이전 값이 왔다",
    ],
    answer: 0,
    explanation:
      "관찰자는 경계를 지나는 정확한 순간이 아니라, 렌더링 중에 잰 비율이 다른 threshold 구간에 들어갔을 때 알린다. 스크롤이 30px씩 뛰면 0을 넘은 뒤 처음 잰 값인 10px, 즉 0.05가 온다. 그래서 정확히 경계값일 거라고 기대하면 안 된다.",
    anchor: "threshold는-넘어간-다음에-알려-준다",
  },
  {
    id: "scroll-triggered-intersection-observer-3",
    post: "scroll-triggered-intersection-observer",
    question:
      "높이 1600px인 섹션에 threshold: 1을 걸고 '완전히 보이면 재생'을 기다렸다. 화면 높이는 800px이다. 어떻게 되나?",
    choices: [
      "섹션 위쪽 절반이 보일 때 재생된다",
      "스크롤을 멈추는 순간 재생된다",
      "비율이 최대 0.5라서 1에 닿지 못해 '완전히 보임' 조건이 끝내 오지 않는다",
      "브라우저가 threshold를 0.5로 자동 조정한다",
    ],
    answer: 2,
    explanation:
      "비율은 요소 면적 중 겹친 부분이라 1600px 요소는 800px 화면에서 최대 0.5다. 큰 요소에는 작은 threshold를 쓰거나, 안쪽의 작은 표식을 관찰하거나, rootMargin으로 화면 안쪽 선을 만든다.",
    anchor: "threshold는-넘어간-다음에-알려-준다",
  },
  {
    id: "scroll-triggered-intersection-observer-4",
    post: "scroll-triggered-intersection-observer",
    question:
      "무한 스크롤이 첫 묶음만 불러오고 멈췄다. 센티널은 여전히 화면 안에 보인다. 가장 알맞은 설명과 해결은?",
    choices: [
      "rootMargin이 너무 커서다. 0px로 줄인다",
      "센티널 높이가 1px이라 관찰되지 않는다. 높이를 키운다",
      "콜백이 비동기라 늦게 온다. setTimeout으로 다시 부른다",
      "센티널이 계속 보이는 상태라 구간이 바뀌지 않아 다시 알리지 않는다. 불러온 뒤 unobserve·observe로 다시 관찰한다",
    ],
    answer: 3,
    explanation:
      "관찰자는 상태가 바뀔 때만 알린다. 첫 묶음이 화면을 다 채우지 못하면 센티널은 계속 보이는 상태라 변화가 없다. 다시 관찰하면 처음 한 번은 무조건 불리므로 현재 상태를 새로 받을 수 있다.",
    anchor: "무한-스크롤의-센티널이-한-번만-불린다",
  },
  {
    id: "scroll-triggered-intersection-observer-5",
    post: "scroll-triggered-intersection-observer",
    question: "요소 윗변이 화면 아랫변에 딱 닿았을 때 콜백이 받은 값으로 맞는 것은?",
    choices: [
      "isIntersecting: true, intersectionRatio: 0",
      "isIntersecting: false, intersectionRatio: 0",
      "isIntersecting: true, intersectionRatio: 1",
      "콜백이 불리지 않는다",
    ],
    answer: 0,
    explanation:
      "가장자리에 닿기만 해도 겹친 것으로 쳐서 isIntersecting은 true인데, 겹친 넓이가 없으니 비율은 0이다. 그래서 보였는지를 intersectionRatio > 0으로 판단하면 이 순간을 놓친다.",
    anchor: "미리-당겨-오는-rootmargin",
  },
  {
    id: "scroll-triggered-intersection-observer-6",
    post: "scroll-triggered-intersection-observer",
    question:
      "React에서 관찰자를 useEffect로 붙였는데 개발 모드에서 콜백이 두 번씩 온다. 가장 먼저 고칠 것은?",
    choices: [
      "threshold를 배열 대신 숫자로 바꾼다",
      "effect 정리 함수에서 disconnect()를 불러 Strict Mode의 두 번째 실행 전에 첫 관찰자를 끊는다",
      "useLayoutEffect로 바꾼다",
      "관찰자를 카드마다 하나씩 만든다",
    ],
    answer: 1,
    explanation:
      "Strict Mode는 effect를 일부러 한 번 더 실행해 정리가 빠진 코드를 드러낸다. 정리 함수에서 disconnect하지 않으면 관찰자가 둘 생겨 콜백도 두 번 온다. 정리가 없으면 사라진 컴포넌트의 요소를 계속 붙잡는 문제도 생긴다.",
    anchor: "react에서는-정리까지-한-묶음이다",
  },
];
