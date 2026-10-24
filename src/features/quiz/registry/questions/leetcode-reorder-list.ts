import type { QuizQuestion } from "../types";

export const LEETCODE_REORDER_LIST: QuizQuestion[] = [
  {
    id: "leetcode-reorder-list-1",
    post: "leetcode-reorder-list",
    question: "O(1) 공간 풀이에서 뒤쪽 절반을 뒤집는 이유는?",
    choices: [
      "뒤쪽 노드들의 값을 정렬하려고",
      "고리가 생기지 않게 하려고",
      "앞에서부터 걸어도 뒤쪽 노드가 Ln, Ln-1, … 순서로 나오게 하려고",
      "가운데 노드를 찾으려고",
    ],
    answer: 2,
    explanation:
      "결과의 짝수 자리에는 뒤쪽 노드가 끝에서부터 들어간다. 단일 연결 리스트는 뒤로 걸을 수 없으니, 뒤쪽 절반을 뒤집어 두면 그 순서가 앞에서부터 나온다. 배열이나 스택 풀이가 공간을 쓴 이유가 바로 이 뒤쪽 접근이었다.",
    anchor: "가운데에서-자르고-뒤집고-엮는다",
  },
  {
    id: "leetcode-reorder-list-2",
    post: "leetcode-reorder-list",
    question:
      "가운데를 찾은 뒤 `slow.next = null`로 앞쪽 끝을 끊지 않고 뒤집기와 엮기를 했다. `[1,2,3,4,5,6]`의 결과는?",
    choices: [
      "`1→6→2→5→3→4`로 정상이다",
      "`1→6→2→5→3→4→4→4…`처럼 4가 자기 자신을 가리키는 고리가 생긴다",
      "`1→2→3→4→5→6`으로 바뀌지 않는다",
      "엮기 단계에서 `TypeError`가 난다",
    ],
    answer: 1,
    explanation:
      "3이 여전히 4를 가리키니 마지막 엮기에서 `n1`이 4가 되고, `second.next = n1`이 4를 자기 자신에게 잇는다. 출력이 끝나지 않고 채점기는 고리 오류를 낸다. 자를 때 앞쪽 끝을 꼭 `null`로 끊어야 한다.",
    anchor: "끊지-않은-화살표가-만드는-고리",
  },
  {
    id: "leetcode-reorder-list-3",
    post: "leetcode-reorder-list",
    question: "엮기 반복문 조건을 `while (second)` 하나로 써도 `first`가 `null`이 될 걱정이 없는 이유는?",
    choices: [
      "앞쪽 조각이 뒤쪽 조각보다 길거나 같게 잘랐기 때문이다",
      "`first`는 항상 머리 노드라서",
      "뒤쪽 조각을 뒤집으면 길이가 늘어나서",
      "엮기 단계는 노드가 짝수 개일 때만 돌기 때문이다",
    ],
    answer: 0,
    explanation:
      "가운데를 앞쪽이 길거나 같게 자르면 뒤쪽이 먼저 또는 동시에 끝난다. 그래서 뒤쪽이 남아 있는 동안 `first`는 항상 노드를 가리킨다. 뒤쪽이 더 길게 자르면 엮는 도중 `first`가 바닥나 `null.next`를 읽게 된다.",
    anchor: "가운데는-어느-쪽이어도-된다",
  },
  {
    id: "leetcode-reorder-list-4",
    post: "leetcode-reorder-list",
    question: "매번 꼬리를 찾아 현재 노드 뒤에 끼우는 풀이의 시간 복잡도와 그 이유는?",
    choices: [
      "O(n). 꼬리를 한 번만 찾으면 되니까",
      "O(n log n). 남은 리스트가 절반씩 줄어드니까",
      "O(1). 화살표 세 개만 바꾸니까",
      "O(n²). n/2번 반복하며 매번 꼬리까지 걸어가야 하니까",
    ],
    answer: 3,
    explanation:
      "단일 연결 리스트에서 꼬리 바로 앞 노드를 찾으려면 남은 리스트를 끝까지 걸어야 한다. 이걸 n/2번 하니 O(n²)이고, 실제로 노드 5만 개에서 1.75초가 걸렸다. 꼬리를 바로 꺼낼 수 있게 배열이나 스택을 쓰거나, 뒤쪽을 뒤집어 두면 O(n)이 된다.",
    anchor: "매번-꼬리를-찾아-끼워-넣기",
  },
  {
    id: "leetcode-reorder-list-5",
    post: "leetcode-reorder-list",
    question: "재배치된 `1→6→2→5→3→4`를 원래 `1→2→3→4→5→6`으로 되돌리는 방법으로 맞는 것은?",
    choices: [
      "리스트 전체를 한 번 뒤집는다",
      "홀수 자리와 짝수 자리 노드로 나누고, 짝수 자리 조각을 뒤집어 홀수 조각 뒤에 붙인다",
      "가운데를 찾아 뒤쪽 절반만 뒤집는다",
      "값을 배열에 담아 정렬한다",
    ],
    answer: 1,
    explanation:
      "재배치는 앞쪽 절반을 홀수 자리에, 거꾸로 된 뒤쪽 절반을 짝수 자리에 엮은 것이다. 그래서 홀수·짝수 자리로 풀고 짝수 조각을 다시 뒤집어 붙이면 원래 순서가 된다. 정렬은 값이 원래 정렬돼 있을 때만 우연히 맞는다.",
    anchor: "재배치를-되돌리라면",
  },
];
