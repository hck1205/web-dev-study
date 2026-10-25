import type { QuizQuestion } from "../types";

export const LEETCODE_MAX_AREA_OF_ISLAND: QuizQuestion[] = [
  {
    id: "leetcode-max-area-of-island-1",
    post: "leetcode-max-area-of-island",
    question: "땅 칸마다 방문 표시를 새로 만들어 BFS로 섬 넓이를 재는 풀이가 50 × 50 꽉 찬 섬에서 느린 이유는?",
    choices: [
      "BFS가 DFS보다 원래 느려서",
      "같은 섬을 칸 수만큼 다시 재서, 넓이 k인 섬에 k²번 일하기 때문에",
      "큐에서 shift()를 써서",
      "방문 표시를 꺼낼 때 해서 같은 칸이 여러 번 들어가서",
    ],
    answer: 1,
    explanation:
      "2,500칸이 모두 같은 섬이면 2,500번 출발해 매번 2,500칸을 훑어 625만 번 일한다. 방문 표시 하나를 끝까지 함께 쓰면 한 번 잰 섬의 칸은 다시 출발점이 되지 않아 O(m · n)이 된다.",
    anchor: "땅마다-섬을-처음부터-다시-잰다",
  },
  {
    id: "leetcode-max-area-of-island-2",
    post: "leetcode-max-area-of-island",
    question: "재귀 sink가 `1 + sink(아래) + sink(위) + sink(오른쪽) + sink(왼쪽)`을 돌려줄 때, 섬의 칸이 정확히 한 번씩만 더해지는 이유는?",
    choices: [
      "네 방향을 항상 같은 순서로 부르기 때문에",
      "격자 밖을 0으로 처리하기 때문에",
      "이웃을 부르기 전에 지금 칸을 0으로 바꿔서, 이미 가라앉은 칸은 다시 1을 더하지 않고 0을 돌려주기 때문에",
      "섬이 끝나면 넓이 변수를 0으로 되돌리기 때문에",
    ],
    answer: 2,
    explanation:
      "칸에 들어가자마자 0으로 바꾸니 다른 경로로 다시 닿아도 물로 보여 0을 돌려준다. 그래서 칸마다 자기 몫 1이 한 번만 더해진다. 표시를 호출 뒤로 미루면 같은 칸이 두 경로에서 더해지거나 무한 재귀가 된다.",
    anchor: "가라앉히면서-칸-수를-돌려주는-재귀",
  },
  {
    id: "leetcode-max-area-of-island-3",
    post: "leetcode-max-area-of-island",
    question: "BFS에서 큐에서 꺼낼 때 가라앉히고, 이미 0인지 다시 보지 않으면 2 × 2 꽉 찬 섬의 넓이는 얼마로 나오나?",
    choices: ["5", "4", "6", "무한 루프"],
    answer: 0,
    explanation:
      "(0,1)과 (1,0)을 꺼낼 때 둘 다 (1,1)을 아직 땅으로 보고 큐에 넣어서 (1,1)이 두 번 세어진다. 그래서 5가 나오고, 격자가 커지면 8 × 8에서 12,869처럼 중복이 폭발한다. 넣는 순간 표시하면 칸마다 한 번만 들어간다.",
    anchor: "꺼낼-때-표시하면-섬이-부풀어-오른다",
  },
  {
    id: "leetcode-max-area-of-island-4",
    post: "leetcode-max-area-of-island",
    question: "Python으로 재귀 DFS 풀이를 기본 설정에서 돌렸을 때, 꽉 찬 정사각형 섬에서 처음 RecursionError가 나는 크기는?",
    choices: ["10 × 10", "31 × 31", "32 × 32", "50 × 50에서도 괜찮다"],
    answer: 2,
    explanation:
      "Python 기본 재귀 한도는 1,000이다. 31 × 31은 961칸이라 버티고 32 × 32는 1,024칸이라 넘친다. 문제 조건의 50 × 50은 2,500단계가 필요해서 BFS로 쓰는 편이 안전하다.",
    anchor: "32--32만-돼도-python-재귀가-멈춘다",
  },
  {
    id: "leetcode-max-area-of-island-5",
    post: "leetcode-max-area-of-island",
    question: "크기를 더하는 유니온 파인드에서 최댓값 best를 0으로만 시작하면 어떤 격자에서 틀리나?",
    choices: [
      "땅이 하나도 없는 격자",
      "2 × 2 꽉 찬 섬",
      "U자 모양 섬",
      "체스판처럼 한 칸짜리 섬만 있는 격자",
    ],
    answer: 3,
    explanation:
      "best는 union으로 두 묶음을 합칠 때만 갱신된다. 한 칸짜리 섬만 있으면 합치기가 한 번도 일어나지 않아 0이 남는다. 그래서 땅 칸이 하나라도 있으면 best를 1로 시작한다.",
    anchor: "합칠-때-크기를-더하는-유니온-파인드",
  },
];
