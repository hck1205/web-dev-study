import type { QuizQuestion } from "../types";

export const SPRING_BOOT_TESTING: QuizQuestion[] = [
  {
    id: "spring-boot-testing-1",
    post: "spring-boot-testing",
    question: "@SpringBootTest 클래스 여덟 개가 각자 다른 조합으로 @MockitoBean을 선언했다. 컨텍스트는 몇 번 뜨고, 왜 그런가?",
    choices: [
      "여덟 번, 목으로 바꿀 빈 집합이 캐시 키에 들어가기 때문이다",
      "한 번, 목은 컨텍스트와 무관한 테스트 객체이기 때문이다",
      "한 번, 같은 @SpringBootApplication을 쓰기 때문이다",
      "여덟 번, @MockitoBean은 항상 @DirtiesContext를 함께 적용하기 때문이다"
    ],
    answer: 0,
    explanation: "@MockitoBean은 컨텍스트의 빈을 바꾸는 설정이라 MergedContextConfiguration 키에 들어간다. 조합이 다르면 키가 달라 새로 뜬다. 실험에서 부모 클래스로 목을 모으자 한 번만 떴다.",
    anchor: "클래스-여덟-개에-컨텍스트-여덟-개"
  },
  {
    id: "spring-boot-testing-2",
    post: "spring-boot-testing",
    question: "다음 중 테스트 컨텍스트 캐시 키에 들어가지 않는 것은?",
    choices: [
      "@ActiveProfiles로 고른 프로필",
      "@TestPropertySource로 준 속성",
      "목 객체에 given(...)으로 정한 동작",
      "@SpringBootTest의 webEnvironment"
    ],
    answer: 2,
    explanation: "목의 동작은 테스트가 끝날 때마다 리셋되고 키에 들어가지 않는다. 그래서 같은 목 집합을 쓰는 클래스끼리는 컨텍스트를 나눠 쓴다. 프로필, 속성, 웹 환경은 모두 키를 바꾼다.",
    anchor: "컨텍스트-캐시는-무엇을-키로-삼나"
  },
  {
    id: "spring-boot-testing-3",
    post: "spring-boot-testing",
    question: "@WebMvcTest(OrderController.class)에서 OrderService를 @MockitoBean으로 채우지 않으면 어떻게 되나?",
    choices: [
      "슬라이스가 OrderService를 자동으로 스캔해 진짜 빈을 넣는다",
      "컨트롤러를 만들 의존성이 없어 컨텍스트 시작부터 실패한다",
      "컨트롤러 메서드가 호출될 때만 NullPointerException이 난다",
      "Boot가 빈 목을 자동으로 만들어 넣는다"
    ],
    answer: 1,
    explanation: "@WebMvcTest는 웹 층만 올리고 서비스와 저장소는 스캔하지 않는다. 컨트롤러 생성자에 넣을 빈이 없으니 시작 단계에서 실패한다. 실험에서도 슬라이스 안에 저장소와 PaymentClient가 0개였다.",
    anchor: "필요한-층만-띄우는-슬라이스"
  },
  {
    id: "spring-boot-testing-4",
    post: "spring-boot-testing",
    question: "RANDOM_PORT 테스트에 @Transactional을 붙이고 POST /orders로 주문을 만들었다. 테스트가 끝난 뒤 그 주문은?",
    choices: [
      "테스트 트랜잭션이 롤백되면서 함께 지워진다",
      "커밋 전이라 다른 테스트에는 보이지 않는다",
      "H2라서 자동으로 지워진다",
      "서버가 톰캣 스레드에서 자기 트랜잭션으로 커밋해서 남는다"
    ],
    answer: 3,
    explanation: "진짜 HTTP 요청은 톰캣 스레드에서 처리되고, 서비스의 @Transactional이 그 스레드에서 커밋한다. 테스트 스레드의 롤백은 자기가 넣은 것만 되돌린다. 실험에서 다음 테스트의 countBySku가 1이었다.",
    anchor: "테스트-트랜잭션이-되돌리지-못하는-것"
  },
  {
    id: "spring-boot-testing-5",
    post: "spring-boot-testing",
    question: "MockMvc 테스트에 @Transactional을 붙이면 같은 스레드라 롤백은 된다. 이때 놓치기 쉬운 것은?",
    choices: [
      "컨트롤러의 상태 코드",
      "JSON 직렬화 결과",
      "커밋 시점의 제약 위반과 AFTER_COMMIT 리스너",
      "요청 본문 검증 오류"
    ],
    answer: 2,
    explanation: "서비스 트랜잭션이 테스트 트랜잭션에 합류해 커밋이 테스트 끝으로 밀리고, 결국 롤백된다. 그래서 커밋할 때 터지는 지연 제약 위반이나 @TransactionalEventListener(AFTER_COMMIT)가 한 번도 돌지 않는다. 상태 코드와 직렬화는 MockMvc로 충분히 확인된다.",
    anchor: "테스트-트랜잭션이-되돌리지-못하는-것"
  },
  {
    id: "spring-boot-testing-6",
    post: "spring-boot-testing",
    question: "여러 테스트 클래스가 @Container 정적 필드로 각자 PostgreSQL 컨테이너를 띄운다. 컨텍스트 캐시와 엮여 생길 수 있는 문제는?",
    choices: [
      "컨테이너가 테스트 클래스마다 두 번씩 뜬다",
      "클래스가 끝나며 컨테이너는 멈췄는데 캐시된 컨텍스트가 죽은 DB 주소로 재사용된다",
      "@ServiceConnection이 H2로 바꿔 버린다",
      "@DataJpaTest가 컨테이너를 무시한다"
    ],
    answer: 1,
    explanation: "@Container 정적 필드는 테스트 클래스가 끝나면 컨테이너를 멈추지만 컨텍스트는 캐시에 남는다. 공유하려면 싱글턴 컨테이너나 @Bean @ServiceConnection으로 수명을 맞춘다. 4.1.1의 기본값 NON_TEST는 @ServiceConnection 연결을 H2로 바꾸지 않는다.",
    anchor: "진짜-db는-컨테이너로-붙인다"
  },
  {
    id: "spring-boot-testing-7",
    post: "spring-boot-testing",
    question: "CI가 느려져서 Surefire forkCount를 4로 올렸는데 기대만큼 빨라지지 않았다. 이유로 가장 알맞은 것은?",
    choices: [
      "컨텍스트 캐시는 JVM 안에서만 공유되어 같은 컨텍스트가 JVM마다 다시 뜬다",
      "forkCount는 테스트 메서드를 병렬로 돌리지 않는다",
      "@MockitoBean은 포크된 JVM에서 동작하지 않는다",
      "캐시 최대 크기가 JVM 수로 나뉜다"
    ],
    answer: 0,
    explanation: "캐시는 JVM 하나 안에서만 공유된다. JVM을 넷 띄우면 같은 컨텍스트도 최대 네 번 뜬다. 병렬화 전에 캐시 키를 줄이는 게 먼저다.",
    anchor: "컨텍스트-캐시는-무엇을-키로-삼나"
  }
];
