import type { QuizQuestion } from "../types";

export const XSS: QuizQuestion[] = [
  {
    id: "xss-1",
    post: "xss",
    question: "저장형 XSS가 반사형보다 위험 범위가 넓은 이유는?",
    choices: [
      "저장형은 서버 파일 시스템을 직접 바꾼다",
      "저장된 값이 그 페이지를 보는 모든 사람에게 다시 실행된다",
      "저장형은 HTTPS에서도 막히지 않는다",
      "반사형은 자바스크립트를 실행할 수 없다",
    ],
    answer: 1,
    explanation:
      "반사형은 공격 링크를 누른 그 사람에게만 실행되지만, 저장형은 값이 DB에 저장됐다가 그 페이지를 여는 모든 열람자에게 다시 그려져 실행된다. 댓글·프로필·게시글이 대표적이라 피해 범위가 넓다.",
    anchor: "데이터가-코드가-되는-세-가지-길",
  },
  {
    id: "xss-2",
    post: "xss",
    question: "XSS 방어에서 입력 검증보다 출력 인코딩을 먼저 강조하는 이유는?",
    choices: [
      "입력 검증은 성능이 느려서",
      "출력되는 자리마다 위험한 문자가 달라 입력 시점에는 알 수 없어서",
      "입력 검증은 브라우저가 대신 해 줘서",
      "출력 인코딩이 데이터베이스 부하를 줄여서",
    ],
    answer: 1,
    explanation:
      "같은 값도 HTML 본문·속성·JS·URL·CSS 중 어디로 나가느냐에 따라 이스케이프 규칙이 다르다. 입력 시점에는 어느 자리로 출력될지 모르고, 저장형처럼 입력이 멀쩡해도 출력에서 터진다. 그래서 출력하는 순간 그 자리에 맞게 인코딩하는 것이 핵심이다.",
    anchor: "나가는-자리에-맞게-이스케이프한다",
  },
  {
    id: "xss-3",
    post: "xss",
    question: "React의 dangerouslySetInnerHTML에 사용자 입력을 그대로 넣으면 생기는 문제는?",
    choices: [
      "React가 자동으로 이스케이프해 태그가 글자로 보인다",
      "React가 손대지 않아 태그와 스크립트가 그대로 실행된다",
      "컴파일 단계에서 오류가 나 빌드가 멈춘다",
      "서버 렌더링에서만 위험하고 클라이언트에서는 안전하다",
    ],
    answer: 1,
    explanation:
      "React는 JSX 텍스트 자식만 자동 이스케이프한다. dangerouslySetInnerHTML은 문자열을 손대지 않고 DOM에 넣어서 주입된 태그가 그대로 산다. 서버 렌더링 출력에서도 텍스트는 &lt;img&gt;로 죽지만 dangerous 경로는 태그가 살아남았다. 반드시 정제한 값에만 쓴다.",
    anchor: "react는-왜-비교적-안전한가-그리고-어디서-뚫리나",
  },
  {
    id: "xss-4",
    post: "xss",
    question: "댓글에 굵은 글씨와 링크는 허용하되 스크립트는 막아야 한다. 적절한 방법은?",
    choices: [
      "정규식으로 <script> 문자열만 찾아 지운다",
      "모든 특수문자를 HTML 엔티티로 이스케이프한다",
      "DOMPurify 같은 허용 목록 기반 정제기로 안전한 태그만 남긴다",
      "입력 길이를 제한한다",
    ],
    answer: 2,
    explanation:
      "전부 이스케이프하면 허용하려던 태그까지 글자로 보인다. 정규식 블랙리스트는 대소문자·인코딩·중첩 태그로 거의 다 우회된다. DOMPurify는 허용 목록 기반으로 안전한 태그만 남기고 onerror·javascript: href·script를 떼어 낸다.",
    anchor: "html을-허용해야-한다면-정제한다",
  },
  {
    id: "xss-5",
    post: "xss",
    question: "nonce 기반 CSP에서 공격자가 주입한 인라인 스크립트가 실행되지 않는 이유는?",
    choices: [
      "주입된 스크립트는 그 응답의 nonce 값을 알 수 없어서",
      "CSP가 모든 인라인 스크립트의 문법 오류를 고쳐서",
      "브라우저가 주입된 스크립트를 자동으로 이스케이프해서",
      "nonce가 스크립트를 암호화해서",
    ],
    answer: 0,
    explanation:
      "서버가 매 응답마다 새 난수를 만들어 자기가 심은 script 태그에만 붙인다. 공격자는 그 nonce를 모르니 주입한 인라인 스크립트가 허용 목록에 못 들어가 브라우저가 실행을 거부한다. 실험에서 nonce 없는 인라인 스크립트는 DOM을 못 바꿨고 위반 보고가 report-uri로 들어왔다.",
    anchor: "csp로-주입돼도-실행을-막는다",
  },
  {
    id: "xss-6",
    post: "xss",
    question: "세션 쿠키에 HttpOnly를 붙였을 때 XSS 관점에서 얻는 효과는?",
    choices: [
      "스크립트 주입 자체가 차단된다",
      "자바스크립트가 document.cookie로 세션 쿠키를 읽지 못해 탈취 경로가 막힌다",
      "CSRF 공격이 함께 차단된다",
      "쿠키가 HTTPS에서만 전송된다",
    ],
    answer: 1,
    explanation:
      "HttpOnly는 XSS 실행 자체를 막지는 못한다. 다만 document.cookie로 세션 쿠키를 읽을 수 없게 해서, 쿠키를 긁어 계정을 탈취하는 흔한 경로를 끊는다. 실험에서 HttpOnly 세션 쿠키는 document.cookie에 안 보였다. HTTPS 전송은 Secure 속성의 역할이다.",
    anchor: "터져도-피해를-줄이는-장치들",
  },
  {
    id: "xss-7",
    post: "xss",
    question: "Trusted Types가 겨냥하는 취약점과 동작 방식으로 맞는 것은?",
    choices: [
      "반사형 XSS를 서버에서 이스케이프로 막는다",
      "DOM 기반 XSS를 겨냥해, innerHTML 같은 싱크에 정책을 거친 객체만 받게 강제한다",
      "SQL 주입을 파라미터 바인딩으로 막는다",
      "CSRF를 토큰으로 막는다",
    ],
    answer: 1,
    explanation:
      "Trusted Types는 DOM 기반 XSS를 겨냥한다. innerHTML처럼 문자열을 코드로 만드는 싱크에 날 문자열을 못 넣게 하고, 정책을 거친 TrustedHTML 객체만 받도록 브라우저가 런타임에 강제한다. CSP에 require-trusted-types-for 'script'로 켠다.",
    anchor: "터져도-피해를-줄이는-장치들",
  },
];
