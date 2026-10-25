import type { QuizQuestion } from "../types";

export const TWO_POINTERS_PATTERN: QuizQuestion[] = [
  {
    id: "two-pointers-pattern-1",
    post: "two-pointers-pattern",
    question:
      "정렬된 배열에서 양 끝 포인터로 합이 target인 짝을 찾는다. a[l] + a[r]이 target보다 클 때 r을 줄여도 답을 놓치지 않는 이유는?",
    choices: [
      "a[r]이 가장 작은 a[l]과 더해도 크니, r이 들어간 어떤 짝도 답이 될 수 없어서",
      "r 쪽 값이 l 쪽 값보다 항상 크기 때문에 l을 먼저 옮겨야 해서",
      "이미 본 짝은 해시맵에 저장해 두었다가 나중에 다시 확인하기 때문에",
      "합이 크면 답이 배열 앞쪽에 있다는 것이 문제에서 보장되기 때문에",
    ],
    answer: 0,
    explanation:
      "짝을 l·r 표로 펼치면 r 열의 가장 작은 값이 지금 칸이다. 그 값이 이미 target보다 크면 열 전체에 답이 없으니 통째로 지워도 된다. 해시맵 없이 단조성만으로 성립하는 논리다.",
    anchor: "한-칸을-버려도-답을-놓치지-않는-이유",
  },
  {
    id: "two-pointers-pattern-2",
    post: "two-pointers-pattern",
    question:
      "정렬되지 않은 배열에서 합이 target인 두 수의 원래 인덱스를 돌려줘야 한다(원래 Two Sum). 정렬 후 투 포인터보다 해시맵이 나은 이유는?",
    choices: [
      "투 포인터는 음수가 있으면 동작하지 않아서",
      "정렬하면 인덱스가 섞여 (값, 인덱스) 쌍이 필요하고 O(n log n)이 드는데, 해시맵은 O(n)에 끝나서",
      "해시맵은 추가 공간을 쓰지 않아서",
      "투 포인터는 답이 여러 개일 때만 쓸 수 있어서",
    ],
    answer: 1,
    explanation:
      "답이 원래 위치면 정렬이 위치 정보를 망가뜨려 쌍 배열을 따로 만들어야 하고, 시간도 O(n log n)이 된다. 해시맵은 공간 O(n)을 쓰지만 시간 O(n)으로 더 빠르다. 투 포인터는 정렬만 돼 있으면 음수가 있어도 동작한다.",
    anchor: "투-포인터를-쓰면-안-될-때",
  },
  {
    id: "two-pointers-pattern-3",
    post: "two-pointers-pattern",
    question:
      "정렬된 배열에서 중복을 제자리에서 지울 때 쓰기 포인터 w와 읽기 포인터 r을 쓴다. a[w]에 덮어써도 안전한 이유는?",
    choices: [
      "덮어쓴 값은 나중에 splice로 정리하기 때문에",
      "w는 항상 배열 끝에서 시작하기 때문에",
      "w가 r을 앞지르지 않아서, 덮어쓰는 칸은 이미 읽은 칸이기 때문에",
      "자바스크립트 배열은 덮어쓰면 원래 값을 따로 보관하기 때문에",
    ],
    answer: 2,
    explanation:
      "쓰기 위치는 늘 읽기 위치 이하라서 아직 읽지 않은 값을 망가뜨리지 않는다. splice로 뒤쪽을 지우면 매번 O(n)이 들어 전체가 O(n²)이 되니 쓰지 않는다.",
    anchor: "같은-방향으로-달리는-두-포인터",
  },
  {
    id: "two-pointers-pattern-4",
    post: "two-pointers-pattern",
    question:
      "합이 target보다 작은 짝의 개수를 셀 때, 정렬 후 a[l] + a[r] < target이면 count에 r - l을 더하고 l을 옮긴다. r - l을 한꺼번에 더해도 되는 이유는?",
    choices: [
      "r이 l과 짝지을 수 있는 가장 큰 값인데도 작으니, l+1부터 r까지 모두 l과의 합이 작기 때문에",
      "l 오른쪽에 있는 원소는 모두 음수이기 때문에",
      "한 번 센 짝은 r을 줄일 때 다시 빼 주기 때문에",
      "r - l은 근삿값이고 마지막에 보정하기 때문에",
    ],
    answer: 0,
    explanation:
      "정렬돼 있으니 l과 짝지을 후보 중 a[r]이 가장 크다. 그 합이 이미 target보다 작으면 l의 행 전체가 답이라 r - l개를 한 번에 센다. 이렇게 하면 개수 세기도 정렬 뒤 O(n)이다.",
    anchor: "찾기에서-세기로",
  },
  {
    id: "two-pointers-pattern-5",
    post: "two-pointers-pattern",
    question:
      "Sort Colors(0·1·2 제자리 정렬)에서 a[mid]가 2라 a[hi]와 바꾼 뒤 hi만 줄이고 mid는 그대로 둔다. mid도 옮기면 어떻게 되나?",
    choices: [
      "아무 문제 없다. 단지 한 번 덜 비교할 뿐이다",
      "무한 루프에 빠진다",
      "배열 범위를 벗어나 예외가 난다",
      "뒤에서 바꿔 온 값을 검사하지 않고 지나쳐서 [1, 2, 0] 같은 입력이 [1, 0, 2]로 틀리게 정렬된다",
    ],
    answer: 3,
    explanation:
      "hi 자리에서 가져온 값은 아직 보지 않은 값이라 0일 수도 있다. mid를 옮기면 그 0이 1 구간에 남는다. 0과 바꿀 때는 lo 자리 값이 이미 본 1이라 mid를 옮겨도 된다는 비대칭이 핵심이다.",
    anchor: "포인터가-셋이-되는-경우",
  },
  {
    id: "two-pointers-pattern-6",
    post: "two-pointers-pattern",
    question:
      "자바스크립트에서 숫자 배열을 nums.sort()로 정렬한 뒤 양 끝 투 포인터를 돌렸더니 가끔 틀린 답이 나온다. 원인은?",
    choices: [
      "sort()가 불안정 정렬이라 같은 값의 순서가 바뀌어서",
      "비교 함수가 없으면 문자열 사전 순으로 정렬해 단조성이 깨져서",
      "sort()가 새 배열을 돌려주고 원본은 그대로라서",
      "sort()가 음수를 뒤로 보내서",
    ],
    answer: 1,
    explanation:
      "비교 함수 없는 sort()는 [10, 9, 1, 100, 25]를 [1, 10, 100, 25, 9]로 만든다. 순서가 틀리면 포인터를 옮기는 근거인 단조성이 사라져 조용히 틀린다. 숫자는 (a, b) => a - b로 정렬한다.",
    anchor: "자주-틀리는-곳",
  },
];
