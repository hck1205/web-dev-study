import type { QuizQuestion } from "../types";

export const LEETCODE_EVALUATE_REVERSE_POLISH_NOTATION: QuizQuestion[] = [
  {
    id: "leetcode-evaluate-reverse-polish-notation-1",
    post: "leetcode-evaluate-reverse-polish-notation",
    question: "스택 풀이에서 연산자 `-`를 만나 두 값을 꺼냈다. 첫 번째 `pop()`으로 나온 값은 무엇인가?",
    choices: [
      "왼쪽 피연산자 `a`. 먼저 쌓인 값이 먼저 나오기 때문이다",
      "오른쪽 피연산자 `b`. 식이 `a b -` 순서라 `b`가 나중에 쌓였기 때문이다",
      "어느 쪽이든 상관없다. 빼기는 순서를 바꿔도 결과가 같다",
      "스택 바닥의 값. 연산자는 가장 오래된 두 값을 쓴다",
    ],
    answer: 1,
    explanation:
      "후위 표기에서 `a`가 먼저 적히고 `b`가 나중에 적히니, 나중에 넣은 것이 먼저 나오는 스택에서는 첫 `pop()`이 `b`다. 순서를 바꾸면 `[\"2\", \"3\", \"-\"]`에서 -1 대신 1이 나온다. 더하기와 곱하기는 순서와 상관없어서 그런 테스트로는 실수가 드러나지 않는다.",
    anchor: "왜-먼저-꺼낸-값이-오른쪽인가",
  },
  {
    id: "leetcode-evaluate-reverse-polish-notation-2",
    post: "leetcode-evaluate-reverse-polish-notation",
    question: "Python으로 나눗셈을 `a // b`로 구현했다. `[\"7\", \"-2\", \"/\"]`의 결과와 그 이유로 맞는 것은?",
    choices: [
      "-3. `//`는 0 쪽으로 버린다",
      "-3.5. `//`는 실수 나눗셈이다",
      "-4. `//`는 내림이라 음수에서 -무한대 쪽으로 가고, 문제가 원하는 -3과 다르다",
      "오류가 난다. 음수끼리는 `//`를 쓸 수 없다",
    ],
    answer: 2,
    explanation:
      "Python의 `//`는 내림(floor)이라 -3.5를 -4로 만든다. 문제는 0 쪽으로 버리라고 했으니 -3이 맞고, `int(a / b)`를 써야 한다. Java의 `int` 나눗셈은 원래 0 쪽으로 버려서 그대로 맞다.",
    anchor: "python과-java에서-나눗셈이-다르게-끝난다",
  },
  {
    id: "leetcode-evaluate-reverse-polish-notation-3",
    post: "leetcode-evaluate-reverse-polish-notation",
    question: "입력 `tokens` 배열의 앞부분을 스택으로 다시 쓰는 풀이가 아직 읽지 않은 토큰을 덮어쓰지 않는 이유는?",
    choices: [
      "토큰 하나를 읽을 때 스택은 많아야 한 칸 늘어나서, 스택 맨 위 위치가 늘 읽는 위치 이하이기 때문이다",
      "연산자 토큰이 숫자 토큰보다 항상 많기 때문이다",
      "배열을 뒤에서부터 읽기 때문이다",
      "JavaScript 배열은 덮어써도 원래 값이 남아 있기 때문이다",
    ],
    answer: 0,
    explanation:
      "숫자는 스택을 한 칸 늘리고 연산자는 한 칸 줄이니, i개를 읽은 뒤 스택 크기는 i를 넘지 않는다. 그래서 쓰는 자리는 언제나 이미 읽고 지나간 칸이다. 대신 입력 배열이 바뀌므로 호출한 쪽이 다시 쓰지 않는다는 합의가 필요하다.",
    anchor: "입력-배열을-스택으로-다시-쓰기",
  },
  {
    id: "leetcode-evaluate-reverse-polish-notation-4",
    post: "leetcode-evaluate-reverse-polish-notation",
    question: "뒤에서부터 읽는 재귀 풀이를 Python으로 옮겨 `[\"1\"] + [\"1\", \"+\"] * 4999` 같은 긴 입력에 돌리면 어떻게 되나?",
    choices: [
      "O(n²)이라 시간 초과가 난다",
      "결과가 5000으로 정상적으로 나온다",
      "오른쪽 피연산자와 왼쪽 피연산자가 뒤바뀌어 틀린 값이 나온다",
      "재귀 깊이가 5000쯤 되어 기본 한도 1000을 넘고 `RecursionError`가 난다",
    ],
    answer: 3,
    explanation:
      "재귀 풀이는 스택을 호출 스택으로 옮긴 것이라, 한쪽으로 길게 늘어진 식에서는 깊이가 연산자 수만큼 된다. Python 기본 재귀 한도는 1000이라 이 입력에서 `RecursionError`가 났다. 시간은 토큰을 한 번씩 읽으니 O(n)이고, 뒤에서 읽으면 오른쪽 식이 먼저 나오도록 짜서 순서는 맞다.",
    anchor: "뒤에서부터-읽으면-재귀가-된다",
  },
  {
    id: "leetcode-evaluate-reverse-polish-notation-5",
    post: "leetcode-evaluate-reverse-polish-notation",
    question: "차량기지 알고리즘에서 새 연산자가 올 때 `prec[top] >= prec[tok]`의 등호를 빼면 `8 - 3 - 2`는 어떻게 계산되나?",
    choices: [
      "`8 3 - 2 -`가 되어 3이 나온다. 등호는 결과에 영향이 없다",
      "`8 3 2 - -`가 되어 8 - (3 - 2) = 7이 나온다",
      "괄호가 없어 변환이 실패한다",
      "`8 3 2 - -`가 되지만 계산 결과는 3으로 같다",
    ],
    answer: 1,
    explanation:
      "같은 우선순위의 연산자를 먼저 꺼내야 왼쪽부터 계산된다. 등호가 없으면 첫 `-`가 스택에 남은 채 두 번째 `-`가 쌓여 `8 3 2 - -`가 되고, 계산하면 8 - 1 = 7이다. 거듭제곱처럼 오른쪽부터 묶는 연산자에서만 등호를 뺀다.",
    anchor: "반대로-보통-식을-후위-표기로-바꿔라",
  },
];
