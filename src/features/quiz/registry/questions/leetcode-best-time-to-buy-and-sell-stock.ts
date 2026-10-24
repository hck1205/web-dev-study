import type { QuizQuestion } from "../types";

export const LEETCODE_BEST_TIME_TO_BUY_AND_SELL_STOCK: QuizQuestion[] = [
  {
    id: "leetcode-best-time-to-buy-and-sell-stock-1",
    post: "leetcode-best-time-to-buy-and-sell-stock",
    question: "`[7, 9, 1, 3]`에서 `Math.max(...prices) - Math.min(...prices)`는 8을 돌려준다. 실제 답과 틀린 이유는?",
    choices: [
      "답은 8이 맞다. 최댓값과 최솟값의 차이가 곧 최대 이익이다",
      "답은 6이다. 9에 사서 3에 팔아야 한다",
      "답은 2다. 9인 날이 1인 날보다 앞이라 1에 사서 9에 팔 수 없다",
      "답은 0이다. 마지막 날 가격이 첫날보다 낮기 때문이다",
    ],
    answer: 2,
    explanation:
      "사는 날은 파는 날보다 앞이어야 한다. 9는 1보다 앞선 날이라 그 짝은 불가능하고, 가능한 최선은 7→9 또는 1→3의 2다. 순서 조건 때문에 전체 최댓값과 최솟값을 따로 구하는 방법은 쓸 수 없다.",
    anchor: "손으로-먼저-풀어-보기",
  },
  {
    id: "leetcode-best-time-to-buy-and-sell-stock-2",
    post: "leetcode-best-time-to-buy-and-sell-stock",
    question: "한 번 훑기 풀이에서 새 최저가를 만났을 때 `best`를 0으로 되돌리면 `[1, 10, 0, 8]`의 결과는?",
    choices: ["9", "8", "10", "0"],
    answer: 1,
    explanation:
      "0을 만나는 순간 앞에서 찾은 이익 9(1→10)가 지워지고, 그 뒤로는 0→8의 8만 남는다. 앞에서 찾은 거래는 이미 실제로 가능한 거래라 최저가가 바뀌어도 기록을 지우면 안 된다.",
    anchor: "지금까지의-최저가만-기억한다",
  },
  {
    id: "leetcode-best-time-to-buy-and-sell-stock-3",
    post: "leetcode-best-time-to-buy-and-sell-stock",
    question: "두 포인터 창 풀이에서 `prices[r] < prices[l]`이면 `l`을 한 칸씩 당기지 않고 `r`로 바로 옮긴다. 이게 가능한 이유는?",
    choices: [
      "배열이 정렬돼 있어서 l과 r 사이의 값은 볼 필요가 없다",
      "r이 l보다 항상 한 칸 앞에 있어서 결국 한 칸 이동과 같다",
      "LeetCode 제약상 가격이 1만 이하라서",
      "창 안에서 필요한 정보가 왼쪽 끝 값(지금까지의 최저가) 하나뿐이고, 더 싼 날이 나오면 그 앞의 날에 살 이유가 없어서",
    ],
    answer: 3,
    explanation:
      "앞으로의 어떤 파는 날에서도 prices[r]에 사는 것이 l에 사는 것보다 낫다. 창 안의 다른 원소를 하나씩 빼며 상태를 고칠 필요가 없으니 왼쪽 끝을 한 번에 점프시킨다. 창 안의 내용 전체를 관리하는 다른 슬라이딩 윈도 문제와 다른 점이다.",
    anchor: "창으로-보면-왼쪽-끝은-산-날이다",
  },
  {
    id: "leetcode-best-time-to-buy-and-sell-stock-4",
    post: "leetcode-best-time-to-buy-and-sell-stock",
    question: "가격 배열을 하루 변화량 배열로 바꾸면 이 문제는 어떤 문제와 같아지나?",
    choices: [
      "변화량 배열의 최대 연속 구간 합 (카데인 알고리즘)",
      "변화량 배열에서 양수의 개수 세기",
      "변화량 배열을 정렬한 뒤 가장 큰 값 고르기",
      "변화량 배열의 두 수 합이 목표가 되는 짝 찾기",
    ],
    answer: 0,
    explanation:
      "i에 사서 j에 판 이익은 i+1부터 j까지 변화량을 더한 값과 같다. 그래서 최대 이익은 최대 부분 배열 합이 되고, 카데인으로 O(n)에 푼다. 양수 변화량을 모두 더하는 건 여러 번 거래할 수 있는 122번 문제의 답이다.",
    anchor: "하루치-변화량을-이어-붙인다",
  },
  {
    id: "leetcode-best-time-to-buy-and-sell-stock-5",
    post: "leetcode-best-time-to-buy-and-sell-stock",
    question: "상태 DP(`hold`, `free`)에서 거래 횟수 제한이 없어지면(122번) 바뀌는 곳은?",
    choices: [
      "`free = max(free, hold + p)`가 `free = max(free, hold - p)`로 바뀐다",
      "`hold`를 0에서 시작한다",
      "`hold = max(hold, -p)`가 `hold = max(hold, free - p)`로 바뀐다",
      "반복문을 두 번 돌린다",
    ],
    answer: 2,
    explanation:
      "한 번만 거래할 때는 사기 전에 번 돈이 0이라 -p로 산다. 여러 번 거래하면 이미 번 돈 free를 들고 다시 살 수 있으니 free - p가 된다. 조건이 바뀔 때 점화식 한 줄만 바뀌는 게 상태 DP 틀의 장점이다.",
    anchor: "들고-있는가-비어-있는가",
  },
];
