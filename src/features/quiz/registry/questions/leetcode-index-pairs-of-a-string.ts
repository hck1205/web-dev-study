import type { QuizQuestion } from "../types";

export const LEETCODE_INDEX_PAIRS_OF_A_STRING: QuizQuestion[] = [
  {
    id: "leetcode-index-pairs-of-a-string-1",
    post: "leetcode-index-pairs-of-a-string",
    question: "text = \"aaaa\"에서 단어 aa를 찾을 때 다음 검색을 i + w.length부터 하면 무엇이 나오나?",
    choices: [
      "[[0,1],[1,2],[2,3]]",
      "[[0,1],[2,3]]",
      "[[0,1]]",
      "[[1,2]]",
    ],
    answer: 1,
    explanation:
      "단어 길이만큼 건너뛰면 0번에서 찾은 뒤 2번부터 찾아서 겹치는 [1,2]를 놓친다. 이 문제는 겹치는 등장도 모두 원하니 다음 검색을 i + 1부터 해야 [[0,1],[1,2],[2,3]]이 나온다.",
    anchor: "단어마다-indexof로-찾기",
  },
  {
    id: "leetcode-index-pairs-of-a-string-2",
    post: "leetcode-index-pairs-of-a-string",
    question: "JS에서 [[10, 11], [2, 3], [2, 2]]를 비교 함수 없이 sort()하면?",
    choices: [
      "[[2,2],[2,3],[10,11]]",
      "[[2,3],[2,2],[10,11]]",
      "[[10,11],[2,2],[2,3]]",
      "TypeError가 난다",
    ],
    answer: 2,
    explanation:
      "기본 sort는 원소를 문자열로 바꿔 비교해서 \"10,11\"이 \"2,2\"보다 앞에 온다. 위치가 두 자리가 되는 순간 순서가 틀어지니 a[0] - b[0] || a[1] - b[1] 같은 비교 함수를 준다. Python은 리스트를 원소별로 비교해서 기본 정렬이 바르게 나온다.",
    anchor: "기본-정렬은-배열을-글자로-비교한다",
  },
  {
    id: "leetcode-index-pairs-of-a-string-3",
    post: "leetcode-index-pairs-of-a-string",
    question: "트라이 풀이에서 결과를 따로 정렬하지 않아도 되는 이유는?",
    choices: [
      "트라이가 단어를 사전 순으로 저장해서",
      "시작 위치 i를 왼쪽부터, 끝 위치 j를 i부터 키우며 적어서 쌓이는 순서가 곧 정렬 순서라서",
      "끝 표시를 만나면 멈춰서 같은 i에서 하나만 나오기 때문에",
      "문제가 정렬을 요구하지 않아서",
    ],
    answer: 1,
    explanation:
      "바깥 루프가 i를 오름차순으로, 안쪽 루프가 j를 i부터 오름차순으로 돌며 그때그때 적는다. 그러니 i가 작은 순서, i가 같으면 j가 작은 순서가 저절로 맞는다. 아호-코라식은 끝 위치 순서로 나와서 다시 정렬해야 한다.",
    anchor: "시작-위치마다-트라이를-내려가기",
  },
  {
    id: "leetcode-index-pairs-of-a-string-4",
    post: "leetcode-index-pairs-of-a-string",
    question: "thecatsat, 단어 [cat, cats, at, the]에서 트라이를 내려가다 첫 끝 표시에서 멈추면 어떤 쌍이 빠지나?",
    choices: ["[4,5]", "[0,2]", "[7,8]", "[3,6]"],
    answer: 3,
    explanation:
      "3번에서 cat의 끝 표시를 만나 멈추면 같은 자리에서 시작하는 더 긴 cats([3,6])를 놓친다. at([4,5])은 시작 위치가 4라 따로 찾으니 빠지지 않는다. 가장 짧은 어근을 원하는 Replace Words와 달리 이 문제는 모든 단어를 원한다.",
    anchor: "멈추거나-건너뛰면-겹친-단어를-놓친다",
  },
  {
    id: "leetcode-index-pairs-of-a-string-5",
    post: "leetcode-index-pairs-of-a-string",
    question: "단어가 수천 개이고 텍스트가 100만 글자일 때 아호-코라식이 유리한 이유는?",
    choices: [
      "실패 링크 덕분에 막혀도 뿌리로 돌아가지 않아 텍스트를 정확히 한 번만 읽기 때문에",
      "단어를 해시맵에 넣어 O(1)에 찾기 때문에",
      "결과를 정렬할 필요가 없기 때문에",
      "트라이 노드를 만들지 않기 때문에",
    ],
    answer: 0,
    explanation:
      "트라이 풀이는 시작 위치마다 뿌리에서 다시 내려가 같은 글자를 여러 번 읽고, indexOf 풀이는 텍스트를 단어 수만큼 읽는다. 아호-코라식은 실패 링크로 지금까지 읽은 글자의 뒷부분으로 건너가서 텍스트를 한 번만 읽는다. 대신 결과가 끝 위치 순서라 다시 정렬하거나 버킷에 넣어야 한다.",
    anchor: "텍스트를-한-번만-훑는-아호-코라식",
  },
];
