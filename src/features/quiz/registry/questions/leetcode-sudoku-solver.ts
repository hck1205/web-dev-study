import type { QuizQuestion } from "../types";

export const LEETCODE_SUDOKU_SOLVER: QuizQuestion[] = [
  {
    id: "leetcode-sudoku-solver-1",
    post: "leetcode-sudoku-solver",
    question: "재귀 호출을 `if (go(i + 1)) return true` 대신 `go(i + 1)`로만 부르면 함수가 끝난 뒤 판은 어떻게 되나?",
    choices: [
      "정답으로 채워져 있다",
      "입력과 똑같이 돌아와 있다",
      "마지막 빈칸만 비어 있다",
      "같은 숫자가 겹쳐 들어가 있다",
    ],
    answer: 1,
    explanation:
      "마지막 칸까지 채워 성공해도 부른 쪽이 결과를 무시하고 지우기 줄로 넘어간다. 모든 호출이 자기가 넣은 숫자를 지우며 돌아가니 판은 처음으로 돌아온다. 답 하나를 찾는 백트래킹은 성공을 위로 전달해 즉시 멈춰야 한다.",
    anchor: "다-채웠는데-판이-처음-그대로라면",
  },
  {
    id: "leetcode-sudoku-solver-2",
    post: "leetcode-sudoku-solver",
    question: "행·열·상자에 쓴 숫자를 비트로 들고 있을 때, 칸 (r, c)의 후보를 구하는 식은?",
    choices: [
      "`row[r] & col[c] & box[k]`",
      "`~(row[r] & col[c] & box[k])`",
      "`~(row[r] | col[c] | box[k]) & 0x1ff`",
      "`(row[r] | col[c] | box[k]) ^ 0xff`",
    ],
    answer: 2,
    explanation:
      "셋을 OR하면 그 칸에서 이미 쓰인 숫자가 되고, 뒤집으면 쓰이지 않은 숫자가 된다. 뒤집으면 위쪽 비트까지 켜지니 `0x1ff`로 아홉 비트만 남긴다. AND는 세 곳 모두에 있는 숫자만 남겨서 틀린다.",
    anchor: "쓴-숫자를-비트-9개로-들고-다니기",
  },
  {
    id: "leetcode-sudoku-solver-3",
    post: "leetcode-sudoku-solver",
    question: "27칸 검사를 표나 비트마스크로 바꿨을 때 세 번째 퍼즐의 호출 수는 어떻게 됐나?",
    choices: [
      "250만 번 그대로였다. 같은 순서로 같은 칸을 시도하고, 호출 하나의 비용만 줄었기 때문이다",
      "절반으로 줄었다. 후보를 한 번에 구하기 때문이다",
      "968번으로 줄었다",
      "오히려 늘었다. 비트 연산이 느리기 때문이다",
    ],
    answer: 0,
    explanation:
      "확인 방법만 바뀌고 칸을 고르는 순서는 행 순서 그대로라 탐색 트리가 같다. 시간은 890ms에서 96ms로 줄었지만 상수 배 개선이다. 호출 수를 바꾸려면 후보가 적은 칸부터 고르는 식으로 순서를 바꿔야 한다.",
    anchor: "네-풀이를-퍼즐-세-개로-재-보면",
  },
  {
    id: "leetcode-sudoku-solver-4",
    post: "leetcode-sudoku-solver",
    question: "후보가 가장 적은 칸부터 채우는 방법(MRV)이 탐색량을 크게 줄이는 이유로 맞는 것은?",
    choices: [
      "호출 하나의 비용이 줄기 때문이다",
      "최악의 경우 복잡도가 다항 시간으로 바뀌기 때문이다",
      "숫자를 큰 것부터 넣기 때문이다",
      "후보가 하나인 칸은 갈래가 생기지 않고, 후보가 0인 칸이 생기면 막다른 길을 바로 알기 때문이다",
    ],
    answer: 3,
    explanation:
      "후보가 많은 칸을 먼저 고르면 틀린 선택을 한참 뒤에 알게 되어 그 아래를 통째로 헛돈다. MRV는 확실한 칸을 먼저 메우고 실패를 일찍 알아챈다. 호출 하나는 오히려 비싸지고 최악 복잡도도 그대로지만 실제 호출 수가 수천 배 줄었다.",
    anchor: "후보가-가장-적은-칸부터-채우기",
  },
  {
    id: "leetcode-sudoku-solver-5",
    post: "leetcode-sudoku-solver",
    question: "퍼즐 생성기가 칸을 지울 때마다 답을 세는데, 왜 두 개를 찾으면 바로 멈춰도 되나?",
    choices: [
      "답이 셋 이상인 스도쿠는 존재하지 않기 때문이다",
      "알고 싶은 건 답이 하나뿐인지이고, 2 이상은 모두 \"하나가 아니다\"로 같은 판단이기 때문이다",
      "두 번째 답부터는 첫 번째 답과 똑같기 때문이다",
      "세 번째 답을 찾으면 스택이 넘치기 때문이다",
    ],
    answer: 1,
    explanation:
      "지운 칸을 되살릴지 정하는 데는 답이 하나인가만 필요하다. 끝까지 세면 답이 많은 판에서 시간을 크게 낭비한다. 칸마다 한 번씩 부르니 이 함수의 속도가 곧 생성 속도다.",
    anchor: "퍼즐을-만들-때는-답이-몇-개인지-센다",
  },
];
