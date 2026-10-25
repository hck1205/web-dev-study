import type { QuizQuestion } from "../types";

export const LEETCODE_REVERSE_BITS: QuizQuestion[] = [
  {
    id: "leetcode-reverse-bits-1",
    post: "leetcode-reverse-bits",
    question: "한 비트씩 쌓는 풀이에서 반복을 `while (n !== 0)`으로 쓰고 13을 넣으면 무엇이 나오나?",
    choices: ["2952790016", "11", "13", "176"],
    answer: 1,
    explanation:
      "13의 1101을 다 꺼내면 n이 0이 되어 멈추고 res는 1011, 즉 11이다. 앞에 있던 0 28개가 뒤로 가지 못했다. 폭 전체를 뒤집어야 하니 반복은 정확히 32번이어야 한다.",
    anchor: "n이-0이-되면-멈추기",
  },
  {
    id: "leetcode-reverse-bits-2",
    post: "leetcode-reverse-bits",
    question: "JavaScript 풀이 끝에 `>>> 0`을 붙이는 이유는?",
    choices: [
      "남은 비트를 오른쪽으로 한 칸 더 밀기 위해",
      "결과를 0으로 초기화하기 위해",
      "비트 연산 결과가 부호 있는 32비트라 맨 위 비트가 켜지면 음수로 보이니, 같은 비트를 부호 없이 다시 읽으려고",
      "결과를 64비트로 늘리기 위해",
    ],
    answer: 2,
    explanation:
      "`<<`와 `|`는 결과를 부호 있는 32비트로 낸다. 1을 뒤집은 결과는 비트가 맞아도 -2147483648로 보인다. `>>> 0`은 비트를 바꾸지 않고 부호 없는 값 2147483648로 다시 읽게 한다.",
    anchor: "마지막에-부호-없이-다시-읽는-이유",
  },
  {
    id: "leetcode-reverse-bits-3",
    post: "leetcode-reverse-bits",
    question: "분할 정복 풀이가 다섯 단계만에 32비트를 뒤집을 수 있는 이유는?",
    choices: [
      "자리 번호 i를 31 - i = i ^ 31로 보내야 하는데, 16·8·4·2·1비트 덩어리 교환이 각각 자리 번호의 비트 하나씩을 뒤집기 때문",
      "32비트 중 다섯 비트만 실제로 값이 있기 때문",
      "마스크가 0과 1의 개수를 맞춰 주기 때문",
      "CPU가 다섯 비트씩 한 번에 처리하기 때문",
    ],
    answer: 0,
    explanation:
      "자리 번호 0~31은 다섯 비트로 쓰이고, 거울 자리 31 - i는 그 다섯 비트를 모두 뒤집은 값이다. 16비트 덩어리 교환은 i ^ 16, 8비트 교환은 i ^ 8처럼 단계마다 비트 하나를 뒤집는다. 다섯 번이면 모두 뒤집힌다.",
    anchor: "자리-번호로-보면-왜-다섯-번인가",
  },
  {
    id: "leetcode-reverse-bits-4",
    post: "leetcode-reverse-bits",
    question: "바이트 표 풀이에서 각 바이트를 표로 뒤집기만 하고 바이트 자리를 그대로 두면 13의 결과는?",
    choices: ["2952790016. 결과는 같다", "11", "176. 1011이 맨 아래 바이트에 남는다", "0"],
    answer: 2,
    explanation:
      "13은 맨 아래 바이트에만 1이 있고, 그 바이트를 뒤집으면 10110000 = 176이다. 바이트 순서도 거꾸로 놓아야 이 값이 맨 위 바이트로 가서 2952790016이 된다. 비트 뒤집기는 바이트 안과 바이트 순서 둘 다 뒤집는 일이다.",
    anchor: "표-풀이에서-바이트-자리를-그대로-두기",
  },
  {
    id: "leetcode-reverse-bits-5",
    post: "leetcode-reverse-bits",
    question: "Python으로 한 비트씩 쌓는 풀이를 쓸 때 반복 횟수를 정확히 32번으로 맞춰야 하는 이유는?",
    choices: [
      "Python은 33번째 시프트에서 OverflowError를 내기 때문",
      "Python 정수는 폭이 없어 32비트로 잘라 주지 않으니, 한 번 더 돌면 결과가 한 칸 더 밀려 두 배가 되기 때문",
      "Python의 `>>`가 부호 비트를 복사해 무한 루프가 되기 때문",
      "range(32)가 Python에서 가장 빠른 반복이라서",
    ],
    answer: 1,
    explanation:
      "Python은 결과를 자동으로 자르지 않는다. 반복 횟수가 곧 결과의 폭이라, 33번 돌면 13의 결과가 5905580032처럼 두 배로 나온다. 대신 2^31 이상이 음수로 보이는 문제는 없다.",
    anchor: "python에서-33번-돌기",
  },
];
