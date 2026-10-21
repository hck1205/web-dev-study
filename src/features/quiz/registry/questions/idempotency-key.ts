import type { QuizQuestion } from "../types";

export const IDEMPOTENCY_KEY: QuizQuestion[] = [
  {
    id: "idempotency-key-1",
    post: "idempotency-key",
    question: "저장된 키를 SELECT로 찾아보고 없으면 주문을 만드는 코드인데, 같은 키로 주문이 두 건 생겼다. 원인은?",
    choices: [
      "키가 UUID v4가 아니어서",
      "동시에 온 두 요청이 둘 다 \"키 없음\"을 확인한 뒤 각자 주문을 만들어서",
      "응답을 jsonb로 저장해서",
      "키 보관 기한이 24시간이어서",
    ],
    answer: 1,
    explanation:
      "확인과 기록 사이에 틈이 있으면 동시에 온 요청이 같은 답을 보고 둘 다 처리한다. 유니크 제약이 걸린 INSERT로 키를 먼저 선점하면 데이터베이스가 하나만 성공시킨다.",
    anchor: "확인하고-넣으면-둘-다-통과한다",
  },
  {
    id: "idempotency-key-2",
    post: "idempotency-key",
    question: "같은 키의 요청이 아직 처리 중일 때 두 번째 요청에 돌려주는 응답으로 IETF 초안이 제안하는 것은?",
    choices: ["409 Conflict", "422 Unprocessable Content", "400 Bad Request", "202 Accepted"],
    answer: 0,
    explanation:
      "초안은 처리 중이면 409, 같은 키를 다른 본문에 다시 쓰면 422, 키가 필요한데 없으면 400을 제안한다. 409에는 Retry-After를 붙여 언제 다시 오면 되는지 알려 준다.",
    anchor: "선점하고-작업하고-응답을-적는다",
  },
  {
    id: "idempotency-key-3",
    post: "idempotency-key",
    question: "선점은 커밋했는데 작업 도중 서버가 죽어 키가 processing으로 남았다. 넘겨받기 규칙이 없으면 어떻게 되나?",
    choices: [
      "다음 재시도가 바로 주문을 다시 만든다",
      "주문이 두 건 생긴다",
      "보관 기한이 끝날 때까지 같은 키의 재시도가 계속 409를 받는다",
      "PostgreSQL이 자동으로 키 줄을 지운다",
    ],
    answer: 2,
    explanation:
      "선점 트랜잭션은 이미 커밋돼서 processing 줄이 남는다. locked_at이 잠금 시간보다 오래된 줄은 같은 해시의 재시도가 넘겨받게 해야 이 키가 영원히 막히지 않는다.",
    anchor: "처리-도중에-서버가-죽으면",
  },
  {
    id: "idempotency-key-4",
    post: "idempotency-key",
    question: "선점부터 응답 기록까지 트랜잭션 하나로 하면, 같은 키로 동시에 온 두 번째 요청은 어떻게 되나?",
    choices: [
      "곧바로 409를 받는다",
      "유니크 인덱스에서 첫 트랜잭션이 끝날 때까지 기다렸다가 저장된 응답을 재생한다",
      "두 번째 요청도 주문을 만든다",
      "데드락으로 둘 다 실패한다",
    ],
    answer: 1,
    explanation:
      "PostgreSQL은 커밋되지 않은 같은 값이 유니크 인덱스에 있으면 그 트랜잭션의 결과를 알 때까지 기다린다. 실제로 Lock / transactionid에서 2초를 기다린 뒤 0행을 받고 done을 읽었다. 대신 기다리는 동안 DB 연결을 붙잡는다.",
    anchor: "트랜잭션-하나로-묶으면-기다리게-된다",
  },
  {
    id: "idempotency-key-5",
    post: "idempotency-key",
    question: "결제사 API를 부르는 작업을 넘겨받은 재시도가 두 번 결제하지 않게 하려면?",
    choices: [
      "결제 호출을 DB 트랜잭션 안에서 한다",
      "잠금 시간을 아주 짧게 잡는다",
      "결제 실패 응답을 저장해 재생한다",
      "우리 키에서 만든 키를 결제사의 멱등성 헤더로 넘기고 단계별 진행을 기록한다",
    ],
    answer: 3,
    explanation:
      "바깥 호출은 우리 트랜잭션에 들어오지 않아서 DB 롤백으로 되돌릴 수 없다. 같은 키를 넘기면 결제사가 중복을 걸러 주고, 진행 기록이 있으면 재시도가 끝난 단계를 건너뛴다.",
    anchor: "바깥-결제사를-부르는-단계가-끼면",
  },
  {
    id: "idempotency-key-6",
    post: "idempotency-key",
    question: "멱등성 키 테이블의 기본 키를 key 하나가 아니라 (user_id, key)로 잡는 이유는?",
    choices: [
      "다른 사용자가 같은 키를 보냈을 때 남의 응답을 재생해 주지 않으려고",
      "인덱스 크기를 줄이려고",
      "키 보관 기한을 사용자마다 다르게 하려고",
      "409와 422를 구분하려고",
    ],
    answer: 0,
    explanation:
      "키만으로 유일하면 같은 키를 보낸 다른 사용자에게 처음 사용자의 응답을 그대로 돌려준다. 키를 추측해 남의 결과를 훔쳐볼 수 있게 되니 사용자 범위로 묶는다.",
    anchor: "키-한-줄에-담는-것",
  },
  {
    id: "idempotency-key-7",
    post: "idempotency-key",
    question: "처리 중 DB 장애로 500이 났을 때 멱등성 키를 어떻게 다루나?",
    choices: [
      "500 응답을 저장해 이후 재시도에 재생한다",
      "키를 done으로 바꾼다",
      "응답을 저장하지 않고 processing 줄을 풀어 재시도가 다시 처리하게 한다",
      "키를 영구히 막는다",
    ],
    answer: 2,
    explanation:
      "5xx와 타임아웃은 서버 사정으로 난 실패라 재시도가 다시 해 볼 수 있어야 한다. 저장해서 재생하는 건 성공과 입력 오류처럼 다시 보내도 결과가 같아야 하는 응답이다.",
    anchor: "어떤-응답을-저장할지",
  },
];
