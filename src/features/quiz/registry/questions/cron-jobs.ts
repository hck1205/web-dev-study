import type { QuizQuestion } from "../types";

export const CRON_JOBS: QuizQuestion[] = [
  {
    id: "cron-jobs-1",
    post: "cron-jobs",
    question: "`*/7 * * * *`로 건 작업이 9시 56분에 돈 다음 언제 다시 도나?",
    choices: ["10시 3분", "10시 0분", "10시 7분", "9시 59분"],
    answer: 1,
    explanation:
      "/7은 0부터 7씩 건너뛴 분 목록을 만들고 그 목록이 매시간 반복된다. 56 다음 값은 없으니 다음 시간의 0분에 돌고, 이때 간격은 4분이다. 10시 3분은 '마지막 실행 + 7분'으로 계산했을 때의 답이다.",
    anchor: "나눠-떨어지지-않는-간격",
  },
  {
    id: "cron-jobs-2",
    post: "cron-jobs",
    question: "'매달 첫째 월요일 9시'를 `0 9 1-7 * 1`로 걸었다. 실제로는 언제 도나?",
    choices: [
      "첫째 월요일에만 돈다",
      "1~7일 중 월요일이 없으면 돌지 않는다",
      "1~7일 매일과 모든 월요일에 돈다",
      "문법 오류라 아예 돌지 않는다",
    ],
    answer: 2,
    explanation:
      "일 칸과 요일 칸이 둘 다 *가 아니면 cron은 둘 중 하나만 맞아도 실행한다(OR). 그래서 1~7일 매일과 그 달의 모든 월요일에 돈다. 첫째 월요일은 요일만 지정하고 스크립트에서 날짜를 검사한다.",
    anchor: "나눠-떨어지지-않는-간격",
  },
  {
    id: "cron-jobs-3",
    post: "cron-jobs",
    question: "API 서버 3대가 각자 앱 안의 스케줄러로 9시 작업을 돌린다. 회차당 한 번만 실행되게 하는 방법으로 가장 확실한 것은?",
    choices: [
      "작업이 도는 동안 pg_try_advisory_lock을 쥔다",
      "서버마다 시작 시각을 몇 초씩 다르게 준다",
      "작업 이름과 예정 회차를 기본 키로 하는 테이블에 먼저 INSERT하고 성공한 쪽만 실행한다",
      "각 서버에서 flock -n으로 감싼다",
    ],
    answer: 2,
    explanation:
      "기본 키 충돌은 DB가 판정하니 셋 중 정확히 하나만 회차를 선점한다. advisory lock은 동시에 도는 것만 막아서, 먼저 끝난 뒤 늦게 깨어난 서버가 같은 회차를 또 돌릴 수 있다. flock은 서버 한 대 안에서만 통한다.",
    anchor: "레플리카가-셋이면-메일도-세-통",
  },
  {
    id: "cron-jobs-4",
    post: "cron-jobs",
    question: "concurrencyPolicy: Forbid인 CronJob의 LAST SCHEDULE이 사흘 전이고 ACTIVE가 1이다. 가장 먼저 의심할 것은?",
    choices: [
      "멈춘 Job 하나가 끝나지 않아 이후 회차를 모두 건너뛰고 있다",
      "timeZone이 비어 UTC로 계산되고 있다",
      "successfulJobsHistoryLimit이 너무 작다",
      "schedule 문법이 틀렸다",
    ],
    answer: 0,
    explanation:
      "Forbid는 앞 Job이 돌고 있으면 이번 회차를 건너뛴다. ACTIVE가 1로 계속 남아 있으면 멈춘 Job이 모든 회차를 막고 있는 것이다. activeDeadlineSeconds를 두면 이런 Job이 정해진 시간 뒤 끝난다.",
    anchor: "새벽-배치가-안-돌았다는-연락을-받으면",
  },
  {
    id: "cron-jobs-5",
    post: "cron-jobs",
    question: "Ubuntu 서버 crontab 맨 위에 `TZ=Asia/Seoul`을 적고 `0 0 * * *`를 걸었다. 서버 시간대는 UTC다. 작업은 언제 도나?",
    choices: [
      "한국 시각 0시",
      "한국 시각 오전 9시 (UTC 0시)",
      "TZ 줄 때문에 crontab 전체가 무시된다",
      "한국 시각 오후 3시",
    ],
    answer: 1,
    explanation:
      "Debian 계열 cron에서 crontab의 TZ는 실행되는 명령의 환경 변수일 뿐 스케줄 계산에는 쓰이지 않는다. 스케줄은 데몬의 시간대(UTC)로 계산되니 한국 시각 9시에 돈다. 줄마다 시간대를 정하는 CRON_TZ는 cronie에서만 통한다.",
    anchor: "서버-시계는-어느-나라-시간인가",
  },
  {
    id: "cron-jobs-6",
    post: "cron-jobs",
    question: "dead man's switch의 ping을 작업 시작 직후가 아니라 성공적으로 끝난 뒤에 보내는 이유는?",
    choices: [
      "시작 때 보내면 감시 서버의 부하가 커져서",
      "끝난 뒤에 보내야 실행 시간을 잴 수 있어서",
      "시작 때 보내면 작업이 중간에 죽어도 정상으로 보이기 때문에",
      "쿠버네티스가 시작 직후 네트워크를 막기 때문에",
    ],
    answer: 2,
    explanation:
      "ping은 '이번 회차가 제대로 끝났다'는 신호여야 한다. 시작할 때 보내면 중간에 OOM이나 에러로 죽은 회차도 감시 서버에는 성공으로 남는다. 실패를 바로 알리고 싶으면 실패 신호를 따로 보낸다.",
    anchor: "안-돈-것을-알아채는-법",
  },
];
