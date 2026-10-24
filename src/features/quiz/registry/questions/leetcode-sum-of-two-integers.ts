import type { QuizQuestion } from "../types";

export const LEETCODE_SUM_OF_TWO_INTEGERS: QuizQuestion[] = [
  {
    id: "leetcode-sum-of-two-integers-1",
    post: "leetcode-sum-of-two-integers",
    question: "`a ^ b`와 `(a & b) << 1`을 올림이 0이 될 때까지 반복하는 풀이가 맞는 이유는?",
    choices: [
      "XOR가 두 수 중 큰 값을 남기기 때문",
      "반복할 때마다 두 값의 합이 하나씩 줄어들기 때문",
      "AND가 두 수의 차를 구하기 때문",
      "a + b = (a ^ b) + ((a & b) << 1)이라 매 단계 두 값의 합이 원래 합과 같고, 올림이 0이 되면 XOR 값이 곧 합이기 때문",
    ],
    answer: 3,
    explanation:
      "자리마다 두 비트가 다르면 1이 남고(XOR), 둘 다 1이면 위 자리로 2를 보낸다(AND 후 시프트). 그래서 두 값의 합은 단계마다 그대로다. 5 + 3 → 6 + 2 → 4 + 4 → 0 + 8처럼 모양만 바뀌다 올림이 0이 되면 끝난다.",
    anchor: "올림-없이-더하고-올림만-따로-더한다",
  },
  {
    id: "leetcode-sum-of-two-integers-2",
    post: "leetcode-sum-of-two-integers",
    question: "같은 반복을 Python에 그대로 옮기면 -1 + 1에서 끝나지 않는 이유는?",
    choices: [
      "Python의 XOR가 음수를 지원하지 않아서",
      "Python 정수는 폭이 없어 32번 자리를 넘은 올림이 버려지지 않고 계속 올라가기 때문",
      "Python의 `<<`가 오른쪽으로 밀기 때문",
      "Python에서 -1 & 1이 -1이 되기 때문",
    ],
    answer: 1,
    explanation:
      "JavaScript와 Java는 32비트 밖으로 밀린 올림을 버려 반복이 끝난다. Python 음수는 위쪽 1이 끝없이 이어진 것처럼 동작해서 올림이 영원히 0이 되지 않는다. 그래서 `& 0xFFFFFFFF`로 잘라 32비트처럼 다룬다.",
    anchor: "python은-정수에-끝이-없어서-마스크가-필요하다",
  },
  {
    id: "leetcode-sum-of-two-integers-3",
    post: "leetcode-sum-of-two-integers",
    question: "올림을 `carry = a & b`로 구하고 `<< 1`을 빼먹으면 5 + 3의 결과는?",
    choices: ["8", "7", "2", "무한 루프"],
    answer: 1,
    explanation:
      "첫 단계는 6과 올림 1이다. 올림을 올리지 않고 같은 자리에 다시 섞으면 6 ^ 1 = 7이고 6 & 1 = 0이라 끝난다. 결국 XOR가 아니라 OR를 한 셈이라 7이 나온다.",
    anchor: "올림을-한-칸-올리지-않기",
  },
  {
    id: "leetcode-sum-of-two-integers-4",
    post: "leetcode-sum-of-two-integers",
    question: "-1000~1000 범위에서 반복이 20번 넘게 도는 입력은 어떤 경우인가?",
    choices: [
      "두 수가 모두 양수일 때",
      "두 수가 같을 때",
      "부호가 다르고 합이 0 이상일 때. 올림이 음수의 위쪽 1들을 하나씩 지우며 32번 자리 밖까지 올라가야 한다",
      "한쪽이 0일 때",
    ],
    answer: 2,
    explanation:
      "음수는 위쪽 자리가 모두 1이다. 합이 0 이상이 되려면 그 1들이 모두 지워져야 하는데, 올림은 한 번에 한 칸씩 올라간다. 모든 쌍을 세어 보니 23번 이상 돈 쌍이 정확히 이 경우였다.",
    anchor: "반복-횟수는-입력에-따라-크게-갈린다",
  },
  {
    id: "leetcode-sum-of-two-integers-5",
    post: "leetcode-sum-of-two-integers",
    question: "Python 풀이 끝의 `a if a <= MAX else ~(a ^ MASK)`가 하는 일은?",
    choices: [
      "맨 위 비트가 켜진 32비트 값을 Python의 음수로 되돌린다",
      "결과를 32비트로 자른다",
      "올림을 한 번 더 더한다",
      "결과의 비트 순서를 뒤집는다",
    ],
    answer: 0,
    explanation:
      "마스크로 자른 값은 항상 0 이상이라 -7이 4294967289처럼 나온다. 맨 위 비트가 켜졌으면 원래 음수이니, 아래 32비트를 뒤집고 `~`로 다시 전부 뒤집어 위쪽을 1로 채운다. Python에서 위쪽이 모두 1인 수가 음수다.",
    anchor: "python은-정수에-끝이-없어서-마스크가-필요하다",
  },
];
