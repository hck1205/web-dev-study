import type { QuizQuestion } from "../types";

export const CLEAN_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "clean-architecture-1",
    post: "clean-architecture",
    question: "유스케이스가 DB에 저장하려면 바깥을 불러야 한다. 의존 규칙을 지키는 방법은?",
    choices: [
      "유스케이스가 DB 드라이버를 직접 import한다",
      "어댑터 폴더의 리포지토리 클래스를 import해서 부른다",
      "유스케이스 원 안에 게이트웨이 인터페이스를 선언하고, 바깥 어댑터가 그걸 구현해 넘겨준다",
      "엔티티에 save 메서드를 넣어 엔티티가 저장하게 한다",
    ],
    answer: 2,
    explanation:
      "실행 흐름은 바깥으로 나가지만, 인터페이스가 안쪽 원에 있으면 소스 코드 의존은 여전히 안쪽을 향한다. 어댑터의 클래스를 import하거나 드라이버를 부르면 안쪽이 바깥의 이름을 알게 된다.",
    anchor: "호출은-밖에서-안으로-갔다가-다시-밖으로",
  },
  {
    id: "clean-architecture-2",
    post: "clean-architecture",
    question: "출력 모델에 엔티티를 그대로 넣어 API 응답으로 썼다. 나중에 생길 문제로 가장 알맞은 것은?",
    choices: [
      "엔티티에 내부용 필드를 추가하면 그 필드가 응답에 섞여 나간다",
      "응답이 느려진다",
      "엔티티가 프레임워크를 import하게 된다",
      "트랜잭션이 끊긴다",
    ],
    answer: 0,
    explanation:
      "엔티티를 그대로 내보내면 화면이 엔티티 모양에 묶이고, 결제 거래 번호 같은 내부 필드가 생기는 순간 API로 새어 나간다. 출력 모델은 화면에 필요한 것만 담아 따로 둔다.",
    anchor: "원을-건너는-데이터는-그-원의-모양으로",
  },
  {
    id: "clean-architecture-3",
    post: "clean-architecture",
    question: "같은 주문을 두 번 취소했더니 409가 나왔다. 이 예제에서 '409로 바꾸는 결정'은 어디에 있나?",
    choices: [
      "엔티티의 cancel 함수",
      "유스케이스 cancelOrder",
      "DB 게이트웨이",
      "프레젠터",
    ],
    answer: 3,
    explanation:
      "엔티티는 상태가 PAID가 아니라며 거절하고, 유스케이스는 그 거절을 presenter.rejected로 넘길 뿐이다. 상태 코드를 정하는 일은 보여 주는 방식의 결정이라 프레젠터에만 둔다.",
    anchor: "프레젠터가-따로-있는-이유",
  },
  {
    id: "clean-architecture-4",
    post: "clean-architecture",
    question: "엔티티 cancel(order, now)가 안에서 new Date()를 부르지 않고 now를 인자로 받는 이유는?",
    choices: [
      "Date 객체가 무거워서",
      "시계도 바깥 세계라서, '정확히 7일째' 같은 경계값을 테스트로 고정하려고",
      "타임존 변환을 DB에 맡기려고",
      "엔티티를 비동기로 만들려고",
    ],
    answer: 1,
    explanation:
      "안에서 현재 시각을 읽으면 테스트가 실행 시각에 따라 달라진다. Clock 포트로 받은 시각을 넘기면 7일째와 7일하고 1ms를 정확히 나눠 시험할 수 있다.",
    anchor: "시간도-바깥에서-들어온다",
  },
  {
    id: "clean-architecture-5",
    post: "clean-architecture",
    question: "검사기가 application 폴더의 `import type { HttpViewModel } from \"../adapters/presenters.ts\"`를 위반으로 잡았다. 왜 타입 import도 막나?",
    choices: [
      "타입 import는 런타임에 에러를 내서",
      "타입만 가져와도 안쪽 코드가 바깥 원의 모양에 묶이기 때문에",
      "번들 크기가 커져서",
      "TypeScript가 타입 import를 지원하지 않아서",
    ],
    answer: 1,
    explanation:
      "의존 규칙은 바깥 원의 이름을 하나도 쓰지 않는 것이다. 타입이라도 어댑터의 뷰 모델을 쓰면, 어댑터가 그 타입을 바꿀 때 유스케이스가 함께 바뀐다.",
    anchor: "의존-규칙을-사람-대신-검사기가-지킨다",
  },
  {
    id: "clean-architecture-6",
    post: "clean-architecture",
    question: "클린 아키텍처가 헥사고날 아키텍처보다 더 정해 둔 것으로 맞는 것은?",
    choices: [
      "코어가 바깥을 모르게 한다는 원칙",
      "어댑터를 시작점에서 고르는 조립 방식",
      "안쪽을 엔티티와 유스케이스로 나누고, 원을 건너는 데이터와 출력 포트까지 규칙으로 그린 것",
      "테스트를 어댑터 하나로 보는 시각",
    ],
    answer: 2,
    explanation:
      "코어가 바깥을 모르게 하고 조립을 한 곳에서 하는 건 두 구조가 같다. 클린 아키텍처는 안쪽을 여러 겹으로 나누고 경계를 건너는 자료 구조와 프레젠터까지 정해 두었다.",
    anchor: "헥사고날-어니언과-나란히-놓으면",
  },
  {
    id: "clean-architecture-7",
    post: "clean-architecture",
    question: "유스케이스 대부분이 게이트웨이 메서드 하나를 부르고 결과를 그대로 넘기며, 필드 하나를 추가할 때마다 네 파일을 고친다. 알맞은 대응은?",
    choices: [
      "규칙이 있는 쓰기 쪽에만 원을 다 쓰고, 단순 조회는 어댑터가 읽기 쿼리를 바로 부르게 한다",
      "원을 하나 더 추가해 책임을 더 나눈다",
      "모든 원이 함께 쓰는 common/dto 폴더를 만든다",
      "엔티티를 ORM 엔티티로 바꿔 매핑을 없앤다",
    ],
    answer: 0,
    explanation:
      "규칙이 가벼운 곳까지 같은 틀로 찍으면 변환 비용만 남는다. 공용 DTO 폴더나 ORM 엔티티는 경계를 무너뜨리니, 원을 필요한 곳에만 쓰는 쪽이 낫다.",
    anchor: "파일이-늘어나는-값을-따져-본다",
  },
];
