import type { QuizQuestion } from "../types";

export const SQL_CTE_RECURSIVE: QuizQuestion[] = [
  {
    id: "sql-cte-recursive-1",
    post: "sql-cte-recursive",
    question: "WITH RECURSIVE의 재귀 쿼리 안에서 CTE 이름(need)이 가리키는 것은?",
    choices: [
      "지금까지 쌓인 전체 결과",
      "직전 반복에서 새로 나온 행만 (작업 테이블)",
      "앵커 쿼리의 결과만",
      "원본 테이블 전체",
    ],
    answer: 1,
    explanation:
      "재귀 쿼리는 작업 테이블, 즉 바로 앞 반복에서 새로 나온 행만 읽는다. 새 행이 0개가 되면 반복이 끝난다. 전체 결과를 매번 다시 본다면 같은 행을 계속 다시 만들게 된다.",
    anchor: "재귀-cte는-새-행이-없을-때까지-같은-쿼리를-돈다",
  },
  {
    id: "sql-cte-recursive-2",
    post: "sql-cte-recursive",
    question:
      "백엔드 실전의 선수 강의를 UNION ALL 재귀로 모아 sum(price)를 냈더니 Git 값이 두 번 더해졌다. 왜 그런가?",
    choices: [
      "재귀 CTE는 앵커 행을 항상 두 번 내보내서",
      "course_prereqs에 Git 행이 중복으로 들어가 있어서",
      "React와 Docker 두 길로 Git에 닿았고 UNION ALL은 겹친 행을 버리지 않아서",
      "sum이 NULL을 0으로 바꿔 더해서",
    ],
    answer: 2,
    explanation:
      "그래프에서는 여러 길이 한 노드에 모일 수 있다. UNION ALL은 나온 행을 모두 쌓아서 Git이 두 줄이 됐다. UNION으로 바꾸면 이미 결과에 있는 행은 버리고 다음 반복에도 넘기지 않는다.",
    anchor: "두-길로-닿은-강의는-두-번-나온다",
  },
  {
    id: "sql-cte-recursive-3",
    post: "sql-cte-recursive",
    question:
      "선수 강의 데이터에 고리(6 → 4 → 5 → 6)가 생겼다. 다음 중 쿼리가 끝나는 것은?",
    choices: [
      "UNION ALL로 id와 depth를 함께 들고 다니는 재귀",
      "UNION으로 id와 depth를 함께 들고 다니는 재귀",
      "UNION ALL로 id만 들고 다니는 재귀",
      "UNION으로 id만 들고 다니는 재귀",
    ],
    answer: 3,
    explanation:
      "UNION은 행 전체가 같을 때만 버린다. id만 있으면 한 바퀴 돈 뒤 새 행이 없어 멈추지만, depth가 있으면 바퀴마다 깊이가 달라져 매번 새 행이 되고 끝나지 않는다. UNION ALL은 어느 쪽이든 끝나지 않는다.",
    anchor: "고리-하나가-쿼리를-끝나지-않게-한다",
  },
  {
    id: "sql-cte-recursive-4",
    post: "sql-cte-recursive",
    question: "PostgreSQL 14 이상에서 CYCLE id SET is_cycle USING path를 붙이면 무엇이 달라지나?",
    choices: [
      "지나온 id를 path에 쌓고, 이미 path에 있는 id를 만나면 is_cycle을 참으로 두고 그 행에서 더 나가지 않는다",
      "고리가 있는 행을 결과에서 지우고 에러를 낸다",
      "반복 횟수를 기본 1000번으로 제한한다",
      "UNION ALL을 자동으로 UNION으로 바꾼다",
    ],
    answer: 0,
    explanation:
      "CYCLE 절은 경로 배열로 고리를 찾아 표시하고 그 길을 닫는다. 고리를 이룬 행은 결과에 남아서 WHERE is_cycle로 잘못된 데이터를 찾을 수 있다. 반복 횟수 제한은 MySQL의 cte_max_recursion_depth 이야기다.",
    anchor: "고리-하나가-쿼리를-끝나지-않게-한다",
  },
  {
    id: "sql-cte-recursive-5",
    post: "sql-cte-recursive",
    question:
      "앵커에 SELECT id, 0 AS total, 재귀 쪽에 n.total + c.price * 0.9를 쓰자 column 2 has type integer in non-recursive term but type numeric overall 에러가 났다. 어떻게 고치나?",
    choices: [
      "재귀 쪽 식을 ::integer로 바꾼다",
      "앵커에서 0::numeric으로 타입을 맞춘다",
      "UNION ALL을 UNION으로 바꾼다",
      "WITH RECURSIVE를 WITH로 바꾼다",
    ],
    answer: 1,
    explanation:
      "재귀 CTE의 컬럼 타입은 앵커가 정한다. 0은 integer라서 numeric을 내는 재귀 쪽과 맞지 않았다. 힌트대로 앵커 쪽을 캐스팅하는 것이 맞고, 재귀 쪽을 integer로 자르면 할인 금액의 소수점이 사라진다.",
    anchor: "재귀-쪽에-쓸-수-없는-문법",
  },
  {
    id: "sql-cte-recursive-6",
    post: "sql-cte-recursive",
    question:
      "20만 행 categories에서 하위 분류를 찾는 재귀 CTE의 계획에 Seq Scan on categories (rows=200000 loops=6)이 보인다. 가장 먼저 할 일은?",
    choices: [
      "work_mem을 늘린다",
      "CTE에 MATERIALIZED를 붙인다",
      "재귀 쪽 조인 컬럼인 parent_id에 인덱스를 만든다",
      "UNION ALL을 UNION으로 바꾼다",
    ],
    answer: 2,
    explanation:
      "재귀 쪽 조인은 반복마다 다시 실행되어 인덱스가 없으면 매번 테이블 전체를 읽는다. 외래 키를 걸어도 parent_id에는 인덱스가 자동으로 생기지 않는다. 인덱스를 만들자 186ms가 5.7ms가 됐다.",
    anchor: "20만-개-트리에서-반복마다-읽는-양",
  },
  {
    id: "sql-cte-recursive-7",
    post: "sql-cte-recursive",
    question:
      "WITH pick AS NOT MATERIALIZED (SELECT id FROM students ORDER BY random() LIMIT 1)를 두 번 참조하면 두 값은?",
    choices: [
      "늘 다르다. NOT MATERIALIZED라서 두 번 계산된다",
      "늘 같다. volatile 함수가 있어 NOT MATERIALIZED가 무시되고 한 번만 계산된다",
      "에러가 난다. volatile 함수는 CTE에 쓸 수 없다",
      "첫 값만 나오고 둘째는 NULL이다",
    ],
    answer: 1,
    explanation:
      "NOT MATERIALIZED는 지시가 아니라 허락에 가깝다. 안에 random() 같은 volatile 함수가 있으면 PostgreSQL은 인라인하지 않고 한 번 계산한 결과를 두 번 읽는다. 매번 다른 값이 필요하면 서브쿼리를 두 번 쓴다.",
    anchor: "with-하나는-이름-붙인-중간-결과다",
  },
];
