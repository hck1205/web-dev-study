import type { QuizQuestion } from "../types";

export const BINARY_SEARCH: QuizQuestion[] = [
  {
    id: "binary-search-1",
    post: "binary-search",
    question: "`while (lo < hi)` 안에서 `mid = Math.floor((lo + hi) / 2)`, 참이면 `lo = mid`, 거짓이면 `hi = mid - 1`로 줄이는 코드가 가끔 끝나지 않는다. 언제, 왜 그런가?",
    choices: [
      "배열에 같은 값이 있을 때, 비교가 항상 거짓이 되어서",
      "두 칸이 남았을 때, 내림한 mid가 lo와 같아 lo = mid가 구간을 줄이지 못해서",
      "배열 길이가 홀수일 때, mid가 범위를 벗어나서",
      "x가 맨 앞보다 작을 때, hi가 음수가 되어서",
    ],
    answer: 1,
    explanation:
      "lo와 hi가 이웃하면 내림한 mid는 lo와 같고, 조건이 참이면 lo = mid가 그대로 lo다. 구간이 한 칸도 줄지 않아 무한히 돈다. mid를 올림하거나, 반열린 구간에서 lo = mid + 1과 hi = mid를 짝으로 쓰면 해결된다.",
    anchor: "구간의-정의가-코드를-정한다",
  },
  {
    id: "binary-search-2",
    post: "binary-search",
    question: "정렬된 배열 `[540, 545, 545, 552, 600]`에서 lowerBound(545)와 upperBound(545)의 값은?",
    choices: ["1과 2", "2와 3", "1과 3", "0과 3"],
    answer: 2,
    explanation:
      "lower bound는 545 이상이 처음 나오는 1번 칸, upper bound는 545 초과가 처음 나오는 3번 칸(552)이다. 둘의 차이 2가 545의 개수이고, upper bound − 1인 2가 545 이하인 마지막 자리다.",
    anchor: "같은-값이-여러-개면-경계도-두-개다",
  },
  {
    id: "binary-search-3",
    post: "binary-search",
    question: "이분 탐색을 쓸 수 있는 가장 본질적인 조건은?",
    choices: [
      "데이터가 배열에 담겨 있어야 한다",
      "값이 모두 서로 달라야 한다",
      "데이터 개수가 2의 거듭제곱이어야 한다",
      "묻는 조건이 거짓에서 참으로 한 번만 바뀌어야 한다(단조성)",
    ],
    answer: 3,
    explanation:
      "이분 탐색은 F가 이어지다 어느 지점부터 T만 나오는 경계를 찾는다. 정렬된 배열은 그런 조건을 만드는 한 방법일 뿐이라, 배열이 없어도 '용량 c면 되나' 같은 단조로운 판정이면 쓸 수 있다. 단조롭지 않으면 에러 없이 틀린 답이 나온다.",
    anchor: "참이-한-번만-바뀌는-곳을-찾는다",
  },
  {
    id: "binary-search-4",
    post: "binary-search",
    question: "답의 범위가 0~20억인 매개 변수 탐색에서 `mid = (lo + hi) >> 1`을 쓰면 어떻게 되나?",
    choices: [
      "합이 2³¹을 넘으면 mid가 음수가 되어 탐색이 끝나지 않거나 틀린다",
      "아무 문제 없다. 자바스크립트 숫자는 2⁵³까지 정확하다",
      "BigInt로 자동 변환되어 느려진다",
      "소수점이 남아 배열 인덱스 에러가 난다",
    ],
    answer: 0,
    explanation:
      "자바스크립트 숫자는 2⁵³까지 정확하지만 비트 연산은 피연산자를 32비트 정수로 바꾼다. 그래서 `>> 1`은 합이 2³¹을 넘으면 음수가 된다. 큰 범위에서는 `Math.floor((lo + hi) / 2)`를 쓴다.",
    anchor: "가운데를-구하다-넘치는-경우",
  },
  {
    id: "binary-search-5",
    post: "binary-search",
    question: "`while (hi - lo > 1e-9)`로 1e20의 제곱근을 구하는 이분 탐색이 끝나지 않는 이유는?",
    choices: [
      "1e20이 Number.MAX_SAFE_INTEGER보다 커서 비교가 틀린다",
      "mid * mid가 Infinity가 되어서",
      "답 근처의 double 간격이 1e-9보다 커서 구간이 그보다 좁아질 수 없어서",
      "부동소수점 나눗셈이 매번 반올림 오류를 키워서",
    ],
    answer: 2,
    explanation:
      "답이 100억 근처면 이웃한 double끼리 약 0.0000019씩 떨어져 있어, hi와 lo의 차이가 1e-9 아래로 내려갈 수 없다. 그래서 실수 이분 탐색은 100번처럼 고정 횟수로 끊거나 상대 오차를 쓴다.",
    anchor: "실수-범위에서-찾을-때는-횟수로-끊는다",
  },
  {
    id: "binary-search-6",
    post: "binary-search",
    question: "짐을 순서대로 실어 D일 안에 보낼 최소 트럭 용량을 구할 때 이분 탐색이 통하는 이유는?",
    choices: [
      "짐 무게가 정렬돼 있어서",
      "용량이 커질수록 걸리는 날수가 줄거나 같아서, '용량 c면 되나'가 한 번만 참으로 바뀌어서",
      "날수가 항상 2의 거듭제곱이어서",
      "가장 무거운 짐이 답이기 때문에",
    ],
    answer: 1,
    explanation:
      "짐은 정렬돼 있지 않아도 된다. 용량에 대한 판정이 단조로우니 그 경계를 이분 탐색으로 찾는 매개 변수 탐색이다. 범위는 가장 무거운 짐부터 무게 합까지이고, 측정에서 1씩 올리면 99초, 이분 탐색은 12ms였다.",
    anchor: "답을-놓고-거꾸로-찾는다",
  },
  {
    id: "binary-search-7",
    post: "binary-search",
    question: "정렬된 100만 개 배열에서 '이 값이 있나'만 수없이 묻는다. 범위 질문은 없다. 어떤 선택이 맞나?",
    choices: [
      "`includes`를 쓴다. 정렬돼 있으면 엔진이 알아서 이분 탐색한다",
      "매번 정렬한 뒤 이분 탐색한다",
      "`findLastIndex`로 뒤에서부터 찾는다",
      "메모리 여유가 있다면 Set을 한 번 만들어 쓴다. 범위·최근접 질문이 생기면 이분 탐색이다",
    ],
    answer: 3,
    explanation:
      "`includes`와 `findLastIndex`는 정렬 여부와 상관없이 O(n)으로 훑는다. 있나 없나만 묻는다면 평균 O(1)인 Set이 조금 더 빠르지만, 만드는 비용과 메모리가 든다. 범위나 가장 가까운 값을 물어야 하면 정렬과 이분 탐색이 필요하다.",
    anchor: "정렬해-두고-여러-번-찾을-때의-계산",
  },
];
