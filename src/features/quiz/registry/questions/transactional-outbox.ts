import type { QuizQuestion } from "../types";

export const TRANSACTIONAL_OUTBOX: QuizQuestion[] = [
  {
    id: "transactional-outbox-1",
    post: "transactional-outbox",
    question: "릴레이를 LISTEN/NOTIFY로 깨우면서도 긴 간격의 폴링을 함께 남기는 이유는?",
    choices: [
      "NOTIFY는 롤백된 트랜잭션에서도 전달되기 때문에",
      "듣는 연결이 끊겨 있던 동안 보낸 신호는 사라지고 다시 받을 수 없기 때문에",
      "NOTIFY는 커밋 전에 전달되어 행이 아직 안 보일 수 있기 때문에",
      "NOTIFY 한 번에 이벤트 하나만 실을 수 있기 때문에",
    ],
    answer: 1,
    explanation:
      "NOTIFY는 커밋될 때 전달되고 롤백되면 사라지니 신호가 오면 행이 이미 보인다. 다만 보관되지 않아서 연결이 끊긴 동안의 신호는 잃으니, 신호는 깨우는 용도로만 쓰고 폴링을 안전망으로 둔다.",
    anchor: "릴레이가-언제-깨어나나",
  },
  {
    id: "transactional-outbox-2",
    post: "transactional-outbox",
    question: "두 릴레이가 LIMIT 2 FOR UPDATE SKIP LOCKED로 행을 나눠 갔다. A가 #1(주문 201 Placed), #2를, B가 #3(201 Paid), #4(201 Shipped)를 집었고 A가 느리다. 받는 쪽에서 생기는 일은?",
    choices: [
      "SKIP LOCKED가 같은 행을 막으니 순서도 지켜진다",
      "B가 A를 기다렸다가 보낸다",
      "주문 201의 Paid와 Shipped가 Placed보다 먼저 도착할 수 있다",
      "B가 #1도 다시 보내 중복이 생긴다",
    ],
    answer: 2,
    explanation:
      "SKIP LOCKED는 같은 행을 두 릴레이가 집지 않게 할 뿐, 같은 주문의 사건을 한 릴레이에 모아 주지는 않는다. 시뮬레이션에서도 받는 쪽은 201:OrderPaid, 201:OrderShipped, 201:OrderPlaced 순으로 받았다.",
    anchor: "릴레이를-둘-띄우면-순서가-바뀐다",
  },
  {
    id: "transactional-outbox-3",
    post: "transactional-outbox",
    question: "\"주문마다 아직 안 나간 사건 중 가장 앞선 것 하나만 보낸다\" 규칙에서, 주문 202의 머리 사건이 재시도 대기 중이면?",
    choices: [
      "주문 202의 사건은 모두 기다리고, 다른 주문은 계속 나간다",
      "주문 202의 뒤 사건이 먼저 나간다",
      "모든 주문의 전송이 멈춘다",
      "머리 사건이 자동으로 삭제된다",
    ],
    answer: 0,
    explanation:
      "머리가 쉬면 그 주문 전체가 직렬로 기다린다. 이게 순서를 지키는 대가이고, 다른 주문은 영향을 받지 않아 처리량은 주문 사이의 병렬로 얻는다.",
    anchor: "주문마다-맨-앞-사건만-보낸다",
  },
  {
    id: "transactional-outbox-4",
    post: "transactional-outbox",
    question: "보내기 실패 시 attempts를 올리는 UPDATE를 보내기와 같은 트랜잭션에 넣으면 생기는 문제는?",
    choices: [
      "예외로 트랜잭션이 롤백되면 attempts 증가도 함께 사라져 몇 번 실패해도 0으로 남는다",
      "attempts가 두 번씩 올라간다",
      "다른 릴레이가 그 행을 집을 수 없게 된다",
      "next_attempt_at이 과거로 바뀐다",
    ],
    answer: 0,
    explanation:
      "보내기 도중 예외가 나면 그 트랜잭션의 모든 변경이 롤백된다. 실패 기록은 예외를 잡은 뒤 별도로 커밋해야 백오프와 재시도 상한이 실제로 동작한다.",
    anchor: "계속-실패하는-사건-하나",
  },
  {
    id: "transactional-outbox-5",
    post: "transactional-outbox",
    question: "보낸 아웃박스 행을 DELETE로 지운 뒤 VACUUM까지 했는데 테이블 파일 크기가 132MB 그대로였다. 왜일까?",
    choices: [
      "DELETE가 실제로는 실행되지 않아서",
      "VACUUM은 죽은 튜플 자리를 재사용 가능하게 만들 뿐 파일을 줄이지 않아서",
      "jsonb 열은 지울 수 없어서",
      "인덱스가 남아 있어서 테이블도 줄지 않는다",
    ],
    answer: 1,
    explanation:
      "일반 VACUUM은 빈자리를 표시해 이후 INSERT가 쓰게 할 뿐 운영체제에 공간을 돌려주지 않는다. 그래서 하루 단위 파티션을 만들어 지난 파티션을 떼어 내는 편이 빠르고(예제에서 7ms), 공간도 바로 돌아온다.",
    anchor: "아웃박스-테이블-청소",
  },
  {
    id: "transactional-outbox-6",
    post: "transactional-outbox",
    question: "아웃박스로 메일 발송 API를 부를 때, 릴레이가 응답을 받은 직후 죽어 같은 요청을 다시 보내도 메일이 한 통만 나가게 하려면?",
    choices: [
      "릴레이를 하나만 띄운다",
      "보내기 전에 published_at을 먼저 채운다",
      "타임아웃을 길게 잡는다",
      "아웃박스 행의 이벤트 ID를 Idempotency-Key로 넘겨 받는 쪽이 중복을 거르게 한다",
    ],
    answer: 3,
    explanation:
      "릴레이는 적어도 한 번 보내니 같은 요청이 다시 갈 수 있다. 받는 쪽이 같은 키를 알아보고 첫 응답을 돌려주면 실제 발송은 한 번이고, 먼저 표시하고 보내면 반대로 메일이 영영 안 갈 수 있다.",
    anchor: "브로커가-아닌-곳으로-보내는-아웃박스",
  },
];
