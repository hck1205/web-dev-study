import type { QuizQuestion } from "../types";

export const DB_INDEX: QuizQuestion[] = [
  {
    id: "db-index-1",
    post: "db-index",
    question: "EXPLAIN (ANALYZE, BUFFERS)로 인덱스 전후를 비교할 때 시간보다 Buffers를 더 믿는 이유는?",
    choices: [
      "Buffers는 플래너의 예상값이라 실행할 때마다 같기 때문에",
      "시간은 캐시 상태에 따라 오르내리지만, 읽은 페이지 수는 데이터가 같으면 그대로이기 때문에",
      "Buffers에는 네트워크 전송 시간까지 포함되기 때문에",
      "시간은 ms 단위가 아니라 상대 비용이라 비교할 수 없기 때문에",
    ],
    answer: 1,
    explanation:
      "같은 쿼리도 페이지가 캐시에 있느냐에 따라 시간이 크게 달라진다. 읽은 페이지 수는 실제로 한 일의 양이라 데이터가 같으면 변하지 않는다. Buffers는 예상이 아니라 실제로 읽은 값이고, 상대 비용 단위를 쓰는 건 cost다.",
    anchor: "100만-줄을-처음부터-끝까지-읽는-계획",
  },
  {
    id: "db-index-2",
    post: "db-index",
    question: "PostgreSQL B-tree 인덱스의 잎(leaf) 페이지에 user_id 값과 함께 들어 있는 것은?",
    choices: [
      "그 행의 모든 컬럼 값",
      "그 행의 기본 키 값",
      "그 행이 힙의 어느 페이지 몇 번째 칸에 있는지 가리키는 ctid",
      "같은 값을 가진 행의 개수만",
    ],
    answer: 2,
    explanation:
      "PostgreSQL 인덱스는 값과 위치(ctid)만 가지고, 행 전체는 힙에 있다. 그래서 인덱스로 위치를 찾은 뒤 힙을 한 번 더 읽는다. 잎에 기본 키를 담는 건 MySQL InnoDB의 보조 인덱스 방식이다.",
    anchor: "b-tree는-세-번-만에-잎에-닿는다",
  },
  {
    id: "db-index-3",
    post: "db-index",
    question: "WHERE status = 'pending' AND created_at >= '2026-09-13' 조건에 가장 적은 페이지를 읽는 인덱스는?",
    choices: [
      "(created_at, status)",
      "(status)",
      "(created_at)",
      "(status, created_at)",
    ],
    answer: 3,
    explanation:
      "같다로 비교하는 status를 앞에 두면 pending이면서 날짜 조건에 맞는 항목이 인덱스 안에서 한 덩어리로 붙는다. (created_at, status)는 한 달 치 항목을 다 훑으며 status를 확인해야 해서 예제에서 418페이지를 읽었고, (status, created_at)은 8페이지를 읽었다.",
    anchor: "여러-컬럼-인덱스는-순서가-결과를-바꾼다",
  },
  {
    id: "db-index-4",
    post: "db-index",
    question: "Index Only Scan인데도 Heap Fetches가 크게 나오는 이유로 가장 알맞은 것은?",
    choices: [
      "VACUUM이 밀려서 가시성 맵에 '모두에게 보임' 표시가 꺼진 페이지가 많기 때문에",
      "인덱스에 INCLUDE 컬럼이 너무 많기 때문에",
      "쿼리에 ORDER BY가 붙었기 때문에",
      "인덱스가 해시 인덱스이기 때문에",
    ],
    answer: 0,
    explanation:
      "인덱스만 보고는 그 행이 지금 트랜잭션에서 보이는지 알 수 없어서, 가시성 맵 표시가 켜진 페이지만 힙을 건너뛴다. 이 표시는 VACUUM이 켜기 때문에 수정이 잦은 테이블에서 VACUUM이 밀리면 힙을 다시 읽게 된다.",
    anchor: "같은-인덱스를-읽는-네-가지-방법",
  },
  {
    id: "db-index-5",
    post: "db-index",
    question: "bigint 컬럼 user_id에 인덱스가 있을 때, 인덱스를 쓰지 못하는 조건은?",
    choices: [
      "WHERE user_id = 42",
      "WHERE user_id = '42'",
      "WHERE user_id = 42.0",
      "WHERE user_id IN (42, 43)",
    ],
    answer: 2,
    explanation:
      "42.0은 numeric이라 비교하려고 컬럼 쪽을 numeric으로 바꾸고, 그 결과는 인덱스에 없어서 Seq Scan이 된다. 따옴표로 쓴 '42'는 타입이 정해지지 않은 리터럴이라 컬럼 타입인 bigint로 바뀌어 인덱스를 탄다.",
    anchor: "인덱스가-있는데-안-타는-경우",
  },
  {
    id: "db-index-6",
    post: "db-index",
    question: "status 컬럼이 인덱스에 들어 있을 때 UPDATE orders SET status = 'paid' 가 HOT 업데이트가 되지 않는 이유는?",
    choices: [
      "status가 text 타입이라서",
      "인덱스에 들어간 컬럼을 바꾸면 새 버전을 가리키는 인덱스 항목을 새로 넣어야 해서",
      "HOT 업데이트는 DELETE에만 적용되는 기능이라서",
      "fillfactor가 기본값보다 낮아서",
    ],
    answer: 1,
    explanation:
      "HOT은 인덱스에 걸린 컬럼이 바뀌지 않고 같은 페이지에 빈자리가 있을 때만 인덱스를 건드리지 않는다. 예제에서도 amount를 바꾼 행은 HOT이었고 status를 바꾼 행은 아니었다. fillfactor를 낮추면 오히려 빈자리가 생겨 HOT이 쉬워진다.",
    anchor: "인덱스는-쓰기를-느리게-한다",
  },
  {
    id: "db-index-7",
    post: "db-index",
    question: "MySQL InnoDB에서 기본 키를 무작위 UUID 문자열로 잡으면 생기는 문제가 아닌 것은?",
    choices: [
      "새 행이 B-tree 여기저기에 끼어들어 페이지 분할이 잦아진다",
      "보조 인덱스마다 기본 키가 복사되어 모든 인덱스가 커진다",
      "메모리에 올려야 할 페이지가 늘어난다",
      "보조 인덱스로 찾은 뒤 기본 키 B-tree를 다시 내려갈 필요가 없어진다",
    ],
    answer: 3,
    explanation:
      "InnoDB 보조 인덱스의 잎에는 기본 키가 들어 있어서, 보조 인덱스로 찾으면 그 키로 클러스터드 인덱스를 한 번 더 내려간다. 이건 키 종류와 상관없이 늘 그렇다. 나머지 셋은 무작위 키와 긴 키 때문에 실제로 생기는 문제다.",
    anchor: "mysql-8은-표-자체가-인덱스다",
  },
];
