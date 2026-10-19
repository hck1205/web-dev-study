import type { QuizQuestion } from "../types";

export const BIG_O_NOTATION: QuizQuestion[] = [
  {
    id: "big-o-notation-1",
    post: "big-o-notation",
    question: "orders.filter(o => !processedIds.includes(o.id))가 주문 100건에서는 빠르다가 10만 건에서 시간 초과가 나는 이유는?",
    choices: [
      "filter가 새 배열을 만들어 메모리가 부족해진다",
      "includes가 내부에서 정렬을 하기 때문에 O(n log n)이 된다",
      "includes가 주문마다 배열 전체를 훑어 전체가 O(n × m)이 된다",
      "id 비교가 문자열 비교라 상수 시간이 늘어난다",
    ],
    answer: 2,
    explanation:
      "includes는 선형 탐색이라 반복문 안에서 부르면 이중 반복문과 같다. 10만 × 10만이면 비교가 100억 번이다. processedIds를 Set으로 바꾸면 확인이 평균 O(1)이라 전체가 O(n + m)이 된다.",
    anchor: "이중-반복문을-해시맵-하나로",
  },
  {
    id: "big-o-notation-2",
    post: "big-o-notation",
    question: "모든 쌍을 j > i로 한 번씩만 비교하면 비교 횟수가 n(n−1)/2로 절반이 된다. 이 코드의 복잡도는?",
    choices: [
      "O(n²/2)라서 O(n²)보다 한 단계 빠르다",
      "여전히 O(n²)이다",
      "O(n log n)이다",
      "O(n)이다",
    ],
    answer: 1,
    explanation:
      "n(n−1)/2 = n²/2 − n/2에서 상수 배와 작은 항을 버리면 n²이 남는다. 절반으로 줄여도 n이 두 배가 될 때 일이 네 배가 되는 모양은 같다.",
    anchor: "상수와-작은-항을-버리는-이유",
  },
  {
    id: "big-o-notation-3",
    post: "big-o-notation",
    question: "꽉 차면 용량을 두 배로 늘리는 동적 배열에서 push가 O(1)이라고 하는 이유는?",
    choices: [
      "복사가 용량이 1, 2, 4, 8…일 때만 일어나 n번 push의 복사 합이 n보다 작다",
      "복사는 운영체제가 백그라운드에서 해 주므로 비용이 없다",
      "push는 매번 정확히 한 번만 메모리에 쓴다",
      "용량을 10칸씩 늘리기 때문에 복사가 거의 없다",
    ],
    answer: 0,
    explanation:
      "가끔 오는 비싼 복사를 n번 전체에 나눠 세는 분할 상환 분석이다. 1 + 2 + 4 + …의 합이 n보다 작으니 n번 push가 O(n), 한 번에 O(1)이다. 고정된 양(10칸)씩 늘리면 오히려 분할 상환으로도 O(n)이 된다.",
    anchor: "가끔-비싼-연산은-나눠서-센다",
  },
  {
    id: "big-o-notation-4",
    post: "big-o-notation",
    question: "이미 정렬된 배열을 매번 첫 원소를 피벗으로 쓰는 퀵 정렬로 정렬하면?",
    choices: [
      "이미 정렬돼 있으니 O(n)에 끝난다",
      "평균과 같은 O(n log n)이다",
      "O(2ⁿ)이 된다",
      "한쪽에 n−1개가 남는 분할이 반복되어 O(n²)이 된다",
    ],
    answer: 3,
    explanation:
      "피벗이 매번 가장 작은 값이라 절반씩 나뉘지 않고 한 개씩만 줄어든다. 그래서 실제 구현은 피벗을 무작위로 고르거나, 재귀가 깊어지면 힙 정렬로 바꾸는 introsort를 쓴다.",
    anchor: "운이-좋을-때와-나쁠-때",
  },
  {
    id: "big-o-notation-5",
    post: "big-o-notation",
    question: "메모 없이 짠 재귀 fib(n)의 시간과 공간 복잡도로 알맞은 것은?",
    choices: [
      "시간 O(n), 공간 O(n)",
      "시간은 지수, 공간은 호출 스택 깊이만큼 O(n)",
      "시간은 지수, 공간도 호출 횟수만큼 지수",
      "시간 O(n²), 공간 O(1)",
    ],
    answer: 1,
    explanation:
      "fib(40)은 호출이 3억 번 넘게 일어나지만 한 번에 쌓이는 스택 깊이는 n을 넘지 않는다. 호출이 끝나면 스택에서 빠지기 때문이다. 메모이제이션을 하면 시간도 O(n)이 된다.",
    anchor: "메모리도-같은-방식으로-센다",
  },
  {
    id: "big-o-notation-6",
    post: "big-o-notation",
    question: "해시 Set 대신 정렬 + 이진 탐색을 고를 만한 경우는?",
    choices: [
      "값 하나가 있는지 딱 한 번만 확인할 때",
      "키의 해시값을 계산할 수 없는 문자열일 때",
      "\"50 이상 80 이하\" 같은 범위나 가장 가까운 값을 찾아야 할 때",
      "입력이 아주 작을 때만",
    ],
    answer: 2,
    explanation:
      "해시는 같은 값 찾기만 빠르고 순서 정보가 없어 범위·최근접·순서대로 꺼내기에 쓸 수 없다. 한 번만 찾을 거라면 정렬 O(n log n)보다 그냥 O(n)으로 훑는 게 낫다. DB 인덱스가 정렬된 B-트리를 기본으로 쓰는 이유도 같다.",
    anchor: "정렬해-두면-log-n으로-찾는다",
  },
  {
    id: "big-o-notation-7",
    post: "big-o-notation",
    question: "users.reduce((acc, u) => ({ ...acc, [u.id]: u }), {})의 시간 복잡도는?",
    choices: [
      "O(n²). 단계마다 지금까지 모은 객체를 통째로 복사한다",
      "O(n). reduce는 배열을 한 번만 돈다",
      "O(n log n). 객체 키가 정렬되기 때문이다",
      "O(1). 전개 구문은 참조만 복사한다",
    ],
    answer: 0,
    explanation:
      "reduce는 한 번 돌지만 k번째 단계의 전개 구문이 k개 속성을 복사해서 합이 n²에 비례한다. 같은 객체에 넣거나 Object.fromEntries를 쓰면 O(n)이다.",
    anchor: "자바스크립트에-숨은-반복문",
  },
  {
    id: "big-o-notation-8",
    post: "big-o-notation",
    question: "입력 크기를 두 배로 늘릴 때마다 처리 시간이 매번 약 네 배가 된다. 이 코드의 시간 복잡도로 가장 알맞은 것은?",
    choices: [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(n²)",
    ],
    answer: 3,
    explanation:
      "n이 두 배일 때 n²은 네 배가 된다. O(n)이면 두 배, O(n log n)이면 두 배를 조금 넘는다. 실제 측정에서 includes를 반복문 안에서 부른 코드가 정확히 이 모양으로 늘었다.",
    anchor: "운영에서-n은-이런-모양으로-드러난다",
  },
];
