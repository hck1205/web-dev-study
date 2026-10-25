import type { QuizQuestion } from "../types";

export const CSS_COLOR_BACKGROUND: QuizQuestion[] = [
  {
    id: "css-color-background-1",
    post: "css-color-background",
    question: "반투명 초록을 #0f08로 적었다. 브라우저가 계산한 알파 값은?",
    choices: ["0.5", "0.8", "0.533", "0.08"],
    answer: 2,
    explanation:
      "4자리 hex의 마지막 자리 8은 88로 늘어나 136/255, 즉 약 0.533이 된다. 퍼센트나 0.8로 읽는 실수가 흔하다. 정확히 반투명이 필요하면 rgb(0 255 0 / 50%)처럼 슬래시 알파를 쓰는 편이 읽기 쉽다.",
    anchor: "hex-rgb-hsl은-같은-색을-다르게-적은-것이다",
  },
  {
    id: "css-color-background-2",
    post: "css-color-background",
    question: "HSL 밝기만 10%씩 바꿔 단계 색을 만들었더니 노랑 단계와 파랑 단계의 밝기가 전혀 맞지 않는다. 이유는?",
    choices: [
      "HSL의 밝기는 사람 눈이 느끼는 밝기와 맞지 않아 같은 50%라도 노랑은 밝고 파랑은 어둡게 보여서",
      "hsl()은 sRGB 밖의 색을 표현해서",
      "브라우저가 hsl을 rgb로 바꿀 때 반올림 오차가 커서",
      "노랑은 채도가 100%를 넘을 수 없어서",
    ],
    answer: 0,
    explanation:
      "hsl(60 100% 50%)와 hsl(240 100% 50%)를 OKLCH로 바꾸면 L이 0.97과 0.45로 크게 다르다. HSL은 RGB를 원기둥 모양으로 다시 적은 것이라 밝기 축이 지각 밝기와 다르다. 반올림 오차는 1 정도라 원인이 아니다.",
    anchor: "hsl의-50는-눈에-같은-밝기가-아니다",
  },
  {
    id: "css-color-background-3",
    post: "css-color-background",
    question: "oklch(from var(--brand) calc(l + 0.2) c h)로 밝은 단계를 만들었는데 화면에서 예상보다 색이 덜 진하다. 가장 그럴듯한 이유는?",
    choices: [
      "상대 색 문법이 크로마를 자동으로 절반으로 줄여서",
      "밝기를 올린 색이 sRGB 범위를 넘어 브라우저가 칠할 때 범위 안으로 끌어당겨서",
      "calc()가 oklch 안에서 무시되어서",
      "color-scheme이 지정되지 않아서",
    ],
    answer: 1,
    explanation:
      "#2563eb에서 L만 0.2 올린 색을 sRGB로 풀면 파랑 성분이 1.2로 범위를 넘는다. 계산값은 그대로지만 칠할 때 gamut mapping이 일어난다. 그래서 밝은 단계는 크로마를 직접 줄여 두는 편이 예측하기 쉽다.",
    anchor: "눈에-고른-단계-색은-oklch로-만든다",
  },
  {
    id: "css-color-background-4",
    post: "css-color-background",
    question: "운영체제를 다크 모드로 두었는데 light-dark(white, black)가 계속 흰색으로 계산된다. 무엇이 빠졌나?",
    choices: [
      "@media (prefers-color-scheme: dark) 블록",
      "html의 data-theme 속성",
      "color-scheme: light dark 선언",
      "@supports (color: light-dark(white, black)) 검사",
    ],
    answer: 2,
    explanation:
      "light-dark()는 문서가 쓰는 color-scheme에 따라 값을 고른다. color-scheme을 정하지 않으면 다크 모드여도 첫 값을 쓴다. 다크 모드를 켠 Chromium에서도 color-scheme이 없으면 흰색, light dark를 주면 검정으로 계산됐다.",
    anchor: "다크-모드에서-같은-색이-번져-보인다",
  },
  {
    id: "css-color-background-5",
    post: "css-color-background",
    question: "background-color: navy를 준 뒤 아래 줄에 background: url(bg.png) no-repeat를 썼더니 배경색이 사라졌다. 이유는?",
    choices: [
      "이미지가 있으면 배경색은 항상 그려지지 않아서",
      "url()이 맨 아래 레이어에 깔려 색을 덮어서",
      "명시도가 낮은 쪽이 이겨서",
      "단축 속성이 적지 않은 background-color를 초기값(투명)으로 되돌려서",
    ],
    answer: 3,
    explanation:
      "background 단축 속성은 빠진 하위 속성을 비워 두지 않고 초기값으로 채운다. 그래서 앞에서 정한 색이 투명으로 덮였다. 이미지와 색은 함께 그릴 수 있고, 색은 맨 아래 레이어에 깔린다.",
    anchor: "배경은-여러-겹을-쌓는다",
  },
  {
    id: "css-color-background-6",
    post: "css-color-background",
    question: "linear-gradient(to right, blue, yellow)의 가운데가 칙칙한 회색 띠로 보인다. 가장 알맞은 해결은?",
    choices: [
      "가운데에 white 색 정지점을 추가한다",
      "in oklab이나 in oklch로 섞을 색 공간을 지정한다",
      "background-blend-mode: screen을 준다",
      "transparent를 가운데에 넣는다",
    ],
    answer: 1,
    explanation:
      "기본값인 sRGB에서 파랑과 노랑을 반씩 섞으면 0.5 0.5 0.5 회색이 된다. oklab은 밝기를 고르게, oklch는 크로마를 유지하며 색상환을 따라 섞는다. 흰 정지점은 다른 색을 끼워 넣을 뿐 섞는 방식을 바꾸지 않는다.",
    anchor: "그라데이션은-어느-색-공간에서-섞느냐가-중요하다",
  },
  {
    id: "css-color-background-7",
    post: "css-color-background",
    question: "position: fixed인 헤더가 갑자기 페이지와 함께 스크롤된다. 조상에서 먼저 찾아볼 속성은?",
    choices: [
      "filter나 transform처럼 fixed 자손의 포함 블록을 만드는 속성",
      "box-shadow",
      "outline",
      "background-clip",
    ],
    answer: 0,
    explanation:
      "filter가 none이 아니면 그 요소가 fixed 자손의 기준이 된다. 흐림 0인 필터를 건 부모 안에서 fixed 자식은 뷰포트 top 0이 아니라 부모 기준 top 100에 섰다. box-shadow나 outline은 칠만 할 뿐 기준을 바꾸지 않는다.",
    anchor: "opacity와-filter가-바꾸는-것은-색만이-아니다",
  },
];
