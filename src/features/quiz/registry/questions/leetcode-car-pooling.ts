import type { QuizQuestion } from "../types";

export const LEETCODE_CAR_POOLING: QuizQuestion[] = [
  {
    id: "leetcode-car-pooling-1",
    post: "leetcode-car-pooling",
    question: "차분 배열에서 내리는 손님을 `diff[to]`에서 빼는 이유는?",
    choices: [
      "배열 길이를 줄이려고",
      "손님이 to에서 이미 내리므로 여행이 [from, to) 구간이라서",
      "to + 1이 배열 범위를 벗어나서",
      "내리는 손님을 먼저 처리하려고 정렬하기 때문에",
    ],
    answer: 1,
    explanation:
      "to에서는 이미 차에 없으니 인원은 to 칸부터 줄어든다. to + 1에서 빼면 위치 5에서 내릴 2명이 남아 예시가 7명으로 계산된다. 끝을 포함하는 1109번 같은 문제에서만 last + 1에서 뺀다.",
    anchor: "내리는-곳-칸에서-바로-빼는-이유",
  },
  {
    id: "leetcode-car-pooling-2",
    post: "leetcode-car-pooling",
    question: "힙 풀이에서 Meeting Rooms II처럼 `if`로 하나만 꺼내면 `[[1,0,1],[1,0,1],[3,2,3]]`, 정원 3의 결과는?",
    choices: [
      "true. 하나만 꺼내도 된다",
      "true지만 느려진다",
      "false. 위치 2에서 한 여행만 내려 4명으로 계산한다",
      "오류가 난다",
    ],
    answer: 2,
    explanation:
      "위치 2에 오기 전에 두 여행이 모두 내려야 하는데 if는 하나만 내린다. 1 + 3 = 4명으로 정원을 넘었다고 본다. 비는 좌석 수가 중요하니 while로 내릴 사람을 모두 내린다.",
    anchor: "내릴-곳이-가장-가까운-손님부터-내린다",
  },
  {
    id: "leetcode-car-pooling-3",
    post: "leetcode-car-pooling",
    question: "Meeting Rooms II의 '시작만, 끝만 따로 정렬해 두 포인터로 세기'를 이 문제에 그대로 쓸 수 없는 이유는?",
    choices: [
      "여행마다 인원이 달라 시작과 끝이 바꾸는 양이 1이 아니어서",
      "위치가 1000까지라서",
      "차가 동쪽으로만 가서",
      "정렬이 불안정해서",
    ],
    answer: 0,
    explanation:
      "그 풀이는 시작과 끝이 똑같이 1씩 바꾼다는 전제로 끝난 개수만 셌다. 인원이 붙으면 인원과 함께 정렬해야 하고 그게 곧 사건 스위프다.",
    anchor: "타고-내리는-사건을-줄-세운다",
  },
  {
    id: "leetcode-car-pooling-4",
    post: "leetcode-car-pooling",
    question: "JavaScript에서 `new Array(1001)`로 만들고 0으로 채우지 않으면 `[[5,0,1]]`, 정원 4의 결과는?",
    choices: [
      "false. 정상이다",
      "TypeError가 난다",
      "false지만 늦게 멈춘다",
      "true. 누적 값이 NaN이라 비교가 늘 거짓이다",
    ],
    answer: 3,
    explanation:
      "빈 칸은 undefined라 undefined + 5가 NaN이 된다. NaN > 4는 늘 거짓이라 한 번도 넘치지 않은 것처럼 true를 낸다. 예외가 없어 찾기 어렵다.",
    anchor: "배열을-0으로-채우지-않는다",
  },
  {
    id: "leetcode-car-pooling-5",
    post: "leetcode-car-pooling",
    question: "탑승 인원을 위치 전체가 아니라 여행의 출발점에서만 확인해도 되는 이유는?",
    choices: [
      "출발점이 항상 정렬돼 있어서",
      "인원은 누군가 탈 때만 늘어나서 최댓값이 반드시 어떤 출발점에서 처음 나오기 때문에",
      "내리는 곳에서는 인원이 0이라서",
      "출발점이 1000개를 넘지 않아서",
    ],
    answer: 1,
    explanation:
      "인원이 늘어나는 순간은 누군가 타는 순간뿐이다. 그래서 가장 붐비는 상태는 어떤 from에서 시작된다. 이 덕분에 O(n²) 풀이는 위치 범위와 상관없이 쓸 수 있다.",
    anchor: "태우는-곳에서만-세도-충분하다",
  },
];
