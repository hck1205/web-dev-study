import type { QuizQuestion } from "../types";

export const DATA_STRUCTURES_OVERVIEW: QuizQuestion[] = [
  {
    id: "data-structures-overview-1",
    post: "data-structures-overview",
    question: "작업 100개를 들고 최솟값을 꺼낼 때는 매번 훑기가 힙보다 빨랐는데, 2만 개에서는 힙이 20배 넘게 빨랐다. 이 결과가 말해 주는 것은?",
    choices: [
      "힙 구현이 틀렸다",
      "Big O는 n이 클 때 무엇이 이기는지를 말할 뿐이고, 작은 n에서는 상수와 단순함이 이길 수 있다",
      "훑기가 사실 O(log n)이다",
      "V8이 작은 배열을 자동으로 힙으로 바꾼다",
    ],
    answer: 1,
    explanation:
      "훑기는 O(n), 힙은 O(log n)이지만 힙은 비교와 교환이 더 많아 상수가 크다. n이 100이면 그 상수가 지배하고, 2만이면 n의 차이가 지배한다. 그래서 구조를 바꾸기 전에 n이 실제로 얼마인지부터 본다.",
    anchor: "필요한-연산에서-출발하기",
  },
  {
    id: "data-structures-overview-2",
    post: "data-structures-overview",
    question: "힙과 유니온 파인드를 포인터 노드 대신 배열로 구현하는 이유로 가장 알맞은 것은?",
    choices: [
      "나무 모양을 번호 규칙이나 부모 번호 배열로 표현할 수 있어, 포인터 없이 붙은 칸에 담으면 캐시에 유리하고 메모리도 적게 들기 때문에",
      "자바스크립트에는 객체가 없기 때문에",
      "배열이어야 정렬이 자동으로 유지되기 때문에",
      "노드로 만들면 시간 복잡도가 O(n²)이 되기 때문에",
    ],
    answer: 0,
    explanation:
      "힙은 i의 자식을 2i+1, 2i+2로, 유니온 파인드는 parent[i]로 나무를 표현한다. 칸이 붙어 있어 캐시를 덜 놓치고 노드마다 붙는 객체 오버헤드도 없다. 복잡도 자체가 달라지는 것은 아니다.",
    anchor: "재료는-두-가지뿐이다",
  },
  {
    id: "data-structures-overview-3",
    post: "data-structures-overview",
    question: "\"키가 100에서 200 사이인 주문을 키 순서대로\" 자주 물어야 한다. 해시맵만으로 부족한 이유는?",
    choices: [
      "해시맵은 정수 키를 지원하지 않는다",
      "해시맵의 찾기가 O(n)이다",
      "해시맵은 키를 흩어 놓아 순서를 모르므로 범위와 정렬 순회를 하려면 전부 훑어야 한다",
      "해시맵은 값을 하나만 저장할 수 있다",
    ],
    answer: 2,
    explanation:
      "해시는 키를 칸 번호로 흩어서 가까운 키끼리 모여 있지 않다. 범위 질의와 정렬 순회는 BST나 정렬 배열이 맡는다. 해시맵의 찾기는 평균 O(1)이다.",
    anchor: "연산별-비용-한-장",
  },
  {
    id: "data-structures-overview-4",
    post: "data-structures-overview",
    question: "\"합이 k인 연속 부분 배열의 개수, 음수 포함\"에서 슬라이딩 윈도가 맞지 않는 이유는?",
    choices: [
      "배열이 정렬돼 있지 않아서",
      "음수가 있으면 창을 넓힐수록 합이 커진다는 전제가 깨져 언제 창을 줄일지 정할 수 없어서",
      "창 밀기는 O(n²)이라서",
      "부분 배열은 연속이 아니어서",
    ],
    answer: 1,
    explanation:
      "창 밀기는 오른쪽을 늘리면 합이 커지고 왼쪽을 줄이면 작아진다는 단조성에 기대는데, 음수가 이를 깬다. 대신 누적 합 두 개의 차로 구간 합을 바꾸고, 앞에서 나온 누적 합의 횟수를 해시맵에 세면 O(n)에 풀린다.",
    anchor: "문제-문장에-숨은-신호",
  },
  {
    id: "data-structures-overview-5",
    post: "data-structures-overview",
    question: "LRU 캐시에서 해시맵이 리스트 노드의 참조를 들고 있어야 하는 이유는?",
    choices: [
      "해시맵이 순서를 기억하게 하려고",
      "리스트 노드를 정렬하려고",
      "메모리를 줄이려고",
      "노드 위치를 O(1)에 알아야 그 노드를 떼어 맨 앞으로 옮기는 일도 O(1)이 되기 때문에",
    ],
    answer: 3,
    explanation:
      "이중 연결 리스트는 노드를 알면 앞뒤 포인터만 바꿔 O(1)에 떼어 내지만, 노드를 찾는 건 O(n)이다. 해시맵이 키에서 노드로 바로 가는 길을 주면 찾기와 순서 갱신이 모두 O(1)이 된다.",
    anchor: "구조-여러-개가-함께-일하는-문제",
  },
  {
    id: "data-structures-overview-6",
    post: "data-structures-overview",
    question: "Top K Frequent Elements를 O(n)에 푸는 버킷 방식이 가능한 이유는?",
    choices: [
      "값의 등장 횟수가 배열 길이를 넘지 않아서 횟수를 칸 번호로 쓰는 배열을 만들 수 있기 때문에",
      "해시맵이 값을 자동으로 횟수 순으로 정렬해 주기 때문에",
      "힙이 O(1)에 정렬하기 때문에",
      "k가 항상 2 이하이기 때문에",
    ],
    answer: 0,
    explanation:
      "횟수는 1부터 n 사이라 길이 n+1짜리 버킷 배열에 값을 나눠 넣고, 큰 버킷부터 k개를 모으면 정렬이 필요 없다. 정렬은 O(n log n), 크기 k짜리 힙은 O(n log k)다.",
    anchor: "세기와-고르기를-따로-하기",
  },
  {
    id: "data-structures-overview-7",
    post: "data-structures-overview",
    question: "개발 환경에서는 빠르던 API가 데이터가 1,000배 늘자 100만 배 가까이 느려졌다. 가장 먼저 의심할 곳은?",
    choices: [
      "네트워크 지연",
      "JSON 직렬화 속도",
      "반복문 안에서 도는 find, includes, shift, 매번 하는 sort 같은 O(n) 연산",
      "가비지 컬렉터 설정",
    ],
    answer: 2,
    explanation:
      "늘어난 비율보다 느려진 비율이 훨씬 크면 반복 안에 O(n)이 숨어 있어 전체가 O(n²)이 된 경우가 많다. 처음 측정에서 array.find와 shift가 정확히 그 모양이었고, Map과 머리 인덱스로 바꾸자 700배, 4,000배 빨라졌다.",
    anchor: "고른-구조가-틀렸다는-신호",
  },
];
