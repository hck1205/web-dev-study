import type { QuizQuestion } from "../types";

export const MESSAGE_DELIVERY_SEMANTICS: QuizQuestion[] = [
  {
    id: "message-delivery-semantics-1",
    post: "message-delivery-semantics",
    question: "전달 자체를 정확히 한 번으로 만들 수 없는 근본적인 이유는?",
    choices: [
      "브로커가 메시지를 디스크에 늦게 쓰기 때문이다",
      "저장은 됐는데 확인이 사라진 경우와 저장이 안 된 경우를 보낸 쪽이 구별할 수 없기 때문이다",
      "컨슈머가 여러 대이기 때문이다",
      "네트워크가 패킷 순서를 바꾸기 때문이다",
    ],
    answer: 1,
    explanation:
      "두 경우가 보낸 쪽에는 똑같이 보이니, 잃지 않으려면 다시 보낼 수밖에 없고 다시 보내면 중복이 생긴다. 그래서 정확히 한 번은 최소 한 번 전달 위에 받는 쪽의 중복 제거를 얹어 만든다.",
    anchor: "확인이-사라지면-보낸-쪽은-모른다",
  },
  {
    id: "message-delivery-semantics-2",
    post: "message-delivery-semantics",
    question: "멱등 프로듀서를 켜 두었는데, 아웃박스 릴레이가 재시작한 뒤 같은 이벤트가 토픽에 두 번 쌓였다. 왜 막지 못했나?",
    choices: [
      "acks=all이 아니었기 때문이다",
      "멱등 프로듀서는 키가 있는 메시지만 거른다",
      "max.in.flight.requests.per.connection이 1이었기 때문이다",
      "브로커는 같은 PID 안에서만 시퀀스로 중복을 알아보는데, 재시작한 프로듀서는 새 PID를 받았기 때문이다",
    ],
    answer: 3,
    explanation:
      "멱등 프로듀서는 프로듀서 세션 안의 재전송만 막는다. 애플리케이션이 재시작 후 보냈는지 모르는 메시지를 다시 보내면 브로커는 다른 PID의 새 메시지로 본다. 그 구간은 받는 쪽의 중복 제거가 맡아야 한다.",
    anchor: "프로듀서와-브로커-사이-멱등-프로듀서",
  },
  {
    id: "message-delivery-semantics-3",
    post: "message-delivery-semantics",
    question: "트랜잭션 프로듀서로 쓰는데, 컨슈머가 중단된 트랜잭션의 메시지까지 처리하고 있다. 무엇을 확인하나?",
    choices: [
      "컨슈머의 isolation.level이 기본값 read_uncommitted인지",
      "토픽의 cleanup.policy가 compact인지",
      "프로듀서의 acks가 1인지",
      "파티션 수가 1인지",
    ],
    answer: 0,
    explanation:
      "중단된 트랜잭션의 메시지는 로그에서 지워지지 않고 ABORT 표시만 붙는다. 기본값 read_uncommitted 컨슈머는 그것까지 읽으니 read_committed로 바꿔야 한다. 실험에서도 read_uncommitted는 4개, read_committed는 2개를 읽었다.",
    anchor: "kafka-안에서-읽고-쓰기-트랜잭션",
  },
  {
    id: "message-delivery-semantics-4",
    post: "message-delivery-semantics",
    question: "Kafka 트랜잭션(exactly-once)을 켰다. 주문 이벤트를 읽어 PostgreSQL에 포인트를 적립하는 컨슈머의 중복도 사라지나?",
    choices: [
      "사라진다. 트랜잭션이 모든 처리를 묶는다",
      "사라진다. read_committed만 켜면 된다",
      "사라지지 않는다. Kafka 밖의 DB 쓰기는 트랜잭션 범위 밖이라 인박스 같은 장치가 따로 필요하다",
      "사라지지 않는다. 트랜잭션은 키 없는 메시지에만 적용된다",
    ],
    answer: 2,
    explanation:
      "Kafka 트랜잭션은 출력 토픽 쓰기와 입력 오프셋 커밋을 함께 묶을 뿐이다. 트랜잭션이 중단돼도 PostgreSQL에 쓴 적립은 되돌아가지 않으니, 처리한 메시지 ID를 업무 데이터와 같은 트랜잭션에 적는 인박스로 막는다.",
    anchor: "어디까지가-kafka의-정확히-한-번인가",
  },
  {
    id: "message-delivery-semantics-5",
    post: "message-delivery-semantics",
    question: "인박스를 '먼저 SELECT로 처리 기록을 찾고, 없으면 처리 후 INSERT'로 구현했다. 무엇이 문제인가?",
    choices: [
      "SELECT가 느려 처리량이 떨어진다",
      "동시에 온 같은 메시지 두 개가 모두 '없음'을 보고 둘 다 처리한다",
      "INSERT가 실패하면 메시지를 잃는다",
      "문제없다. 결과는 같다",
    ],
    answer: 1,
    explanation:
      "조회와 넣기 사이에 틈이 있어 두 컨슈머가 동시에 통과한다. 기본 키에 먼저 INSERT하고 그 결과로 판단하면, 실험처럼 두 번째 세션은 첫 세션이 커밋할 때까지 기다렸다가 INSERT 0 0으로 끝나 처리하지 않는다.",
    anchor: "받는-쪽-db에서-거르는-인박스-테이블",
  },
  {
    id: "message-delivery-semantics-6",
    post: "message-delivery-semantics",
    question: "토픽 보관 기간은 7일인데 인박스 기록을 하루만 보관하고 지운다. 어떤 일이 생길 수 있나?",
    choices: [
      "사흘 전 오프셋으로 되돌려 재처리하면 이미 처리한 메시지를 처음 보는 것으로 알고 다시 처리한다",
      "인박스 INSERT가 느려진다",
      "Kafka가 메시지를 더 빨리 지운다",
      "아무 일도 없다. 중복은 하루 안에만 생긴다",
    ],
    answer: 0,
    explanation:
      "중복 제거 기록은 같은 메시지가 다시 올 수 있는 가장 긴 시간보다 길게 둬야 한다. 오프셋을 되돌리거나 DLQ에서 되돌려 보내는 재처리는 보관 기간 안에서 언제든 일어날 수 있다.",
    anchor: "중복을-얼마나-오래-기억할까",
  },
  {
    id: "message-delivery-semantics-7",
    post: "message-delivery-semantics",
    question: "포인트가 두 번 적립됐는데 두 적립 기록의 이벤트 ID가 서로 다르다. 어디를 먼저 보나?",
    choices: [
      "컨슈머의 인박스 트랜잭션",
      "컨슈머의 prefetch 설정",
      "발행 쪽: 재전송할 때 이벤트 ID를 새로 만들고 있지 않은지, 릴레이가 재시작하며 다시 보냈는지",
      "브로커의 디스크 용량",
    ],
    answer: 2,
    explanation:
      "ID가 다르면 받는 쪽은 서로 다른 메시지로 볼 수밖에 없으니 발행 쪽 문제다. ID를 보낼 때마다 새로 만들면 어떤 중복 제거도 동작하지 않는다. ID가 같은데 중복이면 그때 받는 쪽을 본다.",
    anchor: "중복-적립-문의를-받았을-때-볼-것",
  },
];
