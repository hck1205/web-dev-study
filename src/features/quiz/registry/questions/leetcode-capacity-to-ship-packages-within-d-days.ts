import type { QuizQuestion } from "../types";

export const LEETCODE_CAPACITY_TO_SHIP_PACKAGES_WITHIN_D_DAYS: QuizQuestion[] = [
  {
    id: "leetcode-capacity-to-ship-packages-within-d-days-1",
    post: "leetcode-capacity-to-ship-packages-within-d-days",
    question: "용량을 정하고 앞에서부터 꽉 채워 센 날수가 그 용량의 최소 날수인 이유는?",
    choices: [
      "짐을 무게순으로 정렬해 두었기 때문이다",
      "그리디가 매일 끝날 때 어떤 올바른 계획보다 같거나 많은 짐을 보내 둔 상태라, 다른 계획이 k일에 끝나면 그리디도 k일 안에 끝나기 때문이다",
      "용량이 항상 전체 합 이상이기 때문이다",
      "짐 무게가 500 이하이기 때문이다",
    ],
    answer: 1,
    explanation:
      "첫날 들어가는 만큼 다 실으니 그리디가 앞서고, 다음 날도 같거나 앞선 위치에서 같은 용량으로 채우니 계속 앞선다. 짐 순서를 바꿀 수 없다는 조건이 이 논증의 바탕이다. 정렬은 오히려 다른 문제를 만든다.",
    anchor: "용량을-정하면-날수는-앞에서부터-채워-센다",
  },
  {
    id: "leetcode-capacity-to-ship-packages-within-d-days-2",
    post: "leetcode-capacity-to-ship-packages-within-d-days",
    question: "weights = [3, 1, 4, 1, 5], days = 2에서 lo = 5, hi = 14로 이분 탐색할 때 시험하는 용량의 순서는?",
    choices: ["9, 7, 8", "9, 11, 10", "10, 7, 8", "9, 6, 7, 8"],
    answer: 0,
    explanation:
      "mid 9는 이틀이라 되고 hi = 9, mid 7은 사흘이라 안 되고 lo = 8, mid 8은 이틀이라 되고 hi = 8이 되어 끝난다. 답은 8이다. 되면 mid를 남기고 안 되면 mid를 버리는 조합이라 세 번 만에 끝난다.",
    anchor: "되는-용량과-안-되는-용량의-경계를-반씩-좁힌다",
  },
  {
    id: "leetcode-capacity-to-ship-packages-within-d-days-3",
    post: "leetcode-capacity-to-ship-packages-within-d-days",
    question: "이분 탐색의 lo를 max(weights)가 아니라 1로 잡으면 어떻게 되나?",
    choices: [
      "판정 횟수가 조금 늘 뿐 답은 같다",
      "무한 루프에 빠진다",
      "최대 짐보다 작은 용량에서 판정이 실을 수 없는 짐을 그냥 싣고 날수를 세서, days가 클 때 틀린 작은 답이 나온다",
      "자바에서 오버플로가 난다",
    ],
    answer: 2,
    explanation:
      "용량 2로 [3, 1, 4, 1, 5]를 세면 짐이 5개인데 6일이 나오는 식으로 판정이 엉터리가 된다. 그래서 5일에 보내는 답이 5가 아니라 3으로 나온다. Koko 문제와 달리 하한이 1이 아니라 가장 무거운 짐이다.",
    anchor: "짐-순서를-건드리면-답이-바뀐다",
  },
  {
    id: "leetcode-capacity-to-ship-packages-within-d-days-4",
    post: "leetcode-capacity-to-ship-packages-within-d-days",
    question: "용량을 ⌈합 / days⌉ + max - 1로 잡으면 그리디가 반드시 days일 안에 끝나는 이유는?",
    choices: [
      "그 용량이 항상 전체 합보다 크기 때문이다",
      "그리디는 다음 짐이 안 들어갈 때만 하루를 끝내니 그날 무게가 ⌈합 / days⌉ 이상이고, days일을 꽉 채우면 이미 합 이상을 보낸 셈이기 때문이다",
      "가장 무거운 짐이 맨 끝에 있기 때문이다",
      "무게가 모두 같기 때문이다",
    ],
    answer: 1,
    explanation:
      "하루를 끝낸 날의 무게는 용량 + 1 - w 이상이고 w는 max 이하라 ⌈합 / days⌉ 이상이다. 그래서 답의 범위 폭이 짐 하나 무게보다 작아진다. 이 범위로 이분 탐색하면 판정 횟수가 log(max)로 준다.",
    anchor: "하한을-평균으로-당기면-남는-폭은-짐-하나-무게다",
  },
  {
    id: "leetcode-capacity-to-ship-packages-within-d-days-5",
    post: "leetcode-capacity-to-ship-packages-within-d-days",
    question: "판정에서 load + w > cap 대신 load + w >= cap을 쓰면 [3, 1, 4, 1, 5], days = 2의 답은?",
    choices: ["8 그대로다", "7", "14", "9"],
    answer: 3,
    explanation:
      ">=로 쓰면 용량 8에 딱 맞는 3 + 1 + 4를 싣지 못하고 다음 날로 넘긴다. 판정이 늘 하루씩 더 세서 답이 9로 커진다. 용량은 넘지만 않으면 되니 같을 때는 실어야 한다.",
    anchor: "짐-순서를-건드리면-답이-바뀐다",
  },
];
