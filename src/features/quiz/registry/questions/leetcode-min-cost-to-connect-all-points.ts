import type { QuizQuestion } from "../types";

export const LEETCODE_MIN_COST_TO_CONNECT_ALL_POINTS: QuizQuestion[] = [
  {
    id: "leetcode-min-cost-to-connect-all-points-1",
    post: "leetcode-min-cost-to-connect-all-points",
    question: "점마다 가장 가까운 점과만 선을 이으면 어떤 문제가 생기나?",
    choices: [
      "같은 선을 두 번 세어 답이 커진다",
      "덩어리 사이를 잇는 다리를 아무도 고르지 않아 그래프가 갈라질 수 있다",
      "고리가 생겨 비용이 늘어난다",
      "맨해튼 거리에서는 가장 가까운 점이 정의되지 않는다",
    ],
    answer: 1,
    explanation:
      "덩어리 안의 점들은 서로가 가장 가까워서, 멀리 떨어진 덩어리로 가는 선은 어느 점의 가장 가까운 이웃도 아니다. 예시에서 선이 다섯 개 필요한데 네 개만 골라 합이 19로 답 25보다 작게 나왔다. 같은 선을 두 번 세는 건 집합으로 쉽게 막을 수 있다.",
    anchor: "가장-가까운-점끼리만-이으면-갈라진다",
  },
  {
    id: "leetcode-min-cost-to-connect-all-points-2",
    post: "leetcode-min-cost-to-connect-all-points",
    question: "이 문제(점 1,000개, 모든 쌍이 선)에서 배열 프림이 크루스칼보다 유리한 이유는?",
    choices: [
      "크루스칼은 맨해튼 거리에서 틀린 답을 내서",
      "배열 프림은 O(n log n)이라서",
      "선이 n²/2개라 크루스칼은 모두 만들어 정렬해야 하지만, 배열 프림은 점마다 가장 싼 값 하나만 들고 O(n²)에 끝나서",
      "크루스칼은 유니온 파인드 때문에 O(n³)이라서",
    ],
    answer: 2,
    explanation:
      "완전 그래프라 선이 49만 9,500개다. 크루스칼은 정렬로 O(n² log n), 공간 O(n²)이 들고, 배열 프림은 선을 저장하지 않고 O(n²) 시간과 O(n) 공간이면 된다. 둘 다 정답은 같고 실측으로 470ms와 8.4ms였다.",
    anchor: "점마다-가장-싼-값-하나만-기억한다",
  },
  {
    id: "leetcode-min-cost-to-connect-all-points-3",
    post: "leetcode-min-cost-to-connect-all-points",
    question: "배열 프림에서 best[v]를 고칠 때 best[u] + d로 쓰면 예시 점 6개에서 어떻게 되나?",
    choices: [
      "25 그대로다",
      "Infinity가 나온다",
      "20이 나온다",
      "경로 길이를 더해 48이 나온다",
    ],
    answer: 3,
    explanation:
      "best[u] + d는 다익스트라의 경로 길이라 0번에서 각 점까지의 거리를 더한 값이 된다. 프림의 best는 트리에서 그 점으로 가는 선 하나의 비용이어야 한다. 모양은 비슷해도 넣는 값이 다르면 만드는 트리가 달라진다.",
    anchor: "시작값과-best의-뜻에서-틀린다",
  },
  {
    id: "leetcode-min-cost-to-connect-all-points-4",
    post: "leetcode-min-cost-to-connect-all-points",
    question: "예시에서 트리가 0, 1, 3, 4까지 커졌을 때 다음으로 붙는 선은?",
    choices: [
      "3-5, 비용 6. 위쪽 두 점으로 건너는 선 중 가장 싸다",
      "5-2, 비용 5. 남은 선 중 가장 싸다",
      "1-2, 비용 8. 2번에 가장 가까운 트리 점이다",
      "0-4, 비용 8. 두 끝점이 가장 멀다",
    ],
    answer: 0,
    explanation:
      "프림은 트리 쪽과 바깥쪽을 잇는 선만 본다. 5-2는 5보다 싸지만 두 점이 다 바깥이라 아직 후보가 아니다. 바깥으로 건너는 선 중 3-5가 6으로 가장 싸고, 그다음에야 5-2가 건너는 선이 된다.",
    anchor: "점마다-가장-싼-값-하나만-기억한다",
  },
  {
    id: "leetcode-min-cost-to-connect-all-points-5",
    post: "leetcode-min-cost-to-connect-all-points",
    question: "점이 10만 개일 때 맨해튼 거리 MST를 빠르게 구하는 방법의 원리는?",
    choices: [
      "점을 x로 정렬하고 이웃한 점끼리만 잇는다",
      "점마다 45도 팔분면 여덟 조각에서 가장 가까운 점 하나씩만 후보로 두면 MST가 바뀌지 않아 선이 O(n)개로 준다",
      "무작위로 뽑은 선 n log n개로 크루스칼을 돌린다",
      "격자로 나눠 칸마다 따로 MST를 만들고 더한다",
    ],
    answer: 1,
    explanation:
      "같은 팔분면 안의 두 점 j, k에서 i에 더 가까운 j를 거치면 j-k가 i-k보다 길지 않아, i-k는 고리에서 가장 비싼 선이 되어 필요 없다. 그래서 후보 선이 4n개 이하로 줄고 정렬과 펜윅 트리로 O(n log n)에 만든다. x로 정렬해 이웃만 잇는 건 y 방향 거리를 무시해 틀린다.",
    anchor: "맨해튼-거리라면-후보-선을-on개로-줄인다",
  },
];
