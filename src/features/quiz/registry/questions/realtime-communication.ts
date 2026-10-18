import type { QuizQuestion } from "../types";

export const REALTIME_COMMUNICATION: QuizQuestion[] = [
  {
    id: "realtime-communication-1",
    post: "realtime-communication",
    question: "롱 폴링 서버가 새 이벤트가 없어도 20~30초 뒤 빈 응답을 보내는 이유는?",
    choices: [
      "브라우저가 30초 넘는 응답을 허용하지 않아서",
      "HTTP/1.1 표준이 응답 시간을 30초로 제한해서",
      "서버 메모리를 비우기 위해 연결을 주기적으로 초기화해야 해서",
      "중간 프록시와 로드 밸런서의 idle timeout(흔히 60초)에 걸리기 전에 먼저 끝내려고",
    ],
    answer: 3,
    explanation:
      "오래 조용한 연결은 nginx나 ALB 같은 중간 장비가 끊고, 그러면 502·504 같은 오류로 보인다. 서버가 먼저 빈 응답으로 끝내면 클라이언트가 정상적으로 다시 요청한다.",
    anchor: "대답할-게-생길-때까지-붙잡아-두기-롱-폴링",
  },
  {
    id: "realtime-communication-2",
    post: "realtime-communication",
    question: "EventSource가 끊긴 뒤 다시 연결할 때 놓친 이벤트를 이어받을 수 있는 방법은?",
    choices: [
      "브라우저가 Last-Event-ID 헤더에 마지막으로 받은 id를 자동으로 넣는다",
      "서버가 retry 필드로 놓친 이벤트를 다시 보낸다",
      "브라우저가 받은 이벤트를 localStorage에 저장해 둔다",
      "SSE는 TCP라서 이벤트를 절대 놓치지 않는다",
    ],
    answer: 0,
    explanation:
      "이벤트에 id를 붙여 두면 브라우저가 기억했다가 재연결 요청에 Last-Event-ID로 보낸다. 서버는 최근 이벤트를 보관해 두고 그 다음부터 보내면 된다. retry는 재연결 대기 시간을 바꿀 뿐이다.",
    anchor: "응답을-끝내지-않고-계속-보내기-sse",
  },
  {
    id: "realtime-communication-3",
    post: "realtime-communication",
    question: "서버가 이벤트를 `event: price`로 보내는데 `source.onmessage`에 아무것도 오지 않는다. 이유는?",
    choices: [
      "price 이벤트는 바이너리라서",
      "이름이 있는 이벤트는 addEventListener(\"price\", ...)로만 받기 때문에",
      "event 필드가 있으면 data가 무시되기 때문에",
      "HTTP/2에서만 이름 있는 이벤트를 쓸 수 있어서",
    ],
    answer: 1,
    explanation:
      "event 필드가 없을 때만 이벤트 이름이 message가 되고 onmessage로 온다. 이름을 붙이면 그 이름으로 리스너를 걸어야 한다. 흔한 실수다.",
    anchor: "이벤트-스트림-한-덩어리-뜯어보기",
  },
  {
    id: "realtime-communication-4",
    post: "realtime-communication",
    question: "HTTP/1.1로 SSE를 쓰는 사이트를 탭 7개로 열었더니 마지막 탭의 요청이 멈췄다. 원인은?",
    choices: [
      "SSE는 탭당 하나의 서버만 허용해서",
      "EventSource가 최대 6개까지만 만들어져서",
      "브라우저가 출처당 동시 연결을 6개로 제한하고 SSE가 연결을 계속 차지해서",
      "서버의 retry 값이 너무 커서",
    ],
    answer: 2,
    explanation:
      "크롬과 파이어폭스는 HTTP/1.1에서 출처당 연결을 6개까지만 연다. 열린 채로 있는 SSE 연결이 자리를 모두 차지하면 다른 요청도 기다린다. HTTP/2는 연결 하나에 스트림을 섞어 보내서 이 문제가 없다.",
    anchor: "sse가-걸려-넘어지는-곳",
  },
  {
    id: "realtime-communication-5",
    post: "realtime-communication",
    question: "WebSocket 핸드셰이크에서 Sec-WebSocket-Accept 값이 하는 일은?",
    choices: [
      "사용자를 인증하는 토큰 역할을 한다",
      "이후 프레임을 암호화하는 키가 된다",
      "서버가 WebSocket을 이해하고 이 요청에 답한다는 걸 보여 엉뚱한 응답을 걸러 낸다",
      "CORS 검사를 통과했다는 표시다",
    ],
    answer: 2,
    explanation:
      "서버는 Sec-WebSocket-Key에 고정 GUID를 붙여 SHA-1과 Base64를 거친 값을 돌려주고, 브라우저가 이를 검증한다. WebSocket을 모르는 서버나 캐시의 응답을 거르는 장치일 뿐 인증이나 암호화와는 관계없다. 암호화는 wss의 TLS가 맡는다.",
    anchor: "http를-벗어나-양방향으로-websocket",
  },
  {
    id: "realtime-communication-6",
    post: "realtime-communication",
    question: "쿠키로 인증하는 WebSocket 서버가 업그레이드 요청의 Origin을 검사해야 하는 이유는?",
    choices: [
      "WebSocket에는 CORS가 적용되지 않아 다른 사이트 페이지도 사용자 쿠키를 실어 연결할 수 있어서",
      "Origin이 없으면 101 응답을 보낼 수 없어서",
      "Origin으로 Sec-WebSocket-Accept를 계산해야 해서",
      "브라우저가 Origin이 다른 연결의 프레임을 자동으로 버려서",
    ],
    answer: 0,
    explanation:
      "브라우저는 다른 출처 페이지가 여는 WebSocket에도 쿠키를 보내고, CORS처럼 막아 주지 않는다. 서버가 Origin을 허용 목록과 비교하지 않으면 공격자 페이지가 사용자 권한으로 메시지를 주고받는 CSWSH가 가능하다.",
    anchor: "업그레이드-요청-뜯어보기",
  },
  {
    id: "realtime-communication-7",
    post: "realtime-communication",
    question: "WebSocket 서버를 두 대로 늘렸더니 서버 A에 붙은 사용자의 메시지가 서버 B에 붙은 사용자에게 가지 않는다. 일반적인 해결책은?",
    choices: [
      "로드 밸런서의 idle timeout을 늘린다",
      "Redis Pub/Sub 같은 메시지 버스로 서버들 사이에 메시지를 퍼뜨린다",
      "클라이언트 재연결에 지수 백오프를 넣는다",
      "ping 간격을 줄인다",
    ],
    answer: 1,
    explanation:
      "서버 A는 서버 B에 붙은 연결을 모르니 서버 사이에 메시지를 건네줄 통로가 필요하다. 서버 A가 채널에 publish하면 구독 중인 모든 서버가 받아 자기 연결로 내려보낸다. 나머지 보기는 연결 유지나 재연결 문제에 대한 대책이다.",
    anchor: "서버가-여러-대가-되면",
  },
  {
    id: "realtime-communication-8",
    post: "realtime-communication",
    question: "nginx 뒤에 둔 SSE에서 이벤트가 몇 초 동안 안 오다가 한꺼번에 도착한다. 먼저 고칠 곳은?",
    choices: [
      "EventSource의 retry 값",
      "Last-Event-ID 헤더",
      "그 경로의 proxy_buffering을 끄거나 X-Accel-Buffering: no를 보낸다",
      "WebSocket으로 바꾼다",
    ],
    answer: 2,
    explanation:
      "nginx는 기본으로 업스트림 응답을 버퍼에 모았다가 보내서, 조금씩 흘려보내는 이벤트가 버퍼가 차거나 응답이 끝날 때 몰려 나간다. 그 경로만 proxy_buffering off로 끄거나 앱이 X-Accel-Buffering: no를 보내면 된다. retry나 Last-Event-ID는 재연결 동작이라 상관이 없다.",
    anchor: "로컬에선-되는데-서버에-올리면-멈출-때",
  },
];
