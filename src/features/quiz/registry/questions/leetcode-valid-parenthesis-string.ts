import type { QuizQuestion } from "../types";

export const LEETCODE_VALID_PARENTHESIS_STRING: QuizQuestion[] = [
  {
    id: "leetcode-valid-parenthesis-string-1",
    post: "leetcode-valid-parenthesis-string",
    question: "범위 풀이에서 lo와 hi 두 숫자만 들고 다녀도 되는 이유는?",
    choices: [
      "별표는 언제나 여는 괄호로 쓰는 게 최선이기 때문",
      "열린 수가 될 수 있는 값이 늘 끊김 없는 구간이라 양 끝만 알면 되기 때문",
      "문자열 길이가 100 이하라 근사해도 틀리지 않기 때문",
      "lo와 hi의 차이가 별표 개수와 항상 같기 때문",
    ],
    answer: 1,
    explanation:
      "괄호는 구간을 통째로 1 옮기고, 별표는 v에서 v - 1, v, v + 1을 만들어 구간을 양쪽으로 넓힌다. 빈 문자열 선택 덕분에 사이에 구멍이 없다. lo를 0으로 올리면 차이가 별표 개수보다 작아질 수 있어서 마지막 보기는 틀리다.",
    anchor: "범위가-끊기지-않는-이유",
  },
  {
    id: "leetcode-valid-parenthesis-string-2",
    post: "leetcode-valid-parenthesis-string",
    question: "lo를 0으로 올리는 줄을 빼고 끝에서 lo <= 0 && 0 <= hi로 판정하면 s = \"*(\"의 결과는?",
    choices: [
      "false. 정답과 같다",
      "예외가 난다",
      "true. 별표를 닫는 괄호로 쓴 불가능한 경우가 끝까지 남아 가짜 0을 만든다",
      "false. hi가 음수가 된다",
    ],
    answer: 2,
    explanation:
      "별표에서 lo가 -1이 되고 (에서 0이 되어 마지막 판정을 통과한다. 그런데 lo -1은 닫는 괄호를 먼저 쓴 규칙 위반 경우였다. 그 경우를 0으로 올려 버리지 않으면 이런 가짜 답이 나온다.",
    anchor: "lo를-0으로-올리지-않는다",
  },
  {
    id: "leetcode-valid-parenthesis-string-3",
    post: "leetcode-valid-parenthesis-string",
    question: "두 스택 풀이에서 끝까지 읽은 뒤 남은 여는 괄호와 별표를 짝지을 때 위치를 비교하는 이유는?",
    choices: [
      "별표가 여는 괄호보다 앞에 있으면 닫는 괄호 노릇을 할 수 없기 때문",
      "위치가 같으면 같은 글자이기 때문",
      "스택이 비어 있는지 확인하려고",
      "별표는 빈 문자열로만 쓸 수 있기 때문",
    ],
    answer: 0,
    explanation:
      "남은 여는 괄호를 닫으려면 그 뒤에 닫는 괄호가 와야 한다. 앞에 있는 별표를 닫는 괄호로 바꾸면 닫는 괄호가 먼저 오는 꼴이다. 그래서 *(는 개수로는 맞아 보여도 false다.",
    anchor: "여는-괄호와-별표의-자리를-따로-쌓는다",
  },
  {
    id: "leetcode-valid-parenthesis-string-4",
    post: "leetcode-valid-parenthesis-string",
    question: "메모 재귀를 (i, open) 상태로 두면 시간 복잡도가 O(n²)이 되는 이유는?",
    choices: [
      "별표마다 세 갈래라 3^k를 n으로 나눈 값이기 때문",
      "구간마다 끊을 곳을 n개 보기 때문",
      "i도 open도 0부터 n까지라 상태가 O(n²)개이고 상태마다 일이 O(1)이기 때문",
      "스택에 위치를 한 번씩 넣고 빼기 때문",
    ],
    answer: 2,
    explanation:
      "갈래가 3^k개라도 (읽은 글자 수, 열린 수)가 같으면 뒤의 결과가 같아서 한 번만 계산한다. 상태 수가 n × n 정도이고 각각 세 갈래만 보니 O(n²)이다. 끊을 곳을 매번 보는 건 O(n³)인 구간 DP다.",
    anchor: "열린-수를-상태로-두는-메모-재귀",
  },
  {
    id: "leetcode-valid-parenthesis-string-5",
    post: "leetcode-valid-parenthesis-string",
    question: "별표가 빈 문자열이 될 수 없고 ( 나 ) 중 하나여야 한다면 범위 풀이에서 무엇을 바꿔야 하나?",
    choices: [
      "hi 검사를 없앤다",
      "lo가 -1이 되면 0이 아니라 1로 올린다",
      "lo를 0으로 올리는 줄을 지운다",
      "별표를 만나면 lo와 hi를 모두 1 올린다",
    ],
    answer: 1,
    explanation:
      "글자를 읽을 때마다 열린 수가 꼭 1씩 바뀌니 가능한 값은 홀짝이 같은 값뿐이다. 구간에 한 칸씩 구멍이 생겨서 -1 다음으로 가능한 가장 작은 값은 1이다. 나머지 규칙은 그대로다.",
    anchor: "별표가-빈-문자열이-될-수-없다면",
  },
];
