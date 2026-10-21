import type { QuizQuestion } from "../types";

export const DS_ARRAY_MATRIX: QuizQuestion[] = [
  {
    id: "ds-array-matrix-1",
    post: "ds-array-matrix",
    question: "길이 n인 배열에서 a[i] 읽기는 O(1)인데 맨 앞에 넣는 unshift는 O(n)인 이유는?",
    choices: [
      "unshift는 내부적으로 배열을 정렬하기 때문에",
      "칸이 연속으로 붙어 있어야 해서 뒤의 원소를 전부 한 칸씩 밀어야 하기 때문에",
      "unshift는 항상 용량을 두 배로 늘리기 때문에",
      "맨 앞 칸은 주소 계산이 더 복잡하기 때문에",
    ],
    answer: 1,
    explanation:
      "배열은 시작 주소에 i × 칸 크기를 더해 주소를 바로 구하므로 읽기는 길이와 상관없다. 대신 칸이 이어져 있어야 해서 앞에 넣으면 나머지 n개를 모두 옮긴다. 용량을 늘리는 일은 가끔만 일어나고 unshift만의 비용도 아니다.",
    anchor: "칸이-붙어-있어서-인덱스가-공짜다",
  },
  {
    id: "ds-array-matrix-2",
    post: "ds-array-matrix",
    question:
      "const a = [1, 2, 3]; a.push(\"x\"); a.pop(); 이후 V8에서 a의 원소 종류(elements kind)는?",
    choices: ["PACKED_SMI로 돌아간다", "HOLEY_SMI가 된다", "PACKED_ELEMENTS로 남는다", "DICTIONARY가 된다"],
    answer: 2,
    explanation:
      "원소 종류는 일반적인 쪽으로 한 방향으로만 바뀌고 되돌아가지 않는다. 문자열을 넣는 순간 PACKED_ELEMENTS가 되고, 그 값을 pop으로 빼도 그대로다. 빈 칸을 만든 적이 없으니 HOLEY도 아니다.",
    anchor: "자바스크립트-배열은-속이-여러-가지다",
  },
  {
    id: "ds-array-matrix-3",
    post: "ds-array-matrix",
    question: "정렬된 배열의 쌍 합 문제에서 합이 target보다 크면 오른쪽 포인터를 줄여도 되는 이유는?",
    choices: [
      "오른쪽 값은 남은 수 중 가장 작은 왼쪽 값과 더해도 크니, 그 값이 들어간 쌍은 모두 답이 아니어서",
      "오른쪽 포인터가 항상 더 큰 인덱스여야 하므로",
      "왼쪽 포인터는 한 번 움직이면 되돌릴 수 없어서",
      "합이 크면 답이 없다는 뜻이라서",
    ],
    answer: 0,
    explanation:
      "정렬돼 있으니 지금 왼쪽 값이 남은 후보 중 가장 작다. 그 값과 더해도 크다면 오른쪽 값을 쓰는 쌍은 전부 크므로 한 번에 버릴 수 있다. 이 단조성 덕분에 O(n)에 끝난다.",
    anchor: "양-끝에서-좁혀-오는-두-포인터",
  },
  {
    id: "ds-array-matrix-4",
    post: "ds-array-matrix",
    question:
      "중복 없는 가장 긴 부분 문자열 코드에서 `last.get(ch) >= left` 조건을 빼면 \"abba\"의 결과는 어떻게 되나?",
    choices: ["2로 정답이 나온다", "에러가 난다", "0이 나온다", "왼쪽 끝이 뒤로 돌아가 3이 나온다"],
    answer: 3,
    explanation:
      "두 번째 a를 만나면 a의 마지막 위치 0을 보고 왼쪽 끝을 1로 옮기는데, 이미 왼쪽 끝은 2에 있었다. 창이 뒤로 넓어져 'bba'를 길이 3으로 센다. 마지막 위치가 창 안에 있을 때만 왼쪽 끝을 당겨야 한다.",
    anchor: "창을-밀면서-세기",
  },
  {
    id: "ds-array-matrix-5",
    post: "ds-array-matrix",
    question: "[1, 2, 3, -2, 2]에서 합이 3인 연속 구간의 개수를 셀 때 알맞은 방법은?",
    choices: [
      "슬라이딩 윈도. 합이 크면 왼쪽을 당긴다",
      "누적 합과 해시맵. 지금 합에서 k를 뺀 값이 이전에 몇 번 나왔는지 센다",
      "정렬 후 두 포인터",
      "모든 원소를 Set에 넣고 3 - x를 찾는다",
    ],
    answer: 1,
    explanation:
      "음수가 있어서 창을 늘리면 합이 커진다는 단조성이 깨지므로 슬라이딩 윈도는 쓸 수 없다. 구간 합은 두 누적 합의 차이이니, 누적 합의 등장 횟수를 해시맵에 세면 O(n)이다. 정렬하면 연속 구간이라는 조건이 사라진다.",
    anchor: "미리-더해-두면-구간-합이-뺄셈-한-번",
  },
  {
    id: "ds-array-matrix-6",
    post: "ds-array-matrix",
    question: "2048 × 2048 Float64Array를 열 순서로 더하면 행 순서보다 몇 배 느려지는 이유는?",
    choices: [
      "열 순서는 덧셈 횟수가 더 많아서",
      "V8이 열 순서 반복문은 최적화하지 않아서",
      "매번 한 행 길이만큼 건너뛰어 캐시 라인에서 값 하나만 쓰고 버리기 때문에",
      "Float64Array는 열 우선으로 저장되기 때문에",
    ],
    answer: 2,
    explanation:
      "메모리는 행 우선으로 놓여 있고 CPU는 64바이트 캐시 라인 단위로 가져온다. 행 순서는 가져온 값 8개를 다 쓰지만 열 순서는 16KB씩 건너뛰어 하나만 쓴다. 덧셈 횟수와 Big O는 같다.",
    anchor: "2차원도-메모리에서는-한-줄이다",
  },
  {
    id: "ds-array-matrix-7",
    post: "ds-array-matrix",
    question: "const grid = Array(3).fill([]); grid[0].push(\"x\"); 이후 console.log(grid)의 결과는?",
    choices: [
      "[ [ 'x' ], [], [] ]",
      "[ [ 'x' ], [ 'x' ], [ 'x' ] ]",
      "TypeError가 난다",
      "[ 'x', [], [] ]",
    ],
    answer: 1,
    explanation:
      "fill은 값 하나를 모든 칸에 넣는데, 배열은 참조라 세 칸이 같은 배열을 가리킨다. 그래서 한 행에 넣으면 모든 행에 보인다. 행마다 새 배열을 만들려면 Array.from({ length: 3 }, () => [])를 쓴다.",
    anchor: "배열-코드에서-반복해서-나오는-실수",
  },
];
