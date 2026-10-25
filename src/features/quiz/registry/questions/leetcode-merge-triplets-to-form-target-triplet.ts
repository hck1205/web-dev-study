import type { QuizQuestion } from "../types";

export const LEETCODE_MERGE_TRIPLETS_TO_FORM_TARGET_TRIPLET: QuizQuestion[] = [
  {
    id: "leetcode-merge-triplets-to-form-target-triplet-1",
    post: "leetcode-merge-triplets-to-form-target-triplet",
    question: "한 칸이라도 target보다 큰 묶음을 처음부터 버려도 되는 이유는?",
    choices: [
      "그런 묶음은 다른 묶음보다 항상 늦게 합쳐지기 때문",
      "칸별 최댓값은 한 번 커지면 내려오지 않아서, 그 묶음이 든 조합은 모두 그 칸에서 target을 넘기 때문",
      "그런 묶음은 target의 다른 칸도 맞출 수 없기 때문",
      "버리지 않으면 시간 복잡도가 O(n²)이 되기 때문",
    ],
    answer: 1,
    explanation:
      "최댓값 합치기는 값을 키우기만 한다. 넘치는 칸을 가진 묶음을 넣으면 그 칸은 끝까지 target보다 크다. 그 묶음이 다른 칸을 맞춰 줄 수 있더라도 쓸 수 없다는 게 이 문제의 함정이다.",
    anchor: "한-칸이라도-넘치면-독이-된다",
  },
  {
    id: "leetcode-merge-triplets-to-form-target-triplet-2",
    post: "leetcode-merge-triplets-to-form-target-triplet",
    question: "triplets = [[2, 9, 1], [1, 7, 5]], target = [2, 7, 5]의 답과 그 이유는?",
    choices: [
      "true. 칸마다 2, 7, 5가 모두 어딘가에 있다",
      "true. 두 묶음을 합치면 [2, 9, 5]가 되고 9는 무시된다",
      "false. 묶음이 두 개뿐이라 연산을 할 수 없다",
      "false. 2를 가진 유일한 묶음이 가운데 칸 9 때문에 쓸 수 없다",
    ],
    answer: 3,
    explanation:
      "첫 칸 2를 주는 묶음은 [2, 9, 1]뿐인데 가운데 9가 목표 7을 넘어 독이다. 남은 [1, 7, 5]만으로는 첫 칸이 1이라 false다. 칸마다 따로 찾는 코드는 여기서 true를 내서 틀린다.",
    anchor: "칸마다-따로-찾는다",
  },
  {
    id: "leetcode-merge-triplets-to-form-target-triplet-3",
    post: "leetcode-merge-triplets-to-form-target-triplet",
    question: "쓸 수 있는 묶음을 고르지 않고 전부 합쳐도 되는 이유로 옳은 것은?",
    choices: [
      "전부 합친 결과는 target 이하이고, 답이 되는 어떤 집합보다도 칸마다 크거나 같아서 답이 있으면 target과 같아진다",
      "쓸 수 있는 묶음은 항상 세 개 이하이기 때문",
      "합치는 순서에 따라 결과가 달라지므로 전부 넣어야 가장 큰 결과가 나오기 때문",
      "전부 합치면 연산 횟수가 최소가 되기 때문",
    ],
    answer: 0,
    explanation:
      "쓸 수 있는 묶음은 칸이 모두 target 이하라 전부의 최댓값도 target 이하다. 답이 되는 집합은 쓸 수 있는 묶음의 일부이니 전부의 최댓값은 target 이상이다. 둘을 합치면 같아진다. 순서는 결과에 영향을 주지 않고, 연산 횟수가 최소라는 보장도 없다.",
    anchor: "쓸-수-있는-묶음은-전부-합쳐도-손해가-없다",
  },
  {
    id: "leetcode-merge-triplets-to-form-target-triplet-4",
    post: "leetcode-merge-triplets-to-form-target-triplet",
    question: "독을 판정할 때 t[d] > target[d] 대신 t[d] >= target[d]로 쓰면 어떻게 되나?",
    choices: [
      "결과가 같다. 같은 값은 어차피 칸을 켜지 못한다",
      "더 빨라질 뿐 답은 같다",
      "목표와 같은 칸을 가진 묶음까지 버려서 칸이 영원히 켜지지 않아 [[1, 1, 1]], [1, 1, 1] 같은 입력에서 false가 나온다",
      "독이 든 묶음을 놓쳐서 false인 입력에 true가 나온다",
    ],
    answer: 2,
    explanation:
      "칸을 켜는 건 target과 같은 값을 가진 묶음인데, 등호를 넣으면 그런 묶음이 모두 독으로 분류된다. 그래서 x, y, z가 한 번도 켜지지 않는다. 독은 target보다 클 때만이다.",
    anchor: "넘치는지를-등호로-판정한다",
  },
  {
    id: "leetcode-merge-triplets-to-form-target-triplet-5",
    post: "leetcode-merge-triplets-to-form-target-triplet",
    question: "연산이 칸별 최댓값이 아니라 칸별 합이라면 '쓸 수 있는 것을 전부 합친다'는 그리디는?",
    choices: [
      "그대로 성립한다. 합도 교환 법칙이 성립한다",
      "성립하지 않는다. 같은 것을 더 넣으면 값이 계속 커져서 [1,0,0], [1,0,0], [0,1,1]로 [1,1,1]을 만들 때 전부 더하면 넘친다",
      "성립하지만 독 판정을 >=로 바꿔야 한다",
      "성립하지만 정렬이 필요하다",
    ],
    answer: 1,
    explanation:
      "최댓값은 같은 것을 두 번 넣어도 결과가 같아서 많이 넣어도 손해가 없었다. 합은 넣을수록 커지니 무엇을 고르느냐가 다시 문제가 된다. 예시에서는 첫째와 셋째만 더해야 목표가 된다.",
    anchor: "최솟값으로-합친다면",
  },
];
