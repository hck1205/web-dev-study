import type { QuizQuestion } from "../types";

export const SORTING_ALGORITHMS: QuizQuestion[] = [
  {
    id: "sorting-algorithms-1",
    post: "sorting-algorithms",
    question: "첫 원소를 기준값으로 쓰는 퀵 정렬에 이미 정렬된 배열 1만 개를 넣었더니 RangeError가 났다. 원인은?",
    choices: [
      "정렬된 입력은 비교 함수가 NaN을 돌려줘서",
      "기준값이 매번 최솟값이라 한쪽에 n − 1개가 몰리고 재귀 깊이가 n이 되어서",
      "제자리 교환이 배열 길이를 넘는 인덱스를 써서",
      "V8이 정렬된 배열을 다른 elements kind로 바꿔서",
    ],
    answer: 1,
    explanation:
      "기준값이 가장 작은 값이면 왼쪽은 비고 오른쪽에 나머지가 다 몰려 층이 n개가 된다. 시간은 O(n²)이 되고 재귀 호출도 n단계 쌓여 콜 스택이 넘친다. 무작위 기준값과 작은 쪽만 재귀로 부르는 방법으로 막는다.",
    anchor: "기준값-하나로-가르는-퀵-정렬",
  },
  {
    id: "sorting-algorithms-2",
    post: "sorting-algorithms",
    question: "모든 값이 같은 배열에서 '작은 값만 앞으로 보내는' 분할에 무작위 기준값을 써도 느린 이유와 해결책으로 맞는 것은?",
    choices: [
      "무작위 함수가 같은 값을 자주 뽑아서. 시드를 바꾸면 된다",
      "같은 값끼리 비교가 더 비싸서. 비교 함수를 바꾸면 된다",
      "기준값과 같은 값이 전부 한쪽으로 몰려서. 호어 분할이나 3-way 분할로 고친다",
      "배열이 너무 짧아서. 삽입 정렬로 바꾸면 된다",
    ],
    answer: 2,
    explanation:
      "arr[j] < pivot만 앞으로 보내면 기준값과 같은 값은 모두 한쪽에 남아 분할이 매번 한쪽으로 쏠린다. 같은 값을 양쪽으로 나눠 보내는 호어 분할이나 같은 값 구역을 따로 두는 3-way 분할을 쓰면 해결된다. 기준값을 무작위로 고르는 것만으로는 이 경우를 못 막는다.",
    anchor: "기준값-하나로-가르는-퀵-정렬",
  },
  {
    id: "sorting-algorithms-3",
    post: "sorting-algorithms",
    question: "병합 정렬의 합치기에서 `a[i] <= a[j]`를 `a[i] < a[j]`로 바꾸면 어떻게 되나?",
    choices: [
      "정렬 결과는 맞지만 같은 값끼리 원래 순서가 뒤집혀 안정성이 깨진다",
      "같은 값이 있으면 무한 루프에 빠진다",
      "같은 값 중 하나가 결과에서 빠진다",
      "아무 차이도 없다",
    ],
    answer: 0,
    explanation:
      "값이 같을 때 `<`는 거짓이라 뒤쪽 원소를 먼저 꺼낸다. 정렬은 맞게 되지만 원래 뒤에 있던 원소가 앞으로 와서 안정 정렬이 아니게 된다. 결과가 틀려 보이지 않아 테스트로 잡아야 하는 실수다.",
    anchor: "반으로-쪼개고-줄-세워-합치는-병합-정렬",
  },
  {
    id: "sorting-algorithms-4",
    post: "sorting-algorithms",
    question: "Node 22에서 이미 정렬된 10만 개 배열을 `sort((a, b) => a - b)`로 정렬하면 비교 함수는 몇 번쯤 불리나?",
    choices: [
      "약 166만 번 (n log₂ n)",
      "약 50억 번 (n²/2)",
      "0번 (정렬된 배열은 건너뛴다)",
      "99,999번 (n − 1)",
    ],
    answer: 3,
    explanation:
      "V8의 TimSort는 먼저 이미 정렬된 구간(run)을 찾는데, 정렬된 입력은 전체가 run 하나라 이웃끼리 한 번씩만 비교하고 끝난다. 실제로 센 값도 99,999번이었다. 무작위 입력일 때만 n log₂ n에 가까워진다.",
    anchor: "v8의-sort는-timsort다",
  },
  {
    id: "sorting-algorithms-5",
    post: "sorting-algorithms",
    question: "값이 0~999 정수인 100만 개를 계수 정렬이 퀵 정렬보다 훨씬 빨리 정렬할 수 있는 이유는?",
    choices: [
      "계수 정렬은 비교를 병렬로 하기 때문에",
      "비교하지 않고 값을 개수 배열의 인덱스로 써서 O(n + k)에 끝나기 때문에",
      "계수 정렬은 추가 메모리를 전혀 쓰지 않기 때문에",
      "퀵 정렬은 정수에서 최악이 되기 때문에",
    ],
    answer: 1,
    explanation:
      "비교 정렬은 최악에 n log n번보다 적게 비교할 수 없지만, 계수 정렬은 비교 자체를 하지 않는다. 값마다 개수를 세고 차례로 쓰기만 하니 O(n + k)이고, 측정에서 7.1ms였다. 대신 값의 범위 k만큼 메모리를 써서 범위가 넓으면 쓸 수 없다.",
    anchor: "비교를-안-하면-n-log-n보다-빨라진다",
  },
  {
    id: "sorting-algorithms-6",
    post: "sorting-algorithms",
    question: "`arr.sort(() => Math.random() - 0.5)`로 배열을 섞으면 생기는 문제는?",
    choices: [
      "항상 원래 순서를 그대로 돌려준다",
      "TypeError가 난다",
      "비교 함수가 일관성을 어겨 일부 순열이 훨씬 자주 나온다",
      "O(n²)이 되어 느려지지만 결과는 고르게 섞인다",
    ],
    answer: 2,
    explanation:
      "무작위 비교 함수는 정렬이 가정하는 일관성을 깨서 결과가 구현에 따라 치우친다. 세 원소를 60만 번 섞었을 때 원래 순서가 22만 번 넘게 나왔다. 고르게 섞으려면 피셔-예이츠 셔플을 쓴다.",
    anchor: "비교-함수-하나가-정렬을-망친다",
  },
  {
    id: "sorting-algorithms-7",
    post: "sorting-algorithms",
    question: "주문 10만 건을 ISO 날짜 문자열 기준으로 정렬하는데 비교 함수 안에서 `Date.parse`를 부르니 느리다. 가장 효과적인 개선은?",
    choices: [
      "정렬 전에 각 주문의 타임스탬프를 한 번씩 계산해 두고 그 값으로 비교한다",
      "`localeCompare`로 문자열을 비교한다",
      "비교 함수를 화살표 함수가 아닌 일반 함수로 바꾼다",
      "`sort` 대신 `toSorted`를 쓴다",
    ],
    answer: 0,
    explanation:
      "비교 함수는 무작위 10만 개에서 150만 번 넘게 불려서, 안에서 파싱하면 그만큼 곱해진다. 키를 미리 한 번씩만 계산하면 777ms가 82ms로 줄었다. `toSorted`는 원본을 지킬 뿐 비교 횟수는 같다.",
    anchor: "비교-함수-하나가-정렬을-망친다",
  },
];
