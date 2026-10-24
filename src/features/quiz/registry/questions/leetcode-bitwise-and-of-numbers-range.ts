import type { QuizQuestion } from "../types";

export const LEETCODE_BITWISE_AND_OF_NUMBERS_RANGE: QuizQuestion[] = [
  {
    id: "leetcode-bitwise-and-of-numbers-range-1",
    post: "leetcode-bitwise-and-of-numbers-range",
    question: "left = 26(11010), right = 30(11110)일 때 구간 전체를 AND한 값은?",
    choices: ["26", "24", "16", "0"],
    answer: 1,
    explanation:
      "두 수의 공통 접두사는 11이고, 그 다음 자리에서 26은 0, 30은 1로 갈린다. 공통 접두사 뒤를 0으로 채우면 11000, 24다. 26 자체는 구간 안의 27, 28 등과 AND되면서 낮은 비트가 꺼진다.",
    anchor: "두-끝이-같아질-때까지-오른쪽으로-민다",
  },
  {
    id: "leetcode-bitwise-and-of-numbers-range-2",
    post: "leetcode-bitwise-and-of-numbers-range",
    question: "공통 접두사 아래 자리가 답에서 모두 0이 되는 이유로 가장 정확한 것은?",
    choices: [
      "AND는 큰 수의 비트를 지우기 때문",
      "구간 안에 짝수와 홀수가 섞여 있기 때문",
      "처음 다른 자리에서 '접두사+0+아래 모두 1'과 '접두사+1+아래 모두 0'인 두 이웃한 수가 반드시 구간 안에 있어, 그 둘이 아래 자리를 모두 지우기 때문",
      "left와 right를 XOR하면 0이 되기 때문",
    ],
    answer: 2,
    explanation:
      "left는 그 자리가 0이고 right는 1이라, 그 사이에 P0111…과 P1000…이 모두 들어 있다. 두 수는 처음 다른 자리부터 아래가 모두 반대라 AND하면 0이 된다. 짝수와 홀수가 섞이는 것만으로는 1의 자리 하나만 설명된다.",
    anchor: "두-끝이-같아질-때까지-오른쪽으로-민다",
  },
  {
    id: "leetcode-bitwise-and-of-numbers-range-3",
    post: "leetcode-bitwise-and-of-numbers-range",
    question: "하나씩 AND하되 누적값이 0이 되면 멈추는 풀이가 시간 초과를 내는 입력은?",
    choices: [
      "[1, 2147483647]",
      "[0, 2147483647]",
      "[6, 6]",
      "[1073741824, 2147483647]",
    ],
    answer: 3,
    explanation:
      "2^30부터 2^31 - 1까지는 모든 수가 2^30 자리를 켜고 있어 누적값이 끝까지 0이 되지 않고, 10억 번을 다 돈다. [1, 2147483647]과 [0, 2147483647]은 금방 0이 되어 바로 멈추고, [6, 6]은 수 하나다.",
    anchor: "하나씩-and하다-0이-되면-멈춘다",
  },
  {
    id: "leetcode-bitwise-and-of-numbers-range-4",
    post: "leetcode-bitwise-and-of-numbers-range",
    question: "while (right > left) right &= right - 1; 풀이에서 조건을 right >= left로 바꾸면 [6, 6]의 결과는?",
    choices: ["4", "6", "0", "무한 루프"],
    answer: 0,
    explanation:
      "right가 left와 같아도 한 번 더 6 & 5 = 4를 해 버린다. 5는 구간 밖의 수라 AND하면 안 된다. 조건이 right > left여야 AND 상대 right - 1이 언제나 left 이상, 즉 구간 안에 있다.",
    anchor: "같은-수-0-최댓값-구간에서-생기는-버그",
  },
  {
    id: "leetcode-bitwise-and-of-numbers-range-5",
    post: "leetcode-bitwise-and-of-numbers-range",
    question: "Java에서 for (int i = left; i <= right; i++)로 하나씩 AND할 때 right가 Integer.MAX_VALUE면 어떻게 되나?",
    choices: [
      "컴파일 에러가 난다",
      "마지막 수에서 정상적으로 멈춘다",
      "i가 최댓값을 넘어 최솟값으로 돌아 i <= right가 계속 참이라 끝나지 않는다",
      "ArithmeticException이 난다",
    ],
    answer: 2,
    explanation:
      "int의 i++는 넘쳐도 예외 없이 -2147483648로 돈다. 그래서 조건이 영원히 참이다. 음수와 AND하면 누적값이 0이 되어, 0이면 멈춤을 넣어도 답이 0으로 틀린다. 반복 변수를 long으로 쓰거나 비트 풀이를 쓴다.",
    anchor: "같은-수-0-최댓값-구간에서-생기는-버그",
  },
  {
    id: "leetcode-bitwise-and-of-numbers-range-6",
    post: "leetcode-bitwise-and-of-numbers-range",
    question: "같은 구간 9부터 12까지를 AND가 아니라 OR하면 결과는?",
    choices: ["8", "12", "13", "15"],
    answer: 3,
    explanation:
      "OR는 공통 접두사 1은 그대로 두고, 처음 다른 자리부터 아래를 모두 1로 채운다. 구간 안의 이웃한 두 수 11(1011)과 12(1100) 중 하나가 각 자리를 한 번은 켜기 때문이다. 그래서 1111, 15다.",
    anchor: "or라면-xor라면-질의가-많다면",
  },
];
