import type { QuizQuestion } from "../types";

export const LEETCODE_PATH_WITH_MAXIMUM_PROBABILITY: QuizQuestion[] = [
  {
    id: "leetcode-path-with-maximum-probability-1",
    post: "leetcode-path-with-maximum-probability",
    question: "확률을 곱해 최댓값을 구하는 이 문제에서 다익스트라의 확정이 성립하는 근거는?",
    choices: [
      "간선이 양방향이라서",
      "확률이 1 이하라 길을 더 지날수록 곱이 커지지 않아서",
      "노드가 1만 개 이하라서",
      "두 노드 사이에 길이 하나뿐이라서",
    ],
    answer: 1,
    explanation:
      "지금 확률이 가장 높은 노드에 더 높은 확률로 가려면 그보다 낮은 노드를 거쳐야 하는데, 1 이하를 곱하면 커질 수 없다. 최단 경로에서 무게가 0 이상이라 더해도 줄지 않는 것과 같은 성질이다.",
    anchor: "확률이-가장-높은-노드부터-확정하는-다익스트라",
  },
  {
    id: "leetcode-path-with-maximum-probability-2",
    post: "leetcode-path-with-maximum-probability",
    question:
      "길 0-1(0.5), 0-2(0.75), 1-2(0.75), 1-4(0.5), 2-3(0.5), 3-4(0.5), 2-4(0.25)에서 0부터 4까지의 최대 성공 확률은?",
    choices: ["0.25", "0.1875", "0.28125", "0.375"],
    answer: 2,
    explanation:
      "0 → 2 → 1 → 4가 0.75 × 0.75 × 0.5 = 0.28125로 가장 크다. 1로 바로 가면 0.5지만 2를 거치면 0.5625라 더 안전하다. 0.25는 0 → 1 → 4, 0.1875는 2에서 4로 바로 가거나 3을 거치는 길이다.",
    anchor: "성공-확률을-곱해-가며-가장-안전한-길을-찾는다",
  },
  {
    id: "leetcode-path-with-maximum-probability-3",
    post: "leetcode-path-with-maximum-probability",
    question: "Python에서 heapq에 확률을 부호 그대로 넣고, 도착점을 꺼내면 바로 반환했다. 위 예시에서 무엇이 나오나?",
    choices: ["0.28125", "0", "0.1875", "0.25"],
    answer: 3,
    explanation:
      "heapq는 최소 힙이라 확률이 낮은 후보부터 꺼낸다. 0 → 1 → 4로 0.25가 적힌 4가 0.28125로 오르기 전에 먼저 꺼내져 그대로 반환된다. 확정 논리는 지금 가장 좋은 후보를 꺼낼 때만 성립하니 확률에 -를 붙여 넣어야 한다.",
    anchor: "최소-힙-습관과-한쪽-방향-간선에서-틀린다",
  },
  {
    id: "leetcode-path-with-maximum-probability-4",
    post: "leetcode-path-with-maximum-probability",
    question: "확률 대신 -log p를 무게로 쓰는 풀이에 대한 설명으로 맞는 것은?",
    choices: [
      "-log p는 음수가 될 수 있어 벨만-포드가 필요하다",
      "곱이 합으로 바뀌어 보통 다익스트라를 쓸 수 있고, 아주 많이 곱할 때의 언더플로를 피하지만 작은 반올림 오차가 붙는다",
      "확률을 직접 곱하는 것보다 항상 정확하다",
      "확률이 0인 길은 무게 0이 되어 가장 먼저 지나간다",
    ],
    answer: 1,
    explanation:
      "확률이 0과 1 사이라 -log p는 0 이상이고, 확률이 클수록 작아서 최단 거리 문제가 된다. 다만 로그와 지수를 오가며 예시에서도 0.28125000000000006처럼 오차가 붙는다. 확률 0인 길은 -log 0이 무한대라 지나갈 수 없는 길로 뺀다.",
    anchor: "로그를-씌우면-보통-최단-경로가-된다",
  },
  {
    id: "leetcode-path-with-maximum-probability-5",
    post: "leetcode-path-with-maximum-probability",
    question: "확률 대신 1보다 큰 값(환율 같은 비율)이 섞여 있으면 어떻게 해야 하나?",
    choices: [
      "최대 힙 다익스트라를 그대로 쓴다",
      "BFS로 바꾼다",
      "벨만-포드로 바꾸고, n번째 바퀴에도 값이 오르면 곱이 1보다 큰 고리가 있다고 본다",
      "플로이드-워셜만 쓸 수 있다",
    ],
    answer: 2,
    explanation:
      "곱할수록 커질 수 있으니 꺼낸 노드를 확정하는 다익스트라의 논리가 깨진다. 최단 경로에 음수 간선이 생긴 것과 같다. 벨만-포드는 이런 경우에도 성립하고, 곱이 1보다 큰 고리가 있으면 최댓값이 정의되지 않는다는 것까지 알려 준다.",
    anchor: "길-고르는-기준이-바뀌면",
  },
];
