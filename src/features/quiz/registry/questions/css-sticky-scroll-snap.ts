import type { QuizQuestion } from "../types";

export const CSS_STICKY_SCROLL_SNAP: QuizQuestion[] = [
  {
    id: "css-sticky-scroll-snap-1",
    post: "css-sticky-scroll-snap",
    question: "표를 overflow-x: auto 상자로 감쌌더니 thead의 sticky가 세로 스크롤에서 안 붙는다. 이유는?",
    choices: [
      "thead에는 position: sticky를 줄 수 없다",
      "overflow-x: auto이면 overflow-y도 auto로 계산되어, 그 상자가 가장 가까운 스크롤 컨테이너가 된다",
      "가로 스크롤이 생기면 브라우저가 sticky를 끈다",
      "top 값이 픽셀이 아니라서 무시된다",
    ],
    answer: 1,
    explanation:
      "한 축만 visible이 아니면 다른 축의 visible은 auto로 계산된다. 머리글은 그 상자 기준으로 붙는데, 상자는 세로로 스크롤되지 않고 문서와 함께 올라가니 안 붙는 것처럼 보인다. 가로 스크롤이 필요 없으면 overflow-x: clip으로 바꾼다.",
    anchor: "붙는-기준을-거슬러-올라가-찾기",
  },
  {
    id: "css-sticky-scroll-snap-2",
    post: "css-sticky-scroll-snap",
    question: "가로 넘침만 잘라 내고 sticky는 살리고 싶다. 감싼 상자에 줄 값으로 알맞은 것은?",
    choices: ["overflow: hidden", "overflow-x: scroll", "overflow: clip", "overflow: auto"],
    answer: 2,
    explanation:
      "clip은 넘치는 부분을 자르기만 하고 스크롤 상자를 만들지 않아서 sticky의 기준이 바뀌지 않는다. hidden은 사용자가 스크롤할 수 없을 뿐 스크롤 컨테이너라서 측정에서도 머리글이 -200까지 올라갔다.",
    anchor: "붙지-않는-경우를-하나씩-재-보면",
  },
  {
    id: "css-sticky-scroll-snap-3",
    post: "css-sticky-scroll-snap",
    question: "flex 레이아웃의 사이드바에 position: sticky; top: 0을 줬는데 같이 스크롤된다. 먼저 해 볼 것은?",
    choices: [
      "사이드바에 align-self: flex-start를 준다",
      "사이드바에 z-index를 높인다",
      "부모에 overflow: hidden을 준다",
      "top: 0 대신 top: 1px을 준다",
    ],
    answer: 0,
    explanation:
      "기본 align-items: stretch 때문에 사이드바가 부모 높이만큼 늘어나서 부모 안에서 움직일 자리가 없다. 측정에서 사이드바 높이가 2736px에서 18px로 줄자 그때부터 붙었다. 부모에 overflow: hidden을 주면 오히려 기준이 바뀌어 더 망가진다.",
    anchor: "붙지-않는-경우를-하나씩-재-보면",
  },
  {
    id: "css-sticky-scroll-snap-4",
    post: "css-sticky-scroll-snap",
    question: "높이 400px 섹션 안의 40px짜리 sticky 머리글(top: 0)은 섹션이 문서 맨 위에 있을 때 몇 px 스크롤한 뒤부터 밀려 올라가나?",
    choices: ["40px", "200px", "400px", "360px"],
    answer: 3,
    explanation:
      "머리글은 포함 블록인 섹션 밖으로 나가지 못한다. 섹션의 남은 높이가 머리글 높이와 같아지는 400 - 40 = 360px까지는 붙어 있고, 그 뒤로는 내린 만큼 밀려 올라간다. 측정에서 380px일 때 top이 -20이었다.",
    anchor: "붙지-않는-경우를-하나씩-재-보면",
  },
  {
    id: "css-sticky-scroll-snap-5",
    post: "css-sticky-scroll-snap",
    question: "카드 시작점이 0, 260, 520인 x mandatory 상자에서 scrollTo로 left 130을 보내면 크로미움에서 어디에 서나?",
    choices: [
      "130. 스크립트로 보낸 스크롤에는 snap이 걸리지 않는다",
      "260. 항상 다음 칸으로 간다",
      "0. 두 칸과 거리가 같아 앞쪽 칸을 골랐다",
      "스크롤이 무시되고 제자리에 있는다",
    ],
    answer: 2,
    explanation:
      "snap은 손가락 스크롤뿐 아니라 scrollTo 같은 스크립트 스크롤에도 걸린다. 130은 0과 260의 가운데라 동점이고, 측정에서는 앞쪽 칸인 0을 골랐다. proximity였다면 양쪽 모두 멀다고 보고 130에 그대로 섰다.",
    anchor: "mandatory와-proximity를-재-보면",
  },
  {
    id: "css-sticky-scroll-snap-6",
    post: "css-sticky-scroll-snap",
    question: "모든 칸에 scroll-snap-stop: always를 주고 0에서 600px을 한 번에 밀면 어떻게 되나? (칸 시작점 0, 260, 520, 780)",
    choices: [
      "가장 가까운 520에 선다",
      "지나가는 첫 칸인 260에서 멈춘다",
      "600에 그대로 선다",
      "끝 칸인 780까지 간다",
    ],
    answer: 1,
    explanation:
      "snap-stop: always인 칸은 건너뛰지 못하니 처음 지나는 260에서 멈춘다. 이 속성이 없을 때는 가장 가까운 520에 섰다. 한 장씩 넘기는 화면에서 세게 넘겨도 여러 장이 지나가지 않게 할 때 쓴다.",
    anchor: "mandatory와-proximity를-재-보면",
  },
  {
    id: "css-sticky-scroll-snap-7",
    post: "css-sticky-scroll-snap",
    question: "start 정렬 카러셀에서 마지막 카드가 왼쪽 끝까지 오지 않는다. 원인과 해결로 알맞은 것은?",
    choices: [
      "스크롤 최댓값이 마지막 칸의 멈춤 자리보다 작다. 트랙 끝에 여백을 둔다",
      "mandatory라서 마지막 칸을 건너뛴다. proximity로 바꾼다",
      "scroll-snap-stop이 없어서다. always를 준다",
      "카드가 너무 많아서다. 카드 수를 줄인다",
    ],
    answer: 0,
    explanation:
      "측정에서 마지막 카드 시작점은 1040인데 scrollLeft 최댓값이 980이라 거기까지 갈 수 없었다. 트랙 끝에 padding-inline-end를 두면 최댓값이 늘어 마지막 카드도 왼쪽에 설 수 있고, end 정렬을 쓰는 방법도 있다.",
    anchor: "mandatory와-proximity를-재-보면",
  },
];
