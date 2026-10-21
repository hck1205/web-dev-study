import type { QuizQuestion } from "../types";

export const API_SCALING_LADDER: QuizQuestion[] = [
  {
    id: "api-scaling-ladder-1",
    post: "api-scaling-ladder",
    question:
      "동시 사용자 1만 명이 화면마다 API를 3번 부르고, 생각 시간 10초에 응답 0.2초라면 초당 요청은 대략 얼마인가?",
    choices: ["약 35 RPS", "약 300 RPS", "약 2,900 RPS", "약 30,000 RPS"],
    answer: 2,
    explanation:
      "한 사람이 10.2초마다 요청 3개를 보내니 10,000 × 3 ÷ 10.2 ≈ 2,941 RPS다. 같은 1만이라도 DAU라면 평균 몇 RPS에 그친다. 그래서 사용자 수만 듣고 칸을 고르면 백 배씩 틀릴 수 있다.",
    anchor: "그림-속-1k는-어떤-사용자인가",
  },
  {
    id: "api-scaling-ladder-2",
    post: "api-scaling-ladder",
    question:
      "다른 조건은 그대로인데 응답 시간이 0.2초에서 2초로 느려졌다. 닫힌 사용자 모델에서 서버가 받는 RPS는 어떻게 되나?",
    choices: [
      "사용자가 다시 시도하므로 두 배로 는다",
      "사용자가 다음 요청을 늦게 보내므로 오히려 줄어든다",
      "응답 시간과 RPS는 관계가 없어 그대로다",
      "타임아웃이 나서 0이 된다",
    ],
    answer: 1,
    explanation:
      "한 사람이 (생각 시간 + 응답 시간)마다 요청을 보내니 응답이 느려지면 주기가 길어져 RPS가 준다. 계산하면 2,941에서 2,500으로 떨어진다. 요청 수 그래프가 내려간 것이 서버가 느려졌다는 뜻일 수도 있다.",
    anchor: "그림-속-1k는-어떤-사용자인가",
  },
  {
    id: "api-scaling-ladder-3",
    post: "api-scaling-ladder",
    question:
      "Fastify 프로세스 하나에서 요청마다 CPU를 2ms 쓰게 하자 처리량이 초당 1만 4천에서 425로 떨어졌다. 4코어 서버에서 가장 먼저 할 일은?",
    choices: [
      "서버를 네 대로 늘리고 로드 밸런서를 붙인다",
      "DB에 읽기 복제본을 붙인다",
      "커넥션 풀 크기를 키운다",
      "cluster나 프로세스 여러 개로 같은 기계의 남은 코어부터 쓴다",
    ],
    answer: 3,
    explanation:
      "자바스크립트는 한 스레드에서 돌아서 프로세스 하나는 코어 하나만 쓴다. 같은 기계에서 프로세스 둘로 늘리자 460/s에서 무너지던 서버가 900/s 근처까지 받았다. 서버를 늘리기 전에 이 기계의 코어부터 다 쓴다.",
    anchor: "한-대가-버티는-양은-요청-하나의-무게가-정한다",
  },
  {
    id: "api-scaling-ladder-4",
    post: "api-scaling-ladder",
    question:
      "열린 부하로 속도를 430/s에서 460/s로 7% 올렸더니 p50이 8.6ms에서 73.4ms로 뛰었다. 에러는 0이다. 무엇을 뜻하나?",
    choices: [
      "들어오는 양이 처리량을 넘어 줄이 계속 길어지기 시작했다",
      "네트워크 대역폭이 부족해졌다",
      "부하 생성기의 측정 오류라서 무시해도 된다",
      "에러가 없으니 아직 여유가 있다",
    ],
    answer: 0,
    explanation:
      "처리 한계를 넘는 순간부터 대기열은 시간에 비례해 길어져 지연이 무릎처럼 꺾인다. 500/s에서는 p99가 5.8초가 됐는데도 에러는 0이었다. 그래서 에러율만이 아니라 p99와 이벤트 루프 지연을 함께 본다.",
    anchor: "지연은-cpu-100보다-먼저-무너진다",
  },
  {
    id: "api-scaling-ladder-5",
    post: "api-scaling-ladder",
    question: "주 DB CPU가 높고 대부분이 읽기다. 글에서 권하는 첫 조치는?",
    choices: [
      "바로 샤딩해 쓰기와 읽기를 함께 나눈다",
      "읽기 복제본을 두 대 붙인다",
      "느린 쿼리의 실행 계획을 보고 인덱스부터 고친다",
      "API 서버 대수를 늘린다",
    ],
    answer: 2,
    explanation:
      "Seq Scan을 하던 쿼리에 인덱스를 만들자 30ms가 0.08ms로 줄었다. 이런 쿼리가 많이 돌면 복제본 몇 대 몫이다. 인덱스와 캐시를 한 뒤에도 읽기가 누를 때 복제본을 붙이고, 그때는 복제 지연을 다룰 규칙이 필요하다.",
    anchor: "복제본보다-인덱스가-먼저다",
  },
  {
    id: "api-scaling-ladder-6",
    post: "api-scaling-ladder",
    question:
      "API 서버를 2대에서 10대로 늘린 직후 'sorry, too many clients already' 에러가 나기 시작했다. 가장 그럴듯한 원인은?",
    choices: [
      "로드 밸런서의 헬스 체크가 실패했다",
      "서버마다 연 DB 풀이 합쳐져 max_connections를 넘었다",
      "Redis 캐시가 만료됐다",
      "복제 지연이 커졌다",
    ],
    answer: 1,
    explanation:
      "대수가 늘면 DB 연결도 대수 × 풀 크기만큼 는다. PostgreSQL 기본 max_connections는 100이라 금방 닿는다. 풀러(PgBouncer)를 먼저 두지 않고 수평 확장 칸으로 오면 이렇게 연결이 먼저 바닥난다.",
    anchor: "한-대로는-배포조차-못-할-때",
  },
  {
    id: "api-scaling-ladder-7",
    post: "api-scaling-ladder",
    question: "사용자 1천 명짜리 서비스인데 주문마다 PDF 영수증을 만들어 메일로 보낸다. 비동기 큐는 언제 넣는 게 맞나?",
    choices: [
      "사다리 순서대로 500K 칸에 닿았을 때",
      "샤딩을 마친 뒤",
      "Kafka 클러스터를 운영할 인력이 생겼을 때",
      "지금. 사용자가 기다릴 필요 없는 무거운 일이 요청 안에 있기 때문이다",
    ],
    answer: 3,
    explanation:
      "사다리의 순서는 흔히 아픈 순서일 뿐이고 칸은 병목이 정한다. 요청 안에 메일과 PDF처럼 기다릴 필요 없는 일이 있으면 규모와 상관없이 큐가 맞다. 이런 한 서비스 안의 작업은 BullMQ 같은 작업 큐로 충분하다.",
    anchor: "요청-안에서-기다리는-일을-뺀다",
  },
];
