import type { QuizQuestion } from "../types";

export const ELASTICSEARCH_QUERY_DSL: QuizQuestion[] = [
  {
    id: "elasticsearch-query-dsl-1",
    post: "elasticsearch-query-dsl",
    question: "standard 분석기를 쓰는 text 필드 name에 \"삼성전자 갤럭시 S24\"가 있다. term 질의로 \"S24\"를 찾으면 0건인 이유는?",
    choices: [
      "term은 숫자가 섞인 텀을 찾지 못한다",
      "term은 검색어를 분석하지 않아 대문자 S24로 찾는데, 색인에는 소문자 s24가 있다",
      "text 필드는 term 질의를 지원하지 않아 오류 대신 0건을 돌려준다",
      "refresh가 아직 일어나지 않았다",
    ],
    answer: 1,
    explanation:
      "standard 분석기는 색인할 때 공백으로 자르고 소문자로 바꾼다. term은 검색어를 그대로 텀 하나로 비교하니 \"S24\"와 \"s24\"가 다르다. text 필드에는 match를 쓰고, 정확히 일치가 필요하면 .keyword 하위 필드에 term을 쓴다.",
    anchor: "검색어를-분석하는-질의-안-하는-질의",
  },
  {
    id: "elasticsearch-query-dsl-2",
    post: "elasticsearch-query-dsl",
    question: "should에 brand Sony, Apple 두 조건만 있던 bool에 filter in_stock=true를 추가했더니 결과가 2건에서 5건으로 늘었다. 왜 그런가?",
    choices: [
      "filter가 should를 OR로 바꾸기 때문이다",
      "filter 문맥에서는 term이 분석되기 때문이다",
      "must나 filter가 생기면 minimum_should_match 기본값이 0이 되어 should가 선택 조건이 되기 때문이다",
      "filter 결과가 캐시에서 잘못 나왔기 때문이다",
    ],
    answer: 2,
    explanation:
      "should만 있는 bool은 하나는 맞아야 하지만, must나 filter가 하나라도 있으면 should는 점수만 더해 주는 조건이 된다. 재고 있는 상품이 모두 나오고 Apple만 위로 올라간다. minimum_should_match: 1을 명시하거나 should를 담은 bool을 filter 안에 넣는다.",
    anchor: "bool의-네-칸",
  },
  {
    id: "elasticsearch-query-dsl-3",
    post: "elasticsearch-query-dsl",
    question: "텀이 3개인 match 질의에서 minimum_should_match를 75%와 -25%로 줄 때 필요한 텀 수는?",
    choices: [
      "75%는 2개, -25%는 3개",
      "둘 다 2개",
      "둘 다 3개",
      "75%는 3개, -25%는 2개",
    ],
    answer: 0,
    explanation:
      "퍼센트는 계산 값을 내림한다. 75%는 3 × 0.75 = 2.25를 내려 2개, -25%는 3 × 0.25 = 0.75를 내려 0개를 빼니 3개다. 절이 4개일 때는 둘 다 3개로 같아져서 같은 말로 오해하기 쉽다.",
    anchor: "minimum_should_match는-개수를-세는-규칙이다",
  },
  {
    id: "elasticsearch-query-dsl-4",
    post: "elasticsearch-query-dsl",
    question: "created_at이 UTC로 2026-10-22T23:30Z인 주문을 한국 사용자가 \"10월 22일 주문\" 검색으로 찾았다. time_zone 없이 gte/lte \"2026-10-22\"로 거는 질의의 문제는?",
    choices: [
      "날짜 필드는 range를 지원하지 않는다",
      "lte가 22일 0시로 내려가 그날 주문이 하나도 안 나온다",
      "날짜 수학 없이 쓰면 캐시가 깨진다",
      "UTC 기준 하루를 찾아서, 한국 시간으로 23일 08:30인 주문이 22일 주문으로 잡힌다",
    ],
    answer: 3,
    explanation:
      "날짜는 UTC로 저장되고 time_zone이 없으면 질의의 날짜도 UTC로 해석된다. 한국 시간 하루를 찾으려면 time_zone: \"+09:00\"을 준다. 실험에서는 time_zone을 주자 이 주문이 22일 결과에서 빠졌다.",
    anchor: "range와-날짜-계산",
  },
  {
    id: "elasticsearch-query-dsl-5",
    post: "elasticsearch-query-dsl",
    question: "wildcard 질의 \"*어폰\"이 데이터가 커질수록 느려지는 이유와 대안으로 알맞은 것은?",
    choices: [
      "결과를 정렬하느라 느리다. sort를 빼면 된다",
      "앞이 와일드카드라 텀 사전 전체를 훑어 맞는 텀을 모두 펼친다. n-gram이나 wildcard 필드 타입을 쓴다",
      "wildcard는 filter 문맥에서 캐시되지 않는다. must로 옮기면 된다",
      "wildcard는 레플리카에서만 돈다. 레플리카를 늘리면 된다",
    ],
    answer: 1,
    explanation:
      "prefix, wildcard, regexp는 검색어를 텀 사전에서 맞는 텀들로 펼친 뒤 OR로 찾는다. 앞에 와일드카드가 오면 사전 범위를 좁힐 수 없어 전체를 훑는다. 접두사는 index_prefixes나 edge n-gram, 가운데 일치는 n-gram이나 wildcard 필드로 색인 시점에 미리 준비한다.",
    anchor: "prefix와-wildcard가-비싼-이유",
  },
  {
    id: "elasticsearch-query-dsl-6",
    post: "elasticsearch-query-dsl",
    question: "function_score로 판매량을 점수에 곱할 때 field_value_factor에 log1p modifier를 주는 이유는?",
    choices: [
      "판매량이 0인 문서를 결과에서 빼기 위해서다",
      "점수 계산을 filter 문맥으로 옮겨 캐시하기 위해서다",
      "판매량을 그대로 곱하면 관련도가 낮은 인기 상품이 모든 검색의 1등이 되기 때문이다",
      "log1p를 쓰면 BM25 계산을 건너뛰기 때문이다",
    ],
    answer: 2,
    explanation:
      "판매량은 몇십에서 몇천까지 차이가 커서 그대로 곱하면 검색어와의 관련도보다 판매량이 순위를 정한다. log1p(log10(1+값))로 눌러 두면 관련도가 주인이고 판매량이 거드는 모양이 된다. 실험에서 판매 2,100인 상품은 원래 점수에 약 3.32가 곱해졌다.",
    anchor: "점수-손보기-boosting과-function_score",
  },
  {
    id: "elasticsearch-query-dsl-7",
    post: "elasticsearch-query-dsl",
    question: "검색 응답의 hits.total이 {value: 10000, relation: \"gte\"}로 나온다. 어떻게 받아들여야 하나?",
    choices: [
      "기본으로 10,000건까지만 정확히 센다는 뜻이고, 정확한 수가 필요할 때만 track_total_hits: true를 준다",
      "결과가 정확히 10,000건이라는 뜻이다",
      "max_result_window를 넘어 결과가 잘렸으니 설정을 올려야 한다",
      "샤드 하나가 응답하지 않았다는 뜻이다",
    ],
    answer: 0,
    explanation:
      "정확한 개수를 세는 것도 비용이라 기본은 10,000건까지만 세고 relation gte로 그 이상임을 알린다. true를 주면 끝까지 세느라 느려지고, 숫자를 보여 주지 않는 화면이면 false가 가장 빠르다. max_result_window는 깊은 페이지(from + size) 한도라 다른 이야기다.",
    anchor: "총-개수는-10000에서-멈춘다",
  },
];
