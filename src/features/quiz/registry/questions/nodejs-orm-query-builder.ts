import type { QuizQuestion } from "../types";

export const NODEJS_ORM_QUERY_BUILDER: QuizQuestion[] = [
  {
    id: "nodejs-orm-query-builder-1",
    post: "nodejs-orm-query-builder",
    question:
      "pg의 pool.query(\"BEGIN\"), INSERT 세 건(동시에), pool.query(\"ROLLBACK\")을 차례로 불렀더니 롤백 뒤에도 두 건이 남았다. 왜 그런가?",
    choices: [
      "PostgreSQL은 INSERT를 롤백할 수 없기 때문이다",
      "pool.query는 부를 때마다 연결을 빌려서 INSERT와 ROLLBACK이 BEGIN과 다른 연결에서 돌았기 때문이다",
      "pg는 기본으로 트랜잭션을 무시하는 autocommit 드라이버이기 때문이다",
      "ROLLBACK은 마지막 한 건만 되돌리기 때문이다",
    ],
    answer: 1,
    explanation:
      "트랜잭션은 연결 하나에 묶인 상태다. 다른 연결로 간 INSERT는 각자 자동 커밋됐고, ROLLBACK도 엉뚱한 연결로 가서 BEGIN을 받은 연결은 idle in transaction으로 남았다. pool.connect()로 연결 하나를 빌려 끝까지 쓴다.",
    anchor: "같은-풀에서-트랜잭션을-걸면",
  },
  {
    id: "nodejs-orm-query-builder-2",
    post: "nodejs-orm-query-builder",
    question:
      "pg로 select count(*) as orders ...를 했더니 rows[0].orders + 1이 \"11\"이 됐다. 원인과 대응으로 맞는 것은?",
    choices: [
      "count가 bigint라 pg가 문자열로 준다. 범위가 안전하면 ::int로 캐스팅하거나 타입 파서를 바꾼다",
      "pg가 모든 숫자를 문자열로 주므로 Number()로 감싸는 수밖에 없다",
      "count(*)는 텍스트 타입을 돌려주는 PostgreSQL 함수이기 때문이다",
      "자리표시자 $1을 써서 값이 문자열로 바뀌었기 때문이다",
    ],
    answer: 0,
    explanation:
      "bigint는 2^63까지라 2^53까지만 정확한 number로 바꾸면 정밀도를 잃을 수 있다. 그래서 pg는 기본으로 문자열을 준다. int 컬럼은 숫자로 왔으니 모든 숫자가 문자열인 건 아니다.",
    anchor: "드라이버-sql을-내가-쓴다",
  },
  {
    id: "nodejs-orm-query-builder-3",
    post: "nodejs-orm-query-builder",
    question:
      "Prisma로 include를 써서 사용자와 주문을 함께 가져왔더니 쿼리 로그에 SQL이 두 개 찍혔다. 이 동작에서 주의할 점은?",
    choices: [
      "사용자마다 쿼리가 한 번씩 나가는 N+1이 생긴다",
      "두 쿼리가 서로 다른 트랜잭션이라 결과가 항상 어긋난다",
      "JOIN 하나라고 짐작하기 쉽지만, 사용자 수만큼 값이 든 IN 목록이 두 번째 쿼리에 들어가 커질 수 있다",
      "Prisma가 결과를 캐시해서 두 번째 호출부터는 쿼리가 나가지 않는다",
    ],
    answer: 2,
    explanation:
      "이 버전의 Prisma는 관계를 기본으로 따로 묻고 IN으로 모아 가져와 메모리에서 붙인다. 사용자마다 따로 묻는 N+1은 아니지만 사용자가 많으면 IN 목록이 거대해진다. 그래서 ORM을 쓸 때는 쿼리 로그를 켜서 실제 SQL을 본다.",
    anchor: "orm-객체를-말하면-sql이-나온다",
  },
  {
    id: "nodejs-orm-query-builder-4",
    post: "nodejs-orm-query-builder",
    question:
      "Prisma $transaction 콜백 안에서 외부 결제 API를 6초 기다렸더니 P2028이 났다. 가장 먼저 의심할 것은?",
    choices: [
      "DB 연결 풀 크기가 너무 작다",
      "트랜잭션 안에서 네트워크를 기다리는 설계 자체. 그동안 연결과 잠금이 묶이고 기본 한도 5초를 넘긴다",
      "BigInt 직렬화 문제로 트랜잭션이 깨졌다",
      "Prisma가 트랜잭션 안의 INSERT를 두 번 보냈다",
    ],
    answer: 1,
    explanation:
      "대화형 트랜잭션은 기본 5초 한도가 있고, 넘기면 닫히면서 앞의 작업도 롤백된다. 한도를 늘리는 것보다 외부 호출을 트랜잭션 밖으로 빼는 게 먼저다. 기다리는 동안 DB 연결 하나와 잠금이 묶이기 때문이다.",
    anchor: "orm-객체를-말하면-sql이-나온다",
  },
  {
    id: "nodejs-orm-query-builder-5",
    post: "nodejs-orm-query-builder",
    question:
      "사용자가 정렬 컬럼을 고르는 목록 API에서 값은 모두 $n 자리표시자로 넘겼다. 그래도 남는 인젝션 위험은?",
    choices: [
      "자리표시자를 쓰면 어떤 인젝션도 불가능하다",
      "LIMIT 값이 문자열로 바뀌어 인젝션이 된다",
      "드라이버가 자리표시자를 문자열로 이어 붙여 보내기 때문이다",
      "컬럼 이름은 자리표시자로 못 넘기고 SQL에 그대로 들어가므로, 허용 목록으로 거르지 않으면 그 자리로 들어온다",
    ],
    answer: 3,
    explanation:
      "자리표시자는 값만 SQL과 분리한다. 컬럼 이름이나 정렬 방향은 SQL 문 자체에 들어가니 검사 없이 넣으면 위험하다. 조립기 예제에서 컬럼 이름을 정규식으로 거른 이유다.",
    anchor: "직접-해-보기-where-절-조립기",
  },
  {
    id: "nodejs-orm-query-builder-6",
    post: "nodejs-orm-query-builder",
    question: "Active Record와 Data Mapper의 차이를 바르게 말한 것은?",
    choices: [
      "Active Record는 SQL을 쓰지 않고, Data Mapper는 SQL을 직접 쓴다",
      "Active Record는 객체가 save() 같은 저장 메서드를 갖고, Data Mapper는 Repository가 저장을 맡아 도메인 객체가 DB를 모른다",
      "Active Record는 관계형 DB 전용이고 Data Mapper는 MongoDB 전용이다",
      "Data Mapper는 트랜잭션을 지원하지 않는다",
    ],
    answer: 1,
    explanation:
      "Sequelize와 Mongoose의 order.save()가 Active Record이고, TypeORM의 getRepository().save(order)가 Data Mapper다. Data Mapper는 코드가 조금 늘지만 도메인과 저장을 떼어 테스트와 계층 분리에 유리하다.",
    anchor: "active-record와-data-mapper",
  },
  {
    id: "nodejs-orm-query-builder-7",
    post: "nodejs-orm-query-builder",
    question:
      "운영 설정에 TypeORM synchronize: true가 남아 있다. 이게 위험한 이유는?",
    choices: [
      "앱이 뜰 때 엔티티에 맞춰 스키마를 자동으로 바꿔서, 엔티티에서 빠진 컬럼을 운영 DB에서 지울 수 있다",
      "모든 쿼리가 동기로 바뀌어 이벤트 루프가 막힌다",
      "마이그레이션 기록 테이블이 매번 초기화된다",
      "읽기 복제본과 데이터가 동기화되어 쓰기가 느려진다",
    ],
    answer: 0,
    explanation:
      "synchronize는 엔티티를 원본으로 보고 DB를 맞춘다. 리뷰 없이 운영 스키마가 바뀌고 데이터가 날아갈 수 있어서 개발에서만 켠다. Prisma의 db push, drizzle-kit push도 같은 이유로 개발용이다.",
    anchor: "마이그레이션은-어디서-시작하나",
  },
];
