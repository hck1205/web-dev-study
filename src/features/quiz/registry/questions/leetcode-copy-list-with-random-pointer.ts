import type { QuizQuestion } from "../types";

export const LEETCODE_COPY_LIST_WITH_RANDOM_POINTER: QuizQuestion[] = [
  {
    id: "leetcode-copy-list-with-random-pointer-1",
    post: "leetcode-copy-list-with-random-pointer",
    question: "해시맵 풀이에서 장부의 키로 노드의 값 대신 노드 객체 자체를 써야 하는 이유는?",
    choices: [
      "값을 키로 쓰면 해시맵이 느려져서",
      "값이 음수일 수 있어서",
      "값이 같은 노드가 여러 개면 서로 다른 노드가 한 칸에 겹쳐서",
      "노드 객체를 키로 쓰면 random을 따로 저장할 필요가 없어서",
    ],
    answer: 2,
    explanation:
      "값은 중복될 수 있지만 노드 자체는 하나뿐이다. 값이 모두 3인 리스트를 값으로 장부에 적으면 노드가 하나만 남아 복사본이 노드 하나짜리가 된다. 찾는 기준은 노드의 주소여야 한다.",
    anchor: "복사본의-random이-갈-곳을-모른다",
  },
  {
    id: "leetcode-copy-list-with-random-pointer-2",
    post: "leetcode-copy-list-with-random-pointer",
    question: "원본 노드마다 바로 뒤에 복사본을 끼워 넣은 뒤, 복사본 `X'`의 random은 어떻게 정하나?",
    choices: [
      "`X'.random = X.random.next`",
      "`X'.random = X.random`",
      "`X'.random = X.next.random`",
      "`X'.random = X.random.next.next`",
    ],
    answer: 0,
    explanation:
      "끼우고 나면 어떤 원본 Y의 복사본은 언제나 Y.next다. X가 Y를 가리키면 X'은 Y'을 가리켜야 하니 X.random.next다. X.random을 그대로 쓰면 복사본이 원본 노드를 가리킨다.",
    anchor: "원본-바로-뒤에-복사본을-끼워-넣기",
  },
  {
    id: "leetcode-copy-list-with-random-pointer-3",
    post: "leetcode-copy-list-with-random-pointer",
    question: "끼워 넣기 풀이에서 random 잇기와 떼어 내기를 반복문 하나로 합치면 어떻게 되나?",
    choices: [
      "더 빨라질 뿐 결과는 같다",
      "앞쪽 노드를 가리키는 random이 있으면 복사본이 원본 노드를 가리키게 된다",
      "빈 리스트에서만 틀린다",
      "원본 리스트가 되돌아오지 않는다",
    ],
    answer: 1,
    explanation:
      "이미 떼어 낸 원본은 next가 다시 원본을 가리킨다. 그래서 X.random.next가 복사본이 아니라 원본 노드가 된다. 모든 원본 뒤에 복사본이 붙어 있을 때 random을 먼저 다 이어야 한다.",
    anchor: "random-잇기와-떼어-내기를-한-번에-돌면",
  },
  {
    id: "leetcode-copy-list-with-random-pointer-4",
    post: "leetcode-copy-list-with-random-pointer",
    question: "재귀 DFS 풀이를 Python으로 제출하면 이 문제의 최대 입력(노드 1000개)에서 어떻게 되나?",
    choices: [
      "정상으로 통과한다",
      "시간 초과가 난다",
      "장부가 가득 차서 KeyError가 난다",
      "기본 재귀 한도 1000에 걸려 RecursionError가 난다",
    ],
    answer: 3,
    explanation:
      "next를 따라 재귀가 끝까지 내려가서 깊이가 노드 수만큼 된다. 직접 돌려 보니 900개는 됐고 1000개에서 RecursionError가 났다. 그래서 Python에서는 반복 풀이를 쓴다.",
    anchor: "재귀로-따라가며-복사하기",
  },
  {
    id: "leetcode-copy-list-with-random-pointer-5",
    post: "leetcode-copy-list-with-random-pointer",
    question: "그래프를 복사하는 Clone Graph에 끼워 넣기 풀이를 쓸 수 없는 이유는?",
    choices: [
      "그래프에는 고리가 있어서",
      "그래프 노드는 값이 중복되어서",
      "그래프에는 복사본을 둘 '바로 뒤'라는 자리가 없어서",
      "그래프는 해시맵으로도 복사할 수 없어서",
    ],
    answer: 2,
    explanation:
      "끼워 넣기는 리스트의 순서를 장부 대신 쓴다. X의 복사본이 X.next라는 약속이 있어야 하는데, 이웃이 여러 개인 그래프에는 그런 자리가 없다. 그래서 그래프 복사는 해시맵 장부가 일반적인 답이다.",
    anchor: "그래프를-복사하라면",
  },
];
