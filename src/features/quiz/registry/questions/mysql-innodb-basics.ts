import type { QuizQuestion } from "../types";

export const MYSQL_INNODB_BASICS: QuizQuestion[] = [
  {
    id: "mysql-innodb-basics-1",
    post: "mysql-innodb-basics",
    question:
      "REPEATABLE READ에서 두 세션이 서로 다른 없는 이메일(kim, lee)을 FOR UPDATE로 조회한 뒤 각자 INSERT했더니 교착 상태가 났다. 왜일까?",
    choices: [
      "두 이메일이 같은 행을 가리켜서 행 잠금이 겹쳤다",
      "INSERT가 테이블 전체에 X 잠금을 걸기 때문이다",
      "둘 다 같은 간격에 간격 잠금을 쥐었고, 각자의 삽입 의도 잠금이 상대의 간격 잠금을 기다렸다",
      "AUTO_INCREMENT 잠금을 서로 기다렸다",
    ],
    answer: 2,
    explanation:
      "없는 값을 잠금 읽기로 찾으면 InnoDB는 그 값이 들어갈 간격을 잠근다. 간격 잠금끼리는 함께 쥘 수 있지만, 그 간격에 넣으려는 삽입 의도 잠금은 남의 간격 잠금과 충돌해 서로를 기다리는 원이 생긴다.",
    anchor: "처음-장면을-잠금으로-다시-읽기",
  },
  {
    id: "mysql-innodb-basics-2",
    post: "mysql-innodb-basics",
    question:
      "orders_big에서 SELECT id ... WHERE user_id = 42는 0.04ms, SELECT * ... WHERE user_id = 42는 0.5ms가 걸렸다. 차이의 이유로 맞는 것은?",
    choices: [
      "SELECT *는 보조 인덱스에서 찾은 기본 키로 클러스터드 인덱스를 행마다 한 번 더 내려가야 한다",
      "SELECT *는 인덱스를 쓰지 못하고 테이블 전체를 읽는다",
      "id 열은 버퍼 풀에, 나머지 열은 디스크에 따로 저장된다",
      "SELECT *는 결과를 정렬하느라 filesort를 한다",
    ],
    answer: 0,
    explanation:
      "InnoDB 보조 인덱스의 잎에는 기본 키 값이 들어 있어서 id만 필요하면 커버링으로 끝난다. 다른 열이 필요하면 찾은 기본 키마다 클러스터드 인덱스를 다시 내려가고, 행이 흩어져 있으면 페이지를 그만큼 더 읽는다. 두 쿼리 모두 idx_user를 탔다.",
    anchor: "테이블은-기본-키-순서로-줄-선-b-tree다",
  },
  {
    id: "mysql-innodb-basics-3",
    post: "mysql-innodb-basics",
    question:
      "버퍼 풀보다 큰 테이블을 한 번 훑는 리포트 쿼리가 돌아도 자주 쓰는 페이지가 남아 있는 이유는?",
    choices: [
      "스캔은 버퍼 풀을 거치지 않고 OS 페이지 캐시만 쓴다",
      "새로 읽은 페이지가 old 구역 머리에 들어가고, 1초가 지나 다시 읽혀야 young으로 올라가기 때문이다",
      "자주 쓰는 페이지는 디스크에 쓰지 않도록 고정된다",
      "리포트 쿼리는 자동으로 레플리카로 보내진다",
    ],
    answer: 1,
    explanation:
      "InnoDB의 LRU는 young과 old로 나뉘고, 새 페이지는 old 머리에 들어간다. 스캔은 한 페이지를 짧은 시간에 몰아 읽고 떠나니 innodb_old_blocks_time을 넘기지 못하고 old 끝으로 빠진다. 이 값을 0으로 두면 실제로 핫 페이지가 밀려났다.",
    anchor: "버퍼-풀은-오래된-쪽-머리에-새-페이지를-넣는다",
  },
  {
    id: "mysql-innodb-basics-4",
    post: "mysql-innodb-basics",
    question:
      "서버를 kill -9로 끝낸 뒤 다시 띄웠을 때, 커밋한 222는 남고 커밋하지 않은 111은 사라졌다. 각각을 해낸 것은?",
    choices: [
      "binlog가 222를 살리고, doublewrite가 111을 지웠다",
      "undo가 222를 살리고, redo가 111을 지웠다",
      "redo가 222를 다시 적용하고, undo로 111을 되돌렸다",
      "체크포인트가 둘 다 처리해서 로그는 쓰이지 않았다",
    ],
    answer: 2,
    explanation:
      "크래시 복구는 마지막 체크포인트부터 redo를 다시 적용해 커밋된 변경을 되살리고, 커밋되지 않은 트랜잭션은 undo로 백그라운드에서 롤백한다. 에러 로그의 Applying a batch of redo log records와 Rolling back trx 줄이 그 두 단계다.",
    anchor: "서버가-죽어도-커밋은-남고-커밋-안-한-것은-사라진다",
  },
  {
    id: "mysql-innodb-basics-5",
    post: "mysql-innodb-basics",
    question:
      "스냅숏을 연 트랜잭션 A가 있는 동안 다른 세션이 같은 행을 2만 번 고쳤다. A가 그 행을 다시 읽으면 어떻게 되나?",
    choices: [
      "최신 값을 읽는다. REPEATABLE READ는 커밋된 값을 보여 준다",
      "옛 값을 읽지만, undo의 버전 사슬을 되감느라 읽기가 느려진다",
      "옛 버전이 이미 지워져서 에러가 난다",
      "A가 커밋할 때까지 다른 세션의 UPDATE가 막혀 있었으니 아무 일도 없다",
    ],
    answer: 1,
    explanation:
      "A의 read view가 살아 있는 동안 purge는 그 undo를 지울 수 없고, A는 보이는 버전이 나올 때까지 DB_ROLL_PTR을 따라 되감는다. 실험에서 History list length가 20001까지 늘었고 A의 읽기는 0.00초에서 0.02초로 느려졌다.",
    anchor: "옛-버전은-undo에서-다시-만들어-읽는다",
  },
  {
    id: "mysql-innodb-basics-6",
    post: "mysql-innodb-basics",
    question:
      "REPEATABLE READ의 A가 SELECT로 회원 20의 주문 1건을 본 뒤, B가 회원 20의 주문을 하나 넣고 커밋했다. A가 UPDATE ... WHERE user_id = 20을 하면?",
    choices: [
      "스냅숏에 있던 1건만 고친다",
      "직렬화 오류로 실패한다",
      "B의 트랜잭션이 끝날 때까지 기다린 뒤 1건만 고친다",
      "최신 데이터에서 2건을 고치고, 이후 A의 SELECT에도 2건이 보인다",
    ],
    answer: 3,
    explanation:
      "InnoDB의 UPDATE는 스냅숏이 아니라 최신 커밋 값을 읽는 잠금 읽기다. 새 행까지 고치고 나면 그 행의 DB_TRX_ID가 A 자신이 되어 다음 SELECT에도 보인다. 직렬화 오류로 실패하는 건 PostgreSQL의 REPEATABLE READ다.",
    anchor: "같은-트랜잭션-안에서-select와-update가-보는-세상이-다르다",
  },
  {
    id: "mysql-innodb-basics-7",
    post: "mysql-innodb-basics",
    question:
      "sys.innodb_lock_waits에서 blocking_query가 NULL이고 sql_kill_blocking_query로 KILL QUERY 29가 제안됐다. 잠금을 풀려면?",
    choices: [
      "KILL QUERY 29를 실행한다",
      "KILL 29로 연결을 끊어 트랜잭션을 롤백시킨다",
      "기다리는 쪽의 innodb_lock_wait_timeout을 늘린다",
      "SHOW ENGINE INNODB STATUS를 실행하면 잠금이 해제된다",
    ],
    answer: 1,
    explanation:
      "blocking_query가 NULL이면 막는 쪽은 실행 중인 문장 없이 트랜잭션만 열어 둔 상태라서 KILL QUERY는 아무것도 멈추지 못한다. 연결을 끊어야 트랜잭션이 롤백되고 잠금이 풀린다. 근본 원인은 앱의 트랜잭션 경계이니 그쪽도 고친다.",
    anchor: "잠금-대기를-현장에서-좁혀-가는-순서",
  },
];
