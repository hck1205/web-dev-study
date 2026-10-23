import type { QuizQuestion } from "../types";

export const JPA_ENTITY_RELATIONSHIPS: QuizQuestion[] = [
  {
    id: "jpa-entity-relationships-1",
    post: "jpa-entity-relationships",
    question:
      "Team.members는 mappedBy = \"team\"이다. team.members.add(member)만 하고 member.team은 설정하지 않았다. DB의 member.team_id는?",
    choices: [
      "팀의 id가 들어간다. 양쪽 어디든 설정하면 반영된다",
      "null이다. mappedBy 쪽은 거울이라 외래 키에 반영되지 않는다",
      "INSERT가 실패한다. 양방향은 양쪽을 다 설정해야 한다",
      "flush할 때 Hibernate가 member.team을 자동으로 채운다",
    ],
    answer: 1,
    explanation:
      "외래 키는 member 테이블에 있고, 그 값을 관리하는 주인은 Member.team이다. mappedBy가 붙은 Team.members는 읽기 전용 거울이라 여기에 넣어도 SQL에 반영되지 않는다. 실험에서도 에러 없이 team_id가 null로 저장됐다.",
    anchor: "외래-키는-한쪽-테이블에만-있다",
  },
  {
    id: "jpa-entity-relationships-2",
    post: "jpa-entity-relationships",
    question:
      "member.team만 설정해 저장하고 flush한 뒤, 같은 트랜잭션에서 em.find(Team.class, id).members.size()를 보면 0이다. 왜인가?",
    choices: [
      "flush가 실제로는 INSERT를 보내지 않았기 때문에",
      "외래 키가 커밋 전에는 조인에 쓰이지 않기 때문에",
      "지연 로딩이라 size()가 항상 0을 돌려주기 때문에",
      "find가 1차 캐시의 Team 객체를 그대로 돌려주고, 그 객체의 목록에는 아무도 넣지 않았기 때문에",
    ],
    answer: 3,
    explanation:
      "DB의 외래 키는 맞게 들어갔지만, 같은 트랜잭션 안에서는 이미 영속 상태인 Team 객체가 1차 캐시에서 그대로 나온다. JPA는 메모리의 거울을 대신 고쳐 주지 않는다. 그래서 편의 메서드로 양쪽을 함께 맞춘다.",
    anchor: "mappedby-쪽은-거울이다",
  },
  {
    id: "jpa-entity-relationships-3",
    post: "jpa-entity-relationships",
    question:
      "cascade = ALL만 있고 orphanRemoval은 없는 일대다 양방향에서, 부모의 목록에서 자식 하나를 remove했다. 어떤 SQL이 나가나?",
    choices: [
      "자식의 DELETE가 나간다",
      "자식의 외래 키를 null로 바꾸는 UPDATE가 나간다",
      "아무 SQL도 나가지 않는다",
      "부모까지 DELETE된다",
    ],
    answer: 2,
    explanation:
      "cascade는 부모에게 한 persist나 remove를 자식에게 전할 뿐이고, 목록에서 빼는 건 부모에게 한 동작이 아니다. 목록은 mappedBy 거울이라 외래 키도 바뀌지 않는다. 실험에서도 SQL 없이 자식이 그대로 남았고, orphanRemoval을 켠 쪽만 DELETE가 나갔다.",
    anchor: "cascade와-orphanremoval은-다른-질문에-답한다",
  },
  {
    id: "jpa-entity-relationships-4",
    post: "jpa-entity-relationships",
    question:
      "@OneToMany @JoinColumn(name = \"shop_id\")으로 일대다 단방향을 만들고 상품 둘을 추가했다. INSERT 외에 무엇이 더 나가나?",
    choices: [
      "상품마다 shop_id를 채우는 UPDATE",
      "조인 테이블 INSERT 두 줄",
      "가게의 UPDATE 한 줄",
      "추가 SQL은 없다",
    ],
    answer: 0,
    explanation:
      "외래 키는 item 테이블에 있는데 그 값을 관리하는 건 Shop 엔티티다. Item을 INSERT할 때는 shop_id를 모르니 비워 두고, Shop의 목록을 처리하면서 UPDATE로 채운다. 그래서 다대일 단방향이나 양방향을 권한다.",
    anchor: "일대다-단방향은-update를-더-보낸다",
  },
  {
    id: "jpa-entity-relationships-5",
    post: "jpa-entity-relationships",
    question:
      "List로 선언한 @ManyToMany에서 수업 셋 중 하나를 뺐다. Hibernate가 조인 테이블에 보내는 SQL은?",
    choices: [
      "빠진 행 하나만 DELETE한다",
      "수업 테이블의 행을 DELETE한다",
      "아무것도 하지 않는다. 다대다는 양쪽을 다 바꿔야 한다",
      "그 학생의 조인 행을 전부 DELETE하고 남은 둘을 다시 INSERT한다",
    ],
    answer: 3,
    explanation:
      "List로 둔 다대다는 Hibernate에서 bag이라 조인 행 하나를 집어 지울 방법이 없어 통째로 다시 쓴다. Set으로 바꾸자 빠진 행 하나만 DELETE했다. 다만 다대다는 관계에 칸을 더할 수 없어 실무에서는 중간 엔티티로 푼다.",
    anchor: "다대다는-중간-엔티티로-푼다",
  },
  {
    id: "jpa-entity-relationships-6",
    post: "jpa-entity-relationships",
    question:
      "fetch를 적지 않은 @ManyToOne Team team이 있다. select m from Member m JPQL로 회원 셋(팀이 다 다름)을 읽으면 쿼리는 몇 개 나가나?",
    choices: [
      "1개. 기본이 LAZY라 팀은 읽지 않는다",
      "4개. EAGER라 회원을 읽은 뒤 팀마다 SELECT를 더 보낸다",
      "1개. EAGER라 조인으로 함께 가져온다",
      "2개. 팀을 IN 절로 한 번에 읽는다",
    ],
    answer: 1,
    explanation:
      "ToOne의 기본은 EAGER다. find는 조인 한 번으로 가져오지만, JPQL은 회원만 읽고 나서 팀을 곧바로 채우려고 팀마다 SELECT를 보냈다. 그래서 ToOne도 LAZY로 바꾸고 필요할 때 fetch join을 쓴다.",
    anchor: "기본-fetch-전략-toone은-즉시-tomany는-지연",
  },
  {
    id: "jpa-entity-relationships-7",
    post: "jpa-entity-relationships",
    question:
      "hashCode를 생성된 id로 만든 엔티티를 persist 전에 HashSet에 넣었다. persist 뒤 set.contains(그 객체)가 false다. 이유는?",
    choices: [
      "persist가 객체를 복사해 다른 인스턴스로 바꿨기 때문에",
      "영속 엔티티는 HashSet에 넣을 수 없기 때문에",
      "persist가 id를 채우면서 hashCode가 바뀌어 HashSet이 다른 칸에서 찾기 때문에",
      "equals가 getClass로 비교해 프록시와 달라졌기 때문에",
    ],
    answer: 2,
    explanation:
      "저장 전 id가 null이라 해시는 0이었고, persist 뒤 id가 1이 되며 해시도 1이 됐다. HashSet은 객체를 0번 칸에 두었으니 1번 칸에서 찾지 못한다. 생성된 id만 있다면 hashCode를 상수로 두고 equals는 id가 있을 때만 비교한다.",
    anchor: "tostring과-equals가-연관을-따라가면",
  },
];
