import type { QuizQuestion } from "../types";

export const LEETCODE_REVERSE_NODES_IN_K_GROUP: QuizQuestion[] = [
  {
    id: "leetcode-reverse-nodes-in-k-group-1",
    post: "leetcode-reverse-nodes-in-k-group",
    question: "O(1) 풀이에서 묶음 안을 뒤집을 때 `prev`를 `null`이 아니라 `groupNext`로 시작하는 이유는?",
    choices: [
      "뒤집기가 더 빨라져서",
      "뒤집힌 묶음의 끝(원래 첫 노드)이 곧바로 다음 묶음을 가리키게 하려고",
      "k개가 남았는지 확인하려고",
      "더미 노드를 건너뛰려고",
    ],
    answer: 1,
    explanation:
      "원래 첫 노드가 뒤집히며 prev를 가리키게 되는데, prev가 groupNext면 그 자리에서 뒤쪽 이음매가 맞는다. null로 시작하면 리스트가 첫 묶음에서 끊겨 [3, 2, 1]만 남는다.",
    anchor: "그룹을-뒤집고-이음매를-다시-잇는다",
  },
  {
    id: "leetcode-reverse-nodes-in-k-group-2",
    post: "leetcode-reverse-nodes-in-k-group",
    question: "묶음을 뒤집은 뒤 다음 묶음의 앞 노드(`groupPrev`)로 옮겨야 하는 노드는?",
    choices: [
      "`kth`, 뒤집기 전 묶음의 k번째 노드",
      "`groupNext`, 묶음 바로 뒤 노드",
      "`first`, 뒤집기 전 묶음의 첫 노드",
      "항상 더미 노드",
    ],
    answer: 2,
    explanation:
      "뒤집으면 원래 첫 노드가 묶음의 끝이 되니 다음 묶음의 바로 앞이다. kth는 뒤집은 뒤 묶음의 머리라서, kth로 옮기면 이미 뒤집은 노드를 다시 묶어 순서가 엉킨다.",
    anchor: "다음-묶음의-앞-노드를-kth로-옮기면",
  },
  {
    id: "leetcode-reverse-nodes-in-k-group-3",
    post: "leetcode-reverse-nodes-in-k-group",
    question: "k개가 남았는지 확인하지 않고 끝까지 뒤집는 코드에 `[1,2,3,4,5,6,7,8]`, `k = 3`을 넣으면?",
    choices: [
      "`[3, 2, 1, 6, 5, 4, 7, 8]`로 정답이다",
      "`[3, 2, 1, 6, 5, 4, 8, 7]`이 되어 남은 묶음까지 뒤집힌다",
      "`[3, 2, 1]`만 남는다",
      "무한 루프에 빠진다",
    ],
    answer: 1,
    explanation:
      "마지막 7, 8도 묶음으로 보고 뒤집는다. 남은 노드가 하나인 입력에서는 뒤집어도 같아서 실수가 드러나지 않는다. 뒤집기 전에 k칸 걸어 null을 만나는지 먼저 본다.",
    anchor: "남은-노드-수를-확인하지-않으면",
  },
  {
    id: "leetcode-reverse-nodes-in-k-group-4",
    post: "leetcode-reverse-nodes-in-k-group",
    question: "첫 묶음을 뒤집고 나머지를 재귀로 처리하는 풀이를 Python으로 `k = 1`, 노드 5000개에 돌리면?",
    choices: [
      "기본 재귀 한도 1000에 걸려 RecursionError가 난다",
      "콜 스택이 묶음 수가 아니라 k만큼만 쌓여 문제없다",
      "시간 초과가 난다",
      "결과가 거꾸로 나온다",
    ],
    answer: 0,
    explanation:
      "재귀 깊이는 묶음 수 n/k다. k = 1이면 노드 수만큼 깊어져 Python 기본 한도를 넘는다. 직접 돌려 보니 900개는 됐고 5000개에서 RecursionError가 났다.",
    anchor: "첫-묶음만-뒤집고-나머지는-재귀에-맡기기",
  },
  {
    id: "leetcode-reverse-nodes-in-k-group-5",
    post: "leetcode-reverse-nodes-in-k-group",
    question: "'그룹 앞으로 끼워 넣기' 풀이에서 묶음의 첫 노드 `cur`가 하는 역할은?",
    choices: [
      "매번 묶음 맨 앞으로 옮겨진다",
      "옮길 때마다 새 노드로 바뀐다",
      "다른 묶음의 머리를 가리킨다",
      "움직이지 않고 묶음의 끝에 남아, next가 다음에 옮길 노드를 가리킨다",
    ],
    answer: 3,
    explanation:
      "cur 바로 뒤 노드를 떼어 묶음 맨 앞에 끼우는 일을 k-1번 하면 cur는 자연스럽게 묶음 끝에 남는다. 다 옮기고 나면 cur.next가 다음 묶음의 첫 노드라서 이음매가 저절로 맞고, 다음 묶음의 앞 노드도 cur다.",
    anchor: "그룹-앞으로-하나씩-끼워-넣기",
  },
];
