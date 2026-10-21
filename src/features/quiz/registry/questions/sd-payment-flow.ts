import type { QuizQuestion } from "../types";

export const SD_PAYMENT_FLOW: QuizQuestion[] = [
  {
    id: "sd-payment-flow-1",
    post: "sd-payment-flow",
    question: "PSP가 호스팅하는 결제 페이지나 위젯을 쓰는 가장 큰 이유는?",
    choices: [
      "결제 승인 속도가 빨라져서",
      "PSP 수수료가 낮아져서",
      "웹훅을 받을 필요가 없어져서",
      "카드 번호가 우리 서버를 지나지 않아 카드 보안 기준(PCI DSS)의 범위가 크게 줄어서",
    ],
    answer: 3,
    explanation:
      "카드 번호를 직접 받으면 그 데이터를 다루는 시스템 전체가 보안 감사 대상이 된다. 결제 화면을 PSP에 맡기면 카드 번호는 PSP로 바로 가고 우리는 결과만 받는다. 결과는 여전히 웹훅이나 상태 조회로 확인해야 한다.",
    anchor: "카드-번호를-만지지-않는-결제-페이지",
  },
  {
    id: "sd-payment-flow-2",
    post: "sd-payment-flow",
    question:
      "결제 후 돌아오는 주소 https://shop.example/checkout/done?intent=pi_1&payResult=success의 payResult만 보고 주문을 완료 처리하면 어떻게 되나?",
    choices: [
      "문제없다. PSP가 만든 주소라 바뀌지 않는다",
      "사용자가 값을 바꾸거나 실패한 결제가 성공으로 기록될 수 있다",
      "웹훅이 두 번 온다",
      "PSP가 결제를 취소한다",
    ],
    answer: 1,
    explanation:
      "리다이렉트 주소는 사용자의 브라우저를 거쳐서 얼마든지 바뀔 수 있고, 창을 닫으면 오지도 않는다. 결제 상태는 서명된 웹훅이나 PSP 상태 조회로 확정하고, 리다이렉트는 어느 결과 화면을 보여 줄지 고르는 데만 쓴다.",
    anchor: "카드-번호를-만지지-않는-결제-페이지",
  },
  {
    id: "sd-payment-flow-3",
    post: "sd-payment-flow",
    question: "JavaScript에서 0.1을 열 번 더한 값과 1을 ===로 비교하면?",
    choices: [
      "false, 합이 0.9999999999999999라서",
      "true",
      "false, 합이 1.0000000000000002라서",
      "NaN이 나와 비교할 수 없다",
    ],
    answer: 0,
    explanation:
      "이진 실수는 0.1을 정확히 담지 못해 실험에서 합이 0.9999999999999999가 됐다. 그래서 금액은 원이나 센트처럼 가장 작은 단위의 정수로 저장한다.",
    anchor: "금액은-정수로-적는다",
  },
  {
    id: "sd-payment-flow-4",
    post: "sd-payment-flow",
    question:
      "원장 거래에 psp_receivable +10000, seller:shop-7 −9670 두 줄만 넣고 COMMIT했다. 지연 제약 트리거가 걸려 있다면 어떻게 되나?",
    choices: [
      "두 줄이 그대로 저장된다",
      "INSERT 순간 바로 오류가 난다",
      "COMMIT 때 합이 330이라 거래 전체가 거부된다",
      "모자란 330원이 자동으로 수수료 계정에 들어간다",
    ],
    answer: 2,
    explanation:
      "트리거를 DEFERRABLE INITIALLY DEFERRED로 만들어 줄을 넣는 중간에는 검사하지 않고 커밋 직전에 거래별 합을 본다. 수수료 줄이 빠져 합이 330이라 'not balanced' 오류로 거래가 통째로 거부됐다.",
    anchor: "돈은-생기지도-사라지지도-않는다",
  },
  {
    id: "sd-payment-flow-5",
    post: "sd-payment-flow",
    question:
      "12,000원 결제(우리 수수료 396원), PSP 정산(PSP 수수료 240원), 판매자 지급까지 끝났을 때 우리 은행 계정에 남는 금액은?",
    choices: [
      "0원",
      "156원",
      "240원",
      "396원",
    ],
    answer: 1,
    explanation:
      "PSP가 11,760원을 보내고 판매자에게 11,604원을 지급하니 은행에는 156원이 남는다. 우리 수수료 396원에서 PSP 수수료 240원을 뺀 이익과 같다.",
    anchor: "하루가-지나-돈이-실제로-움직일-때",
  },
  {
    id: "sd-payment-flow-6",
    post: "sd-payment-flow",
    question: "원장에 잘못 적은 결제 줄을 바로잡는 방법으로 알맞은 것은?",
    choices: [
      "UPDATE로 금액을 고친다",
      "DELETE로 지우고 다시 적는다",
      "반대 방향의 거래를 새로 적는다",
      "지갑 잔액만 고친다",
    ],
    answer: 2,
    explanation:
      "원장 줄은 고치거나 지우지 않고 반대 거래로 되돌린다. 그래야 무엇이 언제 왜 바뀌었는지 남는다. 지갑은 원장에서 나온 사본이라 원장을 기준으로 맞춘다.",
    anchor: "돈은-생기지도-사라지지도-않는다",
  },
  {
    id: "sd-payment-flow-7",
    post: "sd-payment-flow",
    question: "웹훅 처리 안에서 주문 서비스와 메일 서비스를 HTTP로 차례로 부르지 않고 아웃박스와 메시지 큐를 쓰는 이유는?",
    choices: [
      "다른 서비스가 느리면 웹훅 응답이 늦어져 PSP가 재전송하고, 결제 처리와 알림이 엉키기 때문에",
      "HTTP로는 결제 금액을 보낼 수 없어서",
      "메시지 큐가 결제를 승인해 주어서",
      "원장을 메시지 큐에 저장하려고",
    ],
    answer: 0,
    explanation:
      "결제 영역 안의 상태, 원장, 지갑은 한 트랜잭션으로 커밋하고, 바깥 알림은 아웃박스에 적었다가 큐로 넘긴다. 그러면 메일 서버가 느려도 결제 처리는 끝나고, 알림은 커밋된 결제에만 나간다.",
    anchor: "결제-서비스-안의-역할-나누기",
  },
];
