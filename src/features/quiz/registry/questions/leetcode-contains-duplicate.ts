import type { QuizQuestion } from "../types";

export const LEETCODE_CONTAINS_DUPLICATE: QuizQuestion[] = [
  {
    id: "leetcode-contains-duplicate-1",
    post: "leetcode-contains-duplicate",
    question: "정렬한 뒤 바로 옆 칸끼리만 비교해도 중복을 놓치지 않는 이유는?",
    choices: [
      "정렬하면 중복 값이 항상 배열 맨 앞으로 오기 때문",
      "같은 두 값 사이에 다른 값이 끼려면 그 값이 둘보다 크거나 작아야 하는데, 정렬돼 있으면 그럴 수 없기 때문",
      "정렬 알고리즘이 중복을 만나면 자동으로 멈추기 때문",
      "옆 칸 비교가 해시 조회와 같은 일을 하기 때문",
    ],
    answer: 1,
    explanation:
      "정렬된 배열에서 두 칸 사이의 값은 두 값 사이의 크기를 가져야 한다. 두 값이 같으면 그 사이에 들어갈 다른 값이 없으니 같은 값은 반드시 이웃한다. 그래서 n-1번의 이웃 비교로 충분하다.",
    anchor: "정렬하면-같은-값이-옆에-붙는다",
  },
  {
    id: "leetcode-contains-duplicate-2",
    post: "leetcode-contains-duplicate",
    question: "0번과 1번 칸이 같은 10만 개 배열에서 `new Set(nums).size !== nums.length`가 반복문 집합 풀이보다 훨씬 느린 이유는?",
    choices: [
      "한 줄 풀이는 시간 복잡도가 O(n log n)이라서",
      "Set 생성자가 값을 정렬하기 때문에",
      "한 줄 풀이는 중복을 찾아도 멈추지 않고 배열 전체를 집합에 넣기 때문에",
      "size 속성을 읽는 데 O(n)이 들어서",
    ],
    answer: 2,
    explanation:
      "두 풀이의 등급은 O(n)으로 같다. 반복문은 두 번째 칸에서 바로 true를 돌려주지만, 한 줄 풀이는 10만 개를 모두 넣은 뒤에야 크기를 비교한다. 중복이 없을 때는 둘이 거의 같다.",
    anchor: "집합-크기를-세는-한-줄-풀이",
  },
  {
    id: "leetcode-contains-duplicate-3",
    post: "leetcode-contains-duplicate",
    question: "`const seen = []`에 값을 넣고 `seen.includes(x)`로 확인하는 풀이의 시간 복잡도는?",
    choices: ["O(n²)", "O(n)", "O(n log n)", "O(1)"],
    answer: 0,
    explanation:
      "배열의 includes는 처음부터 훑는 O(n) 연산이다. 그걸 칸마다 하니 전체는 O(n²)로 모든 쌍 비교와 다르지 않다. 모양이 집합 풀이와 같아도 자료구조가 다르면 등급이 바뀐다.",
    anchor: "헷갈리기-쉬운-입력과-실수",
  },
  {
    id: "leetcode-contains-duplicate-4",
    post: "leetcode-contains-duplicate",
    question: "Contains Duplicate II(k칸 안의 중복)를 창 크기 k의 집합으로 풀 때 `[4, 1, 2, 4, 3, 4]`, k = 2에서 3번 칸의 4를 볼 때 무슨 일이 일어나나?",
    choices: [
      "0번 칸의 4가 창에 있어 true로 끝난다",
      "창이 비어 있어서 4를 넣고 아무것도 빼지 않는다",
      "중복이므로 창을 비우고 다시 시작한다",
      "0번 칸의 4는 이미 창 밖이라 찾지 못하고, 4를 넣은 뒤 1을 뺀다",
    ],
    answer: 3,
    explanation:
      "3번 칸에 왔을 때 창에는 최근 두 칸인 1과 2만 있다. 0번 칸의 4는 거리가 3이라 이미 빠졌다. 그래서 4를 넣고 오래된 1을 빼며, 답은 5번 칸에서 3번 칸의 4를 만날 때 true가 된다.",
    anchor: "범위가-붙으면-문제가-달라진다",
  },
  {
    id: "leetcode-contains-duplicate-5",
    post: "leetcode-contains-duplicate",
    question: "Contains Duplicate III의 버킷 풀이에서 구간 번호를 `Math.trunc(x / w)`로 구하면 무엇이 잘못되나?",
    choices: [
      "음수 값이 아예 들어가지 않는다",
      "0 쪽으로 잘라서 음수와 양수가 같은 0번 구간에 섞이고, 그 구간만 폭이 두 배가 된다",
      "구간 번호가 소수가 되어 Map 키로 쓸 수 없다",
      "양수끼리도 같은 구간에 들어가지 못한다",
    ],
    answer: 1,
    explanation:
      "trunc는 -0.5를 0으로 올리고 0.5를 0으로 내려서, 폭이 2일 때 -1과 1이 같은 0번 구간이 된다. 같은 구간이면 무조건 true로 보니 차이 2인 값을 잘못 센다. 아래로 내리는 Math.floor, Java라면 Math.floorDiv를 써야 모든 구간의 폭이 같다.",
    anchor: "범위가-붙으면-문제가-달라진다",
  },
];
