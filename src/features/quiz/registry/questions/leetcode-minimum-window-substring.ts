import type { QuizQuestion } from "../types";

export const LEETCODE_MINIMUM_WINDOW_SUBSTRING: QuizQuestion[] = [
  {
    id: "leetcode-minimum-window-substring-1",
    post: "leetcode-minimum-window-substring",
    question: "`need`(글자마다 아직 더 필요한 개수)와 `missing`(모자란 글자 수의 합)을 쓰는 창에서, 글자 c가 들어올 때 `missing`을 줄이는 조건은?",
    choices: [
      "c가 t에 있는 글자이기만 하면 언제나 줄인다",
      "c가 창에 처음 들어온 글자일 때만 줄인다",
      "need[c]를 줄인 뒤 값이 0일 때만 줄인다",
      "need[c]를 줄이기 전 값이 양수일 때, 즉 필요한 글자를 채웠을 때만 줄인다",
    ],
    answer: 3,
    explanation:
      "이미 충분한 글자가 더 들어오면 need가 음수가 될 뿐 모자란 수는 그대로다. t에 있기만 하면 줄이는 코드는 \"AAXB\", t = \"AB\"에서 A 두 개로 missing을 0으로 만들어 \"AA\"를 답으로 낸다. 줄인 뒤 값이 0일 때만 줄이면 t에 같은 글자가 여러 개일 때 앞의 것들을 세지 못한다.",
    anchor: "모자란-글자-수-하나만-들고-다닌다",
  },
  {
    id: "leetcode-minimum-window-substring-2",
    post: "leetcode-minimum-window-substring",
    question: "가장 긴 창 문제와 비교할 때, 이 문제에서 길이를 기록하는 위치는 어디이고 왜 그런가?",
    choices: [
      "while 안, 왼쪽을 줄이기 전. 조건을 만족하는 창만 답이 될 수 있고 줄일수록 짧아지기 때문이다",
      "while이 끝난 뒤. 조건이 깨진 직후의 창이 가장 짧기 때문이다",
      "반복문이 모두 끝난 뒤 한 번. 마지막 창이 답이기 때문이다",
      "오른쪽을 늘리기 전. 아직 글자가 들어오지 않은 창이 가장 짧기 때문이다",
    ],
    answer: 0,
    explanation:
      "가장 짧은 창은 t를 다 품는 동안 왼쪽을 줄이며 매번 기록한다. while이 끝난 뒤에는 이미 한 글자가 모자란 창이라 답이 될 수 없다. 가장 긴 창은 조건을 되살린 뒤 while 밖에서 기록하니 위치가 반대다.",
    anchor: "모자란-글자-수-하나만-들고-다닌다",
  },
  {
    id: "leetcode-minimum-window-substring-3",
    post: "leetcode-minimum-window-substring",
    question: "답이 없을 때(`bestLen`이 `Infinity`) 검사 없이 `s.slice(bestL, bestL + bestLen)`을 돌려주면 어떻게 되나?",
    choices: [
      "빈 문자열이 나와 우연히 맞는다",
      "RangeError가 난다",
      "s.slice(0, Infinity)가 되어 s 전체가 나온다",
      "undefined가 나온다",
    ],
    answer: 2,
    explanation:
      "slice는 끝 위치가 길이보다 크면 길이로 잘라 쓰니 Infinity를 주면 끝까지 잘라 s 전체를 돌려준다. 답이 없으면 빈 문자열이어야 하므로 bestLen이 Infinity인지 따로 검사해야 한다.",
    anchor: "틀리기-쉬운-곳",
  },
  {
    id: "leetcode-minimum-window-substring-4",
    post: "leetcode-minimum-window-substring",
    question: "창 안의 개수를 `have`에 두고 매번 `t`의 글자 종류를 모두 비교해 판정하는 풀이의 시간 복잡도는?",
    choices: [
      "O(m²). 왼쪽과 오른쪽이 각각 m번 움직여서",
      "O(m·k). 창 이동은 2m번 이하지만 이동마다 k종류를 비교해서",
      "O(m + n). 해시맵 조회가 O(1)이라서",
      "O(m log m). 길이를 이분 탐색해서",
    ],
    answer: 1,
    explanation:
      "두 포인터가 앞으로만 가니 이동은 합쳐서 2m번 이하다. 그런데 이동할 때마다 t의 글자 종류 k(최대 52)를 다 비교하니 O(m·k)가 된다. missing 카운터로 판정을 O(1)로 만들면 k가 사라져 O(m + n)이다.",
    anchor: "창을-늘이고-줄이며-매번-다-비교하기",
  },
  {
    id: "leetcode-minimum-window-substring-5",
    post: "leetcode-minimum-window-substring",
    question: "`t`의 정확한 순열(애너그램)인 구간을 찾는 문제(438)에 같은 `missing` 카운터를 쓰려면 무엇을 바꾸나?",
    choices: [
      "missing 대신 Set을 쓴다",
      "창을 줄이지 않고 늘리기만 한다",
      "t를 정렬한 뒤 이분 탐색한다",
      "창 길이를 t.length로 고정하고, 한 칸 밀 때 들어오는 글자와 나가는 글자를 함께 처리한다",
    ],
    answer: 3,
    explanation:
      "길이가 t.length로 고정된 창에서 필요한 글자를 모두 채웠다면 남는 글자가 끼어들 자리가 없으니 개수가 정확히 같다. 그래서 missing === 0인 위치가 곧 애너그램의 시작 위치다.",
    anchor: "조건을-바꿔-보면",
  },
];
