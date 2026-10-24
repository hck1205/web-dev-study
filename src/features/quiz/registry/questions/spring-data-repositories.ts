import type { QuizQuestion } from "../types";

export const SPRING_DATA_REPOSITORIES: QuizQuestion[] = [
  {
    id: "spring-data-repositories-1",
    post: "spring-data-repositories",
    question: "JpaRepository를 상속한 인터페이스만 선언했는데 주입받아 쓸 수 있는 이유는?",
    choices: [
      "컴파일할 때 어노테이션 프로세서가 구현 클래스 소스를 생성해서",
      "기동 시 리포지토리 팩토리가 JDK 동적 프록시를 만들고, 그 뒤에 SimpleJpaRepository 같은 기본 구현을 두어서",
      "Hibernate가 인터페이스를 직접 구현해서",
      "스프링이 매 호출마다 메서드 이름을 리플렉션으로 해석해 SQL을 만들어서",
    ],
    answer: 1,
    explanation:
      "주입된 객체를 찍어 보면 $Proxy 클래스이고, 대상은 SimpleJpaRepository다. 공통 메서드는 기본 구현이 처리하고, 이름 규칙 메서드와 @Query는 기동 시점에 쿼리로 미리 준비된다. 호출 때마다 이름을 다시 파싱하지 않는다.",
    anchor: "인터페이스-뒤에는-프록시가-서-있다",
  },
  {
    id: "spring-data-repositories-2",
    post: "spring-data-repositories",
    question: "findByStatusAndCustmer처럼 엔티티에 없는 속성 이름(오타)이 들어간 파생 쿼리 메서드는 언제 문제가 드러나나?",
    choices: [
      "그 메서드를 처음 호출할 때",
      "DB에 SQL을 보냈을 때 문법 오류로",
      "컴파일할 때",
      "애플리케이션 기동 시점에 QueryCreationException으로 컨텍스트 생성이 멈출 때",
    ],
    answer: 3,
    explanation:
      "리포지토리 팩토리가 기동할 때 메서드 이름을 파싱해 엔티티 속성과 맞춰 보기 때문에, 없는 속성이면 Did you mean 메시지와 함께 바로 실패한다. 자바 컴파일러는 메서드 이름을 검사하지 않는다. 리포지토리 계층만 띄우는 테스트로 배포 전에 잡을 수 있다.",
    anchor: "메서드-이름이-쿼리가-된다",
  },
  {
    id: "spring-data-repositories-3",
    post: "spring-data-repositories",
    question: "크기 2로 Slice<Order>를 요청했더니 limit 바인딩 값이 3이었다. 이유는?",
    choices: [
      "다음 페이지가 있는지 알려고 하나를 더 가져와 보기 때문에",
      "Hibernate가 0부터 세서",
      "count 쿼리를 대신하기 위해 전체를 가져오는 첫 단계라서",
      "정렬 기준 행을 하나 더 읽어야 해서",
    ],
    answer: 0,
    explanation:
      "Slice는 count 쿼리를 보내지 않는 대신 요청한 크기보다 하나 더 가져와서, 그 행이 있으면 hasNext를 true로 두고 화면에는 요청한 개수만 돌려준다. Page는 내용 쿼리 뒤에 count 쿼리를 따로 보낸다. 큰 테이블에서 count가 느릴 때 Slice가 유리하다.",
    anchor: "page와-slice는-count-쿼리-하나-차이다",
  },
  {
    id: "spring-data-repositories-4",
    post: "spring-data-repositories",
    question: "파생 메서드 deleteByStatus로 10만 건을 지우는 배치가 매우 느리다. SQL 로그에서 보일 모양과 대안은?",
    choices: [
      "DELETE 한 번이 나가지만 인덱스가 없다 → 인덱스를 만든다",
      "SELECT로 전부 읽은 뒤 delete ... where id=?가 행 수만큼 나간다 → @Modifying 벌크 쿼리로 바꾼다",
      "count 쿼리가 먼저 나간다 → Slice로 바꾼다",
      "트랜잭션이 행마다 새로 열린다 → @Transactional을 뺀다",
    ],
    answer: 1,
    explanation:
      "deleteBy는 콜백과 cascade를 지키려고 맞는 엔티티를 다 읽은 뒤 하나씩 지운다. @Modifying JPQL은 DELETE 한 번으로 끝나지만 영속성 컨텍스트를 거치지 않으니, 이어서 읽을 거면 clearAutomatically를 켠다.",
    anchor: "이름이-문장이-되면-query로-옮긴다",
  },
  {
    id: "spring-data-repositories-5",
    post: "spring-data-repositories",
    question: "getCustomer()와 getAmount()만 있는 인터페이스를 반환 타입으로 쓴 findByCustomer가 나은 점은?",
    choices: [
      "결과가 1차 캐시에 올라가 다음 조회가 빨라진다",
      "SpEL로 계산한 값도 열을 줄여 읽는다",
      "자동으로 Slice 페이징이 적용된다",
      "두 열만 SELECT하고 엔티티로 올라가지 않아 읽는 양과 영속성 컨텍스트 비용이 줄어든다",
    ],
    answer: 3,
    explanation:
      "닫힌 인터페이스 프로젝션은 필요한 속성의 열만 읽는다. 실제 SQL도 customer와 amount만 선택했다. SpEL을 쓰는 열린 프로젝션은 무엇이 필요한지 미리 알 수 없어 엔티티 전체를 읽는다.",
    anchor: "프로젝션-필요한-열만-읽는다",
  },
  {
    id: "spring-data-repositories-6",
    post: "spring-data-repositories",
    question: "Spring Data JDBC에서 주문 줄 하나의 수량만 바꿔 주문을 save했더니 DELETE 후 INSERT가 나갔다. 이렇게 동작하는 이유는?",
    choices: [
      "H2 방언의 버그라서",
      "더티 체킹이 줄 단위로 바뀐 것을 찾았기 때문에",
      "변경을 추적하는 영속성 컨텍스트가 없어서, 애그리거트 루트를 저장하면 딸린 엔티티를 통째로 갈아 끼우기 때문에",
      "OrderLine에 @Id가 없어 매번 새 테이블을 만들어서",
    ],
    answer: 2,
    explanation:
      "Spring Data JDBC는 1차 캐시와 더티 체킹이 없어서 무엇이 바뀌었는지 모른다. 그래서 루트를 UPDATE하고 딸린 줄은 전부 지우고 다시 넣는 가장 단순하고 올바른 방법을 쓴다. 딸린 것이 수천 개라면 애그리거트 경계를 다시 보라는 신호다.",
    anchor: "spring-data-jdbc-같은-인터페이스-다른-철학",
  },
  {
    id: "spring-data-repositories-7",
    post: "spring-data-repositories",
    question: "Spring Data MongoDB에서 @Transactional을 붙였는데 여러 문서 쓰기가 하나로 묶이지 않는다. 확인할 것은?",
    choices: [
      "MongoDB가 레플리카 셋으로 떠 있는지, MongoTransactionManager 빈을 직접 등록했는지",
      "파생 쿼리 이름에 Transactional을 넣었는지",
      "@DBRef를 썼는지",
      "Page 대신 Slice를 썼는지",
    ],
    answer: 0,
    explanation:
      "MongoDB의 여러 문서 트랜잭션은 레플리카 셋이나 샤드 클러스터에서만 되고, 스프링 부트는 MongoTransactionManager를 자동 등록하지 않는다. 둘 다 갖춰야 @Transactional이 몽고 작업을 묶는다. 애그리거트를 문서 하나에 담으면 단일 문서 쓰기는 원자적이다.",
    anchor: "spring-data-mongodb-같은-이름-문서-쿼리",
  },
];
