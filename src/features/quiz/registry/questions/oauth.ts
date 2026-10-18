import type { QuizQuestion } from "../types";

export const OAUTH: QuizQuestion[] = [
  {
    id: "oauth-1",
    post: "oauth",
    question: "OAuth 2.0이 다루는 것에 가장 가까운 것은?",
    choices: [
      "이 사용자가 누구인지 확인하는 인증",
      "이 앱이 내 자원을 어디까지 써도 되는지 위임하는 인가",
      "통신 내용을 암호화하는 방법",
      "서버의 세션 저장 방식",
    ],
    answer: 1,
    explanation:
      "OAuth는 비밀번호를 넘기지 않고 범위와 수명이 정해진 액세스 토큰으로 권한을 위임하는 인가 규칙이다. 사용자가 누구인지 알려 주는 인증은 그 위에 얹은 OpenID Connect가 맡는다.",
    anchor: "로그인까지-하려면-openid-connect",
  },
  {
    id: "oauth-2",
    post: "oauth",
    question: "인가 코드 흐름에서 토큰을 바로 주지 않고 인가 코드를 먼저 주는 이유는?",
    choices: [
      "토큰이 브라우저 주소창을 지나가지 않게 하려고",
      "토큰의 길이를 줄이려고",
      "인가 서버의 부하를 줄이려고",
      "scope를 나중에 바꿀 수 있게 하려고",
    ],
    answer: 0,
    explanation:
      "주소창에 실린 값은 방문 기록, 리퍼러, 확장 프로그램 등으로 새기 쉽다. 그래서 브라우저로는 혼자서는 쓸모없는 코드만 보내고, 토큰 교환은 앱 서버와 인가 서버가 client_secret으로 직접 한다.",
    anchor: "버튼을-누르면-일어나는-일",
  },
  {
    id: "oauth-3",
    post: "oauth",
    question: "인가 요청의 state 파라미터가 하는 일은?",
    choices: [
      "요청할 권한의 범위를 정한다",
      "인가 후 돌아올 주소를 정한다",
      "돌아온 응답이 내가 보낸 요청에 대한 것인지 확인해 CSRF를 막는다",
      "발급될 토큰의 수명을 정한다",
    ],
    answer: 2,
    explanation:
      "앱이 무작위로 만든 state를 세션에 저장해 두고, 콜백으로 돌아온 값과 비교한다. 다르면 공격자가 자기 인가 코드를 밀어 넣은 것이므로 멈춘다. 범위는 scope, 돌아올 주소는 redirect_uri의 몫이다.",
    anchor: "인가-요청-주소-뜯어보기",
  },
  {
    id: "oauth-4",
    post: "oauth",
    question: "PKCE가 주로 막는 공격은?",
    choices: [
      "서버 간 통신에서 client_secret이 새는 것",
      "client_secret을 숨길 수 없는 모바일 앱·SPA에서 가로챈 인가 코드를 토큰으로 바꾸는 것",
      "사용자 비밀번호가 데이터베이스에서 유출되는 것",
      "DNS 응답을 위조하는 것",
    ],
    answer: 1,
    explanation:
      "앱이 요청마다 만든 code_verifier의 지문만 먼저 보내고, 토큰 교환 때 원본을 보여 준다. 코드만 가로챈 공격자는 원본 verifier를 모르니 토큰을 받지 못한다.",
    anchor: "비밀을-숨길-수-없는-앱-pkce",
  },
  {
    id: "oauth-5",
    post: "oauth",
    question: "code_challenge_method=S256일 때 code_challenge는 어떻게 만드는가?",
    choices: [
      "code_verifier를 그대로 쓴다",
      "BASE64URL(SHA256(code_verifier))",
      "SHA256(client_secret)",
      "인가 서버가 정해 준 무작위 값",
    ],
    answer: 1,
    explanation:
      "verifier를 SHA-256으로 해시하고 URL에 쓸 수 있게 BASE64URL로 인코딩한다. 해시는 되돌릴 수 없어서 지문만 보고는 원래 verifier를 알 수 없다.",
    anchor: "비밀을-숨길-수-없는-앱-pkce",
  },
  {
    id: "oauth-6",
    post: "oauth",
    question: "액세스 토큰과 ID 토큰의 차이로 맞는 것은?",
    choices: [
      "둘 다 API를 부를 때 Authorization 헤더에 싣는다",
      "액세스 토큰은 API에 내미는 출입증이고, ID 토큰은 앱이 검증하는 로그인 증명서(JWT)다",
      "ID 토큰은 액세스 토큰을 재발급받는 데 쓴다",
      "액세스 토큰은 반드시 JWT여야 한다",
    ],
    answer: 1,
    explanation:
      "액세스 토큰은 리소스 서버를 위한 것이라 앱이 해석하지 않는 게 원칙이고, 형식도 JWT가 아닐 수 있다. ID 토큰은 OIDC에서 앱을 위해 발급되는 JWT로, 앱이 서명과 aud를 검증해 로그인 처리에 쓴다.",
    anchor: "로그인까지-하려면-openid-connect",
  },
  {
    id: "oauth-7",
    post: "oauth",
    question: "사용자가 개입하지 않는 서버 간 통신에 쓰는 grant type은?",
    choices: ["Authorization Code", "Client Credentials", "Implicit", "Device Code"],
    answer: 1,
    explanation:
      "서버가 자기 client_id와 client_secret으로 바로 토큰을 받는 방식이다. Implicit은 보안 문제로 더 이상 쓰지 않고, Device Code는 TV처럼 입력이 불편한 기기에서 사람이 승인할 때 쓴다.",
    anchor: "인가-코드-말고-다른-방식들",
  },
  {
    id: "oauth-8",
    post: "oauth",
    question: "인가 서버에서 앱 콜백으로 돌아왔는데 앱이 state를 찾지 못해 실패한다. state는 세션에 저장해 두었다. 가장 먼저 의심할 설정은?",
    choices: [
      "세션 쿠키가 SameSite=Strict라서 인가 서버에서 돌아오는 이동에 쿠키가 실리지 않았다",
      "redirect_uri 끝에 슬래시가 붙었다",
      "client_secret이 틀렸다",
      "인가 코드가 이미 한 번 쓰였다",
    ],
    answer: 0,
    explanation:
      "인가 서버에서 돌아오는 이동은 다른 사이트에서 시작된 요청이라 Strict 쿠키는 붙지 않는다. 세션을 못 찾으니 state도 없다. Lax는 최상위 GET 이동에 쿠키를 붙여 준다. redirect_uri가 다르면 애초에 인가 서버가 돌려보내지 않고, 코드 재사용은 토큰 교환에서 invalid_grant로 나온다.",
    anchor: "콜백에서-막히는-세-가지",
  },
];
