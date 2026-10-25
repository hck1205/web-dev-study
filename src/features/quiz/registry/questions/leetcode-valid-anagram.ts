import type { QuizQuestion } from "../types";

export const LEETCODE_VALID_ANAGRAM: QuizQuestion[] = [
  {
    id: "leetcode-valid-anagram-1",
    post: "leetcode-valid-anagram",
    question: "일찍 멈추는 26칸 풀이에서 `t`를 다 뺀 뒤 \"모든 칸이 0인가\"를 따로 확인하지 않아도 되는 이유는?",
    choices: [
      "26칸 배열은 처음부터 0으로 채워져 있기 때문",
      "t를 빼는 동안 음수가 나오면 이미 멈췄기 때문에 양수 칸만 남을 수 있어서",
      "길이가 같고 음수가 한 번도 없었다면, 합이 0인 칸들 중 양수가 남을 수 없기 때문",
      "자바스크립트 배열의 every가 자동으로 호출되기 때문",
    ],
    answer: 2,
    explanation:
      "칸들의 합은 처음에 s.length이고 t의 글자를 뺄 때마다 1씩 줄어 끝나면 0이 된다. 음수 칸이 하나도 없는데 합이 0이면 모든 칸이 0이다. 그래서 처음의 길이 비교가 이 확인을 대신한다.",
    anchor: "세다가-음수가-되면-바로-멈춘다",
  },
  {
    id: "leetcode-valid-anagram-2",
    post: "leetcode-valid-anagram",
    question: "`new Set(s)`와 `new Set(t)`가 같은지로 애너그램을 판정하면 어떤 입력에서 틀리나?",
    choices: ["\"heart\"와 \"earth\"", "\"aab\"와 \"abb\"", "\"a\"와 \"a\"", "\"ab\"와 \"ba\""],
    answer: 1,
    explanation:
      "집합은 글자 종류만 기억하고 개수를 버린다. \"aab\"와 \"abb\"는 둘 다 a와 b로 이루어진 같은 집합이지만 a와 b의 개수가 달라 애너그램이 아니다. 애너그램 판정에는 개수까지 세는 배열이나 해시맵이 필요하다.",
    anchor: "길이가-다르거나-빈-문자열일-때",
  },
  {
    id: "leetcode-valid-anagram-3",
    post: "leetcode-valid-anagram",
    question: "글자마다 소수를 정해 곱을 비교하는 풀이가 JavaScript에서 진짜 애너그램을 아니라고 판정할 수 있는 이유는?",
    choices: [
      "곱이 2^53을 넘으면 부동소수점 반올림이 생기고, 곱하는 순서에 따라 결과가 달라지기 때문",
      "소인수분해가 하나로 정해지지 않기 때문",
      "26번째 소수가 101이라 범위를 벗어나기 때문",
      "문자열이 길면 reduce가 일부 글자를 건너뛰기 때문",
    ],
    answer: 0,
    explanation:
      "JavaScript 숫자는 64비트 부동소수점이라 2^53을 넘는 정수를 정확히 담지 못한다. 12글자만 곱해도 그 범위를 넘고, 순서가 다른 두 곱셈은 반올림이 다르게 일어나 값이 달라질 수 있다. 수학적으로 맞는 아이디어도 숫자 표현의 한계에서 깨진다.",
    anchor: "소수를-곱하는-트릭이-위험한-이유",
  },
  {
    id: "leetcode-valid-anagram-4",
    post: "leetcode-valid-anagram",
    question: "입력에 이모지가 들어올 때 JavaScript에서 `split(\"\")`으로 잘라 세면 생기는 문제는?",
    choices: [
      "이모지가 공백으로 바뀐다",
      "split이 이모지를 만나면 예외를 던진다",
      "이모지가 두 코드 유닛(서로게이트 쌍)으로 쪼개져, 유닛 순서만 바꾼 깨진 문자열도 애너그램으로 판정될 수 있다",
      "이모지는 정렬할 수 없어 항상 false가 나온다",
    ],
    answer: 2,
    explanation:
      "JavaScript 문자열은 UTF-16 코드 유닛 배열이고 U+FFFF를 넘는 글자는 두 유닛으로 들어간다. split(\"\")은 유닛 단위로 자르니 서로게이트를 섞어 놓은 깨진 문자열도 같은 유닛 구성이면 애너그램이 된다. for...of나 [...s]처럼 코드 포인트 단위로 잘라 세야 한다.",
    anchor: "유니코드가-들어오면",
  },
  {
    id: "leetcode-valid-anagram-5",
    post: "leetcode-valid-anagram",
    question: "소문자만 들어오는 입력에서 26칸 배열 풀이가 Map 개수 풀이보다 25배쯤 빨랐던 주된 이유는?",
    choices: [
      "26칸 배열 풀이의 시간 복잡도가 O(log n)이라서",
      "Map은 글자마다 해시를 계산하고 문자열 키를 다루지만, 배열은 글자 코드로 칸을 바로 고치기 때문",
      "Map 풀이는 정렬을 함께 하기 때문",
      "배열 풀이는 문자열의 절반만 보기 때문",
    ],
    answer: 1,
    explanation:
      "두 풀이 모두 O(n)이다. 차이는 상수에서 나온다. 배열은 charCodeAt(i) - 97로 칸 번호를 바로 얻어 숫자 하나를 고치지만, Map은 매번 문자열 키의 해시를 계산하고 찾는다.",
    anchor: "26칸짜리-배열-하나면-충분하다",
  },
];
