import type { QuizQuestion } from "../types";

export const LEETCODE_SLIDING_WINDOW_MAXIMUM: QuizQuestion[] = [
  {
    id: "leetcode-sliding-window-maximum-1",
    post: "leetcode-sliding-window-maximum",
    question: "단조 덱에서 새 값 x가 들어올 때, 덱 뒤쪽의 x보다 작거나 같은 값을 버려도 되는 이유는?",
    choices: [
      "그 값들은 x보다 먼저 창을 떠나고, 남아 있는 동안 x가 더 크거나 같아 최댓값이 될 창이 없어서",
      "덱의 크기를 k 이하로 유지해야 해서",
      "그 값들은 이미 결과 배열에 기록됐기 때문이다",
      "덱은 정렬된 상태여야 이분 탐색을 할 수 있어서",
    ],
    answer: 0,
    explanation:
      "x보다 먼저 들어온 작은 값은 x보다 먼저 창을 떠난다. 남아 있는 모든 창에 x가 함께 있으니 그 값이 최댓값이 되는 일은 없다. 이렇게 버리면 덱은 앞에서 뒤로 값이 줄어들어 맨 앞이 최댓값이 된다.",
    anchor: "앞으로-최댓값이-될-후보만-남긴다",
  },
  {
    id: "leetcode-sliding-window-maximum-2",
    post: "leetcode-sliding-window-maximum",
    question: "덱에 인덱스 대신 값을 담고 '나가는 값이 맨 앞 값과 같으면 뺀다'로 처리하면 `[2, 2, 0]`, k = 2의 결과는?",
    choices: ["[2, 2]", "[2, 0]", "[0, 0]", "[2]"],
    answer: 1,
    explanation:
      "1번 2가 들어오며 0번 2를 뒤에서 뺀다. 0번 2가 창을 나갈 때 맨 앞 값도 2라 빼는데, 그건 아직 창 안의 1번 2였다. 그래서 두 번째 창의 최댓값이 0으로 틀린다. 인덱스를 담으면 dq[0] <= i - k로 정확히 판정한다.",
    anchor: "값만-담으면-생기는-일",
  },
  {
    id: "leetcode-sliding-window-maximum-3",
    post: "leetcode-sliding-window-maximum",
    question: "단조 덱 풀이는 반복문 안에 while이 있는데도 O(n)이다. 그 이유는?",
    choices: [
      "while은 많아야 한 번 돌기 때문이다",
      "덱 크기가 k 이하라서 while이 k번 이하로 돌고, k는 상수라서",
      "인덱스마다 덱에 한 번 들어오고 많아야 한 번 나가서, 전체 덱 연산이 2n 이하라서",
      "값의 범위가 ±1만으로 정해져 있어서",
    ],
    answer: 2,
    explanation:
      "한 번의 while이 여러 개를 뺄 수 있지만 빠지는 원소는 이미 들어온 원소이고, 한 번 빠지면 다시 들어오지 않는다. 그래서 전체를 통틀어 빼기는 n번 이하다. k는 입력에 따라 n까지 커질 수 있으니 상수가 아니다.",
    anchor: "앞으로-최댓값이-될-후보만-남긴다",
  },
  {
    id: "leetcode-sliding-window-maximum-4",
    post: "leetcode-sliding-window-maximum",
    question: "배열을 k칸씩 블록으로 나눠 `left`(블록 앞부터 누적 최댓값)와 `right`(블록 뒤부터 누적 최댓값)를 만들었다. 창 `[i, i + k - 1]`의 최댓값은?",
    choices: [
      "max(left[i], right[i + k - 1])",
      "left[i + k - 1]",
      "max(left[i], left[i + k - 1])",
      "max(right[i], left[i + k - 1])",
    ],
    answer: 3,
    explanation:
      "길이 k인 창은 많아야 두 블록에 걸친다. right[i]는 앞 블록에서 i부터 블록 끝까지, left[i + k - 1]은 뒤 블록의 시작부터 창 끝까지를 덮는다. 둘을 합치면 창 전체가 되므로 두 값의 최댓값이 답이다.",
    anchor: "k칸씩-블록으로-나눠-양쪽에서-쌓기",
  },
  {
    id: "leetcode-sliding-window-maximum-5",
    post: "leetcode-sliding-window-maximum",
    question: "자바스크립트에서 덱의 앞을 `Array.prototype.shift()`로 빼면 어떤 입력에서 크게 느려지나?",
    choices: [
      "값이 모두 같은 배열. shift가 같은 값을 비교하느라 느려진다",
      "값이 계속 줄어드는 배열. 덱에 k개가 꽉 차고 shift가 나머지를 매번 당겨 O(nk)가 된다",
      "값이 계속 커지는 배열. 덱이 항상 비어 shift가 실패한다",
      "음수가 섞인 배열. shift가 음수 인덱스를 처리하지 못한다",
    ],
    answer: 1,
    explanation:
      "감소하는 배열에서는 뒤에서 빼는 일이 없어 덱 길이가 k까지 찬다. shift는 나머지 원소를 한 칸씩 당기니 매번 O(k)가 들어, 10만 개·k = 5만에서 6.4초가 걸렸다. 머리 인덱스를 따로 두고 옮기면 2ms였다.",
    anchor: "세-언어로-쓴-최종-코드",
  },
];
