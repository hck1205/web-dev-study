import type { QuizQuestion } from "../types";

export const LEETCODE_COURSE_SCHEDULE_II: QuizQuestion[] = [
  {
    id: "leetcode-course-schedule-ii-1",
    post: "leetcode-course-schedule-ii",
    question: "과목 셋, prerequisites = [[2,0],[2,1]]에서 선을 \"먼저 → 나중\"으로 긋고 DFS가 방문하는 순간 과목을 적으면 무엇이 나오고 왜 틀리나?",
    choices: [
      "[0, 1, 2]가 나오고 맞다",
      "[0, 2, 1]이 나온다. 0에서 2로 내려갈 때 2의 다른 선수 과목 1을 아직 보지 않았다",
      "[2, 1, 0]이 나온다. 선 방향이 거꾸로라서다",
      "빈 배열이 나온다. 고리로 잘못 판정해서다",
    ],
    answer: 1,
    explanation:
      "0에서 출발해 0 → 2로 내려가며 2를 바로 적는다. 하지만 2는 1도 먼저 들어야 하고, 그 선은 아직 보지 않았다. 처음 도착한 순간에는 그 과목으로 들어오는 다른 선을 모르니 전위 순서는 위상 정렬이 아니다.",
    anchor: "들어가자마자-적으면-순서가-틀린다",
  },
  {
    id: "leetcode-course-schedule-ii-2",
    post: "leetcode-course-schedule-ii",
    question: "선을 \"먼저 → 나중\"으로 그은 DFS에서 후위 순서를 뒤집어야 듣는 순서가 되는 이유는?",
    choices: [
      "재귀가 스택이라 순서가 원래 거꾸로 저장되기 때문에",
      "번호가 큰 과목부터 방문하기 때문에",
      "u → v 선이 있으면 v의 탐색이 u보다 먼저 끝나서, 후위 순서는 나중 과목부터 적히기 때문에",
      "고리를 찾으려면 뒤집어야 하기 때문에",
    ],
    answer: 2,
    explanation:
      "u의 탐색이 끝나기 전에 u에서 갈 수 있는 과목은 모두 끝나 있다. 그래서 후위 순서에서 나중 과목이 먼저 나오고, 뒤집으면 듣는 순서가 된다. 선을 \"과목 → 선수 과목\"으로 그으면 반대로 후위 순서가 바로 답이다.",
    anchor: "다-끝난-과목부터-적고-뒤집는다",
  },
  {
    id: "leetcode-course-schedule-ii-3",
    post: "leetcode-course-schedule-ii",
    question: "칸의 알고리즘으로 순서를 모으다가 큐가 비었는데 모은 과목이 numCourses보다 적다. 무엇을 돌려줘야 하나?",
    choices: [
      "빈 배열. 고리가 있어 모든 과목을 들을 수 없다",
      "지금까지 모은 순서. 들을 수 있는 과목만이라도 알려 준다",
      "남은 과목을 번호순으로 붙인 배열",
      "null",
    ],
    answer: 0,
    explanation:
      "큐가 비었는데 과목이 남았다면 남은 과목들은 고리 때문에 진입 차수가 0이 되지 못한 것이다. 일부만 들은 시간표는 답이 아니라서 빈 배열을 돌려준다. Java에서 null을 돌려주면 채점기에서 NullPointerException이 난다.",
    anchor: "꺼낸-순서가-그대로-답인-칸의-알고리즘",
  },
  {
    id: "leetcode-course-schedule-ii-4",
    post: "leetcode-course-schedule-ii",
    question: "칸의 알고리즘을 돌리는 동안 위상 정렬이 하나뿐인지 알 수 있는 방법은?",
    choices: [
      "마지막에 결과를 정렬해 원래와 같은지 본다",
      "진입 차수가 2 이상인 과목이 있는지 본다",
      "간선 수가 과목 수 - 1인지 본다",
      "큐에 과목이 둘 이상 동시에 있던 순간이 한 번도 없었는지 본다",
    ],
    answer: 3,
    explanation:
      "큐에 두 과목이 동시에 있으면 둘 중 어느 쪽을 먼저 들어도 되니 순서가 여럿이다. 큐 크기가 끝까지 1이었으면 매 순간 고를 수 있는 과목이 하나뿐이라 순서도 하나다. 간선 수만으로는 알 수 없다.",
    anchor: "답이-여럿일-때-하나로-정하려면",
  },
  {
    id: "leetcode-course-schedule-ii-5",
    post: "leetcode-course-schedule-ii",
    question: "numCourses = 3, prerequisites = [[1,0]]에서 Map에 쌍에 나온 과목만 넣어 그래프를 만들면 생기는 문제는?",
    choices: [
      "1과 0의 순서가 뒤집힌다",
      "선수 관계가 없는 과목 2가 어디에도 없어서 답에서 빠지거나 고리로 오판한다",
      "같은 과목이 두 번 들어간다",
      "아무 문제 없다",
    ],
    answer: 1,
    explanation:
      "과목 2는 어느 쌍에도 나오지 않으니 Map의 키로 훑으면 보이지 않는다. 답 길이가 2가 되어 고리로 판정하거나 2를 빼고 돌려준다. 과목은 0부터 numCourses - 1까지 모두 훑어야 한다.",
    anchor: "빈-배열-빠진-과목-거꾸로-된-순서",
  },
];
