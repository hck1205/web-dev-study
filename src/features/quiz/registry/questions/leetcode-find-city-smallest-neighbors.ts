import type { QuizQuestion } from "../types";

export const LEETCODE_FIND_CITY_SMALLEST_NEIGHBORS: QuizQuestion[] = [
  {
    id: "leetcode-find-city-smallest-neighbors-1",
    post: "leetcode-find-city-smallest-neighbors",
    question: "이 문제에서 도시마다 다익스트라를 돌리는 대신 플로이드-워셜을 기본으로 고르는 이유는?",
    choices: [
      "도시가 100개 이하라 O(n³)이 100만 번이고, 길이 꽉 차면 도시마다 다익스트라가 오히려 일이 많아서",
      "다익스트라는 양방향 길을 다룰 수 없어서",
      "플로이드-워셜이 모든 크기의 그래프에서 가장 빨라서",
      "거리가 1 이상이라 다익스트라가 틀려서",
    ],
    answer: 0,
    explanation:
      "모든 쌍의 거리가 필요하고 n이 100 이하라 O(n³)이 넉넉하다. 길이 n²에 가깝게 많으면 도시마다 힙 다익스트라를 돌리는 비용이 O(n³ log n)이 된다. 도시가 1만 개처럼 커지면 거꾸로 다익스트라가 낫다.",
    anchor: "거쳐-갈-도시를-하나씩-늘리는-플로이드-워셜",
  },
  {
    id: "leetcode-find-city-smallest-neighbors-2",
    post: "leetcode-find-city-smallest-neighbors",
    question: "길 0-1(3), 1-2(1), 1-3(4), 2-3(1), 3-4(3), 임계 거리 4일 때 답은?",
    choices: ["0", "1", "3", "4"],
    answer: 3,
    explanation:
      "이웃 수는 도시 0부터 2, 3, 4, 3, 2곳이다. 가장 적은 두 곳짜리가 0과 4이고, 동점이면 번호가 큰 도시를 고르니 4다. 1에서 3은 바로 가면 4지만 2를 거치면 2라는 점도 세는 데 영향을 준다.",
    anchor: "이웃-수를-세고-동점은-큰-번호로",
  },
  {
    id: "leetcode-find-city-smallest-neighbors-3",
    post: "leetcode-find-city-smallest-neighbors",
    question: "플로이드-워셜을 for i, for j, for k 순서로 짜면 왜 틀릴 수 있나?",
    choices: [
      "같은 칸을 두 번 갱신해서 거리가 너무 작아진다",
      "d[i][j]를 정하는 순간 아직 다 구하지 않은 d[i][k]나 d[k][j]를 읽어서 더 짧은 길을 놓친다",
      "시간이 O(n⁴)으로 늘어나서",
      "양방향 길의 한쪽만 갱신해서",
    ],
    answer: 1,
    explanation:
      "k가 바깥에 있어야 k번째 단계에서 0~k를 거치는 최단 거리가 표 전체에 완성된다. 안쪽에 두면 사슬 0 - 1 - 3 - 2에서 d[0][2]를 정할 때 d[0][3]이 아직 무한대라 거리 5를 끝내 찾지 못한다. 시간은 순서와 상관없이 O(n³)이다.",
    anchor: "동점-규칙과-반복-순서에서-틀린다",
  },
  {
    id: "leetcode-find-city-smallest-neighbors-4",
    post: "leetcode-find-city-smallest-neighbors",
    question: "0번 도시부터 차례로 보며 이웃 수가 가장 작은 도시를 고를 때 비교를 <로 쓰면 어떻게 되나?",
    choices: [
      "같은 값이 나와도 답이 바뀌지 않아 번호가 작은 도시가 남는다",
      "번호가 큰 도시가 남아 맞는다",
      "이웃이 0곳인 도시를 건너뛴다",
      "출발 도시 자신까지 세게 된다",
    ],
    answer: 0,
    explanation:
      "동점이면 번호가 큰 도시를 골라야 하는데, <는 같은 값에서 답을 바꾸지 않는다. 그래서 0번부터 보면 먼저 본 작은 번호가 남는다. <=로 쓰거나 큰 번호부터 거꾸로 보며 <를 쓴다.",
    anchor: "이웃-수를-세고-동점은-큰-번호로",
  },
  {
    id: "leetcode-find-city-smallest-neighbors-5",
    post: "leetcode-find-city-smallest-neighbors",
    question: "Java에서 플로이드-워셜 표의 무한대를 Integer.MAX_VALUE로 두면 생기는 문제는?",
    choices: [
      "표가 메모리를 너무 많이 쓴다",
      "도시 사이 거리가 모두 0으로 바뀐다",
      "d[i][k] + d[k][j]가 넘쳐 음수가 되고, 그 값이 더 짧은 거리로 표에 들어간다",
      "컴파일되지 않는다",
    ],
    answer: 2,
    explanation:
      "Integer.MAX_VALUE에 양수를 더하면 음수로 넘어가 비교에서 이긴다. 실제 최단 거리는 많아야 99 × 10^4라, 10억처럼 충분히 크면서 두 번 더해도 int를 넘지 않는 값을 무한대로 쓴다.",
    anchor: "python과-java로-쓰면",
  },
];
