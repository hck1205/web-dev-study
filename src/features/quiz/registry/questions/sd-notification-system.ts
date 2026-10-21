import type { QuizQuestion } from "../types";

export const SD_NOTIFICATION_SYSTEM: QuizQuestion[] = [
  {
    id: "sd-notification-system-1",
    post: "sd-notification-system",
    question:
      "주문 API 안에서 푸시, 문자, 메일 업체를 차례로 부르게 했다. 문자 업체가 503을 돌려줄 때 생기는 가장 나쁜 일은?",
    choices: [
      "문자만 늦게 나가고 주문은 정상 처리된다",
      "주문이 실패했는데 이미 나간 푸시는 되돌릴 수 없다",
      "푸시와 메일이 자동으로 취소된다",
      "주문 API가 자동으로 큐를 만들어 문자를 미룬다",
    ],
    answer: 1,
    explanation:
      "업체 호출이 주문 처리 안에 있으니 문자 실패가 주문 실패가 된다. 그런데 앞서 보낸 푸시는 이미 나갔다. 고객이 다시 주문하면 푸시를 또 받는다. 그래서 주문 API는 알림을 맡기기만 하고, 실제 발송은 큐 뒤의 워커가 한다.",
    anchor: "주문-api-안에서-바로-보내-보기",
  },
  {
    id: "sd-notification-system-2",
    post: "sd-notification-system",
    question: "우리 서버가 아이폰에 푸시를 보낼 때 반드시 APNs를 거치는 이유는?",
    choices: [
      "앱마다 서버와 연결을 열어 두면 배터리가 버티지 못해, 운영체제가 APNs와의 연결 하나로 모든 앱의 알림을 받기 때문에",
      "애플이 알림 본문을 검열해야 해서",
      "HTTP/2는 APNs만 지원해서",
      "디바이스 토큰을 암호화할 수 있는 곳이 APNs뿐이라서",
    ],
    answer: 0,
    explanation:
      "휴대폰은 앱마다 연결을 유지하지 않고 운영체제가 자기 회사 서버 하나와만 연결을 둔다. 그래서 우리 서버는 디바이스 토큰을 주소로 써서 APNs에 보내고 APNs가 기기에 전달한다. 안드로이드의 FCM도 같은 역할이다.",
    anchor: "알림-한-통이-거치는-바깥-업체",
  },
  {
    id: "sd-notification-system-3",
    post: "sd-notification-system",
    question:
      "devices 테이블의 token 열에 UNIQUE 제약이 없다. 사용자 A가 쓰던 폰을 사용자 B가 받아 로그인하면 무슨 일이 생길 수 있나?",
    choices: [
      "B가 알림을 하나도 못 받는다",
      "APNs가 토큰을 자동으로 B에게 옮겨 준다",
      "같은 토큰이 A와 B 모두에 걸려 A의 알림이 B의 폰에 뜬다",
      "토큰이 두 줄이면 업체가 보내기를 거절해 문제가 없다",
    ],
    answer: 2,
    explanation:
      "앱은 켜질 때마다 토큰을 올리니 같은 토큰이 B의 번호로 또 들어온다. 유니크 제약과 ON CONFLICT로 주인을 바꾸지 않으면 A 앞으로 된 줄이 남아 A의 주문 알림이 B의 폰에 뜬다. 로그아웃할 때 토큰을 지우는 것도 같은 이유다.",
    anchor: "연락처를-어디에-두나",
  },
  {
    id: "sd-notification-system-4",
    post: "sd-notification-system",
    question: "문자 업체 장애 중에도 푸시와 메일이 정상적으로 나가게 만든 설계는?",
    choices: [
      "알림 서버를 여러 대로 늘린 것",
      "연락처를 캐시에 둔 것",
      "채널마다 큐와 워커를 따로 둔 것",
      "APNs와 HTTP/2 연결을 재사용한 것",
    ],
    answer: 2,
    explanation:
      "큐 하나에 모든 채널을 넣으면 문자 작업이 앞을 막는 동안 뒤의 푸시도 못 나간다. 채널별로 큐와 워커를 나누면 장애가 그 채널의 큐에만 쌓이고, 업체가 돌아오면 쌓인 작업이 빠진다. 실험에서도 문자 3건만 남고 푸시 6건과 메일 3건은 1초 안에 나갔다.",
    anchor: "큐로-떼어-내고-채널마다-나눈다",
  },
  {
    id: "sd-notification-system-5",
    post: "sd-notification-system",
    question: "1천만 명 쿠폰 발송 직후 보낸 인증 번호가 몇 분 늦게 도착했다. 가장 알맞은 고치기는?",
    choices: [
      "인증 번호 같은 급한 알림과 마케팅 알림의 큐를 나눈다",
      "알림 서버를 두 배로 늘린다",
      "APNs 요청의 apns-collapse-id를 바꾼다",
      "쿠폰 알림 본문을 4KB 아래로 줄인다",
    ],
    answer: 0,
    explanation:
      "같은 큐에 있으면 인증 번호가 1천만 건 뒤에 줄을 선다. 급한 큐를 따로 두면 대량 발송과 상관없이 바로 나간다. 알림 서버를 늘려도 큐에 쌓이는 순서는 그대로라 해결되지 않는다.",
    anchor: "큐로-떼어-내고-채널마다-나눈다",
  },
  {
    id: "sd-notification-system-6",
    post: "sd-notification-system",
    question: "문자 업체 한도에 닿은 상태에서 워커를 두 배로 늘리면 어떻게 되나?",
    choices: [
      "발송 속도가 두 배가 된다",
      "업체가 한도를 자동으로 올려 준다",
      "큐가 비워져 지연이 사라진다",
      "더 빨라지지 않고 429 응답만 늘어난다",
    ],
    answer: 3,
    explanation:
      "워커가 늘어도 업체가 받아 주는 속도는 그대로다. 한도에 닿은 뒤에는 거절만 늘어나니, 큐에 쌓이는 걸 받아들이고 급한 알림이 먼저 나가게 큐를 나누는 쪽이 맞다.",
    anchor: "워커는-업체와-씨름한다",
  },
];
