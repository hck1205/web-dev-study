import type { QuizQuestion } from "../types";

export const SD_WALLET_TRANSFER: QuizQuestion[] = [
  {
    id: "sd-wallet-transfer-1",
    post: "sd-wallet-transfer",
    question:
      "alice(샤드 A)에서 3만 원을 빼서 커밋한 직후 지갑 서비스가 죽었다. dave(샤드 B)에는 아직 아무것도 하지 않았다. 전체 총액은 어떻게 되나?",
    choices: [
      "샤드 A가 자동으로 롤백해 총액이 그대로다",
      "샤드 B가 A의 커밋을 보고 알아서 더해 총액이 그대로다",
      "3만 원이 줄어든 채로 남는다",
      "3만 원이 늘어난다",
    ],
    answer: 2,
    explanation:
      "샤드 A의 커밋은 이미 디스크에 남아 되돌려지지 않고, 샤드 B는 A에서 무슨 일이 있었는지 모른다. 실험에서도 총액이 6만 원에서 3만 원으로 줄었다. 두 커밋을 묶어 주는 장치가 없으면 이 틈을 막을 수 없다.",
    anchor: "커밋-두-번-사이에서-돈이-사라진다",
  },
  {
    id: "sd-wallet-transfer-2",
    post: "sd-wallet-transfer",
    question: "샤드가 다른 두 지갑 사이 송금에서 출금을 입금보다 먼저 하는 이유는?",
    choices: [
      "출금 쿼리가 입금 쿼리보다 빨라서",
      "중간 상태에서 돈이 잠시 사라질 뿐 누구도 아직 빠지지 않은 돈을 쓸 수 없어서",
      "입금을 먼저 하면 CHECK 제약이 입금 쪽에서 실패해서",
      "PostgreSQL이 출금을 먼저 하도록 강제해서",
    ],
    answer: 1,
    explanation:
      "출금만 된 상태는 돈이 어디에도 없는 상태라 확정하거나 되돌리면 된다. 입금이 먼저 되면 받는 사람이 그 돈을 써 버릴 수 있고, 뒤의 출금이 잔액 부족으로 실패하면 실험처럼 돈이 생긴다.",
    anchor: "커밋-두-번-사이에서-돈이-사라진다",
  },
  {
    id: "sd-wallet-transfer-3",
    post: "sd-wallet-transfer",
    question: "2PC로 송금할 때 준비(PREPARE) 상태가 길어지면 지갑에서 어떤 일이 생기나?",
    choices: [
      "같은 계좌의 다른 송금이 잠금을 기다리다 시간 초과로 실패한다",
      "준비된 금액이 자동으로 두 번 반영된다",
      "다른 송금이 준비 전 값을 읽고 그대로 덮어쓴다",
      "아무 영향이 없다. 준비 상태는 잠금을 놓기 때문이다",
    ],
    answer: 0,
    explanation:
      "준비된 트랜잭션은 커밋이나 롤백이 될 때까지 고친 줄의 잠금을 쥐고 있다. 실험에서 alice의 다른 송금이 2초 동안 기다리다 lock timeout으로 실패했다. 잠금을 놓는다는 보기는 TC/C의 Try에 더 가깝다.",
    anchor: "2pc-둘-다-준비시키고-한-번에-커밋한다",
  },
  {
    id: "sd-wallet-transfer-4",
    post: "sd-wallet-transfer",
    question: "TC/C의 Try 단계에서 받는 쪽(dave) 잔액을 미리 더해 두지 않는 이유는?",
    choices: [
      "받는 쪽 DB는 Try를 처리할 수 없어서",
      "Confirm 단계가 너무 빨리 끝나서",
      "미리 더한 돈을 dave가 써 버리면 Cancel 때 되돌릴 수 없어서",
      "hold 칸이 받는 쪽에만 있어서",
    ],
    answer: 2,
    explanation:
      "Try 뒤에는 거래가 취소될 수도 있다. 받는 쪽에 미리 넣으면 취소 전에 쓸 수 있으니 되돌릴 방법이 없어진다. 그래서 보내는 쪽만 돈을 hold로 묶고 받는 쪽은 계좌를 확인만 한다.",
    anchor: "try-confirm-cancel-먼저-묶어-두고-나중에-확정한다",
  },
  {
    id: "sd-wallet-transfer-5",
    post: "sd-wallet-transfer",
    question:
      "TC/C에서 Try가 네트워크에서 늦어져 Cancel이 먼저 도착했다. 샤드에는 이 거래 기록이 없다. 샤드는 어떻게 해야 하나?",
    choices: [
      "기록이 없으니 오류를 돌려주고 코디네이터가 다시 보내게 한다",
      "아무것도 하지 않고 성공으로 응답한다",
      "Try가 올 때까지 Cancel을 붙잡고 기다린다",
      "성공으로 응답하되 CANCELLED 표식을 남겨 늦은 Try를 거절한다",
    ],
    answer: 3,
    explanation:
      "표식 없이 넘어가면 늦은 Try가 돈을 hold로 묶고, 코디네이터는 이미 거래를 끝냈으니 돈이 영영 묶인다. 실험에서 표식이 없을 때 3만 원이 hold에 남았다. 빈 취소는 성공으로 받되 기록을 남겨야 한다.",
    anchor: "취소가-try보다-먼저-도착하면",
  },
  {
    id: "sd-wallet-transfer-6",
    post: "sd-wallet-transfer",
    question:
      "코디네이터 단계 상태 테이블에 CONFIRMING이 적힌 거래를 복구 작업이 발견했다. 받는 쪽 샤드가 Confirm에 실패했다면 어떻게 하나?",
    choices: [
      "받는 쪽이 살아날 때까지 Confirm을 다시 보낸다",
      "Cancel로 바꿔 보내는 쪽 hold를 푼다",
      "거래를 지우고 사용자에게 다시 보내라고 한다",
      "보내는 쪽에 Confirm을 한 번 더 보내 hold를 두 번 비운다",
    ],
    answer: 0,
    explanation:
      "결정이 Confirm으로 적혔으면 끝까지 Confirm한다. 중간에 Cancel로 돌아서면 이미 확정된 참여자와 풀린 참여자가 섞여 돈이 생기거나 사라진다. Confirm이 멱등해서 여러 번 보내도 한 번만 반영된다.",
    anchor: "코디네이터가-try-도중에-죽으면",
  },
  {
    id: "sd-wallet-transfer-7",
    post: "sd-wallet-transfer",
    question: "사가로 송금하다 입금이 실패해 보상한 경우, TC/C와 비교해 사용자 거래 내역에 보이는 차이는?",
    choices: [
      "사가는 내역에 아무것도 남지 않는다",
      "사가는 출금과 출금 취소 두 줄이 남는다",
      "TC/C는 출금과 출금 취소 두 줄이 남고 사가는 남지 않는다",
      "둘 다 똑같이 hold 기록만 남는다",
    ],
    answer: 1,
    explanation:
      "사가의 1단계는 잔액을 실제로 줄이고 커밋하며, 보상은 새 입금 트랜잭션이다. 그래서 내역에 출금과 출금 취소가 둘 다 남는다. TC/C는 hold로 묶었다 푸는 것이라 내역에 남기지 않을 수 있다.",
    anchor: "사가-차례로-하고-실패하면-반대로-되돌린다",
  },
];
