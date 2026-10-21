import type { QuizQuestion } from "../types";

export const SD_HOTEL_INVENTORY_SCALING: QuizQuestion[] = [
  {
    id: "sd-hotel-inventory-scaling-1",
    post: "sd-hotel-inventory-scaling",
    question: "호텔 예약에서 재고를 방 번호가 아니라 '호텔, 객실 유형, 날짜'마다 한 줄로 세는 이유는?",
    choices: [
      "방 번호는 개인정보라 저장할 수 없어서",
      "손님은 특정 방이 아니라 유형을 사고, 방 번호는 체크인 때 정해지기 때문에",
      "날짜 열이 있으면 샤딩이 필요 없어서",
      "방 번호로 세면 CHECK 제약을 걸 수 없어서",
    ],
    answer: 1,
    explanation:
      "같은 디럭스 더블 40개 중 아무거나 하나를 파는 것이 호텔 예약이다. 유형과 날짜마다 팔 수 있는 수와 팔린 수를 두면 몇 박이든 그 날짜 줄만 보면 되고, 방 하나가 고장 나도 total_inventory만 줄이면 된다.",
    anchor: "방이-아니라-객실-유형을-판다",
  },
  {
    id: "sd-hotel-inventory-scaling-2",
    post: "sd-hotel-inventory-scaling",
    question: "아직 줄이 만들어지지 않은 먼 날짜를 예약하는 UPDATE를 실행하면 어떻게 되나?",
    choices: [
      "외래 키 오류가 난다",
      "CHECK 제약 위반이 난다",
      "오류 없이 0줄을 고친다. 앱이 고친 줄 수를 확인하지 않으면 예약 기록만 생긴다",
      "PostgreSQL이 줄을 자동으로 만들어 준다",
    ],
    answer: 2,
    explanation:
      "조건에 맞는 줄이 없으면 UPDATE는 UPDATE 0으로 조용히 끝난다. 그래서 고친 줄 수가 묵는 밤의 수와 같은지 확인하고 다르면 롤백해야 하며, 새벽 작업이 줄을 제때 만들고 있는지도 지켜본다.",
    anchor: "날짜마다-한-줄씩-미리-만든다",
  },
  {
    id: "sd-hotel-inventory-scaling-3",
    post: "sd-hotel-inventory-scaling",
    question:
      "방 20개, 10% 초과 예약 허용일 때 24일 18개, 25일 21개, 26일 15개가 팔렸다. 24일 체크인 27일 체크아웃으로 최대 몇 개를 팔 수 있나?",
    choices: ["1개", "4개", "7개", "2개"],
    answer: 0,
    explanation:
      "판매 한도는 22개라 날짜별 남은 수는 4, 1, 7이다. 세 밤에 모두 묵어야 하니 가장 빠듯한 25일의 1개가 답이고, 2개를 더하면 25일 줄이 23이 되어 제약에 걸린다.",
    anchor: "3박-예약은-세-밤을-모두-본다",
  },
  {
    id: "sd-hotel-inventory-scaling-4",
    post: "sd-hotel-inventory-scaling",
    question:
      "만료 작업이 예약을 expired로 바꾼 직후 그 예약의 결제 성공이 늦게 도착했다. 결제 처리에서 'AND status = 'pending'' 조건을 넣는 이유는?",
    choices: [
      "인덱스를 타게 하려고",
      "결제 회사가 그 조건을 요구해서",
      "만료된 예약을 자동으로 환불하려고",
      "만료와 결제 중 먼저 온 쪽만 이기게 해서, 이미 풀린 방의 예약이 되살아나지 않게 하려고",
    ],
    answer: 3,
    explanation:
      "조건이 있으면 늦은 결제는 UPDATE 0을 받고, 방을 다시 잡거나 환불하는 흐름으로 넘어간다. 조건 없이 paid로 덮어쓰면 그 사이 다른 손님이 산 방에 예약이 되살아나 이중 예약이 다른 경로로 생긴다.",
    anchor: "방을-잡아-두고-결제를-기다린다",
  },
  {
    id: "sd-hotel-inventory-scaling-5",
    post: "sd-hotel-inventory-scaling",
    question: "예약 기록과 재고를 같은 서비스, 같은 DB에 두는 설계의 근거로 가장 알맞은 것은?",
    choices: [
      "둘은 늘 함께 바뀌어서, 나누면 트랜잭션 하나로 끝나던 일을 사가나 2PC로 맞춰야 하기 때문에",
      "마이크로서비스는 DB를 공유해야 하기 때문에",
      "재고 테이블이 너무 작아 따로 둘 가치가 없어서",
      "결제 서비스도 같은 DB에 넣기 위해서",
    ],
    answer: 0,
    explanation:
      "함께 바뀌는 데이터를 나누면 한쪽만 반영된 상태와 보상 실패 같은 새 장애가 생긴다. 결제처럼 원래 바깥에 있는 단계만 사가로 엮고, 예약과 재고는 한 트랜잭션으로 묶는 편이 실용적이다.",
    anchor: "서비스를-나누면-트랜잭션이-끊긴다",
  },
  {
    id: "sd-hotel-inventory-scaling-6",
    post: "sd-hotel-inventory-scaling",
    question: "캐시에는 남은 방 1개로 보였는데 손님의 예약이 '매진'으로 거절됐다. 이 설계에서 어떻게 보아야 하나?",
    choices: [
      "캐시가 틀렸으니 캐시 값으로 예약을 허락하도록 고친다",
      "캐시를 없애고 모든 화면이 DB를 읽게 한다",
      "변경이 캐시에 반영되기 전의 짧은 지연이고, 판정은 DB가 하니 이중 예약은 생기지 않는다",
      "CDC를 끄고 예약 서비스가 캐시를 먼저 고치게 한다",
    ],
    answer: 2,
    explanation:
      "실험에서 커밋 뒤 약 190ms 동안 캐시가 옛 값을 보여 줬고, 그때 온 예약은 DB 제약이 막았다. 캐시는 보여 주는 용도로만 쓰고, 동기화 지연을 지표로 지켜보며 TTL로 틀린 값이 오래 남지 않게 한다.",
    anchor: "남은-방-수를-캐시에-올린다",
  },
];
