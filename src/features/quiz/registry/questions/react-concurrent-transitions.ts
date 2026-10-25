import type { QuizQuestion } from "../types";

export const REACT_CONCURRENT_TRANSITIONS: QuizQuestion[] = [
  {
    id: "react-concurrent-transitions-1",
    post: "react-concurrent-transitions",
    question: "transition으로 Item 300개를 렌더링하는 도중 클릭이 들어왔더니 Item이 358번 렌더링됐다. 나머지 58번은 무엇인가?",
    choices: [
      "StrictMode가 일부 컴포넌트를 두 번 렌더링한 것",
      "클릭 업데이트가 끼어들어 버려진 transition 렌더링",
      "클릭 업데이트가 Item을 다시 렌더링한 것",
      "isPending을 렌더링하면서 Item이 다시 그려진 것",
    ],
    answer: 1,
    explanation:
      "급한 업데이트가 오면 React는 transition 초안을 버리고 클릭을 먼저 커밋한 뒤 최신 상태 위에서 transition을 처음부터 다시 렌더링한다. Item은 memo라서 클릭 렌더링에서는 건너뛰었다. 버려지는 렌더링이 있으니 렌더 중 부작용을 넣으면 안 된다.",
    anchor: "급한-업데이트가-오면-하던-렌더를-버린다",
  },
  {
    id: "react-concurrent-transitions-2",
    post: "react-concurrent-transitions",
    question: "startTransition(async () => { const d = await load(); setList(d); })에서 setList는 어떤 업데이트가 되나? (React 19)",
    choices: [
      "transition 업데이트다. async 함수 전체가 transition 안이다",
      "Idle 우선순위 업데이트다",
      "일반 업데이트다. await 뒤는 transition 표시가 꺼진 뒤 실행되니 startTransition으로 다시 감싸야 한다",
      "에러가 나서 가장 가까운 에러 경계로 간다",
    ],
    answer: 2,
    explanation:
      "startTransition은 콜백이 동기로 실행되는 동안만 transition 표시를 켜 둔다. await 뒤의 코드는 나중에 이어지니 표시가 없고, 실측에서도 한 조각으로 렌더링됐다. React 19 문서도 await 뒤의 setState를 다시 감싸라고 안내한다.",
    anchor: "starttransition은-업데이트에-표시만-붙인다",
  },
  {
    id: "react-concurrent-transitions-3",
    post: "react-concurrent-transitions",
    question: "렌더링 하나에 8ms 걸리는 컴포넌트 10개를 transition으로 그리고 있다. 시간 쪼개기 단위가 5ms일 때 3ms 시점의 입력은 얼마나 기다리나?",
    choices: ["0ms", "2ms", "45ms", "5ms"],
    answer: 3,
    explanation:
      "양보는 컴포넌트와 컴포넌트 사이에서만 일어난다. 첫 컴포넌트가 8ms 시점에 끝나야 양보할 수 있으니 3ms에 온 입력은 5ms를 기다린다. 컴포넌트 하나가 무거우면 transition으로도 그 시간은 쪼갤 수 없다.",
    anchor: "쪼개면-얼마나-빨리-대답하나",
  },
  {
    id: "react-concurrent-transitions-4",
    post: "react-concurrent-transitions",
    question: "입력칸의 value로 쓰는 state를 startTransition 안에서 바꾸면 어떤 문제가 생기나?",
    choices: [
      "입력 업데이트가 밀리는 사이 다른 커밋이 입력칸을 이전 값으로 되돌려, 글자가 늦게 찍히거나 커서가 튄다",
      "React가 에러를 던지고 입력칸이 읽기 전용이 된다",
      "transition은 문자열 state를 지원하지 않는다",
      "isPending이 계속 true로 남는다",
    ],
    answer: 0,
    explanation:
      "제어 입력칸은 커밋할 때 DOM 값을 value prop에 맞춘다. 입력을 담은 업데이트가 transition으로 밀리면 그 사이 커밋에서 이전 값으로 돌아간다. 입력칸 값은 급한 업데이트로 바꾸고, 무거운 화면이 보는 별도 state만 transition으로 바꾼다.",
    anchor: "입력칸의-값은-transition에-넣지-않는다",
  },
  {
    id: "react-concurrent-transitions-5",
    post: "react-concurrent-transitions",
    question: "렌더 중에 store.v를 직접 읽는 칸 60개를 transition으로 렌더링하는 도중 store.v가 1에서 2로 바뀌었다. 커밋된 화면은?",
    choices: [
      "모든 칸이 1이다. 렌더링이 시작될 때의 값으로 고정된다",
      "모든 칸이 2다. React가 커밋 전에 바깥 값을 다시 읽는다",
      "React가 경고를 띄우고 커밋하지 않는다",
      "앞쪽 칸은 1, 뒤쪽 칸은 2인 화면이 커밋된다",
    ],
    answer: 3,
    explanation:
      "쪼개진 렌더링 사이에 바깥 값이 바뀌면 그 뒤에 렌더링된 칸만 새 값을 읽는다. 실측에서 14칸은 1, 46칸은 2였다. useSyncExternalStore는 커밋 전에 스냅숏을 다시 확인해 달라졌으면 동기로 다시 렌더링하므로 60칸 모두 2가 된다.",
    anchor: "화면-일부만-새-값을-볼-때",
  },
  {
    id: "react-concurrent-transitions-6",
    post: "react-concurrent-transitions",
    question: "Zustand처럼 useSyncExternalStore로 구독하는 저장소의 값을 startTransition 안에서 바꿨다. 무거운 화면은 어떻게 렌더링되나?",
    choices: [
      "transition이 되어 5ms씩 쪼개 렌더링된다",
      "외부 저장소 변경은 막는 업데이트로 처리되어 쪼개지지 않는다",
      "저장소 변경은 다음 transition이 올 때까지 무시된다",
      "useDeferredValue와 똑같이 동작한다",
    ],
    answer: 1,
    explanation:
      "useSyncExternalStore는 tearing을 막으려고 저장소 변경을 동기 업데이트로 처리한다. 그래서 외부 저장소의 변경은 transition이 될 수 없다. 미루고 싶다면 읽은 값을 useDeferredValue로 받거나 React state로 옮겨 그 state를 transition으로 바꾼다.",
    anchor: "화면-일부만-새-값을-볼-때",
  },
];
