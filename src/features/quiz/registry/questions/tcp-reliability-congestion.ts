import type { QuizQuestion } from "../types";

export const TCP_RELIABILITY_CONGESTION: QuizQuestion[] = [
  {
    id: "tcp-reliability-congestion-1",
    post: "tcp-reliability-congestion",
    question: "보내는 쪽의 Send-Q는 계속 크고, 받는 쪽 소켓의 Recv-Q도 크게 쌓여 있다. 캡처에는 win 0이 보인다. 병목은 어디인가?",
    choices: [
      "중간 경로에서 패킷이 버려지고 있다",
      "보내는 쪽 혼잡 제어 알고리즘이 느리다",
      "받는 쪽 앱이 read()로 데이터를 꺼내 가지 못하고 있다",
      "TCP 핸드셰이크가 아직 끝나지 않았다",
    ],
    answer: 2,
    explanation:
      "받는 쪽 Recv-Q가 쌓이고 win 0을 알린다는 건 데이터는 도착했는데 앱이 읽지 않아 수신 버퍼가 찼다는 뜻이다. 경로 손실이라면 상대 Recv-Q는 비어 있고 재전송이 늘어난다.",
    anchor: "받는-쪽이-넘치지-않게-하는-흐름-제어",
  },
  {
    id: "tcp-reliability-congestion-2",
    post: "tcp-reliability-congestion",
    question: "같은 서버, 같은 1Gbps 회선인데 RTT 100ms인 먼 리전으로는 수 Mbps밖에 안 나온다. 가장 먼저 확인할 것은?",
    choices: [
      "수신 윈도와 버퍼가 대역폭 지연 곱만큼 커질 수 있는지(윈도 배율, tcp_rmem)",
      "DNS TTL이 너무 짧은지",
      "서버의 TIME_WAIT 개수",
      "HTTP 응답의 Content-Type",
    ],
    answer: 0,
    explanation:
      "한 연결의 속도는 대략 윈도 ÷ RTT라서 1Gbps, 100ms면 12.5MB가 날아다닐 수 있어야 한다. 윈도 배율이 막혀 64KB에 묶이면 약 5Mbps가 상한이다. ss -ti의 rwnd_limited로 확인할 수 있다.",
    anchor: "멀리-갈수록-느린-이유는-대역폭과-지연의-곱이다",
  },
  {
    id: "tcp-reliability-congestion-3",
    post: "tcp-reliability-congestion",
    question: "응답의 맨 마지막 세그먼트가 사라졌다. 빠른 재전송(중복 ACK 3번)으로 바로 복구되지 않는 이유는?",
    choices: [
      "SACK는 마지막 세그먼트에 쓸 수 없어서",
      "뒤따르는 세그먼트가 없어 중복 ACK가 만들어지지 않아서",
      "마지막 세그먼트는 혼잡 윈도에 포함되지 않아서",
      "FIN이 먼저 나가서 연결이 닫혀서",
    ],
    answer: 1,
    explanation:
      "중복 ACK는 빠진 조각 뒤의 조각이 도착할 때마다 생긴다. 마지막 조각이 사라지면 뒤에 올 조각이 없으니 신호가 없고, 꼬리 손실 탐침(TLP)이나 최소 200ms인 RTO를 기다려야 한다.",
    anchor: "같은-ack가-세-번-오면-기다리지-않는다",
  },
  {
    id: "tcp-reliability-congestion-4",
    post: "tcp-reliability-congestion",
    question: "직접 만든 소켓 프로토콜에서 요청을 헤더와 본문 두 번의 send()로 보냈더니 요청마다 약 40ms씩 늦다. 원인은?",
    choices: [
      "RTO의 최솟값이 40ms라서",
      "느린 시작 때문에 cwnd가 1이라서",
      "TIME_WAIT 때문에 포트를 기다려서",
      "Nagle 알고리즘과 받는 쪽의 지연 ACK가 서로를 기다려서",
    ],
    answer: 3,
    explanation:
      "Nagle은 첫 조각의 ACK가 오기 전까지 두 번째 작은 조각을 붙잡고, 받는 쪽은 응답할 거리가 없어 ACK를 최대 40ms 미룬다. 요청을 한 번에 모아 쓰거나 TCP_NODELAY를 켜면 사라진다.",
    anchor: "작은-패킷-두-개가-40ms를-만든다",
  },
  {
    id: "tcp-reliability-congestion-5",
    post: "tcp-reliability-congestion",
    question: "새로 맺은 TCP 연결(초기 cwnd 10, MSS 1460)로 100KB(102400바이트) 응답을 보낼 때, 손실이 없다면 최소 몇 번의 왕복이 드나?",
    choices: ["1번", "2번", "4번", "7번"],
    answer: 2,
    explanation:
      "느린 시작에서 cwnd는 10, 20, 40, 80으로 왕복마다 두 배가 된다. 누적으로 14600, 43800, 102200바이트라 세 번째까지는 102400바이트에 조금 모자라고 네 번째 왕복에 끝난다. 연결을 재사용하면 이미 커진 cwnd를 쓰니 이 비용이 줄어든다.",
    anchor: "길이-넘치지-않게-하는-혼잡-제어",
  },
  {
    id: "tcp-reliability-congestion-6",
    post: "tcp-reliability-congestion",
    question: "BBR이 CUBIC과 가장 크게 다른 점은?",
    choices: [
      "손실 대신 병목 대역폭과 최소 RTT를 재서 보낼 양과 속도를 정한다",
      "받는 쪽에서 동작하는 알고리즘이다",
      "느린 시작 없이 처음부터 최대 속도로 보낸다",
      "UDP에서만 쓸 수 있다",
    ],
    answer: 0,
    explanation:
      "CUBIC은 손실을 혼잡 신호로 보고 줄였다 늘리지만, BBR은 대역폭과 RTT 모델로 길 위에 둘 양을 정하고 일정한 속도로 흘려보낸다. 둘 다 보내는 쪽 알고리즘이라 서버에서 바꾸면 서버가 보내는 방향에만 적용된다.",
    anchor: "cubic과-bbr",
  },
];
