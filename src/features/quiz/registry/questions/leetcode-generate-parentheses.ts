import type { QuizQuestion } from "../types";

export const LEETCODE_GENERATE_PARENTHESES: QuizQuestion[] = [
  {
    id: "leetcode-generate-parentheses-1",
    post: "leetcode-generate-parentheses",
    question: "백트래킹에서 `)`를 붙이는 조건으로 맞는 것은? (`open`은 지금까지 연 개수, `close`는 닫은 개수)",
    choices: ["`close < n`", "`close <= open`", "`close < open`", "`open === n`"],
    answer: 2,
    explanation:
      "닫은 개수가 연 개수보다 적을 때만 닫을 괄호가 남아 있다. `close <= open`이면 잔고 0에서도 `)`를 붙여 `)(` 같은 틀린 문자열이 나오고, `close < n`은 개수만 보고 순서를 보지 않는다. `open === n`은 여는 괄호를 다 쓴 상태일 뿐 닫아도 되는지와는 상관이 없다.",
    anchor: "틀린-접두사는-더-키우지-않는다",
  },
  {
    id: "leetcode-generate-parentheses-2",
    post: "leetcode-generate-parentheses",
    question: "길이 2n짜리 문자열을 전부 만들고 검사하는 풀이에서 `)`로 시작하는 문자열은 전체의 얼마이고, 백트래킹은 이것을 어떻게 다루나?",
    choices: [
      "절반이다. 백트래킹은 첫 글자에서 `close < open` 조건에 막혀 그 갈래에 들어가지 않는다",
      "4분의 1이다. 백트래킹은 끝까지 만든 뒤 검사로 걸러 낸다",
      "절반이다. 백트래킹도 끝까지 만든 뒤 Set으로 지운다",
      "거의 없다. 그래서 두 풀이의 속도는 같다",
    ],
    answer: 0,
    explanation:
      "첫 칸이 `)`인 문자열은 나머지 2n - 1칸의 조합 수만큼, 즉 전체의 절반이다. 전부 만드는 풀이는 이 문자열들을 끝까지 채운 뒤에야 버린다. 백트래킹은 잔고가 0일 때 `)`를 붙이지 않으니 이 갈래 자체가 생기지 않는다.",
    anchor: "일단-다-만들고-검사하기",
  },
  {
    id: "leetcode-generate-parentheses-3",
    post: "leetcode-generate-parentheses",
    question: "올바른 괄호 문자열을 `(A)B`로 나누는 동적 계획법에서, n쌍 문자열의 `A`가 c쌍이면 `B`는 몇 쌍인가?",
    choices: ["n - c쌍", "n - 1 - c쌍", "c - 1쌍", "n + 1 - c쌍"],
    answer: 1,
    explanation:
      "첫 `(`와 그 짝 `)`가 한 쌍을 쓰므로 남은 n - 1쌍을 안쪽 `A`와 뒤쪽 `B`가 나눠 가진다. 그래서 `A`가 c쌍이면 `B`는 n - 1 - c쌍이고, c를 0부터 n - 1까지 바꾸며 붙인다. 이 분해를 개수로 바꾼 것이 카탈란 수 점화식이다.",
    anchor: "첫-괄호가-닫히는-자리로-나누기",
  },
  {
    id: "leetcode-generate-parentheses-4",
    post: "leetcode-generate-parentheses",
    question: "백트래킹 풀이의 시간 복잡도를 가장 잘 설명한 것은?",
    choices: [
      "O(2^n)이다. 칸마다 두 갈래이기 때문이다",
      "O(n²)이다. 재귀 깊이가 2n이기 때문이다",
      "O(n!)이다. 순열을 만드는 것과 같기 때문이다",
      "출력 크기에 비례한다. 답이 카탈란 수 C(n)개이고 각각 길이 2n이라 O(4^n / √n)이다",
    ],
    answer: 3,
    explanation:
      "가지치기 덕분에 막다른 갈래에 들어가지 않아 호출 수가 답 개수의 다섯 배 안팎으로 유지된다. 답이 C(n) ≈ 4^n / (n^1.5 √π)개이고 하나를 적는 데 O(n)이 드니 전체는 O(4^n / √n)이다. 재귀 깊이 2n은 공간 복잡도의 이야기다.",
    anchor: "답의-개수는-카탈란-수",
  },
  {
    id: "leetcode-generate-parentheses-5",
    post: "leetcode-generate-parentheses",
    question: "개수만 구하려고 카탈란 수를 JavaScript `number`로 계산했다. 값이 정확하지 않게 되기 시작하는 지점은?",
    choices: [
      "C(8)부터. 1430이 32비트를 넘는다",
      "C(19)부터. 17억을 넘으면 부동소수점 오차가 생긴다",
      "C(31)부터. 2^53을 넘어 정수를 정확히 표현할 수 없다",
      "C(100)까지는 정확하다",
    ],
    answer: 2,
    explanation:
      "JavaScript `number`는 2^53까지만 정수를 정확히 담는다. C(31) = 14544636039226909가 이미 그 값을 넘으므로 `BigInt`가 필요하다. Java `long`은 C(35)까지 담고 C(36)에서 넘친다.",
    anchor: "개수만-알려-달라면",
  },
];
