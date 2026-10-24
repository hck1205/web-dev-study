import type { QuizQuestion } from "../types";

export const ARCHITECTURE_DOCS_C4_ADR: QuizQuestion[] = [
  {
    id: "architecture-docs-c4-adr-1",
    post: "architecture-docs-c4-adr",
    question: "기획자에게 우리 시스템이 바깥의 누구와 연동하는지 보여 주려 한다. C4의 어느 그림이 맞나?",
    choices: ["컴포넌트", "코드", "배포", "시스템 컨텍스트"],
    answer: 3,
    explanation:
      "시스템 컨텍스트는 우리 시스템을 상자 하나로 두고 사용자와 바깥 시스템만 그려서 기술 용어 없이 읽힌다. 컴포넌트와 코드는 내부 구조를 보는 단계라 이 질문에는 너무 가깝다.",
    anchor: "확대-단계-네-개",
  },
  {
    id: "architecture-docs-c4-adr-2",
    post: "architecture-docs-c4-adr",
    question: "주문 API를 도커 컨테이너 여섯 개로 띄우고 있다. C4 컨테이너 그림에는 어떻게 그리나?",
    choices: [
      "상자 여섯 개를 그린다",
      "상자 하나로 그리고, 몇 개를 어디에 띄우는지는 배포 그림에서 보여 준다",
      "컨테이너 그림에는 그리지 않는다",
      "Kubernetes 노드 수만큼 상자를 그린다",
    ],
    answer: 1,
    explanation:
      "C4의 컨테이너는 독립적으로 실행되거나 데이터를 저장하는 단위를 뜻하고 도커 컨테이너와 다르다. 같은 앱의 복제본은 상자 하나이고, 배치는 배포 그림의 몫이다.",
    anchor: "컨테이너는-도커-컨테이너가-아니다",
  },
  {
    id: "architecture-docs-c4-adr-3",
    post: "architecture-docs-c4-adr",
    question: "Structurizr DSL처럼 모델 하나에서 여러 뷰를 뽑는 방식의 이점으로 가장 알맞은 것은?",
    choices: [
      "그림을 그릴 때 색을 자동으로 정해 준다",
      "UML 표기법을 강제해 준다",
      "컨텍스트 그림과 컨테이너 그림이 같은 관계에서 만들어져 서로 어긋날 수 없다",
      "코드 단계 그림을 손으로 그리지 않아도 된다",
    ],
    answer: 2,
    explanation:
      "관계를 모델에 한 번 쓰면 각 단계 그림에 맞는 화살표가 자동으로 생긴다. 동적 그림도 모델에 있는 관계만 쓸 수 있어 흐름 그림이 구성 그림과 다른 말을 하지 않는다.",
    anchor: "그림을-코드로-그린다",
  },
  {
    id: "architecture-docs-c4-adr-4",
    post: "architecture-docs-c4-adr",
    question: "ADR의 '검토한 선택지' 칸이 특히 쓸모 있는 이유는?",
    choices: [
      "나중에 '그건 왜 안 했어요?'라는 질문에 답하고, 같은 논쟁을 처음부터 되풀이하지 않게 해서",
      "ADR 번호를 매기는 데 필요해서",
      "선택지가 많을수록 결정이 정확해져서",
      "Nygard의 원래 형식에서 필수 칸이라서",
    ],
    answer: 0,
    explanation:
      "버린 안과 버린 이유가 없으면 나중에 같은 제안이 나올 때마다 다시 조사해야 한다. 나이가드의 원래 다섯 칸에는 없지만 MADR 같은 템플릿은 이 칸을 따로 둔다.",
    anchor: "결정을-한-장씩-남기는-adr",
  },
  {
    id: "architecture-docs-c4-adr-5",
    post: "architecture-docs-c4-adr",
    question: "2년 전 승인된 ADR-0007의 결정을 바꾸기로 했다. 올바른 처리는?",
    choices: [
      "ADR-0007의 결정 칸을 새 내용으로 고친다",
      "ADR-0007을 삭제하고 같은 번호로 새로 쓴다",
      "위키로 옮기고 저장소의 ADR은 지운다",
      "새 ADR을 쓰고 ADR-0007의 상태를 '대체됨'으로 바꿔 새 번호를 적는다",
    ],
    answer: 3,
    explanation:
      "ADR은 결정의 역사를 남기는 문서라 승인된 내용은 고치지 않는다. 옛 결정도 그때는 맞았을 수 있고, 덮어쓰면 그 이유를 다시 알 수 없다.",
    anchor: "adr은-고치지-않고-새로-쓴다",
  },
  {
    id: "architecture-docs-c4-adr-6",
    post: "architecture-docs-c4-adr",
    question: "ADR 맥락 칸을 '결제 서비스가 가끔 느리다' 대신 '1분기 장애 2회, p99 30초'처럼 써야 하는 이유는?",
    choices: [
      "숫자가 있어야 ADR 도구가 파싱할 수 있어서",
      "지금의 지표와 비교해 그 이유가 아직 유효한지 확인할 수 있어서",
      "문서가 길어 보여야 리뷰를 통과해서",
      "Y-문장 형식이 숫자를 요구해서",
    ],
    answer: 1,
    explanation:
      "맥락은 나중에 결정을 바꿔도 되는지 판단하는 기준이다. 숫자가 있으면 그 사실이 지금도 참인지 바로 확인할 수 있고, '가끔 느리다'는 확인할 방법이 없다.",
    anchor: "쓸모없어지는-adr의-모양",
  },
  {
    id: "architecture-docs-c4-adr-7",
    post: "architecture-docs-c4-adr",
    question: "CODEOWNERS에 docs/adr 경로를 아키텍처 팀으로 지정했는데, 승인 없이도 PR이 머지된다. 왜 그런가?",
    choices: [
      "CODEOWNERS는 마크다운 파일에는 적용되지 않아서",
      "경로 끝에 슬래시가 있어서",
      "브랜치 보호에서 코드 소유자 리뷰 필수를 켜지 않아 리뷰어 지정만 되고 있어서",
      "PR 템플릿이 없어서",
    ],
    answer: 2,
    explanation:
      "CODEOWNERS는 해당 경로가 바뀐 PR에 리뷰어를 자동으로 붙이지만, 머지를 막는 건 브랜치 보호의 코드 소유자 리뷰 필수 설정이다. 둘을 함께 써야 문서 리뷰가 강제된다.",
    anchor: "문서가-낡지-않게-리뷰에-묶는다",
  },
];
