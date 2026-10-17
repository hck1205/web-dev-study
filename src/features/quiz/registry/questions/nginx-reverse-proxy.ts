import type { QuizQuestion } from "../types";

export const NGINX_REVERSE_PROXY: QuizQuestion[] = [
  {
    id: "nginx-reverse-proxy-1",
    post: "nginx-reverse-proxy",
    question: "location /api/ { proxy_pass http://127.0.0.1:3000/; }에서 /api/users?page=2 요청은 앱에 어떤 경로로 갈까?",
    choices: [
      "/api/users?page=2",
      "/users?page=2",
      "//users?page=2",
      "/users (쿼리 문자열은 빠진다)",
    ],
    answer: 1,
    explanation:
      "proxy_pass에 슬래시 하나라도 경로가 있으면 location이 맞춘 /api/ 부분을 그 경로로 바꾼다. 경로 없이 http://127.0.0.1:3000만 쓰면 /api/users?page=2가 그대로 가고, 쿼리 문자열은 어느 경우든 붙는다.",
    anchor: "끝-슬래시-하나가-경로를-바꾼다",
  },
  {
    id: "nginx-reverse-proxy-2",
    post: "nginx-reverse-proxy",
    question: "nginx에서 TLS를 끝내는 구성에서 X-Forwarded-Proto를 넘기지 않으면 생기기 쉬운 문제는?",
    choices: [
      "앱이 클라이언트 IP를 127.0.0.1로 본다",
      "WebSocket 업그레이드가 실패한다",
      "앱이 요청 본문을 1MB까지만 받는다",
      "앱이 자기가 http로 서비스한다고 믿어 리다이렉트를 http://로 만들거나 Secure 쿠키를 빠뜨린다",
    ],
    answer: 3,
    explanation:
      "사용자는 https로 왔지만 nginx와 앱 사이는 평문 http라 앱은 프로토콜을 알 수 없다. X-Forwarded-Proto와 앱의 trust proxy 설정이 함께 있어야 req.protocol이 https가 된다. 클라이언트 IP 문제는 X-Forwarded-For 쪽이다.",
    anchor: "앱에게-진짜-손님-정보를-넘긴다",
  },
  {
    id: "nginx-reverse-proxy-3",
    post: "nginx-reverse-proxy",
    question: "앱이 X-Forwarded-For의 맨 왼쪽 값을 클라이언트 IP로 믿으면 어떤 일이 생길 수 있나?",
    choices: [
      "클라이언트가 헤더를 위조해 IP 차단이나 속도 제한을 피할 수 있다",
      "nginx가 헤더를 덮어써서 항상 nginx IP만 보인다",
      "HTTP/2 연결에서 헤더가 사라진다",
      "로드 밸런서 IP가 클라이언트 IP로 기록된다",
    ],
    answer: 0,
    explanation:
      "$proxy_add_x_forwarded_for는 들어온 값 뒤에 진짜 IP를 덧붙일 뿐이라 왼쪽 값은 클라이언트가 마음대로 쓸 수 있다. 믿을 수 있는 건 내가 운영하는 프록시가 붙인 오른쪽 값이고, nginx가 가장 바깥이면 $remote_addr로 덮어쓰는 게 안전하다.",
    anchor: "앱에게-진짜-손님-정보를-넘긴다",
  },
  {
    id: "nginx-reverse-proxy-4",
    post: "nginx-reverse-proxy",
    question: "요청마다 처리 시간이 10ms에서 5초까지 크게 다른 API에 라운드 로빈보다 least_conn이 나은 이유는?",
    choices: [
      "같은 클라이언트를 같은 서버로 보내 세션이 유지되기 때문",
      "서버를 추가해도 키 대부분이 원래 서버에 남기 때문",
      "지금 열린 연결이 적은 서버를 골라 느린 요청이 쌓인 서버를 피하기 때문",
      "능동 헬스 체크로 느린 서버를 미리 빼기 때문",
    ],
    answer: 2,
    explanation:
      "라운드 로빈은 느린 요청이 쌓인 서버에도 차례대로 요청을 준다. least_conn은 처리 중인 연결 수를 보니 바쁜 서버를 자연스럽게 피한다. 세션 고정은 ip_hash, 키 유지는 hash consistent의 특징이고, 오픈 소스 nginx에는 능동 헬스 체크가 없다.",
    anchor: "upstream으로-서버-여럿에-나누기",
  },
  {
    id: "nginx-reverse-proxy-5",
    post: "nginx-reverse-proxy",
    question: "error.log에 upstream timed out (110: Connection timed out) while reading response header from upstream이 찍혔다. 클라이언트가 받은 코드와 원인은?",
    choices: [
      "502, 앱 프로세스가 내려가 연결이 거부됐다",
      "504, 앱이 proxy_read_timeout 안에 응답을 보내지 않았다",
      "499, 클라이언트가 먼저 연결을 끊었다",
      "413, 요청 본문이 너무 컸다",
    ],
    answer: 1,
    explanation:
      "연결은 됐지만 응답 헤더를 기다리다 시간이 다 된 경우라 504다. 연결 자체가 거부되면 Connection refused와 함께 502가 난다. 둘 다 nginx가 만드는 코드라 앱 로그에는 남지 않는다.",
    anchor: "502와-504가-나는-자리",
  },
  {
    id: "nginx-reverse-proxy-6",
    post: "nginx-reverse-proxy",
    question: "upstream keepalive를 켠 뒤 Node 앱 앞에서 간헐적인 502(upstream prematurely closed connection)가 생겼다. 맞는 해결은?",
    choices: [
      "proxy_http_version을 1.0으로 되돌린다",
      "keepalive 값을 32에서 1024로 올린다",
      "max_fails를 0으로 바꿔 실패를 세지 않는다",
      "앱의 keepAliveTimeout을 nginx의 업스트림 유지 시간보다 길게 하거나, nginx 쪽을 더 짧게 한다",
    ],
    answer: 3,
    explanation:
      "Node는 놀고 있는 연결을 기본 5초에 닫는데 nginx는 60초 동안 재사용하려 해서, 막 닫힌 연결에 요청을 보내는 순간이 생긴다. 앱의 유지 시간이 nginx보다 길어야 한다. HTTP/1.0으로 돌리면 keepalive 자체가 꺼진다.",
    anchor: "upstream으로-서버-여럿에-나누기",
  },
  {
    id: "nginx-reverse-proxy-7",
    post: "nginx-reverse-proxy",
    question: "SSE 응답이 몇 초 동안 안 오다가 한꺼번에 도착한다. 그 location에서 바꿔야 할 설정은?",
    choices: [
      "proxy_buffering off",
      "client_max_body_size 50m",
      "proxy_connect_timeout 3s",
      "proxy_set_header Connection \"\"",
    ],
    answer: 0,
    explanation:
      "nginx는 기본으로 업스트림 응답을 버퍼에 모았다가 보내서, 조금씩 흘려보내는 응답이 뭉쳐서 도착한다. 스트리밍 경로에서만 proxy_buffering off를 쓰거나 앱이 X-Accel-Buffering: no를 보낸다. 전역으로 끄면 느린 클라이언트 보호가 사라진다.",
    anchor: "버퍼링은-켜-두고-흘려보낼-때만-끈다",
  },
];
