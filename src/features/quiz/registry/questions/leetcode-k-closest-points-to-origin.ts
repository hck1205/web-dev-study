import type { QuizQuestion } from "../types";

export const LEETCODE_K_CLOSEST_POINTS_TO_ORIGIN: QuizQuestion[] = [
  {
    id: "leetcode-k-closest-points-to-origin-1",
    post: "leetcode-k-closest-points-to-origin",
    question: "점의 거리를 비교할 때 제곱근을 구하지 않고 x² + y²로 비교해도 되는 이유는?",
    choices: [
      "LeetCode가 거리 제곱을 정답으로 정해 두었기 때문",
      "좌표가 정수라서 제곱근도 항상 정수이기 때문",
      "맨해튼 거리와 유클리드 거리의 순서가 같기 때문",
      "제곱근은 0 이상에서 커지는 함수라 거리 제곱의 순서와 거리의 순서가 같기 때문",
    ],
    answer: 3,
    explanation:
      "a가 b 이하이면 √a도 √b 이하라서 순서를 비교하는 데는 제곱만으로 충분하다. 정수 좌표면 거리 제곱이 정확한 정수라 실수 오차도 없고 계산도 빠르다. 정수 좌표의 제곱근이 항상 정수인 것은 아니다.",
    anchor: "지도에-찍어-놓고-손으로-고른다",
  },
  {
    id: "leetcode-k-closest-points-to-origin-2",
    post: "leetcode-k-closest-points-to-origin",
    question: "가까운 점 k개를 남기려고 크기 k인 힙을 쓸 때 최대 힙이어야 하는 이유는?",
    choices: [
      "최대 힙이 최소 힙보다 넣기가 빠르기 때문",
      "힙 맨 위에 다음에 버릴 후보, 즉 남긴 점 중 가장 먼 점이 와야 하기 때문",
      "결과를 가까운 순서로 꺼내야 하기 때문",
      "JavaScript 배열의 sort가 내림차순이기 때문",
    ],
    answer: 1,
    explanation:
      "크기를 k로 유지하려면 넘칠 때 버릴 점을 바로 알아야 한다. 가까운 k개를 남길 때 버릴 점은 그중 가장 먼 점이고, 최대 힙 맨 위가 바로 그 점이다. 최소 힙으로 크기를 유지하면 가장 가까운 점부터 버려 가장 먼 k개가 남는다.",
    anchor: "크기-k인-최대-힙에-가까운-점만-남긴다",
  },
  {
    id: "leetcode-k-closest-points-to-origin-3",
    post: "leetcode-k-closest-points-to-origin",
    question: "A(1,3) B(-2,2) C(3,-3) D(-1,-1) 순서로 크기 3 최대 힙에 넣었을 때, D를 처리한 직후 힙 맨 위에 있는 점은?",
    choices: ["C", "D", "A", "B"],
    answer: 2,
    explanation:
      "세 개가 찼을 때 맨 위는 거리 제곱 18인 C다. D(2)가 C보다 가까워 C를 버리고 D를 넣으면, 남은 A(10), B(8), D(2) 중 가장 먼 A가 맨 위로 온다. 그래서 다음에 오는 점은 A와 비교된다.",
    anchor: "크기-k인-최대-힙에-가까운-점만-남긴다",
  },
  {
    id: "leetcode-k-closest-points-to-origin-4",
    post: "leetcode-k-closest-points-to-origin",
    question: "Java에서 좌표가 최대 5만으로 늘어났을 때 p[0] * p[0] + p[1] * p[1]을 int로 계산하면 생기는 일은?",
    choices: [
      "곱셈이 int 범위를 넘어 엉뚱한 값이 나오므로, 곱하기 전에 long으로 바꿔야 한다",
      "컴파일 오류가 난다",
      "자동으로 long으로 바뀌어 문제없다",
      "항상 음수가 나와서 바로 알아챌 수 있다",
    ],
    answer: 0,
    explanation:
      "5만² × 2는 50억이라 int 최댓값인 약 21억을 넘는다. 실제로 705032704라는 양수가 나와서 오히려 알아채기 어렵다. (long) x * x처럼 곱하기 전에 바꿔야 하고, 곱한 뒤 바꾸면 이미 넘친 값이 바뀔 뿐이다.",
    anchor: "좌표가-커지면-제곱이-넘친다",
  },
  {
    id: "leetcode-k-closest-points-to-origin-5",
    post: "leetcode-k-closest-points-to-origin",
    question: "거리 이분 탐색 풀이에서 문턱 거리보다 안쪽 점을 먼저 다 담고, 문턱과 같은 점은 모자란 만큼만 담는 이유는?",
    choices: [
      "문턱과 같은 점은 항상 답이 아니기 때문",
      "이분 탐색이 끝난 lo는 항상 답보다 크기 때문",
      "문턱과 같은 거리의 점이 여러 개면 전부 담았을 때 k개를 넘을 수 있기 때문",
      "안쪽 점의 순서를 정렬하기 위해서",
    ],
    answer: 2,
    explanation:
      "이분 탐색은 원 안의 점이 k개 이상이 되는 가장 작은 반지름을 찾는다. 그 반지름과 정확히 같은 거리에 점이 여러 개 있으면 모두 담을 때 k를 넘을 수 있다. 그래서 확실히 안쪽인 점을 먼저 담고 경계의 점으로 k개를 채운다.",
    anchor: "거리의-문턱값을-이분-탐색한다",
  },
];
