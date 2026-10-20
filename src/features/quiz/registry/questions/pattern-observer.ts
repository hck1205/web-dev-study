import type { QuizQuestion } from "../types";

export const PATTERN_OBSERVER: QuizQuestion[] = [
  {
    id: "pattern-observer-1",
    post: "pattern-observer",
    question:
      "addToCart() 끝에 배지, 미니 장바구니, 무료 배송 막대를 갱신하는 호출이 줄줄이 붙어 있고 화면 부품이 늘 때마다 장바구니 코드를 고친다. 장바구니는 바뀌었다고만 알리고 부품이 스스로 등록하게 하려면?",
    choices: ["데코레이터", "옵서버", "빌더", "어댑터"],
    answer: 1,
    explanation:
      "옵서버는 주체가 관찰자 목록과 알리는 방법만 알고, 관찰자가 무엇을 하는지는 모르게 한다. 새 부품은 subscribe만 하면 되니 장바구니 코드는 바뀌지 않는다. 데코레이터는 같은 인터페이스로 감싸 기능을 더할 뿐 여러 곳에 변화를 알리지 않는다.",
    anchor: "바뀌었다고-알리는-쪽-등록해-두는-쪽",
  },
  {
    id: "pattern-observer-2",
    post: "pattern-observer",
    question: "useSyncExternalStore의 getSnapshot으로 () => cart.get().items.filter((i) => i.qty > 0)을 넘겼다. 어떤 문제가 생기나?",
    choices: [
      "서버 렌더링에서만 값이 비어 보인다",
      "구독이 두 번 등록된다",
      "부를 때마다 새 배열이라 Object.is 비교가 늘 달라 끝없이 다시 그리려 한다",
      "filter가 원본 배열을 바꿔 상태가 깨진다",
    ],
    answer: 2,
    explanation:
      "React는 알림이 오면 getSnapshot을 불러 이전 값과 Object.is로 비교하고 다르면 다시 그린다. 매번 새 배열을 돌려주면 늘 다르다고 판단해 무한 루프 경고가 난다. 파생 값은 저장소에서 미리 계산해 두거나 useMemo로 만든다.",
    anchor: "클래스-대신-구독-함수-하나",
  },
  {
    id: "pattern-observer-3",
    post: "pattern-observer",
    question: "리스너 배열을 인덱스로 돌며 알리는데, 중간의 once 리스너가 자기를 splice로 지웠다. 무슨 일이 생기나?",
    choices: [
      "바로 다음 리스너가 한 칸 당겨져 이번 알림을 받지 못한다",
      "once 리스너가 한 번 더 불린다",
      "모든 리스너가 두 번씩 불린다",
      "아무 문제 없다",
    ],
    answer: 0,
    explanation:
      "지운 자리로 뒤의 리스너가 당겨지는데 반복문은 다음 인덱스로 넘어가서 한 리스너를 건너뛴다. 알리기 전에 목록을 복사해 복사본을 돌면 원본이 바뀌어도 순서가 흔들리지 않는다. Node.js의 EventEmitter도 그렇게 한다.",
    anchor: "알리는-도중에-구독을-끊으면",
  },
  {
    id: "pattern-observer-4",
    post: "pattern-observer",
    question: "orders.emit(\"paid\")에 메일, 포인트, 슬랙 리스너가 붙어 있는데 포인트 리스너가 예외를 던졌다. EventEmitter에서 일어나는 일은?",
    choices: [
      "EventEmitter가 예외를 잡아 로그만 남기고 슬랙까지 부른다",
      "포인트 리스너만 다시 시도한다",
      "예외가 emit을 부른 곳으로 올라가고 슬랙 리스너는 불리지 않는다",
      "예외는 'error' 이벤트로 자동 전달된다",
    ],
    answer: 2,
    explanation:
      "emit은 리스너를 등록 순서대로 그 자리에서 부르는 동기 호출이라 예외를 잡지 않는다. 그래서 주문 서비스의 emit 줄에서 예외가 나고 뒤의 리스너는 불리지 않는다. 관찰자의 실패가 번지지 않게 하려면 리스너마다 예외를 잡거나 알림을 큐로 넘긴다.",
    anchor: "동기-알림은-예외도-동기로-돌아온다",
  },
  {
    id: "pattern-observer-5",
    post: "pattern-observer",
    question: "Node.js에서 MaxListenersExceededWarning: Possible EventEmitter memory leak detected 경고가 떴다. 먼저 확인할 것은?",
    choices: [
      "setMaxListeners로 한도를 올리면 해결된다",
      "요청이나 화면 전환마다 on()만 하고 off()로 끊지 않는 곳이 있는지",
      "리스너를 async 함수로 바꿨는지",
      "Node.js 버전이 너무 낮은지",
    ],
    answer: 1,
    explanation:
      "주체가 관찰자 목록으로 리스너를 붙잡고 있으니 끊지 않은 구독은 쌓이고 GC되지 않는다. 같은 이벤트에 리스너가 10개를 넘으면 이 경고가 뜬다. 한도를 올리기 전에 리스너가 왜 늘어나는지부터 본다.",
    anchor: "리스너-열한-개째의-경고",
  },
  {
    id: "pattern-observer-6",
    post: "pattern-observer",
    question: "수량을 3으로, 단가를 500으로 이어서 set했더니 관찰자가 '3 × 1000 = 3000'을 한 번 받았다. 이 현상과 대책으로 맞는 것은?",
    choices: [
      "메모리 누수이고, 구독을 끊으면 된다",
      "경쟁 상태이고, 락을 걸어야 한다",
      "이벤트 루프 지연이고, setTimeout으로 감싸면 된다",
      "글리치이고, 변경을 묶어 끝난 뒤 한 번만 알리면 된다",
    ],
    answer: 3,
    explanation:
      "연관된 값 중 하나만 바뀐 중간 상태가 관찰자에게 새어 나간 글리치다. batch로 알림을 모으거나 두 값을 한 번의 set으로 바꾸면 관찰자는 일관된 상태만 본다. React의 자동 배칭과 반응형 라이브러리의 computed가 같은 문제를 푼다.",
    anchor: "하나를-바꿨는데-두-번-알린다",
  },
  {
    id: "pattern-observer-7",
    post: "pattern-observer",
    question: "결제 완료를 다른 서비스들이 알아야 하고, 그 서비스가 잠시 내려가 있어도 나중에 받아야 한다. 무엇이 맞나?",
    choices: [
      "브로커와 토픽을 두는 발행·구독",
      "같은 프로세스의 EventEmitter",
      "주체가 관찰자 목록을 직접 드는 옵서버",
      "규칙을 가진 중재자 객체",
    ],
    answer: 0,
    explanation:
      "옵서버는 주체가 관찰자를 직접 들고 같은 프로세스에서 부르니 관찰자가 그 순간 살아 있어야 한다. 서비스 사이에서, 서로를 모르고 시간도 엇갈려 전달하려면 브로커가 사이에 있는 발행·구독을 쓴다.",
    anchor: "옵서버-중재자-발행구독을-나란히-놓으면",
  },
];
