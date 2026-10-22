import type { QuizQuestion } from "../types";

export const RECURSION_BACKTRACKING: QuizQuestion[] = [
  {
    id: "recursion-backtracking-1",
    post: "recursion-backtracking",
    question: "부분집합을 구하는 백트래킹에서 `result.push(path)`로 기록했더니 `[[], [], [], …]`이 나왔다. 왜 그런가?",
    choices: [
      "path.pop()이 기록된 배열에서도 원소를 지워서, 탐색이 끝나면 비어 있는 같은 배열 하나를 모든 칸이 가리키기 때문에",
      "재귀가 기저 조건에 도달하지 못해서",
      "for문의 시작점을 start가 아니라 0으로 둬서",
      "push가 배열을 펼쳐서 넣기 때문에",
    ],
    answer: 0,
    explanation:
      "result에는 path의 사본이 아니라 path 배열 하나의 참조가 들어간다. 탐색 내내 같은 path에 넣고 빼다가 마지막에 비니, 모든 칸이 빈 배열로 보인다. 기록할 때 `[...path]`로 복사한다.",
    anchor: "기록한-답이-전부-같은-배열이었다",
  },
  {
    id: "recursion-backtracking-2",
    post: "recursion-backtracking",
    question: "조합(1..n 중 k개)을 만들 때 재귀 호출에 `start`를 i + 1로 넘기는 이유는?",
    choices: [
      "콜 스택 깊이를 줄이려고",
      "[1, 2]와 [2, 1]처럼 순서만 다른 묶음이 두 번 나오지 않게 하려고",
      "같은 수를 여러 번 고를 수 있게 하려고",
      "답을 오름차순으로 정렬해서 돌려주려고",
    ],
    answer: 1,
    explanation:
      "앞에서 고른 수보다 뒤의 수만 후보로 삼으면 각 묶음이 오름차순 한 가지로만 만들어진다. 순열은 순서가 의미 있으니 매번 처음부터 보되 used로 이미 쓴 것을 건너뛴다. 같은 수를 반복해 쓰게 하려면 i + 1이 아니라 i를 넘긴다.",
    anchor: "다음-후보를-고르는-규칙만-다르다",
  },
  {
    id: "recursion-backtracking-3",
    post: "recursion-backtracking",
    question: "11개 원소의 모든 순열을 배열에 모아 돌려주는 함수가 Node 22에서 'JavaScript heap out of memory'로 죽었다. 가장 알맞은 대응은?",
    choices: [
      "재귀를 반복문으로 바꾼다",
      "--stack-size를 늘린다",
      "답을 모으지 않고 하나 만들 때마다 콜백으로 처리하고 버린다",
      "path를 매번 복사해서 넘긴다",
    ],
    answer: 2,
    explanation:
      "11!은 약 4천만 개라 배열을 다 담으면 힙이 바닥난다. 깊이는 11밖에 안 돼서 스택 문제가 아니다. 답마다 콜백으로 처리하면 같은 개수를 3.2초, 4MB로 셌다.",
    anchor: "답의-개수가-곧-걸리는-시간이다",
  },
  {
    id: "recursion-backtracking-4",
    post: "recursion-backtracking",
    question: "`[1, 1, 2]`의 순열에서 중복을 없애려고 정렬한 뒤 `nums[i] === nums[i - 1] && !used[i - 1]`이면 건너뛴다. 이 조건이 막는 것은?",
    choices: [
      "같은 원소를 한 순열 안에서 두 번 쓰는 것",
      "길이가 다른 순열이 만들어지는 것",
      "정렬되지 않은 입력이 들어오는 것",
      "같은 자리에 같은 값을 두 번 시도해 같은 가지를 다시 탐색하는 것",
    ],
    answer: 3,
    explanation:
      "같은 값이 여러 개면 항상 앞의 것부터 쓰도록 강제해서, 같은 값끼리 자리만 바꾼 경우가 한 번만 만들어진다. 한 순열 안에서 같은 원소를 두 번 쓰는 건 used가 따로 막는다. 결과를 Set으로 거르는 방식은 같은 가지를 이미 다 탐색한 뒤라 느리다.",
    anchor: "같은-값이-섞이면-같은-답이-또-나온다",
  },
  {
    id: "recursion-backtracking-5",
    post: "recursion-backtracking",
    question: "Combination Sum에서 `if (cands[i] > remain) break;` 가지치기를 넣었더니 답 개수가 줄었다. 가장 그럴듯한 원인은?",
    choices: [
      "후보를 오름차순으로 정렬하지 않아서 뒤쪽의 작은 후보를 놓쳤다",
      "가지치기는 원래 답을 줄이는 기법이다",
      "remain이 음수가 되는 경우를 막지 않아서",
      "path를 복사하지 않아서",
    ],
    answer: 0,
    explanation:
      "break는 '뒤쪽 후보는 모두 더 크다'는 전제에서만 맞고, 그 전제는 정렬이 만든다. 정렬하지 않으면 답이 있는 가지까지 잘라 버린다. 가지치기는 답을 바꾸지 않고 헛걸음만 줄여야 하니, 넣기 전후로 답의 개수를 비교해 확인한다.",
    anchor: "가망-없는-가지는-들어가지-않는다",
  },
  {
    id: "recursion-backtracking-6",
    post: "recursion-backtracking",
    question: "N-Queens에서 두 퀸이 같은 ↘ 대각선 위에 있는지 O(1)에 확인하는 방법은?",
    choices: [
      "row + col이 같은지 본다",
      "row - col이 같은지 본다",
      "row * col이 같은지 본다",
      "판 전체를 훑어 확인한다",
    ],
    answer: 1,
    explanation:
      "↘ 방향으로 한 칸 가면 행과 열이 함께 1씩 늘어 row - col이 변하지 않는다. ↙ 대각선은 row + col이 같다. 열과 두 대각선을 집합으로 들고 있으면 판을 훑지 않고 바로 확인된다.",
    anchor: "퀸을-놓았다-물리는-n-queens",
  },
  {
    id: "recursion-backtracking-7",
    post: "recursion-backtracking",
    question: "재귀 피보나치는 메모이제이션으로 호출이 3천만 번에서 69번으로 줄었다. 부분집합 백트래킹에 같은 방법이 잘 통하지 않는 이유는?",
    choices: [
      "백트래킹은 재귀를 쓰지 않아서",
      "Map이 배열을 키로 쓸 수 없어서",
      "결과가 지금까지 고른 경로 전체에 달려 있어 같은 상태가 거의 반복되지 않아서",
      "백트래킹은 콜 스택이 너무 깊어서",
    ],
    answer: 2,
    explanation:
      "메모이제이션은 같은 인자로 같은 계산이 반복될 때(겹치는 부분 문제) 효과가 있다. 백트래킹은 경로마다 상태가 달라 기억해 둘 게 거의 없고, 줄이는 수단은 가지치기다. 인자 몇 개로 답이 정해지는 문제라면 동적 계획법으로 넘어간다.",
    anchor: "같은-계산을-또-하는-재귀",
  },
];
