import type { QuizQuestion } from "../types";

export const LEETCODE_SEARCH_A_2D_MATRIX: QuizQuestion[] = [
  {
    id: "leetcode-search-a-2d-matrix-1",
    post: "leetcode-search-a-2d-matrix",
    question: "74번 행렬을 하나의 정렬된 1차원 배열처럼 다룰 수 있는 이유는?",
    choices: [
      "행과 열이 각각 오름차순이기 때문이다",
      "행렬이 항상 정사각형이기 때문이다",
      "각 행이 정렬돼 있고, 행의 첫 값이 윗행의 마지막 값보다 커서 행을 이어 붙이면 전체가 정렬되기 때문이다",
      "값이 모두 서로 다르기 때문이다",
    ],
    answer: 2,
    explanation:
      "두 조건이 함께 있어야 행을 위에서부터 이어 붙인 수열이 정렬된다. 행과 열이 각각 정렬만 된 240번 행렬은 이어 붙이면 정렬이 깨진다. 정사각형일 필요는 없다.",
    anchor: "행렬을-한-줄로-펴면-정렬된-배열이다",
  },
  {
    id: "leetcode-search-a-2d-matrix-2",
    post: "leetcode-search-a-2d-matrix",
    question: "2행 4열 행렬에서 펼친 번호 6은 몇 행 몇 열인가?",
    choices: ["3행 0열", "1행 2열", "1행 3열", "2행 0열"],
    answer: 1,
    explanation:
      "한 행에 4칸이니 열 개수 4로 나눈다. 6 / 4 = 1(내림), 6 % 4 = 2라 1행 2열이다. 행 개수 2로 나누면 3행 0열이 나와 없는 행을 읽는다.",
    anchor: "나누는-수를-헷갈리면-틀린다",
  },
  {
    id: "leetcode-search-a-2d-matrix-3",
    post: "leetcode-search-a-2d-matrix",
    question: "계단 풀이를 왼쪽 위 칸에서 시작하면 안 되는 이유는?",
    choices: [
      "왼쪽 위 칸은 행에서도 열에서도 가장 작아서, target보다 작을 때 오른쪽과 아래 중 어느 쪽으로 갈지 정할 수 없기 때문이다",
      "왼쪽 위 칸은 항상 target보다 크기 때문이다",
      "왼쪽 위에서 시작하면 O(mn)이 되기 때문이다",
      "배열 인덱스가 음수가 되기 때문이다",
    ],
    answer: 0,
    explanation:
      "오른쪽 위 칸은 행에서 가장 크고 열에서 가장 작아서 비교 한 번에 행이나 열 하나를 지울 수 있다. 왼쪽 위는 오른쪽도 아래도 커지니 작다는 정보로 방향이 하나로 정해지지 않는다.",
    anchor: "오른쪽-위-모서리에서-계단을-내려간다",
  },
  {
    id: "leetcode-search-a-2d-matrix-4",
    post: "leetcode-search-a-2d-matrix",
    question: "첫 열 [2, 11, 23]에서 target 19가 들어 있을 행을 고를 때 맞는 방법은?",
    choices: [
      "첫 값이 19 이상인 첫 행(lower bound)을 고른다",
      "첫 값이 19보다 큰 첫 행(upper bound)을 고른다",
      "첫 값이 19 이하인 마지막 행, 즉 upper bound 바로 앞 행을 고른다",
      "가운데 행을 고른다",
    ],
    answer: 2,
    explanation:
      "19는 첫 값이 19 이하인 행 중 가장 아래 행(11로 시작하는 행1)에만 있을 수 있다. lower bound를 쓰면 23으로 시작하는 행2가 나와 틀린다. 첫 열 값으로만 테스트하면 이 버그가 숨는다.",
    anchor: "첫-열에서-행을-그-행에서-열을",
  },
  {
    id: "leetcode-search-a-2d-matrix-5",
    post: "leetcode-search-a-2d-matrix",
    question: "행과 열이 각각 정렬만 돼 있고 행끼리는 이어지지 않는 행렬(240번)에서 쓸 수 있는 풀이는?",
    choices: [
      "펼친 번호 위의 이분 탐색",
      "오른쪽 위에서 시작하는 O(m + n) 계단 탐색",
      "첫 열에서 행 하나를 고른 뒤 그 행만 이분 탐색",
      "행렬 전체를 이어 붙인 뒤 이분 탐색",
    ],
    answer: 1,
    explanation:
      "행을 이어 붙이면 정렬이 깨지니 펼친 번호 풀이는 틀린 답을 낸다. 값이 여러 행에 걸칠 수 있어 행 하나만 고르는 것도 안 된다. 행과 열이 각각 정렬이라는 조건만으로 성립하는 계단 탐색이 남는다.",
    anchor: "면접관이-행렬을-바꿔-오면",
  },
];
