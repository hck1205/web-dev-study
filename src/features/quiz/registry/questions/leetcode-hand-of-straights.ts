import type { QuizQuestion } from "../types";

export const LEETCODE_HAND_OF_STRAIGHTS: QuizQuestion[] = [
  {
    id: "leetcode-hand-of-straights-1",
    post: "leetcode-hand-of-straights",
    question: "남은 카드 중 가장 작은 숫자 x로 묶음을 시작하는 그리디가 안전한 이유는?",
    choices: [
      "x가 가장 많은 장수를 가진 숫자이기 때문",
      "x로 시작하면 묶음 수가 가장 적어지기 때문",
      "x 앞에 올 x - 1 카드가 없어서 x는 반드시 어떤 묶음의 맨 앞이어야 하기 때문",
      "정렬하면 카드가 항상 연속한 숫자가 되기 때문",
    ],
    answer: 2,
    explanation:
      "x보다 작은 카드가 남아 있지 않으니 x는 묶음의 중간이나 끝에 설 수 없다. 그래서 x가 든 묶음은 x부터 x + groupSize - 1까지로 정해지고, 고를 여지가 없는 선택이라 나중에 손해 볼 일이 없다. 장수가 많다는 것은 근거가 되지 않는다.",
    anchor: "가장-작은-카드는-갈-곳이-하나뿐이다",
  },
  {
    id: "leetcode-hand-of-straights-2",
    post: "leetcode-hand-of-straights",
    question: "JavaScript에서 장부 풀이의 정렬을 비교자 없이 [...hand].sort()로 쓰면 hand = [9, 10, 11], groupSize = 3에서 어떻게 되나?",
    choices: [
      "true가 나온다. 숫자 배열은 기본 정렬도 숫자 순서다",
      "false가 나온다. 문자열 순서로 [10, 11, 9]가 되어 10부터 12를 찾다가 실패한다",
      "예외가 난다",
      "true가 나오지만 O(n²)이 된다",
    ],
    answer: 1,
    explanation:
      "비교자가 없는 sort는 원소를 문자열로 바꿔 사전 순으로 정렬한다. 10을 가장 작은 카드로 보고 10, 11, 12를 찾는데 12가 없어 false가 난다. 정답은 9, 10, 11 한 묶음으로 true다.",
    anchor: "javascript-기본-정렬로-숫자를-정렬한다",
  },
  {
    id: "leetcode-hand-of-straights-3",
    post: "leetcode-hand-of-straights",
    question: "정렬 + 개수 장부 풀이에서 묶음을 만드는 부분(장부 고치기)이 전체로 O(n)인 이유는?",
    choices: [
      "groupSize가 상수로 정해져 있기 때문",
      "해시맵 접근이 O(1)이고 카드마다 묶음을 하나씩 시작하기 때문",
      "정렬 덕분에 묶음 안의 숫자를 찾지 않아도 되기 때문",
      "묶음 하나에 groupSize번 고치고 묶음이 n / groupSize개라 합쳐서 n번이기 때문",
    ],
    answer: 3,
    explanation:
      "카드 한 장은 정확히 한 묶음에 들어가고 그때 장부를 한 번 고친다. 그래서 묶음 수와 묶음 크기를 곱하면 n이다. groupSize가 n에 가까워도 묶음 수가 그만큼 줄어서 전체는 O(n)이다.",
    anchor: "개수-장부로-지우는-일을-줄인다",
  },
  {
    id: "leetcode-hand-of-straights-4",
    post: "leetcode-hand-of-straights",
    question: "열린 묶음 수를 세는 풀이에서 숫자 key의 장수 c가 지금 열린 묶음 수 open보다 적으면?",
    choices: [
      "바로 false다. 열린 묶음마다 key가 한 장씩 필요하다",
      "c장만 이어 붙이고 나머지 묶음은 닫는다",
      "key에서 새 묶음을 open - c개 연다",
      "다음 숫자로 넘어가 장수를 더해 본다",
    ],
    answer: 0,
    explanation:
      "열린 묶음은 아직 groupSize에 못 미친 묶음이라 key를 하나씩 받아야 길이를 채울 수 있다. key가 모자라면 어떤 묶음은 key에서 끊겨 길이를 채우지 못하니 바로 실패다. 덜 찬 묶음을 닫는 선택지는 없다.",
    anchor: "숫자마다-열린-묶음-수만-센다",
  },
  {
    id: "leetcode-hand-of-straights-5",
    post: "leetcode-hand-of-straights",
    question: "정렬을 빼고 hand를 들어온 순서대로 훑으며 각 카드로 묶음을 시작하면 [2, 3, 1, 4], groupSize = 2에서 결과는?",
    choices: [
      "true. 순서와 상관없이 같은 답이 나온다",
      "true. 2, 3과 1, 4로 묶인다",
      "false. 2, 3을 먼저 묶으면 1은 2가 없어 묶이지 못한다",
      "false. 장수가 2로 나누어떨어지지 않는다",
    ],
    answer: 2,
    explanation:
      "2는 가장 작은 카드가 아닌데 먼저 묶음을 시작해 버려서 1이 짝을 잃는다. 정답은 1, 2와 3, 4로 true다. 정렬 없이 풀려면 아무 카드에서 시작하지 말고 장부를 보며 줄의 맨 앞까지 내려가야 한다.",
    anchor: "정렬하지-않고-들어온-순서대로-묶는다",
  },
];
