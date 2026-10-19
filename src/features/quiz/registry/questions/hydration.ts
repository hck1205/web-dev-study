import type { QuizQuestion } from "../types";

export const HYDRATION: QuizQuestion[] = [
  {
    id: "hydration-1",
    post: "hydration",
    question: "SSR 페이지에서 JS가 오기 전 보이는 버튼을 두 번 눌렀다. 하이드레이션이 끝난 뒤 그 클릭은 어떻게 되나?",
    choices: [
      "React가 모아 두었다가 차례로 처리한다",
      "마지막 클릭 하나만 처리한다",
      "사라진다. 그때는 React의 이벤트 리스너가 아직 없었다",
      "브라우저가 페이지를 새로고침한다",
    ],
    answer: 2,
    explanation:
      "React는 hydrateRoot를 부를 때 루트에 리스너를 붙인다. 그 전의 클릭은 아무도 듣지 않은 이벤트라 실측에서도 카운트는 0이었다. <a href>나 action이 있는 폼처럼 JS 없이 동작하는 요소만 예외다.",
    anchor: "보이는데-안-눌리는-시간",
  },
  {
    id: "hydration-2",
    post: "hydration",
    question: "className이 서버에서는 'title', 브라우저에서는 'title dark'로 렌더링됐다. React 19는 어떻게 하나?",
    choices: [
      "루트 전체를 브라우저에서 다시 그린다",
      "속성을 브라우저 값으로 고친다",
      "개발 모드에서 경고만 하고 서버 값 'title'을 그대로 둔다",
      "가장 가까운 Suspense 경계까지 다시 그린다",
    ],
    answer: 2,
    explanation:
      "요소나 텍스트가 다르면 다시 그리지만, 속성 값만 다르면 고치지 않는다. 실측에서 최종 DOM은 class=\"title\"이었고 운영 빌드에는 흔적도 남지 않는다. 그래서 속성 불일치가 더 늦게 발견된다.",
    anchor: "어긋나면-react가-하는-일",
  },
  {
    id: "hydration-3",
    post: "hydration",
    question: "서버가 보낸 HTML 문자열은 <p>가격 <div>89,000원</div></p>였는데 하이드레이션 오류가 났다. 왜인가?",
    choices: [
      "브라우저 파서가 p 안의 div를 허락하지 않아 p를 닫아 버려 DOM 구조가 React의 기대와 달라져서",
      "div에 key가 없어서",
      "숫자 포맷이 달라서",
      "서버가 HTML을 압축해서",
    ],
    answer: 0,
    explanation:
      "JS 없이 파싱한 결과는 <p>가격 </p><div>89,000원</div><p></p>였다. 서버 문자열은 맞았지만 DOM이 달라져 짝이 맞지 않는다. 개발 빌드는 'In HTML, <div> cannot be a descendant of <p>'로 원인을 먼저 알려 준다.",
    anchor: "불일치를-만드는-코드들",
  },
  {
    id: "hydration-4",
    post: "hydration",
    question: "운영 오류 수집 도구에 'Minified React error #418'이 잡히지 않은 오류로 쌓인다. 왜 전역 오류로 잡히고, 어떻게 분류하나?",
    choices: [
      "React 버그라서 업그레이드하면 사라진다",
      "기본 onRecoverableError가 reportError로 알리기 때문이며, hydrateRoot에 onRecoverableError를 줘서 경로·시간대·로케일·컴포넌트 스택과 함께 직접 남긴다",
      "서버가 500을 내서이며, 서버 로그를 본다",
      "418은 네트워크 오류라 CDN 설정을 본다",
    ],
    answer: 1,
    explanation:
      "418은 서버 HTML과 맞지 않아 브라우저에서 다시 그렸다는 뜻이고, 기본값으로는 reportError를 거쳐 window 오류로 수집된다. onRecoverableError로 받아 시간대·로케일 같은 정보를 붙이면 패턴이 보인다.",
    anchor: "개발-모드와-운영-모드의-메시지는-다르다",
  },
  {
    id: "hydration-5",
    post: "hydration",
    question: "<p suppressHydrationWarning><span>{서버와 브라우저가 다른 텍스트}</span></p>는 어떻게 되나?",
    choices: [
      "경고 없이 브라우저 값으로 바뀐다",
      "경고 없이 서버 값이 남는다",
      "span의 차이는 그대로 하이드레이션 오류가 난다",
      "p 아래 모든 자식의 불일치가 무시된다",
    ],
    answer: 2,
    explanation:
      "suppressHydrationWarning은 붙인 요소 한 단계의 텍스트와 속성에만 듣는다. 자식 span의 차이는 실측에서도 Hydration failed가 났다. 붙인 요소에서도 값은 고치지 않아 서버 값이 남는다.",
    anchor: "고치는-방법들",
  },
  {
    id: "hydration-6",
    post: "hydration",
    question: "세 Suspense 경계가 하이드레이션되는 도중 사용자가 마지막 cart 영역의 버튼을 눌렀다(코드는 이미 받아 둔 상태). 어떻게 되나?",
    choices: [
      "순서대로 끝날 때까지 기다린 뒤 클릭은 버려진다",
      "React가 cart 경계를 먼저 하이드레이션하고 그 클릭을 버튼에 전달한다",
      "페이지 전체를 다시 그린다",
      "클릭이 브라우저 기본 동작으로 처리된다",
    ],
    answer: 1,
    explanation:
      "선택적 하이드레이션은 아직 살아나지 않은 경계에서 온 클릭을 받으면 그 경계를 먼저 처리하고 클릭을 다시 보낸다. 실측에서 cart가 가장 먼저 끝나고 카운트는 1이 됐다. 경계의 코드가 lazy로 아직 안 왔다면 그 클릭은 버려진다.",
    anchor: "한꺼번에-하지-않기-선택적-하이드레이션",
  },
];
