import type { QuizQuestion } from "../types";

export const LEETCODE_ALIEN_DICTIONARY: QuizQuestion[] = [
  {
    id: "leetcode-alien-dictionary-1",
    post: "leetcode-alien-dictionary",
    question: "외계 사전 문제에서 모든 단어 쌍이 아니라 이웃한 두 단어만 비교해도 되는 이유는?",
    choices: [
      "단어가 100개 이하라 어느 쪽이든 시간이 같아서",
      "멀리 떨어진 쌍은 규칙을 주지 않아서",
      "사전 순서는 이어 붙일 수 있는 관계라 이웃한 쌍의 규칙을 지키면 목록 전체가 정렬되어서",
      "위상 정렬이 간선을 n - 1개까지만 받아서",
    ],
    answer: 2,
    explanation:
      "이웃한 쌍의 규칙을 모두 지키는 순서라면 1번이 2번보다, 2번이 3번보다 앞이라 목록 전체가 정렬된다. 멀리 떨어진 쌍도 규칙을 주지만 그 규칙은 이웃한 쌍 규칙의 사슬에서 따라 나온다.",
    anchor: "이웃한-두-단어만-비교해도-충분하다",
  },
  {
    id: "leetcode-alien-dictionary-2",
    post: "leetcode-alien-dictionary",
    question: "words = [\"ba\", \"ab\"]일 때, 처음 다른 글자에서 멈추지 않고 같은 자리의 다른 글자를 모두 규칙으로 넣는 코드는 무엇을 내나?",
    choices: ["\"\"", "\"ba\"", "\"ab\"", "\"b\""],
    answer: 0,
    explanation:
      "맞는 규칙은 첫 자리의 \"b가 a보다 앞\" 하나라 답은 \"ba\"다. 둘째 자리까지 보면 \"a가 b보다 앞\"이 더해져 고리가 생기고, 그 코드는 빈 문자열을 낸다. 사전 순서는 처음 다른 글자에서만 정해진다.",
    anchor: "첫-차이-하나-접두사-하나에서-틀린다",
  },
  {
    id: "leetcode-alien-dictionary-3",
    post: "leetcode-alien-dictionary",
    question: "words = [\"abc\", \"ab\"]를 그래프만으로 판단하면 놓치는 이유는?",
    choices: [
      "글자 c가 그래프에 들어가지 않아서",
      "처음 다른 글자가 없어 규칙이 하나도 생기지 않는데, 긴 단어가 접두사보다 앞인 모순이라서",
      "a와 b 사이에 고리가 생겨서",
      "단어가 두 개뿐이라 위상 정렬이 정의되지 않아서",
    ],
    answer: 1,
    explanation:
      "\"ab\"는 \"abc\"의 접두사라 어떤 글자 순서로도 \"ab\"가 앞이어야 한다. 이 모순은 간선으로 표현되지 않으니 규칙을 뽑는 단계에서 앞 단어가 더 길면 바로 빈 문자열을 돌려줘야 한다.",
    anchor: "첫-차이-하나-접두사-하나에서-틀린다",
  },
  {
    id: "leetcode-alien-dictionary-4",
    post: "leetcode-alien-dictionary",
    question: "칸의 알고리즘으로 글자를 꺼내다 큐가 비었는데 적은 글자 수가 전체보다 적다. 무엇을 뜻하나?",
    choices: [
      "규칙에 안 나온 글자가 있다",
      "답이 여럿이다",
      "남은 글자끼리 서로를 기다리는 고리가 있다",
      "접두사 모순이 있다",
    ],
    answer: 2,
    explanation:
      "고리 위의 글자들은 서로를 기다려 진입 차수가 끝까지 0이 되지 않는다. 그래서 큐에 들어가지 못하고 적힌 글자 수가 모자란다. 규칙에 안 나온 글자는 진입 차수가 0이라 처음부터 큐에 들어간다.",
    anchor: "앞설-글자가-없는-것부터-꺼내는-칸의-알고리즘",
  },
  {
    id: "leetcode-alien-dictionary-5",
    post: "leetcode-alien-dictionary",
    question: "간선은 Set으로 한 번만 넣으면서 진입 차수는 규칙이 나올 때마다 올렸다. [\"ab\", \"ac\", \"bb\", \"bc\"]에서 무슨 일이 생기나?",
    choices: [
      "c의 진입 차수가 2가 되는데 한 번만 줄어 c를 적지 못하고 빈 문자열을 낸다",
      "같은 규칙이 무시되어 정상적으로 \"abc\"를 낸다",
      "a가 빠진 \"bc\"를 낸다",
      "c가 두 번 적혀 \"abcc\"를 낸다",
    ],
    answer: 0,
    explanation:
      "\"b가 c보다 앞\"이 두 번 나와 c의 진입 차수는 2인데, Set에는 간선이 하나라 b를 적을 때 한 번만 준다. c가 1에서 멈춰 고리가 없는데도 빈 문자열이 나온다. 간선과 진입 차수를 같은 기준으로 세야 한다.",
    anchor: "첫-차이-하나-접두사-하나에서-틀린다",
  },
];
