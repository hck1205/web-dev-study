import type { QuizQuestion } from "../types";

export const LEETCODE_KTH_LARGEST_ELEMENT_IN_AN_ARRAY: QuizQuestion[] = [
  {
    id: "leetcode-kth-largest-element-in-an-array-1",
    post: "leetcode-kth-largest-element-in-an-array",
    question: "퀵셀렉트가 퀵 정렬과 같은 분할을 쓰면서도 평균 O(n)이 되는 이유는?",
    choices: [
      "분할 한 번이 O(log n)이라서",
      "기준값을 무작위로 고르면 비교 횟수가 절반으로 줄어서",
      "나눈 뒤 답이 있는 한쪽에만 들어가서 n + n/2 + n/4 + … 가 2n 정도로 끝나서",
      "같은 값을 한 덩어리로 묶어서",
    ],
    answer: 2,
    explanation:
      "퀵 정렬은 나눈 양쪽을 모두 다시 나누지만 퀵셀렉트는 목표 자리가 있는 쪽만 남긴다. 범위가 평균적으로 일정 비율씩 줄어드니 전체 일이 등비수열 합이 되어 O(n)이다. 무작위 기준값은 이 평균을 입력과 상관없이 지켜 주는 장치이지 비교 횟수 자체를 절반으로 만들지는 않는다.",
    anchor: "기준값-하나로-반씩-버린다",
  },
  {
    id: "leetcode-kth-largest-element-in-an-array-2",
    post: "leetcode-kth-largest-element-in-an-array",
    question: "1을 10만 개 채운 배열에서 Lomuto 분할 퀵셀렉트가 수 초씩 걸리는 이유는?",
    choices: [
      "모든 값이 기준값과 같아 작은 쪽이 늘 비고, 범위가 한 칸씩만 줄어들어서",
      "무작위 함수 호출이 느려서",
      "같은 값끼리 자리를 바꾸느라 swap이 n²번 일어나서",
      "TimSort가 이 입력을 알아보지 못해서",
    ],
    answer: 0,
    explanation:
      "Lomuto는 기준값보다 작은 값만 앞으로 모으는데, 모두 같은 값이면 작은 값이 하나도 없어 기준값이 범위 맨 앞에 놓인다. 무작위로 골라도 모두 같은 값이라 범위가 매번 하나씩만 줄어 O(n²)이 된다. 작은 것, 같은 것, 큰 것으로 나누는 3-way 분할이 이를 막는다.",
    anchor: "기준값-하나로-반씩-버린다",
  },
  {
    id: "leetcode-kth-largest-element-in-an-array-3",
    post: "leetcode-kth-largest-element-in-an-array",
    question: "3-way 분할에서 a[i]가 기준값보다 커서 gt 칸과 바꾼 뒤 i를 그대로 두는 이유는?",
    choices: [
      "i를 늘리면 배열 범위를 벗어나서",
      "뒤에서 가져온 값은 아직 보지 않은 값이라 다시 비교해야 해서",
      "gt를 줄였으니 i도 줄여야 균형이 맞아서",
      "기준값과 같은 값이 i 앞에 있어야 해서",
    ],
    answer: 1,
    explanation:
      "gt 칸은 아직 안 본 구간에 속하니 그 값이 작은지, 같은지, 큰지 모른다. i를 그대로 두고 다음 반복에서 그 값을 다시 본다. 작은 쪽으로 보낼 때는 lt 칸이 이미 본 같은 값이라 i를 함께 늘려도 된다.",
    anchor: "같은-값은-한가운데에-모은다",
  },
  {
    id: "leetcode-kth-largest-element-in-an-array-4",
    post: "leetcode-kth-largest-element-in-an-array",
    question: "크기 k인 최소 힙으로 [5, 2, 8, 1, 9, 3, 7], k = 3을 끝까지 처리하면 힙에 남는 값은?",
    choices: ["1, 2, 3", "5, 8, 9", "3, 5, 7", "7, 8, 9"],
    answer: 3,
    explanation:
      "크기가 3을 넘을 때마다 가장 작은 값을 버리므로 힙에는 큰 값 세 개만 남는다. 9, 8, 7이 남고, 그중 맨 위인 7이 세 번째로 큰 값이다. 5는 마지막에 7이 들어올 때 밀려난다.",
    anchor: "크기-k인-바구니에-큰-것만-남긴다",
  },
  {
    id: "leetcode-kth-largest-element-in-an-array-5",
    post: "leetcode-kth-largest-element-in-an-array",
    question: "값이 계속 들어오고, 들어올 때마다 지금까지의 k번째로 큰 값을 답해야 한다면 가장 알맞은 방법은?",
    choices: [
      "값이 올 때마다 3-way 퀵셀렉트를 다시 돌린다",
      "크기 k인 최소 힙을 유지하고 맨 위를 답한다",
      "값이 올 때마다 전체를 정렬한다",
      "값 세기 배열을 만들고 매번 처음부터 훑는다",
    ],
    answer: 1,
    explanation:
      "크기 k 힙은 값 하나마다 O(log k)로 갱신되고 답은 맨 위에서 O(1)에 읽는다. 퀵셀렉트와 정렬은 값이 올 때마다 전체를 다시 다뤄야 해서 스트림에 맞지 않는다. 데이터를 한 번만 앞에서 뒤로 읽는다는 점이 힙 풀이의 장점이다.",
    anchor: "면접관이-조건을-바꾸면",
  },
];
