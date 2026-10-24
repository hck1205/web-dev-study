import type { QuizQuestion } from "../types";

export const REACT_WITHOUT_EFFECTS: QuizQuestion[] = [
  {
    id: "react-without-effects-1",
    post: "react-without-effects",
    question: "cart → subtotal → shipping → total을 effect 세 개로 이어 맞춘 장바구니에서 상품 하나를 담으면 실험에서 어떤 일이 있었나?",
    choices: [
      "React가 effect 세 개를 배칭해 렌더링이 한 번만 일어났다",
      "effect가 순서를 잃어 합계가 영영 틀린 값으로 남았다",
      "클릭 한 번에 커밋이 네 번 일어났고, 그중 한 번은 틀린 합계 45,000원이 DOM에 들어갔다",
      "무한 렌더링으로 Maximum update depth 경고가 났다",
    ],
    answer: 2,
    explanation:
      "effect는 커밋 뒤에 돌아 state를 바꾸고, 그 state를 보는 다음 effect가 또 커밋 뒤에 돈다. 그래서 커밋이 사슬 길이만큼 늘고, 소계는 새 값인데 배송비는 옛 값인 순간의 합계가 커밋됐다. 렌더링 중에 계산하면 한 번에 맞는 값이 나온다.",
    anchor: "effect를-이어-붙인-계산은-중간값을-그린다",
  },
  {
    id: "react-without-effects-2",
    post: "react-without-effects",
    question: "받는 사람(userId)이 바뀌면 메모 state를 비우려 한다. `useEffect(() => setDraft(\"\"), [userId])` 대신 key를 쓰는 이유로 가장 정확한 것은?",
    choices: [
      "key를 쓰면 이전 메모가 새 받는 사람과 함께 커밋되는 순간이 없고, 컴포넌트 안 모든 state가 한 번에 초깃값으로 시작해서",
      "key를 쓰면 React가 이전 메모를 다른 받는 사람에게 옮겨 줘서",
      "effect는 개발 모드에서만 동작해서",
      "key를 쓰면 렌더링 자체가 일어나지 않아서",
    ],
    answer: 0,
    explanation:
      "effect로 비우면 userId만 바뀐 렌더링이 이전 draft와 함께 먼저 커밋되고, 그 뒤에야 비워진다. 그 순간 자동 저장 같은 effect가 틀린 초안을 저장할 수 있다. key가 바뀌면 React가 컴포넌트를 새로 마운트해 첫 커밋부터 빈 메모이고, state가 몇 개든 한 번에 초기화된다.",
    anchor: "대상이-바뀌면-key로-새로-시작한다",
  },
  {
    id: "react-without-effects-3",
    post: "react-without-effects",
    question: "렌더링 중에 `if (items !== prevItems) { setPrevItems(items); setSelected(null); }`를 쓰는 패턴에 대한 설명으로 틀린 것은?",
    choices: [
      "React는 그 렌더링의 결과를 버리고 자식으로 내려가기 전에 바로 다시 렌더링한다",
      "조건 없이 setState를 부르면 Too many re-renders 오류가 난다",
      "가능하면 선택한 객체 대신 id를 두고 렌더링 중에 찾는 편이 더 낫다",
      "이 패턴으로 부모 컴포넌트의 state도 렌더링 중에 함께 바꿀 수 있다",
    ],
    answer: 3,
    explanation:
      "렌더링 중에 바꿀 수 있는 건 지금 렌더링 중인 컴포넌트 자신의 state뿐이고, 다른 컴포넌트의 state를 바꾸면 경고가 난다. 나머지는 맞는 설명이다. 실험에서도 자식은 맞는 값으로 한 번만 렌더링됐고 틀린 커밋이 없었다.",
    anchor: "일부만-맞춰야-하면-렌더링-중에-조정한다",
  },
  {
    id: "react-without-effects-4",
    post: "react-without-effects",
    question: "제출 버튼이 `setPayload(data)`만 하고 effect가 `payload`를 보고 POST를 보낸다. 이 구조의 문제는?",
    choices: [
      "POST는 effect 안에서 보낼 수 없어서 오류가 난다",
      "effect는 '버튼을 눌렀다'를 모르고 payload가 바뀐 것만 알아, 복원이나 다시 마운트될 때 누르지 않아도 요청이 나갈 수 있다",
      "payload가 객체라 effect가 한 번도 실행되지 않는다",
      "요청이 배칭되어 다음 클릭까지 미뤄진다",
    ],
    answer: 1,
    explanation:
      "effect는 원인이 아니라 state 변화만 본다. payload가 복원되거나 StrictMode에서 effect가 다시 붙을 때 남아 있으면 사용자가 누르지 않았는데 요청이 나간다. 사용자 행동의 결과인 요청은 그 행동의 핸들러에서 보낸다.",
    anchor: "사용자-행동의-결과는-핸들러에-둔다",
  },
  {
    id: "react-without-effects-5",
    post: "react-without-effects",
    question: "토글이 자기 state를 바꾸고 effect로 `onChange(isOn)`을 불러 부모에게 알린다. 클릭 한 번에 무슨 일이 생기나?",
    choices: [
      "토글만 먼저 커밋되어 부모 값이 옛 값인 화면이 한 번 커밋되고, effect가 부모를 깨워 한 번 더 커밋된다",
      "부모와 토글이 같은 커밋에 맞게 그려진다",
      "부모가 먼저 렌더링되고 토글은 다음 클릭에 반영된다",
      "onChange가 렌더링 중에 불려 경고가 난다",
    ],
    answer: 0,
    explanation:
      "effect는 토글의 커밋이 끝난 뒤 돌기 때문에, 실험에서 '켜짐 저장값:false'가 먼저 커밋되고 부모가 한 번 더 렌더링됐다. 핸들러 안에서 setIsOn과 onChange를 함께 부르면 배칭되어 커밋 한 번에 둘 다 맞는다. 토글이 state를 갖지 않는 제어 컴포넌트가 되면 맞출 일 자체가 없다.",
    anchor: "부모에게-알리는-일은-바꾸는-자리에서-한다",
  },
  {
    id: "react-without-effects-6",
    post: "react-without-effects",
    question: "분석 SDK 초기화를 최상위 컴포넌트의 `useEffect(() => initSdk(), [])`에 두면 개발 모드에서 두 번 불린다. 알맞은 해결은?",
    choices: [
      "정리 함수에서 SDK를 지우고 다시 만들게 한다",
      "의존성 배열에 initSdk를 넣는다",
      "앱 생명주기의 일이므로 모듈 변수 가드로 한 번만 실행하거나 모듈 최상위에서 실행한다",
      "StrictMode를 꺼서 한 번만 돌게 한다",
    ],
    answer: 2,
    explanation:
      "StrictMode는 정리 함수를 시험하려고 effect를 다시 붙이는데, 앱 초기화는 정리할 수 있는 일이 아니다. 앱에서 한 번만 할 일은 컴포넌트가 아니라 앱 생명주기에 속하니 모듈 변수로 막거나 모듈 최상위로 옮긴다. 모듈 최상위 코드는 import만으로 실행되니 서버와 테스트에서도 도는지 확인한다.",
    anchor: "앱이-시작될-때-한-번만-하는-일",
  },
  {
    id: "react-without-effects-7",
    post: "react-without-effects",
    question: "`useSyncExternalStore(subscribe, () => ({ online: navigator.onLine }))`처럼 지금 값을 읽는 함수가 매번 새 객체를 돌려주면?",
    choices: [
      "React가 객체를 깊게 비교해 문제없이 동작한다",
      "첫 렌더링에만 값을 읽고 이후에는 무시한다",
      "서버 렌더링에서만 문제가 된다",
      "읽을 때마다 값이 바뀐 것으로 보여 렌더링이 반복되다 Maximum update depth exceeded 오류가 난다",
    ],
    answer: 3,
    explanation:
      "useSyncExternalStore는 지금 값을 읽는 함수의 결과를 Object.is로 비교해 바뀌었는지 판단한다. 부를 때마다 새 객체면 매번 바뀐 것으로 보여 렌더링이 반복되고, 개발 빌드는 getSnapshot 결과를 캐시하라는 경고를 남긴다. 저장소가 바뀌지 않았다면 같은 값(원시값이나 같은 참조)을 돌려줘야 한다.",
    anchor: "바깥-저장소는-구독-훅으로-읽는다",
  },
];
