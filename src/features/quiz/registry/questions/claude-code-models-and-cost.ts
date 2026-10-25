import type { QuizQuestion } from "../types";

export const CLAUDE_CODE_MODELS_AND_COST: QuizQuestion[] = [
  {
    id: "claude-code-models-and-cost-1",
    post: "claude-code-models-and-cost",
    question: "구독 사용자에게 \"You've hit your weekly limit\"가 떴다. /model로 Sonnet에서 Haiku로 바꾸면 어떻게 되나?",
    choices: [
      "Haiku는 별도 한도라서 바로 계속 일할 수 있다",
      "모든 모델이 함께 쓰는 창이라 바꿔도 풀리지 않는다",
      "Haiku로 바꾸면 주간 창이 즉시 초기화된다",
      "API 키로 자동 전환되어 토큰 단가로 청구된다",
    ],
    answer: 1,
    explanation:
      "session limit와 weekly limit는 모든 모델이 나눠 쓰는 창이라 모델을 바꿔도 같다. \"Opus limit\"처럼 모델 이름이 붙은 메시지일 때만 다른 계열로 바꾸면 계속할 수 있다. 넘어서 쓰려면 usage credits를 켜야 한다.",
    anchor: "구독과-api-키는-한도를-세는-단위가-다르다",
  },
  {
    id: "claude-code-models-and-cost-2",
    post: "claude-code-models-and-cost",
    question: "짧은 질문 두 개를 한 세션에서 했는데 /usage 금액의 90% 넘게가 한 칸에서 나왔다. 어느 칸일 가능성이 가장 큰가?",
    choices: [
      "출력 토큰",
      "캐시 읽기",
      "캐시 쓰기",
      "캐시를 거치지 않은 입력",
    ],
    answer: 2,
    explanation:
      "매 요청이 시스템 프롬프트와 도구 정의, 대화를 통째로 싣고, 처음 보낸 앞부분은 캐시에 새로 쓴다. 구독 본 대화의 1시간 캐시 쓰기는 입력 단가의 2배라 금액 대부분을 차지한다. 캐시 읽기는 0.05배라 양이 많아도 작다.",
    anchor: "토큰은-다섯-칸으로-나뉘어-청구된다",
  },
  {
    id: "claude-code-models-and-cost-3",
    post: "claude-code-models-and-cost",
    question: "Sonnet 5.5에 effort를 high로 주고 \"숫자만 답하라\"는 산수를 냈더니 생각 토큰 0으로 틀렸다. 가장 맞는 설명은?",
    choices: [
      "effort는 생각의 기준선만 옮기고, 생각할지는 모델이 단계마다 정한다",
      "high에서는 생각이 꺼지고 max에서만 켜진다",
      "-p 모드에서는 effort가 무시된다",
      "Sonnet 5.5는 생각을 끈 상태가 기본이다",
    ],
    answer: 0,
    explanation:
      "지금 모델은 적응형 추론을 써서 단계마다 생각할지 스스로 정하고, effort는 그 판단의 기준만 바꾼다. 실험에서는 단계별 계산을 적으라고 하자 맞혔다. 5.5 모델은 오히려 생각을 끌 수 없다.",
    anchor: "같은-문제를-세-모델에-풀려-봤다",
  },
  {
    id: "claude-code-models-and-cost-4",
    post: "claude-code-models-and-cost",
    question: "opusplan을 쓰는데 계획과 구현을 짧게 자주 오갔더니 비용이 예상보다 컸다. 왜 그런가?",
    choices: [
      "플랜 모드에서는 캐시를 아예 쓰지 않기 때문이다",
      "Opus가 구현 단계에서도 계속 돌기 때문이다",
      "플랜 모드 전환마다 1M 창이 200K로 줄기 때문이다",
      "플랜 모드 출입이 모델 전환이라 매번 대화 전체를 새 모델 캐시에 다시 쓰기 때문이다",
    ],
    answer: 3,
    explanation:
      "opusplan은 플랜 모드에서 Opus, 실행에서 Sonnet을 쓰고, 캐시는 모델마다 따로다. 그래서 오갈 때마다 앞부분 전체가 캐시 쓰기로 다시 청구된다. 한 번 길게 계획하고 오래 구현하는 작업에서 이득이 난다.",
    anchor: "model과-별칭-그리고-opusplan",
  },
  {
    id: "claude-code-models-and-cost-5",
    post: "claude-code-models-and-cost",
    question: "세션 도중 하면 다음 요청의 캐시가 깨지지 않는 행동은?",
    choices: [
      "/model로 모델 바꾸기",
      "프로젝트 루트 CLAUDE.md 수정",
      "MCP 서버 새로 연결",
      "구독 세션에서 두 시간 쉬었다 돌아오기",
    ],
    answer: 1,
    explanation:
      "루트 CLAUDE.md는 세션 시작 때 읽어 들고 있어서 고쳐도 캐시는 그대로다. 대신 고친 내용도 /clear나 재시작 전까지 반영되지 않는다. 모델 전환과 MCP 연결은 앞부분을 바꾸고, 1시간을 넘긴 휴식은 캐시를 식힌다.",
    anchor: "캐시를-깨는-행동-지키는-행동",
  },
  {
    id: "claude-code-models-and-cost-6",
    post: "claude-code-models-and-cost",
    question: "어려운 질문 때문에 /model opus로 올린 뒤, model 필드가 없는 커스텀 서브에이전트가 로그 요약을 맡았다. 이 서브에이전트는 어느 모델로 도나?",
    choices: [
      "Opus. 정의에 모델이 없으면 띄우는 순간의 메인 모델을 따른다",
      "Haiku. 서브에이전트의 기본값은 늘 Haiku다",
      "Sonnet. 서브에이전트는 계정 기본 모델로 고정된다",
      "CLAUDE_CODE_SUBAGENT_MODEL이 없으면 띄울 수 없다",
    ],
    answer: 0,
    explanation:
      "서브에이전트 모델은 호출 인자, 정의의 model, CLAUDE_CODE_SUBAGENT_MODEL, 메인 모델 순으로 정해진다. 아무것도 없으면 메인을 따르니 Opus로 돈다. 싸게 돌리려면 정의에 model: haiku를 적는다.",
    anchor: "서브에이전트에는-작은-모델을-붙인다",
  },
  {
    id: "claude-code-models-and-cost-7",
    post: "claude-code-models-and-cost",
    question: "CI에서 claude -p에 --max-budget-usd 0.01을 걸었는데 0.038달러를 쓰고 멈췄다. 왜인가?",
    choices: [
      "상한은 출력 토큰에만 적용되기 때문이다",
      "상한이 센트가 아니라 달러의 10분의 1 단위라서다",
      "응답을 받은 뒤 합계를 보고 다음 요청을 막는 방식이라 첫 요청 하나가 상한을 넘을 수 있다",
      "캐시 쓰기는 상한 계산에서 빠지기 때문이다",
    ],
    answer: 2,
    explanation:
      "상한은 요청을 보내기 전이 아니라 응답 뒤 누적 금액으로 판정한다. 캐시가 식은 첫 요청이 이미 1센트를 넘었고 두 번째 요청이 막혔다. 실패는 subtype이 error_max_budget_usd인지로 판정한다.",
    anchor: "상한은-어디에-거나",
  },
];
