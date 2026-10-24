import type { QuizQuestion } from "../types";

export const LEETCODE_GROUP_ANAGRAMS: QuizQuestion[] = [
  {
    id: "leetcode-group-anagrams-1",
    post: "leetcode-group-anagrams",
    question: "26칸 개수 배열을 `count.join(\"\")`처럼 구분자 없이 이어 붙여 키로 쓰면 어떤 입력에서 틀리나?",
    choices: [
      "빈 문자열이 들어올 때",
      "글자가 한 종류뿐인 단어가 들어올 때",
      "a 1개 + b 11개인 단어와 a 11개 + b 1개인 단어가 같은 키 \"111…\"이 될 때",
      "단어 길이가 26을 넘을 때",
    ],
    answer: 2,
    explanation:
      "개수가 두 자리가 되면 칸의 경계가 사라져 1과 11, 11과 1이 똑같이 \"111\"로 이어진다. 애너그램이 아닌 두 단어가 한 무리로 섞인다. 구분자를 넣거나 튜플처럼 경계를 지키는 키를 써야 한다.",
    anchor: "구분자를-빼면-무리가-섞인다",
  },
  {
    id: "leetcode-group-anagrams-2",
    post: "leetcode-group-anagrams",
    question: "JavaScript에서 개수 배열 자체를 `Map`의 키로 쓰면 왜 무리가 하나도 합쳐지지 않나?",
    choices: [
      "Map은 객체 키를 내용이 아니라 참조로 비교해서, 내용이 같은 새 배열을 다른 키로 보기 때문",
      "Map은 배열을 키로 넣으면 예외를 던지기 때문",
      "배열이 자동으로 정렬되어 키가 바뀌기 때문",
      "Map의 키는 26개까지만 들어가기 때문",
    ],
    answer: 0,
    explanation:
      "단어마다 새로 만든 배열은 내용이 같아도 서로 다른 객체다. Map은 객체 키를 참조로 비교하니 매번 새 키로 보고 새 무리를 만든다. 그래서 개수를 문자열로 바꿔 키로 쓴다. Java의 int[] 키도 같은 이유로 실패한다.",
    anchor: "글자-개수를-이름표로-쓰기",
  },
  {
    id: "leetcode-group-anagrams-3",
    post: "leetcode-group-anagrams",
    question: "단어 길이가 6 정도로 짧을 때 JavaScript에서 정렬 키가 개수 키보다 빨랐던 이유는?",
    choices: [
      "짧은 단어에서는 정렬이 O(1)이 되기 때문",
      "개수 키는 해시 충돌이 더 많이 나기 때문",
      "정렬 키는 해시맵을 쓰지 않기 때문",
      "짧은 단어의 정렬 비용은 아주 작은데, 개수 키는 길이와 상관없이 26칸을 만들고 이어 붙이는 고정 비용이 들기 때문",
    ],
    answer: 3,
    explanation:
      "개수 키는 O(k + 26)이라 k가 작아도 26칸 비용이 남는다. k log k가 26보다 작은 짧은 단어에서는 정렬 쪽이 이긴다. 길이 100에서는 반대로 개수 키가 열 배 빨랐다.",
    anchor: "단어-길이에-따라-순위가-바뀐다",
  },
  {
    id: "leetcode-group-anagrams-4",
    post: "leetcode-group-anagrams",
    question: "글자 코드의 합을 키로 쓰면 `[\"ad\", \"bc\", \"da\"]`는 어떻게 묶이나?",
    choices: [
      "[[\"ad\", \"da\"], [\"bc\"]]",
      "[[\"ad\", \"bc\", \"da\"]]",
      "[[\"ad\"], [\"bc\"], [\"da\"]]",
      "[[\"ad\", \"bc\"], [\"da\"]]",
    ],
    answer: 1,
    explanation:
      "a(97)+d(100)와 b(98)+c(99)가 모두 197이라 셋이 한 무리가 된다. 합은 애너그램이면 같다는 조건은 지키지만, 애너그램이 아니면 달라야 한다는 조건을 어긴다. 정보를 잃지 않는 키를 써야 한다.",
    anchor: "합이나-해시-값-하나로-줄이면",
  },
  {
    id: "leetcode-group-anagrams-5",
    post: "leetcode-group-anagrams",
    question: "무리를 하나씩 열어 대표 단어와 비교하는 풀이의 최악 시간 복잡도는? (단어 수 n, 단어 길이 k)",
    choices: ["O(n × k)", "O(n log n)", "O(n² × k)", "O(n × k log k)"],
    answer: 2,
    explanation:
      "새 단어마다 지금까지 만든 무리 수만큼 애너그램 비교를 하고, 비교 한 번이 O(k)다. 모든 단어가 서로 다르면 무리 수가 n까지 늘어 O(n² × k)가 된다. 대표 키와 해시맵을 쓰면 무리를 바로 찾아 이 곱셈이 사라진다.",
    anchor: "무리를-하나씩-열어-보는-풀이",
  },
];
