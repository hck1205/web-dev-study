import type { QuizQuestion } from "../types";

export const COMPLEXITY_CLASSES_P_NP: QuizQuestion[] = [
  {
    id: "complexity-classes-p-np-1",
    post: "complexity-classes-p-np",
    question: "NP에 대한 설명으로 맞는 것은?",
    choices: [
      "다항 시간으로는 절대 풀 수 없는 문제의 모임이다",
      "P에 속하지 않는 문제만 모은 것이다",
      "'예'라는 답의 증거가 주어지면 다항 시간에 확인할 수 있는 결정 문제의 모임이다",
      "지수 시간 알고리즘만 알려진 최적화 문제의 모임이다",
    ],
    answer: 2,
    explanation:
      "NP는 Non-deterministic Polynomial의 줄임말이고 '다항이 아니다'라는 뜻이 아니다. 증거를 빨리 확인할 수 있으면 NP이고, P의 문제도 모두 NP에 들어간다.",
    anchor: "예-아니오로-묻는다",
  },
  {
    id: "complexity-classes-p-np-2",
    post: "complexity-classes-p-np",
    question: "내 문제 X가 NP-난해임을 보이려면 환원을 어느 방향으로 해야 하나?",
    choices: [
      "이미 NP-완전으로 알려진 문제를 X로 다항 시간에 환원한다",
      "X를 SAT로 다항 시간에 환원한다",
      "X를 P에 속하는 문제로 환원한다",
      "X와 SAT를 서로 아무 방향으로나 한 번 환원하면 된다",
    ],
    answer: 0,
    explanation:
      "A를 B로 환원하면 B를 빨리 풀 때 A도 빨리 풀리니 어려움은 B 쪽으로 전해진다. 그래서 알려진 어려운 문제를 X로 바꿔야 한다. X를 SAT로 바꾸는 건 X가 NP에 속한다는 쪽의 이야기다.",
    anchor: "문제를-다른-문제로-바꿔-푼다",
  },
  {
    id: "complexity-classes-p-np-3",
    post: "complexity-classes-p-np",
    question: "정지 문제가 NP-난해이지만 NP-완전이 아닌 이유는?",
    choices: [
      "정지 문제는 다항 시간에 풀리기 때문이다",
      "SAT를 정지 문제로 환원할 수 없기 때문이다",
      "정지 문제는 결정 문제가 아니기 때문이다",
      "정지 문제는 결정 불가능해서 NP에 속하지 않기 때문이다",
    ],
    answer: 3,
    explanation:
      "NP-완전은 NP-난해이면서 NP에도 속해야 한다. 정지 문제는 SAT가 환원되어 들어오니 NP-난해지만, 아예 풀 수 없어서 NP에 속하지 않는다. 예, 아니오로 답하는 결정 문제인 건 맞다.",
    anchor: "np-완전과-np-난해",
  },
  {
    id: "complexity-classes-p-np-4",
    post: "complexity-classes-p-np",
    question: "음수 간선이 없는 그래프에서 최단 경로는 다항 시간인데 최장(단순) 경로는 NP-난해인 핵심 이유는?",
    choices: [
      "최장 경로는 힙을 쓸 수 없기 때문이다",
      "최장 경로에서는 정점을 다시 지나지 않는다는 조건 때문에 지나온 정점 집합을 기억해야 하기 때문이다",
      "최장 경로는 간선 수가 더 많기 때문이다",
      "최장 경로는 방향 그래프에서만 정의되기 때문이다",
    ],
    answer: 1,
    explanation:
      "무게가 음수가 아니면 고리를 돌수록 길어지니 최단 경로는 저절로 단순 경로가 되어 정점마다 거리 하나만 기억하면 된다. 최장 경로는 고리를 돌면 길어지니 단순 경로 조건이 핵심 제약이 되고, 상태가 정점 집합 2^n가지로 폭발한다.",
    anchor: "최단-경로는-쉬운데-최장-경로는-어렵다",
  },
  {
    id: "complexity-classes-p-np-5",
    post: "complexity-classes-p-np",
    question: "작업 의존 그래프(사이클 없음)에서 가장 오래 걸리는 의존 사슬(임계 경로)을 구하는 데 걸리는 시간은?",
    choices: [
      "최장 경로라서 NP-난해이므로 지수 시간이 필요하다",
      "O(V³), 플로이드-워셜이 필요하다",
      "위상 정렬 순서로 채우면 O(V + E)다",
      "O(2^V · V), 비트마스크 DP가 필요하다",
    ],
    answer: 2,
    explanation:
      "DAG에는 고리가 없어서 정점이 겹칠 걱정이 없다. 위상 정렬 순서로 '여기까지 가장 긴 길'을 채우면 선형 시간이다. 최장 경로가 NP-난해인 건 일반 그래프 이야기다.",
    anchor: "최단-경로는-쉬운데-최장-경로는-어렵다",
  },
  {
    id: "complexity-classes-p-np-6",
    post: "complexity-classes-p-np",
    question: "코딩 테스트 문제에서 n ≤ 16이고 모든 정점을 한 번씩 방문하는 최소 비용을 묻는다. 가장 알맞은 판단은?",
    choices: [
      "NP-완전이므로 풀 수 없다고 답한다",
      "지수 풀이를 기대하는 신호이니 비트마스크 DP나 가지치기 백트래킹을 짠다",
      "다익스트라로 바로 풀린다",
      "탐욕적으로 가장 가까운 정점부터 방문하면 최적이다",
    ],
    answer: 1,
    explanation:
      "n이 20 이하면 출제자가 2^n 풀이를 기대한다는 뜻이다. Held-Karp는 n=20에서도 1초쯤이었다. 최근접 이웃은 본문 예제에서 최적보다 20% 길었으니 최적을 보장하지 않는다.",
    anchor: "면접에서-np-완전이라고-답해도-되는-순간",
  },
  {
    id: "complexity-classes-p-np-7",
    post: "complexity-classes-p-np",
    question: "거리가 삼각 부등식을 지키는 외판원 문제와 일반 외판원 문제의 근사 가능성에 대한 설명으로 맞는 것은?",
    choices: [
      "둘 다 크리스토피데스로 1.5배 이내가 보장된다",
      "둘 다 상수 배 근사가 불가능하다",
      "일반 외판원만 최소 신장 트리로 2배 근사가 된다",
      "삼각 부등식이 있으면 1.5배 근사가 있지만, 일반 외판원은 P ≠ NP인 한 상수 배 근사가 불가능하다",
    ],
    answer: 3,
    explanation:
      "최소 신장 트리 2배, 크리스토피데스 1.5배 근사는 삼각 부등식에 기대는 방법이다. 삼각 부등식이 깨지면 어떤 상수 배 근사도 다항 시간에 만들 수 없다는 게 알려져 있어서, 같은 이름의 문제라도 성질에 따라 근사 가능성이 갈린다.",
    anchor: "np-난해를-만났을-때-고르는-길",
  },
];
