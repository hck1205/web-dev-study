import type { QuizQuestion } from "../types";

export const LLM_OBSERVABILITY: QuizQuestion[] = [
  {
    id: "llm-observability-1",
    post: "llm-observability",
    question: "에이전트 trace에서 도구 실행(execute_tool) span은 어디에 다는 것이 맞나?",
    choices: [
      "그 도구를 고른 모델 호출(chat) span의 자식으로 단다",
      "별도 trace로 분리해 trace ID를 속성으로만 연결한다",
      "에이전트(invoke_agent) span 아래에 모델 호출 span과 형제로 단다",
      "도구 span은 남기지 않고 모델 호출 span의 속성으로만 적는다",
    ],
    answer: 2,
    explanation:
      "도구는 모델이 아니라 앱이 실행하고, 모델 호출이 끝난 뒤에 실행된다. 그래서 에이전트 span 아래 형제로 둔다. 모델 호출의 자식으로 달면 모델 호출 시간이 도구 시간만큼 부풀어 보인다.",
    anchor: "붙이고-나서-자주-하는-실수",
  },
  {
    id: "llm-observability-2",
    post: "llm-observability",
    question:
      "Anthropic 응답의 usage.input_tokens 값을 그대로 gen_ai.usage.input_tokens에 옮겼다. GenAI 컨벤션 기준으로 어떤 문제가 생기나?",
    choices: [
      "문제없다. 두 값의 의미는 공급사와 무관하게 같다",
      "컨벤션은 캐시 토큰까지 포함한 전체 입력을 적으라고 하는데, 이 값은 캐시 읽기·쓰기 토큰이 빠져 있어 합계가 작게 나온다",
      "이 값에는 출력 토큰까지 들어 있어 두 번 세게 된다",
      "컨벤션은 입력 토큰을 문자 수로 적으라고 해서 단위가 틀린다",
    ],
    answer: 1,
    explanation:
      "Anthropic은 캐시 토큰을 cache_read_input_tokens, cache_creation_input_tokens로 따로 주고 input_tokens에서는 뺀다. OpenAI의 prompt_tokens는 캐시분을 포함한다. 공급사마다 의미가 달라 계측 코드에서 합계를 맞춰야 한다.",
    anchor: "genai-시맨틱-컨벤션-이름을-미리-맞춰-둔다",
  },
  {
    id: "llm-observability-3",
    post: "llm-observability",
    question:
      "'어제부터 환불 답이 이상하다'는 제보의 원인이 정책 문서 이전으로 도구 결과가 빈 배열이 된 것이었다. 이 장애가 HTTP 로그로는 안 보이고 trace로는 보인 이유는?",
    choices: [
      "도구 결과가 비어도 성공 응답이라 오류로 찍히지 않고, 도구 span에 남긴 결과 크기가 2바이트인 것으로만 드러나기 때문이다",
      "HTTP 로그는 모델 API 응답을 기록하지 않기 때문이다",
      "trace는 모델의 내부 확률값을 기록하기 때문이다",
      "HTTP 로그는 샘플링되고 trace는 항상 전부 남기 때문이다",
    ],
    answer: 0,
    explanation:
      "빈 결과는 오류가 아니라서 상태 코드와 응답 시간에는 아무 흔적이 없다. 도구 span에 결과 크기나 건수를 속성으로 남겨 두었기 때문에 변경 전후 trace를 비교해 찾을 수 있었다.",
    anchor: "프롬프트-버전과-설정을-태그로-남긴다",
  },
  {
    id: "llm-observability-4",
    post: "llm-observability",
    question: "프롬프트 버전 이름과 함께 프롬프트 본문의 해시도 span에 남기는 이유는?",
    choices: [
      "해시가 있어야 공급사가 프롬프트 캐시를 적용하기 때문이다",
      "본문 대신 해시만 남겨 개인정보를 완전히 지우기 위해서다",
      "해시로 프롬프트 원문을 복원할 수 있기 때문이다",
      "버전 번호를 올리지 않고 프롬프트를 고친 경우 같은 이름 아래 두 프롬프트가 섞인 것을 잡기 위해서다",
    ],
    answer: 3,
    explanation:
      "사람은 버전 번호를 올리는 걸 잊는다. 실제 본문의 해시가 같이 있으면 같은 버전 이름에 해시가 두 개인 걸 보고 바로 안다. 해시로 원문을 복원할 수는 없고, 캐시 적용과도 관계없다.",
    anchor: "프롬프트-버전과-설정을-태그로-남긴다",
  },
  {
    id: "llm-observability-5",
    post: "llm-observability",
    question:
      "전체 응답 시간 p95가 크게 올랐는데 첫 조각까지 걸린 시간(TTFT)은 그대로다. 가장 먼저 의심할 것은?",
    choices: [
      "모델 공급사의 서버가 느려졌다",
      "프롬프트 캐시가 깨졌다",
      "답이 길어졌다. 출력 토큰 수와 출력 토큰당 시간을 본다",
      "네트워크 지연이 늘었다",
    ],
    answer: 2,
    explanation:
      "공급사나 네트워크가 느려지면 보통 첫 조각까지의 시간도 같이 늘어난다. 전체 시간은 출력 길이에 거의 비례하므로, TTFT가 그대로면 출력 토큰이 늘었는지부터 본다.",
    anchor: "토큰-비용-지연은-지표로-본다",
  },
  {
    id: "llm-observability-6",
    post: "llm-observability",
    question: "Helicone 같은 프록시 방식만으로 LLM 관측을 할 때의 한계로 맞는 것은?",
    choices: [
      "모델 API 요청의 토큰 수를 알 수 없다",
      "모델 API로 가는 요청만 보여서 도구 실행·검색 같은 앱 안의 단계는 보이지 않고, 장애 지점이 하나 늘어난다",
      "SDK 코드를 전부 바꿔야 해서 붙이기 가장 어렵다",
      "OpenAI 호환 API에서는 쓸 수 없다",
    ],
    answer: 1,
    explanation:
      "프록시는 base URL만 바꾸면 되어 붙이기 가장 빠르지만 앱과 모델 API 사이만 본다. 그래서 도구 결과가 빈 장애 같은 건 못 잡고, 프록시가 멈추면 기능도 멈춘다.",
    anchor: "데이터를-모으는-세-가지-방식",
  },
  {
    id: "llm-observability-7",
    post: "llm-observability",
    question: "trace를 20%만 남기도록 샘플링하는 서비스에서 기능별 LLM 비용 지표를 만드는 올바른 방법은?",
    choices: [
      "남은 trace의 토큰 합에 5를 곱한다",
      "공급사 청구서가 나올 때까지 기다린다",
      "trace를 100% 남기도록 바꾼 뒤 trace에서 합산한다",
      "샘플링 전에 요청마다 토큰과 비용을 지표로 기록하고, 레이블은 기능·모델·프롬프트 버전 정도로 둔다",
    ],
    answer: 3,
    explanation:
      "샘플링한 trace로 합산하면 오류·피드백 trace를 일부러 더 남기는 정책 때문에도 숫자가 틀어진다. 비용은 샘플링 전에 지표로 계산하고, 사용자 ID 같은 높은 카디널리티 값은 레이블에서 뺀다.",
    anchor: "다-남길-수-없을-때-고르는-법",
  },
];
