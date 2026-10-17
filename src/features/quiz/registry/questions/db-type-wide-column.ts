import type { QuizQuestion } from "../types";

export const DB_TYPE_WIDE_COLUMN: QuizQuestion[] = [
  {
    id: "db-type-wide-column-1",
    post: "db-type-wide-column",
    question: "PRIMARY KEY ((user_id), viewed_at, book_id)에서 user_id가 하는 일은?",
    choices: [
      "해시해서 이 파티션을 맡을 노드를 정하고, 조회할 때 같음 조건으로 반드시 줘야 한다",
      "파티션 안의 행 순서를 정한다",
      "같은 시각에 본 두 책을 구분한다",
      "보조 인덱스를 자동으로 만든다",
    ],
    answer: 0,
    explanation:
      "안쪽 괄호가 파티션 키다. 토큰으로 노드를 고르니 파티션 키 없이 찾으려면 모든 노드를 뒤져야 해서 Cassandra가 기본으로 막는다. 순서를 정하는 건 클러스터링 키인 viewed_at이다.",
    anchor: "테이블보다-쿼리를-먼저-정한다",
  },
  {
    id: "db-type-wide-column-2",
    post: "db-type-wide-column",
    question: "views_by_book의 파티션 키에 day를 함께 넣은 이유는?",
    choices: [
      "날짜로 정렬하려고",
      "TTL을 걸 수 있게 하려고",
      "베스트셀러 파티션이 끝없이 자라 한 노드만 무거워지는 걸 막으려고",
      "ALLOW FILTERING 없이 user_id로 찾으려고",
    ],
    answer: 2,
    explanation:
      "파티션 하나는 한 노드와 그 복제본에 통째로 산다. 시간처럼 계속 늘어나는 데이터를 책 id 하나로만 묶으면 파티션이 수 GB로 커져 컴팩션과 복구가 느려진다. 날짜 단위로 끊는 bucketing으로 파티션 크기를 제한한다.",
    anchor: "테이블보다-쿼리를-먼저-정한다",
  },
  {
    id: "db-type-wide-column-3",
    post: "db-type-wide-column",
    question: "Cassandra 쓰기가 B-tree 기반 DB보다 싼 이유는?",
    choices: [
      "쓰기를 디스크에 전혀 남기지 않아서",
      "커밋 로그 덧붙이기와 메모리 멤테이블 삽입으로 끝나고 정렬된 자리 찾기는 flush와 컴팩션으로 미루기 때문에",
      "모든 쓰기를 한 프라이머리가 받아서",
      "쓰기마다 모든 복제본의 fsync를 기다려서",
    ],
    answer: 1,
    explanation:
      "LSM 트리는 쓰기 때 페이지를 찾아 고치는 무작위 쓰기를 하지 않는다. 멤테이블이 차면 정렬된 SSTable로 한 번에 내린다. 대신 읽기가 여러 파일을 합쳐 봐야 해서 블룸 필터와 컴팩션이 그 비용을 줄인다.",
    anchor: "쓰기는-덧붙이기만-한다",
  },
  {
    id: "db-type-wide-column-4",
    post: "db-type-wide-column",
    question: "복제본 3개에서 쓰기 QUORUM, 읽기 QUORUM이면 방금 쓴 값을 읽는 이유는?",
    choices: [
      "QUORUM은 모든 복제본에 쓰기 때문에",
      "코디네이터가 값을 캐시해 두기 때문에",
      "QUORUM이 동시에 쓴 값의 순서를 트랜잭션처럼 정해 주기 때문에",
      "2 + 2 > 3이라 읽기에 답한 복제본 중 하나는 반드시 마지막 쓰기를 가지기 때문에",
    ],
    answer: 3,
    explanation:
      "R + W > N이면 읽은 집합과 쓴 집합이 적어도 하나 겹친다. 다만 같은 칸을 동시에 쓰면 쓰기 시각이 늦은 쪽이 이기는 last write wins라, 비교 후 쓰기가 필요하면 Paxos 기반 경량 트랜잭션이 따로 필요하다.",
    anchor: "몇-대가-대답해야-성공인가",
  },
  {
    id: "db-type-wide-column-5",
    post: "db-type-wide-column",
    question: "Cassandra로 넣고 지우기를 반복하는 작업 큐를 만들면 점점 느려지는 이유는?",
    choices: [
      "삭제가 툼스톤으로 남아 gc_grace_seconds 동안 쌓이고, 읽기가 그걸 훑어야 해서",
      "INSERT가 기존 행을 덮어쓰지 못해서",
      "큐 테이블에는 클러스터링 키를 둘 수 없어서",
      "삭제할 때마다 모든 노드가 잠기기 때문에",
    ],
    answer: 0,
    explanation:
      "삭제는 지워졌다는 표시를 새로 쓰는 일이고, 기본 10일이 지나야 컴팩션에서 버린다. 남은 작업을 꺼내는 읽기가 툼스톤 수천 개를 지나가야 하고, 기준을 넘으면 쿼리가 실패한다. 지울 데이터는 TTL과 TWCS로 파일째 만료시키는 편이 낫다.",
    anchor: "지우는-것도-쓰기다",
  },
  {
    id: "db-type-wide-column-6",
    post: "db-type-wide-column",
    question: "컴팩션에서 같은 키의 값 중 무엇을 남길지 정하는 기준은?",
    choices: [
      "가장 최근에 만들어진 SSTable 파일의 값",
      "쓰기 시각(timestamp)이 가장 늦은 값",
      "가장 큰 값",
      "가장 많은 복제본이 가진 값",
    ],
    answer: 1,
    explanation:
      "파일 순서가 아니라 쓰기 시각으로 정한다. 그래서 삭제 뒤에 다시 쓴 값은 살아남고, 노드들의 시계를 NTP로 맞추는 게 운영의 기본이 된다.",
    anchor: "파일을-합쳐-읽기를-되찾는-컴팩션",
  },
];
