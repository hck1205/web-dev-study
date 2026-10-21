import type { QuizQuestion } from "../types";

export const PARALLAX_SCROLLYTELLING: QuizQuestion[] = [
  {
    id: "parallax-scrollytelling-1",
    post: "parallax-scrollytelling",
    question:
      "섹션 30개의 배경을 scroll 리스너에서 `getBoundingClientRect()`로 재고 `style.top`을 바꾸게 했더니 스크롤 80번에 레이아웃이 2400번 일어났다. 가장 알맞은 설명은?",
    choices: [
      "top을 쓴 뒤 다음 섹션 위치를 읽을 때마다 브라우저가 그 자리에서 레이아웃을 다시 계산했다",
      "passive 리스너라서 이벤트가 30배로 늘었다",
      "섹션마다 합성 층이 생겨서다",
      "top은 페인트만 다시 하므로 레이아웃 수는 측정 오류다",
    ],
    answer: 0,
    explanation:
      "루프 안에서 쓰기(top)와 읽기(getBoundingClientRect)를 섞으면 읽을 때마다 강제 동기 레이아웃이 일어나 이벤트 수 × 요소 수가 된다. 위치를 처음 한 번 재 두고 transform만 쓰면 레이아웃이 사라진다.",
    anchor: "top으로-밀면-레이아웃을-2400번-한다",
  },
  {
    id: "parallax-scrollytelling-2",
    post: "parallax-scrollytelling",
    question:
      "`.hero { overflow: hidden }` 안의 배경 레이어에 `animation-timeline: view()`를 걸었더니 전혀 움직이지 않는다. 어떻게 고치나?",
    choices: [
      "animation-duration을 1s로 준다",
      "배경 레이어에 will-change: transform을 준다",
      "부모를 overflow: clip으로 바꿔 스크롤 컨테이너가 되지 않게 한다",
      "view() 대신 scroll(self)를 쓴다",
    ],
    answer: 2,
    explanation:
      "overflow: hidden인 요소도 스크롤 컨테이너라서 view()가 스크롤되지 않는 .hero를 기준으로 잡는다. overflow: clip은 똑같이 잘라 내지만 스크롤 컨테이너를 만들지 않는다. 바깥 섹션에 이름 붙인 타임라인을 주고 가져오는 방법도 있다.",
    anchor: "top으로-밀면-레이아웃을-2400번-한다",
  },
  {
    id: "parallax-scrollytelling-3",
    post: "parallax-scrollytelling",
    question:
      "화면 390×800에서 폭 1560px 띠를 가진 가로 스크롤 섹션을 세로 이동과 1:1로 움직이게 하려면 섹션 높이를 얼마로 잡아야 하나?",
    choices: ["1560px", "1970px", "3200px", "800px"],
    answer: 1,
    explanation:
      "띠가 움직일 거리는 1560 − 390 = 1170px이고, 무대가 붙어 있는 구간 길이는 섹션 높이 − 화면 높이다. 이 둘이 같아야 하니 800 + 1170 = 1970px이다. 400vh(3200px)로 잡으면 2400px 동안 1170px만 가서 두 배쯤 느리다.",
    anchor: "세로로-내렸는데-가로로-흐른다",
  },
  {
    id: "parallax-scrollytelling-4",
    post: "parallax-scrollytelling",
    question:
      "스크롤리텔링에서 단락이 화면 가운데를 지날 때 그림을 바꾸려고 한다. 가장 알맞은 방법은?",
    choices: [
      "scroll 리스너에서 단락마다 위치를 재서 가장 가까운 것을 고른다",
      "단락마다 animation-timeline: view()를 걸어 그림의 opacity를 바꾼다",
      "단락에 scroll-snap-align을 걸고 snap 이벤트를 기다린다",
      "IntersectionObserver에 rootMargin '-50% 0px -50% 0px'을 줘서 화면 가운데 선을 넘는 단락을 현재 단계로 삼는다",
    ],
    answer: 3,
    explanation:
      "단계 전환은 연속 움직임이 아니라 상태가 바뀌는 사건이라 관찰자가 맞다. 위아래 −50%로 영역을 가운데 한 줄로 줄이면 그 선에 닿는 단락이 바로 현재 단계다. 리스너로 매번 재는 방식은 이 일을 메인 스레드에서 반복한다.",
    anchor: "그림은-붙어-있고-글이-지나간다",
  },
  {
    id: "parallax-scrollytelling-5",
    post: "parallax-scrollytelling",
    question:
      "모바일에서 `height: 100vh` 히어로의 아래쪽이 처음 열 때 가려진다. 붙어 있는 무대의 출렁임도 피하려면 어떤 단위가 맞나?",
    choices: [
      "100svh: 주소창이 펼쳐진 작은 높이라 처음부터 다 보이고 스크롤 중에도 변하지 않는다",
      "100dvh: 항상 현재 높이라서 가장 정확하다",
      "100lvh: 주소창이 접힌 큰 높이라 가장 넓다",
      "100%: 부모 높이를 따르므로 주소창과 상관없다",
    ],
    answer: 0,
    explanation:
      "100vh는 대부분 주소창이 접힌 큰 높이(lvh)로 계산되어 처음 화면에서 아래가 가려진다. 100dvh는 주소창이 움직이는 동안 계속 바뀌어 sticky 무대에 쓰면 레이아웃이 반복되고 내용이 출렁인다. 첫 화면과 무대에는 100svh가 안전하다.",
    anchor: "휴대폰에서-화면-높이가-흔들린다",
  },
  {
    id: "parallax-scrollytelling-6",
    post: "parallax-scrollytelling",
    question: "패럴랙스 효과에 움직임 줄이기 설정을 반영하는 가장 안전한 방법은?",
    choices: [
      "효과를 켜 두고 @media (prefers-reduced-motion: reduce)에서 속도를 절반으로 줄인다",
      "@media (prefers-reduced-motion: no-preference) 안에서만 효과를 켜고, 꺼져도 내용은 그대로 보이게 둔다",
      "설정과 상관없이 효과는 두고 페이지 위에 안내 문구를 넣는다",
      "휠 이벤트를 가로채 스크롤 거리를 줄인다",
    ],
    answer: 1,
    explanation:
      "no-preference 안에서만 켜면 설정을 켠 사람과 미디어 쿼리를 모르는 환경 모두 효과 없는 상태로 남는다. 속도만 줄이면 여전히 어지러움을 일으킬 수 있고, 휠을 가로채는 스크롤 재킹은 오히려 접근성을 해친다.",
    anchor: "움직임이-불편한-사람에게서-장면을-거둔다",
  },
];
