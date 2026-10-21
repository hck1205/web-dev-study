import type { QuizQuestion } from "../types";

export const LAYERED_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "layered-architecture-1",
    post: "layered-architecture",
    question: "컨트롤러, 서비스, 리포지토리를 모두 서버 한 대의 프로세스 하나에 올렸다. 이 구조를 가장 정확히 말한 것은?",
    choices: [
      "3티어 구조다",
      "계층은 셋 이상이지만 티어는 하나다",
      "티어가 셋이므로 계층도 셋이다",
      "프로세스가 하나이므로 레이어드 아키텍처가 아니다",
    ],
    answer: 1,
    explanation:
      "레이어는 코드의 논리적 구분이고 티어는 물리적 배치다. 한 프로세스에 계층 여러 개가 함께 있을 수 있다. 3티어는 웹, 앱, DB가 서로 다른 기계에 있어 그 사이에 네트워크 왕복이 생기는 구조다.",
    anchor: "계층은-코드-티어는-기계",
  },
  {
    id: "layered-architecture-2",
    post: "layered-architecture",
    question:
      "이미 가입된 이메일로 가입하자 500과 함께 \"duplicate key value violates unique constraint\" 메시지가 응답에 실렸다. 가장 알맞은 수정은?",
    choices: [
      "컨트롤러에서 모든 에러를 400으로 바꾼다",
      "유니크 인덱스를 지우고 서비스에서 SELECT로 먼저 확인한다",
      "리포지토리가 23505를 업무 에러로 바꾸고, 컨트롤러가 그 에러를 409로 바꾼다",
      "에러 메시지를 영어 대신 한국어로 바꾼다",
    ],
    answer: 2,
    explanation:
      "드라이버 에러는 그것을 아는 리포지토리에서 업무 에러로 번역하고, HTTP를 아는 컨트롤러가 상태 코드로 바꾼다. 모든 에러를 400으로 바꾸면 타임아웃 같은 진짜 장애가 알림에서 사라진다.",
    anchor: "에러는-층을-건널-때-번역한다",
  },
  {
    id: "layered-architecture-3",
    post: "layered-architecture",
    question: "pg 에러 객체의 detail 필드(Key (lower(email))=(kim@example.com) already exists.)를 응답에 그대로 실으면 생기는 위험은?",
    choices: [
      "어떤 이메일이 가입돼 있는지 확인하는 수단이 된다",
      "응답 크기가 커져 느려진다",
      "JSON 파싱이 실패한다",
      "트랜잭션이 롤백되지 않는다",
    ],
    answer: 0,
    explanation:
      "detail에는 충돌한 실제 값이 들어 있어 다른 사람의 데이터일 수 있다. 응답에 실리면 가입 여부를 확인하는 도구가 되고, 테이블과 제약 이름도 내부 구조를 드러낸다. 이런 필드는 리포지토리 밖으로 나가지 않게 한다.",
    anchor: "에러는-층을-건널-때-번역한다",
  },
  {
    id: "layered-architecture-4",
    post: "layered-architecture",
    question:
      "가입 시 회원 저장과 쿠폰 저장을 각각 풀에서 따로 실행(자동 커밋)했는데 쿠폰 저장이 CHECK에 걸렸다. 결과는?",
    choices: [
      "회원과 쿠폰 모두 저장되지 않는다",
      "회원과 쿠폰 모두 저장된다",
      "쿠폰만 저장된다",
      "회원은 남고 쿠폰은 없는 반쪽 상태가 된다",
    ],
    answer: 3,
    explanation:
      "트랜잭션으로 묶지 않으면 회원 INSERT는 이미 커밋된 뒤라 되돌려지지 않는다. 함께 성공해야 하는 조합은 업무 규칙이라, 서비스 계층이 연결 하나로 BEGIN과 COMMIT/ROLLBACK을 쥐고 리포지토리에 그 연결을 넘긴다.",
    anchor: "트랜잭션-경계는-서비스가-쥔다",
  },
  {
    id: "layered-architecture-5",
    post: "layered-architecture",
    question: "대부분의 요청이 컨트롤러 → 아무 일도 하지 않는 서비스 → 리포지토리를 통과만 한다. 이 상태를 무엇이라 부르나?",
    choices: ["빈약한 도메인 모델", "싱크홀 안티패턴", "분산 모놀리스", "닫힌 계층"],
    answer: 1,
    explanation:
      "요청이 층을 그냥 통과만 하는 것을 싱크홀 안티패턴이라 한다. 일부라면 자연스럽지만 대부분이 그렇다면 계층 구조가 그 문제에 맞지 않는다는 신호다. 단순 조회 부분만 층을 열어 바로 쿼리하게 하는 것도 방법이다.",
    anchor: "닫힌-계층과-열린-계층",
  },
  {
    id: "layered-architecture-6",
    post: "layered-architecture",
    question: "업무 규칙 테스트마다 PostgreSQL 컨테이너를 띄워야 한다. 레이어드 구조에서 이를 풀어 주는 변경은?",
    choices: [
      "서비스 계층을 없애고 컨트롤러에서 규칙을 검사한다",
      "리포지토리를 열린 계층으로 바꾼다",
      "비즈니스 계층에 저장소 인터페이스를 두고 퍼시스턴스가 구현하게 한다",
      "티어를 하나 더 나눈다",
    ],
    answer: 2,
    explanation:
      "전통적 구조에서는 비즈니스가 퍼시스턴스에 의존해 테스트가 DB에 묶인다. 비즈니스 계층이 필요한 것을 인터페이스로 선언하고 퍼시스턴스가 구현하게 하면 의존이 뒤집혀, 메모리로 만든 가짜 구현으로 테스트할 수 있다. 이 방향을 끝까지 밀면 헥사고날·클린 아키텍처가 된다.",
    anchor: "의존이-db를-향할-때-생기는-일",
  },
];
