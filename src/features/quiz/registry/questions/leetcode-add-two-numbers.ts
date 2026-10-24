import type { QuizQuestion } from "../types";

export const LEETCODE_ADD_TWO_NUMBERS: QuizQuestion[] = [
  {
    id: "leetcode-add-two-numbers-1",
    post: "leetcode-add-two-numbers",
    question: "자바스크립트에서 두 리스트를 Number로 바꿔 더하는 풀이가 틀리는 이유는?",
    choices: [
      "리스트가 거꾸로 적혀 있어서 순서를 맞출 수 없어서",
      "수가 100자리까지 나오는데 Number는 2^53을 넘는 정수를 정확히 담지 못해서",
      "Number로 바꾸는 데 O(n²)이 걸려서",
      "0을 Number로 바꿀 수 없어서",
    ],
    answer: 1,
    explanation:
      "Number는 64비트 부동소수점이라 약 16자리를 넘는 정수는 아래 자리가 뭉개진다. 30자리 수에 465를 더하면 엉뚱한 자리가 나온다. Java long도 19자리를 넘으면 넘친다.",
    anchor: "리스트를-숫자로-바꿔-더하기",
  },
  {
    id: "leetcode-add-two-numbers-2",
    post: "leetcode-add-two-numbers",
    question: "반복 조건을 `while (l1 || l2)`로 쓰고 carry를 빼먹었다. `[5] + [5]`의 결과는?",
    choices: ["`[0, 1]`", "`[1, 0]`", "`[0]`", "`[10]`"],
    answer: 2,
    explanation:
      "두 리스트가 끝나는 순간 반복을 멈춰서 남은 올림 1을 버린다. 그래서 10이 아니라 0이 된다. 조건에 carry를 넣으면 한 바퀴 더 돌아 1을 붙인다.",
    anchor: "반복-조건에서-carry를-빼면",
  },
  {
    id: "leetcode-add-two-numbers-3",
    post: "leetcode-add-two-numbers",
    question: "한 자리를 더할 때 올림이 언제나 0 아니면 1인 이유는?",
    choices: [
      "합이 많아야 9 + 9 + 1 = 19라서",
      "리스트 길이가 100 이하라서",
      "Math.floor가 1보다 큰 값을 버려서",
      "두 리스트 길이가 같아서",
    ],
    answer: 0,
    explanation:
      "두 자리 숫자는 각각 9 이하이고 받은 올림이 1 이하면 합은 19를 넘지 않는다. 그러니 다음 올림도 1 이하다. 세 수를 더하거나 곱셈이라면 올림이 더 커질 수 있다.",
    anchor: "세로-덧셈을-그대로-따라가면",
  },
  {
    id: "leetcode-add-two-numbers-4",
    post: "leetcode-add-two-numbers",
    question: "`while (l1 && l2)`로 돌고 끝에 남은 올림만 붙였다. `[2,4,9] + [5,6,4,9]`의 결과는?",
    choices: [
      "`[7, 0, 4, 0, 1]`로 정답이다",
      "`[7, 0, 4]`",
      "`[7, 0, 4, 9]`",
      "`[7, 0, 4, 1]`",
    ],
    answer: 3,
    explanation:
      "짧은 l1이 끝나는 순간 반복을 빠져나와 l2의 마지막 자리 9를 버린다. 남아 있던 올림 1만 붙어서 1407로 읽히는 리스트가 된다. 끝난 쪽을 0으로 보고 계속 돌아야 한다.",
    anchor: "둘-다-남아-있을-때만-돌면",
  },
  {
    id: "leetcode-add-two-numbers-5",
    post: "leetcode-add-two-numbers",
    question: "자릿수가 큰 자리부터 적힌 Add Two Numbers II를 입력을 바꾸지 않고 풀 때 쓰는 방법은?",
    choices: [
      "두 리스트를 제자리에서 뒤집는다",
      "자릿수를 스택 두 개에 담아 위에서부터 꺼내 더하고, 결과를 머리 앞에 붙인다",
      "두 리스트를 Number로 바꿔 더한다",
      "앞에서부터 더하고 올림은 무시한다",
    ],
    answer: 1,
    explanation:
      "스택에서는 마지막에 넣은 일의 자리부터 나와서 세로 덧셈 순서와 맞는다. 결과를 머리 앞에 붙이면 큰 자리가 앞에 오는 형식이 된다. 뒤집기 풀이는 입력을 바꾸고, Number 변환은 큰 수에서 틀린다.",
    anchor: "큰-자리가-앞에-오면",
  },
];
