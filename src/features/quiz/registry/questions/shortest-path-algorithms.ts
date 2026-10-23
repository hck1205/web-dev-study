import type { QuizQuestion } from "../types";

export const SHORTEST_PATH_ALGORITHMS: QuizQuestion[] = [
  {
    id: "shortest-path-algorithms-1",
    post: "shortest-path-algorithms",
    question: "목적지 T 하나까지의 거리만 필요할 때 다익스트라를 일찍 멈춰도 되는 시점은?",
    choices: [
      "T가 처음으로 힙에 들어갔을 때",
      "T의 이웃을 모두 완화했을 때",
      "T가 힙에서 꺼내졌을 때",
      "힙의 크기가 정점 수와 같아졌을 때",
    ],
    answer: 2,
    explanation:
      "다익스트라는 꺼낼 때 확정한다. 본문 예제에서 T는 10으로 먼저 들어갔다가 나중에 8로 고쳐졌으니, 넣을 때 멈췄다면 틀린 답을 냈을 것이다.",
    anchor: "가장-가까운-곳부터-확정한다",
  },
  {
    id: "shortest-path-algorithms-2",
    post: "shortest-path-algorithms",
    question: "decrease-key 없이 새 후보를 힙에 더 넣고 꺼낼 때 낡은 것을 버리는 방식에서 복잡도가 O((V + E) log V)로 유지되는 이유는?",
    choices: [
      "낡은 후보는 힙에 들어가지 않기 때문이다",
      "힙이 E개까지 커져도 log E가 2 log V 이하이기 때문이다",
      "낡은 후보는 힙의 맨 아래에만 쌓이기 때문이다",
      "정점마다 후보가 최대 두 개만 생기기 때문이다",
    ],
    answer: 1,
    explanation:
      "lazy deletion은 간선 하나마다 후보가 하나씩 들어갈 수 있어 힙이 E까지 커진다. 그래도 E는 V²을 넘지 않으니 log E는 2 log V 이하라 복잡도의 꼴은 그대로다.",
    anchor: "힙에-낡은-후보가-쌓여도-괜찮다",
  },
  {
    id: "shortest-path-algorithms-3",
    post: "shortest-path-algorithms",
    question: "확정한 정점을 다시 보지 않는 다익스트라에서 음수 간선 때문에 정점 A의 확정이 틀렸다. 어떤 일이 생기나?",
    choices: [
      "A의 값만 틀리고 나머지는 모두 맞는다",
      "알고리즘이 무한 루프에 빠진다",
      "음수 사이클이 있다고 알려 준다",
      "A를 거쳐 가는 뒤쪽 정점들의 거리도 함께 틀린다",
    ],
    answer: 3,
    explanation:
      "A의 거리를 근거로 이웃을 완화했으니 A를 거치는 정점은 모두 같은 만큼 틀린다. 본문 예제에서 A가 1이 아니라 2로 확정되자 C와 T도 1씩 틀렸다. 다익스트라에는 음수 사이클을 알려 주는 장치가 없다.",
    anchor: "음수-간선-하나가-확정을-깬다",
  },
  {
    id: "shortest-path-algorithms-4",
    post: "shortest-path-algorithms",
    question: "벨만-포드가 모든 간선 완화를 V-1번 반복하면 충분한 이유는?",
    choices: [
      "사이클이 없는 최단 경로는 간선을 많아야 V-1개 지나기 때문이다",
      "정점마다 한 번씩 확정하기 때문이다",
      "힙에서 V-1번만 꺼내기 때문이다",
      "간선을 무게 순으로 정렬해 두었기 때문이다",
    ],
    answer: 0,
    explanation:
      "한 바퀴 돌 때마다 최단 경로의 간선이 앞에서부터 적어도 하나씩 맞춰지고, 사이클 없는 경로의 간선은 V-1개 이하다. 벨만-포드는 확정이나 힙을 쓰지 않는다.",
    anchor: "모든-간선을-v-1번-다시-본다",
  },
  {
    id: "shortest-path-algorithms-5",
    post: "shortest-path-algorithms",
    question: "환율 차익을 벨만-포드로 찾을 때 환율 r마다 간선 무게를 -log r로 두는 이유는?",
    choices: [
      "로그를 쓰면 환율이 정수가 되기 때문이다",
      "음수 무게가 있어야 다익스트라를 쓸 수 있기 때문이다",
      "곱이 1보다 큰 고리가 무게 합이 음수인 고리, 즉 음수 사이클이 되기 때문이다",
      "환율이 클수록 무게가 커져야 하기 때문이다",
    ],
    answer: 2,
    explanation:
      "로그는 곱을 합으로 바꾸고, 부호를 뒤집으면 1보다 크다는 조건이 0보다 작다는 조건이 된다. 그래서 차익이 나는 고리는 음수 사이클이고 벨만-포드가 찾아낸다. 음수 무게가 있으면 다익스트라는 오히려 쓸 수 없다.",
    anchor: "고리를-돌수록-줄어드는-길-음수-사이클",
  },
  {
    id: "shortest-path-algorithms-6",
    post: "shortest-path-algorithms",
    question: "A*에서 휴리스틱 h에 3을 곱해 실제 남은 거리보다 크게 만들면 어떻게 되나?",
    choices: [
      "확정하는 정점이 늘어나고 답은 그대로다",
      "확정하는 정점은 줄 수 있지만 최단이 아닌 길을 고를 수 있다",
      "다익스트라와 똑같이 동작한다",
      "음수 간선이 있어도 맞는 답을 낸다",
    ],
    answer: 1,
    explanation:
      "허용성이 깨지면 최단 경로 보장이 사라진다. 본문의 정점 11개 그래프에서 3배로 부풀린 h는 넷만 확정했지만 295 대신 308짜리 길을 골랐다. h가 0일 때가 다익스트라다.",
    anchor: "목적지-쪽으로-기울이는-a",
  },
  {
    id: "shortest-path-algorithms-7",
    post: "shortest-path-algorithms",
    question: "플로이드-워셜의 세 겹 반복문에서 거쳐 가는 정점 k의 반복문을 안쪽으로 옮기면?",
    choices: [
      "결과는 같고 캐시 효율만 나빠진다",
      "음수 사이클을 더 잘 찾는다",
      "시간 복잡도가 O(V²)로 준다",
      "아직 다 채우지 않은 값을 근거로 계산해 틀린 답이 나올 수 있다",
    ],
    answer: 3,
    explanation:
      "플로이드-워셜은 거쳐도 되는 정점을 0번부터 k번까지 하나씩 늘려 가는 DP라 k가 맨 바깥이어야 한다. 순서를 바꾸면 그 단계의 표가 완성되기 전에 그 값을 쓰게 된다. 복잡도는 어느 쪽이든 O(V³)다.",
    anchor: "모든-쌍이-필요하면-플로이드-워셜",
  },
];
