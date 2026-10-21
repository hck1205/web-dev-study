import type { QuizQuestion } from "../types";

export const DS_UNION_FIND: QuizQuestion[] = [
  {
    id: "ds-union-find-1",
    post: "ds-union-find",
    question: "유니온 파인드에서 크기 6만짜리 그룹과 크기 3짜리 그룹을 union하면 parent 배열은 몇 칸 바뀌나?",
    choices: [
      "작은 그룹의 원소 수만큼, 3칸",
      "큰 그룹의 원소 수만큼, 6만 칸",
      "대표 하나의 부모만 바꾸므로 1칸",
      "두 그룹 전체, 6만 3칸",
    ],
    answer: 2,
    explanation:
      "원소를 하나하나 옮기지 않고, 한쪽 대표를 다른 대표 밑에 붙이기만 한다. 나머지 원소들은 원래 대표를 거쳐 새 대표에 닿는다. 이게 union이 싼 이유다.",
    anchor: "배열-하나로-숲을-만든다",
  },
  {
    id: "ds-union-find-2",
    post: "ds-union-find",
    question: "최적화 없이 union(1,0), union(2,1), union(3,2) … 순서로 원소 10만 개를 합치면 어떻게 되나?",
    choices: [
      "나무가 한 줄 사슬이 되어 find(0)이 부모를 99,999번 따라간다",
      "나무 높이가 log n으로 자동으로 묶인다",
      "union이 실패하고 그룹이 그대로 남는다",
      "모든 원소가 처음부터 대표를 바로 가리킨다",
    ],
    answer: 0,
    explanation:
      "매번 기존 대표가 새 원소 밑에 붙어 0 → 1 → 2 → … 사슬이 생긴다. find(0) 1,000번에 부모를 1억 번 따라갔다. 크기 규칙이나 경로 압축이 이를 막는다.",
    anchor: "한-줄로-늘어진-나무",
  },
  {
    id: "ds-union-find-3",
    post: "ds-union-find",
    question: "union by size만 써도 나무 높이가 log₂ n을 넘지 않는 이유는?",
    choices: [
      "find가 지나온 원소를 대표에 붙이기 때문에",
      "원소 번호를 정렬해서 넣기 때문에",
      "union을 할 때마다 나무를 다시 만들기 때문에",
      "원소의 깊이가 1 늘 때마다 그 원소가 속한 나무 크기가 적어도 두 배가 되기 때문에",
    ],
    answer: 3,
    explanation:
      "작은 쪽이 밑으로 가므로, 깊어지는 원소의 나무는 합쳐지며 최소 두 배로 커진다. 크기는 n을 넘을 수 없으니 두 배는 log₂ n번까지만 가능하다. 첫 번째 보기는 경로 압축 이야기다.",
    anchor: "작은-나무를-큰-나무-밑에",
  },
  {
    id: "ds-union-find-4",
    post: "ds-union-find",
    question: "경로 압축만 켠 버전에서 깊이 99,999짜리 사슬에 find(0)을 1,000번 불렀더니 부모를 총 100,998번 따라갔다. 이 숫자가 말해 주는 것은?",
    choices: [
      "경로 압축은 사슬에서는 효과가 없다",
      "첫 find가 사슬 전체를 대표에 붙여서, 나머지 999번은 한 번씩만 걸었다",
      "find 1,000번이 모두 똑같이 약 100번씩 걸었다",
      "union 단계에서 이미 압축이 끝났다",
    ],
    answer: 1,
    explanation:
      "첫 find가 99,999번을 걸으며 지나온 원소를 모두 대표에 붙였고, 이후 find는 한 걸음이다. 하나는 비싸고 나머지가 싸지는 모양이라 분할 상환으로 센다. union 때는 대표만 find해서 압축이 일어나지 않았다.",
    anchor: "지나온-길을-대표에-바로-붙인다",
  },
  {
    id: "ds-union-find-5",
    post: "ds-union-find",
    question: "크기 규칙 없이 만든 깊은 사슬에서 한 줄짜리 재귀 find를 부르면?",
    choices: [
      "압축이 먼저 일어나 안전하다",
      "결과가 틀린 대표를 돌려준다",
      "호출 스택이 넘쳐 RangeError가 난다",
      "자동으로 반복문으로 바뀐다",
    ],
    answer: 2,
    explanation:
      "재귀 find는 대표에 닿을 때까지 깊이만큼 호출이 쌓인 뒤에야 압축한다. 사슬 10만 개에서 Maximum call stack size exceeded가 났다. 크기 규칙을 같이 쓰거나 반복문, 경로 절반화로 쓴다.",
    anchor: "재귀-find가-죽는-순간",
  },
  {
    id: "ds-union-find-6",
    post: "ds-union-find",
    question: "크루스칼 알고리즘에서 비용 순으로 본 간선의 양끝이 이미 같은 그룹이면 왜 버리나?",
    choices: [
      "그 간선을 넣으면 고리가 생기고, 이미 이어진 두 점을 더 비싸게 잇는 셈이기 때문에",
      "같은 그룹 간선은 비용이 0이기 때문에",
      "유니온 파인드가 같은 그룹끼리는 union을 지원하지 않아서",
      "정렬이 깨지기 때문에",
    ],
    answer: 0,
    explanation:
      "앞에서 고른 더 싼 간선들로 두 점이 이미 연결됐으니, 이 간선은 고리만 만들고 비용을 늘린다. 예제에서 A-B, C-D, C-E가 그렇게 버려졌고 비용 합 14인 트리가 남았다.",
    anchor: "싼-선부터-고르는-크루스칼",
  },
  {
    id: "ds-union-find-7",
    post: "ds-union-find",
    question: "친구 끊기 기능이 자주 쓰이는 서비스에서 \"두 사람이 같은 친구 그룹인가\"를 유니온 파인드만으로 관리하기 어려운 이유는?",
    choices: [
      "find가 O(n)이라서",
      "문자열 ID를 저장할 수 없어서",
      "그룹 수를 셀 수 없어서",
      "합치기만 되고 그룹을 쪼갤 수 없어서 끊을 때마다 다시 계산해야 하기 때문에",
    ],
    answer: 3,
    explanation:
      "유니온 파인드는 union과 find만 지원하고 분리 연산이 없다. 삭제가 드물면 그때만 그 그룹을 BFS로 다시 만들고, 질의를 미리 알면 시간을 거꾸로 돌려 삭제를 합치기로 바꾸는 방법을 쓴다.",
    anchor: "유니온-파인드가-못-하는-일",
  },
];
