import type { QuizQuestion } from "../types";

export const RW_INSTAGRAM_SHARDING_IDS: QuizQuestion[] = [
  {
    id: "rw-instagram-sharding-ids-1",
    post: "rw-instagram-sharding-ids",
    question: "Instagram이 2012년에 물리 서버 수보다 훨씬 많은 논리 샤드를 미리 만든 이유는?",
    choices: [
      "PostgreSQL이 스키마 수에 비례해 빨라져서",
      "서버를 늘릴 때 나머지 연산은 그대로 두고 논리 샤드를 통째로 옮기기만 하면 돼서",
      "사용자마다 스키마 하나를 주려고",
      "UUID를 쓰기 위해서",
    ],
    answer: 1,
    explanation:
      "키가 어느 논리 샤드에 있는지는 user_id % 논리 샤드 수로 고정되고, 서버가 늘면 지도만 바꿔 논리 샤드를 옮긴다. 범위 방식처럼 샤드를 쪼개며 행을 다시 나누는 IO가 없다. 대신 처음 정한 논리 샤드 수가 서버 수의 상한이 된다.",
    anchor: "논리-샤드-수천-개를-물리-서버-몇-대에",
  },
  {
    id: "rw-instagram-sharding-ids-2",
    post: "rw-instagram-sharding-ids",
    question: "Instagram은 논리 샤드 하나를 PostgreSQL의 무엇으로 구현했나?",
    choices: [
      "데이터베이스 클러스터 하나",
      "테이블 파티션 하나",
      "스키마 하나",
      "시퀀스 하나",
    ],
    answer: 2,
    explanation:
      "서버마다 shard0, shard1 같은 스키마를 수천 개 만들고, 스키마마다 photos_by_user 같은 같은 테이블을 두었다. 스키마는 물리적으로 다른 파일이라 샤드를 옮긴 뒤 통째로 지워도 IO 부담이 없고 죽은 행이 남지 않는다.",
    anchor: "논리-샤드-수천-개를-물리-서버-몇-대에",
  },
  {
    id: "rw-instagram-sharding-ids-3",
    post: "rw-instagram-sharding-ids",
    question: "Instagram ID 함수에서 시각을 23비트 왼쪽으로 미는 이유는?",
    choices: [
      "그 아래에 논리 샤드 13비트와 순번 10비트가 들어가서",
      "부호 비트를 비워 두려고",
      "밀리초를 초로 바꾸려고",
      "시퀀스가 23비트라서",
    ],
    answer: 0,
    explanation:
      "구성은 41비트 시각, 13비트 샤드, 10비트 순번이다. 샤드와 순번이 합쳐 23비트라 시각을 23비트, 샤드를 10비트 민다. 41 + 13 + 10 = 64라 부호 비트를 따로 비우지 않는다.",
    anchor: "사진-번호를-db-안에서-만든다",
  },
  {
    id: "rw-instagram-sharding-ids-4",
    post: "rw-instagram-sharding-ids",
    question: "슬라이드의 shard_id = id ^ ((id >> 23) << 23)를 그대로 계산하면 무엇이 나오나?",
    choices: [
      "정확한 논리 샤드 번호",
      "시각 칸",
      "항상 0",
      "샤드와 순번을 합친 아래 23비트 값",
    ],
    answer: 3,
    explanation:
      "위 41비트를 지우고 아래 23비트를 남기니 샤드 × 1024 + 순번이 나온다. 샤드 5, 순번 1인 ID에서는 5121이다. 샤드만 얻으려면 10비트를 더 밀고 13비트 마스크(& 8191)를 걸어야 한다.",
    anchor: "슬라이드의-두-줄-디코드-식",
  },
  {
    id: "rw-instagram-sharding-ids-5",
    post: "rw-instagram-sharding-ids",
    question: "Instagram ID 함수가 한 논리 샤드에서 같은 밀리초에 1,025번째 ID를 만들면 어떻게 될 수 있나?",
    choices: [
      "다음 밀리초까지 기다린다",
      "nextval % 1024가 한 바퀴 돌아 앞서 만든 ID와 같은 값이 될 수 있다",
      "자동으로 다른 샤드 번호를 쓴다",
      "PostgreSQL이 시퀀스를 1,024로 제한해 오류를 낸다",
    ],
    answer: 1,
    explanation:
      "함수는 Snowflake처럼 순번 넘침을 기다리지 않고 시퀀스 값의 아래 10비트만 쓴다. 같은 밀리초에 시퀀스 값이 1,024 차이 나는 두 호출이 있으면 같은 ID가 된다. 기본 키가 중복을 거절하지만, 보장 범위는 샤드당 밀리초당 1,024개까지다.",
    anchor: "이-방식이-얻은-것과-감수한-것",
  },
  {
    id: "rw-instagram-sharding-ids-6",
    post: "rw-instagram-sharding-ids",
    question: "2012년 슬라이드에서 물리 서버를 늘릴 때 쓴 방법은?",
    choices: [
      "행마다 해시를 다시 계산해 새 서버로 INSERT",
      "pg_dump로 전체를 내보내고 다시 넣기",
      "repmgr로 새 서버를 복제본으로 세우고, 샤드 지도를 바꾼 뒤 맡지 않는 스키마를 지우기",
      "Cassandra로 옮기기",
    ],
    answer: 2,
    explanation:
      "스트리밍 복제로 서버를 통째로 복제하면 모든 스키마가 생긴다. 지도를 바꿔 일부 논리 샤드를 새 서버로 보내고, PgBouncer가 이동을 앱에서 감춘다. 매핑을 바꿀 때 약 30초의 점검이 필요했다.",
    anchor: "리샤딩은-복제본을-세우고-지도를-바꾼다",
  },
  {
    id: "rw-instagram-sharding-ids-7",
    post: "rw-instagram-sharding-ids",
    question: "Instagram이 팔로우 그래프를 Redis에 병렬로 두었다가 되돌린 이유는?",
    choices: [
      "Redis가 집합 연산을 지원하지 않아서",
      "두 저장소의 불일치와 그걸 맞추는 추가 로직이 계속 늘어서",
      "PostgreSQL이 팔로우 테이블을 저장할 수 없어서",
      "Redis 비용이 너무 비싸서",
    ],
    answer: 1,
    explanation:
      "DB가 바빠 Redis에 같은 데이터를 두기 시작했더니 불일치, 추가 로직, 캐시 무효화 문제가 따라왔다. 재설계에서는 PostgreSQL에 가벼운 memcached 캐시만 얹었다. 같은 일을 하는 도구를 둘 두지 말라는 것이 슬라이드의 교훈이다.",
    anchor: "피드와-팔로우-그래프는-어디에-두었나",
  },
];
