import type { QuizQuestion } from "../types";

export const MONGODB_INDEXES_EXPLAIN: QuizQuestion[] = [
  {
    id: "mongodb-indexes-explain-1",
    post: "mongodb-indexes-explain",
    question:
      "{ userId: 1 } 인덱스로 u42의 결제 완료 주문을 찾았더니 nReturned 12, totalKeysExamined 21, totalDocsExamined 21이 나왔다. 이 숫자가 말하는 것은?",
    choices: [
      "인덱스를 쓰지 않고 컬렉션 전체를 훑었다",
      "인덱스로 u42의 주문 21건까지는 좁혔지만 status는 문서를 꺼내 봐야 알 수 있어 9건을 읽고 버렸다",
      "커버드 쿼리라서 문서를 읽지 않았다",
      "정렬을 메모리에서 하느라 문서를 두 번 읽었다",
    ],
    answer: 1,
    explanation:
      "keysExamined가 0이 아니니 인덱스는 썼다. 다만 인덱스에 status가 없어서 21건을 꺼낸 뒤 조건으로 걸렀다. { userId: 1, status: 1 }을 만들면 세 숫자가 모두 12로 같아진다.",
    anchor: "explain에서-먼저-보는-세-숫자",
  },
  {
    id: "mongodb-indexes-explain-2",
    post: "mongodb-indexes-explain",
    question:
      "{ userId: 1, status: 1, total: 1 } 인덱스가 있는데 find(조건, { total: 1 })의 explain에 FETCH가 남아 있다. 가장 그럴듯한 이유는?",
    choices: [
      "프로젝션에서 _id를 빼지 않아서 인덱스에 없는 _id를 가져오려고 문서를 읽었다",
      "total이 숫자 필드라서 인덱스에서 값을 꺼낼 수 없다",
      "복합 인덱스는 커버드 쿼리에 쓸 수 없다",
      "복제본 셋에서는 커버드 쿼리가 꺼져 있다",
    ],
    answer: 0,
    explanation:
      "프로젝션에서 _id는 기본으로 포함된다. 이 인덱스에는 _id가 없으니 문서를 꺼내러 간다. { _id: 0, total: 1 }로 바꾸면 PROJECTION_COVERED가 되고 totalDocsExamined가 0이 된다.",
    anchor: "인덱스만-읽고-끝내기-커버드-쿼리",
  },
  {
    id: "mongodb-indexes-explain-3",
    post: "mongodb-indexes-explain",
    question:
      "만료 시각을 지금으로 맞춘 세션 문서를 넣었는데 30초가 지나도 조회된다. TTL 인덱스는 정상이다. 왜 그런가?",
    choices: [
      "TTL 인덱스는 세컨더리에서만 삭제를 수행해서 프라이머리에는 남는다",
      "expireAfterSeconds가 0이면 TTL이 꺼진다",
      "TTL 모니터가 기본 60초마다 한 번 돌기 때문에 만료와 실제 삭제 사이에 한 주기까지 차이가 난다",
      "TTL은 문서를 지우지 않고 숨김 표시만 한다",
    ],
    answer: 2,
    explanation:
      "TTL 삭제는 시각이 되는 순간이 아니라 백그라운드 스레드가 주기적으로 돌 때 일어난다. 실험에서는 32초 뒤에 지워졌고, 부하가 크면 더 늦어진다. 정확한 만료가 필요하면 앱 쿼리에 만료 조건을 직접 건다. 삭제는 프라이머리에서 하고 세컨더리는 oplog로 받는다.",
    anchor: "지우기를-맡기는-ttl-인덱스",
  },
  {
    id: "mongodb-indexes-explain-4",
    post: "mongodb-indexes-explain",
    question:
      "userId에 인덱스가 있다. 다음 중 explain에서 COLLSCAN이 나온 쿼리는?",
    choices: [
      "{ userId: /^u42/ }",
      "{ userId: \"u42\" }에 limit(5)를 붙인 쿼리",
      "{ userId: \"u42\", status: \"paid\" }",
      "{ $or: [{ userId: \"u42\" }, { total: { $gt: 400000 } }] } (total에는 인덱스가 없다)",
    ],
    answer: 3,
    explanation:
      "$or는 절마다 계획을 세우는데, 한 절이라도 인덱스가 없으면 어차피 전체를 읽어야 해서 통째로 COLLSCAN이 된다. 앞이 고정된 정규식은 인덱스 구간 하나만 읽는다. 끝이 고정된 정규식은 IXSCAN으로 나오지만 인덱스 키를 전부 읽는다.",
    anchor: "인덱스가-있는데-collscan이-나오는-이유",
  },
  {
    id: "mongodb-indexes-explain-5",
    post: "mongodb-indexes-explain",
    question:
      "{ createdAt: -1 }에 partialFilterExpression { status: \"paid\" }로 부분 인덱스를 만들었다. find({ createdAt: { $gte: 9월 20일 } })가 이 인덱스를 못 쓰는 이유는?",
    choices: [
      "부분 인덱스는 범위 조건에 쓸 수 없다",
      "쿼리에 status 조건이 없어서 결과에 paid가 아닌 주문도 들어가야 하는데, 인덱스에는 paid만 있기 때문이다",
      "부분 인덱스는 hint로만 쓸 수 있다",
      "createdAt이 내림차순 인덱스라서 $gte와 방향이 맞지 않는다",
    ],
    answer: 1,
    explanation:
      "부분 인덱스는 쿼리 조건이 인덱스의 필터 조건을 포함할 때만 쓰인다. status를 빠뜨린 쿼리는 shipped 주문까지 답해야 하니 인덱스로는 다 찾을 수 없어 COLLSCAN이 된다. 인덱스 방향은 범위 조건 사용과 상관없다.",
    anchor: "자주-찾는-것만-담는-부분-인덱스",
  },
  {
    id: "mongodb-indexes-explain-6",
    post: "mongodb-indexes-explain",
    question:
      "같은 API가 대부분의 회원에게는 빠른데 특정 대형 판매자 계정에서만 느리고, 서버를 재시작하자 한동안 괜찮아졌다. 가장 먼저 의심할 것은?",
    choices: [
      "재시작으로 WiredTiger 캐시가 커졌다",
      "TTL 모니터가 재시작 직후에는 멈춰 있다",
      "처음 들어온 값으로 경주해 이긴 계획이 계획 캐시에 남아 분포가 다른 값에도 쓰이고 있었고, 재시작으로 캐시가 비었다",
      "재시작하면 인덱스가 다시 만들어진다",
    ],
    answer: 2,
    explanation:
      "MongoDB 플래너는 후보 계획을 실제로 경주시켜 고른 뒤 쿼리 모양별로 캐시한다. 값의 분포가 크게 다르면 캐시된 계획이 어떤 값에는 나쁘다. 계획 캐시는 메모리에만 있어서 재시작이나 인덱스 변경 때 비워진다.",
    anchor: "플래너는-후보를-경주시키고-결과를-기억한다",
  },
  {
    id: "mongodb-indexes-explain-7",
    post: "mongodb-indexes-explain",
    question: "안 쓰는 것 같은 인덱스를 지우기 전에 숨김 인덱스(hideIndex)로 먼저 시험하는 이유는?",
    choices: [
      "숨겨도 쓰기 때 계속 갱신되므로, 문제가 생기면 unhideIndex로 즉시 되돌릴 수 있기 때문이다",
      "숨기면 인덱스가 디스크에서 내려가 공간이 바로 생기기 때문이다",
      "숨긴 인덱스는 hint로도 쓸 수 없어서 hint를 쓰는 코드를 찾아낼 수 있기 때문이다",
      "숨긴 인덱스는 세컨더리에서만 쓰이기 때문이다",
    ],
    answer: 0,
    explanation:
      "숨김 인덱스는 플래너만 고르지 않을 뿐 계속 유지된다. 지운 뒤 다시 만들면 큰 컬렉션에서 오래 걸리지만, 숨김 해제는 바로 된다. 공간은 지워야 돌아온다.",
    anchor: "와일드카드-인덱스와-숨김-인덱스",
  },
];
