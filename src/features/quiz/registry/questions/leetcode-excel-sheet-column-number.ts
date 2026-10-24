import type { QuizQuestion } from "../types";

export const LEETCODE_EXCEL_SHEET_COLUMN_NUMBER: QuizQuestion[] = [
  {
    id: "leetcode-excel-sheet-column-number-1",
    post: "leetcode-excel-sheet-column-number",
    question: "글자값을 A=0, ..., Z=25로 두고 26진수처럼 읽으면 어떤 문제가 생기나?",
    choices: [
      "Z가 26이 되어 범위를 넘는다",
      "A, AA, AAA가 모두 0이 되어 서로 구별되지 않는다",
      "계산이 int를 넘는다",
      "왼쪽부터 읽을 수 없게 된다",
    ],
    answer: 1,
    explanation:
      "0인 글자가 앞에 붙어도 값이 변하지 않으니 A, AA, AAA가 모두 0이다. 엑셀 이름은 0이 없는 진법이라 한 자리 값이 1~26이다. 그래서 글자값을 A=1부터 두어야 모든 이름이 서로 다른 번호를 얻는다.",
    anchor: "0이-없는-26진법",
  },
  {
    id: "leetcode-excel-sheet-column-number-2",
    post: "leetcode-excel-sheet-column-number",
    question: "왼쪽부터 result = result * 26 + 글자값으로 계산할 때 \"ZY\"의 중간값과 최종값은?",
    choices: [
      "25 다음 674",
      "26 다음 676",
      "26 다음 701",
      "25 다음 701",
    ],
    answer: 2,
    explanation:
      "Z는 26이라 0 × 26 + 26 = 26이고, Y는 25라 26 × 26 + 25 = 701이다. 25와 674는 A=0으로 읽었을 때의 값으로, 길이별로 묶어 세는 풀이에서 같은 길이 안의 순서를 구할 때만 쓴다.",
    anchor: "왼쪽부터-26을-곱하고-더한다",
  },
  {
    id: "leetcode-excel-sheet-column-number-3",
    post: "leetcode-excel-sheet-column-number",
    question: "번호를 열 이름으로 바꿀 때 26으로 나누기 전에 매번 1을 빼는 이유는?",
    choices: [
      "한 자리 값 1~26을 나머지 범위 0~25로 옮겨야 나머지가 그대로 A~Z의 순서가 되기 때문",
      "번호가 0부터 시작하기 때문",
      "넘침을 막기 위해서",
      "결과를 뒤집지 않으려고",
    ],
    answer: 0,
    explanation:
      "0이 없는 진법이라 한 자리 값은 1~26인데, 26으로 나눈 나머지는 0~25다. 1을 빼지 않으면 26의 나머지가 0이 되어 Z 대신 BA가 나온다. 반복마다 빼야 하고, 처음 한 번만 빼면 52가 AZ 대신 BZ가 된다.",
    anchor: "거꾸로-숫자를-열-이름으로",
  },
  {
    id: "leetcode-excel-sheet-column-number-4",
    post: "leetcode-excel-sheet-column-number",
    question: "Java에서 int로 왼쪽부터 26을 곱하는 풀이가 가장 큰 입력 FXSHRXW에서 넘치지 않는 이유는?",
    choices: [
      "Java가 넘침을 자동으로 long으로 바꿔 주어서",
      "26을 곱하기 전에 나머지 연산을 하기 때문",
      "중간값이 항상 26보다 작기 때문",
      "마지막 곱 82,595,524 × 26 = 2,147,483,624가 int 최댓값보다 작고, 23을 더해 정확히 최댓값이 되기 때문",
    ],
    answer: 3,
    explanation:
      "문제의 최댓값이 바로 2^31 - 1이고, 그 직전의 곱이 최댓값보다 23 작아서 넘치지 않는다. 범위를 하나 넘긴 FXSHRXX를 넣으면 실제로 -2,147,483,648이 나온다. Java는 넘침을 알려 주지 않으니 범위가 보장되지 않으면 long이나 Math.addExact를 쓴다.",
    anchor: "python과-java에서-글자를-숫자로",
  },
  {
    id: "leetcode-excel-sheet-column-number-5",
    post: "leetcode-excel-sheet-column-number",
    question: "parseInt(\"AB\", 26)이 271을 돌려주는 이유는?",
    choices: [
      "parseInt가 대문자를 무시해서",
      "표준 26진수는 0~9 다음 a~p를 쓰는 0 있는 진법이라 A를 10, B를 11로 읽기 때문",
      "parseInt가 오른쪽부터 읽어서",
      "A를 1, B를 2로 읽고 100을 곱해서",
    ],
    answer: 1,
    explanation:
      "parseInt의 26진수는 0이 있는 진법이고 글자도 다르게 쓴다. A=10, B=11로 읽어 10 × 26 + 11 = 271이다. 엑셀 열 AB는 1 × 26 + 2 = 28이다. Z는 26진수 숫자가 아니라 parseInt(\"ZY\", 26)은 NaN이다.",
    anchor: "글자값과-진법에서-틀린다",
  },
];
