import type { QuizQuestion } from "../types";

export const DB_TYPE_COLUMNAR_OLAP: QuizQuestion[] = [
  {
    id: "db-type-columnar-olap-1",
    post: "db-type-columnar-olap",
    question: "500만 건 주문의 장르별 월 매출 쿼리에 인덱스를 걸어도 PostgreSQL이 크게 빨라지지 않는 이유로 가장 알맞은 것은?",
    choices: [
      "PostgreSQL은 GROUP BY에 인덱스를 쓸 수 없기 때문에",
      "분석 쿼리는 원래 많은 행을 읽고, 행 저장은 그때 안 쓰는 컬럼까지 페이지째 읽기 때문에",
      "timestamptz 컬럼에는 B-tree 인덱스를 만들 수 없기 때문에",
      "인덱스가 있으면 HashAggregate를 쓸 수 없기 때문에",
    ],
    answer: 1,
    explanation:
      "이 쿼리는 수십만 행을 읽는 질문이라 인덱스로 하나씩 찾아가는 이득이 작고, 범위가 넓어지면 아예 쓸모가 없다. 행 저장은 배송지와 메모까지 페이지째 읽으니 읽는 양 자체를 줄이려면 컬럼 저장이 필요하다.",
    anchor: "실험에-쓸-주문-500만-건",
  },
  {
    id: "db-type-columnar-olap-2",
    post: "db-type-columnar-olap",
    question: "컬럼 저장에서 genre 같은 컬럼이 행 저장보다 훨씬 잘 압축되는 이유는?",
    choices: [
      "컬럼 저장 DB는 문자열을 저장하지 않고 해시만 저장하기 때문에",
      "같은 컬럼의 값이 이어져 있어 종류가 적은 값을 사전 번호나 반복 횟수로 적을 수 있기 때문에",
      "컬럼 저장은 값마다 gzip을 따로 걸기 때문에",
      "행 저장은 압축을 전혀 하지 않기 때문에",
    ],
    answer: 1,
    explanation:
      "genre 덩어리에는 8가지 값만 반복되니 사전 압축이면 몇 비트, 정렬하면 RLE로 묶음 몇 개가 된다. 행 저장 페이지에는 장르, 주소, 가격이 번갈아 섞여 이웃한 값이 닮지 않는다.",
    anchor: "같은-컬럼끼리-모이면-잘-눌린다",
  },
  {
    id: "db-type-columnar-olap-3",
    post: "db-type-columnar-olap",
    question: "DuckDB에서 주문을 ordered_at 순으로 정렬한 사본이 같은 기간 쿼리를 더 빨리 처리한 이유는?",
    choices: [
      "정렬하면 DuckDB가 자동으로 B-tree 인덱스를 만들기 때문에",
      "정렬된 테이블은 메모리에 고정되기 때문에",
      "덩어리마다 적어 둔 최솟값·최댓값으로 9월이 없는 덩어리를 건너뛸 수 있기 때문에",
      "정렬하면 GROUP BY를 생략할 수 있기 때문에",
    ],
    answer: 2,
    explanation:
      "무작위 순서에서는 모든 덩어리에 9월 주문이 섞여 있어 하나도 건너뛰지 못한다. 시각 순으로 놓으면 조건과 겹치는 덩어리만 열면 되어 44.6ms가 8.7ms가 됐다.",
    anchor: "건너뛸-수-있는-덩어리는-아예-열지-않는다",
  },
  {
    id: "db-type-columnar-olap-4",
    post: "db-type-columnar-olap",
    question: "ClickHouse MergeTree 테이블에 주문을 한 줄씩 자주 INSERT하면 생기는 문제는?",
    choices: [
      "INSERT마다 파트가 하나씩 생겨 병합이 따라가지 못하고 Too many parts로 쓰기가 막힐 수 있다",
      "정렬 키가 유일하지 않아 INSERT가 거부된다",
      "한 줄 INSERT는 트랜잭션 로그가 없어 데이터가 사라진다",
      "LowCardinality 컬럼의 사전이 매번 초기화된다",
    ],
    answer: 0,
    explanation:
      "MergeTree는 INSERT 하나를 정렬된 파트 하나로 쓰고 백그라운드에서 합친다. 작은 파트가 너무 많아지면 쓰기가 거부되니 수천 행 이상씩 모으거나 async_insert를 쓴다.",
    anchor: "clickhouse-테이블은-정렬-키부터-정한다",
  },
  {
    id: "db-type-columnar-olap-5",
    post: "db-type-columnar-olap",
    question: "PostgreSQL에서 Debezium으로 CDC를 할 때 Debezium이 오래 멈추면 운영 DB에 생길 수 있는 일은?",
    choices: [
      "주문 테이블에 쓰기 잠금이 걸린다",
      "복제 슬롯이 읽지 않은 WAL이 지워지지 않고 쌓여 디스크가 찰 수 있다",
      "WAL이 자동으로 꺼져 장애 복구를 할 수 없게 된다",
      "논리 복제가 물리 복제로 바뀐다",
    ],
    answer: 1,
    explanation:
      "복제 슬롯은 소비자가 어디까지 읽었는지 기억하고, 그 뒤의 WAL을 지우지 못하게 붙잡는다. 슬롯 지연을 지표로 보고 max_slot_wal_keep_size로 상한을 둔다.",
    anchor: "운영-db에서-분석-db로-옮기는-길",
  },
  {
    id: "db-type-columnar-olap-6",
    post: "db-type-columnar-olap",
    question: "컬럼형 분석 DB를 주문 상세 화면의 운영 DB로 쓰기 어려운 이유가 아닌 것은?",
    choices: [
      "행 하나를 고치려면 컬럼 덩어리를 풀고 다시 써야 해서 비싸다",
      "주문 하나의 모든 컬럼을 읽으려면 컬럼 덩어리마다 찾아가 조립해야 한다",
      "SQL로 GROUP BY와 집계 함수를 쓸 수 없다",
      "작은 쿼리가 초당 수천 개 몰리는 동시성에 맞춰 설계되지 않았다",
    ],
    answer: 2,
    explanation:
      "ClickHouse, BigQuery, DuckDB 모두 SQL 집계를 잘한다. 문제는 한 행을 고치고 한 행을 통째로 읽는 일, 그리고 많은 동시 요청과 트랜잭션이다. 그래서 운영 DB와 분석 DB를 나누고 CDC나 배치로 잇는다.",
    anchor: "분석-db가-잘-못-하는-것",
  },
];
