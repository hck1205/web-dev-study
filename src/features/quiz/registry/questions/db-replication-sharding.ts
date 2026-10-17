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
    question: "created_at으로 RANGE 파티션을 나눈 orders에서 WHERE id = 2500000만 주면 실행 계획은 어떻게 되나?",
    choices: [
      "기본 키 인덱스 하나로 바로 찾는다",
      "가장 최근 파티션 하나만 읽는다",
      "파티션 키가 없다는 에러가 난다",
      "모든 파티션의 인덱스를 하나씩 열어 보는 Append가 된다",
    ],
    answer: 3,
    explanation:
      "id만으로는 어느 달 파티션에 있는지 알 수 없어서 가지치기가 일어나지 않는다. 파티션마다 기본 키 인덱스를 한 번씩 타니 파티션이 늘수록 느려진다. 조건에 created_at 범위를 같이 주면 파티션 하나의 인덱스만 탄다.",
    anchor: "조건에-맞는-파티션만-읽는다",
  },
  {
    id: "db-replication-sharding-5",
    post: "db-replication-sharding",
    question: "1년 지난 주문을 지울 때 DELETE 대신 파티션을 DETACH하고 DROP하는 가장 큰 이유는?",
    choices: [
      "DETACH는 잠금을 전혀 잡지 않아서",
      "행을 하나씩 지우지 않으니 WAL과 죽은 행이 거의 생기지 않아서",
      "DROP한 파티션은 나중에 자동으로 복구할 수 있어서",
      "DELETE는 파티션 테이블에서 쓸 수 없어서",
    ],
    answer: 1,
    explanation:
      "실험에서 31만 건 DELETE는 WAL 38MB와 죽은 행 31만 개를 남겼지만 DETACH와 DROP은 WAL 72kB로 끝났다. 파일을 지우는 일이라 행 수와 상관이 없고 복제본도 뒤처지지 않는다. 일반 DETACH도 잠깐 강한 잠금을 잡으니 lock_timeout을 건다.",
    anchor: "오래된-달은-통째로-떼어-낸다",
  },
  {
    id: "db-replication-sharding-6",
    post: "db-replication-sharding",
    question: "주문을 created_at 범위로 샤딩하면 생기는 대표적인 문제는?",
    choices: [
      "회원별 주문 조회가 불가능해진다",
      "샤드마다 기본 키가 겹친다",
      "새 주문이 모두 가장 최근 샤드로 몰려 쓰기가 나뉘지 않는다",
      "오래된 샤드를 지울 수 없다",
    ],
    answer: 2,
    explanation:
      "새 주문은 전부 지금 시각이라 최신 구간을 맡은 샤드 한 대가 모든 쓰기를 받는 핫스팟이 된다. 쓰기를 나누려던 샤딩의 목적이 사라진다. 회원 id처럼 고르게 퍼지고 자주 쓰는 쿼리가 한 샤드에서 끝나는 키가 낫다.",
    anchor: "서버-여러-대에-나눠-담는다",
  },
  {
    id: "db-replication-sharding-7",
    post: "db-replication-sharding",
    question: "일관된 해싱에서 샤드마다 가상 노드를 여러 개 찍는 이유는?",
    choices: [
      "샤드가 링 위에 몇 개뿐이면 구간 길이가 제각각이라 한 샤드에 키가 몰리기 때문에",
      "샤드를 추가할 때 모든 키를 다시 배치하기 위해서",
      "해시 충돌을 없애기 위해서",
      "샤드를 넘는 트랜잭션을 가능하게 하려고",
    ],
    answer: 0,
    explanation:
      "샤드마다 점을 하나씩만 찍었을 때 1만 개 키가 8,246개, 1,507개, 247개로 쏠렸고 200개씩 찍으니 거의 3분의 1씩 나뉘었다. 가상 노드가 있어도 샤드를 더할 때 옮기는 키는 새 샤드 몫 정도라는 성질은 그대로다.",
    anchor: "샤드를-늘려도-조금만-옮기는-해시",
  },
];
