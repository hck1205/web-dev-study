import type { QuizQuestion } from "../types";

export const ARIA_KEYBOARD_FOCUS: QuizQuestion[] = [
  {
    id: "aria-keyboard-focus-1",
    post: "aria-keyboard-focus",
    question: "탭 메뉴에 role=\"tab\", aria-selected를 모두 붙였는데 방향키가 동작하지 않는다. 왜 그런가?",
    choices: [
      "aria-controls가 빠져서 브라우저가 방향키를 막았기 때문에",
      "ARIA는 접근성 트리에 의미만 적고 키보드 동작은 만들어 주지 않기 때문에",
      "role=\"tab\"은 button 요소에만 붙일 수 있기 때문에",
      "tablist에 tabindex=\"0\"이 없기 때문에",
    ],
    answer: 1,
    explanation:
      "ARIA는 역할과 상태를 보조 기술에 알릴 뿐 포커스 이동이나 키 처리를 하지 않는다. role=\"tab\"을 쓰면 방향키로 옮겨 다닐 수 있다고 약속한 것이니, 로빙 tabindex 같은 키보드 처리를 직접 만들어야 한다.",
    anchor: "탭-메뉴에-aria를-다-붙였는데",
  },
  {
    id: "aria-keyboard-focus-2",
    post: "aria-keyboard-focus",
    question: "input에 label, aria-label, aria-labelledby를 모두 붙였다. 접근 가능한 이름은 어느 것에서 오나?",
    choices: [
      "aria-labelledby가 가리키는 요소의 글자",
      "label 요소의 글자",
      "aria-label의 문자열",
      "셋을 모두 이어 붙인 글자",
    ],
    answer: 0,
    explanation:
      "이름 계산 규칙은 aria-labelledby, aria-label, 요소 자체의 이름(label 등), title·placeholder 순으로 먼저 있는 것을 쓴다. 실험에서도 label과 aria-label은 무시되고 aria-labelledby의 두 글자가 이어져 이름이 됐다.",
    anchor: "이름을-붙이는-세-가지-방법",
  },
  {
    id: "aria-keyboard-focus-3",
    post: "aria-keyboard-focus",
    question: "장바구니에 담을 때 {show && <div role=\"status\">담았다</div>}로 알렸는데 스크린리더가 읽지 않는다. 가장 그럴듯한 원인은?",
    choices: [
      "role=\"status\"는 assertive라서 다른 소리에 묻혔다",
      "라이브 리전은 visually-hidden 클래스가 있어야만 동작한다",
      "라이브 리전을 메시지와 함께 새로 마운트해서 변화로 감지되지 않았다",
      "status는 폼 안에서만 동작한다",
    ],
    answer: 2,
    explanation:
      "스크린리더는 이미 있는 라이브 리전의 내용이 바뀌는 것을 듣는다. 영역과 메시지를 함께 마운트하면 많은 스크린리더가 읽지 않으니, 영역은 처음부터 비워 두고 글자만 바꾼다. role=\"status\"는 polite에 해당한다.",
    anchor: "화면이-바뀌었다고-알려-주기",
  },
  {
    id: "aria-keyboard-focus-4",
    post: "aria-keyboard-focus",
    question: "검색창에 tabindex=\"1\", 맨 아래 도움말 링크에 tabindex=\"2\"를 줬다. Tab 순서는 어떻게 되나?",
    choices: [
      "DOM 순서대로이고 양수 값은 무시된다",
      "검색창, 도움말 링크가 먼저 오고 나머지가 DOM 순서로 뒤따른다",
      "검색창만 먼저 오고 도움말은 DOM 순서 자리에 남는다",
      "양수 tabindex 요소는 Tab 순서에서 빠진다",
    ],
    answer: 1,
    explanation:
      "양수 tabindex 요소가 숫자 순서대로 먼저 오고, 0과 원래 포커스를 받는 요소가 DOM 순서로 그 뒤에 온다. 그래서 페이지 맨 아래 링크가 맨 위 홈 링크보다 먼저 포커스를 받는다. 순서를 바꾸려면 DOM 순서를 바꾼다.",
    anchor: "tabindex-세-가지-값",
  },
  {
    id: "aria-keyboard-focus-5",
    post: "aria-keyboard-focus",
    question: "dialog를 showModal()로 열었을 때 브라우저가 해 주지 않는 것은?",
    choices: [
      "바깥 페이지를 inert로 만들기",
      "Esc 키로 닫기",
      "닫힌 뒤 열기 전 요소로 포커스 돌려주기",
      "대화 상자 제목을 접근 가능한 이름으로 자동 연결하기",
    ],
    answer: 3,
    explanation:
      "showModal()은 바깥을 잠그고, 안쪽으로 포커스를 옮기고, Esc로 닫고, 닫히면 포커스를 돌려준다. 대화 상자의 이름은 aria-labelledby로 제목을 직접 이어야 한다. 그래서 예제도 dialog에 aria-labelledby를 붙였다.",
    anchor: "모달은-바깥을-잠근다",
  },
  {
    id: "aria-keyboard-focus-6",
    post: "aria-keyboard-focus",
    question: "버튼 스무 개짜리 툴바를 로빙 tabindex로 만들었다. 얻는 이점으로 맞는 것은?",
    choices: [
      "Tab 한 번에 툴바를 지나가고, 돌아오면 마지막에 고른 버튼으로 온다",
      "모든 버튼이 tabindex=\"0\"이 되어 Tab으로 하나씩 갈 수 있다",
      "포커스가 컨테이너에 머물러 입력을 계속할 수 있다",
      "스크린리더가 툴바를 무시해서 소음이 줄어든다",
    ],
    answer: 0,
    explanation:
      "로빙 tabindex는 고른 항목 하나만 tabindex=\"0\", 나머지는 -1로 두고 방향키로 0을 옮긴다. 그래서 묶음 전체가 Tab 순서의 한 칸이 된다. 포커스를 컨테이너에 두는 건 aria-activedescendant 방식의 특징이다.",
    anchor: "방향키로-옮겨-다니는-위젯",
  },
  {
    id: "aria-keyboard-focus-7",
    post: "aria-keyboard-focus",
    question: "포커스 링을 box-shadow로만 그렸더니 윈도우 고대비 모드에서 포커스가 보이지 않는다. 가장 간단한 보완은?",
    choices: [
      "box-shadow를 더 진하게 한다",
      ":focus-visible을 :focus로 바꾼다",
      "outline: 2px solid transparent를 함께 둔다",
      "tabindex=\"-1\"을 붙인다",
    ],
    answer: 2,
    explanation:
      "forced-colors 모드는 box-shadow를 지우지만 outline은 시스템 색으로 다시 칠한다. 투명 outline을 함께 두면 평소에는 보이지 않고 고대비 모드에서만 나타난다. 선택자를 바꾸거나 그림자를 진하게 해도 고대비 모드에서는 여전히 지워진다.",
    anchor: "포커스가-보여야-한다",
  },
];
