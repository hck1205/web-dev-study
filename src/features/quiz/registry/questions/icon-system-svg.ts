import type { QuizQuestion } from "../types";

export const ICON_SYSTEM_SVG: QuizQuestion[] = [
  {
    id: "icon-system-svg-1",
    post: "icon-system-svg",
    question:
      "sideEffects: false와 ESM 빌드를 갖춘 아이콘 패키지인데, 아이콘 세 개만 쓰는 앱의 번들에 아이콘이 전부 실렸다. 가장 그럴듯한 원인은?",
    choices: [
      "패키지가 CommonJS로만 배포되어서",
      "minify를 켜지 않아서",
      "import * as Icons로 받은 뒤 Icons[name]처럼 문자열 키로 골라서",
      "react를 external로 빼지 않아서",
    ],
    answer: 2,
    explanation:
      "실행해 봐야 아는 키로 꺼내면 번들러는 어떤 export가 쓰일지 알 수 없어 모두 남긴다. 측정에서 이름을 정한 import 세 개는 2KB가 안 됐고 문자열로 고르면 600KB가 됐다. 패키지 조건은 갖춰져 있으니 CommonJS 문제가 아니다.",
    anchor: "1500개를-실은-import-한-줄",
  },
  {
    id: "icon-system-svg-2",
    post: "icon-system-svg",
    question:
      "아이콘을 외부 sprite.svg로 모아 CDN 도메인에 올리고 <use href=\"https://cdn.example.com/sprite.svg#trash\">로 불렀더니 아이콘이 비어 보인다. 이유는?",
    choices: [
      "symbol에 viewBox가 있으면 use가 동작하지 않아서",
      "use가 가리키는 외부 파일은 같은 출처에 있어야 해서",
      "스프라이트는 HTML 안에 넣어야만 동작해서",
      "currentColor가 외부 파일에서는 검정이 되어서",
    ],
    answer: 1,
    explanation:
      "use로 불러오는 외부 SVG 파일은 문서와 같은 출처여야 한다. 다른 도메인에 두면 불러오지 못해 아이콘 자리가 빈다. 외부 파일 자체는 가능하고, 같은 출처라면 한 번 받아 캐시되는 게 장점이다.",
    anchor: "아이콘을-싣는-세-가지-방법",
  },
  {
    id: "icon-system-svg-3",
    post: "icon-system-svg",
    question:
      "아이콘 폰트의 span 하나만 든 버튼을 Chromium 접근성 트리에서 보면 이름이 어떻게 나오나?",
    choices: [
      "아이콘 폰트의 글리프 이름(trash)",
      "이름이 계산되지 않고 버튼이 트리에서 빠진다",
      "CSS 클래스 이름",
      "CSS content로 넣은 사용자 영역 글자 하나",
    ],
    answer: 3,
    explanation:
      "CSS content로 넣은 글자도 버튼 내용으로 계산돼서, 실험에서 버튼 이름이 U+E900 글자 하나가 됐다. 사람이 읽을 수 없는 이름이다. 아이콘 span에 aria-hidden을 붙이고 버튼에 따로 이름을 줘야 한다.",
    anchor: "아이콘에는-이름이-없다-버튼에-있다",
  },
  {
    id: "icon-system-svg-4",
    post: "icon-system-svg",
    question:
      "화면에 '취소'라고 보이는 버튼에 aria-label=\"닫기\"를 붙였다. 어떤 문제가 생기나?",
    choices: [
      "aria-label이 보이는 글자를 덮어써서, 보이는 글자로 부르는 음성 명령 사용자가 누를 수 없다",
      "aria-label은 내용이 있으면 무시되어 아무 영향이 없다",
      "스크린리더가 취소와 닫기를 둘 다 읽는다",
      "버튼이 포커스를 받지 못한다",
    ],
    answer: 0,
    explanation:
      "이름 계산에서 aria-label이 내용보다 앞서서 이름은 닫기가 된다. 보이는 글자와 들리는 이름이 달라져 WCAG 2.5.3(Label in Name)에 걸린다. 글자가 보이는 버튼에는 aria-label을 붙이지 않는 게 기본이다.",
    anchor: "아이콘에는-이름이-없다-버튼에-있다",
  },
  {
    id: "icon-system-svg-5",
    post: "icon-system-svg",
    question:
      "24칸 viewBox에 stroke-width 2로 그린 아이콘을 16px로 그리면 화면에서 선 굵기는 얼마이고, 2px로 보이게 하려면 stroke-width를 얼마로 넣어야 하나?",
    choices: [
      "2px 그대로, 바꿀 필요 없다",
      "약 1.33px, 1.5",
      "약 1.33px, 3",
      "약 2.67px, 1.5",
    ],
    answer: 2,
    explanation:
      "viewBox 기준 선은 그림과 함께 줄어서 2 × 16 / 24 ≈ 1.33px이 된다. 거꾸로 2 × 24 / 16 = 3을 넣으면 화면에서 2px로 보인다. 2.67px은 32px로 키웠을 때의 굵기다.",
    anchor: "24칸-바둑판과-같은-굵기의-선",
  },
  {
    id: "icon-system-svg-6",
    post: "icon-system-svg",
    question:
      "SVGO 4 기본 설정으로 아이콘을 줄였더니 결과에 width·height와 디자인 파일의 title이 남았다. 아이콘 시스템용으로 바꾸는 방법으로 맞는 것은?",
    choices: [
      "removeViewBox를 켜서 크기 정보를 모두 지운다",
      "removeDimensions와 removeTitle을 켜고, convertColors의 currentColor로 색을 비운다",
      "preset-default를 끄고 아무 플러그인도 쓰지 않는다",
      "title은 남겨 두고 aria-hidden을 붙이면 title이 이름으로 읽힌다",
    ],
    answer: 1,
    explanation:
      "SVGO 4는 viewBox와 title을 지우는 플러그인을 기본 묶음에서 뺐다. 그래서 width·height를 지우는 removeDimensions, title을 지우는 removeTitle, currentColor로 바꾸는 convertColors를 설정에 넣는다. viewBox를 지우면 크기를 바꿀 때 그림이 잘린다.",
    anchor: "그려-온-svg를-컴포넌트로-바꾸는-길",
  },
  {
    id: "icon-system-svg-7",
    post: "icon-system-svg",
    question:
      "필터 초기화 버튼에 휴지통 아이콘을 썼더니 사용자가 버튼을 잘 누르지 않는다. 글이 말하는 원인은?",
    choices: [
      "휴지통은 삭제로 굳은 예약 아이콘이라 데이터가 지워질 것처럼 보여서",
      "휴지통 아이콘이 너무 작아서",
      "아이콘 이름을 모양이 아니라 뜻으로 지어서",
      "아이콘에 aria-hidden을 붙여서",
    ],
    answer: 0,
    explanation:
      "휴지통, X, 뒤로 화살표처럼 사용자가 뜻을 외운 아이콘은 예약 아이콘으로 정하고 그 뜻으로만 쓴다. 필터 초기화에 휴지통을 쓰면 저장한 필터가 지워질까 봐 누르지 않는다. 이름 규칙이나 aria-hidden은 보이는 뜻과 상관이 없다.",
    anchor: "예약된-아이콘은-다른-뜻으로-쓰지-않는다",
  },
];
