import type { QuizQuestion } from "../types";

export const LLM_API_INTEGRATION: QuizQuestion[] = [
  {
    id: "llm-api-integration-1",
    post: "llm-api-integration",
    question:
      "프런트엔드 빌드의 환경 변수에 모델 API 키를 넣고 브라우저에서 바로 모델 API를 부르게 했다. 무엇이 문제인가?",
    choices: [
      "브라우저는 HTTPS로 모델 API를 부를 수 없다",
      "빌드에 들어간 값은 공개된 값이라, 키를 꺼낸 누구나 우리 계정으로 모델을 부를 수 있다",
      "브라우저에서는 스트리밍을 받을 수 없다",
      "환경 변수는 빌드 때 지워져서 키가 빈 값이 된다",
    ],
    answer: 1,
    explanation:
      "프런트엔드 번들과 네트워크 요청에 실린 값은 누구나 볼 수 있다. 키는 백엔드에만 두고, 백엔드가 사용자 인증과 사용자별 한도를 건 뒤 모델 API를 부른다.",
    anchor: "브라우저는-모델-api를-직접-부르지-않는다",
  },
  {
    id: "llm-api-integration-2",
    post: "llm-api-integration",
    question:
      "60토큰짜리 답에서 스트리밍 없이는 3.7초 뒤 한꺼번에, 스트리밍으로는 1.3초에 첫 글자가 떴다. 전체 완료 시간은 둘 다 약 3.7초였다. 스트리밍이 줄여 준 것은?",
    choices: [
      "모델이 토큰을 만드는 속도",
      "출력 토큰 수와 비용",
      "사용자가 첫 글자를 보기까지의 시간",
      "입력 토큰을 읽는 시간",
    ],
    answer: 2,
    explanation:
      "스트리밍은 모델이 만든 토큰을 그때그때 내려보낼 뿐 생성 속도나 토큰 수를 바꾸지 않는다. 줄어드는 것은 첫 토큰 시간이고, 사용자는 읽으면서 기다리게 되어 체감 지연이 크게 준다.",
    anchor: "8초를-기다리게-하지-않는-법",
  },
  {
    id: "llm-api-integration-3",
    post: "llm-api-integration",
    question:
      "사용자가 답을 읽다 탭을 닫았는데, 로그를 보니 모델이 끝까지 토큰을 만들어 비용이 그대로 나갔다. 가장 먼저 고칠 곳은?",
    choices: [
      "백엔드가 클라이언트 연결 종료를 감지해 모델 API 요청도 abort하도록 잇는다",
      "max_tokens를 더 크게 잡는다",
      "응답을 스트리밍 대신 한 번에 받는다",
      "브라우저에서 EventSource로 바꾼다",
    ],
    answer: 0,
    explanation:
      "중지는 브라우저 fetch의 signal, 서버의 연결 종료 감지, 모델 SDK 호출 취소가 사슬처럼 이어져야 전해진다. 백엔드가 모델 요청을 붙잡고 있으면 아무도 읽지 않는 답에 출력 토큰 비용이 든다. 실험에서는 이 사슬을 이었더니 60토큰 답이 37토큰에서 멈췄다.",
    anchor: "중지-버튼은-모델-api까지-전해져야-한다",
  },
  {
    id: "llm-api-integration-4",
    post: "llm-api-integration",
    question:
      "주문 조회 도구의 입력 스키마에 userId와 orderId를 모두 받게 했다. 보안상 무엇이 문제인가?",
    choices: [
      "인자가 두 개면 모델이 도구를 부르지 못한다",
      "userId가 숫자면 strict 모드가 거부한다",
      "도구 호출이 두 번으로 나뉘어 느려진다",
      "사용자 입력이나 붙인 문서의 주입으로 모델이 남의 userId를 넣을 수 있다. 권한은 세션에서 와야 한다",
    ],
    answer: 3,
    explanation:
      "모델이 채우는 인자는 검증 대상일 뿐 권한의 근거가 아니다. 사용자가 우기거나 문서에 심긴 지시가 있으면 모델이 다른 ID를 넣을 수 있다. 사용자 ID는 서버가 세션에서 꺼내 도구 실행 코드에 따로 넘긴다.",
    anchor: "도구를-부르는-루프는-서버가-돌린다",
  },
  {
    id: "llm-api-integration-5",
    post: "llm-api-integration",
    question:
      "모델이 한 응답에 도구 호출 두 개를 냈고, 그중 하나가 DB 오류로 실패했다. 다음 요청에 결과를 어떻게 붙이나?",
    choices: [
      "성공한 결과만 user 메시지에 넣고 실패한 호출은 뺀다",
      "결과마다 user 메시지를 따로 하나씩 만들어 보낸다",
      "두 결과를 user 메시지 하나에 담고, 실패한 쪽은 is_error: true와 오류 내용을 넣는다",
      "실패했으니 대화를 처음부터 다시 시작한다",
    ],
    answer: 2,
    explanation:
      "여러 호출의 결과는 한 user 메시지에 모아야 모델이 병렬 호출을 계속 쓴다. 실패한 호출도 빼면 안 되고 is_error로 돌려줘야 모델이 원인을 보고 다시 시도하거나 사용자에게 설명할 수 있다.",
    anchor: "도구를-부르는-루프는-서버가-돌린다",
  },
  {
    id: "llm-api-integration-6",
    post: "llm-api-integration",
    question:
      "구조화 출력에 JSON 스키마를 넘겼는데도 parsed_output이 비어 있는 응답이 왔다. 가장 먼저 확인할 것은?",
    choices: [
      "stop_reason이 max_tokens나 refusal인지 본다",
      "temperature가 너무 높은지 본다",
      "스키마에 required가 너무 많은지 본다",
      "API 키가 만료됐는지 본다",
    ],
    answer: 0,
    explanation:
      "구조화 출력은 형식을 제한하지만 출력 한도에 닿아 잘리거나 안전 정책으로 거절하면 끝까지 쓰지 못한다. 그래서 stop_reason부터 확인하고, 형식이 맞아도 내용 검증은 따로 남긴다. 키 문제라면 응답 자체가 401로 온다.",
    anchor: "답을-json으로-받아야-할-때",
  },
  {
    id: "llm-api-integration-7",
    post: "llm-api-integration",
    question:
      "스트리밍으로 답이 절반쯤 화면에 나간 뒤 스트림 안에 overloaded_error 이벤트가 왔다. 바람직한 처리는?",
    choices: [
      "SDK가 알아서 이어 붙여 주니 아무것도 하지 않는다",
      "조용히 같은 요청을 다시 보내 처음부터 받은 글로 화면을 덮어쓴다",
      "400대 오류이므로 요청을 고칠 때까지 막는다",
      "끊겼다는 표시와 다시 시도 버튼을 보여 주고, 성공 여부는 스트림 끝의 완료 신호로 판단한다",
    ],
    answer: 3,
    explanation:
      "첫 토큰 전의 실패는 다시 보내면 되지만, 글이 이미 나간 뒤에 조용히 재시도하면 같은 내용이 다른 문장으로 바뀌어 보인다. HTTP 상태가 200이어도 도중에 실패할 수 있으니 완료 신호로 판단하고 사용자에게 다시 시도를 묻는다.",
    anchor: "느리고-실패하는-api를-견디기",
  },
];
