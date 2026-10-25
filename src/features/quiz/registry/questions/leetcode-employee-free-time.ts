import type { QuizQuestion } from "../types";

export const LEETCODE_EMPLOYEE_FREE_TIME: QuizQuestion[] = [
  {
    id: "leetcode-employee-free-time-1",
    post: "leetcode-employee-free-time",
    question: "모든 직원의 구간을 한 줄로 모을 때 누구의 구간인지 버려도 되는 이유는?",
    choices: [
      "직원끼리는 구간이 겹치지 않는다고 문제가 보장해서",
      "답이 직원 수와 상관없이 항상 하나뿐이라서",
      "한 사람이라도 바쁘면 그 시간은 모두의 빈 시간이 아니므로, 바쁜 시간의 합집합 바깥만 보면 되어서",
      "힙에 넣을 때 직원 번호가 필요 없어서",
    ],
    answer: 2,
    explanation:
      "모두가 쉬는 시간은 누구든 바쁜 시간의 바깥이다. 그래서 합집합만 구하면 되고 누가 바쁜지는 필요 없다. 겹치지 않는다는 보장은 한 직원 안에서만 있고, 직원끼리는 겹칠 수 있다.",
    anchor: "세-직원의-하루를-겹쳐-본다",
  },
  {
    id: "leetcode-employee-free-time-2",
    post: "leetcode-employee-free-time",
    question: "정렬 후 훑을 때 `end = Math.max(end, e)` 대신 `end = e`로 쓰면 `[[[1,10]],[[2,3],[5,6]]]`의 결과는?",
    choices: ["[]", "[[3,5]]", "[[10,10]]", "[[1,2]]"],
    answer: 1,
    explanation:
      "정렬하면 [1,10], [2,3], [5,6] 순서다. [2,3]을 지나며 끝이 3으로 줄어들어 5와 비교할 때 [3,5]를 틈으로 낸다. 실제로 그 사이에도 첫 직원은 바빠서 답은 빈 목록이다.",
    anchor: "바로-앞-구간의-끝과-비교한다",
  },
  {
    id: "leetcode-employee-free-time-3",
    post: "leetcode-employee-free-time",
    question: "사건 스위프로 풀 때 같은 시각의 시작과 끝은 어떤 순서로 처리해야 하나?",
    choices: [
      "시작(+1)을 먼저 처리한다. 끝을 먼저 빼면 그 순간 0이 되어 길이 0인 틈이 생긴다",
      "끝(-1)을 먼저 처리한다. Meeting Rooms와 같다",
      "순서는 상관없다",
      "입력에 나온 순서를 지킨다",
    ],
    answer: 0,
    explanation:
      "7에 끝나는 구간과 7에 시작하는 구간이 있을 때 끝을 먼저 빼면 바쁜 사람 수가 0이 되고 [7,7]이 답에 끼어든다. 시작을 먼저 더하면 0을 거치지 않는다. 방을 나눠 쓰려고 끝을 먼저 빼던 Meeting Rooms와 반대다.",
    anchor: "바쁜-사람-수를-세다가-0이-되는-곳",
  },
  {
    id: "leetcode-employee-free-time-4",
    post: "leetcode-employee-free-time",
    question: "힙으로 직원별 목록을 병합하는 풀이의 시간 복잡도가 O(N log k)인 이유는?",
    choices: [
      "직원 수 k번만 힙 연산을 해서",
      "힙에 처음부터 N개를 모두 넣고 k번만 꺼내서",
      "정렬을 직원 수만큼만 해서",
      "힙에 직원마다 다음 구간 하나씩, 많아야 k개만 있어서 N번의 연산이 각각 O(log k)라서",
    ],
    answer: 3,
    explanation:
      "구간 N개를 모두 한 번씩 꺼내니 힙 연산은 N번이다. 힙에는 직원마다 다음에 볼 구간 하나만 있어 크기가 k 이하이고, 그래서 연산 하나가 O(log k)다. 처음부터 N개를 넣으면 O(N log N)이 된다.",
    anchor: "직원마다-이미-정렬돼-있다는-걸-쓴다",
  },
  {
    id: "leetcode-employee-free-time-5",
    post: "leetcode-employee-free-time",
    question: "100만 개 구간에서 모아서 정렬하는 풀이가 힙 병합보다 빨랐던 이유로 가장 알맞은 것은?",
    choices: [
      "JavaScript 정렬이 O(N)이라서",
      "TimSort가 이어 붙인 직원별 정렬된 런을 찾아 병합해서, 정렬이 사실상 k개 병합이 되었기 때문에",
      "힙 풀이에 버그가 있어서",
      "구간이 모두 겹치지 않아서",
    ],
    answer: 1,
    explanation:
      "직원별 목록을 flat으로 이으면 정렬된 런이 직원 수만큼 생긴다. TimSort는 런을 찾아 병합하니 섞은 입력(2.5초)보다 훨씬 빨랐다(0.6초). 힙 방식의 장점은 속도보다 O(k) 메모리와 흘려 읽기다.",
    anchor: "정렬-한-번이-의외로-빠른-이유",
  },
];
