import type { QuizQuestion } from "../types";

export const LEETCODE_NETWORK_DELAY_TIME: QuizQuestion[] = [
  {
    id: "leetcode-network-delay-time-1",
    post: "leetcode-network-delay-time",
    question:
      "간선 1→2(2), 1→3(5), 2→3(1), 2→4(6), 3→4(2), 4→5(1), 3→5(7)에서 1번이 신호를 보낼 때, 처음 닿은 시간을 그대로 굳히는 BFS는 몇을 내나?",
    choices: ["6", "8", "10", "12"],
    answer: 3,
    explanation:
      "BFS는 1에서 바로 간 3을 5로 굳히고, 3에서 간 5도 5 + 7 = 12로 굳힌다. 실제 답은 2를 거친 3이 3, 4가 5, 5가 6이라 6이다. BFS가 최단 거리를 주는 건 간선 무게가 모두 같을 때뿐이다.",
    anchor: "틀리기-쉬운-곳",
  },
  {
    id: "leetcode-network-delay-time-2",
    post: "leetcode-network-delay-time",
    question: "다익스트라에서 힙에서 꺼낸 노드를 바로 확정해도 되는 근거는?",
    choices: [
      "힙이 노드 번호 순으로 정렬되어 있어서",
      "무게가 0 이상이라 남은 후보를 거쳐 돌아와도 지금 값보다 작아질 수 없어서",
      "각 노드는 힙에 한 번만 들어가서",
      "그래프에 사이클이 없다고 가정해서",
    ],
    answer: 1,
    explanation:
      "꺼낸 값보다 빠른 길이 있다면 힙에 남은 후보를 거쳐야 하는데, 남은 후보는 모두 지금 값 이상이고 0 이상의 무게를 더하면 줄지 않는다. 같은 노드가 힙에 여러 번 들어가는 건 흔한 일이고, 사이클이 있어도 다익스트라는 성립한다.",
    anchor: "가장-이른-노드부터-확정하는-다익스트라",
  },
  {
    id: "leetcode-network-delay-time-3",
    post: "leetcode-network-delay-time",
    question: "힙 다익스트라에서 낡은 후보를 버리는 조건을 t >= dist[u]로 쓰면 어떻게 되나?",
    choices: [
      "결과는 같고 조금 빨라진다",
      "음수 간선도 처리할 수 있게 된다",
      "유효한 후보도 t와 dist[u]가 같아서 모두 버려지고, 출발점에서 아무 데도 뻗지 못한다",
      "같은 노드를 두 번 확정해 답이 커진다",
    ],
    answer: 2,
    explanation:
      "후보를 넣을 때 dist[v]도 같은 값으로 바꾸므로 유효한 후보는 꺼낼 때 t와 dist[u]가 같다. 같을 때 버리면 출발점부터 버려진다. 버리는 조건은 엄격하게 큰 t > dist[u]다.",
    anchor: "틀리기-쉬운-곳",
  },
  {
    id: "leetcode-network-delay-time-4",
    post: "leetcode-network-delay-time",
    question: "힙 다익스트라 코드가 마지막에 dist를 다시 훑지 않고 마지막으로 확정한 시간을 답으로 내도 되는 이유는?",
    choices: [
      "다익스트라가 꺼내는 시간은 커지기만 해서 마지막 확정 시간이 최댓값이다",
      "마지막으로 꺼낸 노드가 항상 n번 노드라서",
      "힙에 마지막으로 남는 후보가 가장 큰 값이라서",
      "출발점에서 가장 먼 노드는 간선이 가장 많아서",
    ],
    answer: 0,
    explanation:
      "꺼낸 시간 t에 0 이상의 무게를 더한 후보만 새로 들어가니 다음에 확정할 시간은 t보다 작을 수 없다. 그래서 확정 순서가 곧 시간 순서다. 다만 확정한 노드 수가 n보다 작으면 닿지 못한 노드가 있으니 -1을 낸다.",
    anchor: "힙으로-다음-노드를-빨리-고른다",
  },
  {
    id: "leetcode-network-delay-time-5",
    post: "leetcode-network-delay-time",
    question: "벨만-포드가 간선 전체를 n - 1번만 훑으면 충분한 이유는?",
    choices: [
      "노드가 n개라 큐에 n - 1번만 들어가서",
      "한 바퀴마다 노드 하나씩 힙에서 확정되어서",
      "무게가 100 이하라서",
      "최단 경로는 같은 노드를 두 번 지나지 않아 간선이 많아야 n - 1개이고, 한 바퀴마다 앞쪽 간선이 하나 이상 확정되어서",
    ],
    answer: 3,
    explanation:
      "최단 경로는 단순 경로라 간선이 최대 n - 1개다. 한 바퀴 훑을 때마다 그 경로의 다음 간선이 확정되므로 n - 1바퀴면 끝난다. n번째 바퀴에도 값이 줄면 음수 사이클이 있다는 뜻이다.",
    anchor: "간선-전체를-n---1번-다시-보는-벨만-포드",
  },
];
