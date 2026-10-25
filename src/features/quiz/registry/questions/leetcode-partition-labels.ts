import type { QuizQuestion } from "../types";

export const LEETCODE_PARTITION_LABELS: QuizQuestion[] = [
  {
    id: "leetcode-partition-labels-1",
    post: "leetcode-partition-labels",
    question: "s = \"abacdcdeef\"의 답은?",
    choices: ["[3, 4, 2, 1]", "[3, 3, 1, 2, 1]", "[2, 1, 3, 1, 2, 1]", "[10]"],
    answer: 0,
    explanation:
      "a가 2번까지 가서 aba가 첫 조각이다. c는 5번, 그 사이의 d는 6번까지 가서 cdcd가 한 조각이고, ee와 f가 이어진다. [2, 1, 3, 1, 2, 1]은 end를 최댓값 없이 덮어썼을 때 나오는 틀린 답이다.",
    anchor: "손으로-잘라-본다",
  },
  {
    id: "leetcode-partition-labels-2",
    post: "leetcode-partition-labels",
    question: "자를 수 있는 곳에서 모두 자르면 조각 수가 최대가 되는 이유는?",
    choices: [
      "글자 종류가 26개뿐이기 때문",
      "문자열 길이가 500 이하이기 때문",
      "자를 수 있는지는 그 자리의 앞뒤 글자 집합이 겹치는지로만 정해져서 자르는 자리끼리 서로 영향을 주지 않기 때문",
      "가장 긴 조각부터 자르기 때문",
    ],
    answer: 2,
    explanation:
      "어떤 글자가 두 조각에 걸쳐 있다면 그 사이의 자른 자리에서 그 글자가 앞뒤 양쪽에 나타나, 애초에 자를 수 없는 자리였어야 한다. 그래서 자를 수 있는 곳을 모두 잘라도 규칙이 깨지지 않고, 그게 최대다. 길이나 글자 종류 제약은 풀이 속도에만 영향을 준다.",
    anchor: "앞쪽-글자와-뒤쪽-글자가-겹치지-않는-곳",
  },
  {
    id: "leetcode-partition-labels-3",
    post: "leetcode-partition-labels",
    question: "end = Math.max(end, last[c]) 대신 end = last[c]로 쓰면 왜 틀리나?",
    choices: [
      "마지막 자리 배열이 비어 있기 때문",
      "뒤 글자가 앞 글자가 요구한 끝을 당겨서, 앞 글자가 남은 채로 잘리기 때문",
      "조각 길이가 1씩 밀리기 때문",
      "시간 복잡도가 O(n²)이 되기 때문",
    ],
    answer: 1,
    explanation:
      "abacdcdeef에서 a는 2번까지 가야 하는데 1번의 b가 end를 1로 바꿔 1번 뒤에서 잘린다. end는 지금 조각의 모든 글자가 요구하는 가장 먼 곳이라 줄어들면 안 된다. 복잡도는 그대로 O(n)이지만 답이 틀린다.",
    anchor: "end를-최댓값이-아니라-덮어쓴다",
  },
  {
    id: "leetcode-partition-labels-4",
    post: "leetcode-partition-labels",
    question: "구간 합치기 풀이에서 글자 구간을 따로 정렬하지 않아도 되는 이유는?",
    choices: [
      "글자를 처음 나온 순서대로 구간으로 만들면 이미 시작 순이기 때문",
      "구간끼리 절대 겹치지 않기 때문",
      "끝 순으로 정렬해야 하기 때문",
      "구간이 26개 이하라 순서가 상관없기 때문",
    ],
    answer: 0,
    explanation:
      "구간의 시작은 그 글자가 처음 나온 자리라, 문자열을 왼쪽부터 훑으며 만나는 순서가 곧 시작 순이다. end 밀기 풀이도 같은 이유로 정렬 없이 구간을 합친다. 구간은 겹칠 수 있고, 겹치면 합친다.",
    anchor: "글자마다-구간을-만들고-겹치면-합친다",
  },
  {
    id: "leetcode-partition-labels-5",
    post: "leetcode-partition-labels",
    question: "열린 글자 세기 풀이에서 \"abacdcdeef\"의 6번 칸을 지난 직후 열린 글자 수와 그 의미는?",
    choices: [
      "1개. c가 아직 남아 있다",
      "2개. c와 d가 열려 있다",
      "0개. 지금 조각의 글자가 모두 끝나서 여기서 자를 수 있다",
      "3개. a, c, d가 열려 있다",
    ],
    answer: 2,
    explanation:
      "3번에서 c, 4번에서 d가 열리고, 5번에서 c, 6번에서 d의 마지막 하나가 나와 둘 다 닫힌다. 열린 글자가 0개면 지금 조각의 글자가 뒤에 더 나오지 않으니 자른다. 칸마다 열린 수는 1 1 0 1 2 1 0 1 0 0이다.",
    anchor: "아직-끝나지-않은-글자를-센다",
  },
];
