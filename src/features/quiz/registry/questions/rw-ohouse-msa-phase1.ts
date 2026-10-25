import type { QuizQuestion } from "../types";

export const RW_OHOUSE_MSA_PHASE1: QuizQuestion[] = [
  {
    id: "rw-ohouse-msa-phase1-1",
    post: "rw-ohouse-msa-phase1",
    question: "오늘의집이 MSA 목표에 '현재 기준 10배 트래픽 수용'을 더한 이유로 가장 알맞은 것은?",
    choices: [
      "서비스를 나누면 어차피 아키텍처를 다시 설계하고 코드를 새로 쓰게 되니, 그때 트래픽 대역폭을 넓힐 기회로 삼으려고",
      "당시 트래픽이 이미 서버 한계의 10배였기 때문에",
      "쿠버네티스가 10배까지만 확장되기 때문에",
      "투자 계약 조건이었기 때문에",
    ],
    answer: 0,
    explanation:
      "전략 글은 서비스마다 다시 설계하는 김에 높은 트래픽을 감당하게 구성하고 테스트한 뒤 평소에는 줄여 두자는 생각에서 10배를 목표로 잡았다고 썼다. 10배는 국내 시장과 사업 확장을 고려한 값이다.",
    anchor: "지금의-10배를-받는다는-목표",
  },
  {
    id: "rw-ohouse-msa-phase1-2",
    post: "rw-ohouse-msa-phase1",
    question: "오늘의집이 MSA Phase 1 동안 지킨 원칙 '분리하며 발견한 코드 개선이나 버그 수정은 하지 않는다'가 특히 중요했던 이유는?",
    choices: [
      "버그 수정은 QA팀만 할 수 있어서",
      "트래픽 쉐도잉에서 레거시와 새 서비스의 응답을 비교하는데, 동작을 바꾸면 차이가 쏟아져 깨진 것과 고친 것을 가를 수 없어서",
      "Kotlin으로는 Rails 버그를 고칠 수 없어서",
      "3개월 안에 끝내려면 테스트를 생략해야 해서",
    ],
    answer: 1,
    explanation:
      "새 서버의 런칭 조건이 '응답이 같다'였고 이를 Diff Checker로 확인했다. 분리 중 동작을 바꾸면 비교기가 그 차이를 모두 알림으로 보내 검증이 무너진다. 백엔드 편은 감당할 수 없는 스팸 메시지를 받게 될 수 있다고 경고했다.",
    anchor: "그림자-트래픽으로-같은-답인지-확인한다",
  },
  {
    id: "rw-ohouse-msa-phase1-3",
    post: "rw-ohouse-msa-phase1",
    question: "API 게이트웨이의 ext-authz 서버(Go)가 레거시 Rails 세션을 처리한 방식은?",
    choices: [
      "Rails에 세션 해석 API를 두고 요청마다 호출했다",
      "Go에서 Ruby를 자식 프로세스로 실행해 결과를 받았다",
      "Ruby Marshal 형식을 Go로 직접 읽되, UserId가 든 값 하나만 해석했다",
      "모든 사용자에게 다시 로그인하게 해 JWT로 바꿨다",
    ],
    answer: 2,
    explanation:
      "앞의 두 방법은 모든 요청 앞단에서 도는 인증 서버에 통신 오버헤드가 너무 컸다. Go로는 Rails 객체 전체를 되살릴 수 없어 필요한 UserId만 해석했고, 다른 정보가 필요하면 추가 구현이 필요하다는 제약을 받아들였다. 앱 강제 업데이트 없이 바꾸는 것이 조건이었다.",
    anchor: "게이트웨이에서-rails-세션을-읽어야-했다",
  },
  {
    id: "rw-ohouse-msa-phase1-4",
    post: "rw-ohouse-msa-phase1",
    question: "JWKS를 OAuth 서버의 URL에서 받지 않고 쿠버네티스 Secret으로 공유한 이유는?",
    choices: [
      "JWKS는 URL로 공개하면 안 되는 비밀이라서",
      "OAuth 서버에 부하가 가고, 그 서버가 잘못 배포되거나 장애가 나면 JWKS에 기대는 서비스들이 함께 멈출 수 있어서",
      "Envoy가 HTTP 요청을 보낼 수 없어서",
      "JWT 서명에 키가 필요 없어서",
    ],
    answer: 1,
    explanation:
      "인증 서버가 다른 서버의 가용성에 묶이지 않게 하려는 선택이다. Secret 주입은 External Secrets 컨트롤러로 비밀 저장소를 추상화해, 저장소가 내려가도 이미 만들어진 Secret 객체로 서비스가 돌게 했다.",
    anchor: "게이트웨이에서-rails-세션을-읽어야-했다",
  },
  {
    id: "rw-ohouse-msa-phase1-5",
    post: "rw-ohouse-msa-phase1",
    question: "오늘의집 Aggregator의 역할과 설계 원칙으로 맞지 않는 것은?",
    choices: [
      "여러 마이크로서비스의 응답을 조합해 기존 API와 100% 같은 결과를 만든다",
      "새로 만드는 기능도 Aggregator를 거치게 해 응답 형식을 통일한다",
      "집계가 필요한 필드만 DTO에 선언하고 나머지는 그대로 통과시킨다",
      "코드에 @Deprecated를 붙이고 비즈니스 로직을 최소화한다",
    ],
    answer: 1,
    explanation:
      "Aggregator는 구버전 응답을 유지하기 위한 임시 층이라, 새 기능은 Aggregator를 쓰지 않고 화면별 BFF가 마이크로서비스와 직접 통신하게 설계했다. 버릴 것을 전제로 만든 층이다.",
    anchor: "응답을-똑같이-맞추는-층-aggregator",
  },
  {
    id: "rw-ohouse-msa-phase1-6",
    post: "rw-ohouse-msa-phase1",
    question: "레거시 Rails 서비스에서 다른 팀 데이터에 대한 의존성을 끊은 방법은?",
    choices: [
      "직접 관리하지 않는 테이블은 DB 계정 권한으로 접근을 막고, 못 가져오게 된 필드는 비우거나 ID만 응답하게 했다",
      "다른 팀 테이블을 모두 복제해 각 서비스 DB에 넣었다",
      "코드 리뷰에서 다른 팀 테이블 조회를 금지하는 규칙만 정했다",
      "모든 조회를 Kafka 이벤트로 바꿨다",
    ],
    answer: 0,
    explanation:
      "권한으로 막으면 합의를 사람의 기억 대신 DB가 지킨다. 비어 버린 필드는 Aggregator가 다른 팀 API로 채워 원래 응답을 되살렸다.",
    anchor: "응답을-똑같이-맞추는-층-aggregator",
  },
  {
    id: "rw-ohouse-msa-phase1-7",
    post: "rw-ohouse-msa-phase1",
    question: "트래픽 쉐도잉에서 GET 요청만 새 서비스에 복제해 보낸 이유는?",
    choices: [
      "GET 요청이 가장 많아서",
      "Envoy가 POST를 복제할 수 없어서",
      "쓰기 요청을 복제하면 같은 쓰기가 두 번 실행되기 때문에",
      "GET 응답만 Kafka로 보낼 수 있어서",
    ],
    answer: 2,
    explanation:
      "읽기 요청은 복제해도 데이터가 바뀌지 않아 레거시와 새 쪽 응답을 안전하게 비교할 수 있다. 사용자는 계속 레거시의 응답을 받고, 새 쪽 요청은 비동기라 응답 시간에도 영향이 없다.",
    anchor: "그림자-트래픽으로-같은-답인지-확인한다",
  },
];
