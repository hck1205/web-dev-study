import type { QuizQuestion } from "../types";

export const POSTGRES_MVCC_VACUUM: QuizQuestion[] = [
  {
    id: "postgres-mvcc-vacuum-1",
    post: "postgres-mvcc-vacuum",
    question: "100만 행 전체를 UPDATE한 뒤 VACUUM을 돌렸는데 테이블 크기가 130MB 그대로다. 왜일까?",
    choices: [
      "VACUUM이 실패했기 때문에",
      "autovacuum이 꺼져 있으면 VACUUM이 아무 일도 하지 않기 때문에",
      "인덱스가 남아 있으면 테이블을 줄일 수 없기 때문에",
      "VACUUM은 죽은 행의 자리를 재사용 가능하게 표시할 뿐, 끝부분이 통째로 비지 않으면 파일을 줄이지 않기 때문에",
    ],
    answer: 3,
    explanation:
      "VACUUM은 빈자리를 다음 쓰기가 쓸 수 있게 만들 뿐이다. 파일 끝 페이지들이 통째로 비었을 때만 잘라 낸다. 실험에서 다시 100만 건을 고치자 크기가 늘지 않고 그 빈자리를 썼다.",
    anchor: "vacuum은-자리를-비울-뿐-파일을-줄이지-않는다",
  },
  {
    id: "postgres-mvcc-vacuum-2",
    post: "postgres-mvcc-vacuum",
    question: "세션 A가 orders를 읽는 트랜잭션을 연 채로 있고, B가 VACUUM FULL orders를 실행했다. 그 뒤 C의 기본 키 조회는 어떻게 되나?",
    choices: [
      "A의 잠금과 충돌하지 않으니 바로 실행된다",
      "VACUUM FULL이 먼저 실행되고 C는 그 뒤에 실행된다는 보장은 없다",
      "줄을 선 VACUUM FULL의 배타 잠금 요청 뒤에서 기다린다",
      "에러를 내고 즉시 실패한다",
    ],
    answer: 2,
    explanation:
      "잠금은 줄 선 순서대로 준다. 배타 잠금 요청이 줄에 서는 순간 뒤에 오는 평범한 조회도 그 뒤에서 기다린다. 실험에서 행 하나 조회가 7초 걸렸다.",
    anchor: "vacuum-full은-테이블을-잠근다",
  },
  {
    id: "postgres-mvcc-vacuum-3",
    post: "postgres-mvcc-vacuum",
    question: "fillfactor 90인 books_ff90에서 HOT 업데이트가 되지 않는 경우는?",
    choices: [
      "인덱스가 없는 stock 열만 바꿀 때",
      "인덱스가 걸린 price 열을 바꿀 때",
      "한 트랜잭션에서 여러 행을 바꿀 때",
      "UPDATE 뒤에 바로 COMMIT할 때",
    ],
    answer: 1,
    explanation:
      "HOT은 인덱스에 들어간 열을 바꾸지 않고, 새 버전이 같은 페이지에 들어갈 때만 된다. 빈자리가 있어도 price처럼 인덱스 열을 바꾸면 인덱스에 새 항목이 필요하다. 16부터는 BRIN 같은 요약 인덱스의 열은 예외다.",
    anchor: "인덱스를-건드리지-않는-hot-업데이트",
  },
  {
    id: "postgres-mvcc-vacuum-4",
    post: "postgres-mvcc-vacuum",
    question: "기본 설정에서 reltuples가 100만인 테이블은 죽은 행이 몇 개를 넘어야 autovacuum이 VACUUM하나?",
    choices: ["50", "100,050", "1,000,000", "200,050"],
    answer: 3,
    explanation:
      "기준은 autovacuum_vacuum_threshold 50 + scale_factor 0.2 × 1,000,000 = 200,050이다. 100,050은 ANALYZE 기준(50 + 0.1 × 행 수)이다. 실험에서 15만 건은 ANALYZE만, 21만 건에서 VACUUM이 돌았다.",
    anchor: "autovacuum은-언제-도는가",
  },
  {
    id: "postgres-mvcc-vacuum-5",
    post: "postgres-mvcc-vacuum",
    question: "idle in transaction 세션을 COMMIT시켰는데도 VACUUM이 여전히 '50000 are dead but not yet removable'이다. 다음으로 확인할 곳은?",
    choices: [
      "pg_prepared_xacts에 남은 준비된 트랜잭션",
      "pg_stat_bgwriter의 체크포인트 횟수",
      "shared_buffers 크기",
      "pg_hba.conf의 인증 규칙",
    ],
    answer: 0,
    explanation:
      "PREPARE TRANSACTION만 하고 끝내지 않은 트랜잭션도 removable cutoff를 붙잡는다. 연결이 끊기거나 재시작해도 남으니 ROLLBACK PREPARED나 COMMIT PREPARED로 직접 끝내야 한다. 복제 슬롯의 xmin도 함께 확인한다.",
    anchor: "vacuum을-막는-것들",
  },
  {
    id: "postgres-mvcc-vacuum-6",
    post: "postgres-mvcc-vacuum",
    question: "VACUUM FULL 직후 같은 커버링 조회가 Index Only Scan이 아니라 Bitmap Heap Scan으로 1,007페이지를 읽었다. 일반 VACUUM을 하자 5페이지로 줄었다. 이유는?",
    choices: [
      "VACUUM이 인덱스를 새로 만들었기 때문에",
      "VACUUM이 visibility map의 all-visible 비트를 켜서 힙 확인을 생략할 수 있게 됐기 때문에",
      "VACUUM이 통계를 지웠기 때문에",
      "VACUUM FULL이 인덱스를 지웠기 때문에",
    ],
    answer: 1,
    explanation:
      "인덱스는 행 버전의 생사를 모르니, 페이지가 all-visible로 표시돼야 힙을 보지 않고 답할 수 있다. VACUUM FULL은 테이블을 다시 쓰지만 visibility map을 채우지 않았고, 일반 VACUUM이 비트를 켰다.",
    anchor: "visibility-map이-하는-일",
  },
  {
    id: "postgres-mvcc-vacuum-7",
    post: "postgres-mvcc-vacuum",
    question: "XID 랩어라운드를 막기 위해 PostgreSQL이 오래된 행에 하는 일은?",
    choices: [
      "행을 지우고 다시 INSERT한다",
      "xmin을 현재 XID로 바꿔 쓴다",
      "행 머리말에 얼림(frozen) 표시를 켜 XID 비교 없이 언제나 과거로 보게 한다",
      "XID를 64비트로 늘린다",
    ],
    answer: 2,
    explanation:
      "얼린 행은 XID 원을 몇 바퀴 돌아도 늘 보인다. 9.4부터는 xmin 값은 그대로 두고 XMIN_COMMITTED와 XMIN_INVALID를 함께 켠다. 테이블 나이가 autovacuum_freeze_max_age를 넘으면 autovacuum이 강제로 얼리기 VACUUM을 돈다.",
    anchor: "얼리기와-랩어라운드-방지-vacuum",
  },
];
