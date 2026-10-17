import type { QuizQuestion } from "../types";

export const POSTGRES_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "postgres-architecture-1",
    post: "postgres-architecture",
    question: "앱이 요청마다 PostgreSQL에 새로 연결하면 처리량이 크게 떨어지는 이유로 가장 알맞은 것은?",
    choices: [
      "postmaster가 쿼리를 하나씩 순서대로 처리하기 때문에",
      "연결마다 backend 프로세스를 fork하고 인증과 초기화를 다시 하기 때문에",
      "shared_buffers가 연결마다 새로 할당되기 때문에",
      "연결할 때마다 체크포인트가 일어나기 때문에",
    ],
    answer: 1,
    explanation:
      "PostgreSQL은 연결 하나에 프로세스 하나를 만들고, 그때마다 인증과 카탈로그 캐시 초기화를 거친다. 실험에서는 쿼리가 0.028ms인데 연결이 4ms쯤 걸려 처리량이 200분의 1이 됐다. postmaster는 연결을 받아 넘길 뿐 쿼리를 처리하지 않는다.",
    anchor: "연결-하나에-프로세스-하나",
  },
  {
    id: "postgres-architecture-2",
    post: "postgres-architecture",
    question: "EXPLAIN (ANALYZE, BUFFERS)에 shared read=5151이 찍혔는데 40MB를 60ms에 읽었다. 가장 그럴듯한 해석은?",
    choices: [
      "디스크에서 직접 읽었고 디스크가 매우 빠르다",
      "shared_buffers에서 찾은 페이지 수다",
      "shared_buffers에는 없었지만 OS 페이지 캐시에서 읽어 왔다",
      "통계가 낡아서 숫자가 틀렸다",
    ],
    answer: 2,
    explanation:
      "read는 shared_buffers에 없어서 운영체제에 읽기를 요청했다는 뜻일 뿐이다. PostgreSQL은 일반 read()를 쓰므로 OS 페이지 캐시에 있으면 디스크까지 가지 않는다. 그래서 read가 곧 디스크 I/O는 아니다.",
    anchor: "같은-페이지가-두-번-캐시된다",
  },
  {
    id: "postgres-architecture-3",
    post: "postgres-architecture",
    question: "PostgreSQL에서 shared_buffers를 램의 80%가 아니라 25% 안팎에서 시작하는 이유는?",
    choices: [
      "shared_buffers는 최대 25%까지만 설정할 수 있어서",
      "shared_buffers가 크면 WAL을 쓸 수 없어서",
      "25%를 넘으면 checkpointer가 꺼져서",
      "PostgreSQL은 OS 페이지 캐시를 함께 쓰는 설계라 OS 캐시와 work_mem 몫을 남겨야 해서",
    ],
    answer: 3,
    explanation:
      "PostgreSQL은 데이터 파일을 OS 캐시를 거쳐 읽고 쓰므로, shared_buffers를 너무 키우면 OS 캐시와 work_mem, 연결 프로세스가 쓸 메모리가 줄어든다. InnoDB가 버퍼 풀을 70~80%로 잡는 건 O_DIRECT로 OS 캐시를 건너뛰기 때문이라 사정이 다르다.",
    anchor: "같은-페이지가-두-번-캐시된다",
  },
  {
    id: "postgres-architecture-4",
    post: "postgres-architecture",
    question: "books의 재고만 바꾸는 UPDATE를 한 뒤 pageinspect로 페이지를 보면 어떻게 되어 있나?",
    choices: [
      "원래 행의 stock 값만 제자리에서 바뀌어 있다",
      "원래 행은 사라지고 새 행만 남는다",
      "원래 행은 남아 xmax와 t_ctid가 새 버전을 가리키고, 새 행이 하나 더 생긴다",
      "변경 내용은 WAL에만 있고 페이지는 바뀌지 않는다",
    ],
    answer: 2,
    explanation:
      "PostgreSQL은 행을 덮어쓰지 않고 새 버전을 쓴다. 옛 행의 t_xmax에 UPDATE한 트랜잭션 번호, t_ctid에 새 버전 위치 (0,4)가 적히고 lp4에 새 행이 생겼다. 옛 행의 자리는 나중에 VACUUM이 돌려받는다.",
    anchor: "8kb-페이지-한-장의-구조",
  },
  {
    id: "postgres-architecture-5",
    post: "postgres-architecture",
    question: "COMMIT에 성공 응답이 돌아온 순간, 디스크에 확실히 있는 것은? (synchronous_commit = on)",
    choices: [
      "그 커밋 기록까지의 WAL",
      "그 트랜잭션이 고친 데이터 파일의 페이지",
      "다음 체크포인트 기록",
      "shared_buffers 전체의 사본",
    ],
    answer: 0,
    explanation:
      "커밋할 때는 커밋 기록까지의 WAL만 fsync하고 응답한다. 데이터 파일은 나중에 checkpointer가 몰아서 쓴다. 그 사이 서버가 죽어도 WAL을 재생해 되살린다.",
    anchor: "먼저-로그에-쓰고-나중에-파일에-쓴다",
  },
  {
    id: "postgres-architecture-6",
    post: "postgres-architecture",
    question: "체크포인트 직후 주문 500건을 바꿨을 때 WAL이 2.2MB, 바로 다시 같은 500건을 바꿨을 때 105KB였다. 이유는?",
    choices: [
      "두 번째에는 WAL 압축이 켜졌기 때문에",
      "두 번째 UPDATE는 커밋되지 않았기 때문에",
      "첫 번째 UPDATE가 인덱스를 다시 만들었기 때문에",
      "체크포인트 후 페이지를 처음 고칠 때 full page writes로 페이지 전체를 WAL에 남기기 때문에",
    ],
    answer: 3,
    explanation:
      "full_page_writes가 켜져 있으면 체크포인트 이후 각 페이지의 첫 수정 때 8KB 이미지를 통째로 남겨 찢어진 페이지에 대비한다. 같은 페이지를 다시 고칠 때는 작은 차이만 남는다. 그래서 체크포인트가 잦으면 WAL이 불어난다.",
    anchor: "체크포인트-직후의-첫-수정은-페이지-통째로",
  },
  {
    id: "postgres-architecture-7",
    post: "postgres-architecture",
    question: "synchronous_commit = off를 켰을 때 크래시가 나면 일어날 수 있는 일은?",
    choices: [
      "DB 전체가 깨져 백업에서 복원해야 한다",
      "최근 1초 미만에 커밋한 트랜잭션 일부가 사라지지만 DB는 일관된 상태로 복구된다",
      "커밋하지 않은 트랜잭션까지 반영된다",
      "아무 일도 일어나지 않는다. fsync = off와 같다",
    ],
    answer: 1,
    explanation:
      "비동기 커밋은 WAL fsync를 기다리지 않고 응답할 뿐, WAL과 데이터의 순서 약속은 지킨다. 그래서 최근 커밋 몇 개만 잃는다. DB 자체가 깨질 수 있는 건 fsync = off 쪽이다.",
    anchor: "fsync와-synchronous_commit",
  },
];
