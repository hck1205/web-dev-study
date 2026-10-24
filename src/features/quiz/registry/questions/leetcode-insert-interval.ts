import type { QuizQuestion } from "../types";

export const LEETCODE_INSERT_INTERVAL: QuizQuestion[] = [
  {
    id: "leetcode-insert-interval-1",
    post: "leetcode-insert-interval",
    question:
      "세 덩어리 풀이의 두 번째 while 조건이 `intervals[i][0] <= e` 하나뿐인데도 겹침을 정확히 판정하는 이유는?",
    choices: [
      "닫힌 구간에서는 시작만 비교해도 항상 겹침을 알 수 있어서",
      "첫 번째 while을 빠져나왔다면 `s <= intervals[i][1]`이 이미 성립하고, 정렬돼 있어 뒤 구간에서도 계속 성립해서",
      "새 구간의 끝 e가 항상 기존 구간의 끝보다 커서",
      "두 번째 while 안에서 Math.max로 끝을 늘리기 때문에 나머지 조건이 필요 없어져서",
    ],
    answer: 1,
    explanation:
      "겹침 조건은 `a <= e`이면서 `s <= b`다. 첫 while이 `b < s`에서 멈췄으니 `s <= b`는 이미 참이고, 끝도 뒤로 갈수록 커지니 계속 참이다. Math.max는 사슬처럼 이어지는 합치기를 처리할 뿐 조건을 대신하지 않는다.",
    anchor: "앞-겹침-뒤-세-덩어리로-한-번에-훑는다",
  },
  {
    id: "leetcode-insert-interval-2",
    post: "leetcode-insert-interval",
    question: "첫 번째 while을 `intervals[i][1] <= s`로 쓰고 `[[1, 5]]`에 `[5, 7]`을 넣으면 결과는?",
    choices: ["[[1,7]]", "[[5,7]]", "[[1,5],[5,7]]", "[[1,5]]"],
    answer: 2,
    explanation:
      "등호 때문에 끝점이 닿는 `[1, 5]`가 완전히 앞으로 분류돼 그대로 옮겨지고, 새 구간은 따로 들어간다. 이 문제는 닫힌 구간이라 5가 양쪽에 속하므로 `[[1,7]]`이 정답이다. 반쯤 열린 구간이라면 이 코드가 오히려 맞는다.",
    anchor: "첫-번째-while에-등호를-넣는다",
  },
  {
    id: "leetcode-insert-interval-3",
    post: "leetcode-insert-interval",
    question: "경계를 이분 탐색으로 찾는 풀이가 LeetCode 기준으로 세 덩어리 풀이보다 점근적으로 빠르지 않은 이유는?",
    choices: [
      "이분 탐색이 구간 목록에서는 O(n)으로 느려져서",
      "경계가 두 개라 이분 탐색을 n번 해야 해서",
      "자바스크립트 배열은 인덱스 접근이 O(log n)이어서",
      "경계는 O(log n)에 찾지만 결과 배열을 새로 만드는 데 O(n)이 들어서",
    ],
    answer: 3,
    explanation:
      "slice와 펼치기로 결과를 만드는 비용이 O(n)이라 전체는 O(n)에 머문다. 실제로 10만 개에서 재도 한 번 훑는 풀이와 거의 같았다. 결과를 새로 만들지 않는 트리 구조에서야 O(log n)이 의미가 생긴다.",
    anchor: "경계를-이분-탐색으로-찾는다",
  },
  {
    id: "leetcode-insert-interval-4",
    post: "leetcode-insert-interval",
    question:
      "for 문 하나와 '넣었나' 깃발로 짠 풀이가 `[[1, 2]]`에 `[0, 5]`를 넣을 때 빈 배열을 돌려줬다. 무엇이 빠졌나?",
    choices: [
      "루프가 끝난 뒤 아직 넣지 않았으면 합친 구간을 넣는 줄",
      "입력을 먼저 정렬하는 줄",
      "겹침 판정의 등호",
      "새 구간을 복사하는 줄",
    ],
    answer: 0,
    explanation:
      "새 구간이 남은 구간을 다 삼키거나 맨 뒤에 가면 루프 안에서 넣을 기회가 오지 않는다. 루프 뒤에 깃발을 보고 넣어야 한다. 세 while 방식은 합친 구간을 무조건 한 번 넣어 이 실수가 구조적으로 생기지 않는다.",
    anchor: "한-번의-for-문에서-새-구간을-빠뜨린다",
  },
  {
    id: "leetcode-insert-interval-5",
    post: "leetcode-insert-interval",
    question: "기존 목록 `[2,3] [6,7] [10,11]`에 `[3, 10]`을 넣으면 결과는?",
    choices: ["[[2,3],[3,10],[10,11]]", "[[2,11]]", "[[2,10],[10,11]]", "[[3,10]]"],
    answer: 1,
    explanation:
      "3은 `[2, 3]`의 끝에, 10은 `[10, 11]`의 시작에 닿는다. 닫힌 구간이라 닿으면 겹치므로 셋이 모두 합쳐져 시작은 가장 이른 2, 끝은 가장 늦은 11이 된다.",
    anchor: "새-구간이-떨어질-수-있는-자리",
  },
];
