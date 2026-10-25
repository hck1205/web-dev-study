import type { QuizQuestion } from "../types";

export const CORE_COMPONENT_API_DESIGN: QuizQuestion[] = [
  {
    id: "core-component-api-design-1",
    post: "core-component-api-design",
    question: "공용 Button 컴포넌트의 type 기본값을 \"button\"으로 두는 이유는?",
    choices: [
      "HTML button의 기본 type이 submit이라 폼 안에 둔 버튼이 누를 때마다 폼을 제출하기 때문에",
      "type=\"button\"이어야 키보드 포커스를 받기 때문에",
      "type을 적지 않으면 접근성 트리에서 역할이 사라지기 때문에",
      "type=\"submit\"은 React 19에서 지원하지 않기 때문에",
    ],
    answer: 0,
    explanation:
      "type을 적지 않은 button은 submit으로 동작해서, 폼 안의 '비밀번호 보기' 같은 버튼이 폼을 제출하는 버그가 생긴다. 쓰는 사람 대부분이 이 기본값을 모르니 시스템이 안전한 쪽을 기본으로 두고 제출 버튼만 명시하게 한다.",
    anchor: "버튼의-타입-기본값부터-정한다",
  },
  {
    id: "core-component-api-design-2",
    post: "core-component-api-design",
    question: "href 없이 onClick만 단 a 요소를 Chromium에서 확인했을 때 일어난 일은?",
    choices: [
      "링크로 보이지만 새 탭 열기만 안 된다",
      "버튼 역할로 자동 변환되었다",
      "탭 순서에 들어가지 않았고 접근성 트리에서 링크가 아닌 그냥 글자였다",
      "클릭 이벤트가 두 번 발생했다",
    ],
    answer: 2,
    explanation:
      "탭 순서에는 href가 있는 링크만 들어갔고, href 없는 쪽은 'text: 더 보기'로만 보였다. 키보드로 갈 수 없고 스크린 리더는 눌리는 것인지 모른다. 이동이면 a href, 동작이면 button을 쓴다.",
    anchor: "이동이면-링크-동작이면-버튼",
  },
  {
    id: "core-component-api-design-3",
    post: "core-component-api-design",
    question: "aria-disabled=\"true\"인 버튼을 쓸 때 컴포넌트가 직접 해야 하는 일은?",
    choices: [
      "tabindex=\"-1\"을 붙여 포커스를 빼야 한다",
      "브라우저가 클릭을 막아 주니 따로 할 일은 없다",
      "disabled 속성도 함께 붙여야 한다",
      "클릭과 Enter·Space를 직접 무시하고 흐린 스타일을 입혀야 한다",
    ],
    answer: 3,
    explanation:
      "aria-disabled는 보조 기술에 상태만 알리고 클릭을 막지 않는다. 실험에서도 클릭과 Enter가 그대로 들어왔다. 장점은 포커스를 받아 비활성 이유를 들려줄 수 있다는 것이고, disabled를 함께 붙이면 그 장점이 사라진다.",
    anchor: "누를-수-없을-때-이유를-숨기지-않는다",
  },
  {
    id: "core-component-api-design-4",
    post: "core-component-api-design",
    question: "로딩 중 글자를 같은 격자 칸에 남기고 visibility: hidden으로 숨겼더니 너비는 98px로 유지됐다. 접근성 트리에서는 어떤 문제가 보였나?",
    choices: [
      "버튼이 두 개로 보였다",
      "버튼의 이름이 사라졌다",
      "버튼 이름이 '…'로 바뀌었다",
      "역할이 button에서 generic으로 바뀌었다",
    ],
    answer: 1,
    explanation:
      "visibility: hidden은 요소를 접근성 트리에서도 빼서 이름을 만들던 글자가 없어진다. 같은 구조에서 opacity: 0으로 숨기면 너비 98px과 이름 '결제하기'가 모두 남았다. 이름이 '…'가 된 것은 글자를 바꿔 넣은 버튼이다.",
    anchor: "로딩-중에도-너비와-이름을-지킨다",
  },
  {
    id: "core-component-api-design-5",
    post: "core-component-api-design",
    question: "Avatar에서 img의 onError로 이니셜로 바꾸는 방식의 문제와 더 나은 방법은?",
    choices: [
      "깨진 이미지가 한 프레임 보였다가 바뀌므로, 이니셜을 먼저 그리고 이미지가 실제로 불러와졌을 때만 바꿔 끼운다",
      "onError가 호출되지 않으므로 setTimeout으로 확인한다",
      "이니셜은 접근성 트리에 나오지 않으므로 항상 alt를 비운다",
      "onError는 서버 컴포넌트에서만 동작하므로 클라이언트에서는 쓸 수 없다",
    ],
    answer: 0,
    explanation:
      "실패한 이미지는 complete가 참이면서 naturalWidth가 0이다. onError로 바꾸면 깨진 모습이 잠깐 보인다. Image 객체로 미리 불러와 naturalWidth가 0보다 클 때만 img를 그리면 깜빡임이 없다.",
    anchor: "avatar-이미지가-실패하는-순간",
  },
  {
    id: "core-component-api-design-6",
    post: "core-component-api-design",
    question: "알림 배지에 128개를 '99+'로 보여 줄 때 스크린 리더 사용자를 위한 처리로 알맞은 것은?",
    choices: [
      "99+를 그대로 읽히고 title 속성에 128을 넣는다",
      "배지 전체를 aria-hidden으로 숨긴다",
      "보이는 99+는 aria-hidden으로 빼고, 진짜 개수를 sr-only 글자로 넣는다",
      "배지가 바뀔 때마다 role=\"alert\"로 개수를 읽어 준다",
    ],
    answer: 2,
    explanation:
      "99+를 그대로 읽히면 진짜 개수를 알 수 없다. 보이는 글자는 숨기고 '(읽지 않음 128개)'처럼 진짜 개수를 넣으면 버튼 이름이 '알림 (읽지 않음 128개)'가 된다. 개수가 바뀔 때마다 alert로 알리면 시끄럽다.",
    anchor: "badge-99와-스크린-리더-문구",
  },
  {
    id: "core-component-api-design-7",
    post: "core-component-api-design",
    question: "카드 전체를 a로 감싸는 대신 늘린 링크(::after로 카드를 덮는 제목 링크)를 쓰는 이유가 아닌 것은?",
    choices: [
      "링크 이름이 카드의 모든 글자를 이어 붙인 긴 문장이 되지 않는다",
      "카드 안 즐겨찾기 버튼이 링크 안에 들어가는 대화형 요소 중첩을 피한다",
      "안쪽 버튼을 z-index로 올리면 버튼은 버튼대로 눌린다",
      "카드 안의 글자를 드래그로 선택하기가 더 쉬워진다",
    ],
    answer: 3,
    explanation:
      "늘린 링크는 오히려 카드 안 글자 선택을 어렵게 만드는 비용이 있다. 장점은 링크 이름이 제목 한 마디로 짧아지고, 버튼을 링크 밖에 두어 중첩을 피하며, z-index로 올린 버튼은 따로 눌린다는 점이다.",
    anchor: "card-카드-전체를-누르게-하기",
  },
];
