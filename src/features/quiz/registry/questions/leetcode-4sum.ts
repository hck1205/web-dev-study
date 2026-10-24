import type { QuizQuestion } from "../types";

export const LEETCODE_4SUM: QuizQuestion[] = [
  {
    id: "leetcode-4sum-1",
    post: "leetcode-4sum",
    question: "4Sum에서 둘째 수 중복을 if (b > 0 && nums[b] === nums[b - 1]) continue로 거르면 [2, 2, 2, 2, 2], target 8의 결과는?",
    choices: [
      "[[2, 2, 2, 2]]. 정답과 같다",
      "[[2, 2, 2, 2], [2, 2, 2, 2]]. 중복이 생긴다",
      "[]. 첫 수와 같은 값을 둘째 수로 쓰는 조합을 건너뛴다",
      "오류가 난다",
    ],
    answer: 2,
    explanation:
      "a = 0일 때 b = 1의 2가 nums[0]과 같아 건너뛰는데, nums[0]은 첫 수로 쓰는 칸이지 이번 층에서 고른 둘째 수가 아니다. 그래서 같은 값을 첫 수와 둘째 수로 함께 쓰는 조합을 모두 잃는다. 기준은 b > a + 1이다.",
    anchor: "둘째-수-중복을-b--0으로-거른다",
  },
  {
    id: "leetcode-4sum-2",
    post: "leetcode-4sum",
    question: "Java에서 long s = nums[a] + nums[b] + nums[l] + nums[r];로 쓰면 10억 네 개, target -294967296에서 어떻게 되나?",
    choices: [
      "오른쪽이 int로 먼저 더해져 -294967296으로 넘친 뒤 long이 되어, 목표와 같다고 잘못 판단한다",
      "변수가 long이라 40억이 정확히 계산되어 빈 결과가 나온다",
      "컴파일 오류가 난다",
      "ArithmeticException이 발생한다",
    ],
    answer: 0,
    explanation:
      "자바의 int 덧셈은 넘쳐도 예외 없이 2^32를 돌아 음수가 된다. 대입받는 변수가 long이어도 오른쪽 계산은 이미 int로 끝난 뒤다. (long) nums[a] + ...처럼 첫 항을 캐스트해야 나머지 덧셈이 모두 long으로 된다.",
    anchor: "python과-java에서-달라지는-것은-정수-넘침",
  },
  {
    id: "leetcode-4sum-3",
    post: "leetcode-4sum",
    question: "가지치기를 if (nums[a] > target) break로 쓰면 [-1, -2, -3, -4, -5], target -10에서 무슨 일이 생기나?",
    choices: [
      "정답 [[-4, -3, -2, -1]]이 그대로 나온다",
      "첫 수 -5가 -10보다 커서 바로 끝나 빈 배열이 나온다",
      "같은 조합이 두 번 나온다",
      "무한 루프에 빠진다",
    ],
    answer: 1,
    explanation:
      "음수를 더하면 합이 작아지니 첫 수가 목표보다 크다고 합도 크다는 보장이 없다. 3Sum의 nums[i] > 0 조건은 목표가 0이라 맞았던 것이다. 가장 작은 네 수의 합 nums[a] + nums[a+1] + nums[a+2] + nums[a+3]과 비교해야 부호와 상관없이 맞는다.",
    anchor: "3sum의-조기-종료를-그대로-옮긴다",
  },
  {
    id: "leetcode-4sum-4",
    post: "leetcode-4sum",
    question: "두 수 합을 해시맵에 담는 풀이가 모두 0인 200칸 배열에서 29초 가까이 걸린 이유는?",
    choices: [
      "해시맵의 해시 계산이 0에서 느려지기 때문에",
      "정렬을 하지 않아서",
      "모든 쌍의 합이 0이라 한 칸에 쌍이 몰리고, 뒤쪽 쌍마다 그 목록을 다 돌며 조합을 만들어 최악 O(n⁴)이 되기 때문에",
      "자바스크립트 Map이 19900개 이상의 값을 담지 못해서",
    ],
    answer: 2,
    explanation:
      "이 풀이의 실제 비용은 합이 맞는 앞쪽 쌍과 뒤쪽 쌍의 짝의 수다. 같은 합이 몰리면 그 수가 n⁴에 가까워진다. 같은 입력에 정렬 투 포인터는 같은 값을 건너뛰어 0.0ms였다.",
    anchor: "두-수-합을-해시맵에-모아-만나게-하기",
  },
  {
    id: "leetcode-4sum-5",
    post: "leetcode-4sum",
    question: "네 배열에서 하나씩 골라 합이 0인 경우의 수를 세는 4Sum II에 가장 알맞은 방법은?",
    choices: [
      "네 배열을 합쳐 정렬한 뒤 두 수를 고정하고 투 포인터를 돌린다",
      "앞 두 배열의 합마다 개수를 세어 두고, 뒤 두 배열의 합으로 -(c + d)의 개수를 더한다",
      "네 겹 반복으로 모두 센다",
      "kSum 재귀로 k = 4를 푼다",
    ],
    answer: 1,
    explanation:
      "개수만 세면 쌍 목록을 돌 필요가 없어 같은 합이 아무리 많아도 정확히 O(n²)이다. 18번에서 최악 O(n⁴)이던 해시맵 구조가 여기서는 최선이 된다. 정렬 투 포인터로 풀면 O(n³)이라 더 느리다.",
    anchor: "네-배열에서-하나씩-고르면",
  },
];
