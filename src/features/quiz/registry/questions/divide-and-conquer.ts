import type { QuizQuestion } from "../types";

export const DIVIDE_AND_CONQUER: QuizQuestion[] = [
  {
    id: "divide-and-conquer-1",
    post: "divide-and-conquer",
    question: "100만 개 배열에서 10번째로 큰 값 하나만 필요하다. 정렬 후 꺼내기보다 퀵셀렉트가 훨씬 빠른 이유는?",
    choices: [
      "퀵셀렉트는 비교 대신 비트 연산을 써서 상수가 작다",
      "기준값으로 가른 뒤 답이 없는 쪽은 다시 보지 않아 일이 n, n/2, n/4…로 줄어든다",
      "퀵셀렉트는 배열을 복사하지 않기 때문이다",
      "정렬은 항상 O(n²)이고 퀵셀렉트는 O(n log n)이기 때문이다",
    ],
    answer: 1,
    explanation:
      "정렬은 양쪽을 모두 끝까지 처리해 n log n이 되지만, 퀵셀렉트는 한쪽만 남기니 비교 횟수의 합이 약 2n에 그친다. 정렬이 O(n²)인 건 아니다. 내장 sort는 n log n이다.",
    anchor: "퀵셀렉트를-코드로-옮기면",
  },
  {
    id: "divide-and-conquer-2",
    post: "divide-and-conquer",
    question: "T(n) = 2T(n/2) + n(병합 정렬)과 T(n) = T(n/2) + 1(이분 탐색)은 마스터 정리에서 어떤 관계인가?",
    choices: [
      "병합 정렬은 1번 경우, 이분 탐색은 3번 경우다",
      "둘 다 잎이 지배하는 1번 경우다",
      "이분 탐색은 a = 1이라 마스터 정리를 쓸 수 없다",
      "둘 다 층마다 일이 같은 2번 경우라 n^(log_b a)에 log n이 곱해진다",
    ],
    answer: 3,
    explanation:
      "병합 정렬은 n^(log₂2) = n과 f(n) = n이 같고, 이분 탐색은 n^(log₂1) = 1과 f(n) = 1이 같다. 둘 다 2번 경우라 각각 n log n, log n이 된다. a = 1이어도 마스터 정리 꼴에 맞는다.",
    anchor: "마스터-정리로-복잡도를-바로-읽는다",
  },
  {
    id: "divide-and-conquer-3",
    post: "divide-and-conquer",
    question: "카라츠바 곱셈이 학교식 곱셈의 O(n²)보다 빨라지는 근본 이유는?",
    choices: [
      "반 길이 곱셈을 4번에서 3번으로 줄여 점화식의 a가 바뀌고 지수가 log₂3 ≈ 1.585로 내려갔다",
      "덧셈과 뺄셈을 없애서 상수가 줄었다",
      "자릿수를 반이 아니라 3등분해서 층 수가 줄었다",
      "작은 수에서는 학교식으로 전환하기 때문이다",
    ],
    answer: 0,
    explanation:
      "가운데 항을 (x1+x0)(y1+y0)에서 이미 구한 두 곱을 빼 구하므로 곱셈이 하나 줄어 T(n) = 3T(n/2) + n이 된다. 덧셈은 오히려 늘었다. 작은 크기에서 학교식으로 바꾸는 건 상수를 줄이는 실무 조정일 뿐 지수를 바꾸지 않는다.",
    anchor: "곱셈-한-번을-아끼면-지수가-바뀐다",
  },
  {
    id: "divide-and-conquer-4",
    post: "divide-and-conquer",
    question: "병합 정렬에 메모이제이션을 붙여도 빨라지지 않는 이유는?",
    choices: [
      "병합 정렬은 재귀가 아니라 반복문이기 때문이다",
      "메모 표를 만드는 데 O(n²) 메모리가 들기 때문이다",
      "병합 정렬의 두 반쪽은 서로 다른 칸을 다뤄 같은 하위 문제가 다시 나오지 않기 때문이다",
      "배열은 키로 쓸 수 없어서 메모할 수 없기 때문이다",
    ],
    answer: 2,
    explanation:
      "메모이제이션은 하위 문제가 겹칠 때만 이득이다. 피보나치처럼 같은 계산이 반복되면 동적 계획법이 필요하지만, 병합 정렬은 조각이 독립이라 저장해 둔 답을 다시 꺼낼 일이 없다.",
    anchor: "동적-계획법과-갈리는-곳",
  },
  {
    id: "divide-and-conquer-5",
    post: "divide-and-conquer",
    question: "무작위 기준값을 쓰는 퀵셀렉트가 모든 값이 같은 2만 개 배열에서 크게 느려졌다. 원인과 해결책은?",
    choices: [
      "난수 생성이 느려서다. 기준값을 가운데 칸으로 고정한다",
      "재귀 깊이가 깊어서다. 반복문으로 바꾼다",
      "배열 복사 비용 때문이다. 원본을 직접 바꾼다",
      "기준값보다 작은 값만 왼쪽으로 보내 같은 값이 한쪽에 몰린다. 같은 값 구역을 따로 두는 3-way 분할을 쓴다",
    ],
    answer: 3,
    explanation:
      "2-way 분할에서는 기준값과 같은 값이 전부 한쪽에 남아 한 번에 하나씩만 줄어 O(n²)이 된다. 무작위로 골라도 모든 값이 같으니 소용없다. 3-way 분할은 목표가 같은 값 구역에 들어오면 바로 끝나서 782ms가 5ms로 줄었다.",
    anchor: "퀵셀렉트가-무너지는-입력",
  },
  {
    id: "divide-and-conquer-6",
    post: "divide-and-conquer",
    question: "100만 행 테이블에서 지연 시간 상위 10개가 필요하다. 가장 먼저 고를 방법은?",
    choices: [
      "ORDER BY latency DESC LIMIT 10으로 DB에 맡긴다. PostgreSQL은 k가 작으면 top-N heapsort로 처리한다",
      "모든 행을 애플리케이션으로 가져와 퀵셀렉트를 돌린다",
      "모든 행을 가져와 sort한 뒤 앞의 10개를 자른다",
      "median of medians로 최악을 보장하는 구현을 직접 짠다",
    ],
    answer: 0,
    explanation:
      "데이터가 DB에 있으면 전송 비용부터 줄여야 한다. PostgreSQL은 LIMIT이 작으면 크기 k짜리 힙만 유지하는 top-N heapsort를 써서 전체를 정렬하지 않는다. 퀵셀렉트는 배열이 이미 메모리에 있을 때 고르는 방법이다.",
    anchor: "현장에서-k번째를-찾을-때",
  },
];
