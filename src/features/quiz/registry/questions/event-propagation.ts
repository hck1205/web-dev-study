import type { QuizQuestion } from "../types";

export const EVENT_PROPAGATION: QuizQuestion[] = [
  {
    id: "event-propagation-1",
    post: "event-propagation",
    question:
      "버튼의 click 리스너가 메뉴를 열고 document.addEventListener(\"click\", close)를 등록했다. 버튼을 한 번 누르면 어떻게 되나?",
    choices: [
      "메뉴가 열린 채로 있다. 새 리스너는 다음 클릭부터 불린다",
      "메뉴가 열리자마자 닫힌다. 같은 클릭이 버블 단계에서 document에 닿을 때 새 리스너가 이미 등록되어 있다",
      "에러가 난다. 디스패치 중에는 리스너를 추가할 수 없다",
      "메뉴가 두 번 열린다",
    ],
    answer: 1,
    explanation:
      "이벤트의 길은 디스패치 시작 때 정해지지만 각 지점의 리스너 목록은 이벤트가 그 지점에 닿을 때 읽는다. 그래서 방금 단 document 리스너가 같은 클릭을 받아 메뉴를 닫는다. 리스너에서 menu.contains(e.target)로 안쪽 클릭을 걸러 고친다.",
    anchor: "클릭-하나가-내려갔다가-올라온다",
  },
  {
    id: "event-propagation-2",
    post: "event-propagation",
    question: "div#card에 단 click 리스너에서, 카드 안 버튼의 아이콘(span)을 눌렀을 때 e.target과 e.currentTarget은?",
    choices: [
      "둘 다 div#card",
      "target은 button, currentTarget은 span",
      "target은 span, currentTarget은 div#card",
      "target은 div#card, currentTarget은 span",
    ],
    answer: 2,
    explanation:
      "target은 이벤트가 실제로 일어난 가장 안쪽 요소이고 currentTarget은 지금 리스너가 달린 요소다. 그래서 아이콘을 누르면 target이 span이 된다. currentTarget은 디스패치가 끝나면 null로 비워진다.",
    anchor: "target과-currenttarget",
  },
  {
    id: "event-propagation-3",
    post: "event-propagation",
    question: "링크의 click 리스너에서 e.preventDefault()만 불렀다. document에 단 click 리스너는?",
    choices: [
      "불린다. preventDefault는 기본 동작만 막고 전파는 막지 않는다",
      "불리지 않는다. preventDefault가 전파도 함께 막는다",
      "캡처 리스너만 불린다",
      "링크가 이동한 뒤에 불린다",
    ],
    answer: 0,
    explanation:
      "preventDefault는 링크 이동 같은 기본 동작을 막을 뿐 이벤트는 계속 위로 올라간다. 실제로 document 리스너가 불렸고 주소는 그대로였다. 반대로 stopPropagation만 부르면 전파는 멈추지만 링크는 이동한다.",
    anchor: "막는-방법은-세-가지이고-막는-대상이-다르다",
  },
  {
    id: "event-propagation-4",
    post: "event-propagation",
    question: "같은 버튼에 리스너 A, B가 차례로 있고 A가 stopPropagation()을 부른다. 부모 div의 리스너 C까지 포함해 불리는 것은?",
    choices: ["A만", "A와 C", "A, B, C 모두", "A와 B"],
    answer: 3,
    explanation:
      "stopPropagation은 다음 지점으로 가는 것만 막고, 지금 지점에 달린 나머지 리스너는 끝까지 부른다. 그래서 B는 불리고 부모의 C는 불리지 않는다. B까지 막으려면 stopImmediatePropagation을 쓴다.",
    anchor: "막는-방법은-세-가지이고-막는-대상이-다르다",
  },
  {
    id: "event-propagation-5",
    post: "event-propagation",
    question: "폼 안의 입력창들에 포커스가 들어올 때 부모 form 하나에서 알고 싶다. 가장 알맞은 것은?",
    choices: [
      "form에 focus 리스너를 일반(버블)으로 단다",
      "form에 focusin 리스너를 단다",
      "form에 mouseenter 리스너를 단다",
      "입력창마다 blur 리스너를 단다",
    ],
    answer: 1,
    explanation:
      "focus는 버블링되지 않아 부모의 일반 리스너에 닿지 않는다. 올라가는 짝인 focusin을 쓰면 부모에서 받을 수 있다. focus를 캡처로 등록하는 방법도 되지만 이유가 덜 드러난다.",
    anchor: "거품을-타지-않는-이벤트",
  },
  {
    id: "event-propagation-6",
    post: "event-propagation",
    question: "크롬에서 document.addEventListener(\"wheel\", e => e.preventDefault())를 옵션 없이 달았다. 휠을 굴리면?",
    choices: [
      "스크롤이 막힌다",
      "에러가 나서 리스너가 지워진다",
      "document의 wheel 리스너는 기본으로 passive로 취급되어 preventDefault가 무시되고 스크롤된다",
      "리스너가 아예 불리지 않는다",
    ],
    answer: 2,
    explanation:
      "크롬 계열은 window, document, body의 wheel과 터치 리스너를 기본으로 passive로 본다. 그래서 preventDefault가 경고와 함께 무시되고 페이지가 스크롤됐다. 정말 막아야 하면 해당 요소에 passive: false를 명시하거나 CSS touch-action, overscroll-behavior를 쓴다.",
    anchor: "passive-리스너가-스크롤을-지킨다",
  },
  {
    id: "event-propagation-7",
    post: "event-propagation",
    question:
      "React에서 button에 ref로 네이티브 click 리스너를, 부모 div에 onClick을 달았다. 버튼을 누르면 어느 쪽이 먼저 불리나?",
    choices: [
      "네이티브 리스너. React 핸들러는 이벤트가 루트에 닿은 뒤 불린다",
      "부모 div의 onClick. React가 항상 먼저다",
      "둘이 동시에 불린다",
      "등록한 순서에 따라 매번 다르다",
    ],
    answer: 0,
    explanation:
      "React 17부터는 루트 컨테이너에 리스너를 달고 거기서 컴포넌트 핸들러를 부른다. 이벤트가 버튼에서 루트까지 올라오는 동안 버튼의 네이티브 리스너가 먼저 불린다. 그래서 React 핸들러의 stopPropagation으로는 이 리스너를 막을 수 없다.",
    anchor: "react가-이벤트를-받는-자리",
  },
];
