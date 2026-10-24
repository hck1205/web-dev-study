import type { QuizQuestion } from "../types";

export const LEETCODE_TWO_SUM_II: QuizQuestion[] = [
  {
    id: "leetcode-two-sum-ii-1",
    post: "leetcode-two-sum-ii",
    question: "정렬된 배열에서 `numbers[l] + numbers[r]`이 목표보다 크면 `r--`를 한다. 이렇게 해도 답을 놓치지 않는 이유는?",
    choices: [
      "numbers[r]은 남은 수 중 가장 작은 numbers[l]과 더해도 크니, 어떤 짝으로도 답이 될 수 없어서",
      "r을 줄이면 합이 반드시 목표와 같아지기 때문에",
      "답은 항상 배열 가운데 근처에 있기 때문에",
      "l을 움직여도 결과가 같아서 어느 쪽을 움직여도 상관없기 때문에",
    ],
    answer: 0,
    explanation:
      "남은 범위에서 numbers[l]이 가장 작으니, 그와 더해도 크다면 numbers[r]은 누구와 더해도 크다. 짝 표로 보면 열 하나를 통째로 지우는 것이고, 지운 열에 답이 없다는 걸 확인한 뒤 지운다. 합이 크다고 l을 움직이면 합이 더 커져 답을 지나칠 수 있다.",
    anchor: "한쪽을-옮겨도-답을-놓치지-않는-이유",
  },
  {
    id: "leetcode-two-sum-ii-2",
    post: "leetcode-two-sum-ii",
    question: "수마다 짝을 이분 탐색으로 찾을 때 탐색 범위를 `lo = 0`부터 잡으면 `[3, 3]`, 목표 6에서 무엇이 나오나?",
    choices: [
      "[1, 2]. 범위와 상관없이 정답이 나온다",
      "[]. 짝을 찾지 못한다",
      "[1, 1]. 첫 3이 자기 자신을 짝으로 찾는다",
      "무한 루프에 빠진다",
    ],
    answer: 2,
    explanation:
      "lo = 0, hi = 1이면 mid가 0이라 첫 3이 자기 칸에서 짝 3을 찾아 버린다. 같은 칸을 두 번 쓴 것이다. 짝은 i 오른쪽(i + 1부터)에서만 찾아야 하고, 그렇게 하면 왼쪽은 이미 확인한 범위라 빠지는 답도 없다.",
    anchor: "자주-틀리는-곳",
  },
  {
    id: "leetcode-two-sum-ii-3",
    post: "leetcode-two-sum-ii",
    question: "이 문제에서 해시맵 풀이(시간 O(n))가 정답 풀이로 부족한 이유는?",
    choices: [
      "해시맵은 정렬된 배열에서 동작하지 않기 때문에",
      "추가 공간을 상수로 제한했는데 해시맵은 O(n) 공간을 쓰기 때문에",
      "해시맵 조회가 최악 O(n)이라 전체가 O(n²)이 되기 때문에",
      "음수가 있으면 해시맵 키로 쓸 수 없기 때문에",
    ],
    answer: 1,
    explanation:
      "해시맵 풀이는 결과는 맞지만 원소 수만큼 메모리를 쓴다. 문제는 추가 공간 O(1)을 요구하고, 정렬돼 있다는 정보를 쓰면 포인터 두 개로 같은 O(n) 시간에 풀 수 있다. 정렬 여부와 음수는 해시맵 동작과 상관없다.",
    anchor: "짝을-장부에-적어-둔다",
  },
  {
    id: "leetcode-two-sum-ii-4",
    post: "leetcode-two-sum-ii",
    question: "Java에서 값이 int 전체 범위일 때 `int sum = numbers[l] + numbers[r]`로 쓰면 어떤 일이 생길 수 있나?",
    choices: [
      "컴파일 에러가 난다",
      "ArithmeticException이 던져진다",
      "합이 자동으로 long으로 바뀌어 문제없다",
      "큰 두 수의 합이 음수로 감겨 목표보다 작다고 판단하고 l을 밀어 답을 지나친다",
    ],
    answer: 3,
    explanation:
      "Java의 int 덧셈은 넘쳐도 예외 없이 음수로 감긴다. 그러면 비교 방향이 뒤집혀 엉뚱한 포인터가 움직인다. (long) numbers[l] + numbers[r]처럼 더하기 전에 한쪽을 long으로 바꿔야 하고, 괄호로 합 전체를 감싼 뒤 바꾸면 이미 넘친 값이라 소용없다.",
    anchor: "자주-틀리는-곳",
  },
  {
    id: "leetcode-two-sum-ii-5",
    post: "leetcode-two-sum-ii",
    question: "정렬된 `[1, 3, 4, 6, 8, 11]`에서 합이 7 이하인 짝의 개수를 투 포인터로 셀 때, `numbers[l] + numbers[r] <= 7`이면 하는 일과 그 결과는?",
    choices: [
      "count += 1 하고 r--. 결과 3",
      "count += r - l 하고 l++. 결과 4",
      "count += r - l 하고 r--. 결과 5",
      "count += l 하고 l++. 결과 2",
    ],
    answer: 1,
    explanation:
      "numbers[l]과 numbers[r]의 합이 7 이하라면 그 사이의 더 작은 수들과 numbers[l]의 합도 모두 7 이하다. 그래서 r - l개를 한 번에 세고 l을 민다. (1,3), (1,4), (1,6), (3,4)로 4개다.",
    anchor: "면접관이-이어서-바꾸는-문제들",
  },
];
