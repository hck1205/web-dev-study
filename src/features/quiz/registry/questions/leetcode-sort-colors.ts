import type { QuizQuestion } from "../types";

export const LEETCODE_SORT_COLORS: QuizQuestion[] = [
  {
    id: "leetcode-sort-colors-1",
    post: "leetcode-sort-colors",
    question: "세 포인터 풀이에서 nums[mid]가 2라서 hi 칸과 바꾼 뒤 mid를 움직이지 않는 이유는?",
    choices: [
      "hi에서 가져온 값은 아직 검사하지 않은 값이라 그 자리에서 다시 봐야 하기 때문에",
      "mid를 움직이면 lo보다 앞서게 되어 0 구역이 깨지기 때문에",
      "2는 이미 제자리이므로 mid가 할 일이 없기 때문에",
      "mid를 움직이면 반복이 n번보다 적게 돌아 시간이 부족해지기 때문에",
    ],
    answer: 0,
    explanation:
      "hi 자리는 미확인 구역의 끝이라 거기서 온 값은 0일 수도 있다. 그래서 mid는 그대로 두고 다음 반복에서 다시 본다. lo와 바꿀 때 가져오는 값은 이미 본 1이라 mid를 같이 밀어도 된다.",
    anchor: "세-포인터가-지키는-네-구역",
  },
  {
    id: "leetcode-sort-colors-2",
    post: "leetcode-sort-colors",
    question: "2를 hi와 바꾼 뒤 mid까지 한 칸 미는 버그가 있는 코드에 [2, 0, 1, 2, 0, 1]을 넣으면?",
    choices: [
      "[0, 0, 1, 1, 2, 2]. 우연히 맞는다",
      "[1, 0, 1, 2, 0, 2]. 첫 바꾸기 뒤에 바로 끝난다",
      "[0, 1, 1, 0, 2, 2]. 뒤에서 가져온 0이 검사받지 못하고 남는다",
      "무한 루프에 빠진다",
    ],
    answer: 2,
    explanation:
      "3번 칸의 2를 4번 칸의 0과 바꾼 뒤 mid를 밀어 버려서 그 0을 다시 보지 않는다. 그래서 0이 3번 칸에 남는다. [2, 2, 0]처럼 이 버그로도 맞게 나오는 입력이 있어서 예시 하나로는 잡기 어렵다.",
    anchor: "2를-보낸-뒤-mid까지-민다",
  },
  {
    id: "leetcode-sort-colors-3",
    post: "leetcode-sort-colors",
    question: "반복 조건을 mid <= hi 대신 mid < hi로 쓰면 [1, 0]은 어떻게 되나?",
    choices: [
      "[0, 1]. 결과는 같다",
      "[1, 0]. mid와 hi가 같은 칸일 때 그 칸을 보지 않고 끝난다",
      "[0, 0]. 값이 덮어써진다",
      "인덱스가 배열 밖으로 나가 오류가 난다",
    ],
    answer: 1,
    explanation:
      "미확인 구역은 [mid, hi]로 양 끝을 포함한다. mid === hi면 아직 한 칸이 남아 있는데 < 조건은 그 칸을 건너뛴다. [1, 0]은 첫 칸 1을 보고 mid가 1이 되는 순간 반복이 끝나 그대로 남는다.",
    anchor: "반복-조건에서-등호를-뺀다",
  },
  {
    id: "leetcode-sort-colors-4",
    post: "leetcode-sort-colors",
    question: "원소가 색 필드를 가진 객체이고 같은 색끼리 원래 순서도 지켜야 할 때 알맞은 방법은?",
    choices: [
      "세 포인터. 바꾸기만 하니 순서도 지켜진다",
      "개수를 세고 0, 1, 2 값으로 다시 칠한다",
      "한 번 훑으며 덧칠하기",
      "개수로 색마다 시작 위치를 정하고 새 배열에 읽은 순서대로 담는다",
    ],
    answer: 3,
    explanation:
      "세 포인터는 hi와 바꿀 때 뒤의 원소가 앞으로 와서 같은 색끼리 순서가 바뀐다. 다시 칠하기와 덧칠하기는 값을 새로 쓰는 방식이라 원래 객체가 사라진다. 시작 위치를 계산해 담는 안정 계수 정렬이 O(n) 추가 공간으로 둘 다 만족한다.",
    anchor: "원소가-숫자가-아니라-객체라면",
  },
  {
    id: "leetcode-sort-colors-5",
    post: "leetcode-sort-colors",
    question: "덧칠하기 풀이에서 한 칸을 읽을 때 2 → 1 → 0 순서로 칠해야 하는 이유는?",
    choices: [
      "p0와 p1이 같은 칸일 때 0을 먼저 칠하면 그 위를 1이 덮어 0이 사라지기 때문에",
      "2를 마지막에 칠하면 아직 읽지 않은 칸을 덮기 때문에",
      "순서는 상관없고 읽기 쉬우라고 정한 것이다",
      "0을 먼저 칠하면 p1이 p0보다 작아져 배열 밖을 가리키기 때문에",
    ],
    answer: 0,
    explanation:
      "1 페인트는 0 페인트 아래에 깔려야 한다. 순서를 0 → 1로 바꾸면 [0, 1]이 [1, 1]이 된다. 현재 칸을 먼저 2로 칠하는 건 값을 v에 읽어 둔 뒤라 안전하다.",
    anchor: "한-번-훑으며-덧칠하기",
  },
];
