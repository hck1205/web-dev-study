import type { QuizQuestion } from "../types";

export const POSTGRES_FUNCTIONS_TRIGGERS: QuizQuestion[] = [
  {
    id: "postgres-functions-triggers-1",
    post: "postgres-functions-triggers",
    question: "본문이 똑같은 PL/pgSQL 함수를 WHERE created_at >= f()에 썼는데, 하나는 Seq Scan, 하나는 Index Only Scan이 나왔다. 무엇이 달랐을까?",
    choices: [
      "한쪽은 SECURITY DEFINER였다",
      "한쪽은 RETURNS TABLE로 만들었다",
      "한쪽은 EXCEPTION 블록이 있었다",
      "한쪽은 VOLATILE(또는 변동성 미지정), 다른 쪽은 STABLE이었다",
    ],
    answer: 3,
    explanation:
      "VOLATILE 함수는 행마다 결과가 다를 수 있다고 보므로 인덱스 탐색의 기준값으로 쓸 수 없고 행마다 다시 부른다. STABLE이면 한 문장 안에서 값이 같다고 믿고 한 번 불러 Index Cond로 쓴다. 변동성을 안 적으면 VOLATILE이다.",
    anchor: "함수에-붙이는-약속-변동성",
  },
  {
    id: "postgres-functions-triggers-2",
    post: "postgres-functions-triggers",
    question: "CREATE INDEX ON orders ((created_at::date))가 \"functions in index expression must be marked IMMUTABLE\"로 실패하는 이유는?",
    choices: [
      "timestamptz를 date로 바꾸는 결과가 세션 시간대에 따라 달라져서",
      "date 타입은 인덱스를 만들 수 없어서",
      "식 인덱스는 PL/pgSQL 함수만 쓸 수 있어서",
      "created_at에 이미 인덱스가 있어서",
    ],
    answer: 0,
    explanation:
      "timestamptz의 날짜 부분은 어느 시간대로 보느냐에 따라 달라지므로 이 변환은 STABLE이다. 식 인덱스에는 IMMUTABLE만 허용되니 (created_at AT TIME ZONE 'Asia/Seoul')::date처럼 시간대를 고정하면 만들어진다.",
    anchor: "함수에-붙이는-약속-변동성",
  },
  {
    id: "postgres-functions-triggers-3",
    post: "postgres-functions-triggers",
    question: "드라이버가 자동으로 BEGIN을 보낸 상태에서 안에 COMMIT이 있는 프로시저를 CALL하면?",
    choices: [
      "프로시저 안의 COMMIT이 바깥 트랜잭션까지 커밋한다",
      "COMMIT이 무시되고 끝까지 실행된다",
      "\"invalid transaction termination\" 오류가 난다",
      "프로시저가 새 연결을 열어 따로 커밋한다",
    ],
    answer: 2,
    explanation:
      "프로시저 안의 트랜잭션 제어는 CALL이 트랜잭션 블록 밖에서 실행될 때만 된다. 바깥에서 이미 트랜잭션을 열었다면 안쪽 COMMIT은 실패한다. 함수는 애초에 COMMIT을 할 수 없다.",
    anchor: "트랜잭션을-나눠-커밋하는-프로시저",
  },
  {
    id: "postgres-functions-triggers-4",
    post: "postgres-functions-triggers",
    question: "같은 트랜잭션에서 books 두 행을 고쳤더니 BEFORE 트리거가 넣은 updated_at이 마이크로초까지 같았다. 이유는?",
    choices: [
      "트리거가 문장 단위로 한 번만 돌아서",
      "timestamptz가 초 단위까지만 저장해서",
      "WHEN 조건이 두 번째 행을 건너뛰어서",
      "now()가 트랜잭션이 시작된 시각을 돌려줘서",
    ],
    answer: 3,
    explanation:
      "now()는 트랜잭션 시작 시각이라 같은 트랜잭션 안에서는 항상 같은 값이다. 문장마다 실제 시각이 필요하면 clock_timestamp()를 쓴다. 트리거는 FOR EACH ROW라 행마다 돌았다.",
    anchor: "테이블이-바뀔-때-끼어드는-트리거",
  },
  {
    id: "postgres-functions-triggers-5",
    post: "postgres-functions-triggers",
    question: "BEFORE UPDATE 행 트리거 a_note와 b_note가 있다. b_note를 먼저 만들었다면 실행 순서는?",
    choices: [
      "a_note → b_note (이름 알파벳 순서)",
      "b_note → a_note (만든 순서)",
      "순서가 정해져 있지 않다",
      "둘 중 하나만 실행된다",
    ],
    answer: 0,
    explanation:
      "같은 시점과 단위의 트리거는 만든 순서가 아니라 이름의 알파벳 순서로 실행된다. 그래서 순서가 중요하면 이름 앞에 번호나 접두사를 붙여 정한다.",
    anchor: "트리거가-실행되는-순서",
  },
  {
    id: "postgres-functions-triggers-6",
    post: "postgres-functions-triggers",
    question: "19만 행을 한 번에 UPDATE하면서 감사 로그를 남길 때, 문장 단위 트리거 + 전이 테이블이 행 트리거보다 유리한 이유는?",
    choices: [
      "문장 트리거는 트랜잭션 밖에서 실행돼서",
      "함수를 행마다 부르지 않고 한 번 불러 INSERT ... SELECT로 처리해서",
      "전이 테이블은 WAL을 쓰지 않아서",
      "문장 트리거만 NEW를 고칠 수 있어서",
    ],
    answer: 1,
    explanation:
      "REFERENCING OLD TABLE ... NEW TABLE로 바뀐 행 전체를 테이블처럼 받아 한 번의 INSERT ... SELECT로 기록한다. 예제에서 트리거 시간은 calls=192088, 865ms에서 calls=1, 519ms로 줄었다. NEW를 고치는 일은 오히려 행 단위 BEFORE 트리거만 할 수 있다.",
    anchor: "행-20만-개를-고칠-때-트리거가-치르는-값",
  },
  {
    id: "postgres-functions-triggers-7",
    post: "postgres-functions-triggers",
    question: "SECURITY DEFINER 함수가 스키마 없이 INSERT INTO access_log를 하는데, 호출자가 같은 이름의 임시 테이블을 만들면 어떻게 되나? (search_path 미설정)",
    choices: [
      "권한 오류가 난다",
      "기록이 두 테이블 모두에 들어간다",
      "기록이 호출자의 임시 테이블로 들어간다",
      "임시 테이블은 함수 안에서 보이지 않아 원래 테이블에 들어간다",
    ],
    answer: 2,
    explanation:
      "pg_temp는 search_path에 명시하지 않으면 테이블을 찾을 때 맨 앞에서 검색된다. 그래서 소유자 권한으로 도는 함수도 호출자의 임시 테이블에 쓴다. SET search_path = public, pg_temp로 고정해 pg_temp를 맨 뒤로 보낸다.",
    anchor: "만든-사람-권한으로-도는-security-definer",
  },
];
