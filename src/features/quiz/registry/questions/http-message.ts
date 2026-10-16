import type { QuizQuestion } from "../types";

export const HTTP_MESSAGE: QuizQuestion[] = [
  {
    id: "http-message-1",
    post: "http-message",
    question: "fetch에 JSON.stringify한 문자열만 body로 넘기고 헤더를 적지 않았더니 서버가 415를 돌려줬다. 이유는?",
    choices: [
      "fetch가 본문을 자동으로 압축해서 보냈다",
      "Accept 헤더가 없어서 서버가 응답 형식을 정하지 못했다",
      "Content-Type이 text/plain으로 가서 서버가 JSON 본문으로 인정하지 않았다",
      "Content-Length가 빠져서 본문이 잘렸다",
    ],
    answer: 2,
    explanation:
      "fetch는 문자열 본문에 Content-Type: text/plain;charset=UTF-8을 붙인다. 서버는 본문을 열기 전에 이 헤더로 형식을 판단하므로 JSON만 받는 엔드포인트는 415로 거절한다. Accept는 받고 싶은 응답 형식이라 이 문제와 상관없다.",
    anchor: "본문-형식은-content-type이-말한다",
  },
  {
    id: "http-message-2",
    post: "http-message",
    question: "HTTP/1.1에서 Host 헤더를 필수로 만든 이유로 가장 알맞은 것은?",
    choices: [
      "IP 하나에 여러 도메인을 올렸을 때 어느 사이트로 온 요청인지 구분하려고",
      "서버가 클라이언트의 IP 주소를 알 수 있게 하려고",
      "TLS 인증서를 검증하려고",
      "프록시가 캐시 키를 만들 수 있게 하려고",
    ],
    answer: 0,
    explanation:
      "TCP 연결에는 IP와 포트만 있고 도메인 이름이 없어서, 가상 호스팅 서버는 Host를 봐야 어느 사이트의 요청인지 안다. 그래서 Host가 없거나 두 개인 HTTP/1.1 요청은 400으로 거절한다. 인증서 선택은 TLS 단계의 SNI가 맡는다.",
    anchor: "host가-없으면-400이다",
  },
  {
    id: "http-message-3",
    post: "http-message",
    question: "Content-Length와 Transfer-Encoding: chunked가 한 요청에 같이 오면 위험한 이유는?",
    choices: [
      "본문이 두 번 압축되어 깨진다",
      "앞단 프록시와 뒷단 서버가 메시지 경계를 다르게 잘라 요청 스머글링이 생길 수 있다",
      "브라우저가 응답을 캐시하지 못한다",
      "헤더가 너무 커져 431이 난다",
    ],
    answer: 1,
    explanation:
      "한쪽은 Content-Length로, 다른 쪽은 chunked로 본문 끝을 정하면 공격자가 숨긴 바이트가 다음 요청의 시작으로 읽힌다. 스펙은 둘을 같이 보내지 말라고 하고, 요즘 서버와 프록시는 이런 요청을 400으로 거절하고 연결을 닫는다.",
    anchor: "본문이-어디서-끝나는지-알려-주기",
  },
  {
    id: "http-message-4",
    post: "http-message",
    question: "서버가 Accept-Encoding에 따라 br이나 gzip으로 다르게 응답할 때 Vary: Accept-Encoding을 붙이지 않으면?",
    choices: [
      "브라우저가 압축을 풀지 못한다",
      "서버가 매번 압축을 다시 해야 한다",
      "Content-Length를 계산할 수 없다",
      "CDN이 br 사본을 gzip만 아는 클라이언트에게도 줄 수 있다",
    ],
    answer: 3,
    explanation:
      "Vary는 어떤 요청 헤더가 응답을 바꿨는지 캐시에 알려서 그 값까지 캐시 키에 넣게 한다. 없으면 CDN은 주소만 보고 처음 저장한 사본을 모두에게 준다. 반대로 Vary: User-Agent처럼 값이 다양한 헤더를 넣으면 캐시가 잘게 쪼개진다.",
    anchor: "압축은-accept-encoding으로-고른다",
  },
  {
    id: "http-message-5",
    post: "http-message",
    question: "다음 중 gzip이나 Brotli 압축을 적용해도 이득이 거의 없거나 오히려 손해인 응답은?",
    choices: [
      "8KB짜리 JSON 목록",
      "번들된 JavaScript 파일",
      "JPEG 사진",
      "HTML 문서",
    ],
    answer: 2,
    explanation:
      "JPEG, PNG, MP4, woff2는 형식 안에서 이미 압축되어 있어서 다시 압축해도 줄지 않고 CPU만 쓴다. 무작위에 가까운 바이트는 gzip을 거치면 오히려 조금 커진다. 텍스트인 JSON, JS, HTML은 압축 효과가 크다.",
    anchor: "압축은-accept-encoding으로-고른다",
  },
  {
    id: "http-message-6",
    post: "http-message",
    question: "fetch로 FormData를 보낼 때 Content-Type: multipart/form-data를 직접 지정하면 생기는 문제는?",
    choices: [
      "boundary 값이 빠져 서버가 본문을 부분별로 나누지 못한다",
      "파일이 Base64로 바뀌어 크기가 커진다",
      "브라우저가 preflight를 보내지 않는다",
      "서버가 본문을 x-www-form-urlencoded로 읽는다",
    ],
    answer: 0,
    explanation:
      "multipart 본문은 Content-Type 헤더의 boundary 값으로 부분을 나눈다. 브라우저는 FormData를 보낼 때 boundary를 만들어 헤더에 붙이는데, 직접 지정하면 boundary 없는 헤더로 덮인다. 그래서 FormData를 쓸 때는 Content-Type을 비워 둔다.",
    anchor: "본문-형식은-content-type이-말한다",
  },
  {
    id: "http-message-7",
    post: "http-message",
    question: "HTTP/2에서 요청을 보낼 때 달라지는 점으로 옳은 것은?",
    choices: [
      "헤더 이름의 대소문자를 구분해서 Content-Type과 content-type이 다른 헤더가 된다",
      "요청 줄이 :method, :path 같은 의사 헤더로 바뀌고 Host 자리는 :authority가 맡는다",
      "본문 길이를 알리려고 Transfer-Encoding: chunked를 반드시 쓴다",
      "Connection: keep-alive를 보내야 연결이 유지된다",
    ],
    answer: 1,
    explanation:
      "HTTP/2는 메시지를 바이너리 프레임으로 보내고, 요청 줄과 Host를 의사 헤더로 표현한다. 헤더 이름은 소문자로만 쓰지만 대소문자를 가리지 않는다는 의미는 그대로다. 프레임에 길이가 있어서 chunked는 쓰지 않고, Connection 같은 연결 관련 헤더는 보내면 오류다.",
    anchor: "http2에서는-모양이-바뀐다",
  },
];
