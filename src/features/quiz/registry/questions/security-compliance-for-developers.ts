import type { QuizQuestion } from "../types";

export const SECURITY_COMPLIANCE_FOR_DEVELOPERS: QuizQuestion[] = [
  {
    id: "security-compliance-for-developers-1",
    post: "security-compliance-for-developers",
    question: "고객사가 SOC 2 Type I이 아니라 Type II 보고서를 달라고 하는 이유로 가장 알맞은 것은?",
    choices: [
      "Type II만 인증서가 나오고 Type I은 의견서라서",
      "Type II는 몇 달의 기간 동안 통제가 실제로 계속 작동했는지를 확인하기 때문에",
      "Type II는 보안 외에 다섯 범주를 모두 반드시 포함해서",
      "Type I은 회사 내부 감사팀이 쓰고 Type II만 외부 감사인이 써서",
    ],
    answer: 1,
    explanation:
      "Type I은 특정 날짜 하나의 설계를, Type II는 관찰 기간 동안의 운영 효과를 본다. 설정은 하루에 켤 수 있지만 몇 달 동안 지켰다는 건 기록이 쌓여야 보인다. SOC 2는 Type과 상관없이 인증이 아니라 외부 감사인의 의견 보고서다.",
    anchor: "이름이-비슷한-다섯-가지",
  },
  {
    id: "security-compliance-for-developers-2",
    post: "security-compliance-for-developers",
    question: "보안 정책에 '취약점 Critical은 24시간 안에 조치한다'고 적어 두면 감사에서 생기기 쉬운 일은?",
    choices: [
      "감사인이 업계 표준보다 엄격하다고 가산점을 준다",
      "감사인은 기한을 보지 않고 스캐너 사용 여부만 확인한다",
      "업스트림 패치를 기다리느라 늦어진 건마다 예외로 잡힌다",
      "Critical 등급만 표본에서 빠진다",
    ],
    answer: 2,
    explanation:
      "감사인은 정답 목록이 아니라 회사가 스스로 적은 정책대로 했는지를 본다. 지키지 못할 기한을 적으면 넘긴 건마다 예외가 되고, 위험 수용 승인이 없으면 그대로 보고서에 실린다. 그래서 정책은 실제로 지킬 수 있는 수준으로 쓴다.",
    anchor: "감사인이-실제로-달라는-것",
  },
  {
    id: "security-compliance-for-developers-3",
    post: "security-compliance-for-developers",
    question: "Type II 감사에서 감사인이 PR 표본을 고르기 전에 '기간 전체 머지 목록'을 먼저 요구하는 이유는?",
    choices: [
      "모집단이 완전해야 표본 테스트 결과를 전체에 대해 믿을 수 있어서",
      "전체 PR을 하나씩 다 읽어 보기 위해서",
      "PR 수가 많을수록 보고서 등급이 올라가서",
      "회사가 깨끗한 PR만 골라 제출할 수 있게 하려고",
    ],
    answer: 0,
    explanation:
      "표본은 모집단에서 감사인이 직접 고른다. 목록에서 일부가 빠져 있으면 표본이 깨끗해도 의미가 없으니, 시스템에서 바로 뽑은 목록과 추출 방법을 함께 요구한다. 회사가 표본을 고르게 두지 않는 것도 같은 이유다.",
    anchor: "표본을-고르는-감사인",
  },
  {
    id: "security-compliance-for-developers-4",
    post: "security-compliance-for-developers",
    question: "감사 시즌마다 콘솔을 캡처하고 엑셀을 채우는 방식을 compliance as code로 바꿀 때 얻는 것으로 가장 알맞은 것은?",
    choices: [
      "감사인이 관찰 기간을 줄여 준다",
      "통제 목록에 없는 위협도 자동으로 막힌다",
      "설정이 코드와 규칙 평가로 강제·기록되어 기간 내내 지켰다는 증거가 계속 쌓인다",
      "SOC 2 대신 ISO 27001만 받아도 된다",
    ],
    answer: 2,
    explanation:
      "캡처는 그 순간만 증명한다. 브랜치 보호를 IaC로, 인프라 규칙을 정책 검사로, 설정 상태를 클라우드 규칙 평가로 두면 막는 것과 기록이 시스템에서 함께 일어난다. 다만 통제 목록에 없는 위협까지 막아 주지는 않는다.",
    anchor: "증거를-사람이-모으지-않게",
  },
  {
    id: "security-compliance-for-developers-5",
    post: "security-compliance-for-developers",
    question: "고객 데이터를 국내에만 두라는 데이터 상주 요건이 생겼다. 주 DB를 서울 리전에 둔 것 말고 함께 확인해야 하는 곳으로 가장 알맞은 것은?",
    choices: [
      "개발자 노트북의 IDE 설정",
      "백업 복제 리전, 로그·APM 수집처, 오류 추적이나 LLM API 같은 외부 하위 처리자",
      "프런트엔드 번들의 압축 방식",
      "Git 브랜치 이름 규칙",
    ],
    answer: 1,
    explanation:
      "데이터는 주 DB 밖으로도 흘러간다. 백업 복제, 로그와 APM, 외부 SaaS로 나가는 호출이 모두 경계를 넘을 수 있다. 데이터 흐름도에 리전과 사업자를 적어 두어야 이 질문에 답할 수 있다.",
    anchor: "법과-계약-그리고-데이터가-머무는-곳",
  },
  {
    id: "security-compliance-for-developers-6",
    post: "security-compliance-for-developers",
    question: "변경 관리 통제를 감사에서 깨끗하게 통과했는데도 악성 코드가 프로덕션에 들어갈 수 있는 경우는?",
    choices: [
      "정상 리뷰 승인을 거친 의존성 업데이트에 악성 코드가 들어 있을 때",
      "브랜치 보호에서 enforce_admins를 켰을 때",
      "모든 PR이 작성자가 아닌 사람의 승인을 받았을 때",
      "감사 로그를 12개월 보관했을 때",
    ],
    answer: 0,
    explanation:
      "감사는 정한 통제가 돌았는지를 볼 뿐 그 통제가 위협을 막는지는 따로 보지 않는다. 승인 절차를 정상으로 거친 공급망 공격은 변경 관리 통제를 완벽히 통과한다. 그래서 위협 모델에서 통제를 만들고 프레임워크는 빠진 칸을 찾는 데 쓴다.",
    anchor: "체크리스트를-다-채워도-뚫린다",
  },
];
