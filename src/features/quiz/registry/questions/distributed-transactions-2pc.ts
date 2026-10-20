import type { QuizQuestion } from "../types";

export const DISTRIBUTED_TRANSACTIONS_2PC: QuizQuestion[] = [
  {
    id: "distributed-transactions-2pc-1",
    post: "distributed-transactions-2pc",
    question: "2PC에서 전체 트랜잭션의 커밋이 확정되는 순간은 언제인가?",
    choices: [
      "모든 참여자가 PREPARE TRANSACTION에 성공한 순간",
      "코디네이터가 커밋 결정을 자기 디스크에 기록한 순간",
      "첫 번째 참여자가 COMMIT PREPARED를 끝낸 순간",
      "마지막 참여자가 COMMIT PREPARED를 끝낸 순간",
    ],
    answer: 1,
    explanation:
      "전원이 예라고 해도 코디네이터가 결정을 적기 전에 죽으면 복구 루틴은 기록이 없으니 롤백한다. 결정 기록이 디스크에 닿은 뒤에는 참여자에게 한 번도 알리지 못했더라도 복구 뒤 커밋된다.",
    anchor: "결정을-먼저-적어-두는-코디네이터",
  },
  {
    id: "distributed-transactions-2pc-2",
    post: "distributed-transactions-2pc",
    question:
      "아무도 안 건드리는 지갑 행에서 잠금 대기가 생기는데 pg_stat_activity에 잠금을 쥔 세션이 없다. 먼저 볼 것은?",
    choices: [
      "pg_stat_replication의 복제 지연",
      "pg_terminate_backend로 대기 중인 세션을 모두 끊는다",
      "pg_prepared_xacts에 오래된 준비 트랜잭션이 있는지",
      "autovacuum 설정",
    ],
    answer: 2,
    explanation:
      "준비된 트랜잭션은 세션에서 떨어져 나와 DB가 따로 들고 있어서 pg_locks에서 pid가 비어 있다. 잠금 주인 세션이 없으니 세션을 끊어도 풀리지 않고, 결정을 보내야 풀린다.",
    anchor: "결정-직전에-코디네이터가-죽으면",
  },
  {
    id: "distributed-transactions-2pc-3",
    post: "distributed-transactions-2pc",
    question: "코디네이터가 재시작했는데 어떤 gid에 대한 결정 기록이 없다. 추정 롤백 규칙에 따르면 어떻게 하나?",
    choices: [
      "롤백한다. 커밋을 결정했다면 기록이 먼저 남았을 것이기 때문이다",
      "커밋한다. 참여자가 모두 준비됐다는 뜻이기 때문이다",
      "사람이 확인할 때까지 그대로 둔다",
      "참여자 중 하나만 커밋하고 결과를 본다",
    ],
    answer: 0,
    explanation:
      "커밋 결정은 반드시 기록을 먼저 남긴 뒤 알리므로, 기록이 없으면 커밋을 결정한 적이 없다. 그래서 롤백해도 안전하고, 롤백은 기록하지 않아도 되니 디스크 쓰기도 줄어든다.",
    anchor: "결정을-먼저-적어-두는-코디네이터",
  },
  {
    id: "distributed-transactions-2pc-4",
    post: "distributed-transactions-2pc",
    question: "PostgreSQL에서 준비된 트랜잭션을 며칠 방치하면 생기는 일로 맞는 것은?",
    choices: [
      "서버를 재시작하면 자동으로 롤백되어 사라진다",
      "VACUUM이 그 xid 이후의 죽은 행을 치우지 못해 테이블이 부푼다",
      "max_prepared_transactions를 넘으면 자동으로 커밋된다",
      "잠금은 PREPARE 순간 모두 풀리므로 다른 요청에는 영향이 없다",
    ],
    answer: 1,
    explanation:
      "VACUUM VERBOSE의 removable cutoff가 준비된 트랜잭션의 xid에 묶여 dead but not yet removable이 쌓인다. 재시작해도 pg_twophase 파일로 살아남고 잠금도 그대로 쥐고 있다.",
    anchor: "결정-직전에-코디네이터가-죽으면",
  },
  {
    id: "distributed-transactions-2pc-5",
    post: "distributed-transactions-2pc",
    question: "실패한 트랜잭션에서 PREPARE TRANSACTION을 보냈을 때 코디네이터가 놓치기 쉬운 점은?",
    choices: [
      "에러 대신 ROLLBACK 명령 태그가 돌아오므로 이를 아니오 표로 읽어야 한다",
      "PostgreSQL이 자동으로 다시 시도해서 성공시킨다",
      "준비 상태로 남아 COMMIT PREPARED를 기다린다",
      "다른 참여자의 트랜잭션까지 함께 롤백된다",
    ],
    answer: 0,
    explanation:
      "이미 실패한 트랜잭션에 PREPARE TRANSACTION을 보내면 PostgreSQL은 ROLLBACK이라고 답하고 트랜잭션을 버린다. 예외만 잡는 코드는 이것을 성공으로 오인할 수 있으니 응답 태그로 표를 판단한다.",
    anchor: "한-곳이-아니라고-답하면",
  },
  {
    id: "distributed-transactions-2pc-6",
    post: "distributed-transactions-2pc",
    question: "3PC가 실무에서 2PC의 블로킹 문제를 해결하지 못하는 이유는?",
    choices: [
      "PostgreSQL이 3PC 명령을 지원하지 않아서",
      "준비 단계가 없어 원자성이 깨져서",
      "장애 감지와 메시지 지연에 상한이 있다는 가정이 네트워크 분할에서 깨져 양쪽이 다른 결론을 낼 수 있어서",
      "코디네이터가 두 대 필요해서",
    ],
    answer: 2,
    explanation:
      "3PC는 pre-commit 단계로 참여자끼리 결론을 낼 수 있게 하지만, 네트워크가 갈라지면 한쪽은 커밋하고 다른 쪽은 롤백할 수 있다. 실제로 블로킹을 줄인 방법은 코디네이터와 참여자를 합의 그룹으로 복제하는 것이다.",
    anchor: "3pc가-블로킹을-풀지-못하는-이유",
  },
  {
    id: "distributed-transactions-2pc-7",
    post: "distributed-transactions-2pc",
    question: "마이크로서비스 사이에서 2PC를 피하는 이유로 가장 거리가 먼 것은?",
    choices: [
      "모든 참여자가 살아 있어야 해서 가용성이 곱으로 떨어진다",
      "가장 느린 참여자만큼 다른 DB의 잠금도 이어진다",
      "외부 결제 API처럼 준비 단계를 지원하지 않는 상대가 많다",
      "2PC는 두 DB가 같은 종류일 때만 동작한다",
    ],
    answer: 3,
    explanation:
      "XA 같은 표준 덕분에 종류가 다른 DB와 메시지 큐도 같은 2PC에 참여할 수 있다. 문제는 종류가 아니라 가용성, 잠금 시간, 준비 단계를 지원하지 않는 상대, 서비스 사이의 강한 결합이다.",
    anchor: "마이크로서비스가-2pc를-피하는-이유",
  },
];
