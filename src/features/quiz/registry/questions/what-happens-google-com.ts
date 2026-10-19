import type { QuizQuestion } from "../types";

export const WHAT_HAPPENS_GOOGLE_COM: QuizQuestion[] = [
  {
    id: "what-happens-google-com-1",
    post: "what-happens-google-com",
    question: "주소창에 google.com만 쳤는데 https:// 로 접속되는 이유로 맞는 것은?",
    choices: [
      "DNS 서버가 https를 붙여서 돌려준다",
      "브라우저의 HTTPS 우선 정책과 HSTS 때문에 처음부터 https로 요청한다",
      "TCP가 자동으로 443 포트를 고른다",
      "구글 서버가 주소창을 직접 고친다",
    ],
    answer: 1,
    explanation:
      "요즘 브라우저는 스킴이 없으면 https부터 시도하고, HSTS를 알려 준 사이트는 http로 아예 가지 않는다. 서버의 리다이렉트로 옮겨 가는 경우도 있지만 주소창을 서버가 고치는 건 아니다.",
    anchor: "검색어인가-주소인가",
  },
  {
    id: "what-happens-google-com-2",
    post: "what-happens-google-com",
    question: "캐시에 없을 때 리졸버(재귀 DNS 서버)가 IP를 찾는 순서는?",
    choices: [
      "권한 있는 서버 → TLD 서버 → 루트 서버",
      "루트 서버 → .com TLD 서버 → google.com의 권한 있는 서버",
      "브라우저 → 운영체제 → 루트 서버에서 끝",
      "ISP가 모든 도메인의 IP를 갖고 있어 한 번에 답한다",
    ],
    answer: 1,
    explanation:
      "리졸버는 루트에게 .com 담당을 묻고, .com 서버에게 google.com 담당을 묻고, 마지막으로 그 권한 있는 서버에게 IP를 받는다. 받은 답은 TTL 동안 캐시해 다음엔 바로 답한다.",
    anchor: "이름을-ip로-바꾸기-dns",
  },
  {
    id: "what-happens-google-com-3",
    post: "what-happens-google-com",
    question: "TCP 3-way handshake의 순서로 맞는 것은?",
    choices: [
      "SYN → ACK → SYN+ACK",
      "SYN → SYN+ACK → ACK",
      "ACK → SYN → FIN",
      "ClientHello → ServerHello → Finished",
    ],
    answer: 1,
    explanation:
      "클라이언트가 SYN으로 시작 번호를 알리고, 서버가 SYN+ACK로 받았다는 것과 자기 시작 번호를 알리고, 클라이언트가 ACK로 확인한다. ClientHello 쪽은 그 위에서 일어나는 TLS 핸드셰이크다.",
    anchor: "서버와-연결-맺기-tcp와-tls",
  },
  {
    id: "what-happens-google-com-4",
    post: "what-happens-google-com",
    question: "TLS ClientHello에 담기는 SNI의 역할은?",
    choices: [
      "세션 키를 암호화한다",
      "접속하려는 도메인 이름을 알려 서버가 맞는 인증서를 고르게 한다",
      "서버 인증서의 유효 기간을 확인한다",
      "HTTP 버전을 정한다",
    ],
    answer: 1,
    explanation:
      "IP 하나에 여러 도메인이 올라가 있으면 서버는 어떤 인증서를 내밀어야 할지 모른다. SNI로 도메인을 먼저 알려 주면 맞는 인증서를 보낼 수 있다. HTTP 버전 협상은 ALPN이 한다.",
    anchor: "서버와-연결-맺기-tcp와-tls",
  },
  {
    id: "what-happens-google-com-5",
    post: "what-happens-google-com",
    question: "HTTP/3가 TCP 대신 QUIC(UDP 위)을 쓰는 가장 큰 이유는?",
    choices: [
      "UDP가 TCP보다 항상 안전해서",
      "TCP에서 패킷 하나가 빠지면 모든 스트림이 같이 멈추는 head-of-line blocking을 피하려고",
      "헤더를 압축할 수 없어서",
      "DNS 조회를 생략하려고",
    ],
    answer: 1,
    explanation:
      "HTTP/2는 한 연결에 여러 요청을 섞지만 TCP는 순서를 지켜야 해서 패킷 하나가 늦으면 전부 기다린다. QUIC은 스트림마다 따로 순서를 관리해 다른 스트림은 계속 진행된다.",
    anchor: "페이지를-요청하고-받기-http",
  },
  {
    id: "what-happens-google-com-6",
    post: "what-happens-google-com",
    question: "애니메이션을 가장 가볍게 만들려면 어떤 속성을 바꾸는 게 좋은가?",
    choices: [
      "width와 height",
      "top과 left",
      "transform과 opacity",
      "margin과 padding",
    ],
    answer: 2,
    explanation:
      "크기나 위치 속성을 바꾸면 레이아웃부터 다시 계산한다. transform과 opacity는 레이아웃과 페인트를 건너뛰고 합성 단계에서 처리돼 GPU로 부드럽게 움직인다.",
    anchor: "받은-html을-화면에-그리기",
  },
  {
    id: "what-happens-google-com-7",
    post: "what-happens-google-com",
    question: "<script defer>의 동작으로 맞는 것은?",
    choices: [
      "다운로드하는 동안 HTML 파싱을 멈춘다",
      "다운로드가 끝나는 대로 순서 상관없이 바로 실행한다",
      "파싱과 함께 내려받고, HTML 파싱이 끝난 뒤 문서 순서대로 실행한다",
      "페이지가 완전히 로드된 뒤에야 다운로드를 시작한다",
    ],
    answer: 2,
    explanation:
      "defer는 파싱을 막지 않고 병렬로 내려받은 뒤, 파싱이 끝나고 DOMContentLoaded 직전에 문서 순서대로 실행한다. 다운로드가 끝나는 대로 순서 없이 실행하는 건 async다.",
    anchor: "받은-html을-화면에-그리기",
  },
  {
    id: "what-happens-google-com-8",
    post: "what-happens-google-com",
    question: "curl로 사이트를 불렀더니 종료 코드 0과 함께 502가 찍혔다. 이 결과로 알 수 있는 것은?",
    choices: [
      "DNS, TCP, TLS는 성공했고 서버 쪽 HTTP 처리 단계를 보면 된다",
      "DNS에서 이름을 찾지 못했다",
      "인증서 체인이 루트까지 이어지지 않았다",
      "서버 포트가 닫혀 있어 연결이 거부됐다",
    ],
    answer: 0,
    explanation:
      "상태 코드를 받았다는 건 이름 풀이, TCP 연결, TLS 핸드셰이크가 모두 끝나 HTTP 응답까지 왔다는 뜻이다. DNS 실패는 curl (6), 연결 거부는 (7), 인증서 문제는 (60)으로 HTTP 응답 없이 끝난다. 502라면 서버 쪽 프록시 뒤를 본다.",
    anchor: "페이지가-안-뜰-때-몇-번째-단계인지-고르기",
  },
];
