import type { QuizQuestion } from "../types";

export const LEETCODE_MULTIPLY_STRINGS: QuizQuestion[] = [
  {
    id: "leetcode-multiply-strings-1",
    post: "leetcode-multiply-strings",
    question: "칸 배열 풀이에서 num1의 i번째 자리와 num2의 j번째 자리(둘 다 왼쪽부터)의 곱은 길이 m + n 배열의 몇 번 칸에 적히나?",
    choices: [
      "i × j번 칸",
      "i + j번 칸에 일의 자리, i + j - 1번 칸에 올림",
      "i + j + 1번 칸에 일의 자리, i + j번 칸에 올림",
      "m + n - i - j번 칸",
    ],
    answer: 2,
    explanation:
      "두 자리는 각각 10^(m-1-i), 10^(n-1-j)의 자리라 곱은 10^(m+n-2-i-j)의 자리에 속하고, 길이 m + n 배열에서 그 자리는 왼쪽부터 i + j + 1번이다. 올림은 한 칸 더 높은 자리라 i + j번 칸으로 간다. i + j번에 적으면 맨 앞 올림을 담을 칸이 없어진다.",
    anchor: "곱이-들어갈-칸은-i--j로-정해진다",
  },
  {
    id: "leetcode-multiply-strings-2",
    post: "leetcode-multiply-strings",
    question: "결과 배열 길이를 m + n - 1로 줄이고 칸 번호도 하나씩 당겨 쓰면 어떤 입력에서 틀리나?",
    choices: [
      "99 × 99",
      "123 × 45",
      "0 × 52",
      "1 × 1",
    ],
    answer: 0,
    explanation:
      "곱은 많아야 m + n자리인데, 99 × 99 = 9801처럼 그 길이를 꽉 채우는 경우가 있다. 칸이 하나 모자라면 맨 앞 올림이 버려져 801이 나온다. 123 × 45 = 5535는 m + n - 1자리라 맞게 나와서 이 버그를 가린다.",
    anchor: "앞의-0과-올림에서-자주-틀린다",
  },
  {
    id: "leetcode-multiply-strings-3",
    post: "leetcode-multiply-strings",
    question: "올림을 마지막에 한 번만 넘기는 풀이가 칸 배열 풀이보다 빨랐던 주된 이유는?",
    choices: [
      "시간 복잡도가 O(m + n)으로 줄어서",
      "안쪽 반복에서 10으로 나누는 연산이 빠져 곱하고 더하기만 하기 때문",
      "배열을 쓰지 않아서",
      "곱셈 횟수가 세 번으로 줄어서",
    ],
    answer: 1,
    explanation:
      "차수는 O(m·n)으로 같고, 나눗셈과 나머지 연산이 m·n번에서 m + n번으로 줄었다. 한 칸에 쌓이는 값이 많아야 min(m, n) × 81이라 넘치지 않아서 이렇게 미룰 수 있다. 곱셈 세 번은 카라츠바의 이야기다.",
    anchor: "올림은-마지막에-한-번만-넘긴다",
  },
  {
    id: "leetcode-multiply-strings-4",
    post: "leetcode-multiply-strings",
    question: "JavaScript에서 여러 자리를 한 칸에 묶어 곱할 때 일곱 자리까지만 묶는 이유는?",
    choices: [
      "문자열 slice가 일곱 글자까지만 자를 수 있어서",
      "10^7진법이 10진법과 호환되는 가장 큰 진법이라서",
      "두 칸의 곱과 올림이 2^53 안에 들어와야 정확한데, 여덟 자리면 곱이 10^16 가까이 되어 넘기 때문",
      "배열 길이 제한 때문",
    ],
    answer: 2,
    explanation:
      "Number는 2^53(약 9 × 10^15)까지만 정수를 정확히 담는다. 일곱 자리끼리 곱하면 10^14 정도라 칸 값과 올림을 더해도 안전하고, 여덟 자리면 이 한계를 넘는다. Java long이라면 아홉 자리씩 묶을 수 있다.",
    anchor: "일곱-자리씩-묶어서-곱한다",
  },
  {
    id: "leetcode-multiply-strings-5",
    post: "leetcode-multiply-strings",
    question: "카라츠바가 200자리 입력에서 올림을 미루는 O(m·n) 풀이보다 느렸던 이유로 가장 알맞은 것은?",
    choices: [
      "카라츠바는 실제로는 O(n²)보다 느린 알고리즘이라서",
      "재귀가 스택을 넘쳐서",
      "결과가 틀려서 다시 계산하기 때문",
      "입력이 작아 차수의 이득보다 문자열 자르기·덧셈·뺄셈 비용이 더 크기 때문",
    ],
    answer: 3,
    explanation:
      "카라츠바는 곱셈 네 번을 세 번으로 줄여 O(n^1.585)가 되지만, 그 대가로 덧셈과 뺄셈, 문자열 처리가 늘어난다. 200자리는 차수 차이가 드러나기엔 작아서 상수가 큰 쪽이 진다. 그래서 실제 라이브러리도 일정 크기 아래에서는 보통 곱셈을 쓴다.",
    anchor: "곱셈-세-번으로-줄이는-카라츠바",
  },
];
