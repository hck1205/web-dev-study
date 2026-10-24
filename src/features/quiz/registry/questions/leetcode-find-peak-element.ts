import type { QuizQuestion } from "../types";

export const LEETCODE_FIND_PEAK_ELEMENT: QuizQuestion[] = [
  {
    id: "leetcode-find-peak-element-1",
    post: "leetcode-find-peak-element",
    question: "nums[mid] < nums[mid + 1]일 때 오른쪽 절반에 봉우리가 반드시 있는 이유는?",
    choices: [
      "배열이 오른쪽으로 갈수록 커지도록 정렬돼 있기 때문이다",
      "가장 큰 값은 항상 배열 오른쪽 절반에 있기 때문이다",
      "오르막을 따라 오른쪽으로 가면 처음 내려가기 직전 칸이 봉우리이고, 끝까지 오르면 배열 밖이 음의 무한대라 마지막 칸이 봉우리이기 때문이다",
      "mid + 1이 항상 봉우리이기 때문이다",
    ],
    answer: 2,
    explanation:
      "정렬이 아니라 '남긴 절반에 봉우리가 있다'는 보장이 이분 탐색을 가능하게 한다. 오르막 위에서 오른쪽으로 걸으면 내리막이 나오든 끝에 닿든 봉우리를 만난다. mid + 1 자신은 봉우리가 아닐 수 있다.",
    anchor: "오르막에-서-있으면-오른쪽에-봉우리가-있다",
  },
  {
    id: "leetcode-find-peak-element-2",
    post: "leetcode-find-peak-element",
    question: "nums = [1, 3, 2, 4, 6, 5, 2, 7]에서 lo < hi, 아래쪽 가운데, 오르막이면 lo = mid + 1, 아니면 hi = mid로 찾으면 돌려주는 인덱스는?",
    choices: ["1", "4", "7", "3"],
    answer: 1,
    explanation:
      "mid 3에서 4 < 6이라 lo = 4, mid 5에서 5 > 2라 hi = 5, mid 4에서 6 > 5라 hi = 4가 되어 4번(값 6)을 돌려준다. 1번과 7번도 봉우리지만 탐색 중에 버려졌다. 봉우리가 여럿이면 어느 것이든 정답이다.",
    anchor: "오르막에-서-있으면-오른쪽에-봉우리가-있다",
  },
  {
    id: "leetcode-find-peak-element-3",
    post: "leetcode-find-peak-element",
    question: "가장 큰 값의 인덱스를 돌려주는 풀이에 대한 설명으로 맞는 것은?",
    choices: [
      "가장 큰 값은 봉우리가 아닐 수 있어서 틀린 풀이다",
      "답은 맞지만 가장 큰 값은 어디든 있을 수 있어서 입력과 상관없이 항상 배열 끝까지 봐야 하는 O(n)이다",
      "O(log n)이라 이분 탐색과 같다",
      "봉우리가 많은 배열에서는 일찍 멈춰서 빠르다",
    ],
    answer: 1,
    explanation:
      "가장 큰 값의 자리는 이웃이 다르다는 조건 덕분에 항상 봉우리다. 하지만 '아무 봉우리나'라는 약한 질문을 '가장 높은 봉우리'로 바꿔 푼 셈이라 모든 칸을 봐야 한다. 무작위 배열에서 앞에서부터 보는 풀이는 바로 멈췄지만 이 풀이는 끝까지 갔다.",
    anchor: "가장-높은-칸은-언제나-봉우리다",
  },
  {
    id: "leetcode-find-peak-element-4",
    post: "leetcode-find-peak-element",
    question: "봉우리가 여러 개인 배열에서 삼분 탐색이 틀릴 수 있는 이유는?",
    choices: [
      "삼분 탐색은 정수 배열에 쓸 수 없기 때문이다",
      "비교 횟수가 이분 탐색보다 많아 시간 초과가 나기 때문이다",
      "멀리 떨어진 두 점 사이에는 봉우리와 골짜기가 여러 번 있을 수 있어서, 비교 결과가 봉우리가 남는 쪽을 보장하지 않기 때문이다",
      "가운데 두 점이 항상 같은 값이기 때문이다",
    ],
    answer: 2,
    explanation:
      "이분 탐색은 바로 옆 칸과 비교해 오르막인지 내리막인지를 정하니 그 방향에 봉우리가 있다는 논증이 성립한다. 삼분 탐색은 봉우리가 하나뿐인 산에서만 맞다. [1, 2, 6, 5, 4, 3, 7, 4, 2]에서는 봉우리가 아닌 3번을 돌려줬다.",
    anchor: "삼분-탐색과-위쪽-가운데가-틀리는-이유",
  },
  {
    id: "leetcode-find-peak-element-5",
    post: "leetcode-find-peak-element",
    question: "이웃한 값이 같을 수 있다는 조건으로 바뀌면 어떻게 되나?",
    choices: [
      "mid와 mid + 1이 같을 때 어느 쪽에 봉우리가 있는지 알 수 없어, 최악에는 모든 칸을 봐야 하는 O(n)이 된다",
      "같은 코드로 O(log n)이 유지된다",
      "삼분 탐색으로 바꾸면 O(log n)이 된다",
      "봉우리가 항상 배열 끝에 생긴다",
    ],
    answer: 0,
    explanation:
      "평평한 바닥 어딘가에 봉우리 하나가 숨어 있으면 어느 칸도 그 위치를 알려 주지 않는다. 실제로 [1, 1, 1, 2, 1, 1, 1]에서 원래 코드는 봉우리가 아닌 0번을 돌려줬다. 이웃이 다르다는 조건이 O(log n)의 바탕이다.",
    anchor: "같은-값이-붙거나-2차원이-되면",
  },
];
