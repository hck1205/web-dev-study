import type { QuizQuestion } from "../types";

export const DESIGN_SYSTEM_BUILDING: QuizQuestion[] = [
  {
    id: "design-system-building-1",
    post: "design-system-building",
    question: "컴포넌트가 blue.600 같은 원시 토큰 대신 action.primary 같은 의미 토큰을 써야 하는 이유는?",
    choices: [
      "원시 토큰은 CSS 변수로 만들 수 없어서",
      "의미 토큰이 파일 크기가 더 작아서",
      "원시 토큰은 다크 모드에서 자동으로 뒤집혀서",
      "링크 색만 바꾸거나 테마마다 다른 값을 쓰는 일을 용도 이름 하나만 고쳐 할 수 있어서",
    ],
    answer: 3,
    explanation:
      "원시 토큰은 값의 목록이라 같은 blue.600이 버튼, 링크, 탭에 섞여 쓰이면 하나만 바꾸기 어렵다. 의미 토큰은 용도에 이름을 붙여 원시 토큰을 가리키니 그 용도의 값만 한 곳에서 바꾼다. 원시 토큰을 테마마다 뒤집으면 이름이 거짓말을 하게 된다.",
    anchor: "토큰을-세-층으로-쌓는다",
  },
  {
    id: "design-system-building-2",
    post: "design-system-building",
    question: "라이트에서 문제없던 blue.600(#2563eb)을 다크 배경(#121212) 위 글자색으로 그대로 쓰면 어떻게 되나?",
    choices: [
      "대비가 약 3.62:1로 본문 글자 기준 4.5:1에 못 미친다",
      "대비가 21:1로 너무 높아 눈이 부시다",
      "브라우저가 color-scheme에 맞춰 자동으로 밝게 바꿔 준다",
      "대비는 배경과 상관없이 같으니 문제없다",
    ],
    answer: 0,
    explanation:
      "대비율은 두 색의 상대 휘도로 정해지므로 배경이 바뀌면 달라진다. blue.600은 #121212 위에서 3.62:1이라 글자로는 모자라고, 다크에서는 의미 토큰이 blue.400처럼 더 밝은 값을 가리키게 한다. color-scheme은 스크롤바 같은 기본 UI만 바꾼다.",
    anchor: "다크-모드는-의미-층에서-갈라진다",
  },
  {
    id: "design-system-building-3",
    post: "design-system-building",
    question: "디자인 시스템이 드롭다운 메뉴를 직접 만들지 않고 Radix나 React Aria 같은 헤드리스 라이브러리 위에 만드는 주된 이유는?",
    choices: [
      "헤드리스 라이브러리가 기본 테마를 예쁘게 제공해서",
      "키보드 탐색, 포커스 복귀, ARIA 같은 동작과 접근성은 회사마다 같고 제대로 만들기 어려워서 맡기고 모양만 입히려고",
      "번들 크기가 항상 0이 되어서",
      "라이브러리가 업데이트되어도 우리 시스템에는 영향이 없어서",
    ],
    answer: 1,
    explanation:
      "헤드리스 라이브러리는 스타일 없이 동작과 접근성만 준다. 여러 스크린 리더와 브라우저에서 제대로 동작하게 만드는 비용을 아끼고 토큰으로 모양만 입힌다. 대신 DOM 구조와 data 속성에 스타일이 묶여 라이브러리의 메이저 업데이트가 우리의 깨지는 변경이 될 수 있다.",
    anchor: "동작과-모양을-나눈다",
  },
  {
    id: "design-system-building-4",
    post: "design-system-building",
    question: "Button에 as prop 대신 asChild 방식을 고를 때의 장점과 조건으로 맞는 것은?",
    choices: [
      "자식을 여러 개 받을 수 있고 ref가 필요 없다",
      "자식 요소의 props를 모두 지우고 Button의 props만 남긴다",
      "타입이 단순하고 Link 같은 컴포넌트와 잘 맞지만, 자식이 하나여야 하고 그 자식이 props와 ref를 DOM까지 전달해야 한다",
      "as보다 타입이 복잡하지만 렌더링이 빠르다",
    ],
    answer: 2,
    explanation:
      "asChild는 자식 요소를 그대로 그리면서 Button의 클래스, 핸들러, ref를 합쳐 준다. as처럼 태그에 따라 props 타입이 바뀌는 제네릭이 필요 없어 타입이 단순하다. 자식을 복제해 props를 합치는 방식이라 자식은 하나여야 하고 props와 ref를 받아 전달해야 한다.",
    anchor: "컴포넌트-api를-좁고-예측-가능하게",
  },
  {
    id: "design-system-building-5",
    post: "design-system-building",
    question: "개발자 맥북에서 만든 시각 회귀 기준 이미지로 리눅스 CI에서 비교했더니 거의 모든 스토리가 실패한다. 가장 그럴듯한 원인과 해결은?",
    choices: [
      "스토리가 너무 많아서, 스토리 수를 줄인다",
      "운영체제마다 글꼴 렌더링이 달라서, 기준 이미지를 항상 같은 도커 이미지에서 만들고 비교한다",
      "Playwright가 리눅스를 지원하지 않아서, 맥 러너를 쓴다",
      "maxDiffPixelRatio가 너무 작아서, 1로 올린다",
    ],
    answer: 1,
    explanation:
      "글자 가장자리의 안티앨리어싱이 운영체제마다 달라 모든 글자에서 픽셀 차이가 난다. 기준 이미지를 만드는 환경과 비교하는 환경을 같은 도커 이미지로 맞추면 사라진다. 허용치를 크게 올리면 진짜 회귀까지 놓친다.",
    anchor: "눈으로-보던-회귀를-기계가-본다",
  },
  {
    id: "design-system-building-6",
    post: "design-system-building",
    question: "Button의 size 기본값을 md에서 sm으로 바꾸는 변경은 어떤 버전으로 내야 하나?",
    choices: [
      "major. 코드를 하나도 고치지 않은 앱의 화면도 바뀌기 때문이다",
      "patch. prop 이름이 그대로이기 때문이다",
      "minor. 새 기능을 추가한 것이기 때문이다",
      "버전을 올리지 않아도 된다. 타입이 같기 때문이다",
    ],
    answer: 0,
    explanation:
      "기본값은 그 prop을 넘기지 않은 모든 사용처의 결과를 바꾼다. 타입이 같아도 쓰는 쪽의 화면이 깨질 수 있으니 깨지는 변경이다. 이런 변경은 새 값을 먼저 안내하고 다음 major에서 바꾼다.",
    anchor: "깨지는-변경을-알리고-옮겨-준다",
  },
  {
    id: "design-system-building-7",
    post: "design-system-building",
    question: "디자인 시스템 패키지의 React를 dependencies에 두면 생길 수 있는 일은?",
    choices: [
      "패키지를 설치할 수 없다",
      "번들러가 React를 트리 셰이킹으로 지운다",
      "앱이 자동으로 패키지의 React 버전으로 맞춰진다",
      "버전이 어긋날 때 React가 두 벌 설치되어 훅 호출 오류가 난다",
    ],
    answer: 3,
    explanation:
      "dependencies에 두면 앱의 React와 패키지의 React가 따로 깔릴 수 있고, 훅이 다른 React 인스턴스를 찾아 Invalid hook call 오류가 난다. peerDependencies에 두면 앱이 설치한 React 하나를 공유한다. 컨텍스트를 공유해야 하는 라이브러리도 같은 이유로 peer에 둔다.",
    anchor: "모노레포에서-패키지로-내보내기",
  },
];
