import type { QuizQuestion } from "../types";

export const ELASTICSEARCH_MAPPING: QuizQuestion[] = [
  {
    id: "elasticsearch-mapping-1",
    post: "elasticsearch-mapping",
    question:
      '동적 매핑 인덱스에 "price": "19000"처럼 따옴표 친 숫자를 넣었더니 9,000원이 19,000원보다 뒤로 정렬된다. 이유는?',
    choices: [
      "date_detection이 숫자를 날짜로 바꿔서",
      "numeric_detection이 기본으로 꺼져 있어 문자열 필드가 되고, keyword는 글자 순으로 정렬해서",
      "price가 long이 됐지만 doc_values가 꺼져서",
      "정렬이 _score 기준으로 바뀌어서",
    ],
    answer: 1,
    explanation:
      "동적 매핑은 따옴표로 온 숫자를 문자열로 보고 text와 keyword를 만든다. keyword 정렬은 글자 순이라 \"19000\"이 \"9000\"보다 앞이다. 운영 인덱스는 숫자 타입을 명시하면 coerce로 문자열 숫자도 숫자로 색인된다.",
    anchor: "아무것도-정하지-않으면-이렇게-만든다",
  },
  {
    id: "elasticsearch-mapping-2",
    post: "elasticsearch-mapping",
    question:
      "options가 기본 object 타입일 때 color=red, size=L 필터에 빨강 M + 파랑 L 상품이 걸린다. 왜 그런가?",
    choices: [
      "term 쿼리가 분석기를 거쳐 값이 바뀌어서",
      "bool filter가 should로 동작해서",
      "object는 배열을 options.color, options.size 값 목록으로 펴서 저장해 원소끼리의 짝이 사라져서",
      "keyword 서브 필드의 ignore_above 때문에 값이 잘려서",
    ],
    answer: 2,
    explanation:
      "Lucene에는 객체가 없어서 object 타입은 필드 이름을 점으로 잇고 값을 필드별로 모은다. 그래서 색 조건과 사이즈 조건이 서로 다른 옵션에 맞아도 문서가 걸린다. 짝이 필요하면 nested 매핑과 nested 쿼리를 쓴다.",
    anchor: "객체-배열은-납작하게-펴진다",
  },
  {
    id: "elasticsearch-mapping-3",
    post: "elasticsearch-mapping",
    question:
      "options를 nested로 바꾼 뒤 기존 쿼리(options.color에 term을 바로 거는 쿼리)를 그대로 두면 어떻게 되나?",
    choices: [
      "결과가 비어 버린다. 값이 부모가 아니라 숨은 문서에 있어서 nested 쿼리로 감싸야 한다",
      "이전과 똑같이 동작한다",
      "매핑 충돌 오류가 난다",
      "짝을 지켜서 정확한 결과가 나온다",
    ],
    answer: 0,
    explanation:
      "nested 객체는 별도의 숨은 Lucene 문서로 색인되므로 부모 문서에 거는 term으로는 찾을 수 없다. 오류 없이 결과만 비어서 필터가 조용히 고장 난다. nested 쿼리에 path를 주고 그 안에서 조건을 건다.",
    anchor: "object-nested-flattened-중에-고르기",
  },
  {
    id: "elasticsearch-mapping-4",
    post: "elasticsearch-mapping",
    question: "옵션이 상품마다 수십 개이고 재고가 자주 바뀐다. nested가 부담스러운 이유로 가장 알맞은 것은?",
    choices: [
      "nested 필드는 keyword 타입을 쓸 수 없어서",
      "nested 문서는 _source에 저장되지 않아서",
      "nested는 정렬을 지원하지 않아서",
      "옵션 하나만 바꿔도 부모와 모든 숨은 문서를 통째로 다시 색인하고, 질의마다 부모로 잇는 조인을 해서",
    ],
    answer: 3,
    explanation:
      "숨은 문서는 부모 옆에 블록으로 붙어 있어야 해서 따로 고칠 수 없고, 색인 문서 수도 옵션 수만큼 늘어난다. 이런 경우 옵션 하나를 문서 하나로 색인하고 collapse로 묶는 모델이 낫다. nested도 keyword와 정렬을 지원한다.",
    anchor: "object-nested-flattened-중에-고르기",
  },
  {
    id: "elasticsearch-mapping-5",
    post: "elasticsearch-mapping",
    question:
      "text 필드에 fielddata: true를 켜고 정렬했더니 'Zebra Apple'이 'Mango'보다 앞에 왔다. 이유는?",
    choices: [
      "fielddata가 대소문자를 무시하고 원문 첫 글자로 정렬해서",
      "정렬 값이 원문이 아니라 분석된 토큰 중 하나(가장 작은 apple)라서",
      "doc_values가 문서 id 순으로 정렬돼 있어서",
      "fielddata가 아직 힙에 올라오지 않아 기본 순서가 나와서",
    ],
    answer: 1,
    explanation:
      "fielddata는 역색인을 뒤집어 문서별 토큰 목록을 힙에 만든다. 다중 값의 오름차순 정렬은 가장 작은 토큰을 쓰므로 apple 기준이 된다. 문자열 전체로 정렬하려면 keyword 서브 필드를 쓰고, fielddata는 힙과 서킷 브레이커 문제도 있다.",
    anchor: "정렬과-집계는-다른-곳을-읽는다",
  },
  {
    id: "elasticsearch-mapping-6",
    post: "elasticsearch-mapping",
    question:
      "사용자 id를 키로 쓰는 객체 때문에 'Limit of total fields [1000] has been exceeded' 오류가 난다. 가장 근본적인 대응은?",
    choices: [
      "index.mapping.total_fields.limit을 10만으로 올린다",
      "샤드 수를 늘린다",
      "키를 값으로 내려 { user, n } 배열로 바꾸거나 flattened로 받는다",
      "refresh_interval을 늘린다",
    ],
    answer: 2,
    explanation:
      "필드 정의는 클러스터 상태에 들어가 모든 노드가 들고 있어서 필드 수가 늘수록 클러스터가 느려진다. 한도는 증상일 뿐이고 원인은 값을 키로 쓰는 데이터 모양이다. 키를 값으로 내리거나 flattened, enabled: false, dynamic 제한으로 막는다.",
    anchor: "필드가-끝없이-늘어날-때",
  },
  {
    id: "elasticsearch-mapping-7",
    post: "elasticsearch-mapping",
    question: "운영 중인 인덱스의 price를 integer에서 long으로 바꿔야 한다. 멈춤 없이 하는 순서는?",
    choices: [
      "PUT _mapping으로 타입을 바꾸고 _update_by_query를 돌린다",
      "새 매핑으로 인덱스를 만들고 _reindex로 옮긴 뒤 _aliases 한 요청에서 별칭을 remove/add로 바꿔 끼운다",
      "인덱스를 닫았다가 매핑을 바꾸고 다시 연다",
      "멀티 필드로 price.long을 추가한다",
    ],
    answer: 1,
    explanation:
      "필드 타입은 이미 쓴 세그먼트 구조 때문에 바꿀 수 없고 PUT _mapping은 거절된다. 새 인덱스로 옮긴 뒤 별칭을 원자적으로 교체하면 앱은 같은 이름을 계속 쓴다. 멀티 필드 추가는 가능하지만 기존 필드를 바꾸지는 못한다.",
    anchor: "바꿀-수-없는-필드를-바꾸는-순서",
  },
];
