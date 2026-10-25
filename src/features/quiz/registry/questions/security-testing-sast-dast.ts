import type { QuizQuestion } from "../types";

export const SECURITY_TESTING_SAST_DAST: QuizQuestion[] = [
  {
    id: "security-testing-sast-dast-1",
    post: "security-testing-sast-dast",
    question: "'왼쪽으로 옮기기(shift-left)'가 보안 검사를 당기려는 근본 이유는?",
    choices: [
      "DAST가 SAST보다 정확해서",
      "도구 라이선스 비용이 싸져서",
      "결함을 배포 직전에 찾으면 가장 비싸고, 코딩 시점에 찾으면 고치는 비용이 거의 없기 때문",
      "개발자가 보안을 더 좋아해서"
    ],
    answer: 2,
    explanation:
      "개발 흐름의 맨 오른쪽(배포)에서 구멍을 찾으면 다 쌓인 뒤라 되돌리는 비용이 크다. 그 검사를 코딩 순간으로 당겨 자동으로 돌리는 것이 shift-left이고 DevSecOps의 핵심이다.",
    anchor: "도구마다-보는-곳이-다르다",
  },
  {
    id: "security-testing-sast-dast-2",
    post: "security-testing-sast-dast",
    question: "SAST가 ORDER BY 뒤에 붙는, 실제로는 허용 목록으로 걸러진 안전한 값까지 경고로 거는 이유는?",
    choices: [
      "DB가 느려서",
      "허용 목록이 틀려서",
      "SAST가 버그라서",
      "SAST는 앱을 실행하지 않고 '요청 값이 쿼리 문자열에 들어간다'는 코드 패턴만 보기 때문"
    ],
    answer: 3,
    explanation:
      "SAST는 정적 분석이라 런타임의 허용 목록 검증을 모른 채 패턴만으로 거른다. 그래서 오탐이 많고, 규칙 조정과 베이스라인으로 '새로 생긴 것'만 막게 쓴다.",
    anchor: "소스를-읽는-sast",
  },
  {
    id: "security-testing-sast-dast-3",
    post: "security-testing-sast-dast",
    question: "SCA(npm audit 등)가 '취약한 버전'을 찾아도 안심할 수 없는 대표적 이유는?",
    choices: [
      "그 취약한 함수를 우리가 실제로 호출하는지는 기본적으로 모르고, 공개 데이터베이스에 없는 결함은 못 잡기 때문",
      "의존성을 삭제하기 때문",
      "소스 코드를 수정하기 때문",
      "버전 번호를 못 읽어서"
    ],
    answer: 0,
    explanation:
      "SCA는 버전을 알려진 취약점 DB와 대조할 뿐이라, 쓰지도 않는 코드 때문에 경고가 쌓이고(도달 가능성 분석 도구는 늘고 있다) 아직 공개되지 않은 결함은 놓친다.",
    anchor: "의존성을-보는-sca",
  },
  {
    id: "security-testing-sast-dast-4",
    post: "security-testing-sast-dast",
    question: "DAST가 오탐은 적지만 미탐이 큰 이유는?",
    choices: [
      "의존성만 보기 때문",
      "소스를 읽기 때문",
      "실제로 요청을 쏴 반응을 보니 걸린 건 진짜지만, 크롤러가 닿지 못한 화면·경로는 아예 안 찔러 보기 때문",
      "너무 빨라서"
    ],
    answer: 2,
    explanation:
      "DAST는 실제 HTTP 응답으로 판단해 오탐이 적다. 하지만 특정 상태에서만 열리는 경로나 크롤러가 못 닿은 화면은 요청 자체를 안 보내 구멍이 있어도 못 찾는다. 그래서 SAST와 보완 관계다.",
    anchor: "돌아가는-앱을-찌르는-dast",
  },
  {
    id: "security-testing-sast-dast-5",
    post: "security-testing-sast-dast",
    question: "빠른 검사(SAST·SCA·시크릿)는 PR 관문에, DAST는 야간 배치에 두는 이유는?",
    choices: [
      "야간에만 공격이 와서",
      "PR 관문이 DAST를 지원하지 않아서",
      "DAST가 덜 중요해서",
      "DAST는 앱이 실제로 돌아야 하고 느려서 PR마다 돌리면 개발 흐름을 끊기 때문"
    ],
    answer: 3,
    explanation:
      "속도로 나눈다. 수십 초짜리 정적 검사는 병합 전에 거르고, 환경이 필요하고 몇 분~몇십 분 걸리는 DAST는 staging 배포 뒤 야간에 돌려 개발자의 흐름을 끊지 않는다.",
    anchor: "네-도구를-파이프라인에-배치한다",
  },
  {
    id: "security-testing-sast-dast-6",
    post: "security-testing-sast-dast",
    question: "보안 관문에서 베이스라인(이미 아는 결함 목록)을 두는 쓸모는?",
    choices: [
      "레거시에 결함이 많아도 '오늘부터 새로 생긴 것'만 막아 관문을 당장 켤 수 있기 때문",
      "스캔 속도를 높이기 위해",
      "심각도를 낮추기 위해",
      "결함을 영원히 숨기기 위해"
    ],
    answer: 0,
    explanation:
      "문턱 이상이면서 베이스라인에 없는 것만 막으면, 기존 결함 때문에 모든 PR이 막히는 일 없이 관문을 켤 수 있다. 베이스라인은 따로 이슈로 관리해 조금씩 줄인다.",
    anchor: "무엇을-보고-빌드를-막나",
  },
  {
    id: "security-testing-sast-dast-7",
    post: "security-testing-sast-dast",
    question: "스캐너 네 종류가 모두 0건이어도 안전하다고 할 수 없는 이유는?",
    choices: [
      "0건은 불가능하기 때문",
      "스캐너가 버그라서",
      "가격에 음수를 넣거나 주문 번호를 바꿔 남의 것을 보는 업무 로직·인가 결함은 코드 패턴으로도 무작위 요청으로도 안 걸리기 때문",
      "스캐너가 느려서"
    ],
    answer: 2,
    explanation:
      "자동 도구는 알려진 모양만 찾는다. IDOR 같은 인가 결함, 설계 수준 결함, 여러 요청을 엮어야 터지는 것은 못 본다. 그래서 자동 스캔 위에 사람의 펜테스트·위협 모델링·코드 리뷰가 필요하다.",
    anchor: "스캐너가-0건이면-안전한가",
  },
];
