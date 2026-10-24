import type { QuizQuestion } from "../types";

export const REACT_FIBER_RENDER_COMMIT: QuizQuestion[] = [
  {
    id: "react-fiber-render-commit-1",
    post: "react-fiber-render-commit",
    question: "React 15의 스택 재조정자가 렌더링을 중간에 멈추고 나중에 이어 갈 수 없었던 이유는?",
    choices: [
      "가상 DOM을 쓰지 않고 실제 DOM을 바로 고쳤기 때문이다",
      "트리를 함수 재귀로 걸어서 진행 위치가 JS 엔진의 콜 스택에 있었고, 그 스택을 보관했다가 이어 갈 방법이 없었기 때문이다",
      "브라우저에 MessageChannel API가 없었기 때문이다",
      "클래스 컴포넌트만 지원해서 함수 호출을 쪼갤 수 없었기 때문이다",
    ],
    answer: 1,
    explanation:
      "재귀로 트리를 걸으면 어디까지 왔는지가 콜 스택에 쌓여 있어 중간에 빠져나왔다가 같은 자리로 돌아올 수 없다. Fiber는 child·sibling·return 포인터로 트리를 잇고 걷는 위치를 workInProgress 변수 하나에 들고 있어서 아무 Fiber 사이에서나 멈출 수 있다.",
    anchor: "재귀로는-중간에-멈출-수-없었다",
  },
  {
    id: "react-fiber-render-commit-2",
    post: "react-fiber-render-commit",
    question: "동시성 렌더링 중 급한 업데이트가 와서 하던 렌더링을 버려도 화면에 흔적이 남지 않는 이유는?",
    choices: [
      "React가 버리기 전에 DOM을 이전 상태로 되돌리기 때문이다",
      "버린 렌더링의 결과는 다음 렌더링에서 이어서 쓰기 때문이다",
      "렌더 단계는 current와 alternate로 짝지어진 별도의 workInProgress 트리에서 일어나고, 그 트리는 커밋 전까지 화면에 연결되지 않기 때문이다",
      "렌더 단계에서는 브라우저가 화면 그리기를 멈추기 때문이다",
    ],
    answer: 2,
    explanation:
      "React는 화면에 반영된 current 트리와 만들고 있는 workInProgress 트리를 따로 둔다. 초안은 커밋의 mutation 단계 뒤 root.current를 바꾸기 전까지 아무 데도 연결되지 않으니, 버리고 current에서 다시 시작해도 된다. DOM을 되돌리는 과정은 없다.",
    anchor: "트리는-두-벌이다",
  },
  {
    id: "react-fiber-render-commit-3",
    post: "react-fiber-render-commit",
    question: "createRoot로 띄운 앱에서 setTimeout 안의 일반 setState로 무거운 목록을 다시 그렸다. 렌더링은 어떻게 진행되나?",
    choices: [
      "DefaultLane이라 막는 업데이트로 보고 renderRootSync로 끝까지 한 번에 렌더링한다",
      "createRoot를 쓰면 모든 렌더링이 5ms씩 쪼개진다",
      "setTimeout 안의 업데이트는 idle 우선순위라 브라우저가 한가할 때까지 미뤄진다",
      "Fiber 100개마다 한 번씩 양보한다",
    ],
    answer: 0,
    explanation:
      "Sync, InputContinuous, Default 우선순위는 막는 업데이트라 workLoopSync로 쪼개지 않고 렌더링한다. transition, Suspense 재시도, idle일 때만 workLoopConcurrentByScheduler가 shouldYield를 물으며 5ms쯤마다 양보한다. 실측에서도 일반 업데이트는 300개를 한 조각에 렌더링했다.",
    anchor: "일을-쪼개고-브라우저에-양보한다",
  },
  {
    id: "react-fiber-render-commit-4",
    post: "react-fiber-render-commit",
    question: "부모의 useLayoutEffect 안에서 자식 요소의 ref를 읽으면 값이 들어 있다. 왜 그런가?",
    choices: [
      "ref는 render 단계에서 채워지기 때문이다",
      "부모의 layout effect가 자식보다 먼저 실행되기 때문이다",
      "useLayoutEffect는 브라우저가 그린 뒤에 실행되기 때문이다",
      "layout 단계는 트리를 깊이 우선으로 걸으며 자식을 먼저 처리해서, 자식의 ref 연결과 layout effect가 부모보다 먼저 끝나기 때문이다",
    ],
    answer: 3,
    explanation:
      "실제 로그에서 ref A attach, layout A, ref B attach, layout B, layout Parent 순서였다. 커밋은 자식부터 올라오며 처리하니 부모의 effect가 돌 때는 자식 쪽이 끝나 있다. useLayoutEffect는 그리기 전에 동기로 실행된다.",
    anchor: "commit은-끊기지-않는다",
  },
  {
    id: "react-fiber-render-commit-5",
    post: "react-fiber-render-commit",
    question: "클릭 핸들러의 setState로 생긴 렌더링에서 useEffect는 언제 실행됐나?",
    choices: [
      "브라우저가 화면을 그린 뒤 별도 태스크에서",
      "커밋이 끝나자마자 동기로, layout effect에서 예약한 마이크로태스크보다도 먼저",
      "다음 클릭이 들어올 때까지 미뤄진다",
      "render 단계가 끝난 직후, DOM을 바꾸기 전에",
    ],
    answer: 1,
    explanation:
      "React 18부터 클릭·키 입력 같은 discrete 입력의 결과는 커밋 끝에 passive effect까지 동기로 비운다. 실험에서 click일 때 passive가 마이크로태스크보다 먼저 찍혔다. 일반 업데이트와 transition에서는 별도 태스크로 미뤄졌다.",
    anchor: "useeffect는-언제-도나",
  },
  {
    id: "react-fiber-render-commit-6",
    post: "react-fiber-render-commit",
    question: "React 18부터 커밋 단계가 할 일이 있는 Fiber를 찾는 방식은?",
    choices: [
      "트리의 모든 Fiber를 처음부터 끝까지 확인한다",
      "할 일이 있는 Fiber만 이은 effect list를 따라간다",
      "completeWork에서 자식들의 flags를 부모의 subtreeFlags로 모아 두고, 커밋은 해당 표시가 없는 서브트리를 건너뛴다",
      "DOM의 MutationObserver로 바뀐 노드를 찾는다",
    ],
    answer: 2,
    explanation:
      "bubbleProperties가 자식들의 flags와 subtreeFlags를 OR로 합쳐 부모에 올린다. 커밋은 루트부터 내려가며 subtreeFlags에 이번 단계의 표시가 없으면 그 아래로 가지 않는다. effect list는 React 17까지의 방식이다.",
    anchor: "flags는-위로-모인다",
  },
];
