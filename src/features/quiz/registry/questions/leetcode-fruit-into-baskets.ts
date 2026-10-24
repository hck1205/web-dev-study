import type { QuizQuestion } from "../types";

export const LEETCODE_FRUIT_INTO_BASKETS: QuizQuestion[] = [
  {
    id: "leetcode-fruit-into-baskets-1",
    post: "leetcode-fruit-into-baskets",
    question: "Fruit Into Baskets에서 두 포인터가 한 방향으로만 움직여도 답을 놓치지 않는 이유는?",
    choices: [
      "과일 종류 번호가 정렬돼 있어서",
      "시작점을 오른쪽으로 옮기면 앞쪽 과일이 빠질 뿐이라 종류가 늘지 않아, 멈추는 자리가 왼쪽으로 돌아가지 않아서",
      "바구니가 두 개라 창 길이가 2를 넘지 않아서",
      "같은 종류의 과일은 항상 붙어 있어서",
    ],
    answer: 1,
    explanation:
      "구간에서 앞을 빼면 종류 수는 줄거나 그대로다. 그래서 시작점이 오른쪽으로 갈수록 멈추는 자리도 오른쪽이거나 같다. 이 단조성 덕분에 l과 r이 각각 많아야 n번만 움직여 O(n)이 된다.",
    anchor: "나무-여덟-그루를-손으로-따-보기",
  },
  {
    id: "leetcode-fruit-into-baskets-2",
    post: "leetcode-fruit-into-baskets",
    question: "해시맵 창에서 개수가 0이 된 종류를 지우지 않으면 [1, 2, 1, 3, 3]에서 어떻게 되나?",
    choices: [
      "답이 1 작게 나온다",
      "답이 5로 나온다",
      "size가 3에서 내려가지 않아 줄이는 while이 끝나지 않는다",
      "아무 문제 없이 3이 나온다",
    ],
    answer: 2,
    explanation:
      "종류 수를 size로 세는데 0인 키가 남으면 빠진 종류도 계속 세어진다. 3이 들어온 뒤 2의 개수가 0이 돼도 size는 3이라 l이 배열 끝을 넘어서까지 간다. 0이 되면 delete해야 한다.",
    anchor: "바구니가-엉키는-코드",
  },
  {
    id: "leetcode-fruit-into-baskets-3",
    post: "leetcode-fruit-into-baskets",
    question: "마지막 덩어리 길이 풀이로 [1, 2, 2, 2, 3, 3]을 훑는다. 3이 처음 들어온 직후 창 길이는?",
    choices: ["2", "5", "3", "4"],
    answer: 3,
    explanation:
      "새 종류가 오면 바로 앞에서 이어지던 같은 종류의 덩어리만 살아남는다. 2가 세 개 이어졌으니 3 + 1 = 4다. 새 종류마다 창을 2로 되돌리면 이 덩어리를 잃어서 최종 답 5 대신 4가 나온다.",
    anchor: "마지막-덩어리-길이만-들고-가기",
  },
  {
    id: "leetcode-fruit-into-baskets-4",
    post: "leetcode-fruit-into-baskets",
    question: "창을 줄이지 않고 한 칸씩만 미는 풀이가 마지막에 n - l을 답으로 돌려줘도 되는 이유는?",
    choices: [
      "창 길이는 줄지 않고, 커지는 건 조건을 만족하는 창을 만났을 때뿐이라 마지막 길이가 실제로 달성한 최대 길이라서",
      "마지막 창은 언제나 종류가 2개 이하라서",
      "l이 항상 0이라서",
      "n - l은 해시맵 크기와 같아서",
    ],
    answer: 0,
    explanation:
      "조건이 깨지면 l도 한 칸 밀어 길이를 유지하고, 조건을 만족할 때만 길이가 1 커진다. 그래서 마지막 길이는 지나온 길이 중 최대이고 그 길이는 실제로 만족한 창의 길이다. 마지막 창 자체는 종류가 셋인 가짜 창일 수도 있다.",
    anchor: "창을-줄이지-않고-미끄러뜨리기",
  },
  {
    id: "leetcode-fruit-into-baskets-5",
    post: "leetcode-fruit-into-baskets",
    question: "마지막 위치로 건너뛰는 풀이에서 세 번째 종류가 들어왔을 때 버릴 종류는?",
    choices: [
      "창 안에서 개수가 가장 적은 종류",
      "가장 먼저 바구니에 들어온 종류",
      "창 안에서 마지막으로 나온 위치가 더 앞에 있는 종류",
      "번호가 가장 작은 종류",
    ],
    answer: 2,
    explanation:
      "버릴 종류는 창에서 모두 빠져야 하니 그 종류의 마지막 위치 다음으로 l을 옮긴다. 마지막 위치가 앞인 쪽을 버려야 창이 덜 줄어든다. 개수가 적은 쪽을 고르면 [1, 2, 1, 1, 3]처럼 필요 이상으로 창을 줄일 수 있다.",
    anchor: "마지막-위치만-기억하고-건너뛴다",
  },
];
