import type { QuizQuestion } from "../types";

export const MONGODB_AGGREGATION_PIPELINE: QuizQuestion[] = [
  {
    id: "mongodb-aggregation-pipeline-1",
    post: "mongodb-aggregation-pipeline",
    question: "집계 파이프라인에서 인덱스를 쓸 수 있는 단계는 어디인가?",
    choices: [
      "어느 위치든 $match라면 인덱스를 쓴다",
      "$group 바로 뒤의 $sort",
      "맨 앞에서 $cursor로 흡수되는 $match와 $sort",
      "$facet 안의 하위 파이프라인",
    ],
    answer: 2,
    explanation:
      "인덱스는 컬렉션에 붙어 있어서, 컬렉션에서 문서를 꺼내 오는 맨 앞 단계만 쓸 수 있다. 중간 단계는 이미 꺼내 가공한 문서를 다룬다. $facet 하위 파이프라인도 인덱스를 못 쓴다.",
    anchor: "인덱스를-탈-수-있는-자리는-맨-앞뿐이다",
  },
  {
    id: "mongodb-aggregation-pipeline-2",
    post: "mongodb-aggregation-pipeline",
    question:
      "$addFields로 vat를 계산한 뒤 { $match: { vat: { $gt: 10000 }, userId: \"u42\" } }를 두었다. 옵티마이저는 어떻게 하나?",
    choices: [
      "$match 전체를 $addFields 앞으로 옮긴다",
      "userId 조건만 앞으로 옮겨 인덱스를 태우고, 계산한 vat 조건은 $addFields 뒤에 남긴다",
      "순서를 그대로 두고 전체를 훑는다",
      "vat를 인덱스에 자동으로 추가한다",
    ],
    answer: 1,
    explanation:
      "결과가 바뀌지 않는 부분만 옮긴다. userId는 $addFields가 건드리지 않은 필드라 앞으로 갈 수 있지만, vat는 계산이 끝나야 알 수 있다. 실제 explain에서도 $match가 둘로 쪼개졌다.",
    anchor: "인덱스를-탈-수-있는-자리는-맨-앞뿐이다",
  },
  {
    id: "mongodb-aggregation-pipeline-3",
    post: "mongodb-aggregation-pipeline",
    question: "$sort 바로 뒤에 $limit: 5를 두었을 때 정렬한 데이터 크기가 16MB에서 1.6KB로 줄어든 이유는?",
    choices: [
      "$limit이 정렬 안으로 합쳐져 상위 5개만 들고 정렬하는 top-k 정렬이 됐기 때문이다",
      "$limit이 $match 앞으로 옮겨져 문서 5개만 읽었기 때문이다",
      "정렬 결과를 디스크로 내려썼기 때문이다",
      "$limit이 있으면 인덱스가 자동으로 만들어지기 때문이다",
    ],
    answer: 0,
    explanation:
      "explain의 SORT 단계에 limitAmount: 5가 붙는다. 문서는 여전히 다 읽지만 정렬하면서 상위 5개만 메모리에 둔다. $sort와 $limit 사이에 다른 단계를 끼우면 이 합치기가 깨진다.",
    anchor: "인덱스를-탈-수-있는-자리는-맨-앞뿐이다",
  },
  {
    id: "mongodb-aggregation-pipeline-4",
    post: "mongodb-aggregation-pipeline",
    question: "상품이 없는 주문도 0원으로 세야 하는데, $unwind: \"$items\" 뒤의 합계에서 그 주문들이 빠졌다. 왜 그런가?",
    choices: [
      "$group은 빈 배열을 0으로 계산하지 못한다",
      "$unwind는 빈 배열이나 필드가 없는 문서를 기본으로 내보내지 않는다",
      "$match가 빈 배열 문서를 자동으로 거른다",
      "$sum은 null을 만나면 그룹 전체를 버린다",
    ],
    answer: 1,
    explanation:
      "$unwind는 원소마다 문서를 하나씩 만들기 때문에 원소가 없으면 문서도 없다. 남기려면 preserveNullAndEmptyArrays: true를 준다. 합계가 기대보다 적을 때 가장 먼저 볼 곳이다.",
    anchor: "벨트-위에서-일어나는-일",
  },
  {
    id: "mongodb-aggregation-pipeline-5",
    post: "mongodb-aggregation-pipeline",
    question:
      "6.0 이후 서버에서 큰 $sort가 에러 없이 끝났는데 평소보다 훨씬 느리다. explain에서 무엇을 확인하나?",
    choices: [
      "SORT 단계의 usedDisk와 spills. 100MB 한도를 넘어 디스크로 내려썼는지 본다",
      "queryHash가 바뀌었는지",
      "$cursor 안의 rejectedPlans 개수",
      "totalKeysExamined가 0인지",
    ],
    answer: 0,
    explanation:
      "막는 단계는 단계마다 100MB 한도가 있고, 6.0부터는 디스크 사용이 기본으로 허용돼서 넘어도 에러가 나지 않는다. 대신 조용히 느려진다. allowDiskUse: false를 주면 QueryExceededMemoryLimitNoDiskUseAllowed 에러로 바뀐다.",
    anchor: "책상-크기는-100mb",
  },
  {
    id: "mongodb-aggregation-pipeline-6",
    post: "mongodb-aggregation-pipeline",
    question:
      "주문 6,064건에 users를 $lookup했더니 15초가 걸렸고 explain에 collectionScans: 6064가 찍혔다. 가장 먼저 할 일은?",
    choices: [
      "allowDiskUse를 켠다",
      "$lookup을 $facet 안으로 옮긴다",
      "users의 foreignField(uid)에 인덱스를 만든다",
      "$unwind를 $lookup 앞으로 옮긴다",
    ],
    answer: 2,
    explanation:
      "$lookup은 들어오는 문서마다 다른 컬렉션에 쿼리를 던진다. foreignField에 인덱스가 없으면 그때마다 전체를 훑는다. 실험에서 uid 인덱스를 만들자 0.8초로 줄었다.",
    anchor: "lookup은-문서마다-다른-컬렉션을-찾아간다",
  },
  {
    id: "mongodb-aggregation-pipeline-7",
    post: "mongodb-aggregation-pipeline",
    question: "사용자 요청마다 도는 주문 목록 API에 회원 정보를 붙이는 $lookup이 여러 개 있다. 이걸 어떻게 받아들이는 게 맞나?",
    choices: [
      "MongoDB는 조인을 못 하니 관계형 DB로 옮겨야 한다는 뜻이다",
      "늘 함께 읽는 값이면 주문 문서에 복사해 두는 extended reference 패턴을 검토할 신호다. 복사본이 낡는 대가는 값이 얼마나 자주 바뀌는지로 판단한다",
      "$lookup은 인덱스만 있으면 비용이 없으니 그대로 둔다",
      "$facet으로 묶으면 $lookup 비용이 사라진다",
    ],
    answer: 1,
    explanation:
      "가끔 도는 리포트의 $lookup은 괜찮지만, 요청마다 여러 번이면 문서를 관계형처럼 쪼개 놓았을 가능성이 크다. 인덱스가 있어도 문서마다 왕복이라 비용이 남고, 샤드 클러스터에서는 더 비싸다.",
    anchor: "lookup이-자주-보이면-모델을-다시-본다",
  },
];
