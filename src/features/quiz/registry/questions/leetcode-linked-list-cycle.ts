import type { QuizQuestion } from "../types";

export const LEETCODE_LINKED_LIST_CYCLE: QuizQuestion[] = [
  {
    id: "leetcode-linked-list-cycle-1",
    post: "leetcode-linked-list-cycle",
    question:
      "Floyd 풀이에서 `slow === fast` 대신 `slow.val === fast.val`로 비교했다. 어떤 입력에서 틀린 답이 나오나?",
    choices: [
      "자기 자신을 가리키는 노드 하나 `[1], pos = 0`",
      "빈 리스트",
      "값이 모두 같은 정상 리스트 `[5, 5, 5], pos = -1`",
      "리스트 전체가 고리인 `[1, 2, 3], pos = 0`",
    ],
    answer: 2,
    explanation:
      "값은 중복될 수 있어서 서로 다른 노드가 같은 값을 가지면 고리가 없는데도 true가 나온다. 고리는 같은 노드를 다시 밟는 것이니 노드 참조를 비교해야 한다. 나머지 입력은 값 비교로도 우연히 맞는 답이 나온다.",
    anchor: "비교와-종료-조건에서-나는-실수",
  },
  {
    id: "leetcode-linked-list-cycle-2",
    post: "leetcode-linked-list-cycle",
    question: "고리 안에서 두 칸씩 가는 `fast`가 한 칸씩 가는 `slow`를 뛰어넘어 지나치지 않는 이유는?",
    choices: [
      "고리 길이가 항상 짝수라서",
      "한 번 움직일 때마다 둘 사이 간격이 정확히 1씩 줄어서 0을 건너뛸 수 없기 때문에",
      "`fast`가 `slow`를 만나면 자동으로 멈추게 언어가 보장해서",
      "`slow`가 고리에 들어오기 전에 항상 만나기 때문에",
    ],
    answer: 1,
    explanation:
      "`slow`는 한 칸 달아나고 `fast`는 두 칸 다가오니 간격이 d에서 d - 1로 준다. 3, 2, 1, 0처럼 1씩 줄어서 0을 건너뛸 수 없다. 처음 간격이 고리 길이보다 작으니 `slow`가 고리를 한 바퀴 돌기 전에 만난다.",
    anchor: "건너뛰지-않고-반드시-만나는-이유",
  },
  {
    id: "leetcode-linked-list-cycle-3",
    post: "leetcode-linked-list-cycle",
    question:
      "머리에서 입구까지 a칸, 입구에서 만난 곳까지 b칸, 고리 길이가 L이다. 만난 뒤 한 포인터를 머리로 보내 둘 다 한 칸씩 걸으면 입구에서 만나는 근거는?",
    choices: [
      "a = b이기 때문이다",
      "a + b = L이 항상 성립하기 때문이다",
      "`fast`가 고리를 정확히 한 바퀴만 돌기 때문이다",
      "2(a + b) = a + b + kL에서 a = kL - b가 나오기 때문이다",
    ],
    answer: 3,
    explanation:
      "`fast`는 `slow`의 두 배를 걸었고 그 차이는 고리 바퀴 수의 배수다. 식을 정리하면 a = kL - b라서, 만난 곳에서 a칸 가면 b만큼 덜 돈 k바퀴가 되어 입구에 선다. 머리에서 a칸 간 포인터도 입구에 서니 둘이 만난다. k가 1이 아닐 수 있어서 a + b = L이 항상 성립하지는 않는다.",
    anchor: "고리가-시작되는-노드를-찾으라면",
  },
  {
    id: "leetcode-linked-list-cycle-4",
    post: "leetcode-linked-list-cycle",
    question: "고리가 있는 리스트를 반복 뒤집기로 끝까지 뒤집으면 마지막에 `prev`가 가리키는 노드는?",
    choices: [
      "원래 머리. 고리를 돈 뒤 곧은 부분을 거꾸로 걸어 나오기 때문이다",
      "고리의 입구 노드",
      "원래 꼬리 노드",
      "뒤집기가 끝나지 않고 무한 루프에 빠진다",
    ],
    answer: 0,
    explanation:
      "고리를 한 바퀴 돌고 입구에 오면 입구의 화살표는 이미 곧은 부분 쪽으로 돌아가 있다. 그래서 곧은 부분을 거꾸로 걸어 나오며 원래대로 되돌리고, `next`를 `null`로 바꿔 둔 머리에서 끝난다. 이 성질로 고리를 판정할 수 있지만 고리의 방향이 바뀐 채로 남는다.",
    anchor: "뒤집어-보면-머리로-돌아온다",
  },
  {
    id: "leetcode-linked-list-cycle-5",
    post: "leetcode-linked-list-cycle",
    question:
      "반복문 안에서 포인터를 움직이기 전에 `if (slow === fast) return true`를 먼저 검사하면 어떻게 되나? (둘 다 `head`에서 출발)",
    choices: [
      "결과가 같다. 비교 위치는 상관없다",
      "고리가 있어도 항상 false가 나온다",
      "첫 반복에서 둘 다 `head`라서 고리가 없어도 true가 나온다",
      "빈 리스트에서 TypeError가 난다",
    ],
    answer: 2,
    explanation:
      "둘 다 같은 노드에서 출발하니 움직이기 전의 첫 비교는 무조건 참이다. 그래서 비교는 움직인 다음에 한다. 빈 리스트는 반복 조건에서 걸러져 오류가 나지 않는다.",
    anchor: "비교와-종료-조건에서-나는-실수",
  },
];
