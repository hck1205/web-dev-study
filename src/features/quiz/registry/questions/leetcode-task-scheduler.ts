import type { QuizQuestion } from "../types";

export const LEETCODE_TASK_SCHEDULER: QuizQuestion[] = [
  {
    id: "leetcode-task-scheduler-1",
    post: "leetcode-task-scheduler",
    question: "tasks = A A A B B B C, n = 2일 때 최소 시간은?",
    choices: ["7", "9", "8", "10"],
    answer: 2,
    explanation:
      "가장 많은 개수는 3이고 A와 B가 모두 세 개라 numMax는 2다. (3 - 1) × (2 + 1) + 2 = 8이고 작업 수 7보다 크니 답은 8이다. A B C A B 쉼 A B처럼 한 칸을 쉬게 된다.",
    anchor: "가장-많은-작업으로-뼈대를-세운다",
  },
  {
    id: "leetcode-task-scheduler-2",
    post: "leetcode-task-scheduler",
    question: "뼈대 식 (maxF - 1) × (n + 1) + numMax를 작업 수와 비교해 큰 쪽을 답으로 하는 이유는?",
    choices: [
      "n = 0일 때만 식이 틀리기 때문",
      "작업 종류가 많아 빈칸이 모자라면 덩어리를 늘려도 간격이 깨지지 않아, 쉬는 칸 없이 작업 수가 답이 되기 때문",
      "numMax가 26을 넘을 수 있기 때문",
      "가장 많은 작업이 여러 개면 식이 작게 나오기 때문",
    ],
    answer: 1,
    explanation:
      "뼈대의 빈칸보다 다른 작업이 많으면 덩어리를 n + 1칸보다 길게 늘려 채운다. 같은 작업 사이 간격은 더 벌어질 뿐이라 조건이 지켜지고, 쉬는 칸이 없으니 답은 작업 수다. A A A B B B C C D D, n = 2는 식이 8이지만 답은 10이다.",
    anchor: "가장-많은-작업으로-뼈대를-세운다",
  },
  {
    id: "leetcode-task-scheduler-3",
    post: "leetcode-task-scheduler",
    question: "A B B B, n = 1에서 '쿨다운이 끝난 것 중 알파벳이 빠른 것'을 고르는 탐욕이 틀리는 이유는?",
    choices: [
      "A를 먼저 써 버려서 B 세 개 사이를 채울 작업이 없어지기 때문",
      "B를 너무 일찍 시작하기 때문",
      "알파벳 순으로는 쿨다운을 지킬 수 없기 때문",
      "작업이 네 개뿐이라 탐욕이 필요 없기 때문",
    ],
    answer: 0,
    explanation:
      "알파벳 순은 A B 쉼 B 쉼 B로 6이 걸린다. 가장 많이 남은 B를 먼저 하면 B A B 쉼 B로 A가 빈칸 하나를 채워 5가 된다. 가장 많은 작업이 뼈대를 만들기 때문에 그걸 미룰수록 끝에 쉬는 칸이 쌓인다.",
    anchor: "알파벳-순으로-고르면-틀린다",
  },
  {
    id: "leetcode-task-scheduler-4",
    post: "leetcode-task-scheduler",
    question: "힙 시뮬레이션에서 쿨다운 중인 작업을 담는 대기 줄이 최소 힙이 아니라 보통 큐여도 되는 이유는?",
    choices: [
      "작업 종류가 26개뿐이라서",
      "대기 줄에는 항상 작업이 하나만 있어서",
      "큐가 힙보다 메모리를 적게 써서",
      "들어가는 시각이 계속 늘고 쿨다운이 모두 n이라 풀리는 시각도 들어온 순서대로 늘어서",
    ],
    answer: 3,
    explanation:
      "작업은 한 시각에 하나씩 대기 줄에 들어가고 모두 n + 1 뒤에 풀린다. 그래서 먼저 들어온 작업이 항상 먼저 풀려 큐 맨 앞만 보면 된다. 쿨다운이 작업마다 다르면 이 순서가 깨져 풀리는 시각 기준 최소 힙이 필요하다.",
    anchor: "최대-힙과-대기-줄로-쉬는-칸을-건너뛴다",
  },
  {
    id: "leetcode-task-scheduler-5",
    post: "leetcode-task-scheduler",
    question: "작업 1만 개가 모두 A이고 n = 100일 때 '매 시각 26종류 훑기'가 힙 풀이보다 훨씬 느린 이유는?",
    choices: [
      "26종류를 정렬하는 데 시간이 들어서",
      "답이 100만이 넘어 쉬는 칸까지 한 칸씩 반복하기 때문",
      "A의 개수를 셀 때 해시맵을 써서",
      "n이 크면 쿨다운 계산에 곱셈이 많아져서",
    ],
    answer: 1,
    explanation:
      "답은 (10000 - 1) × 101 + 1 = 1009900이고 매 시각 훑기는 이 시각을 하나씩 돌며 26칸을 본다. 힙 풀이는 할 게 없을 때 대기 줄 맨 앞이 풀리는 시각으로 시계를 건너뛰어 작업 수만큼만 돈다. 실제로 80ms와 0.35ms 차이가 났다.",
    anchor: "매-시각-가장-많이-남은-작업을-고른다",
  },
];
