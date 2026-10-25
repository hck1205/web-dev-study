import type { QuizQuestion } from "../types";

export const LEETCODE_NUMBER_OF_ISLANDS: QuizQuestion[] = [
  {
    id: "leetcode-number-of-islands-1",
    post: "leetcode-number-of-islands",
    question: "격자 [[1,0,1],[1,1,1]]에서 \"위와 왼쪽이 모두 물인 땅\"만 섬의 시작으로 세면 몇이 나오고, 왜 틀리나?",
    choices: [
      "1이 나오고 맞다",
      "2가 나온다. 위쪽 두 기둥이 아래 줄에서 합쳐진다는 걸 모른다",
      "3이 나온다. 대각선을 따로 세서다",
      "0이 나온다. 첫 칸은 위가 격자 밖이라서다",
    ],
    answer: 1,
    explanation:
      "(0,0)과 (0,2)가 모두 위와 왼쪽이 물이라 섬 두 개로 세어진다. 실제로는 아래 줄에서 하나로 이어진 U자 섬이다. 지나온 칸만 보고는 나중에 합쳐질지 알 수 없어서 섬을 끝까지 따라가는 탐색이나 합칠 때 하나를 빼는 유니온 파인드가 필요하다.",
    anchor: "위와-왼쪽만-보고-세면-하나가-남는다",
  },
  {
    id: "leetcode-number-of-islands-2",
    post: "leetcode-number-of-islands",
    question: "300 × 300 격자가 전부 땅일 때 재귀 DFS가 Node, Python, Java 기본 설정에서 모두 실패한 이유는?",
    choices: [
      "칸이 9만 개라 시간 제한을 넘겨서",
      "섬 개수가 int 범위를 넘어서",
      "재귀가 격자를 뱀처럼 훑으며 돌아오지 않고 9만 단계까지 쌓여서",
      "방문 표시를 하지 않아 무한 루프에 빠져서",
    ],
    answer: 2,
    explanation:
      "섬 하나가 격자 전체라 재귀가 한 줄로 이어진 길을 따라가며 칸 수만큼 깊어진다. 시간은 O(m · n)으로 충분하지만 호출 스택이 먼저 바닥난다. 큐를 쓰는 BFS나 직접 만든 스택으로 바꾸면 깊이 제한이 사라진다.",
    anchor: "9만-칸짜리-섬에서-스택이-넘친다",
  },
  {
    id: "leetcode-number-of-islands-3",
    post: "leetcode-number-of-islands",
    question: "BFS에서 칸을 큐에서 꺼낼 때 방문 표시를 하면 어떻게 되나?",
    choices: [
      "답은 맞지만 같은 칸이 큐에 여러 번 들어가 일이 늘어난다",
      "섬 개수가 실제보다 많이 나온다",
      "무한 루프에 빠진다",
      "대각선 칸까지 같은 섬으로 센다",
    ],
    answer: 0,
    explanation:
      "큐에서 기다리는 칸은 아직 땅으로 보이니 다른 이웃이 또 넣는다. 꺼낼 때 이미 물이면 건너뛰므로 답은 맞지만, 꽉 찬 300 × 300 격자에서 9만 번이면 될 넣기가 179,401번으로 늘었다. 넣는 순간 표시해야 칸마다 한 번만 들어간다.",
    anchor: "큐로-한-겹씩-번지게-하는-bfs",
  },
  {
    id: "leetcode-number-of-islands-4",
    post: "leetcode-number-of-islands",
    question: "땅이 하나씩 추가될 때마다 섬 개수를 물어본다면 어떤 풀이가 맞나?",
    choices: [
      "추가할 때마다 BFS로 격자 전체를 다시 훑는다",
      "재귀 DFS로 새 칸에서만 탐색한다",
      "새 칸마다 개수를 하나 올리고 붙은 이웃과 union할 때마다 하나씩 빼는 유니온 파인드",
      "위와 왼쪽만 보고 센다",
    ],
    answer: 2,
    explanation:
      "유니온 파인드는 새 땅을 섬 하나로 세고, 네 이웃 중 다른 섬에 속한 땅과 합칠 때마다 하나씩 뺀다. 경로 압축과 랭크를 쓰면 연산 하나가 사실상 상수 시간이다. BFS로는 추가할 때마다 O(m · n)이 든다.",
    anchor: "합쳐질-때마다-하나씩-빼는-유니온-파인드",
  },
  {
    id: "leetcode-number-of-islands-5",
    post: "leetcode-number-of-islands",
    question: "JavaScript로 if (grid[r][c] === 1) count++처럼 비교하면 LeetCode 입력에서 결과는?",
    choices: [
      "정상적으로 섬 개수가 나온다",
      "TypeError가 난다",
      "땅 칸의 개수가 나온다",
      "칸이 글자 \"1\"이라 비교가 항상 거짓이 되어 0이 나온다",
    ],
    answer: 3,
    explanation:
      "이 문제의 칸은 숫자가 아니라 글자 \"1\", \"0\"이다. 엄격한 비교 ===는 타입이 다르면 거짓이라 어떤 땅도 세지 못한다. Java에서도 grid[r][c] == 1은 글자 코드 1과 비교해서 항상 거짓이고 '1'로 써야 한다.",
    anchor: "글자-1과-숫자-1-그리고-경계-검사",
  },
];
