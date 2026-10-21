import type { QuizQuestion } from "../types";

export const SD_NOTIFICATION_RELIABILITY: QuizQuestion[] = [
  {
    id: "sd-notification-reliability-1",
    post: "sd-notification-reliability",
    question:
      "주문 상태를 커밋한 직후 서버가 죽어 알림을 큐에 넣지 못했다. 이 자리의 유실을 막는 방법으로 알맞은 것은?",
    choices: [
      "큐를 먼저 넣고 주문을 나중에 커밋한다",
      "주문 변경과 알림 로그 기록을 같은 DB 트랜잭션에 쓰고, 릴레이가 그 기록을 큐에 넣는다",
      "워커의 재시도 횟수를 늘린다",
      "알림 id를 무작위 UUID로 짓는다",
    ],
    answer: 1,
    explanation:
      "DB 쓰기와 큐 넣기는 한 번에 일어나지 않아 그 사이에서 끊길 수 있다. 같은 트랜잭션에 알림 기록을 남기면 커밋된 주문에는 반드시 기록이 있고, 릴레이가 pending 기록을 찾아 큐에 넣는다. 큐를 먼저 넣으면 주문이 롤백됐는데 알림이 나가는 반대 문제가 생긴다.",
    anchor: "알림이-사라지는-세-자리",
  },
  {
    id: "sd-notification-reliability-2",
    post: "sd-notification-reliability",
    question: "알림 id를 'order-1001-shipped'처럼 사건 기준으로 짓는 이유는?",
    choices: [
      "사람이 읽기 좋아서일 뿐 기능 차이는 없다",
      "UUID보다 짧아서 인덱스가 작아진다",
      "같은 사건으로 요청이 여러 번 와도 기본 키와 중복 검사가 같은 알림으로 알아본다",
      "업체가 이 id로 중복을 걸러 준다",
    ],
    answer: 2,
    explanation:
      "주문 서비스가 재시도해 같은 요청을 다시 보내도 id가 같으니 ON CONFLICT DO NOTHING이 막아 기록이 하나만 남는다. 요청마다 무작위 UUID를 만들면 재시도가 새 알림으로 보여 중복이 통과한다.",
    anchor: "알림이-사라지는-세-자리",
  },
  {
    id: "sd-notification-reliability-3",
    post: "sd-notification-reliability",
    question:
      "워커가 업체에 보냈는데 응답 전에 시간 제한이 끝나 재시도했고, 사용자는 알림을 두 번 받았다. Redis SET NX 중복 검사가 이걸 못 막은 이유는?",
    choices: [
      "Redis 키의 TTL이 너무 짧아서",
      "중복 검사는 같은 알림을 두 번 꺼내는 것을 막을 뿐, 한 번 꺼낸 알림을 업체에 다시 보내는 것은 막지 못해서",
      "SET NX는 동시에 온 요청을 둘 다 통과시켜서",
      "업체가 410을 돌려줘서",
    ],
    answer: 1,
    explanation:
      "이 경우 알림은 한 번만 꺼내졌고, 재시도는 같은 작업 안에서 일어났다. 업체는 첫 요청을 이미 전달했는데 우리는 결과를 모른다. 그래서 collapse id로 기기에서 하나만 보이게 하고 시간 제한을 넉넉히 잡아 빈도를 줄인다.",
    anchor: "다시-보내는-순간-겹친다",
  },
  {
    id: "sd-notification-reliability-4",
    post: "sd-notification-reliability",
    question: "업체가 410 Unregistered를 돌려줬다. 워커가 해야 할 일은?",
    choices: [
      "지수 백오프로 네 번까지 다시 보낸다",
      "Retry-After만큼 기다렸다 다시 보낸다",
      "곧바로 DLQ로 보내 사람이 다시 보내게 한다",
      "재시도하지 않고 그 토큰을 기기 목록에서 지운다",
    ],
    answer: 3,
    explanation:
      "410은 그 토큰이 더는 쓸모없다는 뜻이라 다시 보내도 같다. 토큰을 지우면 같은 토큰으로 가는 다음 알림은 업체를 부르지도 않는다. 실험에서도 n4가 토큰을 지운 뒤 n7은 건너뛰었다.",
    anchor: "워커가-실패를-가르는-법",
  },
  {
    id: "sd-notification-reliability-5",
    post: "sd-notification-reliability",
    question: "재시도 간격에 지터(무작위)를 섞는 이유는?",
    choices: [
      "같은 순간 실패한 알림들이 같은 순간 돌아와 막 살아난 업체를 다시 쓰러뜨리지 않게",
      "재시도 횟수를 줄이려고",
      "중복 검사를 대신하려고",
      "업체가 무작위 간격을 요구해서",
    ],
    answer: 0,
    explanation:
      "지터 없이 200ms, 400ms로 똑같이 기다리면 수만 개가 같은 박자로 몰린다. 상한 안에서 무작위로 흩으면 회복하는 업체에 부담이 고르게 간다. 다만 Retry-After가 있으면 그보다 일찍 보내지 않는다.",
    anchor: "워커가-실패를-가르는-법",
  },
  {
    id: "sd-notification-reliability-6",
    post: "sd-notification-reliability",
    question: "템플릿에 필요한 name 값이 빠진 요청이 왔다. 어디서 어떻게 처리하는 게 좋은가?",
    choices: [
      "워커가 빈 문자열로 채워 보낸다",
      "알림 서버가 요청을 받을 때 거절해 요청한 서비스가 바로 오류를 받게 한다",
      "그대로 보내고 사용자가 신고하면 고친다",
      "DLQ에 넣었다가 하루 뒤 다시 보낸다",
    ],
    answer: 1,
    explanation:
      "검사 없이 채우면 'undefined님' 같은 알림이 실제로 나간다. 요청을 받을 때 거절하면 원인을 아는 쪽이 바로 고칠 수 있고, 워커까지 가서 터지면 DLQ에 쌓이기만 한다.",
    anchor: "본문은-템플릿에서-만든다",
  },
  {
    id: "sd-notification-reliability-7",
    post: "sd-notification-reliability",
    question: "사용자별 마케팅 상한을 셀 때 중복 거르기를 먼저 해야 하는 이유는?",
    choices: [
      "중복 거르기가 더 빨라서",
      "상한은 인증 번호에도 적용되기 때문에",
      "같은 알림이 두 번 들어오면 상한 칸을 두 개 먹어 다른 알림이 막히기 때문에",
      "Redis에서 두 명령을 함께 쓸 수 없어서",
    ],
    answer: 2,
    explanation:
      "상한 2에 m1이 두 번 들어왔을 때 상한부터 세면 m1이 두 칸을 다 써서 m2가 막힌다. 중복을 먼저 거르면 m1은 한 칸만 쓴다. 인증 번호와 주문 알림은 상한에서 뺀다.",
    anchor: "한-사람에게-너무-많이-보내지-않기",
  },
];
