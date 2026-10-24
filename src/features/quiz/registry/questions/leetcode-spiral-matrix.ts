import type { QuizQuestion } from "../types";

export const LEETCODE_SPIRAL_MATRIX: QuizQuestion[] = [
  {
    id: "leetcode-spiral-matrix-1",
    post: "leetcode-spiral-matrix",
    question: "경계 풀이에서 아랫변과 왼쪽 변을 읽기 전에만 if 검사를 하는 이유는?",
    choices: [
      "윗변과 오른쪽 변을 읽고 경계를 밀면 남은 행이나 열이 없어질 수 있기 때문",
      "아랫변과 왼쪽 변은 거꾸로 읽어서 인덱스가 음수가 될 수 있기 때문",
      "정사각형에서만 아랫변이 존재하기 때문",
      "while 조건이 아랫변과 왼쪽 변까지 미리 검사해 주기 때문",
    ],
    answer: 0,
    explanation:
      "while 조건은 윗변을 읽는 순간만 보장한다. 윗변을 읽고 top을 밀면 행이 하나도 안 남을 수 있고, 그때 아랫변을 읽으면 방금 읽은 행을 거꾸로 다시 읽는다. 인덱스가 음수가 되는 문제가 아니라 중복이 문제다.",
    anchor: "한-줄만-남았을-때-두-번-읽지-않기",
  },
  {
    id: "leetcode-spiral-matrix-2",
    post: "leetcode-spiral-matrix",
    question: "if 두 개를 뺀 경계 코드가 3 × 4 행렬 [[1,2,3,4],[5,6,7,8],[9,10,11,12]]에서 내는 결과는?",
    choices: [
      "1 2 3 4 8 12 11 10 9 5 6 7로 정답이다",
      "1 2 3 4 8 12 11 10 9 5 6 7 6으로 6이 두 번 나온다",
      "1 2 3 4 8 12 11 10 9 5로 6과 7을 빠뜨린다",
      "무한 반복에 빠진다",
    ],
    answer: 1,
    explanation:
      "3 × 4의 안쪽 껍질은 6과 7 한 줄뿐이다. 윗변으로 6 7을 읽은 뒤 조건 없이 아랫변까지 읽으면 그 줄을 되돌아오며 6을 다시 넣는다. 정사각형에서는 이런 한 줄이 남지 않아서 같은 코드가 통과한다.",
    anchor: "한-줄만-남았을-때-두-번-읽지-않기",
  },
  {
    id: "leetcode-spiral-matrix-3",
    post: "leetcode-spiral-matrix",
    question: "윗줄을 떼고 남은 행렬을 반시계로 돌리는 풀이의 시간 복잡도가 O(mn)보다 큰 이유는?",
    choices: [
      "배열의 shift가 O(1)이 아니기 때문",
      "같은 칸을 여러 번 결과에 넣기 때문",
      "윗줄을 뗄 때마다 남은 칸 전체를 새 행렬로 옮기기 때문",
      "재귀 호출 깊이가 mn이기 때문",
    ],
    answer: 2,
    explanation:
      "떼는 횟수가 약 m + n번이고 그때마다 남은 칸 대부분을 새로 옮겨서 O(mn × min(m, n))이 된다. shift도 비용이 있지만 회전 비용에 묻혀 차수를 바꾸지 않는다. 결과에는 칸마다 한 번만 들어간다.",
    anchor: "윗줄을-떼고-판을-돌린다",
  },
  {
    id: "leetcode-spiral-matrix-4",
    post: "leetcode-spiral-matrix",
    question: "걸음 수 풀이에서 3 × 4 행렬을 읽을 때 방향마다 걷는 칸 수의 순서는?",
    choices: ["4, 3, 2, 1, 2", "4, 3, 4, 3, 2", "4, 2, 3, 1, 2", "3, 4, 2, 3, 1"],
    answer: 2,
    explanation:
      "가로는 n = 4부터, 세로는 m - 1 = 2부터 시작해 같은 축을 다시 걸을 때마다 하나씩 줄어든다. 첫 가로 걸음이 오른쪽 열의 맨 위 칸을 이미 읽어서 세로는 m이 아니라 m - 1부터다. 합은 칸 수와 같은 12다.",
    anchor: "걸음-수가-하나씩-줄어든다",
  },
  {
    id: "leetcode-spiral-matrix-5",
    post: "leetcode-spiral-matrix",
    question: "로봇 풀이에서 seen 배열 대신 읽은 칸에 101을 써 두는 방법의 단점은?",
    choices: [
      "시간 복잡도가 O(mn²)으로 늘어난다",
      "호출한 쪽의 입력 행렬이 망가지고, 값의 범위가 정해진 문제에서만 쓸 수 있다",
      "한 행짜리 행렬에서 무한 반복에 빠진다",
      "결과 배열에 101이 섞여 들어간다",
    ],
    answer: 1,
    explanation:
      "값이 -100에서 100이라는 약속 덕분에 101을 표시로 쓸 수 있고 추가 공간이 O(1)이 된다. 대신 입력이 바뀌어서 호출한 쪽이 행렬을 다시 쓰면 버그가 된다. 결과에는 표시하기 전에 원래 값을 넣으니 101이 섞이지 않는다.",
    anchor: "막히면-오른쪽으로-꺾는-로봇",
  },
];
