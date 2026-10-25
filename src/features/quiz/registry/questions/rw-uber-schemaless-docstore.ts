import type { QuizQuestion } from "../types";

export const RW_UBER_SCHEMALESS_DOCSTORE: QuizQuestion[] = [
  {
    id: "rw-uber-schemaless-docstore-1",
    post: "rw-uber-schemaless-docstore",
    question: "Schemaless에서 운행의 청구 상태를 바꾸려면 어떻게 하나?",
    choices: [
      "STATUS 열의 기존 셀을 UPDATE로 덮어쓴다",
      "같은 행 키와 STATUS 열에 더 큰 ref key로 새 셀을 쓴다",
      "BASE 셀을 지우고 다시 쓴다",
      "MySQL 트랜잭션으로 BASE와 STATUS를 함께 고친다",
    ],
    answer: 1,
    explanation:
      "셀은 한 번 쓰면 덮어쓰거나 지울 수 없고, 고치려면 더 큰 ref key로 새 셀을 덧붙인다. 가장 큰 ref key의 셀이 최신이다. 청구 시도마다 STATUS에 셀이 하나씩 쌓이는 이유다.",
    anchor: "고치지-않고-덧붙이는-셀",
  },
  {
    id: "rw-uber-schemaless-docstore-2",
    post: "rw-uber-schemaless-docstore",
    question: "Schemaless의 버퍼 쓰기가 주 마스터가 살아 있을 때도 보조 마스터에 먼저 쓰는 이유는?",
    choices: [
      "읽기 지연을 줄이려고",
      "보조 마스터가 인덱스를 만들기 때문에",
      "주 마스터가 미니언에 비동기 복제하기 전에 죽으면 쓰기가 사라지는 틈을 막으려고",
      "샤드를 다른 서버로 옮기는 중이라서",
    ],
    answer: 2,
    explanation:
      "Schemaless는 MySQL 비동기 복제를 쓰니, 마스터가 쓰고 답한 뒤 미니언에 넘기기 전에 디스크가 죽으면 그 셀은 사라진다. 그래서 무작위 보조 마스터의 버퍼 테이블에도 써 두고, 미니언에 셀이 나타나면 지운다. 대신 주 마스터가 죽은 동안 버퍼의 쓰기는 읽을 수 없다.",
    anchor: "마스터가-죽어도-쓰기는-받는다",
  },
  {
    id: "rw-uber-schemaless-docstore-3",
    post: "rw-uber-schemaless-docstore",
    question: "Schemaless 트리거로 만든 청구 함수가 먼저 STATUS 열을 읽어 이미 청구됐는지 확인하는 이유는?",
    choices: [
      "프레임워크가 셀마다 함수를 적어도 한 번 부르니 같은 셀이 다시 올 수 있어서",
      "STATUS가 BASE보다 먼저 쓰이기 때문에",
      "트리거가 샤드 순서를 보장하지 않아서",
      "MySQL 잠금을 얻으려고",
    ],
    answer: 0,
    explanation:
      "트리거는 at-least-once로 동작한다. 워커가 죽으면 저장된 오프셋부터 다시 읽으니 같은 셀이 두 번 불릴 수 있다. 그래서 함수는 멱등해야 하고, 이미 처리했으면 돌아가는 확인이 그 장치다. 샤드 안에서는 쓰인 순서대로 처리된다.",
    anchor: "셀-로그를-꼬리부터-따라-읽는-트리거",
  },
  {
    id: "rw-uber-schemaless-docstore-4",
    post: "rw-uber-schemaless-docstore",
    question: "Schemaless 보조 인덱스의 샤드 필드로 가장 나쁜 것은?",
    choices: [
      "기사 UUID",
      "운행 UUID",
      "도시 ID",
      "결제 상태 값(enum)",
    ],
    answer: 3,
    explanation:
      "샤드 필드가 인덱스 항목이 들어갈 샤드를 정하니 분포가 고와야 한다. 1부는 UUID가 가장 좋고 도시 ID는 썩 좋지 않으며 상태 값은 저장에 해롭다고 적었다. 값이 몇 개뿐이면 항목이 샤드 몇 곳에 몰린다.",
    anchor: "인덱스는-늦게-따라오고-샤드-키가-하나-있다",
  },
  {
    id: "rw-uber-schemaless-docstore-5",
    post: "rw-uber-schemaless-docstore",
    question: "PostgreSQL 16에서 Uber 글의 users 예제를 재 봤다. 인덱스가 없는 last_seen을 흩어진 1만 행(fillfactor 90)에서 고쳤을 때 결과는?",
    choices: [
      "세 인덱스가 1만 번씩 모두 갱신됐다",
      "1만 건 모두 HOT 업데이트라 인덱스를 건드리지 않았다",
      "HOT은 인덱스 열을 고칠 때만 일어났다",
      "fillfactor와 상관없이 HOT이 0건이었다",
    ],
    answer: 1,
    explanation:
      "인덱스가 없는 열만 바뀌고 같은 페이지에 빈자리가 있으면 HOT 업데이트가 되어 인덱스를 고치지 않는다. 글의 예제처럼 인덱스가 걸린 birth_year를 고치면 HOT이 0건이었다. 붙어 있는 행을 한꺼번에 고치면 빈자리가 금방 차서 일부만 HOT이 됐다.",
    anchor: "글의-예제-테이블로-직접-재-보기",
  },
  {
    id: "rw-uber-schemaless-docstore-6",
    post: "rw-uber-schemaless-docstore",
    question: "2021년 Docstore 글이 Schemaless를 범용 트랜잭션 DB로 바꾼 이유로 든 것은?",
    choices: [
      "MySQL 라이선스가 바뀌어서",
      "4,096개 샤드가 모자라서",
      "불변 셀의 제한된 API와 모델링 때문에 범용 DB로 쓰기 어려웠고, 대신 들인 Cassandra의 최종적 일관성이 애플리케이션을 복잡하게 해서",
      "트리거가 데이터를 잃어서",
    ],
    answer: 2,
    explanation:
      "글은 추가만 하는 셀이 단순함을 줬지만 범용 데이터베이스로는 불편했다고 적었다. 그 빈자리를 채운 Cassandra는 Uber 규모에서 운영 성숙도와 효율이 부족했고, 강한 일관성이 없어 설계가 복잡해졌다. 그래서 Raft 기반 CP 시스템인 Docstore로 갔다.",
    anchor: "5년-뒤-고칠-수-없는-셀이-짐이-됐다",
  },
  {
    id: "rw-uber-schemaless-docstore-7",
    post: "rw-uber-schemaless-docstore",
    question: "Mezzanine 이전에서 실제 전환 전에 Schemaless 결과를 PostgreSQL과 비교할 때 확률적으로 일부만 비교한 이유는?",
    choices: [
      "이미 부하가 큰 PostgreSQL에 검증 부하를 덜 얹으려고",
      "Schemaless가 모든 질의를 지원하지 않아서",
      "UUID 변환이 끝나지 않아서",
      "법적으로 전체 비교가 금지돼서",
    ],
    answer: 0,
    explanation:
      "쓰기는 양쪽에 거울처럼 하고, 질의를 Schemaless에도 다시 돌려 결과를 비교했다. 검증 자체가 이미 바쁜 PostgreSQL에 부하를 더하니 확률적으로 비교량을 조절했다. 이렇게 데이터 모델링, 백필, 리팩터링을 동시에 진행할 수 있었다.",
    anchor: "mezzanine-쓰기를-두-곳에-하며-6주-동안-옮겼다",
  },
];
