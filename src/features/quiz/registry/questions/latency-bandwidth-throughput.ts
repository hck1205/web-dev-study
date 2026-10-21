import type { QuizQuestion } from "../types";

export const LATENCY_BANDWIDTH_THROUGHPUT: QuizQuestion[] = [
  {
    id: "latency-bandwidth-throughput-1",
    post: "latency-bandwidth-throughput",
    question: "왕복 100ms 서버에서 10KB 응답을 받는 데 0.2초가 걸린다. 회선을 10Mbps에서 100Mbps로 올리면?",
    choices: [
      "약 0.02초로 열 배 빨라진다",
      "약 0.1초로 절반이 된다",
      "거의 그대로다. 시간 대부분이 왕복이기 때문이다",
      "오히려 느려진다",
    ],
    answer: 2,
    explanation:
      "작은 응답은 TCP 연결 왕복 한 번과 요청·응답 왕복 한 번이 시간의 거의 전부다. 실험에서도 대역폭을 열 배 올렸지만 203ms가 204ms였다. 대역폭은 데이터를 싣는 시간만 줄인다.",
    anchor: "작은-파일은-왕복-횟수가-큰-파일은-대역폭이-정한다",
  },
  {
    id: "latency-bandwidth-throughput-2",
    post: "latency-bandwidth-throughput",
    question: "대역폭을 늘려도 줄어들지 않는 지연은?",
    choices: ["직렬화 지연", "전파 지연", "큰 파일의 전송 시간", "패킷을 선로에 싣는 시간"],
    answer: 1,
    explanation:
      "전파 지연은 신호가 거리를 달리는 시간이라 광섬유에서 1km에 약 5µs로 정해져 있다. 줄이려면 서버를 사용자 가까이 두는 수밖에 없다. 직렬화 지연은 패킷 크기를 대역폭으로 나눈 값이라 대역폭을 늘리면 줄어든다.",
    anchor: "지연은-네-조각으로-나뉜다",
  },
  {
    id: "latency-bandwidth-throughput-3",
    post: "latency-bandwidth-throughput",
    question: "소켓 버퍼를 64KB로 묶은 연결이 RTT 0.3ms에서는 95Mbps, RTT 100ms에서는 5.6Mbps가 나왔다. 이유는?",
    choices: [
      "멀리 있는 서버의 CPU가 느려서",
      "한 연결의 처리량은 창 크기 ÷ RTT를 넘을 수 없어서",
      "먼 길일수록 대역폭이 줄어들어서",
      "패킷이 멀리 갈수록 커져서",
    ],
    answer: 1,
    explanation:
      "확인을 받지 못한 데이터는 창 크기만큼만 띄워 둘 수 있으니 왕복마다 64KB가 최대다. 64KB ÷ 0.1초는 약 5.2Mbps로 실측과 맞는다. 가까운 곳에서는 같은 창으로도 길을 다 채운다.",
    anchor: "창이-작으면-넓은-길도-좁게-쓴다",
  },
  {
    id: "latency-bandwidth-throughput-4",
    post: "latency-bandwidth-throughput",
    question: "손실 1%를 건 길에서 p50은 104ms로 그대로인데 p99가 1.2초가 됐다. 가장 큰 원인은?",
    choices: [
      "서버의 GC 멈춤",
      "DNS 캐시 만료",
      "사라진 SYN을 다시 보내기 전에 1초를 기다리는 재전송 타임아웃",
      "대역폭 부족",
    ],
    answer: 2,
    explanation:
      "연결을 여는 SYN이 사라지면 리눅스는 첫 재전송 타임아웃 1초를 기다린다. 대부분의 요청은 손실을 겪지 않아 p50은 그대로지만, 백 번에 한 번꼴인 요청이 1초 넘게 걸려 꼬리를 만든다. 평균만 보면 이 꼬리가 묻힌다.",
    anchor: "평균은-꼬리를-숨긴다",
  },
  {
    id: "latency-bandwidth-throughput-5",
    post: "latency-bandwidth-throughput",
    question: "커넥션 풀이 20개이고 쿼리가 커넥션을 50ms씩 잡던 서비스에서, DB가 멀어져 200ms씩 잡게 됐다. 이 풀의 최대 처리량은?",
    choices: ["초당 400개 그대로", "초당 200개", "초당 100개", "초당 4000개"],
    answer: 2,
    explanation:
      "리틀의 법칙으로 동시에 머무는 수 = 처리량 × 머무는 시간이니, 20 ÷ 0.2초 = 초당 100개가 상한이다. 대역폭은 그대로여도 지연이 네 배가 되면 처리량 상한이 4분의 1이 된다.",
    anchor: "지연이-늘면-처리량도-줄어든다",
  },
  {
    id: "latency-bandwidth-throughput-6",
    post: "latency-bandwidth-throughput",
    question: "curl -w 결과에서 connect가 0.10초, pretransfer가 0.10초, starttransfer가 0.90초, total이 0.91초였다. 가장 먼저 볼 곳은?",
    choices: ["DNS", "네트워크 왕복 시간", "서버의 처리 시간", "응답 크기와 대역폭"],
    answer: 2,
    explanation:
      "starttransfer에서 pretransfer를 빼면 요청을 보낸 뒤 첫 바이트를 받기까지 0.8초다. 왕복 하나가 0.1초이니 나머지 약 0.7초는 서버가 처리하는 데 썼다. total과 starttransfer 차이가 작아서 크기나 대역폭 문제는 아니다.",
    anchor: "느리다를-숫자-셋으로-쪼개기",
  },
];
