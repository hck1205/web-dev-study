import type { QuizQuestion } from "../types";

export const AGENT_REASONING_PATTERNS: QuizQuestion[] = [
  {
    id: "agent-reasoning-patterns-1",
    post: "agent-reasoning-patterns",
    question: "주문 조회 → 주문마다 환불 확인 → 답장 쓰기처럼 단계가 정해진 일에 ReAct 에이전트를 붙이면 어떻게 되기 쉬운가?",
    choices: [
      "결과는 같은데 모델 호출 수와 지연만 늘어난다",
      "정확도가 크게 올라간다",
      "도구 호출이 필요 없어진다",
      "프롬프트 캐시를 쓸 수 없게 된다",
    ],
    answer: 0,
    explanation:
      "순서도를 그릴 수 있는 일은 모델이 매번 다음 단계를 고를 필요가 없다. 글의 환불 과제는 워크플로로 모델 호출 1번, ReAct로 6번이었고 결과는 같았다. 에이전트는 중간 결과를 봐야 다음을 알 수 있는 일에 쓴다.",
    anchor: "누가-다음-단계를-정하나",
  },
  {
    id: "agent-reasoning-patterns-2",
    post: "agent-reasoning-patterns",
    question: "ReAct 루프에서 단계가 늘어날수록 입력 토큰 합계가 단계 수보다 빠르게 느는 이유는?",
    choices: [
      "모델이 단계마다 도구 정의를 새로 만들어서",
      "출력 토큰이 입력으로 두 번 청구되어서",
      "매 호출마다 지금까지 쌓인 생각과 관찰 기록 전체를 다시 보내서",
      "도구 결과가 압축되지 않아서",
    ],
    answer: 2,
    explanation:
      "모델 API는 상태가 없으니 매 단계 지난 기록을 통째로 실어 보낸다. 단계 k의 입력에 앞선 k-1단계의 기록이 모두 들어가서 합계가 제곱에 가깝게 는다. 앞부분이 같으니 프롬프트 캐시가 잘 맞는 구조이기도 하다.",
    anchor: "생각-행동-관찰을-되풀이하는-루프",
  },
  {
    id: "agent-reasoning-patterns-3",
    post: "agent-reasoning-patterns",
    question: "최대 단계 수에 닿아 루프를 끊었더니 사용자에게 줄 답이 없었다. 알맞은 보완은?",
    choices: [
      "최대 단계 수를 없앤다",
      "도구 없이 모델을 한 번 더 불러 지금까지 알아낸 것과 못 한 일을 정리해 답하게 한다",
      "처음부터 다시 실행한다",
      "오류를 던져 사용자에게 다시 시도하라고 한다",
    ],
    answer: 1,
    explanation:
      "그냥 끊으면 이미 확인한 결과까지 버려진다. 도구를 주지 않고 한 번 더 부르면 모델은 답을 쓸 수밖에 없어 부분 결과를 살릴 수 있다. 상한을 없애면 끝나지 않는 루프를 막을 수 없다.",
    anchor: "루프를-멈추는-조건",
  },
  {
    id: "agent-reasoning-patterns-4",
    post: "agent-reasoning-patterns",
    question: "같은 호출 반복을 한 번도 허용하지 않게(maxSameCall: 1) 했더니 생긴 문제는?",
    choices: [
      "모델이 도구를 하나도 부르지 않았다",
      "토큰 예산이 초과되었다",
      "병렬 도구 호출이 꺼졌다",
      "타임아웃 뒤 정상적인 재시도까지 반복으로 판정되어 멈췄다",
    ],
    answer: 3,
    explanation:
      "반복 감지는 루프를 빨리 잡지만 너무 빡빡하면 맞는 재시도도 막는다. 성공한 같은 호출만 세거나, 일시적 실패의 재시도는 도구 실행기가 맡아 모델이 같은 호출을 다시 내지 않게 한다.",
    anchor: "루프를-멈추는-조건",
  },
  {
    id: "agent-reasoning-patterns-5",
    post: "agent-reasoning-patterns",
    question: "계획 2초, 조회 0.3초, 서로 독립인 확인 세 개(0.3초, 0.3초, 3.3초), 답장 2초인 DAG를 동시성 제한 없이 실행하면 전체 시간은?",
    choices: [
      "8.2초",
      "7.6초",
      "4.6초",
      "10.2초",
    ],
    answer: 1,
    explanation:
      "독립된 확인 세 개는 동시에 돌아가니 가장 느린 3.3초만 기다린다. 2 + 0.3 + 3.3 + 2 = 7.6초다. 확인을 하나씩 돌리면 8.2초가 된다.",
    anchor: "기다릴-필요-없는-단계는-동시에",
  },
  {
    id: "agent-reasoning-patterns-6",
    post: "agent-reasoning-patterns",
    question: "자기 비평 루프가 효과를 내기 쉬운 경우는?",
    choices: [
      "기준 없이 '더 좋게 고쳐 봐'라고 시킬 때",
      "비평 횟수에 상한을 두지 않을 때",
      "필수 항목 포함이나 테스트 통과처럼 확인할 기준이 분명할 때",
      "같은 모델에게 같은 프롬프트로 다시 답하게 할 때",
    ],
    answer: 2,
    explanation:
      "기준이 있으면 비평이 실제 오류를 잡고, 코드로 판정할 수 있으면 그 결과를 관찰로 주는 게 더 믿을 만하다. 기준 없는 비평은 같은 맹점을 놓치거나 멀쩡한 답을 바꾸기 쉽다.",
    anchor: "스스로-비평하게-하기",
  },
  {
    id: "agent-reasoning-patterns-7",
    post: "agent-reasoning-patterns",
    question: "오케스트레이터-워커 구조에서 워커에게 과제를 넘길 때 과제·사용자 ID·결과 형식을 글로 적어 넘겨야 하는 이유는?",
    choices: [
      "워커는 새 컨텍스트에서 시작해 오케스트레이터의 대화를 모르기 때문에",
      "워커가 더 큰 모델이라서",
      "워커는 도구를 쓸 수 없어서",
      "결과 형식을 정하지 않으면 API가 400을 돌려줘서",
    ],
    answer: 0,
    explanation:
      "워커는 중심 에이전트의 창을 공유하지 않는다. 빠뜨린 맥락은 워커가 다시 알아내거나 틀린다. 이 컨텍스트 공유 비용과 곱으로 느는 토큰 때문에 일이 정말 독립된 조각일 때만 나눈다.",
    anchor: "에이전트를-여럿으로-나눌-때",
  },
];
