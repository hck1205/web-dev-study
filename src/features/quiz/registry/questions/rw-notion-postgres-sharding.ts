import type { QuizQuestion } from "../types";

export const RW_NOTION_POSTGRES_SHARDING: QuizQuestion[] = [
  {
    id: "rw-notion-postgres-sharding-1",
    post: "rw-notion-postgres-sharding",
    question: "Notion이 2020~2021년 샤딩을 서두른 직접적인 계기로 블로그가 꼽은 것은?",
    choices: [
      "디스크 용량이 RDS 최대치에 닿아서",
      "VACUUM이 꾸준히 멈춰 트랜잭션 ID 랩어라운드로 모든 쓰기가 멈출 위험이 커져서",
      "읽기 복제본의 복제 지연이 몇 시간씩 벌어져서",
      "PgBouncer 연결 수가 한계에 닿아서",
    ],
    answer: 1,
    explanation:
      "2021년 글은 VACUUM이 죽은 튜플을 치우지 못하는 것보다 TXID 랩어라운드가 더 무서웠다고 쓴다. 랩어라운드에 닿으면 PostgreSQL은 데이터를 지키려고 쓰기를 멈춘다. PgBouncer 연결 한계는 2023년 재샤딩 때의 문제다.",
    anchor: "vacuum이-멈추기-시작했다",
  },
  {
    id: "rw-notion-postgres-sharding-2",
    post: "rw-notion-postgres-sharding",
    question: "Notion이 블록 테이블뿐 아니라 블록에서 외래 키로 닿는 테이블(댓글 등)까지 모두 같은 키로 샤딩한 이유는?",
    choices: [
      "테이블 수를 480의 배수로 맞추려고",
      "댓글 테이블이 블록 테이블보다 더 커서",
      "관련 행이 다른 DB에 있으면 트랜잭션이 저장소 하나 안에서만 보장돼, 블록 삭제와 댓글 갱신이 한쪽만 성공할 수 있어서",
      "Citus가 그렇게 하도록 요구해서",
    ],
    answer: 2,
    explanation:
      "블록은 한 DB에, 댓글은 다른 DB에 있으면 블록을 지우고 댓글을 고치는 일이 하나의 트랜잭션이 아니게 된다. 그래서 굳이 나눌 필요가 없는 테이블도 블록과 함께 두었다. Notion은 Citus를 쓰지 않고 애플리케이션 수준 샤딩을 했다.",
    anchor: "블록에서-닿는-테이블은-모두-나눈다",
  },
  {
    id: "rw-notion-postgres-sharding-3",
    post: "rw-notion-postgres-sharding",
    question: "논리 샤드를 512개가 아니라 480개로 만든 덕분에 2023년에 할 수 있었던 일은?",
    choices: [
      "DB를 32대에서 96대로 늘리며 DB당 스키마를 15개에서 5개로 고르게 나눴다",
      "DB를 32대에서 33대로 한 대씩 늘렸다",
      "논리 샤드를 960개로 다시 쪼갰다",
      "워크스페이스 ID를 모두 새로 발급했다",
    ],
    answer: 0,
    explanation:
      "480은 약수가 많아 40, 48, 60, 80, 96대처럼 여러 DB 수로 나머지 없이 나뉜다. 2023년에는 32대를 96대로 늘리며 스키마 15개를 5개씩 세 대로 나눴다. 512였다면 고르게 나누려면 64대, 128대로 두 배씩 가야 한다. 33은 480의 약수가 아니다.",
    anchor: "480개-논리-샤드-32대-물리-db",
  },
  {
    id: "rw-notion-postgres-sharding-4",
    post: "rw-notion-postgres-sharding",
    question: "2021년 이중 쓰기에서 백필과 따라잡기 스크립트가 어떤 순서로 돌아도 결국 같은 상태가 된 이유는?",
    choices: [
      "두 작업을 하나의 분산 트랜잭션으로 묶어서",
      "백필이 쓰기 전에 레코드 버전을 비교해 더 최신 것이 있으면 건너뛰어서",
      "백필을 끝낸 뒤에야 따라잡기를 시작해서",
      "샤드에 쓰는 동안 모놀리스 쓰기를 모두 막아서",
    ],
    answer: 1,
    explanation:
      "글은 쓸 만한 백필이라면 옛 데이터를 쓰기 전에 버전을 비교해 더 최근에 갱신된 레코드는 건너뛰어야 한다고 쓴다. 그래서 두 작업의 순서와 상관없이 새 DB가 모놀리스와 같아진다. 쓰기를 막은 건 마지막 5분 전환 때뿐이다.",
    anchor: "모놀리스에서-샤드로-옮긴-네-단계",
  },
  {
    id: "rw-notion-postgres-sharding-5",
    post: "rw-notion-postgres-sharding",
    question: "2021년 글이 돌아보며 \"이렇게 했으면 좋았다\"고 꼽지 않은 것은?",
    choices: [
      "더 일찍 샤딩하기",
      "전환 중 따라잡기를 30초 안으로 줄여 무중단으로 넘어가기",
      "id와 space_id 복합 키 대신 하나로 합친 기본 키 두기",
      "애플리케이션 수준 샤딩 대신 Vitess 쓰기",
    ],
    answer: 3,
    explanation:
      "글의 세 가지 후회는 더 일찍 샤딩하기, 무중단을 목표로 하기, 합친 기본 키 두기다. Vitess는 MySQL용 기성품으로 검토했지만 클러스터링 로직이 불투명해 고르지 않았고, 그 선택을 후회한다는 말은 없다.",
    anchor: "모놀리스에서-샤드로-옮긴-네-단계",
  },
  {
    id: "rw-notion-postgres-sharding-6",
    post: "rw-notion-postgres-sharding",
    question: "2023년 재샤딩에서 새 샤드 96개를 먼저 PgBouncer에 넣고 기존 32대를 가리키게 했을 때 생긴 문제와 해결은?",
    choices: [
      "PgBouncer가 96개 항목을 지원하지 않아 PgBouncer를 버렸다",
      "옛 DB마다 PgBouncer 인스턴스당 연결이 6개에서 18개로 늘어날 상황이라, PgBouncer 클러스터를 네 묶음으로 샤딩했다",
      "논리 복제가 끊겨서 감사 로그 방식으로 돌아갔다",
      "새 DB의 디스크가 모자라 디스크를 세 배로 늘렸다",
    ],
    answer: 1,
    explanation:
      "PgBouncer 약 100개가 샤드마다 6개씩 600개를 열던 상태에서 새 항목 셋이 같은 옛 DB를 가리키면 인스턴스당 18개가 된다. 연결을 줄이면 쿼리가 밀려서, space shard를 24대씩 네 묶음으로 나눠 묶음마다 PgBouncer 클러스터를 따로 두었다. 디스크는 오히려 세 배로 늘리지 않았다.",
    anchor: "연결-풀을-먼저-나눠야-했다",
  },
  {
    id: "rw-notion-postgres-sharding-7",
    post: "rw-notion-postgres-sharding",
    question: "2023년 전환 3단계에서 PgBouncer 주소를 바꾸면서 복제 방향을 뒤집어 새 DB가 옛 DB로 복제하게 한 이유는?",
    choices: [
      "옛 DB를 읽기 복제본으로 계속 서비스하려고",
      "새 DB의 인덱스를 다시 만들려고",
      "문제가 생기면 최신 데이터를 가진 옛 DB로 되돌아갈 수 있게 하려고",
      "데이터 레이크가 옛 DB에서만 데이터를 읽어서",
    ],
    answer: 2,
    explanation:
      "전환 뒤에도 옛 DB가 새 DB의 WAL을 받아 따라오니, 예상하지 못한 문제가 생기면 되돌릴 수 있다. 글은 이 역방향 복제가 큰 확신을 주었다고 쓴다. 애플리케이션의 옛 DB 로그인 권한은 같은 단계에서 회수했으니 옛 DB로 서비스하려던 건 아니다.",
    anchor: "1초짜리-저장-중으로-끝난-전환",
  },
];
