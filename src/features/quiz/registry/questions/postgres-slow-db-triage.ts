import type { QuizQuestion } from "../types";

export const POSTGRES_SLOW_DB_TRIAGE: QuizQuestion[] = [
  {
    id: "postgres-slow-db-triage-1",
    post: "postgres-slow-db-triage",
    question: "DB CPU는 40%로 한가한데 API가 느리다. pg_stat_activity에서 세션 대부분의 wait_event_type이 Lock이라면 다음에 할 일로 가장 알맞은 것은?",
    choices: [
      "인스턴스를 더 큰 사양으로 바꾼다",
      "pg_blocking_pids로 대기 사슬을 따라가 맨 앞 세션을 찾는다",
      "pg_stat_statements를 평균 실행 시간순으로 정렬한다",
      "perf로 백엔드 프로세스의 뜨거운 함수를 찾는다",
    ],
    answer: 1,
    explanation:
      "Lock 대기는 일이 많아서가 아니라 누군가 먼저 쥔 잠금 때문에 서 있는 상태다. CPU를 늘리거나 쿼리 비용을 봐도 줄은 줄지 않고, 사슬의 맨 앞을 찾아야 풀린다.",
    anchor: "지금-db-안에서-무엇을-기다리나",
  },
  {
    id: "postgres-slow-db-triage-2",
    post: "postgres-slow-db-triage",
    question: "pg_blocking_pids 결과가 12747은 {12737}, 12748은 {12747}에 막혀 있다고 나온다. 12737은 아무도 기다리지 않는다. 어느 세션을 끊어야 대기열이 풀리나?",
    choices: ["12748", "12747", "12737", "가장 최근에 들어온 세션"],
    answer: 2,
    explanation:
      "12747도 12737을 기다리는 피해자라서, 12747을 끊으면 다음 대기자가 그 자리를 채울 뿐이다. 남을 막지만 자기는 막히지 않은 12737이 사슬의 뿌리다.",
    anchor: "줄이-서-있으면-맨-앞을-찾는다",
  },
  {
    id: "postgres-slow-db-triage-3",
    post: "postgres-slow-db-triage",
    question: "대기열의 뿌리가 state = idle in transaction인 세션이다. pg_cancel_backend로 풀리지 않는 이유는?",
    choices: [
      "cancel은 슈퍼유저만 쓸 수 있어서",
      "cancel은 지금 실행 중인 쿼리만 취소하는데, 그 세션은 실행 중인 쿼리가 없어서",
      "idle 세션은 신호를 무시하도록 설정되어 있어서",
      "cancel은 다음 체크포인트 이후에 적용되어서",
    ],
    answer: 1,
    explanation:
      "idle in transaction은 트랜잭션만 열어 두고 클라이언트의 다음 명령을 기다리는 상태라 취소할 쿼리가 없다. 연결을 끊는 pg_terminate_backend로 트랜잭션을 롤백시켜야 잠금이 풀린다.",
    anchor: "줄이-서-있으면-맨-앞을-찾는다",
  },
  {
    id: "postgres-slow-db-triage-4",
    post: "postgres-slow-db-triage",
    question: "잠금을 쥐지 않은 REPEATABLE READ 세션이 반나절 열려 있다. 시간이 지나며 전체가 서서히 느려지는 이유로 맞는 것은?",
    choices: [
      "그 스냅샷이 볼 수 있는 옛 행 버전을 VACUUM이 치우지 못해 테이블이 부풀기 때문에",
      "열린 트랜잭션이 WAL 쓰기를 막기 때문에",
      "연결 하나가 공유 버퍼를 독점하기 때문에",
      "REPEATABLE READ는 모든 SELECT에 테이블 잠금을 걸기 때문에",
    ],
    answer: 0,
    explanation:
      "실습에서 그런 세션 하나 때문에 10만 개의 죽은 행이 dead but not yet removable로 남았다. backend_xmin 나이로 범인을 찾고 idle_in_transaction_session_timeout으로 막는다.",
    anchor: "잠금이-없어도-오래-열린-트랜잭션은-해롭다",
  },
  {
    id: "postgres-slow-db-triage-5",
    post: "postgres-slow-db-triage",
    question: "pg_stat_statements에서 서버 시간을 가장 많이 먹은 쿼리를 찾으려면 무엇으로 정렬해야 하나?",
    choices: ["calls", "mean_exec_time", "total_exec_time", "rows"],
    answer: 2,
    explanation:
      "total_exec_time은 호출 수와 한 번의 비용을 곱한 결과라 서버가 실제로 쓴 시간의 비중이 보인다. mean_exec_time으로 보면 가끔 도는 무거운 리포트가 위로 오고, 자주 도는 쿼리의 누적 비용을 놓친다.",
    anchor: "기다리지-않는데-느리면-누가-시간을-먹었나",
  },
  {
    id: "postgres-slow-db-triage-6",
    post: "postgres-slow-db-triage",
    question: "잠금을 기다리는 백엔드에 strace를 붙였더니 epoll_wait에서만 잠들어 있었다. 이 결과가 말해 주는 것은?",
    choices: [
      "디스크 I/O가 막혀 있다",
      "백엔드가 이미 죽어 있다",
      "네트워크 패킷이 유실되고 있다",
      "OS에서 보면 기다리는 백엔드는 비슷하게 자고, 무엇을 기다리는지는 DB 지표가 알려 준다",
    ],
    answer: 3,
    explanation:
      "잠금 대기든 클라이언트 대기든 백엔드는 epoll_wait 같은 곳에서 잠든다. 대기의 이유는 wait_event가 알려 주므로 DB 안의 지표를 먼저 보고 OS 도구는 그다음에 쓴다.",
    anchor: "프로세스-하나의-시스템-콜을-본다",
  },
  {
    id: "postgres-slow-db-triage-7",
    post: "postgres-slow-db-triage",
    question: "백엔드 하나가 SIGSEGV로 죽었는데 관계없는 세션까지 모두 끊겼다. 왜 그런가?",
    choices: [
      "공유 메모리가 망가졌을 수 있어 postmaster가 전부 끊고 복구한 뒤 다시 받기 때문에",
      "죽은 백엔드가 다른 세션의 소켓을 함께 닫아서",
      "OS의 OOM killer가 나머지도 함께 죽여서",
      "pg_stat_statements가 크래시를 다른 세션에 전파해서",
    ],
    answer: 0,
    explanation:
      "모든 백엔드가 공유 메모리를 쓰므로 하나가 비정상 종료하면 postmaster는 안전을 위해 전부 끊고 WAL로 복구한다. kill -9로 백엔드를 죽여도 같은 일이 생겨서 운영에서 쓰면 안 된다.",
    anchor: "백엔드가-죽었을-때-증거를-남긴다",
  },
];
