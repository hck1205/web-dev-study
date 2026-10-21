import type { QuizQuestion } from "../types";

export const SD_QUEUE_LOGGING_AUTOMATION: QuizQuestion[] = [
  {
    id: "sd-queue-logging-automation-1",
    post: "sd-queue-logging-automation",
    question: "사진 업로드 요청에서 썸네일 생성을 큐로 빼면 응답이 빨라지는 이유는?",
    choices: [
      "큐가 이미지를 더 빨리 줄여 주기 때문이다",
      "웹 서버는 작업을 큐에 넣고 바로 답하고, 무거운 일은 워커가 나중에 하기 때문이다",
      "큐가 HTTP 응답을 캐시하기 때문이다",
      "썸네일을 만들지 않게 되기 때문이다",
    ],
    answer: 1,
    explanation:
      "큐에 넣는 일은 1ms 안쪽이라 웹 서버는 202로 바로 답할 수 있다. 썸네일 작업 자체의 시간은 그대로지만 워커가 요청 밖에서 처리하므로 사용자와 다른 요청이 그 시간을 기다리지 않는다.",
    anchor: "사용자가-기다리지-않아도-되는-일",
  },
  {
    id: "sd-queue-logging-automation-2",
    post: "sd-queue-logging-automation",
    question: "워커 전체가 초당 60개를 처리하는데 4초 동안 매초 100개씩 들어왔다. 4초 뒤 큐 깊이는?",
    choices: ["0", "40", "160", "400"],
    answer: 2,
    explanation:
      "매초 100개가 들어오고 60개가 처리되므로 초마다 40개씩 쌓여 40, 80, 120, 160이 된다. 큐는 잠깐 몰리는 것을 흡수할 뿐 처리량 부족을 해결하지 못하므로 이럴 때는 워커를 늘려야 한다.",
    anchor: "큐는-몰리는-순간을-흡수한다",
  },
  {
    id: "sd-queue-logging-automation-3",
    post: "sd-queue-logging-automation",
    question: "워커 하나가 멈췄다. 큐가 있는 구조에서 사용자에게 먼저 보이는 증상은?",
    choices: [
      "사진 업로드가 즉시 실패한다",
      "웹 서버가 모두 재시작된다",
      "업로드는 계속 성공하지만 썸네일이 늦게 생긴다",
      "DB 연결이 끊긴다",
    ],
    answer: 2,
    explanation:
      "웹 서버는 큐에 넣기만 하므로 워커 상태를 모르고 업로드는 계속 성공한다. 처리량이 줄어 큐 깊이가 오르고 썸네일이 늦게 생긴다. 그래서 큐 깊이를 지표로 보고 워커를 늘리거나 알람을 울린다.",
    anchor: "웹과-워커를-따로-늘린다",
  },
  {
    id: "sd-queue-logging-automation-4",
    post: "sd-queue-logging-automation",
    question: "BRPOP으로 꺼내 처리하는 단순한 Redis 리스트 큐의 약점은?",
    choices: [
      "작업 순서를 지킬 수 없다",
      "꺼내는 순간 지워져서 워커가 처리 중에 죽으면 작업이 사라진다",
      "큐가 비어 있으면 워커가 오류로 종료된다",
      "웹 서버가 작업을 넣을 수 없다",
    ],
    answer: 1,
    explanation:
      "BRPOP은 꺼내면서 바로 지우므로 처리 결과와 상관없이 큐에서 사라진다. 처리가 끝난 뒤 ack를 보내야 지우는 방식으로 바꾸면 잃지 않지만, 대신 같은 작업이 두 번 올 수 있어 작업을 멱등하게 만든다.",
    anchor: "사용자가-기다리지-않아도-되는-일",
  },
  {
    id: "sd-queue-logging-automation-5",
    post: "sd-queue-logging-automation",
    question: "웹 서버와 워커에서 각각 남긴 로그를 하나의 흐름으로 이으려면 무엇이 필요한가?",
    choices: [
      "모든 서버의 시계를 1ms 단위로 맞춘다",
      "로그를 사람이 읽기 쉬운 문장으로 쓴다",
      "요청 ID를 만들어 큐 작업에도 실어 보내고 모든 로그 줄에 넣는다",
      "로그를 각 서버의 디스크에 오래 보관한다",
    ],
    answer: 2,
    explanation:
      "요청 ID가 웹 서버의 줄과 워커의 줄에 똑같이 들어 있으면 중앙 저장소에서 그 ID 하나로 모아 시간순으로 볼 수 있다. 서버 디스크에만 두면 오토스케일링으로 서버가 사라질 때 로그도 사라진다.",
    anchor: "수십-대의-로그를-한곳으로",
  },
  {
    id: "sd-queue-logging-automation-6",
    post: "sd-queue-logging-automation",
    question: "CPU, 오류율, 지연이 모두 정상인데 시간당 리뷰 등록 수가 평소의 절반이다. 무엇을 의심해야 하나?",
    choices: [
      "지표가 고장 났으니 무시한다",
      "어딘가에서 사용자가 막히고 있는데 기술 지표가 잡지 못하는 장애일 수 있다",
      "서버를 수직 확장해야 한다",
      "캐시 TTL이 너무 길다",
    ],
    answer: 1,
    explanation:
      "비즈니스 지표는 사용자가 실제로 원하는 일을 해내는지를 보여 준다. 예를 들어 앱의 버튼이 깨져 요청이 아예 오지 않으면 서버 지표는 모두 정상으로 보인다. 그래서 호스트, 서비스, 비즈니스 지표를 함께 본다.",
    anchor: "숫자로-미리-알아채기",
  },
  {
    id: "sd-queue-logging-automation-7",
    post: "sd-queue-logging-automation",
    question: "두 데이터 센터에 새 버전을 배포할 때 이 글에서 권하는 방식은?",
    choices: [
      "두 곳에 동시에 올려 버전 차이를 없앤다",
      "데이터 센터마다 따로 빌드해서 올린다",
      "한 번 만든 같은 이미지를 한 곳씩 올리고 지표를 확인한 뒤 다음으로 넘어간다",
      "사람이 서버마다 접속해 파일을 바꾼다",
    ],
    answer: 2,
    explanation:
      "결과물을 한 번만 만들어야 두 곳이 정확히 같은 버전이 된다. 한 곳씩 올리고 지표를 보면 잘못된 배포가 두 곳을 동시에 쓰러뜨리는 일을 막을 수 있다. 동시에 올리면 빠르지만 실패도 동시에 일어난다.",
    anchor: "사람-손을-덜-타게",
  },
];
