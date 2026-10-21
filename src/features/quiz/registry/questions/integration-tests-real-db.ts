import type { QuizQuestion } from "../types";

export const INTEGRATION_TESTS_REAL_DB: QuizQuestion[] = [
  {
    id: "integration-tests-real-db-1",
    post: "integration-tests-real-db",
    question:
      "테스트마다 BEGIN으로 시작해 ROLLBACK으로 끝내는데, 같은 테스트 파일을 다시 돌리니 첫 사용자의 id가 1이 아니라 4였다. 왜 그런가?",
    choices: [
      "ROLLBACK이 실패해 행이 남았다",
      "시퀀스는 트랜잭션 밖에서 움직여서 롤백해도 이미 나간 번호가 돌아오지 않는다",
      "pg가 bigint를 문자열로 바꾸면서 번호가 밀렸다",
      "IDENTITY 열은 매번 3씩 늘어난다",
    ],
    answer: 1,
    explanation:
      "시퀀스(IDENTITY도 안에서는 시퀀스)는 여러 트랜잭션이 막히지 않고 번호를 받도록 롤백 대상이 아니다. 행은 모두 사라졌지만 1~3번은 이미 쓰였다. 그래서 테스트에 id 값을 박지 않고 팩토리가 돌려준 id를 쓴다.",
    anchor: "되돌려도-남는-것-되돌려서-놓치는-것",
  },
  {
    id: "integration-tests-real-db-2",
    post: "integration-tests-real-db",
    question:
      "외래 키가 DEFERRABLE INITIALLY DEFERRED인 테이블에 없는 사용자의 주문을 넣는 테스트가, 롤백 방식에서는 에러 없이 통과해 버렸다. 이유와 고치는 법은?",
    choices: [
      "외래 키 검사가 커밋 때 일어나는데 커밋이 오지 않는다. BEGIN 뒤에 SET CONSTRAINTS ALL IMMEDIATE를 보낸다",
      "외래 키는 테스트 DB에서 꺼져 있다. 템플릿을 다시 만든다",
      "INSERT가 비동기라 아직 실행되지 않았다. await를 붙인다",
      "READ UNCOMMITTED로 바꿔야 검사가 보인다",
    ],
    answer: 0,
    explanation:
      "지연 제약은 검사를 커밋 시점으로 미루는데, ROLLBACK으로 끝나는 테스트에서는 그 시점이 영영 오지 않는다. SET CONSTRAINTS ALL IMMEDIATE로 검사를 문장 시점으로 당기면 23503이 바로 난다. PostgreSQL에서 READ UNCOMMITTED는 READ COMMITTED처럼 동작해서 아무 도움이 안 된다.",
    anchor: "되돌려도-남는-것-되돌려서-놓치는-것",
  },
  {
    id: "integration-tests-real-db-3",
    post: "integration-tests-real-db",
    question:
      "테스트가 tx.db로 사용자를 만든 뒤, 모듈의 pool로 사용자 수를 세는 함수를 부르니 0이 나왔다. 무엇이 문제인가?",
    choices: [
      "pool의 캐시가 오래됐다",
      "count(*)가 bigint를 문자열로 돌려줬다",
      "함수가 다른 커넥션을 써서 테스트 트랜잭션의 커밋되지 않은 행을 볼 수 없다",
      "TRUNCATE가 먼저 실행됐다",
    ],
    answer: 2,
    explanation:
      "테스트의 행은 아직 커밋 전이라 같은 트랜잭션 안에서만 보인다. 테스트할 코드가 커넥션을 받아 쓰도록 바꿔야 롤백 방식이 통한다. PostgreSQL에는 커밋 안 된 데이터를 읽는 격리 수준이 없다.",
    anchor: "코드가-자기-커넥션을-쓰면-테스트가-못-본다",
  },
  {
    id: "integration-tests-real-db-4",
    post: "integration-tests-real-db",
    question:
      "테스트가 BEGIN을 연 상태에서, 테스트할 코드가 스스로 BEGIN과 COMMIT을 보냈다. 테스트가 마지막에 ROLLBACK하면 어떻게 되나?",
    choices: [
      "안쪽 BEGIN이 세이브포인트가 되어 안쪽 작업만 되돌아간다",
      "에러가 나서 테스트가 실패한다",
      "안쪽 COMMIT은 무시되고 전부 되돌아간다",
      "안쪽 COMMIT이 바깥 트랜잭션까지 커밋해서 ROLLBACK은 경고만 내고 행이 남는다",
    ],
    answer: 3,
    explanation:
      "PostgreSQL은 안쪽 BEGIN에 'already a transaction in progress' 경고만 내고 무시한다. 그 뒤 COMMIT은 테스트가 연 트랜잭션을 통째로 커밋하고, 테스트의 ROLLBACK은 'no transaction in progress' 경고만 남긴다. 중첩이 필요하면 SAVEPOINT를 쓴다.",
    anchor: "코드가-자기-커넥션을-쓰면-테스트가-못-본다",
  },
  {
    id: "integration-tests-real-db-5",
    post: "integration-tests-real-db",
    question:
      "찾고 나서 넣는 가입 코드(v1)를 같은 이메일로 동시에 두 번 부르는 테스트가 30번 중 29번 23505로 실패했다. 이 경쟁을 없애는 가장 직접적인 방법은?",
    choices: [
      "찾기 전에 setTimeout으로 잠깐 기다린다",
      "INSERT ... ON CONFLICT ((lower(email))) DO NOTHING RETURNING으로 찾기와 넣기를 한 문장으로 합친다",
      "테스트를 --test-concurrency=1로 돌린다",
      "findByEmail을 두 번 부른다",
    ],
    answer: 1,
    explanation:
      "두 요청이 모두 '없다'를 본 뒤 넣으려 하니 하나는 유니크 인덱스에 막힌다. 한 문장으로 넣고 충돌이면 0행을 받게 하면 30번 모두 통과했다. 테스트 동시 실행 수를 줄이는 건 운영의 동시 요청과 상관없다.",
    anchor: "고쳤는데-동시에-오면-또-터진다",
  },
  {
    id: "integration-tests-real-db-6",
    post: "integration-tests-real-db",
    question:
      "node --test로 두 테스트 파일이 같은 DB에서 각각 TRUNCATE로 정리하며 돌자 '0 !== 1', '2 !== 1' 실패가 섞여 나왔다. 병렬성을 살리면서 고치는 방법은?",
    choices: [
      "파일(프로세스)마다 템플릿 DB에서 복제한 DB를 따로 준다",
      "TRUNCATE 대신 DELETE를 쓴다",
      "테스트마다 sleep을 넣어 순서를 벌린다",
      "RESTART IDENTITY를 뺀다",
    ],
    answer: 0,
    explanation:
      "Node 22 러너는 파일마다 프로세스를 띄워 병렬로 돌리니, 같은 테이블을 서로 비우고 채운다. 프로세스마다 DB를 나누면 10개 모두 통과했다. DELETE로 바꿔도 서로의 행을 지우는 건 같다.",
    anchor: "파일이-동시에-돌면-같은-테이블을-두고-싸운다",
  },
  {
    id: "integration-tests-real-db-7",
    post: "integration-tests-real-db",
    question:
      "HTTP 통합 테스트가 모두 통과했는데 프로세스가 10초쯤 늦게 끝난다. after 훅에서 무엇을 빠뜨렸을 가능성이 큰가?",
    choices: [
      "server.listen()",
      "TRUNCATE",
      "pool.end()",
      "SET CONSTRAINTS ALL IMMEDIATE",
    ],
    answer: 2,
    explanation:
      "닫지 않은 pg 풀의 커넥션이 이벤트 루프를 붙잡고 있다가, 기본 유휴 타임아웃 10초가 지나 닫히고 나서야 프로세스가 끝났다. 강제 종료 옵션보다 새는 자원을 찾아 닫는 게 먼저다.",
    anchor: "http-서버를-띄워-요청으로-확인한다",
  },
];
