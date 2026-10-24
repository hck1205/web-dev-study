import type { QuizQuestion } from "../types";

export const LEETCODE_SINGLE_NUMBER_II: QuizQuestion[] = [
  {
    id: "leetcode-single-number-ii-1",
    post: "leetcode-single-number-ii",
    question: "나머지가 세 번씩 나오는 배열을 전부 XOR하면 외톨이가 나오지 않는 이유는?",
    choices: [
      "XOR는 음수를 다루지 못해서",
      "XOR는 자리마다 1이 홀수 번인지만 기억하는데, 세 번은 홀수라 세 번 나온 수가 지워지지 않고 남아서",
      "XOR는 순서에 따라 결과가 달라져서",
      "세 번 XOR하면 항상 0이 되어서",
    ],
    answer: 1,
    explanation:
      "a ^ a ^ a는 a다. 그래서 세 번 나온 수가 하나씩 남아 외톨이와 뒤섞인다. 예시 [6, 3, 6, 5, 3, 6, 3]을 XOR하면 6 ^ 3 ^ 5 = 0이 나온다. XOR는 순서와 상관없이 결과가 같다.",
    anchor: "xor-한-줄은-여기서-0을-낸다",
  },
  {
    id: "leetcode-single-number-ii-2",
    post: "leetcode-single-number-ii",
    question: "자리마다 1의 개수를 세는 풀이에서 [6, 3, 6, 5, 3, 6, 3]의 2의 자리 1의 개수와, 그 자리의 답 비트는?",
    choices: ["6개, 0", "4개, 1", "3개, 0", "5개, 1"],
    answer: 0,
    explanation:
      "6(110)이 세 번, 3(011)이 세 번 2의 자리를 켜서 6개고, 5(101)는 그 자리가 0이다. 6을 3으로 나눈 나머지는 0이라 답의 2의 자리는 0이다. 4의 자리와 1의 자리는 4개씩이라 나머지 1, 답은 101 = 5다.",
    anchor: "비트-자리마다-1을-세어-3으로-나눈다",
  },
  {
    id: "leetcode-single-number-ii-3",
    post: "leetcode-single-number-ii",
    question: "자리 세기 반복을 b < 31까지만 돌면 [0, 0, 0, -30]에서 무엇이 나오나?",
    choices: ["-30", "0", "2147483618", "30"],
    answer: 2,
    explanation:
      "31번 비트는 부호 비트다. 그 자리를 세지 않으면 -30의 아래 31비트만 남아 2147483618이라는 큰 양수가 된다. 외톨이가 양수인 테스트만 있으면 통과해 버리는 버그다.",
    anchor: "부호-비트와-두-줄의-순서에서-나는-버그",
  },
  {
    id: "leetcode-single-number-ii-4",
    post: "leetcode-single-number-ii",
    question: "ones = (ones ^ x) & ~twos; twos = (twos ^ x) & ~ones;에서 어떤 자리가 (twos, ones) = (0, 1) 상태일 때 x의 그 자리 비트가 1이면 다음 상태는?",
    choices: ["(0, 0)", "(1, 1)", "(0, 1)", "(1, 0)"],
    answer: 3,
    explanation:
      "새 ones = (1 ^ 1) & ~0 = 0이고, 새 twos = (0 ^ 1) & ~0 = 1이다. 1번 본 상태에서 2번 본 상태로 넘어간 것이다. (1, 1)은 이 기계에서 생기지 않는 상태이고, 2번 본 상태에서 1이 오면 (0, 0)으로 돌아간다.",
    anchor: "비트마다-0-1-2를-세는-작은-기계",
  },
  {
    id: "leetcode-single-number-ii-5",
    post: "leetcode-single-number-ii",
    question: "Python에서 ones, twos = (ones ^ x) & ~twos, (twos ^ x) & ~ones처럼 동시 대입 한 줄로 쓰면?",
    choices: [
      "더 빨라질 뿐 결과는 같다",
      "오른쪽이 모두 옛 ones로 계산되어 없는 상태 (1, 1)이 생기고 답이 틀린다",
      "Python에서는 ~ 연산을 쓸 수 없어 에러가 난다",
      "음수 외톨이에서만 틀린다",
    ],
    answer: 1,
    explanation:
      "둘째 식은 첫째 식이 바꾼 새 ones를 봐야 한다. 동시 대입은 오른쪽을 모두 옛 값으로 계산하니 (0, 0)에서 1이 오면 둘 다 켜져 버린다. [6, 3, 6, 5, 3, 6, 3]에서 5가 아니라 3이 나온다.",
    anchor: "부호-비트와-두-줄의-순서에서-나는-버그",
  },
  {
    id: "leetcode-single-number-ii-6",
    post: "leetcode-single-number-ii",
    question: "모든 수가 k번씩 나오고 외톨이만 한 번 나오는 일반형으로 넓힐 때 가장 간단한 방법은?",
    choices: [
      "자리 세기 풀이에서 % 3을 % k로 바꾼다",
      "XOR를 k번 반복한다",
      "ones와 twos 두 변수를 그대로 쓴다",
      "정렬 후 두 칸씩 본다",
    ],
    answer: 0,
    explanation:
      "k번씩 나오는 수는 어느 자리에든 1을 k의 배수만큼만 보태니, 자리마다 센 개수를 k로 나눈 나머지가 외톨이의 비트다. ones와 twos는 0, 1, 2만 셀 수 있어 k = 3에 맞춘 기계라 k가 커지면 변수를 더 둬야 한다.",
    anchor: "k번씩-나온다면-외톨이가-두-번-나온다면",
  },
];
