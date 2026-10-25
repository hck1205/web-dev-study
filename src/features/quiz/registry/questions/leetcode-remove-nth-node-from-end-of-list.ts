import type { QuizQuestion } from "../types";

export const LEETCODE_REMOVE_NTH_NODE_FROM_END_OF_LIST: QuizQuestion[] = [
  {
    id: "leetcode-remove-nth-node-from-end-of-list-1",
    post: "leetcode-remove-nth-node-from-end-of-list",
    question: "두 포인터 풀이에서 앞 포인터를 n칸이 아니라 n+1칸 앞세우는 이유는?",
    choices: [
      "리스트 길이를 함께 세려고",
      "뒤 포인터가 지울 노드의 바로 앞 노드에 멈추게 하려고",
      "더미 노드를 건너뛰려고",
      "n이 길이보다 클 때 오류를 피하려고",
    ],
    answer: 1,
    explanation:
      "단일 연결 리스트에서 노드를 빼려면 그 앞 노드가 next를 건너뛰게 해야 한다. 간격이 n이면 뒤 포인터가 지울 노드 자체에 서고, 앞 노드로 돌아갈 수 없다. 간격을 n+1로 벌려야 앞 노드에 선다.",
    anchor: "간격을-n1칸으로-벌린-두-포인터",
  },
  {
    id: "leetcode-remove-nth-node-from-end-of-list-2",
    post: "leetcode-remove-nth-node-from-end-of-list",
    question:
      "더미에서 출발하면서 실수로 앞 포인터를 n칸만 앞세우고 `while (fast)`로 함께 걸었다. `[1,2,3,4,5,6]`, `n = 2`의 결과는?",
    choices: [
      "`[1, 2, 3, 4, 6]`으로 정답이다",
      "`[1, 2, 3, 5, 6]`이 된다",
      "`[1, 2, 3, 4, 5]`가 되어 6이 지워진다",
      "`TypeError`가 난다",
    ],
    answer: 2,
    explanation:
      "간격이 n이면 앞 포인터가 null일 때 뒤 포인터는 끝에서 2번째인 5에 선다. 그 상태로 5의 next를 건너뛰니 6이 빠진다. 같은 코드로 꼬리를 지우면 뒤 포인터가 꼬리에 서서 null.next를 읽다가 터진다.",
    anchor: "간격을-n칸만-벌리면",
  },
  {
    id: "leetcode-remove-nth-node-from-end-of-list-3",
    post: "leetcode-remove-nth-node-from-end-of-list",
    question: "더미 노드를 만들어 머리를 지운 뒤 `dummy.next` 대신 `head`를 돌려주면 `[7]`, `n = 1`의 결과는?",
    choices: [
      "`[]`로 정답이다",
      "`[7]`이 나온다",
      "`null`을 읽다가 오류가 난다",
      "더미 노드의 값 `0`이 나온다",
    ],
    answer: 1,
    explanation:
      "더미가 7을 건너뛰어 null을 가리키게 됐지만 노드 7 자체는 그대로다. head는 여전히 7을 가리키니 지워진 노드부터 다시 읽게 된다. 머리가 바뀔 수 있는 문제에서는 dummy.next를 돌려줘야 한다.",
    anchor: "더미를-만들고-head를-돌려주면",
  },
  {
    id: "leetcode-remove-nth-node-from-end-of-list-4",
    post: "leetcode-remove-nth-node-from-end-of-list",
    question: "길이 L인 리스트에서 두 번 훑기와 n+1 간격 두 포인터를 비교한 설명으로 맞는 것은?",
    choices: [
      "두 포인터가 노드를 절반만 방문해서 두 배 빠르다",
      "두 포인터는 공간 O(n)이 필요하다",
      "두 번 훑기는 시간 O(L²)이다",
      "포인터를 옮기는 횟수는 거의 같고, 두 포인터는 처음으로 되감지 않는다는 점이 다르다",
    ],
    answer: 3,
    explanation:
      "두 번 훑기는 2L-n번, 두 포인터는 2L-n+1번 포인터를 옮긴다. 둘 다 O(L) 시간, O(1) 공간이다. 두 포인터를 한 번 훑기라고 부르는 건 다시 머리로 돌아가지 않기 때문이다.",
    anchor: "정말-한-번만-훑은-걸까",
  },
  {
    id: "leetcode-remove-nth-node-from-end-of-list-5",
    post: "leetcode-remove-nth-node-from-end-of-list",
    question: "스택 풀이에서 더미부터 모든 노드를 쌓고 n개를 꺼냈다. 스택 맨 위에 남은 노드는?",
    choices: [
      "끝에서 n+1번째 노드, 지울 노드의 바로 앞 노드",
      "지울 노드 자체",
      "리스트의 꼬리",
      "항상 더미 노드",
    ],
    answer: 0,
    explanation:
      "위에서 꺼낸 n개가 끝에서 1번째부터 n번째까지다. 그래서 남은 맨 위는 끝에서 n+1번째, 곧 앞 노드다. 머리를 지울 때는 그 자리에 더미가 남아서 분기 없이 처리된다.",
    anchor: "스택에서-n개를-꺼내면-맨-위가-앞-노드다",
  },
];
