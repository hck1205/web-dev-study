import type { QuizQuestion } from "../types";

export const CACHE_WRITE_POLICIES: QuizQuestion[] = [
  {
    id: "cache-write-policies-1",
    post: "cache-write-policies",
    question: "로컬에서 재 보니 write-through와 write-around의 쓰기 지연이 거의 같았다. 가장 큰 이유는?",
    choices: [
      "Redis 명령이 DB 쿼리보다 느려서",
      "둘 다 DB 커밋(WAL이 디스크에 닿기)을 기다려서 그 시간이 대부분을 차지하기 때문에",
      "write-through는 캐시를 쓰지 않기 때문에",
      "write-around는 캐시를 두 번 지우기 때문에",
    ],
    answer: 1,
    explanation:
      "synchronous_commit이 켜진 PostgreSQL은 커밋 기록이 디스크에 닿을 때까지 답하지 않는다. Redis 명령 하나는 그에 비하면 작아서, 두 방식 모두 느린 DB 쪽이 지연을 정한다.",
    anchor: "쓰기-한-번에-걸리는-시간",
  },
  {
    id: "cache-write-policies-2",
    post: "cache-write-policies",
    question:
      "플러셔가 `GET views:1001`로 값을 읽고, DB에 더한 뒤 `SET views:1001 0`으로 되돌린다. 트래픽이 많을 때 생기는 일은?",
    choices: [
      "DB에 같은 값이 두 번 더해진다",
      "Redis 메모리가 계속 늘어난다",
      "GET과 SET 0 사이에 들어온 INCR이 덮여 조회 일부가 사라진다",
      "아무 문제 없다. Redis는 단일 스레드라 원자적이다",
    ],
    answer: 2,
    explanation:
      "명령 하나하나는 원자적이지만 GET과 SET 사이는 DB 왕복만큼 벌어져 있어서, 그 사이의 증가분이 SET 0에 덮인다. GETDEL이나 RENAME처럼 읽기와 비우기를 한 명령으로 해야 한다.",
    anchor: "더티-표시를-지우는-사이에-사라지는-조회",
  },
  {
    id: "cache-write-policies-3",
    post: "cache-write-policies",
    question:
      "버퍼를 RENAME으로 떼어 내 DB에 커밋한 뒤, 떼어 낸 키를 DEL하기 직전에 플러셔가 죽었다. 재시작한 플러셔가 그 묶음을 다시 처리할 때 두 번 더해지지 않게 하려면?",
    choices: [
      "묶음마다 이름을 붙이고 같은 DB 트랜잭션에서 기본 키 테이블에 기록해 중복이면 건너뛴다",
      "DEL을 COMMIT보다 먼저 한다",
      "flush 간격을 늘린다",
      "Redis에 AOF를 켠다",
    ],
    answer: 0,
    explanation:
      "커밋과 묶음 이름 기록을 한 트랜잭션에 넣으면 같은 묶음은 기본 키 충돌로 한 번만 반영된다. DEL을 먼저 하면 커밋이 실패했을 때 묶음을 잃고, AOF는 중복 반영과 상관이 없다.",
    anchor: "내려-보내다-죽으면-두-번-더해진다",
  },
  {
    id: "cache-write-policies-4",
    post: "cache-write-policies",
    question:
      "조회수 버퍼를 Redis(AOF 끔)에 두고 1초마다 내려 보낸다. 다음 중 내려 보내지 않은 조회를 잃는 경우는?",
    choices: [
      "앱 프로세스만 SIGKILL로 죽었을 때",
      "앱을 SIGTERM으로 정상 종료했을 때",
      "PostgreSQL이 잠깐 느려졌을 때",
      "Redis 프로세스가 SIGKILL로 죽었을 때",
    ],
    answer: 3,
    explanation:
      "버퍼가 앱 밖의 Redis에 있으니 앱이 죽어도 남아 있다가 다음 flush에 내려간다. 영속성이 꺼진 Redis가 죽으면 버퍼 자체가 사라져서, 실험에서도 성공 응답을 받은 조회 7,277건이 없어졌다.",
    anchor: "어디가-죽느냐에-따라-잃는-양이-다르다",
  },
  {
    id: "cache-write-policies-5",
    post: "cache-write-policies",
    question:
      "가격을 write-back으로 받는데, 플러셔가 돌기 전에 운영자가 DB에서 가격을 직접 고쳤다. 조건 없는 UPDATE로 내려 보내면?",
    choices: [
      "DB가 충돌을 감지해 UPDATE를 거절한다",
      "늦게 내려온 캐시 값이 운영자의 수정을 덮는다",
      "운영자의 값이 캐시에도 자동으로 반영된다",
      "두 값의 평균이 저장된다",
    ],
    answer: 1,
    explanation:
      "조건이 없으면 마지막에 쓴 쪽이 이긴다. `WHERE version < $2` 같은 조건을 붙이면 덮어쓰기는 막지만, 그러면 캐시 쪽 수정이 충돌로 남으니 정책이 필요하다.",
    anchor: "운영자가-고친-가격이-되돌아간다",
  },
  {
    id: "cache-write-policies-6",
    post: "cache-write-policies",
    question:
      "write-through를 '캐시에 먼저 쓰고 DB에 쓰는' 순서로 짰다. DB가 CHECK 제약으로 쓰기를 거절하면?",
    choices: [
      "캐시도 자동으로 롤백된다",
      "Redis가 에러를 돌려준다",
      "다음 읽기에서 바로 DB 값으로 바뀐다",
      "DB에 한 번도 없던 값이 TTL 동안 모두에게 보인다",
    ],
    answer: 3,
    explanation:
      "Redis는 DB 트랜잭션을 모르니 캐시에 쓴 값은 그대로 남는다. 실험에서 −1,000원이 3초 동안 보였다. 그래서 DB 커밋이 끝난 뒤에 캐시를 쓴다.",
    anchor: "write-through도-순서를-틀리면-없는-값을-보여-준다",
  },
  {
    id: "cache-write-policies-7",
    post: "cache-write-policies",
    question: "다음 중 write-back이 가장 잘 맞는 데이터는?",
    choices: ["주문 상태", "포인트 잔액", "상품 조회수", "상품 가격"],
    answer: 2,
    explanation:
      "조회수는 더하기로만 바뀌어 순서가 바뀌어도 합계가 같고, 몇 건 잃어도 문제가 되지 않는다. 주문과 잔액은 잃으면 안 되고, 가격은 덮어쓰는 값이라 늦게 내려온 값이 다른 수정을 덮을 수 있다.",
    anchor: "데이터의-성격으로-고른다",
  },
];
