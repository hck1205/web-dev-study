import type { QuizQuestion } from "../types";

export const LEETCODE_REMOVE_DUPLICATES_FROM_SORTED_ARRAY: QuizQuestion[] = [
  {
    id: "leetcode-remove-duplicates-from-sorted-array-1",
    post: "leetcode-remove-duplicates-from-sorted-array",
    question: "정렬된 배열에서는 중복인지 가리려고 결과의 마지막 값 nums[w - 1] 하나와만 비교해도 되는 이유는?",
    choices: [
      "쓰기 포인터가 읽기 포인터보다 항상 앞서기 때문에",
      "정렬돼 있어 같은 값이 모두 붙어 있으니, 지금 값과 같은 값이 결과에 있다면 반드시 맨 끝에 있기 때문에",
      "Set이 내부에서 중복을 걸러 주기 때문에",
      "결과의 길이가 항상 서로 다른 값의 수보다 작기 때문에",
    ],
    answer: 1,
    explanation:
      "오름차순이면 같은 값은 한 덩어리로 붙어 나온다. 그래서 지금 읽은 값이 이미 결과에 들어갔다면 그건 결과의 마지막 값일 수밖에 없다. 정렬되지 않은 [3, 1, 3, 2, 1]에서는 이 성질이 없어 아무것도 지우지 못한다.",
    anchor: "마지막으로-쓴-값과-비교",
  },
  {
    id: "leetcode-remove-duplicates-from-sorted-array-2",
    post: "leetcode-remove-duplicates-from-sorted-array",
    question: "같은 값을 두 번까지 남기는 80번에서 원래 배열의 두 칸 앞 nums[r - 2]와 비교하면 [1, 1, 1, 2, 2, 3]의 결과는?",
    choices: [
      "[1, 1, 2, 2, 3]. 정답과 같다",
      "[1, 2, 3]. 한 번씩만 남는다",
      "[1, 1, 2, 3]. 이미 2로 덮어쓴 칸과 비교해 두 번째 2를 잃는다",
      "[1, 1, 1, 2, 2, 3]. 아무것도 지우지 않는다",
    ],
    answer: 2,
    explanation:
      "r = 3에서 2를 2번 칸에 쓰고 나면, r = 4에서 비교하는 nums[2]는 원래 1이 아니라 2다. 그래서 두 번째 2를 이미 두 개 있다고 판단한다. 결과 쪽 nums[w - 2]와 비교하면 덮어쓴 칸을 읽을 걱정이 없다.",
    anchor: "80번에서-원래-배열의-두-칸-앞과-비교한다",
  },
  {
    id: "leetcode-remove-duplicates-from-sorted-array-3",
    post: "leetcode-remove-duplicates-from-sorted-array",
    question: "같은 값 덩어리 끝을 이진 탐색(상한)으로 찾아 건너뛰는 풀이가 한 칸씩 훑기보다 크게 느려지는 입력은?",
    choices: [
      "서로 다른 값이 100개뿐인 100만 칸 배열",
      "모든 값이 같은 배열",
      "원소가 하나뿐인 배열",
      "모든 값이 서로 다른 100만 칸 배열",
    ],
    answer: 3,
    explanation:
      "이 풀이는 서로 다른 값마다 이진 탐색을 한 번 하니 O(u log n)이다. 모든 값이 다르면 u = n이라 O(n log n)이 되어 한 칸씩 훑기보다 느리다. 실제로 1.80ms 대 105.67ms였다. 지수 탐색으로 바꾸면 짧은 덩어리는 1칸 뒤만 보고 끝나서 이 약점이 줄어든다.",
    anchor: "같은-값-덩어리를-통째로-건너뛰기",
  },
  {
    id: "leetcode-remove-duplicates-from-sorted-array-4",
    post: "leetcode-remove-duplicates-from-sorted-array",
    question: "w를 '마지막으로 쓴 칸의 인덱스'로 두고 nums[r] !== nums[w]이면 nums[++w] = nums[r]로 쓴다. 무엇을 돌려줘야 하나?",
    choices: [
      "w + 1",
      "w",
      "w - 1",
      "r",
    ],
    answer: 0,
    explanation:
      "w가 마지막으로 쓴 칸의 인덱스라면 남긴 개수는 그보다 하나 많다. w를 그대로 돌려주면 [1, 1, 2, 3, 3, 3, 5]에 4가 아니라 3을 돌려준다. 포인터가 '다음에 쓸 칸'인지 '마지막으로 쓴 칸'인지 하나로 정해 비교, 쓰기, 반환을 모두 맞춰야 한다.",
    anchor: "쓸-자리를-인덱스로-들고-다닌다",
  },
  {
    id: "leetcode-remove-duplicates-from-sorted-array-5",
    post: "leetcode-remove-duplicates-from-sorted-array",
    question: "정렬된 연결 리스트에서 중복을 지울 때, 다음 노드가 같아 떼어 낸 직후에도 cur = cur.next로 전진하면 [3, 3, 3]은?",
    choices: [
      "[3]. 정답이다",
      "[3, 3]. 새로 이어진 다음 노드가 같은지 다시 보지 않는다",
      "[]. 모든 노드가 지워진다",
      "무한 루프에 빠진다",
    ],
    answer: 1,
    explanation:
      "첫 3의 다음을 세 번째 3으로 바꾼 뒤에는 그 노드도 같은지 다시 봐야 한다. 그런데 바로 전진하면 세 번째 3으로 넘어가 버려 3이 두 개 남는다. 떼어 냈을 때는 제자리에 머물고 다를 때만 전진한다.",
    anchor: "배열이-아니라-연결-리스트라면",
  },
];
