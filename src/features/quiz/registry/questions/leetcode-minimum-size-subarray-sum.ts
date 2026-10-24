import type { QuizQuestion } from "../types";

export const LEETCODE_MINIMUM_SIZE_SUBARRAY_SUM: QuizQuestion[] = [
  {
    id: "leetcode-minimum-size-subarray-sum-1",
    post: "leetcode-minimum-size-subarray-sum",
    question: "출발점마다 누적 합 배열에서 끝점을 이분 탐색할 수 있는 이유는?",
    choices: [
      "nums가 정렬돼 있어서",
      "target이 10억 이하라서",
      "원소가 모두 양수라 누적 합 배열이 오름차순이어서",
      "누적 합 배열의 길이가 n + 1이라서",
    ],
    answer: 2,
    explanation:
      "원소가 양수면 칸을 더할수록 누적 합이 커지니 pre는 오름차순이다. 그래서 pre[j] >= pre[i] + target인 첫 j를 lower bound로 찾을 수 있다. nums 자체는 정렬돼 있지 않다.",
    anchor: "누적-합-위에서-끝점을-이분-탐색한다",
  },
  {
    id: "leetcode-minimum-size-subarray-sum-2",
    post: "leetcode-minimum-size-subarray-sum",
    question: "창 풀이에서 답을 while 안이 아니라 while이 끝난 뒤에 쟀다. (8, [1,4,2,1,5,3,1])에서 무엇이 나오나?",
    choices: ["1", "2", "3", "0"],
    answer: 0,
    explanation:
      "while을 빠져나온 창은 합이 target보다 작은 창이다. 조건을 어긴 창의 길이를 재니 정답 2보다 짧은 1이 나온다. 가장 짧은 창은 만족하는 동안, 줄이기 직전에 잰다.",
    anchor: "답을-재는-자리가-틀린-코드들",
  },
  {
    id: "leetcode-minimum-size-subarray-sum-3",
    post: "leetcode-minimum-size-subarray-sum",
    question: "best를 nums.length로 시작하고 끝에서 그대로 돌려줬다. (3, [1, 1])에서 무엇이 잘못되나?",
    choices: [
      "1이 나온다. 한 칸이면 충분하다고 본다",
      "무한 루프에 빠진다",
      "0이 나와서 맞다",
      "2가 나온다. 답이 없는데 전체 구간 길이가 남는다",
    ],
    answer: 3,
    explanation:
      "전체 합이 2라 답이 없으니 0이어야 한다. n은 실제로 나올 수 있는 답이라 '없음'과 구분되지 않는다. Infinity나 n + 1처럼 나올 수 없는 값으로 시작해야 한다.",
    anchor: "답을-재는-자리가-틀린-코드들",
  },
  {
    id: "leetcode-minimum-size-subarray-sum-4",
    post: "leetcode-minimum-size-subarray-sum",
    question: "l을 당긴 뒤 그 앞의 출발점을 다시 보지 않아도 되는 이유로 맞는 것은?",
    choices: [
      "앞의 출발점은 원소가 작아서",
      "그 출발점은 지금 r로 target을 채워 최단 구간을 이미 기록했고, 더 뒤의 끝점은 길이만 늘어나서",
      "l이 r보다 커질 수 없어서",
      "이분 탐색으로 이미 확인해서",
    ],
    answer: 1,
    explanation:
      "l은 합이 target 이상임을 확인하고 길이를 기록한 다음에만 움직인다. 양수라 끝점이 처음 target을 채운 자리가 그 출발점의 최단이고, 더 뒤로 가면 더 길다. 그래서 버려진 출발점에 숨은 답이 없다.",
    anchor: "덜어-낸-앞-칸이-다시-필요-없는-이유",
  },
  {
    id: "leetcode-minimum-size-subarray-sum-5",
    post: "leetcode-minimum-size-subarray-sum",
    question: "음수가 섞인 배열(862번)에서 합이 k 이상인 가장 짧은 구간을 O(n)에 구하려면?",
    choices: [
      "같은 창을 쓰되 while을 if로 바꾼다",
      "배열을 정렬한 뒤 창을 쓴다",
      "누적 합 인덱스를 덱에 담고, 뒤에서 같거나 작은 누적 합이 오면 앞 후보를 버려 증가 순서를 유지한다",
      "누적 합 위에서 끝점을 이분 탐색한다",
    ],
    answer: 2,
    explanation:
      "음수가 있으면 줄일 때 합이 작아진다는 보장이 없어 창이 틀리고, 누적 합도 오름차순이 아니라 이분 탐색도 틀린다. 덱에 증가하는 누적 합만 남기면 각 인덱스가 한 번 들어오고 한 번 나가 O(n)이다.",
    anchor: "음수가-섞이거나-조건이-바뀌면",
  },
];
