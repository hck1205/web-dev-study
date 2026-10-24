import type { QuizQuestion } from "../types";

export const LEETCODE_DAILY_TEMPERATURES: QuizQuestion[] = [
  {
    id: "leetcode-daily-temperatures-1",
    post: "leetcode-daily-temperatures",
    question: "단조 스택 풀이는 `for` 안에 `while`이 있는데도 O(n)이다. 그 이유로 가장 정확한 것은?",
    choices: [
      "`while`은 많아야 한 번만 돌기 때문이다",
      "기온 범위가 71가지뿐이라 `while`이 상수 번 돈다",
      "날마다 스택에 한 번 들어가고 많아야 한 번 빠지므로 `while`의 전체 반복 횟수 합이 n을 넘지 않는다",
      "스택의 크기가 log n을 넘지 않는다",
    ],
    answer: 2,
    explanation:
      "`while`이 한 번 돌 때마다 스택에서 날 하나가 빠지는데, 날마다 한 번만 들어가니 빠지는 것도 전체 n번이 한계다. 한 날에 여러 번 돌 수는 있어도 합이 n으로 묶이는 분할 상환 O(n)이다. 기온이 내려가는 입력이면 스택은 n까지 커진다.",
    anchor: "반복문이-두-겹인데-왜-on인가",
  },
  {
    id: "leetcode-daily-temperatures-2",
    post: "leetcode-daily-temperatures",
    question: "왼쪽에서 오른쪽으로 도는 단조 스택에서 꺼내는 조건을 `<=`로 바꾸면 `[70, 70, 75]`의 결과는?",
    choices: ["`[2, 1, 0]`", "`[1, 1, 0]`", "`[0, 1, 0]`", "`[2, 2, 0]`"],
    answer: 1,
    explanation:
      "1일의 70도가 같은 70도인 0일을 꺼내면서 0일의 답을 1로 적어 버린다. 같은 기온은 따뜻해진 게 아니므로 정답은 `[2, 1, 0]`이다. 꺼내는 조건이 곧 답이 되는 조건이라 문제의 \"더 높은\"을 그대로 쓴 `<`가 맞다.",
    anchor: "같은-기온은-따뜻해진-게-아니다",
  },
  {
    id: "leetcode-daily-temperatures-3",
    post: "leetcode-daily-temperatures",
    question: "왼쪽에서 오른쪽 풀이를 돌리는 도중 스택에 남아 있는 날들의 기온은 바닥에서 위로 갈수록 어떤 순서인가?",
    choices: [
      "올라가는 순서(오름차순)",
      "순서가 정해져 있지 않다",
      "엄격하게 내려가는 순서이며 같은 값은 들어갈 수 없다",
      "내려가거나 같은 순서",
    ],
    answer: 3,
    explanation:
      "새 날보다 낮은 날만 꺼내고 넣으므로, 맨 위 아래에는 늘 그보다 높거나 같은 날이 있다. 같은 기온은 꺼내지 않으니 `[71, 69, 69, ...]`처럼 같은 값이 나란히 쌓일 수 있다. 그래서 엄격한 내림차순이 아니라 내려가거나 같은 순서다.",
    anchor: "아직-답을-못-찾은-날을-쌓아-두는-스택",
  },
  {
    id: "leetcode-daily-temperatures-4",
    post: "leetcode-daily-temperatures",
    question: "답 배열을 건너뛰는 O(1) 추가 공간 풀이에서 `temperatures[j] <= temperatures[i]`이고 `answer[j] === 0`이면 어떻게 하나?",
    choices: [
      "`i`의 답도 0으로 두고 멈춘다. `j`보다 따뜻한 날이 없고 `j`는 `i` 이하이기 때문이다",
      "`j`를 1 늘려 다음 날을 본다",
      "`answer[j]`를 다시 계산한다",
      "`i`의 답을 `j - i`로 적는다",
    ],
    answer: 0,
    explanation:
      "`answer[j]`가 0이면 `j`일 뒤에는 `j`보다 따뜻한 날이 없다. `i`일은 `j`일보다 따뜻하거나 같으니 `i`보다 따뜻한 날도 없다. 이 탈출이 빠지면 `j += 0`이 되어 같은 자리에서 끝없이 돈다.",
    anchor: "답-배열을-건너뛰며-따라가기",
  },
  {
    id: "leetcode-daily-temperatures-5",
    post: "leetcode-daily-temperatures",
    question: "기온이 하루씩 실시간으로 들어오고 그때그때 풀리는 날을 알려야 한다. 어떤 풀이를 써야 하나?",
    choices: [
      "오른쪽에서 왼쪽으로 후보를 남기는 단조 스택",
      "왼쪽에서 오른쪽으로 꺼내며 답을 적는 단조 스택",
      "답 배열을 건너뛰는 풀이",
      "구간 최댓값 표(sparse table)",
    ],
    answer: 1,
    explanation:
      "왼쪽에서 오른쪽 풀이는 미래 데이터를 보지 않고, 새 기온이 들어올 때 스택에서 꺼내는 날들의 답이 바로 정해진다. 나머지 풀이는 모두 오른쪽 끝부터 처리하거나 전체 배열로 표를 미리 만들어야 해서 실시간에는 쓸 수 없다.",
    anchor: "기온이-하루씩-실시간으로-들어온다면",
  },
];
