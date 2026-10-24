import type { QuizQuestion } from "../types";

export const SLIDING_WINDOW_PATTERN: QuizQuestion[] = [
  {
    id: "sliding-window-pattern-1",
    post: "sliding-window-pattern",
    question: "가변 창 코드는 for 안에 while이 있는데도 O(n)이다. 그 이유로 맞는 것은?",
    choices: [
      "while은 대부분의 입력에서 한 번만 돌기 때문에",
      "자바스크립트 엔진이 안쪽 반복문을 최적화하기 때문에",
      "창 길이가 항상 상수 k 이하이기 때문에",
      "왼쪽 포인터가 한 방향으로만 움직이고 오른쪽을 넘지 않아, while 몸통이 전체를 통틀어 많아야 n번 돌기 때문에",
    ],
    answer: 3,
    explanation:
      "반복 횟수 대신 포인터가 움직인 거리를 세면 l도 r도 각각 많아야 n번 움직인다. while 몸통은 돌 때마다 l을 한 칸 옮기니 합쳐서 n 이하다. 가변 창은 길이가 상수로 정해져 있지 않다.",
    anchor: "안쪽에-while이-있어도-on인-이유",
  },
  {
    id: "sliding-window-pattern-2",
    post: "sliding-window-pattern",
    question:
      "합이 target 이상인 가장 짧은 부분 배열을 슬라이딩 윈도로 구했는데, [1, -5, 3, 4]와 target 4에서 0(없음)이 나왔다. 정답은 [4] 한 칸이다. 왜 틀렸나?",
    choices: [
      "음수가 있으면 왼쪽을 빼서 합이 오히려 커질 수 있어, 창을 줄이는 판단의 근거인 단조성이 깨져서",
      "창 길이를 r - l로 재서 한 칸씩 어긋났기 때문에",
      "while 대신 if를 써서 한 칸만 줄였기 때문에",
      "고정 창을 써야 하는 문제인데 가변 창을 써서",
    ],
    answer: 0,
    explanation:
      "창 합이 1, -4, -1, 3으로 가다 4에 닿지 못해 줄일 기회가 오지 않았다. 앞의 1과 -5를 빼면 합이 커지는데 창은 그걸 모른다. 음수가 있으면 누적 합과 해시맵이나 누적 합 위의 단조 덱을 쓴다.",
    anchor: "창이-통하지-않는-입력",
  },
  {
    id: "sliding-window-pattern-3",
    post: "sliding-window-pattern",
    question: "가장 긴 창과 가장 짧은 창 템플릿에서 답(길이)을 재는 자리로 맞는 짝은?",
    choices: [
      "둘 다 while 안에서 줄이기 직전에 잰다",
      "가장 긴 창은 while 안, 가장 짧은 창은 while을 빠져나온 뒤",
      "가장 긴 창은 줄인 뒤(조건을 만족하는 창), 가장 짧은 창은 만족하는 동안 줄이기 직전",
      "둘 다 for 반복이 끝난 뒤 한 번만 잰다",
    ],
    answer: 2,
    explanation:
      "가장 긴 창은 조건이 깨졌다가 다시 맞춰진 창을 재야 하니 while 뒤에서 잰다. 가장 짧은 창은 조건을 만족하는 창마다 줄이기 전에 재야 줄어든 길이를 놓치지 않는다.",
    anchor: "늘렸다-줄이는-창",
  },
  {
    id: "sliding-window-pattern-4",
    post: "sliding-window-pattern",
    question:
      "서로 다른 값이 정확히 K개인 부분 배열의 개수를 구할 때 atMost(K) - atMost(K - 1)로 바꾸는 이유는?",
    choices: [
      "atMost가 해시맵을 쓰지 않아 더 빠르기 때문에",
      "정확히 K개는 창을 줄여도 그대로일 수 있어 줄일 시점이 한 방향으로 안 정해지지만, 많아야 K개는 단조적이라 창으로 셀 수 있어서",
      "정확히 K개인 부분 배열은 항상 두 개씩 짝지어 나오기 때문에",
      "K - 1개를 빼야 빈 부분 배열이 제외되기 때문에",
    ],
    answer: 1,
    explanation:
      "많아야 K개는 창을 줄이면 종류 수가 줄거나 그대로라 단조적이고, 오른쪽 끝마다 r - l + 1을 더해 O(n)에 센다. 정확히 K개는 그 차이로 얻는다.",
    anchor: "정확히-k개는-많아야-k개-둘의-차로",
  },
  {
    id: "sliding-window-pattern-5",
    post: "sliding-window-pattern",
    question:
      "Map으로 창 안의 글자 개수를 관리하며 'cnt.size > k'로 조건을 판정한다. 개수가 0이 된 키를 지우지 않으면?",
    choices: [
      "아무 문제 없다. 값이 0인 키는 size에 세지 않는다",
      "Map이 자동으로 지워 주므로 상관없다",
      "메모리만 조금 더 쓸 뿐 결과는 같다",
      "size가 실제 글자 종류보다 커져서 조건이 엉뚱하게 깨지고 창을 너무 많이 줄인다",
    ],
    answer: 3,
    explanation:
      "Map.size는 값과 상관없이 키 개수를 센다. 0이 된 키가 남으면 서로 다른 글자 수가 부풀려져 틀린 답이 나온다. 개수가 0이 되면 delete한다.",
    anchor: "창-상태를-담는-그릇",
  },
  {
    id: "sliding-window-pattern-6",
    post: "sliding-window-pattern",
    question:
      "문제에 'subsequence'(떨어져 있어도 되는 부분 수열)라는 말이 있다. 슬라이딩 윈도를 바로 쓰기 어려운 이유는?",
    choices: [
      "연속이 아니면 창 안의 상태라는 개념이 성립하지 않아서",
      "부분 수열은 항상 정렬돼 있어서",
      "부분 수열 문제는 입력 크기가 항상 작아서",
      "창은 문자열에서만 쓸 수 있어서",
    ],
    answer: 0,
    explanation:
      "창은 l과 r 사이의 연속된 칸 전체를 상태로 들고 다닌다. 떨어진 원소를 고르는 부분 수열은 그런 구간이 없어서 대개 동적 계획법으로 간다. contiguous subarray와 subsequence를 구분하는 게 첫 단계다.",
    anchor: "문제-문장에서-창을-알아보는-법",
  },
];
