import type { QuizQuestion } from "../types";

export const LEETCODE_COURSE_SCHEDULE: QuizQuestion[] = [
  {
    id: "leetcode-course-schedule-1",
    post: "leetcode-course-schedule",
    question: "칸의 알고리즘이 끝났을 때 들은 과목 수가 전체보다 적으면 고리가 있다고 말할 수 있는 이유는?",
    choices: [
      "큐가 과목 수보다 작게 잡혀 있어서",
      "고리 위의 과목들은 서로가 선수 과목이라 진입 차수가 끝내 0이 되지 못해서",
      "진입 차수가 음수가 된 과목이 생겨서",
      "선수 관계가 없는 과목은 큐에 들어가지 않아서",
    ],
    answer: 1,
    explanation:
      "고리 안의 선 하나는 고리 바깥에서 아무리 과목을 들어도 남아 있어서 고리 위 과목들은 큐에 들어가지 못한다. 반대로 고리가 없으면 진입 차수가 0인 과목이 늘 하나는 있어 모두 듣게 된다. 선수 관계가 없는 과목은 처음부터 진입 차수 0이라 큐에 들어간다.",
    anchor: "선수-과목-수를-세어-두는-칸의-알고리즘",
  },
  {
    id: "leetcode-course-schedule-2",
    post: "leetcode-course-schedule",
    question: "길에서 나올 때 표시를 지우기만 하는(검은색이 없는) DFS가 마름모를 사슬처럼 이은 그래프에서 느린 이유는?",
    choices: [
      "고리가 아닌 곳을 고리로 판정해 다시 시작해서",
      "재귀 깊이가 과목 수의 제곱이 되어서",
      "이미 고리가 없다고 확인한 과목 아래를 다른 길로 올 때마다 다시 훑어 길의 수만큼 일해서",
      "진입 차수를 매번 다시 계산해서",
    ],
    answer: 2,
    explanation:
      "마름모가 k개면 처음부터 끝까지 가는 길이 2^k개이고, 이 DFS는 길마다 같은 아래를 다시 탐색한다. 과목 67개짜리 입력에서 6,700만 번을 호출했다. 다 훑은 과목을 검은색으로 남겨 두면 과목마다 한 번만 보게 되어 O(V + E)가 된다.",
    anchor: "지금-걷는-길만-기억하면-지수-시간이-된다",
  },
  {
    id: "leetcode-course-schedule-3",
    post: "leetcode-course-schedule",
    question: "\"한 번이라도 본 과목을 다시 만나면 고리\"로 판정하는 DFS에 numCourses 2, [[1,0]]을 넣으면?",
    choices: [
      "false가 나온다. 바깥 반복이 1에서 다시 시작할 때 1이 이미 본 과목이라서",
      "true가 나온다",
      "무한 재귀에 빠진다",
      "과목 0만 확인하고 true가 나온다",
    ],
    answer: 0,
    explanation:
      "0에서 1까지 훑으며 둘 다 표시한 뒤, 바깥 반복이 1에서 다시 출발하면 1이 이미 표시되어 고리로 본다. 방향 그래프에서는 지금 길 위(회색)와 다 훑음(검은색)을 구분해야 한다. 마름모의 아래 꼭짓점도 같은 이유로 고리처럼 보인다.",
    anchor: "방향을-뒤집고-회색을-빼먹고",
  },
  {
    id: "leetcode-course-schedule-4",
    post: "leetcode-course-schedule",
    question: "유니온 파인드로 이 문제를 풀면 numCourses 3, [[1,0],[2,0],[2,1]]에서 왜 틀리나?",
    choices: [
      "경로 압축을 하지 않아서",
      "선이 세 개뿐이라 묶음이 만들어지지 않아서",
      "자기 자신을 잇는 선이 있어서",
      "방향을 모르고 세 점이 이어진 삼각형만 봐서, 고리가 없는데 사이클로 판정해서",
    ],
    answer: 3,
    explanation:
      "0 → 1 → 2 순서로 들으면 되는 정상 입력이지만, 방향을 지우면 삼각형이라 마지막 선에서 이미 같은 묶음을 잇게 된다. 유니온 파인드는 무방향 그래프의 사이클에 맞는 도구다. 방향 그래프에는 세 색 DFS나 진입 차수가 필요하다.",
    anchor: "유니온-파인드로는-방향을-알-수-없다",
  },
  {
    id: "leetcode-course-schedule-5",
    post: "leetcode-course-schedule",
    question: "과목 2,000개가 한 줄로 이어진 입력(문제 조건 안)에서 Python으로 세 색 재귀 DFS를 돌리면?",
    choices: [
      "O(V · E)라 시간 초과가 난다",
      "기본 재귀 한도 1,000에 걸려 RecursionError가 난다",
      "고리를 놓쳐 true가 아닌 false가 나온다",
      "문제없이 True가 나온다",
    ],
    answer: 1,
    explanation:
      "사슬을 따라 재귀가 2,000단계 쌓이는데 Python의 기본 재귀 한도는 1,000이다. 같은 입력을 JavaScript 재귀는 버텼다. 재귀가 없는 칸의 알고리즘이나 스택 DFS를 쓰면 언어와 상관없이 안전하다.",
    anchor: "세-가지-색으로-칠하는-dfs",
  },
];
