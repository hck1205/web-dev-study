import type { QuizQuestion } from "../types";

export const POSTGRES_ROLES_SECURITY: QuizQuestion[] = [
  {
    id: "postgres-roles-security-1",
    post: "postgres-roles-security",
    question:
      "슈퍼유저가 아닌 앱 계정이 운영 DB에서 DROP TABLE에 성공했다. 가장 그럴듯한 이유는?",
    choices: [
      "앱 계정에 DELETE 권한이 있어서",
      "앱 계정이 그 테이블의 주인(또는 주인 역할의 멤버)이라서",
      "pg_hba.conf가 trust로 되어 있어서",
      "앱 계정에 CREATEDB 속성이 있어서",
    ],
    answer: 1,
    explanation:
      "DROP과 ALTER는 GRANT로 주는 권한이 아니라 주인만 할 수 있는 일이다. 앱이 테이블을 만든 계정으로 접속하면 권한 설계와 상관없이 지울 수 있다. 주인은 NOLOGIN 역할로 두고 앱은 arwd만 받은 그룹의 멤버로 접속한다.",
    anchor: "쿼리-하나가-지나는-검사들",
  },
  {
    id: "postgres-roles-security-2",
    post: "postgres-roles-security",
    question:
      "GRANT SELECT ON ALL TABLES IN SCHEMA public TO app_ro 를 한 뒤 새로 만든 coupons 테이블을 app_ro가 읽지 못한다. 왜 그럴까?",
    choices: [
      "ON ALL TABLES는 실행한 순간 있던 테이블에만 적용되기 때문이다",
      "app_ro에 CONNECT 권한이 없기 때문이다",
      "새 테이블은 RLS가 자동으로 켜지기 때문이다",
      "GRANT는 재접속해야 반영되기 때문이다",
    ],
    answer: 0,
    explanation:
      "ON ALL TABLES는 그때의 테이블 목록에 한 번 권한을 줄 뿐이다. 앞으로 만들 객체에는 ALTER DEFAULT PRIVILEGES로 기본 권한을 정해 둬야 한다. 다른 테이블은 읽히니 CONNECT 문제는 아니다.",
    anchor: "주인-마이그레이션-앱-분석-역할로-나누기",
  },
  {
    id: "postgres-roles-security-3",
    post: "postgres-roles-security",
    question:
      "ALTER DEFAULT PRIVILEGES FOR ROLE shop_owner ... 를 걸었는데, shop_owner의 멤버인 shop_migrator로 만든 테이블에 기본 권한이 붙지 않았다. 고치는 방법은?",
    choices: [
      "FOR ROLE을 빼고 다시 실행한다",
      "shop_migrator에 SUPERUSER를 준다",
      "SET ROLE shop_owner를 한 뒤에 테이블을 만든다",
      "테이블을 만든 뒤 VACUUM을 돌린다",
    ],
    answer: 2,
    explanation:
      "기본 권한은 FOR ROLE에 적은 역할이 직접 만든 객체에만 붙는다. 상속으로 주인 권한을 쓰더라도 만든 객체의 주인은 로그인한 shop_migrator가 된다. SET ROLE shop_owner 뒤에 만들거나 ALTER ROLE shop_migrator SET role = 'shop_owner'로 고정한다.",
    anchor: "주인-마이그레이션-앱-분석-역할로-나누기",
  },
  {
    id: "postgres-roles-security-4",
    post: "postgres-roles-security",
    question: "md5 비밀번호 저장 방식이 scram-sha-256보다 위험한 이유로 가장 알맞은 것은?",
    choices: [
      "md5는 비밀번호 길이를 8자로 제한한다",
      "md5는 TLS 없이는 동작하지 않는다",
      "md5는 pg_hba.conf에서 쓸 수 없다",
      "저장된 해시만 알면 비밀번호를 몰라도 md5 인증으로 로그인할 수 있다",
    ],
    answer: 3,
    explanation:
      "md5는 md5(비밀번호 + 역할 이름) 하나를 저장하고, md5 인증은 이 값으로 응답을 만들 수 있어 해시가 사실상 비밀번호다. SCRAM은 무작위 솔트와 반복으로 만든 키를 저장하고 증명만 주고받아 저장값 유출만으로는 로그인하지 못한다.",
    anchor: "비밀번호는-scram으로-저장한다",
  },
  {
    id: "postgres-roles-security-5",
    post: "postgres-roles-security",
    question: "클라이언트에서 sslmode=require로 접속할 때 막지 못하는 위험은?",
    choices: [
      "통신 내용을 평문으로 엿보는 것",
      "중간에서 가짜 서버가 끼어드는 것(서버 인증서 미검증)",
      "비밀번호를 무작위로 대입하는 것",
      "SQL 인젝션",
    ],
    answer: 1,
    explanation:
      "require는 암호화는 하지만 서버 인증서가 믿을 수 있는 CA의 것인지, 접속한 호스트 이름과 맞는지 확인하지 않는다. 그래서 중간자가 자기 인증서로 끼어들 수 있다. verify-full에 sslrootcert로 CA를 줘야 막힌다.",
    anchor: "pg_hbaconf와-tls로-들어오는-길-좁히기",
  },
  {
    id: "postgres-roles-security-6",
    post: "postgres-roles-security",
    question:
      "orders에 RLS 정책을 걸었는데, 테이블 주인 shop_owner가 만든 일반 뷰를 통해 api가 조회하니 다른 서점 주문까지 보였다. 왜 그럴까?",
    choices: [
      "뷰는 기본으로 뷰 주인 권한으로 테이블을 읽고, 주인은 정책을 건너뛰기 때문이다",
      "뷰에는 WHERE 조건을 쓸 수 없기 때문이다",
      "api에 BYPASSRLS가 자동으로 붙기 때문이다",
      "RLS는 SELECT에는 적용되지 않기 때문이다",
    ],
    answer: 0,
    explanation:
      "일반 뷰는 뷰를 만든 주인의 권한으로 아래 테이블을 읽는다. 테이블 주인은 FORCE를 걸지 않는 한 RLS를 적용받지 않아 정책이 빠진다. PostgreSQL 15부터 security_invoker = true로 만들면 호출한 역할 기준으로 정책이 적용된다.",
    anchor: "서점마다-자기-주문만-보게-하기",
  },
  {
    id: "postgres-roles-security-7",
    post: "postgres-roles-security",
    question:
      "커넥션 풀을 쓰는 API 서버에서 RLS용 테넌트 값을 SET app.store_id = '1'로 세션에 설정했다. 어떤 문제가 생길 수 있나?",
    choices: [
      "SET은 슈퍼유저만 쓸 수 있어서 에러가 난다",
      "정책이 인덱스를 못 쓰게 된다",
      "커넥션을 다음 요청이 재사용하면 이전 테넌트 값이 남아 다른 서점 데이터가 보인다",
      "트랜잭션이 끝나면 값이 사라져 아무것도 안 보인다",
    ],
    answer: 2,
    explanation:
      "세션 설정은 커넥션이 끊길 때까지 남아서, 풀에서 같은 커넥션을 받은 다음 요청도 그 값을 쓴다. 트랜잭션 안에서 SET LOCAL이나 set_config(..., true)를 쓰면 COMMIT과 함께 사라진다. 트랜잭션이 끝나면 사라지는 쪽은 SET LOCAL이다.",
    anchor: "서점마다-자기-주문만-보게-하기",
  },
];
