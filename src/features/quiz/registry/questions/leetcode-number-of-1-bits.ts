import type { QuizQuestion } from "../types";

export const LEETCODE_NUMBER_OF_1_BITS: QuizQuestion[] = [
  {
    id: "leetcode-number-of-1-bits-1",
    post: "leetcode-number-of-1-bits",
    question: "Kernighan 풀이(`n &= n - 1`을 0이 될 때까지 반복)에 90(1011010)을 넣으면 반복은 몇 번 도나?",
    choices: ["7번. 가장 높은 1의 위치까지 돈다", "32번. 항상 비트 폭만큼 돈다", "4번. 켜진 비트 수만큼 돈다", "3번. 0인 칸 수만큼 돈다"],
    answer: 2,
    explanation:
      "`n & (n - 1)`은 한 번에 가장 낮은 1 하나만 끈다. 그래서 반복 횟수는 켜진 비트 수와 같고, 90은 1이 네 개라 네 번이다. 가장 높은 1까지 7번 도는 건 시프트 풀이다.",
    anchor: "켜진-비트만-골라-지운다",
  },
  {
    id: "leetcode-number-of-1-bits-2",
    post: "leetcode-number-of-1-bits",
    question: "시프트 풀이에서 `n >>>= 1` 대신 `n >>= 1`을 쓰고 -3을 넣으면 어떻게 되나?",
    choices: [
      "부호 비트가 계속 복사되어 n이 -1에서 멈추고 반복이 끝나지 않는다",
      "결과는 같다. 두 연산은 양수와 음수에서 똑같이 동작한다",
      "바로 0이 되어 0을 돌려준다",
      "TypeError가 난다",
    ],
    answer: 0,
    explanation:
      "`>>`는 빈 왼쪽 칸을 부호 비트로 채운다. 음수는 결국 모든 비트가 1인 -1이 되고, -1을 밀어도 -1이라 `n !== 0`이 계속 참이다. 부호 없이 0을 채우는 `>>>`를 쓰거나 시프트가 없는 Kernighan을 쓴다.",
    anchor: "부호-있는-시프트로-무한-루프",
  },
  {
    id: "leetcode-number-of-1-bits-3",
    post: "leetcode-number-of-1-bits",
    question: "Python에서 `while n: n &= n - 1`에 음수를 그대로 넣으면 왜 끝나지 않나?",
    choices: [
      "Python은 `&` 연산을 음수에 쓸 수 없어서",
      "Python 정수는 폭이 없어 음수가 왼쪽으로 1이 끝없이 이어진 것처럼 동작하니 0에 닿지 않아서",
      "Python의 while은 음수를 거짓으로 보지 않아서",
      "`n - 1`이 부동소수점이 되어서",
    ],
    answer: 1,
    explanation:
      "Python은 32비트 2의 보수가 아니라 크기 제한 없는 정수라서, 음수의 위쪽 1이 끝없이 남아 있다. -3 & -4 = -4, -4 & -5 = -8처럼 계속 더 작은 음수가 된다. 32비트로 보려면 먼저 `n & 0xFFFFFFFF`로 자른다.",
    anchor: "python에서-음수를-그대로-넣기",
  },
  {
    id: "leetcode-number-of-1-bits-4",
    post: "leetcode-number-of-1-bits",
    question: "8비트 표 `TABLE[i] = TABLE[i >> 1] + (i & 1)`이 올바르게 채워지는 이유는?",
    choices: [
      "i >> 1은 i보다 작아서 이미 계산돼 있고, i의 1 개수는 맨 아래 비트를 뺀 수의 개수에 맨 아래 비트를 더한 값이기 때문",
      "TABLE이 Uint8Array라서 자동으로 1의 개수가 들어가기 때문",
      "i >> 1이 i의 1 개수를 절반으로 줄이기 때문",
      "i & 1이 i의 1 개수 전체를 돌려주기 때문",
    ],
    answer: 0,
    explanation:
      "i를 한 칸 오른쪽으로 밀면 맨 아래 비트만 빠지고 나머지 1은 그대로다. 그래서 1 개수는 `i >> 1`의 개수에 빠진 비트 `i & 1`을 더한 값이다. `i >> 1`이 i보다 작으니 앞에서부터 채우면 항상 준비돼 있다.",
    anchor: "여러-번-불린다면-표를-만든다",
  },
  {
    id: "leetcode-number-of-1-bits-5",
    post: "leetcode-number-of-1-bits",
    question: "JavaScript에서 `(-3).toString(2)`로 1을 세면 2가 나오는 이유는?",
    choices: [
      "toString(2)는 맨 위 비트를 잘라 내기 때문",
      "-3은 원래 1이 두 개뿐이기 때문",
      "toString(2)가 2의 보수가 아니라 부호와 절댓값으로 \"-11\"을 만들기 때문",
      "문자열 비교에서 \"-\"가 1로 세어지기 때문",
    ],
    answer: 2,
    explanation:
      "`toString(2)`는 음수를 \"-\" 부호와 절댓값의 이진수로 쓴다. 32비트 2의 보수로 보면 -3은 1이 31개다. 비트 그대로 보려면 `(-3 >>> 0).toString(2)`처럼 먼저 부호 없는 값으로 바꾼다.",
    anchor: "이진-문자열로-바꿔-세기",
  },
];
