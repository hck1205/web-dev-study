import type { QuizQuestion } from "../types";

export const LEETCODE_WORD_BREAK: QuizQuestion[] = [
  {
    id: "leetcode-word-break-1",
    post: "leetcode-word-break",
    question: "`\"sunflower\"`, 사전 `[\"sun\", \"sunf\", \"flow\", \"flower\", \"er\"]`에서 \"가장 긴 단어부터 뗀다\"는 탐욕은 무엇을 내고, 왜 그런가?",
    choices: [
      "true. sunf 뒤의 lower도 단어이기 때문",
      "false. sunf를 떼면 남은 lower를 시작하는 단어가 없기 때문",
      "true. flower가 가장 긴 단어라 먼저 떼기 때문",
      "false. sun과 sunf가 겹치는 단어라 둘 다 쓸 수 없기 때문",
    ],
    answer: 1,
    explanation:
      "맨 앞에서 가장 긴 단어는 sunf라 그걸 떼고, 남은 lower는 l로 시작하는 단어가 없어 막힌다. 탐욕은 이 결정을 되돌리지 않아 false를 낸다. 실제로는 sun + flower로 나뉘니 답은 true다.",
    anchor: "가장-긴-단어부터-떼면-막힌다",
  },
  {
    id: "leetcode-word-break-2",
    post: "leetcode-word-break",
    question: "탑다운 메모에서 성공(true)만 적고 실패(false)는 적지 않으면 어떻게 되나?",
    choices: [
      "답이 틀린다",
      "공간만 늘고 시간은 같다",
      "답은 맞지만 \"aaa…ab\"처럼 전부 실패하는 입력에서 메모 없는 재귀처럼 지수 시간이 걸린다",
      "재귀 깊이가 n²이 되어 스택이 넘친다",
    ],
    answer: 2,
    explanation:
      "이 문제의 폭발은 실패하는 길을 반복해서 다시 가 보는 데서 생긴다. 실패를 적지 않으면 같은 자리를 계속 다시 시도하니 메모가 듣지 않는다. 성공하는 입력에서는 첫 성공에서 바로 돌아와 차이가 없어서 예제로는 잘 안 잡힌다.",
    anchor: "같은-자리를-두-번-묻지-않는다",
  },
  {
    id: "leetcode-word-break-3",
    post: "leetcode-word-break",
    question: "기본 바텀업 풀이(i, j 이중 반복 + `s.slice(j, i)` + Set 확인)의 시간 복잡도를 부분 문자열 비용까지 세면?",
    choices: ["O(n)", "O(n log n)", "O(n²)", "O(n³)"],
    answer: 3,
    explanation:
      "i와 j의 이중 반복이 O(n²)이고, 매번 길이 최대 n인 부분 문자열을 만들고 해시를 계산하는 데 O(n)이 든다. 그래서 O(n³)이다. 단어 최대 길이 L로 j 범위를 줄이면 O(n × L²)이 된다.",
    anchor: "칸막이-자리마다-동그라미를-친다",
  },
  {
    id: "leetcode-word-break-4",
    post: "leetcode-word-break",
    question: "j를 `i - maxLen`부터만 돌려도 답을 놓치지 않는 이유는?",
    choices: [
      "마지막 조각 s[j..i)는 사전 단어여야 하는데 사전 단어는 maxLen보다 길 수 없기 때문",
      "dp 배열이 maxLen칸마다 반복되기 때문",
      "j가 작을수록 dp[j]가 항상 false이기 때문",
      "maxLen보다 앞의 글자는 이미 다른 단어로 덮였기 때문",
    ],
    answer: 0,
    explanation:
      "dp[i]가 참이 되려면 마지막 조각 s[j..i)가 사전에 있어야 한다. 사전에서 가장 긴 단어가 maxLen글자니, 그보다 긴 조각을 만드는 j는 처음부터 답이 될 수 없다. 그래서 그 j들을 건너뛰어도 결과가 같다.",
    anchor: "마지막-조각은-20글자를-넘지-않는다",
  },
  {
    id: "leetcode-word-break-5",
    post: "leetcode-word-break",
    question: "\"가장 적은 단어 수로 나눠라\"는 변형을 가장 자연스럽게 푸는 관점은?",
    choices: [
      "트라이에서 가장 깊은 노드를 찾는다",
      "자리를 정점, 단어를 간선으로 본 그래프에서 0부터 n까지 BFS 최단 경로를 구한다",
      "가장 긴 단어부터 떼는 탐욕을 쓴다",
      "Word Break II로 모든 문장을 만든 뒤 가장 짧은 것을 고른다",
    ],
    answer: 1,
    explanation:
      "s[i..j)가 단어일 때 i에서 j로 가는 간선을 그으면, 단어 수는 경로의 간선 수다. 간선 가중치가 모두 1이라 BFS가 처음 n에 닿는 단계가 최소 단어 수다. 모든 문장을 만드는 방법은 출력이 지수일 수 있어 비효율적이다.",
    anchor: "자리를-정점으로-보면-길-찾기다",
  },
];
