import type { QuizQuestion } from "../types";

export const LEETCODE_VALID_SUDOKU: QuizQuestion[] = [
  {
    id: "leetcode-valid-sudoku-1",
    post: "leetcode-valid-sudoku",
    question: "상자 번호를 `Math.floor(r / 3) + Math.floor(c / 3)`으로 구하면 왜 틀리나?",
    choices: [
      "r과 c가 8일 때 번호가 9를 넘기 때문",
      "(0, 4)와 (4, 0)처럼 서로 다른 상자가 같은 번호 1을 받아, 다른 상자의 숫자끼리 겹친다고 판단하기 때문",
      "JavaScript에서 Math.floor가 음수를 돌려주기 때문",
      "빈칸 \".\"도 상자 번호를 받기 때문",
    ],
    answer: 1,
    explanation:
      "몫을 더하기만 하면 (상자 줄 0, 상자 칸 1)과 (상자 줄 1, 상자 칸 0)이 모두 1이 된다. 그래서 1번 상자와 3번 상자를 한 상자로 보고, 올바른 판을 틀렸다고 판단한다. 상자 줄에 3을 곱해야 아홉 상자가 0부터 8까지 서로 다른 번호를 받는다.",
    anchor: "상자-번호를-구하는-식",
  },
  {
    id: "leetcode-valid-sudoku-2",
    post: "leetcode-valid-sudoku",
    question: "0행에 1부터 8이 차례로 있고 (4, 8)에 9가 있는 판(나머지는 빈칸)을 넣으면 이 문제의 답은?",
    choices: ["false, (0, 8)에 넣을 숫자가 없어서", "false, 8열에 9가 있어서", "true, 채워진 칸끼리 겹치는 곳이 없어서", "판이 너무 비어 있어 판단할 수 없다"],
    answer: 2,
    explanation:
      "이 문제는 채워진 칸이 행·열·상자 규칙을 어겼는지만 본다. 겹치는 곳이 없으니 true다. (0, 8)에 들어갈 숫자가 없어 끝까지 풀 수는 없지만, 풀 수 있는지는 Sudoku Solver처럼 실제로 채워 봐야 알 수 있다.",
    anchor: "틀리기-쉬운-자리",
  },
  {
    id: "leetcode-valid-sudoku-3",
    post: "leetcode-valid-sudoku",
    question: "JavaScript에서 행 집합 9개를 `new Array(9).fill(new Set())`로 만들면 어떻게 되나?",
    choices: [
      "9칸이 같은 집합 하나를 가리켜서, 한 행에 넣은 숫자가 다른 행에서도 이미 본 숫자로 보인다",
      "fill은 객체를 넣을 수 없어 오류가 난다",
      "집합이 9개 만들어지지만 서로 정렬 순서가 달라진다",
      "아무 문제 없다",
    ],
    answer: 0,
    explanation:
      "fill은 인자로 받은 값 하나를 모든 칸에 넣으니, 집합 객체 하나를 9칸이 함께 쓴다. 0행에서 넣은 1이 1행에도 있는 것처럼 보여 예시 판의 (1, 6)에서 false가 나온다. Array.from에 함수를 넘기면 칸마다 새 집합이 만들어진다.",
    anchor: "한-번-훑으며-출석부-27권에-적기",
  },
  {
    id: "leetcode-valid-sudoku-4",
    post: "leetcode-valid-sudoku",
    question: "비트 풀이에서 0행에 1, 3, 5를 봤다면 `rows[0]`의 값은?",
    choices: ["135", "9", "42", "21"],
    answer: 3,
    explanation:
      "숫자 d를 보면 d - 1번 비트를 켠다. 1은 0번 비트(1), 3은 2번 비트(4), 5는 4번 비트(16)라서 합이 21이다. 다음에 3이 오면 21 & 4가 0이 아니라 겹친 것으로 판단한다.",
    anchor: "정수-27개의-비트에-적기",
  },
  {
    id: "leetcode-valid-sudoku-5",
    post: "leetcode-valid-sudoku",
    question: "사용자가 칸에 숫자를 적고 지우는 동안 규칙 위반을 바로 알려 주려면 출석부를 어떻게 바꿔야 하나?",
    choices: [
      "지울 때마다 판 전체를 다시 훑는다. 다른 방법은 없다",
      "봤다/안 봤다 대신 숫자별 개수를 센다. 같은 숫자가 둘일 때 하나를 지워도 남은 하나를 기억해야 하기 때문",
      "집합 대신 정렬된 배열을 쓴다",
      "비트마스크로 바꾸면 지우기가 저절로 해결된다",
    ],
    answer: 1,
    explanation:
      "집합이나 비트는 같은 숫자가 두 번 들어간 상태를 표현하지 못해서, 하나를 지우면 남은 숫자의 기록까지 사라진다. 행·열·상자마다 숫자별 개수를 세면 넣을 때 더하고 지울 때 빼서 O(1)에 상태를 유지한다. 비트도 봤다/안 봤다만 담으니 같은 문제가 있다.",
    anchor: "조건이-바뀌면",
  },
];
