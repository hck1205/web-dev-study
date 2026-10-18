import type { QuizQuestion } from "../types";

export const COOKIE_SESSION_LOGIN: QuizQuestion[] = [
  {
    id: "cookie-session-login-1",
    post: "cookie-session-login",
    question: "세션 쿠키에 HttpOnly를 붙이면 막을 수 있는 것은?",
    choices: [
      "XSS로 끼어든 스크립트가 document.cookie로 세션 ID를 읽어 가는 것",
      "암호화되지 않은 HTTP 요청에 쿠키가 실려 가는 것",
      "다른 사이트에서 시작된 요청에 쿠키가 붙는 것",
      "하위 도메인으로 쿠키가 전송되는 것",
    ],
    answer: 0,
    explanation:
      "HttpOnly는 자바스크립트가 쿠키를 읽지 못하게 한다. HTTP 전송을 막는 건 Secure, 다른 사이트 요청에 붙는 걸 제어하는 건 SameSite, 하위 도메인 전송은 Domain 속성의 몫이다.",
    anchor: "쿠키에-붙는-옵션들",
  },
  {
    id: "cookie-session-login-2",
    post: "cookie-session-login",
    question: "쿠키가 SameSite=Lax일 때, 다른 사이트에서 시작됐는데도 쿠키가 붙는 요청은?",
    choices: [
      "다른 사이트의 숨은 폼이 자동으로 보내는 POST",
      "다른 사이트에 있는 링크를 눌러 이동하는 GET",
      "다른 사이트의 자바스크립트가 보내는 fetch 요청",
      "다른 사이트 안에 iframe으로 넣은 페이지의 요청",
    ],
    answer: 1,
    explanation:
      "Lax는 다른 사이트에서 시작된 요청에는 기본적으로 쿠키를 붙이지 않고, 링크 클릭처럼 주소창이 바뀌는 최상위 GET 이동에만 예외로 붙인다. 그래서 숨은 폼의 POST를 이용하는 CSRF가 막힌다.",
    anchor: "쿠키에-붙는-옵션들",
  },
  {
    id: "cookie-session-login-3",
    post: "cookie-session-login",
    question: "세션 고정(session fixation) 공격을 막는 방법으로 알맞은 것은?",
    choices: [
      "세션 ID를 쿠키 대신 URL 쿼리에 넣는다",
      "세션 만료 시간을 넉넉하게 늘린다",
      "로그인에 성공하는 순간 세션 ID를 새로 발급하고 이전 것은 버린다",
      "세션 쿠키를 SameSite=None으로 설정한다",
    ],
    answer: 2,
    explanation:
      "세션 고정은 공격자가 미리 심어 둔 세션 ID로 피해자가 로그인하게 만드는 공격이다. 로그인 시 새 세션 ID를 발급하면 공격자가 알던 ID는 쓸모가 없어진다. URL에 세션 ID를 넣으면 오히려 고정과 유출이 쉬워진다.",
    anchor: "세션을-노리는-공격들",
  },
  {
    id: "cookie-session-login-4",
    post: "cookie-session-login",
    question: "서버를 여러 대로 늘렸을 때 쿠키 세션을 유지하는 가장 일반적인 방법은?",
    choices: [
      "세션 데이터를 브라우저 localStorage에 옮긴다",
      "모든 서버가 함께 보는 공용 세션 저장소(예: Redis)를 둔다",
      "서버마다 세션을 따로 두고 요청을 무작위로 나눈다",
      "요청마다 세션 ID를 새로 발급한다",
    ],
    answer: 1,
    explanation:
      "서버마다 세션을 따로 두면 다른 서버로 간 요청은 세션을 찾지 못한다. 공용 저장소를 두면 어느 서버가 받아도 같은 세션을 찾는다. 같은 사용자를 같은 서버로 보내는 고정 세션도 있지만 그 서버가 죽으면 세션이 사라진다.",
    anchor: "서버가-여러-대가-되면",
  },
  {
    id: "cookie-session-login-5",
    post: "cookie-session-login",
    question: "토큰 방식과 비교한 쿠키 세션 방식의 장점은?",
    choices: [
      "서버가 아무것도 저장하지 않아도 된다",
      "세션 ID가 서명되어 있어 위조할 수 없다",
      "서버가 세션을 지우면 그 즉시 로그아웃시킬 수 있다",
      "다른 사이트에서도 쿠키가 자동으로 붙어 편하다",
    ],
    answer: 2,
    explanation:
      "세션의 주인은 서버라서 저장소에서 지우는 순간 그 세션 ID는 무효가 된다. 강제 로그아웃, 모든 기기 로그아웃이 쉽다. 대신 요청마다 저장소를 조회해야 하고, 다른 사이트 요청에 쿠키가 붙는 건 장점이 아니라 CSRF의 원인이다.",
    anchor: "로그인부터-로그아웃까지",
  },
  {
    id: "cookie-session-login-6",
    post: "cookie-session-login",
    question: "CSRF 방어 수단으로 보기 어려운 것은?",
    choices: [
      "쿠키에 SameSite=Lax 이상을 설정한다",
      "중요한 요청에 서버가 발급한 CSRF 토큰을 실어 검증한다",
      "요청의 Origin·Referer 헤더를 확인한다",
      "세션 ID를 더 길고 복잡하게 만든다",
    ],
    answer: 3,
    explanation:
      "CSRF는 세션 ID를 훔치는 공격이 아니라, 브라우저가 쿠키를 자동으로 붙이는 점을 이용한다. 세션 ID가 아무리 길어도 쿠키는 그대로 붙어 가므로 방어가 되지 않는다.",
    anchor: "자동으로-붙는다는-것의-함정-csrf",
  },
  {
    id: "cookie-session-login-7",
    post: "cookie-session-login",
    question: "HTTPS 없이 사설 IP로 연 스테이징에서 로그인은 200인데 다음 요청이 401이다. 응답에 Set-Cookie: sid=...; HttpOnly; Secure가 분명히 있다. 원인은?",
    choices: [
      "HttpOnly 때문에 브라우저가 쿠키를 보내지 않는다",
      "SameSite=Lax라서 같은 사이트 요청에도 쿠키가 빠진다",
      "HTTPS가 아닌 곳에서 받은 Secure 쿠키는 브라우저가 저장하지 않는다",
      "Max-Age가 너무 짧다",
    ],
    answer: 2,
    explanation:
      "Secure 쿠키는 HTTPS에서만 저장되고 전송된다. localhost는 안전한 곳으로 쳐 주기 때문에 로컬에서는 안 보이다가 HTTP 스테이징에서 드러난다. HttpOnly는 자바스크립트 접근만 막을 뿐 요청에는 그대로 실린다.",
    anchor: "배포하고-나니-로그인이-자꾸-풀릴-때",
  },
];
