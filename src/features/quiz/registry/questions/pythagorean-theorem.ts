import type { QuizQuestion } from "../types";

export const PYTHAGOREAN_THEOREM: QuizQuestion[] = [
  {
    id: "pythagorean-theorem-1",
    post: "pythagorean-theorem",
    question: "피타고라스 정리 a² + b² = c²에서 c는 어느 변인가?",
    choices: ["가장 짧은 변", "직각과 마주 보는 빗변", "직각을 끼고 있는 두 변 중 긴 변", "세 변 중 아무 변이나"],
    answer: 1,
    explanation:
      "a와 b는 직각을 끼고 있는 두 변이고, c는 직각의 맞은편에 있는 가장 긴 변(빗변)이다. 아무 변이나 c에 넣으면 등호가 성립하지 않는다.",
    anchor: "직각삼각형의-세-변-사이에-있는-규칙",
  },
  {
    id: "pythagorean-theorem-2",
    post: "pythagorean-theorem",
    question: "삼각형 네 개를 옮기는 증명에서 c² = a² + b²이 되는 근거는?",
    choices: [
      "삼각형을 회전시키면 넓이가 두 배가 되기 때문",
      "같은 큰 정사각형에서 같은 삼각형 네 개를 뺀 나머지 넓이이기 때문",
      "a와 b가 항상 같은 길이이기 때문",
      "빗변이 항상 a + b와 같기 때문",
    ],
    answer: 1,
    explanation:
      "두 배치 모두 한 변이 a+b인 정사각형에서 넓이가 같은 삼각형 네 개를 뺀 나머지가 빈 곳이다. 처음 빈 곳은 c², 옮긴 뒤 빈 곳은 a² + b²이니 둘은 같다.",
    anchor: "삼각형-네-개를-옮겨-보면",
  },
  {
    id: "pythagorean-theorem-3",
    post: "pythagorean-theorem",
    question: "m = 3, n = 2를 a = m² − n², b = 2mn, c = m² + n²에 넣으면 나오는 피타고라스 수는?",
    choices: ["(3, 4, 5)", "(8, 15, 17)", "(6, 8, 10)", "(5, 12, 13)"],
    answer: 3,
    explanation: "a = 9 − 4 = 5, b = 2 × 3 × 2 = 12, c = 9 + 4 = 13이다. 25 + 144 = 169로 확인된다.",
    anchor: "3-4-5-같은-숫자들",
  },
  {
    id: "pythagorean-theorem-4",
    post: "pythagorean-theorem",
    question: "가장 긴 변이 c인 삼각형에서 a² + b² < c²이면 이 삼각형은?",
    choices: ["둔각삼각형", "예각삼각형", "직각삼각형", "정삼각형"],
    answer: 0,
    explanation:
      "코사인 법칙 c² = a² + b² − 2ab·cos C에서 c²이 더 크려면 cos C가 음수, 즉 C가 90도보다 커야 한다. 같으면 직각, a² + b²이 더 크면 예각삼각형이다.",
    anchor: "거꾸로도-성립한다",
  },
  {
    id: "pythagorean-theorem-5",
    post: "pythagorean-theorem",
    question: "여러 점 중 가장 가까운 점을 찾을 때 제곱근 계산을 생략해도 되는 이유는?",
    choices: [
      "제곱근은 항상 정수가 되기 때문",
      "제곱근은 크기 순서를 바꾸지 않아 제곱한 거리끼리 비교해도 결과가 같기 때문",
      "자바스크립트가 자동으로 제곱근을 계산해 주기 때문",
      "거리는 음수가 될 수 있기 때문",
    ],
    answer: 1,
    explanation:
      "거리는 0 이상이고 제곱근은 증가 함수라 제곱 거리의 순서와 실제 거리의 순서가 같다. 비교만 할 때는 제곱 거리로 충분하고 연산도 아낄 수 있다.",
    anchor: "거리-공식이-되기까지",
  },
  {
    id: "pythagorean-theorem-6",
    post: "pythagorean-theorem",
    question: "Math.sqrt(dx * dx + dy * dy) 대신 Math.hypot(dx, dy)를 쓰는 이유로 알맞은 것은?",
    choices: [
      "정수만 다룰 수 있어서",
      "항상 더 빨라서",
      "값이 아주 크거나 작을 때 제곱하면서 생기는 넘침·언더플로를 피하도록 계산해서",
      "3차원 이상은 hypot으로만 계산할 수 있어서",
    ],
    answer: 2,
    explanation:
      "1e200처럼 큰 값을 제곱하면 숫자 범위를 넘어 Infinity가 된다. hypot은 이런 경우를 피하도록 계산해 준다. 속도는 오히려 직접 계산이 빠른 경우가 많다.",
    anchor: "거리-공식이-되기까지",
  },
];
