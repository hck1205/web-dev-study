import type { QuizQuestion } from "../types";

export const LEETCODE_MIN_STACK: QuizQuestion[] = [
  {
    id: "leetcode-min-stack-1",
    post: "leetcode-min-stack",
    question: "최솟값을 변수 하나에만 들고 있는 Min Stack이 O(1)을 지키지 못하는 이유는?",
    choices: [
      "push할 때 새 값과 비교하는 데 O(n)이 걸려서",
      "현재 최솟값이 pop되면 그 전의 최솟값이 남아 있지 않아 전체를 다시 훑어야 해서",
      "top과 getMin이 같은 변수를 읽어서",
      "음수가 들어오면 비교가 틀려서",
    ],
    answer: 1,
    explanation:
      "push는 새 값과 비교만 하면 되지만, 현재 최솟값이 빠지면 이전 최솟값이 필요하다. 변수 하나에는 덮어쓴 이전 값이 없어서 남은 값을 O(n)으로 훑어야 한다. 그래서 최솟값의 이력을 스택에 쌓아 둔다.",
    anchor: "변수-하나로는-왜-모자란가",
  },
  {
    id: "leetcode-min-stack-2",
    post: "leetcode-min-stack",
    question: "최소 스택에 넣는 조건을 `val < mins.top`으로 썼다. push 5, push 3, push 3, pop 뒤에 getMin은 무엇을 돌려주나?",
    choices: ["3", "undefined", "5", "에러가 난다"],
    answer: 2,
    explanation:
      "두 번째 3은 `<` 조건을 통과하지 못해 최소 스택에 들어가지 않는다. pop으로 3이 빠질 때 최소 스택 맨 위 3과 같으니 그것까지 빠지고, 최소 스택에는 5만 남는다. 본 스택에 3이 남아 있으니 정답은 3이어야 하고, 그래서 조건은 `<=`다.",
    anchor: "틀리는-코드는-대개-이렇게-생겼다",
  },
  {
    id: "leetcode-min-stack-3",
    post: "leetcode-min-stack",
    question: "Java로 짠 Min Stack이 작은 값 테스트는 통과하는데 push 2000, push 1000, pop 후 getMin이 1000으로 나온다. 가장 그럴듯한 원인은?",
    choices: [
      "`stack.pop() == mins.peek()`처럼 Integer 객체끼리 ==로 비교했다",
      "ArrayDeque의 push가 맨 뒤에 넣는다",
      "int 범위를 넘는 오버플로가 났다",
      "TreeMap의 키가 정렬되지 않았다",
    ],
    answer: 0,
    explanation:
      "Integer끼리 ==는 참조 비교다. Java는 -128부터 127까지만 같은 객체를 캐시해서 돌려주므로 작은 값에서는 우연히 맞고, 1000은 따로 박싱된 다른 객체라 비교가 false가 되어 최소 스택에서 빠지지 않는다. equals로 비교하거나 int로 받아서 비교해야 한다.",
    anchor: "python과-java로-쓰면",
  },
  {
    id: "leetcode-min-stack-4",
    post: "leetcode-min-stack",
    question: "스택에 `값 - 그때의 최솟값`을 저장하는 트릭에서, pop한 칸의 차이 d가 음수일 때 해야 할 일은?",
    choices: [
      "아무것도 하지 않는다. 최솟값은 그대로다",
      "min을 d로 바꾼다",
      "min을 min + d로 바꾼다",
      "min을 min - d로 바꿔 이전 최솟값을 되살린다",
    ],
    answer: 3,
    explanation:
      "d가 음수라는 건 그 칸의 값이 넣을 때 최솟값을 새로 만든 값이라는 뜻이다. 그 값은 현재 min 자신이고, 넣기 직전의 최솟값은 값 - d, 즉 min - d다. 그래서 빠질 때 min - d로 되돌린다.",
    anchor: "최솟값과의-차이만-저장하는-트릭",
  },
  {
    id: "leetcode-min-stack-5",
    post: "leetcode-min-stack",
    question: "Max Stack에 맨 위가 아닌 최댓값을 꺼내는 `popMax`를 추가하면 최소 스택 같은 O(1) 풀이를 그대로 쓸 수 없는 이유는?",
    choices: [
      "최댓값은 최솟값보다 계산이 비싸서",
      "맨 위가 아닌 값이 빠질 수 있어 이력을 넣은 순서의 반대로 되돌린다는 전제가 깨져서",
      "스택이 두 개 필요해서",
      "값이 32비트를 넘을 수 있어서",
    ],
    answer: 1,
    explanation:
      "최소 스택이 맞는 이유는 값이 늘 맨 위부터 빠져서, 최솟값 이력도 같은 순서로 되돌리면 되기 때문이다. popMax는 중간 값을 빼므로 이 순서가 깨진다. 그래서 TreeMap과 이중 연결 리스트, 또는 힙과 지연 삭제로 O(log n)에 푼다.",
    anchor: "면접관이-이어서-묻는-것",
  },
];
