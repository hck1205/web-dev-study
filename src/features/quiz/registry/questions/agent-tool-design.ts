import type { QuizQuestion } from "../types";

export const AGENT_TOOL_DESIGN: QuizQuestion[] = [
  {
    id: "agent-tool-design-1",
    post: "agent-tool-design",
    question: "사용자가 주문 번호를 말했는데도 모델이 get_order 대신 search_orders를 자꾸 부른다. 가장 먼저 고칠 곳은?",
    choices: [
      "모델을 더 큰 것으로 바꾼다",
      "두 도구의 설명에 언제 쓰고 언제 대신 다른 도구를 쓰는지 서로를 언급해 적는다",
      "search_orders를 삭제한다",
      "temperature를 낮춘다",
    ],
    answer: 1,
    explanation:
      "모델은 도구를 이름과 설명으로만 안다. 비슷한 도구가 서로를 언급하지 않으면 고르기가 갈린다. 프롬프트에 규칙을 덧붙이거나 모델을 바꾸기 전에 설명부터 고치는 게 효과가 크다.",
    anchor: "이름과-설명은-고르는-기준을-담는다",
  },
  {
    id: "agent-tool-design-2",
    post: "agent-tool-design",
    question: "도구 입력 스키마에 사용자 ID 인자를 두지 않고 서버가 세션에서 정하는 이유는?",
    choices: [
      "JSON Schema가 문자열 ID를 지원하지 않아서",
      "토큰을 아끼려고",
      "모델이 넣게 하면 프롬프트 주입 한 줄로 남의 데이터를 조회할 수 있어서",
      "공급사가 사용자 ID를 자동으로 붙여 줘서",
    ],
    answer: 2,
    explanation:
      "권한을 정하는 값을 모델이 채우게 하면 모델을 속이는 입력 하나로 다른 사용자의 데이터에 닿는다. 사용자·테넌트 ID는 인증 세션에서 서버가 정하고, 스키마에는 모델이 정말 골라야 하는 값만 둔다.",
    anchor: "스키마는-고를-수-있는-값만-남긴다",
  },
  {
    id: "agent-tool-design-3",
    post: "agent-tool-design",
    question: "모델이 틀린 인자로 도구를 불렀을 때 'Error: 400'만 돌려주면 흔히 생기는 증상은?",
    choices: [
      "모델이 무엇이 틀렸는지 몰라 같은 인자로 다시 부르거나 포기한다",
      "모델이 스스로 스키마를 내려받아 고친다",
      "공급사가 자동으로 인자를 고쳐 준다",
      "루프가 즉시 성공으로 끝난다",
    ],
    answer: 0,
    explanation:
      "오류 메시지는 모델에게 주는 지시문이다. 받은 값, 허용되는 값, 고치는 방법을 한 번에 다 알려 줘야 다음 호출에서 고친다. 첫 오류만 알려 주면 왕복이 여러 번 생긴다.",
    anchor: "오류는-고치는-방법까지-돌려준다",
  },
  {
    id: "agent-tool-design-4",
    post: "agent-tool-design",
    question: "검색 결과 120건 중 20건만 잘라 돌려줄 때 결과에 총 건수와 안내를 함께 넣어야 하는 이유는?",
    choices: [
      "JSON 형식 규칙 때문에",
      "자른 사실을 모르면 모델이 20건이 전부라고 답하기 때문에",
      "캐시 적중률을 높이려고",
      "공급사 API가 total 필드를 요구해서",
    ],
    answer: 1,
    explanation:
      "결과를 줄이는 건 토큰과 지연을 아끼는 좋은 방법이지만, 잘렸다는 사실이 없으면 모델은 본 것이 전부라고 판단한다. 총 건수와 범위를 좁혀 다시 찾으라는 안내를 붙이면 잘못된 단정이 준다.",
    anchor: "결과는-모델이-읽을-만큼만-돌려준다",
  },
  {
    id: "agent-tool-design-5",
    post: "agent-tool-design",
    question: "환불 메일 발송 도구를 준비(초안)와 실행으로 나누고 실행에 초안 ID 기반 멱등성 키를 붙이는 주된 이유는?",
    choices: [
      "메일 본문을 더 짧게 만들려고",
      "모델이 메일 API 키를 직접 쓰게 하려고",
      "병렬 도구 호출을 켜려고",
      "승인 정책을 서버가 쥐고, 같은 요청이 두 번 와도 메일이 한 번만 나가게 하려고",
    ],
    answer: 3,
    explanation:
      "모델은 재시도나 착각으로 같은 호출을 두 번 낼 수 있다. 실행을 서버가 승인 기록을 확인한 뒤 하고, 초안 ID로 만든 멱등성 키를 쓰면 중복 발송이 막힌다. 모델이 승인받았다고 말해도 기록이 없으면 보내지 않는다.",
    anchor: "되돌릴-수-없는-도구는-두-단계로-나눈다",
  },
  {
    id: "agent-tool-design-6",
    post: "agent-tool-design",
    question: "Anthropic API로 짠 도구 루프를 OpenAI Chat Completions로 옮겼더니 인자 필드가 모두 undefined로 읽혔다. 가장 그럴듯한 원인은?",
    choices: [
      "OpenAI는 도구 인자를 보내지 않아서",
      "tool_choice를 auto로 두어서",
      "OpenAI는 인자를 JSON 문자열(arguments)로 주는데 파싱하지 않고 객체처럼 읽어서",
      "병렬 호출이 켜져 있어서",
    ],
    answer: 2,
    explanation:
      "Anthropic의 tool_use input은 객체지만 OpenAI의 function.arguments는 JSON 문자열이다. JSON.parse를 빼먹으면 문자열에서 필드를 찾아 조용히 undefined가 된다. 결과를 돌려주는 메시지 위치도 공급사마다 다르다.",
    anchor: "공급사마다-다른-도구-호출-형식",
  },
  {
    id: "agent-tool-design-7",
    post: "agent-tool-design",
    question: "여러 공급사를 위한 추상화 계층을 처음부터 크게 두는 것의 비용으로 알맞은 것은?",
    choices: [
      "공통분모로 수렴해 프롬프트 캐시 위치나 서버 측 도구 같은 공급사 고유 기능을 못 쓰거나 늦게 쓴다",
      "도구 실행기를 공급사마다 따로 짜야 한다",
      "대화 기록을 저장할 수 없다",
      "스키마 검사가 불가능해진다",
    ],
    answer: 0,
    explanation:
      "추상화는 가장 작은 공통분모만 다루기 쉬워서 한 공급사에만 있는 기능을 감춘다. 그래서 도구 정의·실행·검사·기록은 내부 형식으로 두고, 모델 호출은 한 모듈에 모았다가 두 번째 공급사가 필요할 때 어댑터로 바꾼다.",
    anchor: "추상화-계층을-둘까",
  },
];
