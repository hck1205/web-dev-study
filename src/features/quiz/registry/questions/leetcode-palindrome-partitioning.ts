import type { QuizQuestion } from "../types";

export const LEETCODE_PALINDROME_PARTITIONING: QuizQuestion[] = [
  {
    id: "leetcode-palindrome-partitioning-1",
    post: "leetcode-palindrome-partitioning",
    question: "회문 표를 `pal[i][j] = s[i] === s[j] && (j - i < 2 || pal[i + 1][j - 1])`로 채울 때, i를 앞에서부터 돌면 어떻게 되나?",
    choices: [
      "결과는 같고 조금 느려질 뿐이다",
      "`pal[i + 1][j - 1]`이 아직 채워지지 않아 \"abba\" 같은 긴 회문을 놓친다",
      "배열 범위를 벗어나 에러가 난다",
      "한 글자 조각을 회문이 아니라고 판단한다",
    ],
    answer: 1,
    explanation:
      "`pal[i][j]`는 아래 행의 안쪽 칸을 읽으니 i가 큰 행이 먼저 채워져 있어야 한다. 앞에서부터 돌면 그 칸이 초깃값 false라 긴 회문이 빠진다. 에러 없이 답만 줄어서 찾기 어려운 버그다.",
    anchor: "회문인지를-미리-표로-만들어-둔다",
  },
  {
    id: "leetcode-palindrome-partitioning-2",
    post: "leetcode-palindrome-partitioning",
    question: "첫 조각을 늘려 보다가 회문이 아닌 조각을 만났을 때 break 대신 continue를 써야 하는 이유는?",
    choices: [
      "break를 쓰면 재귀가 끝나지 않기 때문이다",
      "continue가 실행 시간이 더 짧기 때문이다",
      "더 늘리면 다시 회문이 될 수 있기 때문이다. \"ab\"는 아니지만 \"abba\"는 회문이다",
      "회문이 아닌 조각도 답에 넣어야 하기 때문이다",
    ],
    answer: 2,
    explanation:
      "정렬된 후보에서 합이 넘치면 뒤도 다 넘치는 Combination Sum과 달리, 회문 여부는 길이가 늘어도 한쪽으로만 바뀌지 않는다. \"abba\"에서 break를 쓰면 통째 \"abba\" 답이 빠진다.",
    anchor: "조각이-비어-나오거나-회문을-놓치는-코드",
  },
  {
    id: "leetcode-palindrome-partitioning-3",
    post: "leetcode-palindrome-partitioning",
    question: "길이 16인 \"aaaa…a\"의 회문 분할은 몇 가지이고, 왜 그런가?",
    choices: [
      "16가지. 조각 수를 1개부터 16개까지 고르기 때문이다",
      "136가지. 서로 다른 조각이 n(n+1)/2개이기 때문이다",
      "65,536가지. 글자마다 두 가지씩 고르기 때문이다",
      "32,768가지. 틈 15개를 자르든 말든 모든 조각이 회문이기 때문이다",
    ],
    answer: 3,
    explanation:
      "자를 수 있는 틈은 n - 1 = 15개이고, a만 있으면 어떤 조각도 회문이라 모든 자르기가 답이다. 그래서 2^15 = 32,768이다. 이런 입력이 있어서 전체 시간이 O(n · 2^n)보다 좋아질 수 없다.",
    anchor: "모든-조각이-회문이-되게-자르는-방법",
  },
  {
    id: "leetcode-palindrome-partitioning-4",
    post: "leetcode-palindrome-partitioning",
    question: "`memo[i]`에 s[i..]의 모든 분할 목록을 기억하는 풀이가 a 16개에서 표 백트래킹보다 느렸던 이유는?",
    choices: [
      "기억한 목록을 앞에 붙일 때마다 배열을 새로 만들고, 최종 답이 아닌 중간 목록까지 다 만들기 때문이다",
      "회문 표를 쓰지 않아 회문 확인이 반복되기 때문이다",
      "재귀 깊이가 깊어져 스택이 커지기 때문이다",
      "같은 부분 문제를 여러 번 풀기 때문이다",
    ],
    answer: 0,
    explanation:
      "같은 부분 문제는 한 번만 풀지만, 답이 지수적으로 많으면 그 목록을 복사하는 비용이 더 크다. 개수만 세거나 최소 자르기를 구할 때는 기억할 값이 숫자 하나라 같은 생각이 O(n²)으로 이긴다.",
    anchor: "뒤쪽-답을-먼저-만들어-앞에-붙인다",
  },
  {
    id: "leetcode-palindrome-partitioning-5",
    post: "leetcode-palindrome-partitioning",
    question: "\"noonabbad\"를 회문 조각으로 나누는 최소 자르기 횟수는?",
    choices: ["1번", "2번", "3번", "8번"],
    answer: 1,
    explanation:
      "\"noon\", \"abba\", \"d\" 세 조각으로 나누면 두 번 자른다. 한 번만 잘라 두 조각이 모두 회문이 되는 방법은 없다. 최소 자르기는 목록을 만들지 않고 `cut[j]` DP와 회문 표로 O(n²)에 구한다.",
    anchor: "최소-몇-번-잘라야-하나",
  },
];
