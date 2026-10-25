import type { QuizQuestion } from "../types";

export const RW_STRIPE_IDEMPOTENCY: QuizQuestion[] = [
  {
    id: "rw-stripe-idempotency-1",
    post: "rw-stripe-idempotency",
    question: "Stripe 블로그가 나눈 세 가지 호출 실패 중, 클라이언트가 서로 구분할 수 없어 멱등 키가 꼭 필요한 경우는?",
    choices: [
      "연결 실패와 처리 도중 실패",
      "처리 도중 실패와, 처리는 성공했는데 응답만 잃은 실패",
      "연결 실패와 응답만 잃은 실패",
      "세 가지 모두 클라이언트가 쉽게 구분한다",
    ],
    answer: 1,
    explanation:
      "연결조차 안 된 실패는 다시 보내도 된다는 게 비교적 분명하다. 처리 도중 끊겼는지, 처리는 끝났는데 응답만 잃었는지는 클라이언트 쪽에서 똑같이 보인다. 그래서 같은 키로 다시 보내고 서버가 이어서 처리하거나 저장한 결과를 돌려주게 한다.",
    anchor: "연결이-끊긴-결제-요청은-세-가지-중-하나다",
  },
  {
    id: "rw-stripe-idempotency-2",
    post: "rw-stripe-idempotency",
    question: "API v1에서 파라미터 검증에 실패한 요청을 같은 멱등 키로 고쳐 다시 보내면?",
    choices: [
      "처음 받은 검증 오류가 그대로 재생된다",
      "키가 이미 쓰였다는 409가 온다",
      "검증 실패는 끝점 실행 전이라 저장되지 않으므로, 고친 요청이 정상 처리된다",
      "24시간이 지나야 다시 보낼 수 있다",
    ],
    answer: 2,
    explanation:
      "Stripe는 끝점 실행이 시작된 뒤의 결과만 저장한다. 검증 실패, 동시 실행 충돌, 잘못된 API 키, 요청 수 제한처럼 실행 전에 난 오류는 저장하지 않으니 원인을 고쳐 다시 보낼 수 있다. 실행이 시작된 뒤 나온 400은 저장돼 같은 키로 보내면 같은 400이 돌아온다.",
    anchor: "api-문서가-정해-둔-규칙",
  },
  {
    id: "rw-stripe-idempotency-3",
    post: "rw-stripe-idempotency",
    question: "결제 요청이 500을 돌려줬다. Stripe 문서가 권하는 다음 행동은?",
    choices: [
      "바로 새 멱등 키로 다시 보낸다",
      "같은 키로 계속 보내면 언젠가 200이 온다",
      "500은 확실한 실패이니 사용자에게 결제 실패를 알린다",
      "결과가 정해지지 않은 것으로 보고, 객체 조회·대시보드·웹훅으로 원래 결과를 확인한 뒤 행동을 정한다",
    ],
    answer: 3,
    explanation:
      "500을 받아도 작업이 부수 효과를 남겼을 수 있다. 새 키로 보내면 두 번째 결제가 될 수 있고, 같은 키로 보내면 저장된 500이 그대로 돌아올 뿐이다. 그래서 먼저 결과를 맞춰 본다.",
    anchor: "500은-실패가-아니라-모른다는-뜻이다",
  },
  {
    id: "rw-stripe-idempotency-4",
    post: "rw-stripe-idempotency",
    question: "stripe-ruby가 자동으로 다시 보내지 않는 응답은?",
    choices: [
      "Stripe-Rate-Limited-Reason 헤더가 붙은 요청 수 제한 429",
      "409 Conflict",
      "code가 lock_timeout인 429",
      "읽기 타임아웃",
    ],
    answer: 0,
    explanation:
      "소스 주석은 가장 흔한 429인 요청 수 제한에는 다시 보내지 않는다고 적었다. 다시 보내면 경합만 키우기 때문이다. 409와 락 타임아웃 429, 타임아웃과 연결 오류는 다시 보낸다.",
    anchor: "언제-다시-보내나-sdk가-고르는-기준",
  },
  {
    id: "rw-stripe-idempotency-5",
    post: "rw-stripe-idempotency",
    question: "stripe-ruby 기본값(첫 대기 0.5초, 최대 5초)에서 첫 번째 재시도의 대기 시간이 지터가 있는데도 늘 0.5초인 이유는?",
    choices: [
      "첫 재시도에는 rand를 쓰지 않아서",
      "기준값 0.5초에 절반~전부 배수를 곱한 뒤, 첫 대기보다 짧으면 첫 대기로 올리기 때문이다",
      "최대 대기 5초에 걸려서",
      "Stripe-Should-Retry 헤더가 대기 시간을 0.5초로 정해서",
    ],
    answer: 1,
    explanation:
      "sleep_time은 기준값에 0.5*(1+rand)를 곱해 절반에서 전부 사이로 흔든 뒤, 첫 대기보다 작으면 첫 대기로 올린다. 첫 재시도의 기준값이 0.5초라 0.25~0.5초가 모두 0.5초로 올라간다. 그래서 흩어지는 건 두 번째 재시도부터다.",
    anchor: "얼마나-기다렸다-다시-보내나",
  },
  {
    id: "rw-stripe-idempotency-6",
    post: "rw-stripe-idempotency",
    question: "SDK가 멱등 키를 자동으로 붙이는데도 작업 큐가 결제 작업을 다시 실행하면 이중 청구가 날 수 있는 이유는?",
    choices: [
      "작업 큐가 HTTP 메서드를 GET으로 바꿔서",
      "자동 키는 24시간 동안만 유효해서",
      "자동 키는 SDK 호출 한 번 안에서만 같고, 다시 실행된 작업은 SDK를 새로 불러 새 키를 만들기 때문이다",
      "Stripe가 자동 키를 저장하지 않아서",
    ],
    answer: 2,
    explanation:
      "SDK가 만든 키는 그 호출 안의 재시도에서만 유지된다. 재시도가 SDK 밖에서 일어나면 Stripe 쪽에서는 서로 다른 두 요청이다. 그래서 문서는 작업 하나에 쓸 키를 직접 만들어 저장하고 모든 시도에 넘기라고 한다.",
    anchor: "sdk가-키를-대신-만들-때의-함정",
  },
];
