import type { QuizQuestion } from "../types";

export const DB_MIGRATION_TOOLS: QuizQuestion[] = [
  {
    id: "db-migration-tools-1",
    post: "db-migration-tools",
    question: "운영에 적용된 V2 파일에 CHECK 제약을 더하면 Flyway가 실행을 멈춘다. 멈추지 않고 그냥 진행됐다면 생길 문제는?",
    choices: [
      "운영 DB에 CHECK가 두 번 걸린다",
      "운영 DB에는 반영되지 않고 새로 만드는 환경에만 반영되어 환경마다 스키마가 달라진다",
      "V2가 운영에서 다시 실행되어 테이블이 지워진다",
      "기록 표의 installed_rank가 꼬인다",
    ],
    answer: 1,
    explanation:
      "적용된 버전은 다시 실행되지 않으니 고친 내용은 운영에 들어가지 않는다. 새 개발 DB나 CI DB만 고친 V2로 만들어져서 같은 버전인데 모양이 달라진다. 바꿀 게 있으면 새 버전을 추가한다.",
    anchor: "적용한-파일은-고치지-않는다",
  },
  {
    id: "db-migration-tools-2",
    post: "db-migration-tools",
    question: "knex로 마이그레이션 중 파드가 OOM으로 죽은 뒤, 다음 배포부터 'Migration table is already locked'로 멈춘다. 이유는?",
    choices: [
      "PostgreSQL이 advisory lock을 풀지 않아서",
      "knex_migrations 표에 실패 기록이 남아서",
      "잠금 표의 is_locked = 1 값이 커밋된 채 남아서, 연결이 끊겨도 아무도 지우지 않아서",
      "죽은 파드의 트랜잭션이 아직 열려 있어서",
    ],
    answer: 2,
    explanation:
      "advisory lock이나 커밋 전 행 잠금은 연결이 끊기면 DB가 풀지만, 표에 값으로 커밋된 잠금은 남는다. 정말 아무것도 안 도는지 확인한 뒤 knex migrate:unlock으로 푼다.",
    anchor: "실행하다-죽으면-무엇이-남나",
  },
  {
    id: "db-migration-tools-3",
    post: "db-migration-tools",
    question: "PostgreSQL에서 두 번째 문장이 틀린 마이그레이션 파일이 트랜잭션 안에서 실패했다. 첫 문장의 ALTER TABLE ADD COLUMN은?",
    choices: [
      "함께 되돌려져 없다",
      "남아 있어서 사람이 지워야 한다",
      "남아 있지만 기록 표에는 없다",
      "INVALID 상태로 남는다",
    ],
    answer: 0,
    explanation:
      "PostgreSQL은 DDL도 트랜잭션으로 되돌릴 수 있어서 파일 전체가 사라진다. MySQL 8은 DDL마다 암묵적으로 커밋하기 때문에 앞 문장이 남는 것과 다르다.",
    anchor: "실행하다-죽으면-무엇이-남나",
  },
  {
    id: "db-migration-tools-4",
    post: "db-migration-tools",
    question: "golang-migrate가 'Dirty database version 2'로 멈췄다. 가장 먼저 할 일은?",
    choices: [
      "곧바로 force 2를 실행한다",
      "down 1을 실행한다",
      "schema_migrations 표를 지운다",
      "실제 스키마를 확인해서 2번이 얼마나 적용됐는지 본 뒤, 그에 맞게 기록을 force로 맞춘다",
    ],
    answer: 3,
    explanation:
      "dirty는 도구가 2번을 하다 말았다는 기록일 뿐 실제로 무엇이 남았는지는 모른다. 확인 없이 force 2를 하면 도구는 열이 있다고 믿는데 실제로는 없는 상태가 된다.",
    anchor: "실행하다-죽으면-무엇이-남나",
  },
  {
    id: "db-migration-tools-5",
    post: "db-migration-tools",
    question: "Flyway 기본 설정으로 CREATE INDEX CONCURRENTLY 마이그레이션이 끝나지 않았다. 인덱스 연결은 virtualxid를 기다린다. 원인은?",
    choices: [
      "다른 앱이 테이블을 잠갔다",
      "Flyway의 잠금 연결이 트랜잭션 단위 advisory lock을 잡은 채 트랜잭션을 열어 두어, CONCURRENTLY가 그 트랜잭션이 끝나길 기다린다",
      "인덱스 이름이 중복됐다",
      "CONCURRENTLY는 Flyway에서 지원하지 않는다",
    ],
    answer: 1,
    explanation:
      "CONCURRENTLY는 먼저 시작한 트랜잭션이 모두 끝나야 인덱스를 완성한다. 그 트랜잭션이 Flyway 자신의 잠금 연결이라 서로를 기다린다. postgresql.transactional.lock=false로 세션 잠금을 쓰면 풀린다.",
    anchor: "flyway가-스스로를-기다린-날",
  },
  {
    id: "db-migration-tools-6",
    post: "db-migration-tools",
    question: "운영에서 down 마이그레이션으로 되돌리기를 조심해야 하는 가장 큰 이유는?",
    choices: [
      "down 파일은 체크섬 검사를 받지 않아서",
      "down은 잠금을 잡지 않아서",
      "열 추가의 down은 열 삭제라서, 그 사이 쌓인 데이터가 함께 사라지기 때문에",
      "down은 트랜잭션 밖에서만 실행되어서",
    ],
    answer: 2,
    explanation:
      "옛 앱 이미지는 다시 띄우면 되지만 지운 열의 데이터는 백업 없이 못 되살린다. 그래서 운영은 roll forward를 기본으로 두고, 마이그레이션을 옛 코드와 새 코드가 둘 다 견디게 짠다.",
    anchor: "down-파일은-운영의-되돌리기-버튼이-아니다",
  },
  {
    id: "db-migration-tools-7",
    post: "db-migration-tools",
    question: "마이그레이션을 앱 시작 대신 배포 파이프라인의 별도 Job으로 돌릴 때, 그 마이그레이션이 지켜야 할 조건은?",
    choices: [
      "옛 코드가 계속 요청을 받는 동안 실행되니 옛 코드가 깨지지 않는 변경이어야 한다",
      "반드시 down 파일이 있어야 한다",
      "트랜잭션을 꺼야 한다",
      "앱 계정으로 실행해야 한다",
    ],
    answer: 0,
    explanation:
      "Job이 도는 동안과 롤링 배포 동안에는 옛 코드가 새 스키마를 쓴다. 열 추가는 괜찮지만 열 삭제나 이름 변경은 옛 코드를 깨뜨린다. 마이그레이션 계정은 앱 계정과 나눈다.",
    anchor: "언제-어디서-돌리나",
  },
];
