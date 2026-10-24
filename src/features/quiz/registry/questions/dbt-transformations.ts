import type { QuizQuestion } from "../types";

export const DBT_TRANSFORMATIONS: QuizQuestion[] = [
  {
    id: "dbt-transformations-1",
    post: "dbt-transformations",
    question: "dbt 모델에서 다른 모델을 읽을 때 테이블 이름을 직접 쓰지 않고 ref()를 써야 하는 가장 큰 이유는?",
    choices: [
      "ref()를 쓰면 쿼리가 더 빨리 실행되기 때문이다",
      "직접 쓴 테이블 이름은 dbt가 문법 오류로 거부하기 때문이다",
      "dbt가 ref()를 모아 의존 그래프를 만들고, 그 순서대로 실행하고 영향 범위를 계산하기 때문이다",
      "ref()가 결과를 캐시해서 같은 모델을 두 번 계산하지 않기 때문이다",
    ],
    answer: 2,
    explanation:
      "dbt는 실행 전에 모든 ref()를 모아 누가 누구를 읽는지 그래프로 만든다. 테이블 이름을 직접 쓰면 그 선이 빠져 실행 순서가 틀어지고 dbt ls --select 모델+ 같은 영향 범위 계산에서도 보이지 않는다. 직접 쓴 이름도 SQL로는 실행되니 문법 오류는 아니다.",
    anchor: "select-하나가-모델-하나",
  },
  {
    id: "dbt-transformations-2",
    post: "dbt-transformations",
    question: "stg_customers가 실수로 fct_daily_sales를 ref하게 바꾼 뒤 dbt run을 돌리면 어떻게 되나?",
    choices: [
      "SQL을 하나도 실행하기 전에 컴파일 단계에서 순환(cycle) 오류로 멈춘다",
      "stg_customers까지 만든 뒤 fct_daily_sales에서 실패한다",
      "두 모델을 번갈아 만들다 시간 초과로 끝난다",
      "경고만 내고 이름 순서대로 실행한다",
    ],
    answer: 0,
    explanation:
      "dbt는 그래프를 먼저 만들고 위상 정렬로 순서를 정한다. 들어오는 선이 끝내 0이 되지 않는 노드가 남으면 고리가 있다는 뜻이라 Found a cycle 오류로 컴파일 단계에서 멈춘다. 실행은 시작도 하지 않는다.",
    anchor: "ref가-그리는-지도",
  },
  {
    id: "dbt-transformations-3",
    post: "dbt-transformations",
    question: "where updated_at > (select max(updated_at) from this) 필터를 쓴 증분 모델에 unique_key를 주지 않았다. 이미 들어간 주문이 환불되어 updated_at이 갱신되면?",
    choices: [
      "기존 행이 환불 상태로 고쳐진다",
      "환불된 행은 기준 시각보다 앞이라 읽히지 않는다",
      "dbt가 중복 키를 감지해 실행을 멈춘다",
      "옛 paid 행이 남은 채 refunded 행이 하나 더 추가되어 같은 주문이 두 줄이 된다",
    ],
    answer: 3,
    explanation:
      "갱신된 updated_at이 기준보다 뒤라 다시 읽히는데, unique_key가 없으면 덮어쓰지 않고 그냥 추가한다. 실험에서 4번 주문이 paid와 refunded 두 줄로 남았고 unique 테스트가 이를 잡아 실패했다. dbt 실행 자체는 중복을 막지 않는다.",
    anchor: "증분-모델은-새로-온-것만-넣는다",
  },
  {
    id: "dbt-transformations-4",
    post: "dbt-transformations",
    question: "unique_key가 있는 증분 모델에서 21일 16시에 결제됐지만 늦게 적재된 주문이 빠졌다. 테이블의 max(updated_at)은 21일 18:20이었다. 알맞은 해결책은?",
    choices: [
      "unique_key를 두 컬럼으로 늘린다",
      "기준 시각을 며칠 앞으로 당겨 겹쳐 읽고, 겹친 행은 unique_key로 덮어쓴다",
      "materialized를 view로 바꾼다",
      "incremental_strategy를 append로 바꾼다",
    ],
    answer: 1,
    explanation:
      "늦게 온 행의 업무 시각이 기준보다 앞이라 필터에 걸러진 것이다. 키를 바꿔도 읽히지 않는 건 같다. lookback 구간을 두고 겹친 행은 키로 덮어쓰거나, 적재 시각 컬럼으로 거르면 잡힌다. append는 중복까지 만든다.",
    anchor: "증분-모델은-새로-온-것만-넣는다",
  },
  {
    id: "dbt-transformations-5",
    post: "dbt-transformations",
    question: "dbt 스냅숏 테이블을 --full-refresh 대상에서 빼고 따로 백업하는 이유는?",
    choices: [
      "스냅숏은 원본이 지금 상태만 들고 있어서 지우면 지난 이력을 다시 만들 수 없기 때문이다",
      "스냅숏은 뷰라서 지울 수 없기 때문이다",
      "스냅숏은 원본 DB의 모든 변경을 CDC로 받아 크기가 너무 크기 때문이다",
      "full-refresh를 하면 dbt_valid_to가 모두 NULL이 되어 오류가 나기 때문이다",
    ],
    answer: 0,
    explanation:
      "일반 모델은 원본에서 언제든 다시 계산할 수 있지만 스냅숏은 돌릴 때마다 본 변경을 쌓아 둔 기록이다. 원본에는 옛 등급이 남아 있지 않으니 지우면 끝이다. 스냅숏은 돌릴 때만 변경을 보므로 CDC처럼 모든 변경을 받지도 않는다.",
    anchor: "스냅숏으로-등급이-바뀐-날을-남긴다",
  },
  {
    id: "dbt-transformations-6",
    post: "dbt-transformations",
    question: "원본에 오타 상태 paied가 들어와 stg_orders의 accepted_values 테스트가 실패했다. dbt build로 돌렸다면 fct_daily_sales는?",
    choices: [
      "틀린 데이터로 다시 만들어지고 마지막에 실패가 보고된다",
      "paied 행만 빼고 다시 만들어진다",
      "SKIP되어 어제 상태 그대로 남는다",
      "테이블이 지워진다",
    ],
    answer: 2,
    explanation:
      "dbt build는 모델과 테스트를 그래프 순서대로 섞어 돌리고, 테스트가 실패한 모델의 자손은 건너뛴다. 실험에서 fct_daily_sales와 fct_orders가 SKIP됐다. dbt run 후 dbt test를 따로 돌렸다면 틀린 데이터로 먼저 다 만들어졌을 것이다.",
    anchor: "테스트가-모델-사이를-막는다",
  },
  {
    id: "dbt-transformations-7",
    post: "dbt-transformations",
    question: "Airflow 태스크 하나에서 dbt build를 통째로 부르는 방식의 약점으로 알맞은 것은?",
    choices: [
      "dbt가 모델 사이 순서를 정하지 못한다",
      "모델 하나가 실패해도 Airflow에는 태스크 하나의 실패로만 보이고 다시 돌릴 때도 통째로 돈다",
      "dbt 테스트가 실행되지 않는다",
      "Airflow가 dbt의 의존 그래프를 덮어써서 순환이 생긴다",
    ],
    answer: 1,
    explanation:
      "통째로 부르면 설정은 쉽지만 Airflow 쪽에서는 어느 모델이 실패했는지 보이지 않고 재시도 단위도 전체가 된다. 모델마다 태스크로 펼치면 반대로 DAG가 커진다. 순서와 테스트는 여전히 dbt가 맡는다.",
    anchor: "airflow와-dbt가-일을-나누는-자리",
  },
];
