import type { QuizQuestion } from "../types";

export const RATE_LIMITING_IN_PRACTICE: QuizQuestion[] = [
  {
    id: "rate-limiting-in-practice-1",
    post: "rate-limiting-in-practice",
    question: "요청 수 제한을 배포한 직후 거의 모든 사용자가 첫 요청부터 429를 받는다. 가장 먼저 볼 것은?",
    choices: [
      "토큰 버킷의 충전 속도",
      "Redis의 메모리 사용량",
      "제한 장치가 키로 쓰는 IP가 로드 밸런서 주소로 뭉쳐 있는지",
      "클라이언트의 지터 설정",
    ],
    answer: 2,
    explanation:
      "앞단에 LB나 CDN이 있으면 소켓 상대 주소는 그 장비다. 그 주소를 키로 쓰면 모든 사용자가 카운터 하나를 나눠 써서 사이트 전체가 한도 하나에 묶인다. 거절된 키를 로그로 찍어 보고 실제 IP 설정을 확인한다.",
    anchor: "무엇을-키로-셀지가-절반이다",
  },
  {
    id: "rate-limiting-in-practice-2",
    post: "rate-limiting-in-practice",
    question: "X-Forwarded-For가 \"1.2.3.4, 203.0.113.7\"이고 소켓 주소가 내 LB(10.0.0.5)일 때 클라이언트 IP로 써야 하는 값은?",
    choices: ["1.2.3.4", "203.0.113.7", "10.0.0.5", "두 값을 이은 문자열"],
    answer: 1,
    explanation:
      "LB는 자기가 본 주소를 헤더 오른쪽에 덧붙인다. 맨 앞 값은 클라이언트가 직접 넣어 보낼 수 있어 믿을 수 없다. 오른쪽부터 내 프록시를 건너뛰고 처음 나오는 203.0.113.7이 실제 클라이언트다.",
    anchor: "무엇을-키로-셀지가-절반이다",
  },
  {
    id: "rate-limiting-in-practice-3",
    post: "rate-limiting-in-practice",
    question: "문자 인증 발송 API의 제한 장치가 Redis에 연결하지 못할 때 알맞은 동작은?",
    choices: [
      "요청을 막고 503을 돌려준다",
      "요청을 통과시키고 로그만 남긴다",
      "429를 돌려준다",
      "Redis가 돌아올 때까지 요청을 붙잡고 기다린다",
    ],
    answer: 0,
    explanation:
      "문자 발송처럼 한도가 곧 비용인 곳은 저장소 장애 때 막는 쪽(fail closed)을 고른다. 클라이언트가 한도를 넘은 게 아니니 429가 아니라 503이다. 일반 조회 API라면 반대로 통과시키는 편이 낫다.",
    anchor: "redis가-멈추면-다-막을까-다-열까",
  },
  {
    id: "rate-limiting-in-practice-4",
    post: "rate-limiting-in-practice",
    question: "인스턴스마다 메모리에 용량 5짜리 버킷을 두고 3대를 라운드 로빈으로 돌렸다. 한 사용자가 순간 30개를 보내면 몇 개가 통과하나?",
    choices: ["5개", "10개", "15개", "30개"],
    answer: 2,
    explanation:
      "인스턴스가 각자 세니 한도가 대수만큼 곱해져 5 × 3 = 15개가 통과한다. 오토스케일로 대수가 늘면 한도도 같이 늘어난다. 정확해야 하는 한도는 공유 저장소에서 센다.",
    anchor: "인스턴스마다-세면-한도가-곱해진다",
  },
  {
    id: "rate-limiting-in-practice-5",
    post: "rate-limiting-in-practice",
    question: "429 응답 수보다 들어온 요청 수가 몇 배 많다. 가장 그럴듯한 원인은?",
    choices: [
      "서버가 Retry-After를 너무 길게 줘서",
      "클라이언트가 429를 받자마자 짧은 간격으로 자동 재시도해서",
      "Redis 키에 수명을 걸지 않아서",
      "RateLimit-Policy 헤더 형식이 틀려서",
    ],
    answer: 1,
    explanation:
      "HTTP 클라이언트의 자동 재시도가 Retry-After를 무시하고 바로 다시 보내면 요청 하나가 거절 여러 개로 불어난다. 클라이언트는 Retry-After만큼, 없으면 지수 백오프로 기다리고 지터를 더해야 한다.",
    anchor: "클라이언트는-기다릴-줄-알아야-한다",
  },
  {
    id: "rate-limiting-in-practice-6",
    post: "rate-limiting-in-practice",
    question: "새 한도를 처음 배포할 때 거절을 바로 켜지 않고 \"거절했을 요청\"만 기록하는 이유는?",
    choices: [
      "Redis 부하를 줄이려고",
      "429 응답이 CDN에 캐시되지 않게 하려고",
      "알고리즘의 경계 몰림을 없애려고",
      "사내 NAT나 파트너 배치 같은 정상 트래픽이 걸리는지 먼저 확인하려고",
    ],
    answer: 3,
    explanation:
      "한도를 처음 걸 때 가장 흔한 사고는 정상 사용자 차단이다. 며칠 동안 걸렸을 키를 보고 한도를 고치거나 예외로 뺀 뒤 거절을 켠다. nginx의 limit_req_dry_run이 이 모드다.",
    anchor: "처음-배포할-때는-세기만-한다",
  },
];
