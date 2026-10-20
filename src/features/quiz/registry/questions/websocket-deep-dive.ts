import type { QuizQuestion } from "../types";

export const WEBSOCKET_DEEP_DIVE: QuizQuestion[] = [
  {
    id: "websocket-deep-dive-1",
    post: "websocket-deep-dive",
    question: "클라이언트가 보낸 프레임의 둘째 바이트가 0xfe다. 이 프레임에 대해 맞는 것은?",
    choices: [
      "본문 길이가 126바이트다",
      "마스킹되어 있고, 진짜 길이는 다음 2바이트에 있다",
      "마스킹되어 있지 않고, 진짜 길이는 다음 8바이트에 있다",
      "FIN이 0이라 메시지가 다음 프레임으로 이어진다",
    ],
    answer: 1,
    explanation:
      "0xfe는 1111 1110이라 MASK=1이고 7비트 길이 자리가 126이다. 126은 길이 자체가 아니라 '다음 2바이트가 길이'라는 표시라서, 캡처에서는 뒤의 00 c8로 200바이트를 나타냈다. FIN은 첫 바이트에 있다.",
    anchor: "길이가-125를-넘으면-헤더가-길어진다",
  },
  {
    id: "websocket-deep-dive-2",
    post: "websocket-deep-dive",
    question: "같은 글자 'a'를 200개 보낸 클라이언트 프레임의 본문이 '3f 40 34 50'의 반복이었다. 여기서 알 수 있는 것은?",
    choices: [
      "마스킹은 내용을 숨기는 암호화가 아니다",
      "permessage-deflate 압축이 켜져 있다",
      "서버가 보낸 프레임이다",
      "TLS로 암호화된 wss 연결이다",
    ],
    answer: 0,
    explanation:
      "같은 바이트를 같은 4바이트 키로 XOR하니 네 바이트 주기로 같은 값이 나온 것이고, 키도 프레임 안에 그대로 실려 있다. 마스킹은 페이지 스크립트가 회선 바이트를 고르지 못하게 하는 장치이고 내용 보호는 TLS의 몫이다. 서버 프레임은 마스킹하지 않는다.",
    anchor: "마스킹은-암호화가-아니다",
  },
  {
    id: "websocket-deep-dive-3",
    post: "websocket-deep-dive",
    question: "Node.js ws 서버에 잘못된 프레임 하나가 들어오자 서버 프로세스 전체가 죽었다. 가장 먼저 의심할 것은?",
    choices: [
      "maxPayload를 너무 크게 잡았다",
      "nginx가 Upgrade 헤더를 넘기지 않았다",
      "연결마다 error 이벤트 리스너를 달지 않았다",
      "하트비트 간격이 너무 짧다",
    ],
    answer: 2,
    explanation:
      "EventEmitter는 error 리스너가 없으면 예외를 던지므로, 마스킹 없는 프레임 같은 프로토콜 오류 하나가 프로세스를 죽이고 그 서버의 모든 연결을 끊는다. 실습에서도 클라이언트는 1002를 받았고 서버는 Unhandled 'error' event로 종료됐다.",
    anchor: "마스킹은-암호화가-아니다",
  },
  {
    id: "websocket-deep-dive-4",
    post: "websocket-deep-dive",
    question: "nginx 뒤의 채팅방이 조용하면 정확히 60초 뒤 1006으로 끊긴다. 가장 알맞은 대응은?",
    choices: [
      "클라이언트 재연결 백오프를 짧게 줄인다",
      "서버가 60초보다 짧은 간격으로 ping을 보내고, 필요하면 WebSocket 경로의 proxy_read_timeout을 늘린다",
      "TCP keepalive를 켜고 기본값을 그대로 둔다",
      "proxy_buffering을 끈다",
    ],
    answer: 1,
    explanation:
      "nginx는 업그레이드된 연결도 proxy_read_timeout(기본 60초) 동안 바이트가 오가지 않으면 끊는다. 25초마다 ping을 보낸 연결은 95초 동안 살아 있었다. TCP keepalive는 리눅스 기본값으로 2시간 뒤에야 동작하니 이 타이머를 리셋하지 못한다.",
    anchor: "1분-만에-끊기는-채팅방",
  },
  {
    id: "websocket-deep-dive-5",
    post: "websocket-deep-dive",
    question: "클라이언트 프로세스가 멈췄는데(SIGSTOP) 하트비트 없는 서버에서는 연결이 ESTABLISHED로 남았다. 왜 TCP 수준에서는 알 수 없나?",
    choices: [
      "멈춘 프로세스의 커널이 여전히 TCP ACK를 돌려주기 때문이다",
      "서버가 FIN을 보내지 않았기 때문이다",
      "WebSocket은 TCP 위에서 동작하지 않기 때문이다",
      "close 코드 1006이 회선으로 전송되지 않았기 때문이다",
    ],
    answer: 0,
    explanation:
      "프로세스는 얼었지만 커널은 살아 있어서 TCP는 아무 이상이 없어 보인다. 앱 수준 ping에 pong이 오는지 봐야 앱이 응답하는지 알 수 있고, 실습에서는 5초 간격 하트비트가 10초 만에 연결을 정리했다.",
    anchor: "죽은-연결은-스스로-알려-주지-않는다",
  },
  {
    id: "websocket-deep-dive-6",
    post: "websocket-deep-dive",
    question: "WebSocket 서버를 두 대로 늘린 뒤 다른 서버에 붙은 사용자에게 메시지가 안 간다. 무엇이 빠졌나?",
    choices: [
      "스티키 세션",
      "Sec-WebSocket-Protocol 협상",
      "permessage-deflate",
      "서버들 사이에 메시지를 퍼뜨리는 버스(예: Redis Pub/Sub)",
    ],
    answer: 3,
    explanation:
      "연결은 처음 붙은 서버에 묶여 있고 서버는 자기 연결만 안다. 받은 메시지를 Redis 채널에 publish하고 모든 서버가 subscribe해서 자기 연결로 내려보내야 한다. 스티키 세션은 연결을 한 서버에 붙여 둘 뿐 다른 서버로 메시지를 옮겨 주지 않는다.",
    anchor: "서버가-두-대가-되면-메시지가-반만-간다",
  },
  {
    id: "websocket-deep-dive-7",
    post: "websocket-deep-dive",
    question: "크롬 계열이 SameSite 미지정 쿠키를 Lax로 다루는데도 서버에서 Origin을 검사해야 하는 이유는?",
    choices: [
      "WebSocket에는 CORS가 적용되므로 Origin 검사가 중복이라서 필요 없다",
      "Lax는 사이트를 넘는 요청에만 쿠키를 막고, 같은 사이트의 다른 서브도메인에서는 쿠키가 붙기 때문이다",
      "Origin 헤더는 페이지 스크립트가 마음대로 바꿀 수 있기 때문이다",
      "Lax 쿠키는 HTTPS에서만 전송되기 때문이다",
    ],
    answer: 1,
    explanation:
      "실습에서 evil.test에서는 쿠키가 안 붙었지만 blog.app.test에서는 붙었다. 브라우저 기본값도 브라우저마다 다르고 SameSite=None 쿠키는 사이트를 넘어서도 붙으니, 서버가 Origin을 허용 목록과 정확히 비교해야 한다. WebSocket에는 CORS가 적용되지 않는다.",
    anchor: "쿠키로-인증하면-다른-사이트도-연결을-연다",
  },
];
