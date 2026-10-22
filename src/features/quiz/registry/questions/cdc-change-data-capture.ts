import type { QuizQuestion } from "../types";

export const CDC_CHANGE_DATA_CAPTURE: QuizQuestion[] = [
  {
    id: "cdc-change-data-capture-1",
    post: "cdc-change-data-capture",
    question:
      "updated_at > 마지막 기준 시각으로 폴링하는 동기화 작업이, 3초 걸린 트랜잭션이 고친 주문을 영영 넘기지 못했다. 가장 직접적인 이유는?",
    choices: [
      "폴링 간격이 트랜잭션보다 짧아서 같은 행을 두 번 읽었기 때문이다",
      "now()가 트랜잭션 시작 시각이라, 커밋됐을 때는 이미 기준보다 과거 값이었기 때문이다",
      "updated_at 컬럼에 인덱스가 없어서 조회가 일부 행을 건너뛰었기 때문이다",
      "REPLICA IDENTITY가 DEFAULT라 이전 값이 남지 않았기 때문이다",
    ],
    answer: 1,
    explanation:
      "PostgreSQL의 now()는 트랜잭션이 시작한 시각이라서, 늦게 커밋된 행의 updated_at은 그 사이 다른 커밋으로 올라간 기준보다 작다. 그래서 다음 폴링의 WHERE에 다시 걸리지 않는다. REPLICA IDENTITY는 로그 기반 CDC의 이야기라 폴링과 관계가 없다.",
    anchor: "검색-인덱스가-따라오지-못한-이유",
  },
  {
    id: "cdc-change-data-capture-2",
    post: "cdc-change-data-capture",
    question: "트리거로 변경 로그 테이블에 한 줄씩 적는 CDC의 가장 큰 비용은 어디서 생기나?",
    choices: [
      "WAL을 붙잡는 복제 슬롯이 디스크를 채운다",
      "DDL이 옮겨지지 않아 받는 쪽이 멈춘다",
      "원본 테이블의 쓰기마다 로그 행을 하나 더 써서 쓰기 처리량이 준다",
      "삭제를 잡지 못해 받는 쪽에 지운 행이 남는다",
    ],
    answer: 2,
    explanation:
      "트리거는 같은 트랜잭션 안에서 로그 행을 하나 더 쓰니 원본 쓰기 경로가 무거워진다. 실험에서는 처리량이 3분의 1쯤 줄었다. 트리거는 DELETE도 잡으므로 삭제를 놓치는 것은 폴링의 문제다.",
    anchor: "트리거로-바뀐-행을-한-줄씩-적어-둔다",
  },
  {
    id: "cdc-change-data-capture-3",
    post: "cdc-change-data-capture",
    question:
      "기존 주문 수백만 건을 먼저 복사하고 그 뒤 변경을 이어 받을 때, 둘 사이에 틈도 겹침도 없게 하는 PostgreSQL의 장치는?",
    choices: [
      "슬롯을 만들 때 EXPORT_SNAPSHOT으로 받은 스냅숏으로 기존 데이터를 읽는다",
      "복사를 시작하기 전에 테이블에 ACCESS EXCLUSIVE 잠금을 건다",
      "복사가 끝난 시각의 updated_at부터 다시 폴링한다",
      "REPLICA IDENTITY FULL로 바꿔 모든 행을 WAL에 다시 쓴다",
    ],
    answer: 0,
    explanation:
      "슬롯 생성과 함께 받은 스냅숏은 슬롯의 시작 위치와 정확히 같은 시점이다. 그 스냅숏에 없는 변경은 슬롯의 첫 변경부터 나오므로 이음매가 맞는다. 테이블 잠금은 운영 중인 쓰기를 막아 버리고, updated_at 폴링은 앞의 구멍을 그대로 가진다.",
    anchor: "처음-한-번은-통째로-복사해야-한다",
  },
  {
    id: "cdc-change-data-capture-4",
    post: "cdc-change-data-capture",
    question:
      "보내는 쪽에 ALTER TABLE orders ADD COLUMN coupon을 하고 쿠폰이 든 주문을 넣었더니 구독 쪽 적용 워커가 계속 죽는다. 다음 배포부터 지킬 순서는?",
    choices: [
      "컬럼 추가는 보내는 쪽 먼저, 삭제는 받는 쪽 먼저",
      "컬럼 추가는 받는 쪽 먼저, 삭제는 보내는 쪽 먼저",
      "구독을 지우고 다시 만든다. 논리 복제는 컬럼 변경을 지원하지 않는다",
      "순서는 상관없다. 구독이 DDL을 자동으로 따라 한다",
    ],
    answer: 1,
    explanation:
      "논리 복제는 DDL을 옮기지 않고, 받는 쪽에 없는 컬럼이 담긴 변경이 오면 적용이 실패한다. 받는 쪽에 컬럼이 더 있는 것은 괜찮으니 추가는 받는 쪽부터 한다. 실험에서도 받는 쪽에 컬럼을 맞추자 멈춘 지점부터 알아서 이어 받았다.",
    anchor: "스키마를-바꾸면-복제가-멈춘다",
  },
  {
    id: "cdc-change-data-capture-5",
    post: "cdc-change-data-capture",
    question:
      "REPLICA IDENTITY가 기본값인 테이블에서 큰 설명 컬럼은 그대로 두고 가격만 고쳤다. 받는 쪽이 이 변경으로 행을 통째로 덮어쓰면 무슨 일이 생기나?",
    choices: [
      "아무 문제 없다. 변경 이벤트에 모든 컬럼의 새 값이 들어 있다",
      "가격이 바뀌기 전 값으로 되돌아간다",
      "설명이 비거나 자리 표시 값으로 바뀐다. 바뀌지 않은 TOAST 값은 다시 실리지 않기 때문이다",
      "적용 워커가 기본 키 충돌로 멈춘다",
    ],
    answer: 2,
    explanation:
      "UPDATE가 TOAST 값을 건드리지 않으면 PostgreSQL은 그 값을 WAL에 다시 쓰지 않아서, 디코딩 결과에 unchanged-toast-datum으로만 나온다. 받는 쪽은 그 표시를 보면 기존 값을 유지해야 한다. REPLICA IDENTITY FULL에서도 바뀐 뒤 쪽은 같은 표시로 온다.",
    anchor: "바뀌기-전-값은-어디까지-남나",
  },
  {
    id: "cdc-change-data-capture-6",
    post: "cdc-change-data-capture",
    question:
      "CDC 적용기가 키마다 마지막 LSN을 저장해 중복을 거른다. 행을 DELETE할 때 그 키의 LSN 기록까지 지우면 어떤 문제가 생기나?",
    choices: [
      "재시작 뒤 다시 온 오래된 INSERT가 지운 행을 되살린다",
      "다음 INSERT부터 모두 중복으로 판단되어 버려진다",
      "LSN이 단조 증가하지 않게 되어 슬롯이 무효가 된다",
      "아무 문제 없다. 지운 키는 다시 오지 않는다",
    ],
    answer: 0,
    explanation:
      "커넥터는 재시작하면 마지막으로 기록한 위치부터 다시 보내므로, 지우기 전의 INSERT가 다시 올 수 있다. LSN 기록이 없으면 그 INSERT를 새 변경으로 보고 행을 되살린다. 그래서 삭제 뒤에도 LSN은 남겨 둔다.",
    anchor: "받는-쪽은-같은-변경을-다시-받는다",
  },
  {
    id: "cdc-change-data-capture-7",
    post: "cdc-change-data-capture",
    question: "max_slot_wal_keep_size를 넘어 pg_replication_slots의 wal_status가 lost가 된 CDC 슬롯은 어떻게 복구하나?",
    choices: [
      "pg_replication_slot_advance로 위치를 현재 LSN으로 옮기면 이어진다",
      "max_slot_wal_keep_size를 늘리고 reload하면 슬롯이 되살아난다",
      "커넥터를 재시작하면 지워진 구간을 아카이브에서 다시 읽는다",
      "슬롯을 지우고 새로 만들어 초기 스냅숏부터 다시 한다",
    ],
    answer: 3,
    explanation:
      "lost는 슬롯이 필요로 하던 WAL이 이미 지워졌다는 뜻이라 그 구간의 변경은 되살릴 수 없다. 실험에서도 끊긴 슬롯을 읽으려 하자 can no longer get changes 에러가 났다. 새 슬롯과 초기 스냅숏으로 다시 맞추고, 그 사이 지워진 행이 받는 쪽에 남지 않았는지 확인한다.",
    anchor: "슬롯이-끊기는-날",
  },
];
