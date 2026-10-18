import type { QuizQuestion } from "../types";

export const POSTGRES_GETTING_STARTED: QuizQuestion[] = [
  {
    id: "postgres-getting-started-1",
    post: "postgres-getting-started",
    question:
      "Ubuntu에 PostgreSQL을 설치하고 리눅스 계정 matt로 그냥 psql을 쳤더니 role \"matt\" does not exist가 났다. 이유로 가장 알맞은 것은?",
    choices: [
      "설치가 끝나지 않아 서버가 꺼져 있다",
      "psql이 리눅스 계정 이름을 DB 역할 이름으로 썼는데, 클러스터에는 postgres 역할만 있다",
      "pg_hba.conf에 local 줄이 없어서 거절됐다",
      "matt의 비밀번호가 설정되지 않았다",
    ],
    answer: 1,
    explanation:
      "psql은 사용자 이름을 주지 않으면 운영체제 계정 이름을 그대로 역할 이름으로 쓴다. 설치 직후에는 postgres 역할만 있어서 인증 단계를 지나 역할 조회에서 막힌다. 서버가 꺼져 있었다면 소켓 파일이 없다는 다른 에러가 난다.",
    anchor: "psql이-내-리눅스-이름을-들고-가는-이유",
  },
  {
    id: "postgres-getting-started-2",
    post: "postgres-getting-started",
    question: "shop DB에 접속한 채로 SELECT * FROM postgres.public.books 를 실행하면?",
    choices: [
      "postgres DB의 books 테이블을 읽는다",
      "search_path에 따라 shop의 books를 읽는다",
      "cross-database references are not implemented 에러가 난다",
      "슈퍼유저만 실행할 수 있다는 권한 에러가 난다",
    ],
    answer: 2,
    explanation:
      "PostgreSQL에서 접속 하나는 데이터베이스 하나만 본다. 그래서 DB 이름까지 붙인 참조는 거절된다. 함께 조회할 데이터는 한 DB 안에서 스키마로 나누고, 꼭 필요하면 postgres_fdw 같은 확장을 쓴다.",
    anchor: "클러스터-데이터베이스-스키마-테이블",
  },
  {
    id: "postgres-getting-started-3",
    post: "postgres-getting-started",
    question:
      "PostgreSQL 16에서 주인이 postgres인 DB에 일반 역할로 CREATE TABLE t (id int); 를 했더니 permission denied for schema public이 났다. 왜 그럴까?",
    choices: [
      "15부터 PUBLIC에게서 public 스키마의 CREATE 권한이 빠졌기 때문이다",
      "일반 역할은 어떤 스키마에도 테이블을 만들 수 없기 때문이다",
      "search_path가 비어 있기 때문이다",
      "테이블 이름 t가 예약어이기 때문이다",
    ],
    answer: 0,
    explanation:
      "14까지는 모든 역할이 public 스키마에 객체를 만들 수 있었지만, 15부터는 public 스키마 주인이 DB 주인(pg_database_owner)이 되고 PUBLIC에는 USAGE만 남았다. DB 주인을 그 역할로 하거나 GRANT CREATE ON SCHEMA public으로 권한을 줘야 한다.",
    anchor: "클러스터-데이터베이스-스키마-테이블",
  },
  {
    id: "postgres-getting-started-4",
    post: "postgres-getting-started",
    question:
      "마이그레이션 파일을 psql -f로 돌렸는데 첫 문장에서 에러가 났다. 기본 설정이라면 어떻게 되나?",
    choices: [
      "다음 문장도 계속 실행되고 종료 코드는 0이다",
      "즉시 멈추고 종료 코드 3을 돌려준다",
      "파일 전체가 자동으로 롤백된다",
      "에러가 난 문장만 다시 시도한다",
    ],
    answer: 0,
    explanation:
      "psql은 기본적으로 에러가 나도 다음 문장을 실행하고 성공으로 끝나서 CI가 실패를 놓친다. -v ON_ERROR_STOP=1을 줘야 첫 에러에서 멈추고 종료 코드 3을 돌려준다. 전체를 되돌리려면 --single-transaction을 함께 쓴다.",
    anchor: "psql에서-매일-쓰는-명령",
  },
  {
    id: "postgres-getting-started-5",
    post: "postgres-getting-started",
    question: "앱은 relation \"users\" does not exist를 내는데 information_schema.tables에는 public.Users가 있다. 원인으로 가장 알맞은 것은?",
    choices: [
      "users 테이블이 다른 DB에 있다",
      "테이블이 큰따옴표로 대문자 이름 \"Users\"로 만들어져서, 따옴표 없는 users로는 찾을 수 없다",
      "public 스키마에 USAGE 권한이 없다",
      "search_path에 public이 빠져 있다",
    ],
    answer: 1,
    explanation:
      "PostgreSQL은 따옴표 없는 이름을 소문자로 바꿔 찾는다. ORM이 \"Users\"처럼 따옴표로 만들면 대문자가 그대로 남아서 users로는 찾을 수 없다. 권한 문제였다면 permission denied가 나지, does not exist가 나지 않는다.",
    anchor: "현장에서-relation-does-not-exist를-만나는-순간",
  },
  {
    id: "postgres-getting-started-6",
    post: "postgres-getting-started",
    question: "psql에서 SET search_path = report, public 을 했더니 쿼리가 된다. 그런데 앱은 여전히 report의 테이블을 못 찾는다. 왜 그럴까?",
    choices: [
      "SET은 슈퍼유저만 쓸 수 있어서 적용되지 않았다",
      "search_path는 재시작해야 바뀐다",
      "SET은 그 psql 세션에만 적용되고 앱의 접속에는 영향이 없다",
      "report 스키마는 앱 역할에게 보이지 않는다",
    ],
    answer: 2,
    explanation:
      "SET은 현재 세션에만 남는다. 앱 접속에도 적용하려면 ALTER ROLE ... IN DATABASE ... SET search_path로 역할과 DB에 기본값을 두거나, 쿼리에 스키마를 붙인다. 이 설정은 다음 접속부터 적용된다.",
    anchor: "현장에서-relation-does-not-exist를-만나는-순간",
  },
];
