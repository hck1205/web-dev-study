import type { QuizQuestion } from "../types";

export const REACTIVE_PROGRAMMING: QuizQuestion[] = [
  {
    id: "reactive-programming-1",
    post: "reactive-programming",
    question: "검색 자동 완성에서 mergeMap으로 요청을 보냈더니 입력창은 rea인데 목록은 r의 결과다. 무엇으로 바꾸면 이 문제가 사라지나?",
    choices: [
      "concatMap으로 바꿔 요청을 줄 세운다",
      "switchMap으로 바꿔 새 검색어가 오면 이전 요청을 구독 해제한다",
      "exhaustMap으로 바꿔 진행 중일 때 새 검색어를 무시한다",
      "debounceTime만 더 길게 잡는다",
    ],
    answer: 1,
    explanation:
      "switchMap은 새 값이 오면 이전 안쪽 흐름을 구독 해제하므로 늦게 온 낡은 응답이 화면에 쓰이지 않는다. exhaustMap은 진행 중인 r 요청을 살리고 최신 검색어를 버리니 반대 결과가 된다. 디바운스는 요청 수를 줄일 뿐 겹친 요청의 순서 문제를 없애지 못한다.",
    anchor: "낡은-응답을-버리는-연산자-switchmap",
  },
  {
    id: "reactive-programming-2",
    post: "reactive-programming",
    question: "저장 버튼을 누를 때마다 서버에 PUT을 보내는 흐름에 switchMap을 썼다. 어떤 위험이 있나?",
    choices: [
      "빠르게 두 번 누르면 앞의 저장 요청이 취소되어 그 변경이 사라질 수 있다",
      "요청이 순서대로 줄을 서서 너무 느려진다",
      "같은 요청이 두 번씩 나간다",
      "구독을 해제할 수 없게 된다",
    ],
    answer: 0,
    explanation:
      "switchMap은 새 값이 오면 이전 안쪽 흐름을 끊는다. 하나도 잃으면 안 되고 순서가 중요한 저장에는 concatMap이 맞다. 줄을 세우는 건 concatMap의 동작이지 switchMap의 동작이 아니다.",
    anchor: "낡은-응답을-버리는-연산자-switchmap",
  },
  {
    id: "reactive-programming-3",
    post: "reactive-programming",
    question: "HTTP 요청을 감싼 Observable을 두 컴포넌트가 각각 구독했더니 요청이 두 번 나갔다. 이유와 해결로 맞는 것은?",
    choices: [
      "핫 흐름이라 구독자마다 값을 복사해서. take(1)을 붙인다",
      "RxJS의 버그라서. Promise로 바꾼다",
      "콜드 흐름이라 구독할 때마다 소스가 새로 실행되어서. share()로 하나의 실행을 나눠 보게 한다",
      "unsubscribe를 하지 않아서. 정리 함수를 추가한다",
    ],
    answer: 2,
    explanation:
      "기본 Observable은 콜드라 subscribe마다 소스 함수가 처음부터 다시 실행된다. share()를 붙이면 구독자들이 하나의 실행을 공유한다. 구독 해제는 누수 문제이지 요청 횟수와는 관계없다.",
    anchor: "구독하기-전에는-아무-일도-없다",
  },
  {
    id: "reactive-programming-4",
    post: "reactive-programming",
    question: "Reactive Streams 규약에서 발행자가 지켜야 하는 핵심 규칙은?",
    choices: [
      "값을 보낼 때마다 구독자의 응답을 기다린다",
      "구독자가 request(n)으로 요청한 개수보다 많이 onNext를 보내지 않는다",
      "onComplete 뒤에도 남은 값은 마저 보낸다",
      "구독자가 느리면 자동으로 버퍼를 무한히 늘린다",
    ],
    answer: 1,
    explanation:
      "Reactive Streams는 구독자가 request(n)으로 받을 양을 정하고 발행자는 그만큼만 보내게 해서 받는 쪽이 속도를 정한다. 끝 신호 뒤에는 어떤 신호도 오지 않는다. 시계처럼 요청을 따를 수 없는 소스는 onBackpressureBuffer나 Drop으로 넘치는 몫을 정한다.",
    anchor: "서버에서는-받는-쪽이-양을-정한다",
  },
  {
    id: "reactive-programming-5",
    post: "reactive-programming",
    question: "WebFlux 서비스에서 CPU는 한가한데 응답이 느리고, 스레드 덤프에서 reactor-http-nio 스레드가 socketRead에 걸려 있다. 가장 그럴듯한 원인은?",
    choices: [
      "이벤트 루프 스레드 수가 너무 많아서",
      "Reactor의 연산자 체인이 너무 길어서",
      "GC가 자주 돌아서",
      "이벤트 루프 스레드에서 JDBC 같은 블로킹 호출을 해서, 그 루프에 묶인 요청이 모두 줄을 서서",
    ],
    answer: 3,
    explanation:
      "이벤트 루프는 스레드 몇 개로 많은 연결을 처리하므로 블로킹 호출 하나가 그 루프의 다른 요청을 전부 멈춘다. 블로킹 호출은 Schedulers.boundedElastic으로 옮기거나 논블로킹 드라이버로 바꾼다. 연산자 체인 길이는 이런 대기 증상을 만들지 않는다.",
    anchor: "webflux가-빠르다는-오해",
  },
  {
    id: "reactive-programming-6",
    post: "reactive-programming",
    question: "검색 파이프라인 맨 끝에 catchError를 두었더니, 요청이 한 번 실패한 뒤로 검색창이 아무 반응을 하지 않는다. 왜 그런가?",
    choices: [
      "에러 신호가 바깥 흐름까지 끝내 버려서, 안쪽 흐름에서 잡아 값으로 바꿨어야 했다",
      "catchError가 에러를 다시 던져서",
      "debounceTime이 에러 뒤에 타이머를 멈춰서",
      "share()를 쓰지 않아서",
    ],
    answer: 0,
    explanation:
      "흐름은 error 신호 하나로 끝나므로, switchMap 안쪽에서 난 에러가 바깥까지 오면 원래 흐름은 이미 끝난 상태다. 안쪽 요청 흐름에 catchError를 붙여 빈 결과 같은 값으로 바꾸면 바깥 흐름은 계속 산다.",
    anchor: "디버깅이-어려운-이유",
  },
];
