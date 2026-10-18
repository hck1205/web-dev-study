import type { QuizQuestion } from "../types";

export const DB_LOCKING_DEADLOCK: QuizQuestion[] = [
  {
    id: "db-locking-deadlock-1",
    post: "db-locking-deadlock",
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
    id: "db-locking-deadlock-2",
    post: "db-locking-deadlock",
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
    id: "db-locking-deadlock-3",
    post: "db-locking-deadlock",
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
  {
    id: "db-locking-deadlock-4",
    post: "db-locking-deadlock",
    question: "낙관적 잠금으로 UPDATE products SET stock = 119, version = version + 1 WHERE product_id = 1003 AND version = 1을 보냈더니 UPDATE 0이 돌아왔다. 무슨 뜻이고 어떻게 해야 하나?",
    choices: [
      "행이 잠겨 있으니 잠시 뒤 같은 문장을 다시 보낸다",
      "DB 에러이니 트랜잭션을 버리고 사용자에게 실패를 알린다",
      "version 열이 없어서 무시됐으니 열을 추가한다",
      "읽은 뒤에 누군가 그 행을 바꿨다는 뜻이니, 다시 읽고 판단을 처음부터 다시 한다",
    ],
    answer: 3,
    explanation:
      "버전 열은 '내가 읽은 뒤로 바뀐 게 없나'를 확인하는 장치다. 0행이 바뀌었다면 그 사이 다른 트랜잭션이 version을 올렸으니, 최신 값을 다시 읽고 재고 판단부터 다시 해야 한다. 같은 문장을 그대로 다시 보내면 계속 0행이다.",
    anchor: "재고가-음수가-되지-않게-막는-방법들",
  },
  {
    id: "db-locking-deadlock-5",
    post: "db-locking-deadlock",
    question: "세션 A가 행을 UPDATE한 채 아무것도 하지 않고 있고, B는 같은 행을 고치려다 멈춰 있다. 교착 상태 검사기는 어떻게 하나?",
    choices: [
      "둘 다 기다리는 상태가 아니라 교착 상태가 아니므로 끊지 않는다. B는 A가 끝날 때까지 기다린다",
      "1초 뒤 B를 교착 상태로 판단해 롤백한다",
      "A를 교착 상태로 판단해 롤백한다",
      "B의 UPDATE를 A보다 먼저 실행한다",
    ],
    answer: 0,
    explanation:
      "교착 상태는 서로가 서로를 기다리는 순환이 있을 때만 생긴다. A는 아무것도 기다리지 않고 놀고 있을 뿐이라 DB가 끊어 주지 않고, B는 끝없이 기다린다. pg_blocking_pids()로 상대를 찾고, lock_timeout과 idle_in_transaction_session_timeout으로 한도를 건다.",
    anchor: "오래-열린-트랜잭션이-남기는-것",
  },
];
