import type { QuizQuestion } from "../types";

export const SPRING_MVC_REQUEST_LIFECYCLE: QuizQuestion[] = [
  {
    id: "spring-mvc-request-lifecycle-1",
    post: "spring-mvc-request-lifecycle",
    question:
      "닫는 중괄호가 빠진 JSON을 보냈더니 400이 났고 컨트롤러 첫 줄의 로그는 찍히지 않았다. 인터셉터의 preHandle 로그는 찍혔다. 요청은 어디서 멈췄나?",
    choices: [
      "톰캣이 HTTP 요청을 읽다가 문법 오류로 연결을 끊었다",
      "서블릿 필터 체인에서 CharacterEncodingFilter가 본문을 거부했다",
      "핸들러는 정해졌지만 @RequestBody 인자를 메시지 컨버터로 만들다가 실패했다",
      "컨트롤러 메서드 안에서 예외가 났지만 로그가 버퍼에 남아 출력되지 않았다",
    ],
    answer: 2,
    explanation:
      "preHandle이 불렸다는 건 HandlerMapping이 핸들러를 이미 정했다는 뜻이다. 그다음 단계인 인자 해석에서 메시지 컨버터가 JSON을 읽지 못해 HttpMessageNotReadableException이 났고, 컨트롤러는 불리지 않았다. 이 예외는 DefaultHandlerExceptionResolver가 400으로 바꾸며 WARN 로그를 남긴다.",
    anchor: "인자를-만들다-실패하면-컨트롤러는-불리지-않는다",
  },
  {
    id: "spring-mvc-request-lifecycle-2",
    post: "spring-mvc-request-lifecycle",
    question:
      "JWT 검증 서블릿 필터에서 토큰이 틀리면 예외를 던지게 했다. @RestControllerAdvice에 그 예외 처리기를 두었는데도 Boot 기본 형식의 500이 나간다. 왜인가?",
    choices: [
      "@ControllerAdvice는 DispatcherServlet 안에서 난 예외만 처리하는데, 필터는 그보다 앞에서 돌기 때문에",
      "필터에서 던진 예외는 체크 예외로 바뀌어서 처리기 타입과 맞지 않기 때문에",
      "@RestControllerAdvice는 GET 요청의 예외만 처리하기 때문에",
      "spring.mvc.problemdetails.enabled가 꺼져 있으면 어드바이스가 동작하지 않기 때문에",
    ],
    answer: 0,
    explanation:
      "필터는 DispatcherServlet에 닿기 전에 실행되므로 그 안에서 난 예외는 HandlerExceptionResolver가 보지 못한다. 예외는 톰캣까지 올라가고, 톰캣이 /error로 다시 보내 BasicErrorController가 기본 본문을 만든다. 인터셉터에서 던진 예외는 DispatcherServlet 안이라 어드바이스가 받는다.",
    anchor: "예외는-누가-응답으로-바꾸나",
  },
  {
    id: "spring-mvc-request-lifecycle-3",
    post: "spring-mvc-request-lifecycle",
    question:
      "인터셉터 locale, auth, timing이 순서대로 등록되어 있고 auth의 preHandle이 false를 돌려줬다. 이 요청에서 afterCompletion이 불리는 인터셉터는?",
    choices: ["locale, auth, timing 모두", "locale과 auth", "locale만", "아무것도 불리지 않는다"],
    answer: 2,
    explanation:
      "afterCompletion은 preHandle이 true를 돌려준 인터셉터에 대해서만 거꾸로 불린다. auth는 false를 돌려줬으니 자기 afterCompletion이 불리지 않고, timing은 preHandle까지 가지도 않았다. 그래서 auth가 preHandle에서 무언가를 열었다면 false를 돌려주기 전에 직접 정리해야 한다.",
    anchor: "인터셉터-세-메서드가-불리는-규칙",
  },
  {
    id: "spring-mvc-request-lifecycle-4",
    post: "spring-mvc-request-lifecycle",
    question:
      "@RestController의 응답에 헤더를 붙이려고 인터셉터의 postHandle에서 response.setHeader를 불렀는데 클라이언트에 헤더가 없다. 이유로 맞는 것은?",
    choices: [
      "postHandle은 예외가 났을 때만 불린다",
      "메시지 컨버터가 반환값을 이미 응답 본문으로 써서 커밋한 뒤에 postHandle이 불린다",
      "인터셉터는 응답 객체를 읽기 전용으로만 받는다",
      "헤더는 afterCompletion에서만 추가할 수 있다",
    ],
    answer: 1,
    explanation:
      "@ResponseBody 반환값은 return value handler가 메시지 컨버터로 바로 응답에 쓰고, 그때 응답이 커밋된다. 커밋된 응답에는 헤더를 더해도 나가지 않는다. 헤더는 필터에서 chain.doFilter 전에 붙이거나 ResponseBodyAdvice를 쓴다.",
    anchor: "인터셉터-세-메서드가-불리는-규칙",
  },
  {
    id: "spring-mvc-request-lifecycle-5",
    post: "spring-mvc-request-lifecycle",
    question:
      "server.tomcat.threads.max=2로 두고 1초 걸리는 요청 네 개를 동시에 보냈다. 어떤 결과가 나오나?",
    choices: [
      "두 요청은 성공하고 나머지 둘은 즉시 503으로 거절된다",
      "네 요청이 모두 약 1초에 끝난다. 톰캣이 필요하면 스레드를 더 만든다",
      "두 요청은 약 1초, 나머지 둘은 스레드가 빌 때까지 기다렸다가 약 2초에 끝난다",
      "스레드가 모자라 네 요청 모두 타임아웃으로 실패한다",
    ],
    answer: 2,
    explanation:
      "스레드가 모자라도 연결은 받아 둔 채 빈 스레드를 기다린다. 실험에서는 앞의 둘이 1.5초 남짓, 뒤의 둘이 2.5초 남짓 걸렸다. 운영에서는 CPU가 한가한데 응답 시간이 계단처럼 늘어나는 모습으로 나타난다.",
    anchor: "내장-톰캣과-요청-스레드",
  },
  {
    id: "spring-mvc-request-lifecycle-6",
    post: "spring-mvc-request-lifecycle",
    question:
      "spring.threads.virtual.enabled=true로 가상 스레드를 켰다. 이때 새로 조심해야 할 것으로 가장 알맞은 것은?",
    choices: [
      "가상 스레드는 블로킹 I/O를 지원하지 않아 JDBC 코드를 리액티브로 바꿔야 한다",
      "스레드 수 제한이 사실상 사라져 부하가 커넥션 풀 대기열과 외부 API로 그대로 넘어간다",
      "요청마다 OS 스레드를 새로 만들어 메모리가 크게 늘어난다",
      "DispatcherServlet이 가상 스레드에서는 초기화되지 않는다",
    ],
    answer: 1,
    explanation:
      "가상 스레드는 기다리는 동안 OS 스레드를 놓아주어 동시에 기다릴 수 있는 요청 수가 크게 늘어난다. 대신 threads.max 200이라는 자연스러운 천장이 사라져, 커넥션 풀 10개 앞에 줄이 길어지고 외부 API로 동시 요청이 쏟아진다. 블로킹 코드는 그대로 쓸 수 있다.",
    anchor: "내장-톰캣과-요청-스레드",
  },
  {
    id: "spring-mvc-request-lifecycle-7",
    post: "spring-mvc-request-lifecycle",
    question:
      "@ExceptionHandler(Exception.class) 하나로 모든 예외를 500 ProblemDetail로 바꿨다. 어떤 부작용이 생기나?",
    choices: [
      "415, 405 같은 스프링 MVC 내장 예외까지 500이 되어 버린다",
      "필터에서 난 예외까지 이 처리기가 받게 되어 응답이 두 번 쓰인다",
      "ProblemDetail은 500 상태 코드에 쓸 수 없어 시작이 실패한다",
      "컨트롤러가 정상 응답한 요청에도 이 처리기가 불린다",
    ],
    answer: 0,
    explanation:
      "ExceptionHandlerExceptionResolver가 DefaultHandlerExceptionResolver보다 먼저 묻기 때문에, Exception 전체를 잡는 처리기가 내장 예외를 가로챈다. 그래서 Content-Type이 틀린 요청까지 500이 된다. 전체 처리기를 두려면 ResponseEntityExceptionHandler를 상속해 내장 예외를 먼저 처리하게 한다.",
    anchor: "에러-본문을-problemdetail로-맞춘다",
  },
];
