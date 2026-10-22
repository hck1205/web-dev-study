import type { QuizQuestion } from "../types";

export const SSO_SAML_OIDC: QuizQuestion[] = [
  {
    id: "sso-saml-oidc-1",
    post: "sso-saml-oidc",
    question:
      "같은 IdP가 다른 앱용으로 정상 발급한 SAML Assertion을 누군가 우리 앱 ACS에 보냈다. 서명은 맞다. 무엇을 확인했어야 막을 수 있나?",
    choices: ["Issuer", "Audience", "NameID 형식", "SignatureMethod"],
    answer: 1,
    explanation:
      "Audience는 이 Assertion이 어느 SP를 위한 것인지를 적는다. 같은 IdP의 서명이라 Issuer와 서명은 통과하므로, 내 entityID와 Audience를 비교해야 다른 앱용 Assertion을 거른다.",
    anchor: "서명이-맞아도-확인할-것이-남는다",
  },
  {
    id: "sso-saml-oidc-2",
    post: "sso-saml-oidc",
    question:
      "서명 검증은 통과했는데 사용자 정보를 '문서의 첫 번째 Assertion'에서 읽는 SP가 있다. 무엇이 문제인가?",
    choices: [
      "문제없다. 서명이 맞으면 문서 전체가 진짜다",
      "XML 서명은 ID로 가리킨 요소만 덮으므로, 서명 없는 가짜 Assertion을 앞에 끼우면 그걸 읽게 된다",
      "첫 번째 Assertion은 항상 만료돼 있다",
      "속성이 두 번 읽혀 성능이 떨어진다",
    ],
    answer: 1,
    explanation:
      "XML 서명 감싸기 공격이다. 데모에서 순진한 SP는 서명 검증을 통과한 뒤 앞에 끼운 admin Assertion을 읽었다. 서명이 실제로 덮은 요소에서만 값을 읽어야 한다.",
    anchor: "서명은-맞는데-다른-사람으로-들어온다",
  },
  {
    id: "sso-saml-oidc-3",
    post: "sso-saml-oidc",
    question: "IdP 주도(IdP-initiated) SAML 응답을 조심해야 하는 가장 큰 이유는?",
    choices: [
      "서명이 없기 때문에",
      "Assertion이 더 길기 때문에",
      "InResponseTo가 없어 이 브라우저가 시작한 로그인인지 확인할 수 없기 때문에",
      "OIDC로 바꿀 수 없기 때문에",
    ],
    answer: 2,
    explanation:
      "요청 없이 온 응답은 SP가 보낸 요청과 짝지을 수 없다. 공격자가 자기 계정의 응답을 피해자 브라우저로 밀어 넣는 로그인 CSRF나 재사용에 약해서, ID 캐시와 짧은 유효 시간을 두거나 SP 주도로 바꾼다.",
    anchor: "idp가-먼저-보내는-로그인",
  },
  {
    id: "sso-saml-oidc-4",
    post: "sso-saml-oidc",
    question: "OIDC RP가 ID 토큰을 jwtVerify(issuer, audience 지정)로 검증했다. 그래도 직접 확인해야 하는 값은?",
    choices: ["exp", "aud", "nonce", "iss"],
    answer: 2,
    explanation:
      "iss, aud, exp는 라이브러리 옵션으로 걸러지지만 nonce는 RP가 인가 요청 때 만든 값이라 라이브러리가 모른다. 저장해 둔 값과 직접 비교해야 재사용을 막는다.",
    anchor: "oidc로-하면-같은-일이-이렇게-보인다",
  },
  {
    id: "sso-saml-oidc-5",
    post: "sso-saml-oidc",
    question: "퇴사자 계정이 앱에 그대로 남는 문제를 JIT 프로비저닝만으로는 해결하지 못하는 이유는?",
    choices: [
      "JIT는 로그인할 때만 동작해서, 다시 로그인하지 않는 퇴사자의 계정을 지울 기회가 없다",
      "JIT는 SAML에서만 동작해서",
      "JIT는 비밀번호를 저장해서",
      "JIT는 IdP 세션을 늘려서",
    ],
    answer: 0,
    explanation:
      "JIT는 첫 로그인 때 계정을 만드는 방식이다. 퇴사 처리를 앱까지 전하려면 IdP가 앱 API를 직접 부르는 SCIM으로 비활성화하고, 세션과 API 토큰도 함께 끊어야 한다.",
    anchor: "계정은-누가-만들고-누가-지우나",
  },
  {
    id: "sso-saml-oidc-6",
    post: "sso-saml-oidc",
    question:
      "SAML 로그인 후 ACS에서 '저장된 요청을 찾을 수 없다'는 오류가 난다. 앱 세션 쿠키는 SameSite=Lax다. 원인은?",
    choices: [
      "IdP 인증서가 만료돼서",
      "IdP가 보낸 교차 사이트 POST에는 Lax 쿠키가 실리지 않아서",
      "RelayState가 너무 길어서",
      "NameID가 이메일 형식이라서",
    ],
    answer: 1,
    explanation:
      "HTTP-POST 바인딩은 IdP 페이지에서 앱으로 보내는 교차 사이트 POST다. Lax 쿠키는 최상위 GET 이동에만 실리므로 앱이 요청 ID를 담은 세션을 찾지 못한다. 상태 쿠키를 SameSite=None; Secure로 따로 두는 식으로 푼다.",
    anchor: "sso를-붙인-뒤-걸려-오는-문의",
  },
  {
    id: "sso-saml-oidc-7",
    post: "sso-saml-oidc",
    question: "OIDC 백채널 로그아웃 토큰이 ID 토큰과 구별되도록 정해 둔 특징이 아닌 것은?",
    choices: [
      "typ 헤더가 logout+jwt다",
      "events 클레임에 backchannel-logout 항목이 있다",
      "nonce 클레임이 없어야 한다",
      "브라우저 주소창으로 전달된다",
    ],
    answer: 3,
    explanation:
      "백채널 로그아웃 토큰은 IdP가 RP 서버로 직접 POST하는 서버 간 요청이라 브라우저를 거치지 않는다. typ, events, nonce 없음 규칙은 ID 토큰과 혼동하지 않게 하려는 장치다.",
    anchor: "로그아웃은-로그인보다-어렵다",
  },
];
