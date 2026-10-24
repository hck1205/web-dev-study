import type { QuizQuestion } from "../types";

export const SPRING_SECURITY_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "spring-security-architecture-1",
    post: "spring-security-architecture",
    question:
      "톰캣은 스프링 빈을 모르는데 스프링 빈인 보안 필터들이 어떻게 요청 앞에 서나?",
    choices: [
      "스프링이 보안 필터 열여섯 개를 각각 서블릿 필터로 톰캣에 등록한다",
      "DelegatingFilterProxy라는 서블릿 필터 하나가 요청을 스프링 빈인 FilterChainProxy에 넘긴다",
      "DispatcherServlet이 컨트롤러를 부르기 전에 보안 필터를 직접 호출한다",
      "HandlerInterceptor로 등록되어 핸들러가 정해진 뒤에 돈다",
    ],
    answer: 1,
    explanation:
      "톰캣에는 DelegatingFilterProxy 하나만 등록되고, 이것이 springSecurityFilterChain 빈을 찾아 위임한다. 그 빈인 FilterChainProxy가 요청에 맞는 SecurityFilterChain을 골라 안의 필터를 돌린다. 인터셉터가 아니라 필터라서 DispatcherServlet보다 앞이다.",
    anchor: "서블릿-필터-하나가-보안-필터-열여섯-개를-품는다",
  },
  {
    id: "spring-security-architecture-2",
    post: "spring-security-architecture",
    question:
      "로그인한 USER가 hasRole(\"ADMIN\") 경로를 부르면 403, 로그인하지 않으면 같은 경로에서 401이 난다. 이 둘을 가르는 곳은?",
    choices: [
      "AuthorizationFilter가 사용자 유형에 따라 다른 상태 코드를 직접 쓴다",
      "BasicAuthenticationFilter가 헤더 유무로 정한다",
      "DispatcherServlet의 HandlerExceptionResolver가 정한다",
      "ExceptionTranslationFilter가 거부 예외를 받아 익명이면 인증 진입점(401), 인증된 사용자면 접근 거부 처리기(403)를 부른다",
    ],
    answer: 3,
    explanation:
      "AuthorizationFilter는 거부만 하고, 응답은 그 앞의 ExceptionTranslationFilter가 만든다. 익명 사용자면 AuthenticationEntryPoint가 401이나 로그인 리다이렉트를, 인증된 사용자면 AccessDeniedHandler가 403을 낸다. API 에러 형식을 바꾸려면 이 두 객체를 바꿔 끼운다.",
    anchor: "체인은-내가-직접-만든다",
  },
  {
    id: "spring-security-architecture-3",
    post: "spring-security-architecture",
    question:
      "authorizeHttpRequests에 requestMatchers(\"/**\").authenticated()를 먼저 두고 그 아래 requestMatchers(\"/admin/**\").hasRole(\"ADMIN\")을 뒀다. USER가 /admin/stats를 부르면?",
    choices: [
      "200. 규칙은 위에서부터 처음 맞는 것을 쓰므로 authenticated에 먼저 걸린다",
      "403. 더 구체적인 규칙이 항상 우선한다",
      "시작할 때 오류로 막힌다. anyRequest가 마지막이 아니기 때문이다",
      "401. 두 규칙이 충돌하면 익명으로 취급한다",
    ],
    answer: 0,
    explanation:
      "요청 규칙은 등록 순서대로 맞춰 보고 처음 맞는 것을 쓴다. anyRequest()를 중간에 두는 실수는 시작할 때 막아 주지만, /** 같은 넓은 패턴을 위에 두는 실수는 막지 못한다. 그래서 좁은 규칙을 위에 두고 관리자 경로의 403을 테스트로 남긴다.",
    anchor: "체인은-내가-직접-만든다",
  },
  {
    id: "spring-security-architecture-4",
    post: "spring-security-architecture",
    question:
      "컨트롤러에서는 현재 사용자가 보이는데, 그 안에서 만든 새 스레드에서 SecurityContextHolder를 읽으면 null이다. 왜인가?",
    choices: [
      "새 스레드는 보안 필터를 지나지 않아 인증이 거부됐기 때문에",
      "컨텍스트는 세션에만 있고 메모리에는 없기 때문에",
      "SecurityContextHolder의 기본 전략이 스레드 로컬이라 요청 스레드에만 컨텍스트가 있기 때문에",
      "Security 7에서 다중 인증이 켜지면 다른 스레드에서는 사용자를 숨기기 때문에",
    ],
    answer: 2,
    explanation:
      "기본 전략은 ThreadLocal이라 다른 스레드에는 컨텍스트가 없다. @Async나 스레드 풀로 넘길 때는 DelegatingSecurityContextExecutor 같은 래퍼로 컨텍스트를 복사한다. 상속 스레드 로컬은 스레드를 재사용하는 풀에서 다른 사용자가 섞일 수 있다.",
    anchor: "securitycontextholder는-스레드에-붙는다",
  },
  {
    id: "spring-security-architecture-5",
    post: "spring-security-architecture",
    question:
      "Basic 인증 헤더를 붙여 CSRF 토큰 없이 POST를 보냈더니 403이 아니라 401이 돌아왔다. 원인으로 맞는 것은?",
    choices: [
      "Basic 인증은 POST를 지원하지 않는다",
      "CsrfFilter가 403을 정했지만 /error 디스패치가 보안 체인을 다시 지나며 인증 전 상태라 401로 덮였다",
      "CsrfFilter는 원래 401을 내도록 만들어져 있다",
      "비밀번호가 틀렸는데 CSRF 로그가 먼저 찍힌 것이다",
    ],
    answer: 1,
    explanation:
      "CsrfFilter는 인증 필터보다 앞이라 원래 요청은 아직 인증되지 않았다. 403 뒤 톰캣이 /error로 보내자 그 요청이 보호 경로 규칙에 걸려 401이 됐다. /error를 permitAll로 열자 원래의 403과 본문이 나왔다.",
    anchor: "세션-로그인과-csrf-기본값",
  },
  {
    id: "spring-security-architecture-6",
    post: "spring-security-architecture",
    question:
      "@PreAuthorize로 막힌 요청이 403이 아니라 500으로 나간다. URL 규칙으로 막힌 요청은 여전히 403이다. 가장 그럴듯한 원인은?",
    choices: [
      "@EnableMethodSecurity를 켜지 않았다",
      "ROLE_ 접두사가 빠졌다",
      "메서드 보안은 항상 500을 낸다",
      "@ExceptionHandler(Exception.class) 어드바이스가 AuthorizationDeniedException을 필터까지 올라가기 전에 잡았다",
    ],
    answer: 3,
    explanation:
      "메서드 보안의 거부 예외는 DispatcherServlet 안에서 나서, 필터의 ExceptionTranslationFilter보다 @ControllerAdvice가 먼저 본다. 실험에서 전체 처리기를 켜자 메서드 규칙만 500이 됐다. 전체 처리기에서 보안 예외는 다시 던지거나 따로 처리한다.",
    anchor: "메서드-수준-인가-preauthorize",
  },
  {
    id: "spring-security-architecture-7",
    post: "spring-security-architecture",
    question:
      "매 요청 Authorization 헤더로 JWT만 보내는 API에서 CSRF를 끄는 것이 괜찮은 이유는?",
    choices: [
      "브라우저가 Authorization 헤더를 자동으로 붙이지 않아 다른 사이트가 사용자 몰래 자격 증명을 실어 보낼 수 없기 때문에",
      "JWT는 서명이 있어 위조할 수 없기 때문에",
      "POST 요청은 CORS로 모두 막히기 때문에",
      "STATELESS 정책이면 CSRF 필터가 자동으로 꺼지기 때문에",
    ],
    answer: 0,
    explanation:
      "CSRF는 브라우저가 쿠키를 자동으로 붙여서 생긴다. 자격 증명이 매번 코드로 붙이는 헤더뿐이면 다른 사이트가 이를 실어 보낼 수 없다. 반대로 토큰을 쿠키에 담는 구성은 쿠키 인증이라 CSRF 보호가 필요하다.",
    anchor: "세션-로그인과-csrf-기본값",
  },
];
