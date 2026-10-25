import type { QuizQuestion } from "../types";

export const LEETCODE_EXTRA_CHARACTERS_IN_A_STRING: QuizQuestion[] = [
  {
    id: "leetcode-extra-characters-in-a-string-1",
    post: "leetcode-extra-characters-in-a-string",
    question: "s = \"abcd\", 사전 [ab, bcd]에서 지금 자리에서 맞는 가장 긴 단어로 덮는 탐욕을 쓰면 몇이 나오고, 정답은 몇인가?",
    choices: ["탐욕 1, 정답 1", "탐욕 2, 정답 2", "탐욕 2, 정답 1", "탐욕 0, 정답 1"],
    answer: 2,
    explanation:
      "탐욕은 ab로 덮고 c, d를 남겨 2가 된다. a를 버리고 bcd로 덮으면 1만 남는다. 앞의 선택이 뒤에서 쓸 단어를 바꾸기 때문에 버리기와 덮기를 모두 해 보고 뒤의 답과 비교하는 DP가 필요하다.",
    anchor: "눈앞의-가장-긴-단어를-덮으면-틀린다",
  },
  {
    id: "leetcode-extra-characters-in-a-string-2",
    post: "leetcode-extra-characters-in-a-string",
    question: "dp[i]를 s[i..]에서 남는 글자의 최솟값으로 둘 때 올바른 점화식은?",
    choices: [
      "dp[i] = min(dp[i + 1] + 1, s[i..j]가 사전 단어인 모든 j에 대해 dp[j + 1])",
      "dp[i] = dp[i + 1] + 1, 사전 단어가 시작하면 dp[i] = 0",
      "dp[i] = max(dp[i + 1], s[i..j]가 사전 단어인 모든 j에 대해 dp[j + 1] + 1)",
      "dp[i] = min(dp[i - 1] + 1, s[i..j]가 사전 단어인 모든 j에 대해 dp[j])",
    ],
    answer: 0,
    explanation:
      "s[i]를 버리면 1에 dp[i + 1]을 더하고, s[i..j]를 사전 단어로 덮으면 비용 없이 dp[j + 1]로 넘어간다. 그중 가장 작은 값이 dp[i]다. 단어가 시작한다고 바로 0이 되지는 않는다. 그 뒤에도 남는 글자가 있을 수 있다.",
    anchor: "앞에서부터-채우는-표와-끝에서부터-채우는-표",
  },
  {
    id: "leetcode-extra-characters-in-a-string-3",
    post: "leetcode-extra-characters-in-a-string",
    question: "트라이 풀이에서 내려가다 끝 표시를 만났을 때 Replace Words처럼 바로 멈추면 catsxdog, 사전 [cat, cats, dog, do]에서 어떻게 되나?",
    choices: [
      "답은 1로 같다. 첫 끝 표시가 가장 짧은 단어라 늘 최선이다",
      "cat과 do에서 멈춰 cats와 dog를 놓치고 3이 나온다",
      "트라이 안에서 무한 루프가 돈다",
      "cats와 dog만 찾고 cat과 do를 놓쳐 2가 나온다",
    ],
    answer: 1,
    explanation:
      "i = 5에서 do에서 멈추면 dog를 놓쳐 dp[5]가 1이 되고, i = 0에서도 cat에서 멈춰 cats를 놓친다. 두 번 손해를 봐서 3이 나온다. 이 문제에서는 끝 표시를 후보로 기록만 하고 자식이 끊길 때까지 내려가야 한다.",
    anchor: "눈앞의-가장-긴-단어를-덮으면-틀린다",
  },
  {
    id: "leetcode-extra-characters-in-a-string-4",
    post: "leetcode-extra-characters-in-a-string",
    question: "뒤에서 채우는 집합 풀이(dict.has(s.slice(i, j)))보다 트라이 풀이가 빠른 가장 큰 이유는?",
    choices: [
      "트라이는 해시 충돌이 없어서",
      "트라이는 dp 배열을 쓰지 않아서",
      "글자마다 자식 하나만 따라가고, 사전 단어의 앞부분이 아니게 되는 순간 멈춰서",
      "트라이는 사전 단어를 길이 순으로 정렬해 두어서",
    ],
    answer: 2,
    explanation:
      "집합 풀이는 j를 끝까지 돌며 매번 부분 문자열을 새로 만들고 해시를 계산해서 O(n³)이다. 트라이는 문자열을 만들지 않고 글자 하나에 자식 하나를 따라가며, 자식이 없으면 바로 멈춘다. 2,000글자 입력에서 집합 풀이는 2초를 넘겼고 트라이는 0.27ms였다.",
    anchor: "2000글자로-늘려-재-보면",
  },
  {
    id: "leetcode-extra-characters-in-a-string-5",
    post: "leetcode-extra-characters-in-a-string",
    question: "탑다운 메모에서 캐시 초깃값을 0으로 두면 어떻게 되나?",
    choices: [
      "답이 0인 칸을 안 구한 칸으로 착각해 계속 다시 계산하고, 답은 맞지만 지수 시간으로 돌아간다",
      "모든 칸이 0으로 읽혀서 답이 늘 0이 된다",
      "캐시를 쓰지 않을 때보다 결과가 1씩 커진다",
      "아무 문제가 없다. 남는 글자 수는 0이 될 수 없다",
    ],
    answer: 0,
    explanation:
      "그 뒤가 사전 단어로 다 덮이는 칸은 답이 진짜 0이다. 초깃값도 0이면 이 칸을 구한 적 없는 칸과 구별하지 못해 매번 다시 계산한다. 답은 그대로지만 메모의 이득이 사라지니 -1처럼 답이 될 수 없는 값을 쓴다.",
    anchor: "같은-자리를-다시-풀지-않게-적어-두기",
  },
];
