import type { QuizQuestion } from "../types";

export const FRONTEND_FRAMEWORKS_COMPARED: QuizQuestion[] = [
  {
    id: "frontend-frameworks-compared-1",
    post: "frontend-frameworks-compared",
    question:
      "count와 상관없는 목록 항목 컴포넌트 셋이 있는 화면에서 버튼으로 count를 올렸다. memo를 쓰지 않은 React에서 일어나는 일은?",
    choices: [
      "버튼 글자만 다시 계산되고 컴포넌트 함수는 다시 돌지 않는다",
      "App과 목록 항목 셋이 모두 다시 실행되지만, 실제 DOM에는 바뀐 글자만 반영된다",
      "목록 항목의 DOM 노드가 모두 지워지고 새로 만들어진다",
      "목록 항목은 props가 같으니 React가 자동으로 건너뛴다",
    ],
    answer: 1,
    explanation:
      "React는 무엇을 읽었는지 추적하지 않아 상태를 가진 컴포넌트와 그 자식을 다시 실행한다. 그 뒤 새 트리와 옛 트리를 비교해 다른 곳만 DOM에 쓰므로 DOM 변경은 글자 두 곳뿐이다. props가 같은 자식을 건너뛰는 건 memo를 붙였거나 컴파일러가 메모이제이션을 넣었을 때다.",
    anchor: "버튼-한-번에-다시-실행되는-코드를-세어-봤다",
  },
  {
    id: "frontend-frameworks-compared-2",
    post: "frontend-frameworks-compared",
    question: "Vue에서 memo 없이도 props가 같은 자식 컴포넌트가 다시 렌더링되지 않는 이유는?",
    choices: [
      "Vue는 가상 DOM을 쓰지 않기 때문이다",
      "Vue 컴파일러가 모든 컴포넌트를 한 번만 실행하게 바꾸기 때문이다",
      "프록시로 어느 컴포넌트가 어떤 값을 읽었는지 기록해 그 컴포넌트의 render만 다시 돌리고, props가 같은 자식은 건너뛰기 때문이다",
      "setup이 다시 실행되면서 자식의 상태를 캐시하기 때문이다",
    ],
    answer: 2,
    explanation:
      "Vue의 ref와 reactive는 프록시로 읽기를 가로채 의존을 기록한다. 값이 바뀌면 그 값을 읽은 컴포넌트의 render만 다시 돌고, 그 안에서 가상 DOM을 비교한다. setup은 처음 한 번만 돈다.",
    anchor: "vue-읽은-것을-기록하고-컴포넌트-단위로-다시-그린다",
  },
  {
    id: "frontend-frameworks-compared-3",
    post: "frontend-frameworks-compared",
    question: "Svelte 5가 실행 중에 트리를 비교하지 않고도 화면을 바꿀 수 있는 이유는?",
    choices: [
      "컴파일러가 어느 노드에 무엇을 쓸지 갱신 코드로 미리 만들어 두고, $state 시그널이 그 코드를 다시 실행하게 하기 때문이다",
      "브라우저의 MutationObserver로 바뀐 노드를 찾기 때문이다",
      "값이 바뀌면 컴포넌트 스크립트 전체를 다시 실행하기 때문이다",
      "웹 워커에서 가상 DOM 비교를 대신 하기 때문이다",
    ],
    answer: 0,
    explanation:
      "컴파일 결과를 보면 정적 마크업은 HTML 문자열로 복제되고, 바뀔 자리는 set_text 같은 호출로 적혀 있다. 컴포넌트 스크립트는 처음 한 번만 돌고 이후엔 template_effect만 돈다. Svelte 5는 의존 추적을 $state 시그널에 맡겨 파일 경계나 배열 변경도 놓치지 않는다.",
    anchor: "svelte-컴파일러가-갱신-코드를-미리-쓴다",
  },
  {
    id: "frontend-frameworks-compared-4",
    post: "frontend-frameworks-compared",
    question: "Solid 컴포넌트에서 const { label } = props로 구조 분해하면 생기는 문제는?",
    choices: [
      "props가 바뀔 때마다 컴포넌트 전체가 다시 실행되어 느려진다",
      "아무 문제 없다. React와 똑같이 다음 렌더에서 새 값을 받는다",
      "타입 오류가 나서 빌드가 멈춘다",
      "분해하는 순간 값을 한 번 읽고 끝나서, 나중에 label이 바뀌어도 화면이 갱신되지 않는다",
    ],
    answer: 3,
    explanation:
      "Solid의 컴포넌트 함수는 처음 한 번만 실행되는 설치 코드다. 반응성은 효과 안에서 읽을 때 생기므로, 함수 몸통에서 미리 꺼낸 값은 구독되지 않는다. 같은 이유로 몸통의 if 분기도 처음 값으로 굳으니 Show 같은 컴포넌트를 쓴다.",
    anchor: "solid와-angular-signals-값을-구독한-자리만-다시-돈다",
  },
  {
    id: "frontend-frameworks-compared-5",
    post: "frontend-frameworks-compared",
    question: "직접 만든 시그널에서 효과를 다시 실행하기 전에 옛 구독을 모두 지우는 이유는?",
    choices: [
      "메모리를 아끼려고 구독자 Set을 매번 새로 만들어야 해서",
      "조건에 따라 읽는 시그널이 바뀌면, 더 이상 읽지 않는 시그널의 변경에 효과가 깨어나지 않게 하려고",
      "같은 값으로 바꿨을 때 효과가 실행되지 않게 하려고",
      "효과가 무한히 자기 자신을 호출하는 것을 막으려고",
    ],
    answer: 1,
    explanation:
      "flag가 거짓으로 바뀌면 효과는 a 대신 b를 읽는다. 옛 구독을 지우지 않으면 a를 바꿀 때도 효과가 쓸데없이 돈다. 같은 값일 때 건너뛰는 건 write의 Object.is 검사가 맡는 일이다.",
    anchor: "시그널을-직접-만들어-보기",
  },
  {
    id: "frontend-frameworks-compared-6",
    post: "frontend-frameworks-compared",
    question: "'시그널이 가상 DOM보다 빠르다'는 주장에 대한 가장 정확한 설명은?",
    choices: [
      "항상 맞다. 시그널은 처음 그릴 때도 일을 하지 않는다",
      "틀리다. 시그널은 매번 전체 트리를 다시 만들어서 더 느리다",
      "값 하나가 바뀌어 몇 자리만 고치는 갱신에서는 일을 적게 하지만, 처음 그릴 때 구독 그래프를 만드는 비용이 있고 목록을 통째로 바꾸면 차이가 줄어든다",
      "DOM 조작 횟수가 시그널 쪽이 훨씬 적기 때문에 모든 경우에 빠르다",
    ],
    answer: 2,
    explanation:
      "측정에서 다섯 방식 모두 실제 DOM 변경은 같았고 차이는 바꿀 곳을 알아내는 자바스크립트 일이었다. 시그널은 작은 갱신에 강하지만 구독 그래프를 짓는 비용이 있다. 체감 속도는 네트워크와 방치된 리렌더가 더 크게 정한다.",
    anchor: "시그널이-가상-dom보다-빠른가",
  },
  {
    id: "frontend-frameworks-compared-7",
    post: "frontend-frameworks-compared",
    question: "Angular에서 Zone.js를 빼고 zoneless로 가면 무엇이 달라지나?",
    choices: [
      "비동기 작업이 끝날 때마다 트리 전체를 훑던 변경 감지 대신, 시그널처럼 알려진 경로로 값이 바뀐 곳만 확인한다",
      "변경 감지가 완전히 없어져 모든 갱신을 수동으로 해야 한다",
      "의존성 주입을 쓸 수 없게 된다",
      "템플릿 대신 JSX를 써야 한다",
    ],
    answer: 0,
    explanation:
      "Zone.js는 비동기 API를 감싸 무엇이 바뀌었는지 모른 채 변경 감지를 돌린다. zoneless는 시그널 변경 같은 신호가 있을 때 그 값을 읽은 곳만 확인해 쓸데없는 감지와 Zone.js 번들을 없앤다. DI와 템플릿은 그대로다.",
    anchor: "solid와-angular-signals-값을-구독한-자리만-다시-돈다",
  },
];
