import type { QuizQuestion } from "../types";

export const LEETCODE_WORD_LADDER: QuizQuestion[] = [
  {
    id: "leetcode-word-ladder-1",
    post: "leetcode-word-ladder",
    question: "가장 짧은 사다리를 구할 때 백트래킹 대신 BFS를 쓰는 이유는?",
    choices: [
      "BFS가 메모리를 덜 써서",
      "한 걸음의 비용이 모두 1이라, 가까운 단어부터 층으로 넓히면 목표에 처음 닿은 층이 곧 최단 거리라서",
      "백트래킹으로는 목표에 닿을 수 없어서",
      "BFS는 단어를 정렬해서 찾기 때문에",
    ],
    answer: 1,
    explanation:
      "BFS는 거리 1인 단어를 모두 본 뒤에 거리 2로 넘어가니 처음 닿는 순간이 가장 짧다. 백트래킹은 처음 찾은 길이 가장 짧다는 보장이 없어 모든 길을 걸어야 하고, 촘촘한 243단어 입력에서 2.4초가 걸렸다. 메모리는 오히려 BFS가 더 쓸 수 있다.",
    anchor: "모든-사다리를-다-올라-본다",
  },
  {
    id: "leetcode-word-ladder-2",
    post: "leetcode-word-ladder",
    question: "글자 바꾸기 BFS에서 단어를 다음 층에 넣는 순간 목록에서 지우는 이유는?",
    choices: [
      "목록이 너무 커서 메모리를 아끼려고",
      "꺼낼 때 지우면 답이 틀리기 때문에",
      "같은 단어가 같은 층의 다른 단어에서 또 발견되어 중복으로 들어가는 것을 막으려고",
      "목표 단어를 빨리 찾으려고",
    ],
    answer: 2,
    explanation:
      "예시에서 ward는 word와 card 양쪽에서 나온다. 넣을 때 지우면 한 번만 들어가고, 꺼낼 때 지우면 답은 맞지만 같은 단어의 후보를 여러 번 만든다. 지우는 것이 곧 방문 표시다.",
    anchor: "글자를-하나씩-바꿔-보며-이웃을-찾는다",
  },
  {
    id: "leetcode-word-ladder-3",
    post: "leetcode-word-ladder",
    question: "와일드카드 통 풀이가 글자 바꾸기 풀이보다 유리해지는 경우는?",
    choices: [
      "알파벳이 아주 크거나 목록이 촘촘해 BFS가 대부분의 단어를 볼 때",
      "목록이 듬성해 BFS가 단어 몇 개만 보고 끝날 때",
      "단어 길이가 1일 때",
      "목표 단어가 목록에 없을 때",
    ],
    answer: 0,
    explanation:
      "통 풀이는 알파벳 크기와 상관없이 단어마다 통 L개만 연다. 대신 통을 미리 다 만들어야 해서, 사다리 위 단어만 보고 끝나는 듬성한 입력에서는 20.8ms로 글자 바꾸기(2.1ms)보다 느렸다. 촘촘한 입력에서는 6.6ms 대 70.7ms로 이겼다.",
    anchor: "두-입력으로-재-보면",
  },
  {
    id: "leetcode-word-ladder-4",
    post: "leetcode-word-ladder",
    question: "양방향 BFS에서 매번 두 물결 중 작은 쪽을 넓히는 이유는?",
    choices: [
      "큰 쪽은 이미 목표에 가까워서",
      "작은 쪽만 목록에서 지울 수 있어서",
      "두 물결의 크기를 맞춰야 답이 맞아서",
      "작은 쪽을 넓혀야 만들어지는 후보 수가 적어 전체에서 보는 단어가 줄어서",
    ],
    answer: 3,
    explanation:
      "물결을 넓히는 비용은 그 물결의 단어 수에 비례하니 작은 쪽을 넓히는 게 싸다. 양쪽에서 d/2층씩만 가면 되니 한쪽에서 d층을 가는 것보다 훨씬 적게 본다. 촘촘한 3,125단어 입력에서 한쪽 BFS는 3,125개, 양방향은 689개를 큐에 넣었다.",
    anchor: "양쪽-끝에서-물결을-함께-퍼뜨린다",
  },
  {
    id: "leetcode-word-ladder-5",
    post: "leetcode-word-ladder",
    question: "양방향 BFS에서 \"목표 단어가 목록에 있는지\" 검사를 빼고 cold에서 목록에 없는 warn으로 가면?",
    choices: [
      "0이 나온다",
      "무한 루프에 빠진다",
      "warn 쪽 물결이 ward로 건너와 5라는 틀린 답이 나온다",
      "4가 나온다",
    ],
    answer: 2,
    explanation:
      "목표 쪽 물결이 목록에 없는 warn에서 출발해 한 글자 차이인 ward로 건너오면, 시작 쪽 물결과 만나 cold, cord, word, ward, warn이라는 사다리가 만들어진다. 마지막 단어도 목록에 있어야 하니 정답은 0이다. 한쪽 BFS는 이 검사를 빼도 결국 0이 나오지만 목록을 다 훑은 뒤다.",
    anchor: "단어-수와-바꾼-횟수-그리고-지우는-시점",
  },
];
