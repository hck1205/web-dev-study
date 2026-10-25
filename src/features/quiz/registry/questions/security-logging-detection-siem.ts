import type { QuizQuestion } from "../types";

export const SECURITY_LOGGING_DETECTION_SIEM: QuizQuestion[] = [
  {
    id: "security-logging-detection-siem-1",
    post: "security-logging-detection-siem",
    question: "보안 로그에 액세스 토큰·세션 쿠키를 남기면 안 되는 이유로 가장 맞는 것은?",
    choices: [
      "로그 용량이 커져서",
      "로그는 여러 팀이 보고 장기 보관돼, 토큰이 찍히면 그걸 보는 모두가 그 토큰을 쓸 수 있어서",
      "토큰은 암호화되어 있어 쓸모가 없어서",
      "로그 포맷이 깨져서",
    ],
    answer: 1,
    explanation:
      "로그는 운영·보안·분석팀이 두루 보고 중앙 저장소로 흘러가며 오래 보관된다. 토큰 하나가 찍히면 그 로그를 보는 모두가 사용할 수 있고, SSRF나 크래시 리포트로도 샌다. 민감 필드는 마스킹하거나 뺀다.",
    anchor: "무엇을-남기고-무엇을-남기면-안-되나",
  },
  {
    id: "security-logging-detection-siem-2",
    post: "security-logging-detection-siem",
    question: "SIEM의 '상관(correlation)'이 단일 로그 검색보다 강력한 이유는?",
    choices: [
      "로그를 더 빨리 저장해서",
      "하나하나는 정상인 이벤트를 엮어 공격의 연쇄 패턴을 드러내서",
      "로그를 자동으로 삭제해서",
      "모든 로그를 하나의 서버로 옮겨서",
    ],
    answer: 1,
    explanation:
      "로그인 실패 다발 → 성공 → 권한 요청처럼 각각은 정상일 수 있는 이벤트도 엮으면 계정 탈취의 전형이 된다. SIEM은 여러 출처를 공통 필드로 정규화한 뒤 시간 창 규칙으로 이런 연쇄를 탐지한다.",
    anchor: "흩어진-로그를-한-이야기로-siem",
  },
  {
    id: "security-logging-detection-siem-3",
    post: "security-logging-detection-siem",
    question: "탐지 규칙의 임계값을 낮춰 더 민감하게 만들면?",
    choices: [
      "오탐과 미탐이 모두 줄어든다",
      "미탐은 줄지만 오탐(정상을 공격으로 오해)이 늘어난다",
      "오탐은 줄지만 미탐이 늘어난다",
      "오탐과 미탐이 모두 늘어난다",
    ],
    answer: 1,
    explanation:
      "민감하게 조이면 공격은 잘 잡아 미탐이 줄지만, 정상 행위까지 경보가 나 오탐이 는다. 반대로 둔하게 하면 미탐이 는다. 둘은 같은 규칙을 반대로 당기는 맞교환이다.",
    anchor: "경보가-너무-많으면-아무도-안-본다",
  },
  {
    id: "security-logging-detection-siem-4",
    post: "security-logging-detection-siem",
    question: "위협 헌팅(threat hunting)이 규칙 기반 탐지와 다른 점은?",
    choices: [
      "경보를 기다리지 않고 가설을 세워 로그를 능동적으로 뒤져 모르는 공격의 흔적을 찾는다",
      "규칙을 더 많이 자동 생성한다",
      "방화벽 설정을 자동으로 바꾼다",
      "오탐을 전부 제거한다",
    ],
    answer: 0,
    explanation:
      "규칙 기반은 '아는 공격'을 잡는다. 헌팅은 '공격자라면 이렇게 했을 것'이라는 가설로 로그를 뒤져, 규칙으로 못 짠 패턴(평소 안 쓰던 시간대의 관리자 활동 등)을 사람이 찾아낸다.",
    anchor: "경보가-너무-많으면-아무도-안-본다",
  },
  {
    id: "security-logging-detection-siem-5",
    post: "security-logging-detection-siem",
    question: "사이버 킬 체인이나 MITRE ATT&CK을 탐지에 쓰는 주된 목적은?",
    choices: [
      "공격자를 자동으로 차단하려고",
      "공격 단계·기법별로 내가 탐지하고 있는지 점검해 탐지 공백을 찾으려고",
      "로그 저장 비용을 줄이려고",
      "경보를 자동으로 분류하려고",
    ],
    answer: 1,
    explanation:
      "규칙이 많아도 어느 단계를 못 보는지 모르면 구멍이 남는다. 킬 체인은 공격을 단계로, ATT&CK은 전술·기법 격자로 정리해 단계·기법 단위 커버리지를 점검하는 공통 언어다.",
    anchor: "공격의-단계로-탐지-공백을-찾기-킬-체인",
  },
  {
    id: "security-logging-detection-siem-6",
    post: "security-logging-detection-siem",
    question: "SOAR에서 계정 잠금·서버 격리를 사람 승인 단계로 두는 이유는?",
    choices: [
      "자동화가 기술적으로 불가능해서",
      "오탐 하나가 자동으로 멀쩡한 서버를 격리하면 그 자체가 장애가 되어서",
      "이런 작업은 로그를 남기지 않아서",
      "분석가의 일거리를 늘리려고",
    ],
    answer: 1,
    explanation:
      "IP 평판 조회 같은 되돌릴 수 있는 조사는 자동화가 쉽지만, 업무를 멈출 수 있는 조치는 오탐 한 건이 바로 장애가 된다. 그래서 '자동 조사 → 사람 판단 → 반자동 조치' 단계로 둔다.",
    anchor: "사람이-못-따라가는-반복은-자동으로-soar",
  },
  {
    id: "security-logging-detection-siem-7",
    post: "security-logging-detection-siem",
    question: "침해가 의심될 때 바로 계정을 잠그지 않고 조사부터 하는 이유는?",
    choices: [
      "잠그면 로그가 삭제되어서",
      "섣불리 봉쇄하면 공격자가 탐지를 눈치채고 흔적을 지우거나 더 깊이 숨어서",
      "계정 잠금은 관리자 권한이 필요해서",
      "조사 중에는 잠글 수 없어서",
    ],
    answer: 1,
    explanation:
      "먼저 로그로 영향 범위를 시간순으로 재구성하고 백도어·새 계정 같은 지속성을 찾은 뒤 한 번에 봉쇄한다. 이 조사는 로그가 충분히 오래, 위변조되지 않은 채 남아 있어야 가능하다.",
    anchor: "침해를-조사하는-순서",
  },
];
