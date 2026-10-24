import type { QuizQuestion } from "../types";

export const LEETCODE_LAST_STONE_WEIGHT: QuizQuestion[] = [
  {
    id: "leetcode-last-stone-weight-1",
    post: "leetcode-last-stone-weight",
    question: "[6, 4, 9, 2, 5, 3]으로 시뮬레이션하면 마지막에 남는 돌의 무게는?",
    choices: ["0", "3", "1", "2"],
    answer: 2,
    explanation:
      "9와 6이 부딪쳐 3, 5와 4가 부딪쳐 1이 남는다. 원래 3과 조각 3은 같아서 함께 사라지고, 2와 1이 부딪쳐 1이 남는다. 같은 무게 두 개가 함께 사라지는 차례를 놓치면 다른 답이 나온다.",
    anchor: "여섯-개의-돌을-손으로-부숴-본다",
  },
  {
    id: "leetcode-last-stone-weight-2",
    post: "leetcode-last-stone-weight",
    question: "정렬된 배열에 조각을 끼우는 풀이보다 최대 힙이 유리한 이유는?",
    choices: [
      "힙은 가장 큰 값을 O(1)에 꺼내기 때문에",
      "힙은 맨 위만 맞추고 나머지 순서는 맞추지 않아 넣기가 O(log n)이기 때문에",
      "힙은 같은 무게를 자동으로 지워 주기 때문에",
      "힙은 추가 공간이 필요 없기 때문에",
    ],
    answer: 1,
    explanation:
      "정렬된 배열은 꺼내기는 O(1)이지만 조각을 제자리에 끼우느라 뒤를 밀어 O(n)이 든다. 힙은 맨 위만 가장 크면 되므로 넣기와 꺼내기가 모두 O(log n)이다. 힙에서 꺼내기는 O(1)이 아니라 O(log n)이다.",
    anchor: "최대-힙에서-두-번-꺼내고-한-번-넣는다",
  },
  {
    id: "leetcode-last-stone-weight-3",
    post: "leetcode-last-stone-weight",
    question: "돌 30개 이하라는 원래 제약에서 실제로 가장 빨랐던 풀이는?",
    choices: ["최대 힙", "매번 정렬", "무게별 칸", "정렬 없이 배열을 두 번 훑기"],
    answer: 3,
    explanation:
      "칸이 몇 개 안 되면 단순한 반복문이 힙의 자리 바꾸기보다 싸서, 1만 번 반복에 10ms로 힙의 32ms보다 빨랐다. 무게별 칸은 1001칸 배열을 매번 만드느라 작은 입력에서 손해를 본다. n이 커지면 두 번 훑기는 O(n²)이 드러난다.",
    anchor: "정렬-없이-가장-큰-두-개만-찾는다",
  },
  {
    id: "leetcode-last-stone-weight-4",
    post: "leetcode-last-stone-weight",
    question: "while (h.size > 0)으로 반복하는 JavaScript 힙 풀이에 돌 하나 [1]을 넣으면 어떻게 되나?",
    choices: [
      "1을 돌려준다",
      "0을 돌려준다",
      "NaN이 힙에 들어가 반복이 끝나지 않는다",
      "곧바로 TypeError가 난다",
    ],
    answer: 2,
    explanation:
      "돌이 하나일 때 두 번째 pop은 빈 힙에서 undefined를 꺼내고, 1 - undefined는 NaN이다. NaN이 다시 들어가 크기가 1이 되니 같은 일이 끝없이 되풀이된다. 반복 조건은 돌이 둘 이상 있을 때여야 한다.",
    anchor: "돌이-하나도-안-남는-경우를-빼먹는다",
  },
  {
    id: "leetcode-last-stone-weight-5",
    post: "leetcode-last-stone-weight",
    question: "무게별 칸 풀이에서 부딪치는 횟수가 최대 무게 W번을 넘지 않는 이유는?",
    choices: [
      "부딪친 뒤 남는 돌이 모두 방금 든 돌보다 가벼워서, 다음에 드는 돌이 늘 이전보다 가볍기 때문에",
      "손가락이 위로 올라가는 일이 없기 때문에",
      "같은 무게의 돌은 처음부터 하나만 세기 때문에",
      "돌의 개수가 W개를 넘지 않기 때문에",
    ],
    answer: 0,
    explanation:
      "조각 y - x와 나머지 돌은 모두 y보다 가볍다. 그래서 드는 돌의 무게가 매번 줄고, 부딪치는 횟수는 W번을 넘지 않는다. 손가락은 조각 위치로 올라갈 수 있어서 전체는 O(n + W²)이다.",
    anchor: "무게가-1000을-넘지-않으니-무게별로-센다",
  },
];
