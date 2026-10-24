import type { QuizQuestion } from "../types";

export const LEETCODE_LRU_CACHE: QuizQuestion[] = [
  {
    id: "leetcode-lru-cache-1",
    post: "leetcode-lru-cache",
    question: "LRU 캐시의 순서를 단일 연결 리스트가 아니라 이중 연결 리스트로 드는 이유는?",
    choices: [
      "노드를 빼려면 앞 노드를 고쳐야 하는데, prev가 있어야 앞 노드로 O(1)에 가서",
      "노드 수가 두 배로 늘어나야 캐시 적중률이 높아져서",
      "해시맵이 이중 연결 리스트만 가리킬 수 있어서",
      "단일 연결 리스트에는 보초 노드를 둘 수 없어서",
    ],
    answer: 0,
    explanation:
      "중간 노드를 빼려면 앞 노드의 next를 바꿔야 한다. 단일 연결 리스트는 앞 노드를 찾으려고 머리부터 걸어야 해서 O(n)이다. 이중 연결 리스트는 prev로 바로 가고, 맨 뒤 노드도 tail.prev로 바로 찾는다.",
    anchor: "해시맵이-노드를-가리키고-노드가-줄을-선다",
  },
  {
    id: "leetcode-lru-cache-2",
    post: "leetcode-lru-cache",
    question: "버릴 노드를 리스트에서 뺐지만 Map에서 지우지 않았다. 용량 2에서 put(1,10), put(2,20), put(3,30) 뒤 get(1)의 결과는?",
    choices: ["`-1`", "`20`", "`10`", "`30`"],
    answer: 2,
    explanation:
      "리스트에서는 빠졌지만 해시맵이 아직 1의 노드를 들고 있어서 버린 값 10이 나온다. 해시맵 크기도 줄지 않아 메모리가 계속 는다. 노드에 키를 함께 넣어 두는 이유가 이 삭제 때문이다.",
    anchor: "버린-노드를-map에서-지우지-않으면",
  },
  {
    id: "leetcode-lru-cache-3",
    post: "leetcode-lru-cache",
    question: "자바스크립트 Map으로 LRU를 만들 때 put에서 이미 있는 키를 delete 없이 set만 하면 어떻게 되나?",
    choices: [
      "키가 두 개로 늘어난다",
      "값은 바뀌지만 순서는 그대로라, 방금 바꾼 키가 먼저 버려질 수 있다",
      "TypeError가 난다",
      "Map이 자동으로 그 키를 맨 뒤로 옮겨서 문제없다",
    ],
    answer: 1,
    explanation:
      "Map.set은 있는 키의 값만 바꾸고 넣은 순서는 바꾸지 않는다. 그래서 put(1,11)로 1을 썼는데도 1이 가장 오래된 키로 남아 다음 넘침에서 버려진다. 지우고 다시 넣어야 맨 뒤로 간다.",
    anchor: "넣은-순서를-기억하는-map을-빌려-쓰기",
  },
  {
    id: "leetcode-lru-cache-4",
    post: "leetcode-lru-cache",
    question: "용량 2에서 put(1,10), put(2,20) 뒤 put(2,25)를 할 때, 키가 있는지 보기 전에 넘침을 검사해 버리면 get(1)은?",
    choices: [
      "`10`, 정상이다",
      "`25`",
      "`20`",
      "`-1`, 크기가 늘지 않는데도 1이 버려졌다",
    ],
    answer: 3,
    explanation:
      "있는 키의 값을 바꾸는 경우는 크기가 늘지 않으니 버릴 필요가 없다. 넘침을 먼저 검사하면 가득 찬 상태라 가장 오래된 1을 버린다. 있는 키인지 먼저 보고 새 키일 때만 버린다.",
    anchor: "키가-있는지-보기-전에-버리면",
  },
  {
    id: "leetcode-lru-cache-5",
    post: "leetcode-lru-cache",
    question: "Redis가 정확한 LRU 대신 근사 LRU를 쓰는 이유로 맞는 것은?",
    choices: [
      "정확한 LRU는 적중률이 훨씬 낮아서",
      "키가 아주 많으면 키마다 포인터를 붙이고 읽을 때마다 리스트를 고치는 비용이 커서",
      "Redis는 해시맵을 쓰지 않아서",
      "근사 LRU만 TTL을 지원해서",
    ],
    answer: 1,
    explanation:
      "수천만 키에 앞뒤 포인터를 붙이면 메모리가 크게 들고, 읽기마다 리스트를 고쳐야 한다. 그래서 마지막 접근 시각만 두고 버릴 때 표본 몇 개 중 가장 오래된 것을 고른다. 시각을 적고 훑는 풀이에서 훑는 범위를 줄인 셈이다.",
    anchor: "키가-수천만-개라면",
  },
];
