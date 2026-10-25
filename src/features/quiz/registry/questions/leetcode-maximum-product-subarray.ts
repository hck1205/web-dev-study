import type { QuizQuestion } from "../types";

export const LEETCODE_MAXIMUM_PRODUCT_SUBARRAY: QuizQuestion[] = [
  {
    id: "leetcode-maximum-product-subarray-1",
    post: "leetcode-maximum-product-subarray",
    question: "카데인 알고리즘을 곱으로 옮긴 `cur = max(x, cur * x)`가 `[-2, 3, -4]`에서 틀리는 이유는?",
    choices: [
      "0이 없어서 새로 시작할 기회가 없기 때문",
      "가장 작은 곱 -6을 버려서, 다음 음수 -4를 만나 24로 뒤집힐 후보를 잃기 때문",
      "곱셈은 교환 법칙이 성립하지 않기 때문",
      "첫 칸이 음수면 항상 틀리기 때문",
    ],
    answer: 1,
    explanation:
      "1번 칸에서 끝나는 곱 중 -6은 가장 작아서 버려지지만, -4를 곱하면 24가 된다. 최댓값만 들면 3밖에 못 만든다. 음수가 크기 순서를 뒤집으니 가장 작은 곱도 함께 들어야 한다.",
    anchor: "지금-칸에서-끝나는-가장-큰-곱과-가장-작은-곱",
  },
  {
    id: "leetcode-maximum-product-subarray-2",
    post: "leetcode-maximum-product-subarray",
    question: "앞 칸에서 끝나는 구간이 여러 개인데도 가장 큰 곱과 가장 작은 곱 두 개만 기억하면 되는 이유는?",
    choices: [
      "구간이 많아야 두 개뿐이기 때문",
      "0을 만나면 기록이 초기화되기 때문",
      "x를 곱하면 크기 순서가 그대로이거나 통째로 뒤집혀서, 곱한 뒤의 양 끝은 곱하기 전 양 끝에서 나오기 때문",
      "값이 -10부터 10 사이라서",
    ],
    answer: 2,
    explanation:
      "양수를 곱하면 순서가 유지되고 음수를 곱하면 뒤집힌다. 어느 쪽이든 가운데 값이 곱한 뒤 맨 끝으로 튀어나오지 않는다. 그래서 다음 칸의 최대와 최소는 지금의 최대·최소와 x만으로 정해진다.",
    anchor: "왜-가장-큰-것과-가장-작은-것-두-개면-충분한가",
  },
  {
    id: "leetcode-maximum-product-subarray-3",
    post: "leetcode-maximum-product-subarray",
    question: "앞뒤 누적 곱 풀이에서 0을 만났을 때 곱을 1로 되돌리지 않으면 `[0, 2, 3, 0]`에 무엇이 나오나?",
    choices: ["6", "0", "2", "3"],
    answer: 1,
    explanation:
      "양 끝이 0이라 앞에서 가든 뒤에서 가든 첫 칸에서 곱이 0이 되고, 되돌리지 않으면 그 뒤로 계속 0이다. 답은 2 × 3 = 6이다. 0 다음 칸부터 새 토막으로 시작하려면 곱을 1로 되돌려야 한다.",
    anchor: "앞뒤-곱에서-0-다음에-되돌리지-않는-경우",
  },
  {
    id: "leetcode-maximum-product-subarray-4",
    post: "leetcode-maximum-product-subarray",
    question: "앞에서 한 번만 누적 곱을 구하면 `[-1, 3, 4, 0, -5, 2]`의 답 12를 못 찾는 이유는?",
    choices: [
      "12는 첫 토막의 뒷부분 [3, 4]의 곱이라 앞에서 시작하는 누적 곱에는 늘 -1이 붙기 때문",
      "0 때문에 누적 곱이 사라지기 때문",
      "음수 -5와 짝을 맞춰야 하기 때문",
      "누적 곱이 32비트를 넘기 때문",
    ],
    answer: 0,
    explanation:
      "앞에서 시작한 누적 곱은 토막의 앞부분 곱이라 -1을 떼어 낼 수 없다. 음수가 홀수 개인 토막의 답은 첫 음수까지를 버린 뒷부분일 수 있어서 뒤에서도 한 번 훑어야 한다.",
    anchor: "앞에서-한-번-뒤에서-한-번-곱해-본다",
  },
  {
    id: "leetcode-maximum-product-subarray-5",
    post: "leetcode-maximum-product-subarray",
    question: "`best`를 0으로 시작하면 틀리는 입력은?",
    choices: ["[0]", "[-2, 0, -1]", "[2, 3]", "[-2]"],
    answer: 3,
    explanation:
      "구간은 비어 있을 수 없어서 [-2]의 답은 -2다. best를 0으로 시작하면 있지도 않은 빈 구간의 0이 남는다. [-2, 0, -1]은 0을 고를 수 있어 답이 정말 0이라 우연히 맞는다.",
    anchor: "best를-0으로-시작하는-경우",
  },
];
