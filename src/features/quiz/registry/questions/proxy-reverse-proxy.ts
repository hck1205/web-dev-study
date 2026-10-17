import type { QuizQuestion } from "../types";

export const PROXY_REVERSE_PROXY: QuizQuestion[] = [
  {
    id: "proxy-reverse-proxy-1",
    post: "proxy-reverse-proxy",
    question: "포워드 프록시와 리버스 프록시를 가르는 기준으로 가장 알맞은 것은?",
    choices: [
      "HTTP를 쓰느냐 HTTPS를 쓰느냐",
      "캐시 기능이 있느냐 없느냐",
      "누구를 대신하고, 누가 그 존재를 아느냐",
      "서버가 한 대냐 여러 대냐",
    ],
    answer: 2,
    explanation:
      "포워드 프록시는 클라이언트를 대신하고 클라이언트가 직접 설정해서 쓴다. 리버스 프록시는 서버를 대신하고 DNS로 앞에 세우므로 클라이언트는 모른다. 캐시는 양쪽 모두 할 수 있어서 구분 기준이 되지 못한다.",
    anchor: "프록시는-누구를-대신하나",
  },
  {
    id: "proxy-reverse-proxy-2",
    post: "proxy-reverse-proxy",
    question: "포워드 프록시를 거쳐 HTTPS 사이트에 접속할 때, 회사 루트 인증서 없이 일반 프록시가 알 수 있는 것은?",
    choices: [
      "요청 경로와 쿼리 문자열",
      "목적지 호스트와 포트",
      "요청에 실린 쿠키",
      "응답 본문의 내용",
    ],
    answer: 1,
    explanation:
      "클라이언트는 CONNECT example.com:443으로 통로만 부탁하고, TLS는 클라이언트와 서버가 직접 맺는다. 그래서 프록시는 목적지와 트래픽 양 정도만 알고 경로, 쿠키, 본문은 암호문으로만 본다.",
    anchor: "https는-connect로-터널을-판다",
  },
  {
    id: "proxy-reverse-proxy-3",
    post: "proxy-reverse-proxy",
    question: "브라우저로는 외부 사이트가 열리는데 같은 PC의 터미널에서 curl은 타임아웃이 난다. 가장 그럴듯한 이유는?",
    choices: [
      "브라우저는 PAC 파일로 프록시를 쓰지만 curl은 PAC를 읽지 않아 직접 나가려다 막혔다",
      "curl은 HTTPS를 지원하지 않는다",
      "브라우저는 HTTP/3를 써서 방화벽을 통과한다",
      "curl은 DNS 캐시를 쓰지 않아서 느리다",
    ],
    answer: 0,
    explanation:
      "회사망에서 브라우저는 정책으로 배포된 PAC 파일이나 WPAD로 프록시를 알아서 쓴다. curl과 apt는 PAC를 읽지 않으니 https_proxy 같은 환경 변수가 없으면 직접 연결하려다 방화벽에 막힌다.",
    anchor: "설정-없이-지나가는-프록시와-pac-파일",
  },
  {
    id: "proxy-reverse-proxy-4",
    post: "proxy-reverse-proxy",
    question: "앱에 도착한 X-Forwarded-For가 \"1.2.3.4, 203.0.113.7, 198.51.100.20, 10.0.0.5\"이고 CDN·LB·nginx 주소를 모두 믿는 목록에 넣었다. 클라이언트 IP로 써야 하는 값은?",
    choices: ["1.2.3.4", "10.0.0.5", "198.51.100.20", "203.0.113.7"],
    answer: 3,
    explanation:
      "오른쪽부터 믿는 프록시(10.0.0.5, 198.51.100.20)를 건너뛰고 처음 만나는 모르는 주소가 203.0.113.7이다. 가장 왼쪽 1.2.3.4는 사용자가 직접 써 넣을 수 있는 값이라 믿으면 위조가 그대로 통한다.",
    anchor: "x-forwarded-for-한-줄-뜯어보기",
  },
  {
    id: "proxy-reverse-proxy-5",
    post: "proxy-reverse-proxy",
    question: "CDN을 새로 앞에 붙였더니 모든 사용자 IP가 CDN 엣지 주소로 찍힌다. 원인으로 가장 알맞은 것은?",
    choices: [
      "CDN이 X-Forwarded-For를 지웠다",
      "믿는 프록시 목록에 CDN 대역을 넣지 않았다",
      "nginx가 HTTP/2를 쓰지 않는다",
      "X-Forwarded-Proto가 빠졌다",
    ],
    answer: 1,
    explanation:
      "로드 밸런서가 CDN 엣지 주소를 목록 끝에 붙였는데, 앱이 그 주소를 믿는 프록시로 모르니 거기서 멈춰 버린다. CDN이 공개한 대역을 set_real_ip_from이나 trust proxy 설정에 넣어야 그 너머의 사용자 주소까지 간다.",
    anchor: "진짜-클라이언트-ip-고르기",
  },
  {
    id: "proxy-reverse-proxy-6",
    post: "proxy-reverse-proxy",
    question: "TCP만 이어 주는 L4 로드 밸런서 뒤에서 클라이언트 IP를 넘기려고 PROXY protocol을 로드 밸런서에서만 켰다. 어떻게 되나?",
    choices: [
      "nginx가 연결 맨 앞의 PROXY 줄을 TLS로 해석하려다 핸드셰이크가 실패한다",
      "nginx가 PROXY 줄을 무시하고 정상 동작한다",
      "로드 밸런서가 대신 X-Forwarded-For를 붙여 준다",
      "클라이언트 IP가 자동으로 $remote_addr에 들어간다",
    ],
    answer: 0,
    explanation:
      "PROXY protocol은 데이터 앞에 한 줄을 끼워 넣으므로 받는 쪽도 listen ... proxy_protocol로 그 줄을 기대해야 한다. 한쪽만 켜면 연결이 모두 깨지니 양쪽을 같은 배포에서 함께 바꾼다. L4 장비는 HTTP를 해석하지 않아서 헤더를 붙일 수도 없다.",
    anchor: "헤더를-못-붙이는-l4-로드-밸런서와-proxy-protocol",
  },
  {
    id: "proxy-reverse-proxy-7",
    post: "proxy-reverse-proxy",
    question: "리버스 프록시가 TLS를 끝내고 앱에 HTTP로 넘기는 구성에서 \"리디렉션 횟수가 너무 많다\"는 오류가 난다. 무엇을 고쳐야 하나?",
    choices: [
      "앱 서버에도 같은 인증서를 설치한다",
      "X-Forwarded-For를 덮어쓰게 바꾼다",
      "프록시가 X-Forwarded-Proto를 넘기고 앱이 앞단 프록시를 믿도록 설정한다",
      "HSTS 헤더를 지운다",
    ],
    answer: 2,
    explanation:
      "앱은 HTTP로 받은 요청을 보고 HTTPS로 가라고 301을 보내는데, 브라우저가 HTTPS로 다시 와도 프록시를 지나면 또 HTTP로 보인다. X-Forwarded-Proto: https를 넘기고 Express trust proxy 같은 설정으로 그 헤더를 믿게 하면 원래 스킴을 알 수 있다.",
    anchor: "앱에는-로드-밸런서-주소만-보인다",
  },
];
