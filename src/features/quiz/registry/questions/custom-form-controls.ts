import type { QuizQuestion } from "../types";

export const CUSTOM_FORM_CONTROLS: QuizQuestion[] = [
  {
    id: "custom-form-controls-1",
    post: "custom-form-controls",
    question:
      "체크박스를 숨기고 옆 span에 모양을 그렸다. 라벨을 누르면 잘 토글되는데 키보드로는 그 칸에 갈 수 없다. input에 준 스타일로 가장 그럴듯한 것은?",
    choices: [
      "opacity: 0과 1px 크기",
      "display: none",
      "appearance: none",
      "position: absolute",
    ],
    answer: 1,
    explanation:
      "display: none은 요소를 Tab 순서와 접근성 트리에서 빼 버린다. 라벨 클릭은 연결된 input을 대신 누르기 때문에 그래도 동작해서 마우스로만 보면 문제가 안 보인다. 1px에 투명하게 숨기면 포커스와 접근성 트리가 남는다.",
    anchor: "진짜-input을-남기고-모양만-바꾸는-세-단계",
  },
  {
    id: "custom-form-controls-2",
    post: "custom-form-controls",
    question:
      "전체 선택 체크박스를 반쯤 선택된 모양으로 보이게 하고 싶다. 어떻게 해야 하고, 그 상태에서 폼을 제출하면 어떻게 되나?",
    choices: [
      "마크업에 indeterminate 속성을 쓰면 되고, 값은 mixed로 제출된다",
      "aria-checked=\"mixed\"를 붙이면 되고, 값은 제출되지 않는다",
      "자바스크립트로 el.indeterminate = true를 넣어야 하고, 제출 값은 checked 여부를 따른다",
      "자바스크립트로 el.indeterminate = true를 넣어야 하고, 값은 항상 제출된다",
    ],
    answer: 2,
    explanation:
      "indeterminate는 HTML 속성이 없고 자바스크립트 속성으로만 켤 수 있다. 바뀌는 건 모양과 접근성 트리의 mixed 상태뿐이고, 제출 값은 checked를 따른다. 그래서 반쯤 상태여도 checked가 false면 폼 데이터에 들어가지 않는다.",
    anchor: "반쯤-선택된-체크박스",
  },
  {
    id: "custom-form-controls-3",
    post: "custom-form-controls",
    question:
      "설정 화면의 알림 받기는 누르는 즉시 서버에 저장된다. 이 컨트롤에 맞는 선택은?",
    choices: [
      "role=\"switch\"와 aria-checked로 켜짐·꺼짐을 알리는 스위치",
      "체크박스와 저장 버튼",
      "aria-pressed를 붙인 토글 버튼에 role=\"switch\"도 함께",
      "라디오 두 개(켜짐, 꺼짐)",
    ],
    answer: 0,
    explanation:
      "누르는 순간 반영되는 컨트롤은 스위치이고, 제출해야 반영되는 것은 체크박스다. 스위치는 role=switch와 aria-checked(true/false)로 상태를 알린다. aria-pressed는 토글 버튼의 상태라 role=switch와 섞어 쓰지 않는다.",
    anchor: "스위치는-체크박스와-언제-다른가",
  },
  {
    id: "custom-form-controls-4",
    post: "custom-form-controls",
    question:
      "네이티브 라디오 묶음의 change 핸들러에서 매번 API를 호출했더니, 세 번째 항목을 고른 사용자 한 명에게서 요청이 두 번 들어왔다. 이유는?",
    choices: [
      "라디오는 Tab으로 하나씩 지날 때마다 change가 뜨기 때문에",
      "React가 change 이벤트를 두 번 보내기 때문에",
      "라디오는 포커스만 받으면 change가 뜨기 때문에",
      "방향키가 포커스와 선택을 같이 옮겨서, 지나간 항목마다 change가 뜨기 때문에",
    ],
    answer: 3,
    explanation:
      "라디오 묶음은 Tab 순서에서 한 칸이고, 방향키를 누르면 포커스와 선택이 함께 옮겨 간다. 첫 항목에서 세 번째로 가려면 방향키를 두 번 누르니 change도 두 번 뜬다. Tab은 묶음을 한 번에 지나가므로 원인이 아니다.",
    anchor: "라디오-그룹은-tab-한-번-방향키로-고른다",
  },
  {
    id: "custom-form-controls-5",
    post: "custom-form-controls",
    question:
      "폼 안의 결제 버튼에 aria-disabled=\"true\"만 붙였다. 사용자가 이 버튼을 누르면 어떻게 되나?",
    choices: [
      "브라우저가 클릭을 막고 아무 일도 없다",
      "클릭 핸들러가 불리고, 막지 않으면 폼도 제출된다",
      "포커스는 받지만 클릭 이벤트는 뜨지 않는다",
      "폼은 제출되지 않지만 클릭 핸들러는 불린다",
    ],
    answer: 1,
    explanation:
      "aria-disabled는 보조 기술에 사용 불가라고 알리기만 하고 브라우저 동작은 하나도 막지 않는다. 포커스, 클릭, 폼 제출이 다 일어나서 핸들러에서 직접 막아야 한다. 실제로 막아 주는 것은 disabled 속성이다.",
    anchor: "disabled와-aria-disabled는-다르게-동작한다",
  },
  {
    id: "custom-form-controls-6",
    post: "custom-form-controls",
    question:
      "select에 appearance: base-select를 줬다. 이 기능을 모르는 브라우저에서는 어떻게 보이나?",
    choices: [
      "모르는 값으로 무시하고 평범한 select를 그린다",
      "select가 화면에서 사라진다",
      "펼친 목록이 열리지 않는다",
      "옵션이 버튼 목록으로 펼쳐진 채로 고정된다",
    ],
    answer: 0,
    explanation:
      "지원하지 않는 브라우저는 appearance: base-select를 모르는 값으로 보고 무시해서 기존 select를 그린다. 옵션 안의 꾸밈은 빠지고 글자만 남는다. 그래서 점진적으로 좋아지는 방식으로 지금 써도 깨지지 않는다.",
    anchor: "셀렉트-base-select가-열어-준-문",
  },
];
