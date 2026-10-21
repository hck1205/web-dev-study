import type { QuizQuestion } from "../types";

export const MYSQL_REPLICATION_ONLINE_DDL: QuizQuestion[] = [
  {
    id: "mysql-replication-online-ddl-1",
    post: "mysql-replication-online-ddl",
    question:
      "프라이머리에서 9초 걸린 ALTER TABLE이 끝난 직후 레플리카의 Seconds_Behind_Source가 0에서 갑자기 9로 뛰었다. 왜일까?",
    choices: [
      "레플리카가 ALTER를 받는 데 네트워크로 9초가 걸렸다",
      "ALTER는 끝나야 binlog에 실리고, 이벤트에 적힌 시각은 프라이머리에서 문장이 시작된 시각이기 때문이다",
      "ALTER 도중 프라이머리가 binlog 쓰기를 멈췄다가 한꺼번에 보냈다",
      "레플리카의 시계가 9초 빠르다",
    ],
    answer: 1,
    explanation:
      "DDL은 프라이머리에서 끝난 뒤에 binlog에 기록되고, 레플리카는 그때부터 같은 작업을 다시 돈다. 지연은 적용 중인 이벤트의 시각과 현재 시각의 차이라서, 시작 시각이 18:41:11로 적힌 이벤트를 18:41:20에 받으면 곧바로 9가 된다.",
    anchor: "프라이머리에선-9초에-끝난-alter가-레플리카에선-그때부터-시작됐다",
  },
  {
    id: "mysql-replication-online-ddl-2",
    post: "mysql-replication-online-ddl",
    question:
      "binlog_format = STATEMENT에서 UPDATE orders SET status = 'hold' WHERE status = 'ready' LIMIT 1이 위험한 이유는?",
    choices: [
      "LIMIT이 있는 문장은 binlog에 기록되지 않는다",
      "레플리카에서 문장을 두 번 실행한다",
      "ORDER BY가 없어서 프라이머리와 레플리카가 서로 다른 행을 고칠 수 있다",
      "STATEMENT 형식은 UPDATE를 지원하지 않는다",
    ],
    answer: 2,
    explanation:
      "문장을 그대로 다시 실행하는 형식이라 어느 행이 걸릴지 정해지지 않은 문장은 서버마다 다른 결과를 낸다. MySQL도 Unsafe statement 경고(1592)를 남긴다. ROW 형식은 바뀐 행 자체를 적어서 이 문제가 없다.",
    anchor: "binlog에는-바뀐-행의-전후가-적힌다",
  },
  {
    id: "mysql-replication-online-ddl-3",
    post: "mysql-replication-online-ddl",
    question:
      "super_read_only를 잠깐 끄고 레플리카에 주문을 한 줄 넣었다. 그 뒤 프라이머리에 주문이 들어오자 레플리카에서 무슨 일이 생겼나?",
    choices: [
      "적용 스레드가 중복 키 에러(1062)로 멈추고 Seconds_Behind_Source가 NULL이 됐다",
      "레플리카의 행이 프라이머리로 역복제됐다",
      "받는 스레드가 연결을 끊었다",
      "아무 일도 없다. 레플리카에서 쓴 GTID는 자동으로 버려진다",
    ],
    answer: 0,
    explanation:
      "레플리카에서 쓴 트랜잭션은 레플리카 UUID의 errant GTID가 되고, 그 행이 프라이머리의 다음 AUTO_INCREMENT 값과 겹쳤다. 적용 스레드가 멈추면 받는 스레드는 계속 돌아도 데이터는 멈추고 지연 값은 NULL이 된다.",
    anchor: "레플리카에-직접-쓴-한-줄이-복제를-멈춘다",
  },
  {
    id: "mysql-replication-online-ddl-4",
    post: "mysql-replication-online-ddl",
    question:
      "반동기 복제(timeout 3초)에서 레플리카의 받는 스레드를 멈추고 커밋하면 어떻게 되나?",
    choices: [
      "레플리카가 돌아올 때까지 커밋이 무한히 기다린다",
      "커밋이 에러로 실패하고 롤백된다",
      "커밋은 바로 성공하고 아무 표시도 남지 않는다",
      "3초를 기다린 뒤 에러 없이 성공하고, 그 뒤로는 비동기로 내려간다",
    ],
    answer: 3,
    explanation:
      "답을 기다리다 rpl_semi_sync_source_timeout이 지나면 반동기를 끄고 비동기로 계속한다. 실험에서 커밋이 3.00초 걸렸고 Rpl_semi_sync_source_status가 OFF가 됐다. 그래서 이 상태 값에 알림을 걸어야 한다.",
    anchor: "반동기-복제는-기다리다-혼자-비동기로-내려간다",
  },
  {
    id: "mysql-replication-online-ddl-5",
    post: "mysql-replication-online-ddl",
    question:
      "복제 지연 알림을 'Seconds_Behind_Source > 30'으로만 걸어 두었다. 가장 위험한 빈틈은?",
    choices: [
      "30초 미만의 지연을 놓친다",
      "적용 스레드가 멈추면 값이 NULL이 되어 비교에서 빠지고 알림이 울리지 않는다",
      "DDL이 돌 때 값이 음수가 된다",
      "레플리카가 여러 대면 평균값만 보인다",
    ],
    answer: 1,
    explanation:
      "복제가 완전히 멈춘 상황에서 값이 NULL이 되니 숫자 비교 규칙이 침묵한다. 실험에서도 적용 스레드를 멈춘 6초 동안 값은 NULL이었고 하트비트 테이블은 6.1초 지연을 보여 줬다. Running 상태와 하트비트를 함께 감시한다.",
    anchor: "seconds_behind_source가-말해-주지-않는-것",
  },
  {
    id: "mysql-replication-online-ddl-6",
    post: "mysql-replication-online-ddl",
    question:
      "레플리카에서 SELECT WAIT_FOR_EXECUTED_GTID_SET('...:1-43', 2)가 2초 뒤 1을 돌려줬다. 어떻게 처리해야 하나?",
    choices: [
      "GTID 43이 아직 적용되지 않았으니 이 읽기를 프라이머리로 보내거나 다른 레플리카를 시도한다",
      "적용이 끝났다는 뜻이니 레플리카에서 읽는다",
      "GTID 형식이 잘못됐으니 파일 위치로 다시 묻는다",
      "레플리카를 재시작한다",
    ],
    answer: 0,
    explanation:
      "이 함수는 적용되면 0, 시간 초과면 1을 돌려준다. 1은 방금 쓴 트랜잭션이 아직 그 레플리카에 없다는 뜻이라 거기서 읽으면 옛 데이터를 본다. 기다리는 시간이 응답 시간이 되니 timeout은 짧게 둔다.",
    anchor: "방금-쓴-주문을-레플리카에서-읽으려면",
  },
  {
    id: "mysql-replication-online-ddl-7",
    post: "mysql-replication-online-ddl",
    question:
      "INSTANT로 끝나는 열 추가를 돌렸는데 orders에 대한 모든 SELECT가 Waiting for table metadata lock으로 멈췄다. 가장 그럴듯한 원인과 대처는?",
    choices: [
      "INSTANT가 테이블을 복사하고 있다. ALGORITHM=INPLACE로 바꾼다",
      "버퍼 풀이 부족하다. innodb_buffer_pool_size를 늘린다",
      "커밋하지 않은 트랜잭션이 공유 MDL을 쥐고 있어 ALTER가 기다리고, 뒤의 SELECT가 그 뒤에 줄을 섰다. lock_wait_timeout을 짧게 걸고 막는 연결을 찾는다",
      "레플리카 지연 때문이다. 레플리카를 멈춘다",
    ],
    answer: 2,
    explanation:
      "모든 ALTER는 배타 MDL이 필요하고, 배타 잠금을 기다리는 요청이 있으면 뒤의 공유 잠금 요청도 그 뒤에 선다. lock_wait_timeout 기본값이 1년이라 ALTER가 물러나지 않는다. 짧게 걸면 실험처럼 ALTER가 3초 뒤 포기하고 SELECT가 바로 실행된다.",
    anchor: "열-추가도-줄을-서서-기다린다",
  },
];
