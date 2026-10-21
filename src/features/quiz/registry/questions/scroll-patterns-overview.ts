import type { QuizQuestion } from "../types";

export const SCROLL_PATTERNS_OVERVIEW: QuizQuestion[] = [
  {
    id: "scroll-patterns-overview-1",
    post: "scroll-patterns-overview",
    question: "읽은 만큼 차는 진행 막대와 화면에 들어오면 떠오르는 카드의 가장 큰 차이는?",
    choices: [
      "진행 막대는 CSS로만, 카드는 자바스크립트로만 만들 수 있다",
      "진행 막대는 스크롤 위치가 곧 애니메이션 시각이고, 카드는 경계를 넘는 순간 한 번 실행된다",
      "진행 막대는 합성 스레드에서, 카드는 반드시 메인 스레드에서 움직인다",
      "둘 다 scroll 이벤트가 올 때마다 다시 계산해야 한다",
    ],
    answer: 1,
    explanation:
      "진행 막대는 scroll driven이라 사용자가 멈추면 같이 멈추고 올리면 거꾸로 간다. reveal은 scroll triggered라 경계를 넘으면 한 번 시작해서 시간에 따라 끝까지 재생된다. 카드도 view() 타임라인으로 CSS만으로 만들 수 있으니 첫 보기는 틀리다.",
    anchor: "스크롤이-무엇을-움직이는지로-나눈다",
  },
  {
    id: "scroll-patterns-overview-2",
    post: "scroll-patterns-overview",
    question: "reveal 전의 섹션(opacity: 0) 안에 있는 링크로 Tab을 눌러 이동하면 크로미움에서 어떻게 되나?",
    choices: [
      "투명한 요소는 포커스 순서에서 빠져서 다음 링크로 건너뛴다",
      "포커스가 가지 않고 페이지 맨 위로 돌아간다",
      "포커스가 숨은 링크로 가고 화면도 그 자리로 스크롤되지만, 섹션은 여전히 투명하다",
      "포커스를 받는 순간 브라우저가 opacity를 1로 바꾼다",
    ],
    answer: 2,
    explanation:
      "opacity: 0은 보이지 않을 뿐 포커스와 찾기 대상에서 빠지지 않는다. 그래서 키보드 사용자는 보이지 않는 곳에 포커스를 둔 채 화면을 보게 된다. 기본은 보이게 두고 스크립트가 준비됐을 때만 숨기는 이유다.",
    anchor: "선을-넘는-순간-한-번",
  },
  {
    id: "scroll-patterns-overview-3",
    post: "scroll-patterns-overview",
    question: "스크롤 진행률을 scrollTop / (scrollHeight - clientHeight)로만 구하면 생기는 문제가 아닌 것은?",
    choices: [
      "내용이 화면보다 짧으면 0으로 나눠 NaN이 나온다",
      "고무줄 스크롤 때 0보다 작거나 1보다 큰 값이 나올 수 있다",
      "끝까지 내려도 0.5px쯤 모자라 99.9%에서 멈출 수 있다",
      "scroll 이벤트가 한 프레임에 여러 번 와서 값이 두 배가 된다",
    ],
    answer: 3,
    explanation:
      "앞의 셋은 실제로 생기는 함정이라 0 처리, 0~1로 자르기, 반올림으로 막는다. scroll 이벤트는 크로미움에서 프레임당 최대 한 번 오고, 와도 값을 더하는 계산이 아니니 두 배가 되지 않는다.",
    anchor: "스크롤-위치를-시계로-쓴다",
  },
  {
    id: "scroll-patterns-overview-4",
    post: "scroll-patterns-overview",
    question: "메인 스레드가 긴 작업으로 막혔을 때, scroll 리스너로 만든 진행 막대에서 보이는 증상은?",
    choices: [
      "페이지 스크롤 자체가 완전히 멈춘다",
      "페이지는 내려가는데 막대가 뒤늦게 한 번에 따라온다",
      "막대가 거꾸로 줄어든다",
      "아무 차이가 없다. 리스너도 합성 스레드에서 돈다",
    ],
    answer: 1,
    explanation:
      "크로미움에서 스크롤은 합성 스레드가 처리하니 페이지는 계속 내려간다. 리스너는 메인 스레드에서 돌기 때문에 막힌 동안 막대 값을 못 바꾸고 나중에 건너뛴다. scroll() 타임라인으로 transform을 움직이면 합성 스레드에서 같은 프레임에 끝난다.",
    anchor: "스크롤-이벤트가-무거워지는-길",
  },
  {
    id: "scroll-patterns-overview-5",
    post: "scroll-patterns-overview",
    question: "휠 한 칸에 화면 하나씩 넘기고 싶다. 스크롤 재킹 대신 권하는 방법은?",
    choices: [
      "wheel 리스너에서 preventDefault()를 부르고 scrollTo로 옮긴다",
      "touchmove를 passive: false로 막고 직접 위치를 계산한다",
      "body에 overflow: hidden을 주고 transform으로 섹션을 옮긴다",
      "scroll-snap-type: y mandatory로 브라우저 스크롤은 그대로 두고 끝 자리만 정한다",
    ],
    answer: 3,
    explanation:
      "스크롤 재킹은 관성, 키보드 스크롤, 화면 확대, 페이지 내 찾기를 깨뜨리고 리스너가 passive일 수 없어 스크롤이 메인 스레드에 묶인다. scroll snap은 브라우저가 스크롤을 그대로 처리하면서 멈출 자리만 정하니 키보드도 칸 단위로 움직인다.",
    anchor: "스크롤이-사람을-괴롭힐-때",
  },
  {
    id: "scroll-patterns-overview-6",
    post: "scroll-patterns-overview",
    question: "prefers-reduced-motion: reduce일 때 끄지 않고 그대로 둬도 되는 패턴은?",
    choices: ["패럴랙스", "zoom on scroll", "sticky 머리글", "세로 스크롤로 움직이는 가로 트랙"],
    answer: 2,
    explanation:
      "sticky는 자리를 정할 뿐 움직임을 만들지 않는다. 패럴랙스와 확대, 가로 트랙은 입력보다 크거나 다른 방향으로 화면이 움직여 전정 장애가 있는 사람에게 어지럼증을 일으킬 수 있으니 끄고 최종 모습만 보여 준다.",
    anchor: "스크롤이-사람을-괴롭힐-때",
  },
  {
    id: "scroll-patterns-overview-7",
    post: "scroll-patterns-overview",
    question: "아이폰에서만 패럴랙스 배경이 움직이지 않는다. 먼저 의심할 것은?",
    choices: [
      "background-attachment: fixed로 만들었다",
      "IntersectionObserver의 threshold가 너무 크다",
      "scroll-snap-type이 proximity다",
      "배경 이미지가 WebP다",
    ],
    answer: 0,
    explanation:
      "iOS 사파리는 오랫동안 background-attachment: fixed를 scroll처럼 처리해 왔다. 배경을 별도 층으로 빼서 transform으로 움직이면 기기와 상관없이 동작한다.",
    anchor: "증상에서-거꾸로-찾아가기",
  },
];
