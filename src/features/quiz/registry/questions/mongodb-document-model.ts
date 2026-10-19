import type { QuizQuestion } from "../types";

export const MONGODB_DOCUMENT_MODEL: QuizQuestion[] = [
  {
    id: "mongodb-document-model-1",
    post: "mongodb-document-model",
    question: "상품 하나에 리뷰가 계속 쌓인다. 리뷰를 상품 문서의 배열에 계속 $push하는 설계의 문제는?",
    choices: [
      "배열 필드에는 인덱스를 걸 수 없다",
      "배열에 넣은 데이터는 원자적으로 수정되지 않는다",
      "끝없이 자라는 배열이라 16MB 문서 제한에 닿을 수 있고, 그 전에도 문서가 커져 읽기와 인덱스 비용이 늘어난다",
      "$push는 트랜잭션 안에서만 쓸 수 있다",
    ],
    answer: 2,
    explanation:
      "수백 개 이상으로 자라는 관계는 내장보다 참조가 맞다. 리뷰를 별도 컬렉션에 두고 상품 문서에는 최근 리뷰 몇 개와 개수만 복사하는 subset 패턴을 쓴다. 배열에도 멀티키 인덱스를 걸 수 있고, 문서 하나의 수정은 배열을 포함해 원자적이다.",
    anchor: "넣을까-가리킬까",
  },
  {
    id: "mongodb-document-model-2",
    post: "mongodb-document-model",
    question: "주문 문서의 items에 상품 가격을 상품 문서 참조가 아니라 복사해서 넣는 이유는?",
    choices: [
      "주문 당시 가격이 고정돼야 해서, 나중에 상품 가격이 바뀌어도 주문 금액이 바뀌면 안 되기 때문에",
      "MongoDB는 다른 컬렉션을 참조할 수 없어서",
      "복사하면 저장 공간이 줄어서",
      "$lookup은 숫자 필드를 가져오지 못해서",
    ],
    answer: 0,
    explanation:
      "주문의 가격과 배송지는 주문 시점의 스냅샷이다. 이건 실수로 생긴 중복이 아니라 일부러 남기는 값이다. 반대로 자주 바뀌고 여러 곳에서 보여 주는 값을 복사하면 바꿀 때마다 모든 사본을 고쳐야 한다.",
    anchor: "넣을까-가리킬까",
  },
  {
    id: "mongodb-document-model-3",
    post: "mongodb-document-model",
    question: "find({ user, status: \"paid\", total: { $gte: 50000 } }).sort({ createdAt: -1 })에 가장 알맞은 인덱스는?",
    choices: [
      "{ total: 1, createdAt: -1, user: 1, status: 1 }",
      "{ user: 1, status: 1, total: 1, createdAt: -1 }",
      "{ createdAt: -1, user: 1, status: 1, total: 1 }",
      "{ user: 1, status: 1, createdAt: -1, total: 1 }",
    ],
    answer: 3,
    explanation:
      "ESR 규칙대로 같음 조건, 정렬, 범위 순이다. 범위 필드 total을 createdAt 앞에 두면 구간 안이 금액 순으로 놓여 메모리 정렬(SORT 단계)이 필요해진다. 같음 조건으로 구간을 좁힌 뒤 이미 최신순으로 놓인 항목을 읽으며 범위를 거르는 게 가장 싸다.",
    anchor: "인덱스-필드-순서는-esr",
  },
  {
    id: "mongodb-document-model-4",
    post: "mongodb-document-model",
    question: "MongoDB가 다중 문서 트랜잭션을 지원하는데도 트랜잭션이 필요 없도록 설계하라고 권하는 이유는?",
    choices: [
      "트랜잭션은 샤드 클러스터에서 아예 쓸 수 없어서",
      "변경을 캐시에 붙잡아 두고 충돌 시 재시도가 필요하며 샤드에 걸치면 느려지는데, 문서 하나의 쓰기는 이미 원자적이라서",
      "트랜잭션을 쓰면 write concern이 w:1로 고정돼서",
      "트랜잭션 안에서는 인덱스를 쓸 수 없어서",
    ],
    answer: 1,
    explanation:
      "다중 문서 트랜잭션은 4.0부터 복제본 셋, 4.2부터 샤드 클러스터에서 쓸 수 있지만 비용이 있다. 함께 바뀌는 데이터를 한 문서에 두면 updateOne 한 번으로 원자적으로 바뀐다. 트랜잭션이 자주 필요하면 문서 경계를 다시 볼 신호다.",
    anchor: "문서-하나는-원자적이다",
  },
  {
    id: "mongodb-document-model-5",
    post: "mongodb-document-model",
    question: "w: 1로 쓰고 성공 응답을 받았는데 그 데이터가 사라질 수 있는 상황은?",
    choices: [
      "세컨더리가 그 문서를 읽기 전에 캐시가 비워진 경우",
      "read preference가 primary인 경우",
      "세컨더리로 복제되기 전에 프라이머리가 죽어 다른 멤버가 프라이머리가 된 경우",
      "j: true를 함께 준 경우",
    ],
    answer: 2,
    explanation:
      "w: 1은 프라이머리 한 대만 쓰면 성공으로 답한다. 복제 전에 장애 조치가 일어나면 새 프라이머리에는 그 쓰기가 없고, 옛 프라이머리는 돌아와서 그 쓰기를 롤백한다. w: \"majority\"는 과반이 가진 뒤에 답해서 이걸 막는다.",
    anchor: "쓰기가-끝났다는-건-어디까지인가",
  },
  {
    id: "mongodb-document-model-6",
    post: "mongodb-document-model",
    question: "기본 _id(ObjectId)를 샤드 키로 범위 샤딩하면 생기는 문제는?",
    choices: [
      "ObjectId는 카디널리티가 낮아 데이터를 나눌 수 없다",
      "ObjectId 앞부분이 생성 시각이라 새 문서가 모두 가장 큰 키 범위의 샤드 하나로 몰린다",
      "ObjectId는 해시할 수 없다",
      "_id로 샤딩하면 모든 쿼리가 scatter-gather가 된다",
    ],
    answer: 1,
    explanation:
      "단조 증가하는 키로 범위 샤딩하면 쓰기가 마지막 샤드에만 몰리는 핫스팟이 된다. 해시 샤딩으로 쓰기를 퍼뜨릴 수 있지만 범위 쿼리가 모든 샤드로 흩어진다. 그래서 회원 id와 시간 같은 복합 키를 고려한다.",
    anchor: "샤드-키-하나가-클러스터-모양을-정한다",
  },
  {
    id: "mongodb-document-model-7",
    post: "mongodb-document-model",
    question: "집계 파이프라인에서 $match를 가능한 한 앞에 두는 이유는?",
    choices: [
      "앞에 있어야 인덱스를 쓸 수 있고, 뒤 단계로 넘어가는 문서 수가 줄어서",
      "$match는 첫 단계에만 쓸 수 있어서",
      "$group 뒤에서는 $match 조건이 무시돼서",
      "$match가 앞에 있어야 결과가 정렬돼서",
    ],
    answer: 0,
    explanation:
      "$match와 $sort는 파이프라인 맨 앞에 있을 때 인덱스를 쓸 수 있다. $group이나 $project 뒤로 가면 이미 메모리에 올린 문서들을 대상으로 돈다. 일찍 거를수록 뒤 단계의 메모리 제한(단계당 100MB)에 덜 닿는다.",
    anchor: "모아서-계산하기-집계-파이프라인",
  },
  {
    id: "mongodb-document-model-8",
    post: "mongodb-document-model",
    question: "슬로 쿼리 로그에 planSummary가 IXSCAN인데 nreturned는 20, docsExamined는 5만, hasSortStage가 true로 찍혔다. 무엇을 고쳐야 하나?",
    choices: [
      "인덱스 필드 순서가 ESR에 맞지 않아 조건을 덜 거르고 메모리에서 정렬하고 있으니 순서를 고친다",
      "인덱스가 아예 없으니 새로 만든다",
      "write concern을 majority로 바꾼다",
      "세컨더리에서 읽도록 read preference를 바꾼다",
    ],
    answer: 0,
    explanation:
      "IXSCAN이면 인덱스는 탔지만 읽은 문서가 돌려준 문서보다 훨씬 많고 SORT 단계까지 있다. 인덱스가 조건 일부만 거르고 정렬도 못 받쳐 준다는 뜻이라 같음, 정렬, 범위 순으로 다시 만든다. 인덱스가 없다면 COLLSCAN이 찍힌다.",
    anchor: "느린-쿼리-로그에-collscan이-보이면",
  },
];
