import type { QuizQuestion } from "../types";

export const LEETCODE_UNIQUE_PATHS: QuizQuestion[] = [
  {
    id: "leetcode-unique-paths-1",
    post: "leetcode-unique-paths",
    question: "칸 (r, c)까지 오는 경로 수를 위 칸과 왼쪽 칸 값의 합으로 구해도 되는 이유는?",
    choices: [
      "위 칸과 왼쪽 칸의 값이 항상 같아서",
      "마지막 한 걸음이 위에서 왔는지 왼쪽에서 왔는지로 나누면 두 경우가 겹치지 않고 빠짐없이 나뉘어서",
      "격자가 정사각형일 때만 성립하는 대칭 때문에",
      "경로 수가 파스칼의 삼각형과 같다는 공식을 먼저 증명해 두었기 때문에",
    ],
    answer: 1,
    explanation:
      "로봇은 오른쪽과 아래로만 움직이니 (r, c)에 들어오는 마지막 걸음은 위 칸 아니면 왼쪽 칸에서 온다. 두 경우는 서로 겹치지 않으니 더하기만 하면 된다. 파스칼의 삼각형은 이 점화식에서 나오는 결과이지 근거가 아니다.",
    anchor: "3--4-격자에서-손으로-세어-보기",
  },
  {
    id: "leetcode-unique-paths-2",
    post: "leetcode-unique-paths",
    question: "한 줄 DP `dp[c] += dp[c - 1]`에서 더하기 직전의 `dp[c]`와 `dp[c - 1]`은 각각 무엇인가?",
    choices: [
      "둘 다 윗줄 값",
      "둘 다 이번 줄 값",
      "`dp[c]`는 윗줄(위 칸) 값, `dp[c - 1]`은 이미 덮어쓴 이번 줄(왼쪽 칸) 값",
      "`dp[c]`는 이번 줄 값, `dp[c - 1]`은 윗줄 값",
    ],
    answer: 2,
    explanation:
      "왼쪽에서 오른쪽으로 덮어쓰니 c번 칸은 아직 덮어쓰기 전이라 윗줄 값이고, c-1번 칸은 방금 이번 줄 값으로 바뀌었다. 그래서 한 줄로 '위 + 왼쪽'이 된다. 오른쪽에서 왼쪽으로 돌면 왼쪽 칸이 아직 윗줄 값이라 틀린다.",
    anchor: "한-줄이면-충분하다",
  },
  {
    id: "leetcode-unique-paths-3",
    post: "leetcode-unique-paths",
    question: "JavaScript에서 `fact(m + n - 2) / (fact(m - 1) * fact(n - 1))`로 답을 구하면 uniquePaths(2, 24)가 24가 아니라 23.999999999999996이 나온다. 원인은?",
    choices: [
      "조합 공식 C(m+n-2, m-1) 자체가 틀려서",
      "24!이 2^53을 넘어 64비트 실수로 정확히 담기지 않아서",
      "재귀 깊이가 너무 깊어져서",
      "m과 n의 순서를 바꿔 넣어서",
    ],
    answer: 1,
    explanation:
      "JavaScript 숫자는 64비트 실수라 약 9×10^15을 넘는 정수는 근사값이 된다. 24!은 약 6.2×10^23이라 오차가 섞이고 나눗셈 결과도 정수가 아니다. 곱하고 바로 나누기를 번갈아 하면 매 단계 값이 이항 계수라 중간값이 작게 유지된다.",
    anchor: "순서만-고르면-되는-조합-공식",
  },
  {
    id: "leetcode-unique-paths-4",
    post: "leetcode-unique-paths",
    question: "Unique Paths II(장애물)에서 첫 줄을 '막힌 칸만 0, 나머지는 1'로 미리 채우면 `[[0,1,0],[0,0,0]]`의 결과는?",
    choices: ["1 (정답)", "0", "2 (오답)", "3 (오답)"],
    answer: 2,
    explanation:
      "첫 줄의 장애물 오른쪽 칸은 오른쪽으로만 가서는 닿을 수 없는데 1로 남아 경로가 하나 더 세어진다. 그래서 정답 1 대신 2가 나온다. 출발점만 1로 두고 첫 줄도 점화식으로 이어받게 하면 이 실수가 생기지 않는다.",
    anchor: "격자가-바뀌면-점화식도-바뀐다",
  },
  {
    id: "leetcode-unique-paths-5",
    post: "leetcode-unique-paths",
    question: "Java로 조합 공식을 구현할 때 답은 2×10^9 이하인데도 `res`를 `long`으로 둬야 하는 이유는?",
    choices: [
      "`res * (total - k + i)`가 나누기 전에 잠깐 답보다 훨씬 커져 `int`를 넘을 수 있어서",
      "Java의 정수 나눗셈이 `int`에서는 반올림을 해서",
      "`Math.min`이 `long`만 받아서",
      "DP 표의 중간 칸이 최종 답보다 커서",
    ],
    answer: 0,
    explanation:
      "곱한 뒤 나누기 직전의 값은 답의 수십 배까지 커진다. `int`로 두면 (7, 78)처럼 곱셈이 조용히 넘쳐 음수가 나온다. DP 표는 값이 오른쪽 아래로 커지기만 해서 어느 칸도 최종 답보다 크지 않으니 `int`로 충분하다.",
    anchor: "python의-큰-정수와-java의-int",
  },
];
