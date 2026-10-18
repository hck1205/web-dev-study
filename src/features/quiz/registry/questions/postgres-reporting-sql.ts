import type { QuizQuestion } from "../types";

export const POSTGRES_REPORTING_SQL: QuizQuestion[] = [
  {
    id: "postgres-reporting-sql-1",
    post: "postgres-reporting-sql",
    question: "회원 20명의 최근 주문 3건을 구할 때, (user_id, created_at DESC) 인덱스가 없으면 LATERAL 방식이 크게 느려지는 이유는?",
    choices: [
      "LATERAL은 병렬 실행을 쓸 수 없어서",
      "LIMIT이 LATERAL 안에서는 무시돼서",
      "윈도우 함수와 달리 정렬을 디스크에서 해서",
      "회원마다 서브쿼리가 한 번씩 돌아 테이블 전체 읽기가 20번 반복돼서",
    ],
    answer: 3,
    explanation:
      "LATERAL 서브쿼리는 바깥 행마다 실행된다. 실행 계획의 loops=20처럼 한 번이 Seq Scan이면 그 비용이 그대로 20배가 된다. 인덱스가 있으면 회원마다 최신 세 건만 읽고 Limit에서 멈춰서 윈도우 함수보다 빨라진다.",
    anchor: "사용자마다-최근-주문-세-건",
  },
  {
    id: "postgres-reporting-sql-2",
    post: "postgres-reporting-sql",
    question: "generate_series로 만든 날짜 목록에 주문을 LEFT JOIN해 일별 주문 수를 셀 때 count(o.id)를 쓰는 이유는?",
    choices: [
      "count(*)는 LEFT JOIN으로 생긴 빈 행도 1로 세서 주문 없는 날이 1이 되기 때문이다",
      "count(*)는 인덱스를 쓰지 못하기 때문이다",
      "count(o.id)가 NULL을 0으로 바꿔 주는 함수라서다",
      "generate_series와 count(*)는 함께 쓸 수 없어서다",
    ],
    answer: 0,
    explanation:
      "LEFT JOIN은 짝이 없는 날짜에도 주문 컬럼이 NULL인 행 하나를 만든다. count(*)는 행을 세니 1이 되고, count(o.id)는 NULL을 빼고 세니 0이 된다. sum은 빈 날 NULL이 되므로 coalesce로 0을 채운다.",
    anchor: "주문이-없는-날도-0으로-채우는-리포트",
  },
  {
    id: "postgres-reporting-sql-3",
    post: "postgres-reporting-sql",
    question: "REFRESH MATERIALIZED VIEW CONCURRENTLY를 쓰기 위해 꼭 필요한 것은?",
    choices: [
      "원본 테이블의 트리거",
      "pg_cron 확장",
      "머티리얼라이즈드 뷰에 WHERE 없는 유니크 인덱스",
      "SERIALIZABLE 격리 수준",
    ],
    answer: 2,
    explanation:
      "CONCURRENTLY는 새 결과와 기존 결과를 비교해 바뀐 행만 고치는 방식이라 행을 구별할 유니크 인덱스가 있어야 한다. 대신 갱신하는 동안 읽기를 막지 않는다. pg_cron은 주기 실행에 쓸 수 있을 뿐 필수는 아니다.",
    anchor: "이름-붙인-쿼리와-저장해-둔-결과",
  },
  {
    id: "postgres-reporting-sql-4",
    post: "postgres-reporting-sql",
    question: "SELECT DISTINCT ON (user_id) user_id, id FROM orders ORDER BY created_at DESC 를 실행하면?",
    choices: [
      "회원별 최신 주문 하나가 나온다",
      "오류가 난다. ORDER BY가 DISTINCT ON의 컬럼으로 시작해야 한다",
      "회원별 가장 오래된 주문이 나온다",
      "DISTINCT ON이 무시되고 모든 주문이 나온다",
    ],
    answer: 1,
    explanation:
      "DISTINCT ON은 괄호 안 값이 같은 행 중에서 ORDER BY로 첫 번째인 행을 남긴다. 그래서 ORDER BY는 user_id로 시작해야 하고, 아니면 오류가 난다. 같은 시간이 있을 수 있으면 끝에 id 같은 유일한 컬럼을 붙인다.",
    anchor: "그룹마다-한-줄만-남기는-distinct-on",
  },
  {
    id: "postgres-reporting-sql-5",
    post: "postgres-reporting-sql",
    question: "주문 2만 건을 넣을 때 자동 커밋 INSERT가 8초, 트랜잭션 하나로 묶은 INSERT가 1.6초 걸렸다. 묶었을 때 빨라진 주된 이유는?",
    choices: [
      "트랜잭션 안에서는 제약 조건 검사를 건너뛰어서",
      "트랜잭션 안의 INSERT는 병렬로 실행돼서",
      "인덱스 갱신을 커밋 때 한꺼번에 해서",
      "커밋마다 WAL을 디스크에 내려 쓰는 일이 한 번으로 줄어서",
    ],
    answer: 3,
    explanation:
      "자동 커밋이면 문장마다 커밋하며 WAL을 디스크에 내려 써야 한다. 하나로 묶으면 그 일이 한 번이 된다. COPY는 여기에 문장 해석과 왕복까지 줄여서 0.09초로 더 빠르다.",
    anchor: "50만-건을-한-번에-넣는-copy",
  },
  {
    id: "postgres-reporting-sql-6",
    post: "postgres-reporting-sql",
    question: "매시 정각에 대시보드가 멈춘다. pg_stat_activity에서 대시보드 쿼리의 wait_event_type이 Lock이고 blocked_by가 REFRESH MATERIALIZED VIEW를 돌리는 배치다. 알맞은 해결은?",
    choices: [
      "대시보드 쿼리에 인덱스 힌트를 준다",
      "배치를 REFRESH MATERIALIZED VIEW CONCURRENTLY로 바꾸고 뷰에 유니크 인덱스를 만든다",
      "대시보드가 원본 테이블 대신 뷰를 두 번 읽게 한다",
      "머티리얼라이즈드 뷰를 일반 뷰로 바꾸면 항상 더 빠르다",
    ],
    answer: 1,
    explanation:
      "일반 REFRESH는 AccessExclusiveLock을 잡아 읽기까지 막는다. CONCURRENTLY는 읽기를 막지 않지만 행을 구별할 유니크 인덱스가 필요하다. 일반 뷰로 바꾸면 잠금은 없어도 조회마다 무거운 집계를 다시 한다.",
    anchor: "대시보드가-멈췄는데-db는-한가할-때",
  },
];
