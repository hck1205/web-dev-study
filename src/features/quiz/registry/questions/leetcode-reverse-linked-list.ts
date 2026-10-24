import type { QuizQuestion } from "../types";

export const LEETCODE_REVERSE_LINKED_LIST: QuizQuestion[] = [
  {
    id: "leetcode-reverse-linked-list-1",
    post: "leetcode-reverse-linked-list",
    question:
      "반복 뒤집기에서 `const next = cur.next`를 빼고 `cur.next = prev; prev = cur; cur = cur.next;`로 썼다. `1→2→3`을 넣으면 결과는?",
    choices: ["`3→2→1`", "`1`", "빈 리스트", "무한 루프"],
    answer: 1,
    explanation:
      "첫 바퀴에서 1의 화살표가 `null`로 바뀐 뒤 `cur = cur.next`가 그 `null`을 따라가서 반복이 끝난다. 2와 3으로 가는 길이 사라지고 1만 남는다. 화살표를 돌리기 전에 다음 노드를 붙잡아 둬야 하는 이유다.",
    anchor: "화살표를-잃어버리는-실수들",
  },
  {
    id: "leetcode-reverse-linked-list-2",
    post: "leetcode-reverse-linked-list",
    question: "포인터 세 개로 뒤집는 반복 풀이에서 반복문이 끝난 뒤 돌려줘야 하는 값은?",
    choices: ["`cur`", "`head`", "`prev`", "`head.next`"],
    answer: 2,
    explanation:
      "반복문은 `cur`가 `null`이 될 때 끝나므로 `cur`를 돌려주면 항상 빈 리스트다. 그때 `prev`가 마지막으로 화살표를 돌린 노드, 즉 원래 꼬리이자 새 머리를 가리킨다. `head`는 원래 머리라서 이제 꼬리가 됐다.",
    anchor: "세-개의-손가락으로-제자리에서-뒤집기",
  },
  {
    id: "leetcode-reverse-linked-list-3",
    post: "leetcode-reverse-linked-list",
    question:
      "재귀 풀이에서 `head.next.next = head` 다음 줄의 `head.next = null`을 빼면 어떤 일이 생기나?",
    choices: [
      "결과가 그대로 맞는다. 다음 호출이 어차피 덮어쓴다",
      "원래 머리 노드가 사라진다",
      "콜 스택이 두 배로 깊어진다",
      "원래 머리와 두 번째 노드가 서로를 가리키는 고리가 남는다",
    ],
    answer: 3,
    explanation:
      "중간 노드들의 `next`는 위쪽 호출이 덮어쓰지만, 원래 머리 노드는 덮어써 줄 호출이 없다. 그래서 1은 여전히 2를 가리키고 2는 1을 가리켜 고리가 생긴다. 결과를 따라가면 `3→2→1→2→1…`처럼 끝나지 않는다.",
    anchor: "뒤에서부터-돌아오며-뒤집는-재귀",
  },
  {
    id: "leetcode-reverse-linked-list-4",
    post: "leetcode-reverse-linked-list",
    question:
      "`go(cur, prev)`처럼 재귀 호출을 함수의 마지막 동작으로 둔 꼬리 재귀 풀이를 Node.js에서 돌릴 때 공간 복잡도는?",
    choices: [
      "O(n). V8은 꼬리 호출 최적화를 하지 않아 호출이 쌓인다",
      "O(1). 꼬리 재귀는 언제나 반복문으로 바뀐다",
      "O(log n). 호출이 절반씩 줄어든다",
      "O(1). ES2015 명세에 있으니 모든 엔진이 지원한다",
    ],
    answer: 0,
    explanation:
      "꼬리 호출 최적화는 ES2015 명세에 들어갔지만 V8은 구현하지 않았고 사파리의 JavaScriptCore만 지원한다. Node.js에서는 노드마다 호출이 쌓여 O(n) 공간이 들고, 노드 100만 개에서 `RangeError`가 난다. 공간을 줄이려면 반복문으로 쓴다.",
    anchor: "뒤집힌-앞부분을-들고-내려가는-재귀",
  },
  {
    id: "leetcode-reverse-linked-list-5",
    post: "leetcode-reverse-linked-list",
    question:
      "Python에서 `prev, cur, cur.next = cur, cur.next, prev`로 한 줄 뒤집기를 썼더니 오류가 났다. 왜 그런가?",
    choices: [
      "Python은 세 개 이상의 다중 대입을 지원하지 않는다",
      "왼쪽은 왼쪽부터 대입되어, `cur`가 먼저 바뀐 뒤 엉뚱한 노드의 `next`에 대입한다",
      "오른쪽 식이 왼쪽부터 하나씩 계산되어 `cur.next`가 이미 바뀐 값이다",
      "`None`에는 다중 대입을 쓸 수 없다",
    ],
    answer: 1,
    explanation:
      "오른쪽은 한꺼번에 계산되지만 왼쪽은 왼쪽부터 차례로 대입된다. `cur`가 다음 노드로 먼저 바뀐 뒤 `cur.next`에 대입하니 다음 노드의 화살표를 끊고, 두 번째 바퀴에서 `None.next`에 대입하려다 `AttributeError`가 난다. `cur.next`를 맨 왼쪽에 두면 맞게 동작한다.",
    anchor: "python과-java로-쓰면",
  },
];
