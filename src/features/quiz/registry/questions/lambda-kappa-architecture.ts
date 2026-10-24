import type { QuizQuestion } from "../types";

export const LAMBDA_KAPPA_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "lambda-kappa-architecture-1",
    post: "lambda-kappa-architecture",
    question: "실시간 대시보드 매출이 다음 날 배치 리포트보다 크게 나왔다. 글의 시뮬레이션에서 실시간 쪽이 커진 직접적인 이유는?",
    choices: [
      "배치가 늦게 온 주문을 버렸기 때문이다",
      "스트림 집계가 중복 전송된 주문을 지우지 않고 더했기 때문이다",
      "워터마크가 너무 길어서 창이 닫히지 않았기 때문이다",
      "배치가 이벤트 시각 대신 도착 시각으로 잘랐기 때문이다",
    ],
    answer: 1,
    explanation:
      "실시간 합계는 중복 23건(575,200원)만큼 많고 늦게 와서 버린 13건만큼 적었다. 중복이 더 커서 실시간 쪽이 컸다. 배치는 원본 전체를 order_id로 중복 제거해 진짜 합계와 같았다.",
    anchor: "숫자-두-개가-갈라지는-이유",
  },
  {
    id: "lambda-kappa-architecture-2",
    post: "lambda-kappa-architecture",
    question: "람다 아키텍처에서 속도 층이 조금 틀려도 괜찮다고 보는 이유는?",
    choices: [
      "속도 층 결과는 다음 배치가 그 구간을 정확히 다시 계산하면 버려지기 때문이다",
      "속도 층은 정확히 한 번 처리를 항상 보장하기 때문이다",
      "서빙 층이 두 뷰의 평균을 내서 오차를 줄이기 때문이다",
      "대시보드는 배치 뷰만 읽기 때문이다",
    ],
    answer: 0,
    explanation:
      "실시간 뷰는 배치가 아직 처리하지 못한 최근 구간만 맡고, 배치가 끝나 경계가 밀리면 그 부분은 버려진다. 그래서 스트림 쪽 실수가 오래 남지 않는다. 서빙 층은 평균을 내는 게 아니라 경계로 나눠 읽는다.",
    anchor: "느린-길과-빠른-길을-나란히-두는-람다",
  },
  {
    id: "lambda-kappa-architecture-3",
    post: "lambda-kappa-architecture",
    question: "서빙 층이 배치 뷰와 실시간 뷰를 합칠 때, 실시간 뷰를 '지웠다'는 사실에 기대지 않고 경계로 걸러 읽어야 하는 이유는?",
    choices: [
      "실시간 뷰는 지울 수 없는 저장소에 있기 때문이다",
      "경계로 거르면 배치가 실패해도 정확한 값이 나오기 때문이다",
      "지우는 작업이 늦거나 실패하면 경계 앞 구간이 배치 값과 실시간 값으로 두 번 더해지기 때문이다",
      "배치 뷰에는 경계 뒤 구간도 들어 있기 때문이다",
    ],
    answer: 2,
    explanation:
      "배치가 경계를 옮긴 뒤 옛 실시간 결과가 남아 있으면, 그 시간대를 배치 값과 함께 더해 두 번 세게 된다. 경계 앞은 배치만, 뒤는 실시간만 읽도록 거르면 지우기가 늦어도 안전하다.",
    anchor: "두-뷰를-이어-붙이는-자리",
  },
  {
    id: "lambda-kappa-architecture-4",
    post: "lambda-kappa-architecture",
    question: "카파 아키텍처에서 원본 주문 이벤트 토픽에 로그 컴팩션을 켜면 어떤 문제가 생기나?",
    choices: [
      "브로커 디스크가 더 빨리 찬다",
      "티어드 스토리지와 함께 쓸 수 없어서 브로커가 시작되지 않는다",
      "컨슈머 그룹 오프셋을 옮길 수 없게 된다",
      "키마다 마지막 값만 남아 다시 재생할 전체 기록이 사라진다",
    ],
    answer: 3,
    explanation:
      "컴팩션은 같은 키의 옛 기록을 지우고 마지막 값만 남긴다. 모든 이벤트를 처음부터 다시 흘려야 하는 카파에서는 재생할 원본이 없어진다. 오래 보관하려면 retention.ms를 늘리거나 티어드 스토리지를 쓴다.",
    anchor: "로그-하나만-남기는-카파",
  },
  {
    id: "lambda-kappa-architecture-5",
    post: "lambda-kappa-architecture",
    question: "Spark Structured Streaming으로 카파식 재계산 잡 v2를 띄우며 startingOffsets=earliest를 줬는데 어제 데이터부터 읽힌다. 가장 그럴듯한 원인은?",
    choices: [
      "Kafka 토픽의 보관 기간이 하루라서",
      "maxOffsetsPerTrigger를 너무 작게 줘서",
      "v1과 같은 체크포인트 경로를 써서 저장된 오프셋부터 이어 읽었기 때문에",
      "컨슈머 그룹 이름을 새로 줬기 때문에",
    ],
    answer: 2,
    explanation:
      "startingOffsets는 체크포인트가 없는 새 쿼리에만 적용된다. 옛 체크포인트를 재사용하면 그 안의 오프셋에서 이어 읽으니 옵션이 무시된다. 재계산 잡은 체크포인트와 출력 위치를 새로 준다.",
    anchor: "카파에서-전체를-다시-계산하는-순서",
  },
  {
    id: "lambda-kappa-architecture-6",
    post: "lambda-kappa-architecture",
    question: "Delta Lake나 Iceberg 같은 테이블 포맷이 람다와 카파의 경계를 흐리게 만든 이유로 가장 알맞은 것은?",
    choices: [
      "스트림 잡이 커밋한 테이블을 배치가 그대로 읽고, 늦은 데이터는 MERGE로 고칠 수 있게 됐기 때문이다",
      "Kafka를 대신해 이벤트를 받는 메시지 브로커 역할을 하기 때문이다",
      "작은 파일 문제를 완전히 없앴기 때문이다",
      "스트림 엔진 없이도 초 단위 집계를 해 주기 때문이다",
    ],
    answer: 0,
    explanation:
      "커밋 로그 덕분에 같은 테이블을 스트림으로도 배치로도 갱신하고 읽을 수 있고, 업서트와 구간 덮어쓰기가 원자적으로 된다. 그래서 실시간 뷰와 배치 뷰를 따로 둘 이유가 줄었다. 작은 파일은 오히려 컴팩션으로 계속 관리해야 한다.",
    anchor: "테이블-포맷이-경계를-흐리게-만들었다",
  },
  {
    id: "lambda-kappa-architecture-7",
    post: "lambda-kappa-architecture",
    question: "평균 초당 2,000건이 들어오는 토픽 30일치를 v2 잡이 초당 100,000건으로 다시 재생하면 대략 얼마나 걸리나?",
    choices: ["약 1.4시간", "약 14.4시간", "약 144시간", "약 30분"],
    answer: 1,
    explanation:
      "하루 172,800,000건, 30일이면 5,184,000,000건이다. 초당 100,000건으로 나누면 51,840초, 14.4시간이다. 그동안 실시간 잡은 계속 돌아야 하니 재계산 잡은 별도 자원으로 띄운다.",
    anchor: "카파에서-전체를-다시-계산하는-순서",
  },
];
