import type { QuizQuestion } from "../types";

export const HTTP_VERSIONS: QuizQuestion[] = [
  {
    id: "http-versions-1",
    post: "http-versions",
    question: "HTTP/1.1 파이프라이닝에서 첫 번째 응답이 느리면 뒤의 응답도 기다려야 하는 이유는?",
    choices: [
      "TCP가 한 번에 패킷 하나만 보낼 수 있어서",
      "응답에 어떤 요청에 대한 답인지 표시가 없어 요청 순서대로 보내야 해서",
      "서버가 요청을 하나씩만 처리할 수 있어서",
      "브라우저가 응답을 하나씩만 파싱할 수 있어서",
    ],
    answer: 1,
    explanation:
      "HTTP/1.1 응답에는 요청 번호가 없어서 클라이언트는 순서로만 짝을 맞춘다. 그래서 서버는 준비가 끝난 응답이 있어도 앞의 응답이 나갈 때까지 보내지 못한다. HTTP/2는 프레임에 스트림 ID를 붙여 이 문제를 풀었다.",
    anchor: "연결을-재사용하는-http11",
  },
  {
    id: "http-versions-2",
    post: "http-versions",
    question: "HTTP/2에서 여러 응답을 한 TCP 연결에 섞어 보내도 받는 쪽이 다시 모을 수 있는 이유는?",
    choices: [
      "프레임마다 스트림 ID가 붙어 있어서",
      "응답을 항상 요청 순서대로 보내서",
      "HPACK이 응답 순서를 기록해서",
      "응답마다 TCP 포트를 다르게 써서",
    ],
    answer: 0,
    explanation:
      "HTTP/2는 메시지를 HEADERS, DATA 같은 프레임으로 쪼개고 9바이트 프레임 머리에 스트림 ID를 넣는다. 받는 쪽은 ID별로 조각을 모으니 순서가 섞여도 된다. HPACK은 헤더 압축을 맡을 뿐 순서와는 상관없다.",
    anchor: "텍스트를-프레임으로-쪼갠-http2",
  },
  {
    id: "http-versions-3",
    post: "http-versions",
    question: "브라우저들이 HTTP/2 서버 푸시를 빼고 103 Early Hints로 옮겨 간 가장 큰 이유는?",
    choices: [
      "서버 푸시는 TLS 없이만 동작해서",
      "서버 푸시가 HPACK과 호환되지 않아서",
      "서버는 브라우저 캐시를 몰라 이미 있는 자원을 다시 보내는 낭비가 잦아서",
      "서버 푸시는 스트림을 하나만 쓸 수 있어서",
    ],
    answer: 2,
    explanation:
      "푸시는 서버가 판단해서 밀어 넣는데, 서버는 브라우저 캐시에 무엇이 있는지 모른다. 그래서 캐시에 있는 자원을 매번 다시 보내는 일이 많았다. Early Hints는 힌트만 주고 가져올지는 캐시를 아는 브라우저가 정한다.",
    anchor: "텍스트를-프레임으로-쪼갠-http2",
  },
  {
    id: "http-versions-4",
    post: "http-versions",
    question: "패킷 손실이 잦은 네트워크에서 HTTP/2가 HTTP/1.1보다 느려질 수 있는 이유는?",
    choices: [
      "HTTP/2의 이진 프레임이 텍스트보다 커서",
      "HTTP/2는 연결 하나를 써서 패킷 하나가 빠지면 모든 스트림이 재전송을 기다리기 때문에",
      "HTTP/2는 손실된 패킷을 재전송하지 않아서",
      "HTTP/1.1은 UDP를 써서 손실에 강해서",
    ],
    answer: 1,
    explanation:
      "TCP는 바이트 순서를 지켜야 해서 빠진 패킷이 다시 올 때까지 뒤의 데이터를 붙잡아 둔다. 연결이 하나면 상관없는 스트림까지 모두 멈추고 혼잡 제어도 전체가 줄어든다. HTTP/1.1은 연결 6개 중 하나만 멈춘다.",
    anchor: "tcp-아래에서-다시-막히는-줄",
  },
  {
    id: "http-versions-5",
    post: "http-versions",
    question: "HTTP/3가 TCP를 개선하지 않고 UDP 위에 QUIC을 새로 만든 이유로 맞는 것은?",
    choices: [
      "UDP가 TCP보다 패킷 손실이 적어서",
      "TCP는 커널과 중간 장비에 묶여 있어 새 기능을 퍼뜨리기 어려워서",
      "UDP는 암호화가 기본으로 들어 있어서",
      "TCP로는 TLS 1.3을 쓸 수 없어서",
    ],
    answer: 1,
    explanation:
      "TCP를 바꾸려면 모든 OS가 업데이트돼야 하고, 방화벽과 NAT 같은 중간 장비가 모르는 TCP 옵션을 막기도 한다. UDP 위에 만들면 중간 장비를 그대로 지나가고 브라우저와 서버 프로그램만 업데이트하면 된다. 손실이나 암호화는 UDP가 해 주는 게 아니라 QUIC이 직접 한다.",
    anchor: "tcp-아래에서-다시-막히는-줄",
  },
  {
    id: "http-versions-6",
    post: "http-versions",
    question: "QUIC 0-RTT로 받은 요청을 서버가 GET 같은 안전한 요청에만 허용하는 이유는?",
    choices: [
      "0-RTT 데이터는 암호화되지 않아서",
      "0-RTT 패킷은 크기가 작아 본문을 실을 수 없어서",
      "공격자가 같은 0-RTT 패킷을 다시 보내는 재전송 공격을 막지 못해서",
      "0-RTT는 연결 ID를 쓰지 않아서",
    ],
    answer: 2,
    explanation:
      "0-RTT 데이터도 암호화되지만, 엿들은 패킷을 그대로 다시 보내면 서버가 같은 요청으로 받아들일 수 있다. 그래서 여러 번 처리돼도 괜찮은 요청에만 쓰고, 뒤쪽 서버는 Early-Data 헤더를 보고 필요하면 425 Too Early로 거절한다.",
    anchor: "udp-위에-새로-만든-quic",
  },
  {
    id: "http-versions-7",
    post: "http-versions",
    question: "서버에 HTTP/3를 켜고 Alt-Svc도 보내는데, 개발자 도구에는 계속 h2만 보인다. 가장 의심할 만한 원인은?",
    choices: [
      "방화벽에서 UDP 443이 막혀 브라우저가 QUIC에 실패하고 TCP로 돌아간 것",
      "HTTP/2가 켜져 있으면 HTTP/3를 쓸 수 없어서",
      "Alt-Svc는 첫 요청에서만 적용되어서",
      "TLS 1.3 인증서가 따로 필요해서",
    ],
    answer: 0,
    explanation:
      "HTTP/3는 UDP로 연결하니 TCP만 열려 있으면 QUIC 연결이 실패한다. 브라우저는 조용히 TCP의 HTTP/2로 진행하고 한동안 QUIC을 시도하지 않아서 겉으로는 문제가 없어 보인다. HTTP/3는 항상 HTTP/2와 함께 열어 둔다.",
    anchor: "개발자가-바꿀-것",
  },
  {
    id: "http-versions-8",
    post: "http-versions",
    question: "nginx로 프록시하는 서버에서 요청마다 앱 포트의 TIME-WAIT 소켓이 하나씩 늘어난다. 가장 그럴듯한 원인은?",
    choices: [
      "브라우저와 nginx 사이가 HTTP/2라서",
      "ALPN에서 h2가 합의되지 않아서",
      "UDP 443이 막혀 HTTP/3로 가지 못해서",
      "proxy_pass가 기본으로 HTTP/1.0과 Connection: close로 업스트림에 보내서",
    ],
    answer: 3,
    explanation:
      "nginx는 proxy_http_version 기본값이 1.0이고 Connection: close를 붙여서 요청마다 업스트림 연결을 새로 맺고 끊는다. proxy_http_version 1.1, Connection 헤더 비우기, upstream keepalive를 함께 설정하면 연결을 재사용한다. 브라우저 쪽 버전은 뒤쪽 구간과 상관이 없다.",
    anchor: "설정한-버전과-실제로-쓰는-버전이-다를-때",
  },
];
