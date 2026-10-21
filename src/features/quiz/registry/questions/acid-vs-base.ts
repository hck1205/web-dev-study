import type { QuizQuestion } from "../types";

export const ACID_VS_BASE: QuizQuestion[] = [
  {
    id: "acid-vs-base-1",
    post: "acid-vs-base",
    question:
      "Redis에서 `MULTI` 뒤에 `DECR stock`, `INCR sold`(값이 \"N/A\"), `INCR count`를 쌓고 `EXEC`하면 어떻게 되나?",
    choices: [
      "EXECABORT로 세 명령 모두 실행되지 않는다",
      "INCR sold에서 멈추고 DECR stock만 반영된다",
      "INCR sold만 실패하고 DECR stock과 INCR count는 반영된다",
      "세 명령 모두 되돌려지고 오류 하나가 돌아온다",
    ],
    answer: 2,
    explanation:
      "값의 종류가 맞지 않는 오류는 실행해 봐야 알기 때문에 그 명령 하나만 실패하고 나머지는 계속 실행된다. Redis 트랜잭션에는 롤백이 없다. EXECABORT는 명령 이름이 틀린 것처럼 큐에 넣을 때 드러나는 오류에서만 나온다.",
    anchor: "같은-실패를-postgresql에-넣으면",
  },
  {
    id: "acid-vs-base-2",
    post: "acid-vs-base",
    question: "Redis `MULTI`/`EXEC`가 확실히 보장하는 것은?",
    choices: [
      "실행 중 다른 클라이언트의 명령이 끼어들지 않는다",
      "하나라도 실패하면 전부 되돌린다",
      "EXEC 응답 전에 디스크에 기록된다",
      "다른 키에 대한 규칙(제약)을 검사한다",
    ],
    answer: 0,
    explanation:
      "쌓인 명령을 EXEC 때 한 번에 실행하고 그 사이 다른 명령이 끼어들지 못하게 하는 것이 보장의 전부다. 롤백은 없고, 지속성은 AOF 설정에 달려 있으며, 값에 규칙을 거는 제약도 없다.",
    anchor: "redis가-약속하는-것은-끼어들지-않는다는-것뿐",
  },
  {
    id: "acid-vs-base-3",
    post: "acid-vs-base",
    question:
      "클라이언트 A가 `WATCH stock`과 `GET`을 한 뒤, B가 그 키를 바꾸고, A가 `MULTI`/`EXEC`를 보냈다. A가 받는 결과는?",
    choices: [
      "B의 변경 위에 A의 명령이 실행된 결과 배열",
      "(nil)이 돌아오고 A의 명령은 하나도 실행되지 않는다",
      "B의 변경이 취소되고 A의 명령이 실행된다",
      "A의 연결이 끊긴다",
    ],
    answer: 1,
    explanation:
      "WATCH한 키가 EXEC 전에 바뀌면 EXEC는 아무것도 실행하지 않고 (nil)을 돌려준다. 앱은 다시 읽고 판단해서 재시도한다. 잠그지 않고 충돌을 알아채는 낙관적 방식이다.",
    anchor: "읽고-판단하는-일은-watch가-맡는다",
  },
  {
    id: "acid-vs-base-4",
    post: "acid-vs-base",
    question:
      "Ubuntu 기본 설정의 Redis에서 EXEC 응답을 받은 직후 프로세스가 kill -9로 죽었다. 재시작하면 그 쓰기는 왜 없을 수 있나?",
    choices: [
      "EXEC는 원래 비동기로 실행되기 때문에",
      "재시작할 때 Redis가 마지막 트랜잭션을 롤백하기 때문에",
      "복제본이 없으면 Redis가 쓰기를 메모리에도 두지 않기 때문에",
      "AOF가 꺼져 있고 RDB 스냅숏도 아직 찍히지 않았기 때문에",
    ],
    answer: 3,
    explanation:
      "Ubuntu 패키지 설정은 appendonly no라서 쓰기는 메모리에만 있다가 저장 조건을 채워야 RDB 스냅숏으로 내려간다. 그 전에 죽으면 응답까지 받은 쓰기가 사라진다. appendfsync always로 켜면 같은 실험에서 값이 남는다.",
    anchor: "ok를-받았어도-디스크에는-없을-수-있다",
  },
  {
    id: "acid-vs-base-5",
    post: "acid-vs-base",
    question:
      "MongoDB 트랜잭션에서 `UnknownTransactionCommitResult`가 왔다. 올바른 대응은?",
    choices: [
      "트랜잭션을 처음부터 다시 실행한다",
      "실패로 보고 사용자에게 오류를 보여 준다",
      "커밋만 다시 보낸다",
      "write concern을 1로 낮춰 다시 보낸다",
    ],
    answer: 2,
    explanation:
      "커밋을 보냈는데 결과를 모른다는 뜻이라, 커밋 명령만 다시 보내면 된다. 처음부터 다시 실행하는 건 TransientTransactionError일 때다. 드라이버의 withTransaction이 두 경우를 나눠 재시도한다.",
    anchor: "mongodb는-문서-하나가-기본-단위다",
  },
  {
    id: "acid-vs-base-6",
    post: "acid-vs-base",
    question: "Cassandra에서 `IF`가 붙은 쓰기(경량 트랜잭션)가 일반 쓰기보다 훨씬 느린 이유는?",
    choices: [
      "복제본 과반과 Paxos로 합의하느라 왕복이 여러 번 들기 때문에",
      "모든 노드의 디스크를 잠그기 때문에",
      "파티션 여러 개를 함께 묶어 검사하기 때문에",
      "commitlog를 끄고 바로 SSTable에 쓰기 때문에",
    ],
    answer: 0,
    explanation:
      "조건을 판단하고 쓰려면 준비, 읽기, 제안, 커밋을 복제본 과반과 차례로 주고받아야 한다. 클래식 방식은 왕복 네 번이다. 경량 트랜잭션은 파티션 하나 안에서만 동작하므로 여러 파티션을 묶는다는 보기는 틀렸다.",
    anchor: "dynamodb와-cassandra는-조건을-걸고-쓴다",
  },
  {
    id: "acid-vs-base-7",
    post: "acid-vs-base",
    question:
      "복제본을 서울(리더), 도쿄, 싱가포르에 하나씩 둔 분산 SQL에서 서울 앱의 커밋 지연을 주로 정하는 것은?",
    choices: [
      "싱가포르까지의 왕복 시간",
      "서울과 도쿄 사이 왕복 시간",
      "세 리전 왕복 시간의 합",
      "앱과 리더 사이의 왕복 시간",
    ],
    answer: 1,
    explanation:
      "커밋은 과반이 기록하면 끝나므로 리더와 가장 가까운 도쿄가 답하는 순간 셋 중 둘이 된다. 그래서 서울과 도쿄 사이 왕복이 커밋 시간의 하한이 된다. 도쿄가 죽으면 그때부터 싱가포르 왕복이 커밋 시간이 된다.",
    anchor: "분산-sql은-네-글자를-지키고-왕복으로-값을-치른다",
  },
];
