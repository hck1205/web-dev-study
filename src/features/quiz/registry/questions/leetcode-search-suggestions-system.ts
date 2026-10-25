import type { QuizQuestion } from "../types";

export const LEETCODE_SEARCH_SUGGESTIONS_SYSTEM: QuizQuestion[] = [
  {
    id: "leetcode-search-suggestions-system-1",
    post: "leetcode-search-suggestions-system",
    question: "상품을 사전 순으로 정렬하면 이진 탐색이나 투 포인터를 쓸 수 있는 이유는?",
    choices: [
      "정렬하면 상품 수가 줄어서",
      "같은 앞부분으로 시작하는 상품이 한 덩어리로 붙고, 앞부분이 길어지면 덩어리가 그 안에서 좁아지기만 해서",
      "정렬하면 상품 이름이 모두 같은 길이가 되어서",
      "정렬하면 맞는 상품이 항상 배열 맨 앞에 와서",
    ],
    answer: 1,
    explanation:
      "앞부분 p로 시작하는 문자열은 모두 p 이상이고 연달아 붙어 있어서, 덩어리는 p 이상인 첫 위치에서 시작한다. 글자가 하나 늘면 새 덩어리는 이전 덩어리 안에 있으니 양 끝을 안쪽으로만 밀면 된다. 맨 앞에 오는 건 덩어리의 시작이지 배열의 시작이 아니다.",
    anchor: "덩어리를-양쪽에서-좁혀-오기",
  },
  {
    id: "leetcode-search-suggestions-system-2",
    post: "leetcode-search-suggestions-system",
    question: "노드마다 top 3을 적는 트라이에 상품을 입력 순서 [bake, bat, ball, band, bar, cab]대로 넣으면 b 노드의 목록은?",
    choices: ["[bake, ball, band]", "[bake, bat, ball]", "[bar, bat, cab]", "[ball, band, bake]"],
    answer: 1,
    explanation:
      "top에는 먼저 도착한 세 개가 들어가서 입력 순서대로 bake, bat, ball이 자리를 차지한다. 사전 순 앞의 세 개는 bake, ball, band라 틀린 답이다. 상품을 먼저 정렬해서 넣어야 먼저 도착한 세 개가 사전 순 앞의 세 개가 된다.",
    anchor: "정렬을-빼먹거나-끊긴-노드를-계속-따라가면",
  },
  {
    id: "leetcode-search-suggestions-system-3",
    post: "leetcode-search-suggestions-system",
    question: "이진 탐색 풀이에서 lower bound 위치부터 세 칸을 startsWith 확인 없이 자르면 bar에 무엇이 나오나?",
    choices: ["[bar]", "[]", "[bar, bat, cab]", "[band, bar, bat]"],
    answer: 2,
    explanation:
      "bar 이상인 첫 위치는 bar 자신이고 그 뒤로 bat, cab이 이어진다. 덩어리가 한 칸뿐인데 세 칸을 그대로 자르면 덩어리 밖의 상품이 섞인다. 칸마다 startsWith로 확인하고 맞지 않으면 멈춘다.",
    anchor: "덩어리의-시작을-이진-탐색으로-찾기",
  },
  {
    id: "leetcode-search-suggestions-system-4",
    post: "leetcode-search-suggestions-system",
    question: "검색어 하나만 처리하는 이 문제에서 상품 10만 개로 재 보면 트라이 풀이가 정렬 + 투 포인터보다 느렸다. 이유는?",
    choices: [
      "트라이는 검색할 때 글자마다 상품 전체를 훑기 때문에",
      "트라이의 시간 복잡도가 O(n²)이라서",
      "트라이는 사전 순을 보장하지 못해 다시 정렬하기 때문에",
      "노드 수십만 개를 만드는 비용이 커서, 검색 몇십 번으로는 그 비용이 돌아오지 않기 때문에",
    ],
    answer: 3,
    explanation:
      "트라이를 만드는 데 250ms 넘게 들었고, 검색은 글자 하나에 노드 한 칸이라 빠르지만 검색어가 하나뿐이면 만든 비용을 회수하지 못한다. 트라이를 한 번 만들고 검색을 끝없이 받는 자동완성 서비스에서는 반대로 트라이가 유리하다.",
    anchor: "문제에서는-정렬이-서비스에서는-트라이가-이긴다",
  },
  {
    id: "leetcode-search-suggestions-system-5",
    post: "leetcode-search-suggestions-system",
    question: "추천을 사전 순이 아니라 검색 횟수 순으로 바꾸라면 어떤 풀이가 그대로 넓혀지나?",
    choices: [
      "노드마다 상위 k개를 적어 두는 트라이. 점수 순으로 넣으면 된다",
      "정렬 + 투 포인터. 덩어리 맨 앞이 점수 순 상위다",
      "정렬 + 이진 탐색. lower bound가 점수가 가장 높은 상품을 가리킨다",
      "어떤 풀이도 넓힐 수 없다",
    ],
    answer: 0,
    explanation:
      "정렬된 배열의 덩어리 안 순서는 사전 순이라 점수 순 상위를 줄 수 없다. 트라이는 상품을 점수 순으로 정렬해서 넣기만 바꾸면 노드마다 점수 순 상위 k개가 적힌다. 실제 자동완성 서비스가 이 구조를 쓰는 이유다.",
    anchor: "점수-순이거나-한글이-섞이면",
  },
];
