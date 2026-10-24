import type { QuizQuestion } from "../types";

export const LEETCODE_SLIDING_WINDOW_MEDIAN: QuizQuestion[] = [
  {
    id: "leetcode-sliding-window-median-1",
    post: "leetcode-sliding-window-median",
    question: "두 힙 풀이에서 창에서 나가는 값을 바로 지우지 않고 해시맵에 적어 두는 이유는?",
    choices: [
      "힙은 맨 위가 아닌 값을 빨리 찾아 지우지 못해서, 맨 위로 올라올 때 치우려고",
      "같은 값이 여러 개면 어느 것을 지울지 몰라서",
      "해시맵이 힙보다 메모리를 덜 써서",
      "나가는 값은 다시 들어올 수 있어서",
    ],
    answer: 0,
    explanation:
      "힙에서 임의의 값을 찾으려면 배열을 훑어야 해서 O(k)가 든다. 적어 두었다가 그 값이 맨 위에 오는 순간 꺼내면 각 값을 한 번씩만 치우면 된다. 같은 값이 여러 개여도 아무거나 지워도 되니 그건 이유가 아니다.",
    anchor: "두-힙에-나눠-담고-지울-값은-적어-둔다",
  },
  {
    id: "leetcode-sliding-window-median-2",
    post: "leetcode-sliding-window-median",
    question: "지연 삭제 풀이에서 균형을 힙 배열 길이로 맞추면 [5, 2, 8, 1, 9, 3, 7], k = 3의 마지막 중앙값은?",
    choices: ["7", "1", "9", "3"],
    answer: 3,
    explanation:
      "마지막 창에서 lo 배열에는 이미 지운 1이 남아 3칸이라 hi보다 2 많아 보인다. 그래서 7을 hi로 옮기고 lo 맨 위 3을 중앙값으로 낸다. 정답 7을 내려면 살아 있는 개수로 균형을 맞춰야 한다.",
    anchor: "살아-있는-개수를-따로-세는-이유",
  },
  {
    id: "leetcode-sliding-window-median-3",
    post: "leetcode-sliding-window-median",
    question: "지연 삭제를 쓰는 두 힙 풀이의 복잡도가 O(n log k)가 아니라 O(n log n)인 이유는?",
    choices: [
      "힙을 창마다 새로 만들기 때문에",
      "해시맵 연산이 O(log n)이기 때문에",
      "지운 값이 맨 위에 오기 전까지 힙에 남아 힙 크기가 최악 n까지 커지기 때문에",
      "중앙값을 읽을 때 힙 전체를 훑기 때문에",
    ],
    answer: 2,
    explanation:
      "치우는 건 맨 위에 왔을 때뿐이라 바닥에 쌓인 지운 값은 남는다. 커지는 값만 들어오면 k = 100인데도 힙 길이 합이 10만까지 커졌다. 그래도 값마다 한 번 넣고 한 번 치우니 전체는 O(n log n)이다.",
    anchor: "두-힙에-나눠-담고-지울-값은-적어-둔다",
  },
  {
    id: "leetcode-sliding-window-median-4",
    post: "leetcode-sliding-window-median",
    question: "Java TreeSet 풀이에서 값 대신 인덱스를 넣고 '값, 같으면 인덱스' 순으로 비교하는 이유는?",
    choices: [
      "인덱스가 값보다 작아서 메모리를 아끼려고",
      "TreeSet은 같은 원소를 하나만 담아서, 같은 값을 서로 다른 원소로 구분하려고",
      "인덱스로 정렬하면 창 순서가 유지되어서",
      "값으로 비교하면 넘침이 생겨서",
    ],
    answer: 1,
    explanation:
      "TreeSet에 값을 그대로 넣으면 같은 값이 하나로 합쳐져 개수가 틀어진다. 인덱스를 넣고 값이 같을 때 인덱스로 순서를 정하면 모두 다른 원소가 되고, 창에서 나가는 인덱스를 정확히 지울 수 있다.",
    anchor: "지우기가-되는-정렬-집합-두-개",
  },
  {
    id: "leetcode-sliding-window-median-5",
    post: "leetcode-sliding-window-median",
    question: "Java에서 int a = b = 2147483647일 때 (a + b) / 2.0의 결과는?",
    choices: ["2147483647.0", "-1.0", "1.073741823E9", "컴파일 오류"],
    answer: 1,
    explanation:
      "덧셈이 먼저 int로 일어나 32비트를 넘쳐 -2가 되고, 2.0으로 나눠 -1.0이 된다. 한쪽을 long으로 바꿔 더하거나 각각 2.0으로 나눈 뒤 더해야 한다. JavaScript에서 (a + b) >> 1을 써도 같은 이유로 -1이 나온다.",
    anchor: "21억-두-개의-평균이--1이-되는-이유",
  },
];
