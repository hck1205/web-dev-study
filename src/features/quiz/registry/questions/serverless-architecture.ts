import type { QuizQuestion } from "../types";

export const SERVERLESS_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "serverless-architecture-1",
    post: "serverless-architecture",
    question: "S3 업로드 알림으로 불리는 썸네일 함수가 썸네일을 같은 버킷, 같은 접두사에 저장한다. 무슨 일이 생기나?",
    choices: [
      "S3가 같은 함수의 출력임을 알아보고 알림을 보내지 않는다",
      "썸네일 저장도 ObjectCreated 사건이라 함수가 썸네일의 썸네일을 계속 만든다",
      "함수가 동기 호출이라 S3가 응답을 기다리다 타임아웃된다",
      "썸네일이 원본을 덮어쓴다",
    ],
    answer: 1,
    explanation:
      "함수의 저장도 알림 조건에 걸리면 출력이 다시 입력이 되는 고리가 생긴다. 입력과 출력의 버킷이나 접두사를 나누고 알림에 접두사 필터를 거는 식으로 설계에서 막아야 하고, 플랫폼의 재귀 감지는 모든 경로를 잡지 않는다.",
    anchor: "함수는-사건-하나에-반응한다",
  },
  {
    id: "serverless-architecture-2",
    post: "serverless-architecture",
    question: "S3나 SNS가 Lambda를 비동기로 불렀고, 함수가 세 번 모두 에러를 냈다. 실패 목적지와 DLQ를 정하지 않았다면 그 사건은?",
    choices: [
      "S3가 다시 알림을 보낸다",
      "Lambda가 성공할 때까지 계속 다시 부른다",
      "다음 배포 때 자동으로 다시 실행된다",
      "에러 로그만 남고 사건은 버려진다",
    ],
    answer: 3,
    explanation:
      "비동기 호출은 Lambda 내부 큐에서 기본 두 번 더 시도한 뒤, 실패 목적지나 DLQ가 없으면 사건을 버린다. 부른 쪽은 202만 받고 끝났으니 다시 보내지 않는다.",
    anchor: "트리거마다-부르는-방식이-다르다",
  },
  {
    id: "serverless-architecture-3",
    post: "serverless-architecture",
    question: "SQS 배치 핸들러가 batchItemFailures를 돌려주는데, 이벤트 소스 매핑에 ReportBatchItemFailures를 켜지 않았다. 다섯 개 중 하나가 실패하면?",
    choices: [
      "실패한 하나만 큐에 남는다",
      "배치 다섯 개가 모두 다시 온다",
      "호출이 성공으로 처리돼 실패한 메시지까지 다섯 개 모두 지워진다",
      "실패한 메시지가 바로 DLQ로 간다",
    ],
    answer: 2,
    explanation:
      "설정이 없으면 매핑은 함수의 응답 내용을 읽지 않고, 에러 없이 끝난 호출을 성공으로 본다. 하네스에서도 no-setting은 한 바퀴 만에 다섯 개를 모두 지웠고, 실패한 주문 하나가 조용히 사라졌다.",
    anchor: "배치에서-하나만-실패했을-때",
  },
  {
    id: "serverless-architecture-4",
    post: "serverless-architecture",
    question: "DynamoDB Streams에 연결된 함수의 IteratorAge 지표가 계속 커진다. 가장 먼저 의심할 것은?",
    choices: [
      "독이 든 레코드 하나 때문에 그 샤드가 같은 배치에서 막혀 있다",
      "함수 메모리가 너무 크다",
      "스트림이 비어 있다",
      "가시성 타임아웃이 너무 길다",
    ],
    answer: 0,
    explanation:
      "스트림은 샤드 안의 순서를 지키려고 실패한 배치를 성공하거나 만료될 때까지 다시 부르니, 레코드 하나가 샤드 전체를 막는다. BisectBatchOnFunctionError, MaximumRetryAttempts, 실패 목적지를 걸어 막힌 레코드를 빼낸다. 가시성 타임아웃은 SQS의 개념이다.",
    anchor: "배치에서-하나만-실패했을-때",
  },
  {
    id: "serverless-architecture-5",
    post: "serverless-architecture",
    question: "재고 예약 → 30분 대기 → 출고로 이어지는 흐름을 함수 A가 B를, B가 C를 동기로 부르게 짜는 것보다 Step Functions가 나은 이유는?",
    choices: [
      "Step Functions는 콜드 스타트가 없어서",
      "각 함수는 자기 일만 하고 끝나며, 대기와 재시도와 실패 처리를 워크플로가 상태로 들고 있어 기다리는 동안 함수 요금이 나가지 않아서",
      "함수끼리는 서로를 부를 수 없어서",
      "Step Functions가 함수보다 항상 싸서",
    ],
    answer: 1,
    explanation:
      "함수가 다른 함수를 동기로 부르면 앞 함수가 뒤 함수가 끝날 때까지 실행 시간 요금을 내며 기다리고, 중간 실패 시 어디까지 했는지 아는 곳이 없다. 워크플로는 단계와 대기, 재시도, 보상을 정의로 들고 있어서 흐름이 한 곳에 보인다.",
    anchor: "여러-단계는-함수끼리-부르지-않는다",
  },
  {
    id: "serverless-architecture-6",
    post: "serverless-architecture",
    question: "평균 200ms, 512MB 함수가 한 달 3000만 번 불린다. x86 요금(호출 100만 번 0.20달러, GB-초 0.0000166667달러)으로 무료 사용량을 빼지 않으면 대략 얼마인가?",
    choices: ["약 6달러", "약 50달러", "약 56달러", "약 178달러"],
    answer: 2,
    explanation:
      "요청 요금이 30 × 0.20 = 6달러, 실행 요금이 3000만 × 0.2초 × 0.5GB = 300만 GB-초에 0.0000166667을 곱한 50달러라 합쳐 56달러다. 178달러는 메모리를 1769MB로 올렸을 때의 값이다.",
    anchor: "비용은-호출-수와-실행-시간으로-계산된다",
  },
  {
    id: "serverless-architecture-7",
    post: "serverless-architecture",
    question: "배치 핸들러가 처리한 주문 ID를 함수 안의 Set에 기억해 중복을 거른다. 실제 운영에서 문제가 되는 이유는?",
    choices: [
      "Set은 문자열을 저장할 수 없어서",
      "Set이 너무 빨라서 경쟁 조건이 생겨서",
      "Lambda는 전역 변수를 지원하지 않아서",
      "인스턴스가 언제든 새로 뜨고 여러 개가 동시에 돌아서, 다른 인스턴스로 온 중복은 거르지 못해서",
    ],
    answer: 3,
    explanation:
      "함수 인스턴스의 메모리는 그 인스턴스에만 있고 언제 사라질지 모른다. 처리 기록은 DynamoDB 같은 바깥 저장소에 조건부 쓰기로 남겨야 인스턴스가 바뀌어도 중복을 거른다.",
    anchor: "상태는-함수-밖에-둔다",
  },
];
