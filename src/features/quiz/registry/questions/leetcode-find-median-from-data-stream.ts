import type { QuizQuestion } from "../types";

export const LEETCODE_FIND_MEDIAN_FROM_DATA_STREAM: QuizQuestion[] = [
  {
    id: "leetcode-find-median-from-data-stream-1",
    post: "leetcode-find-median-from-data-stream",
    question: "두 힙 풀이에서 작은 절반을 최대 힙, 큰 절반을 최소 힙에 담는 이유는?",
    choices: [
      "중앙값에 필요한 작은 절반의 가장 큰 값과 큰 절반의 가장 작은 값이 각각 맨 위에 오게 하려고",
      "두 힙을 합치면 정렬된 배열이 되기 때문",
      "최대 힙과 최소 힙을 번갈아 써야 넣기가 O(1)이 되기 때문",
      "음수와 양수를 나눠 담기 위해서",
    ],
    answer: 0,
    explanation:
      "정렬했을 때 가운데는 작은 절반의 끝과 큰 절반의 시작 사이에 있다. 작은 절반을 최대 힙에 담으면 그 끝이, 큰 절반을 최소 힙에 담으면 그 시작이 맨 위에 와서 O(1)에 읽는다. 넣기는 O(log n)이지 O(1)이 아니다.",
    anchor: "작은-절반과-큰-절반을-따로-담는다",
  },
  {
    id: "leetcode-find-median-from-data-stream-2",
    post: "leetcode-find-median-from-data-stream",
    question: "addNum에서 새 값을 lo에 넣은 뒤 lo 맨 위를 꺼내 hi로 넘기는 단계가 지키는 것은?",
    choices: [
      "두 힙의 개수 차이",
      "힙 내부 배열의 정렬 상태",
      "lo의 모든 값이 hi의 모든 값보다 작거나 같다는 순서 규칙",
      "중앙값이 정수라는 성질",
    ],
    answer: 2,
    explanation:
      "새 값이 아무리 커도 lo에 들어가는 순간 맨 위가 되어 hi로 넘어간다. lo에서 가장 큰 값을 넘기니 남은 lo는 모두 그 값 이하이고, 순서 규칙이 다시 성립한다. 개수 차이는 그다음 단계에서 hi가 많아지면 되돌려서 맞춘다.",
    anchor: "왜-이-순서로-하면-규칙이-지켜지나",
  },
  {
    id: "leetcode-find-median-from-data-stream-3",
    post: "leetcode-find-median-from-data-stream",
    question: "개수가 같으면 lo, 아니면 hi에 번갈아 넣기만 하는 코드에 6, 2, 9를 넣으면 마지막 중앙값은?",
    choices: ["6", "4", "5.5", "9"],
    answer: 3,
    explanation:
      "6은 lo, 2는 hi, 9는 lo로 간다. 2가 큰 절반에 들어가 순서 규칙이 깨졌고, lo 맨 위가 9가 되어 9가 나온다. 정답은 6이다. 개수만이 아니라 순서 규칙도 지켜야 한다.",
    anchor: "개수만-맞추고-순서를-맞추지-않는다",
  },
  {
    id: "leetcode-find-median-from-data-stream-4",
    post: "leetcode-find-median-from-data-stream",
    question: "값의 99%가 0 이상 100 이하일 때, 범위 밖 값을 정렬하지 않고 목록에 모아만 둬도 되는 이유는?",
    choices: [
      "범위 밖 값은 중앙값 계산에서 빼도 되기 때문",
      "범위 밖이 1%뿐이면 50% 자리인 중앙값은 거의 항상 범위 안에 있어 범위 밖은 개수만 쓰이기 때문",
      "범위 밖 값은 항상 0 또는 100과 같기 때문",
      "목록은 넣을 때 자동으로 정렬되기 때문",
    ],
    answer: 1,
    explanation:
      "범위 아래에 깔린 값이 많아야 1%라서 정렬했을 때 50% 자리는 범위 안으로 들어온다. 그래서 범위 밖 목록은 몇 개인지만 알면 된다. 범위 밖 값을 아예 빼면 순번이 어긋나 틀린다.",
    anchor: "값의-99만-범위-안이라면",
  },
  {
    id: "leetcode-find-median-from-data-stream-5",
    post: "leetcode-find-median-from-data-stream",
    question: "Java에서 return (lo.peek() + hi.peek()) / 2; 로 짝수 개의 중앙값을 구하면 3과 4가 남았을 때 결과는?",
    choices: ["3.5", "4", "3", "컴파일 오류"],
    answer: 2,
    explanation:
      "Integer가 int로 풀려 정수끼리 나누므로 7 / 2 = 3이 되고, 반환형이 double이라 3.0으로 바뀔 뿐이다. 2.0으로 나눠야 3.5가 나온다. 값이 int 끝까지 올 수 있으면 더하기 전에 long으로 바꿔 오버플로도 막는다.",
    anchor: "python과-java로-옮기기",
  },
];
