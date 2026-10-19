import type { QuizQuestion } from "../types";

export const POSTGRES_DATA_TYPES: QuizQuestion[] = [
  {
    id: "postgres-data-types-1",
    post: "postgres-data-types",
    question: "double precision 컬럼에 0.1을 열 번 넣고 sum()을 했더니 0.9999999999999999가 나왔다. 가장 알맞은 해결책은?",
    choices: [
      "real로 바꿔 자릿수를 줄인다",
      "sum() 결과를 round()로 감싼다",
      "numeric이나 최소 단위(센트, 원) 정수로 저장한다",
      "extra_float_digits 설정을 0으로 바꾼다",
    ],
    answer: 2,
    explanation:
      "부동소수점은 0.1을 2진수로 정확히 담지 못해 근삿값을 저장하므로 더할수록 오차가 쌓이고 같다 비교도 틀린다. 표시 설정이나 반올림은 보이는 값만 바꿀 뿐이고, 1.005×100처럼 반올림 자체가 틀리기도 한다. 정확해야 하는 돈은 numeric이나 정수로 저장한다.",
    anchor: "01을-열-번-더하면-1이-아니다",
  },
  {
    id: "postgres-data-types-2",
    post: "postgres-data-types",
    question:
      "세션 TimeZone이 UTC인 커넥션으로 timestamptz 컬럼에 '2026-10-17 09:00'(오프셋 없음)을 넣었다. Asia/Seoul 세션에서 읽으면?",
    choices: [
      "2026-10-17 09:00:00+09",
      "2026-10-17 18:00:00+09",
      "2026-10-17 00:00:00+09",
      "2026-10-17 09:00:00 (시간대 없이)",
    ],
    answer: 1,
    explanation:
      "오프셋이 없는 문자열은 넣는 세션의 TimeZone으로 해석되어 UTC 9시라는 순간으로 저장된다. 서울 세션은 같은 순간을 +9시간 해서 18시로 보여 준다. 앱이 오프셋을 붙여 보내면 이런 일이 없다.",
    anchor: "오전-9시-주문이-오후-6시로-보인다",
  },
  {
    id: "postgres-data-types-3",
    post: "postgres-data-types",
    question: "serial 대신 GENERATED ALWAYS AS IDENTITY를 권하는 이유로 가장 알맞은 것은?",
    choices: [
      "identity는 롤백된 번호를 되돌려 빈 번호가 생기지 않는다",
      "identity가 serial보다 저장 공간이 작다",
      "serial은 bigint 범위를 지원하지 않는다",
      "identity는 값을 직접 넣는 것을 막아 시퀀스와 실제 값이 어긋나는 일을 줄인다",
    ],
    answer: 3,
    explanation:
      "serial은 시퀀스와 nextval() 기본값을 걸어 주는 줄임말이라, 누가 id를 직접 넣으면 시퀀스가 모른 채 같은 번호를 내서 중복 키 에러가 난다. GENERATED ALWAYS는 OVERRIDING SYSTEM VALUE 없이는 직접 넣지 못하게 한다. 빈 번호는 둘 다 생긴다.",
    anchor: "정수는-범위를-넘으면-에러가-난다",
  },
  {
    id: "postgres-data-types-4",
    post: "postgres-data-types",
    question:
      "인덱스가 메모리보다 큰 테이블에 UUID 기본 키로 계속 INSERT한다. v4(무작위)가 v7(시각이 앞)보다 느린 이유는?",
    choices: [
      "v4가 v7보다 바이트 수가 많아서",
      "v4는 정렬 순서상 인덱스 곳곳의 잎 페이지에 들어가 매번 다른 페이지를 읽고 고쳐야 해서",
      "v4는 생성할 때 시스템 시계를 읽어야 해서",
      "v7은 인덱스를 만들지 않아서",
    ],
    answer: 1,
    explanation:
      "둘 다 16바이트지만 v4는 값이 무작위라 B-tree 어디에나 끼어든다. 실습에서 10만 건 삽입에 v4는 6만 페이지를 읽어 왔고 v7은 11페이지였다. v7은 항상 가장 큰 값이라 맨 오른쪽 잎에만 붙고, 페이지 분할로 생기는 빈 공간도 적다.",
    anchor: "uuid-키는-순서가-있어야-인덱스가-편하다",
  },
  {
    id: "postgres-data-types-5",
    post: "postgres-data-types",
    question: "PostgreSQL에서 text 대신 varchar(255)를 쓰면 어떤 이점이 있나?",
    choices: [
      "255자를 넘는 값을 거절하는 제약 외에는 성능 이점이 없다",
      "고정 길이로 저장되어 조회가 빠르다",
      "인덱스 크기가 절반으로 줄어든다",
      "한글을 255바이트까지 담을 수 있다",
    ],
    answer: 0,
    explanation:
      "text, varchar(n), char(n)은 모두 같은 가변 길이 구조로 저장되고 성능 차이가 없다. varchar(n)의 n은 바이트가 아니라 글자 수 제한이다. 길이 제한이 업무 규칙일 때만 쓰면 된다.",
    anchor: "varcharn이-text보다-빠르지-않다",
  },
  {
    id: "postgres-data-types-6",
    post: "postgres-data-types",
    question:
      "마이그레이션에서 BEGIN; ALTER TYPE order_status ADD VALUE 'returned'; UPDATE orders SET status = 'returned' ... 를 실행하면?",
    choices: [
      "정상적으로 바뀐다",
      "ALTER TYPE이 테이블 전체를 다시 쓰느라 오래 걸린다",
      "새 값은 커밋 전에는 쓸 수 없다는 unsafe use of new value 에러가 난다",
      "enum은 값을 추가할 수 없어서 문법 에러가 난다",
    ],
    answer: 2,
    explanation:
      "enum 값 추가는 테이블을 다시 쓰지 않지만, 추가한 값은 그 트랜잭션이 커밋된 뒤에야 쓸 수 있다. 그래서 값 추가와 사용을 다른 트랜잭션으로 나눠야 한다. 반대로 값 삭제는 문법 자체가 없다.",
    anchor: "주문-상태를-담는-세-가지-방법",
  },
  {
    id: "postgres-data-types-7",
    post: "postgres-data-types",
    question:
      "EXCLUDE USING gist (room WITH =, during WITH &&)가 걸린 테이블에 같은 방의 [14:00, 16:00)과 [16:00, 18:00) 예약을 넣으면?",
    choices: [
      "16시가 겹쳐서 두 번째가 거절된다",
      "둘 다 들어간다. [)는 끝을 포함하지 않아 맞닿기만 한다",
      "btree_gist 없이도 항상 동작한다",
      "동시에 들어오면 둘 다 들어갈 수 있다",
    ],
    answer: 1,
    explanation:
      "[)는 시작 포함, 끝 미포함이라 16시 정각은 두 번째 예약에만 속한다. 그래서 && 겹침이 거짓이고 둘 다 들어간다. 배제 제약은 인덱스 수준에서 검사하므로 동시 요청이어도 겹치는 쪽 하나는 반드시 실패한다.",
    anchor: "같은-방을-두-번-예약하지-못하게",
  },
];
