import type { QuizQuestion } from "../types";

export const LEETCODE_PALINDROME_PAIRS: QuizQuestion[] = [
  {
    id: "leetcode-palindrome-pairs-1",
    post: "leetcode-palindrome-pairs",
    question: "A + B가 회문이고 A가 B보다 길다. A를 어떻게 자를 수 있나?",
    choices: [
      "A = B + 회문",
      "A = 뒤집은 B + 회문",
      "A = 회문 + 뒤집은 B",
      "A = 뒤집은 B + 뒤집은 B",
    ],
    answer: 1,
    explanation:
      "회문은 양 끝이 거울처럼 맞아야 하니 A의 앞부분이 B를 뒤집은 것이고, 가운데 남는 A의 나머지는 그 자체로 회문이어야 한다. race + car에서 race = rac + e인 것과 같다. 이 관찰 덕분에 쌍을 찾는 문제가 뒤집은 단어를 찾는 문제로 바뀐다.",
    anchor: "회문을-가운데에서-쪼개-보면",
  },
  {
    id: "leetcode-palindrome-pairs-2",
    post: "leetcode-palindrome-pairs",
    question: "해시맵 풀이에서 두 번째 확인의 cut < w.length 조건을 빼면 [ab, ba]에서 무엇이 나오나?",
    choices: [
      "[[0,1],[1,0]]",
      "[[0,1]]",
      "[[1,0],[0,1],[0,1],[1,0]]",
      "[]",
    ],
    answer: 2,
    explanation:
      "w의 끝 자르기(오른쪽이 빈 문자열)와 뒤집은 단어 v의 처음 자르기(왼쪽이 빈 문자열)가 같은 쌍을 만든다. 그래서 서로 뒤집은 쌍이 두 번씩 들어간다. 빈 조각을 한쪽 확인에서만 허락하면 한 번만 센다.",
    anchor: "두-번-세지-않으려면-한쪽-끝을-뺀다",
  },
  {
    id: "leetcode-palindrome-pairs-3",
    post: "leetcode-palindrome-pairs",
    question: "j !== i 확인을 빼먹으면 [aba, x]에서 어떻게 되나?",
    choices: [
      "회문 단어는 뒤집어도 자기라 [0, 0], [1, 1]이 잘못 들어간다",
      "아무 문제가 없다. 단어가 서로 달라서 자기를 찾지 않는다",
      "aba와 x가 짝이 되어 [0, 1]이 들어간다",
      "해시맵에서 키가 겹쳐 aba가 사라진다",
    ],
    answer: 0,
    explanation:
      "aba와 x는 모두 회문이라 뒤집은 단어가 자기 자신이고, 해시맵에서 자기 위치를 찾는다. 문제는 서로 다른 두 단어를 원하니 같은 위치는 빼야 한다. 정답은 빈 배열이다.",
    anchor: "자기-자신과-짝짓거나-통째로만-뒤집으면-틀린다",
  },
  {
    id: "leetcode-palindrome-pairs-4",
    post: "leetcode-palindrome-pairs",
    question: "뒤집은 단어의 트라이에서 노드마다 pal 목록을 미리 적어 두는 이유는?",
    choices: [
      "트라이에서 끝 표시를 없애려고",
      "w를 다 읽은 뒤 아래 가지를 DFS로 매번 뒤지지 않고, 남은 부분이 회문인 단어를 바로 읽으려고",
      "중복 단어를 걸러 내려고",
      "트라이의 메모리를 줄이려고",
    ],
    answer: 1,
    explanation:
      "w가 짧은 쪽인 짝은 w를 다 읽은 노드 아래에서 남은 부분이 회문인 단어들이다. 이 목록은 w와 상관없이 노드마다 정해져 있어서, 트라이를 만들 때 한 번만 계산해 두면 찾을 때 DFS가 필요 없다. 메모리는 오히려 더 든다.",
    anchor: "남은-부분이-회문인-단어를-노드에-미리-적어-두기",
  },
  {
    id: "leetcode-palindrome-pairs-5",
    post: "leetcode-palindrome-pairs",
    question: "복잡도가 같은 O(n·k²)인데 재 보면 해시맵 풀이가 pal 목록 트라이보다 빨랐다. 이유로 맞는 것은?",
    choices: [
      "해시맵은 충돌이 없어서 트라이보다 늘 빠르다",
      "트라이는 회문 확인을 두 번씩 하기 때문에 복잡도가 실제로 더 크다",
      "Node.js가 Map을 특별히 최적화해서이고 Python에서는 반대다",
      "트라이는 노드 수십만 개와 목록을 만드는 비용이 크고, 해시맵은 회문인 조각에서만 부분 문자열을 만들어 실제 일이 적다",
    ],
    answer: 3,
    explanation:
      "길이 300까지인 무작위 단어 5,000개면 트라이 노드가 약 75만 개이고 노드마다 객체가 셋이다. 해시맵은 단어 5,000개만 넣고, 회문이 아닌 조각에서는 isPal이 바로 끝나 묻지도 않는다. Python에서도 해시맵이 347ms, 트라이가 1,424ms로 같은 순서였다.",
    anchor: "트라이가-해시맵보다-느린-이유",
  },
];
