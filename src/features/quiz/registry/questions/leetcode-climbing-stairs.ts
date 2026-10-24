import type { QuizQuestion } from "../types";

export const LEETCODE_CLIMBING_STAIRS: QuizQuestion[] = [
  {
    id: "leetcode-climbing-stairs-1",
    post: "leetcode-climbing-stairs",
    question: "`ways(n) = ways(n-1) + ways(n-2)`가 빠짐없이, 겹침 없이 모든 방법을 센다고 말할 수 있는 근거는?",
    choices: [
      "n칸까지 가는 길은 항상 n-1칸과 n-2칸을 둘 다 밟기 때문",
      "모든 방법은 마지막 걸음이 1칸이거나 2칸이고, 둘이 동시에 성립할 수 없기 때문",
      "피보나치 수열이 원래 그렇게 정의돼 있기 때문",
      "첫 걸음이 항상 1칸이기 때문",
    ],
    answer: 1,
    explanation:
      "마지막 걸음으로 방법을 나누면 1칸으로 끝나는 무리와 2칸으로 끝나는 무리 둘뿐이다. 마지막 걸음은 하나라서 두 무리는 겹치지 않고, 다른 경우가 없으니 빠지는 것도 없다. 2칸으로 끝나는 길은 n-1칸을 밟지 않으므로 둘 다 밟는다는 설명은 틀리다.",
    anchor: "4칸짜리-계단을-손으로-세-본다",
  },
  {
    id: "leetcode-climbing-stairs-2",
    post: "leetcode-climbing-stairs",
    question: "메모 없는 재귀 `climbStairs(n)`의 호출 횟수는 답 `ways(n)`과 어떤 관계인가?",
    choices: [
      "항상 n번이다",
      "n²번이다",
      "2 × ways(n) - 1번이다",
      "ways(n)번이다",
    ],
    answer: 2,
    explanation:
      "바닥 사례가 1을 돌려주고 나머지는 더하기만 하므로, 답 ways(n)은 잎 노드 개수와 같고 노드 전체는 2 × ways(n) - 1개다. n = 5면 15번이다. 그래서 답이 커지는 속도(φⁿ)만큼 호출도 늘어난다.",
    anchor: "점화식-그대로-재귀로-짠다",
  },
  {
    id: "leetcode-climbing-stairs-3",
    post: "leetcode-climbing-stairs",
    question: "두 변수 풀이에서 반복문 안을 `prev = cur; cur = prev + cur;`로 쓰면 n = 4일 때 무엇이 나오나?",
    choices: ["5", "4", "6", "8"],
    answer: 3,
    explanation:
      "첫 줄에서 prev가 이미 cur로 바뀌어 두 번째 줄은 cur + cur, 즉 두 배가 된다. 1에서 시작해 2, 4, 8로 커져서 5가 아닌 8이 나온다. 새 값을 임시 변수에 먼저 계산하거나 오른쪽을 한꺼번에 평가하는 동시 대입을 써야 한다.",
    anchor: "손가락-두-개만-짚고-올라간다",
  },
  {
    id: "leetcode-climbing-stairs-4",
    post: "leetcode-climbing-stairs",
    question: "이 문제의 제약이 n ≤ 45인 이유로 가장 알맞은 것은?",
    choices: [
      "46칸의 답이 32비트 부호 있는 정수 최댓값을 넘기 때문",
      "46칸부터 재귀가 스택을 넘기 때문",
      "비네 공식이 46부터 틀리기 때문",
      "JavaScript Number가 46부터 정밀도를 잃기 때문",
    ],
    answer: 0,
    explanation:
      "45칸의 답은 1,836,311,903이고 46칸은 2,971,215,073이라 int 최댓값 2,147,483,647을 넘는다. Java int로 46을 계산하면 예외 없이 -1,323,752,223이 나온다. 비네 공식은 n = 70, Number 덧셈은 n = 78에서 처음 틀리니 45와는 관계가 없다.",
    anchor: "python과-java로-옮길-때",
  },
  {
    id: "leetcode-climbing-stairs-5",
    post: "leetcode-climbing-stairs",
    question: "한 번에 1~k칸을 오를 수 있는 변형을 O(n)에 푸는 방법은?",
    choices: [
      "칸마다 앞 k칸을 모두 더한다",
      "앞 k칸의 합을 창으로 들고 다니며, 새 칸을 더하고 k칸 전 칸을 뺀다",
      "k×k 행렬을 n번 곱한다",
      "걸음 크기를 정렬한 뒤 큰 걸음부터 쓴다",
    ],
    answer: 1,
    explanation:
      "ways(i)는 앞 k칸의 합이라, 그 합을 창처럼 유지하면 칸마다 더하기 하나와 빼기 하나로 끝난다. 매번 k개를 다 더하면 O(nk)가 된다. 행렬은 거듭제곱으로 log n번 곱할 때 의미가 있고, n번 곱하면 오히려 느리다.",
    anchor: "면접관이-조건을-바꾸면",
  },
];
