import type { QuizQuestion } from "../types";

export const LAZY_LOADING_STRATEGIES: QuizQuestion[] = [
  {
    id: "lazy-loading-strategies-1",
    post: "lazy-loading-strategies",
    question: "지도 라이브러리를 정적 import에서 '누를 때 받기'로 바꿨더니 FCP까지 빨라졌다. 가장 큰 이유는?",
    choices: [
      "React가 지도 컴포넌트를 렌더링하지 않아 가상 DOM 비교가 줄었다",
      "정적 import된 모듈은 받고 평가해야 앱 코드가 시작되는데, 그 일이 첫 렌더링 앞에서 빠졌다",
      "브라우저가 lazy 컴포넌트를 Web Worker에서 실행한다",
      "청크가 작아져 HTTP 캐시 적중률이 올라갔다",
    ],
    answer: 1,
    explanation:
      "정적 import는 가져온 모듈을 모두 받아서 평가한 뒤에야 앱 코드가 돈다. 그래서 첫 화면에 안 쓰는 라이브러리라도 받는 시간과 초기화 코드가 첫 렌더링 앞을 막는다. lazy 컴포넌트가 워커에서 도는 것은 아니다.",
    anchor: "둘을-나란히-놓으면",
  },
  {
    id: "lazy-loading-strategies-2",
    post: "lazy-loading-strategies",
    question: "버튼의 pointerenter에서 importMap()을 부르고, lazy에도 같은 importMap을 넘겼다. 클릭 뒤 기다림이 줄어드는 이유는?",
    choices: [
      "pointerenter가 click보다 우선순위가 높은 요청을 만든다",
      "lazy가 선언 시점에 미리 청크를 받아 둔다",
      "같은 모듈 주소의 import()는 한 번만 받으므로 클릭 뒤 lazy가 이미 출발한 결과를 쓴다",
      "Suspense가 fallback을 건너뛰기 때문이다",
    ],
    answer: 2,
    explanation:
      "모듈 지도는 주소 하나에 모듈 하나라서 두 번째 import()는 진행 중이거나 끝난 결과를 돌려준다. 포인터를 올린 채 머뭇거리는 시간만큼 청크가 먼저 출발한다. lazy 자체는 처음 렌더링될 때까지 아무것도 받지 않는다.",
    anchor: "누를-때-받는-지도",
  },
  {
    id: "lazy-loading-strategies-3",
    post: "lazy-loading-strategies",
    question: "HTML에 직접 쓴 첫 화면 이미지에 loading=\"lazy\"를 달면 LCP가 늦어지는 이유는?",
    choices: [
      "lazy 이미지는 화면 안인지 레이아웃으로 확인한 뒤 요청해서 프리로드 스캐너가 미리 받지 못한다",
      "lazy 이미지는 항상 낮은 해상도로 먼저 받는다",
      "lazy 이미지는 load 이벤트 뒤에만 요청된다",
      "lazy 이미지는 HTTP 캐시를 쓰지 못한다",
    ],
    answer: 0,
    explanation:
      "일반 이미지는 프리로드 스캐너가 HTML을 훑을 때 바로 요청한다. lazy가 붙으면 레이아웃을 계산해 화면 안에 있는지 확인해야 하고, 레이아웃은 CSS가 와야 하니 요청이 그만큼 밀린다. 예제에서 LCP가 1048ms에서 1280ms가 됐다.",
    anchor: "첫-화면에-있는-것은-미루지-않는다",
  },
  {
    id: "lazy-loading-strategies-4",
    post: "lazy-loading-strategies",
    question: "제품 영상 iframe을 파사드로 바꿨다. 이 선택이 오히려 손해인 경우는?",
    choices: [
      "영상이 페이지 맨 아래에 있을 때",
      "방문자 대부분이 영상을 재생하는, 영상이 주인공인 페이지일 때",
      "썸네일 이미지가 12KB일 때",
      "영상 서버가 다른 출처일 때",
    ],
    answer: 1,
    explanation:
      "파사드는 플레이어 비용을 없애는 게 아니라 클릭 뒤로 옮긴다. 대부분이 누른다면 모두가 클릭 뒤 기다림(예제에서 약 1.8초)을 겪고, 자동 재생 정책 때문에 한 번 더 눌러야 할 수도 있다. 안 보는 사람이 많을수록 이득이다.",
    anchor: "영상-플레이어는-껍데기만-먼저",
  },
  {
    id: "lazy-loading-strategies-5",
    post: "lazy-loading-strategies",
    question: "후기 섹션을 rootMargin 1000px로 미리 받게 했는데도 빠르게 스크롤하면 빈 칸이 잠깐 보였다. 가장 현실적인 대응은?",
    choices: [
      "rootMargin을 10000px로 키운다",
      "IntersectionObserver 대신 scroll 이벤트로 바꾼다",
      "threshold를 1로 올린다",
      "여유는 수백 px 정도로 두고, 그 자리에 실제 높이의 스켈레톤을 둔다",
    ],
    answer: 3,
    explanation:
      "필요한 여유는 받는 데 걸리는 시간 곱하기 스크롤 속도라서 느린 망에서는 1000px도 부족했다. 여유를 끝없이 키우면 즉시 받는 것과 같아진다. 높이를 잡은 자리 표시를 두면 CLS도 막고 잠깐 비는 순간도 덜 어색하다.",
    anchor: "보일-때-받는-후기",
  },
  {
    id: "lazy-loading-strategies-6",
    post: "lazy-loading-strategies",
    question: "서버 HTML의 화면 아래 3,000줄 목록 하이드레이션을 미뤘더니 스크립트 시간은 절반이 됐지만 긴 작업 합은 거의 그대로였다. 왜일까?",
    choices: [
      "React가 미룬 하이드레이션도 결국 즉시 실행했다",
      "IntersectionObserver 콜백이 긴 작업을 만들었다",
      "긴 작업 대부분이 큰 HTML의 파싱과 스타일·레이아웃 계산이었다",
      "측정 도구가 스크립트 시간을 두 번 셌다",
    ],
    answer: 2,
    explanation:
      "하이드레이션을 미루면 JS 일은 줄지만, 175KB HTML과 3,000개 요소를 파싱하고 배치하는 비용은 그대로 남는다. 이건 DOM을 줄이거나 화면 밖 렌더링을 건너뛰는 방법으로 다뤄야 한다.",
    anchor: "하이드레이션을-미루면-무엇이-줄어드나",
  },
];
