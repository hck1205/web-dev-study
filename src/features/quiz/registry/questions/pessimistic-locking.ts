import type { QuizQuestion } from "../types";

export const PESSIMISTIC_LOCKING: QuizQuestion[] = [
  {
    id: "pessimistic-locking-1",
    post: "pessimistic-locking",
    question:
      "모든 요청이 같은 재고 행을 FOR UPDATE로 잠그고 약 6ms 뒤 커밋한다. 클라이언트를 1개에서 16개로 늘리면 어떻게 되나?",
    choices: [
      "처리량이 약 16배로 늘어난다",
      "처리량은 초당 약 160건에 머물고 평균 지연이 100ms 안팎으로 길어진다",
      "PostgreSQL이 잠금을 자동으로 행 여러 개로 나눠 처리량이 늘어난다",
      "교착 상태가 나서 절반이 실패한다",
    ],
    answer: 1,
    explanation:
      "한 행은 한 번에 한 트랜잭션만 쥘 수 있어서 처리량 상한이 1초 ÷ 쥔 시간이다. 클라이언트를 늘리면 줄만 길어져 지연이 줄 길이 × 쥔 시간만큼 는다. 같은 쿼리라도 행이 흩어져 있으면 처리량이 클라이언트 수에 맞춰 늘었다.",
    anchor: "잠금은-한-행-앞에-줄을-세운다",
  },
  {
    id: "pessimistic-locking-2",
    post: "pessimistic-locking",
    question:
      "상품 행을 SELECT ... FOR UPDATE로 잡아 둔 사이, 그 상품을 참조하는 주문 INSERT가 멈췄다. 왜 그럴까?",
    choices: [
      "INSERT가 orders 테이블 전체를 잠그기 때문에",
      "FOR UPDATE가 products 테이블 전체를 잠그기 때문에",
      "외래 키 확인이 상품 행에 FOR KEY SHARE를 거는데, FOR UPDATE와 부딪히기 때문에",
      "시퀀스 값을 얻으려고 기다리기 때문에",
    ],
    answer: 2,
    explanation:
      "외래 키 확인은 참조하는 부모 행이 지워지지 않게 FOR KEY SHARE를 건다. FOR KEY SHARE는 FOR UPDATE와만 부딪히니, 키를 바꿀 게 아니면 FOR NO KEY UPDATE로 잡으면 INSERT가 바로 들어간다.",
    anchor: "네-가지-세기-중-무엇을-고르나",
  },
  {
    id: "pessimistic-locking-3",
    post: "pessimistic-locking",
    question:
      "pg_locks를 봤더니 기다리는 세션이 'transactionid'에 ShareLock을 요청하고 granted = f다. 무슨 뜻인가?",
    choices: [
      "그 트랜잭션 ID를 가진 트랜잭션이 잡은 행을 기다리고 있다. 행 잠금은 행 안에 적혀서 대기가 이렇게 보인다",
      "테이블 전체에 공유 잠금을 걸려는 중이다",
      "트랜잭션 ID가 바닥나 새 ID를 기다리고 있다",
      "자기 자신의 트랜잭션을 잠그는 중이라 곧 끝난다",
    ],
    answer: 0,
    explanation:
      "PostgreSQL의 행 잠금은 행 머리의 xmax에 적히고 pg_locks에는 나오지 않는다. 행을 기다리는 일은 그 행을 잡은 트랜잭션이 끝나기를 기다리는 일이라, 상대 트랜잭션 ID에 대한 ShareLock 요청으로 보인다.",
    anchor: "행-잠금은-행-안에-적힌다",
  },
  {
    id: "pessimistic-locking-4",
    post: "pessimistic-locking",
    question:
      "A가 FOR SHARE로 행을 잡고 B가 FOR UPDATE로 기다리는 중에 C가 FOR SHARE를 요청했다. PostgreSQL에서 실제로 일어난 일은?",
    choices: [
      "C는 B 뒤에 줄을 선다",
      "C는 에러를 받는다",
      "B가 우선권을 얻어 A를 밀어낸다",
      "C는 B를 앞질러 바로 잠금을 얻고, B는 A와 C가 모두 끝나야 들어간다",
    ],
    answer: 3,
    explanation:
      "C가 보기에 행에는 공유 잠금만 있고 공유끼리는 부딪히지 않으니 바로 들어간다. 공유 잠금이 끊이지 않으면 FOR UPDATE는 계속 밀리는 기아가 생길 수 있다.",
    anchor: "공유-잠금은-줄을-새치기한다",
  },
  {
    id: "pessimistic-locking-5",
    post: "pessimistic-locking",
    question: "주문과 상품을 조인해 주문만 처리하려는데 같은 상품의 다른 주문 처리가 모두 멈춘다. 가장 알맞은 수정은?",
    choices: [
      "FOR UPDATE를 FOR SHARE로 바꾼다",
      "FOR UPDATE OF o로 주문 테이블 행만 잠근다",
      "조인을 서브쿼리로 바꾼다",
      "격리 수준을 SERIALIZABLE로 올린다",
    ],
    answer: 1,
    explanation:
      "FOR UPDATE만 쓰면 조인에 참여한 모든 테이블의 행이 잠겨 상품 행까지 붙잡는다. OF로 잠글 테이블을 고르면 상품 행에는 잠금이 걸리지 않는다. FOR SHARE로 바꿔도 상품 행은 여전히 잠긴다.",
    anchor: "for-update를-붙일-수-없는-쿼리",
  },
  {
    id: "pessimistic-locking-6",
    post: "pessimistic-locking",
    question:
      "PgBouncer를 transaction 모드로 쓰는데 pg_advisory_lock(세션 잠금)으로 배치 중복 실행을 막으려 한다. 무엇이 문제인가?",
    choices: [
      "advisory lock은 PgBouncer를 지나면 무시된다",
      "트랜잭션이 끝날 때마다 잠금이 풀려 효과가 없다",
      "트랜잭션마다 서버 연결이 바뀌어 잠금이 다른 클라이언트의 연결에 남고, 잡은 쪽은 놓지 못한다",
      "advisory lock은 한 서버에서만 쓸 수 있다",
    ],
    answer: 2,
    explanation:
      "세션 잠금은 서버 연결에 붙는다. transaction 모드에서는 연결이 트랜잭션마다 다른 클라이언트에게 넘어가니 잠금이 엉뚱한 곳에 남는다. 이 모드에서는 커밋 때 저절로 풀리는 pg_advisory_xact_lock을 쓴다.",
    anchor: "행이-아닌-것을-잠그는-advisory-lock",
  },
  {
    id: "pessimistic-locking-7",
    post: "pessimistic-locking",
    question:
      "잠금을 쥔 뿌리 세션이 state = 'idle in transaction'이다. pg_cancel_backend(pid)를 실행하면?",
    choices: [
      "실행 중인 쿼리가 없어서 아무 효과가 없다. 연결을 끊는 pg_terminate_backend가 필요하다",
      "트랜잭션이 커밋되고 잠금이 풀린다",
      "트랜잭션이 롤백되고 연결은 유지된다",
      "기다리던 세션들이 모두 취소된다",
    ],
    answer: 0,
    explanation:
      "pg_cancel_backend는 실행 중인 쿼리만 취소한다. idle in transaction 세션은 쿼리를 돌리지 않으니 잠금을 그대로 쥔다. pg_terminate_backend로 연결을 끊으면 트랜잭션이 롤백되며 잠금이 풀린다.",
    anchor: "잠금-대기를-좁혀-가는-순서",
  },
];
