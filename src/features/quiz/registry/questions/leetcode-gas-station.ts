import type { QuizQuestion } from "../types";

export const LEETCODE_GAS_STATION: QuizQuestion[] = [
  {
    id: "leetcode-gas-station-1",
    post: "leetcode-gas-station",
    question: "s에서 출발해 j번에서 처음 바닥났을 때, s와 j 사이 칸을 출발점 후보에서 빼도 되는 이유는?",
    choices: [
      "그 칸들은 gas가 cost보다 항상 작기 때문",
      "그 칸들에 s에서 온 차는 기름 0 이상으로 도착했는데, 새로 출발하면 0에서 시작해 같은 길을 더 적은 기름으로 가기 때문",
      "전체 합이 음수이기 때문",
      "원형이라 어차피 s로 돌아오기 때문",
    ],
    answer: 1,
    explanation:
      "s에서 온 차는 j 전까지 음수가 된 적이 없으니 사이 칸 t에 0 이상을 들고 도착한다. t에서 새로 출발하면 그보다 적거나 같은 기름으로 같은 길을 가서 j에서 역시 바닥난다. 사이 칸의 d가 모두 음수일 필요는 없다.",
    anchor: "실패한-구간은-통째로-건너뛴다",
  },
  {
    id: "leetcode-gas-station-2",
    post: "leetcode-gas-station",
    question: "gas = [3, 1, 3, 5, 4], cost = [2, 4, 5, 1, 2]에서 답은?",
    choices: ["0", "4", "3", "-1"],
    answer: 2,
    explanation:
      "d는 1, -3, -2, 4, 2이고 전체 합이 2라 답이 있다. 누적 합 1, -2, -4, 0, 2에서 가장 낮은 곳이 2번이니 바로 다음인 3번에서 출발한다. 4번에서 출발하면 2, 3, 0, -2로 2번을 지나다 바닥난다.",
    anchor: "누적-합이-가장-낮은-곳-다음에서-출발한다",
  },
  {
    id: "leetcode-gas-station-3",
    post: "leetcode-gas-station",
    question: "한 번 훑는 그리디에서 total 검사를 빼고 start만 돌려주면 gas = [2, 3, 4], cost = [3, 4, 3]에서 무엇이 나오나?",
    choices: ["-1", "0", "1", "2"],
    answer: 3,
    explanation:
      "d가 -1, -1, 1이라 0번과 1번에서 출발점이 옮겨지고 마지막 2번에서 tank가 1이 되어 2가 남는다. 하지만 전체 합이 -1이라 어디서 출발해도 한 바퀴를 못 돈다. 앞부분의 손해를 덮는지는 전체 합만 알려 준다.",
    anchor: "전체-합-검사를-빼먹는다",
  },
  {
    id: "leetcode-gas-station-4",
    post: "leetcode-gas-station",
    question: "그리디가 tank를 0으로 되돌리는 순간은 누적 합 관점에서 언제와 같은가?",
    choices: [
      "누적 합이 지금까지의 최저점보다 낮아지는 순간",
      "누적 합이 0이 되는 순간",
      "누적 합이 최댓값을 갱신하는 순간",
      "d가 음수인 칸을 지날 때마다",
    ],
    answer: 0,
    explanation:
      "tank는 마지막 출발점 직전의 누적 합을 기준으로 한 높이라, tank가 음수가 된다는 건 누적 합이 그 기준, 즉 지금까지의 최저점보다 낮아진다는 뜻이다. 그래서 그리디의 start는 언제나 최저점 다음 칸이다. d가 음수여도 tank가 남아 있으면 되돌리지 않는다.",
    anchor: "누적-합이-가장-낮은-곳-다음에서-출발한다",
  },
  {
    id: "leetcode-gas-station-5",
    post: "leetcode-gas-station",
    question: "gas = [4, 5, 1, 2], cost = [3, 2, 4, 3]에서 기름이 가장 많이 남는 1번에서 출발하면 어떻게 되나?",
    choices: [
      "한 바퀴를 돈다. 1번이 정답이다",
      "3번을 지나다 바닥난다. 정답은 0번이다",
      "어디서 출발해도 돌 수 없다",
      "2번을 지나다 바닥난다. 정답은 3번이다",
    ],
    answer: 1,
    explanation:
      "d는 1, 3, -3, -1이다. 1번에서 출발하면 3, 0, -1로 3번을 지나다 바닥난다. 0번에서 출발하면 1, 4, 1, 0으로 딱 맞게 돌아온다. 기준은 한 칸의 이득이 아니라 누적 합의 최저점이다.",
    anchor: "가장-많이-남는-주유소에서-출발한다",
  },
];
