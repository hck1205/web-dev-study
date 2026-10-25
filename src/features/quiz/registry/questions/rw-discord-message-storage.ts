import type { QuizQuestion } from "../types";

export const RW_DISCORD_MESSAGE_STORAGE: QuizQuestion[] = [
  {
    id: "rw-discord-message-storage-1",
    post: "rw-discord-message-storage",
    question: "디스코드가 Cassandra로 옮기며 클러스터링 키로 created_at 대신 Snowflake message_id를 쓴 이유는?",
    choices: [
      "Snowflake가 created_at보다 저장 공간을 적게 써서",
      "Cassandra가 타임스탬프 타입을 지원하지 않아서",
      "두 메시지가 같은 생성 시각을 가질 수 있는데, Snowflake는 겹치지 않으면서 시간순으로 정렬돼서",
      "Snowflake에 채널 번호가 들어 있어서",
    ],
    answer: 2,
    explanation:
      "클러스터링 키는 파티션 안에서 행을 구분하고 정렬하는 키라 겹치면 안 된다. 생성 시각은 겹칠 수 있지만 Snowflake는 타임스탬프에 작업자·프로세스·증가값을 붙여 겹치지 않으면서 시간순으로 정렬된다. Snowflake에는 채널 정보가 없다.",
    anchor: "키-두-개짜리-저장소에-맞춘-키",
  },
  {
    id: "rw-discord-message-storage-2",
    post: "rw-discord-message-storage",
    question: "디스코드가 파티션 키에 약 10일 단위 버킷을 더한 직접적인 이유는?",
    choices: [
      "채널 하나가 몇 년씩 한 파티션에 쌓여 100MB를 넘으면 GC 부담이 크고 클러스터에 나눠 담을 수 없어서",
      "10일마다 오래된 메시지를 지우려고",
      "검색 기능에 날짜 필터가 필요해서",
      "MongoDB와 같은 인덱스 구조를 유지하려고",
    ],
    answer: 0,
    explanation:
      "가져오던 중 100MB가 넘는 파티션 경고가 떴고, 큰 파티션은 컴팩션과 확장 때 GC 압력을 주고 여러 노드에 나눌 수 없다. 가장 큰 채널 기준으로 10일이면 100MB 아래에 머물렀다. 메시지는 지우지 않고 영원히 보관한다.",
    anchor: "100mb를-넘는-파티션과-열흘짜리-버킷",
  },
  {
    id: "rw-discord-message-storage-3",
    post: "rw-discord-message-storage",
    question: "메시지 스키마 16개 열 중 보통 4개만 값이 있었다. 모든 열을 그대로 써 넣으면 Cassandra에서 무슨 일이 생기나?",
    choices: [
      "빈 열은 저장되지 않으니 아무 일도 없다",
      "null을 쓴 12개 열마다 툼스톤이 생겨 쓰기와 읽기에 쓸데없는 부담이 된다",
      "쓰기가 거부된다",
      "다른 복제본과 충돌해 행이 사라진다",
    ],
    answer: 1,
    explanation:
      "Cassandra에서 열에 null을 쓰는 것은 열을 지우는 것과 같아서 툼스톤을 만든다. 디스코드는 메시지마다 이유 없이 툼스톤 12개를 쓰고 있었고, null이 아닌 값만 쓰는 것으로 고쳤다.",
    anchor: "두-군데에-쓰고-읽으며-옮기기",
  },
  {
    id: "rw-discord-message-storage-4",
    post: "rw-discord-message-storage",
    question: "메시지 하나만 남은 채널이 20초 걸리고 노드가 10초짜리 GC를 계속 돈 원인은?",
    choices: [
      "그 채널의 버킷이 너무 많아서",
      "복제 계수가 1이라서",
      "남은 메시지 하나가 아주 커서",
      "지운 수백만 개 메시지의 툼스톤을 읽을 때마다 훑어 쓰레기가 쏟아져서",
    ],
    answer: 3,
    explanation:
      "삭제는 툼스톤으로 남고 읽을 때 건너뛰어야 한다. 수백만 개를 지운 채널은 열 때마다 그 툼스톤을 다 훑었고, JVM이 치우는 속도보다 빨리 쓰레기가 생겼다. 디스코드는 툼스톤 수명을 10일에서 2일로 줄이고 빈 버킷을 건너뛰게 했다.",
    anchor: "메시지-하나짜리-채널이-20초-걸린-날",
  },
  {
    id: "rw-discord-message-storage-5",
    post: "rw-discord-message-storage",
    question: "핫 파티션 하나가 그 채널과 상관없는 질문까지 느리게 만든 이유로 2023년 글이 든 것은?",
    choices: [
      "모든 질문이 같은 파티션을 거쳐서",
      "읽기·쓰기를 쿼럼 일관성으로 해서, 핫 파티션을 가진 노드가 뒤처지면 그 노드가 낀 모든 질문이 기다려서",
      "핫 파티션이 생기면 클러스터가 자동으로 재시작해서",
      "ScyllaDB와 Cassandra를 동시에 써서",
    ],
    answer: 1,
    explanation:
      "핫 파티션을 가진 노드는 요청을 따라가지 못해 점점 뒤처진다. 쿼럼 질의는 복제본 과반의 응답을 기다리니 그 노드가 포함된 다른 질의도 느려지고, 사용자 영향이 넓어졌다.",
    anchor: "177대가-된-클러스터",
  },
  {
    id: "rw-discord-message-storage-6",
    post: "rw-discord-message-storage",
    question: "디스코드 데이터 서비스 앞단에서 채널 ID로 일관된 해싱 라우팅을 한 이유는?",
    choices: [
      "같은 채널의 요청이 같은 인스턴스로 모여야 요청 합치기가 잘 되어서",
      "채널마다 다른 데이터베이스를 쓰려고",
      "비즈니스 로직을 채널별로 나누려고",
      "인스턴스가 죽으면 요청을 버리려고",
    ],
    answer: 0,
    explanation:
      "요청 합치기는 같은 인스턴스 안에서 같은 행을 기다리는 요청을 하나로 묶는다. 같은 채널의 요청이 여러 인스턴스로 흩어지면 인스턴스마다 따로 데이터베이스에 묻게 된다. 그래서 라우팅 키를 채널 ID로 줬다.",
    anchor: "데이터베이스를-바꾸기-전에-앞에-세운-것",
  },
  {
    id: "rw-discord-message-storage-7",
    post: "rw-discord-message-storage",
    question: "디스코드 슈퍼 디스크에서 영구 디스크를 RAID1의 write-mostly 장치로 표시한 효과는?",
    choices: [
      "쓰기가 영구 디스크에만 가서 로컬 SSD 수명이 늘어난다",
      "영구 디스크가 RAID0 묶음을 대신해 용량이 커진다",
      "읽기는 빠른 로컬 SSD에서 하고, 쓰기는 양쪽에 가서 영구 디스크의 내구성과 스냅숏을 지킨다",
      "불량 섹터가 생기면 데이터베이스가 즉시 내려간다",
    ],
    answer: 2,
    explanation:
      "write-mostly 장치는 읽기 분산에서 빠지고 다른 방법이 없을 때만 읽힌다. 그래서 읽기는 로컬 SSD로 가고, 쓰기는 미러링으로 영구 디스크에도 간다. 로컬 SSD의 낮은 지연과 영구 디스크의 복제·스냅숏을 함께 얻는 구성이다.",
    anchor: "데이터베이스-아래의-디스크",
  },
];
