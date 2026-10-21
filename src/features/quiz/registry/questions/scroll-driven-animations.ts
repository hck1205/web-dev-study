import type { QuizQuestion } from "../types";

export const SCROLL_DRIVEN_ANIMATIONS: QuizQuestion[] = [
  {
    id: "scroll-driven-animations-1",
    post: "scroll-driven-animations",
    question:
      "스크롤할 수 있는 거리가 1800px인 페이지에서 `animation: grow linear both; animation-timeline: scroll(root block);`인 막대를 450px 내렸다. 막대의 scaleX는?",
    choices: ["0", "0.25", "0.409", "1"],
    answer: 1,
    explanation:
      "스크롤 타임라인은 스크롤 거리 중 몇 퍼센트를 내렸는지를 애니메이션 진행률로 쓴다. 450 / 1800 = 25%이고 linear라서 키프레임 25% 지점인 0.25가 된다. 0.409는 linear를 빼서 기본 이징 ease가 걸렸을 때의 값이다.",
    anchor: "시계-대신-스크롤-위치를-넣는다",
  },
  {
    id: "scroll-driven-animations-2",
    post: "scroll-driven-animations",
    question:
      "`.bar { animation-timeline: scroll(); animation: grow linear both; }`로 쓴 진행 막대가 처음부터 꽉 찬 채 움직이지 않는다. 왜일까?",
    choices: [
      "scroll()은 문서 전체가 아니라 요소 자신을 보기 때문이다",
      "linear 이징은 스크롤 타임라인에서 쓸 수 없기 때문이다",
      "뒤에 쓴 animation 단축 속성이 animation-timeline을 auto로 되돌려, 길이 0인 시간 애니메이션이 바로 끝났기 때문이다",
      "both 채우기 모드가 스크롤 타임라인을 끄기 때문이다",
    ],
    answer: 2,
    explanation:
      "animation 단축 속성은 animation-timeline도 초기값으로 되돌린다. 그러면 평범한 문서 타임라인 애니메이션이 되고, 길이를 주지 않았으니 0초 만에 끝나서 both 때문에 끝 모습으로 고정된다. 타임라인은 단축 속성 뒤에 써야 한다.",
    anchor: "막대가-처음부터-꽉-차-있다",
  },
  {
    id: "scroll-driven-animations-3",
    post: "scroll-driven-animations",
    question:
      "화면 높이가 800px이고, 문서 위에서 1200px 지점에 높이 200px 카드가 있다. `animation-range: entry 0% entry 100%`인 view() 애니메이션은 scrollY 몇에서 몇 사이에 진행되나?",
    choices: ["400 → 600", "1200 → 1400", "0 → 1200", "600 → 1200"],
    answer: 0,
    explanation:
      "entry 0%는 카드 윗변이 화면 아랫변에 닿는 순간이라 1200 − 800 = 400이다. entry 100%는 카드가 완전히 들어온 순간, 즉 아랫변(1400)이 화면 아랫변에 닿는 600이다. 600 → 1200은 contain 구간이다.",
    anchor: "요소가-지나가는-구간을-잘라-쓰는-view",
  },
  {
    id: "scroll-driven-animations-4",
    post: "scroll-driven-animations",
    question:
      "가로 넘침을 막으려고 바깥 래퍼에 `overflow-x: hidden`을 걸었더니 안쪽 요소의 `animation-timeline: scroll()`이 동작하지 않는다. 가장 알맞은 설명은?",
    choices: [
      "overflow-x: hidden은 애니메이션 자체를 끈다",
      "overflow: hidden도 스크롤 컨테이너라서 nearest가 스크롤되지 않는 래퍼를 잡아 타임라인이 비활성이 됐다",
      "세로 스크롤 타임라인은 가로 overflow와 함께 쓸 수 없다",
      "래퍼가 position을 갖지 않아서다",
    ],
    answer: 1,
    explanation:
      "scroll()의 기본값 nearest는 가장 가까운 조상 스크롤 컨테이너를 찾는데, overflow: hidden인 요소도 스크롤 컨테이너다. 그 래퍼는 실제로 스크롤되지 않으니 타임라인 시간이 null이 된다. scroll(root), 이름 붙인 타임라인, overflow: clip으로 고친다.",
    anchor: "막대가-처음부터-꽉-차-있다",
  },
  {
    id: "scroll-driven-animations-5",
    post: "scroll-driven-animations",
    question:
      "카드를 `opacity: 0`에서 시작해 view()로 나타나게 했다. 지원하지 않는 브라우저에서도 안전하게 하려면?",
    choices: [
      "opacity: 0을 기본으로 두고 @supports 안에서 opacity: 1로 바꾼다",
      "animation-duration을 1s로 줘서 시간 애니메이션으로 대신 돌게 한다",
      "내용이 보이는 상태를 기본으로 두고, @supports (animation-timeline: view()) 안에서만 애니메이션을 얹는다",
      "자바스크립트로 CSS.supports를 검사해 지원하지 않으면 페이지를 새로 고친다",
    ],
    answer: 2,
    explanation:
      "처음 상태를 숨기는 코드가 @supports 바깥에 있으면 지원하지 않는 브라우저에서는 카드가 영원히 보이지 않는다. 바닥은 효과 없이 내용이 보이는 상태로 두고, 지원하는 브라우저와 움직임을 원하는 사용자에게만 효과를 더한다.",
    anchor: "지원하지-않는-브라우저를-위한-바닥",
  },
  {
    id: "scroll-driven-animations-6",
    post: "scroll-driven-animations",
    question: "다음 중 스크롤 타임라인보다 IntersectionObserver가 맞는 일은?",
    choices: [
      "읽기 진행 막대",
      "스크롤하는 동안 배경이 천천히 움직이는 패럴랙스",
      "헤더가 스크롤 양에 비례해 줄어드는 효과",
      "화면에 들어오면 다음 페이지를 한 번 불러오기",
    ],
    answer: 3,
    explanation:
      "스크롤 타임라인은 스크롤 양과 연속적으로 비례하고 되돌리면 되감기는 움직임에 맞다. 다음 페이지 요청처럼 어느 지점을 지날 때 한 번 일어나는 사건은 상태를 바꾸는 일이라 IntersectionObserver가 맡는다.",
    anchor: "스크롤-타임라인을-고를-때와-피할-때",
  },
];
