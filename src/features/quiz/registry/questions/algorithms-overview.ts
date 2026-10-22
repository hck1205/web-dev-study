import type { QuizQuestion } from "../types";

export const ALGORITHMS_OVERVIEW: QuizQuestion[] = [
  {
    id: "algorithms-overview-1",
    post: "algorithms-overview",
    question: "문제 제한이 n ≤ 10⁵, 시간 제한 1초다. 1초에 기본 단계 10⁸번을 예산으로 잡을 때 처음부터 버려야 하는 풀이는?",
    choices: ["O(n log n) 정렬 후 훑기", "O(n²) 이중 반복", "O(n) 슬라이딩 윈도", "O(n) 해시맵 한 번 훑기"],
    answer: 1,
    explanation:
      "n² = 10¹⁰이라 예산의 100배다. 실제로 최소 길이 부분 배열의 완전 탐색은 n = 10만에서 2초가 걸렸다. n log n은 약 170만 번이라 여유가 있다.",
    anchor: "입력-크기가-허락하는-복잡도",
  },
  {
    id: "algorithms-overview-2",
    post: "algorithms-overview",
    question: "'h시간 안에 다 먹으려면 시간당 최소 몇 개씩 먹어야 하나' 같은 문제에서 답 자체를 이분 탐색할 수 있는 근거는?",
    choices: [
      "더미가 정렬되어 있기 때문",
      "속도 k로 되면 k보다 큰 속도로도 되는 단조성이 있기 때문",
      "더미 수가 적기 때문",
      "답이 항상 가장 큰 더미 크기이기 때문",
    ],
    answer: 1,
    explanation:
      "되는 속도의 집합이 한쪽으로 이어져 있어서 가운데 값을 판정하고 범위를 반씩 줄일 수 있다. 입력이 정렬돼 있을 필요는 없고, 판정 함수가 빠르게 돌면 된다.",
    anchor: "단조성이-보이면-답을-찍어-본다",
  },
  {
    id: "algorithms-overview-3",
    post: "algorithms-overview",
    question: "합이 target 이상인 가장 짧은 연속 부분 배열을 슬라이딩 윈도로 푸는 코드가 있다. 배열에 음수가 섞이면 어떻게 되나?",
    choices: [
      "그대로 맞는다. 창 밀기는 값의 부호와 상관없다",
      "더 빨라진다",
      "창을 넓혀도 합이 줄 수 있어 단조성이 깨지고 틀린 답이 나올 수 있다",
      "무한 루프에 빠진다",
    ],
    answer: 2,
    explanation:
      "창 밀기는 값이 양수라 창을 넓히면 합이 커진다는 가정 위에 서 있다. 음수가 섞이면 그 가정이 깨져 왼쪽을 당기는 판단이 틀린다. 누적 합 위의 이분 탐색도 같은 단조성을 써서 함께 틀린다.",
    anchor: "한-문제를-세-가지로-풀어-보기",
  },
  {
    id: "algorithms-overview-4",
    post: "algorithms-overview",
    question: "면접에서 처음부터 최적 풀이를 말하지 않고 완전 탐색부터 말하는 게 도움이 되는 이유로 가장 알맞은 것은?",
    choices: [
      "면접관이 느린 풀이를 더 좋아하기 때문",
      "완전 탐색이 코드가 짧아 시간을 아끼기 때문",
      "느린 풀이에서 반복되는 계산을 짚으면 그게 더 빠른 기법의 근거가 되고, 나중에 검증용 정답지로도 쓸 수 있기 때문",
      "최적 풀이는 면접에서 요구하지 않기 때문",
    ],
    answer: 2,
    explanation:
      "시작점이 오른쪽으로 가면 끝점도 오른쪽으로만 간다는 관찰처럼, 완전 탐색의 낭비를 찾으면 다음 기법이 정해진다. 완전 탐색은 작은 입력에서 빠른 풀이의 답을 비교하는 기준으로도 쓴다.",
    anchor: "면접에서-문제를-받은-뒤의-순서",
  },
  {
    id: "algorithms-overview-5",
    post: "algorithms-overview",
    question: "자바스크립트에서 lo = 30억, hi = 40억일 때 (lo + hi) >> 1의 결과는?",
    choices: ["3500000000", "-794967296", "NaN", "RangeError가 난다"],
    answer: 1,
    explanation:
      "비트 연산자는 피연산자를 32비트 정수로 바꾸기 때문에 70억이 잘려 음수가 된다. 범위가 큰 답 이분 탐색에서는 Math.floor((lo + hi) / 2)를 쓴다.",
    anchor: "자바스크립트로-풀-때-조심할-것",
  },
  {
    id: "algorithms-overview-6",
    post: "algorithms-overview",
    question: "[10, 9, 1, 100, 25].sort()의 결과는?",
    choices: ["[1, 9, 10, 25, 100]", "[100, 25, 10, 9, 1]", "[1, 10, 100, 25, 9]", "[10, 9, 1, 100, 25]"],
    answer: 2,
    explanation:
      "비교 함수가 없으면 원소를 문자열로 바꿔 사전 순으로 정렬한다. 그래서 '10'과 '100'이 '25'보다 앞에 온다. 숫자 정렬은 (a, b) => a - b를 넘긴다.",
    anchor: "자바스크립트로-풀-때-조심할-것",
  },
  {
    id: "algorithms-overview-7",
    post: "algorithms-overview",
    question: "모든 가능한 배치를 출력하라는 문제가 아니라 '가능한 배치의 개수'만 묻는다. 백트래킹 풀이가 같은 상태를 여러 번 지나간다면 다음으로 생각할 기법은?",
    choices: ["그리디", "동적 계획법", "슬라이딩 윈도", "위상 정렬"],
    answer: 1,
    explanation:
      "나열이 필요 없고 같은 상태가 반복된다면 그 상태의 답을 기억하는 순간 동적 계획법이 된다. 그리디는 매 단계 선택이 하나로 정해진다는 근거가 있을 때만 쓸 수 있다.",
    anchor: "문장의-모양이-기법을-좁힌다",
  },
];
