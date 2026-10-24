import type { QuizQuestion } from "../types";

export const POSTGRES_QUERY_PLANNER: QuizQuestion[] = [
  {
    id: "postgres-query-planner-1",
    post: "postgres-query-planner",
    question:
      "relpages가 11,096이고 reltuples가 100만인 테이블에 `WHERE amount > 90000` 조건 하나로 순차 스캔하면 기본 설정에서 총비용은 얼마로 계산되나?",
    choices: ["21,096", "23,596", "44,384", "11,096"],
    answer: 1,
    explanation:
      "페이지 11,096 × seq_page_cost 1, 행 100만 × cpu_tuple_cost 0.01, 여기에 행마다 비교 연산 한 번 × cpu_operator_cost 0.0025를 더해 23,596이다. 21,096은 조건이 없을 때의 비용이다.",
    anchor: "비용은-페이지와-행으로-센다",
  },
  {
    id: "postgres-query-planner-2",
    post: "postgres-query-planner",
    question:
      "user_id의 MCV가 {1}(빈도 0.2)뿐이고 n_distinct가 5만이다. MCV에 없는 user_id = 4242의 선택도는 어떻게 계산되나?",
    choices: [
      "1 ÷ 50,000",
      "MCV 빈도의 평균",
      "(1 − 0.2 − null_frac) ÷ (50,000 − 1)",
      "히스토그램에서 4242가 든 칸의 비율",
    ],
    answer: 2,
    explanation:
      "MCV와 NULL이 차지하고 남은 비율을 MCV가 아닌 나머지 값들이 똑같이 나눠 갖는다고 본다. 1 ÷ n_distinct는 값을 모르는 generic plan이 쓰는 방식이고, 히스토그램은 범위 조건에 쓴다.",
    anchor: "몇-행이-나올지-짐작하는-법",
  },
  {
    id: "postgres-query-planner-3",
    post: "postgres-query-planner",
    question:
      "city가 정해지면 zip이 정해지는 테이블에서 `city = 'city7' AND zip = 'zip7'`의 추정이 94행, 실제가 1만 행으로 나왔다. 왜 이렇게 틀리고 무엇으로 고치나?",
    choices: [
      "통계 표본이 작아서다. default_statistics_target을 올린다",
      "두 조건을 독립으로 보고 선택도를 곱해서다. CREATE STATISTICS로 dependencies를 만든다",
      "인덱스가 없어서다. (city, zip) 인덱스를 만든다",
      "random_page_cost가 높아서다. 1.1로 낮춘다",
    ],
    answer: 1,
    explanation:
      "플래너는 기본적으로 조건끼리 관계없다고 보고 0.0097 × 0.0097을 곱한다. 확장 통계의 dependencies가 city → zip 관계를 알려 주면 추정이 10,500행으로 맞아진다. 통계 목표를 올려도 곱하는 가정은 그대로다.",
    anchor: "조건-두-개를-곱하면-틀리는-경우",
  },
  {
    id: "postgres-query-planner-4",
    post: "postgres-query-planner",
    question: "추정 행 수가 실제보다 훨씬 작게 나오면 어떤 조인 방법이 골라지기 쉽고, 왜 위험한가?",
    choices: [
      "Hash Join. 해시 테이블이 메모리를 넘친다",
      "Merge Join. 정렬을 다시 해야 한다",
      "Nested Loop. 바깥 행 수만큼 안쪽 탐색이 반복되고 그 오차가 위 조인으로 곱해진다",
      "조인 방법은 행 수와 관계없이 인덱스 유무로만 정해진다",
    ],
    answer: 2,
    explanation:
      "Nested Loop의 비용은 바깥 행 수에 비례하므로 바깥이 작다고 믿으면 가장 싸 보인다. 실제 행이 많으면 loops가 그만큼 늘고, 틀린 행 수가 다음 조인의 입력이 되어 또 Nested Loop를 고르게 만든다.",
    anchor: "추정이-틀리면-조인-방법이-바뀐다",
  },
  {
    id: "postgres-query-planner-5",
    post: "postgres-query-planner",
    question:
      "prepared statement로 돌리던 쿼리가 여섯 번째 실행부터 특정 값에서만 느려졌다. psql에 값을 직접 넣으면 빠르다. 가장 그럴듯한 원인은?",
    choices: [
      "다섯 번 뒤 generic plan이 custom 평균보다 싸 보여 값을 모르는 계획으로 넘어갔다",
      "여섯 번째부터 autovacuum이 통계를 지웠다",
      "prepared statement는 여섯 번째부터 병렬 계획을 끈다",
      "psql은 실행 계획 캐시를 쓰지 않아서 원래 더 빠르다",
    ],
    answer: 0,
    explanation:
      "plan_cache_mode가 auto면 처음 다섯 번은 custom plan으로 돌리고, 여섯 번째에 generic plan 비용이 custom 평균(계획 비용 포함)보다 싸면 그 뒤로 generic을 쓴다. generic은 값을 평균적인 값으로 보므로 치우친 값에서 크게 틀린다. psql에 값을 넣은 쿼리는 매번 custom plan이다.",
    anchor: "다섯-번-실행한-뒤에-바뀌는-계획",
  },
  {
    id: "postgres-query-planner-6",
    post: "postgres-query-planner",
    question:
      "pgJDBC(prepareThreshold 기본 5)를 쓰는 앱에서 generic plan 문제가 연결마다 다르게 나타나고 재시작하면 한동안 사라지는 이유는?",
    choices: [
      "JDBC가 실행 계획을 앱 메모리에 캐시하기 때문이다",
      "서버 쪽 문장과 custom/generic 판정이 연결마다 따로 일어나서, 연결이 처음 받은 값에 따라 결과가 갈리기 때문이다",
      "PostgreSQL이 재시작할 때마다 통계를 다시 모으기 때문이다",
      "prepareThreshold를 넘으면 드라이버가 쿼리를 캐시에서 지우기 때문이다",
    ],
    answer: 1,
    explanation:
      "드라이버는 같은 문장을 다섯 번 실행한 뒤 서버에 이름 붙은 문장을 만들고, 서버는 그 연결에서 다시 다섯 번 custom plan을 돌린 뒤 판정한다. 연결마다 처음 받은 값이 달라 어떤 연결은 generic으로 넘어가고 어떤 연결은 남는다. 재시작하면 연결과 문장이 새로 생겨 판정 전 상태로 돌아간다.",
    anchor: "드라이버와-풀이-문장을-준비하는-방식",
  },
  {
    id: "postgres-query-planner-7",
    post: "postgres-query-planner",
    question:
      "판매자별 최근 주문 20건 쿼리가 generic plan에서 일부 판매자만 느리다. plan_cache_mode를 건드리기 전에 먼저 시도할 만한 근본적인 방법은?",
    choices: [
      "enable_indexscan을 서버 전체에서 끈다",
      "join_collapse_limit를 1로 둔다",
      "(shop_id, created_at) 복합 인덱스처럼 값과 상관없이 좋은 계획이 생기는 길을 만든다",
      "PREPARE를 쓰지 않도록 모든 쿼리를 문자열 연결로 만든다",
    ],
    answer: 2,
    explanation:
      "복합 인덱스가 있으면 어떤 판매자든 그 판매자의 행을 시간 순으로 20개만 읽으면 되므로 generic plan이어도 빠르다. enable_* 스위치를 서버 전체에서 끄면 다른 쿼리의 좋은 계획까지 막고, 문자열 연결은 SQL 주입 위험을 만든다.",
    anchor: "힌트-없이-계획을-바꾸는-방법",
  },
];
