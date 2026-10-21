import type { QuizQuestion } from "../types";

export const ACID_TRANSACTIONS: QuizQuestion[] = [
  {
    id: "acid-transactions-1",
    post: "acid-transactions",
    question:
      "커밋 전에 CHECKPOINT로 주문 행이 데이터 파일에 써진 뒤 서버가 죽었다. 재시작 후 SELECT에 그 행이 보이지 않는 이유는?",
    choices: [
      "복구 과정에서 데이터 파일의 그 행을 찾아 지웠기 때문에",
      "체크포인트는 커밋된 페이지만 디스크에 쓰기 때문에",
      "그 행을 만든 트랜잭션의 커밋 기록이 WAL에 없어 aborted로 처리됐기 때문에",
      "WAL을 다시 적용하지 않고 마지막 체크포인트 상태로 돌아가기 때문에",
    ],
    answer: 2,
    explanation:
      "행은 데이터 파일에 물리적으로 남아 있지만, 만든 트랜잭션이 aborted라서 읽을 때 보이지 않는다. PostgreSQL은 롤백할 때 행을 지우러 다니지 않고, 나중에 VACUUM이 치운다.",
    anchor: "커밋-기록이-없으면-없던-일이다",
  },
  {
    id: "acid-transactions-2",
    post: "acid-transactions",
    question:
      "node-postgres에서 pool.query('BEGIN'), pool.query('INSERT ...'), pool.query('ROLLBACK')을 차례로 보냈더니 가끔 롤백한 행이 남는다. 원인은?",
    choices: [
      "세 문장이 풀의 서로 다른 연결로 갈 수 있어 INSERT가 따로 자동 커밋되기 때문에",
      "ROLLBACK이 INSERT보다 먼저 도착하기 때문에",
      "READ COMMITTED에서는 ROLLBACK이 INSERT를 되돌리지 못하기 때문에",
      "pool.query는 항상 SERIALIZABLE로 실행되기 때문에",
    ],
    answer: 0,
    explanation:
      "트랜잭션은 연결에 붙은 상태다. BEGIN이 열린 연결과 INSERT가 실행된 연결이 다르면 INSERT는 자동 커밋되고, ROLLBACK은 엉뚱한 연결에 간다. pool.connect()로 연결 하나를 빌려 그 위에서만 BEGIN부터 COMMIT까지 보내야 한다.",
    anchor: "원자성은-연결-하나-안에서만-성립한다",
  },
  {
    id: "acid-transactions-3",
    post: "acid-transactions",
    question:
      "트랜잭션 안에서 포인트를 뺀 뒤 결제사 API를 부르는 코드에서, 결제가 승인된 다음 주문 INSERT가 실패해 ROLLBACK했다. 결과는?",
    choices: [
      "결제도 DB와 함께 자동으로 취소된다",
      "포인트는 돌아오지만 결제는 이미 끝난 상태로 남는다",
      "포인트와 결제 모두 그대로 남는다",
      "ROLLBACK이 결제 승인 응답을 기다리느라 실패한다",
    ],
    answer: 1,
    explanation:
      "원자성은 DB가 기록하는 것에만 걸린다. 외부 호출은 되돌릴 수 없고, 기다리는 동안 행 잠금과 연결도 잡고 있다. 외부 호출을 트랜잭션 밖으로 빼고 아웃박스로 보내는 이유다.",
    anchor: "데이터베이스-밖에서-한-일은-되돌려지지-않는다",
  },
  {
    id: "acid-transactions-4",
    post: "acid-transactions",
    question:
      "겹치는 예약이 있는지 SELECT로 확인한 뒤 없으면 INSERT하는 코드가 동시 요청에서 중복 예약을 만든다. 배제 제약을 걸면 막히는 이유는?",
    choices: [
      "배제 제약이 걸린 테이블은 자동으로 SERIALIZABLE이 되기 때문에",
      "확인용 SELECT가 커밋 전인 다른 트랜잭션의 행도 보게 되기 때문에",
      "INSERT가 테이블 전체를 잠그기 때문에",
      "제약의 인덱스가 커밋 전인 행까지 알고 있어 그 트랜잭션이 끝날 때까지 기다렸다가 판정하기 때문에",
    ],
    answer: 3,
    explanation:
      "READ COMMITTED의 SELECT에는 커밋 전인 행이 보이지 않아서 앱의 확인은 0건을 돌려준다. 배제 제약과 UNIQUE는 인덱스 수준에서 진행 중인 행을 알고 기다린 뒤 거부한다. 실험에서 두 번째 INSERT는 약 2초를 기다리고 실패했다.",
    anchor: "일관성은-적어-둔-규칙만큼-지켜진다",
  },
  {
    id: "acid-transactions-5",
    post: "acid-transactions",
    question:
      "pos에 일반 UNIQUE가 걸린 테이블에서 UPDATE banners SET pos = pos + 1이 실패한다. 결과적으로 중복이 없는데도 실패하는 이유와 해결책은?",
    choices: [
      "PostgreSQL의 일반 UNIQUE는 행마다 바로 검사하므로, DEFERRABLE로 바꿔 검사를 문장 끝이나 커밋 시점으로 미룬다",
      "UPDATE는 원자적이지 않으므로 행마다 따로 UPDATE한다",
      "UNIQUE는 NULL을 허용하지 않으므로 NOT NULL을 뺀다",
      "격리 수준이 낮아서이므로 SERIALIZABLE로 올린다",
    ],
    answer: 0,
    explanation:
      "첫 행이 2가 되는 순간 아직 바뀌지 않은 2와 부딪힌다. DEFERRABLE INITIALLY IMMEDIATE면 문장 끝에, SET CONSTRAINTS ... DEFERRED면 커밋 시점에 검사한다. 이 경우 오류가 COMMIT에서 나므로 앱이 커밋 실패를 처리해야 한다.",
    anchor: "일관성은-적어-둔-규칙만큼-지켜진다",
  },
  {
    id: "acid-transactions-6",
    post: "acid-transactions",
    question:
      "synchronous_commit = off로 세 건을 커밋하고 곧바로 PostgreSQL 프로세스를 모두 죽였더니 재시작 후 0건이었다. 무엇이 사라진 것인가?",
    choices: [
      "데이터 파일이 깨져서 테이블 전체가 사라졌다",
      "OS 페이지 캐시에 있던 데이터 파일 페이지가 사라졌다",
      "아직 OS로 넘어가지 않고 공유 메모리의 WAL 버퍼에만 있던 커밋 기록이 사라졌다",
      "체크포인트가 커밋된 행을 지웠다",
    ],
    answer: 2,
    explanation:
      "off는 WAL fsync 전에 성공을 돌려준다. 실험에서 write 위치가 insert 위치보다 뒤처져 있었고, 그 사이의 커밋 기록이 프로세스와 함께 사라졌다. 최근 커밋이 없던 일이 될 뿐 DB가 깨지지는 않는다는 점이 fsync = off와 다르다.",
    anchor: "커밋-응답과-디스크-사이",
  },
  {
    id: "acid-transactions-7",
    post: "acid-transactions",
    question:
      "COMMIT을 보낸 직후 연결이 끊겨 앱이 오류를 받았다. 가장 안전한 대응은?",
    choices: [
      "커밋이 실패했으므로 같은 INSERT를 그대로 다시 보낸다",
      "요청마다 고유한 request_id를 UNIQUE로 두고, 같은 번호로 재시도해 이미 있으면 기존 결과를 돌려준다",
      "사용자에게 실패를 알리고 아무것도 하지 않는다",
      "synchronous_commit을 off로 바꿔 응답을 빠르게 한다",
    ],
    answer: 1,
    explanation:
      "COMMIT 응답이 사라졌을 뿐 실제로는 커밋됐을 수 있다. 그대로 다시 보내면 중복이 생기고, 실패로 단정하면 사용자에게 틀린 답을 준다. 멱등성 키로 재시도를 안전하게 만들거나, 미리 받아 둔 txid로 pg_xact_status를 확인한다.",
    anchor: "응답을-받지-못한-커밋",
  },
];
