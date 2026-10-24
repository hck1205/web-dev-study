import type { QuizQuestion } from "../types";

export const PROMPT_REASONING_TECHNIQUES: QuizQuestion[] = [
  {
    id: "prompt-reasoning-techniques-1",
    post: "prompt-reasoning-techniques",
    question:
      "구조화 출력으로 CoT를 받으려고 JSON 스키마에 answer 필드를 먼저, reasoning 필드를 나중에 두었다. 무엇이 문제인가?",
    choices: [
      "JSON 스키마는 필드 순서를 지원하지 않아 오류가 난다",
      "reasoning이 뒤에 있으면 출력 토큰이 더 많이 든다",
      "모델은 필드도 앞에서부터 쓰므로 풀이를 쓰기 전에 답을 정해 버려 CoT의 효과가 사라진다",
      "answer가 먼저 오면 숫자 타입 검사가 꺼진다",
    ],
    answer: 2,
    explanation:
      "모델은 토큰을 앞에서부터 고르고 되돌리지 않는다. answer를 먼저 쓰게 하면 풀이 없이 한 번에 답을 고른 뒤 그 답에 맞춘 풀이를 쓰게 된다. reasoning을 먼저 두어야 답을 고를 때 중간 결과가 컨텍스트에 있다.",
    anchor: "제로샷-cot와-퓨샷-cot",
  },
  {
    id: "prompt-reasoning-techniques-2",
    post: "prompt-reasoning-techniques",
    question:
      "샘플 하나의 정답 확률이 0.4이고, 틀릴 때는 늘 같은 오답이 나오는 문제가 있다. 자기 일관성(5번 다수결)을 쓰면?",
    choices: [
      "정답률이 오히려 떨어진다. 투표가 가장 흔한 오답을 굳힌다",
      "샘플이 많아질수록 항상 정답률이 1에 가까워진다",
      "정답률은 변하지 않는다",
      "temperature를 0으로 두면 투표 효과가 커진다",
    ],
    answer: 0,
    explanation:
      "자기 일관성은 가장 흔한 답을 고르는 방법이다. 오답이 한 값으로 몰려 0.6이면 5번 투표의 정답률은 약 0.3174로 떨어진다. 오답이 흩어지는 경우에만 투표가 정답을 끌어올린다.",
    anchor: "다섯-번-풀고-다수결로-고르기",
  },
  {
    id: "prompt-reasoning-techniques-3",
    post: "prompt-reasoning-techniques",
    question:
      "자기 일관성을 켰는데 다섯 샘플이 늘 똑같은 풀이와 답을 낸다. 가장 그럴듯한 원인은?",
    choices: [
      "투표기의 정규화가 잘못됐다",
      "temperature가 0이라 샘플마다 같은 토큰이 골라진다",
      "max_tokens가 너무 크다",
      "프롬프트 캐시 때문에 응답이 재사용됐다",
    ],
    answer: 1,
    explanation:
      "temperature가 0이면 매번 확률이 가장 높은 토큰을 골라 풀이가 거의 같아진다. 다양한 풀이를 얻어야 투표할 의미가 있으니 0.7 정도로 둔다. 프롬프트 캐시는 입력 처리 비용을 줄일 뿐 출력을 재사용하지 않는다.",
    anchor: "다섯-번-풀고-다수결로-고르기",
  },
  {
    id: "prompt-reasoning-techniques-4",
    post: "prompt-reasoning-techniques",
    question:
      "Tree of Thoughts가 일반적인 고객 질문 답변보다 24 게임 같은 퍼즐에 맞는 이유는?",
    choices: [
      "퍼즐은 답이 짧아서 출력 토큰이 적기 때문이다",
      "ToT는 퓨샷 예시가 있어야만 동작하기 때문이다",
      "퍼즐은 한 번의 호출로 끝나기 때문이다",
      "막다른 길이 있고 중간 상태의 가망을 평가할 수 있어서, 수십 번의 호출과 지연을 감수할 가치가 있기 때문이다",
    ],
    answer: 3,
    explanation:
      "ToT는 후보 생각을 만들고 평가해 가망 없는 가지를 버리는 탐색이라, 중간 상태를 평가할 수 있고 잘못 든 길이 치명적인 문제에서 효과가 크다. 대신 호출이 수십 번이고 단계마다 기다려야 해서 일반 질문에는 비싸다.",
    anchor: "생각의-가지를-펼쳐-보는-tree-of-thoughts",
  },
  {
    id: "prompt-reasoning-techniques-5",
    post: "prompt-reasoning-techniques",
    question:
      "사용자가 '작년 3분기 서울 지점 환불 규정 예외 건'처럼 아주 구체적으로 물어 관련 문서가 잘 검색되지 않는다. step-back을 어떻게 쓰면 좋은가?",
    choices: [
      "한 단계 일반적인 질문을 만들어 원래 질문과 함께 검색하고 결과를 합친다",
      "질문을 더 구체적으로 늘려 다시 검색한다",
      "검색을 빼고 모델에게 바로 답하게 한다",
      "같은 질문을 다섯 번 검색해 다수결한다",
    ],
    answer: 0,
    explanation:
      "step-back은 원리를 묻는 일반 질문을 먼저 만든다. 그 질문으로 검색하면 너무 구체적인 문장으로는 안 걸리던 규정 문서가 걸린다. 대가는 질문을 만드는 호출 하나와 그만큼의 지연이다.",
    anchor: "한-걸음-물러서서-묻기",
  },
  {
    id: "prompt-reasoning-techniques-6",
    post: "prompt-reasoning-techniques",
    question:
      "비추론 모델에서 쓰던 퓨샷 CoT 프롬프트를 추론 모델로 그대로 옮겼더니 느려지고 비싸졌는데 점수는 그대로였다. 먼저 해 볼 것은?",
    choices: [
      "퓨샷 예시를 두 배로 늘린다",
      "'한 단계씩 생각하라'를 더 강하게 반복한다",
      "temperature를 높여 생각을 다양하게 한다",
      "퓨샷 예시와 단계별 지시를 빼고, 생각 예산을 낮추거나 어려운 요청만 추론 모델로 보내도록 라우팅한다",
    ],
    answer: 3,
    explanation:
      "추론 모델은 스스로 긴 생각을 쓰므로 CoT 지시는 중복이고, 짧은 풀이 예시는 오히려 방해가 된다는 보고가 있다. 생각 토큰은 출력 요금으로 청구되니 일에 맞게 예산을 낮추고, 쉬운 요청은 작은 모델로 보낸다.",
    anchor: "스스로-생각하는-추론-모델이-나온-뒤",
  },
  {
    id: "prompt-reasoning-techniques-7",
    post: "prompt-reasoning-techniques",
    question:
      "모델이 쓴 CoT 풀이를 '모델이 이렇게 판단했다'는 감사 기록으로 남기려 한다. 이 계획의 문제는?",
    choices: [
      "풀이는 출력 토큰이라 저장할 수 없다",
      "풀이가 실제 판단 과정이라는 보장이 없다. 모델이 다른 요인에 영향받고도 풀이에는 그 이유를 쓰지 않는 경우가 보고됐다",
      "풀이는 항상 답과 반대되는 내용을 담는다",
      "감사 기록은 JSON이어야 하는데 풀이는 문자열이다",
    ],
    answer: 1,
    explanation:
      "Turpin 외 연구는 예시의 정답 위치를 한쪽으로 몰아 모델을 기울이면 답은 바뀌는데 풀이에는 그 이유가 나오지 않는 경우가 많다고 보고했다. 풀이는 그럴듯한 설명일 수 있으니 결정 근거는 코드와 규칙으로 남긴다.",
    anchor: "풀이가-진짜-이유라고-믿지는-않는다",
  },
];
