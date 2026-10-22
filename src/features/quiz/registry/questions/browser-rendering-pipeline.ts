import type { QuizQuestion } from "../types";

export const BROWSER_RENDERING_PIPELINE: QuizQuestion[] = [
  {
    id: "browser-rendering-pipeline-1",
    post: "browser-rendering-pipeline",
    question:
      "head에 1초 걸리는 스타일시트가 있고 바로 뒤에 performance.mark()만 하는 인라인 스크립트가 있다. 인라인 스크립트는 언제 실행되나?",
    choices: [
      "파일을 받을 필요가 없으니 파싱되자마자 바로 실행된다",
      "DOMContentLoaded가 뜬 뒤에 실행된다",
      "스타일시트가 도착한 뒤에 실행된다",
      "첫 화면을 그린 뒤 다음 프레임에 실행된다",
    ],
    answer: 2,
    explanation:
      "스크립트는 getComputedStyle()처럼 스타일 값을 읽을 수 있어서 앞선 CSS가 올 때까지 실행을 기다린다. 측정에서도 CSS가 1009ms에 끝나자 1010ms에 인라인 스크립트가 돌았고, 그동안 파서도 같이 멈췄다.",
    anchor: "평범한-script를-만나면-파서가-선다",
  },
  {
    id: "browser-rendering-pipeline-2",
    post: "browser-rendering-pipeline",
    question: "1초 걸리는 스크립트를 head에 두었을 때, 첫 화면(FCP)은 빠르지만 DOMContentLoaded만 1초 뒤로 밀리는 속성은?",
    choices: ["async", "defer", "아무 속성 없음", "nomodule"],
    answer: 1,
    explanation:
      "defer는 받는 동안 파서를 막지 않아 첫 화면은 36ms에 그려지지만, 파싱이 끝난 뒤 스크립트를 실행하고 나서야 DOMContentLoaded가 뜬다. async는 DOMContentLoaded를 기다리게 하지 않아 27ms에 끝났고, 속성이 없으면 첫 화면까지 밀린다.",
    anchor: "스크립트-태그의-속성이-순서를-바꾼다",
  },
  {
    id: "browser-rendering-pipeline-3",
    post: "browser-rendering-pipeline",
    question: "파서가 head의 동기 스크립트 앞에서 멈춰 있는 동안에도 일찍 요청이 나가는 리소스는?",
    choices: [
      "스크립트 안에서 new Image()로 만드는 이미지",
      "CSS 파일 안의 background-image",
      "data-src에 주소를 두고 나중에 바꿔 끼우는 이미지",
      "body에 <img src>로 적어 둔 이미지",
    ],
    answer: 3,
    explanation:
      "프리로드 스캐너는 아직 파싱하지 않은 HTML 텍스트를 훑어 img, link, script의 주소를 먼저 요청한다. 자바스크립트가 만드는 요소나 CSS 안의 url()은 HTML에 주소가 없어서 스캐너가 볼 수 없고, 측정에서도 new Image()의 요청은 스크립트가 돈 뒤인 1012ms에야 나갔다.",
    anchor: "파서가-멈춘-동안-앞을-훑는-프리로드-스캐너",
  },
  {
    id: "browser-rendering-pipeline-4",
    post: "browser-rendering-pipeline",
    question: "head에 300ms 걸리는 CSS와 200ms 걸리는 동기 스크립트가 있다. 첫 화면은 대략 언제 그려질 수 있나?",
    choices: [
      "500ms 이후. 둘을 차례로 받아야 하니까",
      "300ms 남짓. 둘을 나란히 받고 가장 늦은 것에 맞추니까",
      "200ms 남짓. 스크립트만 렌더링을 막으니까",
      "거의 바로. CSS는 파싱을 막지 않으니까",
    ],
    answer: 1,
    explanation:
      "프리로드 스캐너 덕분에 두 리소스는 동시에 받아지고, 첫 화면은 렌더링을 막는 것들 중 가장 늦게 끝나는 것에 맞춰진다. 실제로 잰 FCP는 332ms였고, 나머지 32ms는 HTML 응답과 파싱, 첫 레이아웃 몫이다.",
    anchor: "css가-올-때까지-일부러-그리지-않는다",
  },
  {
    id: "browser-rendering-pipeline-5",
    post: "browser-rendering-pipeline",
    question: "크로미움 트레이스에서 메인 스레드의 Paint는 0.5ms인데 다른 스레드에 RasterTask가 여러 번 찍혔다. 왜 그런가?",
    choices: [
      "Paint는 그리기 명령 목록만 만들고, 픽셀은 래스터 워커가 타일 단위로 채우기 때문이다",
      "GPU가 없어서 페인트를 두 번 하기 때문이다",
      "Paint가 실패해서 래스터 워커가 다시 시도했기 때문이다",
      "RasterTask는 이미지 디코딩만 하는 별개의 작업이기 때문이다",
    ],
    answer: 0,
    explanation:
      "크로미움의 페인트는 무엇을 어떤 순서로 그릴지 적은 페인트 기록을 만들 뿐 픽셀을 칠하지 않는다. 래스터 워커가 층을 타일로 잘라 화면 근처부터 픽셀로 바꾸고, 합성 스레드가 그 타일을 겹쳐 프레임을 낸다.",
    anchor: "페인트는-아직-그림이-아니다",
  },
  {
    id: "browser-rendering-pipeline-6",
    post: "browser-rendering-pipeline",
    question:
      "타이머가 배경색을 바꾸고, 같은 프레임의 rAF 콜백이 폭을 원래 값 그대로 다시 넣었다. 이 프레임의 트레이스에서 빠지는 단계는?",
    choices: ["UpdateLayoutTree(스타일 계산)", "Paint", "Layout", "Commit"],
    answer: 2,
    explanation:
      "폭이 실제로 바뀌지 않았고 바뀐 건 색뿐이라 브라우저는 레이아웃을 건너뛰고 스타일 계산 뒤 페인트부터 했다. 다음 프레임에서 폭이 105px로 늘자 Layout이 다시 끼었다.",
    anchor: "프레임-하나-안의-순서",
  },
];
