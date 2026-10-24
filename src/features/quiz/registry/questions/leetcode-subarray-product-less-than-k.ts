import type { QuizQuestion } from "../types";

export const LEETCODE_SUBARRAY_PRODUCT_LESS_THAN_K: QuizQuestion[] = [
  {
    id: "leetcode-subarray-product-less-than-k-1",
    post: "leetcode-subarray-product-less-than-k",
    question: "창 [l, r]의 곱이 k 미만일 때 count에 r - l + 1을 더하는 이유는?",
    choices: [
      "창 길이가 곧 창 안의 모든 부분 배열 수라서",
      "원소가 1 이상이라 r에서 끝나는 더 짧은 구간 [l+1, r], ..., [r, r]도 모두 곱이 k 미만이라서",
      "l이 항상 0이라서",
      "r - l + 1이 창의 곱과 같아서",
    ],
    answer: 1,
    explanation:
      "창은 r에서 끝나는 통과 구간 가운데 가장 긴 것이다. 원소가 1 이상이라 짧게 자른 구간의 곱은 작거나 같으니 모두 통과하고, 그 수가 r - l + 1이다. 창 안의 모든 부분 배열 수는 L(L+1)/2라 그걸 더하면 겹쳐서 세게 된다.",
    anchor: "오른쪽-끝마다-창-길이만큼-더한다",
  },
  {
    id: "leetcode-subarray-product-less-than-k-2",
    post: "leetcode-subarray-product-less-than-k",
    question: "nums = [4, 2, 5, 1, 3], k = 20에서 곱이 20 미만인 연속 구간은 몇 개인가?",
    choices: ["9", "15", "11", "5"],
    answer: 2,
    explanation:
      "끝나는 칸별로 1, 2, 2, 3, 3개라 모두 11개다. 15는 가장 긴 창마다 L(L+1)/2를 더해 겹친 구간을 두 번 센 값이고, 5는 창 하나를 하나로 센 값이다.",
    anchor: "다섯-칸에서-열한-개를-세어-보기",
  },
  {
    id: "leetcode-subarray-product-less-than-k-3",
    post: "leetcode-subarray-product-less-than-k",
    question: "맨 앞의 if (k <= 1) return 0을 빼고 ([1, 2, 3], 1)을 JS로 돌리면?",
    choices: [
      "0이 나온다. 결과는 같다",
      "6이 나온다",
      "무한 루프에 빠진다",
      "음수가 나온다. 빈 창의 곱 1도 k 이상이라 l이 r을 넘어간다",
    ],
    answer: 3,
    explanation:
      "k가 1이면 창을 다 비워 곱이 1이 돼도 1 >= 1이라 줄이기가 멈추지 않는다. l이 배열 밖까지 가서 prod가 NaN이 된 뒤에야 빠져나오고, r - l + 1이 음수라 -3이 나온다. 빈 창이 조건을 만족해야 한다는 창의 전제가 깨진 것이다.",
    anchor: "k가-1-이하일-때-창이-뒤집힌다",
  },
  {
    id: "leetcode-subarray-product-less-than-k-4",
    post: "leetcode-subarray-product-less-than-k",
    question: "로그 누적 합 풀이에서 기준을 Math.log(k) 그대로 쓰면 ([2, 5, 3, 10], 30)의 답이 6이 아니라 7이 된다. 왜인가?",
    choices: [
      "log 2 + log 5 + log 3이 반올림 때문에 log 30보다 아주 조금 작게 나와 곱이 정확히 30인 구간이 통과로 세어져서",
      "로그는 감소 함수라서",
      "이분 탐색을 내림으로 해서",
      "10의 로그가 정수라서",
    ],
    answer: 0,
    explanation:
      "로그 세 개를 더한 값이 log 30보다 4.4e-16만큼 작게 계산된다. 그래서 곱이 정확히 k인 경계의 구간이 '미만'으로 판정된다. 기준을 log k - 1e-9처럼 살짝 낮춰야 하고, 정수만 쓰는 창은 이런 걱정이 없다.",
    anchor: "로그에-여유를-두지-않으면-생기는-일",
  },
  {
    id: "leetcode-subarray-product-less-than-k-5",
    post: "leetcode-subarray-product-less-than-k",
    question: "Java에서 브루트포스를 break 없이 int 곱으로 짰다. [1000, 1000, 1000, 1000, 1000], k = 100에서 무엇이 잘못되나?",
    choices: [
      "아무 문제 없다. 답 0이 나온다",
      "ArithmeticException이 난다",
      "곱이 int 범위를 넘어 음수나 작은 수로 감기고, 그게 k 미만으로 세어져 0이 아닌 답이 나온다",
      "곱이 Infinity가 되어 모두 탈락한다",
    ],
    answer: 2,
    explanation:
      "1000을 네 번 곱한 10^12는 int에서 -727,379,968로 감긴다. 이 음수가 100보다 작으니 통과로 세어져 실제로 3이 나왔다. 곱이 k 이상이 되면 바로 멈추는 break나 long이 필요하다. Infinity가 되는 건 JS의 경우다.",
    anchor: "곱-창의-pythonjava-판",
  },
];
