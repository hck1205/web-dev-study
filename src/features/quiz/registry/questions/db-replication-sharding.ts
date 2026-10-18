import type { QuizQuestion } from "../types";

export const DB_REPLICATION_SHARDING: QuizQuestion[] = [
  {
    id: "db-replication-sharding-1",
    post: "db-replication-sharding",
    question: "비동기 복제에서 결제 직후 주문 내역을 복제본에서 읽었더니 방금 주문이 없다. 가장 정확한 원인은?",
    choices: [
      "복제본이 쓰기를 거절해서 주문이 저장되지 않았다",
      "프라이머리가 스탠바이를 기다리지 않고 커밋 응답을 주었고, 스탠바이가 아직 그 WAL을 재생하지 못했다",
      "스탠바이가 SQL 문장을 다시 실행하느라 느리다",
      "복제 슬롯이 WAL을 지워 버렸다",
    ],
    answer: 1,
    explanation:
      "비동기 복제는 프라이머리가 자기 디스크에 WAL을 쓰자마자 커밋 성공을 알리고, 스탠바이로 보내고 재생하는 건 그 뒤에 한다. 받은 위치와 재생한 위치가 달라서 그 짧은 틈의 읽기에는 주문이 안 보인다. 스탠바이는 SQL이 아니라 WAL의 물리적인 변경을 재생한다.",
    anchor: "방금-결제한-주문이-안-보인다",
  },
  {
    id: "db-replication-sharding-2",
    post: "db-replication-sharding",
    question: "쓰기 직후 복제본에서 읽어도 되는지 LSN으로 확인하는 방법으로 맞는 것은?",
    choices: [
      "복제본에서 now() - pg_last_xact_replay_timestamp()가 1초 미만이면 읽는다",
      "pg_stat_replication의 replay_lag가 0에 가까우면 읽는다",
      "커밋 후 프라이머리의 pg_current_wal_lsn()을 저장해 두고, 복제본의 pg_last_wal_replay_lsn()이 그 값 이상일 때만 읽는다",
      "복제본에서 pg_is_in_recovery()가 f일 때만 읽는다",
    ],
    answer: 2,
    explanation:
      "내가 쓴 커밋의 WAL 위치를 기억해 두고 복제본이 그 위치까지 재생했는지 비교하면 정확하다. 타임스탬프 방식은 쓰기가 뜸하면 지연이 없어도 값이 커지고, replay_lag는 재생이 멈춰도 작게 보일 수 있어서 이 판단에 맞지 않는다.",
    anchor: "쓴-사람에게는-쓴-것을-보여-준다",
  },
  {
    id: "db-replication-sharding-3",
    post: "db-replication-sharding",
    question: "synchronous_standby_names에 스탠바이 한 대만 동기로 지정해 두었는데 그 스탠바이가 꺼졌다. 프라이머리에서는 어떤 일이 생기나?",
    choices: [
      "커밋이 스탠바이 확인을 기다리며 돌아오지 않는다",
      "자동으로 비동기 복제로 바뀌어 평소처럼 커밋된다",
      "프라이머리가 읽기 전용으로 바뀐다",
      "커밋이 롤백되고 에러가 난다",
    ],
    answer: 0,
    explanation:
      "동기 복제에서 커밋은 지정된 스탠바이의 확인을 기다리므로, 그 한 대가 없으면 모든 커밋이 SyncRep 대기에서 멈춘다. 취소하면 이미 로컬에 커밋됐다는 경고가 나온다. 그래서 스탠바이를 두 대 이상 두고 ANY 1처럼 아무나 하나를 기다리게 한다.",
    anchor: "동기-복제는-어디까지-기다리나",
  },
  {
    id: "db-replication-sharding-4",
    post: "db-replication-sharding",
    question: "복제 슬롯을 만들어 둔 스탠바이가 며칠 동안 꺼져 있었다. PostgreSQL 16 기본 설정이라면 프라이머리에서 무슨 일이 생기나?",
    choices: [
      "슬롯이 자동으로 지워져 아무 일도 없다",
      "프라이머리가 스탠바이를 기다리느라 모든 커밋이 멈춘다",
      "스탠바이가 받지 않은 WAL이 쌓이지 않고 바로 지워진다",
      "스탠바이가 받아 가지 않은 WAL이 계속 쌓여 디스크가 찰 수 있다",
    ],
    answer: 3,
    explanation:
      "슬롯은 스탠바이가 아직 받지 않은 WAL을 지우지 못하게 붙잡는다. 16의 max_slot_wal_keep_size 기본값은 -1(제한 없음)이라 그대로 두면 프라이머리 디스크가 가득 차 프라이머리까지 멈춘다. 커밋이 멈추는 건 동기 복제에서 생기는 다른 문제다.",
    anchor: "스탠바이를-하나-붙여-보기",
  },
  {
    id: "db-replication-sharding-5",
    post: "db-replication-sharding",
    question: "복제본에서 돌던 긴 통계 쿼리가 canceling statement due to conflict with recovery로 끊겼다. 이유로 가장 알맞은 것은?",
    choices: [
      "복제본은 읽기 쿼리를 30초까지만 허용하기 때문이다",
      "프라이머리의 VACUUM이 지운 옛 행 버전을 그 쿼리가 봐야 해서, 재생을 오래 미루던 스탠바이가 쿼리를 취소했기 때문이다",
      "복제본에서는 집계 함수를 쓸 수 없기 때문이다",
      "스탠바이의 디스크가 가득 찼기 때문이다",
    ],
    answer: 1,
    explanation:
      "스탠바이는 재생과 쿼리가 부딪히면 재생을 미루고 기다리다가 max_standby_streaming_delay(기본 30초)를 넘으면 쿼리를 취소한다. hot_standby_feedback을 켜면 덜 끊기지만 프라이머리 테이블이 부풀고, 분석용 복제본만 지연 한도를 크게 잡는 방법도 있다.",
    anchor: "복제본에서-긴-쿼리가-끊긴다",
  },
];
