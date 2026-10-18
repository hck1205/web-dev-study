import type { QuizQuestion } from "../types";

export const POSTGRES_CONNECTIONS_PG_HBA: QuizQuestion[] = [
  {
    id: "postgres-connections-pg-hba-1",
    post: "postgres-connections-pg-hba",
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
    id: "postgres-connections-pg-hba-2",
    post: "postgres-connections-pg-hba",
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
    id: "postgres-connections-pg-hba-3",
    post: "postgres-connections-pg-hba",
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
  {
    id: "postgres-connections-pg-hba-4",
    post: "postgres-connections-pg-hba",
    question: "~/.pgpass에 비밀번호를 적었는데 psql이 계속 비밀번호를 묻고, has group or world access 경고가 나온다. 무엇을 고쳐야 하나?",
    choices: [
      "파일 권한을 600으로 바꾼다",
      "PGPASSWORD 환경 변수를 함께 설정한다",
      "pg_hba.conf를 reload한다",
      "파일 이름을 .pgpass.conf로 바꾼다",
    ],
    answer: 0,
    explanation:
      "libpq는 다른 사용자가 읽을 수 있는 .pgpass를 무시한다. chmod 600으로 나만 읽고 쓰게 해야 파일을 읽는다. pg_hba.conf는 서버 쪽 설정이라 이 경고와 관계가 없다.",
    anchor: "환경-변수와-비밀번호-파일",
  },
  {
    id: "postgres-connections-pg-hba-5",
    post: "postgres-connections-pg-hba",
    question: "pg_hba.conf에서 scram-sha-256을 scram-sha256으로 잘못 쓰고 reload했다. 서버는 어떻게 동작하나?",
    choices: [
      "틀린 줄만 건너뛰고 나머지 새 규칙을 쓴다",
      "서버가 멈추고 재시작을 기다린다",
      "모든 접속을 거절한다",
      "새 파일 전체를 버리고 예전 규칙을 계속 쓴다",
    ],
    answer: 3,
    explanation:
      "pg_hba.conf에 문법 오류가 있으면 서버는 파일 전체를 다시 읽지 않고 예전 규칙을 유지한다. 로그에 was not reloaded가 남고 pg_hba_file_rules의 error 칸에 이유가 나온다. 바꿨는데 반영이 안 된 것 같으면 이 두 곳을 본다.",
    anchor: "pg_hbaconf는-위에서부터-첫-줄만-본다",
  },
  {
    id: "postgres-connections-pg-hba-6",
    post: "postgres-connections-pg-hba",
    question: "트래픽이 몰리자 remaining connection slots are reserved for roles with the SUPERUSER attribute 에러가 난다. 가장 먼저 할 일로 알맞은 것은?",
    choices: [
      "pg_hba.conf에 앱 서버 대역을 추가한다",
      "슈퍼유저로 들어가 pg_stat_activity를 application_name, state별로 세서 누가 자리를 차지했는지 본다",
      "곧바로 max_connections를 1000으로 올리고 reload한다",
      "앱 역할의 비밀번호를 바꾼다",
    ],
    answer: 1,
    explanation:
      "접속 자리가 다 차고 슈퍼유저 몫만 남은 상태라 명부나 비밀번호 문제가 아니다. 먼저 누가 자리를 쓰는지 보고 풀 크기를 줄이거나 풀러를 둔다. max_connections는 재시작해야 바뀌고, 접속마다 프로세스가 생겨 무작정 올리면 메모리 비용이 커진다.",
    anchor: "들어오는-길은-맞는데-자리가-없을-때",
  },
];
