import type { QuizQuestion } from "../types";

export const LEETCODE_SUM_OF_PREFIX_SCORES_OF_STRINGS: QuizQuestion[] = [
  {
    id: "leetcode-sum-of-prefix-scores-of-strings-1",
    post: "leetcode-sum-of-prefix-scores-of-strings",
    question: "words = [car, cat, cart, dog]에서 cart의 점수는?",
    choices: ["4", "7", "8", "9"],
    answer: 3,
    explanation:
      "c와 ca로 시작하는 단어가 각각 3개, car로 시작하는 단어가 2개(car, cart), cart로 시작하는 단어가 1개라 3 + 3 + 2 + 1 = 9다. 자기 자신도 센다는 점을 빼먹으면 값이 작아진다.",
    anchor: "앞부분마다-같은-앞부분을-가진-단어-수",
  },
  {
    id: "leetcode-sum-of-prefix-scores-of-strings-2",
    post: "leetcode-sum-of-prefix-scores-of-strings",
    question: "트라이 노드의 count를 단어가 끝나는 노드에서만 올리면 어떻게 되나?",
    choices: [
      "답이 그대로 맞는다. 끝 노드만 세도 앞부분 수는 같다",
      "count가 정확히 그 단어인 개수가 되어, 공유하는 c, ca 같은 노드가 0으로 남고 답이 작아진다",
      "모든 답에 단어 수 n이 더해진다",
      "중복 단어만 틀리고 나머지는 맞는다",
    ],
    answer: 1,
    explanation:
      "앞부분 점수는 그 앞부분을 지나간 단어 수라서 지나는 모든 노드에서 올려야 한다. 끝 노드에서만 올리면 c, ca처럼 어떤 단어의 끝도 아닌 노드가 0이 되어 예시에 [1, 1, 2, 1]이 나온다.",
    anchor: "끝-노드에만-세거나-중복을-지우면-틀린다",
  },
  {
    id: "leetcode-sum-of-prefix-scores-of-strings-3",
    post: "leetcode-sum-of-prefix-scores-of-strings",
    question: "앞부분 문자열을 모두 해시맵에 넣고 세는 풀이가 O(n·L)이 아니라 O(n·L²)인 이유는?",
    choices: [
      "해시맵에서 충돌이 나서 연산마다 L번 다시 찾기 때문에",
      "단어마다 해시맵 전체를 훑기 때문에",
      "길이 k인 앞부분을 만들고 해시를 계산하는 데 O(k)가 들어 단어 하나에 1 + 2 + … + L이 되기 때문에",
      "해시맵 크기가 n·L을 넘으면 다시 만들어야 하기 때문에",
    ],
    answer: 2,
    explanation:
      "해시맵 연산 횟수는 n·L번이지만 키가 길이 최대 L인 문자열이라 연산 한 번이 O(1)이 아니다. 단어 하나에 앞부분 길이의 합인 O(L²)이 들어 전체 O(n·L²)이 된다. 롤링 해시나 트라이는 앞부분을 한 글자씩 이어서 다뤄 이 비용을 없앤다.",
    anchor: "앞부분-문자열을-해시맵에-세어-두기",
  },
  {
    id: "leetcode-sum-of-prefix-scores-of-strings-4",
    post: "leetcode-sum-of-prefix-scores-of-strings",
    question: "정렬 풀이에서 w의 점수를 다른 말로 바꾸면 무엇인가?",
    choices: [
      "모든 단어 v에 대한 LCP(w, v)의 합",
      "정렬된 배열에서 w의 위치",
      "w와 이웃한 두 단어의 LCP 중 큰 값",
      "w보다 사전 순으로 앞서는 단어 수",
    ],
    answer: 0,
    explanation:
      "v가 w의 앞부분 몇 개로 시작하는지 세면 그게 둘의 공통 접두사 길이다. 그래서 점수는 모든 단어와의 LCP 합이다. 정렬하면 두 단어의 LCP가 사이에 있는 이웃 LCP의 최솟값이 되어 단조 스택으로 합을 구할 수 있다.",
    anchor: "정렬하면-공통-접두사-길이의-합이-된다",
  },
  {
    id: "leetcode-sum-of-prefix-scores-of-strings-5",
    post: "leetcode-sum-of-prefix-scores-of-strings",
    question: "중복을 없애려고 words를 Set으로 거른 뒤 트라이를 만들면 [a, a]에서 무엇이 나오나?",
    choices: ["[2, 2]", "[1, 1]", "[1, 0]", "[0, 0]"],
    answer: 1,
    explanation:
      "점수는 목록에 그 앞부분으로 시작하는 단어가 몇 개 있는지라 같은 단어 두 개는 두 번 센다. 중복을 지우면 a 노드의 count가 1이 되어 [1, 1]이 나온다. 정답은 [2, 2]다.",
    anchor: "끝-노드에만-세거나-중복을-지우면-틀린다",
  },
];
