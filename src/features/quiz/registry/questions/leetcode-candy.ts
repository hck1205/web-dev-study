import type { QuizQuestion } from "../types";

export const LEETCODE_CANDY: QuizQuestion[] = [
  {
    id: "leetcode-candy-1",
    post: "leetcode-candy",
    question: "왼쪽에서 오른쪽으로 한 번만 훑어 '왼쪽 친구보다 높으면 + 1'을 주면 ratings = [3, 2, 1]에서 몇 개가 나오나?",
    choices: ["6", "5", "4", "3"],
    answer: 3,
    explanation:
      "왼쪽 친구보다 점수가 높은 아이가 없어 모두 1개씩, 합 3이 나온다. 정답은 3, 2, 1개씩 6이다. 내리막은 오른쪽 친구가 기준이라 왼쪽에서 훑어서는 처리할 수 없다.",
    anchor: "왼쪽만-보고-나눠-주면-생기는-일",
  },
  {
    id: "leetcode-candy-2",
    post: "leetcode-candy",
    question: "아이마다 max(left[i], right[i])개를 주는 배분이 최소인 이유로 옳은 것은?",
    choices: [
      "left와 right의 합을 둘로 나눈 값이 평균이기 때문",
      "left[i]와 right[i]가 각각 어떤 올바른 배분에서도 피할 수 없는 하한이고, 최댓값을 주면 실제로 두 규칙을 모두 지키기 때문",
      "오른쪽 훑기가 언제나 더 큰 값을 주기 때문",
      "점수가 같은 이웃이 없다고 가정하기 때문",
    ],
    answer: 1,
    explanation:
      "left[i]는 i까지 이어진 오르막 길이라 그 아이는 그만큼은 받아야 하고 right[i]도 마찬가지다. 그래서 둘의 최댓값이 하한이고, 그 값을 주면 규칙도 지켜져 하한이 그대로 답이 된다.",
    anchor: "칸별-최댓값이-왜-최소인가",
  },
  {
    id: "leetcode-candy-3",
    post: "leetcode-candy",
    question: "두 번째 훑기에서 candy[i] = Math.max(candy[i], candy[i + 1] + 1) 대신 candy[i] = candy[i + 1] + 1로 쓰면 [1, 2, 3, 1]의 결과는?",
    choices: [
      "7. 결과가 같다",
      "8. 꼭대기가 하나 더 받는다",
      "6. 꼭대기의 3개가 2개로 덮어써져 왼쪽 친구와 같아진다",
      "5. 모든 아이가 하나씩 덜 받는다",
    ],
    answer: 2,
    explanation:
      "왼쪽 훑기로 꼭대기가 3개가 됐는데 오른쪽 훑기가 1 + 1 = 2로 덮어쓴다. 그러면 3점 아이가 2점 아이와 사탕이 같아져 규칙을 어긴다. 오른쪽 계단이 더 긴 산에서는 이 버그가 드러나지 않는다.",
    anchor: "두-번째-훑기에서-max를-빼먹는다",
  },
  {
    id: "leetcode-candy-4",
    post: "leetcode-candy",
    question: "ratings = [1, 2, 2]의 최소 사탕 수와 그 이유는?",
    choices: [
      "4. 같은 점수끼리는 조건이 없어서 셋째 아이는 1개면 된다",
      "5. 같은 점수는 같은 사탕을 받아야 한다",
      "3. 모두 1개씩이면 된다",
      "6. 점수가 오르니 1, 2, 3개다",
    ],
    answer: 0,
    explanation:
      "규칙은 옆 친구보다 점수가 높을 때만 사탕이 많아야 한다는 것이다. 같은 점수에는 조건이 없어서 1, 2, 1개로 4개면 된다. 같은 점수에 같은 사탕을 맞추는 건 문제에 없는 조건이다.",
    anchor: "옆-친구보다-점수가-높으면-사탕도-많이",
  },
  {
    id: "leetcode-candy-5",
    post: "leetcode-candy",
    question: "오르막·내리막 세기 풀이에서 내리막이 한 칸 늘어날 때 합에 down을 더하는 이유는?",
    choices: [
      "새 아이가 down개를 받기 때문",
      "꼭대기가 down개를 더 받기 때문",
      "오르막 길이만큼 다시 세기 때문",
      "새 아이가 1개를 받고, 그 앞 내리막의 down - 1명이 하나씩 더 받아야 하기 때문",
    ],
    answer: 3,
    explanation:
      "내리막은 끝에서부터 1, 2, 3개로 올라가니 새로 온 아이가 1개가 되고 앞의 아이들이 모두 한 칸씩 밀려 올라간다. 합하면 down만큼 늘어난다. 꼭대기는 내리막이 꼭대기 오르막보다 길어질 때만 따로 하나 더 받는다.",
    anchor: "오르막과-내리막의-길이만-센다",
  },
];
