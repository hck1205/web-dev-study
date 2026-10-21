import type { QuizQuestion } from "../types";

export const ANIMATION_PATTERNS: QuizQuestion[] = [
  {
    id: "animation-patterns-1",
    post: "animation-patterns",
    question: "목록 카드를 누르면 그 썸네일이 그대로 커지며 상세 화면의 큰 사진이 되게 하고 싶다. 부탁할 때 쓸 이름으로 가장 정확한 것은?",
    choices: ["Slide in", "Shared element transition", "Stagger", "Crossfade"],
    answer: 1,
    explanation:
      "앞 화면과 뒤 화면에 같은 물체가 있다고 보고 자리와 크기를 이어 주는 패턴이 shared element transition이다. 크로스페이드는 화면 전체가 겹쳐 바뀔 뿐이라 누른 카드가 어디로 갔는지 이어 주지 못한다.",
    anchor: "어디서-왔는지-보여-주기",
  },
  {
    id: "animation-patterns-2",
    post: "animation-patterns",
    question: "목록 30줄에 60ms 간격 stagger를 걸었다(애니메이션 길이 400ms). 마지막 줄이 다 보이는 시각과, 글에서 권한 처리는?",
    choices: [
      "1,800ms, 간격을 120ms로 늘린다",
      "460ms, 그대로 둔다",
      "2,140ms, 8개쯤에서 지연을 멈추는 상한을 둔다",
      "2,140ms, 줄마다 다른 이징을 준다",
    ],
    answer: 2,
    explanation:
      "마지막 줄은 29 × 60 = 1,740ms에 출발해 400ms 뒤인 2,140ms에 다 보인다. 그동안 목록이 덜 그려진 것처럼 보이니 지연에 상한을 두고, 무한 스크롤로 붙는 줄에는 다시 걸지 않는다.",
    anchor: "하나씩-차례로-들어오기",
  },
  {
    id: "animation-patterns-3",
    post: "animation-patterns",
    question: "pointerdown에서 물결(ripple)을 만드는 버튼을 키보드 Enter로 눌렀다. 크로미움에서 확인한 결과로 맞는 것은?",
    choices: [
      "pointerdown이 버튼 가운데 좌표로 온다",
      "pointerdown은 오지 않고 detail이 0이고 좌표가 0인 click만 온다",
      "pointerdown과 click이 모두 오고 좌표는 마지막 마우스 위치다",
      "아무 이벤트도 오지 않는다",
    ],
    answer: 1,
    explanation:
      "키보드로 버튼을 누르면 click만 오고 detail=0, clientX=0, clientY=0이다. 그래서 pointerdown에만 걸면 키보드 사용자는 물결을 못 보고, click으로 옮겨도 detail이 0이면 가운데에서 시작하는 처리가 따로 필요하다.",
    anchor: "누른-자리에서-대답하기",
  },
  {
    id: "animation-patterns-4",
    post: "animation-patterns",
    question: "Gooey 필터의 feColorMatrix 마지막 행이 `0 0 0 20 -8`일 때, 원래 알파 0.45인 픽셀은 어떻게 되나?",
    choices: ["0으로 잘려 사라진다", "0.45 그대로 남는다", "1로 올라가 불투명해진다", "0.9가 된다"],
    answer: 2,
    explanation:
      "새 알파는 20 × 0.45 − 8 = 1이다. 흐리게 번진 가장자리 중 겹쳐서 알파가 높아진 부분만 불투명하게 살아남기 때문에 가까운 덩어리 사이에 다리가 생긴다. 0.4 이하는 0으로 잘린다.",
    anchor: "눈길을-끄는-장식-셋",
  },
  {
    id: "animation-patterns-5",
    post: "animation-patterns",
    question: "홈 화면 상단에 로고 띠 marquee를 넣었다. 접근성 기준(WCAG 2.2.2)에 맞추려면 무엇이 필요한가?",
    choices: [
      "속도를 절반으로 줄이면 충분하다",
      "멈출 수 있는 방법을 주고, 움직임 줄이기 설정이면 멈춰 둔다",
      "role=\"marquee\"만 붙이면 된다",
      "5초마다 방향을 바꾸면 된다",
    ],
    answer: 1,
    explanation:
      "저절로 시작해 5초 넘게 움직이며 다른 내용과 함께 보이면 멈추거나 숨길 수 있어야 한다. hover 멈춤은 터치 사용자에게 소용이 없어서 일시정지 버튼을 두는 편이 안전하다. 속도를 줄이는 것만으로는 기준을 채우지 못한다.",
    anchor: "눈길을-끄는-장식-셋",
  },
  {
    id: "animation-patterns-6",
    post: "animation-patterns",
    question: "AI 도구에 \"카드에서 상세로 넘어갈 때 자연스럽게\"라고만 부탁했더니 화면 전체 페이드가 왔다. 부탁 문장에서 가장 먼저 빠진 조각은?",
    choices: [
      "무엇이 무엇으로 이어지는지(대상)",
      "사용할 프레임워크 버전",
      "애니메이션의 색",
      "디자인 시스템 이름",
    ],
    answer: 0,
    explanation:
      "대상이 없으면 가장 무난한 답인 화면 전체 전환이 온다. 대상, 패턴 이름, 시간과 곡선, 되돌아갈 때, 움직임 줄이기까지 적으면 한 번에 원하는 결과에 가까워진다.",
    anchor: "부탁-한-문장에-넣을-것",
  },
];
