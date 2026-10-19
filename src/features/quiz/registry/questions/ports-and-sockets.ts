import type { QuizQuestion } from "../types";

export const PORTS_AND_SOCKETS: QuizQuestion[] = [
  {
    id: "ports-and-sockets-1",
    post: "ports-and-sockets",
    question: "서버 안에서 curl localhost:5000은 되는데 다른 컴퓨터에서 접속하면 바로 Connection refused가 난다. ss -tlnp에서 무엇을 확인하나?",
    choices: [
      "Local Address가 127.0.0.1:5000인지 0.0.0.0:5000인지",
      "Recv-Q가 0인지",
      "TIME-WAIT 개수",
      "프로세스의 pid가 1000보다 큰지",
    ],
    answer: 0,
    explanation:
      "127.0.0.1에서 듣는 소켓은 루프백으로 온 연결만 받는다. 바깥 인터페이스 주소로 온 SYN에는 맞는 소켓이 없어 커널이 RST로 거절하니 refused가 바로 난다. 방화벽이었다면 보통 타임아웃이 난다.",
    anchor: "어느-주소에서-들을-것인가",
  },
  {
    id: "ports-and-sockets-2",
    post: "ports-and-sockets",
    question: "서버가 443 포트 하나로 수만 개의 동시 연결을 받을 수 있는 이유는?",
    choices: [
      "연결마다 커널이 서버 쪽 포트를 새로 하나씩 배정해서",
      "443 포트는 특별히 포트 수 제한이 없어서",
      "연결은 프로토콜과 양쪽 IP·포트 다섯 값으로 구분되고, 클라이언트마다 출발지 값이 달라서",
      "TCP가 하나의 연결로 여러 클라이언트를 묶어서",
    ],
    answer: 2,
    explanation:
      "accept()로 생긴 연결 소켓들은 모두 같은 로컬 포트 443을 쓰고, 상대 IP와 포트로 구분된다. 그래서 서버의 한도는 포트 수가 아니라 메모리와 fd 한도다.",
    anchor: "연결-하나를-가르는-다섯-값",
  },
  {
    id: "ports-and-sockets-3",
    post: "ports-and-sockets",
    question: "nginx 에러 로그에 '(99: Cannot assign requested address) while connecting to upstream'이 찍히며 502가 난다. 가장 먼저 할 일은?",
    choices: [
      "nginx의 worker_processes를 늘린다",
      "upstream keepalive와 proxy_http_version 1.1로 뒤쪽 연결을 재사용하게 한다",
      "net.core.somaxconn을 올린다",
      "SO_REUSEADDR를 켠다",
    ],
    answer: 1,
    explanation:
      "같은 뒤쪽 서버로 요청마다 새 연결을 열고 끊으면 TIME-WAIT가 임시 포트를 60초씩 쥐어 바닥난다. 연결을 재사용하는 게 근본 해결이고, 포트 범위 확대나 tcp_tw_reuse는 그다음이다. somaxconn은 듣는 쪽 큐라 상관없다.",
    anchor: "임시-포트가-바닥나는-순간",
  },
  {
    id: "ports-and-sockets-4",
    post: "ports-and-sockets",
    question: "서버를 끄자마자 다시 띄우니 듣는 프로세스가 없는데도 Address already in use가 난다. 원인과 해결은?",
    choices: [
      "포트에 TIME-WAIT 연결이 남아 있어서, bind 전에 SO_REUSEADDR를 켠다",
      "커널이 포트를 1분간 예약해서, 다른 포트를 쓴다",
      "CLOSE-WAIT 때문에, fd 한도를 올린다",
      "IPv6 소켓이 남아 있어서, IPv6를 끈다",
    ],
    answer: 0,
    explanation:
      "서버가 먼저 끊은 연결은 서버 포트에 TIME-WAIT를 남기고, 리눅스는 기본적으로 그 포트의 bind()를 막는다. SO_REUSEADDR를 켜면 TIME-WAIT가 있어도 다시 들을 수 있고, 이미 LISTEN 중인 포트를 빼앗지는 않는다.",
    anchor: "방금-끈-서버가-다시-안-뜰-때",
  },
  {
    id: "ports-and-sockets-5",
    post: "ports-and-sockets",
    question: "Docker 컨테이너 안의 앱이 127.0.0.1:3000에서 듣고, 컨테이너는 -p 3000:3000으로 떴다. 호스트에서 curl localhost:3000을 치면?",
    choices: [
      "정상적으로 응답한다",
      "호스트의 127.0.0.1과 같은 것이라 바로 연결된다",
      "포트 매핑은 컨테이너의 eth0 주소로 넘기는데 거기서 듣는 소켓이 없어 reset이나 빈 응답이 난다",
      "TIME-WAIT 때문에 1분 뒤에 연결된다",
    ],
    answer: 2,
    explanation:
      "컨테이너 안의 127.0.0.1은 컨테이너 자신의 루프백이다. -p는 연결을 컨테이너의 eth0 주소로 넘기는데 앱이 그 주소에서 듣지 않으니 받을 소켓이 없다. 컨테이너 안의 앱은 0.0.0.0에서 들어야 한다.",
    anchor: "컨테이너-안의-127001",
  },
  {
    id: "ports-and-sockets-6",
    post: "ports-and-sockets",
    question: "SO_REUSEPORT를 켠 소켓 여러 개가 같은 포트에서 들을 때 일어나는 일은?",
    choices: [
      "마지막으로 bind한 소켓만 연결을 받는다",
      "커널이 들어오는 연결을 소켓들에 해시로 나눠 준다",
      "모든 소켓이 같은 연결을 복사해서 받는다",
      "TIME-WAIT가 사라진다",
    ],
    answer: 1,
    explanation:
      "SO_REUSEPORT는 같은 사용자의 소켓들이 한 포트를 나눠 듣게 하고 커널이 연결을 분산한다. 실험에서는 100개가 48대 52로 나뉘었다. nginx의 reuseport, UDP 수신 분산, 무중단 재시작에 쓴다.",
    anchor: "한-포트를-여러-프로세스가-나눠-듣기",
  },
];
