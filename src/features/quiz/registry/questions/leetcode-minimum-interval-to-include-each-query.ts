import type { QuizQuestion } from "../types";

export const LEETCODE_MINIMUM_INTERVAL_TO_INCLUDE_EACH_QUERY: QuizQuestion[] = [
  {
    id: "leetcode-minimum-interval-to-include-each-query-1",
    post: "leetcode-minimum-interval-to-include-each-query",
    question: "질의를 작은 순으로 처리할 때, 힙 맨 위 구간의 오른쪽 끝이 q보다 작으면 영원히 버려도 되는 이유는?",
    choices: [
      "힙에는 크기가 같은 구간이 두 번 들어가지 않아서",
      "질의가 커지기만 하니 지금 q 앞에서 끝난 구간은 뒤의 어떤 질의도 포함하지 못해서",
      "오른쪽 끝이 작은 구간은 크기도 항상 작아서",
      "구간을 왼쪽 끝 순으로 정렬했기 때문에 오른쪽 끝도 정렬돼 있어서",
    ],
    answer: 1,
    explanation:
      "질의를 값 순으로 처리하므로 이후 질의는 모두 q 이상이다. 오른쪽 끝이 q보다 작은 구간은 그 질의들을 포함할 수 없다. 왼쪽 끝 순으로 정렬해도 오른쪽 끝은 정렬돼 있지 않다.",
    anchor: "질의를-작은-순으로-처리하며-힙에-구간을-쌓는다",
  },
  {
    id: "leetcode-minimum-interval-to-include-each-query-2",
    post: "leetcode-minimum-interval-to-include-each-query",
    question: "힙을 크기가 아니라 오른쪽 끝 기준 최소 힙으로 만들면 `[[7, 10], [2, 7]]`, 질의 `[7]`의 결과는?",
    choices: ["[4]", "[-1]", "[6]", "[2]"],
    answer: 2,
    explanation:
      "맨 위는 오른쪽 끝이 7인 `[2, 7]`(크기 6)이고, 7을 포함하니 그대로 답이 된다. 하지만 `[7, 10]`(크기 4)이 더 짧아 정답은 4다. 힙 기준은 답이 되는 값인 크기여야 한다.",
    anchor: "힙을-오른쪽-끝-기준으로-만든다",
  },
  {
    id: "leetcode-minimum-interval-to-include-each-query-3",
    post: "leetcode-minimum-interval-to-include-each-query",
    question: "끝난 구간을 꺼내는 조건을 `heap.top()[1] <= q`로 쓰면 예시에서 질의 7의 답이 2에서 8로 바뀐다. 왜 그런가?",
    choices: [
      "닫힌 구간 `[6, 7]`은 7을 포함하는데 등호 때문에 꺼내져서",
      "질의 7이 정렬되지 않아서",
      "크기를 r - l로 계산해서",
      "힙에 [1, 8]이 들어가지 않아서",
    ],
    answer: 0,
    explanation:
      "오른쪽 끝이 질의와 같은 구간도 닫힌 구간이라 포함된다. 등호를 넣으면 `[6, 7]`이 꺼내지고, 이미 끝난 `[2, 5]`도 꺼내져 `[1, 8]`의 크기 8이 답이 된다. 조건은 `right < q`여야 한다.",
    anchor: "끝난-구간을-꺼내는-조건에-등호를-넣는다",
  },
  {
    id: "leetcode-minimum-interval-to-include-each-query-4",
    post: "leetcode-minimum-interval-to-include-each-query",
    question: "구간을 크기 순으로 꺼내 덮는 질의를 칠하는 풀이에서 이미 칠한 질의를 다시 칠하지 않아도 되는 이유는?",
    choices: [
      "유니온 파인드가 칠한 값을 자동으로 최솟값으로 갱신해서",
      "질의 값이 중복되지 않아서",
      "큰 구간은 작은 구간을 항상 감싸서",
      "짧은 구간부터 칠하니 처음 칠한 값이 이미 가장 작은 크기라서",
    ],
    answer: 3,
    explanation:
      "구간을 크기 오름차순으로 꺼내므로 어떤 질의에 처음 적힌 크기보다 작은 구간은 뒤에 나오지 않는다. 그래서 칠한 칸은 유니온 파인드로 건너뛰기만 하면 된다. 큰 구간이 작은 구간을 감싼다는 보장은 없다.",
    anchor: "짧은-구간부터-질의를-칠한다",
  },
  {
    id: "leetcode-minimum-interval-to-include-each-query-5",
    post: "leetcode-minimum-interval-to-include-each-query",
    question: "질의를 정렬해 처리한 뒤 답을 정렬된 순서로 `push`해 돌려주면 예시 `queries = [3, 7, 9, 1, 11]`의 출력은?",
    choices: ["[4,2,2,8,-1]", "[8,4,2,2,-1]", "[-1,2,2,4,8]", "[2,2,4,8,-1]"],
    answer: 1,
    explanation:
      "정렬된 질의 1, 3, 7, 9, 11 순서의 답 8, 4, 2, 2, −1이 그대로 나온다. 정답은 원래 순서에 맞춘 `[4,2,2,8,-1]`이다. 정렬할 때 원래 인덱스를 들고 가서 그 자리에 적어야 한다.",
    anchor: "답을-정렬된-질의-순서로-돌려준다",
  },
];
