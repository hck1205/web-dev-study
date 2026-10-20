import type { QuizQuestion } from "../types";

export const ZERO_DOWNTIME_MIGRATIONS: QuizQuestion[] = [
  {
    id: "zero-downtime-migrations-1",
    post: "zero-downtime-migrations",
    question:
      "긴 리포트 트랜잭션이 열려 있을 때 ALTER TABLE ADD COLUMN을 실행했더니, 리포트와 충돌하지 않는 평범한 SELECT까지 멈췄다. 이유는?",
    choices: [
      "ADD COLUMN이 테이블을 다시 쓰고 있어서",
      "SELECT가 리포트의 행 잠금에 막혀서",
      "기다리는 AccessExclusiveLock이 줄에 서 있어서, 뒤에 온 SELECT가 그 요청과 충돌해 뒤에 줄을 서서",
      "autovacuum이 테이블을 잠가서",
    ],
    answer: 2,
    explanation:
      "새 잠금 요청은 이미 잡힌 잠금뿐 아니라 줄에서 기다리는 요청과도 충돌하는지 본다. AccessExclusive는 모든 것과 충돌하니 그 뒤의 모든 쿼리가 멈춘다. ADD COLUMN 자체는 몇 ms짜리다.",
    anchor: "잠금은-줄을-선다",
  },
  {
    id: "zero-downtime-migrations-2",
    post: "zero-downtime-migrations",
    question: "DDL에 lock_timeout = '1s'를 걸고 재시도하게 했을 때 얻는 것은?",
    choices: [
      "DDL이 더 빨리 성공한다",
      "앱 요청이 DDL 뒤에서 기다리는 시간이 1초 안쪽으로 묶인다",
      "긴 트랜잭션이 자동으로 취소된다",
      "테이블 재작성을 피할 수 있다",
    ],
    answer: 1,
    explanation:
      "DDL이 성공한 시각은 6초 언저리로 같았지만, 앱의 최대 지연은 5.7초에서 1초 아래로 줄었다. 포기한 동안 잠금 요청이 줄에서 빠져 앱 요청이 지나간다. 긴 트랜잭션은 그대로라 따로 찾아 정리해야 한다.",
    anchor: "잠금은-줄을-선다",
  },
  {
    id: "zero-downtime-migrations-3",
    post: "zero-downtime-migrations",
    question: "PostgreSQL 16에서 200만 행 테이블에 열을 추가할 때 테이블을 다시 쓰는 것은?",
    choices: [
      "ADD COLUMN status text NOT NULL DEFAULT 'paid'",
      "ADD COLUMN paid_at timestamptz DEFAULT now()",
      "ADD COLUMN note text",
      "ADD COLUMN token uuid DEFAULT gen_random_uuid()",
    ],
    answer: 3,
    explanation:
      "PostgreSQL 11부터 상수나 stable 기본값은 attmissingval에 한 번만 적어 다시 쓰지 않는다. gen_random_uuid()는 행마다 값이 다른 volatile 함수라 모든 행을 다시 썼고 7초 넘게 걸렸다. now()는 빠르지만 기존 행이 모두 ALTER 시각을 갖는다.",
    anchor: "기본값이-있는-열은-postgresql-11부터-빠르다",
  },
  {
    id: "zero-downtime-migrations-4",
    post: "zero-downtime-migrations",
    question: "큰 테이블에 외래 키를 걸 때 NOT VALID로 추가한 뒤 VALIDATE CONSTRAINT를 따로 하는 이유는?",
    choices: [
      "기존 행 검사를 쓰기와 충돌하지 않는 ShareUpdateExclusive 잠금에서 하려고",
      "검사를 아예 건너뛰려고",
      "인덱스를 자동으로 만들게 하려고",
      "참조되는 테이블을 잠그지 않으려고",
    ],
    answer: 0,
    explanation:
      "외래 키를 그냥 추가하면 양쪽 테이블에 ShareRowExclusive를 잡은 채 전체를 훑어 그동안 쓰기가 막힌다. NOT VALID 추가는 순간에 끝나고, VALIDATE는 읽기와 쓰기를 막지 않는 잠금으로 훑는다. 검사를 건너뛰는 게 아니라 나중에 약한 잠금으로 하는 것이다.",
    anchor: "문장마다-무슨-잠금을-잡고-다시-쓰는가",
  },
  {
    id: "zero-downtime-migrations-5",
    post: "zero-downtime-migrations",
    question: "int 기본 키를 bigint로 바꿀 때 ALTER COLUMN id TYPE bigint를 바로 쓰지 않는 이유는?",
    choices: [
      "PostgreSQL이 기본 키의 타입 변경을 금지해서",
      "시퀀스가 함께 바뀌지 않아서",
      "모든 행과 인덱스를 다시 쓰는 동안 AccessExclusive를 쥐어 테이블이 읽기까지 멈춰서",
      "외래 키가 자동으로 지워져서",
    ],
    answer: 2,
    explanation:
      "4바이트에서 8바이트로 바뀌니 모든 행을 새로 쓴다. 200만 행에서도 수 초였고 수억 행이면 훨씬 길다. 새 열, 트리거, 배치 채우기, CONCURRENTLY 인덱스로 무거운 일을 미리 하고 바꿔치기만 짧은 트랜잭션으로 한다.",
    anchor: "타입-바꾸기는-대부분-다시-쓴다",
  },
  {
    id: "zero-downtime-migrations-6",
    post: "zero-downtime-migrations",
    question: "200만 행을 UPDATE 한 번으로 채울 때와 1만 행씩 나눌 때 가장 크게 달랐던 것은?",
    choices: [
      "만들어진 WAL 양",
      "앱의 UPDATE가 기다린 최대 시간",
      "생긴 죽은 행의 수",
      "최종 데이터",
    ],
    answer: 1,
    explanation:
      "한 번에 하면 12초 동안 모든 행에 행 잠금이 걸려 앱의 UPDATE가 12초를 기다렸고, 나누면 76ms를 넘지 않았다. WAL은 둘 다 700MB 가까이로 비슷했지만, 한꺼번에 쏟아지느냐 고르게 나가느냐가 복제 지연을 가른다.",
    anchor: "옛-행-채우기는-잘게-나눈다",
  },
  {
    id: "zero-downtime-migrations-7",
    post: "zero-downtime-migrations",
    question: "MySQL 8에서 ALTER TABLE에 ALGORITHM=INSTANT를 명시하는 이유로 가장 알맞은 것은?",
    choices: [
      "메타데이터 잠금을 전혀 잡지 않게 하려고",
      "lock_wait_timeout을 무시하려고",
      "gh-ost를 자동으로 쓰게 하려고",
      "INSTANT가 불가능한 변경이면 느린 COPY로 넘어가지 않고 에러를 내게 하려고",
    ],
    answer: 3,
    explanation:
      "알고리즘을 명시하면 원하는 방식이 안 될 때 조용히 테이블 복사로 넘어가지 않는다. INSTANT도 시작과 끝에 메타데이터 잠금을 잠깐 잡으니, 긴 트랜잭션과 기본 1년짜리 lock_wait_timeout은 따로 조심한다.",
    anchor: "mysql은-어떻게-다른가",
  },
];
