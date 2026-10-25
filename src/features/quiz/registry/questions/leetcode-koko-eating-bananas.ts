import type { QuizQuestion } from "../types";

export const LEETCODE_KOKO_EATING_BANANAS: QuizQuestion[] = [
  {
    id: "leetcode-koko-eating-bananas-1",
    post: "leetcode-koko-eating-bananas",
    question: "정렬된 배열이 없는 이 문제에 이분 탐색을 쓸 수 있는 이유는?",
    choices: [
      "더미를 크기순으로 정렬하면 정렬된 배열이 생기기 때문이다",
      "속도를 올리면 걸리는 시간이 줄거나 같아서, 'h시간 안에 되나'가 속도 순으로 F에서 T로 한 번만 바뀌기 때문이다",
      "더미 개수가 10^4 이하라서 어떤 방법이든 빠르기 때문이다",
      "h가 항상 더미 개수 이상이기 때문이다",
    ],
    answer: 1,
    explanation:
      "이분 탐색에 필요한 건 정렬이 아니라 단조성이다. 더미마다 ⌈p / k⌉는 k를 키울수록 줄거나 같으니 판정이 한 번만 바뀐다. 더미를 정렬해도 답에는 아무 영향이 없다.",
    anchor: "속도-하나를-정하면-시간이-나온다",
  },
  {
    id: "leetcode-koko-eating-bananas-2",
    post: "leetcode-koko-eating-bananas",
    question: "`piles = [4, 9, 6, 13]`, `h = 7`일 때 속도 5와 속도 6으로 걸리는 시간은?",
    choices: ["8시간과 7시간", "7시간과 6시간", "6시간과 6시간", "9시간과 7시간"],
    answer: 0,
    explanation:
      "속도 5면 1 + 2 + 2 + 3 = 8시간, 속도 6이면 1 + 2 + 1 + 3 = 7시간이다. 그래서 7시간 안에 되는 가장 느린 속도는 6이다. 총량 32를 7로 나눈 평균 속도 5가 답이 아닌 이유는 더미 경계에서 쉬는 시간이 생기기 때문이다.",
    anchor: "속도-하나를-정하면-시간이-나온다",
  },
  {
    id: "leetcode-koko-eating-bananas-3",
    post: "leetcode-koko-eating-bananas",
    question: "판정 함수에서 `Math.ceil(p / k)` 대신 `Math.floor(p / k)`를 쓰면 예시(`[4, 9, 6, 13]`, 7시간)의 결과는 어떻게 되나?",
    choices: [
      "6 그대로다. 내림과 올림은 이 입력에서 차이가 없다",
      "무한 루프에 빠진다",
      "4가 나온다. 남은 바나나를 세지 않아 너무 느린 속도도 된다고 판정한다",
      "13이 나온다. 모든 속도가 안 된다고 판정한다",
    ],
    answer: 2,
    explanation:
      "내림하면 속도 4의 시간을 1 + 2 + 1 + 3 = 7로 세서 된다고 본다. 실제로는 10시간이다. 남은 몇 개도 한 시간을 통째로 쓰니 올림이어야 한다.",
    anchor: "이렇게-짜면-틀린다",
  },
  {
    id: "leetcode-koko-eating-bananas-4",
    post: "leetcode-koko-eating-bananas",
    question: "답의 범위를 `[1, max(piles)]`에서 `[⌈합/h⌉, ⌈합/(h−n+1)⌉]`로 좁혔다. 큰 입력에서 판정 횟수는 어떻게 되나?",
    choices: [
      "1/4로 줄어든다",
      "범위가 줄어든 비율의 로그만큼, 몇 번 정도만 준다",
      "O(n log M)이 O(n)으로 바뀐다",
      "오히려 늘어난다",
    ],
    answer: 1,
    explanation:
      "이분 탐색은 범위를 반씩 줄이니 범위를 1/4로 줄여도 log₂ 4 = 2번만 아낀다. 글의 큰 입력에서도 20번이 18번이 됐다. 범위 식은 속도보다 답의 범위에 근거를 대는 데 쓸모가 있다.",
    anchor: "범위를-수학으로-더-좁혀-본다",
  },
  {
    id: "leetcode-koko-eating-bananas-5",
    post: "leetcode-koko-eating-bananas",
    question: "구간을 '답이 반드시 [lo, hi] 안에 있다'로 정했을 때 맞는 짝은?",
    choices: [
      "`while (lo <= hi)`, 되면 `hi = mid - 1`, 안 되면 `lo = mid + 1`, 마지막에 hi를 돌려준다",
      "`while (lo <= hi)`, 되면 `hi = mid`, 안 되면 `lo = mid + 1`",
      "`while (lo < hi)`, 되면 `lo = mid`, 안 되면 `hi = mid - 1`, mid는 내림",
      "`while (lo < hi)`, 되면 `hi = mid`, 안 되면 `lo = mid + 1`, mid는 내림",
    ],
    answer: 3,
    explanation:
      "되는 mid는 답일 수 있으니 남기고, 안 되는 mid는 빼낸다. 답이 반드시 있으니 한 칸이 남으면 그게 답이라 lo < hi로 돈다. lo <= hi와 hi = mid를 섞으면 lo === hi에서 구간이 줄지 않아 영영 돈다.",
    anchor: "가운데-속도부터-시험한다",
  },
];
