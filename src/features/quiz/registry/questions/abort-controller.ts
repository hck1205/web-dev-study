import type { QuizQuestion } from "../types";

export const ABORT_CONTROLLER: QuizQuestion[] = [
  {
    id: "abort-controller-1",
    post: "abort-controller",
    question:
      "effect 정리 함수에서 controller.abort()를 불렀는데 signal을 받지 않는 getUser(id)의 늦은 결과가 화면을 덮었다. 왜 그런가?",
    choices: [
      "abort()는 다음 렌더링 뒤에야 적용되기 때문이다",
      "신호를 아무 함수에도 넘기지 않아 취소를 듣는 쪽이 없었기 때문이다",
      "StrictMode가 abort를 무시하기 때문이다",
      "abort()는 fetch가 아닌 Promise를 reject로 바꿔 버리기 때문이다",
    ],
    answer: 1,
    explanation:
      "abort는 신호에 취소를 알릴 뿐이고, 신호를 받아 듣는 작업만 멈춘다. getUser가 signal을 받지 않으니 끝까지 돌아 setUser를 불렀다. 넘길 수 없다면 setUser 직전에 signal.aborted를 확인한다.",
    anchor: "react-effect에서-취소가-닿지-않을-때",
  },
  {
    id: "abort-controller-2",
    post: "abort-controller",
    question: "이미 abort()한 신호를 fetch에 넘기면 어떻게 되나?",
    choices: [
      "요청은 보내고 응답만 버린다",
      "신호를 무시하고 정상 요청한다",
      "요청을 보내지 않고 바로 reject된다",
      "응답 헤더를 받은 뒤 본문 읽기에서 실패한다",
    ],
    answer: 2,
    explanation:
      "이미 취소된 신호면 fetch는 네트워크에 나가지 않고 즉시 AbortError로 reject한다. 실험에서도 서버 로그에 그 요청이 없었다. 이미 취소된 신호에 단 리스너가 불리지 않는다는 규칙과 짝을 이룬다.",
    anchor: "취소는-언제-어디까지-먹히나",
  },
  {
    id: "abort-controller-3",
    post: "abort-controller",
    question:
      "controller.abort(new Error(\"route changed\"))로 취소한 fetch의 catch에서 e.name === \"AbortError\"로 취소를 걸러 냈다. 결과는?",
    choices: [
      "걸러 내지 못한다. fetch가 넘긴 이유 객체(Error)를 그대로 던져 이름이 Error다",
      "잘 걸러진다. 취소는 항상 AbortError다",
      "fetch가 TypeError를 던진다",
      "abort에 이유를 넘기면 취소되지 않는다",
    ],
    answer: 0,
    explanation:
      "이유를 넘기면 fetch는 그 이유를 그대로 reject 값으로 쓴다. 이름 비교로는 진짜 실패와 구분할 수 없으니 signal.aborted로 판별한다.",
    anchor: "취소는-언제-어디까지-먹히나",
  },
  {
    id: "abort-controller-4",
    post: "abort-controller",
    question: "취소를 지원하는 sleep(ms, signal)을 만들면서 정상 종료 시 abort 리스너를 떼지 않았다. 앱 수명 신호 하나로 1000번 부르면?",
    choices: [
      "리스너는 once라서 자동으로 사라진다",
      "신호에 끝난 작업의 리스너가 1000개 남아 메모리가 샌다",
      "두 번째 호출부터 TypeError가 난다",
      "아무 영향이 없다. 끝난 Promise의 리스너는 GC가 바로 치운다",
    ],
    answer: 1,
    explanation:
      "once는 이벤트가 한 번 발생해야 떨어지는데, 취소가 일어나지 않았으니 리스너가 계속 남는다. 신호가 살아 있는 한 리스너와 그 클로저도 닿을 수 있어 치워지지 않는다. 실험에서 1000개가 그대로 남았다.",
    anchor: "신호를-받는-함수를-직접-만든다",
  },
  {
    id: "abort-controller-5",
    post: "abort-controller",
    question: "브라우저에서 AbortSignal.timeout(300)으로 요청을 끊었다. 별도 처리 없는 Node 서버의 작업은?",
    choices: [
      "브라우저가 끊는 순간 Node가 핸들러를 강제로 멈춘다",
      "Node가 자동으로 같은 신호를 받아 멈춘다",
      "연결만 끊기고 핸들러는 남은 작업을 끝까지 한다",
      "서버가 504를 응답한다",
    ],
    answer: 2,
    explanation:
      "서버는 연결이 끊긴 사실을 close 이벤트로 알 수 있을 뿐, 듣지 않으면 일을 계속한다. 실험에서도 처리 없이 602ms까지 모든 단계를 마쳤다. res의 close에서 writableFinished가 false면 컨트롤러를 abort해 작업에 넘긴다.",
    anchor: "서버까지-취소를-이어-준다",
  },
  {
    id: "abort-controller-6",
    post: "abort-controller",
    question: "React 개발 모드에서 첫 화면 요청이 두 번 나가고 하나가 canceled로 보인다. 맞는 대응은?",
    choices: [
      "useRef 플래그로 두 번째 effect 실행을 막는다",
      "StrictMode가 정리 함수를 시험하는 정상 동작이니 프로덕션에서 한 번인지만 확인한다",
      "effect를 useLayoutEffect로 바꾼다",
      "AbortController를 effect 밖 모듈 변수로 옮긴다",
    ],
    answer: 1,
    explanation:
      "React 18부터 개발 모드 StrictMode는 effect를 실행, 정리, 재실행한다. 정리 함수에서 abort하니 첫 요청이 취소된 것이다. ref로 막으면 정리 함수를 시험하는 의미가 사라진다.",
    anchor: "react-effect에서-취소가-닿지-않을-때",
  },
  {
    id: "abort-controller-7",
    post: "abort-controller",
    question: "AbortSignal.any([user.signal, AbortSignal.timeout(100)])에서 시간이 먼저 지났다. 합친 신호와 user.signal은?",
    choices: [
      "둘 다 취소되고 이유는 AbortError다",
      "합친 신호만 취소되고 이유는 AbortError다",
      "둘 다 취소되고 이유는 TimeoutError다",
      "합친 신호만 취소되고 이유는 TimeoutError, user.signal은 그대로다",
    ],
    answer: 3,
    explanation:
      "any는 먼저 취소된 입력의 reason을 물려받는다. 입력 신호에는 손대지 않아 user.signal.aborted는 false로 남는다.",
    anchor: "신호를-합치는-표현을-뜯어본다",
  },
];
