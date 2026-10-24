import type { QuizQuestion } from "../types";

export const LEETCODE_ASTEROID_COLLISION: QuizQuestion[] = [
  {
    id: "leetcode-asteroid-collision-1",
    post: "leetcode-asteroid-collision",
    question: "`[-2, -1, 1, 2]`의 충돌이 끝난 결과는?",
    choices: [
      "`[]`. 부호가 다른 이웃이 만나 차례로 터진다",
      "`[-2, 2]`. 크기가 같은 것끼리 남는다",
      "`[-2, -1, 1, 2]`. 왼쪽으로 가는 것들 뒤에 오른쪽으로 가는 것들이 있어 아무도 만나지 않는다",
      "`[-1, 1]`. 작은 것만 남는다",
    ],
    answer: 2,
    explanation:
      "충돌은 왼쪽 소행성이 오른쪽으로, 오른쪽 소행성이 왼쪽으로 갈 때만 일어난다. -1과 1은 부호가 다르지만 서로 등지고 가서 멀어진다. 부호가 다르면 무조건 부딪힌다고 짠 코드는 이 입력에서 빈 배열을 낸다.",
    anchor: "부딪히는-건-오른쪽으로-가다-왼쪽에서-오는-쌍뿐",
  },
  {
    id: "leetcode-asteroid-collision-2",
    post: "leetcode-asteroid-collision",
    question: "스택 풀이에서 반복문의 어느 시점에 멈춰도 스택이 유지하는 모양은?",
    choices: [
      "크기가 작은 것부터 큰 것 순서",
      "음수 몇 개 뒤에 양수 몇 개",
      "양수 몇 개 뒤에 음수 몇 개",
      "부호가 번갈아 나오는 순서",
    ],
    answer: 1,
    explanation:
      "스택은 지금까지 본 소행성끼리 충돌을 끝낸 결과이고, 양수 뒤에 음수가 남아 있으면 아직 부딪힐 쌍이 남은 것이다. 그래서 늘 음수들 뒤에 양수들이다. 이 덕분에 새 음수는 스택 위쪽 양수들만 상대하고, 바닥의 음수들은 확정된 결과가 된다.",
    anchor: "스택은-늘-음수들-뒤에-양수들",
  },
  {
    id: "leetcode-asteroid-collision-3",
    post: "leetcode-asteroid-collision",
    question: "같은 크기일 때 새 소행성만 터지고 맨 위는 남기는 코드를 `[4, 7, -3, 2, -7, -5, 6]`에 돌리면?",
    choices: ["`[-5, 6]`", "`[4, 6]`", "`[-7, -5, 6]`", "`[4, 7, 6]`"],
    answer: 3,
    explanation:
      "-7이 2를 부순 뒤 7과 같은 크기로 만나 둘 다 터져야 하는데, 이 코드는 7을 남긴다. 남은 7이 -5까지 부숴서 결과가 `[4, 7, 6]`이 된다. 정답은 `[-5, 6]`이고, 같은 크기는 맨 위를 꺼내고 새 것도 버려야 한다.",
    anchor: "같은-크기를-빼먹는다",
  },
  {
    id: "leetcode-asteroid-collision-4",
    post: "leetcode-asteroid-collision",
    question: "반복문 안에 `while`이 있는 스택 풀이가 O(n)인 이유로 가장 정확한 것은?",
    choices: [
      "`while`이 돌 때마다 스택에서 하나가 빠지거나 새 소행성이 터져 끝나고, 소행성마다 스택에 한 번 들어가고 한 번 나오기 때문이다",
      "크기가 1000 이하라 `while`이 상수 번만 돌기 때문이다",
      "음수 소행성은 많아야 하나라서 `while`이 한 번만 돌기 때문이다",
      "스택 크기가 log n을 넘지 않기 때문이다",
    ],
    answer: 0,
    explanation:
      "한 번의 `while`에서 여러 개를 꺼낼 수는 있지만, 꺼낸 소행성은 다시 들어오지 않는다. 그래서 전체 실행에서 꺼내는 횟수의 합이 n을 넘지 않는 분할 상환 O(n)이다. 양수만 계속 오면 스택은 n까지 커진다.",
    anchor: "살아남은-소행성을-쌓아-두는-스택",
  },
  {
    id: "leetcode-asteroid-collision-5",
    post: "leetcode-asteroid-collision",
    question: "배열을 반으로 나눠 따로 정리한 뒤 합치는 풀이에서, 합칠 때 새로 부딪힐 수 있는 쌍은?",
    choices: [
      "두 결과의 모든 쌍",
      "왼쪽 결과의 음수들과 오른쪽 결과의 양수들",
      "왼쪽 결과 끝의 양수들과 오른쪽 결과 앞의 음수들",
      "크기가 같은 소행성 쌍만",
    ],
    answer: 2,
    explanation:
      "정리된 절반은 각각 음수들 뒤에 양수들 모양이다. 왼쪽 결과의 음수는 왼쪽 끝으로, 오른쪽 결과의 양수는 오른쪽 끝으로 빠져나가니, 마주 오는 건 왼쪽 끝 양수와 오른쪽 앞 음수뿐이다. 그래서 합치기는 왼쪽 결과를 스택으로 삼아 오른쪽의 음수들을 부딪히는 일이고, 전체는 O(n log n)이다.",
    anchor: "반으로-나눠-따로-정리한-뒤-합치기",
  },
];
