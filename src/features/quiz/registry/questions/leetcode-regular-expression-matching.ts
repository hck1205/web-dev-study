import type { QuizQuestion } from "../types";

export const LEETCODE_REGULAR_EXPRESSION_MATCHING: QuizQuestion[] = [
  {
    id: "leetcode-regular-expression-matching-1",
    post: "leetcode-regular-expression-matching",
    question: "`*` 칸의 점화식에서 '하나 더 먹기'를 `dp[i-1][j]`로 쓰는 이유는?",
    choices: [
      "열을 그대로 두어 같은 `x*`가 다음 글자도 계속 먹을 수 있게 하려고",
      "`*` 앞 글자를 지우려고",
      "s의 글자를 건너뛰려고",
      "표의 왼쪽 위 칸이 항상 거짓이라서",
    ],
    answer: 0,
    explanation:
      "`dp[i-1][j]`는 앞 i-1글자가 이미 같은 `x*`까지와 맞은 상태라, 거기서 x를 하나 더 먹어도 여전히 같은 별에 머문다. 줄마다 반복되니 별이 몇 개를 먹든 표현된다. `dp[i-1][j-2]`로 쓰면 정확히 한 번만 먹는 `x?`가 되어 `(\"abbbd\", \"ab*d\")`를 놓친다.",
    anchor: "별-칸은-윗줄의-같은-열을-본다",
  },
  {
    id: "leetcode-regular-expression-matching-2",
    post: "leetcode-regular-expression-matching",
    question: "빈 문자열 줄을 `dp[0][0] = true`만 두고 나머지를 모두 거짓으로 두면 `(\"abbd\", \"x*ab*.d\")`의 결과는?",
    choices: [
      "true, 빈 문자열 줄은 답에 영향을 주지 않아서",
      "오류가 난다, j-2가 음수가 되어서",
      "true, `.`이 x를 대신 먹어서",
      "false, 맨 앞 `x*`가 아무것도 먹지 않는 경우를 표현할 수 없어서",
    ],
    answer: 3,
    explanation:
      "패턴이 `x*`로 시작하면 x를 0번 써서 빈 앞부분과 맞아야 하는데, 그 정보가 `dp[0][2]`에 있다. 이 칸이 거짓이면 뒤의 모든 칸이 줄줄이 거짓이 된다. `dp[0][j] = dp[0][j-2]`로 별 칸을 채워야 한다.",
    anchor: "별에서-자주-틀리는-곳",
  },
  {
    id: "leetcode-regular-expression-matching-3",
    post: "leetcode-regular-expression-matching",
    question: "'별은 맞는 글자를 가능한 만큼 다 먹는다'는 그리디로 `(\"aaa\", \"a*a\")`를 판정하면?",
    choices: [
      "false, `a*`가 a 셋을 다 먹어 마지막 `a`가 맞출 글자가 없어서",
      "true, 그리디가 맞는 입력이라서",
      "true, 마지막 a가 별에 포함돼서",
      "false, `a*`가 0번만 쓰여서",
    ],
    answer: 0,
    explanation:
      "답은 true인데 그리디는 false를 낸다. 별이 몇 개를 먹을지를 '가장 많이'로 고정하면 뒤 원소가 굶는다. 그래서 0번 쓰기와 하나 먹기를 모두 따지는 DP나 백트래킹이 필요하다.",
    anchor: "abbd에-패턴을-손으로-맞춰-보기",
  },
  {
    id: "leetcode-regular-expression-matching-4",
    post: "leetcode-regular-expression-matching",
    question: "메모 없는 재귀가 `a*` 아홉 개 + `c` 패턴과 a 19개 + b 문자열에서 1700만 번 호출되는 이유는?",
    choices: [
      "패턴이 c로 끝나서 문자열을 거꾸로 읽기 때문에",
      "실패하는 입력이라 별마다 두 갈래를 모두 끝까지 보며, 서로 다른 (i, j) 420개 정도를 수만 번씩 다시 묻기 때문에",
      "자바스크립트 재귀가 꼬리 호출 최적화를 하지 않아서",
      "`.`이 들어 있어서 모든 글자와 맞기 때문에",
    ],
    answer: 1,
    explanation:
      "성공하면 `||`가 일찍 끝나지만 실패하면 a 19개를 아홉 묶음으로 나누는 모든 방법을 시도한다. 상태는 (i, j) 쌍 420개 정도뿐이라 메모를 붙이면 O(mn)이 된다. 이 패턴에는 `.`이 없다.",
    anchor: "별-앞에서-두-갈래로-나뉘는-재귀",
  },
  {
    id: "leetcode-regular-expression-matching-5",
    post: "leetcode-regular-expression-matching",
    question: "와일드카드 매칭(LeetCode 44)과 이 문제에서 `*`를 '0번 쓰기'로 처리하는 칸은 각각?",
    choices: [
      "둘 다 `dp[i][j-2]`",
      "와일드카드는 `dp[i-1][j]`, 정규식은 `dp[i][j-1]`",
      "와일드카드는 `dp[i][j-1]`, 정규식은 `dp[i][j-2]`",
      "둘 다 `dp[i-1][j-1]`",
    ],
    answer: 2,
    explanation:
      "와일드카드의 `*`는 혼자서 아무 문자열이라 별만 지우면 되니 j-1이다. 정규식의 `*`는 앞 원소에 묶여 있어 `x*` 두 글자를 함께 지우니 j-2다. 한 글자 더 먹기는 둘 다 윗줄 같은 열 `dp[i-1][j]`다.",
    anchor: "패턴-문법이-바뀌면",
  },
];
