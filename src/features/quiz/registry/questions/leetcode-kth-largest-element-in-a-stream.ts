import type { QuizQuestion } from "../types";

export const LEETCODE_KTH_LARGEST_ELEMENT_IN_A_STREAM: QuizQuestion[] = [
  {
    id: "leetcode-kth-largest-element-in-a-stream-1",
    post: "leetcode-kth-largest-element-in-a-stream",
    question: "k번째로 큰 값을 계속 답할 때 크기 k인 최소 힙을 쓰는 이유는?",
    choices: [
      "최소 힙은 모든 값을 정렬된 순서로 들고 있어서",
      "답이자 다음에 쫓겨날 후보인 'k개 중 가장 작은 값'이 맨 위에 오기 때문에",
      "최대 힙은 음수를 다루지 못해서",
      "최소 힙은 넣기가 O(1)이라서",
    ],
    answer: 1,
    explanation:
      "위쪽 k개 중 가장 작은 값이 곧 k번째로 큰 값이고, 새 값이 들어오면 쫓겨날 값도 그것 하나다. 최소 힙은 그 값을 맨 위에 두어 O(1)에 보고 O(log k)에 바꾼다. 힙은 전체를 정렬해 두지 않는다.",
    anchor: "문지기-하나만-보는-최소-힙",
  },
  {
    id: "leetcode-kth-largest-element-in-a-stream-2",
    post: "leetcode-kth-largest-element-in-a-stream",
    question: "k = 3, 처음 수 [5, 1]에서 add마다 크기 확인 없이 'val이 맨 위보다 크면 교체'만 하면 add(3)은 무엇을 돌려주나?",
    choices: ["1", "5", "3", "오류가 난다"],
    answer: 2,
    explanation:
      "힙 [1, 5]는 아직 덜 찼는데 3이 1보다 커서 1을 빼고 3을 넣어 버린다. 그래서 3을 답하지만 실제 세 값 5, 3, 1의 3번째는 1이다. 덜 찼으면 무조건 넣는 분기가 있어야 한다.",
    anchor: "힙이-덜-찬-순간을-놓치면-틀린다",
  },
  {
    id: "leetcode-kth-largest-element-in-a-stream-3",
    post: "leetcode-kth-largest-element-in-a-stream",
    question: "k등 밖으로 밀려난 값을 버려도 되는 이유는?",
    choices: [
      "값이 들어오기만 하고 빠지지 않아서, 한 번 밀려난 값은 다시 k등 안에 들 수 없기 때문에",
      "문제가 중복 값을 허용하지 않기 때문에",
      "힙의 크기가 정해져 있어 더 넣을 수 없기 때문에",
      "밀려난 값은 모두 음수이기 때문에",
    ],
    answer: 0,
    explanation:
      "새 값이 들어올수록 k등 안의 값은 같거나 커질 뿐이다. 그래서 한 번 밀려난 값은 영영 돌아오지 못한다. 지우기 연산이 생기면 이 성질이 깨져서 크기 k 힙만으로는 풀 수 없다.",
    anchor: "손으로-3등을-지켜-본다",
  },
  {
    id: "leetcode-kth-largest-element-in-a-stream-4",
    post: "leetcode-kth-largest-element-in-a-stream",
    question: "값의 범위가 좁을 때 개수 칸과 손가락 cur를 쓰는 풀이에서 add가 상각 O(1)인 이유는?",
    choices: [
      "개수 칸이 해시맵이라서",
      "add마다 칸 전체를 훑지만 칸 수가 상수라서",
      "k번째로 큰 값은 줄지 않으므로 손가락이 위로만 움직여 전체를 통틀어 범위만큼만 이동하기 때문에",
      "값이 정렬되어 들어온다고 보장되기 때문에",
    ],
    answer: 2,
    explanation:
      "값이 빠지지 않으니 답은 그대로이거나 커진다. 손가락은 아래로 갈 일이 없어서 모든 add를 합쳐 범위 R만큼만 오른다. 그래서 전체 O(n + R), 한 번에 상각 O(1)이다.",
    anchor: "값의-범위가-좁다는-점을-쓰는-개수-칸",
  },
  {
    id: "leetcode-kth-largest-element-in-a-stream-5",
    post: "leetcode-kth-largest-element-in-a-stream",
    question: "위쪽 k개만 정렬된 배열로 들고 있는 풀이가 가장 느려지는 입력은?",
    choices: [
      "모든 값이 같은 입력",
      "계속 커지는 값이 들어오는 입력",
      "계속 작아지는 값이 들어오는 입력",
      "값이 무작위로 들어오는 입력",
    ],
    answer: 1,
    explanation:
      "커지는 값은 매번 맨 끝에 끼워지고 맨 앞이 빠져서 k칸이 통째로 움직인다. k = 10만에서 29초가 걸렸다. 작아지는 값이나 무작위 값은 대부분 비교 한 번에 버려져 빠르다.",
    anchor: "위쪽-k개만-줄에-남긴다",
  },
];
