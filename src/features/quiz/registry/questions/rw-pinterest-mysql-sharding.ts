import type { QuizQuestion } from "../types";

export const RW_PINTEREST_MYSQL_SHARDING: QuizQuestion[] = [
  {
    id: "rw-pinterest-mysql-sharding-1",
    post: "rw-pinterest-mysql-sharding",
    question: "2012년 발표에서 Pinterest가 Cassandra·Membase 같은 클러스터형 저장소를 \"큰 단일 장애점이 있다\"고 본 이유는?",
    choices: [
      "마스터 노드가 하나뿐이라 그 노드가 죽으면 전체가 멈춰서",
      "모든 노드에서 같은 복잡한 클러스터 관리 코드가 돌아, 그 코드가 잘못되면 모든 노드가 함께 잘못돼서",
      "데이터를 한 데이터센터에만 둘 수 있어서",
      "노드끼리 통신하지 않아 데이터가 어긋나서",
    ],
    answer: 1,
    explanation:
      "슬라이드는 클러스터 관리 알고리즘을 단일 장애점으로 꼽는다. 같은 코드가 모든 노드에 복제돼 있으니 재배치가 깨지거나 데이터 손상이 모든 노드에 함께 번질 수 있다. 노드끼리 서로 모르는 건 오히려 샤딩 쪽의 특징이다.",
    anchor: "자동으로-나눠-주는-클러스터를-버린-이유",
  },
  {
    id: "rw-pinterest-mysql-sharding-2",
    post: "rw-pinterest-mysql-sharding",
    question: "Pinterest ID 안에 들어 있는 샤드 ID로 서버를 찾는 방식에서, 서버를 하나 더 늘려도 기존 ID를 바꾸지 않아도 되는 이유는?",
    choices: [
      "ID에 서버가 아니라 논리 샤드 번호가 있고, 샤드와 서버를 잇는 조회 구조만 고치면 되기 때문에",
      "서버를 늘리면 모든 행을 다시 해시해 새 ID를 발급하기 때문에",
      "로컬 ID가 전체에서 유일하기 때문에",
      "앱 서버가 매 요청마다 모든 서버에 물어보기 때문에",
    ],
    answer: 0,
    explanation:
      "샤드는 서버 안의 DB이고, 어느 서버가 어느 샤드 범위를 맡는지는 앱 프로세스가 캐시한 조회 구조가 정한다. 서버를 복제해 범위를 반으로 나누면 같은 샤드 ID가 새 서버로 가고 ID는 그대로다. 로컬 ID는 샤드마다 따로 세므로 혼자서는 유일하지 않다.",
    anchor: "데이터는-움직이지-않고-서버가-늘어난다",
  },
  {
    id: "rw-pinterest-mysql-sharding-3",
    post: "rw-pinterest-mysql-sharding",
    question: "Pinterest ID의 로컬 ID는 MySQL auto-increment로 매긴다. 이 선택이 주는 것과 대가로 맞는 것은?",
    choices: [
      "별도 ID 발급 서버가 필요 없지만, ID 순서가 생성 시각 순서를 뜻하지 않는다",
      "ID에 시각이 들어가 정렬이 쉽지만, 시계가 뒤로 가면 중복이 난다",
      "전체에서 유일한 번호가 되지만, 샤드를 옮길 때 ID가 바뀐다",
      "충돌이 없지만, 매번 중앙 서버에 번호를 받아야 한다",
    ],
    answer: 0,
    explanation:
      "샤드마다 auto-increment로 세고 샤드 ID와 타입을 앞에 붙이니 따로 번호를 받으러 갈 곳이 없다. 대신 ID에 시간이 없어 정렬에는 매핑 테이블의 타임스탬프 같은 다른 값이 필요하다. 시계 문제는 시간을 상위 비트에 넣는 Snowflake 계열의 고민이다.",
    anchor: "64비트-안에-든-주소",
  },
  {
    id: "rw-pinterest-mysql-sharding-4",
    post: "rw-pinterest-mysql-sharding",
    question: "객체 본문을 MySQL blob 한 칸(JSON 등)에 넣는 설계에서, 본문 안의 필드로 검색해야 할 때 Pinterest 방식으로 하는 일은?",
    choices: [
      "모든 샤드에 ALTER TABLE로 그 필드의 칼럼과 인덱스를 추가한다",
      "blob을 LIKE로 모든 샤드에서 훑는다",
      "그 필드를 키로 하는 매핑 테이블을 새로 만든다",
      "클러스터형 저장소로 옮긴다",
    ],
    answer: 2,
    explanation:
      "슬라이드는 스키마 변경이 필요 없다고 하면서 \"index = new table\"이라고 쓴다. DB는 blob 안의 값을 모르니 찾을 키가 생기면 그 키로 된 테이블을 따로 둔다. ALTER TABLE을 수천 샤드에 돌리지 않으려는 설계다.",
    anchor: "조인-없는-표-두-종류",
  },
  {
    id: "rw-pinterest-mysql-sharding-5",
    post: "rw-pinterest-mysql-sharding",
    question: "Pinterest가 ID 샤딩에 이르기 전 거친 단계로, 슬라이드가 밝힌 순서에 가장 가까운 것은?",
    choices: [
      "처음부터 ID 샤딩 → 이후 캐시 추가",
      "DB 1대 + 조인 → 비정규화 + 캐시 → 읽기 슬레이브 → 기능별 분할 → ID 샤딩",
      "기능별 분할 → DB 1대로 합침 → 클러스터형 저장소 → ID 샤딩",
      "읽기 슬레이브 → ID 샤딩 → 비정규화",
    ],
    answer: 1,
    explanation:
      "슬라이드의 전환 순서는 외래 키와 조인을 쓰던 DB 한 대에서 비정규화와 캐시, 읽기 슬레이브, 기능별 분할을 거쳐 ID 샤딩으로 간다. 발표는 조인과 복잡한 쿼리를 먼저 없애고 그래도 크면 샤딩하라고 권한다.",
    anchor: "샤딩-전에-거친-다섯-단계",
  },
  {
    id: "rw-pinterest-mysql-sharding-6",
    post: "rw-pinterest-mysql-sharding",
    question: "2015년 공개된 mysql_utils README에 따르면 2012년의 멀티 마스터 복제는 어떻게 바뀌었나?",
    choices: [
      "마스터 수를 셋으로 늘려 쓰기를 더 분산했다",
      "복제를 없애고 백업만 남겼다",
      "Galera 같은 동기 클러스터로 옮겼다",
      "오류가 나기 쉬워 마스터 하나와 슬레이브 하나나 둘로 단순화했다",
    ],
    answer: 3,
    explanation:
      "README는 복제 세트 안에 쓰기 가능한 인스턴스를 여럿 두는 구조가 오류가 나기 쉬워 단일 마스터와 슬레이브로 바꿨다고 쓴다. 쓰는 곳이 하나면 같은 행을 양쪽에서 고치는 충돌을 걱정하지 않아도 되고, 마스터 교체는 페일오버 스크립트가 맡는다.",
    anchor: "3년-뒤-공개된-운영-도구가-보여-주는-것",
  },
  {
    id: "rw-pinterest-mysql-sharding-7",
    post: "rw-pinterest-mysql-sharding",
    question: "mysql_utils의 샤드 이동 마무리 단계에서 샤드 맵을 고치기 전에 양쪽 마스터를 읽기 전용으로 바꾸고 옛 마스터에 쓰기가 없는지 확인하는 이유로 가장 알맞은 것은?",
    choices: [
      "읽기 전용이어야 Blackhole 테이블을 만들 수 있어서",
      "옛 마스터에 마지막 쓰기가 들어오면 새 쪽으로 복제되지 않은 채 잃을 수 있어서",
      "디스크 사용률을 65% 아래로 유지하려고",
      "ZooKeeper가 읽기 전용 서버만 등록할 수 있어서",
    ],
    answer: 1,
    explanation:
      "쓰기를 멈추고 복제가 다 따라잡은 뒤에 주소를 바꿔야 옛 쪽에만 있는 쓰기가 남지 않는다. 그래서 읽기 전용으로 바꾸고, 옛 마스터에 쓰기가 없는지 확인하고, 복제를 기다린 다음 복제를 끊고 샤드 맵을 고친다. 디스크 65%는 시작 전 검사 조건이다.",
    anchor: "3년-뒤-공개된-운영-도구가-보여-주는-것",
  },
];
