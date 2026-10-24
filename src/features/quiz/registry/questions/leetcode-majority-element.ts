import type { QuizQuestion } from "../types";

export const LEETCODE_MAJORITY_ELEMENT: QuizQuestion[] = [
  {
    id: "leetcode-majority-element-1",
    post: "leetcode-majority-element",
    question: "보이어-무어 투표에서 끝까지 남은 후보가 과반수라고 말할 수 있는 이유는?",
    choices: [
      "후보는 항상 배열의 마지막 값이기 때문",
      "표를 빼는 건 서로 다른 두 수를 짝지어 지우는 것이라, 과반수는 다른 수를 모두 짝지어 지워도 남기 때문",
      "표가 가장 클 때의 후보를 기억해 두기 때문",
      "배열을 정렬한 것과 같은 효과가 나기 때문",
    ],
    answer: 1,
    explanation:
      "과반수 m이 아닌 수를 전부 m과 짝지어 지워도 m은 절반을 넘으니 남는다. m이 아닌 수끼리 지워지면 m은 더 많이 남는다. 그래서 어떤 순서로 짝지어도 마지막 후보는 m이고, 최대 표를 기억하거나 정렬할 필요가 없다.",
    anchor: "서로-다른-둘을-짝지어-지운다",
  },
  {
    id: "leetcode-majority-element-2",
    post: "leetcode-majority-element",
    question: "과반수가 없는 `[2, 2, 1, 1, 3]`에 보이어-무어 투표를 그대로 돌리면 무엇이 나오나?",
    choices: ["2", "1", "null", "3"],
    answer: 3,
    explanation:
      "앞 네 칸에서 2 둘과 1 둘이 서로 지워져 표가 0이 되고, 마지막 3이 후보가 된다. 3은 한 번 나왔을 뿐이니 의미 없는 답이다. 보장이 없으면 후보를 얻은 뒤 한 번 더 훑어 실제 개수를 확인한다.",
    anchor: "틀리기-쉬운-자리",
  },
  {
    id: "leetcode-majority-element-3",
    post: "leetcode-majority-element",
    question: "정렬 후 가운데 칸 `a[Math.floor(n / 2)]`를 돌려주는 풀이가 비교자 없는 `sort()`로도 이 문제에서는 맞는 이유는?",
    choices: [
      "JavaScript의 sort는 숫자를 항상 크기 순으로 정렬하기 때문",
      "과반수는 항상 가장 작은 값이기 때문",
      "문자열 순서라도 같은 값끼리는 모이고, 길이가 n / 2를 넘는 덩어리는 어디에 놓여도 가운데를 덮기 때문",
      "가운데 칸은 정렬과 상관없이 항상 같기 때문",
    ],
    answer: 2,
    explanation:
      "이 풀이에 필요한 건 같은 값이 한 덩어리로 모인다는 성질뿐이다. 비교자 없는 sort는 크기 순서는 틀리지만 같은 값은 여전히 붙여 놓는다. 그래도 다른 문제에서는 바로 틀리니 비교자를 넘기는 습관을 유지한다.",
    anchor: "정렬하면-가운데에-있다",
  },
  {
    id: "leetcode-majority-element-4",
    post: "leetcode-majority-element",
    question: "n / 3번보다 많이 나오는 수를 모두 찾는 변형(LeetCode 229)에서 후보를 두 개만 들어도 되는 이유는?",
    choices: [
      "n / 3을 넘는 수가 세 개라면 합이 n을 넘어서, 그런 수는 많아야 두 개이기 때문",
      "세 번째 후보는 항상 첫 번째 후보와 같기 때문",
      "후보가 셋이면 메모리가 O(n)이 되기 때문",
      "보이어-무어는 후보를 두 개까지만 지원하기 때문",
    ],
    answer: 0,
    explanation:
      "각각 n / 3보다 많은 수가 셋이면 개수 합이 n보다 커져 불가능하다. 그래서 후보와 표를 두 쌍 들고 서로 다른 세 수를 한 묶음으로 지운다. 이 변형은 보장이 없으니 마지막에 두 후보를 실제로 센다.",
    anchor: "조건이-바뀌면",
  },
  {
    id: "leetcode-majority-element-5",
    post: "leetcode-majority-element",
    question: "무작위로 칸을 골라 세어 보는 풀이의 기대 시간이 O(n)인 이유와 약점은?",
    choices: [
      "한 번에 반드시 맞혀서 O(n)이고, 약점은 없다",
      "한 번 고를 때 맞을 확률이 절반을 넘어 기대 시도 횟수가 2보다 작고, 약점은 최악 시간에 상한이 없다는 것",
      "정렬을 하지 않아서 O(n)이고, 약점은 음수를 다루지 못하는 것",
      "해시맵을 쓰기 때문에 O(n)이고, 약점은 메모리다",
    ],
    answer: 1,
    explanation:
      "과반수가 절반을 넘게 차지하니 아무 칸이나 골라도 맞을 확률이 1/2보다 크고, 맞을 때까지의 기대 시도는 2번 미만이다. 시도마다 O(n)으로 세니 기대 O(n)이다. 하지만 계속 틀린 수를 고를 수 있어 최악에 상한이 없고, 과반수가 없으면 끝나지 않는다.",
    anchor: "아무거나-집어-확인하기",
  },
];
