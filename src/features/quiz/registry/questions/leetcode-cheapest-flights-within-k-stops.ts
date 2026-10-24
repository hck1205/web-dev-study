import type { QuizQuestion } from "../types";

export const LEETCODE_CHEAPEST_FLIGHTS_WITHIN_K_STOPS: QuizQuestion[] = [
  {
    id: "leetcode-cheapest-flights-within-k-stops-1",
    post: "leetcode-cheapest-flights-within-k-stops",
    question:
      "표가 0→1(100), 1→2(100), 2→4(100), 0→3(500), 3→4(100), 0→4(900)이고 0에서 4로 갈 때, k = 1이면 답은?",
    choices: ["300", "600", "900", "-1"],
    answer: 1,
    explanation:
      "k = 1이면 한 도시만 들를 수 있으니 비행은 두 번까지다. 300짜리 길은 1과 2를 들러 비행이 세 번이라 못 쓰고, 3을 거치는 500 + 100 = 600이 답이다. 직항 900보다 싸다.",
    anchor: "갈아타기-횟수가-정해진-가장-싼-표",
  },
  {
    id: "leetcode-cheapest-flights-within-k-stops-2",
    post: "leetcode-cheapest-flights-within-k-stops",
    question: "벨만-포드 풀이에서 바퀴마다 dist를 복사해 지난 바퀴 값만 읽는 이유는?",
    choices: [
      "음수 사이클을 찾기 위해서",
      "배열을 복사하면 캐시에 유리해서",
      "같은 바퀴에서 방금 고친 값을 읽으면 한 바퀴에 비행을 여러 번 탄 셈이 되어 k 제한이 깨져서",
      "Java에서 오버플로를 막기 위해서",
    ],
    answer: 2,
    explanation:
      "바퀴 수가 곧 비행 횟수여야 k + 1바퀴에서 멈추는 게 의미가 있다. 제자리에서 고치면 예시에서 k = 0인데 0→1→2→4를 한 바퀴에 타서 300이 나온다. 표 순서에 따라 맞을 때도 있어서 잘 안 잡히는 버그다.",
    anchor: "제자리-갱신과-바퀴-수에서-틀린다",
  },
  {
    id: "leetcode-cheapest-flights-within-k-stops-3",
    post: "leetcode-cheapest-flights-within-k-stops",
    question:
      "0→1(100), 1→2(100), 0→2(500), 2→3(100), k = 1에서 도시를 한 번만 꺼내는 다익스트라(비행 수는 들고 다님)는 무엇을 내나?",
    choices: ["-1", "300", "600", "700"],
    answer: 0,
    explanation:
      "2를 1을 거쳐 200(비행 2번)에 먼저 꺼내 처리 완료로 표시하는데, 거기서 3으로 가면 비행이 3번이라 못 간다. 나중에 직항으로 온 2(500, 비행 1번)는 이미 처리됐다고 버려져 -1이 된다. 답은 0→2→3의 600이다.",
    anchor: "다익스트라를-그대로-쓰면-틀리는-곳",
  },
  {
    id: "leetcode-cheapest-flights-within-k-stops-4",
    post: "leetcode-cheapest-flights-within-k-stops",
    question: "횟수를 든 다익스트라에서 이미 꺼낸 도시를 다시 펼쳐야 하는 경우는?",
    choices: [
      "더 싼 비용으로 다시 꺼냈을 때",
      "이전보다 적은 비행 수로 다시 꺼냈을 때",
      "같은 비행 수로 다시 꺼냈을 때",
      "목적지와 가까운 도시일 때",
    ],
    answer: 1,
    explanation:
      "힙에서 나중에 꺼낸 것은 비용이 같거나 비싸다. 그래도 비행을 덜 탔다면 남은 횟수로 더 멀리 갈 수 있어 쓸모가 있다. 비행 수까지 같거나 많으면 나을 게 없으니 버린다.",
    anchor: "비행-횟수까지-들고-다니는-다익스트라",
  },
  {
    id: "leetcode-cheapest-flights-within-k-stops-5",
    post: "leetcode-cheapest-flights-within-k-stops",
    question: "목적지에 닿을 수 없는 그래프에서 가지치기 DFS가 특히 느린 이유는?",
    choices: [
      "방문 표시를 해서 같은 도시를 못 지나서",
      "재귀 깊이가 n을 넘어서",
      "음수 값 때문에 끝나지 않아서",
      "비교할 답이 없어 비용 가지치기가 일어나지 않고, k + 1번 안에 걸을 수 있는 길을 전부 걷기 때문에",
    ],
    answer: 3,
    explanation:
      "가지치기는 이미 찾은 답보다 비싸질 때 일어나는데, 답이 없으면 그 기준이 없다. 그래서 도시마다 나가는 표 수의 k + 1제곱만큼 길을 걷는다. 100도시 그래프에서 k = 4일 때 호출이 2억 9천만 번, 3.5초였다.",
    anchor: "비행-횟수를-세며-길을-전부-따라가는-dfs",
  },
];
