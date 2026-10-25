import type { QuizQuestion } from "../types";

export const SPRING_TRANSACTIONAL_PROPAGATION: QuizQuestion[] = [
  {
    id: "spring-transactional-propagation-1",
    post: "spring-transactional-propagation",
    question:
      "@Transactional 메서드 안에서 다른 빈의 @Transactional(REQUIRED) 메서드를 부르고, 그 메서드가 던진 런타임 예외를 잡아 넘겼다. 메서드가 끝날 때 무슨 일이 생기나?",
    choices: [
      "예외를 잡았으니 정상 커밋된다",
      "안쪽 메서드의 작업만 롤백되고 바깥 작업은 커밋된다",
      "롤백 표시가 붙은 트랜잭션이라 롤백되고 UnexpectedRollbackException이 난다",
      "안쪽 메서드가 별도 트랜잭션으로 이미 롤백했으니 바깥은 영향이 없다",
    ],
    answer: 2,
    explanation:
      "REQUIRED로 참여한 안쪽은 물리 트랜잭션이 하나뿐이라 따로 롤백하지 못하고 rollback-only 표시만 남긴다. 바깥이 커밋을 요청해도 표시 때문에 롤백되고, 커밋을 원했던 호출자에게 UnexpectedRollbackException이 던져진다. 안쪽만 무르는 건 NESTED나 REQUIRES_NEW의 동작이다.",
    anchor: "전파-이미-열린-트랜잭션을-만나면",
  },
  {
    id: "spring-transactional-propagation-2",
    post: "spring-transactional-propagation",
    question:
      "주문 저장 중 REQUIRES_NEW 감사 로그를 남기고, 그 뒤 결제 실패로 바깥이 롤백됐다. 결과는?",
    choices: [
      "주문도 감사 로그도 모두 롤백된다",
      "주문은 롤백되고 감사 로그는 남는다",
      "주문은 남고 감사 로그만 롤백된다",
      "감사 로그가 바깥 커넥션을 쓰므로 둘 다 남는다",
    ],
    answer: 1,
    explanation:
      "REQUIRES_NEW는 바깥 트랜잭션을 떼어 보관하고 새 커넥션으로 독립 트랜잭션을 열어 커밋한다. 바깥이 나중에 롤백돼도 이미 커밋된 감사 로그는 남는다. 대신 한 요청이 커넥션을 두 개 쥐므로 풀 크기를 함께 따져야 한다.",
    anchor: "전파-이미-열린-트랜잭션을-만나면",
  },
  {
    id: "spring-transactional-propagation-3",
    post: "spring-transactional-propagation",
    question:
      "Exception을 상속한 PaymentDeclined를 @Transactional 메서드에서 던졌더니 주문 행이 DB에 남았다. 왜인가?",
    choices: [
      "예외가 메서드 밖으로 나가기 전에 flush가 끝났기 때문에",
      "PaymentDeclined가 @ResponseStatus를 갖지 않았기 때문에",
      "체크 예외는 프록시를 지나지 못해 트랜잭션이 열리지 않았기 때문에",
      "스프링의 기본 롤백 규칙은 RuntimeException과 Error에서만 롤백하고 체크 예외는 커밋하기 때문에",
    ],
    answer: 3,
    explanation:
      "기본값은 런타임 예외와 Error만 롤백하고 체크 예외는 업무 결과로 보고 커밋한다. 체크 예외에서도 롤백하려면 rollbackFor = Exception.class를 주거나 Spring 6.2부터 생긴 RollbackOn.ALL_EXCEPTIONS 전역 설정을 쓴다.",
    anchor: "체크-예외는-롤백하지-않는다",
  },
  {
    id: "spring-transactional-propagation-4",
    post: "spring-transactional-propagation",
    question:
      "JPA와 Hibernate를 쓰는 앱에서 안쪽 메서드를 Propagation.NESTED로 바꿨다. 어떻게 되나?",
    choices: [
      "기본으로 중첩이 막혀 있고, 허용해도 JpaDialect가 세이브포인트를 지원하지 않는다며 예외가 난다",
      "REQUIRES_NEW와 똑같이 동작한다",
      "세이브포인트가 만들어져 안쪽만 부분 롤백된다",
      "경고만 찍히고 REQUIRED로 동작한다",
    ],
    answer: 0,
    explanation:
      "JpaTransactionManager는 기본으로 nestedTransactionAllowed가 꺼져 있어 NestedTransactionNotSupportedException이 난다. 켜도 HibernateJpaDialect가 세이브포인트를 지원하지 않는다는 예외가 났다. NESTED는 JDBC를 직접 쓰는 트랜잭션 매니저에서 쓴다.",
    anchor: "전파-이미-열린-트랜잭션을-만나면",
  },
  {
    id: "spring-transactional-propagation-5",
    post: "spring-transactional-propagation",
    question:
      "readOnly = true 트랜잭션 안에서 조회한 엔티티의 필드를 바꿨다. JPA와 Hibernate 조합에서 어떤 일이 생기나?",
    choices: [
      "readOnly는 힌트일 뿐이라 평소처럼 UPDATE가 나간다",
      "UPDATE는 나가지만 DB가 읽기 전용 복제본이라 무시된다",
      "필드를 바꾸는 순간 IllegalStateException이 난다",
      "flush 모드가 MANUAL이라 더티 체킹으로 인한 UPDATE가 나가지 않는다",
    ],
    answer: 3,
    explanation:
      "스프링은 읽기 전용 트랜잭션에서 Hibernate 세션의 flush 모드를 MANUAL로 바꾸고 세션을 읽기 전용으로 둔다. 실험에서도 UPDATE가 나가지 않았고 값은 그대로였다. 에러 없이 조용히 무시되니, 클래스에 readOnly를 붙였다면 쓰기 메서드에 @Transactional을 다시 붙이는 걸 잊지 않는다.",
    anchor: "readonly가-실제로-하는-일",
  },
  {
    id: "spring-transactional-propagation-6",
    post: "spring-transactional-propagation",
    question:
      "트랜잭션 안에서 1초 걸리는 외부 결제 API를 부른다. 커넥션 풀이 2개일 때 동시에 세 요청이 오면 세 번째 요청은 어떻게 되나?",
    choices: [
      "DB가 바빠서 쿼리가 느리게 실행된다",
      "트랜잭션 timeout 설정이 외부 호출을 끊어 세 요청 모두 성공한다",
      "앞의 두 요청이 결제사를 기다리며 커넥션을 쥐고 있어서 커넥션을 받지 못하고 타임아웃된다",
      "HikariCP가 커넥션을 임시로 하나 더 만들어 준다",
    ],
    answer: 2,
    explanation:
      "트랜잭션은 끝날 때까지 커넥션을 쥐므로 외부 API를 기다리는 동안 다른 요청이 그 커넥션을 쓸 수 없다. 실험에서 세 번째 요청은 DB가 한가한데도 Connection is not available로 실패했다. 외부 호출은 트랜잭션 밖으로 빼고 앞뒤를 짧은 트랜잭션으로 나눈다.",
    anchor: "트랜잭션-안에서-외부-api를-부르면",
  },
  {
    id: "spring-transactional-propagation-7",
    post: "spring-transactional-propagation",
    question:
      "@TransactionalEventListener(기본 AFTER_COMMIT) 안에서 리포지토리로 저장했는데 DB에 남지 않는다. 가장 알맞은 해결책은?",
    choices: [
      "리스너에 @Transactional을 기본값으로 붙인다",
      "리스너에 @Transactional(propagation = REQUIRES_NEW)를 붙여 새 트랜잭션을 연다",
      "phase를 BEFORE_COMMIT로 바꾸면 롤백돼도 저장이 남는다",
      "리스너에서 em.flush()만 부르면 커밋된다",
    ],
    answer: 1,
    explanation:
      "AFTER_COMMIT 시점에는 커밋이 끝난 트랜잭션 자원이 아직 스레드에 묶여 있어서, REQUIRED 저장이 그 끝난 트랜잭션에 참여하고 다시 커밋되지 않는다. REQUIRES_NEW로 새 트랜잭션을 열면 저장된다. 기본 @Transactional을 붙이면 Spring 6.1부터 시작할 때 오류로 막는다.",
    anchor: "커밋된-뒤에-할-일-transactionaleventlistener",
  },
];
