import type { QuizQuestion } from "../types";

export const LEETCODE_POWX_N: QuizQuestion[] = [
  {
    id: "leetcode-powx-n-1",
    post: "leetcode-powx-n",
    question: "비트를 읽는 반복으로 3^13을 구할 때 결과에 곱해지는 값은?",
    choices: ["3, 9, 81", "3, 81, 6561", "9, 81, 6561", "3, 9, 6561"],
    answer: 1,
    explanation:
      "13은 2진수로 1101이라 1인 비트가 1, 4, 8의 자리다. 그때의 x가 3^1 = 3, 3^4 = 81, 3^8 = 6561이라 이 셋을 곱해 1,594,323이 된다. 9는 비트가 0인 자리라 제곱만 하고 곱하지 않는다.",
    anchor: "지수의-비트를-오른쪽부터-읽는다",
  },
  {
    id: "leetcode-powx-n-2",
    post: "leetcode-powx-n",
    question: "재귀에서 pow(x, n/2)를 변수에 담지 않고 pow(x, n/2) * pow(x, n/2)로 쓰면 시간 복잡도는?",
    choices: ["O(log n) 그대로다", "O(log² n)", "O(n)", "O(2^n)"],
    answer: 2,
    explanation:
      "깊이는 log n이지만 호출이 매번 두 갈래로 갈라져 호출 수가 2^(log n) = n에 비례한다. n = 1023에서 2,047번 호출됐다. 같은 값을 한 번만 계산해야 O(log n)이 된다.",
    anchor: "반을-두-번-구하면-다시-느려진다",
  },
  {
    id: "leetcode-powx-n-3",
    post: "leetcode-powx-n",
    question: "Java에서 int n = Integer.MIN_VALUE일 때 n = -n을 하고 while (n > 0)로 돌리면 myPow(2.0, n)은?",
    choices: [
      "0.0으로 정답이다",
      "ArithmeticException이 난다",
      "Infinity가 나온다",
      "-n이 다시 -2^31이라 반복이 돌지 않아 1.0이 나온다",
    ],
    answer: 3,
    explanation:
      "int는 2^31을 담을 수 없어서 -(-2^31)이 예외 없이 감겨 -2^31이 된다. 반복 조건이 처음부터 거짓이라 초깃값 1.0을 돌려준다. 지수를 long에 옮긴 뒤 부호를 바꿔야 한다.",
    anchor: "java에서-int-지수의-부호를-바로-바꾼다",
  },
  {
    id: "leetcode-powx-n-4",
    post: "leetcode-powx-n",
    question: "JavaScript에서 지수를 N >>= 1로 줄이면 n = -2^31일 때 틀리는 이유는?",
    choices: [
      ">> 연산이 피연산자를 32비트 부호 있는 정수로 바꿔 2^31이 음수로 읽히기 때문",
      "JavaScript 숫자가 2^31을 정확히 표현하지 못하기 때문",
      ">>가 반올림을 하기 때문",
      "음수 지수에는 1/x를 쓸 수 없기 때문",
    ],
    answer: 0,
    explanation:
      "JavaScript 숫자는 64비트 실수라 2^31 자체는 정확하다. 하지만 비트 연산은 32비트 부호 있는 정수로 바꿔 계산해서 2147483648 >> 1이 -1073741824가 되고 반복이 멈춘다. N % 2와 Math.floor(N / 2)를 쓰면 안전하다.",
    anchor: "javascript에서-비트-연산으로-지수를-나눈다",
  },
  {
    id: "leetcode-powx-n-5",
    post: "leetcode-powx-n",
    question: "1.0001의 10만 제곱을 기준값과 비교했을 때 관찰된 것은?",
    choices: [
      "빠른 거듭제곱이 곱셈이 적어 가장 정확했다",
      "로그와 지수 함수 방식이 정확히 기준값과 같았다",
      "n번 곱하기가 빠른 거듭제곱보다 기준값에 가까웠다",
      "모든 방법이 같은 값을 냈다",
    ],
    answer: 2,
    explanation:
      "빠른 거듭제곱은 x를 거듭 제곱하는데, 제곱할 때마다 그때까지의 상대 오차도 두 배가 된다. 그래서 곱셈 횟수가 적어도 오차는 더 컸다. 가장 정확한 건 Math.pow였다.",
    anchor: "빠르다고-더-정확하지는-않다",
  },
];
