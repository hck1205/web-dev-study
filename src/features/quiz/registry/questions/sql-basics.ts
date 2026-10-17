import type { QuizQuestion } from "../types";

export const SQL_BASICS: QuizQuestion[] = [
  {
    id: "sql-basics-1",
    post: "sql-basics",
    question: "SQL 명령의 분류가 바르게 짝지어진 것은?",
    choices: [
      "DDL: CREATE, ALTER, DROP, TRUNCATE",
      "DML: SELECT, INSERT, GRANT",
      "DCL: COMMIT, ROLLBACK",
      "TCL: RENAME, SAVEPOINT",
    ],
    answer: 0,
    explanation:
      "TRUNCATE는 행을 비우지만 구조를 다루는 DDL로 분류한다. GRANT와 REVOKE는 권한을 다루는 DCL이고, COMMIT, ROLLBACK, SAVEPOINT가 TCL이다.",
    anchor: "명령어는-네-묶음으로-나뉜다",
  },
  {
    id: "sql-basics-2",
    post: "sql-basics",
    question: "phone이 NULL인 행이 있는 테이블에서 WHERE phone <> '010-1111-2222'를 실행하면 NULL인 행은 어떻게 되나?",
    choices: [
      "'다르다'로 판단되어 결과에 포함된다",
      "비교 결과가 UNKNOWN이라 결과에서 빠진다",
      "에러가 나서 쿼리가 실패한다",
      "빈 문자열로 바뀌어 비교된다",
    ],
    answer: 1,
    explanation:
      "NULL과의 비교는 참도 거짓도 아닌 UNKNOWN이고, WHERE는 참인 행만 남긴다. 그래서 번호가 없는 회원이 조용히 빠지고, 포함하려면 OR phone IS NULL을 붙여야 한다.",
    anchor: "null은-값이-아니라-모른다는-표시",
  },
  {
    id: "sql-basics-3",
    post: "sql-basics",
    question: "WHERE id NOT IN (1, 2, NULL)의 결과는?",
    choices: [
      "id가 1, 2가 아닌 모든 행",
      "id가 NULL인 행만",
      "에러",
      "0행",
    ],
    answer: 3,
    explanation:
      "NOT IN은 id <> 1 AND id <> 2 AND id <> NULL로 풀리고, 마지막 비교가 늘 UNKNOWN이라 어떤 행도 참이 되지 못한다. NULL이 섞일 수 있는 서브쿼리에는 NOT EXISTS를 쓴다.",
    anchor: "null은-값이-아니라-모른다는-표시",
  },
  {
    id: "sql-basics-4",
    post: "sql-basics",
    question: "SELECT name, price * 1.1 AS with_tax FROM products WHERE with_tax > 10000이 에러가 나는 이유는?",
    choices: [
      "계산식에는 별칭을 붙일 수 없어서",
      "WHERE가 SELECT보다 먼저 처리되어 별칭이 아직 없어서",
      "numeric 컬럼에 소수를 곱할 수 없어서",
      "AS를 생략해야 해서",
    ],
    answer: 1,
    explanation:
      "처리 순서는 FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY 순이라 WHERE 시점에는 SELECT의 별칭이 없다. 반대로 ORDER BY는 SELECT 뒤라 별칭을 쓸 수 있다.",
    anchor: "select-한-문장을-조각으로-읽기",
  },
  {
    id: "sql-basics-5",
    post: "sql-basics",
    question: "PostgreSQL에서 BEGIN 후 문장 하나가 에러를 내고, 이어서 COMMIT을 보내면 어떻게 되나?",
    choices: [
      "에러 난 문장만 빼고 나머지가 커밋된다",
      "에러 전까지의 문장만 커밋된다",
      "트랜잭션 전체가 롤백되고 COMMIT의 응답이 ROLLBACK이다",
      "COMMIT이 거절되고 트랜잭션은 열린 채로 남는다",
    ],
    answer: 2,
    explanation:
      "PostgreSQL은 트랜잭션 안에서 에러가 나면 그 트랜잭션을 실패 상태로 만들고 이후 문장을 모두 거절한다. COMMIT을 보내도 실제로는 ROLLBACK이 되니, 일부만 되돌리려면 미리 SAVEPOINT를 꽂아 둔다.",
    anchor: "commit-rollback-savepoint로-묶고-되돌리기",
  },
  {
    id: "sql-basics-6",
    post: "sql-basics",
    question: "Oracle에서 UPDATE를 실행하고 커밋하지 않은 채 CREATE TABLE을 실행했다. 앞의 UPDATE는?",
    choices: [
      "DDL 실행 시 자동 커밋이 일어나 함께 확정된다",
      "그대로 커밋 대기 상태로 남는다",
      "자동으로 롤백된다",
      "CREATE TABLE이 거절된다",
    ],
    answer: 0,
    explanation:
      "Oracle은 DDL 앞뒤로 자동 커밋을 해서 그 전의 DML까지 확정된다. PostgreSQL은 DDL도 트랜잭션 안에서 되돌릴 수 있어서 이런 일이 없다.",
    anchor: "delete-truncate-drop은-지우는-범위가-다르다",
  },
  {
    id: "sql-basics-7",
    post: "sql-basics",
    question: "동시에 들어오는 요청에서 '있으면 수정, 없으면 삽입'을 안전하게 하는 방법으로 가장 알맞은 것은?",
    choices: [
      "SELECT로 먼저 확인하고 결과에 따라 INSERT나 UPDATE를 보낸다",
      "DELETE 후 INSERT를 보낸다",
      "유니크 제약을 걸고 INSERT ... ON CONFLICT DO UPDATE로 한 문장에 처리한다",
      "TRUNCATE 후 다시 넣는다",
    ],
    answer: 2,
    explanation:
      "조회 후 분기하면 두 요청이 동시에 '없다'고 보고 둘 다 넣으려다 한쪽이 중복 에러를 맞는다. ON CONFLICT는 유니크 제약을 기준으로 판단과 쓰기를 한 문장 안에서 끝낸다.",
    anchor: "행-넣기와-있으면-고치기",
  },
];
