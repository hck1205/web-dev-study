import type { QuizQuestion } from "../types";

export const DYNAMIC_PROGRAMMING: QuizQuestion[] = [
  {
    id: "dynamic-programming-1",
    post: "dynamic-programming",
    question: "쿠폰 [1, 3, 4]로 금액을 맞추는 재귀가 금액 40에서 5억 번 넘게 호출되는 가장 큰 이유는?",
    choices: [
      "쿠폰 종류가 세 개라 매번 세 갈래로 나뉘기 때문",
      "자바스크립트 재귀 호출 자체가 느리기 때문",
      "서로 다른 길로 같은 금액에 도착해 같은 부분 문제를 반복해서 풀기 때문",
      "Infinity와 비교하는 연산이 비싸기 때문",
    ],
    answer: 2,
    explanation:
      "서로 다른 질문은 금액 0부터 40까지 41개뿐인데, 1을 네 번 빼든 4를 한 번 빼든 같은 금액에 도착해 매번 처음부터 다시 계산한다. 갈래가 세 개인 것만으로는 폭발하지 않고, 겹치는 부분 문제를 기억하지 않는 게 원인이다.",
    anchor: "같은-질문을-몇-번이나-다시-묻나",
  },
  {
    id: "dynamic-programming-2",
    post: "dynamic-programming",
    question: "하향식(메모이제이션) 쿠폰 풀이가 금액 1만에서 RangeError를 내고 상향식은 금액 10만도 바로 끝났다. 이유는?",
    choices: [
      "하향식은 Map을 써서 메모리가 부족해지기 때문",
      "하향식은 1을 빼는 재귀가 금액만큼 깊어져 콜 스택 한계를 넘기 때문",
      "상향식은 필요한 칸만 계산하기 때문",
      "상향식은 결과를 BigInt로 계산하기 때문",
    ],
    answer: 1,
    explanation:
      "하향식은 재귀 깊이만큼 스택 프레임을 쌓아서 Node 22 기본 설정에서는 금액 5천 남짓이 한계였다. 상향식은 반복문으로 작은 칸부터 채우니 스택을 쓰지 않는다. 필요한 칸만 계산하는 건 오히려 하향식의 장점이다.",
    anchor: "위에서-내려가기와-아래에서-쌓기",
  },
  {
    id: "dynamic-programming-3",
    post: "dynamic-programming",
    question: "0/1 배낭을 1차원 배열로 줄이면서 용량을 작은 쪽부터 돌았더니 무게 1, 가치 2인 물건 하나로 용량 4에서 8이 나왔다. 무엇이 잘못됐나?",
    choices: [
      "dp를 0이 아니라 -Infinity로 채워야 한다",
      "물건을 무게 순으로 정렬하지 않았다",
      "dp[c - w]가 이미 이번 물건을 넣은 값이라 같은 물건을 여러 번 넣었다",
      "1차원 배열로는 배낭 문제를 풀 수 없다",
    ],
    answer: 2,
    explanation:
      "정방향으로 돌면 앞 칸이 방금 이번 물건으로 갱신된 상태라 그 값을 다시 읽어 같은 물건을 반복해서 넣는다. 그래서 무제한 배낭이 된다. 용량을 큰 쪽부터 돌면 아직 이번 물건 전의 값을 읽는다.",
    anchor: "배낭에-넣을지-말지",
  },
  {
    id: "dynamic-programming-4",
    post: "dynamic-programming",
    question: "LIS를 O(n log n)으로 풀 때 쓰는 tails 배열에 대한 설명으로 맞는 것은?",
    choices: [
      "tails의 길이가 LIS의 길이이고, tails 자체가 늘 실제 증가 수열은 아니다",
      "tails는 항상 실제 최장 증가 수열과 같다",
      "tails는 정렬되어 있지 않아 매번 처음부터 훑어야 한다",
      "tails[k]는 길이 k+1인 증가 수열이 끝날 수 있는 가장 큰 값이다",
    ],
    answer: 0,
    explanation:
      "tails[k]는 길이 k+1 증가 수열의 가능한 가장 작은 끝값이라 항상 정렬돼 있고, 새 원소의 자리를 이분 탐색으로 찾는다. 중간에 끝값이 바뀌면 여러 수열의 조각이 섞이므로 길이만 정답이다.",
    anchor: "가장-길게-올라가는-줄",
  },
  {
    id: "dynamic-programming-5",
    post: "dynamic-programming",
    question: "최소 개수를 구하는 쿠폰 DP에서 표를 Infinity 대신 0으로 채웠다. 쿠폰 [1, 3, 4], 금액 6의 결과는?",
    choices: ["2", "3", "6", "0"],
    answer: 3,
    explanation:
      "min은 처음 들어 있던 0보다 작아질 수 없어서 모든 칸이 0으로 남는다. 최솟값 문제는 아직 못 만든 칸을 Infinity로 두고 시작값 dp[0]만 0으로 둬야 만들 수 없는 경우와 0개로 만든 경우가 구분된다.",
    anchor: "표를-만들-때-반복해서-나오는-실수",
  },
  {
    id: "dynamic-programming-6",
    post: "dynamic-programming",
    question: "쿠폰 [1, 2, 5]로 5를 만드는 방법 수를 셀 때, 바깥 반복을 쿠폰으로 하면 4, 금액으로 하면 9가 나온다. 9는 무엇을 센 것인가?",
    choices: [
      "중복 없이 고른 쿠폰 조합의 수",
      "1+2+2와 2+1+2를 다르게 보는 순서 있는 나열의 수",
      "최소 쿠폰 수의 합",
      "만들 수 없는 금액의 수",
    ],
    answer: 1,
    explanation:
      "금액이 바깥이면 각 금액마다 마지막에 쓸 쿠폰을 아무거나 고르니 순서가 다른 나열을 따로 센다. 쿠폰이 바깥이면 쿠폰을 정해진 순서로만 쓰게 되어 조합 4개만 센다.",
    anchor: "표를-만들-때-반복해서-나오는-실수",
  },
  {
    id: "dynamic-programming-7",
    post: "dynamic-programming",
    question: "PostgreSQL에서 WHERE levenshtein('recieve', name) <= 2 로 상품을 찾을 때 상품이 수백만 개라면 흔히 어떻게 하나?",
    choices: [
      "levenshtein 결과에 B-tree 인덱스를 만들면 바로 빨라진다",
      "pg_trgm 같은 인덱스로 후보를 먼저 줄이고 그 후보에만 편집 거리를 계산한다",
      "편집 거리를 두 줄 공간으로 계산하면 Seq Scan이 Index Scan으로 바뀐다",
      "Seq Scan이 원래 가장 빠르니 그대로 둔다",
    ],
    answer: 1,
    explanation:
      "EXPLAIN이 Seq Scan으로 나오듯 함수 결과에는 인덱스를 쓸 수 없어 행마다 O(mn) 표를 채운다. 그래서 트라이그램 인덱스 같은 걸로 후보를 수십 개로 거른 뒤 편집 거리로 순위를 매긴다. 공간을 줄여도 행마다 계산하는 건 그대로다.",
    anchor: "두-단어-사이의-거리",
  },
];
