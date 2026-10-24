import type { QuizQuestion } from "../types";

export const DATA_WAREHOUSE_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "data-warehouse-architecture-1",
    post: "data-warehouse-architecture",
    question: "세 팀이 같은 orders 테이블에서 7월 매출을 뽑았는데 숫자가 모두 달랐다. 이 글에서 본 가장 근본적인 원인은?",
    choices: [
      "orders 테이블의 복제 지연",
      "쿼리 엔진마다 sum의 계산 방식이 달라서",
      "취소·환불 포함 여부와 시간대처럼 매출의 정의가 사람마다 달라서",
      "파티션이 잘못 나뉘어 일부 행이 빠져서",
    ],
    answer: 2,
    explanation:
      "세 쿼리는 모두 맞게 돌았고, 무엇을 매출로 세는지가 달랐다. 웨어하우스 설계는 이런 지표의 뜻을 골드 칸에서 한 번만 정의해 모두가 같은 테이블을 읽게 만드는 일이다.",
    anchor: "회의마다-매출-숫자가-세-개다",
  },
  {
    id: "data-warehouse-architecture-2",
    post: "data-warehouse-architecture",
    question: "브론즈 칸에 원본을 모양 그대로 덮어쓰지 않고 쌓아 두는 가장 큰 이유는?",
    choices: [
      "변환 규칙이 바뀌거나 버그가 나도 처음부터 다시 계산할 수 있어서",
      "대시보드가 브론즈를 직접 읽어야 빨라서",
      "원본 그대로 두면 개인정보 규정을 자동으로 지켜서",
      "브론즈에는 스키마가 없어 저장 비용이 0이라서",
    ],
    answer: 0,
    explanation:
      "운영 DB에는 현재 상태만 남는다. 원본을 날짜별로 쌓아 두면 정제·정의가 바뀌어도 그 시점의 원본에서 다시 계산할 수 있다. 대시보드는 브론즈가 아니라 골드를 읽는다.",
    anchor: "원본-정제-쓰임새로-나눈-세-칸",
  },
  {
    id: "data-warehouse-architecture-3",
    post: "data-warehouse-architecture",
    question: "킴볼 방식에서 마트들이 따로 놀지 않게 하는 장치는?",
    choices: [
      "모든 마트를 3NF로 정규화하기",
      "날짜·회원·상품 같은 차원을 모든 마트가 같은 모양으로 공유하는 공통 차원",
      "마트마다 원본을 직접 끌어오기",
      "마트를 하나의 큰 넓은 테이블로 합치기",
    ],
    answer: 1,
    explanation:
      "킴볼은 업무 과정마다 마트를 빠르게 짓되 공통 차원(conformed dimension)을 공유해 마트 사이의 숫자를 맞춘다. 3NF 통합 모델을 먼저 짓는 쪽은 인먼 방식이다.",
    anchor: "중앙부터-짓느냐-부서별로-짓느냐",
  },
  {
    id: "data-warehouse-architecture-4",
    post: "data-warehouse-architecture",
    question: "부서가 각자 원본을 직접 끌어다 독립 마트를 지으면 생기는 문제는?",
    choices: [
      "마트가 너무 작아 쿼리가 느려진다",
      "권한을 마트 단위로 나눌 수 없다",
      "원본 DB의 스키마가 자동으로 바뀐다",
      "같은 지표가 마트마다 다르게 정의되어 숫자가 어긋난다",
    ],
    answer: 3,
    explanation:
      "공통 정제 칸이나 공통 차원을 거치지 않으면 마트마다 매출과 회원 수의 뜻이 달라진다. 처음 장면의 매출 세 개가 마트 세 개로 굳는 셈이다.",
    anchor: "데이터-마트를-따로-두는-이유",
  },
  {
    id: "data-warehouse-architecture-5",
    post: "data-warehouse-architecture",
    question: "레이크하우스가 데이터 레이크에 더하는 것으로 맞는 것은?",
    choices: [
      "파일을 쓰지 않고 전용 디스크 형식에만 저장한다",
      "스키마를 강제하지 않아 아무 파일이나 넣게 한다",
      "Parquet 파일 묶음에 커밋 로그를 붙여 ACID 트랜잭션, 스키마 관리, 타임 트래블을 준다",
      "계산과 저장을 다시 한 서버에 묶는다",
    ],
    answer: 2,
    explanation:
      "Delta Lake, Iceberg, Hudi 같은 테이블 포맷이 레이크의 파일 위에 트랜잭션과 스키마 관리를 얹는다. 그래서 한 벌의 데이터를 Spark, Trino, 웨어하우스가 함께 읽을 수 있다.",
    anchor: "레이크-웨어하우스-그리고-레이크하우스",
  },
  {
    id: "data-warehouse-architecture-6",
    post: "data-warehouse-architecture",
    question: "DuckDB 실행 계획에 Scanning Files: 8/8이 찍혔다. 8월 데이터만 원했다면 가장 먼저 의심할 것은?",
    choices: [
      "파티션 키가 아닌 컬럼으로 걸러 파티션 건너뛰기가 일어나지 않았다",
      "컬럼 저장이 아니라 행 저장으로 바뀌었다",
      "Parquet 압축이 꺼져 있다",
      "계산 클러스터가 너무 작다",
    ],
    answer: 0,
    explanation:
      "파티션 조건이 먹으면 맞는 파일만 남아 1/8처럼 찍힌다. created_at을 날짜로 바꿔 거르는 식으로 파티션 키(month)가 아닌 컬럼을 조건에 쓰면 모든 파일을 연다.",
    anchor: "저장과-계산을-떼어-놓으면",
  },
  {
    id: "data-warehouse-architecture-7",
    post: "data-warehouse-architecture",
    question: "BigQuery on-demand 요금에서 SELECT * FROM 큰_테이블 LIMIT 10의 비용은?",
    choices: [
      "10행만 읽으니 거의 0이다",
      "참조한 모든 컬럼의 처리 바이트로 매겨져 LIMIT이 있어도 줄지 않는다",
      "LIMIT이 있으면 첫 파티션만 센다",
      "쿼리 실행 시간으로만 매긴다",
    ],
    answer: 1,
    explanation:
      "on-demand 요금은 쿼리가 참조한 컬럼의 처리 바이트 기준이라 LIMIT으로 줄지 않는다. 필요한 컬럼만 고르고 파티션 조건을 걸어야 줄어든다. 실행 시간 기준으로 매기는 쪽은 Snowflake의 웨어하우스 크레딧이다.",
    anchor: "읽은-만큼-내는-요금",
  },
];
