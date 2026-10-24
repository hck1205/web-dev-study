import type { QuizQuestion } from "../types";

export const LEETCODE_DESIGN_ADD_AND_SEARCH_WORDS: QuizQuestion[] = [
  {
    id: "leetcode-design-add-and-search-words-1",
    post: "leetcode-design-add-and-search-words",
    question: "bad, bit, mad를 넣은 사전에서 search(\"m.\")은 무엇을 돌려주나?",
    choices: [
      "true. mad가 m으로 시작한다",
      "true. 점은 아무 문자열과 맞는다",
      "false. 점은 글자 하나라서 두 글자 단어만 찾는데, 두 글자 단어가 없다",
      "에러가 난다",
    ],
    answer: 2,
    explanation:
      "점은 정확히 글자 하나와 맞으니 m.은 두 글자 단어를 찾는다. 넣은 단어는 모두 세 글자라서 false다. mad가 m으로 시작한다는 건 접두사 이야기이고 이 검색과는 상관없다.",
    anchor: "점은-아무-글자-하나",
  },
  {
    id: "leetcode-design-add-and-search-words-2",
    post: "leetcode-design-add-and-search-words",
    question: "트라이 DFS에서 점을 만났을 때 `if (child !== null) return dfs(child, i + 1);`로 짰다. bad와 bit를 넣고 ..t를 찾으면?",
    choices: [
      "true. bit가 맞는다",
      "false. 첫 자식 a 갈래가 막힌 결과를 그대로 돌려줘서 i 갈래를 보지 않는다",
      "무한 루프에 빠진다",
      "true지만 모든 갈래를 다 탐색한다",
    ],
    answer: 1,
    explanation:
      "b 아래 첫 자식 a로 내려갔다가 t가 없어 false를 받고, 그 false를 그대로 돌려준다. 다음 자식 i는 시도하지 않는다. true일 때만 일찍 돌아오고 false면 다음 자식으로 넘어가야 한다.",
    anchor: "첫-갈래만-보고-돌아오는-실수",
  },
  {
    id: "leetcode-design-add-and-search-words-3",
    post: "leetcode-design-add-and-search-words",
    question: "점을 미리 찍어 둔 패턴을 집합에 넣는 풀이가 이 문제에서 가능한 이유는?",
    choices: [
      "단어 길이가 25 이하라서",
      "넣는 단어에도 점이 들어올 수 있어서",
      "해시 집합이 점을 와일드카드로 해석해서",
      "검색어의 점이 최대 2개라 단어 하나에서 나오는 패턴 수가 1 + L + L(L-1)/2개로 묶여서",
    ],
    answer: 3,
    explanation:
      "점이 최대 2개라서 길이 L 단어 하나가 만드는 패턴이 L의 제곱 수준으로 묶인다. 길이 25면 326개다. 점 개수 제한이 없으면 패턴이 2^L개로 늘어나 쓸 수 없다.",
    anchor: "점을-미리-찍어-두면-검색이-한-번에-끝난다",
  },
  {
    id: "leetcode-design-add-and-search-words-4",
    post: "leetcode-design-add-and-search-words",
    question: "점 개수와 상관없이 트라이 DFS 한 번의 search가 트라이 노드 수 N을 넘겨 밟지 않는 이유는?",
    choices: [
      "트라이에서 각 노드로 가는 길은 하나뿐이라 한 번의 검색이 같은 노드를 두 번 밟지 않아서",
      "방문한 노드를 Set에 기록해서",
      "점이 나오면 자식을 하나만 고르기 때문에",
      "재귀 깊이가 26으로 제한되어서",
    ],
    answer: 0,
    explanation:
      "트라이는 나무라서 뿌리에서 어떤 노드로 가는 길이 하나다. 검색어의 i번째 글자는 깊이 i 노드에서만 다루니, 같은 노드를 두 번 밟을 일이 없다. 그래서 최악은 O(min(N, 26^k · L))이다.",
    anchor: "트라이에서-점을-만나면-갈래를-전부-시도한다",
  },
  {
    id: "leetcode-design-add-and-search-words-5",
    post: "leetcode-design-add-and-search-words",
    question: "같은 트라이에서 재귀 DFS 대신 층별 노드 목록(BFS)으로 검색했더니 더 느렸다. 주된 이유는?",
    choices: [
      "BFS는 같은 노드를 여러 번 밟아서",
      "층을 통째로 만든 뒤에 넘어가서, 답이 true인 검색에서도 갈래를 일찍 멈추지 못해서",
      "BFS는 끝 표시를 확인할 수 없어서",
      "배열을 만드는 데 O(n²)이 걸려서",
    ],
    answer: 1,
    explanation:
      "DFS는 맞는 단어를 하나 찾는 순간 true를 올려 보내 나머지 갈래를 건너뛴다. BFS는 한 층의 노드를 전부 모은 뒤 다음 글자로 가서 그런 일찍 멈추기가 없다. 밟는 노드 수의 상한은 둘이 같다.",
    anchor: "재귀-없이-한-글자씩-넓혀-가기",
  },
];
