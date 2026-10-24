import type { QuizQuestion } from "../types";

export const LEETCODE_LONGEST_REPEATING_CHARACTER_REPLACEMENT: QuizQuestion[] = [
  {
    id: "leetcode-longest-repeating-character-replacement-1",
    post: "leetcode-longest-repeating-character-replacement",
    question: "구간 `\"BCABBB\"`를 같은 글자로 만들려면 최소 몇 글자를 바꿔야 하고, 왜 그런가?",
    choices: [
      "4글자. B가 아닌 글자를 모두 A로 바꿔야 해서",
      "2글자. 가장 많은 B(4개)로 맞추면 길이 6 − 4만 바꾸면 되어서",
      "3글자. 서로 다른 글자 종류가 3개라서",
      "6글자. 모든 글자를 새 글자로 바꿔야 해서",
    ],
    answer: 1,
    explanation:
      "이미 가장 많이 있는 글자로 맞추는 게 가장 싸다. 그래서 바꿔야 할 글자 수는 길이에서 최다 빈도를 뺀 값, 6 − 4 = 2다. 이 값이 k 이하인지가 창의 판정 기준이 된다.",
    anchor: "구간-하나를-판정하는-식",
  },
  {
    id: "leetcode-longest-repeating-character-replacement-2",
    post: "leetcode-longest-repeating-character-replacement",
    question: "O(n) 풀이에서 왼쪽 글자를 빼도 `maxFreq`를 줄이지 않는다. 그래도 답이 틀리지 않는 이유는?",
    choices: [
      "maxFreq는 항상 실제 창 안의 최다 빈도와 같아서",
      "글자가 26종뿐이라 maxFreq가 오래 틀린 상태로 남지 않아서",
      "창 크기가 줄지 않고, 창이 커지는 건 진짜 최다 빈도가 기록을 넘는 순간뿐이라 그때의 판정은 정확해서",
      "k가 0 이상이라 창이 항상 조건을 만족해서",
    ],
    answer: 2,
    explanation:
      "maxFreq가 실제보다 큰 동안 창은 크기를 유지한 채 미끄러질 뿐이라 답(창 크기)이 부풀지 않는다. 창이 커지려면 기록보다 큰 빈도가 실제로 나와야 하고, 그 값은 방금 넣은 글자의 진짜 개수다. maxFreq가 실제와 같다는 보기는 틀렸다. 예시의 5번 칸에서 실제 최다는 2인데 maxFreq는 3이다.",
    anchor: "최다-빈도를-줄이지-않아도-되는-이유",
  },
  {
    id: "leetcode-longest-repeating-character-replacement-3",
    post: "leetcode-longest-repeating-character-replacement",
    question: "최다 글자가 빠질 때 `maxFreq`를 1 줄이도록 고친 코드는 `\"CAA\"`, k = 0에서 1을 돌려준다(정답 2). 무엇이 문제인가?",
    choices: [
      "C를 뺄 때 같은 개수(1개)인 A가 창에 남아 있어 실제 최다는 그대로인데 0으로 줄여 버렸다",
      "k가 0이라 창이 만들어지지 않는다",
      "maxFreq를 줄이는 순서가 count를 줄이기 전이라서만 문제다",
      "while 대신 if를 써야 해서",
    ],
    answer: 0,
    explanation:
      "같은 개수의 글자가 여럿이면 하나가 빠져도 최다 빈도는 줄지 않는다. 0으로 잘못 줄인 값으로 다시 판정하니 A까지 빼 버려 창이 빈다. 줄이려면 제대로 다시 세야 하고, 그렇지 않으면 아예 줄이지 않는 게 맞다.",
    anchor: "자주-틀리는-생각과-코드",
  },
  {
    id: "leetcode-longest-repeating-character-replacement-4",
    post: "leetcode-longest-repeating-character-replacement",
    question: "목표 글자를 A부터 Z까지 정해 26번 창을 돌리는 풀이의 시간 복잡도와, 맞다는 게 분명한 이유는?",
    choices: [
      "O(n²). 목표마다 모든 구간을 보기 때문이다",
      "O(n log n). 목표 글자를 이분 탐색하기 때문이다",
      "O(26n). 목표를 정하면 맞출 글자를 찾는 데만 시간이 든다",
      "O(26n). 목표를 정하면 '그 글자가 아닌 수 ≤ k'가 창 크기에 단조로워 정석 창으로 정확히 풀린다",
    ],
    answer: 3,
    explanation:
      "목표 글자가 정해지면 창을 넓힐 때 바꿀 글자 수가 줄지 않고 좁힐 때 늘지 않는다. 그래서 조건이 깨지면 왼쪽을 당기는 정석 창이 그대로 맞고, 목표마다 O(n)씩 26번이라 O(26n)이다. 최적 답도 어떤 글자로 맞춘 것이니 26개 중 최댓값이 답이다.",
    anchor: "목표-글자를-정해-두고-창을-민다",
  },
  {
    id: "leetcode-longest-repeating-character-replacement-5",
    post: "leetcode-longest-repeating-character-replacement",
    question: "O(n) 풀이가 마지막에 `s.length - l`을 답으로 돌려줄 수 있는 이유는?",
    choices: [
      "l이 항상 0이라서",
      "조건이 깨질 때 왼쪽을 한 칸만 밀어 창 크기가 줄지 않으니, 마지막 창 크기가 지금까지의 최고 기록이라서",
      "마지막 창은 항상 조건을 만족하는 가장 긴 창이라서",
      "s.length - l이 k보다 항상 크기 때문이다",
    ],
    answer: 1,
    explanation:
      "오른쪽이 한 칸 늘 때 왼쪽은 0칸 또는 1칸만 움직이니 창은 커지거나 크기를 유지한다. 그래서 창 크기가 곧 지금까지 찾은 가장 긴 길이다. 마지막 창 자체는 조건을 만족하지 않을 수도 있어서, 창의 내용이 아니라 크기만 답으로 쓴다.",
    anchor: "줄어들지-않는-창이라는-다른-틀",
  },
];
