import type { QuizQuestion } from "../types";

export const SPRING_IOC_DI: QuizQuestion[] = [
  {
    id: "spring-ioc-di-1",
    post: "spring-ioc-di",
    question:
      "@Transactional이 붙은 save()를 같은 클래스의 placeAll()이 this.save()로 부르면 트랜잭션이 열리지 않는다. 왜인가?",
    choices: [
      "@Transactional은 public이 아닌 메서드에서 부르면 무시되기 때문에",
      "트랜잭션은 프록시가 호출을 가로챌 때 열리는데, this는 프록시가 아니라 원본 객체이기 때문에",
      "한 요청 안에서는 트랜잭션을 하나만 열 수 있기 때문에",
      "placeAll()이 먼저 트랜잭션을 열어서 save()의 설정이 덮였기 때문에",
    ],
    answer: 1,
    explanation:
      "컨테이너가 주입하는 건 원본을 감싼 CGLIB 프록시이고, 트랜잭션은 그 프록시를 지나는 바깥 호출에서만 열린다. 원본 안의 this.save()는 프록시를 다시 지나지 않는다. placeAll()에는 어노테이션이 없어서 트랜잭션을 열지도 않았다.",
    anchor: "transactional이-붙은-건-프록시였다",
  },
  {
    id: "spring-ioc-di-2",
    post: "spring-ioc-di",
    question:
      "OrderService와 CouponService가 서로를 생성자로 주입받는다. spring.main.allow-circular-references=true를 켜면 어떻게 되나?",
    choices: [
      "이른 참조로 고리를 풀어 정상적으로 시작한다",
      "둘 중 하나를 프록시로 바꿔 넣고 시작한다",
      "그래도 고리를 풀 수 없다며 시작에 실패한다",
      "경고만 남기고 한쪽 의존성을 null로 넣는다",
    ],
    answer: 2,
    explanation:
      "이 설정은 필드·setter 주입끼리의 고리를 덜 만든 객체의 이른 참조로 풀던 예전 동작을 되살릴 뿐이다. 생성자 주입은 넘길 객체 자체가 없어서 이른 참조를 만들 수 없고, 실제로도 \"could not be broken\" 메시지와 함께 실패한다. 프록시로 끊으려면 @Lazy를 직접 붙여야 한다.",
    anchor: "서로를-생성자로-원하면-시작하지-않는다",
  },
  {
    id: "spring-ioc-di-3",
    post: "spring-ioc-di",
    question:
      "싱글턴 빈 Checkout이 프로토타입 빈 Cart를 생성자로 주입받았다. checkout의 cart를 여러 번 꺼내면?",
    choices: [
      "Checkout이 만들어질 때 주입된 같은 Cart가 계속 나온다",
      "꺼낼 때마다 새 Cart가 만들어진다",
      "요청마다 새 Cart가 만들어진다",
      "프로토타입은 싱글턴에 주입할 수 없어 시작에 실패한다",
    ],
    answer: 0,
    explanation:
      "생성자 주입은 싱글턴이 만들어질 때 한 번만 일어나니 프로토타입이라도 그 하나가 계속 쓰인다. 매번 새 객체가 필요하면 ObjectProvider로 꺼낼 때마다 받거나 @Lookup, 스코프 프록시를 쓴다.",
    anchor: "싱글턴-안에-넣은-프로토타입은-한-번만-만들어진다",
  },
  {
    id: "spring-ioc-di-4",
    post: "spring-ioc-di",
    question: "@Service가 붙은 final 클래스에 @Transactional 메서드를 두면 어떻게 되나?",
    choices: [
      "트랜잭션 없이 조용히 동작한다",
      "JDK 동적 프록시로 대신 감싸서 정상 동작한다",
      "첫 호출 때 IllegalStateException이 난다",
      "CGLIB이 하위 클래스를 만들 수 없어 애플리케이션 시작에 실패한다",
    ],
    answer: 3,
    explanation:
      "CGLIB 프록시는 클래스를 상속해서 만드는데 final 클래스는 상속할 수 없다. 그래서 \"Cannot subclass final class\"로 시작이 멈춘다. 오히려 조용히 트랜잭션이 빠지는 쪽은 final 메서드다.",
    anchor: "transactional이-붙은-건-프록시였다",
  },
  {
    id: "spring-ioc-di-5",
    post: "spring-ioc-di",
    question: "필드 주입(@Autowired private 필드) 대신 생성자 주입을 권하는 이유로 가장 알맞은 것은?",
    choices: [
      "필드 주입은 Spring Boot 4에서 지원이 끊겼기 때문에",
      "컨테이너 없이 new로 만들 때도 의존성을 빠뜨릴 수 없고 final로 둘 수 있기 때문에",
      "생성자 주입을 쓰면 순환 참조가 자동으로 풀리기 때문에",
      "생성자 주입이 실행 속도가 더 빠르기 때문에",
    ],
    answer: 1,
    explanation:
      "필드 주입 클래스를 테스트에서 new로 만들면 필드가 null이라 NullPointerException이 난다. 생성자 주입은 의존성 없이는 객체를 만들 수 없고 final 필드로 둘 수 있다. 순환 참조는 오히려 생성자 주입에서 확실히 실패해 일찍 드러난다.",
    anchor: "주입-방식은-생성자로-고른다",
  },
  {
    id: "spring-ioc-di-6",
    post: "spring-ioc-di",
    question: "시작할 때 DB에 기본 데이터를 넣는 @Transactional 메서드를 어디서 부르는 게 안전한가?",
    choices: [
      "생성자 안에서",
      "@PostConstruct 메서드 안에서",
      "ApplicationReadyEvent 리스너나 ApplicationRunner에서",
      "@PreDestroy 메서드 안에서",
    ],
    answer: 2,
    explanation:
      "@PostConstruct는 후처리기가 프록시로 감싸기 전 원본 객체에서 불려서 그 안의 호출에는 트랜잭션이 걸리지 않는다. 모든 빈과 프록시가 준비된 뒤인 ApplicationReadyEvent나 ApplicationRunner에서 부르면 트랜잭션이 정상으로 열린다.",
    anchor: "빈이-태어나서-치워지기까지",
  },
];
