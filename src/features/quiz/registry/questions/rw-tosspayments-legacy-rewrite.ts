import type { QuizQuestion } from "../types";

export const RW_TOSSPAYMENTS_LEGACY_REWRITE: QuizQuestion[] = [
  {
    id: "rw-tosspayments-legacy-rewrite-1",
    post: "rw-tosspayments-legacy-rewrite",
    question: "토스페이먼츠가 결제창·원장을 다시 쓰기 전에 소스 확보와 재현 가능한 빌드부터 정리한 이유로 가장 알맞은 것은?",
    choices: [
      "Kubernetes가 GitHub 저장소 없이는 동작하지 않아서",
      "운영 코드의 버전을 모르고 빌드 결과가 매번 다르면, 일부 트래픽만 새 버전에 보내도 문제의 원인이 코드인지 환경인지 가를 수 없어서",
      "SVN이 Java 17을 지원하지 않아서",
      "가맹점이 새 결제창을 쓰려면 GitHub 계정이 필요해서",
    ],
    answer: 1,
    explanation:
      "점진적 전환은 새 버전과 옛 버전의 차이를 안다는 전제에서만 의미가 있다. 배포된 class 파일을 디스어셈블해 최신 소스를 찾고 Gradle과 Docker로 같은 산출물이 나오게 한 뒤에야 1% 단위 트래픽 조절이 쓸모 있어진다. 나머지 보기는 1편에 나오지 않는 이유다.",
    anchor: "기능보다-바닥부터-다시-깐-순서",
  },
  {
    id: "rw-tosspayments-legacy-rewrite-2",
    post: "rw-tosspayments-legacy-rewrite",
    question: "새 결제창에서 LegacyConverter와 OpenAPIConverter가 모두 SessionCreationRequest를 만들게 한 효과는?",
    choices: [
      "레거시 파라미터를 없애고 모든 가맹점을 OpenAPI로 옮기게 했다",
      "OpenAPI 요청을 레거시 파라미터로 바꿔 옛 결제 로직을 재사용했다",
      "가맹점 연동은 그대로 두면서, 바깥 파라미터의 사정이 핵심 결제 로직으로 새어 들어오지 않게 했다",
      "변환기가 결제 승인까지 직접 처리해 서버 수를 줄였다",
    ],
    answer: 2,
    explanation:
      "연동 방식마다 변환기를 두고 안쪽은 하나의 요청 객체와 Feature만 보게 해서, 하위 호환을 지키면서 핵심 로직을 보호했다. OpenAPI를 레거시 파라미터로 번역하던 것은 오히려 버린 옛 어댑터의 방식이다.",
    anchor: "연동-방식마다-변환기-하나-안쪽은-feature로",
  },
  {
    id: "rw-tosspayments-legacy-rewrite-3",
    post: "rw-tosspayments-legacy-rewrite",
    question: "Bridge 인터페이스에서 서버가 데이터뿐 아니라 도착지와 전송 방식까지 내려 주는 이유는?",
    choices: [
      "카드사·간편결제사로 어디에 어떤 방식(Redirect, Form POST)으로 보낼지는 비즈니스 로직이라, 이를 프런트엔드가 판단하면 로직이 화면으로 스며들기 때문에",
      "JSON 응답은 브라우저에서 Form POST로 보낼 수 없어서",
      "CORS 사전 요청을 없애기 위해서",
      "프런트엔드가 결제 데이터를 암호화해야 해서",
    ],
    answer: 0,
    explanation:
      "브라우저에서 외부 결제사와 주고받는 표준 방법은 Redirect와 Form POST뿐이고, 어디로 어떻게 보낼지는 결제수단마다 다른 비즈니스 규칙이다. 서버가 세 가지를 함께 주면 FE는 그대로 배달만 한다. 사전 요청 제거는 ENTRY를 Simple Request로 보낸 별개의 최적화다.",
    anchor: "화면은-배달만-한다-entry-prepare-confirm",
  },
  {
    id: "rw-tosspayments-legacy-rewrite-4",
    post: "rw-tosspayments-legacy-rewrite",
    question: "토스페이먼츠가 새 결제창 카나리에서 자동 원복 판단에 쓴 지표는?",
    choices: [
      "새 서버의 5xx 비율",
      "평균 응답 시간",
      "가맹점 수 대비 전환된 가맹점 비율",
      "PREPARE 대비 CONFIRM 비율",
    ],
    answer: 3,
    explanation:
      "결제수단을 고른 사용자 중 결제 확정까지 간 비율이 정상 범위를 벗어나면 사용자가 결제를 끝내지 못한다는 뜻이라 그 트래픽을 레거시로 되돌렸다. 서버 에러가 없어도 카드사로 가는 값이 틀리면 결제가 끝나지 않으므로, 5xx나 지연만으로는 이런 실패를 놓칠 수 있다.",
    anchor: "가맹점별-기능별-카나리와-자동-원복",
  },
  {
    id: "rw-tosspayments-legacy-rewrite-5",
    post: "rw-tosspayments-legacy-rewrite",
    question: "새 원장 전환 기간에 비동기 적재용 스레드 풀이 포화되면 어떻게 했나?",
    choices: [
      "결제 요청을 대기시켜 새 원장 적재가 끝날 때까지 기다렸다",
      "그 작업을 버리고, 읽기 전용 DB 기준으로 5분마다 도는 검증 배치가 빠진 건을 다시 넣게 했다",
      "옛 원장 쓰기를 건너뛰고 새 원장에만 썼다",
      "스레드 풀 크기를 자동으로 무제한까지 늘렸다",
    ],
    answer: 1,
    explanation:
      "새 원장 때문에 결제가 느려지거나 실패하면 안 되므로 실시간 경로는 가볍게 두고, 정확성은 보정 배치가 책임지게 했다. 전환 기간의 정답은 옛 원장이라 옛 원장 쓰기를 건너뛰는 일은 없다.",
    anchor: "원장은-새-db로-옛-원장에-먼저-쓰고-뒤따라-쓴다",
  },
  {
    id: "rw-tosspayments-legacy-rewrite-6",
    post: "rw-tosspayments-legacy-rewrite",
    question: "아웃박스 패턴을 쓰는데도 결제 이벤트가 빠진 이유와, 로그로 이벤트를 다시 발행한 뒤 생긴 문제를 바르게 짝지은 것은?",
    choices: [
      "Kafka 브로커 장애 때문 / 이벤트 순서가 바뀜",
      "아웃박스 테이블이 가득 차서 / 이벤트가 영구히 사라짐",
      "아웃박스 저장이 실패해도 결제를 실패시키지 않았기 때문 / 이벤트가 중복으로 발행됨",
      "재발송 배치가 멈춰서 / 가맹점 응답이 늦어짐",
    ],
    answer: 2,
    explanation:
      "외부 원천사가 이미 승인한 결제는 되돌릴 수 없는 부분이 있어, 가용성을 우선해 아웃박스 저장 실패를 결제 실패로 만들지 않았다. 빠진 건을 Elasticsearch와 로컬 디스크 로그로 찾아 다시 발행하자 중복이 생겼고, 이벤트 헤더에 멱등 키를 실어 받는 쪽이 거르게 했다.",
    anchor: "장애-하루가-드러낸-네-가지-어긋남",
  },
  {
    id: "rw-tosspayments-legacy-rewrite-7",
    post: "rw-tosspayments-legacy-rewrite",
    question: "앞단 PX 서버의 타임아웃이 승인 서버의 처리 시간보다 짧으면 어떤 일이 생기나?",
    choices: [
      "승인 서버는 결제를 완료했는데 가맹점은 실패 응답을 받는다",
      "승인 서버가 결제를 자동으로 취소한다",
      "카드사가 망취소를 보낸다",
      "아무 문제 없다. 승인 서버가 늦게라도 응답을 다시 보낸다",
    ],
    answer: 0,
    explanation:
      "바깥이 먼저 포기하면 안쪽의 성공이 바깥에 전달되지 않아 가맹점과 실제 처리 결과가 어긋난다. 토스페이먼츠는 승인 서버의 최대 처리 시간을 계산해 모든 상위 서버의 타임아웃을 그에 맞췄다. 망취소는 원천사와 상태를 맞추는 다른 장치다.",
    anchor: "장애-하루가-드러낸-네-가지-어긋남",
  },
];
