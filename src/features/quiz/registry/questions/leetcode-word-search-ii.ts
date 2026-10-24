import type { QuizQuestion } from "../types";

export const LEETCODE_WORD_SEARCH_II: QuizQuestion[] = [
  {
    id: "leetcode-word-search-ii-1",
    post: "leetcode-word-search-ii",
    question: "판은 거의 a이고 단어가 모두 aaaaaaa로 시작하는 1만 3천 개일 때, 단어마다 Word Search를 돌리는 풀이가 특히 느린 이유는?",
    choices: [
      "판에 a가 너무 많아 출발 칸을 찾는 데 오래 걸려서",
      "같은 aaaaaaa 길을 단어 수만큼 다시 걸어서",
      "단어가 길어서 재귀 깊이가 깊어져서",
      "같은 칸을 두 번 밟아서",
    ],
    answer: 1,
    explanation:
      "단어마다 따로 찾으면 앞부분이 같은 단어들이 같은 길을 단어 수만큼 반복해서 걷는다. 트라이로 묶으면 aaaaaaa 길은 한 번만 걷고 끝에서만 갈라진다. 측정에서 100초 넘던 것이 40ms 안팎으로 줄었다.",
    anchor: "고약한-입력으로-재-보면",
  },
  {
    id: "leetcode-word-search-ii-2",
    post: "leetcode-word-search-ii",
    question: "트라이와 판 DFS를 함께 쓸 때, 판에서 한 칸 걸을 때마다 트라이에서는 무엇을 하나?",
    choices: [
      "트라이 뿌리에서 지금까지의 문자열을 다시 찾는다",
      "트라이 전체에서 그 글자가 있는 노드를 모두 찾는다",
      "지금 노드에서 그 글자의 자식으로 한 칸 내려가고, 자식이 없으면 돌아선다",
      "그 글자로 끝나는 단어를 모두 결과에 넣는다",
    ],
    answer: 2,
    explanation:
      "지금 트라이 노드가 곧 지금까지 밟은 글자들이라서, 한 걸음마다 자식 하나만 보면 된다. 자식이 없으면 그 길에서는 어떤 단어도 만들 수 없으니 바로 돌아선다. 접두사 집합처럼 걸음마다 문자열을 만들 필요가 없다.",
    anchor: "트라이를-판-위의-길과-함께-내려간다",
  },
  {
    id: "leetcode-word-search-ii-3",
    post: "leetcode-word-search-ii",
    question: "a와 b로만 된 판에서 길이 10짜리 a/b 단어 1,024개를 모두 찾는 입력에서, 가지치기 없는 트라이가 단어마다 찾는 풀이보다 느렸던 이유는?",
    choices: [
      "단어를 다 찾은 뒤에도 트라이에 가지가 남아 있어 모든 칸에서 모든 길을 끝까지 걸어서",
      "트라이를 만드는 데 O(W · L²)이 걸려서",
      "트라이가 b를 저장하지 못해서",
      "결과를 Set에 넣는 비용이 커서",
    ],
    answer: 0,
    explanation:
      "단어마다 찾기는 단어를 찾는 순간 멈추지만, 가지치기 없는 트라이는 찾은 단어의 가지를 계속 들고 있어 같은 길을 끝까지 다시 걷는다. 찾은 단어를 지우고 빈 가지를 잘라 내면 213ms가 9ms로 줄었다.",
    anchor: "찾은-단어는-트라이에서-떼어-낸다",
  },
  {
    id: "leetcode-word-search-ii-4",
    post: "leetcode-word-search-ii",
    question: "단어를 찾자마자 return하도록 짰다. 판 [[c,a,t],[x,x,s]]와 단어 [ca, cat, cats]이면 결과는?",
    choices: ["[ca, cat, cats]", "[cats]", "[]", "[ca]"],
    answer: 3,
    explanation:
      "ca를 찾고 돌아서 버려서 그 아래의 cat과 cats로 내려가지 않는다. 단어가 다른 단어의 접두사일 수 있으니 결과에 넣고 단어 표시만 지운 뒤 계속 내려가야 한다. 단어 하나만 찾는 Word Search I과 다른 점이다.",
    anchor: "같은-단어가-두-번-나오고-판이-망가진다",
  },
  {
    id: "leetcode-word-search-ii-5",
    post: "leetcode-word-search-ii",
    question: "트라이 + 판 DFS의 판 탐색 시간이 최악 O(m · n · 4 · 3^(L-1))인 이유로 맞는 것은?",
    choices: [
      "칸마다 단어 W개를 모두 확인해서",
      "첫 걸음은 네 방향, 그 뒤는 왔던 칸을 빼고 세 방향이라 길이 L 길이 칸마다 4 · 3^(L-1)개라서",
      "트라이 깊이가 26이라서",
      "가지치기가 최악을 3의 거듭제곱으로 줄여서",
    ],
    answer: 1,
    explanation:
      "한 칸에서 출발하는 길은 처음에 4방향, 그다음부터는 방금 온 칸을 빼고 3방향으로 갈라진다. 칸이 m · n개라 최악이 그 곱이다. 단어 수 W는 트라이를 만드는 O(W · L)에만 들어가고, 가지치기는 최악이 아니라 실제 걷는 길을 줄인다.",
    anchor: "판-하나에-단어-여러-개",
  },
];
