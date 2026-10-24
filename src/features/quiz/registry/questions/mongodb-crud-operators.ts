import type { QuizQuestion } from "../types";

export const MONGODB_CRUD_OPERATORS: QuizQuestion[] = [
  {
    id: "mongodb-crud-operators-1",
    post: "mongodb-crud-operators",
    question:
      'variants 배열에 { "variants.color": "red", "variants.size": "L" }로 조회했더니 빨강 M과 파랑 L만 있는 상품도 나왔다. 이유는?',
    choices: [
      "점 표기법은 대소문자를 구분하지 않아서",
      "배열 조건은 원소 중 하나만 맞으면 되고, 두 조건이 서로 다른 원소에 맞아도 문서가 통과해서",
      "멀티키 인덱스가 없어서 컬렉션 스캔이 잘못된 결과를 내서",
      "find는 기본으로 OR 조건으로 동작해서",
    ],
    answer: 1,
    explanation:
      "배열 필드의 조건은 원소 하나라도 맞으면 참이고, 조건이 여러 개면 각자 다른 원소에 맞아도 된다. 한 원소가 두 조건을 다 맞춰야 하면 $elemMatch로 묶는다. 나란히 쓴 조건은 OR가 아니라 AND다.",
    anchor: "조건은-원소마다-따로-맞는다",
  },
  {
    id: "mongodb-crud-operators-2",
    post: "mongodb-crud-operators",
    question: '가격이 문자열 "59000"으로 저장된 상품이 { price: { $gte: 20000 } } 결과에 없다. 왜 그런가?',
    choices: [
      "$gte가 문자열을 숫자로 바꾸다 실패해 오류를 숨겨서",
      "문자열은 정렬 순서상 숫자보다 앞이라서",
      "비교 연산자는 같은 타입끼리만 비교해서 숫자 조건이 문자열 값에는 거짓이 되므로",
      "인덱스가 숫자 값만 담고 있어서",
    ],
    answer: 2,
    explanation:
      "MongoDB 비교 연산자는 타입이 같은 값끼리만 비교한다(type bracketing). 그래서 오류 없이 조용히 빠지고, $type으로 타입이 다른 문서를 찾아 고쳐야 한다. 정렬에서는 숫자가 문자열보다 앞이라 섞인 문서가 끝에 몰린다.",
    anchor: "비교-연산자는-타입부터-본다",
  },
  {
    id: "mongodb-crud-operators-3",
    post: "mongodb-crud-operators",
    question:
      "앱 코드에서 { price: { $lt: 30000 }, price: { $gt: 20000 } }으로 조회했더니 49,000원 상품이 나왔다. 원인은?",
    choices: [
      "자바스크립트 객체에서 같은 키를 두 번 쓰면 뒤의 것이 앞을 덮어써서 $gt 조건만 서버에 가서",
      "두 조건이 OR로 합쳐져서",
      "$lt가 배열에만 동작해서",
      "price에 인덱스가 없어서 범위 조건 하나가 무시돼서",
    ],
    answer: 0,
    explanation:
      "쿼리는 객체라서 같은 키가 두 번이면 마지막 값만 남는다. 같은 필드 조건은 한 객체에 $gt와 $lt를 함께 쓰거나 $and로 나눈다. 인덱스 유무는 결과를 바꾸지 않는다.",
    anchor: "논리-연산자와-정규식",
  },
  {
    id: "mongodb-crud-operators-4",
    post: "mongodb-crud-operators",
    question: "createdAt 인덱스가 있는 20만 건 컬렉션에서 skip(150000).limit(20)이 느린 이유는?",
    choices: [
      "skip이 인덱스를 쓰지 못하고 컬렉션 전체를 읽어서",
      "건너뛸 15만 개의 인덱스 키를 실제로 넘긴 뒤에야 20개를 돌려줘서",
      "limit이 skip보다 먼저 적용돼서",
      "커서 배치 크기가 101개라 왕복이 많아져서",
    ],
    answer: 1,
    explanation:
      "explain에서 totalKeysExamined가 150020으로 나왔다. 문서는 20개만 읽었지만 키를 넘기는 비용이 페이지 깊이에 비례한다. 앞 페이지 마지막 값으로 범위를 거는 키셋 방식이면 몇 페이지째든 20개만 읽는다.",
    anchor: "커서는-sort-skip-limit-순서로-돈다",
  },
  {
    id: "mongodb-crud-operators-5",
    post: "mongodb-crud-operators",
    question:
      "variants 배열에서 재고가 0인 옵션 전부에 soldOut 표시를 하려 한다. 맞는 방법은?",
    choices: [
      'filter에 "variants.stock": 0을 걸고 "variants.$.soldOut"을 $set한다',
      '"variants.$[].soldOut"을 $set한다',
      '"variants.$[v].soldOut"을 $set하고 arrayFilters에 { "v.stock": { $lte: 0 } }를 준다',
      "replaceOne으로 배열 전체를 다시 쓴다",
    ],
    answer: 2,
    explanation:
      "$[이름]과 arrayFilters는 조건에 맞는 원소 전부를 고친다. $는 쿼리에 맞은 첫 원소 하나만, $[]는 모든 원소를 고친다. replaceOne은 동작은 하지만 읽고 다시 쓰는 사이에 다른 변경을 덮어쓸 수 있다.",
    anchor: "배열-안의-원소-하나-고치기",
  },
  {
    id: "mongodb-crud-operators-6",
    post: "mongodb-crud-operators",
    question:
      "userId 조건으로 upsert하는 장바구니 생성 코드에서 사용자당 문서가 두 개씩 생겼다. 근본적인 해결책은?",
    choices: [
      "upsert 대신 findOne 후 insertOne으로 나눈다",
      "writeConcern을 majority로 올린다",
      "$setOnInsert 대신 $set을 쓴다",
      "userId에 유니크 인덱스를 만든다",
    ],
    answer: 3,
    explanation:
      "upsert는 찾기와 넣기를 원자적으로 묶지 않아서 동시에 온 두 요청이 모두 삽입할 수 있다. 유니크 인덱스가 있으면 두 번째 삽입이 중복 키에 걸리고, 조건이 그 필드의 동등 비교면 서버가 재시도해 기존 문서를 고친다. 읽고 넣기로 나누면 틈이 더 커진다.",
    anchor: "upsert가-두-번-동시에-오면",
  },
  {
    id: "mongodb-crud-operators-7",
    post: "mongodb-crud-operators",
    question:
      "insertMany 5건 중 세 번째가 중복 키로 실패했다. ordered: true(기본값)일 때 컬렉션 상태는?",
    choices: [
      "앞의 두 건만 들어가 있고 뒤의 두 건은 시도하지 않았다",
      "아무것도 들어가지 않았다(전체 롤백)",
      "실패한 한 건만 빠지고 네 건이 들어갔다",
      "다섯 건 모두 들어가고 중복은 덮어썼다",
    ],
    answer: 0,
    explanation:
      "ordered는 실패한 지점에서 멈추고 이미 성공한 것은 되돌리지 않는다. unordered면 실패한 것만 건너뛰고 네 건이 들어간다. 전부 아니면 전무가 필요하면 트랜잭션 안에서 실행해야 한다.",
    anchor: "여러-건-쓰기-insertmany와-bulkwrite",
  },
];
