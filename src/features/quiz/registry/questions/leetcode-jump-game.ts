import type { QuizQuestion } from "../types";

export const LEETCODE_JUMP_GAME: QuizQuestion[] = [
  {
    id: "leetcode-jump-game-1",
    post: "leetcode-jump-game",
    question: "reach 하나만 기억해도 답이 맞는 이유는?",
    choices: [
      "배열에 음수가 없어서 reach가 줄어들지 않기 때문",
      "마지막 칸의 숫자를 쓰지 않기 때문",
      "닿을 수 있는 칸이 0번부터 reach번까지 빈틈없이 이어지기 때문",
      "0인 칸이 하나뿐이기 때문",
    ],
    answer: 2,
    explanation:
      "어떤 칸에서 최대 k칸 뛸 수 있으면 더 가까운 칸에도 모두 갈 수 있어서, 닿는 칸은 언제나 앞쪽으로 이어진 하나의 범위다. 그래서 가장 먼 칸 하나가 범위 전체를 대신한다. reach가 줄지 않는 건 max를 쓰기 때문이고, 그것만으로는 정당성이 설명되지 않는다.",
    anchor: "앞에서-닿을-수-있는-가장-먼-칸을-늘려-간다",
  },
  {
    id: "leetcode-jump-game-2",
    post: "leetcode-jump-game",
    question: "매번 가장 멀리 뛰는 탐욕이 [2, 3, 0, 0, 1]에서 내는 답과 정답은?",
    choices: [
      "false를 내지만 정답은 true",
      "true를 내고 정답도 true",
      "true를 내지만 정답은 false",
      "false를 내고 정답도 false",
    ],
    answer: 0,
    explanation:
      "0번에서 2칸 뛰면 0인 2번 칸에 빠져 false가 나온다. 하지만 1칸만 뛰어 1번 칸(3)으로 가면 4번까지 닿으니 정답은 true다. 한 칸을 고르지 말고 범위 안의 모든 칸이 보내는 가장 먼 곳을 봐야 한다.",
    anchor: "매번-가장-멀리-뛴다",
  },
  {
    id: "leetcode-jump-game-3",
    post: "leetcode-jump-game",
    question: "바텀업 DP에서 i번 칸을 정할 때 가장 가까운 good 칸 하나만 보면 되는 이유는?",
    choices: [
      "가장 먼 good 칸은 항상 마지막 칸이기 때문",
      "가장 가까운 good 칸에 닿지 못하면 더 먼 good 칸에도 닿지 못하기 때문",
      "good 칸은 언제나 하나뿐이기 때문",
      "뒤에서부터 채우면 모든 칸이 good이 되기 때문",
    ],
    answer: 1,
    explanation:
      "뛰는 거리는 최대치까지 아무 값이나 고를 수 있으니 먼 칸에 닿는다면 가까운 칸에도 닿는다. 그래서 가까운 good 칸 위치 하나가 표 전체를 대신하고, 이게 목표를 뒤에서 당기는 O(n) 그리디가 된다.",
    anchor: "가장-가까운-좋은-칸만-기억한다",
  },
  {
    id: "leetcode-jump-game-4",
    post: "leetcode-jump-game",
    question: "i > reach 검사를 빼고 reach만 갱신한 뒤 reach >= n - 1을 돌려주면 어떤 입력에서 틀리나?",
    choices: ["[1, 0]", "[0]", "[2, 0, 3, 0, 0, 1]", "[0, 1]"],
    answer: 3,
    explanation:
      "[0, 1]에서 0번 칸은 움직일 수 없는데, 갈 수 없는 1번 칸의 값까지 더해 reach가 2가 되고 true가 나온다. 올 수 없는 칸의 숫자는 쓰면 안 된다. [1, 0]과 [0]은 이 코드로도 맞게 나온다.",
    anchor: "범위-밖-칸을-검사하지-않는다",
  },
  {
    id: "leetcode-jump-game-5",
    post: "leetcode-jump-game",
    question: "메모이제이션 풀이를 길이 10^4인 모두 1 배열에 돌리면 생기기 쉬운 문제는?",
    choices: [
      "재귀 깊이가 배열 길이만큼 깊어져 스택이 넘친다",
      "메모 배열이 너무 커서 메모리가 모자란다",
      "답이 false로 잘못 나온다",
      "정수 넘침이 생긴다",
    ],
    answer: 0,
    explanation:
      "모두 1이면 0번에서 한 칸씩 재귀로 내려가 깊이가 n이 된다. Node 기본 설정에서는 8000칸에서 스택이 넘쳤고 Python은 기본 한도 1000에 걸린다. 메모 배열 자체는 n칸이라 작고, 답도 맞게 계산된다.",
    anchor: "한-번-알아낸-칸은-적어-둔다",
  },
];
