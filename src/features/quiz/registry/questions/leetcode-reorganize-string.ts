import type { QuizQuestion } from "../types";

export const LEETCODE_REORGANIZE_STRING: QuizQuestion[] = [
  {
    id: "leetcode-reorganize-string-1",
    post: "leetcode-reorganize-string",
    question: "길이 7인 문자열에서 한 글자가 몇 개까지 있어야 재배치가 가능한가?",
    choices: ["5개", "3개", "7개", "4개"],
    answer: 3,
    explanation:
      "한 글자를 최대한 떨어뜨리면 0, 2, 4, 6번 칸에 놓이고 그런 칸은 (7 + 1) / 2 = 4개다. 그래서 4개까지 가능하고 5개부터는 어딘가 붙는다. n / 2로 계산하면 3이 나와 가능한 입력을 불가능하다고 판정한다.",
    anchor: "가능한지는-가장-많은-글자-하나가-정한다",
  },
  {
    id: "leetcode-reorganize-string-2",
    post: "leetcode-reorganize-string",
    question: "짝수 칸 채우기에서 가장 많은 글자를 먼저 놓지 않고 알파벳 순으로만 채우면 \"abccc\"의 결과는?",
    choices: ["cacbc", "acbcc", "\"\"", "abccc"],
    answer: 1,
    explanation:
      "a, b, c가 0, 2, 4번 칸을 나눠 쓰고 남은 c 둘이 1, 3번 칸에 가서 acbcc가 된다. 3번과 4번의 c가 붙는다. c는 짝수 칸 수와 같은 3개라 짝수 칸을 혼자 다 써야 했다.",
    anchor: "마지막-한-글자에서-무너지는-코드들",
  },
  {
    id: "leetcode-reorganize-string-3",
    post: "leetcode-reorganize-string",
    question: "힙 풀이의 시간 복잡도가 사실상 O(n)인 이유는?",
    choices: [
      "힙에 들어가는 원소가 글자 종류 수, 즉 26개 이하라서 log가 상수이기 때문에",
      "힙에 문자열 전체를 넣기 때문에",
      "힙 연산이 원래 O(1)이기 때문에",
      "결과 문자열을 만들지 않기 때문에",
    ],
    answer: 0,
    explanation:
      "힙에는 글자 종류마다 원소 하나만 있어서 크기가 26을 넘지 않는다. 그래서 전체는 O(n log 26)이고 사실상 O(n)이다. 힙 연산 자체가 O(1)인 것은 아니다.",
    anchor: "가장-많이-남은-두-글자를-한-쌍씩-쓴다",
  },
  {
    id: "leetcode-reorganize-string-4",
    post: "leetcode-reorganize-string",
    question: "같은 글자 사이를 k칸 이상 띄우는 변형으로 넓히기 좋은 풀이는?",
    choices: [
      "힙에서 두 글자씩 꺼내는 풀이",
      "짝수 칸 먼저 채우기",
      "힙에서 하나씩 꺼내고 쓴 글자를 대기 큐에 쉬게 하는 풀이",
      "되돌아가며 놓기",
    ],
    answer: 2,
    explanation:
      "쓴 글자를 큐에 넣고 k개가 쌓이면 맨 앞을 힙에 돌려놓으면 된다. 두 개씩 꺼내는 요령은 거리 2에만 맞는다. 되돌아가기는 맞지만 지수 시간이다.",
    anchor: "방금-쓴-글자를-한-박자-쉬게-한다",
  },
  {
    id: "leetcode-reorganize-string-5",
    post: "leetcode-reorganize-string",
    question: "두 글자씩 꺼내는 힙 풀이에서 마지막에 힙에 하나 남은 글자의 개수를 확인하지 않으면 \"aaab\"에 무엇을 돌려주나?",
    choices: ["\"\"", "\"abaa\"", "\"aba\"", "\"abab\""],
    answer: 2,
    explanation:
      "ab를 쓴 뒤 a가 2개 남는데 한 글자만 붙여 aba를 돌려준다. 글자 하나가 사라진 틀린 답이다. 남은 개수가 2 이상이면 빈 문자열을 돌려줘야 한다.",
    anchor: "마지막-한-글자에서-무너지는-코드들",
  },
];
