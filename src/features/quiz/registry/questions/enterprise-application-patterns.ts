import type { QuizQuestion } from "../types";

export const ENTERPRISE_APPLICATION_PATTERNS: QuizQuestion[] = [
  {
    id: "enterprise-application-patterns-1",
    post: "enterprise-application-patterns",
    question:
      "취소와 반품 API에 같은 환불 계산이 각자 들어 있어 한쪽만 고쳐진 버그가 났다. 다른 신호는 없고 규칙도 이것 하나뿐이라면 가장 알맞은 첫 조치는?",
    choices: [
      "모든 서비스를 도메인 모델과 데이터 매퍼로 다시 짠다",
      "복사된 계산을 공용 함수나 그 규칙을 가진 객체로 한 곳에 모은다",
      "ORM을 액티브 레코드 방식으로 바꾼다",
      "두 API를 하나의 엔드포인트로 합친다",
    ],
    answer: 1,
    explanation:
      "트랜잭션 스크립트 자체는 나쁘지 않고, 문제는 규칙이 복사된 것이다. 복사된 계산 하나라면 한 곳에 모으는 것으로 충분하고, 상태 검사가 흩어지거나 DB 없이 테스트하기 어려운 신호가 함께 보일 때 도메인 모델로 옮긴다.",
    anchor: "트랜잭션-스크립트로-충분한-동안",
  },
  {
    id: "enterprise-application-patterns-2",
    post: "enterprise-application-patterns",
    question: "객체 구조가 테이블과 점점 달라지고 DB 없이 규칙을 테스트하고 싶어졌다. 액티브 레코드 대신 데이터 매퍼가 맞는 이유는?",
    choices: [
      "데이터 매퍼가 항상 쿼리 수가 더 적어서",
      "액티브 레코드는 트랜잭션을 지원하지 않아서",
      "매퍼가 행과 객체 사이 변환을 맡아 객체가 저장 방식을 몰라도 되기 때문에",
      "데이터 매퍼는 아이덴티티 맵이 필요 없어서",
    ],
    answer: 2,
    explanation:
      "액티브 레코드는 객체가 자기 행과 저장 메서드를 직접 가지므로 객체 구조가 테이블과 달라지면 매핑 코드가 객체 안에 쌓이고 테스트에 DB가 따라온다. 데이터 매퍼는 그 일을 매퍼로 떼어 내서 객체는 규칙만 안다.",
    anchor: "객체가-테이블을-아는가-모르는가",
  },
  {
    id: "enterprise-application-patterns-3",
    post: "enterprise-application-patterns",
    question: "주문 리포지토리를 update(id, patch)와 findBy(where)가 있는 제네릭 CRUD로 만들었다. 가장 큰 문제는?",
    choices: [
      "update로 상태를 직접 바꿀 수 있어 order.cancel() 같은 규칙 검사를 건너뛰는 길이 열린다",
      "제네릭 타입 때문에 TypeScript 컴파일이 느려진다",
      "리포지토리를 테스트용 Map으로 바꿔 끼울 수 없게 된다",
      "트랜잭션을 열 수 없게 된다",
    ],
    answer: 0,
    explanation:
      "패치로 필드를 바로 바꾸면 규칙을 객체에 모은 의미가 사라진다. 아무 조건이나 받는 findBy도 어떤 질문을 하는지 숨기고 인덱스 없는 조회를 퍼뜨린다. 리포지토리는 업무 질문 이름의 메서드만 연다.",
    anchor: "리포지토리는-메모리-속-컬렉션처럼-보인다",
  },
  {
    id: "enterprise-application-patterns-4",
    post: "enterprise-application-patterns",
    question: "아이덴티티 맵을 요청 사이에 공유하는 전역 맵으로 두면 어떤 일이 생기나?",
    choices: [
      "같은 행이 두 객체로 갈라진다",
      "다른 요청이나 사용자가 바꾼 값을 계속 못 보고 옛 객체를 쓰게 된다",
      "기본 키 조회에도 매번 SQL이 나간다",
      "INSERT 순서가 뒤바뀐다",
    ],
    answer: 1,
    explanation:
      "아이덴티티 맵의 목적은 쿼리를 줄이는 게 아니라 한 작업 안에서 같은 행이 객체 둘이 되지 않게 하는 것이다. 그래서 트랜잭션이나 요청 하나 동안만 살고 버린다. 요청 사이에 공유하고 만료를 두는 건 캐시의 일이다.",
    anchor: "같은-행이-두-객체가-되면",
  },
  {
    id: "enterprise-application-patterns-5",
    post: "enterprise-application-patterns",
    question: "JPA에서 @Transactional 메서드 안에서 em.find로 읽은 주문의 상태만 바꾸고 save를 부르지 않았다. 커밋하면?",
    choices: [
      "save를 부르지 않았으니 아무것도 저장되지 않는다",
      "예외가 나서 롤백된다",
      "다음 요청에서 조회할 때 저장된다",
      "플러시 때 스냅숏과 비교해 바뀐 엔티티의 UPDATE가 나간다",
    ],
    answer: 3,
    explanation:
      "영속성 컨텍스트가 작업 단위 역할을 해서, 읽을 때 떠 둔 스냅숏과 현재 값을 플러시 때 비교한다. 관리되는 엔티티는 save 없이도 커밋 때 반영된다.",
    anchor: "orm-안에서-다시-만나는-패턴들",
  },
  {
    id: "enterprise-application-patterns-6",
    post: "enterprise-application-patterns",
    question:
      "같은 트랜잭션에서 주문을 읽어 둔 뒤 @Modifying 벌크 UPDATE로 상태를 EXPIRED로 바꾸고, JPQL로 그 주문을 다시 조회했더니 옛 상태가 보인다. 이유는?",
    choices: [
      "벌크 UPDATE는 커밋 전까지 DB에 반영되지 않아서",
      "JPQL은 항상 2차 캐시만 읽어서",
      "벌크 쿼리는 영속성 컨텍스트를 거치지 않고, 다시 조회한 행의 키가 이미 맵에 있어 옛 객체가 돌아와서",
      "격리 수준이 READ UNCOMMITTED라서",
    ],
    answer: 2,
    explanation:
      "조건 조회는 SQL을 보내지만, 결과 행의 키가 아이덴티티 맵에 있으면 새 값 대신 맵의 객체를 돌려준다. 벌크 쿼리 뒤에는 clearAutomatically = true로 컨텍스트를 비우거나 벌크 쿼리를 먼저 한다.",
    anchor: "orm-안에서-다시-만나는-패턴들",
  },
  {
    id: "enterprise-application-patterns-7",
    post: "enterprise-application-patterns",
    question: "회원 가입 요청 본문을 Member 엔티티로 바로 받아 저장하고 있다. 가장 먼저 생길 수 있는 보안 문제는?",
    choices: [
      "사용자가 role 같은 필드를 끼워 보내도 그대로 저장되는 대량 할당",
      "SQL 인젝션",
      "CSRF 토큰 누락",
      "지연 로딩 때문에 N+1 쿼리가 생긴다",
    ],
    answer: 0,
    explanation:
      "엔티티에는 사용자가 바꾸면 안 되는 필드도 있어서, 요청을 엔티티로 받으면 그 필드까지 열린다. 요청 DTO에는 사용자가 보낼 수 있는 필드만 두고 엔티티는 그 값으로 메서드를 불러 바꾼다.",
    anchor: "경계를-넘는-모양은-dto로",
  },
];
