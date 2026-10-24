import type { QuizQuestion } from "../types";

export const LEETCODE_LARGEST_RECTANGLE_IN_HISTOGRAM: QuizQuestion[] = [
  {
    id: "leetcode-largest-rectangle-in-histogram-1",
    post: "leetcode-largest-rectangle-in-histogram",
    question: "막대마다 한 번씩만 \"이 막대 높이로 만든 가장 넓은 직사각형\"을 보면 답을 놓치지 않는 이유는?",
    choices: [
      "가장 높은 막대가 늘 답에 포함되기 때문이다",
      "어떤 직사각형이든 높이는 구간 안 가장 낮은 막대의 높이와 같고, 그 높이를 유지한 채 넓힐수록 넓이가 커지기 때문이다",
      "직사각형의 폭은 늘 1이기 때문이다",
      "막대가 정렬되어 있다고 가정하기 때문이다",
    ],
    answer: 1,
    explanation:
      "구간의 높이는 그 구간에서 가장 낮은 막대가 정한다. 그 막대보다 낮은 막대에 막힐 때까지 넓히면 같은 높이에서 가장 넓으니, 답은 막대마다 하나씩인 이 n개 후보 안에 있다. 예시의 답 9도 가장 높은 막대가 아닌 높이 3 막대에서 나온다.",
    anchor: "막대마다-양옆으로-넓혀-보기",
  },
  {
    id: "leetcode-largest-rectangle-in-histogram-2",
    post: "leetcode-largest-rectangle-in-histogram",
    question: "한 번 훑는 단조 스택에서 맨 위 막대를 꺼낼 때, 그 막대 직사각형의 왼쪽 벽은 어디인가?",
    choices: [
      "꺼낸 뒤 스택의 새 맨 위 막대(비었으면 -1)",
      "꺼낸 막대 자기 자신의 위치",
      "지금 보고 있는 막대 i",
      "배열의 0번 칸",
    ],
    answer: 0,
    explanation:
      "스택은 높이가 올라가는 순서라서 꺼낸 막대 바로 아래 칸이 왼쪽에서 처음으로 더 낮거나 같은 막대다. 그 사이 막대들은 더 높아서 이미 빠졌지만 직사각형에는 들어간다. 그래서 폭은 `i - left - 1`이고, 꺼낸 막대 위치에서 재면 왼쪽으로 넓어진 칸을 놓친다.",
    anchor: "꺼낼-때-넓이가-정해지는-한-번의-훑기",
  },
  {
    id: "leetcode-largest-rectangle-in-histogram-3",
    post: "leetcode-largest-rectangle-in-histogram",
    question: "끝에 높이 0인 보초를 두지 않고 `i < n`까지만 돌린 뒤 바로 답을 돌려주면 `[1, 2, 3, 4, 5]`의 결과는?",
    choices: ["9", "15", "5", "0"],
    answer: 3,
    explanation:
      "높이가 올라가기만 하니 더 낮은 막대가 한 번도 나오지 않아 꺼내는 일이 없다. 넓이를 꺼낼 때만 계산하므로 최대 넓이가 0으로 남는다. 보초 0이 있으면 남은 막대를 모두 꺼내 정답 9(높이 3 × 폭 3)가 나온다.",
    anchor: "보초와-폭-계산에서-틀린다",
  },
  {
    id: "leetcode-largest-rectangle-in-histogram-4",
    post: "leetcode-largest-rectangle-in-histogram",
    question: "가장 낮은 막대를 기준으로 나누는 분할 정복이 높이가 계속 올라가는 입력에서 느려지는 이유는?",
    choices: [
      "가장 낮은 막대를 찾는 데 O(log n)이 걸려서",
      "같은 구간을 두 번 계산해서",
      "가장 낮은 막대가 늘 맨 왼쪽이라 범위가 한 칸씩만 줄어 O(n²)이 되고 재귀 깊이도 n이 되어서",
      "넓이 곱셈이 오버플로를 일으켜서",
    ],
    answer: 2,
    explanation:
      "올라가는 입력에서는 매번 가장 낮은 막대가 범위의 맨 왼쪽이라, 나눠도 한쪽은 비고 다른 쪽은 한 칸만 줄어든다. 퀵 정렬이 정렬된 입력에서 느려지는 것과 같은 이유다. 깊이가 n이 되어 길이 10^5에서 JavaScript는 스택 오버플로가 났다.",
    anchor: "가장-낮은-막대로-반씩-나누기",
  },
  {
    id: "leetcode-largest-rectangle-in-histogram-5",
    post: "leetcode-largest-rectangle-in-histogram",
    question: "0과 1로 된 격자에서 1로만 된 가장 큰 직사각형(LeetCode 85)을 이 문제로 바꾸는 방법은?",
    choices: [
      "격자의 1을 모두 세어 히스토그램 하나를 만든다",
      "줄마다 그 줄을 바닥으로 위로 연속된 1의 개수를 막대 높이로 삼고, 줄마다 히스토그램 최대 넓이를 구한다",
      "열마다 1의 개수를 세어 히스토그램 하나를 만든다",
      "격자를 대각선으로 읽어 배열 하나로 만든다",
    ],
    answer: 1,
    explanation:
      "줄을 바닥으로 삼으면 위로 연속된 1의 개수가 그 열의 막대 높이가 되고, 0을 만나면 높이를 0으로 되돌린다. 줄마다 이 문제의 O(열) 함수를 돌리니 전체 O(행 × 열)이다. 열마다 1을 그냥 세면 연속이 아닌 1까지 섞여 틀린다.",
    anchor: "면접관이-이어서-묻는-것",
  },
];
