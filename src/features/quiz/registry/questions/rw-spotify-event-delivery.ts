import type { QuizQuestion } from "../types";

export const RW_SPOTIFY_EVENT_DELIVERY: QuizQuestion[] = [
  {
    id: "rw-spotify-event-delivery-1",
    post: "rw-spotify-event-delivery",
    question: "스포티파이 이벤트 전송이 한 번 내놓은 한 시간 폴더에 나중에 데이터를 채워 넣지 않는 이유는?",
    choices: [
      "하류 작업이 폴더를 한 번만 읽고 긴 사슬을 이뤄, 고치면 그 시간의 하류 작업을 사람이 모두 다시 돌려야 해서",
      "HDFS가 파일 덧붙이기를 지원하지 않아서",
      "Avro 형식은 한 번 쓰면 바꿀 수 없어서",
      "저장 비용을 줄이기 위해서",
    ],
    answer: 0,
    explanation:
      "대부분의 데이터 작업은 한 시간 폴더를 한 번만 읽고 그 결과가 다른 작업의 입력이 된다. 폴더가 바뀌면 하류 사슬 전체를 손으로 다시 돌려야 해서 비싸다. 그래서 늦게 온 데이터는 닫힌 폴더가 아니라 열린 폴더에 넣는다.",
    anchor: "한-시간짜리-상자라는-약속",
  },
  {
    id: "rw-spotify-event-delivery-2",
    post: "rw-spotify-event-delivery",
    question: "Kafka 0.7 시절 시스템에서 Hadoop이 단일 장애점이 된 이유는?",
    choices: [
      "Kafka가 Hadoop 위에서만 돌아서",
      "모든 클라이언트가 Hadoop에 직접 연결해서",
      "Hadoop이 서비스 디스커버리를 맡아서",
      "브로커를 영구 저장소로 믿을 수 없어 이벤트가 HDFS에 쓰여야 저장된 것으로 쳤기 때문에",
    ],
    answer: 3,
    explanation:
      "Kafka 0.7 브로커는 믿을 만한 영구 저장소가 아니어서 Producer와 Hadoop 사이에 영구 상태를 두지 않았다. HDFS가 유일한 안전 지점이니 Hadoop이 멈추면 전체가 멈추고, 서비스 서버마다 쌓아 둘 디스크가 필요했다. 확인도 데이터 센터를 건너 돌아와야 했다.",
    anchor: "kafka-07-위의-첫-시스템",
  },
  {
    id: "rw-spotify-event-delivery-3",
    post: "rw-spotify-event-delivery",
    question: "스포티파이가 시험한 Cloud Pub/Sub의 성질 중 Kafka와 다르다고 짚은 것은?",
    choices: [
      "토픽 단위로 보관하고 소비자 수가 파티션 수에 묶인다",
      "메시지를 정확히 한 번만 전달한다",
      "구독이 있어야 메시지가 보관되고, 구독마다 따로 저장하며 소비자 수 제한 없이 서버가 메시지를 나눠 준다",
      "데이터 센터 하나에만 데이터를 둔다",
    ],
    answer: 2,
    explanation:
      "Part II는 구독을 만들기 전에는 데이터가 남지 않고, 구독마다 독립적으로 저장하며 서버 쪽에서 소비자들에게 고르게 나눠 준다는 점을 놀라운 성질로 적었다. 토픽 단위 보관과 파티션 수에 묶인 소비자는 Kafka 쪽 설명이다. Pub/Sub는 최소 한 번 전달이다.",
    anchor: "cloud-pubsub를-시험한-방법",
  },
  {
    id: "rw-spotify-event-delivery-4",
    post: "rw-spotify-event-delivery",
    question: "2016년에 계획한 Dataflow ETL을 2017년에 접은 가장 큰 이유는?",
    choices: [
      "Dataflow가 이벤트 시간 창을 지원하지 않아서",
      "Dataflow 비용이 Hadoop의 열 배여서",
      "작업 300개 넘게를 한 번에 믿을 만하게 배포하고, 버전과 밀림을 감시할 도구가 없어서",
      "Pub/Sub와 연결할 수 없어서",
    ],
    answer: 2,
    explanation:
      "2017년 글은 소비 로직은 절반일 뿐이고 나머지 절반은 운영이라고 적었다. Dataflow API는 작업을 하나씩 배포하게 되어 있었고 감시는 UI뿐이라 모든 작업의 버전이나 처리 지연을 알 수 없었다. 이벤트 시간 창은 오히려 Dataflow를 고른 이유였다.",
    anchor: "계획은-접고-익숙한-도구로-다시-짰다",
  },
  {
    id: "rw-spotify-event-delivery-5",
    post: "rw-spotify-event-delivery",
    question: "Completionist가 한 시간 폴더를 닫아도 되는지 판단할 때 보는 두 가지는?",
    choices: [
      "서버마다 보낸 파일 끝 표시와 살아 있던 서버 목록",
      "그 시간의 마지막 중간 파일이 쓰인 시각과 Pub/Sub의 가장 오래된 미확인 메시지 지표",
      "Consumer의 CPU 사용률과 머신 수",
      "클라이언트 시각과 서버 시각의 차이",
    ],
    answer: 1,
    explanation:
      "옛 시스템은 서버의 파일 끝 표시를 기다려 서버가 죽으면 멈췄다. Completionist는 받는 쪽에서 마지막 파일이 충분히 오래전에 쓰였고 가장 오래된 미확인 메시지가 너무 오래되지 않았으면 닫는 휴리스틱을 쓴다. 워터마크와 같은 발상이다.",
    anchor: "계획은-접고-익숙한-도구로-다시-짰다",
  },
  {
    id: "rw-spotify-event-delivery-6",
    post: "rw-spotify-event-delivery",
    question: "하류 서비스가 실패할 때 CPU 기반 자동 확장이 장애를 키운 과정과 스포티파이의 대응은?",
    choices: [
      "내보내지 못한 이벤트가 쌓여 CPU가 오르고 확장기가 머신을 더 띄우는 되먹임이 생겼다, 실패할수록 지수적으로 자게 했다",
      "머신이 줄어 처리량이 떨어졌다, 최소 인스턴스 수를 올렸다",
      "Pub/Sub가 메시지를 버렸다, 보관 기간을 늘렸다",
      "Consumer가 상태를 잃었다, 상태를 디스크에 저장했다",
    ],
    answer: 0,
    explanation:
      "내보내지 못한 이벤트는 구독에서 지워지지 않아 백로그가 늘고, 처리하느라 CPU를 쓰니 확장기가 머신을 더 띄웠다. 머신이 늘수록 CPU를 더 쓰는 되먹임이었다. 실패 횟수에 따른 지수 백오프로 CPU를 낮춰 확장기를 진정시켰다.",
    anchor: "자동-확장이-작은-문제를-재앙으로-키울-때",
  },
  {
    id: "rw-spotify-event-delivery-7",
    post: "rw-spotify-event-delivery",
    question: "한 시간 폴더 안에서만 중복을 지우면 어떤 중복이 남나?",
    choices: [
      "1분 뒤에 다시 보낸 이벤트",
      "같은 시간 안에 두 번 받은 이벤트",
      "시간 경계를 넘거나 며칠 뒤 오프라인에서 돌아와 다시 보낸 이벤트",
      "message_id가 서로 다른 이벤트",
    ],
    answer: 2,
    explanation:
      "같은 시간 폴더 안의 중복은 지워지지만 13시 50분과 14시 2분처럼 경계를 넘은 재전송, 이틀 뒤의 재전송은 각 폴더에 하나씩 남는다. 그래서 2021년 스포티파이는 메시지 식별자로 색인을 만들어 여러 주를 거슬러 중복을 지웠다. ID가 다른 이벤트는 애초에 중복이 아니다.",
    anchor: "몇-시간-창의-중복-제거가-놓치는-것",
  },
];
