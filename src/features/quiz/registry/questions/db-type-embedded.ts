import type { QuizQuestion } from "../types";

export const DB_TYPE_EMBEDDED: QuizQuestion[] = [
  {
    id: "db-type-embedded-1",
    post: "db-type-embedded",
    question: "SQLite의 기본 저널 모드(DELETE)에서 다른 연결이 읽기 트랜잭션을 열어 둔 채일 때 쓰기 연결의 COMMIT은 어떻게 되나?",
    choices: [
      "읽는 연결이 끝날 때까지 커밋하지 못하고 database is locked를 받는다",
      "바로 성공하고 읽는 연결은 옛 값을 계속 본다",
      "바로 성공하고 읽는 연결도 즉시 새 값을 본다",
      "읽는 연결의 트랜잭션이 강제로 취소된다",
    ],
    answer: 0,
    explanation:
      "rollback journal 모드는 커밋할 때 DB 파일을 직접 고쳐야 해서 읽는 연결이 있으면 기다려야 한다. 실험에서도 reader가 끝난 뒤에야 커밋이 성공했다. 읽는 중에도 바로 커밋되고 옛 값을 보는 건 WAL 모드의 동작이다.",
    anchor: "쓰는-사람은-한-번에-하나",
  },
  {
    id: "db-type-embedded-2",
    post: "db-type-embedded",
    question: "WAL 모드에서 읽기 트랜잭션이 쓰기 도중에도 일관된 값을 보는 방법은?",
    choices: [
      "쓰기가 끝날 때까지 읽기가 잠금을 기다린다",
      "시작할 때 WAL의 어디까지 볼지(read mark) 정해 두고, 그 앞까지의 WAL과 DB 파일만 본다",
      "읽기마다 DB 파일 전체를 메모리에 복사해 둔다",
      "쓰기 연결이 바뀌기 전 값을 읽기 연결에 직접 보내 준다",
    ],
    answer: 1,
    explanation:
      "쓰기는 바뀐 페이지를 -wal 파일 끝에 붙일 뿐 DB 파일을 고치지 않는다. 읽기는 자기 read mark 앞쪽 칸에서 최신 페이지를 찾고 없으면 DB 파일을 읽으니, 새로 붙은 칸에 영향을 받지 않는다.",
    anchor: "wal-모드에서는-변경을-옆-파일에-쌓는다",
  },
  {
    id: "db-type-embedded-3",
    post: "db-type-embedded",
    question: "SQLite의 WAL 파일이 계속 커지기만 한다. 가장 먼저 의심할 것은?",
    choices: [
      "page_size가 너무 작게 설정됐다",
      "foreign_keys가 켜져 있다",
      "오래 열린 읽기 트랜잭션이나 닫지 않은 커서가 체크포인트를 막고 있다",
      "STRICT 테이블을 쓰고 있다",
    ],
    answer: 2,
    explanation:
      "체크포인트는 아직 옛 칸을 보는 읽기가 있으면 그 뒤를 DB 파일로 옮기지 못한다. 그래서 긴 읽기 트랜잭션이 있으면 WAL이 끝없이 자란다. 트랜잭션과 커서를 빨리 닫고 필요하면 wal_checkpoint로 직접 옮긴다.",
    anchor: "wal-모드에서는-변경을-옆-파일에-쌓는다",
  },
  {
    id: "db-type-embedded-4",
    post: "db-type-embedded",
    question: "SQLite에 1만 행을 자동 커밋으로 한 줄씩 넣었더니 4.7초가 걸렸다. 가장 효과가 큰 해결책은?",
    choices: [
      "모든 행을 BEGIN과 COMMIT 사이에 넣어 트랜잭션 하나로 커밋한다",
      "테이블에 인덱스를 더 추가한다",
      "journal_mode를 DELETE로 바꾼다",
      "busy_timeout을 늘린다",
    ],
    answer: 0,
    explanation:
      "커밋마다 바뀐 페이지를 새로 쓰고 디스크에 동기화하니 한 줄씩 커밋하면 느리다. 실험에서 트랜잭션 하나로 묶자 27ms, WAL도 41MB에서 313kB로 줄었다. 인덱스를 늘리면 쓰기가 오히려 무거워진다.",
    anchor: "커밋은-모아서-한다",
  },
  {
    id: "db-type-embedded-5",
    post: "db-type-embedded",
    question: "SQLite의 INTEGER 컬럼에 '삼만원'을 넣었을 때 일어나는 일과 그 대책으로 맞는 것은?",
    choices: [
      "에러가 난다. SQLite는 항상 타입을 검사한다",
      "0으로 바뀌어 저장된다. CHECK 제약으로만 막을 수 있다",
      "NULL로 저장된다. NOT NULL을 붙이면 막힌다",
      "문자열 그대로 저장된다. 3.37부터 STRICT 테이블로 타입 검사를 켤 수 있다",
    ],
    answer: 3,
    explanation:
      "SQLite는 컬럼 타입을 선호하는 타입(affinity) 정도로만 써서, 숫자로 바꿀 수 없는 값은 TEXT로 저장한다. 테이블 끝에 STRICT를 붙이면 'cannot store TEXT value in INTEGER column' 에러로 막는다.",
    anchor: "타입을-적어도-검사하지-않는다",
  },
  {
    id: "db-type-embedded-6",
    post: "db-type-embedded",
    question: "RocksDB에 대한 설명으로 맞는 것은?",
    choices: [
      "SQL과 조인을 지원하는 임베디드 관계형 DB다",
      "LSM 트리 기반 임베디드 키-값 라이브러리로, TiKV나 MyRocks 같은 시스템의 저장 엔진으로 많이 쓰인다",
      "컬럼으로 저장하는 분석용 임베디드 DB다",
      "SQLite의 WAL 모드를 서버용으로 바꾼 것이다",
    ],
    answer: 1,
    explanation:
      "RocksDB는 페이스북이 LevelDB를 고쳐 만든 키-값 라이브러리로, 쓰기를 memtable에 모았다가 SST 파일로 내리고 뒤에서 합친다. 앱이 직접 쓰기보다 TiKV, YugabyteDB, MyRocks, Kafka Streams 같은 시스템 밑에 들어간다. 컬럼형 임베디드 DB는 DuckDB 쪽이다.",
    anchor: "rocksdb는-다른-db-밑에-들어간다",
  },
];
