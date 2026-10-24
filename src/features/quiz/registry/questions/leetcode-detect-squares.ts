import type { QuizQuestion } from "../types";

export const LEETCODE_DETECT_SQUARES: QuizQuestion[] = [
  {
    id: "leetcode-detect-squares-1",
    post: "leetcode-detect-squares",
    question: "질문 점이 (4, 4)이고 저장된 점 (1, 1)을 대각선 끝으로 볼 때, 정사각형이 되려면 어느 두 자리에 점이 있어야 하나?",
    choices: [
      "(4, 1)과 (1, 4)",
      "(1, 4)와 (4, 7)",
      "(2, 2)와 (3, 3)",
      "(4, 1)과 (7, 4)",
    ],
    answer: 0,
    explanation:
      "축 정렬 정사각형은 대각선 두 끝 (x1, y1), (x2, y2)가 정해지면 나머지 두 끝이 (x1, y2), (x2, y1)로 정해진다. 두 점의 x와 y를 바꿔 조합한 자리다. (2, 2), (3, 3)은 대각선 위의 점일 뿐 모서리가 아니다.",
    anchor: "대각선-하나가-정사각형을-정한다",
  },
  {
    id: "leetcode-detect-squares-2",
    post: "leetcode-detect-squares",
    question: "(3, 3)에 점을 세 개 저장하고 (3, 3)을 물었다. 대각선 후보에서 dx === qx 검사를 빼면 count는 얼마를 돌려주나?",
    choices: [
      "0",
      "3",
      "9",
      "27",
    ],
    answer: 3,
    explanation:
      "x 차이와 y 차이가 둘 다 0이라 같다는 조건을 통과하고, 나머지 두 자리도 (3, 3) 자신이라 3 × 3 × 3 = 27이 된다. 정답은 넓이가 0이라 0이다. x 차이가 0인 후보를 건너뛰면 이 경우가 빠진다.",
    anchor: "넓이-0과-중복에서-틀린다",
  },
  {
    id: "leetcode-detect-squares-3",
    post: "leetcode-detect-squares",
    question: "중복을 포함한 점 목록을 훑으며 대각선 후보를 고르는 풀이에서, 대각선 자리의 개수까지 곱하면 어떻게 되나?",
    choices: [
      "정확한 답이 나온다",
      "중복된 점이 두 번 반영되어 답이 커진다",
      "중복된 점이 무시되어 답이 작아진다",
      "넓이 0인 정사각형이 섞인다",
    ],
    answer: 1,
    explanation:
      "목록에 (1, 1)이 두 번 있으면 바깥 반복이 그 자리를 두 번 만나는데, 매번 개수 2를 곱하면 2 × 2 = 4가 된다. 정답은 2다. 중복 포함 목록을 훑을 땐 나머지 두 자리 개수만, 서로 다른 자리를 훑을 땐 대각선 개수까지 곱한다.",
    anchor: "목록과-장부를-섞으면-두-번-센다",
  },
  {
    id: "leetcode-detect-squares-4",
    post: "leetcode-detect-squares",
    question: "같은 세로줄의 점만 보는 풀이가 서로 다른 자리를 모두 훑는 풀이보다 느려지는 입력은?",
    choices: [
      "점이 1001 × 1001 전체에 고르게 흩어진 경우",
      "저장된 점이 하나도 없는 경우",
      "저장된 점이 모두 질문 점과 같은 세로줄에 몰린 경우",
      "좌표가 모두 0인 경우",
    ],
    answer: 2,
    explanation:
      "이 풀이는 질문 점의 세로줄에 있는 자리 수만큼 돌면서 자리마다 조회를 네 번 한다. 점이 흩어져 있으면 한 줄에 몇 개 없어 아주 빠르지만, 모두 한 줄에 몰리면 전체를 훑는 것과 같은 수를 돌면서 조회는 더 많이 한다.",
    anchor: "같은-세로줄의-점만-본다",
  },
  {
    id: "leetcode-detect-squares-5",
    post: "leetcode-detect-squares",
    question: "Python에서 장부를 defaultdict(int)로 만들고 items()로 훑는 도중 cnt[(qx, y)]로 개수를 읽으면?",
    choices: [
      "없는 키를 0으로 새로 만들어 반복 중 크기가 바뀌므로 RuntimeError가 난다",
      "KeyError가 난다",
      "정상적으로 동작하고 Counter와 같다",
      "없는 키에서 None이 나와 TypeError가 난다",
    ],
    answer: 0,
    explanation:
      "defaultdict는 없는 키를 읽기만 해도 기본값으로 키를 만든다. 그래서 훑고 있는 딕셔너리에 새 키가 생겨 dictionary changed size during iteration 오류가 난다. Counter는 없는 키에 0만 돌려주고 키를 만들지 않는다.",
    anchor: "python과-java-장부를-만드는-도구가-다르다",
  },
];
