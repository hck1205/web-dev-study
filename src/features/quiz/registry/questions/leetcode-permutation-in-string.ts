import type { QuizQuestion } from "../types";

export const LEETCODE_PERMUTATION_IN_STRING: QuizQuestion[] = [
  {
    id: "leetcode-permutation-in-string-1",
    post: "leetcode-permutation-in-string",
    question: "s1의 순열이 s2 안에 있는지 볼 때, 순열을 만들지 않고 길이 m짜리 창만 봐도 되는 이유는?",
    choices: [
      "순열인지는 글자별 개수가 같은지와 같은 질문이고, 순열이 될 수 있는 구간은 길이가 반드시 s1과 같아서",
      "s2가 정렬돼 있다는 조건이 있어서",
      "순열의 개수가 m개뿐이라서",
      "s1의 글자가 모두 서로 달라서",
    ],
    answer: 0,
    explanation:
      "순서를 바꾼 문자열은 글자 구성이 같으니 개수 목록만 비교하면 된다. 그리고 순열은 길이가 그대로라 s2에서 볼 곳은 길이 m 구간뿐이다. 순열 수는 m!개라 만들어 보는 접근은 금방 무너진다.",
    anchor: "순서가-아니라-개수를-본다",
  },
  {
    id: "leetcode-permutation-in-string-2",
    post: "leetcode-permutation-in-string",
    question: "s1 = \"abc\", s2 = \"cbdbcae\"에서 첫 창 cbd를 채운 직후 matches(26칸 중 개수가 같은 칸 수)는 얼마인가?",
    choices: ["3", "26", "24", "22"],
    answer: 2,
    explanation:
      "창에는 a가 없고(필요 1) d가 있다(필요 0). 이 두 칸만 다르고 b, c와 e부터 z까지 나머지 24칸은 개수가 같다. 22는 다음 창 bdb에서 b가 넘치고 c가 모자랄 때의 값이다.",
    anchor: "26칸-비교를-matches-하나로-줄인다",
  },
  {
    id: "leetcode-permutation-in-string-3",
    post: "leetcode-permutation-in-string",
    question: "창에 글자 a가 들어와 win[a]가 need[a] + 2가 됐다. matches는 어떻게 고쳐야 하나?",
    choices: [
      "1 줄인다. 같지 않아졌으니까",
      "그대로 둔다. 직전에도 need[a] + 1이라 이미 안 맞던 칸이어서",
      "1 늘린다. 글자가 늘었으니까",
      "2 줄인다. 차이가 2라서",
    ],
    answer: 1,
    explanation:
      "matches는 맞는 칸의 수라서, 맞던 칸이 깨질 때와 안 맞던 칸이 맞게 될 때만 바뀐다. need[a] + 1에서 + 2로 가는 건 안 맞던 칸이 계속 안 맞는 경우다. '같지 않으면 줄인다'로 쓰면 이런 칸을 또 깎아서 답이 틀린다.",
    anchor: "matches가-어긋나는-코드들",
  },
  {
    id: "leetcode-permutation-in-string-4",
    post: "leetcode-permutation-in-string",
    question: "빚을 갚는 가변 창에서 창 길이가 m에 닿는 순간 순열이라고 판단해도 되는 이유는?",
    choices: [
      "창 길이가 m이면 언제나 순열이라서",
      "왼쪽을 뺄 때마다 matches를 확인해서",
      "s2의 글자가 모두 s1에 들어 있다고 가정해서",
      "창 안의 어떤 글자도 필요한 개수보다 많지 않은데 합이 m이면, 모든 글자가 정확히 필요한 만큼 있어서",
    ],
    answer: 3,
    explanation:
      "빚(need가 음수)이 생기면 즉시 갚으니 창 안의 각 글자는 많아야 필요한 만큼만 있다. 필요한 개수의 합이 m인데 창 길이도 m이면 어느 하나도 모자랄 수 없다. 그래서 따로 26칸을 비교하지 않아도 된다.",
    anchor: "빚을-갚는-가변-창",
  },
  {
    id: "leetcode-permutation-in-string-5",
    post: "leetcode-permutation-in-string",
    question: "반복문 안에서 창을 밀기 전에 matches === 26을 확인하고, 반복문이 끝나면 return false로 끝냈다. (\"c\", \"c\")에서 무엇이 나오나?",
    choices: [
      "false. 반복문이 한 번도 돌지 않아 첫 창을 확인하지 않는다",
      "true. 첫 창이 이미 순열이다",
      "예외가 난다. s2.charAt(1)을 읽는다",
      "true. m과 n이 같으면 항상 true다",
    ],
    answer: 0,
    explanation:
      "m과 n이 1로 같으니 for (r = m; r < n; ...)은 돌지 않고 바로 return false가 된다. 반복문은 직전 창만 확인하므로 마지막 창은 끝에서 return matches === 26으로 따로 봐야 한다.",
    anchor: "matches가-어긋나는-코드들",
  },
];
