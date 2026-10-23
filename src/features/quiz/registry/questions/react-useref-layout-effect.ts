import type { QuizQuestion } from "../types";

export const REACT_USEREF_LAYOUT_EFFECT: QuizQuestion[] = [
  {
    id: "react-useref-layout-effect-1",
    post: "react-useref-layout-effect",
    question: "스톱워치 버튼에서 '돌고 있는지'를 ref에 담고 렌더링 중에 읽어 onClick을 고르게 했다. 어떤 문제가 생기나?",
    choices: [
      "ref는 렌더링 사이에 초기화되어 항상 false가 된다",
      "ref를 바꿔도 다시 렌더링되지 않아 버튼이 낡은 핸들러를 들고 있고, 빠르게 두 번 누르면 interval이 두 개 생길 수 있다",
      "ref를 바꿀 때마다 다시 렌더링되어 무한 루프가 생긴다",
      "React가 ref 변경을 배칭해서 다음 프레임에 반영한다",
    ],
    answer: 1,
    explanation:
      "ref는 바꿔도 React에 알리지 않으니 화면은 다른 이유로 렌더링될 때까지 이전 값으로 그려진 채 남는다. 화면이나 동작을 결정하는 값은 state에 두고, 정리할 때만 필요한 interval id는 ref에 둔다. ref가 렌더링 사이에 초기화된다는 보기는 지역 변수의 성질이다.",
    anchor: "state로-둘까-ref로-둘까",
  },
  {
    id: "react-useref-layout-effect-2",
    post: "react-useref-layout-effect",
    question: "렌더링 중에 renders.current += 1로 횟수를 센 컴포넌트가 StrictMode 개발 모드에서 2, 4, 6으로 뛴다. 이 현상이 알려 주는 진짜 문제는?",
    choices: [
      "StrictMode의 버그라서 프로덕션에서는 신경 쓸 필요가 없다",
      "useRef가 StrictMode에서 객체를 두 개 만든다",
      "렌더링이 순수하지 않아서, 버려지는 렌더링이 생기는 동시성 렌더링에서도 값이 어긋난다",
      "ref는 숫자를 담을 수 없고 DOM 요소만 담아야 한다",
    ],
    answer: 2,
    explanation:
      "StrictMode는 순수한지 확인하려고 컴포넌트를 두 번 부르고, 렌더링 중에 ref를 바꾸는 코드는 두 번 바뀐다. 동시성 렌더링에서도 React가 렌더링을 버리고 다시 할 수 있으니 같은 어긋남이 프로덕션에서 생긴다. ref 객체는 하나이고 무엇이든 담을 수 있다.",
    anchor: "렌더링-중에는-ref를-만지지-않는다",
  },
  {
    id: "react-useref-layout-effect-3",
    post: "react-useref-layout-effect",
    question: "툴팁 크기를 useEffect에서 재서 위치를 고치면 느린 휴대폰에서 한 번 번쩍인다. useLayoutEffect로 바꾸면 사라지는 이유는?",
    choices: [
      "useLayoutEffect는 렌더링 전에 실행되어 DOM 없이도 크기를 안다",
      "useLayoutEffect는 비동기로 실행되어 메인 스레드를 막지 않는다",
      "useLayoutEffect는 브라우저가 다음 프레임을 건너뛰게 만든다",
      "DOM을 바꾼 직후 그리기 전에 동기로 실행되고, 안에서 바꾼 state도 첫 페인트 전에 반영된다",
    ],
    answer: 3,
    explanation:
      "layout effect는 커밋 직후, 페인트 전에 돈다. 여기서 setState를 하면 React가 그 자리에서 다시 렌더링하고 커밋해서 브라우저는 고친 위치만 그린다. 렌더링 전에 실행되는 effect는 없고, 동기라서 오히려 메인 스레드를 막는다.",
    anchor: "그리기-전에-한-번-더-uselayouteffect",
  },
  {
    id: "react-useref-layout-effect-4",
    post: "react-useref-layout-effect",
    question: "목록의 줄마다 useLayoutEffect로 높이를 재고 스타일을 고쳤더니 화면이 늦게 뜬다. Performance 패널에서 보일 가능성이 큰 것은?",
    choices: [
      "긴 작업 안의 Layout 막대와 Forced reflow 경고",
      "네트워크 탭의 대기 중인 요청",
      "가비지 컬렉션 막대만 길게 보인다",
      "Paint가 0ms로 찍힌다",
    ],
    answer: 0,
    explanation:
      "getBoundingClientRect 같은 측정은 미뤄 둔 레이아웃 계산을 그 자리에서 끝내게 하고, 측정과 변경을 번갈아 하면 레이아웃을 여러 번 다시 한다. 그래서 긴 작업 안에 Layout과 Forced reflow가 찍힌다. layout effect는 그리기를 막으니 그 시간만큼 첫 화면이 늦다.",
    anchor: "그리기를-붙잡는-값",
  },
  {
    id: "react-useref-layout-effect-5",
    post: "react-useref-layout-effect",
    question: "React 19에서 ref 콜백을 인라인 화살표로 쓰고 그 안에서 ResizeObserver를 만들어 정리 함수로 끊었다. 렌더링이 반복되면?",
    choices: [
      "React 19는 ref 콜백을 마운트 때 한 번만 부른다",
      "렌더링마다 이전 콜백의 정리가 불리고 새 콜백이 다시 불려 관찰자를 매번 새로 만든다",
      "정리 함수를 돌려주면 React가 콜백을 자동으로 고정해 준다",
      "정리 함수는 무시되고 null로만 다시 불린다",
    ],
    answer: 1,
    explanation:
      "콜백 참조가 바뀌면 React는 이전 콜백을 떼고 새 콜백을 붙인다. 실험에서도 인라인 콜백은 attach와 cleanup이 렌더링마다 반복됐다. 무거운 일을 하는 ref 콜백은 useCallback으로 고정하거나 컴포넌트 밖 함수로 뺀다.",
    anchor: "react-19에서-바뀐-두-가지",
  },
  {
    id: "react-useref-layout-effect-6",
    post: "react-useref-layout-effect",
    question: "메시지를 추가하는 setState 바로 다음 줄에서 마지막 li로 스크롤했더니 한 칸 모자라게 스크롤된다. 가장 직접적인 해결은?",
    choices: [
      "setState를 await로 기다린다",
      "스크롤 코드를 useMemo 안으로 옮긴다",
      "업데이트를 flushSync로 감싸서 커밋까지 끝난 뒤 DOM을 읽는다",
      "ref를 state로 바꾼다",
    ],
    answer: 2,
    explanation:
      "setState는 렌더링을 예약할 뿐이라 다음 줄의 DOM에는 새 메시지가 없다. flushSync로 감싸면 그 자리에서 렌더링하고 커밋한 뒤 돌아온다. setState는 Promise를 돌려주지 않아서 await로 기다릴 수 없다.",
    anchor: "핸들러-안에서-바로-dom이-필요할-때",
  },
];
