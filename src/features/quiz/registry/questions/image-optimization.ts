import type { QuizQuestion } from "../types";

export const IMAGE_OPTIMIZATION: QuizQuestion[] = [
  {
    id: "image-optimization-1",
    post: "image-optimization",
    question: "390px 폭 모바일 화면에 2725px 원본 JPEG(829KB)가 그대로 내려온다. 가장 먼저 할 일은?",
    choices: [
      "AVIF로만 바꾼다",
      "loading=\"lazy\"를 붙인다",
      "srcset과 sizes로 화면 칸에 맞는 크기를 고르게 한다",
      "fetchpriority=\"high\"를 붙인다",
    ],
    answer: 2,
    explanation:
      "같은 사진을 800px JPEG로만 줄여도 54KB였다. 포맷 차이(JPEG 대비 AVIF 45% 안팎)보다 크기 차이가 훨씬 크다. 크기를 맞춘 뒤에 포맷을 바꾼다.",
    anchor: "같은-사진을-세-포맷으로",
  },
  {
    id: "image-optimization-2",
    post: "image-optimization",
    question: "글자와 단색 상자가 대부분인 관리 화면 스크린샷을 저장한다. 실험에서 가장 작았던 것은?",
    choices: [
      "AVIF 무손실",
      "WebP 무손실",
      "JPEG 품질 75",
      "원본 PNG",
    ],
    answer: 1,
    explanation:
      "WebP 무손실이 5.6KB로 가장 작았고, 사진에서 가장 작던 AVIF는 무손실로 저장하자 55.5KB로 가장 컸다. JPEG는 글자 경계에 얼룩이 생긴다. 이미지 종류에 따라 답이 바뀐다.",
    anchor: "사진이-아니면-답이-바뀐다",
  },
  {
    id: "image-optimization-3",
    post: "image-optimization",
    question: "`srcset`에 400w·800w·1200w·1600w가 있고 `sizes`가 100vw일 때, 390px 화면 DPR 3 기기는 무엇을 받나?",
    choices: [
      "400w, 화면 폭이 390px이라서",
      "800w, DPR은 2까지만 반영해서",
      "1600w, 가장 큰 것을 받아서",
      "1200w, 390×3=1170px 이상인 후보 중 가장 작아서",
    ],
    answer: 3,
    explanation:
      "브라우저는 sizes로 얻은 칸 폭에 DPR을 곱해 필요한 픽셀을 구하고, 그 이상인 후보 중 작은 것을 고른다. Chromium 141에서도 p-1200.jpg를 받았다.",
    anchor: "화면에-맞는-크기를-브라우저가-고르게",
  },
  {
    id: "image-optimization-4",
    post: "image-optimization",
    question: "본문 칸이 720px인 페이지에서 `sizes`를 빼먹었다. 1280px 노트북(DPR 1)에서 어떻게 되나?",
    choices: [
      "브라우저가 100vw로 가정해 1280px로 계산하고 1600w(173KB)를 받는다",
      "브라우저가 실제 칸 720px을 재서 800w를 받는다",
      "srcset이 무시되고 src만 받는다",
      "가장 작은 400w를 받는다",
    ],
    answer: 0,
    explanation:
      "이미지 요청은 레이아웃보다 먼저 나가서 브라우저는 실제 칸을 모르고 sizes를 믿는다. sizes가 없으면 100vw라 54KB 대신 173KB를 받았다. 화면 전체 폭이 아닌 이미지에는 sizes를 적는다.",
    anchor: "화면에-맞는-크기를-브라우저가-고르게",
  },
  {
    id: "image-optimization-5",
    post: "image-optimization",
    question: "이미지 CDN이 Accept 헤더로 AVIF와 WebP를 골라 주게 했더니, 일부 오래된 브라우저에서 이미지가 깨진다. 무엇부터 확인하나?",
    choices: [
      "이미지의 width·height 속성",
      "loading=\"lazy\" 여부",
      "응답에 Vary: Accept가 있는지",
      "srcset 후보 개수",
    ],
    answer: 2,
    explanation:
      "같은 주소가 Accept에 따라 다른 파일이 되므로 Vary: Accept가 없으면 중간 캐시가 AVIF 응답을 AVIF를 모르는 브라우저에도 돌려준다. picture 방식이라면 HTML에 포맷별 후보가 있어 이 문제가 없다.",
    anchor: "포맷은-picture로-또는-서버가-고른다",
  },
  {
    id: "image-optimization-6",
    post: "image-optimization",
    question: "CSS로 `width:100%; height:auto`를 주는 이미지에 HTML `width=\"800\" height=\"653\"`을 적으면 왜 CLS가 사라지나?",
    choices: [
      "이미지가 800px로 고정되어 반응형이 꺼져서",
      "브라우저가 두 숫자로 비율을 알아 이미지가 오기 전에 자리를 잡아서",
      "이미지 다운로드가 빨라져서",
      "layout-shift가 이미지에는 기록되지 않아서",
    ],
    answer: 1,
    explanation:
      "실험에서 크기 정보가 없으면 이미지 하나로 CLS 0.2287이었고, 두 속성을 적자 0이었다. 숫자는 표시 크기가 아니라 비율로 쓰여서 CSS 폭을 바꿔도 반응형은 그대로다. CSS aspect-ratio도 같은 효과가 있다.",
    anchor: "자리를-안-잡으면-글이-밀린다",
  },
  {
    id: "image-optimization-7",
    post: "image-optimization",
    question: "무한 스크롤 피드에 2725×2225 원본 사진을 그대로 쓰면 저가형 폰에서 탭이 다시 로드된다. 가장 큰 원인은?",
    choices: [
      "사진 한 장이 디코딩 후 약 24MB 메모리를 써서",
      "JPEG 파싱이 메인 스레드를 막아서",
      "lazy 로딩이 스크롤을 멈춰서",
      "HTTP 연결이 너무 많아져서",
    ],
    answer: 0,
    explanation:
      "이미지는 화면에 그리려면 픽셀마다 4바이트로 풀린다. 2725×2225는 24,252,500바이트로, 전송 829KB의 약 30배다. 화면 크기에 맞춰 줄이면 메모리와 디코딩 시간도 함께 준다.",
    anchor: "받은-다음에-드는-비용",
  },
];
