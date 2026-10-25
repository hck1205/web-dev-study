import type { QuizQuestion } from "../types";

export const RW_DAANGN_FEATURE_PLATFORM: QuizQuestion[] = [
  {
    id: "rw-daangn-feature-platform-1",
    post: "rw-daangn-feature-platform",
    question: "당근이 피처 플랫폼을 만들기 전 추천 시스템의 문제로 맞지 않는 것은?",
    choices: [
      "추천이 중고거래 서버 안의 라이브러리라 피처 하나를 더해도 웹 애플리케이션을 다시 배포해야 했다",
      "중고거래 DB에 직접 기대 동네생활·알바·광고 글로 넓힐 수 없었다",
      "추천 모델이 GPU 없이는 돌지 않아 서빙 비용이 컸다",
      "여러 저장소에서 일관된 스키마 없이 피처를 가져와 품질을 믿기 어려웠다",
    ],
    answer: 2,
    explanation:
      "Part 1이 꼽은 문제는 중고거래 서버 의존, 추천 대상과 피처 확장의 한계, 피처 데이터 원천의 신뢰성 부족 세 가지다. GPU 비용은 자료에 나오지 않는다.",
    anchor: "추천-로직이-중고거래-서버-안에-있었다",
  },
  {
    id: "rw-daangn-feature-platform-2",
    post: "rw-daangn-feature-platform",
    question: "피처 서빙에서 DynamoDB에서 찾은 피처 그룹은 어떻게 처리되나?",
    choices: [
      "응답으로만 돌려주고 캐시에는 넣지 않는다",
      "ElastiCache와 로컬 캐시 양쪽에 백그라운드에서 비동기로 채운다",
      "로컬 캐시에만 동기로 넣고 응답한다",
      "ElastiCache에 넣은 뒤에야 응답을 보낸다",
    ],
    answer: 1,
    explanation:
      "아래층에서 찾은 값은 위의 모든 층에 채워 다음 요청이 가까운 곳에서 끝나게 한다. 이 쓰기를 비동기로 해서 응답 지연에 캐시 쓰기 시간을 얹지 않는다.",
    anchor: "세-군데에-나눠-두고-가까운-곳부터-찾는다",
  },
  {
    id: "rw-daangn-feature-platform-3",
    post: "rw-daangn-feature-platform",
    question: "피처 그룹 값에 피처 이름 대신 0, 1 같은 순서 번호를 키로 쓴 설계의 대가는?",
    choices: [
      "정렬 키로 시각 범위를 읽을 수 없게 된다",
      "파티션 키가 사용자마다 달라져 핫 파티션이 생긴다",
      "명세 없이는 값을 해석할 수 없고, 명세의 피처 순서를 바꾸면 기존 데이터의 뜻이 바뀐다",
      "항목 크기가 커져 읽기 용량이 늘어난다",
    ],
    answer: 2,
    explanation:
      "명세에 고정된 순서를 열거형처럼 써서 항목마다 이름을 저장하지 않으니 크기는 준다. 대신 값의 뜻이 명세에 묶여, 순서를 바꾸지 않고 뒤에 붙이는 규칙이 필요해진다.",
    anchor: "피처-그룹의-키를-읽는-법",
  },
  {
    id: "rw-daangn-feature-platform-4",
    post: "rw-daangn-feature-platform",
    question: "없는 피처 그룹을 계속 조회해 매번 DynamoDB까지 내려가는 캐시 관통 문제를 당근은 어떻게 풀었나?",
    choices: [
      "없다는 정보 자체를 캐시하는 네거티브 캐싱",
      "TTL에 지터를 더하기",
      "확률적 조기 만료로 미리 갱신하기",
      "write-through로 캐시와 DB를 함께 쓰기",
    ],
    answer: 0,
    explanation:
      "관통은 원본에도 없는 키를 찾는 요청이 캐시를 지나치는 문제라, 없음을 기록해 두는 네거티브 캐시가 맞는 해법이다. 지터와 조기 만료는 스탬피드, write-through는 일관성 문제에 쓴 장치다.",
    anchor: "캐시가-실제로-부딪친-세-문제",
  },
  {
    id: "rw-daangn-feature-platform-5",
    post: "rw-daangn-feature-platform",
    question: "수동 커밋으로 바꾼 뒤 처리 속도가 약 10배 느려졌을 때 당근이 파티션을 늘리지 않은 이유는?",
    choices: [
      "MSK가 파티션 증설을 지원하지 않아서",
      "팀별 파티셔닝 권한 때문에 마음대로 늘릴 수 없어서",
      "파티션을 늘리면 이벤트 순서가 깨져서",
      "컨슈머 그룹 자원이 부족해서",
    ],
    answer: 1,
    explanation:
      "Part 2는 컨슈머 그룹 자원은 남아 있었지만 팀별 파티셔닝 권한 때문에 파티션 증설이 해법이 아니었다고 썼다. 그래서 한 파티션 안에서 메시지마다 워커 스레드로 병렬 처리하는 자체 컨슈머를 만들었다.",
    anchor: "파티션을-못-늘리니-파티션-안에서-나눈다",
  },
  {
    id: "rw-daangn-feature-platform-6",
    post: "rw-daangn-feature-platform",
    question: "한 파티션 안 병렬 처리에서 실패한 메시지가 있는데도 더 큰 성공 오프셋까지 커밋할 수 있는 이유와, 지켜야 할 순서는?",
    choices: [
      "실패한 메시지는 다음 poll에서 다시 오기 때문 / 커밋을 먼저 한다",
      "Kafka가 실패한 오프셋을 자동으로 기억하기 때문 / 순서는 상관없다",
      "실패한 메시지는 버려도 되는 로그이기 때문 / 재발행하지 않는다",
      "실패한 메시지를 재시도 토픽으로 보내기 때문 / 재시도 토픽 발행을 확실히 끝낸 뒤 커밋한다",
    ],
    answer: 3,
    explanation:
      "실패한 메시지는 재시도 토픽과 전용 워커가 맡으므로 원래 파티션에서는 지나가도 된다. 커밋을 먼저 하고 재발행 전에 죽으면 그 메시지는 어디에도 남지 않으므로 재발행이 먼저다.",
    anchor: "파티션을-못-늘리니-파티션-안에서-나눈다",
  },
  {
    id: "rw-daangn-feature-platform-7",
    post: "rw-daangn-feature-platform",
    question: "배치 수집에 Airflow 대신 AWS Batch를 고른 결정에 대해 Part 2가 나중에 적은 한계는?",
    choices: [
      "Fargate 비용이 너무 커졌다",
      "백필이 다른 서비스 자원을 잡아먹었다",
      "의존 관계가 있는 작업을 차례로 돌리는 DAG 지원이 없다",
      "1,000대 이상의 서버를 쓸 수 없었다",
    ],
    answer: 2,
    explanation:
      "복잡한 DAG가 필요 없다는 당시 요구에 맞춰 과도한 설계를 피했지만, 플랫폼이 커지며 DAG 지원 부재가 첫 번째 개선 과제가 됐다. 자원 분리와 대규모 백필은 오히려 AWS Batch를 고른 이유였다.",
    anchor: "과거-피처는-따로-떼어-낸-배치로-채운다",
  },
];
