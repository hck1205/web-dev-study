import type { QuizQuestion } from "../types";

export const RW_TWITTER_SNOWFLAKE_TIMELINE: QuizQuestion[] = [
  {
    id: "rw-twitter-snowflake-timeline-1",
    post: "rw-twitter-snowflake-timeline",
    question: "2010년 Snowflake README가 새 ID 생성 방법이 필요해진 이유로 든 것은?",
    choices: [
      "UUID가 너무 길어 URL에 넣기 어려워서",
      "MySQL에서 Cassandra로 옮기는데 Cassandra에는 순차 ID 생성 기능이 없어서",
      "트윗 수가 32비트 정수 범위를 넘어서",
      "데이터 센터가 하나 더 생겨 시계를 맞출 수 없어서",
    ],
    answer: 1,
    explanation:
      "README 첫 문단은 MySQL에서 Cassandra로 옮겨 가며 순차 ID 생성 기능이 없어졌다고 적었다. 자동 증가 키가 하던 일을 저장소 밖으로 꺼내야 했다. 128비트를 피한 이유는 '여러 이유'라고만 적혀 있어 UUID 길이가 동기라고 말할 근거는 없다.",
    anchor: "mysql을-떠나며-번호표가-사라졌다",
  },
  {
    id: "rw-twitter-snowflake-timeline-2",
    post: "rw-twitter-snowflake-timeline",
    question: "서로 다른 Snowflake 서버가 만든 두 ID의 순서에 대해 README가 약속한 것은?",
    choices: [
      "항상 정확한 생성 순서와 같다",
      "같은 데이터 센터 안에서만 정확하다",
      "k-정렬이며, 약 1초 범위 안에서는 뒤집힐 수 있다(목표는 수십 ms)",
      "순서는 전혀 보장하지 않는다",
    ],
    answer: 2,
    explanation:
      "README는 ID가 k-정렬된다고 했고 그 범위를 1초로 약속하며 수십 ms를 목표로 했다. 한 기계 안에서는 단조 증가하지만 기계 사이에서는 시계 차이만큼 순서가 뒤집힐 수 있다. 그래서 정확한 앞뒤가 필요한 곳에서는 ID 순서에 기대지 않는다.",
    anchor: "mysql을-떠나며-번호표가-사라졌다",
  },
  {
    id: "rw-twitter-snowflake-timeline-3",
    post: "rw-twitter-snowflake-timeline",
    question: "QCon 2012 슬라이드에서 Twitter의 Fanout이 Redis 타임라인에 트윗을 넣을 때 RPUSHX를 쓴 이유는?",
    choices: [
      "리스트 앞쪽에 넣어 최신 트윗이 먼저 보이게 하려고",
      "트윗 본문까지 한 번에 저장하려고",
      "이미 캐시에 있는 타임라인에만 붙여, 캐시에 없는 사용자에게는 쓰기를 하지 않으려고",
      "중복 트윗을 Redis가 자동으로 걸러 주게 하려고",
    ],
    answer: 2,
    explanation:
      "RPUSHX는 키가 있을 때만 리스트에 넣는다. 슬라이드는 '캐시된 타임라인에만 추가한다'고 적었고, 캐시에 없는 사용자의 타임라인은 만들지 않으니 팬아웃 쓰기가 줄어든다. Redis 항목에는 본문 없이 Tweet ID·User ID·비트 필드만 들어갔다.",
    anchor: "2012년-트윗-하나를-팔로워-수만큼-redis에-밀어-넣던-때",
  },
  {
    id: "rw-twitter-snowflake-timeline-4",
    post: "rw-twitter-snowflake-timeline",
    question: "2010년 Snowflake 서버에서 ZooKeeper가 맡은 일로 맞는 것은?",
    choices: [
      "비어 있는 워커 번호를 골라 새 서버에 나눠 준다",
      "모든 ID 요청을 받아 순번을 증가시킨다",
      "서버들의 시계를 NTP 대신 맞춰 준다",
      "설정으로 받은 워커 번호로 EPHEMERAL 노드를 만들어 같은 번호를 두 서버가 쓰지 못하게 막는다",
    ],
    answer: 3,
    explanation:
      "워커 번호는 생성자 인자, 즉 설정에서 온다. 서버는 그 번호로 /snowflake-servers 아래 EPHEMERAL 노드를 만들고, 이미 있으면 두 번 다시 시도한 뒤 시작을 포기한다. ZooKeeper가 번호를 배정하거나 ID 요청을 처리하지는 않는다.",
    anchor: "기계-번호는-설정에서-오고-zookeeper는-겹침만-막는다",
  },
  {
    id: "rw-twitter-snowflake-timeline-5",
    post: "rw-twitter-snowflake-timeline",
    question: "2010년 IdWorker의 nextId가 지금 시각이 마지막으로 쓴 밀리초보다 작다는 것을 발견하면?",
    choices: [
      "시계가 따라잡을 때까지 sleep으로 기다린다",
      "InvalidSystemClock 예외를 던져 요청을 거절한다",
      "마지막 밀리초를 그대로 쓰고 순번만 올린다",
      "순번을 0으로 돌리고 지금 시각으로 만든다",
    ],
    answer: 1,
    explanation:
      "코드는 timestamp < lastTimestamp이면 차이를 메시지에 담아 InvalidSystemClock을 던진다. 그대로 만들면 이미 준 번호와 겹칠 수 있어서다. 기다리는 것은 순번 4,096개를 다 썼을 때의 tilNextMillis뿐이다.",
    anchor: "시계가-뒤로-가면-기다리지-않고-거절한다",
  },
  {
    id: "rw-twitter-snowflake-timeline-6",
    post: "rw-twitter-snowflake-timeline",
    question: "2023년 공개 Tweetypie 코드의 getTimestamp는 트윗 작성 시각을 어떻게 구하나?",
    choices: [
      "항상 Manhattan에 저장된 createdAt 필드를 읽는다",
      "Earlybird 색인에 물어본다",
      "Snowflake ID면 ID에서 시각을 읽고, 아니면 createdAt 필드로 돌아간다",
      "클라이언트가 보낸 시각을 그대로 쓴다",
    ],
    answer: 2,
    explanation:
      "SnowflakeId.isSnowflakeId(tweet.id)가 참이면 SnowflakeId(tweet.id).time을 쓰고, 아니면 createdAt을 쓴다. Snowflake 이전 트윗은 ID에 시각이 없기 때문이다. 다만 SnowflakeId 클래스 구현은 공개되지 않아 사내 비트 구성까지는 확인할 수 없다.",
    anchor: "2023년-코드에서-다시-만난-번호",
  },
  {
    id: "rw-twitter-snowflake-timeline-7",
    post: "rw-twitter-snowflake-timeline",
    question: "2023년 공개 코드에서 Home Mixer의 Following 탭은 팔로우한 사람의 트윗 후보를 어디서 가져오나?",
    choices: [
      "Earlybird 검색 색인",
      "팬아웃 서비스가 채워 둔 Redis 목록",
      "Manhattan의 사용자별 테이블을 직접 스캔",
      "UTEG 그래프만",
    ],
    answer: 0,
    explanation:
      "README의 Following 파이프라인은 FollowingEarlybirdCandidatePipelineConfig로 Search Index에서 트윗을 가져온다. 쓰기 경로는 팬아웃 서비스에 이벤트를 보내지만, 그 서비스가 홈 탭에 무엇을 쓰는지는 공개되지 않았다. 타임라인 서비스에서 읽는다고 적힌 것은 리스트 탭이다.",
    anchor: "홈-타임라인은-읽을-때-다시-모은다",
  },
];
