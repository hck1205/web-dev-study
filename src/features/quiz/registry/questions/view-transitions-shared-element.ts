import type { QuizQuestion } from "../types";

export const VIEW_TRANSITIONS_SHARED_ELEMENT: QuizQuestion[] = [
  {
    id: "view-transitions-shared-element-1",
    post: "view-transitions-shared-element",
    question: "FLIP에서 Invert 단계가 하는 일은?",
    choices: [
      "레이아웃을 원래대로 되돌린다",
      "이미 바뀐 레이아웃의 요소를 transform으로 옛 위치·크기처럼 보이게 되돌린다",
      "요소를 복제해 옛 자리에 둔다",
      "애니메이션 방향을 뒤집어 역재생한다",
    ],
    answer: 1,
    explanation:
      "레이아웃은 이미 새 상태(Last)로 바뀌었고, Invert는 transform만으로 옛 모습(First)처럼 보이게 한다. 크로미움에서 재 보면 레이아웃은 316 × 220인데 화면의 상자는 100 × 70으로 first와 같다. 그다음 Play에서 transform을 풀며 움직인다.",
    anchor: "flip-처음과-끝만-재고-사이를-transform으로-메운다",
  },
  {
    id: "view-transitions-shared-element-2",
    post: "view-transitions-shared-element",
    question: "React에서 FLIP의 Last를 재고 Invert를 거는 코드를 useEffect에 두었더니 화면이 한 번 깜빡인다. 왜 그런가?",
    choices: [
      "useEffect는 서버에서만 실행되기 때문이다",
      "useEffect는 브라우저가 화면을 그린 뒤에 실행되어 펼친 상태가 한 프레임 보이기 때문이다",
      "getBoundingClientRect가 useEffect 안에서 0을 돌려주기 때문이다",
      "transform이 useEffect 안에서는 무시되기 때문이다",
    ],
    answer: 1,
    explanation:
      "Invert는 그리기 전에 끝나야 한다. useEffect는 페인트 뒤에 돌아서 새 레이아웃이 한 번 그려졌다가 되돌아가며 깜빡인다. DOM 변경 직후 그리기 전에 동기로 도는 useLayoutEffect에서 처리한다.",
    anchor: "flip-처음과-끝만-재고-사이를-transform으로-메운다",
  },
  {
    id: "view-transitions-shared-element-3",
    post: "view-transitions-shared-element",
    question: "목록의 모든 카드에 CSS로 `view-transition-name: hero`를 주고 전환을 시작했다. 크로미움에서 일어난 일은?",
    choices: [
      "첫 번째 카드만 이어진다",
      "모든 카드가 동시에 상세 사진으로 모인다",
      "ready가 InvalidStateError로 실패하고 애니메이션 없이 DOM만 바뀐다",
      "콜백도 실행되지 않아 화면이 그대로다",
    ],
    answer: 2,
    explanation:
      "같은 이름이 둘 이상이면 전환이 통째로 건너뛰어진다. ready는 InvalidStateError로 실패하지만 콜백은 실행되어 DOM은 바뀐다. 그래서 사용자는 툭 바뀐 화면만 보고 오류는 콘솔에만 남는다.",
    anchor: "이름이-겹치면-전환은-통째로-건너뛴다",
  },
  {
    id: "view-transitions-shared-element-4",
    post: "view-transitions-shared-element",
    question: "React 19.3의 `<ViewTransition name=\"hero\">`로 감쌌는데, 버튼의 onClick에서 그냥 setState를 하면 아무 전환도 일어나지 않았다. 고치는 방법은?",
    choices: [
      "setState를 startTransition 안에서 부른다",
      "useEffect 안에서 setState를 부른다",
      "name을 \"auto\"로 바꾼다",
      "ViewTransition을 두 겹으로 감싼다",
    ],
    answer: 0,
    explanation:
      "React의 ViewTransition은 startTransition, useDeferredValue, Action, Suspense 공개 같은 비동기 업데이트에서만 동작한다. 크로미움에서 확인하니 그냥 setState로는 startViewTransition이 불리지도 않았고, startTransition 안에서 바꾸자 hero group이 생겼다.",
    anchor: "react와-nextjs에서-쓰기",
  },
  {
    id: "view-transitions-shared-element-5",
    post: "view-transitions-shared-element",
    question: "움직임 줄이기 설정을 켠 사용자에게 View Transition은 어떻게 동작하나?",
    choices: [
      "브라우저가 자동으로 애니메이션을 끈다",
      "브라우저가 자동으로 크로스페이드로 바꾼다",
      "그대로 움직이므로 prefers-reduced-motion에서 의사 요소의 애니메이션을 직접 꺼야 한다",
      "전환 자체가 오류로 실패한다",
    ],
    answer: 2,
    explanation:
      "Playwright로 reduce를 흉내 내도 애니메이션 10개가 그대로 붙었다. 브라우저가 알아서 줄여 주지 않으니 미디어 쿼리 안에서 ::view-transition-group(*), old, new의 animation을 끄거나 짧은 크로스페이드로 바꾼다.",
    anchor: "움직임-줄이기-설정은-저절로-반영되지-않는다",
  },
  {
    id: "view-transitions-shared-element-6",
    post: "view-transitions-shared-element",
    question: "사용자가 빠르게 두 번 눌러 전환이 진행 중일 때 새 startViewTransition이 불렸다. 앞 전환은 어떻게 되나?",
    choices: [
      "앞 전환이 끝날 때까지 새 전환이 대기열에서 기다린다",
      "앞 전환의 ready가 AbortError로 실패하고 finished는 풀리며, 새 전환만 끝까지 간다",
      "두 전환이 동시에 겹쳐 재생된다",
      "새 전환이 InvalidStateError로 거부된다",
    ],
    answer: 1,
    explanation:
      "크로미움에서 재현하면 앞 전환은 'AbortError: Transition was skipped'로 건너뛰어지고 finished는 정상으로 풀린다. 뒤 전환만 재생된다. ready 거부를 잡지 않으면 처리되지 않은 Promise 오류가 콘솔에 쌓인다.",
    anchor: "이름이-겹치면-전환은-통째로-건너뛴다",
  },
  {
    id: "view-transitions-shared-element-7",
    post: "view-transitions-shared-element",
    question: "다른 HTML 페이지로 이동할 때(MPA) 공유 요소 전환을 붙이는 조건으로 맞는 것은?",
    choices: [
      "어느 사이트로 가든 링크에 view-transition 속성만 주면 된다",
      "같은 출처 이동이고, 두 페이지 모두 @view-transition { navigation: auto }를 켜고 같은 이름을 준다",
      "서비스 워커가 반드시 있어야 한다",
      "startViewTransition을 링크 클릭 핸들러에서 불러야 한다",
    ],
    answer: 1,
    explanation:
      "문서 간 전환은 같은 출처 내비게이션에서만 일어나고, 떠나는 페이지와 도착하는 페이지가 모두 @view-transition으로 켜야 한다. 크로미움에서 도착한 페이지의 pagereveal 이벤트에 viewTransition 객체가 들어 있는 것을 확인했다.",
    anchor: "페이지-이동에도-붙는-문서-간-전환",
  },
];
