import type { QuizQuestion } from "../types";

export const DB_TYPE_GRAPH: QuizQuestion[] = [
  {
    id: "db-type-graph-1",
    post: "db-type-graph",
    question: "속성 그래프 모델이 관계형 모델과 가장 다른 점은?",
    choices: [
      "숫자 타입을 저장하지 못한다",
      "관계가 외래 키 값이 아니라 타입·방향·속성을 가진 저장 대상이다",
      "노드에 속성을 붙일 수 없다",
      "모든 관계가 양방향이어야 한다",
    ],
    answer: 1,
    explanation:
      "테이블에서는 관계가 외래 키 값이라 따라가려면 그 값으로 다른 테이블을 다시 찾는다. 그래프 DB는 관계 자체를 저장해 노드에서 이웃으로 바로 건너가고, 관계에 since 같은 속성도 자연스럽게 붙인다.",
    anchor: "점과-선으로-저장하기",
  },
  {
    id: "db-type-graph-2",
    post: "db-type-graph",
    question: "index-free adjacency에서 한 단계를 건너가는 비용은 무엇에 비례하나?",
    choices: [
      "그 노드가 가진 관계 수",
      "그래프 전체 노드 수의 로그",
      "그래프 전체 관계 수",
      "질의 문자열의 길이",
    ],
    answer: 0,
    explanation:
      "노드가 자기 관계 목록의 위치를 직접 가리키므로 인덱스를 거치지 않고 포인터를 따라간다. 관계형은 단계마다 B-tree를 루트부터 찾아서 데이터가 커질수록 조금씩 느려진다.",
    anchor: "이웃을-바로-찾아가는-구조",
  },
  {
    id: "db-type-graph-3",
    post: "db-type-graph",
    question: "회원마다 20명을 팔로우하는 10만 명 그래프에서 4단계 탐색이 크게 느려졌다. 그래프 DB로 옮기면 해결될까?",
    choices: [
      "그렇다. 그래프 DB는 깊이와 상관없이 일정한 시간에 답한다",
      "그렇다. Cypher는 결과를 미리 계산해 둔다",
      "아니다. 닿는 사람이 8만 명이면 어떤 DB든 그만큼 방문하므로 깊이와 방향을 제한해야 한다",
      "아니다. 그래프 DB는 3단계까지만 지원한다",
    ],
    answer: 2,
    explanation:
      "단계마다 닿는 노드가 관계 수의 거듭제곱으로 늘어나는 건 데이터 자체의 성질이다. 그래프 DB가 앞서는 건 큰 그래프의 작은 부분만 따라가는 질문이고, 대부분을 훑는 질문에서는 차이가 줄어든다.",
    anchor: "단계가-늘면-닿는-사람이-폭발한다",
  },
  {
    id: "db-type-graph-4",
    post: "db-type-graph",
    question: "choi → kim 같은 순환이 있는 그래프에서 재귀 CTE의 깊이 제한(WHERE r.depth < 2)을 빼면?",
    choices: [
      "UNION이 중복을 없애므로 자동으로 끝난다",
      "깊이가 계속 늘어나는 새 행이 생겨 쿼리가 끝나지 않는다",
      "PostgreSQL이 에러를 내고 바로 멈춘다",
      "결과가 같다",
    ],
    answer: 1,
    explanation:
      "행에 depth가 들어 있어서 같은 사람이라도 깊이가 다르면 UNION이 다른 행으로 본다. 그래서 순환을 따라 끝없이 새 행이 생긴다. PostgreSQL 14부터는 CYCLE 절로 지난 노드로 돌아가는 경로를 끊을 수 있다.",
    anchor: "관계형에서-같은-질문을-하면",
  },
  {
    id: "db-type-graph-5",
    post: "db-type-graph",
    question: "그래프 DB가 키-값 저장소처럼 쉽게 샤딩되지 않는 이유는?",
    choices: [
      "노드에 기본 키가 없어서",
      "Cypher가 분산 실행을 지원하지 않아서",
      "그래프는 메모리에만 저장되기 때문에",
      "그래프를 자르면 경계를 넘는 관계가 생기고, 탐색이 경계를 넘을 때마다 네트워크 왕복이 붙어서",
    ],
    answer: 3,
    explanation:
      "키-값 데이터는 키로 자르면 요청 하나가 한 서버에서 끝나지만, 그래프 탐색은 어느 경계를 넘을지 미리 알기 어렵다. 그래서 그래프 전체를 서버마다 복제하고 읽기를 나누는 방식이 일반적이다.",
    anchor: "그래프-db가-맞는-곳과-아닌-곳",
  },
  {
    id: "db-type-graph-6",
    post: "db-type-graph",
    question: "BFS로 2단계 안에 닿는 사람을 구할 때 park을 꺼냈는데 이웃 choi가 이미 방문 표시돼 있다. 어떻게 하나?",
    choices: [
      "건너뛰고 처음 보는 이웃(jung)만 큐에 넣는다",
      "choi를 다시 큐에 넣어 깊이를 갱신한다",
      "탐색을 멈춘다",
      "choi를 결과에서 뺀다",
    ],
    answer: 0,
    explanation:
      "BFS는 처음 보는 노드만 다음 단계로 넣는다. choi는 lee를 거쳐 이미 2단계로 닿았으니 다시 넣지 않고, 이 방문 표시가 순환과 중복을 함께 막는다.",
    anchor: "너비-우선으로-따라가-보기",
  },
];
