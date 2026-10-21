import type { QuizQuestion } from "../types";

export const SD_HOTEL_DOUBLE_BOOKING: QuizQuestion[] = [
  {
    id: "sd-hotel-double-booking-1",
    post: "sd-hotel-double-booking",
    question: "같은 손님의 두 번 누르기를 서버에서 막으려면 예약 id를 언제 만들어야 하나?",
    choices: [
      "예약 요청이 서버에 도착할 때마다 서버가 새로 만든다",
      "결제가 끝난 뒤 결제 서비스가 만든다",
      "주문서를 열 때 발급하고, 앱이 재시도할 때도 같은 id를 보낸다",
      "DB의 bigserial이 INSERT할 때 만든다",
    ],
    answer: 2,
    explanation:
      "요청이 올 때마다 새 id를 붙이면 재시도도 새 요청으로 보여서 예약이 두 줄 생긴다. 주문서를 열 때 정한 id를 기본 키로 두면 두 번째 INSERT가 충돌로 끝나고 기존 예약을 돌려줄 수 있다.",
    anchor: "같은-손님이-두-번-누른다",
  },
  {
    id: "sd-hotel-double-booking-2",
    post: "sd-hotel-double-booking",
    question:
      "같은 reservation_id로 두 요청이 동시에 INSERT ... ON CONFLICT DO NOTHING을 실행하면 뒤의 요청은 어떻게 되나?",
    choices: [
      "앞 트랜잭션이 끝날 때까지 기다렸다가, 앞이 커밋되면 아무것도 넣지 않고 끝난다",
      "두 요청 모두 한 줄씩 넣고, 나중에 중복을 지운다",
      "곧바로 duplicate key 오류를 받는다",
      "앞 트랜잭션을 롤백시키고 자기가 들어간다",
    ],
    answer: 0,
    explanation:
      "같은 키를 넣는 트랜잭션이 아직 끝나지 않았으면 결과를 알 수 없으니 기다린다. 실험에서 둘째 클릭은 53ms를 기다린 뒤 충돌로 판정됐고, 앞이 롤백됐다면 뒤의 것이 들어갔을 것이다.",
    anchor: "같은-손님이-두-번-누른다",
  },
  {
    id: "sd-hotel-double-booking-3",
    post: "sd-hotel-double-booking",
    question:
      "남은 방 3개에 손님 10명이 '읽고, 판단하고, total_reserved = total_reserved + 1로 쓰기'를 동시에 하면 결과는?",
    choices: [
      "3명만 예약되고 나머지는 오류를 받는다",
      "갱신 손실이 생겨 재고가 18로 남는다",
      "교착 상태가 나서 모두 실패한다",
      "10명 모두 예약되고 재고가 27/20이 되며 오류는 하나도 없다",
    ],
    answer: 3,
    explanation:
      "모두 판단 시점에 17/20을 봤으니 전원이 남았다고 결론을 낸다. DB 안에서 더했기 때문에 갱신 손실은 없지만 재고는 27/20으로 넘친다. 앱이 읽은 값에 1을 더해 SET 18로 보냈다면 오히려 갱신 손실이 생겼을 것이다.",
    anchor: "마지막-세-방을-열-명이-노린다",
  },
  {
    id: "sd-hotel-double-booking-4",
    post: "sd-hotel-double-booking",
    question: "여러 날짜를 SELECT ... FOR UPDATE로 잠글 때 ORDER BY date를 붙이는 이유는?",
    choices: [
      "인덱스를 타게 하려고",
      "모든 트랜잭션이 같은 순서로 잠가 서로 상대 행을 기다리는 교착 상태를 피하려고",
      "결과를 화면에 날짜순으로 보여 주려고",
      "잠금 세기를 FOR NO KEY UPDATE로 낮추려고",
    ],
    answer: 1,
    explanation:
      "한쪽은 24일 → 25일, 다른 쪽은 25일 → 24일 순으로 잠그면 서로 상대가 쥔 행을 기다리다 멈춘다. 순서를 하나로 정하면 뒤에 온 쪽은 첫 행에서 기다릴 뿐 교착 상태가 생기지 않는다.",
    anchor: "줄을-세운다-select-for-update",
  },
  {
    id: "sd-hotel-double-booking-5",
    post: "sd-hotel-double-booking",
    question:
      "남은 방 10개에 손님 10명이 동시에 버전 검사(최대 3번 시도)로 예약했더니 3명만 성공했다. 왜인가?",
    choices: [
      "버전 열에 인덱스가 없어서",
      "READ COMMITTED가 버전 값을 숨겨서",
      "매 회차 모두 같은 버전을 읽어 한 명만 이기고, 나머지는 재시도 횟수를 다 써서 포기했기 때문에",
      "CHECK 제약이 남은 방을 잘못 계산해서",
    ],
    answer: 2,
    explanation:
      "몰리는 행에서는 회차마다 버전이 맞는 사람이 한 명뿐이라 충돌이 9 + 8 + 7 = 24번 났다. 방이 남아 있어도 손님을 돌려보내는 것이 낙관적 잠금이 몰리는 곳에서 무너지는 모습이다.",
    anchor: "버전을-보고-다시-한다-낙관적-잠금",
  },
  {
    id: "sd-hotel-double-booking-6",
    post: "sd-hotel-double-booking",
    question: "CHECK (total_reserved <= total_inventory) 방식이 FOR UPDATE보다 실험에서 훨씬 빨랐던 이유는?",
    choices: [
      "UPDATE가 행을 잠그지 않기 때문에",
      "잠금을 쥐는 구간이 '더하고 커밋'하는 몇 ms뿐이고 가격 계산은 잠금 밖에서 끝났기 때문에",
      "CHECK 제약은 메모리에서만 검사하기 때문에",
      "격리 수준이 자동으로 SERIALIZABLE로 바뀌기 때문에",
    ],
    answer: 1,
    explanation:
      "UPDATE도 고치는 행을 커밋까지 잠그지만, 미리 읽고 판단하는 단계가 없으니 쥐는 시간이 아주 짧다. FOR UPDATE는 읽는 순간부터 판단이 끝날 때까지 잠금을 쥐어서 손님 수만큼 대기 시간이 쌓였다.",
    anchor: "넘치면-db가-거절한다-check-제약",
  },
];
