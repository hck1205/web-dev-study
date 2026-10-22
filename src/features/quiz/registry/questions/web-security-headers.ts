import type { QuizQuestion } from "../types";

export const WEB_SECURITY_HEADERS: QuizQuestion[] = [
  {
    id: "web-security-headers-1",
    post: "web-security-headers",
    question: "Content-Security-Policy-Report-Only로 nonce 정책을 걸었다. nonce 없는 인라인 스크립트는 어떻게 되나?",
    choices: [
      "실행되지 않고 보고만 간다",
      "실행되고, 위반 보고가 disposition \"report\"로 간다",
      "페이지 전체가 하얗게 멈춘다",
      "아무 일도 없다. Report-Only는 크롬에서 무시된다",
    ],
    answer: 1,
    explanation:
      "Report-Only는 같은 정책을 적용하되 막지 않고 위반만 알린다. 데모에서 injected 값이 ran으로 바뀌었고, 보고 JSON의 disposition이 report였다. 그래서 강제 전에 무엇이 깨질지 미리 볼 수 있다.",
    anchor: "csp는-먼저-보고만-받는다",
  },
  {
    id: "web-security-headers-2",
    post: "web-security-headers",
    question:
      "정책이 script-src 'nonce-abc' 'unsafe-inline'이다. nonce 없는 인라인 스크립트는 실행될까?",
    choices: [
      "실행된다. unsafe-inline이 있으니까",
      "처음 한 번만 실행된다",
      "실행되지 않는다. nonce나 해시가 있으면 CSP 2 이상 브라우저는 unsafe-inline을 무시한다",
      "브라우저가 정책 문법 오류로 CSP 전체를 무시한다",
    ],
    answer: 2,
    explanation:
      "unsafe-inline은 nonce나 해시를 모르는 오래된 브라우저를 위한 대비로 함께 적는 값이다. 크로미움에서 같은 정책으로 확인했을 때 nonce 없는 스크립트는 막혔다.",
    anchor: "어떤-스크립트가-통과하나",
  },
  {
    id: "web-security-headers-3",
    post: "web-security-headers",
    question: "CSP를 강제한 뒤 버튼의 onclick=\"...\" 속성이 동작하지 않는다. 해시를 정책에 넣으면 해결될까?",
    choices: [
      "된다. 해시는 모든 인라인 코드에 적용된다",
      "안 된다. onclick은 CSP와 상관없다",
      "된다. 다만 nonce도 같이 넣어야 한다",
      "안 된다. 해시는 unsafe-hashes 없이는 이벤트 핸들러 속성에 적용되지 않으니 addEventListener로 옮긴다",
    ],
    answer: 3,
    explanation:
      "크로미움의 오류 메시지가 직접 '해시는 이벤트 핸들러, style 속성, javascript: 이동에 적용되지 않는다'고 알려 준다. 핸들러를 스크립트 쪽 addEventListener로 옮기는 게 정석이다.",
    anchor: "어떤-스크립트가-통과하나",
  },
  {
    id: "web-security-headers-4",
    post: "web-security-headers",
    question: "응답에 X-Frame-Options: DENY와 CSP frame-ancestors https://partner.example이 함께 있다. 크로미움에서 partner.example이 iframe으로 넣으면?",
    choices: [
      "frame-ancestors가 우선이라 열린다",
      "DENY가 우선이라 막힌다",
      "두 헤더가 충돌해 둘 다 무시되고 열린다",
      "콘솔 경고만 뜨고 하얀 화면이 된다",
    ],
    answer: 0,
    explanation:
      "frame-ancestors를 지원하는 브라우저는 X-Frame-Options보다 CSP를 따른다. 데모에서 XFO DENY와 다른 출처 허용 frame-ancestors를 같이 보냈더니 iframe이 열렸다.",
    anchor: "남의-페이지-안에-내-화면이-들어가지-않게",
  },
  {
    id: "web-security-headers-5",
    post: "web-security-headers",
    question: "COOP same-origin과 COEP require-corp를 켠 날 외부 CDN 이미지가 깨졌다. 왜인가?",
    choices: [
      "COOP가 이미지 요청을 막아서",
      "Referrer-Policy가 바뀌어서",
      "SharedArrayBuffer가 메모리를 다 써서",
      "COEP가 다른 출처 자원에 CORP나 CORS 동의를 요구하는데 CDN 응답에 그게 없어서",
    ],
    answer: 3,
    explanation:
      "COEP require-corp는 동의 헤더 없는 다른 출처 자원을 막는다. 데모의 오류는 NotSameOriginAfterDefaultedToSameOriginByCoep였고, CORP cross-origin을 붙인 이미지만 보였다.",
    anchor: "창과-창-사이를-끊는다",
  },
  {
    id: "web-security-headers-6",
    post: "web-security-headers",
    question: "nosniff 없이 사용자 업로드 .txt 파일(내용은 JS)을 같은 출처에서 내려 주면 어떤 위험이 있나?",
    choices: [
      "파일이 다운로드되지 않는다",
      "다른 곳에 주입한 script 태그가 그 파일을 불러 같은 출처 스크립트로 실행할 수 있다",
      "파일이 자동으로 삭제된다",
      "CORS 오류가 난다",
    ],
    answer: 1,
    explanation:
      "데모에서 text/plain 파일이 nosniff 없을 때는 실행됐고, nosniff를 붙이자 'MIME type is not executable'로 막혔다. 업로드 파일은 별도 도메인에서 내려 주는 게 근본적인 해결이다.",
    anchor: "형식을-짐작하지-말라는-한-줄",
  },
  {
    id: "web-security-headers-7",
    post: "web-security-headers",
    question: "로그인 팝업이 window.opener로 부모 창에 결과를 알리는데, 헤더를 추가한 뒤 부모가 결과를 못 받는다. 가장 의심되는 헤더는?",
    choices: [
      "Cross-Origin-Opener-Policy: same-origin",
      "X-Content-Type-Options: nosniff",
      "Strict-Transport-Security",
      "Permissions-Policy: camera=()",
    ],
    answer: 0,
    explanation:
      "COOP same-origin은 다른 출처 창과의 참조를 끊는다. 데모에서 팝업의 opener가 null이 됐고 부모 쪽에서는 팝업이 closed로 보였다. 이런 흐름에는 same-origin-allow-popups를 검토한다.",
    anchor: "창과-창-사이를-끊는다",
  },
];
