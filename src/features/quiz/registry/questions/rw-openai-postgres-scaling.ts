import type { QuizQuestion } from "../types";

export const RW_OPENAI_POSTGRES_SCALING: QuizQuestion[] = [
  {
    id: "rw-openai-postgres-scaling-1",
    post: "rw-openai-postgres-scaling",
    question: "2025년 PGConf.dev 발표에서 OpenAI가 PostgreSQL을 샤딩하지 않은 이유로 든 것이 아닌 것은?",
    choices: [
      "샤딩할 수 있는 쓰기 많은 작업은 이미 다른 시스템으로 옮겼다",
      "지금 작업을 샤딩하려면 수백 개 애플리케이션 엔드포인트를 옮겨야 한다",
      "PostgreSQL은 기술적으로 샤딩을 지원하지 않는다",
      "지금 작업은 읽기가 많아 최적화하면 지금 구조로 여유가 있다",
    ],
    answer: 2,
    explanation:
      "슬라이드의 이유는 쓰기 많은 작업을 이미 옮겼다는 것, 엔드포인트 이전이 어렵다는 것, 읽기 위주라 여유가 있다는 것, 새 테이블을 금지했다는 것이다. 샤딩은 가까운 우선순위가 아닐 뿐 가능성으로 남겨 두었다. PostgreSQL로 샤딩이 불가능하다는 말은 없고, 같은 시리즈의 Notion은 실제로 샤딩했다.",
    anchor: "샤딩하지-않은-다섯-가지-이유",
  },
  {
    id: "rw-openai-postgres-scaling-2",
    post: "rw-openai-postgres-scaling",
    question: "OpenAI가 프라이머리 장애를 SEV2 수준으로 낮출 수 있었던 설계는?",
    choices: [
      "프라이머리를 두 대 두고 양쪽에 쓰기를 받는다",
      "가장 중요한 요청 대부분을 읽기 전용으로 만들어 복제본으로 계속 돌 수 있게 했다",
      "모든 쓰기를 Redis에 먼저 받아 두었다가 나중에 반영한다",
      "프라이머리가 죽으면 서비스 전체를 점검 모드로 바꾼다",
    ],
    answer: 1,
    explanation:
      "쓰는 곳이 하나라 프라이머리가 죽으면 쓰기는 멈춘다. 하지만 핵심 요청 대부분이 읽기 전용이라 복제본에서 계속 돌 수 있어 슬라이드는 이를 SEV2로 본다. 높은 우선순위 요청에는 전용 복제본을 따로 붙여 낮은 우선순위 요청의 영향도 막았다.",
    anchor: "쓰는-곳은-하나-읽는-곳은-여럿",
  },
  {
    id: "rw-openai-postgres-scaling-3",
    post: "rw-openai-postgres-scaling",
    question: "평소에는 양이 적던 12개 테이블 조인 쿼리가 급증해 인스턴스가 내려간 뒤 OpenAI가 더한 대응으로 가장 알맞은 것은?",
    choices: [
      "쿼리 다이제스트별 속도 제한과 차단을 걸고, 다중 조인을 애플리케이션 단으로 옮겼다",
      "프라이머리의 max_connections를 두 배로 늘렸다",
      "그 쿼리를 모두 프라이머리로만 보내게 했다",
      "복제본을 모두 지우고 프라이머리 한 대로 합쳤다",
    ],
    answer: 0,
    explanation:
      "슬라이드는 애플리케이션 함수, 새 연결 생성, 지정한 쿼리 다이제스트 세 층에 속도 제한을 걸고 특정 쿼리를 막을 수 있게 했다고 쓴다. 비싼 다중 조인은 애플리케이션에서 처리하고 읽기 전용 요청은 프라이머리를 피한다. 연결을 늘리는 건 5,000개 한도와 맞지 않는다.",
    anchor: "비싼-쿼리-하나가-인스턴스를-내린다",
  },
  {
    id: "rw-openai-postgres-scaling-4",
    post: "rw-openai-postgres-scaling",
    question: "Redis 캐시 빗나감이 PostgreSQL 장애로 커지는 악순환의 고리에서, 재시도가 하는 역할은?",
    choices: [
      "실패한 요청을 다른 데이터센터로 보내 부하를 나눈다",
      "캐시를 다시 채워 빗나감을 줄인다",
      "DB 연결을 끊어 부하를 줄인다",
      "느려진 DB에 같은 요청을 다시 보내 부하를 더 키운다",
    ],
    answer: 3,
    explanation:
      "캐시가 빗나가면 읽기가 DB로 몰려 느려지고, 느려진 요청이 타임아웃 뒤 재시도되면서 요청이 더 늘어난다. 슬라이드의 대응은 앱과 DB·프록시 양쪽의 속도 제한, 그리고 과부하일 때 요청을 버리는 것이다.",
    anchor: "장애-사례-셋",
  },
  {
    id: "rw-openai-postgres-scaling-5",
    post: "rw-openai-postgres-scaling",
    question: "쓰기 쿼리에 속도 제한을 걸어 프라이머리 CPU가 정상으로 돌아왔는데도 복제 지연이 계속 늘었다. 슬라이드가 찾은 원인에 들지 않는 것은?",
    choices: [
      "프라이머리의 네트워크 대역폭 포화",
      "일부 복제본의 디스크 IOPS 포화",
      "WAL sender의 높은 CPU",
      "복제본의 max_connections 부족",
    ],
    answer: 3,
    explanation:
      "슬라이드는 프라이머리 네트워크 대역폭, 일부 복제본의 디스크 IOPS, WAL sender의 CPU를 원인으로 들고, 인스턴스와 네트워크 한도를 키우고 WAL sender의 버그를 고쳤다. 복제 지연은 WAL이 지나는 길 어디서든 생길 수 있어서 CPU 하나만 보면 놓친다.",
    anchor: "장애-사례-셋",
  },
  {
    id: "rw-openai-postgres-scaling-6",
    post: "rw-openai-postgres-scaling",
    question: "오래 열린 트랜잭션이 테이블을 읽고 있을 때 타임아웃 없이 ALTER TABLE ... ADD COLUMN을 실행하면, 같은 테이블의 기본 키 조회는 어떻게 되나?",
    choices: [
      "ALTER TABLE과 상관없이 바로 실행된다",
      "복제본으로 자동으로 넘어간다",
      "ALTER TABLE 뒤에 잠금 대기열로 줄을 서서 함께 기다린다",
      "ALTER TABLE을 취소시키고 먼저 실행된다",
    ],
    answer: 2,
    explanation:
      "ALTER TABLE은 가장 강한 잠금이 필요해 앞의 트랜잭션을 기다리고, 그 뒤에 온 가벼운 조회도 대기열에서 ALTER TABLE 뒤에 선다. 실험에서 기본 키 조회가 wait_event_type = Lock으로 기다렸다. 그래서 OpenAI는 칸 추가·삭제에 5초 타임아웃을 걸고, lock_timeout을 걸면 마이그레이션이 5초 뒤 실패하며 줄이 풀린다.",
    anchor: "5초-타임아웃이-막아-주는-것",
  },
  {
    id: "rw-openai-postgres-scaling-7",
    post: "rw-openai-postgres-scaling",
    question: "슬라이드가 PostgreSQL에 바란 기능으로, 쓰지 않는 인덱스를 지우기 전에 원했던 것은?",
    choices: [
      "인덱스를 잠시 꺼 두고 성능을 본 뒤 지우는 기능",
      "인덱스를 복제본에만 만드는 기능",
      "인덱스를 자동으로 압축하는 기능",
      "인덱스를 다른 테이블로 옮기는 기능",
    ],
    answer: 0,
    explanation:
      "쓰지 않는 인덱스는 유지 비용과 쓰기 증폭을 늘려 지우고 싶지만, 위험을 줄이려면 먼저 꺼 두고 지켜보고 싶었다. PostgreSQL은 인덱스를 끄는 기능이 없어 지웠다가 필요하면 다시 만들어야 하고, 큰 인덱스는 다시 만드는 데 오래 걸린다.",
    anchor: "postgresql에-바란-것들",
  },
];
