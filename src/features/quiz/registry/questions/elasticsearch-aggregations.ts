import type { QuizQuestion } from "../types";

export const ELASTICSEARCH_AGGREGATIONS: QuizQuestion[] = [
  {
    id: "elasticsearch-aggregations-1",
    post: "elasticsearch-aggregations",
    question: "샤드 3개 인덱스에서 terms 집계 상위 3을 구했더니 실제 2위 브랜드가 빠졌다. 원인은?",
    choices: [
      "레플리카가 없어서 한 샤드가 응답하지 않아서",
      "keyword 필드의 ignore_above 때문에",
      "각 샤드가 자기 상위 shard_size개만 보내서, 모든 샤드에서 순위 밖인 키는 합칠 때 빠져서",
      "terms 집계가 HyperLogLog로 근사해서",
    ],
    answer: 2,
    explanation:
      "terms는 샤드마다 상위 일부만 보내고 코디네이터가 그것만 합친다. 샤드0에서 4위였던 D의 25건이 오지 않아 전체 2위가 밀려났다. HyperLogLog는 cardinality 집계의 방식이다.",
    anchor: "샤드마다-상위-몇-개만-올려-보낸다",
  },
  {
    id: "elasticsearch-aggregations-2",
    post: "elasticsearch-aggregations",
    question:
      "terms 응답 바깥의 doc_count_error_upper_bound가 78이고 반환된 3위 버킷이 53이다. 이것이 뜻하는 것은?",
    choices: [
      "결과에 없는 키가 최대 78건까지 가질 수 있어 3위 밖에 더 큰 키가 있을 수 있다",
      "모든 버킷의 개수가 정확히 78건씩 틀렸다",
      "78건의 문서가 집계에서 오류로 빠졌다",
      "상위 3개에 들지 않은 문서가 78건이다",
    ],
    answer: 0,
    explanation:
      "바깥 값은 샤드마다 보낸 마지막 값의 합으로, 결과에 나오지 않은 키의 최대 개수다. 이 값이 마지막 순위보다 크면 순위가 틀렸을 수 있다. 상위에 들지 않은 문서 수는 sum_other_doc_count다.",
    anchor: "샤드마다-상위-몇-개만-올려-보낸다",
  },
  {
    id: "elasticsearch-aggregations-3",
    post: "elasticsearch-aggregations",
    question: "cardinality 집계의 precision_threshold를 설명한 것으로 맞는 것은?",
    choices: [
      "값을 올리면 정확한 집합을 샤드 간에 주고받는다",
      "이 수보다 고유 값이 적으면 거의 정확하고 넘으면 근사이며, 메모리는 대략 그 값의 8배 바이트다",
      "기본값 40000이고 무제한으로 올릴 수 있다",
      "임계값을 넘는 고유 값은 결과에서 버린다",
    ],
    answer: 1,
    explanation:
      "HyperLogLog++는 고정 크기 메모리로 고유 수를 추정한다. 기본은 3000, 최대는 40000이고 임계값 아래에서는 거의 정확하다. 실험에서 고유 값 57,897개는 어느 설정이든 0.5% 안쪽 근사였다.",
    anchor: "서로-다른-값이-몇-개인지-cardinality",
  },
  {
    id: "elasticsearch-aggregations-4",
    post: "elasticsearch-aggregations",
    question:
      "한국 서비스의 월별 매출을 date_histogram으로 냈더니 정산 숫자와 몇 건씩 다르다. 먼저 확인할 것은?",
    choices: [
      "fixed_interval을 30d로 바꿨는지",
      "search.max_buckets 값",
      "shard_size 값",
      "time_zone을 주지 않아 UTC 자정 기준으로 끊었는지",
    ],
    answer: 3,
    explanation:
      "time_zone이 없으면 UTC로 나눠서 한국 시간 새벽 판매가 전날·전달 통에 들어간다. 실험에서 2건이 9월에서 10월로 옮겨 갔다. fixed_interval 30d는 달력과 어긋나니 월별에는 calendar_interval month를 쓴다.",
    anchor: "버킷-집계-문서를-통에-나눈다",
  },
  {
    id: "elasticsearch-aggregations-5",
    post: "elasticsearch-aggregations",
    question:
      "nested 필드 items.color에 nested 집계 없이 terms를 걸었다. 결과는?",
    choices: [
      "오류 없이 빈 버킷 배열이 온다",
      "주문 수 기준으로 정확히 센다",
      "상품 줄 수 기준으로 센다",
      "nested_mapping_exception이 난다",
    ],
    answer: 0,
    explanation:
      "값이 숨은 nested 문서에 있어서 부모 문서 기준 집계로는 아무것도 못 찾고 빈 결과가 온다. nested 집계로 들어가면 상품 줄 수를 세고, 주문 수로 되돌리려면 reverse_nested를 쓴다.",
    anchor: "통-안에서-다시-계산하기-하위-집계",
  },
  {
    id: "elasticsearch-aggregations-6",
    post: "elasticsearch-aggregations",
    question: "모든 브랜드 × 월 조합의 매출을 빠짐없이 CSV로 내려야 한다. 알맞은 방법은?",
    choices: [
      "terms의 size를 65536으로 올린다",
      "search.max_buckets를 크게 올리고 한 번에 받는다",
      "composite 집계로 after_key를 넘기며 페이지 단위로 받는다",
      "bucket_sort로 잘라 여러 번 요청한다",
    ],
    answer: 2,
    explanation:
      "composite는 키 조합을 정렬된 순서로 정해진 수만큼 주고, 각 샤드가 after 지점 뒤만 보내서 빠지는 키가 없다. terms는 샤드별 상위 근사이고 max_buckets를 올리면 노드 메모리를 위협한다. bucket_sort는 이미 만든 통을 자를 뿐이다.",
    anchor: "버킷이-너무-많을-때",
  },
  {
    id: "elasticsearch-aggregations-7",
    post: "elasticsearch-aggregations",
    question:
      "transform pivot으로 브랜드 × 일별 구매자 수(cardinality)를 미리 계산해 두었다. 이 인덱스로 월 구매자 수를 만들 때의 문제는?",
    choices: [
      "pivot 결과는 terms 근사라 숫자가 틀려서",
      "일별 고유 수를 더하면 여러 날 산 사람이 중복으로 세어져서",
      "transform 결과 인덱스는 집계할 수 없어서",
      "latest 방식이 아니라서 최근 값만 남아서",
    ],
    answer: 1,
    explanation:
      "고유 수는 나중에 더할 수 있는 값이 아니다. 미리 계산할 때는 합, 개수, 최댓값처럼 상위 단위로 합쳐도 되는 값인지 따진다. pivot은 안에서 composite로 읽어 terms 근사 문제는 없다.",
    anchor: "같은-집계를-매번-하지-않기-transform",
  },
];
