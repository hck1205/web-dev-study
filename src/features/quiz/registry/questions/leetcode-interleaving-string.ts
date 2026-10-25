import type { QuizQuestion } from "../types";

export const LEETCODE_INTERLEAVING_STRING: QuizQuestion[] = [
  {
    id: "leetcode-interleaving-string-1",
    post: "leetcode-interleaving-string",
    question: "s1 = \"abc\", s2 = \"acd\", s3 = \"acabdc\"에서 s1의 다음 글자가 맞으면 먼저 쓰는 두 포인터 풀이는 무엇을 돌려주나?",
    choices: [
      "true, 정답도 true",
      "false, 정답도 false",
      "false, 정답은 true",
      "true, 정답은 false",
    ],
    answer: 2,
    explanation:
      "첫 a를 s1에서 쓰면 다음 c가 s1의 b와도 s2의 a와도 안 맞아 막힌다. 정답은 첫 a와 c를 s2에서 가져오는 쪽이라 true다. 두 글자가 같을 때 어느 쪽을 쓸지는 뒤를 봐야 알 수 있다.",
    anchor: "앞에서부터-맞추다-막히는-경우",
  },
  {
    id: "leetcode-interleaving-string-2",
    post: "leetcode-interleaving-string",
    question: "상태를 (i, j) 두 개만 두고 s3의 위치 k를 따로 들고 다니지 않아도 되는 이유는?",
    choices: [
      "s3의 길이가 항상 s1보다 짧아서",
      "s1에서 i글자, s2에서 j글자를 썼다면 s3에서는 정확히 i + j글자를 맞춘 상태라서",
      "k는 항상 0부터 시작하기 때문에",
      "s3는 비교에 쓰지 않기 때문에",
    ],
    answer: 1,
    explanation:
      "s3의 글자는 모두 s1이나 s2 중 하나에서 오므로 맞춘 글자 수는 i + j로 정해진다. 그래서 칸은 (m+1) × (n+1)개뿐이다. k를 넣어 3차원 표를 만들면 같은 정보를 200배 넘게 낭비한다.",
    anchor: "막히면-되돌아가는-재귀",
  },
  {
    id: "leetcode-interleaving-string-3",
    post: "leetcode-interleaving-string",
    question: "배열 한 줄 풀이에서 참일 때만 `dp[j] = true`를 쓰고 거짓일 때는 그대로 두면 어떻게 되나?",
    choices: [
      "결과는 같고 조금 빨라진다",
      "항상 false만 나온다",
      "배열 밖을 읽어 오류가 난다",
      "윗줄의 참이 이번 줄에 남아 (\"a\", \"b\", \"bb\") 같은 입력에서 잘못 참이 나온다",
    ],
    answer: 3,
    explanation:
      "2차원 표는 칸이 처음에 모두 거짓이라 참일 때만 써도 되지만, 한 줄로 줄이면 칸에 윗줄 값이 들어 있다. 이번 줄에서 거짓이어야 할 칸이 윗줄 참을 들고 가므로 매번 fromUp || fromLeft로 새로 대입한다.",
    anchor: "참일-때만-덮어쓴다",
  },
  {
    id: "leetcode-interleaving-string-4",
    post: "leetcode-interleaving-string",
    question: "길이 검사(`s1.length + s2.length !== s3.length`)를 빼면 (\"ab\", \"c\", \"abcx\")에서 표 풀이는 무엇을 돌려주나?",
    choices: ["true", "false", "오류", "undefined"],
    answer: 0,
    explanation:
      "표는 s3의 앞 m + n글자만 보므로 뒤에 붙은 x를 아무도 확인하지 않는다. 앞의 abc는 섞기로 만들 수 있어 true가 나온다. 맨 앞에서 길이를 먼저 걸러야 한다.",
    anchor: "길이-검사를-빼먹는다",
  },
  {
    id: "leetcode-interleaving-string-5",
    post: "leetcode-interleaving-string",
    question: "메모이제이션 재귀에서 실패한 칸만 기록해도 O(mn)이 되는 이유는?",
    choices: [
      "참인 칸은 한 번 나오면 맨 위까지 바로 올라가 탐색이 끝나기 때문",
      "참인 칸은 존재하지 않기 때문",
      "실패한 칸이 참인 칸보다 항상 적기 때문",
      "재귀 깊이가 1이기 때문",
    ],
    answer: 0,
    explanation:
      "어느 칸에서 참이 나오면 && 와 || 가 짧게 끊어져 곧바로 true가 위로 전달된다. 다시 방문할 일이 생기는 것은 거짓인 칸뿐이라 그것만 기억하면 칸마다 한 번씩만 계산한다.",
    anchor: "한-번-막힌-칸은-다시-가지-않는다",
  },
];
