import type { QuizQuestion } from "../types";

export const POSTGRES_JSONB_SEARCH: QuizQuestion[] = [
  {
    id: "postgres-jsonb-search-1",
    post: "postgres-jsonb-search",
    question: "'{\"b\": 1, \"a\": 2, \"a\": 3}'를 json과 jsonb로 저장했을 때 jsonb 쪽 결과로 맞는 것은?",
    choices: [
      "{\"b\": 1, \"a\": 2, \"a\": 3} 그대로",
      "{\"a\": 3, \"b\": 1}",
      "{\"a\": 2, \"b\": 1}",
      "중복 키 오류가 난다",
    ],
    answer: 1,
    explanation:
      "jsonb는 저장할 때 한 번 해석해서 중복 키는 마지막 값만 남기고 키를 정렬하며 공백을 버린다. 원문을 그대로 두는 것은 json이다. 그 대가로 jsonb는 읽을 때 다시 해석하지 않고 @>와 GIN 인덱스를 쓸 수 있다.",
    anchor: "json과-jsonb는-저장-방식이-다르다",
  },
  {
    id: "postgres-jsonb-search-2",
    post: "postgres-jsonb-search",
    question: "jsonb_set(attrs, '{battery,hours}', '100')을 battery 키가 없는 행에 실행하면?",
    choices: [
      "battery 객체를 만들고 hours를 넣는다",
      "오류가 난다",
      "attrs 전체가 NULL이 된다",
      "아무것도 바뀌지 않은 원래 값이 돌아온다",
    ],
    answer: 3,
    explanation:
      "중간 경로가 없으면 jsonb_set은 새로 만들지 않고 원래 값을 그대로 돌려주며 오류도 내지 않는다. 결과가 NULL이 되는 것은 새 값 자리에 SQL NULL을 넘겼을 때다.",
    anchor: "일부만-고치는-jsonb_set과-json-경로",
  },
  {
    id: "postgres-jsonb-search-3",
    post: "postgres-jsonb-search",
    question: "GIN 인덱스를 jsonb_path_ops로 만들었더니 WHERE attrs ? 'switch'가 Seq Scan으로 돌았다. 이유는?",
    choices: [
      "jsonb_path_ops는 경로와 값을 묶은 해시만 저장해서 키 존재 검사를 지원하지 않아서",
      "통계가 없어서 플래너가 인덱스를 무시해서",
      "? 연산자는 어떤 인덱스도 쓰지 못해서",
      "GIN은 텍스트 키를 저장하지 못해서",
    ],
    answer: 0,
    explanation:
      "jsonb_path_ops는 경로와 값을 해시 하나로 넣어 작고 @>에 빠르지만, 키만 있는지 보는 ?, ?|, ?&는 처리하지 못한다. 기본 jsonb_ops는 키와 값을 따로 넣어서 ? 검색에도 인덱스를 썼다(9.4ms).",
    anchor: "jsonb_ops와-jsonb_path_ops",
  },
  {
    id: "postgres-jsonb-search-4",
    post: "postgres-jsonb-search",
    question: "WHERE attrs ->> 'brand' = '키크론'의 예상 행 수가 실제 1,952행인데 500으로 나왔다. 식 인덱스를 만들고 ANALYZE하면 왜 1,820처럼 가까워지나?",
    choices: [
      "식 인덱스가 테이블을 다시 정렬해서",
      "ANALYZE가 jsonb의 모든 키 통계를 모아서",
      "식 인덱스를 만들면 그 식의 통계를 따로 모으기 때문에",
      "GIN 인덱스의 통계를 B-tree가 빌려 써서",
    ],
    answer: 2,
    explanation:
      "jsonb 안의 키에는 기본적으로 통계가 없어서 같다 비교는 기본 추정치 0.5%(10만 행이면 500)가 된다. 식 인덱스를 만들면 ANALYZE가 그 식의 값 분포를 모아 추정이 실제에 가까워진다. 인덱스가 없는 다른 키는 여전히 기본값이다.",
    anchor: "자주-찾는-키는-식-인덱스로",
  },
  {
    id: "postgres-jsonb-search-5",
    post: "postgres-jsonb-search",
    question: "87KB짜리 jsonb가 있는 행에서 jsonb 안의 stock 키를 바꾸자 WAL이 약 96KB 생겼다. 일반 컬럼 stock을 바꿀 때(168바이트)와 차이가 나는 이유는?",
    choices: [
      "jsonb는 WAL을 압축하지 않아서",
      "jsonb는 값 하나라서 키 하나를 바꿔도 TOAST에 있던 문서 전체를 다시 쓰기 때문에",
      "jsonb_set이 행을 두 번 갱신해서",
      "일반 컬럼은 WAL을 쓰지 않아서",
    ],
    answer: 1,
    explanation:
      "jsonb는 부분 갱신이 아니라 새 문서를 통째로 쓴다. 큰 값은 TOAST에 있으니 그것까지 새로 쓰고 WAL에 남긴다. 일반 컬럼만 바꾸면 TOAST 값은 포인터만 복사된다. 그래서 자주 바뀌는 값은 컬럼으로 뺀다.",
    anchor: "jsonb에-넣을-것과-컬럼으로-뺄-것",
  },
  {
    id: "postgres-jsonb-search-6",
    post: "postgres-jsonb-search",
    question: "to_tsvector('simple', '무선 기계식 키보드를 샀는데') @@ to_tsquery('simple', '키보드')가 거짓인 이유는?",
    choices: [
      "simple 설정은 한글을 버려서",
      "'키보드'가 불용어라서",
      "tsquery는 한글을 지원하지 않아서",
      "조사가 붙은 '키보드를'이 하나의 어휘소가 돼서 '키보드'와 다르기 때문에",
    ],
    answer: 3,
    explanation:
      "PostgreSQL에는 한국어 설정이 없어 simple로 공백 기준으로만 자르고, 조사 붙은 단어가 그대로 어휘소가 된다. '키보드:*' 앞부분 일치로 일부 건질 수 있지만 붙여 쓴 복합어는 못 찾는다. pg_trgm이나 형태소 분석 확장, 검색 엔진이 대안이다.",
    anchor: "한국어는-어디서-막히나",
  },
  {
    id: "postgres-jsonb-search-7",
    post: "postgres-jsonb-search",
    question: "gin_trgm_ops 인덱스가 있는데 LIKE '%독서%'는 Seq Scan, LIKE '%독서대%'는 인덱스를 썼다. 이유는?",
    choices: [
      "두 글자 검색어는 앞뒤가 열린 패턴에서 쓸 수 있는 세 글자 조각이 하나도 안 나와서",
      "인덱스가 두 글자 단어를 저장하지 않아서",
      "'독서'가 더 흔해서 비용이 비싸서",
      "LIKE는 세 글자 이상만 허용해서",
    ],
    answer: 0,
    explanation:
      "트라이그램의 앞뒤 공백 조각은 단어 경계를 뜻해서 앞뒤가 열린 패턴에는 쓸 수 없다. '독서'에서는 가운데 조각을 하나도 만들 수 없어 인덱스가 거르지 못하고, '독서대'는 '독서대' 조각 하나로 거를 수 있다. 두 글자 검색이 많으면 pg_bigm 같은 대안을 검토한다.",
    anchor: "세-글자씩-잘라-비교하는-pg_trgm",
  },
];
