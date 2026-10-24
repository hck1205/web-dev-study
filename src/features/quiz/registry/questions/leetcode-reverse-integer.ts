import type { QuizQuestion } from "../types";

export const LEETCODE_REVERSE_INTEGER: QuizQuestion[] = [
  {
    id: "leetcode-reverse-integer-1",
    post: "leetcode-reverse-integer",
    question: "32비트 정수만 쓸 수 있을 때, 다 뒤집은 뒤에 범위를 확인하는 방식이 틀리는 이유는?",
    choices: [
      "뒤집는 데 시간이 너무 오래 걸려서",
      "넘친 순간 값이 2^32만큼 돌아 범위 안의 엉뚱한 수가 되므로 검사로 걸러지지 않아서",
      "넘치면 프로그램이 항상 예외를 던지고 멈춰서",
      "음수는 뒤집을 수 없어서",
    ],
    answer: 1,
    explanation:
      "1563847412를 32비트로 뒤집으면 2147483651이 돌아 -2147483645가 되는데, 이 값은 범위 안이라 검사를 통과해 버린다. Java나 JavaScript의 | 0은 넘쳐도 예외 없이 조용히 돈다. 그래서 검사는 rev * 10 + d를 계산하기 전에 해야 한다.",
    anchor: "끝자리를-떼어-새-수의-끝에-붙인다",
  },
  {
    id: "leetcode-reverse-integer-2",
    post: "leetcode-reverse-integer",
    question: "곱하기 전에 넘침을 막는 검사에서, rev가 다음 중 어떤 값이면 끝자리 d와 상관없이 바로 0을 돌려줘야 하나?",
    choices: ["214748364", "21474836", "214748365", "-214748364"],
    answer: 2,
    explanation:
      "최댓값을 10으로 나눈 몫은 214748364다. rev가 이보다 크면 10을 곱하는 것만으로 2147483647을 넘는다. rev가 정확히 214748364라면 d가 7보다 클 때만 넘치고, -214748364는 음수 쪽 한계와 같은 값이라 d를 더 봐야 한다.",
    anchor: "곱하기-전에-넘칠지-먼저-본다",
  },
  {
    id: "leetcode-reverse-integer-3",
    post: "leetcode-reverse-integer",
    question: "이 문제에서 rev === 214748364 && d > 7 조건이 실제로 참이 되는 입력이 없는 이유는?",
    choices: [
      "rev가 아홉 자리가 된 뒤 남는 자리는 입력의 맨 앞자리인데, 32비트 안의 열 자리 수는 1이나 2로 시작하기 때문",
      "JavaScript의 % 연산이 7보다 큰 값을 돌려주지 않기 때문",
      "rev는 항상 214748364보다 작게 유지되기 때문",
      "끝자리가 8이나 9인 정수는 입력으로 주어지지 않기 때문",
    ],
    answer: 0,
    explanation:
      "rev가 214748364라는 아홉 자리에 도달했다면 입력은 열 자리였고 남은 하나는 맨 앞자리다. 32비트 범위의 열 자리 수는 1이나 2로 시작하니 d는 7을 넘을 수 없다. 다만 atoi처럼 맨 앞자리가 자유로운 문제에서는 이 검사가 필요하다.",
    anchor: "곱하기-전에-넘칠지-먼저-본다",
  },
  {
    id: "leetcode-reverse-integer-4",
    post: "leetcode-reverse-integer",
    question: "JavaScript 풀이를 그대로 Python으로 옮겨 x % 10, x // 10을 쓰면 음수에서 틀린다. 이유는?",
    choices: [
      "Python에는 정수 나눗셈이 없어서",
      "Python의 정수는 32비트라 넘쳐서",
      "Python의 %는 오른쪽 수의 부호를 따르고 //는 아래로 버려서, -123 % 10이 7, -123 // 10이 -13이 되기 때문",
      "Python은 음수에 % 연산을 쓰면 예외를 던져서",
    ],
    answer: 2,
    explanation:
      "JavaScript와 Java는 %가 왼쪽 수의 부호를 따르고 나눗셈이 0 쪽으로 버려, 음수를 그대로 계산해도 된다. Python은 규칙이 달라 엉뚱한 자리가 나오니 부호를 먼저 떼고 양수로 계산한다. Python의 정수는 크기 제한이 없다.",
    anchor: "곱하기-전에-넘칠지-먼저-본다",
  },
  {
    id: "leetcode-reverse-integer-5",
    post: "leetcode-reverse-integer",
    question: "Java에서 부호를 떼려고 x = Math.abs(x)를 먼저 하면 어떤 입력에서 깨지나?",
    choices: [
      "x = 0",
      "x = Integer.MIN_VALUE(-2147483648)",
      "끝자리가 0인 음수",
      "x = Integer.MAX_VALUE(2147483647)",
    ],
    answer: 1,
    explanation:
      "2의 보수 범위는 음수가 하나 더 많아서 2147483648은 int에 담을 수 없다. 그래서 Math.abs(Integer.MIN_VALUE)는 돌아서 다시 -2147483648이 된다. Java에서는 부호를 떼지 말고 음수 그대로 계산하는 쪽이 안전하다.",
    anchor: "부호와-끝자리-0이-만드는-버그",
  },
  {
    id: "leetcode-reverse-integer-6",
    post: "leetcode-reverse-integer",
    question: "음수에서 끝자리를 뗄 때 Math.trunc(x / 10) 대신 Math.floor(x / 10)을 쓰면?",
    choices: [
      "결과의 부호만 바뀐다",
      "양수에서도 틀린 답이 나온다",
      "차이가 없다",
      "x가 -1에서 더 줄지 않아 반복이 끝나지 않는다",
    ],
    answer: 3,
    explanation:
      "Math.floor는 아래로 버려서 Math.floor(-1 / 10)이 -1이다. x가 -1에 머물러 x !== 0이 계속 참이니 무한 루프가 된다. 양수에서는 두 함수가 같아서 양수로만 테스트하면 이 버그를 못 잡는다.",
    anchor: "부호와-끝자리-0이-만드는-버그",
  },
];
