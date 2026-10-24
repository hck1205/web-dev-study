import type { QuizQuestion } from "../types";

export const LEETCODE_TOP_K_FREQUENT_ELEMENTS: QuizQuestion[] = [
  {
    id: "leetcode-top-k-frequent-elements-1",
    post: "leetcode-top-k-frequent-elements",
    question: "빈도 버킷 풀이가 비교 정렬의 O(n log n) 하한을 넘어 O(n)이 될 수 있는 이유는?",
    choices: [
      "해시맵이 값을 자동으로 정렬해 주기 때문",
      "빈도가 1 이상 n 이하로 정해져 있어 빈도를 칸 번호로 쓰면 비교 없이 나눌 수 있기 때문",
      "k개만 고르면 되니 정렬 비용이 k log k로 줄기 때문",
      "값이 -10^4 이상 10^4 이하라 정렬이 빠르기 때문",
    ],
    answer: 1,
    explanation:
      "O(n log n) 하한은 비교로만 순서를 정할 때의 이야기다. 빈도는 1부터 n까지의 정수라서 길이 n + 1인 배열의 칸 번호로 쓸 수 있고, 그러면 비교 없이 빈도별로 값을 나눌 수 있다. 큰 칸부터 훑으면 많이 나온 순서가 된다.",
    anchor: "빈도를-칸-번호로-쓰는-버킷",
  },
  {
    id: "leetcode-top-k-frequent-elements-2",
    post: "leetcode-top-k-frequent-elements",
    question: "상위 k개를 고를 때 최대 힙이 아니라 크기 k인 최소 힙을 쓰는 이유는?",
    choices: [
      "최소 힙의 맨 위가 상위 k개 중 꼴찌라서, 크기가 k를 넘으면 그걸 버리면 되기 때문",
      "JavaScript에는 최소 힙만 있기 때문",
      "최소 힙은 넣기가 O(1)이기 때문",
      "최대 힙으로는 상위 k개를 구할 수 없기 때문",
    ],
    answer: 0,
    explanation:
      "힙에 상위 k개만 남기려면 그중 가장 덜 나온 값을 바로 알아야 한다. 최소 힙의 맨 위가 그 값이라 크기가 k + 1이 되면 맨 위를 빼면 된다. 그래서 힙 크기가 k로 유지되고 연산이 O(log k)다. 최대 힙도 쓸 수 있지만 전부 넣어야 해서 O(m) 공간이 든다.",
    anchor: "크기-k인-힙만-들고-다니기",
  },
  {
    id: "leetcode-top-k-frequent-elements-3",
    post: "leetcode-top-k-frequent-elements",
    question: "서로 다른 값 3만여 개, 길이 10만인 배열로 재 봤을 때 k번 최댓값 뽑기를 뺀 풀이들이 모두 7~15ms에 몰린 이유는?",
    choices: [
      "자바스크립트 엔진이 모든 정렬을 O(n)으로 바꿔 주기 때문",
      "k가 작아서 고르는 단계가 없었기 때문",
      "모든 풀이가 공통으로 하는 Map 세기 단계가 대부분의 시간을 쓰기 때문",
      "측정 오차 때문에 의미 없는 결과다",
    ],
    answer: 2,
    explanation:
      "10만 개를 해시맵으로 세는 단계는 어느 풀이에나 있고 시간 대부분을 차지한다. 고르는 단계는 m이 3만 정도라 O(m log m)과 O(m)의 차이가 몇 ms에 그친다. 더 빠르게 하려면 세는 단계를 배열로 바꾸는 게 효과가 컸다.",
    anchor: "재-보면-세는-데-시간이-다-간다",
  },
  {
    id: "leetcode-top-k-frequent-elements-4",
    post: "leetcode-top-k-frequent-elements",
    question: "퀵셀렉트로 상위 k개를 고르는 풀이의 시간 복잡도로 옳은 것은? (m은 서로 다른 값의 수)",
    choices: [
      "항상 O(m log m)",
      "항상 O(m)",
      "평균 O(m log k), 최악 O(m log m)",
      "평균 O(m), 최악 O(m²)",
    ],
    answer: 3,
    explanation:
      "퀵셀렉트는 경계가 있는 한쪽만 다시 나누니 평균적으로 m + m/2 + … = O(m)이다. 하지만 피벗이 계속 끝값이면 범위가 하나씩만 줄어 O(m²)가 된다. 그래서 피벗을 무작위로 고른다.",
    anchor: "퀵셀렉트로-경계만-찾기",
  },
  {
    id: "leetcode-top-k-frequent-elements-5",
    post: "leetcode-top-k-frequent-elements",
    question: "여러 서버의 로그에서 상위 k개를 구할 때, 서버마다 상위 k개만 보내 합치면 왜 틀릴 수 있나?",
    choices: [
      "서버마다 k가 달라서",
      "각 서버에서는 k등 밖이지만 합치면 상위권인 값이 빠지기 때문",
      "해시맵을 합치는 연산이 O(n²)라서",
      "서버 사이에 값의 부호가 바뀌기 때문",
    ],
    answer: 1,
    explanation:
      "어떤 값이 서버 A와 B에서 각각 11등이어도 횟수를 합치면 1등일 수 있다. 상위 k개만 보내면 그 값은 어디서도 보내지지 않아 사라진다. 같은 값이 한 곳에 모이도록 값의 해시로 나눠 보내 횟수를 합친 뒤 골라야 한다.",
    anchor: "데이터가-끝없이-들어온다면",
  },
];
