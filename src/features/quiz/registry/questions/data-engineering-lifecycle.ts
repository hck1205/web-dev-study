import type { QuizQuestion } from "../types";

export const DATA_ENGINEERING_LIFECYCLE: QuizQuestion[] = [
  {
    id: "data-engineering-lifecycle-1",
    post: "data-engineering-lifecycle",
    question: "밤 11시 50분 주문이 아침에 환불됐는데, 관리자 화면은 환불, 아침 매출 리포트는 매출로 보여 준다. 가장 정확한 설명은?",
    choices: [
      "리포트 쿼리에 버그가 있어 환불을 매출로 센다",
      "관리자 화면은 운영 DB의 지금 상태를, 리포트는 새벽 적재 시각의 사본을 읽어 기준 시각이 다르다",
      "운영 DB가 환불을 저장하지 못했다",
      "리포트가 UTC를 써서 날짜가 하루 밀렸다",
    ],
    answer: 1,
    explanation:
      "둘 다 맞는 숫자다. 리포트는 새벽 1시에 옮긴 사본을 읽어 그 뒤의 환불을 아직 모른다. 리포트에 기준 시각을 함께 보여 주면 이런 문의가 줄고, 몇 분 안에 반영해야 하면 CDC나 스트리밍이 필요하다.",
    anchor: "앱에서는-환불인데-리포트에서는-매출이다",
  },
  {
    id: "data-engineering-lifecycle-2",
    post: "data-engineering-lifecycle",
    question: "모바일 앱 이벤트에 기기 시각과 함께 서버 수신 시각, 이벤트 ID를 남기는 이유로 가장 알맞은 것은?",
    choices: [
      "서버 저장 공간을 줄이려고",
      "앱 버전을 자동으로 올리려고",
      "오프라인으로 모였다가 늦게 오거나 재전송되는 이벤트를 구분하고 한 번만 세려고",
      "기기 시각이 항상 서버 시각보다 정확해서",
    ],
    answer: 2,
    explanation:
      "네트워크가 끊기면 앱이 이벤트를 모아 두었다가 며칠 뒤 보내고, 기기 시계는 믿기 어렵다. 두 시각을 함께 남겨야 늦게 온 정도를 알고 지난 날짜를 다시 계산할 수 있고, 이벤트 ID가 재전송 중복을 걸러 준다.",
    anchor: "데이터가-생기는-곳",
  },
  {
    id: "data-engineering-lifecycle-3",
    post: "data-engineering-lifecycle",
    question: "수집 방식을 고르기 전에 정할 것 가운데, 필요 이상으로 짧게 잡으면 비용과 운영 부담이 가장 가파르게 늘어나는 것은?",
    choices: [
      "지연 요구",
      "컬럼 이름 규칙",
      "보관 기한",
      "대시보드 색상",
    ],
    answer: 0,
    explanation:
      "하루 한 번이면 되는 리포트를 초 단위로 만들면 스트리밍 버퍼, 상시 실행 작업, 중복·순서 처리가 모두 필요해진다. 실제로 필요한 지연보다 짧게 잡지 않는 것이 흔한 과설계를 피하는 길이다.",
    anchor: "가져올-때-먼저-정할-것",
  },
  {
    id: "data-engineering-lifecycle-4",
    post: "data-engineering-lifecycle",
    question: "운영 PostgreSQL에서 월별 매출 리포트를 직접 돌릴 때 생기는 문제로 맞지 않는 것은?",
    choices: [
      "테이블 전체를 훑는 읽기가 서비스 쿼리와 캐시·디스크를 다툰다",
      "지금 상태만 있어 과거 시점을 묻는 질문에 답하기 어렵다",
      "결제사·광고 같은 다른 원본과 조인할 수 없다",
      "주문 하나를 기본 키로 찾는 쿼리도 Seq Scan으로 바뀐다",
    ],
    answer: 3,
    explanation:
      "기본 키 조회는 리포트와 상관없이 Index Scan으로 0.2ms 안에 끝났다. 문제는 리포트가 200만 행 전부를 읽으며 자원을 나눠 쓰고, 운영 DB에는 이력과 다른 원본이 없다는 점이다.",
    anchor: "운영-db에-바로-리포트를-걸면",
  },
  {
    id: "data-engineering-lifecycle-5",
    post: "data-engineering-lifecycle",
    question: "원본 psql의 \\copy TO STDOUT을 파이프로 리포트 DB의 \\copy FROM STDIN에 넘기는 스크립트에서, 원본 쿼리가 실패하면 무슨 일이 생길 수 있나?",
    choices: [
      "pipefail이 받는 쪽 트랜잭션도 자동으로 롤백한다",
      "받는 쪽이 빈 입력을 정상으로 받아 TRUNCATE 후 0건으로 커밋해 사본이 비워진다",
      "받는 쪽이 원본 오류를 받아 같은 오류로 멈춘다",
      "파이프는 순서대로 돌아 받는 쪽은 아예 시작하지 않는다",
    ],
    answer: 1,
    explanation:
      "파이프 양쪽은 동시에 돈다. 실험에서 원본이 실패하자 받는 쪽은 TRUNCATE, COPY 0, INSERT를 마치고 커밋했다. pipefail은 종료 코드만 바꾼다. 원본을 먼저 파일로 받고, 적재 트랜잭션 안에서 행 수 급감을 검사해 되돌린다.",
    anchor: "스크립트-하나로-만드는-첫-파이프라인",
  },
  {
    id: "data-engineering-lifecycle-6",
    post: "data-engineering-lifecycle",
    question: "작은 팀이 리포트용 PostgreSQL에서 웨어하우스로 넘어갈 신호로 가장 알맞은 것은?",
    choices: [
      "리포트 쿼리가 분 단위로 느려지고, 원본이 여러 개로 늘어 함께 조인해야 한다",
      "데이터 엔지니어가 한 명 들어왔다",
      "주문 테이블에 컬럼이 하나 추가됐다",
      "새벽 적재가 1분 만에 끝난다",
    ],
    answer: 0,
    explanation:
      "리포트가 느려지거나 복제본의 긴 쿼리가 복제 지연을 만들 때, 결제사·광고·앱 이벤트처럼 원본이 늘어 조인해야 할 때, 과거 시점 질문이 늘 때가 신호다. 한 번에 다 바꾸지 않고 지금 아픈 단계부터 바꾼다.",
    anchor: "postgres-하나에서-웨어하우스로-넘어가는-신호",
  },
];
