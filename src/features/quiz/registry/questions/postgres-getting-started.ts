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
      "pg_hba.conf에 위에서부터 host all all 192.0.2.0/24 reject, 그 아래 hostssl shop matt 192.0.2.0/24 scram-sha-256 이 있다. 192.0.2.2에서 matt가 TLS로 shop에 붙으면?",
    choices: [
      "더 구체적인 hostssl 줄이 우선해서 비밀번호를 묻는다",
      "두 줄을 모두 검사해 하나라도 허용하면 통과한다",
      "reject 줄에서 실패하면 다음 줄로 넘어가 비밀번호를 묻는다",
      "처음 맞는 reject 줄에서 거절로 끝난다",
    ],
    answer: 3,
    explanation:
      "pg_hba.conf는 위에서부터 읽어 종류·DB·역할·주소가 맞는 첫 줄 하나로 결정하고, 그 뒤 줄은 보지 않는다. 구체적인 줄이 우선하는 규칙은 없다. 그래서 좁은 허용 줄을 넓은 거절 줄보다 위에 둬야 한다.",
    anchor: "pg_hbaconf는-위에서부터-첫-줄만-본다",
  },
  {
    id: "postgres-getting-started-5",
    post: "postgres-getting-started",
    question:
      "다른 서버에서 접속하니 Connection refused가 난다. 서버는 켜져 있다. 가장 먼저 의심할 설정은?",
    choices: [
      "pg_hba.conf의 인증 방식",
      "listen_addresses가 localhost로 되어 있는지",
      "역할의 비밀번호",
      "search_path",
    ],
    answer: 1,
    explanation:
      "Connection refused는 서버가 그 주소와 포트에서 아예 듣고 있지 않다는 뜻이라 pg_hba.conf까지 가지도 않는다. 기본값 listen_addresses = localhost면 외부 접속을 받지 않는다. 이걸 바꾸면 에러가 no pg_hba.conf entry로 바뀌고, 그때 명부를 고친다.",
    anchor: "pg_hbaconf는-위에서부터-첫-줄만-본다",
  },
  {
    id: "postgres-getting-started-6",
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
    id: "postgres-getting-started-7",
    post: "postgres-getting-started",
    question:
      "비밀번호가 p@ss/word인데 postgresql://matt:p@ss/word@localhost/shop 으로 접속하면 could not translate host name \"ss\" 에러가 난다. 고치는 방법은?",
    choices: [
      "비밀번호를 작은따옴표로 감싼다",
      "sslmode=disable을 붙인다",
      "@와 /를 %40, %2F로 퍼센트 인코딩한다",
      "포트 번호를 명시한다",
    ],
    answer: 2,
    explanation:
      "URI에서 @는 사용자 정보와 호스트를 나누는 기호라서, 비밀번호 안의 @ 뒤를 호스트로 읽는다. 특수문자는 퍼센트 인코딩해야 한다. 애초에 URI에 비밀번호를 넣지 않고 ~/.pgpass를 쓰는 방법도 있다.",
    anchor: "접속-정보는-문자열-하나로-줄-수-있다",
  },
];
