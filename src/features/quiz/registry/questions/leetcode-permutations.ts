import type { QuizQuestion } from "../types";

export const LEETCODE_PERMUTATIONS: QuizQuestion[] = [
  {
    id: "leetcode-permutations-1",
    post: "leetcode-permutations",
    question: "`used` 백트래킹에서 `path.pop()`은 했지만 `used[i] = false`를 빼먹으면 `[1, 2, 3]`의 결과는?",
    choices: [
      "6개가 나오지만 순서가 뒤섞인다",
      "같은 순열이 두 번씩 12개 나온다",
      "`[[1,2,3]]` 하나만 나온다",
      "모두 빈 배열로 나온다",
    ],
    answer: 2,
    explanation:
      "첫 순열을 만든 뒤 세 원소가 모두 '썼다'로 남아서, 돌아온 뒤에는 놓을 원소가 없다. 놓을 때 바꾼 상태는 `path`와 `used` 모두 되돌려야 한다. 모두 빈 배열이 되는 건 복사 없이 `path`를 기록했을 때다.",
    anchor: "되돌리기를-하나만-하면",
  },
  {
    id: "leetcode-permutations-2",
    post: "leetcode-permutations",
    question: "n = 6일 때 `used` 백트래킹의 재귀 호출 수가 1957번인 이유로 맞는 것은?",
    choices: [
      "6^6 / 24이기 때문이다",
      "깊이 k마다 마디가 n!/(n-k)!개라 1+6+30+120+360+720+720을 더한 값이다",
      "답 720개마다 호출이 정확히 세 번씩 필요하기 때문이다",
      "2^(n+1) - 1 꼴의 완전 이진 트리이기 때문이다",
    ],
    answer: 1,
    explanation:
      "깊이 k에는 앞 k자리를 정한 경우의 수 n!/(n-k)!만큼 마디가 있다. 모두 더하면 약 e · n!이라 답 하나에 마디가 세 개가 안 된다. 2^(n+1) - 1은 부분집합의 넣는다/안 넣는다 트리다.",
    anchor: "쓴-원소를-표시하며-자리를-채운다",
  },
  {
    id: "leetcode-permutations-3",
    post: "leetcode-permutations",
    question: "자리 바꾸기 풀이에서 재귀에서 돌아온 뒤 되돌리는 교환을 빼먹으면 어떻게 되나?",
    choices: [
      "개수는 6개로 맞지만 `213`, `231`이 빠지고 `123`, `132`가 두 번 나온다",
      "재귀가 끝나지 않는다",
      "순열이 3개만 나온다",
      "결과는 같고 순서만 사전순이 된다",
    ],
    answer: 0,
    explanation:
      "앞 갈래가 바꿔 놓은 배열 위에서 다음 갈래가 출발해서 같은 배치를 다시 만들고 일부를 놓친다. 실제로 `123 132 312 321 123 132`가 나왔다. 개수만 세는 테스트로는 잡히지 않는 버그다.",
    anchor: "배열-안에서-자리를-바꿔-가며-채우기",
  },
  {
    id: "leetcode-permutations-4",
    post: "leetcode-permutations",
    question: "다음 순열 규칙으로 `[1, 3, 2]`의 다음 순열을 구하면?",
    choices: ["`[3, 1, 2]`", "`[2, 3, 1]`", "`[1, 2, 3]`", "`[2, 1, 3]`"],
    answer: 3,
    explanation:
      "뒤에서 처음 작아지는 곳은 i = 0(1 < 3)이다. 뒤쪽에서 1보다 큰 가장 오른쪽 수 2와 바꾸면 `[2, 3, 1]`이고, 뒤쪽 `[3, 1]`을 뒤집으면 `[2, 1, 3]`이다. 뒤집기를 빼먹으면 `[2, 3, 1]`에서 멈춰 순열을 건너뛴다.",
    anchor: "재귀-없이-다음-순열로-넘어가기",
  },
  {
    id: "leetcode-permutations-5",
    post: "leetcode-permutations",
    question: "Permutations II(`[1, 1, 2]`)에서 `if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue`가 하는 일은?",
    choices: [
      "같은 값을 한 순열에 두 번 쓰지 못하게 한다",
      "같은 값이 여러 개면 늘 앞의 것부터 쓰게 해서, 같은 값끼리 자리만 바꾼 순열을 한 번만 만든다",
      "정렬되지 않은 입력을 걸러 낸다",
      "결과를 Set에 넣기 전에 중복을 확인한다",
    ],
    answer: 1,
    explanation:
      "두 1을 구분하지 않으려면 둘이 놓이는 순서를 하나로 고정하면 된다. 앞의 1이 아직 안 쓰였는데 뒤의 1을 먼저 놓으려 하면 건너뛴다. 그래서 `112 121 211` 세 개만 탐색되고, 같은 갈래를 두 번 걷지 않는다.",
    anchor: "같은-값이-섞여-있다면",
  },
];
