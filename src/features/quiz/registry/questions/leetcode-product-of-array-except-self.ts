import type { QuizQuestion } from "../types";

export const LEETCODE_PRODUCT_OF_ARRAY_EXCEPT_SELF: QuizQuestion[] = [
  {
    id: "leetcode-product-of-array-except-self-1",
    post: "leetcode-product-of-array-except-self",
    question: "전체 곱을 구해 칸마다 자기 값으로 나누는 풀이에 `[3, 0, 5, 4]`를 넣으면 1번 칸(값 0)에 무엇이 나오나?",
    choices: ["60", "0", "NaN", "Infinity"],
    answer: 2,
    explanation:
      "전체 곱이 이미 0이라 1번 칸은 0 / 0을 계산하게 되고 NaN이 나온다. 정답은 3 × 5 × 4 = 60인데, 전체 곱에 0이 섞이는 순간 0이 아닌 값들의 곱이라는 정보가 사라져 나눗셈으로는 되살릴 수 없다.",
    anchor: "전체-곱을-나누면-안-되나",
  },
  {
    id: "leetcode-product-of-array-except-self-2",
    post: "leetcode-product-of-array-except-self",
    question: "답 배열에 왼쪽 곱을 채우는 반복문에서 `left *= nums[i]`를 `ans[i] = left`보다 먼저 쓰면 `[3, 2, 5, 4]`의 결과는?",
    choices: ["[40, 60, 24, 30]", "[120, 120, 120, 120]", "[1, 3, 6, 30]", "[360, 240, 600, 480]"],
    answer: 3,
    explanation:
      "곱하고 나서 적으면 왼쪽 곱에 자기 값이 들어가고, 오른쪽 반복문도 같은 순서라면 자기 값이 한 번 더 곱해진다. 그래서 정답에 자기 값의 제곱이 곱해진 [360, 240, 600, 480]이 나온다. 누적 값은 먼저 적고 나중에 곱한다.",
    anchor: "0과-음수에서-틀리는-코드",
  },
  {
    id: "leetcode-product-of-array-except-self-3",
    post: "leetcode-product-of-array-except-self",
    question: "오른쪽 곱을 배열이 아니라 변수 하나로 들고 가도 되는 이유는?",
    choices: [
      "뒤에서 앞으로 훑을 때 각 칸의 오른쪽 곱은 한 번 쓰고 나면 다시 볼 일이 없기 때문",
      "오른쪽 곱은 항상 왼쪽 곱보다 작기 때문",
      "결과 배열이 오른쪽 곱을 자동으로 기억하기 때문",
      "곱셈은 교환법칙이 성립해 오른쪽 곱이 모든 칸에서 같기 때문",
    ],
    answer: 0,
    explanation:
      "뒤에서 훑으면 i번 칸의 오른쪽 곱을 쓴 직후 i - 1번 칸으로 넘어가고, 그 값은 방금 값에 nums[i]를 곱한 것이라 지난 값을 따로 남길 필요가 없다. 오른쪽 곱은 칸마다 다르니 모든 칸에서 같다는 보기는 틀렸다.",
    anchor: "답-배열에-왼쪽-곱부터-채운다",
  },
  {
    id: "leetcode-product-of-array-except-self-4",
    post: "leetcode-product-of-array-except-self",
    question: "양 끝에서 동시에 채우는 한 번 훑기 풀이에서 반드시 지켜야 하는 것은?",
    choices: [
      "앞쪽 손이 끝까지 간 다음에 뒤쪽 손을 움직인다",
      "ans를 1로 채워 두고 =가 아니라 *=로 곱해 넣는다",
      "가운데 칸은 한 번만 곱한다",
      "0이 있으면 반복문을 멈춘다",
    ],
    answer: 1,
    explanation:
      "각 칸은 앞쪽 손과 뒤쪽 손에게 한 번씩, 어느 쪽이 먼저든 곱해져야 한다. 그래서 1로 시작해 *=로 쌓아야 하고, =로 쓰면 먼저 들어간 쪽의 곱을 덮어쓴다. 곱셈은 순서를 바꿔도 같으니 손의 순서는 상관없다.",
    anchor: "양-끝에서-동시에-채우는-한-번-훑기",
  },
  {
    id: "leetcode-product-of-array-except-self-5",
    post: "leetcode-product-of-array-except-self",
    question: "답을 12345로 나눈 나머지로 구하라는 변형(LeetCode 2906)에서 왼쪽·오른쪽 곱 풀이가 나눗셈 풀이보다 나은 이유는?",
    choices: [
      "나머지 연산을 하면 곱이 항상 0이 되기 때문",
      "왼쪽·오른쪽 곱 풀이만 O(n)이기 때문",
      "12345는 소수가 아니라서 역원이 없는 값이 생겨 나눌 수 없지만, 곱셈만 쓰는 풀이는 그대로 통하기 때문",
      "나눗셈 풀이는 음수를 다룰 수 없기 때문",
    ],
    answer: 2,
    explanation:
      "12345는 3 × 5 × 823이라 3이나 5의 배수에는 모듈러 역원이 없다. 나눗셈 풀이는 여기서 막히지만 왼쪽 곱과 오른쪽 곱을 곱하는 풀이는 곱셈만 쓰니 나머지 연산을 섞어도 그대로 된다. 두 풀이 모두 O(n)이라 속도 차이가 이유는 아니다.",
    anchor: "조건이-바뀌면",
  },
];
