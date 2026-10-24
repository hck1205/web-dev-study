import type { QuizQuestion } from "../types";

export const ELASTICSEARCH_BULK_INDEXING: QuizQuestion[] = [
  {
    id: "elasticsearch-bulk-indexing-1",
    post: "elasticsearch-bulk-indexing",
    question: "조회수를 문서마다 _update로 초당 수백 번 올렸더니 인덱스 부담이 커졌다. 근본적인 이유는?",
    choices: [
      "_update가 문서 전체를 잠가서 검색이 멈춰서",
      "_update는 translog를 쓰지 않아 데이터가 쌓여서",
      "필드 하나를 바꿔도 _source를 읽어 문서 전체를 다시 색인하고 옛 문서에 삭제 표시를 남겨서",
      "_update가 매번 refresh를 강제해서",
    ],
    answer: 2,
    explanation:
      "역색인과 doc_values는 필드 단위로 고칠 수 없어서 부분 업데이트도 새 문서를 통째로 다시 쓴다. 그래서 잦은 갱신은 삭제 표시를 쌓고 refresh·병합 부담을 키운다. _update가 refresh를 강제하거나 문서를 잠그지는 않는다.",
    anchor: "부분-업데이트도-문서-전체를-다시-쓴다",
  },
  {
    id: "elasticsearch-bulk-indexing-2",
    post: "elasticsearch-bulk-indexing",
    question: "관리자 둘이 같은 상품을 읽고 각자 문서 전체를 PUT으로 저장한다. 먼저 저장한 변경을 지키려면?",
    choices: [
      "읽을 때 받은 _seq_no와 _primary_term을 if_seq_no, if_primary_term으로 붙여 저장한다",
      "retry_on_conflict=3을 붙인다",
      "refresh=wait_for를 붙인다",
      "_version 값을 문서 본문에 넣어 둔다",
    ],
    answer: 0,
    explanation:
      "조건부 쓰기는 읽은 그 버전일 때만 저장하고 아니면 409를 돌려줘 덮어쓰기를 막는다. retry_on_conflict는 최신 문서를 다시 읽어 재시도하므로 문서 전체를 덮는 변경에서는 오히려 남의 변경을 지운다. refresh=wait_for는 검색 가시성만 정한다.",
    anchor: "덮어쓰기를-막는-번호표-_seq_no와-_primary_term",
  },
  {
    id: "elasticsearch-bulk-indexing-3",
    post: "elasticsearch-bulk-indexing",
    question: "배치가 _bulk 응답의 HTTP 상태가 200인지만 확인했다. 어떤 문제가 생길 수 있나?",
    choices: [
      "200이면 모두 성공이라 문제가 없다",
      "일부 문서가 429나 400으로 실패해도 본문의 errors와 items에만 나타나서 실패가 조용히 빠진다",
      "200은 아직 처리 중이라는 뜻이라 결과를 다시 물어야 한다",
      "_bulk는 하나라도 실패하면 전체를 되돌리므로 다시 보내야 한다",
    ],
    answer: 1,
    explanation:
      "_bulk는 항목 일부가 실패해도 HTTP 200을 돌려주고, 실패는 errors: true와 항목별 status로만 알린다. 전체를 되돌리는 트랜잭션도 아니다. 그래서 items를 돌며 실패한 항목을 골라 처리해야 문서가 빠지지 않는다.",
    anchor: "여러-건을-한-요청에-_bulk",
  },
  {
    id: "elasticsearch-bulk-indexing-4",
    post: "elasticsearch-bulk-indexing",
    question: "_bulk 응답에 429, 400, 503 항목이 섞여 있다. 다시 보내야 할 것은?",
    choices: [
      "세 가지 모두",
      "400만",
      "배치 전체",
      "429와 503만, 백오프를 두고",
    ],
    answer: 3,
    explanation:
      "429와 503은 노드가 지금 바쁘다는 일시적인 실패라 늦춰서 다시 보내면 들어간다. 400은 매핑과 맞지 않는 값 같은 데이터 문제라 다시 보내도 실패하니 따로 쌓는다. 배치 전체를 다시 보내면 성공한 문서까지 다시 쓴다.",
    anchor: "여러-건을-한-요청에-_bulk",
  },
  {
    id: "elasticsearch-bulk-indexing-5",
    post: "elasticsearch-bulk-indexing",
    question: "대량 적재가 끝나 설정을 되돌릴 때 가장 안전한 순서는?",
    choices: [
      "별칭 교체 → 레플리카 올리기 → refresh 되돌리기",
      "레플리카 올리기 → 별칭 교체 → refresh 되돌리기",
      "refresh 되돌리기와 _refresh → 레플리카 올리기 → green 확인 → 별칭 교체",
      "별칭 교체 → _forcemerge → 레플리카 올리기",
    ],
    answer: 2,
    explanation:
      "먼저 refresh를 되살려 넣은 문서가 검색에 보이게 하고, 레플리카를 올린 뒤 green이 되면 별칭을 돌린다. 별칭을 먼저 돌리면 복사본 없이, 혹은 refresh가 꺼진 채로 운영 트래픽을 받게 된다.",
    anchor: "대량-적재-동안-꺼-두는-것",
  },
  {
    id: "elasticsearch-bulk-indexing-6",
    post: "elasticsearch-bulk-indexing",
    question: "쓰기가 계속 들어오는 인덱스에서 _update_by_query가 version conflict로 멈췄다. 맞는 설명은?",
    choices: [
      "작업 전체가 자동으로 되돌려져 아무 문서도 바뀌지 않았다",
      "시작 시점 스냅숏 이후 다른 쓰기가 문서를 바꿔 충돌했고, 이미 고친 문서는 그대로 남는다",
      "slices를 너무 크게 줘서 생긴 오류다",
      "requests_per_second를 주지 않아서 생긴 오류다",
    ],
    answer: 1,
    explanation:
      "_update_by_query는 시작할 때 문서와 버전의 스냅숏을 잡고 처리하므로 그 사이 바뀐 문서는 충돌한다. 기본값에서는 멈추지만 이미 처리한 문서는 되돌리지 않는다. conflicts=proceed로 건너뛰고 version_conflicts 수를 확인한다.",
    anchor: "조건으로-한꺼번에-고치기-_update_by_query",
  },
  {
    id: "elasticsearch-bulk-indexing-7",
    post: "elasticsearch-bulk-indexing",
    question: "계속 쓰는 상품 인덱스에 _forcemerge?max_num_segments=1을 돌리면 어떤 일이 생길 수 있나?",
    choices: [
      "5GB를 넘는 거대한 세그먼트가 생기고, 기본 병합 정책이 다시 합치지 않아 이후 삭제 표시가 계속 쌓인다",
      "인덱스가 읽기 전용으로 바뀐다",
      "레플리카가 모두 지워진다",
      "아무 변화가 없다. 병합은 저절로만 일어난다",
    ],
    answer: 0,
    explanation:
      "기본 병합 정책은 5GB를 넘는 세그먼트를 병합 대상으로 고르지 않는다. 그래서 쓰는 인덱스를 하나로 합치면 이후 수정·삭제의 표시가 그 세그먼트에 계속 남는다. 강제 병합은 더 이상 쓰지 않는 인덱스에만 쓴다.",
    anchor: "지운-문서는-병합-때-사라진다",
  },
];
