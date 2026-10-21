import type { QuizQuestion } from "../types";

export const ENTERPRISE_SYSTEM_INTEGRATION: QuizQuestion[] = [
  {
    id: "enterprise-system-integration-1",
    post: "enterprise-system-integration",
    question: "벤더 API를 800ms 타임아웃으로 불렀는데 응답이 없어 같은 내용으로 다시 보냈다. 벤더에 배송 접수가 두 건 생긴 이유는?",
    choices: [
      "벤더가 두 번째 요청을 받지 못해서",
      "첫 요청이 벤더에서 처리됐지만 응답만 늦었고, 벤더는 재시도를 새 요청으로 봤기 때문에",
      "타임아웃이 나면 fetch가 요청을 자동으로 두 번 보내서",
      "지터가 없어서 두 요청이 같은 순간에 도착했기 때문에",
    ],
    answer: 1,
    explanation:
      "타임아웃은 실패가 아니라 결과를 모른다는 뜻이다. 첫 요청은 저장까지 끝났고 응답만 늦었으므로, 중복을 걸러 줄 장치 없이 다시 보내면 벤더에는 같은 주문이 두 건 남는다.",
    anchor: "타임아웃은-실패가-아니라-모른다는-뜻이다",
  },
  {
    id: "enterprise-system-integration-2",
    post: "enterprise-system-integration",
    question: "벤더가 멱등 키를 지원하지 않을 때 타임아웃 뒤 중복을 줄이는 방법으로 가장 알맞은 것은?",
    choices: [
      "타임아웃을 100ms로 줄여 빨리 다시 보낸다",
      "재시도 횟수를 늘린다",
      "다시 보내기 전에 우리 참조 번호로 벤더에 조회해서, 없을 때만 보낸다",
      "요청 본문에 현재 시각을 넣어 매번 다른 요청으로 만든다",
    ],
    answer: 2,
    explanation:
      "참조 번호로 먼저 조회하면 첫 요청이 처리됐는지 확인한 뒤 보낼 수 있다. 타임아웃을 줄이면 정상 요청까지 '모름'이 되어 오히려 중복이 늘고, 매번 다른 요청으로 만들면 걸러 낼 근거마저 사라진다.",
    anchor: "타임아웃은-실패가-아니라-모른다는-뜻이다",
  },
  {
    id: "enterprise-system-integration-3",
    post: "enterprise-system-integration",
    question: "벤더 상태 코드표에 없는 값 \"05\"가 들어왔다. 번역 계층은 어떻게 하는 게 좋나?",
    choices: [
      "가장 가까운 기본 상태(ACCEPTED)로 바꿔 흐름을 멈추지 않는다",
      "값을 그대로 도메인 모델에 넣는다",
      "그 행을 조용히 버린다",
      "오류로 세워 알린다. 벤더가 새 상태를 추가했다는 신호이기 때문이다",
    ],
    answer: 3,
    explanation:
      "모르는 코드는 의미가 바뀌었다는 신호라 기본값으로 뭉개면 잘못된 상태가 조용히 퍼진다. 필드 추가는 무시해도 대개 안전하지만, 코드 값 추가는 오류로 드러내야 한다.",
    anchor: "벤더의-말은-경계에서-우리-말로-바꾼다",
  },
  {
    id: "enterprise-system-integration-4",
    post: "enterprise-system-integration",
    question: "벤더 웹훅으로 SHIPPED(10:05)가 먼저 오고 ACCEPTED(10:00)가 나중에 왔다. `ON CONFLICT DO UPDATE ... WHERE vendor_updated_at < excluded.vendor_updated_at`로 저장하면 결과는?",
    choices: [
      "SHIPPED가 남고, 늦게 온 ACCEPTED는 아무것도 바꾸지 않는다",
      "ACCEPTED로 덮어써진다",
      "유니크 제약 위반 오류가 난다",
      "두 행이 함께 저장된다",
    ],
    answer: 0,
    explanation:
      "WHERE 조건이 더 새 시각일 때만 덮어쓰게 하므로 늦게 온 옛 사건은 INSERT 0 0으로 지나간다. 같은 사건이 중복으로 와도 시각이 같아 아무 변화가 없다.",
    anchor: "들어오는-쪽은-버전을-보고-덮어쓴다",
  },
  {
    id: "enterprise-system-integration-5",
    post: "enterprise-system-integration",
    question: "벤더 API가 400 E_ZIP(우편번호 형식 오류)을 돌려줬다. 어댑터는 어떻게 해야 하나?",
    choices: [
      "지수 백오프로 네 번까지 다시 보낸다",
      "다시 보내지 않고 DLQ로 보내 원인을 고친다",
      "서킷 브레이커를 연다",
      "타임아웃을 늘린 뒤 다시 보낸다",
    ],
    answer: 1,
    explanation:
      "400은 요청 내용이 틀렸다는 뜻이라 몇 번을 보내도 결과가 같다. 재시도는 연결 실패나 503처럼 일시적일 수 있는 실패에만 하고, 내용 오류는 바로 DLQ로 넘긴다.",
    anchor: "다시-보낼-것과-포기할-것",
  },
  {
    id: "enterprise-system-integration-6",
    post: "enterprise-system-integration",
    question: "멱등 키를 붙인 뒤에도 대사에서 여전히 잡히는 어긋남은?",
    choices: [
      "타임아웃 뒤 재시도로 생긴 중복 접수",
      "같은 웹훅이 두 번 온 것",
      "벤더 담당자가 화면에서 직접 취소한 주문",
      "503 뒤 재시도로 성공한 주문",
    ],
    answer: 2,
    explanation:
      "멱등 키는 우리가 보낸 요청의 중복만 막는다. 벤더 쪽에서 사람이 직접 바꾼 것은 재시도 경로를 거치지 않으므로 양쪽 전체를 비교하는 대사로만 찾을 수 있다.",
    anchor: "매일-밤-두-장부를-맞춰-본다",
  },
  {
    id: "enterprise-system-integration-7",
    post: "enterprise-system-integration",
    question: "대사에서 매일 몇 건이 '우리에게만 있음'으로 떴다가 다음 날 '벤더에게만 있음'으로 바뀐다. 먼저 의심할 것은?",
    choices: [
      "날짜 경계: 자정 근처 건이 벤더의 다음 날 파일에 실리거나 하루를 다른 시간대로 자른다",
      "벤더가 멱등 키를 무시한다",
      "DLQ가 가득 찼다",
      "어댑터의 재시도 간격이 너무 짧다",
    ],
    answer: 0,
    explanation:
      "같은 건이 하루 차이로 양쪽을 오가면 비교 창의 경계 문제다. 비교 구간을 겹치게 하거나 하루 늦게 다시 비교하고, 양쪽이 하루를 어느 시간대로 자르는지 확인한다.",
    anchor: "매일-밤-두-장부를-맞춰-본다",
  },
];
