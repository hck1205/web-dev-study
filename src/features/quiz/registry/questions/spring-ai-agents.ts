import type { QuizQuestion } from "../types";

export const SPRING_AI_AGENTS: QuizQuestion[] = [
  {
    id: "spring-ai-agents-1",
    post: "spring-ai-agents",
    question:
      "도구 하나가 붙은 질문에 ChatClient의 call()을 한 번 불렀더니 모델 API로 HTTP 요청이 두 번 나갔다. 왜인가?",
    choices: [
      "OpenAI SDK가 첫 요청을 실패로 보고 재시도했기 때문에",
      "첫 응답이 tool_calls라서 Spring AI가 도구를 실행하고 결과를 붙여 다시 물었기 때문에",
      "모델이 도구를 직접 실행한 뒤 결과를 확인하려고 한 번 더 불렀기 때문에",
      "도구 정의를 먼저 등록하는 요청이 따로 나가기 때문에",
    ],
    answer: 1,
    explanation:
      "모델은 도구를 실행하지 않고 호출 요청 JSON만 돌려준다. ToolCallingAdvisor가 메서드를 실행해 assistant·tool 메시지를 붙여 다시 보내고, stop이 올 때 루프를 끝낸다. 도구 정의는 별도 등록 없이 매 요청에 실려 간다.",
    anchor: "도구를-부르는-건-모델이-아니다",
  },
  {
    id: "spring-ai-agents-2",
    post: "spring-ai-agents",
    question:
      "모델 호출 횟수를 세서 비용을 제한하는 어드바이저를 HIGHEST_PRECEDENCE 쪽(ToolCallingAdvisor보다 작은 order)에 두었다. 도구를 열 번 부른 턴은 몇 번으로 세어지나?",
    choices: ["열한 번", "열 번", "한 번", "0번"],
    answer: 2,
    explanation:
      "ToolCallingAdvisor는 자기보다 order 값이 큰 안쪽 어드바이저만 바퀴마다 다시 부른다. 바깥에 둔 어드바이저는 턴의 시작과 끝에 한 번만 지나므로 한 번으로 센다. 모델 호출마다 세려면 루프 안쪽 order에 둔다.",
    anchor: "어드바이저-순서가-루프의-안과-밖을-가른다",
  },
  {
    id: "spring-ai-agents-3",
    post: "spring-ai-agents",
    question:
      "주문 취소 도구에서 사용자 신원을 확인하려 한다. 가장 안전한 방법은?",
    choices: [
      "시스템 프롬프트에 '본인 주문만 취소하라'고 적는다",
      "도구 파라미터에 userId를 추가해 모델이 채우게 한다",
      "인증 정보에서 꺼낸 사용자 ID를 ToolContext로 넘기고 도구 코드에서 주문 주인과 비교한다",
      "도구 설명에 destructive라고 적어 모델이 조심하게 한다",
    ],
    answer: 2,
    explanation:
      "ToolContext 값은 모델 요청에 실리지 않고 도구에만 전달되므로 모델이 바꿀 수 없다. 프롬프트 지시나 도구 설명은 모델이 어기거나 인젝션에 속을 수 있다. 모델이 채우는 userId 파라미터는 사용자 입력과 다를 바 없다.",
    anchor: "도구가-실패하거나-남의-주문을-건드리려-할-때",
  },
  {
    id: "spring-ai-agents-4",
    post: "spring-ai-agents",
    question:
      "on-limit-exceeded=RETURN_ERROR_RESPONSE로 바꿨더니, 거절 메시지를 무시하고 계속 도구를 부르는 모델에서 무슨 일이 생겼나?",
    choices: [
      "합계 한도 150에서 예외가 나며 멈췄다",
      "거절 응답만 계속 쌓이며 루프가 끝나지 않았다",
      "첫 거절에서 Spring AI가 루프를 강제로 끝냈다",
      "도구가 한도를 무시하고 계속 실행됐다",
    ],
    answer: 1,
    explanation:
      "이 모드는 도구를 실행하지 않고 한도 초과 메시지를 모델에 돌려주며, 멈출지는 모델이 정한다. 합계 한도를 넘어도 같은 방식으로 거절만 돌아와 루프가 이어졌다. 그래서 모델 호출 수나 시간을 세는 바깥 가드를 함께 둔다.",
    anchor: "모델이-그만두지-않으면",
  },
  {
    id: "spring-ai-agents-5",
    post: "spring-ai-agents",
    question:
      "도구가 IllegalStateException을 던졌다. Spring AI 2.0.1 기본 설정에서는 어떻게 처리되나?",
    choices: [
      "예외가 call()을 부른 코드로 그대로 던져진다",
      "도구를 두 번 더 재시도한다",
      "예외 메시지가 tool 메시지가 되어 모델에 전달된다",
      "해당 도구를 목록에서 빼고 질문을 다시 보낸다",
    ],
    answer: 2,
    explanation:
      "spring.ai.tools.throw-exception-on-error 기본값이 false라서 예외 메시지를 결과로 바꿔 모델에 보낸다. 모델이 오류를 설명하거나 다른 길을 찾게 하려는 기본값이다. 메시지가 사용자에게도 보일 수 있으니 내부 정보를 넣지 않는다.",
    anchor: "도구가-실패하거나-남의-주문을-건드리려-할-때",
  },
  {
    id: "spring-ai-agents-6",
    post: "spring-ai-agents",
    question:
      "요청마다 타임아웃 2초를 주고 5초 걸리는 모델을 불렀더니 실패까지 12초 넘게 걸렸다. 가장 큰 이유는?",
    choices: [
      "타임아웃이 연결에만 걸리고 응답 대기에는 걸리지 않아서",
      "타임아웃도 재시도 대상이라 기본 재시도 3번이 더해져서",
      "도구 루프가 실패한 요청을 다시 보내서",
      "JVM이 처음 HTTP 연결을 만드는 데 10초가 걸려서",
    ],
    answer: 1,
    explanation:
      "OpenAI SDK는 기본 max-retries 3으로 타임아웃 난 요청도 간격을 늘려 다시 보낸다. 2초씩 네 번에 대기 간격이 더해져 12.8초가 됐다. 끊긴 요청도 서버에서는 계속 생성했으니 비용도 나갈 수 있다.",
    anchor: "모델-api가-느리거나-503을-줄-때",
  },
  {
    id: "spring-ai-agents-7",
    post: "spring-ai-agents",
    question:
      "MessageChatMemoryAdvisor를 붙인 챗봇이 세 번째 질문에서 첫 질문의 이름을 기억했다. 실제로 일어난 일은?",
    choices: [
      "모델 API가 대화 ID별로 세션을 유지했다",
      "애플리케이션이 앞의 메시지들을 매 요청에 다시 실어 보냈다",
      "임베딩으로 이전 대화를 검색해 붙였다",
      "모델이 첫 요청에서 학습했다",
    ],
    answer: 1,
    explanation:
      "모델 API는 상태가 없어서 스텁이 받은 메시지 수가 1, 3, 5로 늘었다. 기억은 애플리케이션의 ChatMemory에 있고 대화 ID를 바꾸면 끊긴다. 그래서 대화가 길수록 프롬프트 토큰도 늘어난다.",
    anchor: "대화를-기억하는-건-모델이-아니다",
  },
];
