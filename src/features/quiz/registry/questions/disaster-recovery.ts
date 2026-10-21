import type { QuizQuestion } from "../types";

export const DISASTER_RECOVERY: QuizQuestion[] = [
  {
    id: "disaster-recovery-1",
    post: "disaster-recovery",
    question: "WAL 보관을 켠 DB의 디스크가 사라졌다. 잃은 데이터의 양을 정하는 것은?",
    choices: [
      "마지막 베이스 백업을 뜬 시각",
      "마지막으로 보관소에 도착한 WAL 파일 이후에 커밋된 양",
      "max_wal_size 설정값",
      "복원에 걸린 시간",
    ],
    answer: 1,
    explanation:
      "베이스 백업 이후의 쓰기는 보관된 WAL로 되살릴 수 있으니, 잃는 것은 아직 바깥으로 나가지 못한 WAL 안의 커밋이다. 실험에서는 마지막 보관 뒤 10.1초 동안의 39건이 사라졌다. 복원에 걸린 시간은 RTO 쪽 숫자다.",
    anchor: "디스크가-사라진-날-잃은-39건",
  },
  {
    id: "disaster-recovery-2",
    post: "disaster-recovery",
    question: "쓰기가 적은 서비스에서 archive_timeout을 기본값(0)으로 두면 어떤 일이 생기나?",
    choices: [
      "WAL 파일이 늦게 차서 몇 분에서 몇 시간치 데이터가 서버 디스크에만 머문다",
      "WAL 보관이 아예 동작하지 않는다",
      "빈 16MB 파일이 계속 쌓여 보관소가 가득 찬다",
      "베이스 백업이 실패한다",
    ],
    answer: 0,
    explanation:
      "archive_timeout이 꺼져 있으면 16MB 파일이 다 차야만 보관된다. 쓰기가 적으면 그때까지 오래 걸려 그동안의 데이터를 잃을 수 있다. 빈 파일이 쌓이는 건 반대로 이 값을 너무 작게 잡았을 때의 문제다.",
    anchor: "마지막으로-바깥에-나간-기록이-rpo를-정한다",
  },
  {
    id: "disaster-recovery-3",
    post: "disaster-recovery",
    question: "pg_receivewal로 WAL을 실시간으로 받아 두면 RPO가 줄어드는 이유는?",
    choices: [
      "커밋이 pg_receivewal의 기록을 기다리기 때문에",
      "WAL 파일 크기가 작아지기 때문에",
      "파일이 다 차기를 기다리지 않고 바이트 단위로 바로 받기 때문에",
      "베이스 백업을 대신해 주기 때문에",
    ],
    answer: 2,
    explanation:
      "pg_receivewal은 복제 프로토콜로 WAL을 쓰이는 대로 받아 .partial 파일에 남긴다. 다만 커밋을 기다려 주지는 않아서 마지막 몇 밀리초는 잃을 수 있고, 0을 보장하려면 동기 복제가 필요하다.",
    anchor: "마지막으로-바깥에-나간-기록이-rpo를-정한다",
  },
  {
    id: "disaster-recovery-4",
    post: "disaster-recovery",
    question: "베이스 백업을 하루 한 번만 뜨는 구성에서 RTO가 길어지는 주된 이유는?",
    choices: [
      "백업 파일이 압축돼 있어서",
      "최악의 경우 백업 이후 하루치 WAL을 모두 재생해야 해서",
      "복원 중에는 읽기 접속도 받을 수 없어서",
      "WAL 보관이 백업 주기에 맞춰 멈춰서",
    ],
    answer: 1,
    explanation:
      "복원은 베이스 백업 위에 그 이후의 WAL을 다시 실행하는 작업이라, 백업이 오래될수록 재생할 양이 늘어난다. 실험에서 60초 쓰기의 재생에 9.51초가 걸렸으니 같은 부하의 하루치는 3시간이 넘는다.",
    anchor: "rto는-복원-단계를-더한-값이다",
  },
  {
    id: "disaster-recovery-5",
    post: "disaster-recovery",
    question: "파일럿 라이트 구성에서 사고 때 RTO에 들어가는 시간은?",
    choices: [
      "데이터 복원과 WAL 재생 시간",
      "아무것도 없다, 트래픽만 돌리면 된다",
      "양쪽 리전의 쓰기 충돌을 푸는 시간",
      "꺼 둔 앱 서버를 띄우고 트래픽을 돌리는 시간",
    ],
    answer: 3,
    explanation:
      "파일럿 라이트는 가장 오래 걸리는 데이터 복원을 없애려고 DB 복제본만 켜 둔다. 앱 서버는 이미지만 준비해 두므로 사고 때 띄우는 시간이 든다. 쓰기 충돌은 액티브-액티브에서 생기는 문제다.",
    anchor: "네-단계의-dr-구성",
  },
  {
    id: "disaster-recovery-6",
    post: "disaster-recovery",
    question: "주문 서비스는 10분 안에 살아나도록 만들었는데 실제 훈련 RTO가 4시간이 나왔다. 가장 먼저 의심할 것은?",
    choices: [
      "주문 서비스가 기대는 로그인 같은 다른 서비스의 DR 등급",
      "주문 DB의 인덱스 개수",
      "앱 서버의 CPU 사양",
      "archive_timeout 값",
    ],
    answer: 0,
    explanation:
      "서비스는 의존하는 서비스가 살아나야 쓸 수 있으니 실제 RTO는 의존 관계 중 가장 느린 쪽이 정한다. 그래서 등급표에 각 서비스가 무엇에 기대는지 함께 적는다. archive_timeout은 RPO에 영향을 준다.",
    anchor: "비용과-rto를-함께-놓고-고르기",
  },
  {
    id: "disaster-recovery-7",
    post: "disaster-recovery",
    question: "DR 훈련에서 대기 리전으로 복원하려는데 백업 파일을 열 수 없었다. 가장 흔한 원인은?",
    choices: [
      "백업 파일이 너무 커서",
      "대기 리전의 디스크가 느려서",
      "백업을 암호화한 키가 사라진 운영 리전의 키 관리 서비스에만 있어서",
      "WAL 파일 이름이 타임라인과 맞지 않아서",
    ],
    answer: 2,
    explanation:
      "KMS 같은 키 관리 서비스의 키는 기본적으로 리전마다 따로라서 운영 리전과 함께 쓸 수 없게 된다. 멀티 리전 키를 쓰거나 대기 리전 키로 다시 암호화해 복사해 두고, 훈련 때 실제로 풀어 본다.",
    anchor: "훈련에서-자주-터지는-것들",
  },
];
