import type { QuizQuestion } from "../types";

export const UI_OVERLAYS_TOOLTIP_DROPDOWN_TOAST: QuizQuestion[] = [
  {
    id: "ui-overlays-tooltip-dropdown-toast-1",
    post: "ui-overlays-tooltip-dropdown-toast",
    question: "툴팁을 연 채로 패널을 스크롤하면 버튼은 올라가는데 툴팁은 제자리에 남는다. 가장 직접적인 원인은?",
    choices: [
      "툴팁의 z-index가 너무 낮아서",
      "위치를 열 때 한 번만 계산하고 스크롤·크기 변화 때 다시 계산하지 않아서",
      "툴팁에 role=\"tooltip\"을 주지 않아서",
      "flip 미들웨어를 shift보다 뒤에 두어서",
    ],
    answer: 1,
    explanation:
      "떠 있는 요소의 좌표는 기준 요소가 움직일 때마다 다시 계산해야 한다. Floating UI의 `autoUpdate`나 브라우저가 레이아웃 단계에서 맞추는 CSS 앵커 포지셔닝이 이 일을 한다.",
    anchor: "기준-요소-옆에-붙이는-계산",
  },
  {
    id: "ui-overlays-tooltip-dropdown-toast-2",
    post: "ui-overlays-tooltip-dropdown-toast",
    question: "Floating UI의 `autoUpdate`가 돌려주는 정리 함수를 툴팁을 닫을 때 부르지 않으면?",
    choices: [
      "툴팁이 다시 열리지 않는다",
      "다음에 열 때 placement가 항상 bottom으로 고정된다",
      "닫힌 뒤에도 스크롤마다 위치 계산이 돌고 리스너가 쌓여 스크롤이 무거워진다",
      "브라우저가 자동으로 정리하므로 아무 일도 없다",
    ],
    answer: 2,
    explanation:
      "`autoUpdate`는 스크롤, 크기 변화 리스너를 걸어 계속 위치를 맞춘다. 정리하지 않으면 보이지 않는 툴팁을 위해 계산이 계속 돌고, 목록마다 툴팁이 있는 화면에서는 리스너가 쌓인다.",
    anchor: "floating-ui로-위치를-계속-맞춘다",
  },
  {
    id: "ui-overlays-tooltip-dropdown-toast-3",
    post: "ui-overlays-tooltip-dropdown-toast",
    question: "툴팁 안에 \"자세히 보기\" 링크를 넣으면 안 되는 이유로 가장 알맞은 것은?",
    choices: [
      "툴팁은 기준 요소에서 포커스가 떠나면 닫혀 키보드로는 링크에 닿을 수 없고, 스크린리더는 설명 문자열로만 읽어서",
      "role=\"tooltip\" 안에서는 a 요소가 렌더링되지 않아서",
      "링크가 있으면 툴팁이 top layer에 올라가지 않아서",
      "툴팁 글자가 16자를 넘으면 WCAG를 어겨서",
    ],
    answer: 0,
    explanation:
      "툴팁 안 링크로 가려면 포커스가 기준 요소를 떠나야 하는데, 그 순간 툴팁이 닫힌다. 누를 것이 필요하면 눌러서 여는 토글팁(popover)이나 다이얼로그를 쓴다.",
    anchor: "툴팁은-보조-설명이다",
  },
  {
    id: "ui-overlays-tooltip-dropdown-toast-4",
    post: "ui-overlays-tooltip-dropdown-toast",
    question: "마우스가 기준 요소를 벗어나는 순간 툴팁을 바로 닫는 구현은 WCAG 1.4.13의 어떤 조건을 어기기 쉬운가?",
    choices: [
      "닫을 수 있어야 한다(dismissible)",
      "대비가 4.5:1 이상이어야 한다",
      "계속 남아 있어야 한다(persistent)",
      "위에 머물 수 있어야 한다(hoverable)",
    ],
    answer: 3,
    explanation:
      "확대 사용자는 마우스를 툴팁 위로 옮겨 나머지를 읽는다. 기준 요소를 벗어나자마자 닫으면 툴팁으로 가는 길에 사라지니, 닫기 지연이나 이동 경로 허용 영역을 둔다.",
    anchor: "닫을-수-있고-위에-머물-수-있고-저절로-사라지지-않게",
  },
  {
    id: "ui-overlays-tooltip-dropdown-toast-5",
    post: "ui-overlays-tooltip-dropdown-toast",
    question: "상단 사이트 내비게이션의 링크 목록 드롭다운에 가장 알맞은 구조는?",
    choices: [
      "role=\"menu\"와 role=\"menuitem\"으로 만든 메뉴 버튼",
      "aria-expanded가 있는 버튼과 평범한 링크 목록(디스클로저)",
      "네이티브 select에 링크 주소를 option 값으로 넣기",
      "aria-activedescendant를 쓰는 콤보박스",
    ],
    answer: 1,
    explanation:
      "menu 역할은 실행할 동작 목록용이라 스크린리더가 앱 메뉴처럼 다루고 화살표 이동을 기대하게 만든다. 링크를 펼쳐 보이는 내비게이션은 디스클로저 패턴이 맞다.",
    anchor: "메뉴-버튼-select-콤보박스-중-무엇인가",
  },
  {
    id: "ui-overlays-tooltip-dropdown-toast-6",
    post: "ui-overlays-tooltip-dropdown-toast",
    question: "\"저장했다\" 토스트를 띄울 때 포커스를 토스트로 옮기지 않고 role=\"status\"로 알리는 이유는?",
    choices: [
      "role=\"status\"가 assertive라서 더 빨리 읽히기 때문",
      "포커스를 옮기면 토스트가 top layer에서 빠지기 때문",
      "사용자가 하던 일을 빼앗지 않으면서 스크린리더에는 하던 말이 끝난 뒤 알리기 위해",
      "토스트는 tabindex를 가질 수 없기 때문",
    ],
    answer: 2,
    explanation:
      "포커스를 뺏으면 이어서 친 글자가 엉뚱한 곳으로 가고 원래 자리를 다시 찾아야 한다. role=\"status\"는 polite라 하던 말을 마친 뒤 읽고, 포커스는 그대로 둔다. WCAG 4.1.3이 이 방식을 요구한다.",
    anchor: "토스트는-포커스를-뺏지-않는다",
  },
  {
    id: "ui-overlays-tooltip-dropdown-toast-7",
    post: "ui-overlays-tooltip-dropdown-toast",
    question: "포털로 body 끝에 그린 드롭다운 메뉴에서 직접 챙겨야 하는 것은?",
    choices: [
      "열 때 포커스를 메뉴 안으로 옮기고, 닫을 때 버튼으로 되돌리기",
      "aria-controls id를 포털 안에서는 쓸 수 없으니 지우기",
      "메뉴 항목마다 tabindex를 양수로 주어 순서를 맞추기",
      "포털 안에서는 React 이벤트가 버블링하지 않으니 이벤트를 직접 위임하기",
    ],
    answer: 0,
    explanation:
      "Tab 순서는 DOM 순서라 포털 메뉴는 문서 끝에 있는 셈이다. 포커스 이동과 복귀를 직접 하지 않으면 버튼 다음 Tab이 메뉴를 건너뛰고 메뉴 안 Tab은 문서 끝으로 튄다. id 참조는 그대로 이어지고 React 이벤트는 React 트리로 버블링한다.",
    anchor: "포털로-빼면-생기는-접근성-문제",
  },
];
