import type { QuizQuestion } from "../types";

export const LOCAL_CUSTOM_DOMAIN: QuizQuestion[] = [
  {
    id: "local-custom-domain-1",
    post: "local-custom-domain",
    question: "로컬 개발용 도메인의 TLD로 .dev를 쓰면 생기는 문제는?",
    choices: [
      "mDNS와 충돌해 조회가 느려진다",
      "HSTS 프리로드 목록에 있어서 브라우저가 항상 HTTPS로 접속한다",
      "hosts 파일에 적을 수 없다",
      "쿠키를 저장할 수 없다",
    ],
    answer: 1,
    explanation:
      ".dev는 구글이 운영하는 실제 TLD이고 TLD 전체가 HSTS 프리로드 목록에 있다. 그래서 HTTP로 띄운 개발 서버에 접속할 수 없다. mDNS와 충돌하는 건 .local 쪽이다.",
    anchor: "어떤-도메인을-쓸까",
  },
  {
    id: "local-custom-domain-2",
    post: "local-custom-domain",
    question: "hosts 파일에 대한 설명으로 맞는 것은?",
    choices: [
      "*.matt.test 같은 와일드카드를 지원한다",
      "dig나 nslookup으로 적용 여부를 확인할 수 있다",
      "와일드카드를 지원하지 않아 이름마다 한 줄씩 적어야 한다",
      "브라우저만 읽고 OS는 읽지 않는다",
    ],
    answer: 2,
    explanation:
      "hosts 파일은 이름과 IP를 하나씩 짝지은 고정 목록이라 와일드카드가 없다. 모든 하위 도메인을 한 번에 돌리려면 dnsmasq 같은 로컬 DNS 서버를 쓴다. dig와 nslookup은 DNS 서버에 직접 물어서 hosts를 보지 않는다.",
    anchor: "이름을-127001로-돌리기",
  },
  {
    id: "local-custom-domain-3",
    post: "local-custom-domain",
    question: "app.matt.test와 api.matt.test가 모두 127.0.0.1일 때 리버스 프록시가 두 서비스를 나누는 기준은?",
    choices: ["요청의 Host 헤더(TLS에서는 SNI)", "클라이언트 IP", "요청 경로의 첫 세그먼트", "브라우저 쿠키"],
    answer: 0,
    explanation:
      "두 이름이 같은 IP와 포트로 들어오니 프록시는 요청이 어떤 이름으로 왔는지를 보고 나눈다. TLS 단계에서는 SNI로 인증서를 고르고, HTTP 단계에서는 Host 헤더로 넘길 서비스를 고른다.",
    anchor: "포트-대신-host-헤더로-나누기",
  },
  {
    id: "local-custom-domain-4",
    post: "local-custom-domain",
    question: "mkcert가 브라우저 경고 없이 로컬 HTTPS를 가능하게 하는 방법은?",
    choices: [
      "공개 CA에서 .test 인증서를 무료로 받아 온다",
      "브라우저의 인증서 검증을 끈다",
      "로컬 CA를 만들어 신뢰 저장소에 등록하고, 그 CA로 개발 도메인 인증서를 서명한다",
      "HTTP 응답에 HSTS 헤더를 붙인다",
    ],
    answer: 2,
    explanation:
      "mkcert -install이 내 컴퓨터 전용 CA를 만들어 OS와 브라우저의 신뢰 저장소에 넣는다. 그 CA가 서명한 인증서라 브라우저가 믿는다. 그래서 CA 개인 키인 rootCA-key.pem은 절대 공유하지 않는다.",
    anchor: "브라우저가-믿는-인증서-만들기",
  },
  {
    id: "local-custom-domain-5",
    post: "local-custom-domain",
    question: "Next.js 서버 코드가 mkcert 인증서를 쓰는 https://api.matt.test를 부를 때 인증서 오류가 난다. 알맞은 해결은?",
    choices: [
      "NODE_TLS_REJECT_UNAUTHORIZED=0으로 검증을 끈다",
      "NODE_EXTRA_CA_CERTS에 mkcert의 rootCA.pem 경로를 지정한다",
      "hosts 파일에 api.matt.test를 한 번 더 적는다",
      "allowedDevOrigins에 api.matt.test를 추가한다",
    ],
    answer: 1,
    explanation:
      "Node.js는 OS 신뢰 저장소를 기본으로 쓰지 않아서 mkcert CA를 모른다. NODE_EXTRA_CA_CERTS로 CA를 추가로 알려 주는 게 맞다. 검증을 끄는 방법은 그 프로세스의 모든 HTTPS 검증을 꺼 버린다.",
    anchor: "브라우저가-믿는-인증서-만들기",
  },
  {
    id: "local-custom-domain-6",
    post: "local-custom-domain",
    question: "Vite 개발 서버를 app.matt.test로 열었더니 Blocked request 메시지가 뜬다. 이 차단이 막으려는 공격과 해결 설정은?",
    choices: [
      "XSS, server.cors",
      "CSRF, server.proxy",
      "DNS 리바인딩, server.allowedHosts",
      "클릭재킹, server.headers",
    ],
    answer: 2,
    explanation:
      "공격자 도메인을 127.0.0.1로 해석되게 바꿔 로컬 개발 서버에 요청하게 만드는 DNS 리바인딩을 막으려고 Host를 확인한다. Vite는 server.allowedHosts에 \".matt.test\"처럼 쓰는 도메인을 등록하고, Next.js는 allowedDevOrigins를 쓴다.",
    anchor: "개발-서버가-낯선-호스트를-막는다",
  },
];
