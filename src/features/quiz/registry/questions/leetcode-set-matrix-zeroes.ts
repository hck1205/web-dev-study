import type { QuizQuestion } from "../types";

export const LEETCODE_SET_MATRIX_ZEROES: QuizQuestion[] = [
  {
    id: "leetcode-set-matrix-zeroes-1",
    post: "leetcode-set-matrix-zeroes",
    question: "0을 만나자마자 그 행과 열을 지우는 코드에 [[1,2,3,4],[5,0,7,8],[9,10,11,12]]를 넣으면?",
    choices: [
      "정답 [[1,0,3,4],[0,0,0,0],[9,0,11,12]]이 나온다",
      "1행만 지워지고 1열은 그대로다",
      "모든 칸이 0이 된다",
      "1만 남고 나머지 11칸이 0이 된다",
    ],
    answer: 3,
    explanation:
      "1행을 지우고 나면 같은 행의 (1,2), (1,3)에서 방금 쓴 0을 읽어 그 열까지 지우고, 2행의 (2,1)에서 또 0을 읽어 2행을 지운다. (0,0)은 이미 지나간 칸이고 0열을 지우게 만드는 0을 만나지 않아서 1만 남는다. 읽기와 쓰기를 같은 반복에서 하면 이렇게 번진다.",
    anchor: "3--4에서-손으로-지워-보기",
  },
  {
    id: "leetcode-set-matrix-zeroes-2",
    post: "leetcode-set-matrix-zeroes",
    question: "O(1) 풀이에서 첫 행과 첫 열에 원래 0이 있었는지를 표시를 적기 전에 따로 기억하는 이유는?",
    choices: [
      "표시를 적고 나면 첫 행·첫 열의 0이 원래 0인지 표시인지 구분할 수 없기 때문",
      "첫 행은 다른 행보다 길기 때문",
      "깃발이 없으면 시간 복잡도가 O(mn(m + n))이 되기 때문",
      "첫 행과 첫 열은 반복문에서 아예 볼 수 없기 때문",
    ],
    answer: 0,
    explanation:
      "첫 행과 첫 열을 장부로 쓰면 안쪽 0 때문에 거기에 0이 적힌다. 그 뒤에 깃발을 구하면 표시를 원래 0으로 읽어 첫 행과 첫 열을 통째로 지운다. 시간 복잡도와는 관계가 없고 정확성 문제다.",
    anchor: "첫-행과-첫-열을-장부로-빌린다",
  },
  {
    id: "leetcode-set-matrix-zeroes-3",
    post: "leetcode-set-matrix-zeroes",
    question: "firstRow가 참일 때 첫 행을 안쪽 칸보다 먼저 지우면 어떻게 되나?",
    choices: [
      "결과가 같다. 순서는 상관없다",
      "모든 열 장부가 0이 되어 안쪽 칸이 전부 지워진다",
      "첫 행이 지워지지 않는다",
      "첫 열만 잘못 지워진다",
    ],
    answer: 1,
    explanation:
      "첫 행은 열 장부라서 먼저 지우면 모든 열에 '지운다'가 적힌 것과 같다. 그 뒤 안쪽 칸을 지우는 반복이 모든 칸을 0으로 만든다. 장부는 다 읽은 뒤 마지막에 지운다.",
    anchor: "장부-자신은-왜-마지막에-지우나",
  },
  {
    id: "leetcode-set-matrix-zeroes-4",
    post: "leetcode-set-matrix-zeroes",
    question: "이 문제에서 Integer.MIN_VALUE 같은 정수를 '지울 칸' 표시로 쓰면 안 되는 이유는?",
    choices: [
      "Java에서 음수를 배열에 넣을 수 없기 때문",
      "표시를 0으로 되돌리는 데 O(mn²)이 들기 때문",
      "값이 32비트 정수 전체 범위라 그 정수가 원래 값으로 들어올 수 있기 때문",
      "MIN_VALUE는 0과 같은 비트 패턴이기 때문",
    ],
    answer: 2,
    explanation:
      "값의 범위가 int 전체라 int 안에는 '절대 나오지 않는 값'이 없다. 원래 MIN_VALUE인 칸을 지운 칸으로 착각해 엉뚱하게 0이 된다. JavaScript의 null처럼 타입 밖 값을 쓸 수 있을 때만 이 방법이 안전하다.",
    anchor: "지울-칸에-다른-표시를-남긴다",
  },
  {
    id: "leetcode-set-matrix-zeroes-5",
    post: "leetcode-set-matrix-zeroes",
    question: "행·열 장부 풀이의 시간과 추가 공간은?",
    choices: [
      "시간 O(mn(m + n)), 공간 O(1)",
      "시간 O(mn), 공간 O(mn)",
      "시간 O(m + n), 공간 O(m + n)",
      "시간 O(mn), 공간 O(m + n)",
    ],
    answer: 3,
    explanation:
      "한 번은 읽어서 장부에 적고 한 번은 장부를 보고 쓰니 칸마다 두 번, O(mn)이다. 장부는 행 m칸과 열 n칸이라 O(m + n)이다. O(mn(m + n))은 0마다 행과 열을 지우는 복사·표시 풀이의 최악 시간이다.",
    anchor: "행-장부와-열-장부",
  },
];
