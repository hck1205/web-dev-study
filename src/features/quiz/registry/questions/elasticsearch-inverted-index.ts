import type { QuizQuestion } from "../types";

export const ELASTICSEARCH_INVERTED_INDEX: QuizQuestion[] = [
  {
    id: "elasticsearch-inverted-index-1",
    post: "elasticsearch-inverted-index",
    question: "`WHERE name LIKE '%이어폰%'`가 데이터가 많아지면 느려지는 가장 큰 이유는?",
    choices: [
      "LIKE는 대소문자를 구분해서 비교를 두 번 하기 때문에",
      "앞이 와일드카드라 정렬된 B-tree 인덱스를 쓰지 못하고 모든 행을 읽기 때문에",
      "한글은 바이트 수가 많아서 비교가 느리기 때문에",
      "LIKE 결과는 캐시되지 않기 때문에",
    ],
    answer: 1,
    explanation:
      "B-tree는 값을 앞에서부터 정렬해 둔 구조라 '이어폰%'처럼 앞이 정해진 검색만 바로 찾아간다. 가운데에 들어간 단어는 모든 행을 읽어 봐야 한다. 역색인은 단어마다 문서 번호를 미리 적어 둬서 이 문제를 피한다.",
    anchor: "like가-느린-이유",
  },
  {
    id: "elasticsearch-inverted-index-2",
    post: "elasticsearch-inverted-index",
    question: "standard 분석기로 '무선이어폰을'을 색인하면 '이어폰' 검색에 걸리지 않는 이유는?",
    choices: [
      "standard 분석기는 한글을 색인하지 않는다",
      "검색어는 분석되지 않고 그대로 비교된다",
      "공백 기준으로 잘려 '무선이어폰을'이 통째로 텀 하나가 된다",
      "조사가 붙은 단어는 불용어로 빠진다",
    ],
    answer: 2,
    explanation:
      "standard 토크나이저는 띄어쓰기 단위로 자르기 때문에 붙여 쓴 복합명사와 조사가 한 텀으로 남는다. nori 같은 형태소 분석기는 사전을 보고 '무선', '이어폰', '을'로 나누고, 품사 필터가 조사를 뺀다.",
    anchor: "찾아보기에-올릴-단어-고르기-분석기",
  },
  {
    id: "elasticsearch-inverted-index-3",
    post: "elasticsearch-inverted-index",
    question: "문서를 색인하고 201 응답을 받은 직후 _search로 찾았는데 결과에 없다. 가장 그럴듯한 원인은?",
    choices: [
      "레플리카에 아직 복제되지 않아 색인이 실패했다",
      "translog가 디스크에 기록되지 않았다",
      "병합(merge)이 끝나야 검색에 보인다",
      "아직 refresh가 일어나지 않아 새 세그먼트가 열리지 않았다",
    ],
    answer: 3,
    explanation:
      "색인된 문서는 메모리 버퍼와 translog에 먼저 쓰이고, refresh(기본 1초)가 세그먼트를 만들어야 검색에 보인다. 201 응답은 데이터를 안전하게 받았다는 뜻이지 검색에 보인다는 뜻이 아니다. 병합은 이미 검색 가능한 세그먼트를 합치는 작업이다.",
    anchor: "방금-넣은-상품이-검색에-안-나온다",
  },
  {
    id: "elasticsearch-inverted-index-4",
    post: "elasticsearch-inverted-index",
    question: "브랜드, 가격 범위, 재고 여부 조건을 bool의 must가 아니라 filter에 두는 이유는?",
    choices: [
      "점수 계산을 하지 않고 결과를 캐시해 다시 쓸 수 있어서",
      "filter에 두면 결과 개수가 더 정확해져서",
      "must에는 range 쿼리를 쓸 수 없어서",
      "filter 조건은 BM25 점수를 더 높게 만들어서",
    ],
    answer: 0,
    explanation:
      "맞는지 아닌지만 보면 되는 조건은 점수가 필요 없다. filter 컨텍스트는 점수를 계산하지 않고 결과를 캐시할 수 있어 빠르다. must에 넣어도 결과 개수는 같지만 조건이 점수에 섞이고 캐시를 못 쓴다.",
    anchor: "점수가-필요-없는-조건은-filter로",
  },
  {
    id: "elasticsearch-inverted-index-5",
    post: "elasticsearch-inverted-index",
    question: "brand 필드가 text 타입일 때 term 쿼리로 \"Sony\"를 찾으면 아무것도 안 나오는 이유는?",
    choices: [
      "text 필드에는 term 쿼리를 쓰면 오류가 나서",
      "색인된 텀은 소문자 'sony'인데 term 쿼리는 검색어를 분석하지 않고 'Sony' 그대로 찾아서",
      "text 필드는 doc_values가 없어 검색할 수 없어서",
      "term 쿼리는 keyword 하위 필드만 자동으로 찾아서",
    ],
    answer: 1,
    explanation:
      "text 필드는 분석기를 거쳐 소문자 텀으로 저장되지만 term 쿼리는 검색어를 그대로 쓴다. 정확 일치는 keyword 필드에 term으로, 전문 검색은 text 필드에 match로 한다. doc_values가 없어서 생기는 문제는 검색이 아니라 집계와 정렬이다.",
    anchor: "text와-keyword는-다른-필드다",
  },
  {
    id: "elasticsearch-inverted-index-6",
    post: "elasticsearch-inverted-index",
    question: "인덱스를 만든 뒤 프라이머리 샤드 수를 자유롭게 바꿀 수 없는 이유는?",
    choices: [
      "레플리카 수와 항상 같아야 해서",
      "샤드 수가 매핑에 함께 저장되어서",
      "문서 위치를 hash(_routing) % 프라이머리 샤드 수로 정하기 때문에, 바꾸면 모든 문서의 자리가 달라져서",
      "세그먼트가 불변이라 샤드를 나눌 수 없어서",
    ],
    answer: 2,
    explanation:
      "문서가 갈 샤드는 라우팅 값의 해시를 프라이머리 샤드 수로 나눈 나머지로 정한다. 샤드 수가 바뀌면 같은 문서가 다른 샤드를 가리키게 되므로 보통 새 인덱스로 reindex한다. 레플리카 수는 언제든 바꿀 수 있다.",
    anchor: "샤드와-레플리카",
  },
  {
    id: "elasticsearch-inverted-index-7",
    post: "elasticsearch-inverted-index",
    question: "search_after로 페이지를 넘길 때 정렬 마지막에 상품 id 같은 유일한 필드를 붙이는 이유는?",
    choices: [
      "정렬 값이 같은 문서가 페이지 경계에서 빠지거나 겹치지 않게 하려고",
      "max_result_window 제한을 늘리려고",
      "점수 계산을 끄려고",
      "샤드마다 from+size개를 보내게 하려고",
    ],
    answer: 0,
    explanation:
      "search_after는 앞 페이지 마지막 문서의 정렬 값 뒤부터 가져온다. 같은 가격의 상품이 여러 개면 어디서 끊었는지 모호해져 빠지거나 중복된다. 유일한 tiebreaker가 있으면 경계가 정확히 하나로 정해진다.",
    anchor: "깊은-페이지는-from으로-가지-않는다",
  },
  {
    id: "elasticsearch-inverted-index-8",
    post: "elasticsearch-inverted-index",
    question: "노드 하나짜리 개발 클러스터가 늘 yellow이고, allocation explain에서 same_shard 결정자가 NO라고 한다. 왜 그런가?",
    choices: [
      "디스크가 flood stage 수위를 넘었다",
      "프라이머리 샤드가 사라져 검색 결과가 빠지고 있다",
      "매핑 필드 수가 1000개를 넘었다",
      "레플리카는 프라이머리와 같은 노드에 둘 수 없는데 노드가 하나뿐이라 레플리카가 갈 곳이 없다",
    ],
    answer: 3,
    explanation:
      "same_shard는 같은 샤드의 원본과 복사본을 한 노드에 두지 않는 규칙이다. 노드가 하나면 레플리카를 배정할 수 없어 yellow가 된다. 프라이머리가 없는 red와 달리 검색과 색인은 정상이다.",
    anchor: "클러스터가-yellow나-red로-바뀌면",
  },
];
