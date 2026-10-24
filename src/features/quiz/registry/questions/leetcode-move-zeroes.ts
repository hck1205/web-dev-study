import type { QuizQuestion } from "../types";

export const LEETCODE_MOVE_ZEROES: QuizQuestion[] = [
  {
    id: "leetcode-move-zeroes-1",
    post: "leetcode-move-zeroes",
    question: "앞에서부터 훑으며 0을 만나면 splice(i, 1)로 빼고 push(0)한 뒤 매번 i++를 하면 [4, 0, 0, 5, 0, 7]의 결과는?",
    choices: [
      "[4, 5, 7, 0, 0, 0]. 정답이다",
      "[4, 0, 5, 7, 0, 0]. 당겨 온 0을 건너뛰어 하나가 남는다",
      "[4, 5, 0, 7, 0, 0]. 마지막 0만 남는다",
      "무한 루프에 빠진다",
    ],
    answer: 1,
    explanation:
      "1번 칸의 0을 빼면 2번 칸의 0이 1번으로 당겨지는데 i++가 그 칸을 건너뛴다. 그래서 연달아 있는 0 중 하나가 앞에 남는다. 뺀 뒤에는 i를 그대로 두거나 뒤에서 앞으로 훑어야 한다.",
    anchor: "splice-뒤에-인덱스를-그대로-올린다",
  },
  {
    id: "leetcode-move-zeroes-2",
    post: "leetcode-move-zeroes",
    question: "쓰기 포인터 w로 nums[w++] = nums[r]처럼 덮어써도 아직 읽지 않은 값이 사라지지 않는 이유는?",
    choices: [
      "덮어쓰기 전에 값을 임시 변수에 저장하기 때문에",
      "0은 덮어써도 되는 값이라서",
      "w는 지금까지 읽은 0 아닌 값의 개수라 항상 r 이하이기 때문에",
      "자바스크립트 배열은 덮어쓰면 자동으로 뒤로 밀리기 때문에",
    ],
    answer: 2,
    explanation:
      "w는 읽은 칸 중 0이 아닌 칸의 수라 r을 앞지를 수 없다. 그래서 덮어쓰는 칸은 언제나 이미 읽은 칸이고, 그 값은 이미 앞에 옮겼거나 0이다. 같은 방향 투 포인터로 제자리 수정을 할 때 가장 먼저 확인하는 성질이다.",
    anchor: "두-번-훑기-앞을-채우고-뒤를-0으로",
  },
  {
    id: "leetcode-move-zeroes-3",
    post: "leetcode-move-zeroes",
    question: "바꾸기 풀이에서 쓰기를 줄이려고 if (nums[r] !== 0) { nums[w] = nums[r]; nums[r] = 0; w++; }처럼 w !== r 조건 없이 대입 두 개로 바꾸면 [1, 2, 3]은?",
    choices: [
      "[0, 0, 0]. w === r일 때 방금 놓은 값을 0으로 지운다",
      "[1, 2, 3]. 0이 없으니 그대로다",
      "[2, 3, 0]. 한 칸씩 당겨진다",
      "[1, 2, 0]. 마지막 값만 지워진다",
    ],
    answer: 0,
    explanation:
      "0이 없으면 매번 w와 r이 같은 칸이다. nums[w] = nums[r]은 아무 일도 안 하지만 nums[r] = 0이 그 값을 지운다. 바꾸기는 같은 칸이어도 안전했지만 대입 두 개로 쪼개면 w !== r 조건이 꼭 필요하다.",
    anchor: "쓰기-횟수를-줄이라는-후속-질문",
  },
  {
    id: "leetcode-move-zeroes-4",
    post: "leetcode-move-zeroes",
    question: "0 아닌 값의 순서를 지키지 않아도 된다면 쓰기를 더 줄이는 방법은?",
    choices: [
      "안정 정렬로 0을 뒤로 보낸다",
      "왼쪽은 0을, 오른쪽은 0 아닌 값을 찾아 오른쪽 값을 왼쪽 빈자리에 놓는 양 끝 포인터",
      "splice를 뒤에서 앞으로 돌린다",
      "쓰기 포인터를 두 개 둔다",
    ],
    answer: 1,
    explanation:
      "양 끝 포인터는 0 하나당 많아야 한 번만 옮긴다. [0, 1, 2, 3, 4]에서 순서 유지 버전은 8번을 썼지만 이 방법은 4를 앞으로 가져오는 2번으로 끝났다. 대신 뒤에서 값을 끌어오니 0 아닌 값의 순서가 섞인다.",
    anchor: "0의-순서도-상관없다면",
  },
  {
    id: "leetcode-move-zeroes-5",
    post: "leetcode-move-zeroes",
    question: "함수 안에서 nums = nums.filter(x => x !== 0).concat(...)처럼 쓰면 LeetCode에서 틀리는 이유는?",
    choices: [
      "filter가 0 아닌 값의 순서를 바꾸기 때문에",
      "concat이 O(n²)이라 시간 초과가 나기 때문에",
      "filter는 음수를 걸러 내기 때문에",
      "nums라는 이름이 새 배열을 가리킬 뿐 호출한 쪽 배열은 그대로이기 때문에",
    ],
    answer: 3,
    explanation:
      "LeetCode는 넘긴 배열 자체가 바뀌었는지 채점한다. 매개변수에 새 배열을 대입하면 함수 안의 이름만 바뀌고 원래 배열은 그대로라 입력과 같은 결과가 나온다. 값을 바꾸려면 칸에 써야 하고, Python이라면 nums[:]에 대입한다.",
    anchor: "매개변수에-새-배열을-대입한다",
  },
];
