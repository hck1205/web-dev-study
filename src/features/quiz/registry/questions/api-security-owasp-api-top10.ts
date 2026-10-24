import type { QuizQuestion } from "../types";

export const API_SECURITY_OWASP_API_TOP10: QuizQuestion[] = [
  {
    id: "api-security-owasp-api-top10-1",
    post: "api-security-owasp-api-top10",
    question:
      "GET /api/orders/18822 로 자기 주문을 보던 사용자가 18821로 바꿔 보냈더니 남의 주문이 내려왔다. 서버가 빠뜨린 것은?",
    choices: [
      "토큰 서명 검증",
      "그 주문이 요청자 소유인지 확인하는 인가",
      "HTTPS 적용",
      "입력값 길이 검사",
    ],
    answer: 1,
    explanation:
      "토큰은 정상이라 인증(누구냐)은 통과했다. 빠진 것은 '이 객체가 이 사람 것이냐'를 묻는 객체 수준 인가(BOLA)다. 쿼리에 소유 조건을 붙이면 막힌다.",
    anchor: "번호만-대면-남의-것이-나온다-bola",
  },
  {
    id: "api-security-owasp-api-top10-2",
    post: "api-security-owasp-api-top10",
    question: "BOLA를 막는 가장 확실한 방법은?",
    choices: [
      "id를 연속 숫자 대신 UUID로 바꾸기",
      "화면에서 남의 주문 버튼을 숨기기",
      "조회·수정 쿼리에 '요청자 소유' 조건을 함께 걸기",
      "요청 횟수를 분당으로 제한하기",
    ],
    answer: 2,
    explanation:
      "UUID는 추측을 어렵게 하는 보완책일 뿐 인가를 대신하지 못한다. 핵심은 데이터 접근 지점에서 '이 사용자의, 이 id의 행'을 찾는 것이다. 버튼 숨김은 API 요청을 전혀 막지 못한다.",
    anchor: "번호만-대면-남의-것이-나온다-bola",
  },
  {
    id: "api-security-owasp-api-top10-3",
    post: "api-security-owasp-api-top10",
    question:
      "이름만 바꾸는 화면인데 PATCH 본문에 {\"role\":\"admin\"}을 끼워 보냈더니 권한이 올라갔다. 이 결함과 방어는?",
    choices: [
      "대량 할당 — 받을 필드를 허용 목록으로 명시해 뽑아 쓴다",
      "SSRF — 내부 IP를 차단한다",
      "과다 노출 — 응답 필드를 줄인다",
      "레이트 리밋 부재 — 요청 수를 제한한다",
    ],
    answer: 0,
    explanation:
      "요청 본문을 객체에 통째로 복사하면 화면에 없는 필드까지 저장된다(대량 할당). 들어온 것을 다 쓰지 말고 name, bio처럼 허용할 필드만 명시적으로 뽑아 쓴다.",
    anchor: "보낸-적-없는-필드가-저장된다-대량-할당",
  },
  {
    id: "api-security-owasp-api-top10-4",
    post: "api-security-owasp-api-top10",
    question:
      "객체 수준 인가(BOLA)와 기능 수준 인가 실패의 차이로 맞는 것은?",
    choices: [
      "둘은 같은 말이다",
      "BOLA는 '이 데이터가 네 것이냐', 기능 수준은 '이 작업을 할 권한이 있느냐'의 문제다",
      "BOLA는 인증 문제, 기능 수준은 인가 문제다",
      "기능 수준 인가는 GraphQL에만 있다",
    ],
    answer: 1,
    explanation:
      "BOLA는 남의 주문을 보는 것처럼 데이터 소유의 문제고, 기능 수준 인가 실패는 일반 사용자가 관리자용 DELETE를 호출하는 것처럼 작업 권한의 문제다. 둘 다 버튼 숨김으로는 막지 못한다.",
    anchor: "관리자용-문이-열려-있다-기능-수준-인가",
  },
  {
    id: "api-security-owasp-api-top10-5",
    post: "api-security-owasp-api-top10",
    question:
      "코드에 아무 버그가 없는데 봇이 티켓을 쓸어 담아 되파는 상황은 어떤 항목이고 왜 Top 10에 들어왔나?",
    choices: [
      "보안 설정 오류 — 기본값이 위험해서",
      "무제한 자원 소비 — 서버가 다운돼서",
      "민감한 업무 흐름 남용 — 사람이라면 하지 않을 속도·규모가 피해를 내서",
      "안전하지 않은 API 소비 — 외부를 믿어서",
    ],
    answer: 2,
    explanation:
      "정상 기능을 비정상적인 속도와 규모로 쓰는 것이라 코드 취약점으로는 설명되지 않는다. 막을 대상이 페이로드가 아니라 패턴이라서 봇 탐지·수량 제한·챌린지가 필요하고, 이 때문에 Top 10에 따로 들어왔다.",
    anchor: "사람은-막았는데-흐름을-막지-않았다-업무-흐름-남용",
  },
  {
    id: "api-security-owasp-api-top10-6",
    post: "api-security-owasp-api-top10",
    question: "/v2를 냈는데 /v1을 끄지 않으면 왜 위험한가?",
    choices: [
      "구버전은 보통 패치가 밀려 취약점이 그대로 공격 표면으로 남아서",
      "두 버전이 같은 DB를 써서 데이터가 깨져서",
      "클라이언트가 어느 쪽을 쓸지 몰라서",
      "응답 속도가 느려져서",
    ],
    answer: 0,
    explanation:
      "신버전만 패치하고 구버전은 방치하는 경우가 많아, 옛 버전이 오히려 더 약한 입구가 된다. 재고 관리(API9)는 엔드포인트 목록을 수집하고 폐기 일정을 붙여 실제로 끄는 것이 핵심이다.",
    anchor: "오래된-문이-아직-살아-있다-재고-관리-실패",
  },
  {
    id: "api-security-owasp-api-top10-7",
    post: "api-security-owasp-api-top10",
    question: "사고 후 액세스 로그에서 BOLA 긁기를 가려내는 신호는?",
    choices: [
      "같은 경로에 5xx 에러가 몰려 있다",
      "한 토큰이 짧은 시간에 연속된 id를 훑고 200이 줄줄이 떴다",
      "응답 시간이 전반적으로 길어졌다",
      "특정 IP에서 TLS 핸드셰이크가 실패했다",
    ],
    answer: 1,
    explanation:
      "연속 id를 차례로 부르며 200이 이어졌다면 데이터가 이미 나갔다는 뜻이다. 그래서 인가 실패는 403, 없는 리소스는 404로 구분해 남겨야 사후에 무엇이 샜는지 추적할 수 있다.",
    anchor: "현장에서-이-목록을-쓰는-순간",
  },
];
