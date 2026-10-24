import type { QuizQuestion } from "../types";

export const LEETCODE_TIME_BASED_KEY_VALUE_STORE: QuizQuestion[] = [
  {
    id: "leetcode-time-based-key-value-store-1",
    post: "leetcode-time-based-key-value-store",
    question: "키마다 기록 배열에 push만 해도 이분 탐색을 쓸 수 있는 이유는?",
    choices: [
      "자바스크립트 배열은 push할 때 자동으로 정렬되기 때문이다",
      "문제가 set의 timestamp가 호출마다 엄격하게 커진다고 보장해서, 끝에 붙이기만 해도 시간순이 유지되기 때문이다",
      "값 문자열이 사전순으로 들어오기 때문이다",
      "해시맵이 키를 정렬해 두기 때문이다",
    ],
    answer: 1,
    explanation:
      "timestamp가 커지며 들어온다는 조건 덕분에 정렬 비용이 0이다. 이 조건이 빠지면 이분 탐색으로 자리를 찾아 끼워 넣거나 TreeMap 같은 정렬 구조가 필요하다. 해시맵은 키 순서를 유지하지 않는다.",
    anchor: "시각이-커지며-들어오니-이미-정렬돼-있다",
  },
  {
    id: "leetcode-time-based-key-value-store-2",
    post: "leetcode-time-based-key-value-store",
    question: "기록 시각이 [2, 5, 8, 11, 15]일 때 upper bound로 get(9)를 하면 끝난 lo와 돌려주는 기록은?",
    choices: [
      "lo = 2, 2번 기록(시각 8)",
      "lo = 3, 3번 기록(시각 11)",
      "lo = 3, 2번 기록(시각 8)",
      "lo = 4, 3번 기록(시각 11)",
    ],
    answer: 2,
    explanation:
      "9보다 큰 첫 자리는 시각 11이 있는 3번이라 lo = 3이다. 답은 그 바로 앞 lo - 1 = 2번, 시각 8의 기록이다. lo를 그대로 읽으면 미래 값인 11의 기록이 나온다.",
    anchor: "시각이-커지며-들어오니-이미-정렬돼-있다",
  },
  {
    id: "leetcode-time-based-key-value-store-3",
    post: "leetcode-time-based-key-value-store",
    question: "get의 비교를 times[mid] <= timestamp 대신 times[mid] < timestamp로 쓰면 어떤 질문이 틀리나?",
    choices: [
      "기록 시각과 정확히 같은 시각을 물을 때 그 기록을 건너뛰고 한 칸 앞 값을 돌려준다",
      "기록 사이에 떨어지는 시각만 틀린다",
      "없는 키를 물을 때 예외가 난다",
      "아무것도 틀리지 않는다",
    ],
    answer: 0,
    explanation:
      "<로 바꾸면 lower bound가 되어 그 앞 자리는 timestamp보다 작은 마지막 기록이 된다. 그래서 get(5)가 green이 아니라 red를 돌려준다. 기록 사이 시각(9)은 맞게 나와서 그런 값으로만 테스트하면 버그가 숨는다.",
    anchor: "경계-한-칸이-답을-바꾼다",
  },
  {
    id: "leetcode-time-based-key-value-store-4",
    post: "leetcode-time-based-key-value-store",
    question: "질문 시각에서 1씩 내려가며 Map에 기록이 있는지 보는 풀이가 느려지는 경우는?",
    choices: [
      "기록이 아주 많을 때",
      "키가 아주 많을 때",
      "값 문자열이 길 때",
      "기록 수와 상관없이 시각이 띄엄띄엄 떨어져 있을 때. 걸음 수가 기록 수가 아니라 시각 차이에 비례한다",
    ],
    answer: 3,
    explanation:
      "이 풀이는 기록이 없는 시각까지 하나씩 확인하니 비용이 시각 범위에 묶인다. 기록 10개를 100만 간격으로 두면 질문 하나에 수십만 칸을 헛돈다. 기록이 촘촘하면 오히려 금방 멈춘다.",
    anchor: "시각을-1씩-거슬러-내려간다",
  },
  {
    id: "leetcode-time-based-key-value-store-5",
    post: "leetcode-time-based-key-value-store",
    question: "set의 timestamp가 뒤섞여 들어올 수 있다면 자바에서 가장 알맞은 구조는?",
    choices: [
      "ArrayList에 add만 하고 get에서 이분 탐색",
      "키마다 TreeMap을 두고 floorEntry로 찾기",
      "HashMap<Integer, String>에서 1씩 내려가며 찾기",
      "모든 기록을 하나의 배열에 넣고 처음부터 훑기",
    ],
    answer: 1,
    explanation:
      "TreeMap은 키를 정렬된 상태로 유지하는 균형 트리라 넣기와 floorEntry가 모두 O(log k)다. ArrayList에 add만 하면 정렬이 깨져 이분 탐색이 틀린다. 이 문제처럼 시각이 커지며 들어오면 배열이 더 가볍다.",
    anchor: "자바-treemap에-맡기기",
  },
];
