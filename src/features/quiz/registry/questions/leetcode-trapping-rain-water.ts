import type { QuizQuestion } from "../types";

export const LEETCODE_TRAPPING_RAIN_WATER: QuizQuestion[] = [
  {
    id: "leetcode-trapping-rain-water-1",
    post: "leetcode-trapping-rain-water",
    question: "`[3, 0, 2, 0, 4, 1, 2]`에서 5번 칸(높이 1)에 고이는 물은 몇 칸이고, 그 이유는?",
    choices: [
      "3칸. 왼쪽 최고 벽 4까지 찬다",
      "0칸. 바로 옆 6번 벽이 높지 않다",
      "1칸. 왼쪽 최고 4와 오른쪽 최고 2 중 낮은 2까지 차고, 자기 높이 1을 뺀다",
      "2칸. 오른쪽 최고 벽 높이가 2다",
    ],
    answer: 2,
    explanation:
      "물 높이는 양쪽 최고 벽 중 낮은 쪽이 정한다. 오른쪽 최고가 2라서 2를 넘으면 오른쪽으로 넘친다. 2 − 1 = 1칸이고, 자기 높이를 빼는 걸 잊으면 2라고 답하게 된다.",
    anchor: "한-칸의-물은-양쪽-최고-벽이-정한다",
  },
  {
    id: "leetcode-trapping-rain-water-2",
    post: "leetcode-trapping-rain-water",
    question: "투 포인터 풀이에서 `height[l] < height[r]`이면 l 칸의 물을 leftMax로 확정해도 되는 이유는?",
    choices: [
      "l 오른쪽에 height[l]보다 높은 벽(height[r])이 있어, l의 물 높이는 왼쪽 최고로 정해지기 때문에",
      "leftMax가 항상 rightMax보다 크기 때문에",
      "height[r]이 배열에서 가장 높은 벽이기 때문에",
      "l 칸에는 물이 고이지 않기 때문에",
    ],
    answer: 0,
    explanation:
      "오른쪽 최고는 적어도 height[r]이고, 지금까지의 leftMax는 height[r]을 넘지 못한다. 그래서 min(왼쪽 최고, 오른쪽 최고)는 leftMax다. 오른쪽 최고의 정확한 값을 몰라도 된다는 게 핵심이고, height[r]이 전체 최고일 필요는 없다.",
    anchor: "낮은-쪽부터-물을-확정한다",
  },
  {
    id: "leetcode-trapping-rain-water-3",
    post: "leetcode-trapping-rain-water",
    question: "투 포인터에서 `total += leftMax - height[l]`을 `leftMax` 갱신보다 먼저 하면 어떻게 되나?",
    choices: [
      "결과는 같다. 순서는 상관없다",
      "자기 칸이 지금까지 가장 높을 때 음수가 더해져 답이 작아진다",
      "무한 루프에 빠진다",
      "물을 두 번 세어 답이 커진다",
    ],
    answer: 1,
    explanation:
      "갱신 전 leftMax에는 자기 칸이 들어 있지 않다. 자기 칸이 더 높으면 leftMax − height[l]이 음수가 된다. 예시에서 −2와 −3이 더해져 8 대신 3이 나왔다. 갱신 먼저, 더하기 나중이다.",
    anchor: "자주-틀리는-곳",
  },
  {
    id: "leetcode-trapping-rain-water-4",
    post: "leetcode-trapping-rain-water",
    question: "높이가 스트림으로 한 막대씩 들어올 때 그대로 쓸 수 있는 풀이는?",
    choices: [
      "양 끝 투 포인터",
      "가장 높은 벽으로 나눠 두 번 훑기",
      "누적 최댓값 배열 두 개",
      "단조 스택",
    ],
    answer: 3,
    explanation:
      "투 포인터와 두 번 훑기, 오른쪽 누적 최댓값은 모두 오른쪽 끝을 알아야 한다. 단조 스택은 왼쪽에서 오른쪽으로 한 번만 훑고, 더 높은 막대가 올 때 그 왼쪽 웅덩이를 확정하니 스트림에도 쓸 수 있다.",
    anchor: "면접관이-이어서-바꾸는-문제들",
  },
  {
    id: "leetcode-trapping-rain-water-5",
    post: "leetcode-trapping-rain-water",
    question: "단조 스택 풀이의 while 안에서 여러 번 pop하는데도 전체 시간이 O(n)인 이유는?",
    choices: [
      "while이 최대 두 번만 돌기 때문에",
      "스택 크기가 항상 상수이기 때문에",
      "각 인덱스가 스택에 한 번 들어가고 많아야 한 번 나오기 때문에",
      "물이 고이는 칸이 적기 때문에",
    ],
    answer: 2,
    explanation:
      "넣기는 정확히 n번이고, 꺼내기는 넣은 것보다 많을 수 없으니 많아야 n번이다. 한 번의 while이 길게 돌면 그만큼 나중에 꺼낼 것이 줄어든다. 스택 크기는 높이가 계속 낮아지는 입력에서 O(n)까지 커진다.",
    anchor: "웅덩이를-가로-층으로-잰다",
  },
];
