import type { QuizQuestion } from "../types";

export const NGINX_HTTPS_PERFORMANCE: QuizQuestion[] = [
  {
    id: "nginx-https-performance-1",
    post: "nginx-https-performance",
    question: "certbot --nginx로 인증서를 받은 뒤 HTTPS만 쓰겠다며 방화벽에서 80을 막았다. 어떤 일이 생길까?",
    choices: [
      "HTTP/2가 꺼진다",
      "HTTP-01 검증을 못 해서 다음 자동 갱신이 실패한다",
      "HSTS 헤더가 전송되지 않는다",
      "TLS 1.3 대신 1.2로 연결된다",
    ],
    answer: 1,
    explanation:
      "nginx 플러그인은 인증 기관이 http://도메인/.well-known/acme-challenge/로 직접 와서 토큰을 확인하는 HTTP-01 방식이다. 80이 막히면 갱신 때 검증이 실패하니 certbot renew --dry-run으로 미리 확인한다. 80을 열 수 없으면 DNS-01을 쓴다.",
    anchor: "인증서는-certbot에게-맡긴다",
  },
  {
    id: "nginx-https-performance-2",
    post: "nginx-https-performance",
    question: "Ubuntu 24.04의 apt nginx(1.24)에서 HTTP/2를 켜는 올바른 문법은?",
    choices: [
      "http2 on;",
      "listen 443 http2; (ssl 없이)",
      "listen 443 ssl http2;",
      "proxy_http_version 2;",
    ],
    answer: 2,
    explanation:
      "http2 on; 지시어는 1.25.1부터 있어서 1.24에서는 unknown directive로 거부된다. 그 이전 버전은 listen 443 ssl http2;를 쓰고, 새 버전에서 이 문법을 쓰면 동작은 하되 deprecated 경고가 난다.",
    anchor: "tls-버전과-암호-http2-켜기",
  },
  {
    id: "nginx-https-performance-3",
    post: "nginx-https-performance",
    question: "gzip on;이 켜져 있는데 JS와 CSS 응답에 Content-Encoding: gzip이 없다. 이유는?",
    choices: [
      "gzip_types 기본값이 text/html 하나라서 다른 형식은 압축하지 않는다",
      "HTTP/2에서는 gzip이 동작하지 않는다",
      "gzip_comp_level 기본값이 0이다",
      "JS와 CSS는 이미 압축된 형식이라 nginx가 건너뛴다",
    ],
    answer: 0,
    explanation:
      "gzip on만으로는 HTML만 압축된다. application/javascript, text/css 같은 형식을 gzip_types에 넣어야 한다. 이미 압축된 형식이라 건너뛰는 건 JPEG나 WOFF2 같은 파일 이야기다.",
    anchor: "압축은-텍스트에만",
  },
  {
    id: "nginx-https-performance-4",
    post: "nginx-https-performance",
    question: "app.3f9a1c.js 같은 해시 파일에는 immutable을 주고 index.html에는 no-cache를 주는 이유는?",
    choices: [
      "no-cache를 주면 HTML이 브라우저에 저장되지 않아 용량을 아낀다",
      "immutable은 압축된 파일에만 쓸 수 있다",
      "HTML은 CDN이 캐시할 수 없기 때문이다",
      "해시 파일은 내용이 바뀌면 이름도 바뀌지만, HTML은 이름이 같은 채 내용이 바뀌어 매번 확인해야 한다",
    ],
    answer: 3,
    explanation:
      "이름이 곧 버전인 파일은 1년 동안 묻지 않고 써도 안전하다. HTML은 no-cache로 쓰기 전에 ETag를 확인하게 해서 배포가 바로 반영된다. no-cache는 저장하지 말라는 뜻이 아니라 확인하고 쓰라는 뜻이고, 저장 자체를 막는 건 no-store다.",
    anchor: "정적-파일-캐시-헤더",
  },
  {
    id: "nginx-https-performance-5",
    post: "nginx-https-performance",
    question: "proxy_cache를 켠 API에 proxy_cache_bypass $cookie_session과 proxy_no_cache $cookie_session을 함께 둔 이유는?",
    choices: [
      "캐시 스탬피드를 막으려고",
      "로그인한 사용자의 개인 응답이 저장돼 다른 사용자에게 나가는 것을 막으려고",
      "만료된 응답을 앱 장애 때 대신 주려고",
      "캐시 키에 쿠키를 넣어 적중률을 높이려고",
    ],
    answer: 1,
    explanation:
      "앱이 Set-Cookie나 Cache-Control: private 없이 사용자별 응답을 주면 nginx는 구분하지 못한다. 세션 쿠키가 있는 요청은 캐시를 읽지도 쓰지도 않게 하는 안전장치다. 스탬피드는 proxy_cache_lock, 장애 대응은 proxy_cache_use_stale이 맡는다.",
    anchor: "업스트림-응답을-nginx에-저장하기",
  },
  {
    id: "nginx-https-performance-6",
    post: "nginx-https-performance",
    question: "rate=2r/s, burst=3, nodelay인 limit_req에서 한 IP가 같은 순간에 요청 6개를 보내면?",
    choices: [
      "2개 통과, 4개 거절",
      "6개 모두 통과하지만 순서대로 늦춰진다",
      "4개 통과, 2개 거절",
      "3개 통과, 3개 거절",
    ],
    answer: 2,
    explanation:
      "첫 요청은 excess 0으로 통과하고, 이후 요청마다 1씩 올라 3이 될 때까지 통과한다. 그다음은 burst 3을 넘어 거절되고 거절된 요청은 값을 올리지 않는다. 모두 늦춰서 통과시키는 건 nodelay가 없고 burst가 충분히 클 때의 모습이다.",
    anchor: "요청-수를-제한한다",
  },
  {
    id: "nginx-https-performance-7",
    post: "nginx-https-performance",
    question: "server 블록에 보안 헤더 add_header를 넣었는데 /assets/ 응답에만 보안 헤더가 없다. 가장 그럴듯한 원인은?",
    choices: [
      "/assets/ location에 Cache-Control용 add_header가 있어서 server의 add_header가 상속되지 않았다",
      "정적 파일에는 add_header가 적용되지 않는다",
      "always를 붙이지 않아 200 응답에서 빠졌다",
      "server_tokens off가 다른 헤더까지 지운다",
    ],
    answer: 0,
    explanation:
      "add_header는 안쪽 블록에 한 줄이라도 있으면 바깥 것을 모두 버린다. 그래서 보안 헤더를 snippet으로 묶어 필요한 location마다 include한다. always는 에러 응답에도 붙이라는 뜻이라 200 응답과는 상관없다.",
    anchor: "보안-헤더와-숨길-것",
  },
  {
    id: "nginx-https-performance-8",
    post: "nginx-https-performance",
    question: "TLS를 클라우드 로드 밸런서에서 끝내고 nginx의 80으로 넘기게 바꾼 뒤 ERR_TOO_MANY_REDIRECTS가 난다. 왜일까?",
    choices: [
      "HSTS max-age가 너무 길어서 브라우저가 계속 리다이렉트한다",
      "nginx가 받는 요청은 늘 평문이라 80 블록의 https 리다이렉트가 매번 다시 걸린다",
      "로드 밸런서가 SNI를 보내지 않아 다른 server 블록이 응답한다",
      "certbot이 80 블록에 넣은 검증 경로가 리다이렉트를 막는다",
    ],
    answer: 1,
    explanation:
      "사용자는 https로 들어왔지만 nginx가 보는 건 로드 밸런서가 보낸 평문 요청이라 return 301 https://가 같은 주소로 계속 돌려보낸다. 원래 스킴은 X-Forwarded-Proto에만 남아 있으니 그 값을 보고 리다이렉트할지 정한다. HSTS는 리다이렉트를 만들지 않는다.",
    anchor: "https를-붙인-뒤에-걸려-오는-전화",
  },
];
