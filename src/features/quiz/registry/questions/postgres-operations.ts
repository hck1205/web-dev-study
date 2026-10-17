import type { QuizQuestion } from "../types";

export const POSTGRES_OPERATIONS: QuizQuestion[] = [
  {
    id: "postgres-operations-1",
    post: "postgres-operations",
    question: "ALTER SYSTEM SET shared_buffers = '256MB' 후 pg_reload_conf()를 했는데 SHOW shared_buffers가 여전히 128MB다. 왜일까?",
    choices: [
      "ALTER SYSTEM은 postgresql.conf를 고치지 않아서 무시된다",
      "shared_buffers의 context가 postmaster라 재시작해야 바뀐다",
      "슈퍼유저가 아니라서 적용되지 않았다",
      "256MB가 최댓값을 넘어서 거부됐다",
    ],
    answer: 1,
    explanation:
      "shared_buffers는 공유 메모리 크기라 서버 시작 때만 정해진다. pg_settings의 pending_restart가 t로 바뀌고 로그에도 재시작이 필요하다고 남는다. 값은 postgresql.auto.conf에 저장돼 재시작 때 적용된다.",
    anchor: "설정은-어디에-쓰고-언제-적용되나",
  },
  {
    id: "postgres-operations-2",
    post: "postgres-operations",
    question: "ALTER SYSTEM SET shared_preload_libraries = 'auto_explain,pg_stat_statements' 뒤 재시작하면 어떻게 되나?",
    choices: [
      "두 확장이 정상적으로 적재된다",
      "첫 번째 확장만 적재된다",
      "재시작 없이 바로 적재된다",
      "이름이 'auto_explain,pg_stat_statements'인 라이브러리 하나로 저장돼 서버가 뜨지 않는다",
    ],
    answer: 3,
    explanation:
      "따옴표로 묶은 문자열은 값 하나로 저장돼 auto.conf에 '\"auto_explain,pg_stat_statements\"'가 쓰인다. 재시작하면 그런 파일이 없다며 FATAL로 멈춘다. 목록은 따옴표 없이 쉼표로 나열한다.",
    anchor: "설정은-어디에-쓰고-언제-적용되나",
  },
  {
    id: "postgres-operations-3",
    post: "postgres-operations",
    question: "work_mem = 32MB에서 병렬 worker 2개를 쓰는 해시 조인 하나의 해시 테이블이 55MB를 썼다. 가능한 이유는?",
    choices: [
      "work_mem 설정이 무시됐다",
      "해시 노드는 work_mem × hash_mem_multiplier까지 쓰고, 병렬 해시는 참여 프로세스 수만큼 한도가 커진다",
      "shared_buffers에서 메모리를 빌려 왔다",
      "통계가 낡아서 메모리를 잘못 계산했다",
    ],
    answer: 1,
    explanation:
      "해시 작업은 work_mem에 hash_mem_multiplier(기본 2)를 곱한 만큼 쓰고, 병렬 해시는 리더와 worker가 테이블을 나눠 쓰며 한도도 32 × 2 × 3 = 192MB까지 커진다. 그래서 최악 예산은 연결 수, worker 수, 노드 수를 모두 곱해서 계산한다.",
    anchor: "work_mem은-곱하기로-계산한다",
  },
  {
    id: "postgres-operations-4",
    post: "postgres-operations",
    question: "PgBouncer를 transaction 모드로 쓸 때 문제가 되는 것은?",
    choices: [
      "트랜잭션 안의 SET LOCAL statement_timeout",
      "ALTER ROLE로 건 기본 설정값",
      "짧은 INSERT 트랜잭션",
      "세션 단위 SET search_path와 LISTEN",
    ],
    answer: 3,
    explanation:
      "transaction 모드에서는 트랜잭션이 끝나면 DB 연결이 다른 클라이언트에게 간다. 그래서 세션에 붙는 상태(SET, LISTEN, 임시 테이블, 세션 advisory lock)가 새거나 사라진다. SET LOCAL과 역할 기본값은 트랜잭션이나 연결 시작 때 적용되니 안전하다.",
    anchor: "max_connections를-올리는-대신-연결-풀",
  },
  {
    id: "postgres-operations-5",
    post: "postgres-operations",
    question: "pg_dump -Fc로 뜬 shop DB를 새 서버에 복원했더니 GRANT 줄에서 role does not exist 에러가 났다. 무엇을 빠뜨렸나?",
    choices: [
      "역할을 담은 pg_dumpall --globals-only 결과를 먼저 넣지 않았다",
      "pg_restore에 -j 옵션을 주지 않았다",
      "pg_basebackup을 함께 뜨지 않았다",
      "custom 형식 대신 plain 형식을 썼어야 했다",
    ],
    answer: 0,
    explanation:
      "pg_dump는 DB 하나만 뜨고 역할과 테이블스페이스는 DB 밖에 있다. 그래서 pg_dumpall --globals-only로 받은 globals.sql을 먼저 psql로 넣어야 권한 줄이 성공한다. -j는 속도와 관련이 있을 뿐이다.",
    anchor: "논리-백업과-복원",
  },
  {
    id: "postgres-operations-6",
    post: "postgres-operations",
    question: "recovery_target_time = '16:40:26'으로 PITR을 했더니 로그에 'recovery stopping before commit of transaction 145845, time 16:40:28'이 남았다. 무슨 뜻인가?",
    choices: [
      "16:40:28의 DELETE 커밋은 반영하지 않고 그 직전에서 멈췄다",
      "복구가 실패해서 16:40:28까지만 읽었다",
      "16:40:28까지 모두 반영한 뒤 멈췄다",
      "트랜잭션 145845를 다시 실행해야 한다",
    ],
    answer: 0,
    explanation:
      "목표 시각 이후의 첫 커밋을 만나면 그 커밋 앞에서 멈춘다. DELETE의 변경 기록은 재생됐지만 커밋 기록 앞에서 멈췄으니 보이지 않는다. 기본 pause 상태에서 데이터를 확인하고 pg_wal_replay_resume()으로 승격한다.",
    anchor: "where-없는-delete-3초-전으로",
  },
  {
    id: "postgres-operations-7",
    post: "postgres-operations",
    question: "archive_command가 계속 실패하면 운영 DB에 어떤 일이 생기나?",
    choices: [
      "실패한 WAL을 지우고 다음 파일로 넘어가 PITR만 끊긴다",
      "PostgreSQL이 즉시 쓰기를 멈춘다",
      "보관하지 못한 WAL을 지우지 않고 쌓아 두어 pg_wal이 커지고 결국 디스크가 찬다",
      "자동으로 archive_mode가 꺼진다",
    ],
    answer: 2,
    explanation:
      "보관에 성공하지 못한 세그먼트는 지우지 않고 계속 재시도한다. 그래서 pg_wal이 차올라 디스크가 가득 차면 DB가 멈춘다. pg_stat_archiver의 failed_count와 pg_wal 크기를 알림에 걸어 둔다.",
    anchor: "물리-백업과-wal-보관",
  },
];
