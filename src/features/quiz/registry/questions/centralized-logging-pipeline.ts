import type { QuizQuestion } from "../types";

export const CENTRALIZED_LOGGING_PIPELINE: QuizQuestion[] = [
  {
    id: "centralized-logging-pipeline-1",
    post: "centralized-logging-pipeline",
    question: "앱이 로그 저장소로 직접 HTTP 전송하지 않고 노드마다 수집기를 두는 가장 큰 이유는?",
    choices: [
      "수집기가 로그를 더 예쁘게 출력해서",
      "저장소가 느리거나 멈춰도 그 영향이 앱의 요청 처리로 번지지 않게 하려고",
      "앱은 표준 출력을 쓸 수 없어서",
      "수집기를 두면 저장소에 색인이 필요 없어져서",
    ],
    answer: 1,
    explanation:
      "앱이 직접 보내면 저장소의 지연이 곧 앱의 지연이 되고, 저장소 주소가 바뀔 때마다 앱을 다시 배포해야 한다. 앱은 표준 출력에만 쓰고 버퍼링과 재시도는 수집기가 맡는다.",
    anchor: "수집기는-노드마다-하나",
  },
  {
    id: "centralized-logging-pipeline-2",
    post: "centralized-logging-pipeline",
    question: "JSON 로그 6줄과 4줄짜리 평문 스택 트레이스 2건을 여러 줄 규칙 없이 수집기로 읽었다. 이벤트는 몇 개가 되나?",
    choices: ["8개", "6개", "14개", "2개"],
    answer: 2,
    explanation:
      "수집기는 기본으로 줄 하나를 이벤트 하나로 본다. 6 + 4 × 2 = 14개가 되어 스택이 여러 문서로 흩어지고 오류 건수도 부풀려진다. 첫 줄 패턴으로 묶으면 8개가 된다.",
    anchor: "여러-줄짜리-오류를-한-건으로-묶기",
  },
  {
    id: "centralized-logging-pipeline-3",
    post: "centralized-logging-pipeline",
    question: "수집기가 줄을 읽은 시각(timestamp)을 저장소의 @timestamp로 쓰면 어떤 문제가 생기나?",
    choices: [
      "수집이 밀렸다 늦게 도착한 로그가 실제와 다른 시간대에 꽂힌다",
      "저장소가 문서를 거절한다",
      "trace_id 검색이 안 된다",
      "로그가 중복 저장된다",
    ],
    answer: 0,
    explanation:
      "수집 시각과 사건 시각의 차이가 곧 수집 지연이다. 지연이 생기면 장애 시각의 로그가 몇 분 뒤 구간에 들어가 대시보드와 검색이 틀린다. 앱이 쓴 시각을 @timestamp로 옮긴다.",
    anchor: "수집기에서-다듬기",
  },
  {
    id: "centralized-logging-pipeline-4",
    post: "centralized-logging-pipeline",
    question: "메모리 버퍼 100칸, when_full: drop_newest로 두고 저장소를 10초 멈췄더니 600줄 중 533줄만 도착했다. 유실을 알아채는 가장 확실한 방법은?",
    choices: [
      "저장소의 cluster health가 yellow인지 본다",
      "앱 로그 레벨을 debug로 올린다",
      "수집기의 buffer_discarded_events_total 지표가 0보다 커지면 알림을 건다",
      "버퍼를 block으로 바꾸면 유실은 절대 생기지 않는다",
    ],
    answer: 2,
    explanation:
      "실험에서 버린 수 지표 67이 600 - 533과 정확히 같았다. block은 버퍼에서 버리지 않는 대신 파일 읽기를 멈추므로, 저장소가 오래 멈추면 노드의 로그 파일이 돌아가며 지워져 결국 잃을 수 있다.",
    anchor: "저장소가-멈추면-로그는-어디에-쌓이나",
  },
  {
    id: "centralized-logging-pipeline-5",
    post: "centralized-logging-pipeline",
    question: "장애 조사 대부분이 서비스와 시간대를 먼저 좁힌 뒤 본문을 훑는 방식이고 저장 비용을 줄이고 싶다. 어울리는 저장소는?",
    choices: [
      "필드마다 색인하는 저장소에 복제본 2개",
      "레이블 몇 개만 색인하고 본문은 압축해 객체 저장소에 두는 저장소",
      "관계형 DB의 LIKE 검색",
      "앱 서버의 로컬 디스크",
    ],
    answer: 1,
    explanation:
      "레이블형은 넣기와 저장이 싸고, 레이블로 좁힌 뒤 덩어리를 풀어 훑는 질의에 맞는다. 몇 달 치를 아무 필드로나 찾아야 하는 감사·보안 용도라면 색인형이 낫다.",
    anchor: "찾아보기를-만들까-묶어서-압축할까",
  },
  {
    id: "centralized-logging-pipeline-6",
    post: "centralized-logging-pipeline",
    question: "어느 날부터 한 서비스의 로그만 검색에 안 나온다. 수집기는 정상이고 bulk 요청은 200으로 끝난다. 가장 그럴듯한 원인은?",
    choices: [
      "그 서비스가 로그를 남기지 않게 됐다",
      "저장소의 refresh_interval이 너무 길다",
      "그 서비스의 trace_id가 너무 길다",
      "필드 타입이 바뀌어(예: 숫자 필드에 문자열) 문서가 mapper_parsing_exception으로 거절되고 있다",
    ],
    answer: 3,
    explanation:
      "bulk 요청은 전체가 200이어도 항목마다 오류가 따로 적힌다. 숫자로 매핑된 status에 'OK' 같은 문자열이 오면 그 문서만 거절된다. 수집기의 오류 지표와 bulk 응답의 항목별 오류를 봐야 보인다.",
    anchor: "찾아보기를-만들까-묶어서-압축할까",
  },
  {
    id: "centralized-logging-pipeline-7",
    post: "centralized-logging-pipeline",
    question: "5xx 비율 알림을 로그 건수로 계산하지 않고 요청 지표로 거는 이유는?",
    choices: [
      "로그는 샘플링되거나 수집 중 버려질 수 있어 비율이 틀릴 수 있어서",
      "로그 저장소는 숫자를 셀 수 없어서",
      "지표는 trace_id를 담고 있어서",
      "로그 알림은 기술적으로 불가능해서",
    ],
    answer: 0,
    explanation:
      "로그는 고르거나 버리는 순간 건수가 실제와 달라진다. 비율 알림은 지표로 걸고, 로그 알림은 특정 오류 메시지처럼 지표가 없는 드문 사건에 쓴다. 로그가 0건으로 떨어지는 것도 수집이 끊긴 신호로 함께 건다.",
    anchor: "로그로-알림을-걸-때",
  },
];
