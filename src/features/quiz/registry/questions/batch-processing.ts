import type { QuizQuestion } from "../types";

export const BATCH_PROCESSING: QuizQuestion[] = [
  {
    id: "batch-processing-1",
    post: "batch-processing",
    question: "집계 배치가 중간에 죽어 재시작했더니 합계가 원장보다 커졌다. 가장 그럴듯한 원인은?",
    choices: [
      "묶음 크기가 너무 커서",
      "집계를 더한 커밋과 체크포인트 커밋이 따로라 그 사이에서 죽은 묶음을 다시 더해서",
      "키셋 대신 OFFSET으로 읽어서",
      "어드바이저리 락을 잡지 않아서",
    ],
    answer: 1,
    explanation:
      "집계는 커밋됐는데 체크포인트가 이전 위치에 남아 있으면 재시작이 그 묶음을 한 번 더 처리한다. 더하기는 두 번 하면 두 배가 된다. 실제로 1000건, 544만 4500원이 더 들어갔고, 둘을 한 트랜잭션으로 묶자 합계가 정확히 맞았다.",
    anchor: "죽은-자리에서-다시-시작하기",
  },
  {
    id: "batch-processing-2",
    post: "batch-processing",
    question: "배치에서 원본을 OFFSET 대신 WHERE id > last_id ORDER BY id LIMIT n으로 읽는 이유는?",
    choices: [
      "OFFSET은 뒤 묶음으로 갈수록 읽고 버리는 행이 늘어 점점 느려지기 때문에",
      "OFFSET은 트랜잭션 안에서 쓸 수 없기 때문에",
      "LIMIT이 없으면 체크포인트를 쓸 수 없기 때문에",
      "id는 항상 연속이기 때문에",
    ],
    answer: 0,
    explanation:
      "OFFSET은 건너뛸 행을 실제로 읽고 버리므로 마지막 묶음이 첫 묶음보다 훨씬 느리다. 마지막으로 처리한 id보다 큰 것을 읽으면 매번 시작점으로 바로 내려가고, 그 id가 그대로 체크포인트가 된다.",
    anchor: "한-번에-하지-않고-묶음으로-나눈다",
  },
  {
    id: "batch-processing-3",
    post: "batch-processing",
    question: "같은 서버에서 2만 건을 1건씩 넣으면 약 8초, 1000건씩은 0.12초였다. 5000건씩으로 늘려도 0.09초에 그친 이유는?",
    choices: [
      "PostgreSQL이 5000건 이상을 거절해서",
      "unnest가 큰 배열에서 느려서",
      "왕복 비용은 이미 작아졌고 행 자체를 쓰는 시간이 대부분이라서",
      "파라미터 상한 65,535개에 걸려서",
    ],
    answer: 2,
    explanation:
      "묶음의 효과는 왕복과 커밋 횟수를 줄이는 데서 나온다. 20번에서 4번으로 줄여도 행을 쓰는 시간은 그대로 남는다. unnest는 열마다 배열 하나를 넘기니 행 수와 상관없이 파라미터 상한에 걸리지 않는다.",
    anchor: "묶음-크기는-얼마가-좋나",
  },
  {
    id: "batch-processing-4",
    post: "batch-processing",
    question: "가맹점별 하루 매출 집계를 몇 번 다시 돌려도 결과가 같게 만드는 방법으로 알맞은 것은?",
    choices: [
      "ON CONFLICT DO UPDATE SET total = total + EXCLUDED.total로 쓴다",
      "재시작할 때 묶음 크기를 줄인다",
      "작업자를 하나로 줄인다",
      "그날 치를 지우고 원장에서 다시 계산해 넣는 것을 한 트랜잭션으로 한다",
    ],
    answer: 3,
    explanation:
      "더하는 upsert는 다시 돌면 또 더해져 멱등하지 않다. 단위를 통째로 다시 계산해 덮어쓰면 이전에 무엇이 들어 있었든 결과가 같다. 단위가 크면 파티션 단위로 다시 만든다.",
    anchor: "두-번-돌아도-결과가-같게-쓴다",
  },
  {
    id: "batch-processing-5",
    post: "batch-processing",
    question: "작업자 셋이 청크 표에서 일감을 집을 때 FOR UPDATE SKIP LOCKED를 쓰는 이유는?",
    choices: [
      "다른 작업자가 잡은 줄을 기다리지 않고 건너뛰어 같은 범위를 두 번 집지 않게 하려고",
      "잠금 없이 읽어서 더 빠르게 하려고",
      "데드락이 나면 자동으로 재시도하려고",
      "작업자가 죽으면 잠금을 영구히 유지하려고",
    ],
    answer: 0,
    explanation:
      "SKIP LOCKED는 이미 잠긴 줄을 건너뛰고 다음 pending 줄을 잡는다. 그래서 작업자들이 서로 기다리지 않고 겹치지 않는 범위를 가져간다. 실제로 20개 범위가 6·7·7개로 나뉘었고 결과는 정확히 20만 건이었다.",
    anchor: "여러-작업자로-나눠-돌리기",
  },
  {
    id: "batch-processing-6",
    post: "batch-processing",
    question: "이전 실행이 끝나기 전에 같은 배치가 또 시작되지 않게 DB 쪽에서 막는 방법은?",
    choices: [
      "statement_timeout을 짧게 건다",
      "pg_try_advisory_lock으로 잠금을 잡고 못 잡으면 종료한다",
      "묶음 사이에 sleep을 넣는다",
      "복제본에서 읽는다",
    ],
    answer: 1,
    explanation:
      "pg_try_advisory_lock은 기다리지 않고 바로 참·거짓을 돌려준다. 세션에 붙은 잠금이라 첫 실행의 연결이 끊기면 저절로 풀린다. 트랜잭션 모드 풀러를 거치면 세션이 바뀌니 직접 연결하거나 트랜잭션 단위 잠금을 쓴다.",
    anchor: "운영-db-옆에서-조용히-돌리기",
  },
];
