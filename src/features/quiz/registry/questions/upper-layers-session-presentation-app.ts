import type { QuizQuestion } from "../types";

export const UPPER_LAYERS_SESSION_PRESENTATION_APP: QuizQuestion[] = [
  {
    id: "upper-layers-session-presentation-app-1",
    post: "upper-layers-session-presentation-app",
    question: "curl https://127.0.0.1:8090/ 에서 'SSL routines::wrong version number'가 났다. 서버 앱 로그에는 요청이 없다. 무엇이 어긋났나?",
    choices: [
      "TCP 연결이 맺어지지 않았다",
      "서버 인증서가 만료됐다",
      "TLS로 말을 걸었는데 그 포트는 평문 HTTP로 답했다",
      "HTTP 응답의 Content-Type이 틀렸다",
    ],
    answer: 2,
    explanation:
      "평문 HTTP 서버가 ClientHello를 이상한 요청으로 보고 텍스트로 답하면, OpenSSL은 그 첫 바이트를 TLS 레코드 머리로 읽지 못해 이 에러를 낸다. TCP는 멀쩡하고 HTTP는 시작도 못한 TLS 층의 불일치다.",
    anchor: "같은-포트에서-다른-말을-할-때",
  },
  {
    id: "upper-layers-session-presentation-app-2",
    post: "upper-layers-session-presentation-app",
    question: "API 응답의 한글이 'í\\x95\\x9cê¸...'처럼 라틴 글자로 깨져 보인다. 가장 가능성 높은 원인은?",
    choices: [
      "UTF-8 바이트를 Latin-1로 읽었다",
      "gzip 압축이 풀리지 않았다",
      "TLS 암호가 약하다",
      "TCP 재전송 중 바이트 순서가 바뀌었다",
    ],
    answer: 0,
    explanation:
      "'한'의 UTF-8 바이트 ed 95 9c를 Latin-1로 읽으면 í와 제어 문자가 된다. 엉뚱한 한자가 섞이면 CP949로 읽은 경우다. TCP는 순서를 보장하니 바이트가 바뀌지는 않는다.",
    anchor: "표현-계층이-하던-일은-라이브러리가-한다",
  },
  {
    id: "upper-layers-session-presentation-app-3",
    post: "upper-layers-session-presentation-app",
    question: "TLS 1.3 연결의 첫 레코드 머리가 16 03 01로 시작한다. 03 01(TLS 1.0)이 적혀 있는 이유는?",
    choices: [
      "클라이언트가 TLS 1.0으로 내려서 접속했기 때문에",
      "옛 중간 장비가 모르는 버전 값을 보고 끊지 않게 하려는 호환용 값이라서",
      "서버가 TLS 1.0만 지원하기 때문에",
      "0x0301이 TLS 1.3의 공식 번호라서",
    ],
    answer: 1,
    explanation:
      "TLS 1.3은 레코드 버전에 옛 값을 그대로 적고 실제 버전은 ClientHello의 확장으로 협상한다. 중간 장비의 경직화를 피하려는 설계다. 첫 바이트 0x16은 핸드셰이크 레코드라는 뜻이다.",
    anchor: "tls는-몇-계층인가",
  },
  {
    id: "upper-layers-session-presentation-app-4",
    post: "upper-layers-session-presentation-app",
    question: "TLS를 풀지 않는 L4 로드 밸런서가 도메인별로 다른 뒤쪽 서버에 보낼 수 있는 이유는?",
    choices: [
      "HTTP Host 헤더는 암호화되지 않아서",
      "TCP 헤더에 도메인 이름이 들어 있어서",
      "DNS 응답을 가로채서",
      "ClientHello의 SNI가 평문이라 읽을 수 있어서",
    ],
    answer: 3,
    explanation:
      "Host 헤더는 TLS 안에 있어 암호화되지만, ClientHello의 SNI와 ALPN은 평문이다. 그래서 TLS passthrough 장비도 SNI로 대상을 고를 수 있다. 경로나 쿠키로 나누려면 TLS를 풀어야 한다.",
    anchor: "tls는-몇-계층인가",
  },
  {
    id: "upper-layers-session-presentation-app-5",
    post: "upper-layers-session-presentation-app",
    question: "큰 파일 다운로드가 중간에 끊겨도 받은 곳부터 이어 받게 하는 것은 무엇이 맡나?",
    choices: [
      "TCP가 끊긴 연결의 시퀀스 번호를 기억했다가 이어 준다",
      "TLS 세션 재개가 받은 바이트를 기억한다",
      "HTTP Range 요청과 206 Partial Content, If-Range 같은 응용 프로토콜 규칙",
      "OSI 세션 계층 프로토콜이 커널에서 처리한다",
    ],
    answer: 2,
    explanation:
      "끊긴 TCP 연결은 끝난 것이라 이어 줄 수 없다. OSI 세션 계층이 하던 동기화를 지금은 HTTP가 Range 헤더로 맡아, 새 연결에서 받은 바이트 다음부터 요청한다. If-Range로 그 사이 파일이 바뀌었는지도 확인한다.",
    anchor: "세션-계층이-하던-일은-흩어졌다",
  },
  {
    id: "upper-layers-session-presentation-app-6",
    post: "upper-layers-session-presentation-app",
    question: "TCP/IP 모델이 OSI의 세션·표현 계층을 따로 두지 않은 이유로 가장 맞는 것은?",
    choices: [
      "프로토콜마다 사정이 달라 공통 층보다 각 응용과 라이브러리가 필요한 만큼 하는 게 나아서",
      "세션과 표현 기능이 필요 없어서",
      "커널이 그 일을 대신해 주기 때문에",
      "OSI보다 먼저 만들어져 그 개념을 몰라서",
    ],
    answer: 0,
    explanation:
      "TCP/IP는 돌아가는 프로토콜을 먼저 만들고 굳히는 방식이었고, 전송 계층 위를 응용 계층 하나로 두었다. 세션과 표현의 일은 사라지지 않고 TLS, HTTP, 인코딩·직렬화·압축 라이브러리로 흩어졌다.",
    anchor: "위의-세-층이-한-층이-된-사연",
  },
];
