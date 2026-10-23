import type { QuizQuestion } from "../types";

export const SPRING_SECURITY_JWT_OAUTH2: QuizQuestion[] = [
  {
    id: "spring-security-jwt-oauth2-1",
    post: "spring-security-jwt-oauth2",
    question: "유효한 토큰에 roles: [\"ADMIN\"]이 들어 있는데, 기본 설정의 리소스 서버에서 hasRole(\"ADMIN\") 경로가 403을 낸다. 가장 그럴듯한 이유는?",
    choices: [
      "토큰 서명 검증에 실패했기 때문이다",
      "기본 JwtAuthenticationConverter는 scope 클레임만 SCOPE_ 권한으로 바꾸고 roles는 보지 않기 때문이다",
      "hasRole은 세션이 있어야만 동작하기 때문이다",
      "roles 클레임은 JWT 표준이 아니라서 디코더가 지우기 때문이다"
    ],
    answer: 1,
    explanation: "기본 변환기는 scope(또는 scp)만 SCOPE_ 접두사 권한으로 바꾼다. roles를 ROLE_ 권한으로 바꾸는 변환 함수를 직접 넣어야 hasRole이 동작한다. 서명이 틀렸다면 403이 아니라 401이 난다.",
    anchor: "클레임을-권한으로-바꾸는-곳"
  },
  {
    id: "spring-security-jwt-oauth2-2",
    post: "spring-security-jwt-oauth2",
    question: "리소스 서버가 403과 함께 WWW-Authenticate: Bearer error=\"insufficient_scope\"를 돌려줬다. 무엇을 뜻하나?",
    choices: [
      "토큰이 없다",
      "토큰이 만료됐다",
      "토큰의 aud가 이 API와 다르다",
      "토큰은 유효하지만 이 경로가 요구하는 권한이 없다"
    ],
    answer: 3,
    explanation: "토큰 검사를 통과한 뒤 인가 필터에서 권한이 모자라면 403과 insufficient_scope가 온다. 만료나 aud 불일치는 디코딩 단계에서 떨어지므로 401과 invalid_token이다.",
    anchor: "401과-403은-응답-헤더에서-갈린다"
  },
  {
    id: "spring-security-jwt-oauth2-3",
    post: "spring-security-jwt-oauth2",
    question: "Spring Security 7.1.1 리소스 서버에 존재하지 않는 kid를 단 토큰이 다섯 번 들어왔다. 실험에서 인가 서버의 JWKS는 몇 번 조회됐나?",
    choices: [
      "0번, 모르는 kid는 바로 거절한다",
      "1번, 첫 조회 후 30초 동안 재조회를 막는다",
      "5번, 모르는 kid가 올 때마다 다시 받는다",
      "앱 시작 시 한 번만 받고 그 뒤로는 받지 않는다"
    ],
    answer: 2,
    explanation: "NimbusJwtDecoder가 JWKS 소스를 rateLimited(false)로 만들기 때문에 모르는 kid마다 재조회했다. 가짜 kid 토큰을 대량으로 보내면 인가 서버를 두드리게 되니 앞단 요청 제한과 짧은 타임아웃이 필요하다.",
    anchor: "공개-키는-언제-다시-받나"
  },
  {
    id: "spring-security-jwt-oauth2-4",
    post: "spring-security-jwt-oauth2",
    question: "만료 여유를 줄이려고 JwtDecoder 빈을 직접 만들어 JwtTimestampValidator만 넣었다. 어떤 문제가 생기나?",
    choices: [
      "자동 구성이 물러나서 issuer-uri와 audiences 검사가 빠진다",
      "빈이 두 개가 되어 앱이 시작하지 않는다",
      "JWKS를 더 이상 캐시하지 않는다",
      "만료 여유가 0으로 고정된다"
    ],
    answer: 0,
    explanation: "같은 타입 빈이 있으면 Boot의 자동 구성 디코더가 만들어지지 않아 issuer-uri와 audiences 설정이 적용되지 않는다. iss와 aud 검사기를 직접 다시 넣지 않으면 바꾸기 전보다 검사가 약해진다.",
    anchor: "시계가-1분-어긋나도-통과하는-이유"
  },
  {
    id: "spring-security-jwt-oauth2-5",
    post: "spring-security-jwt-oauth2",
    question: "한 인가 서버가 여러 API의 토큰을 발급한다. 결제 API용 토큰으로 주문 API가 뚫리는 것을 막는 검사는?",
    choices: [
      "서명 검사",
      "iss 검사",
      "exp 검사",
      "aud 검사"
    ],
    answer: 3,
    explanation: "같은 인가 서버가 발급했다면 서명과 iss는 모든 토큰이 같다. API를 가르는 값은 aud뿐이라 리소스 서버마다 audiences에 자기 이름을 적어야 한다. 실험에서 audiences를 비우자 aud=billing-api 토큰이 200을 받았다.",
    anchor: "aud를-안-보면-생기는-일"
  },
  {
    id: "spring-security-jwt-oauth2-6",
    post: "spring-security-jwt-oauth2",
    question: "주문 서비스가 @Scheduled 작업에서 client credentials 토큰으로 재고 API를 부르려 한다. 어떤 매니저를 써야 하나?",
    choices: [
      "DefaultOAuth2AuthorizedClientManager, 요청 세션에 토큰을 묶어 저장하니 안전하다",
      "AuthorizedClientServiceOAuth2AuthorizedClientManager, HTTP 요청과 무관하게 토큰을 저장한다",
      "매니저 없이 매번 /token을 직접 부른다",
      "oauth2Login의 세션 토큰을 꺼내 쓴다"
    ],
    answer: 1,
    explanation: "DefaultOAuth2AuthorizedClientManager는 현재 HTTP 요청에 묶여 있어서 요청 밖에서는 꺼낼 요청이 없어 실패한다. 서버끼리의 호출에는 요청과 무관한 AuthorizedClientService 기반 매니저를 쓴다. 매번 /token을 부르면 토큰 재사용 이점이 사라진다.",
    anchor: "내-서버가-다른-api를-부를-때"
  },
  {
    id: "spring-security-jwt-oauth2-7",
    post: "spring-security-jwt-oauth2",
    question: "직접 만든 JWT 필터에 @Component를 붙이고 addFilterBefore로 시큐리티 체인에도 넣었다. 무슨 일이 생기나?",
    choices: [
      "아무 문제 없다. 스프링이 중복을 알아서 합친다",
      "앱이 시작하지 않는다",
      "Boot가 서블릿 필터로도 등록해 시큐리티 체인 밖에서 모든 요청에 한 번 더 돈다",
      "필터가 /api/** 경로에서만 동작하게 된다"
    ],
    answer: 2,
    explanation: "Spring Boot는 Filter 빈을 서블릿 컨테이너에 자동 등록한다. 그래서 securityMatcher와 상관없이 체인 바깥에서도 돈다. FilterRegistrationBean으로 서블릿 등록을 끄거나 빈으로 만들지 않고 체인 설정에서 new로 넣는다.",
    anchor: "직접-만든-필터에서-자주-보는-구멍"
  }
];
