import type { QuizQuestion } from "../types";

export const LEETCODE_DISTINCT_SUBSEQUENCES: QuizQuestion[] = [
  {
    id: "leetcode-distinct-subsequences-1",
    post: "leetcode-distinct-subsequences",
    question: "s = \"ababcc\"에서 t = \"abc\"를 부분 수열로 만드는 방법은 몇 가지인가?",
    choices: ["1", "4", "6", "8"],
    answer: 2,
    explanation:
      "a0은 b1, b3 둘과, a2는 b3과만 짝지을 수 있어 ab를 만드는 방법이 3가지다. c는 4번, 5번 둘 다 그 뒤에 있으니 3 × 2 = 6이다. 연속 부분 문자열로 세면 1이 나와 틀린다.",
    anchor: "ababcc에서-abc를-여섯-번-찾는다",
  },
  {
    id: "leetcode-distinct-subsequences-2",
    post: "leetcode-distinct-subsequences",
    question: "2차원 점화식에서 Edit Distance와 달리 왼쪽 칸 `dp[i][j-1]`을 보지 않는 이유는?",
    choices: [
      "t의 글자는 빠짐없이 맞춰야 해서 t의 글자를 건너뛰는 선택이 없기 때문",
      "왼쪽 칸은 항상 0이기 때문",
      "덧셈에서는 왼쪽 칸이 위 칸과 같기 때문",
      "s가 t보다 길기 때문",
    ],
    answer: 0,
    explanation:
      "건너뛸 수 있는 건 s의 글자뿐이라 위 칸(안 쓴다)과 왼쪽 위 칸(짝짓는다) 두 곳에서만 온다. 왼쪽 칸에서 오면 t의 글자 하나를 짝 없이 버린 셈이 된다.",
    anchor: "위-칸과-왼쪽-위-칸을-더한다",
  },
  {
    id: "leetcode-distinct-subsequences-3",
    post: "leetcode-distinct-subsequences",
    question: "배열 한 줄 풀이를 j = 1부터 오른쪽으로 돌면 (\"aaaa\", \"aa\")에서 무엇이 나오나?",
    choices: ["6", "4", "0", "10"],
    answer: 3,
    explanation:
      "왼쪽부터 돌면 이번 a로 늘어난 a 칸 값을 바로 aa 칸에 더해 같은 글자 하나를 t의 두 자리에 쓴 셈이 된다. 그래서 정답 6 대신 10이 나온다. t에 같은 글자가 없으면 차이가 드러나지 않아 더 위험하다.",
    anchor: "한-줄로-줄일-때는-오른쪽부터",
  },
  {
    id: "leetcode-distinct-subsequences-4",
    post: "leetcode-distinct-subsequences",
    question: "2차원 표에서 `dp[0][0] = 1`만 두고 다른 줄의 `dp[i][0]`을 0으로 두면 예시(ababcc, abc)의 결과는?",
    choices: ["6, 영향이 없다", "4로 줄어든다", "0이 된다", "12로 커진다"],
    answer: 1,
    explanation:
      "빈 t를 만드는 방법은 어떤 s 앞부분에서도 한 가지라 모든 줄의 0번 칸이 1이어야 한다. 0으로 두면 a2처럼 뒤쪽에서 t의 첫 글자를 짝짓는 대각선 값이 끊겨 4가 나온다.",
    anchor: "0번-열을-0번-줄에만-채운다",
  },
  {
    id: "leetcode-distinct-subsequences-5",
    post: "leetcode-distinct-subsequences",
    question: "답은 32비트에 들어가지만 중간 칸은 C(40, 20)처럼 커질 수 있다. Java `int`로 풀어도 답이 맞는 이유는?",
    choices: [
      "Java는 넘침을 감지해 자동으로 long으로 바꿔서",
      "중간 칸은 실제로 절대 넘치지 않아서",
      "덧셈만 하므로 감겨도 2^32로 나눈 나머지가 보존되고, 진짜 답이 32비트 안이면 같아서",
      "LeetCode가 Java에서는 짧은 문자열만 주기 때문에",
    ],
    answer: 2,
    explanation:
      "int 덧셈은 넘치면 2^32 기준으로 감기지만 덧셈의 나머지는 그대로 유지된다. 답 칸에 더해지는 칸은 답보다 크지 않기도 하다. C++은 부호 있는 정수 넘침이 정의되지 않은 동작이라 unsigned를 쓴다.",
    anchor: "세-언어로-쓴-한-줄-풀이",
  },
];
