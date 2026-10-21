import type { QuizQuestion } from "../types";

export const REVERSE_PROXY_LB_API_GATEWAY: QuizQuestion[] = [
  {
    id: "reverse-proxy-lb-api-gateway-1",
    post: "reverse-proxy-lb-api-gateway",
    question:
      "keep-alive 연결 하나로 요청 네 개를 보냈더니 L7 로드 밸런서에서는 users-a, users-b가 번갈아 응답했고 L4에서는 전부 users-a가 응답했다. 왜 그럴까?",
    choices: [
      "L4는 라운드 로빈을 지원하지 않아서",
      "L4는 헬스 체크를 하지 않아 users-b를 죽은 서버로 봐서",
      "L4는 연결을 맺을 때 한 번 서버를 고르고, L7은 요청마다 고르기 때문에",
      "curl이 L4 쪽에만 같은 서버로 가는 쿠키를 붙여서",
    ],
    answer: 2,
    explanation:
      "L4는 HTTP 요청의 경계를 모르니 연결 단위로만 서버를 고르고, 그 연결이 살아 있는 동안 바이트를 그대로 옮긴다. L7은 HTTP를 해석해 요청마다 다시 고른다. 그래서 HTTP/2나 gRPC처럼 연결 하나에 요청을 많이 싣는 트래픽을 L4로 나누면 한 서버만 바빠진다.",
    anchor: "같은-연결-위에서-l4와-l7은-다르게-나눈다",
  },
  {
    id: "reverse-proxy-lb-api-gateway-2",
    post: "reverse-proxy-lb-api-gateway",
    question:
      "nginx → 게이트웨이 → 서비스 구조에서 `Server: nginx` 헤더가 달린 401 JSON 응답을 받았다. nginx 설정에는 401을 내는 줄이 없다. 먼저 볼 곳은?",
    choices: [
      "게이트웨이 로그. 응답은 게이트웨이가 만들고 nginx는 전달하며 Server 헤더만 얹었다",
      "nginx의 error.log. Server 헤더가 nginx이므로 nginx가 만든 응답이다",
      "서비스 로그. 401은 항상 데이터를 가진 서비스가 만든다",
      "브라우저 캐시. 예전 응답이 남아 있는 것이다",
    ],
    answer: 0,
    explanation:
      "앞단 프록시는 뒤에서 온 응답을 흘려보내면서 자기 Server 헤더를 붙인다. 응답을 누가 만들었는지는 Server 헤더가 아니라 본문 모양과 각 층의 접근 로그로 가린다. API 키 확인은 게이트웨이의 일이니 거기부터 본다.",
    anchor: "게이트웨이는-누가-부르는지를-본다",
  },
  {
    id: "reverse-proxy-lb-api-gateway-3",
    post: "reverse-proxy-lb-api-gateway",
    question:
      "게이트웨이 타임아웃은 2초, 그 뒤 HAProxy는 연결 거부 시 1초씩 쉬며 세 번 재시도한다. 서버 하나가 막 죽은 순간 사용자가 받는 응답과 그 이유는?",
    choices: [
      "503. HAProxy가 대상이 없다고 바로 알려 준다",
      "502. 서버가 연결을 거부했으니 HAProxy가 즉시 502를 낸다",
      "200. HAProxy가 재시도를 다른 서버로 자동으로 보낸다",
      "504. HAProxy가 3초 뒤 503을 내기 전에 게이트웨이가 2초에 먼저 포기한다",
    ],
    answer: 3,
    explanation:
      "실험에서 HAProxy는 3006ms 동안 재시도한 뒤 503을 냈지만, 게이트웨이는 2초에 504를 돌려줬다. 안쪽 층이 바깥보다 오래 기다리면 바깥의 504가 진짜 원인을 덮는다. 다른 서버로 넘기려면 option redispatch를 따로 켜야 한다.",
    anchor: "상태-코드로-범인-찾기",
  },
  {
    id: "reverse-proxy-lb-api-gateway-4",
    post: "reverse-proxy-lb-api-gateway",
    question:
      "nginx에서 `proxy_pass http://users;`(upstream 이름)로 넘겼더니 앱이 받은 Host 헤더가 `users`였다. 원인과 해결은?",
    choices: [
      "upstream에 keepalive를 켜서 생긴 일이라 keepalive를 끈다",
      "Host를 따로 정하지 않으면 nginx가 proxy_pass에 적힌 이름을 보낸다. `proxy_set_header Host $host;`를 넣는다",
      "앱이 X-Forwarded-Host를 읽지 않아서 생긴 일이라 앱만 고친다",
      "limit_req가 Host를 바꿨으니 limit_req를 location 밖으로 뺀다",
    ],
    answer: 1,
    explanation:
      "nginx의 기본 Host 값은 `$proxy_host`, 즉 proxy_pass에 적은 호스트 부분이다. upstream 이름을 쓰면 그 이름이 그대로 Host로 간다. 앱이 Host로 링크를 만들거나 가상 호스트를 고르면 깨지므로 원래 Host를 넘기도록 지정한다.",
    anchor: "nginx-한-대로-세-역할을-다-해-보면",
  },
  {
    id: "reverse-proxy-lb-api-gateway-5",
    post: "reverse-proxy-lb-api-gateway",
    question:
      "nginx 앞에 TLS를 복호화하지 않고 SNI만 보고 넘기는 L4 HAProxy를 끼웠다. 앱의 X-Forwarded-For 맨 앞 주소가 어떻게 바뀌고, 무엇을 해야 하나?",
    choices: [
      "그대로 클라이언트 주소다. L4는 주소를 바꾸지 않는다",
      "비어 버린다. TLS 통과 방식은 X-Forwarded-For를 지원하지 않는다",
      "HAProxy 주소로 바뀐다. 양쪽에 PROXY protocol을 켜서 원래 주소를 전달한다",
      "nginx 주소로 바뀐다. nginx의 real_ip 모듈만 끄면 된다",
    ],
    answer: 2,
    explanation:
      "L4는 새 TCP 연결을 열고 헤더를 쓰지 못하니, nginx에게는 HAProxy가 손님으로 보인다. 실험에서도 맨 앞이 127.0.0.7에서 127.0.0.1로 바뀌었다. 연결 맨 앞에 원래 주소를 싣는 PROXY protocol을 보내는 쪽과 받는 쪽 모두에 켜야 한다.",
    anchor: "tls를-어디서-벗길지",
  },
  {
    id: "reverse-proxy-lb-api-gateway-6",
    post: "reverse-proxy-lb-api-gateway",
    question:
      "AWS ALB의 헬스 체크 경로를 잘못 적어 대상 그룹의 대상이 전부 비정상이 됐다. 그런데 서비스는 그럭저럭 돌아간다. 왜일까?",
    choices: [
      "ALB가 비정상 대상을 자동으로 다시 등록하기 때문에",
      "헬스 체크 결과는 CloudWatch에만 쓰이고 라우팅에는 쓰이지 않기 때문에",
      "ALB가 마지막으로 정상이던 대상 하나에만 계속 보내기 때문에",
      "대상이 전부 비정상이면 ALB는 헬스 상태를 무시하고 전부에게 보내기(fail open) 때문에",
    ],
    answer: 3,
    explanation:
      "ALB는 모두 비정상일 때 막아 버리는 대신 모든 대상에 보낸다. 그래서 헬스 체크 설정 오류가 장애로 드러나지 않고 숨어 있다가, 진짜로 한 대가 죽었을 때 걸러 내지 못한다. 503은 대상이 아예 등록돼 있지 않을 때 난다.",
    anchor: "관리형이냐-직접-띄우냐",
  },
  {
    id: "reverse-proxy-lb-api-gateway-7",
    post: "reverse-proxy-lb-api-gateway",
    question: "CDN, ALB, 게이트웨이, 서비스를 겹쳐 쌓을 때 장애를 키우는 설정은?",
    choices: [
      "ALB, 게이트웨이, 서비스 클라이언트가 각자 실패한 요청을 재시도한다",
      "TLS를 엣지에서 한 번 끝내고 안쪽은 연결을 재사용한다",
      "모든 층이 같은 요청 ID를 넘기고 로그에 남긴다",
      "타임아웃을 바깥 층으로 갈수록 길게 잡는다",
    ],
    answer: 0,
    explanation:
      "재시도를 여러 층에서 하면 장애 순간에 요청이 층 수만큼 곱해져 뒤쪽을 더 누른다. 층마다 맡을 일을 하나씩 정하고 재시도는 한 층에서만 한다. 나머지 보기는 모두 권장하는 설정이다.",
    anchor: "실제-서비스에서는-이렇게-겹친다",
  },
];
