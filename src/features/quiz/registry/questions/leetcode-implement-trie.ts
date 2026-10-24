import type { QuizQuestion } from "../types";

export const LEETCODE_IMPLEMENT_TRIE: QuizQuestion[] = [
  {
    id: "leetcode-implement-trie-1",
    post: "leetcode-implement-trie",
    question: "트라이에 car와 cat만 넣었다. search(\"ca\")와 startsWith(\"ca\")는 각각 무엇을 돌려주나?",
    choices: ["true, true", "false, false", "false, true", "true, false"],
    answer: 2,
    explanation:
      "c, a까지 내려가는 길은 있으니 startsWith는 true다. 하지만 a 노드에는 끝 표시가 없어서 search는 false다. 접두사로 있다는 건 노드가 있다는 뜻이고, 단어로 있다는 건 그 노드에 끝 표시가 있다는 뜻이다.",
    anchor: "글자마다-갈림길을-만든다",
  },
  {
    id: "leetcode-implement-trie-2",
    post: "leetcode-implement-trie",
    question: "넣을 때 모든 접두사를 Set에 함께 넣는 풀이에서 insert가 O(L²)이 되는 이유는?",
    choices: [
      "Set에 값을 넣을 때마다 전체를 다시 해시해서",
      "길이 1부터 L까지의 접두사 문자열을 새로 만들고 각각 해시해서",
      "같은 접두사가 있는지 Set 전체를 훑어서",
      "단어를 넣기 전에 정렬해야 해서",
    ],
    answer: 1,
    explanation:
      "길이 1, 2, ..., L짜리 문자열을 만들고 해시하니 1 + 2 + ... + L, 즉 O(L²)이다. 트라이는 같은 접두사를 노드 하나로 나눠 쓰므로 insert가 O(L)이다. Set이 매번 전체를 다시 해시하지는 않는다.",
    anchor: "접두사까지-전부-집합에-넣어-두면",
  },
  {
    id: "leetcode-implement-trie-3",
    post: "leetcode-implement-trie",
    question: "정렬된 단어 배열에서 startsWith(prefix)를 lowerBound(prefix) 자리의 단어 하나만 보고 판단해도 되는 이유는?",
    choices: [
      "prefix로 시작하는 단어가 있다면 prefix 이상인 첫 단어가 반드시 그중 하나라서",
      "이진 탐색은 항상 정확히 prefix와 같은 단어를 찾아서",
      "prefix로 시작하는 단어는 배열 맨 앞에 모여 있어서",
      "lowerBound가 prefix로 시작하는 마지막 단어를 돌려줘서",
    ],
    answer: 0,
    explanation:
      "prefix로 시작하는 단어는 모두 prefix보다 크거나 같고, prefix 이상이면서 prefix로 시작하지 않는 단어는 그 뒤에 온다. 그래서 prefix 이상인 첫 단어만 확인하면 된다. lowerBound는 첫 위치를 돌려주지 마지막 위치를 돌려주지 않는다.",
    anchor: "정렬해-두고-이진-탐색으로-찾기",
  },
  {
    id: "leetcode-implement-trie-4",
    post: "leetcode-implement-trie",
    question: "무작위 소문자 8글자 단어 2만 개를 넣었더니 26칸 배열 트라이가 Map 트라이보다 메모리를 더 썼다. 가장 큰 이유는?",
    choices: [
      "배열 트라이가 노드를 더 많이 만들어서",
      "Map은 값을 압축해 저장해서",
      "배열은 null을 객체로 저장해서",
      "깊은 노드는 자식이 0~1개인데도 26칸을 모두 들고 있어서",
    ],
    answer: 3,
    explanation:
      "노드 수는 서로 다른 접두사 수라서 두 트라이가 같다. 차이는 노드마다 붙는 자식 저장소인데, 배열은 자식 수와 상관없이 26칸을 들고 깊은 노드일수록 대부분 비어 있다. 그래서 속도는 배열이 빠르지만 메모리는 Map이 낫다.",
    anchor: "메모리를-재-보면",
  },
  {
    id: "leetcode-implement-trie-5",
    post: "leetcode-implement-trie",
    question: "Python에서 노드 생성자를 def __init__(self, children={})로 썼다. ab만 넣은 뒤 startsWith(\"bbbb\")는 어떻게 되나?",
    choices: [
      "False. b로 시작하는 단어를 넣은 적이 없다",
      "True. 모든 노드가 같은 딕셔너리를 자식으로 나눠 써서 어디서든 b로 내려갈 수 있다",
      "TypeError가 난다",
      "False지만 search(\"ab\")도 False가 된다",
    ],
    answer: 1,
    explanation:
      "파이썬 기본 인자는 함수가 정의될 때 한 번만 만들어진다. 그래서 뿌리와 모든 노드가 같은 딕셔너리를 들고, ab를 넣으면 그 딕셔너리에 a와 b가 생겨 어느 노드에서든 다시 내려갈 수 있다. 기본값을 None으로 두고 안에서 새 딕셔너리를 만들어야 한다.",
    anchor: "끝-표시와-길-끊김에서-틀린다",
  },
];
