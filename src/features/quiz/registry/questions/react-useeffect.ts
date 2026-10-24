import type { QuizQuestion } from "../types";

export const REACT_USEEFFECT: QuizQuestion[] = [
  {
    id: "react-useeffect-1",
    post: "react-useeffect",
    question: "다음 중 useEffect에 두기에 가장 알맞은 일은?",
    choices: [
      "props로 받은 목록에서 검색어로 걸러진 목록을 계산하는 일",
      "현재 roomId의 채팅 서버에 연결하고, 바뀌거나 사라지면 끊는 일",
      "구매 버튼을 눌렀을 때 주문 요청을 보내는 일",
      "state 두 개를 더해 합계를 화면에 보여 주는 일",
    ],
    answer: 1,
    explanation:
      "effect는 렌더링 뒤에 React 바깥의 시스템을 지금 화면 상태에 맞추는 자리다. 채팅 연결은 화면에 그려진 방에 맞춰 시작하고 정리해야 하는 바깥 시스템이다. 계산은 렌더링 중에, 버튼 클릭의 결과는 이벤트 핸들러에서 처리한다.",
    anchor: "effect는-렌더링이-끝난-뒤-바깥을-맞추는-코드다",
  },
  {
    id: "react-useeffect-2",
    post: "react-useeffect",
    question: "부모와 자식이 모두 `[roomId]` effect를 가질 때, roomId가 바뀌면 실험에서 어떤 순서로 실행됐나?",
    choices: [
      "부모 effect → 자식 effect → 자식 정리 → 부모 정리",
      "부모 정리 → 부모 effect → 자식 정리 → 자식 effect",
      "자식 정리 → 부모 정리 → 자식 effect → 부모 effect",
      "자식 effect → 부모 effect만 실행되고 정리는 언마운트 때만 돈다",
    ],
    answer: 2,
    explanation:
      "React는 새 effect를 실행하기 전에 바뀐 effect들의 정리 함수를 먼저 모두 실행하고, 그다음 자식부터 새 effect를 실행한다. 정리 함수는 언마운트 때만이 아니라 의존성이 바뀔 때마다 돈다. 정리 순서에 기대지 말고 각 effect가 자기가 연 것만 닫게 한다.",
    anchor: "렌더-커밋-그리고-effect",
  },
  {
    id: "react-useeffect-3",
    post: "react-useeffect",
    question: "effect 안에서 `const options = { serverUrl, roomId }`가 아니라 컴포넌트 본문에서 options를 만들고 `[options]`를 의존성으로 줬다. 입력칸에 글자를 칠 때마다 무슨 일이 생기나?",
    choices: [
      "options가 렌더링마다 새 객체라 Object.is 비교가 매번 달라 연결을 끊고 다시 맺는다",
      "내용이 같으니 React가 깊은 비교로 건너뛴다",
      "린트가 오류를 내 빌드가 멈춘다",
      "options는 effect 안에서 쓰이니 첫 렌더링 값으로 고정된다",
    ],
    answer: 0,
    explanation:
      "의존성은 칸마다 Object.is로 비교하고, 렌더링 중에 만든 객체는 내용이 같아도 매번 다른 참조다. 실험에서는 세 글자에 연결이 네 번 맺어졌다. 객체를 effect 안에서 만들어 roomId 같은 원시값만 의존성에 두면 한 번으로 줄어든다.",
    anchor: "의존성이-렌더링마다-바뀌면",
  },
  {
    id: "react-useeffect-4",
    post: "react-useeffect",
    question: "StrictMode 개발 모드에서 effect가 '시작 → 정리 → 시작'으로 돈다. 올바른 대응은?",
    choices: [
      "useRef 플래그로 두 번째 실행을 건너뛴다",
      "StrictMode를 꺼서 프로덕션과 동작을 맞춘다",
      "빈 의존성 배열을 지워 렌더링마다 실행되게 한다",
      "정리 함수가 effect를 완전히 되돌려 두 번 시작해도 결과가 한 번과 같은지 확인한다",
    ],
    answer: 3,
    explanation:
      "이 이중 실행은 정리 함수가 제대로 짜였는지 드러내려는 개발 모드 검사다. 정리 함수가 연결과 리스너를 모두 되돌리면 결과가 한 번 실행과 같고, 실험에서도 정리가 있으면 리스너가 1개로 유지됐다. ref로 막거나 StrictMode를 끄면 검사만 사라지고 화면을 오갈 때의 누수는 남는다.",
    anchor: "개발-모드에서-두-번-연결되는-이유",
  },
  {
    id: "react-useeffect-5",
    post: "react-useeffect",
    question: "사용자를 1→2→3으로 빠르게 바꿨는데 화면에 1번이 남았다. ignore 플래그가 이 문제를 고치는 원리는?",
    choices: [
      "ignore가 true면 fetch 요청이 네트워크에서 취소된다",
      "effect마다 새로 생긴 ignore를 정리 함수가 true로 바꿔, 지난 effect의 콜백이 결과를 버리게 한다",
      "ignore가 요청을 순서대로 보내도록 막아 응답 순서를 보장한다",
      "ignore가 전역 변수라 마지막 요청만 기억한다",
    ],
    answer: 1,
    explanation:
      "ignore는 effect 실행마다 새로 생기고, 각 then 콜백은 자기 effect의 ignore를 본다. id가 바뀌면 지난 effect의 정리 함수가 그 ignore를 true로 바꾸니 늦게 온 응답은 setUser를 부르지 않는다. 요청 자체는 끝까지 가므로, 실제로 끊으려면 AbortController를 쓴다.",
    anchor: "요청을-보내는-effect는-경쟁한다",
  },
  {
    id: "react-useeffect-6",
    post: "react-useeffect",
    question: "채팅 연결 effect가 알림에 쓸 theme을 읽는다. theme이 바뀌어도 재연결하지 않으면서 최신 theme을 쓰려면?",
    choices: [
      "eslint-disable로 경고를 끄고 의존성에서 theme을 뺀다",
      "theme을 의존성에 넣고 재연결을 받아들인다",
      "알림 함수를 useEffectEvent로 감싸 effect 안에서 부르고, 의존성에는 roomId만 둔다",
      "theme을 useState의 초깃값으로 한 번만 읽는다",
    ],
    answer: 2,
    explanation:
      "useEffectEvent로 감싼 함수는 늘 최신 렌더링의 값을 보고 의존성에 넣지 않는다. React 19.2부터 정식 API이며 effect 안에서만 불러야 한다. 경고를 끄면 첫 렌더링의 theme을 붙잡는 오래된 클로저 버그가 된다.",
    anchor: "다시-연결하면-안-되는-값을-읽을-때",
  },
];
