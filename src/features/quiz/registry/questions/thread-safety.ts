import type { QuizQuestion } from "../types";

export const THREAD_SAFETY: QuizQuestion[] = [
  {
    id: "thread-safety-1",
    post: "thread-safety",
    question:
      "ConcurrentHashMap으로 조회수를 m.put(k, m.getOrDefault(k, 0) + 1)로 세었더니 40만 번 중 20만 번 정도만 남았다. 왜 그런가?",
    choices: [
      "ConcurrentHashMap은 같은 키에 대한 put을 하나만 받아들인다",
      "get과 put은 각자 스레드 안전하지만 둘 사이에 다른 스레드가 끼어들기 때문이다",
      "Integer 박싱 때문에 값이 캐시되어 갱신이 안 보인다",
      "ConcurrentHashMap은 읽기를 잠그지 않아 데이터 경합이 생긴다",
    ],
    answer: 1,
    explanation:
      "스레드 안전의 약속은 메서드 하나 단위라 두 메서드를 이어 부르면 읽고 고치고 쓰기의 틈이 생긴다. merge나 compute처럼 맵이 한 번에 하는 복합 연산을 쓰면 정확히 40만이 나온다. 맵 내부 접근은 동기화되어 있어 데이터 경합은 없다.",
    anchor: "스레드-안전하다는-말의-범위",
  },
  {
    id: "thread-safety-2",
    post: "thread-safety",
    question:
      "volatile 없는 static boolean 플래그를 메인 스레드가 false로 바꿨는데 작업 스레드의 while (running) 루프가 3초가 지나도 돈다. 가장 그럴듯한 원인은?",
    choices: [
      "메인 스레드의 쓰기가 예외로 실패했다",
      "JIT이 루프 안에서 바뀌지 않는다고 보고 읽기를 루프 밖으로 꺼냈다",
      "boolean 쓰기가 원자적이지 않아 값이 반쯤만 바뀌었다",
      "작업 스레드가 데드락에 걸렸다",
    ],
    answer: 1,
    explanation:
      "단일 스레드 기준으로는 맞는 최적화라 JIT이 읽기를 한 번만 하게 바꿀 수 있다. 실험에서 -Xint로 인터프리터만 쓰거나 volatile을 붙이면 바로 멈췄다. boolean 쓰기는 원자적이라 반쯤 바뀌는 일은 없다.",
    anchor: "쓴-값이-다른-스레드에-안-보인다",
  },
  {
    id: "thread-safety-3",
    post: "thread-safety",
    question:
      "스레드 1은 x=1 후 y를 읽고, 스레드 2는 y=1 후 x를 읽는다. x86에서 펜스 없이 100만 번 돌렸을 때 둘 다 0을 읽는 결과가 나온 이유는?",
    choices: [
      "컴파일러가 두 줄의 순서를 바꿨다",
      "쓰기가 코어의 쓰기 버퍼에 머무는 동안 다음 읽기가 먼저 메모리를 봤다",
      "x86은 쓰기를 가끔 버린다",
      "두 스레드가 같은 코어에서 번갈아 돌았다",
    ],
    answer: 1,
    explanation:
      "x86은 쓰기 뒤의 읽기 순서를 바꿀 수 있다. 쓰기가 버퍼에 있는 동안 읽기가 메모리의 옛 값을 본다. 변수는 volatile로 컴파일러 재배치를 막았고, seq_cst 펜스를 넣자 0번이 되었다.",
    anchor: "순서도-바뀐다",
  },
  {
    id: "thread-safety-4",
    post: "thread-safety",
    question: "Node 서버에서 모듈 변수 하나의 pg Client를 모든 요청이 같이 쓴다. 요청 A의 ROLLBACK 뒤에 일어날 수 있는 일은?",
    choices: [
      "Node는 싱글 스레드라 아무 문제가 없다",
      "pg가 동시 사용을 감지해 B의 쿼리에 에러를 낸다",
      "그사이 같은 연결로 보낸 요청 B의 INSERT가 A의 트랜잭션에 섞여 함께 사라진다",
      "B의 INSERT는 A의 트랜잭션이 끝날 때까지 자동으로 미뤄진다",
    ],
    answer: 2,
    explanation:
      "트랜잭션은 연결에 붙어 있어서, 같은 연결로 보낸 B의 INSERT는 A가 연 트랜잭션 안에서 실행된다. 실험에서 B는 성공 응답을 받았지만 A의 ROLLBACK 뒤 테이블은 비어 있었다. 요청마다 풀에서 연결을 빌리면 B의 행이 남는다.",
    anchor: "연결-객체는-같이-쓰지-않는다",
  },
  {
    id: "thread-safety-5",
    post: "thread-safety",
    question: "잔액과 거래 내역 개수가 항상 맞아야 하는 객체를 여러 스레드가 고친다. 알맞은 방법은?",
    choices: [
      "두 필드를 각각 AtomicLong으로 바꾼다",
      "두 필드를 volatile로 선언한다",
      "두 값을 함께 바꾸는 구간 전체를 같은 락으로 감싼다",
      "읽는 쪽만 synchronized로 감싼다",
    ],
    answer: 2,
    explanation:
      "원자적 연산은 값 하나씩만 지켜서, 두 번의 원자적 갱신 사이에 다른 스레드가 맞지 않는 중간 상태를 볼 수 있다. 여러 값의 불변식은 락으로 구간 전체를 묶는다. volatile은 가시성만 주고 묶음을 만들지 않는다.",
    anchor: "안전하게-만드는-네-가지-길",
  },
  {
    id: "thread-safety-6",
    post: "thread-safety",
    question:
      "Python 3.13 기본 빌드에서 v = self.views; time.sleep(0); self.views = v + 1을 스레드 4개가 1만 번씩 했다. 결과로 맞는 것은?",
    choices: [
      "GIL 덕분에 정확히 4만이 나온다",
      "sleep(0)에서 GIL을 놓아 다른 스레드가 끼어들어 크게 모자란다",
      "Python이 RuntimeError를 낸다",
      "sleep(0)은 아무 일도 안 해서 결과에 영향이 없다",
    ],
    answer: 1,
    explanation:
      "GIL은 바이트코드 하나를 지킬 뿐 내 코드의 읽기와 쓰기 사이를 지키지 않는다. 실험에서 4만 번 중 1만 번 정도만 남았고, threading.Lock으로 감싸자 정확했다. 사이에 아무것도 없는 count += 1은 실험에서 우연히 맞았다.",
    anchor: "스레드-안전한-컬렉션-고르기",
  },
];
