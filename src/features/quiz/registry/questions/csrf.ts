import type { QuizQuestion } from "../types";

export const CSRF: QuizQuestion[] = [
  {
    id: "csrf-1",
    post: "csrf",
    question: "CSRF 공격이 성립하는 핵심 조건에 가장 가까운 것은?",
    choices: [
      "공격자가 사용자의 세션 쿠키 값을 읽어 낸다",
      "브라우저가 요청 주소의 사이트 쿠키를 자동으로 붙인다",
      "서버가 응답에 CORS 허용 헤더를 안 붙인다",
      "사용자가 피싱 페이지에 비밀번호를 직접 입력한다",
    ],
    answer: 1,
    explanation:
      "CSRF는 쿠키를 훔치지 않는다. 사용자가 로그인해 둔 사이트로 요청이 가면 브라우저가 알아서 그 사이트의 쿠키를 붙인다는 성질을 빌린다. 그래서 공격 페이지는 쿠키를 읽지 못해도 위조 요청을 성공시킨다.",
    anchor: "쿠키가-알아서-붙는다는-것의-대가",
  },
  {
    id: "csrf-2",
    post: "csrf",
    question: "SameSite=Lax 쿠키를 쓰는 사이트에서 상태 변경을 GET으로 노출하면 안 되는 이유는?",
    choices: [
      "GET은 요청 본문을 보낼 수 없어서",
      "Lax는 교차 사이트 최상위 GET 이동에는 쿠키를 붙여서",
      "GET 응답은 항상 캐시되어서",
      "Lax가 GET 요청의 쿠키를 암호화하지 않아서",
    ],
    answer: 1,
    explanation:
      "Lax는 링크 클릭 같은 최상위 내비게이션 GET에는 예외적으로 쿠키를 붙인다. 실험에서도 교차 사이트 top-level GET에 세션 쿠키가 실렸다. 그래서 상태를 바꾸는 엔드포인트를 GET으로 두면 링크 한 줄로 CSRF가 뚫린다.",
    anchor: "samesite가-교차-사이트-요청을-거른다",
  },
  {
    id: "csrf-3",
    post: "csrf",
    question: "\"CORS를 설정했으니 CSRF도 막힌다\"가 틀린 이유는?",
    choices: [
      "CORS는 교차 출처 읽기를 막을 뿐 폼 타입 쓰기 요청은 서버에 그대로 닿는다",
      "CORS는 POST 요청을 전부 차단한다",
      "CORS 설정은 쿠키 전송을 항상 허용한다",
      "CORS는 브라우저가 아니라 서버에서 동작한다",
    ],
    answer: 0,
    explanation:
      "CORS는 교차 출처 응답을 읽는 것을 막는 규칙이다. form-urlencoded 같은 단순 요청은 사전 요청 없이 쿠키를 달고 서버에 닿아 상태를 바꾼다. 실험에서 form 타입 POST는 세션 쿠키와 함께 도착했고, 공격자가 응답을 못 읽었을 뿐 쓰기는 이미 끝났다.",
    anchor: "json-api와-cors-사전-요청의-관계",
  },
  {
    id: "csrf-4",
    post: "csrf",
    question: "서버가 세션 상태를 저장하지 않으면서 CSRF 토큰을 검증하고 싶을 때 맞는 방식은?",
    choices: [
      "동기화 토큰",
      "이중 제출 쿠키",
      "HttpOnly 쿠키",
      "SameSite=Strict",
    ],
    answer: 1,
    explanation:
      "이중 제출 쿠키는 같은 랜덤 값을 쿠키와 폼(또는 헤더) 양쪽에 담게 하고 둘이 같은지만 본다. 서버가 아무것도 저장하지 않아 여러 대 환경에 편하다. 동기화 토큰은 서버 세션에 토큰을 보관해 대조하므로 상태 저장이 필요하다.",
    anchor: "브라우저만-믿지-않는다-토큰과-origin-검사",
  },
  {
    id: "csrf-5",
    post: "csrf",
    question: "세션은 정상인데 사용자가 하지 않은 비밀번호 변경이 일어났다. 먼저 확인할 것으로 가장 적절한 것은?",
    choices: [
      "데이터베이스 인덱스가 깨졌는지 EXPLAIN으로 본다",
      "상태 변경 요청의 Origin·Referer가 우리 사이트인지, 그 엔드포인트가 GET으로도 되는지 본다",
      "TLS 인증서 만료일을 확인한다",
      "서버 CPU 사용률 그래프를 본다",
    ],
    answer: 1,
    explanation:
      "본인이 하지 않은 상태 변경에 세션은 멀쩡하면 CSRF를 의심한다. 요청 로그에서 외부 도메인발 상태 변경 POST를 찾고, 세션 쿠키의 SameSite 값과 엔드포인트가 GET으로도 동작하는지, 토큰·Origin 검사가 실제로 걸려 있는지 순서로 본다.",
    anchor: "실제로-csrf를-만나는-순간",
  },
  {
    id: "csrf-6",
    post: "csrf",
    question: "Authorization 헤더로 토큰을 싣는 로그인 방식이 쿠키 세션보다 CSRF에서 자유로운 이유는?",
    choices: [
      "헤더는 암호화되어 전송되기 때문",
      "브라우저가 교차 사이트 요청에 그 헤더를 자동으로 붙이지 않기 때문",
      "토큰이 쿠키보다 길어 추측이 어렵기 때문",
      "서버가 헤더를 검증하지 않기 때문",
    ],
    answer: 1,
    explanation:
      "CSRF는 브라우저가 쿠키를 자동으로 붙여 주는 성질을 빌린다. Authorization 헤더는 페이지 코드가 명시적으로 넣어야 하고 브라우저가 알아서 붙이지 않으므로, 공격 페이지가 그 값을 채워 넣을 수 없다. 단 쿠키로 인증하는 API는 REST든 아니든 CSRF에 노출된다.",
    anchor: "실제로-csrf를-만나는-순간",
  },
  {
    id: "csrf-7",
    post: "csrf",
    question: "HttpOnly 속성이 CSRF 글에서 함께 다뤄지는 이유로 가장 적절한 것은?",
    choices: [
      "HttpOnly가 교차 사이트 요청에 쿠키가 붙는 것을 막아서",
      "HttpOnly가 CSRF 토큰 검증을 대신해 줘서",
      "XSS로 CSRF 토큰을 읽어 우회하는 연결 고리를 끊어 주기 때문",
      "HttpOnly 쿠키는 SameSite가 항상 Strict로 설정되어서",
    ],
    answer: 2,
    explanation:
      "HttpOnly는 CSRF 자체(쿠키 자동 전송)를 막지 못한다. 다만 XSS로 스크립트가 심기면 CSRF 토큰까지 읽혀 방어가 통째로 뚫리는데, HttpOnly가 쿠키를 자바스크립트에서 못 읽게 해 그 경로 하나를 끊는다.",
    anchor: "set-cookie에-붙는-옵션을-뜯어본다",
  },
];
