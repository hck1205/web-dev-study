import type { QuizQuestion } from "../types";

export const LEETCODE_LONGEST_PALINDROMIC_SUBSTRING: QuizQuestion[] = [
  {
    id: "leetcode-longest-palindromic-substring-1",
    post: "leetcode-longest-palindromic-substring",
    question: "중심 확장 풀이에서 글자마다 `expand(i, i)`와 `expand(i, i + 1)`을 둘 다 부르는 이유는?",
    choices: [
      "홀수 길이 회문은 가운데가 글자 위에, 짝수 길이 회문은 두 글자 사이에 있기 때문",
      "한 번만 넓히면 회문의 절반만 찾기 때문",
      "왼쪽과 오른쪽 방향을 따로 확인해야 하기 때문",
      "중복된 글자를 건너뛰기 위해서",
    ],
    answer: 0,
    explanation:
      "회문의 가운데는 길이가 홀수면 글자 하나, 짝수면 두 글자 사이다. 그래서 가운데 후보는 2n-1개이고 두 종류를 모두 넓혀 봐야 한다. 짝수 쪽을 빼먹으면 \"cbbd\"에서 bb를 놓친다.",
    anchor: "거울-자리에서-양손을-벌린다",
  },
  {
    id: "leetcode-longest-palindromic-substring-2",
    post: "leetcode-longest-palindromic-substring",
    question: "회문 표 `dp[i][j]`를 채울 때 i를 큰 쪽부터 내려오며 채우는 이유는?",
    choices: [
      "j가 i보다 작은 칸을 먼저 채워야 하기 때문",
      "뒤쪽 글자가 더 중요하기 때문",
      "dp[i][j]가 한 줄 아래 칸 dp[i+1][j-1]을 보므로 그 칸이 먼저 채워져 있어야 하기 때문",
      "가장 긴 회문이 문자열 뒤쪽에 있기 때문",
    ],
    answer: 2,
    explanation:
      "양 끝이 같고 안쪽 dp[i+1][j-1]이 참이어야 dp[i][j]가 참이다. i+1번 줄이 먼저 채워져 있어야 하니 i를 큰 쪽부터 내려온다. 구간 길이를 짧은 것부터 늘려 가며 채워도 같은 조건을 만족한다.",
    anchor: "안쪽이-회문이면-바깥은-양-끝만-보면-된다",
  },
  {
    id: "leetcode-longest-palindromic-substring-3",
    post: "leetcode-longest-palindromic-substring",
    question: "s와 뒤집은 s의 가장 긴 공통 부분 문자열을 답으로 내면 `\"abacdfgdcaba\"`에서 무엇이 나오나?",
    choices: ["aba", "abacd", "abacdfgdcaba", "cdfgdc"],
    answer: 1,
    explanation:
      "앞쪽 abacd와 뒤쪽 dcaba가 서로 뒤집힌 모양이라 뒤집은 문자열에서 같은 구간으로 보인다. abacd는 회문이 아니다. 위치가 맞는지 따로 확인해야 하고, 실제 답은 aba다.",
    anchor: "뒤집은-문자열과의-공통-부분-문자열로-푸는-경우",
  },
  {
    id: "leetcode-longest-palindromic-substring-4",
    post: "leetcode-longest-palindromic-substring",
    question: "중심 확장 풀이가 정확히 O(n²)만큼 일하는 최악의 입력은?",
    choices: [
      "회문이 하나도 없는 무작위 문자열",
      "길이가 짝수인 문자열",
      "\"abcabc\"처럼 같은 패턴이 반복되는 문자열",
      "같은 글자만 있는 \"aaaa…a\"",
    ],
    answer: 3,
    explanation:
      "같은 글자만 있으면 모든 가운데에서 문자열 끝까지 넓어져 가운데마다 O(n)씩 일한다. 회문이 드문 문자열에서는 대부분의 가운데가 한두 번 만에 멈춰 거의 선형으로 돈다.",
    anchor: "거울-자리에서-양손을-벌린다",
  },
  {
    id: "leetcode-longest-palindromic-substring-5",
    post: "leetcode-longest-palindromic-substring",
    question: "Manacher 알고리즘이 O(n)인 이유로 가장 알맞은 것은?",
    choices: [
      "글자 사이에 #을 넣어 문자열 길이를 절반으로 줄이기 때문",
      "가장 오른쪽까지 닿은 회문 안에서는 거울 반대편 반지름을 빌려 오고, 오른쪽 끝 r이 뒤로 가지 않아 넓히기 성공 횟수의 합이 O(n)이기 때문",
      "가운데 후보를 n개로 줄이기 때문",
      "해시를 써서 회문 여부를 O(1)에 확인하기 때문",
    ],
    answer: 1,
    explanation:
      "큰 회문 안의 가운데는 거울 반대편과 모양이 같아 그 반지름만큼은 비교 없이 건너뛴다. 넓히기가 성공하면 r이 오른쪽으로 밀리고 r은 줄지 않으니 전체 성공 횟수가 t의 길이를 넘지 않는다. #을 넣으면 길이는 오히려 두 배쯤 된다.",
    anchor: "이미-본-거울-안쪽을-다시-재지-않는다-manacher",
  },
];
