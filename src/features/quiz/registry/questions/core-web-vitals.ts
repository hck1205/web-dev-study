import type { QuizQuestion } from "../types";

export const CORE_WEB_VITALS: QuizQuestion[] = [
  {
    id: "core-web-vitals-1",
    post: "core-web-vitals",
    question: "FID를 INP로 바꾼 가장 큰 이유는?",
    choices: [
      "FID는 데스크톱에서만 측정할 수 있었다",
      "FID는 네트워크 응답 시간까지 포함해서 값이 너무 컸다",
      "FID는 첫 입력의 대기 시간만 재서 핸들러 실행과 화면 갱신, 이후 입력의 버벅임을 놓쳤다",
      "FID는 p75가 아니라 평균으로 계산했다",
    ],
    answer: 2,
    explanation:
      "FID는 첫 번째 입력이 핸들러를 시작하기까지 기다린 시간만 쟀다. 그래서 핸들러가 오래 돌거나 두 번째 클릭부터 느려도 좋게 나왔다. INP는 모든 상호작용에서 입력 지연, 처리 시간, 표시 지연을 합친 전체 지연을 본다.",
    anchor: "세-숫자가-각각-재는-것",
  },
  {
    id: "core-web-vitals-2",
    post: "core-web-vitals",
    question: "Lighthouse 리포트에 INP 대신 TBT가 나오는 이유는?",
    choices: [
      "Lighthouse는 페이지를 불러오기만 하고 클릭이나 입력을 하지 않기 때문에",
      "INP는 서버에서만 계산할 수 있기 때문에",
      "TBT가 INP의 새 이름이기 때문에",
      "INP는 크롬이 아닌 브라우저용 지표이기 때문에",
    ],
    answer: 0,
    explanation:
      "INP는 실제 상호작용이 있어야 잴 수 있는데, 실험실 도구는 페이지를 한 번 불러올 뿐 누르지 않는다. 그래서 메인 스레드가 50ms 넘게 막힌 시간의 합인 TBT를 대신 보여 준다. 실제 INP는 CrUX나 RUM 같은 현장 데이터로 본다.",
    anchor: "실험실-점수와-사용자-점수가-다른-이유",
  },
  {
    id: "core-web-vitals-3",
    post: "core-web-vitals",
    question: "LCP를 네 조각으로 나눴더니 리소스 로드 지연이 가장 컸다. 가장 먼저 할 일은?",
    choices: [
      "이미지를 더 작은 파일로 압축한다",
      "서버 응답 속도를 높여 TTFB를 줄인다",
      "이미지에 loading=\"lazy\"를 붙인다",
      "이미지 주소를 HTML에 직접 넣거나 preload해서 브라우저가 일찍 발견하게 한다",
    ],
    answer: 3,
    explanation:
      "리소스 로드 지연은 HTML을 받은 뒤 LCP 이미지 요청을 시작하기까지의 시간이라, 이미지를 늦게 발견했다는 뜻이다. 압축은 로드 시간 조각을 줄일 뿐 이 조각에는 영향이 없다. 주소를 HTML에 넣으면 프리로드 스캐너가 바로 요청한다.",
    anchor: "lcp를-네-조각으로-나눠-보기",
  },
  {
    id: "core-web-vitals-4",
    post: "core-web-vitals",
    question: "모든 이미지에 일괄로 loading=\"lazy\"를 붙였다. LCP는 어떻게 될까?",
    choices: [
      "다른 이미지 요청이 줄어 LCP가 항상 빨라진다",
      "첫 화면 대표 이미지도 레이아웃이 끝난 뒤에야 요청되어 LCP가 늦어진다",
      "lazy는 화면 밖 이미지에만 적용되니 LCP에는 영향이 없다",
      "LCP 후보에서 이미지가 빠지고 텍스트가 LCP가 된다",
    ],
    answer: 1,
    explanation:
      "지연 로딩 이미지는 레이아웃을 마치고 화면 근처에 있는지 확인한 뒤에 요청한다. 첫 화면의 대표 이미지도 이 과정을 기다리게 되니 요청이 늦어진다. LCP 이미지는 기본값인 eager로 두고 fetchpriority=\"high\"를 준다.",
    anchor: "히어로-이미지를-빨리-받는-법",
  },
  {
    id: "core-web-vitals-5",
    post: "core-web-vitals",
    question: "버튼을 누르면 바로 스피너를 그리고, 서버 응답은 1초 뒤에 온다. 이 상호작용의 INP에 대한 설명으로 맞는 것은?",
    choices: [
      "서버 응답까지 기다리므로 INP는 1초가 넘는다",
      "네트워크 요청이 있는 상호작용은 INP에서 빠진다",
      "INP는 다음 화면이 그려질 때까지만 재므로 스피너가 그려진 시점까지가 지연이다",
      "스피너는 애니메이션이라 INP가 끝나지 않는다",
    ],
    answer: 2,
    explanation:
      "INP는 입력부터 다음 프레임이 화면에 그려질 때까지의 시간이다. 네트워크 응답을 기다리는 시간은 들어가지 않으니, 스피너처럼 즉각적인 시각적 피드백을 먼저 그리면 INP는 짧아진다.",
    anchor: "눌렀는데-화면이-늦게-바뀐다",
  },
  {
    id: "core-web-vitals-6",
    post: "core-web-vitals",
    question: "반복문 안에서 요소의 스타일을 바꾸고 곧바로 offsetWidth를 읽으면 무엇이 문제인가?",
    choices: [
      "브라우저가 정확한 값을 주려고 반복마다 레이아웃을 강제로 다시 계산한다",
      "offsetWidth가 항상 0을 돌려준다",
      "스타일 변경이 다음 프레임까지 무시된다",
      "메모리 누수가 생긴다",
    ],
    answer: 0,
    explanation:
      "스타일을 바꾼 뒤 기하 값을 읽으면 브라우저는 그 자리에서 레이아웃을 해야 한다. 읽기와 쓰기를 번갈아 하면 이 강제 레이아웃이 반복마다 일어나는데, 이걸 레이아웃 스래싱이라고 한다. 읽기를 먼저 모아 하고 쓰기를 나중에 몰아 하면 한 번으로 줄어든다.",
    anchor: "긴-작업을-쪼개서-양보하기",
  },
  {
    id: "core-web-vitals-7",
    post: "core-web-vitals",
    question: "0.3s(0.05), 0.8s(0.03), 1.5s(0.02), 4.0s(0.08), 4.6s(0.04), 9.0s(0.01)에 밀림이 있었다. CLS는?",
    choices: ["0.23", "0.10", "0.08", "0.12"],
    answer: 3,
    explanation:
      "앞 밀림과 1초 넘게 떨어지면 새 세션 창을 연다. 창은 0.10, 0.12, 0.01 세 개로 묶이고, CLS는 가장 큰 창의 합인 0.12다. 0.23은 전부 더한 값으로, 2021년 이전의 계산 방식이다.",
    anchor: "밀림을-세션-창으로-묶어-센다",
  },
];
