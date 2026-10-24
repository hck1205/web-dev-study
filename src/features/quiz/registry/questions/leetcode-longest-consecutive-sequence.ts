import type { QuizQuestion } from "../types";

export const LEETCODE_LONGEST_CONSECUTIVE_SEQUENCE: QuizQuestion[] = [
  {
    id: "leetcode-longest-consecutive-sequence-1",
    post: "leetcode-longest-consecutive-sequence",
    question: "집합 풀이에 while 루프가 안에 있는데도 전체가 O(n)인 이유는?",
    choices: [
      "while은 줄의 첫 수에서만 돌고 줄끼리는 겹치지 않아서, 모든 while이 밟는 수를 합쳐도 n을 넘지 않기 때문",
      "해시 집합의 has가 O(1)이라 while도 O(1)이기 때문",
      "while은 많아야 한 번만 돌기 때문",
      "집합이 값을 정렬해 두기 때문",
    ],
    answer: 0,
    explanation:
      "안쪽 반복을 수마다 곱하지 않고 전체에서 몇 번 도는지를 센다. x - 1이 없는 첫 수에서만 while이 시작하고, 각 수는 정확히 한 줄에만 속하니 while의 걸음을 다 합쳐도 n 이하다. 집합은 순서를 정렬하지 않으며, 한 번의 while은 줄 길이만큼 돈다.",
    anchor: "줄의-첫-수에서만-센다",
  },
  {
    id: "leetcode-longest-consecutive-sequence-2",
    post: "leetcode-longest-consecutive-sequence",
    question: "첫 수 확인(x - 1이 있으면 건너뛰기)을 넣었는데 반복문을 집합이 아니라 nums로 돌면 어떤 입력에서 느려지나?",
    choices: [
      "음수가 많은 입력",
      "값이 모두 다른 입력",
      "긴 줄의 첫 수가 아주 많이 중복된 입력",
      "빈 배열",
    ],
    answer: 2,
    explanation:
      "첫 수 확인은 줄의 중간에서 세는 것만 막고, 같은 첫 수를 여러 번 세는 것은 막지 못한다. 1부터 50,000에 1을 50,000개 더 붙이면 같은 줄을 50,001번 세서 51초가 걸렸다. 집합을 돌면 중복이 사라져 10ms였다.",
    anchor: "틀리기-쉬운-자리",
  },
  {
    id: "leetcode-longest-consecutive-sequence-3",
    post: "leetcode-longest-consecutive-sequence",
    question: "끝점 해시맵 풀이에서 새 수 x가 들어올 때 줄 양 끝만 고쳐도 되는 이유는?",
    choices: [
      "맵이 값을 정렬된 순서로 보관하기 때문",
      "x가 아직 맵에 없으니 x - 1이 맵에 있다면 그건 줄의 오른쪽 끝이고, 줄 안쪽 값은 다시 읽히지 않기 때문",
      "줄의 길이는 항상 2 이하이기 때문",
      "중복을 허용하기 때문",
    ],
    answer: 1,
    explanation:
      "x - 1이 줄의 중간이라면 x도 이미 맵에 있었어야 한다. 그래서 새 수가 읽는 x - 1과 x + 1은 언제나 끝점이고, 안쪽에 남은 낡은 길이는 쓰이지 않는다. 같은 이유로 중복 x는 걸러야 길이가 부풀지 않는다.",
    anchor: "끝점에-길이를-적어-두고-이어-붙이기",
  },
  {
    id: "leetcode-longest-consecutive-sequence-4",
    post: "leetcode-longest-consecutive-sequence",
    question: "정렬 풀이에서 같은 값을 만났을 때 `cur`를 1로 되돌리면 `[1, 2, 2, 3]`의 결과는?",
    choices: ["3", "1", "4", "2"],
    answer: 3,
    explanation:
      "두 번째 2에서 줄이 끊긴 것으로 처리해 1-2와 2-3으로 쪼개진다. 그래서 정답 3 대신 2가 나온다. 같은 값은 줄을 늘리지도 끊지도 않고 건너뛰어야 한다.",
    anchor: "정렬하고-이어진-구간-세기",
  },
  {
    id: "leetcode-longest-consecutive-sequence-5",
    post: "leetcode-longest-consecutive-sequence",
    question: "Java 집합 풀이에 `[Integer.MAX_VALUE, Integer.MIN_VALUE]`를 넣으면 2가 나오는 이유는?",
    choices: [
      "HashSet이 두 값을 같은 칸에 저장하기 때문",
      "x + 1이 MAX_VALUE에서 넘쳐 MIN_VALUE가 되어, 이어지지 않는 두 수를 이어진 것으로 보기 때문",
      "Integer 박싱이 값을 바꾸기 때문",
      "두 값의 차이가 짝수이기 때문",
    ],
    answer: 1,
    explanation:
      "Java int는 넘치면 조용히 반대쪽 끝으로 돌아간다. MAX_VALUE의 다음 수를 물으면 MIN_VALUE를 묻게 되고, 그 값이 집합에 있으니 줄 길이가 2가 된다. 이 문제는 값이 ±10^9라 괜찮지만 int 전체 범위라면 경계를 확인하거나 long을 쓴다.",
    anchor: "python과-java로-옮기기",
  },
];
