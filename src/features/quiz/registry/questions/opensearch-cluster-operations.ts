import type { QuizQuestion } from "../types";

export const OPENSEARCH_CLUSTER_OPERATIONS: QuizQuestion[] = [
  {
    id: "opensearch-cluster-operations-1",
    post: "opensearch-cluster-operations",
    question: "관리자 후보 노드를 셋 두었는데 그중 둘이 동시에 내려갔다. 남은 노드에서 _cluster/health는 어떻게 되나?",
    choices: [
      "남은 노드가 바로 관리자가 되어 green을 돌려준다",
      "과반수를 채우지 못해 관리자를 뽑지 못하고 cluster_manager_not_discovered_exception(503)을 돌려준다",
      "yellow를 돌려주고 새 인덱스도 만들 수 있다",
      "노드가 스스로 종료된다",
    ],
    answer: 1,
    explanation:
      "관리자는 후보의 과반수가 투표해야 뽑힌다. 셋 중 하나만 남으면 과반수가 안 되어 선출이 멈춘다. 이 규칙 덕분에 네트워크가 갈라져도 양쪽에서 관리자가 따로 뽑히지 않는다.",
    anchor: "노드마다-맡은-역할",
  },
  {
    id: "opensearch-cluster-operations-2",
    post: "opensearch-cluster-operations",
    question: "하루 5GB인 로그를 일 단위 인덱스, 프라이머리 3개, 복제본 1개로 30일 보관한다. 무엇이 문제인가?",
    choices: [
      "샤드 하나가 너무 커서 복구가 오래 걸린다",
      "복제본이 없어 노드 하나만 죽어도 데이터를 잃는다",
      "1.7GB짜리 작은 샤드가 180개 생겨 클러스터 상태와 힙을 낭비한다",
      "프라이머리 3개는 노드 수와 맞지 않아 배정되지 않는다",
    ],
    answer: 2,
    explanation:
      "샤드마다 힙과 파일 핸들, 클러스터 상태의 한 줄을 쓴다. 양이 적은 로그를 날짜로 자르면 작은 샤드가 쌓이니, 크기나 문서 수 조건의 롤오버로 샤드 크기를 목표에 맞춘다.",
    anchor: "프라이머리-샤드-수는-크기로-정한다",
  },
  {
    id: "opensearch-cluster-operations-3",
    post: "opensearch-cluster-operations",
    question: "판매자가 정한 속성 이름을 그대로 키로 넣는 attrs 객체 때문에 \"Limit of total fields [1000] has been exceeded\"가 났다. 가장 알맞은 대응은?",
    choices: [
      "index.mapping.total_fields.limit를 100000으로 올린다",
      "refresh_interval을 늘린다",
      "복제본을 0으로 줄인다",
      "attrs를 flat_object로 매핑하거나 dynamic: false로 닫아 키마다 필드가 생기지 않게 한다",
    ],
    answer: 3,
    explanation:
      "한도를 올리면 매핑이 클러스터 상태에 실려 모든 노드에 퍼지고, 필드가 수만 개가 되면 관리자가 느려진다. flat_object는 객체 전체를 필드 하나로 두고 점 경로로 정확히 일치 검색을 할 수 있다. 대신 숫자 범위 검색과 집계에는 제약이 있다.",
    anchor: "매핑은-처음에-닫아-둔다",
  },
  {
    id: "opensearch-cluster-operations-4",
    post: "opensearch-cluster-operations",
    question: "ISM 정책에 min_doc_count: 5000 롤오버를 걸었는데 첫 인덱스가 12,000건이 된 뒤에야 넘어갔다. 왜인가?",
    choices: [
      "ISM은 주기적으로 돌며 조건을 보기 때문에, 조건을 넘긴 뒤 다음 검사까지 들어온 문서도 그 인덱스에 쌓인다",
      "min_doc_count는 복제본 문서까지 세기 때문이다",
      "롤오버는 force_merge가 끝나야 일어나기 때문이다",
      "5000은 샤드당 기준이라 프라이머리 2개면 10,000이 기준이 된다",
    ],
    answer: 0,
    explanation:
      "롤오버 조건은 \"이 값 이상이면 넘긴다\"이고, 검사는 job_interval(기본 5분, 실습은 1분)마다 한다. 그사이 들어온 문서까지 그 인덱스에 들어가므로 정확히 그 크기로 잘리지 않는다.",
    anchor: "크기로-넘기는-롤오버와-ism",
  },
  {
    id: "opensearch-cluster-operations-5",
    post: "opensearch-cluster-operations",
    question: "warm 노드가 하나뿐인 클러스터에서 ISM이 인덱스를 warm으로 옮겼다. 복제본 1개는 어떻게 되나?",
    choices: [
      "warm 노드에 프라이머리와 함께 놓인다",
      "자동으로 삭제되고 클러스터가 red가 된다",
      "hot에 머물면 안 되고(filter) warm에는 이미 프라이머리가 있어(same_shard) 갈 곳 없이 hot에 남는다. 상태는 green이다",
      "ISM이 정책을 실패 처리하고 인덱스를 지운다",
    ],
    answer: 2,
    explanation:
      "같은 샤드의 원본과 사본은 같은 노드에 둘 수 없다. 샤드가 모두 STARTED라 green이지만 hot 디스크를 비우려던 계획은 반만 된다. warm 노드를 늘리거나 옮기기 전에 replica_count로 복제본을 줄인다.",
    anchor: "크기로-넘기는-롤오버와-ism",
  },
  {
    id: "opensearch-cluster-operations-6",
    post: "opensearch-cluster-operations",
    question: "노드 하나가 빠진 뒤 30초 만에 돌아왔더니 복제본 복구의 files_percent가 0%였다. 무엇을 뜻하나?",
    choices: [
      "복구가 실패해 파일을 하나도 받지 못했다",
      "delayed_timeout(기본 1분) 동안 새 복제본을 만들지 않고 기다렸고, 돌아온 노드의 디스크 파일이 프라이머리와 같아 복사할 것이 없었다",
      "복제본이 0개라 복구할 필요가 없었다",
      "flush를 하지 않아 파일 정보가 없다",
    ],
    answer: 1,
    explanation:
      "노드가 빠지면 바로 다른 곳에 복제본을 새로 만들지 않고 잠깐 기다린다. 그 안에 돌아오면 디스크의 사본을 다시 써서 수십 GB를 네트워크로 복사하지 않아도 된다. 계획된 재시작은 이 점을 살려 배정을 primaries로 막고 한 대씩 한다.",
    anchor: "노드-하나가-빠졌을-때",
  },
  {
    id: "opensearch-cluster-operations-7",
    post: "opensearch-cluster-operations",
    question: "trace_id로 size 20000짜리 terms 집계를 했더니 circuit_breaking_exception과 429가 돌아왔다. 먼저 할 일은?",
    choices: [
      "고유값이 많은 필드로 큰 집계를 하는 질의를 고친다(범위 좁히기, composite 집계로 나누기)",
      "indices.breaker.request.limit를 100%로 올린다",
      "노드를 재시작해 힙을 비운다",
      "복제본을 늘려 검색을 분산한다",
    ],
    answer: 0,
    explanation:
      "브레이커는 노드가 OOM으로 죽는 대신 요청 하나를 거절하는 안전장치다. 한도를 올리면 그 장치를 빼는 셈이다. 메모리를 많이 쓰는 질의를 찾아 고치고, 부모 브레이커가 자주 터지면 힙과 샤드 수를 다시 본다.",
    anchor: "힙과-서킷-브레이커",
  },
];
