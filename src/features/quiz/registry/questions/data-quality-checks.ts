import type { QuizQuestion } from "../types";

export const DATA_QUALITY_CHECKS: QuizQuestion[] = [
  {
    id: "data-quality-checks-1",
    post: "data-quality-checks",
    question: "검사가 실패하면 예외를 던지는 SQL 파일을 psql -f로 돌렸는데 Airflow 태스크가 성공으로 끝났다. 가장 그럴듯한 이유는?",
    choices: [
      "PL/pgSQL의 RAISE EXCEPTION은 경고만 남긴다",
      "psql은 기본값으로 오류 뒤에도 계속 진행하고 종료 코드 0을 돌려줘서",
      "Airflow는 SQL 오류를 항상 재시도로 감춘다",
      "트랜잭션이 롤백되면 오류가 지워진다",
    ],
    answer: 1,
    explanation:
      "psql은 ON_ERROR_STOP이 꺼져 있으면 오류를 출력하고 다음 문장으로 넘어가, 파일 끝에서 0으로 끝난다. -v ON_ERROR_STOP=1을 붙이면 종료 코드 3으로 멈춰 오케스트레이터가 실패로 본다.",
    anchor: "틀린-데이터는-오류를-내지-않는다",
  },
  {
    id: "data-quality-checks-2",
    post: "data-quality-checks",
    question: "원본 팀이 상태 값 paid를 payment_completed로 바꿔 매출이 0원이 됐다. 행 수 검사가 이를 잡지 못한 이유와, 잡을 수 있었던 검사는?",
    choices: [
      "행 수가 줄어서 잡혔어야 한다. 기준을 더 좁혀야 한다",
      "중복이 생겨서다. 유일성 검사로 잡는다",
      "신선도 문제다. 적재 시각 검사로 잡는다",
      "행은 다 왔고 값만 바뀌었다. 허용 값 검사나 결제 완료 비율 같은 결과 지표 검사로 잡는다",
    ],
    answer: 3,
    explanation:
      "행 수는 6168건으로 평소와 같았다. 값이 바뀐 문제는 accepted_values 같은 유효성 검사나, 결제 완료 비율이 89%에서 0%로 떨어진 것을 보는 지표 검사가 잡는다.",
    anchor: "행-수는-맞았다",
  },
  {
    id: "data-quality-checks-3",
    post: "data-quality-checks",
    question: "평일 6000건, 주말 3500건인 테이블에 '어제보다 30% 넘게 줄면 알림'을 걸었다. 어떻게 바꾸는 게 좋은가?",
    choices: [
      "허용 폭을 50%로 넓힌다",
      "주말에는 검사를 끈다",
      "지난 몇 주의 같은 요일 행 수 중앙값과 비교한다",
      "지난 7일 평균과 비교한다",
    ],
    answer: 2,
    explanation:
      "주말 감소는 정상이라 어제와 비교하면 토요일과 월요일마다 거짓 알림이 온다. 같은 요일끼리 비교하면 계절성이 사라지고, 중앙값을 쓰면 지난 장애 날 하나가 기준을 흔들지 않는다. 폭을 넓히면 진짜 사고도 놓친다.",
    anchor: "어제와-비교하면-토요일마다-알림이-온다",
  },
  {
    id: "data-quality-checks-4",
    post: "data-quality-checks",
    question: "Write-Audit-Publish 방식의 장단점으로 맞는 것은?",
    choices: [
      "틀린 데이터가 밖으로 나가지 않지만, 검사가 실패하면 그날 데이터가 늦는다",
      "데이터가 늦지 않지만, 틀린 데이터가 먼저 대시보드에 나간다",
      "검사 비용이 0이지만 스테이징을 쓸 수 없다",
      "모든 검사를 warn으로 바꿔야 쓸 수 있다",
    ],
    answer: 0,
    explanation:
      "스테이징에 쓰고 검사한 뒤 통과한 것만 넘기니 틀린 숫자는 막지만, 실패하면 최종 테이블이 갱신되지 않는다. 틀린 숫자가 먼저 나가는 쪽은 적재 후 경보다.",
    anchor: "적재-전에-막을까-적재-후에-알릴까",
  },
  {
    id: "data-quality-checks-5",
    post: "data-quality-checks",
    question: "데이터 계약이 가장 직접적으로 푸는 문제는?",
    choices: [
      "웨어하우스 쿼리 비용이 커지는 문제",
      "원본 팀이 누가 읽는지 모르고 값을 바꿔 하류가 조용히 깨지는 문제",
      "검사 SQL이 느린 문제",
      "대시보드 도구가 여러 개인 문제",
    ],
    answer: 1,
    explanation:
      "계약은 스키마·허용 값·단위·신선도·변경 절차·주인을 적고 생산자 쪽 CI에서 검사해, 깨지는 변경을 배포 전에 막는다. 기술보다 소유권을 정하는 장치라 핵심 데이터부터 맺는다.",
    anchor: "원본-팀과-맺는-데이터-계약",
  },
  {
    id: "data-quality-checks-6",
    post: "data-quality-checks",
    question: "주문 DB 합계와 결제사 정산 합계를 맞춰 보는 대사 검사가 강한 이유와, 보통의 처리 방식은?",
    choices: [
      "같은 시스템이 두 번 적어 항상 일치해야 하므로 차이가 나면 막는다",
      "결제사 숫자가 늘 정답이므로 우리 쪽을 자동으로 고친다",
      "행 수만 비교하면 되므로 가장 싸다",
      "서로 다른 시스템이 따로 적어 한쪽 버그가 다른 쪽에 같게 생길 가능성이 낮다. 허용 폭과 기간을 두고 알린다",
    ],
    answer: 3,
    explanation:
      "독립된 장부끼리 비교하니 한쪽 파이프라인 버그가 드러난다. 다만 정산 시점·시간대·부분 환불 차이가 있어서 차이 0을 강제하기보다 허용 폭과 기간을 정하고, 원인을 사람이 봐야 하니 막지 않고 알린다.",
    anchor: "다른-장부와-합계를-맞춰-본다",
  },
  {
    id: "data-quality-checks-7",
    post: "data-quality-checks",
    question: "warn 등급 검사가 한 달 내내 울리는데 아무도 행동하지 않는다. 어떻게 하는 게 맞나?",
    choices: [
      "그대로 둔다. 많이 울릴수록 안전하다",
      "알림 채널을 하나 더 만든다",
      "기준을 고치거나 error로 올리거나 지운다",
      "모든 컬럼에 not_null을 더 건다",
    ],
    answer: 2,
    explanation:
      "아무도 행동하지 않는 알림은 소음이고, 소음이 많으면 진짜 사고가 묻힌다. 검사마다 주인과 행동을 정하고, 계속 울리는 warn은 기준을 고치거나 등급을 올리거나 지운다.",
    anchor: "검사를-너무-많이-걸면",
  },
];
