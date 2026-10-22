import type { QuizQuestion } from "../types";

export const PERFORMANCE_METRICS_MEASUREMENT: QuizQuestion[] = [
  {
    id: "performance-metrics-measurement-1",
    post: "performance-metrics-measurement",
    question: "서버가 HTML을 600ms 늦게 주게 했더니 FCP가 52ms에서 652ms로 늘었다. 왜 거의 그대로 늘었나?",
    choices: [
      "FCP는 TTFB를 포함하지 않는 지표라 우연히 맞았다",
      "첫 바이트가 오기 전에는 아무것도 그릴 수 없어서 TTFB가 FCP의 바닥이 된다",
      "서버 지연이 CSS 다운로드를 600ms 늦췄기 때문이다",
      "브라우저가 TTFB만큼 그리기를 일부러 미루기 때문이다",
    ],
    answer: 1,
    explanation:
      "HTML의 첫 바이트가 와야 파싱도 그리기도 시작할 수 있다. 그래서 TTFB에서 늘어난 시간은 FCP와 LCP에 그대로 더해진다. Navigation Timing에서 requestStart와 responseStart 사이가 600ms 늘어난 것으로 확인할 수 있다.",
    anchor: "첫-바이트가-오기까지",
  },
  {
    id: "performance-metrics-measurement-2",
    post: "performance-metrics-measurement",
    question: "/bad 페이지의 동기 스크립트는 317ms에 도착했는데 818ms에야 실행됐다. 이유는?",
    choices: [
      "스크립트가 defer 속성을 갖고 있어서",
      "브라우저가 스크립트를 압축 해제하는 데 500ms가 걸려서",
      "longtask 관찰자가 실행을 늦췄기 때문에",
      "앞에 있는 렌더링 차단 CSS가 끝나야 동기 스크립트를 실행하기 때문에",
    ],
    answer: 3,
    explanation:
      "동기 스크립트는 앞선 스타일시트가 적용된 상태를 볼 수 있어야 해서 CSS가 끝날 때까지 기다린다. 816ms에 CSS가 끝나고 400ms짜리 스크립트가 돈 뒤에야 첫 그리기가 일어나 FCP가 1244ms가 됐다.",
    anchor: "처음-무언가-그려지는-순간",
  },
  {
    id: "performance-metrics-measurement-3",
    post: "performance-metrics-measurement",
    question: "Speed Index를 줄이는 데 가장 효과가 큰 것은?",
    choices: [
      "첫 그리기 전의 빈 화면 시간을 줄이고 첫 화면의 큰 덩어리를 일찍 그린다",
      "마지막에 뜨는 작은 요소를 조금 더 빨리 띄운다",
      "TBT를 줄인다",
      "화면 밖 이미지를 lazy로 바꾼다",
    ],
    answer: 0,
    explanation:
      "Speed Index는 안 채워진 비율 × 시간을 더한 값이라, 아무것도 안 그려진 구간이 100% 비율로 들어가 가장 비싸다. /bad의 1586ms 중 1279ms가 첫 그리기 전이었다. 마지막 요소는 남은 작은 비율만 곱해진다.",
    anchor: "화면이-얼마나-빨리-채워지나",
  },
  {
    id: "performance-metrics-measurement-4",
    post: "performance-metrics-measurement",
    question: "FCP가 1200ms인 페이지에서 1000ms에 시작한 300ms짜리 작업은 TBT에 얼마를 보태나?",
    choices: ["250ms", "100ms", "50ms", "0ms"],
    answer: 2,
    explanation:
      "Lighthouse는 FCP 이전 부분을 잘라 내고 남은 길이로 50ms 규칙을 다시 적용한다. 남은 길이는 1300 - 1200 = 100ms이고, 50ms를 넘은 50ms만 TBT에 들어간다.",
    anchor: "막힌-시간을-더하는-법",
  },
  {
    id: "performance-metrics-measurement-5",
    post: "performance-metrics-measurement",
    question:
      "INP 열두 개의 전체 p75는 216ms였지만 느린 기기 구간만 보면 696ms였다. 이 결과에서 얻어야 할 교훈은?",
    choices: [
      "p75 대신 평균을 써야 정확하다",
      "느린 구간 값은 이상치이니 버린다",
      "전체 p75 하나는 느린 구간을 가리니 기기·네트워크·페이지 유형으로 나눠 본다",
      "표본이 적으니 p99를 써야 한다",
    ],
    answer: 2,
    explanation:
      "빠른 사용자와 느린 사용자가 섞이면 전체 p75는 빠른 쪽에 끌려가 느린 기기의 꼬리를 못 본다. 평균(298ms)도 무엇이 문제인지 말해 주지 않는다. 구간을 나누고 구간마다 표본 수도 함께 본다.",
    anchor: "숫자를-묶는-방법이-결론을-바꾼다",
  },
  {
    id: "performance-metrics-measurement-6",
    post: "performance-metrics-measurement",
    question: "느린 네트워크 구간의 RUM LCP 요소가 히어로 이미지가 아니라 문단으로 기록됐다. 가장 그럴듯한 이유는?",
    choices: [
      "web-vitals가 이미지 요소를 LCP 후보에서 뺀다",
      "사용자가 이미지가 뜨기 전에 눌러서 LCP 기록이 그 시점에 멈췄다",
      "문단이 이미지보다 항상 크게 계산된다",
      "sendBeacon이 이미지 정보를 잘라 냈다",
    ],
    answer: 1,
    explanation:
      "LCP는 첫 클릭·키 입력에서 기록을 멈춘다. 이미지가 오기 전에 누르면 그때까지 가장 컸던 문단이 LCP가 된다. 그래서 현장 LCP는 attribution의 target 분포를 함께 봐야 하고, 아무도 누르지 않는 실험실 LCP와 다를 수 있다.",
    anchor: "현장-데이터만-보여-주는-함정",
  },
  {
    id: "performance-metrics-measurement-7",
    post: "performance-metrics-measurement",
    question: "미리 렌더링(prerender)된 페이지의 LCP를 PerformanceObserver로 직접 계산할 때 빠뜨리기 쉬운 처리는?",
    choices: [
      "Navigation Timing의 activationStart를 빼서 실제로 화면에 들어온 순간을 기준으로 맞추기",
      "LCP 값에 TTFB를 한 번 더 더하기",
      "buffered 옵션을 false로 바꾸기",
      "layout-shift 엔트리를 함께 빼기",
    ],
    answer: 0,
    explanation:
      "미리 렌더링된 페이지는 사용자가 들어오기 전에 로딩이 끝나 있어 엔트리 시각을 그대로 쓰면 값이 이상하게 나온다. web-vitals는 activationStart를 빼서 맞춘다. 처음부터 숨겨진 탭 거르기, bfcache 복원 다시 재기도 직접 짤 때 흔히 빠지는 규칙이다.",
    anchor: "지표가-거짓말하는-순간들",
  },
];
