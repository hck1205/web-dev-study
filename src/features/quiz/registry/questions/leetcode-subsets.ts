import type { QuizQuestion } from "../types";

export const LEETCODE_SUBSETS: QuizQuestion[] = [
  {
    id: "leetcode-subsets-1",
    post: "leetcode-subsets",
    question: "시작 위치 백트래킹에서 `res.push(path)`로 복사 없이 기록하면 `[1, 2, 3]`의 결과는 어떻게 되나?",
    choices: [
      "8개가 나오지만 모두 빈 배열이다",
      "`[1, 2, 3]` 하나만 8번 나온다",
      "정상적으로 8개의 서로 다른 부분집합이 나온다",
      "빈 배열 하나만 나온다",
    ],
    answer: 0,
    explanation:
      "결과의 여덟 칸이 모두 같은 배열 `path`를 가리킨다. 탐색이 끝나면 pop으로 `path`가 비어 있으니 전부 빈 배열로 보인다. 개수는 맞기 때문에 더 헷갈리는 버그다.",
    anchor: "결과가-전부-빈-배열로-나온다면",
  },
  {
    id: "leetcode-subsets-2",
    post: "leetcode-subsets",
    question: "시작 위치 백트래킹에서 재귀 호출에 `i + 1` 대신 `i`를 넘기면 어떻게 되나?",
    choices: [
      "부분집합이 사전순 대신 크기순으로 나온다",
      "같은 원소를 계속 다시 골라 재귀가 끝나지 않고 콜 스택이 넘친다",
      "빈 집합이 빠진다",
      "결과는 같고 호출 수만 두 배가 된다",
    ],
    answer: 1,
    explanation:
      "`go(i)`는 방금 고른 원소를 다음 후보에 다시 넣는다. 합 같은 종료 조건이 없는 이 문제에서는 깊이가 끝없이 늘어 `Maximum call stack size exceeded`로 죽는다. 같은 원소를 다시 쓰는 `go(i)`는 합이 줄어드는 Combination Sum에서나 맞는 선택이다.",
    anchor: "결과가-전부-빈-배열로-나온다면",
  },
  {
    id: "leetcode-subsets-3",
    post: "leetcode-subsets",
    question: "n = 10일 때 넣는다/안 넣는다 재귀와 시작 위치 백트래킹의 호출 횟수는 각각 얼마인가?",
    choices: ["1024번과 1024번", "2047번과 2047번", "1024번과 2047번", "2047번과 1024번"],
    answer: 3,
    explanation:
      "넣는다/안 넣는다는 완전 이진 트리라 마디가 2^(n+1) - 1 = 2047개이고 답은 잎에서만 나온다. 시작 위치 방식은 호출 하나가 곧 부분집합 하나라 정확히 2^10 = 1024번이다. 그래도 둘 다 복사 비용 때문에 시간 복잡도는 O(n · 2^n)으로 같다.",
    anchor: "시작-위치를-넘기면-모든-마디가-답이다",
  },
  {
    id: "leetcode-subsets-4",
    post: "leetcode-subsets",
    question: "JavaScript 비트마스크 풀이 `for (let mask = 0; mask < (1 << n); mask++)`에 n = 31을 주면 어떻게 되나?",
    choices: [
      "2^31개를 만들다가 메모리가 부족해진다",
      "`1 << 31`이 음수라 조건이 처음부터 거짓이고 반복이 한 번도 돌지 않는다",
      "`1 << 31`이 `Infinity`가 되어 끝나지 않는다",
      "정상적으로 동작하지만 느리다",
    ],
    answer: 1,
    explanation:
      "JavaScript의 `<<`는 32비트 정수로 계산해서 `1 << 31`은 -2147483648이다. `0 < 음수`가 거짓이라 빈 결과가 나온다. Java의 `int`도 같아서 `1L << n`을 쓴다.",
    anchor: "0부터-2n---1까지-세면-끝난다",
  },
  {
    id: "leetcode-subsets-5",
    post: "leetcode-subsets",
    question: "`[1, 2, 2]`처럼 중복이 있을 때 정렬 후 건너뛰는 조건을 `i > 0 && nums[i] === nums[i - 1]`로 쓰면 무슨 문제가 생기나?",
    choices: [
      "같은 부분집합이 여전히 두 번 나온다",
      "빈 집합이 빠진다",
      "깊이 들어가 두 번째 2를 이어 고르는 `[2,2]`, `[1,2,2]`가 빠진다",
      "아무 문제 없다. `i > start`와 결과가 같다",
    ],
    answer: 2,
    explanation:
      "막아야 하는 건 같은 for문(같은 깊이)에서 같은 값을 두 번 고르는 것뿐이다. `i > 0`은 더 깊은 단계에서 두 번째 2를 고르는 것까지 막아서 답이 빠진다. 그래서 조건은 `i > start`여야 한다.",
    anchor: "같은-값이-섞여-있다면",
  },
];
