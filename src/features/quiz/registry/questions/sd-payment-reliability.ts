import type { QuizQuestion } from "../types";

export const SD_PAYMENT_RELIABILITY: QuizQuestion[] = [
  {
    id: "sd-payment-reliability-1",
    post: "sd-payment-reliability",
    question: "PSP 청구 API 호출이 200ms 시간 초과로 끊겼다. 결제 건 상태를 어떻게 다뤄야 하나?",
    choices: [
      "FAILED로 바꾸고 구매자에게 다시 결제하라고 안내한다",
      "결과를 모르는 상태로 보고, 같은 키로 재시도하거나 확정될 때까지 EXECUTING에 둔다",
      "SUCCESS로 바꾸고 대사에서 확인한다",
      "결제 건을 지우고 새로 만든다",
    ],
    answer: 1,
    explanation:
      "시간 초과는 요청이 안 갔는지, 처리됐는데 답만 늦었는지 구분할 수 없다. 실험에서도 PSP는 청구를 끝냈는데 응답만 늦었다. FAILED로 두고 새로 결제하게 하면 이중 청구가 된다.",
    anchor: "시간-초과는-실패가-아니다",
  },
  {
    id: "sd-payment-reliability-2",
    post: "sd-payment-reliability",
    question: "재시도할 때마다 새 UUID를 만들어 Idempotency-Key로 보내면 어떻게 되나?",
    choices: [
      "PSP가 키를 알아보고 첫 결과를 돌려준다",
      "PSP가 키 형식 오류로 거부한다",
      "두 번째부터는 무료로 처리된다",
      "키가 매번 달라 PSP는 매번 새 결제로 보고 청구한다",
    ],
    answer: 3,
    explanation:
      "키는 시도가 아니라 결제 건을 가리켜야 한다. 결제 건을 만들 때 정한 ID를 재시도 루프 밖에서 정해 써야 PSP가 같은 요청임을 알아본다. 키 없이 세 번 재시도한 실험에서는 청구가 세 번 일어났다.",
    anchor: "같은-키로-다시-보내면-psp가-알아본다",
  },
  {
    id: "sd-payment-reliability-3",
    post: "sd-payment-reliability",
    question: "다음 중 재시도하지 말고 바로 FAILED로 처리할 실패는?",
    choices: [
      "연결 끊김",
      "PSP의 503 응답",
      "카드 한도 초과로 거절",
      "429 Too Many Requests",
    ],
    answer: 2,
    explanation:
      "카드 거절이나 한도 초과는 몇 번을 보내도 결과가 같은 실패라 바로 FAILED로 두고 다른 카드를 안내한다. 연결 끊김, 5xx, 429는 일시적일 수 있어 같은 키로 간격을 늘려 다시 보낸다.",
    anchor: "다시-보낼-실패-멈출-실패-모르는-실패",
  },
  {
    id: "sd-payment-reliability-4",
    post: "sd-payment-reliability",
    question:
      "스위퍼가 이미 SUCCESS로 마무리한 결제에, PSP가 새 이벤트 ID로 같은 성공 웹훅을 늦게 보냈다. 원장에 두 번 적히지 않게 막는 것은?",
    choices: [
      "EXECUTING일 때만 상태를 바꾸고 바뀐 경우에만 원장에 적는 상태 조건",
      "웹훅 수신 기록 테이블의 이벤트 ID 기본 키",
      "웹훅 서명 검사",
      "PSP의 Idempotency-Key",
    ],
    answer: 0,
    explanation:
      "이벤트 ID가 다르면 수신 기록 테이블은 처음 보는 이벤트로 통과시킨다. 상태를 앞으로만 가게 하는 조건(status = 'EXECUTING')이 이미 끝난 결제를 건드리지 않게 막는다. 실험에서도 'already final, skip'으로 끝났다.",
    anchor: "오래-멈춘-결제를-직접-물어본다",
  },
  {
    id: "sd-payment-reliability-5",
    post: "sd-payment-reliability",
    question: "이미 처리한 웹훅이 다시 왔을 때 500으로 답하면 어떻게 되나?",
    choices: [
      "PSP가 실패로 보고 같은 웹훅을 계속 다시 보낸다",
      "PSP가 결제를 취소한다",
      "아무 일도 없다",
      "PSP가 서명 키를 바꾼다",
    ],
    answer: 0,
    explanation:
      "보내는 쪽은 2xx가 아니면 실패로 보고 재전송한다. 중복은 조용히 무시하고 200으로 답해야 재전송이 멈춘다.",
    anchor: "웹훅은-두-번-오고-가짜가-오고-안-온다",
  },
  {
    id: "sd-payment-reliability-6",
    post: "sd-payment-reliability",
    question: "대사에서 PSP 정산 파일과 우리 원장을 INNER JOIN으로 맞추면 무엇을 놓치나?",
    choices: [
      "금액이 다른 줄",
      "한쪽에만 있는 거래 (이중 청구, 잘못된 성공 처리)",
      "통화가 같은 줄",
      "아무것도 놓치지 않는다",
    ],
    answer: 1,
    explanation:
      "INNER JOIN은 양쪽에 모두 있는 줄만 남긴다. PSP에만 있는 이중 청구나 우리에게만 있는 잘못된 성공 처리가 결과에서 사라진다. 그래서 양쪽을 모두 남기는 FULL OUTER JOIN을 쓴다.",
    anchor: "우리-기록과-psp-기록을-맞춰-본다",
  },
  {
    id: "sd-payment-reliability-7",
    post: "sd-payment-reliability",
    question: "대사 결과 '우리에게만 있음'으로 나온 30,000원 결제를 바로잡는 방법은?",
    choices: [
      "원장의 그 줄을 DELETE한다",
      "PSP에 같은 금액으로 다시 청구한다",
      "지갑 잔액에서만 빼 둔다",
      "결제 건을 FAILED로 바꾸고 원장에 반대 방향 거래를 적은 뒤 주문 서비스에 알린다",
    ],
    answer: 3,
    explanation:
      "PSP에 기록이 없으니 실제로 받은 돈이 없다. 원장 줄은 지우지 않고 반대 거래로 되돌려 이력을 남기고, 배송이 나가지 않게 주문 서비스에 알린다. 반복된다면 리다이렉트 결과로 상태를 바꾸는 경로를 찾는다.",
    anchor: "어긋난-줄을-처리하는-순서",
  },
];
