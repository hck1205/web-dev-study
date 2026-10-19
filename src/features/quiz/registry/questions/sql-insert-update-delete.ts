import type { QuizQuestion } from "../types";

export const SQL_INSERT_UPDATE_DELETE: QuizQuestion[] = [
  {
    id: "sql-insert-update-delete-1",
    post: "sql-insert-update-delete",
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
    id: "sql-insert-update-delete-2",
    post: "sql-insert-update-delete",
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
    id: "sql-insert-update-delete-3",
    post: "sql-insert-update-delete",
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
  {
    id: "sql-insert-update-delete-4",
    post: "sql-insert-update-delete",
    question: "PostgreSQL에서 TRUNCATE logs를 실행한 뒤 새 행을 넣으면 id는 어떻게 되나? (RESTART IDENTITY는 붙이지 않았다)",
    choices: [
      "1부터 다시 시작한다",
      "앞에서 쓰던 번호를 이어 간다",
      "TRUNCATE한 테이블에는 행을 넣을 수 없다",
      "가장 마지막에 지운 행의 번호를 다시 쓴다",
    ],
    answer: 1,
    explanation:
      "PostgreSQL의 TRUNCATE는 기본으로 번호를 이어 가고, RESTART IDENTITY를 붙여야 1부터 다시 센다. MySQL과 SQL Server의 TRUNCATE는 자동 증가 값을 처음으로 되돌린다는 점이 다르다.",
    anchor: "delete-truncate-drop은-지우는-범위가-다르다",
  },
  {
    id: "sql-insert-update-delete-5",
    post: "sql-insert-update-delete",
    question: "pg_stat_activity에서 한 세션은 state가 idle in transaction이고, 다른 세션은 active인데 wait_event_type이 Lock이다. 가장 그럴듯한 상황은?",
    choices: [
      "두 세션 모두 쿼리를 열심히 실행하는 중이다",
      "Lock인 세션이 다른 세션을 막고 있다",
      "DB 서버의 디스크가 가득 찼다",
      "트랜잭션을 연 채 쉬고 있는 세션이 행 잠금을 쥐고 있어서 다른 세션이 기다린다",
    ],
    answer: 3,
    explanation:
      "idle in transaction은 트랜잭션을 연 채 아무것도 하지 않는 상태라 고친 행의 잠금이 그대로 남는다. 기다리는 쪽이 active이면서 Lock을 기다리고, pg_blocking_pids()로 상대를 확인할 수 있다. lock_timeout과 idle_in_transaction_session_timeout으로 재발을 막는다.",
    anchor: "열어-둔-트랜잭션이-다른-요청을-붙잡을-때",
  },
];
