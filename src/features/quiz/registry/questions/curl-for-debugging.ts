import type { QuizQuestion } from "../types";

export const CURL_FOR_DEBUGGING: QuizQuestion[] = [
  {
    id: "curl-for-debugging-1",
    post: "curl-for-debugging",
    question: "배포 스크립트의 `curl http://api.internal/healthz`가 서버가 503을 줬는데도 성공으로 넘어갔다. 무엇을 더해야 하나?",
    choices: [
      "-s",
      "-L",
      "-f (또는 --fail-with-body)",
      "--retry 3",
    ],
    answer: 2,
    explanation:
      "curl은 HTTP 응답을 받으면 상태 코드와 상관없이 종료 코드 0을 낸다. -f를 줘야 4xx·5xx가 종료 코드 22로 실패가 된다. --retry만 주면 503을 몇 번 다시 시도할 뿐 끝까지 실패해도 종료 코드는 0이다.",
    anchor: "종료-코드로-스크립트를-짠다",
  },
  {
    id: "curl-for-debugging-2",
    post: "curl-for-debugging",
    question: "응답 헤더만 보려고 `curl -X HEAD URL`을 쳤더니 멈춰 버렸다. 왜 그런가?",
    choices: [
      "-X는 메서드 글자만 바꾸고 curl은 여전히 본문을 기다리는데, 서버는 HEAD라 본문을 보내지 않는다",
      "서버가 HEAD를 막아 연결을 붙잡고 있다",
      "HEAD는 HTTP/2에서만 동작한다",
      "-X를 쓰면 리다이렉트를 무한히 따라간다",
    ],
    answer: 0,
    explanation:
      "-I는 HEAD로 요청하면서 본문을 기다리지 않게 curl의 동작까지 바꾼다. -X HEAD는 요청 줄만 바꿔서 curl이 GET처럼 본문을 기다린다. 한도가 없으면 영원히 멈추니 -I를 쓰거나, GET 헤더는 -o /dev/null -D -로 본다.",
    anchor: "헤더만-볼-때-head를-조심한다",
  },
  {
    id: "curl-for-debugging-3",
    post: "curl-for-debugging",
    question: "HTTPS 서버 한 대를 IP로 직접 두드리려고 `curl -H 'Host: shop.example' https://10.0.1.7/`을 쳤더니 인증서 이름 오류가 났다. 알맞은 방법은?",
    choices: [
      "-k를 더한다",
      "--http1.1을 준다",
      "Host 헤더에 포트를 붙인다",
      "--resolve shop.example:443:10.0.1.7을 주고 URL은 https://shop.example/로 쓴다",
    ],
    answer: 3,
    explanation:
      "SNI와 인증서 검사는 URL의 이름으로 하고, Host 헤더는 TLS가 끝난 뒤에 간다. --resolve는 이름을 그대로 둔 채 붙을 IP만 바꿔서 검사가 통과한다. -k는 검사를 꺼서 진짜 문제를 숨긴다.",
    anchor: "특정-서버-한-대로-보내는-세-가지-방법",
  },
  {
    id: "curl-for-debugging-4",
    post: "curl-for-debugging",
    question: "`curl -d 'a=1' -L http://api.example/orders`가 서버에서 405를 받았다. http→https로 301 리다이렉트가 걸려 있다. 무슨 일이 일어났나?",
    choices: [
      "-L은 POST 요청을 따라가지 않는다",
      "301을 따라가면서 curl이 POST를 GET으로 바꾸고 본문을 버렸다",
      "301은 캐시된 응답이라 서버에 닿지 않았다",
      "-d가 본문을 URL 쿼리로 옮겼다",
    ],
    answer: 1,
    explanation:
      "301, 302, 303은 따라갈 때 POST를 GET으로 바꾼다. 메서드와 본문을 유지하려면 서버가 307이나 308을 써야 한다. -X POST로 고정하면 curl에서만 통과해 실제 클라이언트의 문제를 숨긴다.",
    anchor: "리다이렉트를-따라가면-메서드와-인증이-바뀐다",
  },
  {
    id: "curl-for-debugging-5",
    post: "curl-for-debugging",
    question: "막 뜨는 서버를 기다리려고 `curl --retry 10 http://127.0.0.1:8080/`을 썼는데 한 번에 종료 코드 7로 끝났다. 왜 그런가?",
    choices: [
      "--retry는 연결 거부를 일시적 실패로 보지 않아서 --retry-connrefused가 필요하다",
      "--retry는 -f가 있어야만 동작한다",
      "127.0.0.1에는 재시도가 적용되지 않는다",
      "--retry-delay를 주지 않으면 재시도하지 않는다",
    ],
    answer: 0,
    explanation:
      "--retry가 다시 하는 건 타임아웃과 408, 429, 500, 502, 503, 504 같은 일시적 실패뿐이다. 연결 거부까지 다시 하려면 --retry-connrefused를 더한다. 모든 오류를 다시 하는 --retry-all-errors도 있다.",
    anchor: "재시도는-무엇을-다시-하는가",
  },
  {
    id: "curl-for-debugging-6",
    post: "curl-for-debugging",
    question: "curl이 `(28) Failed to connect to 10.0.2.5 port 443 after 2001 ms: Timeout was reached`로 끝났다. 먼저 볼 곳은?",
    choices: [
      "애플리케이션 로그. 서버가 응답을 늦게 준다",
      "인증서 만료일",
      "DNS 레코드의 TTL",
      "방화벽·보안 그룹·라우팅. SYN에 답이 없어 연결 단계에서 멈췄다",
    ],
    answer: 3,
    explanation:
      "'Failed to connect … Timeout'은 TCP 연결 자체가 안 맺어졌다는 뜻이다. 연결은 됐는데 서버가 답을 안 하면 '0 bytes received'가 찍힌다. 포트를 아무도 안 들으면 거부(7)가 바로 난다.",
    anchor: "한도를-안-걸면-curl은-기다린다",
  },
  {
    id: "curl-for-debugging-7",
    post: "curl-for-debugging",
    question: "평문 HTTP 요청의 -w 결과로 단계 시간을 계산하는데 'TLS 시간 = appconnect − connect'가 음수가 나온다. 왜 그런가?",
    choices: [
      "curl의 시계가 단조 증가하지 않는다",
      "평문 HTTP는 TLS가 없어 time_appconnect가 0으로 찍힌다. pretransfer를 기준으로 계산한다",
      "time_connect가 리다이렉트 시간을 포함한다",
      "-w 값은 누적이 아니라 단계별이라 빼면 안 된다",
    ],
    answer: 1,
    explanation:
      "-w의 시간 값은 모두 요청 시작부터의 누적이고, TLS가 없으면 time_appconnect는 0이다. 요청 직전 시각인 time_pretransfer를 기준으로 서버 시간(starttransfer − pretransfer)을 잡으면 HTTP와 HTTPS를 같은 식으로 다룰 수 있다.",
    anchor: "단계별-시간을-원하는-모양으로-찍는다",
  },
];
