import type { QuizQuestion } from "../types";

export const HTTP_STATUS_CODES: QuizQuestion[] = [
  {
    id: "http-status-codes-1",
    post: "http-status-codes",
    question: "클라이언트가 처음 보는 상태 코드 461을 받았다. 명세대로라면 어떻게 다뤄야 할까?",
    choices: [
      "알 수 없는 응답이니 네트워크 에러로 처리한다",
      "200으로 보고 본문을 읽는다",
      "400으로 보고 처리하되, 응답은 캐시하지 않는다",
      "500으로 보고 자동으로 재시도한다",
    ],
    answer: 2,
    explanation:
      "클라이언트는 모든 코드를 몰라도 되지만 첫 자리의 클래스는 이해해야 하고, 모르는 코드는 같은 클래스의 x00으로 취급한다. 461은 4xx이니 400처럼 다루고, 모르는 코드의 응답은 캐시하지 않는다.",
    anchor: "첫-자리-숫자가-먼저다",
  },
  {
    id: "http-status-codes-2",
    post: "http-status-codes",
    question: "POST /v1/orders를 /v2/orders로 옮기면서 본문까지 그대로 다시 보내게 하려면 어떤 리다이렉트가 맞을까?",
    choices: ["301 Moved Permanently", "302 Found", "303 See Other", "308 Permanent Redirect"],
    answer: 3,
    explanation:
      "308은 영구 이동이면서 메서드와 본문을 유지한다. 301과 302는 역사적으로 브라우저가 POST를 GET으로 바꾸고 본문을 버리며, 303은 아예 GET으로 바꾸라는 뜻이다.",
    anchor: "리다이렉트는-두-가지를-정한다",
  },
  {
    id: "http-status-codes-3",
    post: "http-status-codes",
    question: "주문 폼을 처리한 뒤 HTML을 바로 주지 않고 303으로 결과 페이지에 보내는 이유는?",
    choices: [
      "새로고침해도 POST가 다시 전송되지 않게 하려고",
      "응답 본문 크기를 줄이려고",
      "검색 엔진이 주문 페이지를 색인하게 하려고",
      "브라우저가 결과 페이지를 영구히 캐시하게 하려고",
    ],
    answer: 0,
    explanation:
      "303을 받으면 브라우저는 GET으로 결과 주소를 다시 요청하니 마지막 요청이 GET이 된다. 그래서 새로고침해도 주문 상세를 다시 볼 뿐 주문이 중복되지 않는다. 이걸 PRG 패턴이라고 한다.",
    anchor: "post-다음에는-303",
  },
  {
    id: "http-status-codes-4",
    post: "http-status-codes",
    question: "프론트엔드가 403을 받았을 때 리프레시 토큰으로 토큰을 갱신하고 재요청하면 어떻게 될까?",
    choices: [
      "토큰이 갱신되면서 권한도 함께 생긴다",
      "로그인 상태는 맞으니 같은 403이 반복되고 갱신이 끝없이 이어질 수 있다",
      "서버가 401로 바꿔서 응답한다",
      "브라우저가 WWW-Authenticate 헤더를 보고 자동으로 로그인 창을 띄운다",
    ],
    answer: 1,
    explanation:
      "403은 누군지는 알지만 권한이 없다는 뜻이라 다시 인증해도 결과가 같다. 토큰 갱신은 인증 실패인 401에서 할 일이고, 403에서 하면 끝나지 않는 루프에 빠질 수 있다.",
    anchor: "4xx는-다시-보내도-같다",
  },
  {
    id: "http-status-codes-5",
    post: "http-status-codes",
    question: "앱 로그에는 에러가 하나도 없는데 사용자들이 504를 받는다. 가장 먼저 의심할 것은?",
    choices: [
      "앱 코드에서 처리하지 못한 예외",
      "클라이언트가 보낸 요청 형식 오류",
      "앱이나 DB가 느려져 프록시가 응답을 기다리다 포기한 것",
      "요청 수 제한에 걸린 것",
    ],
    answer: 2,
    explanation:
      "504는 앞단 프록시가 뒤쪽 서버의 응답을 기다리다 타임아웃되어 만든 응답이다. 앱은 아직 처리 중이었을 수 있어서 앱 로그에 에러가 없을 수 있다. 처리하지 못한 예외라면 앱이 500을 만들었을 것이다.",
    anchor: "502와-504는-앱이-만들지-않는다",
  },
  {
    id: "http-status-codes-6",
    post: "http-status-codes",
    question: "멱등성 키 없이 보낸 POST가 502로 실패했다. 자동 재시도를 하지 않는 이유는?",
    choices: [
      "502는 클라이언트 요청이 잘못됐다는 뜻이라서",
      "서버가 이미 처리했을 수 있어서 다시 보내면 중복될 수 있으니까",
      "POST는 어떤 상태 코드에서도 재시도하면 안 되니까",
      "502는 Retry-After가 없으면 재시도할 수 없게 정해져 있어서",
    ],
    answer: 1,
    explanation:
      "502는 응답 도중 연결이 끊기는 경우처럼 서버가 처리를 끝냈는지 알 수 없는 실패다. 멱등하지 않은 POST를 다시 보내면 주문이 두 번 생길 수 있다. 반면 408과 429는 처리 전에 거절했다는 뜻이라 POST도 재시도할 수 있다.",
    anchor: "다시-보내도-되는-실패",
  },
  {
    id: "http-status-codes-7",
    post: "http-status-codes",
    question: "실패를 200에 {\"success\": false}로 감싸 보낼 때 생기는 문제가 아닌 것은?",
    choices: [
      "CDN이 실패 응답을 정상 응답처럼 캐시할 수 있다",
      "모니터링의 에러율에 잡히지 않는다",
      "fetch의 res.ok가 true가 되어 에러 처리를 건너뛴다",
      "브라우저가 응답 본문을 읽지 못하게 막는다",
    ],
    answer: 3,
    explanation:
      "브라우저는 200의 본문을 문제없이 넘겨준다. 문제는 본문을 열어 보지 않는 캐시, 모니터링, 재시도 로직, 클라이언트 라이브러리가 모두 이 응답을 성공으로 판단한다는 점이다.",
    anchor: "실패를-200으로-감싸면",
  },
  {
    id: "http-status-codes-8",
    post: "http-status-codes",
    question: "nginx access.log에 499가 몰려 있다. 이 코드가 뜻하는 것은?",
    choices: [
      "업스트림이 응답 헤더를 너무 크게 보냈다",
      "응답을 보내기 전에 클라이언트가 먼저 연결을 끊었다",
      "업스트림 포트에 듣는 프로세스가 없다",
      "앱이 처리 중 예외를 던졌다",
    ],
    answer: 1,
    explanation:
      "499는 nginx만 쓰는 코드로, 응답 전에 클라이언트가 먼저 끊었다는 뜻이고 클라이언트는 이 코드를 받지 못한다. 업스트림이 느려 사용자가 새로고침했거나 앞단 타임아웃이 nginx보다 짧은 경우에 몰린다. 듣는 프로세스가 없으면 502다.",
    anchor: "accesslog에서-5xx를-갈라-보기",
  },
];
