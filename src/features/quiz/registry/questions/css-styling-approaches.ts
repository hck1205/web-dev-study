import type { QuizQuestion } from "../types";

export const CSS_STYLING_APPROACHES: QuizQuestion[] = [
  {
    id: "css-styling-approaches-1",
    post: "css-styling-approaches",
    question: "BEM에서 .product-card .title 대신 .product-card__title처럼 클래스 하나로 쓰는 이유로 가장 알맞은 것은?",
    choices: [
      "브라우저가 자손 선택자를 지원하지 않아서",
      "모든 규칙의 명시도를 클래스 하나로 맞춰 나중에 선언한 규칙이 이기는 단순한 규칙만 남기려고",
      "빌드 도구가 클래스 이름을 해시로 바꿀 수 있게 하려고",
      "CSS 파일 크기를 줄이려고",
    ],
    answer: 1,
    explanation:
      "BEM은 중첩 없이 클래스 하나만 쓰게 해서 모든 규칙의 명시도를 같게 만든다. 그러면 명시도 싸움 없이 선언 순서만 신경 쓰면 된다. 이름을 해시로 바꾸는 건 CSS Modules가 하는 일이다.",
    anchor: "이름을-길게-지어-충돌을-피한다-bem",
  },
  {
    id: "css-styling-approaches-2",
    post: "css-styling-approaches",
    question: "CSS Modules를 쓰는 프로젝트에서 여전히 남을 수 있는 문제는?",
    choices: [
      "다른 파일의 같은 클래스 이름과 충돌한다",
      "서버 컴포넌트에서 쓸 수 없다",
      "렌더링할 때마다 스타일을 해시하는 런타임 비용이 든다",
      "쓰이는 파일 안에서 더는 쓰지 않는 클래스가 번들에 그대로 실린다",
    ],
    answer: 3,
    explanation:
      "CSS Modules는 클래스 이름을 파일마다 고유하게 바꿔 충돌을 구조적으로 없애고, 결과물이 평범한 CSS라 런타임 비용도 없고 서버 컴포넌트에서도 쓴다. 하지만 번들러는 보통 파일 안의 안 쓰는 클래스를 추적하지 않아 그런 규칙은 남는다.",
    anchor: "빌드가-이름을-바꿔-주는-css-modules",
  },
  {
    id: "css-styling-approaches-3",
    post: "css-styling-approaches",
    question: "Emotion의 styled 컴포넌트를 Next.js App Router의 서버 컴포넌트로 만들 수 없는 이유는?",
    choices: [
      "런타임 CSS-in-JS는 테마를 컨텍스트로 읽고 브라우저에서 다시 실행되며 규칙을 관리하는데, 서버 컴포넌트는 훅과 컨텍스트를 쓸 수 없어서",
      "Emotion은 TypeScript를 지원하지 않아서",
      "서버 컴포넌트는 className 속성을 받을 수 없어서",
      "서버 컴포넌트는 CSS 파일을 import할 수 없어서",
    ],
    answer: 0,
    explanation:
      "서버 컴포넌트는 서버에서 한 번 실행되고 자바스크립트가 브라우저로 가지 않으며 훅과 컨텍스트를 쓸 수 없다. 런타임 CSS-in-JS는 이것들에 기대니 그 컴포넌트는 use client가 붙은 클라이언트 컴포넌트여야 한다. 서버 컴포넌트도 className을 받고 CSS 파일을 import할 수 있다.",
    anchor: "서버-렌더링과-서버-컴포넌트에서-막히는-지점",
  },
  {
    id: "css-styling-approaches-4",
    post: "css-styling-approaches",
    question: "vanilla-extract나 Panda 같은 제로 런타임 도구에서 css({ color: user.favoriteColor })처럼 쓸 수 없는 이유와 대안은?",
    choices: [
      "보안상 사용자 입력을 스타일에 쓸 수 없어서, 대안은 없다",
      "색 속성은 지원하지 않아서, 배경색으로 바꾼다",
      "빌드 때 코드를 읽어 CSS를 뽑으므로 실행해야 아는 값은 넣을 수 없어서, CSS 변수로 값을 넘긴다",
      "객체 문법을 지원하지 않아서, 템플릿 문자열로 바꾼다",
    ],
    answer: 2,
    explanation:
      "제로 런타임 도구는 빌드 시점에 스타일을 정적으로 읽어 CSS 파일로 만든다. 사용자 데이터처럼 실행해야 아는 값은 빌드 때 알 수 없으니, 규칙은 var(--x)로 만들어 두고 값은 CSS 변수로 인라인 스타일에 넘긴다. 정해진 몇 가지 값이면 변형으로 미리 만든다.",
    anchor: "제로-런타임-자바스크립트로-쓰고-css로-내보낸다",
  },
  {
    id: "css-styling-approaches-5",
    post: "css-styling-approaches",
    question: "Tailwind에서 className={`bg-${tone}-600`}으로 쓴 배지의 색이 화면에 나오지 않는다. 원인은?",
    choices: [
      "Tailwind 4는 600 단계 색을 없앴다",
      "Tailwind는 소스를 실행하지 않고 글자 그대로 훑어서 완성된 bg-red-600이 소스에 없으면 규칙을 만들지 않는다",
      "템플릿 문자열은 className에 쓸 수 없다",
      "tailwind-merge가 클래스를 지웠다",
    ],
    answer: 1,
    explanation:
      "Tailwind는 소스 파일에서 클래스 이름을 문자 그대로 찾아 쓰인 것만 CSS로 만든다. 조합한 문자열은 실행해 봐야 알 수 있어서 찾지 못한다. 가능한 값을 완성된 클래스 이름으로 적어 둔 객체에서 고르면 된다.",
    anchor: "유틸리티-클래스는-css-파일이-자라지-않는다",
  },
  {
    id: "css-styling-approaches-6",
    post: "css-styling-approaches",
    question: "드래그 진행률처럼 연속으로 바뀌는 값을 런타임 CSS-in-JS의 props로 스타일에 넣는 대신 CSS 변수로 넘기면 무엇이 달라지나?",
    choices: [
      "값이 바뀔 때마다 새 규칙을 만들지 않고 규칙 하나가 변수만 읽어 규칙이 쌓이지 않는다",
      "React가 컴포넌트를 더 자주 렌더링한다",
      "서버 렌더링 결과에서 스타일이 빠진다",
      "변수는 상속되지 않아 자식 요소에 적용되지 않는다",
    ],
    answer: 0,
    explanation:
      "props 값이 스타일 문자열에 그대로 들어가면 값마다 다른 해시와 규칙이 생겨 시트가 커진다. 규칙은 width: var(--progress) 하나로 두고 값만 변수로 넘기면 새 규칙이 생기지 않는다. CSS 변수는 상속되므로 자식도 읽을 수 있다.",
    anchor: "동적-스타일은-css-변수로-넘긴다",
  },
  {
    id: "css-styling-approaches-7",
    post: "css-styling-approaches",
    question: "ThemeProvider 객체 대신 data-theme 속성과 CSS 변수로 다크 모드를 바꾸면 얻는 이점은?",
    choices: [
      "자바스크립트 없이도 사용자의 저장된 선택을 읽을 수 있다",
      "CSS 변수는 스타일 재계산을 일으키지 않는다",
      "테마를 바꿀 때 React가 컴포넌트를 다시 렌더링하지 않고, head의 작은 스크립트로 첫 그림 전에 테마를 정할 수 있다",
      "다크 모드 색을 따로 정하지 않아도 자동으로 뒤집힌다",
    ],
    answer: 2,
    explanation:
      "속성 하나만 바꾸면 브라우저가 변수를 읽는 요소의 스타일만 다시 계산하고 React 렌더링은 없다. 첫 그림 전에 실행되는 스크립트로 속성을 미리 붙여 번쩍임도 막는다. 다만 재계산은 일어나므로 :root 변수를 자주 바꾸는 건 피한다.",
    anchor: "테마는-css-변수-한-벌을-바꿔-끼우는-일",
  },
];
