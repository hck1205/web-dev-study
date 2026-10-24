import type { QuizQuestion } from "../types";

export const REDIS_MODULES_STACK: QuizQuestion[] = [
  {
    id: "redis-modules-stack-1",
    post: "redis-modules-stack",
    question: "두 프로세스가 JSON 문자열을 `GET` → 파싱 → 재고 -1 → `SET`으로 500번씩 고쳤더니 재고가 0이 아니라 300~400이 남았다. 원인은?",
    choices: [
      "Redis가 여러 스레드로 명령을 실행해서 SET이 섞였다",
      "GET과 SET은 각각 원자적이지만 그 사이에 다른 클라이언트가 끼어들어, 나중에 쓴 값이 앞의 갱신을 덮었다",
      "JSON 문자열이 너무 길어 일부가 잘렸다",
      "redis-py가 SET을 비동기로 보내 일부가 유실됐다",
    ],
    answer: 1,
    explanation:
      "Redis는 명령을 하나씩 처리하니 명령 하나는 원자적이다. 하지만 읽기와 쓰기 사이는 묶여 있지 않아서 두 클라이언트가 같은 값을 읽고 각자 쓰면 갱신 하나가 사라진다. 서버 안에서 한 번에 고치는 `HINCRBY`, `JSON.NUMINCRBY`, Lua, 또는 WATCH로 막는다.",
    anchor: "통째로-읽고-통째로-쓰면-재고가-맞지-않는다",
  },
  {
    id: "redis-modules-stack-2",
    post: "redis-modules-stack",
    question: "Redis 7.0 이상에서 실행 중인 서버에 `MODULE LOAD`가 기본으로 막혀 있는 이유는?",
    choices: [
      "모듈은 재시작 없이 올리면 메모리가 새기 때문이다",
      "클러스터에서 슬롯 재배치가 필요하기 때문이다",
      "모듈 명령은 레플리카로 복제되지 않기 때문이다",
      "모듈은 서버 프로세스 안에서 도는 네이티브 코드라, 아무 .so나 올릴 수 있으면 임의 코드 실행이 되기 때문이다",
    ],
    answer: 3,
    explanation:
      "`enable-module-command`가 기본 `no`인 건 보안 때문이다. 접속한 사람이 모듈을 올릴 수 있으면 서버에서 원하는 코드를 돌릴 수 있다. 운영에서는 설정 파일의 `loadmodule`로만 올린다.",
    anchor: "모듈은-서버-안에-명령과-자료형을-더한다",
  },
  {
    id: "redis-modules-stack-3",
    post: "redis-modules-stack",
    question: "프라이머리에만 JSON 모듈을 올리고 레플리카에는 올리지 않았다. 어떤 일이 생기나?",
    choices: [
      "전체 동기화 때 레플리카가 모듈 자료형이 든 RDB를 읽지 못해 복제가 계속 실패한다",
      "레플리카에서 JSON 키가 문자열로 자동 변환된다",
      "레플리카는 JSON 키만 건너뛰고 나머지를 복제한다",
      "아무 문제 없다. 모듈은 프라이머리에만 있으면 된다",
    ],
    answer: 0,
    explanation:
      "모듈 자료형은 RDB와 AOF에 모듈의 형식으로 저장되고, 그 모듈이 없는 서버는 그 데이터를 읽을 수 없다. 그래서 모든 노드의 모듈 이름과 버전을 맞춰야 한다. 버전 업이나 다른 배포판으로 옮길 때도 같은 점을 확인한다.",
    anchor: "모듈을-쓰다-만나는-장애",
  },
  {
    id: "redis-modules-stack-4",
    post: "redis-modules-stack",
    question: "상품을 통째로만 읽고 쓰는 캐시인데 JSON 모듈로 바꾸자는 제안이 나왔다. 가장 알맞은 판단은?",
    choices: [
      "JSON 모듈은 항상 문자열보다 메모리를 덜 쓰니 바꾼다",
      "JSON 모듈은 조회가 문자열보다 10배 빠르니 바꾼다",
      "트리 저장은 대개 문자열보다 메모리를 더 쓰니, 부분 수정·부분 읽기·검색 인덱스가 필요할 때만 바꾼다",
      "JSON 모듈은 Redis 8에서 제거됐으니 쓰지 않는다",
    ],
    answer: 2,
    explanation:
      "JSON 모듈은 문서를 노드마다 포인터와 타입 정보가 붙는 트리로 저장한다. 통째로만 다루면 그 비용만 늘고 얻는 게 없다. 경로로 한 필드를 고치거나 필드로 검색해야 할 때 고른다.",
    anchor: "json-경로로-한-필드만-고친다",
  },
  {
    id: "redis-modules-stack-5",
    post: "redis-modules-stack",
    question: "검색 인덱스에서 상품 코드 `KB-1042`를 `TEXT` 필드로 만들었더니 엉뚱한 상품이 함께 검색된다. 왜일까?",
    choices: [
      "TEXT 필드는 숫자를 인덱싱하지 못한다",
      "TEXT는 토큰으로 쪼개 전문 검색을 하므로 하이픈에서 쪼개진다. 값 그대로 일치만 보려면 TAG로 만든다",
      "인덱스가 아직 백그라운드에서 채워지는 중이라 결과가 섞였다",
      "SORTABLE을 주지 않아서 순서가 섞였다",
    ],
    answer: 1,
    explanation:
      "TEXT는 문장을 단어로 쪼개는 필드라 `KB`와 `1042`로 나뉘어 각각 맞는다. 코드나 카테고리처럼 값 자체로 찾을 것은 TAG가 맞다. 인덱싱 진행 중이면 결과가 빠질 수는 있어도 엉뚱하게 섞이지는 않는다.",
    anchor: "검색-키를-훑지-않고-필드로-찾는다",
  },
  {
    id: "redis-modules-stack-6",
    post: "redis-modules-stack",
    question: "시계열 원본 키에 한 달치 데이터가 쌓인 뒤 `TS.CREATERULE`로 1시간 평균 규칙을 만들었다. 지난 한 달의 1시간 평균은 어떻게 되나?",
    choices: [
      "규칙을 만들면 기존 원본으로 자동으로 채워진다",
      "다음 재시작 때 채워진다",
      "보존 기간이 지나야 채워진다",
      "채워지지 않는다. 규칙은 만든 뒤 들어온 값에만 적용된다",
    ],
    answer: 3,
    explanation:
      "다운샘플링 규칙은 새로 들어오는 값에만 적용되고 과거 데이터를 다시 계산하지 않는다. 그래서 규칙은 데이터를 넣기 전에 만들고, 과거 값이 필요하면 `TS.RANGE`의 집계로 따로 계산해 넣는다.",
    anchor: "시계열-보존-기간과-다운샘플링",
  },
  {
    id: "redis-modules-stack-7",
    post: "redis-modules-stack",
    question: "한국어 상품 리뷰 전문 검색과 몇 달치 집계 분석이 필요해졌다. Redis 검색 모듈 대신 Elasticsearch를 고려할 이유로 가장 알맞은 것은?",
    choices: [
      "Redis 검색은 쓰기 뒤 인덱스 반영이 느리기 때문이다",
      "Redis 검색은 JSON 키를 인덱싱하지 못하기 때문이다",
      "Redis는 모든 데이터와 인덱스를 메모리에 두고 한국어 형태소 분석이 없어, 데이터가 크고 분석이 깊어지면 전용 검색 엔진이 낫다",
      "Redis 검색은 클러스터에서 아예 쓸 수 없기 때문이다",
    ],
    answer: 2,
    explanation:
      "Redis 검색은 쓰기와 동시에 인덱스가 갱신될 만큼 빠르지만, 메모리 비용과 기능 깊이에 한계가 있다. 한국어는 형태소 분석기가 없어 조사가 붙은 말을 잘 찾지 못한다. nori 분석기와 디스크 기반 저장이 있는 Elasticsearch가 이 요구에 맞는다.",
    anchor: "어디까지-redis-안에서-끝낼까",
  },
];
