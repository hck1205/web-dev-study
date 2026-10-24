import type { QuizQuestion } from "../types";

export const MAX_FLOW_BIPARTITE_MATCHING: QuizQuestion[] = [
  {
    id: "max-flow-bipartite-matching-1",
    post: "max-flow-bipartite-matching",
    question: "잔여 그래프에 역방향 간선을 두지 않고 '여유 있는 앞쪽 간선으로만' 경로를 찾아 흘리면 어떻게 되나?",
    choices: [
      "처음 고른 경로가 나쁘면 더 흘릴 길이 막혀 최대 유량보다 작은 값에서 멈출 수 있다",
      "항상 같은 답이 나오지만 더 느리다",
      "유량 보존 법칙이 깨진다",
      "무한 루프에 빠진다",
    ],
    answer: 0,
    explanation:
      "역방향 간선은 이미 흘린 유량을 취소하는 통로다. 마름모 예제에서 S-A-B-T를 먼저 고르면 앞쪽 간선만으로는 길이 없지만, 역방향 B→A를 쓰면 S-B-A-T로 하나 더 흘려 2가 된다.",
    anchor: "길을-찾아-가장-가는-관만큼-보낸다",
  },
  {
    id: "max-flow-bipartite-matching-2",
    post: "max-flow-bipartite-matching",
    question: "에드먼즈-카프가 용량 값의 크기와 상관없이 다항 시간에 끝나는 이유는?",
    choices: [
      "용량을 모두 1로 바꿔 계산하기 때문이다",
      "DFS로 가장 긴 경로를 고르기 때문이다",
      "BFS로 가장 짧은 증가 경로를 골라 증가 횟수가 O(VE)로 묶이기 때문이다",
      "한 번에 모든 증가 경로를 동시에 흘리기 때문이다",
    ],
    answer: 2,
    explanation:
      "가장 짧은 증가 경로를 고르면 잔여 그래프 거리가 줄지 않아 증가 횟수가 O(VE) 이하가 되고, 전체는 O(VE²)다. 긴 경로를 고르는 DFS는 본문 예제에서 2000번을 돌았다.",
    anchor: "경로를-bfs로-고르면-생기는-일",
  },
  {
    id: "max-flow-bipartite-matching-3",
    post: "max-flow-bipartite-matching",
    question: "S→A, S→B, A→T, B→T가 1000이고 A→B가 1인 그래프에서 포드-풀커슨이 가장 나쁘게 돌 때 반복 횟수는?",
    choices: [
      "2번",
      "2000번",
      "1001번",
      "끝나지 않는다",
    ],
    answer: 1,
    explanation:
      "가운데 간선을 앞으로, 뒤로 번갈아 지나는 경로만 고르면 매번 1씩만 늘어 최대 유량 2000까지 2000번을 돈다. 용량이 정수라 끝나기는 하지만 횟수가 용량 값에 비례한다. 에드먼즈-카프는 2번에 끝났다.",
    anchor: "경로를-아무렇게나-고르면",
  },
  {
    id: "max-flow-bipartite-matching-4",
    post: "max-flow-bipartite-matching",
    question: "알고리즘이 끝났을 때 지금 유량이 최대라는 걸 무엇이 보장하나?",
    choices: [
      "S에서 나가는 간선이 모두 꽉 찼다는 사실",
      "T로 들어오는 간선이 모두 꽉 찼다는 사실",
      "BFS를 정점 수만큼 반복했다는 사실",
      "S에서 닿는 정점과 나머지를 가르는 컷의 경계 간선이 모두 꽉 차서 유량이 그 컷의 용량과 같다는 사실",
    ],
    answer: 3,
    explanation:
      "어떤 유량도 어떤 컷의 용량을 넘지 못하니, 한 컷과 같아진 유량은 최대다. 본문 예제에서 S 쪽 출구 합은 20이었지만 최대 유량은 19였다. 목은 S→A와 C→D 조합이었다.",
    anchor: "꽉-찬-경계가-답을-증명한다",
  },
  {
    id: "max-flow-bipartite-matching-5",
    post: "max-flow-bipartite-matching",
    question: "이분 매칭을 유량으로 풀 때 '작업자 하나가 일 둘을 반씩 맡는' 답이 나오지 않는 이유는?",
    choices: [
      "용량이 모두 정수면 정수 값만 흐르는 최대 유량이 존재하고, 포드-풀커슨이 그런 유량을 찾기 때문이다",
      "BFS가 소수점을 다루지 못하기 때문이다",
      "이분 그래프에는 사이클이 없기 때문이다",
      "역방향 간선이 반쪽 유량을 지우기 때문이다",
    ],
    answer: 0,
    explanation:
      "정수 유량 정리 덕분이다. 용량 1인 간선에는 0 아니면 1만 흐르니 유량 1인 가운데 간선을 그대로 매칭으로 읽으면 된다. 이분 그래프에도 무방향으로 보면 사이클이 있을 수 있다.",
    anchor: "짝짓기를-물-흐르기로-바꾸기",
  },
  {
    id: "max-flow-bipartite-matching-6",
    post: "max-flow-bipartite-matching",
    question: "배차 모델에서 기사 한 명이 동시에 두 건까지 맡을 수 있다면 유량 네트워크를 어떻게 바꾸나?",
    choices: [
      "기사와 주문 사이 간선 용량을 2로 둔다",
      "주문→T 용량을 2로 둔다",
      "S→기사 간선 용량을 2로 둔다",
      "기사 정점을 두 개로 복제하고 서로 잇는다",
    ],
    answer: 2,
    explanation:
      "기사가 맡는 건수 상한은 S에서 기사로 들어오는 양으로 정해진다. 기사-주문 간선을 2로 두면 한 기사가 같은 주문을 두 번 맡는 셈이 되고, 주문→T를 2로 두면 한 주문에 기사가 둘 붙는다.",
    anchor: "현장에서-유량-모양을-알아보는-법",
  },
];
