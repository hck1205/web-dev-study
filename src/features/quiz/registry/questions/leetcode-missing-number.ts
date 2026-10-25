import type { QuizQuestion } from "../types";

export const LEETCODE_MISSING_NUMBER: QuizQuestion[] = [
  {
    id: "leetcode-missing-number-1",
    post: "leetcode-missing-number",
    question: "XOR 풀이에서 누적값 acc를 0이 아니라 n(배열 길이)으로 시작하는 이유는?",
    choices: [
      "n을 넣으면 결과가 항상 양수가 되기 때문",
      "인덱스는 0부터 n - 1까지라 있어야 할 수 중 n만 한 번도 들어가지 않기 때문",
      "배열의 마지막 원소가 항상 n이기 때문",
      "0으로 시작하면 XOR가 아무 값도 바꾸지 못하기 때문",
    ],
    answer: 1,
    explanation:
      "인덱스가 있어야 할 수 0부터 n - 1을 대신하고, 남는 n은 따로 넣어야 0부터 n까지가 모두 한 번씩 섞인다. 0으로 시작하면 결과가 빠진 수 ^ n이 되어 틀린다. 0과 XOR하면 값이 그대로일 뿐 연산이 무의미해지는 건 아니다.",
    anchor: "인덱스와-값을-함께-xor한다",
  },
  {
    id: "leetcode-missing-number-2",
    post: "leetcode-missing-number",
    question: "nums = [3, 0, 4, 1, 5]에서 acc = 5로 시작해 인덱스 0, 1, 2까지 acc ^= i ^ nums[i]를 마쳤을 때 acc의 값은?",
    choices: ["6", "7", "2", "1"],
    answer: 3,
    explanation:
      "5 ^ 0 ^ 3 = 6, 6 ^ 1 ^ 0 = 7, 7 ^ 2 ^ 4 = 1이다. 중간 값은 여러 수가 섞인 상태라 뜻이 없어 보이고, 마지막 두 칸까지 마쳐야 빠진 수 2가 남는다.",
    anchor: "인덱스와-값을-함께-xor한다",
  },
  {
    id: "leetcode-missing-number-3",
    post: "leetcode-missing-number",
    question: "Java에서 int로 n * (n + 1) / 2 - sum을 계산하면 n이 아주 클 때 틀릴 수 있다. 가장 정확한 이유는?",
    choices: [
      "곱셈 결과가 2^31을 넘어 넘친 뒤 나눗셈을 하므로, 나머지로 돌아온 값이 엉뚱해진다",
      "Java의 정수 나눗셈은 항상 반올림하기 때문",
      "배열의 합 sum을 구할 때만 넘치고 공식은 안전하기 때문",
      "Java는 넘치면 예외를 던지기 때문",
    ],
    answer: 0,
    explanation:
      "n이 65536이면 n * (n + 1)이 이미 2^31을 넘고, 넘친 값에 / 2를 하면 32768 같은 엉터리가 나온다. Java는 예외 없이 조용히 넘친다. 더하기와 빼기만 쓰는 차이 쌓기는 중간에 넘쳐도 최종값이 범위 안이면 맞게 돌아온다.",
    anchor: "있어야-할-합에서-실제-합을-뺀다",
  },
  {
    id: "leetcode-missing-number-4",
    post: "leetcode-missing-number",
    question: "정렬 풀이에서 '처음으로 a[i] !== i인 자리'를 돌려주고 반복 뒤에 아무것도 돌려주지 않았다. [0, 1]을 넣으면?",
    choices: [
      "0을 돌려준다",
      "1을 돌려준다",
      "모든 칸이 맞아 반복 안에서 돌려주지 못하고 undefined가 나온다",
      "2를 돌려준다",
    ],
    answer: 2,
    explanation:
      "[0, 1]은 n = 2가 빠진 배열이라 모든 칸에서 값과 인덱스가 같다. 반복이 끝까지 맞으면 빠진 수는 n이므로 마지막에 a.length를 돌려줘야 한다. 이 줄을 빼면 undefined가 나와 오답이다.",
    anchor: "빈칸이-끝에-있거나-처음에-있을-때",
  },
  {
    id: "leetcode-missing-number-5",
    post: "leetcode-missing-number",
    question: "순환 정렬 풀이가 while문 안에서 맞바꾼 뒤 i를 늘리지 않는 이유는?",
    choices: [
      "i를 늘리면 무한 루프에 빠지기 때문",
      "맞바꾸면 i번 칸에 새 값이 오는데, 그 값도 제 칸으로 보내야 하기 때문",
      "i는 항상 n까지만 가야 하기 때문",
      "맞바꾼 값은 이미 제자리라 다시 볼 필요가 없기 때문",
    ],
    answer: 1,
    explanation:
      "0번 칸의 3을 3번 칸으로 보내면 0번 칸에는 1이 온다. 여기서 넘어가 버리면 1은 제자리에 가지 못한다. 맞바꿀 때마다 값 하나가 확정되니 맞바꾸기는 최대 n번이라 전체는 여전히 O(n)이다.",
    anchor: "값을-제자리로-돌려보내는-순환-정렬",
  },
  {
    id: "leetcode-missing-number-6",
    post: "leetcode-missing-number",
    question: "정렬된 배열에서 빠진 수를 이진 탐색으로 찾을 때 hi를 a.length - 1이 아니라 a.length로 두는 이유는?",
    choices: [
      "mid 계산에서 0으로 나누지 않으려고",
      "a.length - 1로 두면 시간이 O(n)이 되기 때문",
      "빠진 수가 n이면 답이 배열 밖 인덱스 n이기 때문",
      "배열의 첫 칸을 건너뛰기 위해",
    ],
    answer: 2,
    explanation:
      "[0, 1, 2]처럼 n이 빠지면 모든 칸이 a[i] === i라 답은 3, 즉 배열 길이다. 탐색 범위를 배열 길이까지 열어 둬야 그 답에 닿는다. 범위를 좁게 잡으면 2를 돌려주는 off-by-one이 생긴다.",
    anchor: "정렬돼-있거나-빈칸이-둘이거나-중복이-섞이면",
  },
];
