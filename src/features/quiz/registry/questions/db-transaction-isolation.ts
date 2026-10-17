import type { QuizQuestion } from "../types";

export const DB_TRANSACTION_ISOLATION: QuizQuestion[] = [
  {
    id: "db-transaction-isolation-1",
    post: "db-transaction-isolation",
    question:
      "READ COMMITTED에서 두 세션이 모두 재고 1을 읽고 각자 UPDATE products SET stock = stock - 1을 실행했다. 재고가 -1이 되는 이유는?",
    choices: [
      "B가 A의 커밋 안 된 값을 읽어서",
      "B의 UPDATE가 A의 커밋을 기다렸다가 최신 값 0에서 1을 빼서",
      "두 UPDATE가 같은 순간에 같은 행을 동시에 고쳐서",
      "READ COMMITTED는 행 잠금을 쓰지 않아서",
    ],
    answer: 1,
    explanation:
      "A의 UPDATE가 행을 잠그니 B는 기다리고, A가 커밋하면 B는 행의 최신 값 0을 다시 읽어 1을 뺀다. DB는 시킨 대로 했지만 앱은 이미 낡은 '재고 1'을 보고 판단했다. 행 잠금은 동작했고, dirty read는 PostgreSQL에서 아예 일어나지 않는다.",
    anchor: "마지막-1개를-둘이-샀다",
  },
  {
    id: "db-transaction-isolation-2",
    post: "db-transaction-isolation",
    question: "PostgreSQL에서 BEGIN ISOLATION LEVEL READ UNCOMMITTED로 연 트랜잭션은 어떻게 동작하나?",
    choices: [
      "다른 트랜잭션의 커밋 안 된 값까지 보인다",
      "에러를 내고 트랜잭션이 열리지 않는다",
      "READ COMMITTED와 똑같이 커밋된 값만 보인다",
      "REPEATABLE READ처럼 첫 스냅숏을 끝까지 쓴다",
    ],
    answer: 2,
    explanation:
      "PostgreSQL은 READ UNCOMMITTED를 받아 주지만 실제로는 READ COMMITTED로 동작해서 dirty read가 일어나지 않는다. 커밋 안 된 값을 실제로 보여 주는 건 MySQL InnoDB의 READ UNCOMMITTED다.",
    anchor: "동시에-고치면-생기는-다섯-가지-일",
  },
  {
    id: "db-transaction-isolation-3",
    post: "db-transaction-isolation",
    question:
      "PostgreSQL REPEATABLE READ에서 두 세션이 '1인 1개 한정' 주문 수를 각자 세고(0) 각자 주문을 넣었다. 결과는?",
    choices: [
      "둘 다 커밋된다. 서로 다른 행을 썼기 때문이다",
      "나중 세션이 could not serialize access due to concurrent update로 실패한다",
      "나중 세션의 INSERT가 팬텀 방지 때문에 막힌다",
      "교착 상태로 하나가 롤백된다",
    ],
    answer: 0,
    explanation:
      "같은 조건을 읽고 서로 다른 행을 쓴 write skew라 동시 수정 검사에 걸리지 않고, 각자의 스냅숏에는 상대의 주문이 없다. SERIALIZABLE로 올리면 읽기·쓰기 의존의 순환을 찾아 하나를 40001로 실패시킨다. 규칙이 최대 1개라면 UNIQUE 제약이 더 간단하다.",
    anchor: "동시에-고치면-생기는-다섯-가지-일",
  },
  {
    id: "db-transaction-isolation-4",
    post: "db-transaction-isolation",
    question: "재고 차감에서 격리 수준을 올리지 않고도 음수 재고를 막는 가장 간단한 방법은?",
    choices: [
      "SELECT로 재고를 읽고 앱에서 0보다 큰지 확인한 뒤 UPDATE한다",
      "UPDATE ... SET stock = stock - 1 WHERE product_id = ? AND stock > 0을 실행하고 영향받은 행 수를 본다",
      "재고를 읽을 때 NOWAIT를 붙인다",
      "트랜잭션을 READ UNCOMMITTED로 연다",
    ],
    answer: 1,
    explanation:
      "조건과 계산을 한 문장에 넣으면 읽기와 쓰기 사이에 틈이 없다. 뒤에 온 UPDATE는 잠금을 기다렸다가 최신 값에 WHERE를 다시 검사하니 재고가 0이면 UPDATE 0이 된다. 앱에서 따로 읽고 확인하는 방식은 바로 그 틈 때문에 -1이 생긴다.",
    anchor: "재고가-음수가-되지-않게-막는-방법들",
  },
  {
    id: "db-transaction-isolation-5",
    post: "db-transaction-isolation",
    question: "VACUUM VERBOSE에 '1 are dead but not yet removable'이 나왔다. 가장 그럴듯한 원인은?",
    choices: [
      "autovacuum이 꺼져 있다",
      "테이블에 인덱스가 너무 많다",
      "죽은 행 버전이 디스크에 아직 쓰이지 않았다",
      "그 옛 버전을 볼 수 있는 스냅숏을 가진 트랜잭션이 아직 열려 있다",
    ],
    answer: 3,
    explanation:
      "MVCC에서 옛 버전은 그걸 볼 수 있는 트랜잭션이 하나라도 남아 있으면 치울 수 없다. 오래 열린 REPEATABLE READ 트랜잭션이 끝나자 같은 VACUUM이 1 removed로 바뀌었다. 그래서 오래 열린 트랜잭션과 idle in transaction 세션이 테이블 비대화의 흔한 원인이다.",
    anchor: "버전을-남겨서-읽기와-쓰기를-떼어-놓기-mvcc",
  },
  {
    id: "db-transaction-isolation-6",
    post: "db-transaction-isolation",
    question: "kim→lee, lee→kim 송금이 동시에 일어나 교착 상태가 생겼다. 송금 코드를 어떻게 바꾸면 원이 생기지 않나?",
    choices: [
      "보내는 사람 계좌를 항상 먼저 잠근다",
      "deadlock_timeout을 늘린다",
      "두 계좌를 계좌 번호가 작은 쪽부터 잠근다",
      "격리 수준을 SERIALIZABLE로 올린다",
    ],
    answer: 2,
    explanation:
      "교착 상태는 대기가 원을 이룰 때 생기니, 모두가 같은 순서로 잠그면 늦은 쪽은 첫 잠금에서 기다릴 뿐 다른 걸 쥐고 있지 않다. 보내는 사람을 먼저 잠그는 게 바로 원래 코드라서 두 송금의 순서가 엇갈린다. 격리 수준을 올려도 행 잠금 순서는 그대로다.",
    anchor: "서로-기다리다-멈추는-교착-상태",
  },
  {
    id: "db-transaction-isolation-7",
    post: "db-transaction-isolation",
    question: "주문을 커밋하면서 '주문 생성' 이벤트를 빠짐없이 보내려고 할 때 트랜잭셔널 아웃박스가 하는 일은?",
    choices: [
      "주문 DB와 브로커를 2단계 커밋으로 묶는다",
      "이벤트를 같은 DB의 outbox 테이블에 주문과 같은 트랜잭션으로 적고, 릴레이가 나중에 보낸다",
      "커밋한 직후 앱이 브로커로 이벤트를 바로 보낸다",
      "브로커가 주문 테이블을 주기적으로 읽어 간다",
    ],
    answer: 1,
    explanation:
      "주문과 이벤트 기록이 한 트랜잭션이라 주문이 커밋되면 이벤트도 반드시 남고 롤백되면 같이 사라진다. 커밋 직후 앱이 바로 보내면 그 사이에 죽었을 때 이벤트가 유실된다. 릴레이가 재전송하면서 같은 이벤트가 두 번 갈 수 있으니 받는 쪽은 멱등하게 처리한다.",
    anchor: "서비스-여러-개에-걸친-트랜잭션",
  },
];
