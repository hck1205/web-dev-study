import type { QuizQuestion } from "../types";

export const JPA_PERSISTENCE_CONTEXT: QuizQuestion[] = [
  {
    id: "jpa-persistence-context-1",
    post: "jpa-persistence-context",
    question:
      "트랜잭션 안에서 em.find()로 회원을 읽고 이름만 바꿨다. save()는 부르지 않았다. 커밋할 때 UPDATE가 나가는 이유는?",
    choices: [
      "Spring Data가 트랜잭션 끝에 모든 엔티티의 save()를 자동으로 부르기 때문에",
      "필드에 값을 대입하는 순간 Hibernate가 UPDATE를 바로 보내기 때문에",
      "영속 엔티티는 읽을 때 스냅숏이 저장되고, flush 때 지금 값과 비교해 달라진 것을 UPDATE하기 때문에",
      "OSIV가 켜져 있어 응답을 보낼 때 저장하기 때문에",
    ],
    answer: 2,
    explanation:
      "더티 체킹이다. 로그에서도 UPDATE는 필드를 바꾼 순간이 아니라 메서드가 끝난 뒤 커밋 직전 flush 때 나갔다. 스냅숏이 있는 영속 엔티티만 대상이라, 트랜잭션이 끝나 준영속이 된 엔티티는 고쳐도 저장되지 않는다.",
    anchor: "더티-체킹-스냅숏과-비교한다",
  },
  {
    id: "jpa-persistence-context-2",
    post: "jpa-persistence-context",
    question:
      "준영속 엔티티 detached를 em.merge(detached)로 넘긴 뒤 detached의 필드를 다시 바꿨다. 이 변경은 저장되나?",
    choices: [
      "저장된다. merge가 detached를 영속 상태로 바꿨기 때문이다",
      "저장되지 않는다. merge는 값을 복사한 새 영속 객체를 돌려주고 detached는 여전히 준영속이다",
      "저장된다. merge 이후의 변경도 자동으로 다시 병합된다",
      "merge 호출 자체가 예외를 던진다",
    ],
    answer: 1,
    explanation:
      "merge는 같은 id를 읽어 새 영속 객체를 만들고 값을 복사해 그 객체를 돌려준다. 실험에서도 merged == detached가 false였다. 그 뒤에는 돌려받은 객체를 고쳐야 저장된다.",
    anchor: "엔티티의-네-가지-상태",
  },
  {
    id: "jpa-persistence-context-3",
    post: "jpa-persistence-context",
    question:
      "이름을 park으로 바꾸고 아직 flush하지 않은 채 이름이 park인 회원 수를 세는 JPQL을 실행했다. 결과와 그 이유로 맞는 것은?",
    choices: [
      "0이다. JPQL은 영속성 컨텍스트를 보지 않고 DB의 옛값을 읽기 때문이다",
      "1이다. JPQL은 1차 캐시만 보고 DB에 가지 않기 때문이다",
      "쿼리가 예외를 던진다. flush하지 않은 변경이 있으면 JPQL을 쓸 수 없다",
      "1이다. 기본 AUTO flush 모드에서 쿼리 직전에 보내지 않은 변경을 먼저 flush하기 때문이다",
    ],
    answer: 3,
    explanation:
      "로그에서 JPQL 바로 앞에 UPDATE가 끼어들었다. 쿼리가 변경된 테이블을 건드리니 Hibernate가 먼저 flush해 결과를 맞췄다. 그래서 조회만 했는데 UPDATE가 찍히고, 그 행의 잠금이 조회 동안 유지되는 일이 생긴다.",
    anchor: "flush는-언제-일어나나",
  },
  {
    id: "jpa-persistence-context-4",
    post: "jpa-persistence-context",
    question:
      "hibernate.jdbc.batch_size=50을 켰는데도 IDENTITY 전략 엔티티의 INSERT는 묶이지 않는다. 왜인가?",
    choices: [
      "IDENTITY는 DB가 INSERT를 실행해야 id가 생기므로 persist 순간 바로 INSERT해야 하기 때문에",
      "IDENTITY 엔티티는 영속성 컨텍스트에 들어가지 않기 때문에",
      "batch_size는 UPDATE에만 적용되기 때문에",
      "H2에서만 생기는 제약이기 때문에",
    ],
    answer: 0,
    explanation:
      "영속 상태가 되려면 id가 있어야 하는데 IDENTITY는 INSERT를 실행해야 id를 받는다. 그래서 쓰기 지연과 배치를 쓸 수 없다. 시퀀스 전략은 번호를 미리 받아 두고 INSERT를 flush 때 50개씩 묶을 수 있었다.",
    anchor: "쓰기-지연과-배치",
  },
  {
    id: "jpa-persistence-context-5",
    post: "jpa-persistence-context",
    question:
      "회원을 읽어 둔 뒤 @Modifying JPQL로 모든 이름을 대문자로 바꿨다. 읽어 둔 객체의 name은 어떻게 보이나?",
    choices: [
      "KIM으로 바뀌어 있다. 벌크 쿼리가 1차 캐시도 함께 고친다",
      "kim 그대로다. 벌크 쿼리는 영속성 컨텍스트를 거치지 않고 DB로 바로 가기 때문이다",
      "null이 된다. 벌크 쿼리가 1차 캐시를 비우기 때문이다",
      "예외가 난다. 영속 엔티티가 있으면 벌크 쿼리를 쓸 수 없다",
    ],
    answer: 1,
    explanation:
      "실험에서 DB는 KIM인데 메모리 객체는 kim이었고, clear() 뒤에 다시 읽어야 KIM이 보였다. 이 상태에서 다른 필드를 고치면 모든 컬럼을 SET하는 UPDATE가 이름을 옛값으로 덮어쓸 수 있다. clearAutomatically와 flushAutomatically를 함께 쓴다.",
    anchor: "벌크-update는-영속성-컨텍스트를-모른다",
  },
  {
    id: "jpa-persistence-context-6",
    post: "jpa-persistence-context",
    question:
      "getReference()로 받은 프록시에서 필드를 직접 읽은 r.id는 null, getId()는 1이었다. 왜 이런 차이가 나나?",
    choices: [
      "getId()가 DB를 다시 조회했기 때문에",
      "id 필드는 트랜잭션이 끝나면 지워지기 때문에",
      "프록시는 메서드 호출을 가로채 진짜 객체로 넘기는 방식이라 프록시 자신의 필드는 비어 있기 때문에",
      "프록시는 엔티티를 상속하지 않아 같은 이름의 필드가 없기 때문에",
    ],
    answer: 2,
    explanation:
      "Hibernate 프록시는 엔티티를 상속한 빈 껍데기로, 메서드 호출만 가로챈다. 그래서 같은 패키지에서 필드를 직접 읽는 코드, 특히 equals에서 other.id를 읽는 코드가 null을 본다. 상대의 값은 getter로 읽는다.",
    anchor: "프록시와-lazyinitializationexception",
  },
  {
    id: "jpa-persistence-context-7",
    post: "jpa-persistence-context",
    question:
      "OSIV(spring.jpa.open-in-view)를 기본값 true로 둔 API 서버에서 생길 수 있는 문제로 가장 알맞은 것은?",
    choices: [
      "트랜잭션 안에서도 지연 로딩이 동작하지 않는다",
      "1차 캐시가 요청 사이에 공유되어 다른 사용자의 데이터가 보인다",
      "모든 조회가 읽기 전용 트랜잭션으로 바뀌어 저장이 무시된다",
      "컨트롤러나 직렬화 중 지연 로딩이 DB 커넥션을 잡아 응답이 끝날 때까지 쥐고 있을 수 있다",
    ],
    answer: 3,
    explanation:
      "OSIV는 요청 끝까지 영속성 컨텍스트를 열어 두어 트랜잭션 밖 지연 로딩을 가능하게 한다. 그 대가로 커넥션을 응답이 끝날 때까지 쥘 수 있고, 직렬화 중에 쿼리가 흩어져 나가 N+1이 숨는다. 끄면 트랜잭션 밖 지연 로딩이 LazyInitializationException으로 드러났다.",
    anchor: "osiv를-끌지-말지",
  },
];
