import type { QuizQuestion } from "../types";

export const LINUX_NETWORK_TUNING: QuizQuestion[] = [
  {
    id: "linux-network-tuning-1",
    post: "linux-network-tuning",
    question: "앱은 `listen(4096)`을 부르는데 `ss -lnt`의 LISTEN 줄 Send-Q가 128이다. 무엇 때문인가?",
    choices: [
      "accept 큐 길이는 backlog와 net.core.somaxconn 중 작은 값이라서",
      "tcp_max_syn_backlog가 128이라서",
      "Send-Q는 보낸 바이트 수라서 큐 길이와 상관없다",
      "앱이 아직 accept()를 한 번도 부르지 않아서",
    ],
    answer: 0,
    explanation:
      "커널은 listen()의 backlog를 somaxconn으로 깎는다. 실습에서 서버 네임스페이스의 somaxconn을 128로 두자 4096을 요청한 앱도 128이 됐다. LISTEN 줄에서는 Send-Q가 최대 길이, Recv-Q가 지금 선 연결 수다.",
    anchor: "연결이-1초씩-늦게-붙는다",
  },
  {
    id: "linux-network-tuning-2",
    post: "linux-network-tuning",
    question: "accept 큐가 넘치는 서버에 붙는 클라이언트는 주로 어떤 증상을 겪나?",
    choices: [
      "즉시 Connection refused를 받는다",
      "TLS 핸드셰이크 오류가 난다",
      "버려진 SYN을 1초 뒤 다시 보내서 정확히 1초쯤 늦게 붙는다",
      "연결은 되지만 응답 순서가 뒤바뀐다",
    ],
    answer: 2,
    explanation:
      "리눅스는 기본적으로 큐가 찬 동안 온 SYN을 RST 없이 버리고, 클라이언트는 첫 재전송 타이머인 1초 뒤에 다시 보낸다. 실습에서 연결 2000개 중 1854개가 1초 넘게 걸렸고 ListenOverflows가 올랐다.",
    anchor: "연결이-1초씩-늦게-붙는다",
  },
  {
    id: "linux-network-tuning-3",
    post: "linux-network-tuning",
    question: "기본 포트 범위로 같은 목적지에 짧은 연결을 계속 열었더니 오류는 없는데 2초 뒤 처리량이 8분의 1로 떨어지고 sys CPU가 올랐다. 이유는?",
    choices: [
      "서버의 accept 큐가 넘쳐서",
      "conntrack 표가 꽉 차서",
      "TCP 혼잡 제어가 창을 줄여서",
      "connect()가 먼저 쓰는 짝수 포트가 TIME_WAIT로 다 차서, 남은 포트를 찾아 범위를 훑느라",
    ],
    answer: 3,
    explanation:
      "connect()는 짝수 포트를 먼저 고르고, 짝수 14116개가 TIME_WAIT로 묶이면 빈 포트를 찾는 탐색이 길어진다. 실습에서 2초 중 1.88초가 커널 시간이었다. 포트 고갈은 EADDRNOTAVAIL보다 처리량 저하로 먼저 온다.",
    anchor: "포트가-반쯤-차면-connect가-느려진다",
  },
  {
    id: "linux-network-tuning-4",
    post: "linux-network-tuning",
    question: "다른 호스트로 나가는 연결에서 `tcp_tw_reuse`의 기본값 2는 어떻게 동작하나?",
    choices: [
      "TIME_WAIT 포트를 언제든 재사용한다",
      "루프백 연결에만 재사용을 허락하므로, 다른 호스트로 가는 연결에는 0과 같다",
      "서버 쪽 TIME_WAIT만 재사용한다",
      "TIME_WAIT 시간을 절반으로 줄인다",
    ],
    answer: 1,
    explanation:
      "2는 루프백에서만 재사용한다는 뜻이다. 실습에서 네임스페이스 사이의 veth 연결은 포트 1000개로 3초에 1000개만 성공했고, 1로 바꾸자 마지막 타임스탬프가 1초 지난 포트를 다시 써서 3000개가 됐다.",
    anchor: "tcp_tw_reuse가-허락하는-것",
  },
  {
    id: "linux-network-tuning-5",
    post: "linux-network-tuning",
    question: "서버가 fd 한도에 닿아 `accept4() failed (24: Too many open files)`를 낼 때, 클라이언트 쪽에서는 무엇이 보이나?",
    choices: [
      "연결은 금방 맺어지지만 요청에 응답이 오지 않다가 타임아웃이 난다",
      "SYN이 버려져 1초씩 늦게 붙는다",
      "즉시 RST를 받는다",
      "EADDRNOTAVAIL이 난다",
    ],
    answer: 0,
    explanation:
      "핸드셰이크는 커널이 끝내서 클라이언트는 연결됐다고 본다. 앱이 accept()로 꺼내지 못한 연결은 accept 큐에 선 채 남고, 실습에서는 Recv-Q 149개가 그렇게 멈춰 있었다. 클라이언트는 타임아웃까지 아무 오류도 보지 못한다.",
    anchor: "too-many-open-files",
  },
  {
    id: "linux-network-tuning-6",
    post: "linux-network-tuning",
    question: "conntrack 표가 넘칠 것 같아 `nf_conntrack_tcp_timeout_time_wait`를 120에서 30으로 줄였다. 31초 뒤 카운터가 그대로인 이유는?",
    choices: [
      "이 값은 재부팅해야 적용된다",
      "TIME_WAIT 줄에는 수명이 적용되지 않는다",
      "이미 들어간 줄은 들어갈 때의 타이머를 유지하고, 바뀐 값은 새 줄부터 적용되기 때문이다",
      "nf_conntrack_max도 함께 바꿔야 적용된다",
    ],
    answer: 2,
    explanation:
      "기존 항목은 처음 받은 수명대로 남고 새 값은 새로 들어오는 줄부터 쓰인다. 게다가 만료된 줄은 정리 작업이 돌 때 지워져서 카운터가 조금 늦게 내려간다. 장애 중에 바꿨다면 옛 수명만큼은 기다려야 효과가 보인다.",
    anchor: "conntrack-표는-연결보다-오래-남는다",
  },
  {
    id: "linux-network-tuning-7",
    post: "linux-network-tuning",
    question: "노드에서 `net.core.somaxconn`을 올렸는데 Pod 안에서 보면 기본값이다. 왜인가?",
    choices: [
      "Pod는 노드의 sysctl을 매번 캐시하기 때문이다",
      "somaxconn은 네트워크 네임스페이스마다 따로 있고, Pod에는 네트워크 네임스페이스가 따로 있기 때문이다",
      "kubelet이 Pod가 뜰 때 모든 sysctl을 초기화하기 때문이다",
      "somaxconn은 재부팅해야 적용되기 때문이다",
    ],
    answer: 1,
    explanation:
      "somaxconn, ip_local_port_range, tcp_tw_reuse는 네임스페이스 단위라 Pod 안은 기본값으로 시작한다. 쿠버네티스에서는 securityContext.sysctls로 넣는다. 반대로 nf_conntrack_max는 네임스페이스 안에서 읽기 전용이라 노드에서 바꾼다.",
    anchor: "실험대-네임스페이스-두-개와-작은-c-프로그램",
  },
];
