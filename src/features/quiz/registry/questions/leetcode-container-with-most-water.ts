import type { QuizQuestion } from "../types";

export const LEETCODE_CONTAINER_WITH_MOST_WATER: QuizQuestion[] = [
  {
    id: "leetcode-container-with-most-water-1",
    post: "leetcode-container-with-most-water",
    question: "`height[l] < height[r]`일 때 l을 버려도 답을 잃지 않는 이유는?",
    choices: [
      "l과 안쪽 벽으로 만든 물통은 폭이 더 좁고 높이도 height[l]을 넘지 못해 방금 잰 넓이보다 클 수 없어서",
      "l 오른쪽 벽은 항상 height[l]보다 높아서",
      "height[r]이 배열에서 가장 높은 벽이라서",
      "l을 버리면 폭이 넓어지기 때문에",
    ],
    answer: 0,
    explanation:
      "l과 j(l < j < r)로 만든 물통은 폭 j − l이 r − l보다 작고, 높이 min(height[l], height[j])는 height[l] 이하다. 그래서 넓이는 height[l] × (r − l), 즉 방금 잰 값보다 작다. l의 최선은 이미 기록했으니 버려도 된다.",
    anchor: "낮은-벽을-버려도-되는-이유",
  },
  {
    id: "leetcode-container-with-most-water-2",
    post: "leetcode-container-with-most-water",
    question: "비교를 뒤집어 높은 쪽 포인터를 옮기면 `[2, 6, 1, 1, 1, 5]`에서 무엇이 나오나? (정답은 20)",
    choices: [
      "20. 결과는 같다",
      "무한 루프",
      "10. 첫 비교에서 높은 오른쪽 5를 버려 6과 5의 짝을 다시 만들 수 없다",
      "25. 넓이를 더 크게 센다",
    ],
    answer: 2,
    explanation:
      "양 끝 2와 5에서 높은 5를 버리면, 답인 1번(6)과 5번(5)의 짝은 영영 만들어지지 않는다. 높은 쪽을 버리는 건 그 벽이 더 좋은 짝을 못 만든다는 보장이 없어서 틀린다.",
    anchor: "자주-틀리는-곳",
  },
  {
    id: "leetcode-container-with-most-water-3",
    post: "leetcode-container-with-most-water",
    question: "두 벽 높이가 같을 때 포인터를 어떻게 움직여야 하나?",
    choices: [
      "반드시 왼쪽만 옮겨야 한다",
      "어느 쪽을 옮겨도, 둘 다 옮겨도 된다",
      "반드시 오른쪽만 옮겨야 한다",
      "더 바깥쪽 벽이 높은 쪽을 옮겨야 한다",
    ],
    answer: 1,
    explanation:
      "같은 높이 h라면 왼쪽 벽과 안쪽 벽, 오른쪽 벽과 안쪽 벽으로 만든 물통 모두 h × 지금 폭보다 작다. 그래서 두 벽 다 더 볼 필요가 없고, 어느 쪽을 버리든 답은 같다.",
    anchor: "낮은-벽을-버려도-되는-이유",
  },
  {
    id: "leetcode-container-with-most-water-4",
    post: "leetcode-container-with-most-water",
    question: "높은 벽부터 하나씩 넣는 풀이에서 지금 넣는 벽과 짝지을 벽으로 이미 넣은 벽 중 가장 먼 것만 보면 되는 이유는?",
    choices: [
      "가장 먼 벽이 항상 가장 높아서",
      "정렬하면 위치도 함께 정렬되기 때문에",
      "가까운 벽은 물을 막아서",
      "이미 넣은 벽은 모두 지금 벽 이상이라 높이가 지금 벽으로 정해지고, 그러면 폭이 가장 넓은 짝이 가장 크기 때문에",
    ],
    answer: 3,
    explanation:
      "높은 벽부터 넣었으니 이미 넣은 벽은 지금 벽보다 낮지 않다. 높이가 지금 벽으로 고정되면 넓이는 폭에만 달려 있고, 가장 먼 벽은 넣은 벽의 가장 왼쪽이나 가장 오른쪽 위치다. 그래서 두 위치만 기억하면 된다.",
    anchor: "높은-벽부터-넣으며-가장-먼-벽과-잰다",
  },
  {
    id: "leetcode-container-with-most-water-5",
    post: "leetcode-container-with-most-water",
    question: "Largest Rectangle in Histogram에 이 문제의 '낮은 쪽 버리기' 투 포인터를 쓸 수 없는 이유는?",
    choices: [
      "히스토그램은 정렬돼 있어서",
      "직사각형 높이를 두 끝이 아니라 구간 안의 가장 낮은 막대가 정해, 안쪽에 더 낮은 막대가 있으면 증명이 깨져서",
      "히스토그램은 폭이 항상 1이라서",
      "투 포인터는 넓이 문제에 쓸 수 없어서",
    ],
    answer: 1,
    explanation:
      "이 문제는 두 끝 벽만 높이를 정하니 낮은 끝을 버리는 증명이 성립한다. 히스토그램은 구간 최솟값이 높이라서 끝을 움직였을 때 높이가 어떻게 변할지 끝 막대만 보고 알 수 없다. 그래서 단조 스택으로 막대마다 가장 넓은 구간을 구한다.",
    anchor: "면접관이-이어서-바꾸는-문제들",
  },
];
