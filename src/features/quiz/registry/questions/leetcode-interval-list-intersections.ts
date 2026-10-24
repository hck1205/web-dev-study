import type { QuizQuestion } from "../types";

export const LEETCODE_INTERVAL_LIST_INTERSECTIONS: QuizQuestion[] = [
  {
    id: "leetcode-interval-list-intersections-1",
    post: "leetcode-interval-list-intersections",
    question: "투 포인터에서 A[i]의 끝이 B[j]의 끝보다 이르면 i를 옮겨도 교집합을 놓치지 않는 이유는?",
    choices: [
      "A[i]가 B[j]보다 일찍 시작해서",
      "B[j + 1]은 B[j]가 끝난 뒤에 시작하는데 A[i]는 그보다 먼저 끝나 만날 수 없어서",
      "A[i]는 B의 구간 하나와만 겹칠 수 있다고 문제가 보장해서",
      "두 목록 길이가 같아서",
    ],
    answer: 1,
    explanation:
      "B는 정렬되고 서로 떨어져 있어 B[j + 1]은 B[j][1]보다 뒤에서 시작한다. A[i]는 B[j][1]보다 먼저 끝나니 B의 다음 구간들과 겹칠 수 없다. A의 구간 하나가 B의 구간 여러 개와 겹치는 일은 흔하니 세 번째 보기는 틀리다.",
    anchor: "먼저-끝나는-쪽을-옮겨도-놓치지-않는-이유",
  },
  {
    id: "leetcode-interval-list-intersections-2",
    post: "leetcode-interval-list-intersections",
    question: "`A = [[1,2],[4,5]]`, `B = [[0,6]]`에서 시작이 이른 쪽 포인터를 옮기는 코드의 결과는?",
    choices: ["[[1,2],[4,5]]", "[]", "[[1,2]]", "[[0,6]]"],
    answer: 2,
    explanation:
      "첫 비교에서 [1,2]를 넣은 뒤 B의 [0,6]이 일찍 시작했다고 j를 옮겨 B가 끝난다. [0,6]은 6까지 이어져 [4,5]와도 겹치는데 버려졌다. 버려도 되는 건 일찍 끝나는 구간이다.",
    anchor: "시작이-이른-쪽을-옮긴다",
  },
  {
    id: "leetcode-interval-list-intersections-3",
    post: "leetcode-interval-list-intersections",
    question: "교집합 판정을 `lo < hi`로 쓰면 이 글의 예시에서 무엇이 달라지나?",
    choices: [
      "한 점짜리 교집합 [4,4], [9,9], [11,11]이 모두 빠진다",
      "결과가 정렬되지 않는다",
      "아무것도 달라지지 않는다",
      "무한 루프에 빠진다",
    ],
    answer: 0,
    explanation:
      "이 문제는 닫힌 구간이라 끝점만 닿아도 한 점만큼 겹친다. 등호를 빼면 lo === hi인 교집합이 모두 사라져 [[2,3],[6,7]]만 남는다. 포인터 이동은 그대로라 루프는 정상적으로 끝난다.",
    anchor: "교집합-판정을-로-쓴다",
  },
  {
    id: "leetcode-interval-list-intersections-4",
    post: "leetcode-interval-list-intersections",
    question: "두 목록을 시작 순으로 합친 뒤 가장 늦은 끝과만 비교해도 되는 근거는?",
    choices: [
      "합치면 구간이 모두 겹치지 않게 되어서",
      "가장 늦은 끝을 만든 구간이 늘 같은 목록 출신이라서",
      "합친 목록의 끝값도 정렬돼 있어서",
      "같은 목록끼리는 겹치지 않으니, 새 구간과 겹치는 앞 구간은 상대 목록의 하나뿐이어서",
    ],
    answer: 3,
    explanation:
      "새 구간이 가장 늦은 끝 이전에 시작했는데 그 끝이 같은 목록 출신이라면 같은 목록끼리 겹친다는 뜻이 되어 조건에 어긋난다. 그러니 상대 목록의 구간 하나와만 겹치고, 교집합은 [시작, min(끝, end)]이다.",
    anchor: "두-줄을-한-줄로-합쳐-가장-늦은-끝과-맞댄다",
  },
  {
    id: "leetcode-interval-list-intersections-5",
    post: "leetcode-interval-list-intersections",
    question: "사건 스위프로 풀 때 같은 점의 시작과 끝은 어떤 순서로 처리해야 하나?",
    choices: [
      "끝(-1)을 먼저. Meeting Rooms II와 같다",
      "시작(+1)을 먼저. 닫힌 구간이라 그 점을 둘 다 가져서 열린 구간 수가 잠깐 2가 되어야 한다",
      "순서는 상관없다",
      "A 목록의 사건을 먼저",
    ],
    answer: 1,
    explanation:
      "4에서 끝나는 구간과 4에서 시작하는 구간은 닫힌 구간이라 4를 함께 가진다. 시작을 먼저 더해야 [4,4]가 나온다. 끝을 먼저 빼면 예시의 한 점 교집합이 모두 사라진다.",
    anchor: "열린-구간이-둘인-곳을-센다",
  },
];
