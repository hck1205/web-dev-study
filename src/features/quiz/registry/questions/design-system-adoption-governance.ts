import type { QuizQuestion } from "../types";

export const DESIGN_SYSTEM_ADOPTION_GOVERNANCE: QuizQuestion[] = [
  {
    id: "design-system-adoption-governance-1",
    post: "design-system-adoption-governance",
    question: "디자인 시스템 컴포넌트 사용 수를 `import { Button }` 정규식 대신 AST 스캐너로 세는 이유는?",
    choices: [
      "정규식은 TypeScript 파일을 읽지 못해서",
      "AST 스캐너만 Storybook 문서 조회수를 함께 가져와서",
      "정규식은 별칭 import, 여러 줄 import, 주석을 구분하지 못해 실제 JSX 사용을 놓치거나 잘못 센다",
      "AST로 세야 번들 크기가 줄어들어서",
    ],
    answer: 2,
    explanation:
      "코드를 구문 트리로 파싱하면 어떤 패키지에서 가져온 컴포넌트가 JSX에서 몇 번, 어떤 props로 쓰였는지 정확히 셀 수 있다. 정규식은 텍스트만 보니 별칭이나 여러 줄 import에서 틀린다.",
    anchor: "import를-세는-것에서-시작한다",
  },
  {
    id: "design-system-adoption-governance-2",
    post: "design-system-adoption-governance",
    question: "시스템 `Button`이 3번, 맨 `button`이 2번, 팀이 만든 `MyButton`이 1번 쓰였다. 버튼 도입률은?",
    choices: ["100%", "50%", "75%", "60%"],
    answer: 1,
    explanation:
      "도입률은 시스템 사용 수를 시스템과 같은 역할의 대체물을 합친 수로 나눈다. 3 ÷ (3 + 2 + 1) = 50%다. 시스템 사용 수만 보면 늘어나는 복제본을 놓친다.",
    anchor: "복제본까지-세야-도입률이-된다",
  },
  {
    id: "design-system-adoption-governance-3",
    post: "design-system-adoption-governance",
    question: "문서 사이트에서 어떤 컴포넌트 페이지 조회는 많은데 코드 스캔의 사용 수는 늘지 않는다. 가장 그럴듯한 해석은?",
    choices: [
      "사람들이 찾아와 읽고는 쓰지 않기로 했다. 문서가 불친절하거나 컴포넌트가 요구를 못 받는다",
      "스캐너가 그 컴포넌트를 세지 못하는 버그가 확실하다",
      "조회가 많으니 이미 충분히 쓰이고 있다",
      "문서 사이트 분석은 사내 도구라 믿을 수 없다",
    ],
    answer: 0,
    explanation:
      "문서는 쓰려고 찾아본 것을, 스캔은 실제로 쓴 것을 보여 준다. 찾아보고도 안 쓴다면 그 사이에서 막힌 것이니 문서나 컴포넌트 자체를 고칠 신호로 본다.",
    anchor: "문서-사이트도-지표를-남긴다",
  },
  {
    id: "design-system-adoption-governance-4",
    post: "design-system-adoption-governance",
    question: "개발 모드 경고를 `process.env.NODE_ENV === \"production\"`일 때 바로 return하고, 같은 키는 한 번만 띄우는 이유로 맞는 것은?",
    choices: [
      "프로덕션에서 경고를 띄우면 React가 렌더링을 멈춰서",
      "한 번만 띄워야 TypeScript 타입 검사를 통과해서",
      "경고를 여러 번 띄우면 브라우저가 콘솔을 잠가서",
      "번들러가 상수로 바꿔 프로덕션 번들에서 경고 코드가 빠지고, 반복 경고로 개발자가 콘솔을 무시하게 되는 걸 막는다",
    ],
    answer: 3,
    explanation:
      "빌드 때 `process.env.NODE_ENV`가 상수로 치환되면 프로덕션 분기 뒤의 경고 코드는 죽은 코드로 지워진다. 목록 100줄에서 같은 경고가 100번 찍히면 아무도 콘솔을 보지 않으니 한 번만 띄운다.",
    anchor: "잘못-쓰면-개발-중에-알려-준다",
  },
  {
    id: "design-system-adoption-governance-5",
    post: "design-system-adoption-governance",
    question: "파일럿 제품으로 가장 알맞은 곳은?",
    choices: [
      "폼과 테이블이 없는 정적인 마케팅 페이지",
      "레거시가 가장 깊고 일정이 촉박한 핵심 결제 화면",
      "폼, 목록, 모달이 고루 있고 협조적인 팀이 맡은, 몇 주 늦어져도 버틸 수 있는 신규 기능",
      "디자인 시스템 팀이 혼자 만드는 데모 앱",
    ],
    answer: 2,
    explanation:
      "파일럿은 컴포넌트가 실제 화면을 끝까지 만들 수 있는지 검증하는 자리다. 너무 단순하면 검증이 안 되고, 너무 위험한 곳이면 시스템 문제가 바로 제품 장애가 된다.",
    anchor: "v1-전에-파일럿-제품에-먼저-넣는다",
  },
  {
    id: "design-system-adoption-governance-6",
    post: "design-system-adoption-governance",
    question: "연합형 거버넌스에서 처음 사례처럼 석 달 묵은 이슈가 생기는 주된 이유는?",
    choices: [
      "연합형은 RFC를 쓸 수 없어서",
      "누가 머지하고 누가 버그를 받는지 이름으로 정해 두지 않아 책임이 비어서",
      "연합형은 시각 회귀 테스트를 돌리지 않아서",
      "제품 팀이 기여하면 버전 번호를 올릴 수 없어서",
    ],
    answer: 1,
    explanation:
      "연합형은 현장 요구가 빨리 들어오는 대신 아무도 책임지지 않는 상태가 되기 쉽다. 그래서 작은 코어 팀이 리뷰와 릴리스를 맡고 담당자를 이름으로 정하는 혼합형을 많이 쓴다.",
    anchor: "누가-결정하나-중앙형과-연합형",
  },
  {
    id: "design-system-adoption-governance-7",
    post: "design-system-adoption-governance",
    question: "`kind`를 `variant`로 바꾸는 codemod가 import 출처부터 확인하는 이유는?",
    choices: [
      "jscodeshift는 import가 없는 파일을 열 수 없어서",
      "import를 확인해야 실행 속도가 빨라져서",
      "출처를 확인하지 않으면 변환 결과가 포맷터에 걸려서",
      "같은 이름의 다른 컴포넌트나 맨 HTML 요소에 붙은 kind까지 바꾸는 사고를 막으려고",
    ],
    answer: 3,
    explanation:
      "`@acme/ui`에서 가져온 Button의 로컬 이름만 모아 그 요소의 prop만 바꾸니, 별칭 import도 잡고 `MyButton`처럼 다른 컴포넌트는 건드리지 않는다. 정규식 치환은 이름만 보니 이 구분을 못 한다.",
    anchor: "폐기-날짜를-지키게-하는-codemod",
  },
];
