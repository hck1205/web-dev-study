import type { QuizQuestion } from "../types";

export const DS_STACK_QUEUE_DEQUE: QuizQuestion[] = [
  {
    id: "ds-stack-queue-deque-1",
    post: "ds-stack-queue-deque",
    question:
      "배열 push/shift로 만든 큐로 BFS를 돌렸더니 격자에서는 빨랐는데 자식이 10개씩인 넓은 트리에서는 몇 분이 걸렸다. 가장 가까운 원인은?",
    choices: [
      "트리에서는 방문 표시를 하지 않아서",
      "넓은 트리는 마지막 층이 통째로 큐에 들어가 큐가 길어지고, shift가 큐 길이에 비례해서",
      "push가 용량을 늘리며 매번 전체를 복사해서",
      "BFS 대신 DFS가 실행돼서",
    ],
    answer: 1,
    explanation:
      "shift는 나머지 원소를 한 칸씩 당기므로 비용이 큐 길이에 비례한다. 격자 BFS는 큐가 짧게 유지되지만 넓은 트리는 큐가 27만까지 길어져서 전체가 제곱으로 늘었다. push의 용량 증가는 분할 상환 O(1)이다.",
    anchor: "먼저-온-것이-먼저-나간다",
  },
  {
    id: "ds-stack-queue-deque-2",
    post: "ds-stack-queue-deque",
    question: "괄호 검사 함수에서 마지막에 `return stack.length === 0`을 빼고 `return true`로 두면 틀리는 입력은?",
    choices: ["\"([)]\"", "\"]\"", "\"((\"", "\"([]{})\""],
    answer: 2,
    explanation:
      "\"((\"는 닫는 괄호가 없어서 반복문 안에서는 false가 나올 일이 없고, 끝에 여는 괄호가 남는다. 남은 괄호를 확인해야 false가 된다. \"([)]\"와 \"]\"는 반복문 안의 짝 비교에서 이미 걸린다.",
    anchor: "마지막에-넣은-것이-먼저-나온다",
  },
  {
    id: "ds-stack-queue-deque-3",
    post: "ds-stack-queue-deque",
    question: "단조 스택으로 푼 '더 따뜻한 날' 문제가 반복문이 이중인데도 O(n)인 이유는?",
    choices: [
      "안쪽 while은 최대 한 번만 돌기 때문에",
      "스택 크기가 상수로 제한되기 때문에",
      "입력이 정렬돼 있다고 가정하기 때문에",
      "각 인덱스가 스택에 한 번 들어가고 많아야 한 번 나와서, while이 도는 횟수의 합이 n을 넘지 않기 때문에",
    ],
    answer: 3,
    explanation:
      "어떤 날에는 while이 여러 번 돌 수 있지만, 꺼내는 횟수를 전부 더하면 넣은 횟수 n을 넘지 못한다. 연산 하나가 아니라 전체를 세는 분할 상환 분석이다.",
    anchor: "쌓인-것을-정리하며-쌓는-단조-스택",
  },
  {
    id: "ds-stack-queue-deque-4",
    post: "ds-stack-queue-deque",
    question: "용량 8인 링 버퍼에서 head가 0일 때 unshift를 하면 head는 어떻게 계산되나?",
    choices: [
      "(0 - 1) & 7 = 7, 마지막 칸으로 감긴다",
      "(0 - 1) % 8 = -1, 그대로 쓴다",
      "모든 원소를 한 칸씩 뒤로 밀고 head는 0으로 둔다",
      "용량을 두 배로 늘린 뒤 head를 0으로 둔다",
    ],
    answer: 0,
    explanation:
      "용량이 2의 거듭제곱이면 & (용량 - 1)로 인덱스를 감을 수 있고, 음수도 바로 마지막 칸으로 돌아온다. 자바스크립트에서 -1 % 8은 -1이라 % 를 쓰면 따로 보정해야 한다. 원소는 옮기지 않는다.",
    anchor: "양쪽-끝이-다-열린-덱과-링-버퍼",
  },
  {
    id: "ds-stack-queue-deque-5",
    post: "ds-stack-queue-deque",
    question: "슬라이딩 윈도 최댓값을 덱으로 풀 때, 새 값보다 작거나 같은 값을 덱 뒤에서 꺼내도 되는 이유는?",
    choices: [
      "덱의 크기를 k 이하로 유지해야 해서",
      "그 값들은 새 값보다 먼저 창을 나가므로 다시는 최댓값이 될 수 없어서",
      "작은 값은 창 밖으로 이미 나갔기 때문에",
      "덱이 오름차순으로 정렬돼 있어야 해서",
    ],
    answer: 1,
    explanation:
      "새 값이 창에 있는 동안 그보다 작은 앞쪽 값은 최댓값이 될 수 없고, 그 값들이 새 값보다 먼저 창을 나간다. 그래서 덱은 앞에서 뒤로 줄어드는 순서가 되고 앞이 늘 최댓값이다. 창 밖으로 나간 값은 뒤가 아니라 앞에서 뺀다.",
    anchor: "창-안의-최댓값을-덱으로-따라가기",
  },
  {
    id: "ds-stack-queue-deque-6",
    post: "ds-stack-queue-deque",
    question: "BFS의 큐를 스택으로 바꾸면(뒤에서 꺼내면) 어떻게 되나?",
    choices: [
      "방문 순서는 같고 메모리만 줄어든다",
      "가중치 없는 그래프의 최단 거리를 더 빨리 구한다",
      "가장 최근에 발견한 노드부터 파고드는 DFS가 되고, 처음 닿은 경로가 최단이라는 보장이 사라진다",
      "무한 루프가 된다",
    ],
    answer: 2,
    explanation:
      "큐의 FIFO가 거리 1인 노드를 다 처리한 뒤 거리 2로 넘어가는 층 순서를 만든다. 스택은 마지막에 넣은 것을 먼저 꺼내니 한 갈래를 끝까지 파고드는 DFS가 된다. 방문 표시만 제대로 하면 무한 루프는 생기지 않는다.",
    anchor: "너비-우선-탐색이-큐를-쓰는-이유",
  },
  {
    id: "ds-stack-queue-deque-7",
    post: "ds-stack-queue-deque",
    question:
      "한 이벤트 핸들러 안에서 setCount(c => c + 1)을 세 번 부르면 count가 3 오르는 이유를 자료구조로 설명하면?",
    choices: [
      "React가 업데이트를 스택에 쌓아 마지막 것부터 적용해서",
      "훅의 업데이트가 원형 연결 리스트로 된 큐에 들어온 순서대로 쌓이고, 렌더링 때 차례로 적용돼서",
      "세 번의 호출마다 바로 다시 렌더링해서",
      "React가 같은 함수를 한 번만 실행하도록 중복을 제거해서",
    ],
    answer: 1,
    explanation:
      "queue.pending이 마지막 업데이트를 가리키고 그 next가 첫 업데이트인 원형 리스트라, 넣기와 첫 원소 찾기가 모두 O(1)이다. 렌더링할 때 첫 업데이트부터 이전 상태에 차례로 적용하니 FIFO다. 렌더링은 자동 배칭으로 한 번만 일어난다.",
    anchor: "react의-상태-업데이트도-큐에-쌓인다",
  },
];
