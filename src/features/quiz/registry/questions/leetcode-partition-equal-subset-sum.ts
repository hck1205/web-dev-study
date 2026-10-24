import type { QuizQuestion } from "../types";

export const LEETCODE_PARTITION_EQUAL_SUBSET_SUM: QuizQuestion[] = [
  {
    id: "leetcode-partition-equal-subset-sum-1",
    post: "leetcode-partition-equal-subset-sum",
    question: "두 묶음으로 똑같이 나누는 문제를 '합이 절반인 부분집합 찾기'로 바꿔도 되는 이유는?",
    choices: [
      "한쪽 묶음의 합이 절반이면 나머지 묶음의 합도 자동으로 절반이기 때문",
      "두 묶음의 원소 개수가 항상 같기 때문",
      "원소를 정렬하면 절반에서 나뉘기 때문",
      "합이 홀수인 입력은 주어지지 않기 때문",
    ],
    answer: 0,
    explanation:
      "전체 합에서 절반을 빼면 다시 절반이라, 한쪽만 맞추면 다른 쪽은 저절로 맞는다. 원소 개수는 달라도 된다. 합이 홀수인 입력도 주어지며 그때는 바로 false다.",
    anchor: "절반을-만드는-부분집합-하나만-찾으면-된다",
  },
  {
    id: "leetcode-partition-equal-subset-sum-2",
    post: "leetcode-partition-equal-subset-sum",
    question: "1차원 표를 작은 합부터 올라가며 갱신하면 `[1, 2, 5]`에서 무엇이 나오고, 왜 그런가?",
    choices: [
      "false. 5가 절반보다 커서",
      "true. 방금 2로 켠 dp[2]를 다시 읽어 2를 두 번 쓴 합 4를 만들기 때문",
      "false. dp[0]이 덮어써지기 때문",
      "true. 합 8이 짝수이기 때문",
    ],
    answer: 1,
    explanation:
      "s를 올라가며 갱신하면 dp[4]를 볼 때 읽는 dp[2]가 이번 2로 막 켜진 칸이다. 같은 원소를 두 번 쓴 셈이라 답이 false인데 true가 나온다. 큰 합부터 내려가면 dp[s - x]가 이번 원소를 보기 전 값이다.",
    anchor: "한-줄로-줄이려면-큰-합부터-내려간다",
  },
  {
    id: "leetcode-partition-equal-subset-sum-3",
    post: "leetcode-partition-equal-subset-sum",
    question: "Coin Change처럼 같은 원소를 여러 번 써도 되는 배낭 문제에서는 1차원 표를 어느 방향으로 돌려야 하나?",
    choices: [
      "큰 합부터 내려간다",
      "방향은 상관없다",
      "작은 합부터 올라간다",
      "한 번은 올라가고 한 번은 내려간다",
    ],
    answer: 2,
    explanation:
      "작은 합부터 올라가면 이번 원소로 켠 칸을 다시 읽어 같은 원소를 여러 번 쓸 수 있다. 0/1 배낭에서는 실수지만 무한 배낭에서는 바로 그게 필요하다. 반복 방향이 두 배낭을 가른다.",
    anchor: "한-줄로-줄이려면-큰-합부터-내려간다",
  },
  {
    id: "leetcode-partition-equal-subset-sum-4",
    post: "leetcode-partition-equal-subset-sum",
    question: "O(n × target) 풀이를 의사 다항 시간이라고 부르는 이유는?",
    choices: [
      "재귀를 쓰기 때문",
      "target이 입력의 길이가 아니라 값의 크기라, 값이 커지면 칸 수가 폭발하기 때문",
      "n이 200 이하로 작기 때문",
      "실제로는 지수 시간보다 느리기 때문",
    ],
    answer: 1,
    explanation:
      "target은 원소 값에 따라 정해지는 수라서, 값이 10^9쯤 되면 칸도 그만큼 필요하다. 일반형 분할 문제는 NP-완전이고, 이 문제는 값이 100 이하라 칸이 1만 개로 묶일 뿐이다.",
    anchor: "넣을지-말지-정하며-남은-합을-줄인다",
  },
  {
    id: "leetcode-partition-equal-subset-sum-5",
    post: "leetcode-partition-equal-subset-sum",
    question: "비트셋 풀이 `bits |= bits << x`가 같은 원소 x를 두 번 쓰지 않는 이유는?",
    choices: [
      "시프트가 x를 넣기 전의 bits 전체로 한 번에 계산되기 때문",
      "BigInt는 같은 비트를 두 번 켤 수 없기 때문",
      "x가 항상 홀수이기 때문",
      "OR 연산이 중복을 지우기 때문",
    ],
    answer: 0,
    explanation:
      "bits << x는 x를 보기 전의 bits로 한꺼번에 만든 값이다. 그 결과를 원래 bits와 합칠 뿐이라 방금 켠 비트에 다시 x를 더하는 일이 없다. 1차원 표의 뒤로 가기와 같은 효과다.",
    anchor: "비트-하나를-합-하나로-쓴다",
  },
];
