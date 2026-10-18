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
    question: "PostgreSQL에서 SELECT 'ab'::char(5) = 'ab   '::char(5)와 같은 비교를 varchar(5)로 하면 결과는 어떻게 되나?",
    choices: [
      "둘 다 참이다",
      "char는 참, varchar는 거짓이다",
      "char는 거짓, varchar는 참이다",
      "둘 다 에러가 난다",
    ],
    answer: 1,
    explanation:
      "char끼리는 뒤 공백을 무시하고 비교해서 같다고 본다. varchar는 공백도 글자로 보기 때문에 'ab'와 'ab   '는 다르다. 길이가 고정된 코드가 아니면 varchar를 쓰는 이유 중 하나다.",
    anchor: "칸마다-담을-값의-종류-정하기",
  },
  {
    id: "sql-basics-3",
    post: "sql-basics",
    question: "INSERT가 제약 위반으로 두 번 실패한 뒤 새 회원을 넣었더니 id가 하나씩 건너뛰었다. 왜 그럴까?",
    choices: [
      "실패한 INSERT가 행을 반쯤 남겼기 때문이다",
      "PRIMARY KEY가 번호를 두 칸씩 올리기 때문이다",
      "시퀀스는 나눠 준 번호를 INSERT가 실패해도 돌려받지 않기 때문이다",
      "VACUUM이 돌기 전이라 번호가 잠겨 있기 때문이다",
    ],
    answer: 2,
    explanation:
      "번호는 시퀀스가 나눠 주고, 동시에 여러 요청이 기다리지 않게 하려고 실패해도 번호를 돌려받지 않는다. 그래서 자동 번호에 빈칸이 생기는 건 정상이고, 번호가 연속인지로 데이터 누락을 판단하면 안 된다.",
    anchor: "잘못된-값을-db가-막아-주는-제약-조건",
  },
  {
    id: "sql-basics-4",
    post: "sql-basics",
    question: "orders.user_id에 ON DELETE CASCADE가 걸려 있을 때 DELETE FROM users WHERE id = 1을 실행하면?",
    choices: [
      "1번 회원의 주문이 남아 있어서 삭제가 거절된다",
      "1번 회원의 주문들의 user_id가 NULL로 바뀐다",
      "1번 회원만 지워지고 주문은 그대로 남는다",
      "1번 회원과 그 회원의 주문이 함께 지워진다",
    ],
    answer: 3,
    explanation:
      "CASCADE는 부모가 지워지면 자식 행도 같이 지운다. 문장은 하나인데 다른 테이블의 행이 함께 사라지니, 남겨야 하는 주문이나 결제 기록에는 RESTRICT나 기본값 NO ACTION으로 막아 두는 편이 안전하다. NULL로 바꾸는 건 SET NULL이다.",
    anchor: "잘못된-값을-db가-막아-주는-제약-조건",
  },
  {
    id: "sql-basics-5",
    post: "sql-basics",
    question: "Oracle에서 이미 만든 컬럼의 타입을 바꿀 때 쓰는 문법은?",
    choices: [
      "ALTER TABLE users MODIFY (phone VARCHAR2(30))",
      "ALTER TABLE users ALTER COLUMN phone VARCHAR2(30)",
      "EXEC sp_rename 'users.phone', 'VARCHAR2(30)'",
      "ALTER TABLE users CHANGE TYPE phone VARCHAR2(30)",
    ],
    answer: 0,
    explanation:
      "Oracle은 타입, NULL 여부, 기본값 변경을 MODIFY로 한다. ALTER COLUMN은 SQL Server(PostgreSQL은 ALTER COLUMN ... TYPE)의 문법이고, sp_rename은 SQL Server에서 이름을 바꾸는 저장 프로시저다.",
    anchor: "만든-테이블-고치기-alter와-rename",
  },
  {
    id: "sql-basics-6",
    post: "sql-basics",
    question: "이미 데이터가 많은 운영 테이블에 CHECK 제약을 새로 걸 때 PostgreSQL에서 ADD CONSTRAINT ... NOT VALID를 먼저 쓰는 이유는?",
    choices: [
      "제약을 영구히 검사하지 않게 하려고",
      "기존 행을 읽지 않고 제약을 걸어 쓰기를 오래 막지 않으려고",
      "기존의 잘못된 행을 자동으로 고쳐 주려고",
      "새로 들어오는 행은 검사하지 않으려고",
    ],
    answer: 1,
    explanation:
      "NOT VALID로 걸면 기존 행 검사를 건너뛰어 금방 끝나고, 그 순간부터 새로 들어오는 행은 막힌다. 기존 행은 VALIDATE CONSTRAINT로 읽기와 쓰기를 막지 않는 약한 잠금 아래에서 따로 검사한다. 잘못된 행을 자동으로 고쳐 주지는 않아서 직접 찾아 고쳐야 한다.",
    anchor: "현장에서-테이블-정의를-다시-꺼내-보는-순간",
  },
];
