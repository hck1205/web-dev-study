import type { QuizQuestion } from "../types";

export const LEETCODE_SINGLE_NUMBER: QuizQuestion[] = [
  {
    id: "leetcode-single-number-1",
    post: "leetcode-single-number",
    question: "배열 전체를 XOR하면 한 번만 나오는 수가 남는 이유로 가장 정확한 것은?",
    choices: [
      "XOR는 큰 수를 남기고 작은 수를 지우기 때문",
      "같은 수를 두 번 XOR하면 0이 되고, 0과 XOR하면 그대로이며, 순서를 바꿔도 결과가 같기 때문",
      "XOR는 배열을 정렬한 것과 같은 효과를 내기 때문",
      "XOR 결과가 항상 배열의 마지막 원소가 되기 때문",
    ],
    answer: 1,
    explanation:
      "순서를 바꿔도 결과가 같으니 짝끼리 모아 놓고 생각할 수 있고, 짝은 a ^ a = 0으로 지워진다. 남은 외톨이는 0과 섞여 그대로 나온다. 정렬이나 크기와는 상관이 없다.",
    anchor: "같은-수를-두-번-섞으면-사라진다",
  },
  {
    id: "leetcode-single-number-2",
    post: "leetcode-single-number",
    question: "해시맵으로 횟수를 세는 풀이가 이 문제의 조건을 못 지키는 이유는?",
    choices: [
      "시간이 O(n log n)이라서",
      "음수를 키로 쓸 수 없어서",
      "서로 다른 수만큼 메모리를 써서 추가 공간이 O(n)이기 때문",
      "외톨이가 맨 끝에 있으면 찾지 못해서",
    ],
    answer: 2,
    explanation:
      "문제는 선형 시간과 상수 공간을 요구한다. 해시맵 풀이는 시간은 평균 O(n)으로 맞지만 서로 다른 수 약 n/2개를 저장하니 공간이 O(n)이다. 음수 키도 아무 문제 없다.",
    anchor: "장부에-횟수를-적어-두기",
  },
  {
    id: "leetcode-single-number-3",
    post: "leetcode-single-number",
    question: "`let acc = nums[0]; for (const x of nums) acc ^= x;`에 [5, 3, 8, 3, 5]를 넣으면 무엇이 나오나?",
    choices: ["8", "0", "5", "13"],
    answer: 3,
    explanation:
      "첫 원소 5를 초기값으로 잡고 반복에서 다시 섞으니 그 5는 지워지고, 마지막 5가 짝 없이 남는다. 그래서 8 ^ 5 = 13이 나온다. 0에서 시작하거나 1번 칸부터 돌아야 한다.",
    anchor: "초기값을-첫-원소로-잡고-처음부터-돌기",
  },
  {
    id: "leetcode-single-number-4",
    post: "leetcode-single-number",
    question: "[4, 4, 4, 9, 9]처럼 4가 세 번, 9가 두 번 나오는 배열을 전부 XOR하면?",
    choices: [
      "4. 짝수 번 나온 9는 지워지고 홀수 번 나온 4가 남는다",
      "0. 모든 수가 두 번 이상 나왔으니 다 지워진다",
      "9. 두 번 나온 수가 남는다",
      "에러가 난다",
    ],
    answer: 0,
    explanation:
      "XOR는 자리마다 홀짝을 세는 것과 같아서 짝수 번 나온 수만 지운다. 4는 세 번이라 한 번 남는다. 그래서 정확히 두 번이 아니라 짝수 번이면 되고, 반대로 세 번씩 나오는 문제에는 XOR를 그대로 못 쓴다.",
    anchor: "두-번이-아니라-짝수-번이어도-된다",
  },
  {
    id: "leetcode-single-number-5",
    post: "leetcode-single-number",
    question: "외톨이가 둘인 변형(LeetCode 260)에서 전체 XOR 값의 가장 낮은 1 비트를 쓰는 이유는?",
    choices: [
      "그 비트가 두 외톨이 중 큰 수를 가리키기 때문",
      "배열을 정렬하지 않고 이진 탐색을 하기 위해서",
      "두 외톨이가 그 자리에서 서로 달라서, 그 비트로 나누면 둘이 다른 무리로 가기 때문",
      "XOR 값이 2의 거듭제곱이 되도록 만들기 위해서",
    ],
    answer: 2,
    explanation:
      "전체 XOR는 두 외톨이의 XOR이고, 켜진 비트는 두 수가 다른 자리다. 그 비트가 켜졌는지로 나누면 두 외톨이는 갈라지고 짝은 같은 무리에 함께 들어간다. 무리마다 XOR하면 하나씩 남는다.",
    anchor: "외톨이가-둘이라면",
  },
];
