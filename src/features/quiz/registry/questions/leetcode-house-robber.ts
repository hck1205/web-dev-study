import type { QuizQuestion } from "../types";

export const LEETCODE_HOUSE_ROBBER: QuizQuestion[] = [
  {
    id: "leetcode-house-robber-1",
    post: "leetcode-house-robber",
    question: "짝수 칸 합과 홀수 칸 합 중 큰 쪽을 고르는 방법이 `[2, 1, 1, 2]`에서 틀리는 이유는?",
    choices: [
      "이웃한 두 칸을 함께 고르게 되기 때문",
      "0번과 3번처럼 두 칸을 건너뛰는 선택을 만들 수 없기 때문",
      "값이 같은 칸이 있으면 합을 두 번 세기 때문",
      "길이가 짝수면 마지막 칸을 빼먹기 때문",
    ],
    answer: 1,
    explanation:
      "짝수·홀수 칸 합은 정확히 한 칸씩 건너뛰는 선택만 본다. 이 입력의 답 4는 양 끝(0번, 3번)을 고르는 것이라 두 칸을 건너뛰어야 나온다. 이웃 조건은 오히려 항상 지켜지니 첫 보기는 틀리다.",
    anchor: "탐욕으로-고르면-틀린다",
  },
  {
    id: "leetcode-house-robber-2",
    post: "leetcode-house-robber",
    question: "두 변수 풀이 `next = max(cur, prev + x)`에서 `prev + x`가 이웃 조건을 어기지 않는다고 말할 수 있는 이유는?",
    choices: [
      "prev는 두 집 앞까지의 최댓값이라 바로 앞 집을 포함하지 않기 때문",
      "x가 항상 cur보다 작기 때문",
      "prev는 매번 0으로 초기화되기 때문",
      "반복문이 한 칸씩 건너뛰며 돌기 때문",
    ],
    answer: 0,
    explanation:
      "prev는 두 집 앞까지만 본 최댓값이라 바로 앞 집은 처음부터 빠져 있다. 바로 앞 집을 열었을 가능성은 cur 쪽에만 있고, 그쪽을 고르면 지금 집은 열지 않는다. 그래서 어느 쪽을 골라도 이웃 두 집이 함께 들어가지 않는다.",
    anchor: "기록-두-개만-들고-골목을-걷는다",
  },
  {
    id: "leetcode-house-robber-3",
    post: "leetcode-house-robber",
    question: "0부터 시작하는 표를 `dp[0] = nums[0]`, `dp[1] = nums[1]`로 시작하면 `[5, 1]`에서 무엇이 나오나?",
    choices: ["5", "6", "1", "0"],
    answer: 2,
    explanation:
      "dp[1]은 1번 집까지 봤을 때의 최댓값이라 max(5, 1) = 5여야 한다. nums[1]을 그대로 넣으면 1이 되고, 길이 2라 그 값이 바로 답으로 나온다. 크기 n+1 표에 dp[0] = 0을 두거나 두 변수를 0으로 시작하면 이 경계가 사라진다.",
    anchor: "틀리기-쉬운-자리",
  },
  {
    id: "leetcode-house-robber-4",
    post: "leetcode-house-robber",
    question: "탑다운 메모에서 \"아직 안 구함\"을 0으로 표시하면 어떻게 되나?",
    choices: [
      "값이 0인 집이 있으면 답이 틀린다",
      "아무 문제 없다. 값이 음수가 아니기 때문",
      "콜 스택이 넘친다",
      "답은 맞지만, 답이 0인 구간을 매번 다시 계산해 그 구간에서 지수 시간이 된다",
    ],
    answer: 3,
    explanation:
      "0이 이어진 구간은 답이 0이라, 구해서 적어 둬도 \"안 구함\"으로 읽혀 다시 계산한다. 0이 25개인 배열에서 호출이 39만 번을 넘었고, 1이 25개면 51번이었다. 답은 그대로라서 테스트에서 잘 안 잡히는 실수다.",
    anchor: "같은-집에서-다시-묻지-않게-적어-둔다",
  },
  {
    id: "leetcode-house-robber-5",
    post: "leetcode-house-robber",
    question: "집이 원형으로 놓여 첫 집과 마지막 집도 이웃일 때 가장 간단한 풀이는?",
    choices: [
      "첫 집을 뺀 줄과 마지막 집을 뺀 줄에서 원래 풀이를 각각 돌려 큰 값을 고른다",
      "원래 풀이 결과에서 첫 집 값을 뺀다",
      "배열을 두 번 이어 붙여 길이 2n에서 원래 풀이를 돌린다",
      "짝수 칸 합과 홀수 칸 합 중 큰 쪽을 고른다",
    ],
    answer: 0,
    explanation:
      "첫 집과 마지막 집을 동시에 열 수 없으니 답은 둘 중 하나를 쓰지 않는 선택 안에 있다. 그래서 하나씩 뺀 두 일직선 문제를 풀어 큰 쪽을 고르면 된다. 길이 1이면 두 줄이 모두 비니 따로 처리한다.",
    anchor: "면접관이-조건을-바꾸면",
  },
];
