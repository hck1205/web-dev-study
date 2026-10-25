import type { QuizQuestion } from "../types";

export const LEETCODE_COMBINATION_SUM_II: QuizQuestion[] = [
  {
    id: "leetcode-combination-sum-ii-1",
    post: "leetcode-combination-sum-ii",
    question: "1이 100개이고 target이 30일 때, 결과를 문자열 키 Set으로 거르는 풀이가 시간 초과가 나는 이유는?",
    choices: [
      "재귀 깊이가 100이라 콜 스택이 넘치기 때문이다",
      "답은 하나인데 100개 중 30개를 고르는 모든 경우를 만든 뒤 하나만 남기기 때문이다",
      "Set에 키를 넣을 때마다 정렬을 다시 하기 때문이다",
      "합이 넘치는 갈래를 자르지 못하기 때문이다",
    ],
    answer: 1,
    explanation:
      "합이 넘치면 멈추는 가지치기는 있어도, 이미 본 것과 같은 갈래는 자르지 못한다. 그래서 C(100, 30), 약 2.94 × 10^25가지를 만든다. 같은 자리의 같은 값을 건너뛰면 같은 입력이 31번 호출로 끝난다.",
    anchor: "겹치는-답은-set으로-지우면-될까",
  },
  {
    id: "leetcode-combination-sum-ii-2",
    post: "leetcode-combination-sum-ii",
    question: "`[3, 1, 3, 2, 1]`, target 4에서 건너뛰기 조건을 `i > 0 && a[i] === a[i - 1]`로 쓰면 결과는?",
    choices: [
      "`[[1,1,2],[1,3]]`이 그대로 나온다",
      "`[1,3]`이 두 번 나온다",
      "빈 목록이 나온다",
      "`[[1,3]]`만 나온다",
    ],
    answer: 3,
    explanation:
      "`[1]` 다음 자리의 첫 후보인 두 번째 1까지 막혀서 1을 두 개 쓰는 `[1,1,2]`가 사라진다. 막아야 하는 건 같은 for문의 두 번째 후보부터라 `i > start`여야 한다.",
    anchor: "답이-사라지는-네-가지-실수",
  },
  {
    id: "leetcode-combination-sum-ii-3",
    post: "leetcode-combination-sum-ii",
    question: "`[10, 1, 2, 7, 6, 1, 5]`를 비교자 없이 `sort()`한 뒤 break가 있는 풀이로 target 8을 찾으면?",
    choices: [
      "4개가 정확히 나온다. 같은 값만 붙어 있으면 되기 때문이다",
      "같은 조합이 두 번씩 나온다",
      "빈 목록이 나온다. 문자열 순서라 1 다음에 10을 만나 break하기 때문이다",
      "TypeError가 난다",
    ],
    answer: 2,
    explanation:
      "비교자 없는 정렬은 `[1, 1, 10, 2, 5, 6, 7]`이다. break는 \"뒤는 모두 더 크다\"는 오름차순 성질에 기대는데, 10 뒤에 더 작은 값이 남아 있어도 멈춰 버린다. Subsets II처럼 break가 없는 문제에서는 같은 값만 붙으면 돼서 이 실수가 드러나지 않는다.",
    anchor: "답이-사라지는-네-가지-실수",
  },
  {
    id: "leetcode-combination-sum-ii-4",
    post: "leetcode-combination-sum-ii",
    question: "값마다 개수를 세어 dp로 조합 수를 셀 때, 값 v를 들이면서 들이기 전의 dp만 읽어야 하는 이유는?",
    choices: [
      "방금 v를 붙인 결과를 다시 읽으면 v를 개수보다 많이 쓰게 되기 때문이다",
      "들인 뒤의 dp를 읽으면 순서만 다른 조합이 따로 세어지기 때문이다",
      "배열을 복사하지 않으면 메모리가 부족하기 때문이다",
      "합이 큰 쪽부터 채워야 하기 때문이다",
    ],
    answer: 0,
    explanation:
      "v를 k개 붙이는 경우를 직접 1부터 개수까지 세고 있으니, 이미 v가 붙은 목록에 또 붙이면 개수 제한을 넘는다. 그래서 새 배열에 쓴다. 값 단위로 들이기 때문에 순서만 다른 조합은 처음부터 생기지 않는다.",
    anchor: "작은-합의-목록을-이어-붙여-큰-합을-만든다",
  },
  {
    id: "leetcode-combination-sum-ii-5",
    post: "leetcode-combination-sum-ii",
    question: "후보에 음수가 섞인다면 표준 풀이에서 무엇을 버려야 하나?",
    choices: [
      "같은 자리의 같은 값 건너뛰기",
      "정렬",
      "합이 넘치면 멈추는 break",
      "`go(i + 1)`로 한 번씩만 쓰는 규칙",
    ],
    answer: 2,
    explanation:
      "지금 넘쳐도 뒤의 음수로 다시 맞출 수 있으니 break가 답을 지운다. 같은 값 건너뛰기는 값의 크기와 상관없이 성립해서 그대로 쓸 수 있다. 대신 합으로 자르지 못해 최악 2^n을 다 보게 된다.",
    anchor: "조건이-달라지면",
  },
];
