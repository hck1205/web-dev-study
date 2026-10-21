import type { QuizQuestion } from "../types";

export const SQL_VIEWS_MATERIALIZED: QuizQuestion[] = [
  {
    id: "sql-views-materialized-1",
    post: "sql-views-materialized",
    question:
      "SELECT * FROM student_progress WHERE id = 1의 실행 계획에 뷰 이름이 없고 students_pkey Index Cond: (id = 1)이 보인다. 무엇이 일어났나?",
    choices: [
      "뷰가 결과를 캐시해 두고 인덱스로 찾았다",
      "리라이터가 뷰를 원래 쿼리로 펼치고, 플래너가 GROUP BY 키 조건을 안으로 밀어 넣었다",
      "뷰에 자동으로 인덱스가 만들어졌다",
      "뷰 조회는 항상 기본 키로만 읽는다",
    ],
    answer: 1,
    explanation:
      "뷰는 재작성 규칙으로 저장돼 조회 때 원래 쿼리로 바뀐다. id는 GROUP BY 키라서 묶기 전에 걸러도 결과가 같아 기본 키 조건이 됐다. 뷰는 데이터를 저장하지 않는다.",
    anchor: "뷰는-조회할-때-원래-쿼리로-펼쳐진다",
  },
  {
    id: "sql-views-materialized-2",
    post: "sql-views-materialized",
    question: "SELECT *로 만든 seoul_students 뷰가 students에 새로 추가한 email 컬럼을 보여 주지 않는 이유는?",
    choices: [
      "뷰가 옛 데이터를 저장하고 있어서",
      "email이 NULL이라서",
      "뷰를 만드는 순간 *가 그때의 컬럼 목록으로 바뀌어 저장돼서",
      "새 컬럼은 ANALYZE 후에 보여서",
    ],
    answer: 2,
    explanation:
      "pg_get_viewdef로 보면 * 대신 id, name, city가 적혀 있다. 같은 정의로 CREATE OR REPLACE VIEW를 다시 돌리면 새 컬럼이 끝에 붙는다. 데이터를 저장하는 건 머티리얼라이즈드 뷰다.",
    anchor: "select-는-만든-날의-컬럼-목록으로-굳는다",
  },
  {
    id: "sql-views-materialized-3",
    post: "sql-views-materialized",
    question:
      "status = 'active' 조건의 단순 뷰로 status를 'refunded'인 행을 INSERT했다. WITH CHECK OPTION이 없으면 어떻게 되나?",
    choices: [
      "에러가 난다",
      "status가 active로 바뀌어 들어간다",
      "INSERT는 무시되고 0행이 된다",
      "테이블에는 들어가지만 그 뷰에서는 보이지 않는다",
    ],
    answer: 3,
    explanation:
      "자동 갱신 가능한 뷰는 뷰의 WHERE를 검사하지 않고 테이블에 쓴다. 그래서 저장했는데 목록에 없는 행이 생긴다. WITH CHECK OPTION을 붙이면 new row violates check option 에러로 막고, 행을 뷰 밖으로 내보내는 UPDATE도 막는다.",
    anchor: "뷰를-지나-쓰기와-with-check-option",
  },
  {
    id: "sql-views-materialized-4",
    post: "sql-views-materialized",
    question:
      "seoul_students 뷰를 COST 0.0000001인 함수로 거르자 함수가 busan 사람 이름까지 받았다. security_barrier = true가 바꾸는 것은?",
    choices: [
      "뷰의 조건을 먼저 끝낸 뒤 바깥 조건을 적용해 숨긴 행이 함수에 닿지 않게 한다",
      "함수 실행 권한을 빼앗는다",
      "뷰를 조회하는 사람의 권한으로 테이블을 읽게 한다",
      "RAISE NOTICE를 숨긴다",
    ],
    answer: 0,
    explanation:
      "뷰가 펼쳐지면 조건이 한 Filter에 섞이고 플래너는 싼 조건을 앞에 둔다. security_barrier는 뷰를 서브쿼리로 남겨 뷰 조건을 먼저 돌린다. 조회자 권한으로 읽게 하는 것은 security_invoker다.",
    anchor: "뷰로-숨긴-행이-함수로-새어-나간다",
  },
  {
    id: "sql-views-materialized-5",
    post: "sql-views-materialized",
    question: "일반 REFRESH MATERIALIZED VIEW가 도는 동안 대시보드의 SELECT가 lock timeout으로 끊겼다. 이유는?",
    choices: [
      "REFRESH가 행마다 RowExclusiveLock을 잡아서",
      "REFRESH가 AccessExclusiveLock을 잡아 SELECT의 AccessShareLock과 충돌해서",
      "머티리얼라이즈드 뷰는 원래 동시에 읽을 수 없어서",
      "유니크 인덱스가 없어서",
    ],
    answer: 1,
    explanation:
      "일반 REFRESH는 결과를 통째로 바꾸며 가장 강한 잠금을 쥔다. pg_locks에 AccessExclusiveLock이 보였고, SELECT는 기다리다 끊겼다. CONCURRENTLY는 ExclusiveLock이라 읽기가 바로 됐다.",
    anchor: "refresh가-잡는-잠금을-직접-본다",
  },
  {
    id: "sql-views-materialized-6",
    post: "sql-views-materialized",
    question:
      "원본이 거의 바뀌지 않았는데도 REFRESH ... CONCURRENTLY가 일반 REFRESH보다 두 배 넘게 걸렸다. 맞는 설명은?",
    choices: [
      "CONCURRENTLY는 잠금을 기다리느라 느리다",
      "CONCURRENTLY는 바뀐 행만 계산해서 원래 더 빠르다. 측정이 잘못됐다",
      "새 결과를 전부 계산한 뒤 옛 결과와 유니크 키로 비교하는 일이 더 붙는다",
      "CONCURRENTLY는 원본 테이블을 두 번 잠근다",
    ],
    answer: 2,
    explanation:
      "CONCURRENTLY도 새 결과는 전부 계산한다. 그 위에 옛 결과와 맞춰 보는 비교가 붙고, 바뀐 행은 지우고 다시 넣어 죽은 행을 남긴다. 장점은 읽기를 막지 않는다는 것 하나다.",
    anchor: "concurrently는-공짜가-아니다",
  },
];
