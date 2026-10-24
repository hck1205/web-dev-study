import type { QuizQuestion } from "../types";

export const LEETCODE_NEXT_GREATER_ELEMENT_I: QuizQuestion[] = [
  {
    id: "leetcode-next-greater-element-i-1",
    post: "leetcode-next-greater-element-i",
    question: "단조 스택으로 장부를 만들 때, 해시맵의 열쇠를 인덱스가 아니라 값으로 써도 되는 이유는?",
    choices: [
      "값이 0 이상 10^4 이하로 작기 때문이다",
      "해시맵은 값만 열쇠로 받기 때문이다",
      "각 배열의 값이 서로 다르다고 보장되어, 값 하나가 nums2의 자리 하나를 가리키기 때문이다",
      "nums1이 nums2보다 짧기 때문이다",
    ],
    answer: 2,
    explanation:
      "nums1은 값으로 질문하니 장부도 값으로 찾는 게 편하고, 값이 서로 다르니 값 하나의 다음 큰 값이 하나로 정해진다. 같은 값이 여러 번 나올 수 있다면 값 하나에 답이 여럿이 되어 인덱스로 답을 적어야 한다. 값 범위가 작다는 조건은 해시맵 대신 배열을 쓸 수 있게 해 줄 뿐이다.",
    anchor: "값이-서로-다르다는-조건이-하는-일",
  },
  {
    id: "leetcode-next-greater-element-i-2",
    post: "leetcode-next-greater-element-i",
    question: "왼쪽에서 오른쪽으로 훑는 단조 스택 풀이에서 `nums2 = [5, 2, 7, 3, 1, 4, 8, 6]`을 다 훑은 뒤 스택에 남는 값은?",
    choices: ["`[8, 6]`", "`[5, 7, 8]`", "`[6]`", "비어 있다"],
    answer: 0,
    explanation:
      "8과 6은 오른쪽에 더 큰 값이 없어 끝까지 꺼내지지 않는다. 오른쪽 끝에서 볼 때 기록을 세운 값들이라 바닥부터 내려가는 순서다. 이 값들은 장부에 없으니 읽을 때 기본값 -1로 답한다.",
    anchor: "끝까지-스택에-남는-값들",
  },
  {
    id: "leetcode-next-greater-element-i-3",
    post: "leetcode-next-greater-element-i",
    question: "스택에 nums2의 인덱스를 쌓고 장부에도 인덱스를 열쇠로 적은 뒤, nums1의 값으로 장부를 읽으면 어떻게 되나?",
    choices: [
      "인덱스와 값이 같은 범위라 결과가 같다",
      "오류 없이 엉뚱한 칸의 답을 읽어 그럴듯하지만 틀린 결과가 나온다",
      "모든 답이 -1이 된다",
      "런타임 오류가 난다",
    ],
    answer: 1,
    explanation:
      "값 2로 찾으면 인덱스 2(값 7)의 답을 읽는 식이라 예시에서 `[4, -1, 7, 4]` 대신 `[4, -1, 8, 7]`이 나왔다. 몇 칸은 우연히 맞아서 더 찾기 어렵다. 인덱스를 쌓았다면 장부에는 `nums2[인덱스]`를 열쇠로 적는다.",
    anchor: "인덱스를-쌓아-놓고-값으로-찾는다",
  },
  {
    id: "leetcode-next-greater-element-i-4",
    post: "leetcode-next-greater-element-i",
    question: "nums2 뒤에 값이 계속 붙고 그 사이사이 질문이 들어오는 상황에 쓸 수 있는 방법은?",
    choices: [
      "오른쪽에서 왼쪽으로 후보를 남기는 단조 스택",
      "큰 값부터 정렬해 정렬 집합에 넣는 방법",
      "질문마다 브루트포스로 다시 훑는 방법만 가능하다",
      "왼쪽에서 오른쪽으로 훑는 단조 스택을 들고 있다가, 새 값마다 꺼내며 장부를 채우는 방법",
    ],
    answer: 3,
    explanation:
      "왼쪽에서 오른쪽 방향은 미래 값을 보지 않으니 값이 올 때마다 장부를 이어서 채울 수 있다. 아직 스택에 있는 값의 질문에는 나중에 답이 생길 수 있어 아직 모른다고 답한다. 오른쪽에서 훑는 방법과 정렬하는 방법은 배열 전체를 알아야 시작할 수 있다.",
    anchor: "질문이-계속-들어온다면",
  },
  {
    id: "leetcode-next-greater-element-i-5",
    post: "leetcode-next-greater-element-i",
    question: "장부에서 답을 `next.get(x) || -1`로 읽으면 어떤 경우에 틀리나?",
    choices: [
      "다음 큰 값이 0일 때. 0이 거짓으로 취급되어 -1로 바뀐다",
      "x가 장부에 없을 때. undefined가 그대로 나온다",
      "x가 음수일 때는 항상 틀린다",
      "다음 큰 값이 -1일 때",
    ],
    answer: 0,
    explanation:
      "`||`는 왼쪽이 거짓 같은 값이면 오른쪽을 쓰는데 0도 여기에 들어간다. 이 문제는 값이 0 이상이라 다음 큰 값이 0일 수 없어 우연히 맞지만, `[-3, 0, 5]`처럼 음수가 섞이면 -3의 답 0이 -1로 바뀐다. 없을 때만 기본값을 쓰는 `??`가 맞다.",
    anchor: "장부에-없는-값을-로-처리한다",
  },
];
