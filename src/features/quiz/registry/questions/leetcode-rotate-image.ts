import type { QuizQuestion } from "../types";

export const LEETCODE_ROTATE_IMAGE: QuizQuestion[] = [
  {
    id: "leetcode-rotate-image-1",
    post: "leetcode-rotate-image",
    question: "n × n 행렬을 시계 방향으로 90도 돌릴 때 (i, j)에 있던 값은 어디로 가나?",
    choices: ["(n-1-j, i)", "(j, i)", "(j, n-1-i)", "(n-1-i, n-1-j)"],
    answer: 2,
    explanation:
      "i번째 행이 뒤에서 i번째 열이 되니 원래 열 번호 j가 새 행 번호, 뒤집힌 행 번호 n-1-i가 새 열 번호가 된다. (n-1-j, i)는 반시계 방향, (j, i)는 전치, (n-1-i, n-1-j)는 180도 회전이다.",
    anchor: "3--3에서-숫자가-어디로-가는지-따라가-보기",
  },
  {
    id: "leetcode-rotate-image-2",
    post: "leetcode-rotate-image",
    question: "전치 반복에서 j를 i + 1이 아니라 0부터 돌리면 3 × 3 [[1,2,3],[4,5,6],[7,8,9]]은 어떻게 되나?",
    choices: [
      "정상적으로 [[7,4,1],[8,5,2],[9,6,3]]이 된다",
      "[[3,2,1],[6,5,4],[9,8,7]]이 된다",
      "반시계 방향으로 돌아간 [[3,6,9],[2,5,8],[1,4,7]]이 된다",
      "인덱스가 범위를 벗어나 오류가 난다",
    ],
    answer: 1,
    explanation:
      "대각선 양쪽의 짝을 한 번씩 두 번 바꾸게 돼서 전치가 통째로 취소된다. 남는 건 행마다 좌우로 뒤집은 결과라 거울에 비친 모양이 나온다. 인덱스는 모두 범위 안이라 오류는 나지 않는다.",
    anchor: "돌리다가-자주-틀리는-곳",
  },
  {
    id: "leetcode-rotate-image-3",
    post: "leetcode-rotate-image",
    question: "네 칸 고리 풀이에서 값 하나만 임시로 들고 있어도 되는 이유는?",
    choices: [
      "(i, j)에서 시작한 회전을 네 번 하면 제자리로 와서 칸들이 넷씩 닫힌 고리를 이루기 때문",
      "행렬의 값이 -1000에서 1000 사이라 겹치지 않기 때문",
      "가운데 칸이 움직이지 않아서 빈칸으로 쓸 수 있기 때문",
      "전치를 먼저 해 두었기 때문",
    ],
    answer: 0,
    explanation:
      "90도를 네 번 돌리면 360도라 네 칸이 서로의 자리로만 옮겨 다닌다. 한 칸을 들어 빈자리를 만들면 그 자리에 들어올 값을 끌어오고, 또 생긴 빈자리를 채우는 식으로 거꾸로 돌면 된다. 가운데 칸은 n이 홀수일 때만 있고 이 방법과는 관계가 없다.",
    anchor: "네-칸씩-돌려-끼운다",
  },
  {
    id: "leetcode-rotate-image-4",
    post: "leetcode-rotate-image",
    question: "전치한 뒤 행마다 좌우로 뒤집는 대신, 좌우를 먼저 뒤집고 전치하면 결과는?",
    choices: [
      "똑같이 시계 방향 90도 회전이다",
      "180도 회전이다",
      "원래 행렬로 돌아온다",
      "반시계 방향 90도 회전이다",
    ],
    answer: 3,
    explanation:
      "(i, j)가 좌우 뒤집기에서 (i, n-1-j)로, 전치에서 (n-1-j, i)로 가는데 이건 반시계 방향 회전 식이다. 대칭 이동 두 번은 회전이고 방향은 순서로 정해진다. 시계 방향을 만드는 다른 조합은 행 순서를 위아래로 뒤집은 뒤 전치하는 것이다.",
    anchor: "뒤집기-두-번이-왜-회전이-되나",
  },
  {
    id: "leetcode-rotate-image-5",
    post: "leetcode-rotate-image",
    question: "Python에서 matrix = [list(r) for r in zip(*matrix[::-1])]로 쓰면 채점에서 틀리는 이유는?",
    choices: [
      "zip이 행과 열을 거꾸로 묶어서 반시계 방향이 되기 때문",
      "함수 안의 이름만 새 리스트를 가리키고 호출한 쪽의 리스트는 바뀌지 않기 때문",
      "zip이 튜플을 돌려줘서 비교에 실패하기 때문",
      "시간 복잡도가 O(n³)이라 시간 초과가 나기 때문",
    ],
    answer: 1,
    explanation:
      "인자는 리스트를 가리키는 참조의 복사본이라 다른 리스트를 대입하면 바깥에는 아무 변화가 없다. matrix[:] = ...처럼 같은 객체의 내용을 갈아 끼워야 한다. 그렇게 해도 새 리스트를 만들기 때문에 공간은 O(n²)이다.",
    anchor: "python과-java로-옮기기",
  },
];
