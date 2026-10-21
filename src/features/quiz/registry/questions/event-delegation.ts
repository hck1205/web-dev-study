import type { QuizQuestion } from "../types";

export const EVENT_DELEGATION: QuizQuestion[] = [
  {
    id: "event-delegation-1",
    post: "event-delegation",
    question:
      "페이지가 뜰 때 querySelectorAll(\".del\")로 찾은 버튼마다 리스너를 달았다. \"더 보기\"로 붙은 줄의 삭제 버튼을 누르면?",
    choices: [
      "정상으로 지워진다. 같은 클래스라 리스너가 공유된다",
      "에러가 난다",
      "아무 일도 없다. 리스너를 달 때 그 버튼은 없었다",
      "두 번 지워진다",
    ],
    answer: 2,
    explanation:
      "querySelectorAll은 그 순간 있던 요소만 찾으니 나중에 붙은 버튼에는 리스너가 없다. 클래스 이름이 같다고 리스너가 따라붙지는 않는다. 오래 사는 부모에 리스너 하나를 두는 위임으로 고친다.",
    anchor: "리스너를-부모-하나에-단다",
  },
  {
    id: "event-delegation-2",
    post: "event-delegation",
    question: "위임 핸들러에서 if (e.target.matches(\"button\"))로 검사했더니 가끔 삭제가 안 된다. 가장 그럴듯한 원인은?",
    choices: [
      "버튼 안의 아이콘이나 span을 누르면 target이 그 요소가 된다",
      "matches는 버블링 중에 쓸 수 없다",
      "버튼이 너무 많아 리스너가 한계를 넘었다",
      "click 대신 mousedown을 써야 한다",
    ],
    answer: 0,
    explanation:
      "target은 실제로 눌린 가장 안쪽 요소라서 아이콘을 누르면 svg가 된다. 그래서 matches(\"button\")이 false가 된다. 자기 자신부터 조상으로 올라가며 찾는 closest를 쓰면 어디를 눌러도 버튼을 얻는다.",
    anchor: "target이-버튼이-아니라-아이콘일-때",
  },
  {
    id: "event-delegation-3",
    post: "event-delegation",
    question:
      "data-action=\"close-panel\"이 붙은 section 안에 목록이 있다. 목록의 빈 곳을 누르자 패널이 닫혔다. 위임 핸들러에 무엇이 빠졌나?",
    choices: [
      "e.preventDefault()",
      "찾은 요소가 목록 안에 있는지 보는 list.contains(found) 검사",
      "e.stopPropagation()",
      "passive: true 옵션",
    ],
    answer: 1,
    explanation:
      "closest는 리스너가 달린 요소에서 멈추지 않고 문서 끝까지 올라가 바깥 section의 data-action을 찾는다. 그래서 찾은 요소가 내 컨테이너 안인지 contains로 확인해야 한다. stopPropagation은 다른 위임 코드까지 망가뜨린다.",
    anchor: "target이-버튼이-아니라-아이콘일-때",
  },
  {
    id: "event-delegation-4",
    post: "event-delegation",
    question: "폼 안 입력칸들의 포커스를 form 하나에서 위임으로 받으려 한다. 어떤 이벤트를 듣나?",
    choices: ["focus", "blur", "mouseenter", "focusin"],
    answer: 3,
    explanation:
      "focus와 blur는 버블링되지 않아 부모의 리스너에 오지 않는다. 같은 일을 하면서 올라가는 focusin과 focusout을 쓴다. mouseenter도 버블링되지 않는다.",
    anchor: "위임이-통하지-않는-이벤트",
  },
  {
    id: "event-delegation-5",
    post: "event-delegation",
    question: "목록에서 mouseover로 줄 강조를 위임했더니 한 줄 안에서 움직여도 강조가 계속 다시 시작된다. 고치는 방법은?",
    choices: [
      "mouseover 대신 mouseenter를 목록에 단다",
      "e.relatedTarget이 같은 줄 안이면 무시한다",
      "e.stopImmediatePropagation()을 부른다",
      "리스너를 document로 옮긴다",
    ],
    answer: 1,
    explanation:
      "mouseover는 줄 안의 자식 요소를 옮겨 다닐 때마다 다시 일어난다. 실제로 열 번 일어났지만 줄에 새로 들어간 건 두 번이었다. relatedTarget이 같은 줄 안이면 건너뛰면 된다. mouseenter는 버블링되지 않아 위임에 못 쓴다.",
    anchor: "위임이-통하지-않는-이벤트",
  },
  {
    id: "event-delegation-6",
    post: "event-delegation",
    question: "React로 1만 줄 목록을 그리고 줄마다 onClick을 달았다. DOM에 실제로 달리는 click 리스너는?",
    choices: [
      "줄마다 하나씩 1만 개",
      "React 루트 요소에 click 종류별 리스너 하나",
      "document에 1만 개",
      "리스너 없이 매 프레임 마우스 위치를 검사한다",
    ],
    answer: 1,
    explanation:
      "React 17부터는 루트 요소에 이벤트 종류별 리스너를 하나씩 달고 거기서 컴포넌트 핸들러를 찾아 부른다. 이미 위임 구조라서 목록이 느리다면 리스너보다 렌더링 비용을 본다. 16까지는 그 자리가 document였다.",
    anchor: "react는-이미-위임하고-있다",
  },
];
