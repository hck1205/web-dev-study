import type { AppliedQuestion } from "./types";

export const DATA_APPLIED: AppliedQuestion[] = [
  {
    id: "data-01",
    posts: ["db-transaction-isolation", "db-locking-deadlock", "pessimistic-locking", "optimistic-locking"],
    prompt:
      "콘서트 좌석 100석을 여는 순간 결제 요청 수천 건이 몰린다. 재고를 읽고 1 이상이면 빼는 코드인데 지난번엔 재고가 -3까지 내려갔다. 조건부 UPDATE, SELECT FOR UPDATE, 버전 열 중 무엇을 고르고, 그 선택이 틀리는 순간은 언제인가.",
    points: [
      "READ COMMITTED에서 읽고 판단하고 쓰는 세 단계 사이에 다른 트랜잭션이 끼어들어 둘 다 1을 보고 둘 다 뺀다.",
      "UPDATE ... WHERE stock >= 1 한 문장은 확인을 쓰기 안에 넣어 틈을 없애고, 0행이 오면 실패로 처리한다.",
      "FOR UPDATE는 한 행 앞에 줄을 세우므로 핫 행에서는 대기가 길어지고, NOWAIT나 SKIP LOCKED로 기다릴지 포기할지 정한다.",
      "낙관적 잠금은 충돌이 잦으면 재시도가 일을 잡아먹어 오히려 무너지니, 같은 행에 몰리는 좌석 판매에는 맞지 않는다.",
      "두 테이블을 다른 순서로 잠그면 교착 상태가 나므로 잠금 순서를 통일하고 교착은 재시도로 받는다.",
    ],
  },
  {
    id: "data-02",
    posts: ["db-replication-sharding", "mysql-replication-online-ddl", "cqrs", "caching-strategies"],
    prompt:
      "결제를 마친 사용자가 주문 목록을 열면 방금 주문이 없다가 5~10초 뒤에 나타난다. 쓰기는 프라이머리, 읽기는 복제본, 목록은 Redis에 캐시한다. 원인 후보를 어떤 순서로 좁히고 각각 무엇으로 확인하나.",
    points: [
      "읽기 복제본은 WAL(MySQL은 binlog)을 받아 재생하므로 늦을 수 있고, 쓴 사람에게는 쓴 LSN(MySQL은 GTID)까지 기다리거나 프라이머리에서 읽어 준다.",
      "Seconds_Behind_Source는 적용 스레드 기준이라 받는 스레드가 밀리면 0으로 보일 수 있으니 GTID 집합으로 비교한다.",
      "CQRS로 읽기 모델을 따로 두었다면 프로젝터 체크포인트가 어디까지 왔는지 보고, 방금 바꾼 것은 명령 응답에 담아 화면이 먼저 그리게 한다.",
      "cache-aside에서 DB를 고친 뒤 캐시를 지우는 순서가 틀렸거나 TTL에만 맡겼다면 옛 목록이 TTL만큼 남는다.",
    ],
  },
  {
    id: "data-03",
    posts: ["rest-api-design", "api-pagination-sorting", "sql-query-rewrite", "sql-logical-order"],
    prompt:
      "무한 스크롤 목록에서 같은 글이 두 번 보이고 어떤 글은 영영 안 나온다는 문의가 늘었다. 지금은 ORDER BY created_at DESC OFFSET n LIMIT 20이고 전체 개수도 매번 센다. 무엇이 문제이고 어떻게 바꾸나.",
    points: [
      "OFFSET은 새 글이 앞에 끼어들면 경계가 밀려 같은 글이 다시 나오고, 뒤 페이지로 갈수록 건너뛸 행을 다 읽어 느려진다.",
      "created_at이 같은 행은 LIMIT에서 순서가 운이므로 정렬 키 끝에 id 같은 유일한 열을 붙여야 페이지가 안정된다.",
      "(created_at, id) 커서로 행 비교 조건을 쓰면 복합 인덱스를 타고 앞 페이지를 읽지 않으며, 정렬 방향이 섞이면 행 비교를 못 써서 조건을 풀어 써야 한다.",
      "count(*)는 매번 전체를 읽어 비싸니 다음 페이지 유무만 알려 주거나 개수는 따로 어림잡는다.",
    ],
  },
  {
    id: "data-04",
    posts: ["db-index-pitfalls", "sql-filtering-operators", "sql-case-when", "db-index-design"],
    prompt:
      "리뷰에서 \"인덱스를 만들었는데 EXPLAIN에 여전히 Seq Scan이 나온다\"는 쿼리가 넷 올라왔다. WHERE lower(email) = ?, WHERE date(created_at) = ?, WHERE name LIKE '%폰%', WHERE CASE WHEN ... END = true다. 각각 왜 안 타고 무엇으로 고치나.",
    points: [
      "컬럼에 함수를 씌우면 B-tree 정렬과 비교할 수 없으니 lower(email) 식 인덱스를 만들거나 값 쪽을 바꾼다.",
      "date(created_at)은 created_at >= '2026-10-01' AND < '2026-11-01' 범위로 바꾸고, timestamptz에서 BETWEEN이 끝 날 0시 이후를 놓치는 것도 함께 본다.",
      "앞이 열린 LIKE는 B-tree를 못 쓰므로 pg_trgm GIN 인덱스나 전문 검색으로 간다.",
      "WHERE 안의 CASE는 옵티마이저가 조건을 뜯어보지 못해 인덱스를 막으니 OR나 부분 인덱스로 풀어 쓴다.",
      "결과가 너무 많거나 통계가 낡아도 Seq Scan이 정답일 수 있으니 ANALYZE 뒤 예상 행 수를 다시 본다.",
    ],
  },
  {
    id: "data-05",
    posts: ["sql-joins-in-practice", "sql-aggregation-pitfalls", "sql-select-where-null", "olap-star-schema"],
    prompt:
      "강의별 매출 리포트가 실제 결제액의 세 배로 나오고, 후기 없는 강의는 아예 빠지며, 평균 점수는 대시보드와 다르다. 쿼리는 결제와 후기를 LEFT JOIN한 뒤 SUM과 AVG를 쓴다. 어디부터 의심하고 어떤 순서로 고치나.",
    points: [
      "결제 n건과 후기 m건이 강의 하나에 붙으면 행이 n×m으로 곱해지므로 먼저 테이블별로 묶고 나서 붙인다.",
      "LEFT JOIN 뒤 WHERE에 오른쪽 테이블 조건을 쓰면 NULL 행이 지워져 INNER JOIN이 되니 조건을 ON으로 옮긴다.",
      "AVG는 NULL을 건너뛰고 count(*)와 count(컬럼)은 분모가 다르므로 분모부터 확인한다.",
      "NOT IN 목록에 NULL이 하나라도 섞이면 결과가 비니 NOT EXISTS로 바꾼다.",
      "분석 테이블에서 입도가 다른 사실을 한 테이블에 섞으면 합계가 부푸는 것도 같은 원리다.",
    ],
  },
  {
    id: "data-06",
    posts: ["connection-pool", "sql-batch-timeout-pool", "postgres-connections-pg-hba", "postgres-operations"],
    prompt:
      "파드를 10개에서 25개로 늘린 다음 날 'FATAL: sorry, too many clients already'가 터졌다. 파드마다 풀 크기 20, max_connections는 300이다. 어디부터 보고, max_connections를 올리는 것 말고 무엇을 고르나.",
    points: [
      "파드 수 × 풀 크기 + 마이그레이션·관리 접속 여유가 max_connections를 넘으면 안 되므로 25×20=500은 애초에 계산서가 틀렸다.",
      "pg_stat_activity에서 idle in transaction이 오래된 연결을 찾고, idle_in_transaction_session_timeout과 statement_timeout으로 새는 연결을 끊는다.",
      "연결 하나가 프로세스 하나라 max_connections를 올리면 메모리와 컨텍스트 스위치가 늘어 정점을 넘으면 처리량이 떨어진다.",
      "PgBouncer transaction 모드로 앱 밖에서 나눠 쓰되 SET, advisory lock, prepared statement가 깨지는 것을 미리 확인한다.",
    ],
  },
  {
    id: "data-07",
    posts: ["zero-downtime-migrations", "db-migration-tools", "mysql-replication-online-ddl", "pessimistic-locking"],
    prompt:
      "새벽 배포에서 orders에 열 하나를 추가하는 마이그레이션이 돌자 주문 API가 40초 동안 멈췄다. 파드 세 개가 동시에 뜨면서 migrate를 각자 불렀다. 왜 멈췄고 다음 배포에서는 어떻게 하나.",
    points: [
      "ALTER TABLE은 ACCESS EXCLUSIVE 잠금을 잡는데 긴 SELECT 하나가 앞에 있으면 그 뒤로 모든 쿼리가 줄을 서므로 lock_timeout을 짧게 걸고 실패하면 다시 시도한다.",
      "PostgreSQL 11부터 기본값 있는 열 추가는 재작성이 없지만 타입 변경은 테이블을 다시 쓰니 새 열 추가·배치 백필·바꿔치기로 나눈다.",
      "마이그레이션 도구는 기록 표와 잠금으로 한 번만 돌게 막지만, 파드 셋이 동시에 부르면 둘은 잠금을 기다리므로 배포 전 Job 하나에서 돌린다.",
      "MySQL이면 INSTANT·INPLACE·COPY 중 무엇인지 확인하고, 프라이머리에서 끝난 DDL이 레플리카에서 그때부터 시작돼 지연이 생기는 것을 계산에 넣는다.",
    ],
  },
  {
    id: "data-08",
    posts: ["postgres-mvcc-vacuum", "sql-batch-timeout-pool", "postgres-architecture", "db-index-pitfalls"],
    prompt:
      "매일 밤 상품 100만 건의 가격을 UPDATE하는 배치를 돌린 뒤 테이블이 두 배가 되고 조회가 느려졌다. VACUUM을 돌려도 파일 크기는 그대로다. 무슨 일이 일어난 것이고 무엇을 바꾸나.",
    points: [
      "UPDATE는 새 버전을 쓰고 옛 튜플을 죽은 채 남기므로 100만 건이 두 배가 되고, VACUUM은 자리를 비울 뿐 파일을 줄이지 않는다.",
      "오래 열린 트랜잭션이나 복제 슬롯이 옛 버전을 붙잡으면 autovacuum이 돌아도 치우지 못하니 pg_stat_activity의 xact_start부터 본다.",
      "인덱스에 없는 열만 바꾸고 fillfactor로 페이지에 빈자리를 두면 HOT 업데이트가 돼 인덱스를 건드리지 않는다.",
      "인덱스가 많을수록 UPDATE마다 쓰기 증폭이 커지니 안 쓰는 인덱스를 pg_stat_user_indexes로 찾아 지운다.",
      "체크포인트 직후의 첫 수정은 페이지 통째로 WAL에 가므로 배치 중 WAL 폭증도 같은 원인이다.",
    ],
  },
  {
    id: "data-09",
    posts: ["idempotency-key", "acid-transactions", "message-delivery-semantics", "webhooks"],
    prompt:
      "결제 POST가 타임아웃으로 재시도되면서 한 사용자에게 두 번 청구됐다. 코드는 키를 조회해 없으면 결제사를 부르고 응답을 저장한다. 어디가 틈이고, 결제사 웹훅까지 포함해 한 번만 처리되게 하려면 무엇을 바꾸나.",
    points: [
      "확인하고 넣는 순서는 동시에 온 중복 둘 다 통과시키므로 유니크 제약으로 키를 먼저 선점하고 0행이면 기존 응답을 돌려준다.",
      "커밋 응답을 못 받은 클라이언트는 성공했는지 모르니 재시도하는 것이 정상이고, 그래서 서버가 멱등성을 책임진다.",
      "결제사 호출은 DB 트랜잭션이 되돌려 주지 못하므로 처리 중 상태를 먼저 커밋하고 호출한 뒤 결과를 적는다.",
      "결제사 웹훅도 최소 한 번 전달이라 이벤트 ID로 인박스 테이블에 거르고 저장 후 바로 200을 돌려준다.",
    ],
  },
  {
    id: "data-10",
    posts: ["caching-strategies", "cache-invalidation", "redis-basics", "db-performance-map"],
    prompt:
      "가격을 고쳤는데 어떤 사용자는 새 가격, 어떤 사용자는 옛 가격을 본다. 가격은 CDN, 앱 로컬 캐시, Redis에 사본이 있고 DB는 복제본에서 읽는다. 층별로 어떻게 좁히고, 지웠는데 옛 값이 다시 들어오는 경우는 왜 생기나.",
    points: [
      "CDN은 퍼지 뒤 헤더의 age로, 로컬 캐시는 인스턴스별 응답 비교로, Redis는 키 TTL로 어느 층에 옛 값이 남았는지 층별로 좁힌다.",
      "DB를 고치고 캐시를 지우는 사이 다른 요청이 옛 값을 읽어 다시 채우면 삭제가 무효가 되므로 짧은 리스나 버전 키로 막는다.",
      "CDN 퍼지가 복제본 반영보다 빠르면 복제본의 옛 값이 다시 채워지니 프라이머리에서 읽거나 지연 뒤 한 번 더 지운다.",
      "Redis에서 패턴으로 지우려고 KEYS를 쓰면 서버 전체가 멈추니 SCAN이나 태그 집합을 쓴다.",
      "캐시는 인덱스와 풀 다음 순서이고, 지우는 일까지가 설계다.",
    ],
  },
  {
    id: "data-11",
    posts: ["redis-memory-eviction", "redis-persistence-ha", "redis-replication-sentinel", "cookie-session-login"],
    prompt:
      "세션을 Redis에 두는 서비스에서 어느 날 로그인이 전부 실패했고, 다음 주엔 서버 재부팅 뒤 모든 사용자가 로그아웃됐다. 두 사고의 원인은 다르다. 각각 무엇이고 어떤 설정으로 막나.",
    points: [
      "maxmemory에 닿은 Redis는 기본 noeviction이라 세션 쓰기를 OOM 에러로 거절하므로 로그인이 실패했고, 세션에는 TTL을 두고 volatile 계열 정책으로 만료된 것부터 지우게 한다.",
      "RDB는 스냅숏 사이를 잃고 AOF everysec은 1초만 잃으니 세션을 지키려면 AOF를 켜고 복원까지 해 본다.",
      "복제는 비동기라 레플리카 승격 때 마지막 쓰기를 잃을 수 있고 Sentinel 쿼럼과 backlog 크기가 전환 시간을 정한다.",
      "서버가 여러 대이면 세션은 공용 저장소에 있어야 하고 고정 세션은 그 서버가 죽으면 세션이 사라진다.",
    ],
  },
  {
    id: "data-12",
    posts: ["kafka-basics", "stream-processing", "message-queue-basics", "kafka-vs-rabbitmq-replay"],
    prompt:
      "주문 이벤트 토픽의 컨슈머 랙이 계속 늘어 인스턴스를 3개에서 9개로 늘렸지만 랙이 그대로다. 게다가 회원별 합계를 내는 단계에서 같은 회원의 합계가 둘로 갈린다. 왜 그런가, 그리고 어제 배포한 버그 때문에 잘못 계산된 것은 어떻게 다시 처리하나.",
    points: [
      "소비자 그룹에서 파티션 하나는 컨슈머 하나만 읽으므로 파티션 수가 병렬성의 상한이고 파티션 3개면 컨슈머 9개 중 6개는 논다.",
      "상태가 있는 단계는 같은 키가 같은 작업자에게 가야 하니 회원 ID로 재분배하고 상태는 체인지로그로 지킨다.",
      "워커를 늘리면 전체 순서는 깨지고 키별 순서만 파티션 안에서 지켜진다.",
      "Kafka는 읽어도 지우지 않으므로 배포 시각의 오프셋으로 되감아 다시 읽되, 소비자가 멱등해야 하고 보관 기간이 지나면 되감을 곳이 없다.",
    ],
  },
  {
    id: "data-13",
    posts: ["dead-letter-queue", "rabbitmq-basics", "bullmq-job-queue", "message-queue-basics"],
    prompt:
      "메일 발송 워커 큐에서 깨진 주소 하나가 끝없이 돌아오며 뒤 메시지를 막고, 어떤 메일은 두 번 간다. 재시도 상한, DLQ, 가시성 타임아웃을 어떻게 설계하나.",
    points: [
      "실패를 바로 포기할 것과 기다려 볼 것으로 나누고 재시도 상한을 넘으면 원본, 에러, 시도 횟수를 함께 DLQ로 보낸다.",
      "RabbitMQ 쿼럼 큐는 delivery-limit을 넘긴 메시지를 데드 레터 익스체인지로 보내며, 클래식 큐는 nack requeue가 같은 메시지를 바로 되돌린다.",
      "처리 시간이 가시성 타임아웃이나 BullMQ 락 만료보다 길면 살아 있는 워커의 작업을 죽었다고 보고 다시 주므로 두 번 간다.",
      "최소 한 번 전달에서 중복은 정상이니 메일 ID로 멱등하게 보내고, DLQ에 하나라도 있으면 알람을 울린다.",
    ],
  },
  {
    id: "data-14",
    posts: ["transactional-outbox", "saga-pattern", "message-delivery-semantics", "event-sourcing"],
    prompt:
      "주문을 저장한 뒤 Kafka에 발행하는 코드에서 DB 커밋은 됐는데 브로커가 잠깐 죽어 이벤트가 사라졌다. 이어지는 재고·결제 서비스는 사가로 묶여 있다. 발행을 빠뜨리지 않으면서 사가 보상까지 안전하게 만드는 설계는 무엇인가.",
    points: [
      "두 군데에 쓰는 순간 어디서든 끊기므로 이벤트를 같은 트랜잭션의 아웃박스 테이블에 적고 릴레이가 보낸다.",
      "릴레이는 보내고 표시하기 사이에 죽으면 같은 사건을 두 번 보내니 소비자가 이벤트 ID로 인박스에서 거른다.",
      "릴레이를 둘 띄우면 순서가 바뀌므로 주문마다 맨 앞 사건만 보내고, 계속 실패하는 사건은 따로 빼 뒤를 막지 않게 한다.",
      "사가 보상은 오케스트레이터가 보상 도중 죽어도 재시작할 수 있게 멱등해야 하고, 되돌릴 수 없는 피벗 단계는 맨 뒤에 둔다.",
      "사건을 원본으로 저장하면 같은 스트림의 같은 버전을 노린 두 명령은 유니크 제약으로 하나만 통과한다.",
    ],
  },
  {
    id: "data-15",
    posts: ["architecture-patterns-overview", "modular-monolith", "microservices-decomposition", "monolith-architecture"],
    prompt:
      "개발자 12명, 팀 셋인 모놀리스에서 배포 대기가 평균 이틀이고 리포트 기능 하나가 주문 API를 멈춘 적이 있다. CTO가 마이크로서비스로 가자고 한다. 지금 무엇을 먼저 하고, 어떤 숫자가 나와야 쪼개나.",
    points: [
      "배포 단위, 코드 구조, 데이터 흐름은 다른 질문이니 지금 아픈 것이 어느 축인지 먼저 가른다.",
      "리포트가 주문 API를 멈춘 문제는 쪼개지 않고 역할별 프로세스로 나눠 풀 수 있다.",
      "먼저 업무 단위 모듈로 자르고 dependency-cruiser와 모듈별 스키마 권한으로 경계를 CI가 지키게 한다.",
      "팀 수, 배포 대기, 함께 바뀌는 비율, 부하 편차가 신호이며 커밋 기록으로 함께 바뀌는 파일과 외래 키로 붙잡힌 테이블을 세서 자를 곳을 정한다.",
      "경계 없이 먼저 쪼개면 서로 동기 호출하는 분산 모놀리스가 된다.",
    ],
  },
  {
    id: "data-16",
    posts: ["layered-architecture", "hexagonal-architecture", "clean-architecture", "test-pyramid-unit-tests"],
    prompt:
      "결제사를 바꾸려는데 서비스 계층 곳곳이 결제사 SDK의 예외와 응답 타입을 알고 있고, 단위 테스트는 SDK를 목으로 바꿔 전부 통과한다. 어떤 구조로 옮기고, 목이 통과시키는 테스트를 무엇으로 보완하나.",
    points: [
      "레이어드에서 의존이 DB와 외부 SDK를 향하면 업무 규칙이 기술에 끌려가므로 의존을 뒤집어 코어가 포트를 정의하게 한다.",
      "어댑터는 조립하는 곳에서만 고르고 바깥의 실패는 포트의 말로 번역해 코어가 SDK 예외를 모르게 한다.",
      "클린 아키텍처의 의존 규칙은 import 검사기로 CI에서 지키고, 시계 같은 바깥 것도 주입한다.",
      "목은 운영 버그를 덮거나 리팩터링에 깨지니 가짜 어댑터로 업무 규칙을 돌리고 두 구현에 같은 계약 테스트를 붙인다.",
    ],
  },
  {
    id: "data-17",
    posts: ["ddd-bounded-context", "optimistic-locking", "event-sourcing", "cqrs"],
    prompt:
      "같은 주문에 사용자 취소와 운영자 부분 환불이 동시에 들어와 불변식이 깨졌다. 주문 애그리거트를 어떻게 지키고, 이벤트 소싱과 CQRS를 함께 쓴다면 동시성과 읽기 지연은 어디서 처리되나.",
    points: [
      "애그리거트는 한 번에 지켜야 하는 규칙의 크기이고 동시 요청은 버전 열로 UPDATE 0행을 받아 알아챈다.",
      "이벤트 소싱이면 같은 스트림의 같은 버전에 두 사건을 넣으려는 쪽이 유니크 제약에 막혀 다시 읽고 결정한다.",
      "컨텍스트 경계를 넘는 것은 이벤트로 알리고 상대 컨텍스트의 주문 모델은 따로 둔다.",
      "읽기 모델은 프로젝터가 뒤늦게 채우니 방금 취소가 목록에 안 보이는 지연을 UI와 체크포인트로 다룬다.",
      "ETag와 If-Match로 버전을 브라우저까지 들고 가면 덮어쓰기를 사용자에게 알릴 수 있다.",
    ],
  },
  {
    id: "data-18",
    posts: ["cookie-session-login", "token-login", "jwt-key-rotation", "oauth"],
    prompt:
      "API 서버를 3대로 늘리자 로그인이 자꾸 풀렸고, JWT로 바꾼 뒤에는 서명 키를 교체한 날 아침 401이 쏟아졌다. 두 증상의 원인과, 탈취된 토큰을 즉시 무효화해야 한다는 요구에는 무엇으로 답하나.",
    points: [
      "메모리 세션은 서버마다 따로라서 다른 서버로 가면 모르니 공용 저장소에 두거나 고정 세션을 쓴다.",
      "검증자가 JWKS를 캐시하므로 새 키로 바로 서명하면 kid를 못 찾아 401이 나고, 게시·서명 전환·퇴역 순서로 겹쳐 둔다.",
      "서명된 토큰은 서버가 기억하지 않아 회수가 어려우니 액세스 토큰은 짧게, 리프레시 토큰은 저장소에서 폐기한다.",
      "키 교체는 토큰을 회수하지 않으며, 키가 샜을 때는 겹치는 기간 없이 비상 교체하고 토큰을 모두 무효로 본다.",
      "소셜 로그인은 OAuth 인가 코드와 PKCE로 받고 ID 토큰 검증까지 해야 로그인이 된다.",
    ],
  },
  {
    id: "data-19",
    posts: ["sso-saml-oidc", "mfa-totp", "passkeys-webauthn"],
    prompt:
      "사내 SSO에 TOTP 2단계 인증까지 붙였는데 피싱 메일로 계정이 뚫렸고, 퇴사자가 석 달 뒤에도 사내 앱에 들어온 기록이 나왔다. 무엇이 뚫렸고 어떤 순서로 보강하나.",
    points: [
      "숫자 코드는 중간자 사이트가 실시간으로 대신 입력할 수 있어 피싱을 못 막고, 패스키는 origin과 rpId가 서명에 묶여 가짜 사이트에서는 쓸 수 있는 응답이 나오지 않는다.",
      "SAML은 서명이 맞아도 Audience, 만료, InResponseTo를 확인해야 하고 IdP 주도 흐름은 CSRF처럼 위험하다.",
      "SSO 로그아웃은 앱마다 세션이 따로라 어렵고, 퇴사자는 SCIM으로 계정을 지워야 JIT로 만들어진 계정이 남지 않는다.",
      "TOTP 서버는 허용 칸, 코드 재사용 방지, 시도 횟수 제한, 복구 코드를 정해야 한다.",
    ],
  },
  {
    id: "data-20",
    posts: ["nodejs-server-runtime", "express-middleware", "fastapi-basics", "go-concurrency-basics"],
    prompt:
      "Node 로그인 API에 bcrypt 해시를 넣자 상관없는 파일 다운로드 API까지 느려졌다. 같은 서비스를 FastAPI로 옮긴 팀은 async def 안에서 동기 드라이버를 불러 서버가 통째로 섰고, Go로 옮긴 팀은 메모리가 계단처럼 오른다. 세 언어의 원인을 각각 짚어라.",
    points: [
      "Node는 해시와 파일 I/O가 기본 4칸 libuv 스레드 풀을 같이 쓰므로 해시가 자리를 차지하면 파일 읽기가 기다리고, UV_THREADPOOL_SIZE나 worker_threads로 나눈다.",
      "Express 4는 async 핸들러의 거부를 잡지 못해 프로세스가 내려가니 에러 미들웨어와 종료 처리까지 순서대로 둔다.",
      "FastAPI의 async def 안 블로킹은 이벤트 루프를 세우고, def는 40칸 스레드 풀에서 돌아 GIL 때문에 계산은 빨라지지 않는다.",
      "Go는 요청마다 띄운 고루틴이 채널이나 context 취소 없이 기다리면 영영 남으므로 pprof로 멈춘 고루틴을 세고 context로 취소를 전한다.",
    ],
  },
  {
    id: "data-21",
    posts: ["java-jvm-memory-gc", "spring-boot-on-kubernetes", "spring-cloud-vs-kubernetes"],
    prompt:
      "512MiB 한도의 Pod에서 -Xmx480m을 준 스프링 앱이 로그 없이 OOMKilled되고, 결제사가 느려지자 Pod들이 줄줄이 재시작됐으며, 배포 때마다 502가 섞인다. 세 증상을 각각 설명하고 설정을 고쳐라.",
    points: [
      "JVM은 힙 밖에 메타스페이스, 스레드 스택, 코드 캐시를 쓰므로 힙을 한도 바로 아래로 주면 커널이 죽이며, MaxRAMPercentage로 힙 몫을 정하고 NMT로 힙 밖을 읽는다.",
      "liveness에 외부 의존이나 서킷 브레이커 상태를 넣으면 결제사 장애가 Pod 재시작으로 번지니 readiness와 liveness 그룹을 나누고 브레이커는 앱 안에 남긴다.",
      "SIGTERM 뒤 포트가 닫히는 순간과 엔드포인트 목록에서 빠지는 순간이 어긋나 502가 나므로 preStop 대기와 우아한 종료, 유예 시간을 맞춘다.",
      "CPU 한도 1코어면 시작이 5초에서 10초로 늘어 프로브가 실패하고 HPA는 시작 시 CPU 사용을 부하로 오해한다.",
    ],
  },
  {
    id: "data-22",
    posts: ["spring-ioc-di", "spring-boot-auto-configuration", "spring-boot-4-migration", "integration-tests-real-db"],
    prompt:
      "@Transactional을 붙인 메서드에서 예외가 나도 롤백이 안 되고, DataSource 설정을 바꿨는데 적용되지 않으며, Boot 4로 올리자 @MockBean 테스트가 컴파일되지 않는다. 각각 어디를 보나.",
    points: [
      "@Transactional은 프록시가 가로채므로 같은 클래스 안에서 자기 호출하면 프록시를 지나지 않아 사라진다.",
      "내 빈을 두면 자동 구성이 물러나고 설정 출처에는 우선순위가 있으니 --debug 조건 평가 리포트로 누가 이겼는지 읽는다.",
      "Boot 4는 자동 구성 클래스가 모듈로 쪼개지고 @MockBean이 @MockitoBean으로 바뀌어 테스트 쪽이 가장 많이 깨진다.",
      "테스트마다 트랜잭션을 되돌리는 방식은 코드가 자기 커넥션을 쓰거나 안쪽에서 COMMIT하면 못 보니 Testcontainers 위에서 실제 커밋으로 확인한다.",
    ],
  },
  {
    id: "data-23",
    posts: ["spring-boot-observability", "db-type-time-series", "api-gateway-use-cases"],
    prompt:
      "주문 ID를 지표 태그로 넣은 배포 뒤 Prometheus가 느려지고 메모리가 튀었다. 게이트웨이에도 요청마다 사용자 ID 라벨을 붙여 두었다. 무엇이 잘못됐고 지표·로그·trace를 어디에 어떻게 나눠 담나.",
    points: [
      "태그 값마다 시계열이 하나씩 생기므로 주문 ID 태그는 /actuator/prometheus를 241줄에서 1040줄로 늘리고 Prometheus의 메모리를 먹는다.",
      "시계열 저장소는 레이블 하나가 시계열을 수백만 개로 만드는 카디널리티 폭발에 약하니 고유 ID는 라벨이 아니라 로그나 trace에 둔다.",
      "Observation 하나가 지표·trace·로그를 함께 만들고, 지표의 튄 점에서 exemplar의 traceId로 trace로 건너간다.",
      "히스토그램은 칸 수만큼 시계열을 늘리니 필요한 엔드포인트에만 켜고, 게이트웨이는 모든 요청의 한 줄 로그와 거친 지표를 맡는다.",
    ],
  },
  {
    id: "data-24",
    posts: ["graphql-basics", "n-plus-one-queries", "sql-query-tuning", "api-styles-overview"],
    prompt:
      "앱 화면 하나가 REST로 요청 다섯 번을 보내서 GraphQL로 바꿨더니 운영 DB에서 쿼리가 101개로 늘었고 CDN 캐시도 사라졌다. 어떻게 찾고 어디까지 고치며, 애초에 GraphQL이 맞는 선택이었나.",
    points: [
      "pg_stat_statements에서 calls가 유독 많은 짧은 쿼리를 찾으면 ORM 지연 로딩이나 리졸버가 행마다 보낸 N+1이 드러난다.",
      "필드마다 리졸버가 도니 DataLoader로 한 틱의 ID를 모아 IN 한 번으로 묻고, ORM이면 JOIN과 IN 중 결과 폭을 보고 고른다.",
      "GraphQL은 POST라 HTTP 캐시가 붙지 않으니 persisted query를 GET으로 보내고 깊이·비용 제한을 건다.",
      "공개 API나 캐시가 중요한 읽기는 REST가 낫고, 화면마다 모양이 다른 앱 BFF에 GraphQL이 맞다.",
    ],
  },
  {
    id: "data-25",
    posts: ["grpc", "http-streaming-sse", "api-gateway-use-cases", "spring-cloud-vs-kubernetes"],
    prompt:
      "쿠버네티스에서 재고 서비스를 gRPC로 바꾸자 Pod 세 개 중 하나에만 트래픽이 몰리고, 같은 클러스터의 LLM 답변 스트리밍은 nginx 뒤에서 한꺼번에 도착한다. 두 문제의 공통 원인과 각각의 해결책은 무엇인가.",
    points: [
      "ClusterIP Service는 L4라 연결이 생길 때 한 번만 백엔드를 고르는데 gRPC는 HTTP/2 연결 하나를 오래 쓰므로 모든 호출이 한 Pod로 간다.",
      "L7 프록시(Envoy, 서비스 메시)로 호출 단위 분산을 하거나 headless Service와 클라이언트 round_robin, 서버 max_connection_age로 연결을 새로 맺게 한다.",
      "nginx는 느린 클라이언트를 대신 받아 주려고 응답을 버퍼링하므로 스트리밍 경로만 proxy_buffering을 끈다.",
      "스트리밍은 200을 보낸 뒤 실패할 수 있어 끝 메시지를 정하고, gRPC는 기한을 호출 사슬로 전파해 모두 함께 멈춘다.",
      "게이트웨이가 TLS 종료와 라우팅을 맡아도 서킷 브레이커와 타임아웃은 호출자 앱에 남는다.",
    ],
  },
  {
    id: "data-26",
    posts: ["rate-limiting-in-practice", "redis-high-throughput", "redis-cluster", "api-gateway-use-cases"],
    prompt:
      "분당 100회 제한을 인스턴스마다 메모리로 세다가 Redis로 옮겼더니 요청마다 왕복 세 번이 생겨 p99가 올랐고, Redis Cluster로 가자 MULTI가 CROSSSLOT 에러를 낸다. 어떻게 설계하고 Redis가 죽으면 어떻게 하나.",
    points: [
      "인스턴스마다 세면 한도가 대수만큼 곱해지므로 공용 저장소가 필요하다.",
      "INCR과 EXPIRE를 파이프라인이나 Lua로 묶어 1ms 왕복 세 번을 한 번으로 줄이고 연결은 재사용한다.",
      "Cluster는 키를 16384개 슬롯으로 나누므로 한 트랜잭션의 키는 해시 태그로 같은 슬롯에 두고 MOVED를 따라간다.",
      "일반 API는 fail open으로 Redis 장애가 서비스 장애로 번지지 않게 하고, 문자 발송처럼 돈이 나가는 곳은 fail closed로 503을 준다.",
      "429에는 Retry-After와 RateLimit 헤더를 주고 바깥 문의 IP 제한은 게이트웨이, 사용자별 제한은 앱이 맡는다.",
    ],
  },
  {
    id: "data-27",
    posts: ["cron-jobs", "batch-processing", "distributed-lock"],
    prompt:
      "매일 9시 쿠폰 메일 배치가 레플리카 셋에서 각각 돌아 세 통씩 갔고, 분산 락을 붙인 뒤에도 어느 날 두 통이 갔다. 또 50만 건 중간에 죽으면 처음부터 다시 돈다. 회차당 한 번, 이어서 돌기, 중복 없는 쓰기를 어떻게 만드나.",
    points: [
      "동시에 둘이 돌지 않게는 잠금이, 회차당 한 번은 작업 이름과 예정 회차를 기본 키로 한 실행 기록이 맞다.",
      "만료되는 락은 프로세스 멈춤이나 장애 조치로 둘이 될 수 있어 펜싱 토큰으로 저장소가 늦은 쓰기를 거절하게 한다.",
      "결과와 진행 위치를 같은 트랜잭션에 적어야 죽은 자리에서 이어 가고, 묶음 크기는 재서 정한다.",
      "쓰기를 멱등하게 만들어야 두 번 돌아도 숫자가 맞고, SKIP LOCKED로 여러 작업자가 나눠 돈다.",
      "서머타임이면 같은 시각이 두 번 오니 회차를 날짜 단위로 둔다.",
    ],
  },
  {
    id: "data-28",
    posts: ["webhooks", "enterprise-system-integration", "api-versioning", "sit-uat-testing"],
    prompt:
      "배송사 콜백이 가끔 두 번 오고 순서가 뒤바뀌며, 배송사가 응답 필드를 바꾼 날 우리 쪽이 깨졌다. 다음 달에는 다른 벤더로 바꿔야 한다. 받는 쪽, 어댑터, 검증 환경을 어떻게 설계하나.",
    points: [
      "HMAC 서명과 타임스탬프로 위조와 재전송을 막고, 저장한 뒤 바로 응답해야 처리 중 타임아웃으로 세 번 오지 않는다.",
      "순서는 보장되지 않으니 들어오는 상태는 버전이나 시각을 보고 더 새 것만 덮어쓴다.",
      "벤더의 말은 경계 어댑터에서 우리 말로 바꾸고 타임아웃은 실패가 아니라 모름으로 다뤄 매일 밤 대사로 맞춘다.",
      "추가했을 뿐인 변경도 엄격한 파서를 깨뜨리므로 소비자 계약 테스트로 우리가 쓰는 필드만 지킨다.",
      "벤더 샌드박스 계약 확인과 SIT는 개발자의 가짜 통합 테스트와 범위가 다르다.",
    ],
  },
  {
    id: "data-29",
    posts: ["api-versioning", "rest-api-design", "graphql-basics", "http-streaming-sse"],
    prompt:
      "공개 API에서 응답에 필드를 하나 추가했을 뿐인데 고객사 앱이 깨졌고, 헤더로 버전을 고르게 바꾸자 CDN이 옛 버전 응답을 새 클라이언트에 돌려줬다. v1을 끝내고 싶다. 무엇을 어떤 순서로 하나.",
    points: [
      "엄격한 역직렬화는 모르는 필드에 실패하니 추가도 깨는 변경이 될 수 있고, 스키마 비교로 배포 전에 잡는다.",
      "헤더 버전은 캐시 키에 안 들어가므로 Vary: Api-Version을 붙이거나 URL 버전을 쓴다.",
      "옛 버전은 Deprecation과 Sunset 헤더, brownout으로 끝내고 날짜 버전 변환 계층으로 한 서버가 여러 버전을 낸다.",
      "GraphQL은 필드 deprecated로 버전 없이 진화하고, 스트리밍 응답은 조각 형식 자체가 계약이라 끝 메시지도 버전에 넣는다.",
    ],
  },
  {
    id: "data-30",
    posts: ["db-types-overview", "db-type-key-value", "db-type-wide-column", "db-consistency-cap"],
    prompt:
      "상품 조회 이벤트가 초당 5만 건으로 PostgreSQL 한 대를 넘겼다. 질문은 '이 사용자가 최근 본 상품 50개'와 '이 상품을 오늘 몇 명이 봤나' 둘이다. 어떤 저장소를 고르고 일관성은 어디까지 양보하나.",
    points: [
      "무엇으로 찾는지가 먼저이므로 질문 두 개를 적고 각각 빠르게 답하는 저장소를 고른다.",
      "Cassandra는 사용자 ID 파티션 키와 시각 클러스터링 키로 최근 50개를 한 파티션에서 읽고 쓰기는 덧붙이기라 싸다.",
      "DynamoDB나 Redis 같은 키-값은 상품별 카운터에 맞지만 인기 상품 하나가 핫 파티션이 된다.",
      "조회 이벤트는 잠깐 틀려도 되니 QUORUM보다 낮은 일관성과 최종 일관성을 고르고, 원본 주문은 관계형에 남긴다.",
    ],
  },
  {
    id: "data-31",
    posts: ["mongodb-document-model", "acid-vs-base", "db-modeling-normalization", "db-type-relational"],
    prompt:
      "주문 서비스를 MongoDB로 옮기며 주문, 주문 항목, 회원 주소를 문서 하나에 다 넣었다. 회원이 주소를 바꾸자 과거 주문 수만 건을 고쳐야 했고, 재고 차감과 주문 저장이 따로 실패한다. 무엇을 내장하고 무엇을 참조하며 트랜잭션은 어떻게 하나.",
    points: [
      "함수 종속을 따라가면 주소는 회원에 종속되니 참조하고, 주문 당시 가격처럼 그때의 사실은 내장이 중복이 아니다.",
      "문서 하나는 원자적이지만 다중 문서 트랜잭션은 비용이 크고 샤드를 넘으면 더 크다.",
      "write concern이 1이면 OK를 받아도 다른 노드에는 없을 수 있어 majority를 고른다.",
      "미리 몰랐던 질문에 SQL 한 문장으로 답하는 것은 관계형의 값이므로 원본은 관계형에 두고 읽기 모양을 문서로 둘 수도 있다.",
    ],
  },
  {
    id: "data-32",
    posts: ["elasticsearch-inverted-index", "postgres-jsonb-search", "cdc-change-data-capture", "opensearch-cluster-operations"],
    prompt:
      "상품 검색이 LIKE '%키워드%'로 3초 걸린다. 한글 오타 검색과 동의어도 요구받았다. 검색 엔진으로 가야 하나, 간다면 DB와 어떻게 맞추고 방금 넣은 상품이 안 나온다는 문의는 왜 생기나.",
    points: [
      "먼저 pg_trgm GIN과 tsvector로 PostgreSQL 안에서 풀어 보고, 한국어 형태소와 동의어에서 막히면 검색 엔진으로 간다.",
      "updated_at 폴링은 늦게 커밋된 변경과 삭제를 놓치므로 WAL 기반 CDC로 옮기고 받는 쪽은 같은 변경을 두 번 받을 각오를 한다.",
      "역색인은 기본 1초 refresh 뒤에야 검색되니 방금 넣은 상품은 잠깐 안 보이는 것이 정상이다.",
      "원본은 DB에 두고 검색은 엔진에 두며, 샤드 수는 크기로 정하고 매핑은 처음에 닫아 둔다.",
    ],
  },
  {
    id: "data-33",
    posts: ["sql-views-materialized", "postgres-reporting-sql", "db-type-columnar-olap", "olap-star-schema"],
    prompt:
      "매출 대시보드의 머티리얼라이즈드 뷰를 10분마다 REFRESH하는데 그때마다 대시보드가 멈추고, 운영 DB CPU가 리포트 쿼리에 먹힌다. 지금 무엇을 바꾸고 언제 분석 DB로 넘어가나.",
    points: [
      "일반 REFRESH는 ACCESS EXCLUSIVE 잠금이라 SELECT도 기다리니 유니크 인덱스를 두고 CONCURRENTLY로 바꾸되 두 배쯤 비싸다.",
      "generate_series로 빈 날을 채우고 FILTER로 조건별 집계를 하면 읽는 양이 줄고, 요약 테이블은 바뀐 구간만 다시 계산한다.",
      "주문 500만 건의 매출 질문은 행 저장에서 안 쓰는 컬럼까지 읽으므로 컬럼 저장과 벡터화 실행이 열 배 빠르다.",
      "분석 DB로 갈 때는 사실과 차원을 나눈 스타 스키마로 쌓고 입도를 정하며, 회원 이사 같은 변화는 SCD 2형으로 과거를 지킨다.",
    ],
  },
  {
    id: "data-34",
    posts: ["db-type-time-series", "db-partitioning", "db-index-design", "postgres-operations"],
    prompt:
      "접속 로그 테이블이 8억 건이고 '지난 90일 전'을 DELETE하는 배치가 한 시간씩 걸리며 그동안 디스크가 더 늘어난다. 최근 1시간 조회만 빠르면 된다. 어떻게 다시 설계하나.",
    points: [
      "DELETE는 죽은 튜플을 남겨 오히려 부풀고, 달이나 날 단위 범위 파티션을 DETACH와 DROP으로 통째로 버리면 즉시 끝난다.",
      "파티션 키가 WHERE에 들어가야 가지치기가 되고 default 파티션에 쌓이면 다시 느려진다.",
      "시간 순서로 쌓이는 데이터는 B-tree 대신 BRIN이 작고, 오래된 데이터는 다운샘플링으로 요약한다.",
      "시간 단위 파티션 생성을 자동화하지 않으면 다음 달 INSERT가 실패하므로 운영 점검 목록에 넣는다.",
    ],
  },
  {
    id: "data-35",
    posts: ["db-sharding", "db-type-newsql", "db-performance-map", "db-keys-denormalization"],
    prompt:
      "주문 쓰기가 프라이머리 한 대의 디스크를 넘어섰다. 샤딩을 하자는 쪽과 분산 SQL로 가자는 쪽이 맞선다. 그 전에 꺼내 볼 카드는 무엇이고, 샤딩을 한다면 키와 ID는 어떻게 정하나.",
    points: [
      "인덱스, 풀, 캐시, 복제, 파티셔닝 순서를 건너뛰고 샤딩으로 가면 그 아래 문제가 그대로 따라온다.",
      "샤드 키는 지금 데이터로 분포를 미리 재서 고르고, 일관된 해싱과 가상 노드로 늘릴 때 조금만 옮긴다.",
      "샤드를 넘는 조인과 트랜잭션은 비싸니 읽기 모양을 따로 만들고, 전역 ID는 UUIDv7이나 Snowflake로 정렬이 남게 한다.",
      "분산 SQL은 샤딩을 DB 안으로 옮기지만 Raft 과반 왕복과 재시도, 핫스팟을 치르고 호환 범위를 확인해야 한다.",
      "UUIDv4 기본 키는 인덱스를 흩뜨려 v7보다 커지므로 샤딩 전에 키 설계부터 본다.",
    ],
  },
  {
    id: "data-36",
    posts: ["postgres-architecture", "postgres-operations", "acid-transactions", "redis-persistence-ha"],
    prompt:
      "오후 3시 12분에 WHERE 없는 DELETE가 운영 orders를 지웠다. 매일 새벽 pg_dump만 있다. 되돌릴 수 있나, 다음에는 무엇을 갖춰 두나, 그리고 synchronous_commit=off로 빠르게 쓰던 Redis 같은 쓰기는 무엇을 잃나.",
    points: [
      "pg_dump로는 새벽 이후가 사라지니 물리 백업과 WAL 보관으로 3시 11분 59초까지 PITR을 해야 한다.",
      "복원해 본 적 없는 백업은 백업이 아니므로 주기적으로 다른 서버에 복원해 본다.",
      "커밋은 WAL이 디스크에 닿았다는 뜻이고 synchronous_commit=off는 응답 뒤 크래시에서 마지막 몇백 ms의 커밋을 잃는다.",
      "Redis도 RDB는 스냅숏 사이를, AOF everysec은 1초를 잃으니 무엇을 잃어도 되는지부터 정한다.",
      "데이터베이스 밖에서 한 일은 되돌려지지 않으니 외부 호출은 트랜잭션 밖에 둔다.",
    ],
  },
  {
    id: "data-37",
    posts: ["postgres-roles-security", "postgres-connections-pg-hba", "postgres-getting-started", "sql-basics"],
    prompt:
      "앱 계정 하나가 슈퍼유저로 운영 DB에 붙고 있고, 신규 서버에서는 no pg_hba.conf entry와 relation does not exist가 번갈아 난다. 역할과 접속을 어떻게 나누고 두 에러는 어디서 끊긴 것인가.",
    points: [
      "주인, 마이그레이션, 앱, 분석 역할로 나누고 앱 역할에는 DML만 GRANT하며 새 테이블은 기본 권한으로 따라가게 한다.",
      "pg_hba.conf는 위에서부터 첫 줄만 보므로 줄 순서가 곧 정책이고, 에러 문구가 TCP·hba·비밀번호 중 어느 문에서 끊겼는지 알려 준다.",
      "relation does not exist는 다른 데이터베이스나 search_path 밖 스키마를 보고 있는 경우가 흔하다.",
      "비밀번호는 SCRAM으로 저장하고 TLS로 들어오는 길을 좁히며, 테이블 정의는 \\d와 SQLSTATE로 다시 꺼내 본다.",
    ],
  },
  {
    id: "data-38",
    posts: ["postgres-functions-triggers", "cdc-change-data-capture", "transactional-outbox"],
    prompt:
      "한 서비스가 updated_at을 빠뜨리고 쓰는 바람에 검색 인덱스 동기화가 그 행들을 놓쳤다. 트리거로 updated_at을 채우자는 안, 트리거로 변경 로그를 쓰자는 안, WAL 논리 복제 안이 나왔다. 무엇을 고르고 각각의 값은 무엇인가.",
    points: [
      "BEFORE 트리거로 updated_at을 채우면 어떤 서비스도 빠뜨리지 못하지만 행 20만 개 배치에서는 트리거가 행마다 도는 값을 치른다.",
      "트리거 변경 로그는 같은 트랜잭션에 남아 빠짐이 없고 아웃박스와 같은 원리이며 NOTIFY로 릴레이를 깨운다.",
      "WAL 논리 복제는 앱과 트리거 비용 없이 삭제까지 잡지만 DDL에 멈추고 REPLICA IDENTITY에 따라 이전 값이 없으며 슬롯이 끊기면 복구가 필요하다.",
      "받는 쪽은 어느 방식이든 같은 변경을 다시 받을 수 있으니 멱등하게 적용한다.",
    ],
  },
  {
    id: "data-39",
    posts: ["postgres-data-types", "db-keys-denormalization", "global-rollout-localization"],
    prompt:
      "미국에서 돌던 서비스를 한국에 열었더니 1,000원 상품이 999.9999로 저장되고, 밤 11시 주문이 다음 날 매출로 잡히며, 기본 키 UUID 인덱스가 테이블보다 크다. 타입과 키를 어떻게 바꾸나.",
    points: [
      "돈은 float가 아니라 numeric이나 최소 단위 정수로 다루고 통화 자릿수는 시장 설정으로 뺀다.",
      "timestamptz로 저장하고 날짜를 자르는 시간대를 시장마다 명시해야 같은 순간이 서울에서 다음 날이 되는 문제를 다룬다.",
      "UUIDv4는 무작위라 인덱스가 흩어지고 커지니 UUIDv7이나 identity로 순서를 준다.",
      "주문 당시 가격은 중복이 아니라 그때의 사실이므로 주문 항목에 남긴다.",
      "이름, 주소, 한글 정렬과 검색은 미국이라는 가정을 찾아 설정과 collation으로 옮긴다.",
    ],
  },
  {
    id: "data-40",
    posts: ["sql-window-functions-pg", "sql-cte-recursive", "sql-interview-problems", "sql-logical-order"],
    prompt:
      "카테고리별 상위 2개 강의를 ROW_NUMBER로 뽑는 리포트가 실행할 때마다 다른 강의를 보여 주고 276ms 걸린다. 선수 강의 트리를 재귀 CTE로 따라가는 화면은 어느 날 끝나지 않았다. 각각 원인과 고치는 법은.",
    points: [
      "동점에서 ROW_NUMBER는 계획마다 아무 행이나 고르니 정렬 키 끝에 유일한 열을 붙인다.",
      "PostgreSQL 15의 Run Condition은 rn <= 2 조건을 WindowAgg 안으로 밀어 일찍 멈추고, 창마다 정렬이 붙으니 창을 합친다.",
      "LIMIT 1 OFFSET 1 같은 풀이는 동점에서 틀리므로 DENSE_RANK나 DISTINCT로 묻는 것부터 정한다.",
      "선수 관계에 고리가 생기면 재귀가 끝나지 않으니 경로 배열이나 CYCLE 절로 끊고 자식을 찾는 인덱스를 둔다.",
      "윈도 함수는 HAVING 뒤에 계산되므로 WHERE에서 순위를 거를 수 없고 바깥 쿼리나 CTE로 감싼다.",
    ],
  },
  {
    id: "data-41",
    posts: ["sql-subqueries-exists-lateral", "sql-query-rewrite", "sql-query-tuning", "postgres-advanced-sql"],
    prompt:
      "회원별 최근 주문을 뽑는 상관 서브쿼리가 운영에서 17초 걸리고, 같은 리포트의 NOT IN은 개발 DB에서는 빠른데 운영에서 느리다. 또 '있으면 갱신 없으면 삽입' 코드가 가끔 유니크 에러를 낸다. 실행 계획에서 무엇을 보고 어떻게 고치나.",
    points: [
      "EXPLAIN (ANALYZE, BUFFERS)는 안쪽부터 읽고 SubPlan이 행마다 도는지, 예상 행 수가 실제와 얼마나 어긋나 조인 방법이 틀어졌는지 본다.",
      "행마다 도는 스칼라 서브쿼리는 LEFT JOIN LATERAL이나 DISTINCT ON으로 바꾸면 94ms로 떨어진다.",
      "NOT IN은 work_mem에 따라 해시 계획이 되거나 못 되므로 환경마다 다르고 NOT EXISTS로 바꾼다.",
      "조회 후 삽입 사이의 틈은 유니크 인덱스와 INSERT ... ON CONFLICT 한 문장으로 없애고 RETURNING으로 왕복을 줄인다.",
    ],
  },
  {
    id: "data-42",
    posts: ["integration-tests-real-db", "test-pyramid-unit-tests", "sit-uat-testing", "db-migration-tools"],
    prompt:
      "목으로 짠 단위 테스트는 전부 초록인데 운영에서 유니크 제약 위반과 외래 키 에러가 났고, 벤더 결제 연동은 UAT에서 처음 깨졌다. 테스트를 어디에 얼마나 두고 CI를 어떻게 바꾸나.",
    points: [
      "목은 DB 제약과 동시성을 흉내 내지 못하므로 저장소 층은 Testcontainers의 진짜 PostgreSQL에 붙인다.",
      "테스트마다 트랜잭션 롤백은 빠르지만 시퀀스, 지연 제약, 안쪽 COMMIT을 놓치니 병렬 파일은 템플릿 DB로 나눈다.",
      "마이그레이션은 CI에서 빈 DB에 처음부터 적용해 기록 표와 체크섬이 맞는지 본다.",
      "벤더와의 약속은 계약 테스트와 샌드박스 SIT가 맡고 UAT는 업무 흐름을 끝까지 확인하는 자리다.",
      "피라미드냐 트로피냐보다 어떤 버그를 어느 층이 잡는지로 비율을 정한다.",
    ],
  },
  {
    id: "data-43",
    posts: ["redis-cluster", "valkey-vs-redis", "redis-high-throughput", "pub-sub"],
    prompt:
      "Redis 한 대가 메모리 64GB를 넘어 Cluster로 가면서 Valkey로 바꾸자는 제안이 나왔다. 실시간 알림은 PUB/SUB로 보내는데 끊겼다 붙은 앱이 알림을 놓친다. 전환 순서와 알림 설계를 어떻게 잡나.",
    points: [
      "Cluster는 다중 키 명령을 같은 슬롯에서만 허용하고 레플리카 없는 노드가 죽으면 CLUSTERDOWN이 나니 샤드마다 레플리카를 둔다.",
      "한 대로 안 될 때는 코어 수만큼 나누고, 큰 값과 핫 키는 대역폭을 혼자 쓰니 먼저 쪼갠다.",
      "Valkey는 레플리카로 붙여 무중단으로 옮기되 RDB가 한쪽으로만 넘어가고 2024년 뒤 명령은 서로 모르니 되돌리기 어려운 지점을 정한다.",
      "PUBLISH는 그 순간 듣던 사람에게만 가고 느린 구독자는 끊기므로 놓치면 안 되는 알림은 Streams 소비자 그룹으로 보낸다.",
    ],
  },
  {
    id: "data-44",
    posts: ["serverless-architecture", "pub-sub", "message-queue-basics", "dead-letter-queue"],
    prompt:
      "S3 업로드 트리거 람다가 썸네일을 만들고 SNS로 알리는데, 어떤 사건은 사라지고 어떤 날은 람다 수천 개가 돌아 요금이 튀었다. 트리거 방식별로 실패가 어디로 가는지 따라가 원인을 찾아라.",
    points: [
      "비동기 호출은 자체 재시도 뒤 DLQ가 없으면 버리므로 사라진 사건은 실패 대상 설정부터 본다.",
      "썸네일을 같은 버킷에 쓰면 다시 트리거되는 재귀 고리가 생겨 호출 수가 폭발한다.",
      "SNS는 끊긴 구독자의 메시지를 주지 않으니 뒤에 SQS를 붙여 가시성 타임아웃과 ack로 받는다.",
      "SQS 배치에서 하나만 실패하면 전체가 다시 오므로 부분 실패 응답과 멱등 처리가 필요하다.",
      "재시도 상한을 넘은 메시지는 DLQ에 원인과 함께 남기고 알람을 건다.",
    ],
  },
  {
    id: "data-45",
    posts: ["mysql-innodb-basics", "db-locking-deadlock", "postgres-advanced-sql", "db-transaction-isolation"],
    prompt:
      "MySQL 8에서 '이메일이 없으면 가입'을 SELECT 후 INSERT로 짰더니 서로 다른 이메일 두 건이 동시에 들어올 때 교착 상태가 난다. PostgreSQL에서는 같은 코드가 교착 없이 중복만 생겼다. 왜 다르고 어떻게 고치나.",
    points: [
      "InnoDB의 REPEATABLE READ는 없는 값을 조회할 때 인덱스 간격에 잠금을 걸어 두 세션이 서로의 INSERT를 막아 교착이 난다.",
      "PostgreSQL은 간격 잠금이 없어 둘 다 통과해 중복이 생기고, 두 DB 모두 답은 유니크 인덱스와 한 문장 upsert다.",
      "INSERT ... ON CONFLICT나 ON DUPLICATE KEY UPDATE는 확인을 쓰기 안에 넣어 틈을 없앤다.",
      "잠금은 행이 아니라 인덱스 위에 걸리므로 잠금 대기는 performance_schema.data_locks와 SHOW ENGINE INNODB STATUS로 좁힌다.",
      "격리 수준은 무엇을 허용하느냐의 문제라 READ COMMITTED로 낮추면 간격 잠금은 줄지만 다른 현상을 받아들인다.",
    ],
  },
  {
    id: "data-46",
    posts: ["db-type-graph", "vector-db", "db-type-embedded", "sql-cte-recursive"],
    prompt:
      "'친구의 친구가 산 책'과 '이 책과 뜻이 비슷한 책' 두 추천을 붙이려 한다. 모바일 앱은 오프라인에서도 최근 추천을 보여 줘야 한다. 어떤 저장소 조합을 고르고 각각의 한계는 무엇인가.",
    points: [
      "친구의 친구는 재귀 CTE로도 되지만 단계가 늘면 닿는 사람이 폭발하고, 그래프 DB는 이웃을 바로 찾아가는 구조라 깊이에 덜 민감하다.",
      "뜻이 비슷한 책은 임베딩과 HNSW로 찾되 ef 같은 손잡이로 정확도와 속도를 맞바꾸고 pgvector 결과가 이상하면 거리 함수와 정규화부터 본다.",
      "오프라인 캐시는 앱 안의 SQLite가 맞고 쓰기는 한 번에 하나이며 WAL 모드와 커밋 묶기로 빨라진다.",
      "원본은 관계형에 두고 그래프와 벡터는 사본으로 흘려보낸다.",
    ],
  },
  {
    id: "data-47",
    posts: ["mvc-pattern", "layered-architecture", "express-middleware", "sql-insert-update-delete"],
    prompt:
      "쿠폰 적용 버그를 고치려는데 할인 규칙이 컨트롤러 세 곳과 화면 코드에 흩어져 있고, 한 컨트롤러는 WHERE 없는 UPDATE를 보냈다가 롤백도 못 했다. 요청이 지나는 줄과 트랜잭션 경계를 어떻게 다시 긋나.",
    points: [
      "업무 규칙은 서비스와 모델에 두고 컨트롤러는 입력을 받아 넘기는 일만 해야 같은 규칙이 세 곳에 복사되지 않는다.",
      "트랜잭션 경계는 서비스가 쥐고 DB 에러는 층을 건널 때 번역한다.",
      "Express는 등록 순서가 곧 동작이니 검증 미들웨어를 핸들러 앞에 두고 에러 미들웨어는 마지막에 둔다.",
      "고치고 지우기 전에 BEGIN부터 열고 SELECT로 영향 행을 세며, 열어 둔 트랜잭션은 pg_stat_activity로 찾는다.",
    ],
  },
  {
    id: "data-48",
    posts: ["backend-engineer-roadmap", "sql-study-path", "db-performance-map", "db-index"],
    prompt:
      "면접에서 '주문 목록 API가 느리다는 보고를 받으면 무엇부터 보나'라는 질문을 받았다. 층을 따라 답하고, 꼬리 질문으로 'DB까지 내려갔다면 무엇을 어떤 순서로 꺼내나'에 답하라.",
    points: [
      "증상에서 층을 거꾸로 찾아 HTTP, 런타임, 데이터, 인프라, 비동기, 분산 중 어디서 시간이 새는지 좁힌다.",
      "DB면 pg_stat_statements로 범인 쿼리를 찾고 실행 계획에서 Seq Scan과 예상 행 수를 본다.",
      "인덱스, B-tree, 커넥션 풀, 캐시, 복제, 파티셔닝, 블룸 필터, 샤딩 순서로 꺼내고 건너뛰면 아래 문제가 따라온다.",
      "쿼리는 SELECT, WHERE, GROUP BY, JOIN, 서브쿼리, 윈도 순서로 키우며 줄 수가 바뀌는 자리를 의심한다.",
    ],
  },
  {
    id: "data-49",
    posts: ["cache-write-policies", "redis-persistence-ha", "redis-basics", "batch-processing"],
    prompt:
      "상품 조회수를 요청마다 DB UPDATE하던 것을 Redis에 모았다가 10초마다 내려 보내는 write-back으로 바꿨다. 어느 날 Redis가 재시작되며 조회수가 줄었고, 어떤 상품은 두 배로 뛰었으며, 운영자가 고친 값이 되돌아갔다. 각각 왜 그런가.",
    points: [
      "write-back은 버퍼가 사라지면 아직 내려 보내지 않은 증가분을 잃고, 그 창은 flush 주기와 AOF 설정이 정한다.",
      "내려 보내다 죽으면 같은 증가분을 두 번 더하므로 DB 쪽 쓰기를 구간 ID로 멱등하게 만든다.",
      "운영자가 DB를 직접 고치면 다음 flush가 캐시 값으로 덮어쓰니 순서를 정하거나 증가분만 더한다.",
      "쓰기 2만 번이 UPDATE 9번이 되는 이득은 잃어도 되는 데이터에만 맞고, INCR은 단일 스레드라 원자적이다.",
    ],
  },
  {
    id: "data-50",
    posts: ["spring-ai-agents", "http-streaming-sse", "rate-limiting-in-practice", "idempotency-key"],
    prompt:
      "Spring AI로 만든 주문 도우미가 어느 날 도구 호출을 200번 반복하며 모델 API 요금을 태웠고, 다른 사용자의 주문을 취소하려 했으며, 모델이 503을 줄 때 재시도가 겹쳐 같은 주문이 두 번 접수됐다. 어디를 고치나.",
    points: [
      "도구 호출 루프는 앱이 쥐고 있으므로 반복 상한과 토큰 예산을 두고 넘으면 멈춘다.",
      "도구는 모델이 아니라 앱이 실행하니 호출 전에 현재 사용자의 권한을 검사한다.",
      "503 재시도는 멱등한 읽기에만 걸고 주문 접수 같은 쓰기는 멱등성 키로 중복을 막는다.",
      "모델 API에는 요청 수 제한과 타임아웃을 두고 스트리밍 답변은 클라이언트가 끊으면 토큰 생성도 중지한다.",
    ],
  },
];
