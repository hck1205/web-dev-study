import type { QuizQuestion } from "../types";

export const HEXAGONAL_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "hexagonal-architecture-1",
    post: "hexagonal-architecture",
    question: "헥사고날 아키텍처에서 OrderRepository 같은 나가는 포트의 인터페이스는 어디에 두나?",
    choices: [
      "DB 어댑터 패키지 안에 둔다",
      "코어(업무 규칙) 안에 둔다",
      "HTTP 컨트롤러 옆에 둔다",
      "ORM 엔티티 파일에 함께 둔다",
    ],
    answer: 1,
    explanation:
      "인터페이스는 그걸 필요로 하는 코어가 가지고, 바깥 어댑터가 그 선언에 맞춰 구현한다. 인터페이스를 DB 어댑터 쪽에 두면 코어가 그 패키지를 import해야 해서 다시 바깥에 묶인다.",
    anchor: "들어오는-쪽과-나가는-쪽은-주인이-다르다",
  },
  {
    id: "hexagonal-architecture-2",
    post: "hexagonal-architecture",
    question:
      "메모리 저장소로 돌린 유스케이스 테스트는 통과하는데, 운영(DB)에서는 저장 뒤에 바꾼 주문 상태가 사라진다. 가장 그럴듯한 원인은?",
    choices: [
      "DB 커넥션 풀이 작아서",
      "테스트가 비동기 함수를 await하지 않아서",
      "포트 이름이 기술 이름이라서",
      "메모리 저장소가 받은 객체를 복사하지 않고 그대로 쥐고 있어서",
    ],
    answer: 3,
    explanation:
      "메모리 저장소가 같은 객체를 공유하면 save를 다시 부르지 않아도 저장된 값이 따라 바뀌어 테스트가 통과한다. DB는 값을 복사해 저장하니 그 변경이 사라진다. 같은 계약 테스트를 두 구현에 돌리면 이런 차이를 잡는다.",
    anchor: "두-구현에-같은-계약-테스트를-돌린다",
  },
  {
    id: "hexagonal-architecture-3",
    post: "hexagonal-architecture",
    question: "결제사 서버가 내려가 fetch가 TypeError를 던졌다. 이 에러는 어디서 무엇으로 바꾸는 게 맞나?",
    choices: [
      "코어의 유스케이스에서 메시지가 'fetch failed'인지 검사해 재시도한다",
      "HTTP 컨트롤러에서 TypeError면 502를 돌려준다",
      "결제 어댑터에서 포트가 약속한 PaymentUnavailable로 바꾼다",
      "그대로 두고 전역 에러 핸들러에 맡긴다",
    ],
    answer: 2,
    explanation:
      "전송 실패는 결제 어댑터가 포트의 말로 번역해야 한다. 코어나 컨트롤러가 라이브러리의 에러 메시지에 기대면, 어댑터를 gRPC 같은 다른 구현으로 바꾸는 순간 그 판단이 조용히 깨진다.",
    anchor: "바깥의-실패를-포트의-말로-바꾼다",
  },
  {
    id: "hexagonal-architecture-4",
    post: "hexagonal-architecture",
    question: "코어가 DB를 모르는데 주문 저장과 재고 차감을 한 트랜잭션으로 묶고 싶다. 알맞은 방법은?",
    choices: [
      "유스케이스에서 pool.connect()로 직접 BEGIN을 연다",
      "트랜잭션을 유닛 오브 워크 같은 나가는 포트로 두고 어댑터가 BEGIN/COMMIT을 맡게 한다",
      "두 저장소가 각자 트랜잭션을 열게 한다",
      "결제 호출까지 같은 트랜잭션 안에 넣어 한 번에 커밋한다",
    ],
    answer: 1,
    explanation:
      "유스케이스는 어디까지가 한 단위인지만 정하고, 같은 커넥션을 공유하는 일은 어댑터가 한다. 결제 같은 느린 외부 호출을 트랜잭션 안에 넣으면 그동안 커넥션과 잠금을 붙잡게 된다.",
    anchor: "트랜잭션은-어느-쪽-일인가",
  },
  {
    id: "hexagonal-architecture-5",
    post: "hexagonal-architecture",
    question: "컨트롤러에서 'VIP면 배송비 무료'를 계산했더니 생기는 문제는?",
    choices: [
      "같은 유스케이스를 CLI나 컨슈머로 부르면 그 규칙이 빠진다",
      "응답 속도가 느려진다",
      "DB 트랜잭션이 길어진다",
      "포트의 개수가 늘어난다",
    ],
    answer: 0,
    explanation:
      "들어오는 어댑터는 요청 모양을 바꾸는 일만 하고, 판단은 코어에서 해야 한다. 규칙이 HTTP 어댑터에만 있으면 다른 입구로 들어온 주문은 그 규칙을 거치지 않는다.",
    anchor: "포트가-새는-모습들",
  },
  {
    id: "hexagonal-architecture-6",
    post: "hexagonal-architecture",
    question: "유스케이스 안에서 crypto.randomUUID()로 주문 ID를 바로 만들지 않고 IdGenerator 포트로 받은 이유는?",
    choices: [
      "무작위도 바깥 세계라서, 테스트에서 ID를 정해 두고 결과를 단정하려고",
      "UUID가 너무 길어서",
      "DB가 ID를 만들어야 해서",
      "성능이 더 좋아서",
    ],
    answer: 0,
    explanation:
      "시간과 무작위는 코어 밖의 세계다. 포트로 받아 두면 테스트에서 'o1' 같은 고정 값을 넣어 결과를 그대로 비교할 수 있다.",
    anchor: "포트가-새는-모습들",
  },
  {
    id: "hexagonal-architecture-7",
    post: "hexagonal-architecture",
    question: "헥사고날 아키텍처를 쓰지 않는 편이 나은 경우는?",
    choices: [
      "결제사, 배송사처럼 바꿔 끼울 외부 시스템이 많을 때",
      "같은 규칙을 HTTP, 메시지 컨슈머, 배치가 함께 쓸 때",
      "업무 규칙이 거의 없고 요청을 테이블에 넣고 돌려주는 CRUD일 때",
      "업무 규칙이 복잡해 빠른 테스트가 많이 필요할 때",
    ],
    answer: 2,
    explanation:
      "규칙이 적은 CRUD에서는 같은 필드를 여러 모델로 옮겨 적는 비용만 남는다. 이럴 때는 레이어드 구조로 충분하고, 필요한 외부 의존만 포트로 빼는 부분 적용을 고려한다.",
    anchor: "이-구조가-값을-하는-곳-아닌-곳",
  },
];
