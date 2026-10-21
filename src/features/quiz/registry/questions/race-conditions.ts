import type { QuizQuestion } from "../types";

export const RACE_CONDITIONS: QuizQuestion[] = [
  {
    id: "race-conditions-1",
    post: "race-conditions",
    question:
      "Go에서 고루틴 두 개가 views++를 1,000번씩 했더니 결과가 정확히 2,000이었다. 이 코드에 대해 맞는 말은?",
    choices: [
      "결과가 맞았으니 경쟁 상태가 없다",
      "고루틴이 두 개뿐이라 경쟁 상태가 생길 수 없다",
      "섞일 틈이 없었을 뿐 데이터 경합은 그대로 있고, -race로 돌리면 경고가 나온다",
      "Go 컴파일러가 views++를 자동으로 원자적 연산으로 바꿨다",
    ],
    answer: 2,
    explanation:
      "반복이 짧으면 한 고루틴이 다른 고루틴이 시작되기 전에 끝나서 우연히 맞게 나온다. 같은 코드를 -race로 돌리면 16번 줄의 읽기와 쓰기가 경합한다고 알려 주고 종료 코드 66으로 끝난다. 결과가 맞았다는 건 경쟁 상태가 없다는 증거가 아니다.",
    anchor: "경쟁-상태를-찾아내는-법",
  },
  {
    id: "race-conditions-2",
    post: "race-conditions",
    question: "API 서버 두 대 뒤에서 쿠폰 중복 사용을 막으려 한다. 가장 단단한 방법은?",
    choices: [
      "각 서버의 메모리에 뮤텍스를 두고 확인과 기록을 감싼다",
      "(coupon, user_id)에 고유 제약을 걸고 INSERT ... ON CONFLICT DO NOTHING의 결과 행 수를 본다",
      "결제 버튼을 한 번 누르면 비활성화한다",
      "SELECT와 INSERT를 READ COMMITTED 트랜잭션 하나로 감싼다",
    ],
    answer: 1,
    explanation:
      "판정을 DB가 하니 서버가 몇 대든 한 곳에서 결정된다. 서버 메모리의 뮤텍스는 다른 서버로 간 요청을 막지 못하고, 버튼 비활성화는 재시도나 다른 탭을 막지 못한다. READ COMMITTED 트랜잭션은 두 SELECT가 모두 0행을 보는 걸 막지 않는다.",
    anchor: "확인한-사실은-행동할-때-이미-낡았다-check-then-act",
  },
  {
    id: "race-conditions-3",
    post: "race-conditions",
    question:
      "Node 서버에서 async 함수가 used.has(coupon)을 확인하고, await로 결제 API를 부른 뒤 used.add(coupon)을 한다. 같은 쿠폰 요청 두 개가 동시에 오면?",
    choices: [
      "Node는 싱글 스레드라 두 번째 요청은 첫 번째가 끝날 때까지 시작하지 않는다",
      "await에서 첫 요청이 멈춘 사이 두 번째 요청도 확인을 통과해 둘 다 할인된다",
      "두 번째 요청은 Set이 잠겨 있어 에러가 난다",
      "V8이 같은 Set에 대한 동시 접근을 감지해 하나를 버린다",
    ],
    answer: 1,
    explanation:
      "동기 코드는 끊기지 않지만 await에서 함수가 멈추면 다른 요청의 콜백이 돈다. 실험에서도 두 탭 모두 할인 적용이 나왔다. await 전에 처리 중 표시를 동기적으로 남기면 프로세스 하나 안에서는 막힌다.",
    anchor: "스레드가-하나인-자바스크립트에서도-생긴다",
  },
  {
    id: "race-conditions-4",
    post: "race-conditions",
    question: "root로 도는 프로그램이 경로를 stat으로 검사한 뒤 같은 경로를 open한다. 이 TOCTOU를 막는 방향으로 맞는 것은?",
    choices: [
      "검사를 두 번 해서 결과가 같은지 확인한다",
      "검사와 open 사이의 코드를 최대한 짧게 줄인다",
      "O_NOFOLLOW로 먼저 연 뒤, 열린 파일 디스크립터에 fstat을 해서 검사한다",
      "경로를 절대 경로로 바꿔서 연다",
    ],
    answer: 2,
    explanation:
      "이름은 검사와 사용 사이에 다른 파일을 가리킬 수 있지만, 이미 열린 파일 디스크립터는 바뀌지 않는다. 틈을 줄이면 확률만 낮아질 뿐 공격자는 반복해서 노린다. 검사를 두 번 해도 두 번째 검사와 open 사이에 같은 틈이 남는다.",
    anchor: "파일-시스템의-toctou",
  },
  {
    id: "race-conditions-5",
    post: "race-conditions",
    question:
      "요청 200개가 각자 SELECT views로 읽고 1을 더해 UPDATE SET views = $1로 썼더니 4만 남았다. 같은 200번을 UPDATE SET views = views + 1로 하면 200이 되는 이유는?",
    choices: [
      "PostgreSQL이 한 문장 안에서 행 잠금을 잡고, 기다렸다면 최신 행으로 다시 계산하기 때문이다",
      "views + 1은 인덱스를 쓰기 때문에 더 빠르다",
      "한 문장으로 쓰면 격리 수준이 자동으로 SERIALIZABLE이 된다",
      "pg 드라이버가 같은 문장을 하나로 합쳐 보낸다",
    ],
    answer: 0,
    explanation:
      "UPDATE는 행을 고치기 전에 행 잠금을 잡고, 앞선 트랜잭션을 기다렸다면 커밋된 최신 값으로 views + 1을 다시 계산한다. 읽기와 쓰기가 잠금 아래 한 문장에서 일어나니 틈이 없다. 격리 수준은 바뀌지 않는다.",
    anchor: "db에서는-갱신-손실로-나타난다",
  },
  {
    id: "race-conditions-6",
    post: "race-conditions",
    question:
      "Node 워커 4개가 SharedArrayBuffer의 같은 칸을 view[0]++로 100만 번씩 올리면 400만보다 적게 나온다. Atomics.add로 바꿨을 때 일어나는 일로 맞는 것은?",
    choices: [
      "결과는 그대로 틀리고 속도만 빨라진다",
      "결과가 정확해지고, 코어끼리 줄을 서느라 더 느려진다",
      "워커들이 차례로 하나씩 실행되도록 Node가 바꾼다",
      "SharedArrayBuffer가 복사되어 각 워커가 따로 센다",
    ],
    answer: 1,
    explanation:
      "Atomics.add는 읽고 더하고 쓰기를 원자적으로 해서 매번 4,000,000이 나왔다. 대신 같은 캐시 줄을 두고 코어끼리 순서를 맞추느라 실험에서 2~3배 느렸다. 그래서 워커마다 따로 세고 마지막에 합치는 방식이 더 빠를 때가 많다.",
    anchor: "워커-스레드가-같은-메모리를-만질-때",
  },
];
