import type { QuizQuestion } from "../types";

export const BACKUP_STRATEGY: QuizQuestion[] = [
  {
    id: "backup-strategy-1",
    post: "backup-strategy",
    question: "매시간 rsync --delete로 맞춰 두는 사본이 백업 역할을 못 하는 이유는?",
    choices: [
      "rsync는 암호화를 지원하지 않아서",
      "원본에서 지운 파일을 사본에서도 곧 지워 실수까지 복사하기 때문에",
      "파일 권한을 보존하지 못해서",
      "한 시간보다 촘촘하게 맞출 수 없어서",
    ],
    answer: 1,
    explanation:
      "동기화와 복제는 원본의 지금 상태를 따라가는 장치라 실수와 공격도 그대로 옮긴다. 백업은 과거 시점으로 돌아갈 수 있어야 한다. DB 복제본이 WHERE 없는 DELETE를 따라 하는 것과 같은 이유다.",
    anchor: "백업이-있었는데도-못-살린-이유",
  },
  {
    id: "backup-strategy-2",
    post: "backup-strategy",
    question: "월요일 전체, 화·수요일 증분 백업이 있다. 수요일 상태로 복원하려면 무엇이 필요한가?",
    choices: [
      "수요일 증분 하나",
      "월요일 전체와 수요일 증분",
      "월요일 전체, 화요일 증분, 수요일 증분 모두",
      "화요일 증분과 수요일 증분",
    ],
    answer: 2,
    explanation:
      "증분은 직전 백업 이후 바뀐 것만 담으니 전체부터 사슬을 차례로 모두 얹어야 한다. 전체와 하나만 얹으면 되는 것은 차등 방식이다. 사슬 중 하나가 깨지면 그 뒤로는 갈 수 없다.",
    anchor: "전체-증분-차등",
  },
  {
    id: "backup-strategy-3",
    post: "backup-strategy",
    question: "대량 배치 직전에 pg_create_restore_point를 찍어 두면 좋은 이유는?",
    choices: [
      "사고 시각을 로그에서 찾지 않고 찍어 둔 그 위치로 정확히 돌아갈 수 있어서",
      "배치가 실패하면 자동으로 되돌려 줘서",
      "베이스 백업을 새로 떠 주기 때문에",
      "WAL 보관 없이도 PITR이 가능해져서",
    ],
    answer: 0,
    explanation:
      "복원 지점은 WAL에 이름이 붙은 기록 하나를 남길 뿐이고, 복구할 때 recovery_target_name으로 그 자리에서 멈출 수 있다. 자동으로 되돌리거나 백업을 대신해 주지는 않으니 베이스 백업과 WAL 보관이 여전히 필요하다.",
    anchor: "실수-직전에-이름을-붙여-둔다",
  },
  {
    id: "backup-strategy-4",
    post: "backup-strategy",
    question: "WAL 보관소를 정리할 때 지켜야 할 기준은?",
    choices: [
      "가장 최근 베이스 백업 이전의 WAL은 모두 지운다",
      "7일 지난 WAL은 무조건 지운다",
      "WAL은 작으니 지우지 않는다",
      "가장 오래 남긴 베이스 백업이 필요로 하는 WAL보다 앞의 것만 지운다",
    ],
    answer: 3,
    explanation:
      "남겨 둔 베이스 백업마다 그 시작 지점 이후의 WAL이 있어야 복원된다. 최신 백업 기준으로 지우면 그보다 오래된 백업이 쓸모없어진다. pg_archivecleanup에 가장 오래 남긴 백업의 .backup 파일 이름을 주고 -n으로 먼저 확인한다.",
    anchor: "얼마나-오래-두나",
  },
  {
    id: "backup-strategy-5",
    post: "backup-strategy",
    question: "백업 파일에 chattr +i를 걸어 두었다. 운영 서버의 root를 뺏겼을 때 이 백업은?",
    choices: [
      "root도 불변 속성을 풀 수 없으니 안전하다",
      "root가 chattr -i로 속성을 풀고 지울 수 있다",
      "파일 시스템이 읽기 전용으로 바뀌어 공격이 멈춘다",
      "속성 때문에 복원할 때도 읽을 수 없다",
    ],
    answer: 1,
    explanation:
      "불변 속성은 root의 실수는 막지만 같은 서버의 root는 한 줄로 풀 수 있다. 공격을 막으려면 잠금을 푸는 권한이 공격자 손 밖에 있어야 해서, 다른 계정의 버킷에 컴플라이언스 모드 Object Lock을 건다.",
    anchor: "랜섬웨어는-백업부터-노린다",
  },
  {
    id: "backup-strategy-6",
    post: "backup-strategy",
    question: "pg_verifybackup이 성공했는데도 매주 실제 복원 테스트를 하는 이유는?",
    choices: [
      "pg_verifybackup은 파일 크기만 비교해서",
      "pg_verifybackup은 PostgreSQL 16에서 동작하지 않아서",
      "보관소에서 나중에 빠진 WAL, 원래부터 잘못된 데이터, 절차 오류는 체크섬으로 잡지 못해서",
      "복원 테스트가 백업 속도를 높여 줘서",
    ],
    answer: 2,
    explanation:
      "pg_verifybackup은 매니페스트의 체크섬으로 파일 손상과 누락을 잡는다. 하지만 백업 이후 보관소에서 사라진 WAL이나 복원 절차의 실수는 실제로 띄워 봐야 드러난다. 그래서 복원 뒤 행 수와 마지막 데이터 시각을 확인한다.",
    anchor: "복원해-보지-않은-백업은-기대일-뿐이다",
  },
  {
    id: "backup-strategy-7",
    post: "backup-strategy",
    question: "DB 디스크 사용량이 계속 늘고 pg_wal 디렉터리가 커진다. 백업 쪽에서 먼저 볼 것은?",
    choices: [
      "pg_stat_archiver의 failed_count와 last_failed_wal",
      "shared_buffers 크기",
      "pg_dump 결과 파일 크기",
      "autovacuum 로그",
    ],
    answer: 0,
    explanation:
      "archive_command가 실패하면 PostgreSQL은 그 WAL을 지우지 않고 계속 재시도하므로 pg_wal에 쌓인다. 보관소 권한, 가득 찬 저장소, 만료된 자격 증명이 흔한 원인이다. 그래서 failed_count와 pg_wal 크기에 알림을 건다.",
    anchor: "백업이-조용히-망가지는-순간",
  },
];
