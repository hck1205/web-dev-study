import type { QuizQuestion } from "../types";

export const FRONTEND_ERROR_TRACKING: QuizQuestion[] = [
  {
    id: "frontend-error-tracking-1",
    post: "frontend-error-tracking",
    question:
      "window.onerror = fn 으로만 에러를 듣고 있다. 배너 이미지가 404일 때 이 에러가 수집되지 않는 이유는?",
    choices: [
      "이미지 404는 에러가 아니라 경고로 분류되기 때문",
      "img의 error 이벤트는 버블링되지 않아 window의 캡처 단계 리스너만 받을 수 있기 때문",
      "이미지 요청은 Service Worker만 볼 수 있기 때문",
      "404는 서버 에러라서 브라우저 이벤트가 생기지 않기 때문",
    ],
    answer: 1,
    explanation:
      "리소스 로드 실패의 error 이벤트는 그 요소에서 끝나고 window로 올라오지 않는다. addEventListener('error', fn, true)처럼 캡처 단계로 등록해야 window가 내려가는 길에서 먼저 본다. 이벤트 자체는 생기니 네 번째 보기는 틀렸다.",
    anchor: "다섯-가지-에러-잡는-자리가-다르다",
  },
  {
    id: "frontend-error-tracking-2",
    post: "frontend-error-tracking",
    question:
      "SDK를 번들에 넣고 install()에서 리스너를 붙였더니, 페이지 로드 직후 실패한 이미지 에러가 한 번도 오지 않았다. 가장 알맞은 해결은?",
    choices: [
      "head에 짧은 인라인 스크립트로 이벤트를 쌓아 두고 SDK가 뜰 때 처리한다",
      "리스너를 버블링 단계로 바꾼다",
      "이미지에 loading=\"lazy\"를 붙인다",
      "SDK 번들을 더 작게 압축한다",
    ],
    answer: 0,
    explanation:
      "module 스크립트는 문서를 다 읽은 뒤 실행되어서, 그 전에 지나간 이벤트는 다시 오지 않는다. head의 인라인 버퍼가 그 사이 이벤트를 붙잡는다. 번들을 줄여도 실행 순서는 그대로라 근본 해결이 아니다.",
    anchor: "번들보다-먼저-난-에러는-놓친다",
  },
  {
    id: "frontend-error-tracking-3",
    post: "frontend-error-tracking",
    question:
      "정적 파일을 별도 CDN 도메인으로 옮긴 뒤 수집된 에러가 전부 \"Script error.\"로 바뀌었다. 무엇을 고쳐야 하나?",
    choices: [
      "소스맵을 CDN에 공개한다",
      "에러 경계를 루트에 하나 더 둔다",
      "CDN이 Access-Control-Allow-Origin을 주게 하고 script 태그에 crossorigin 속성을 붙인다",
      "sendBeacon 대신 fetch로 보낸다",
    ],
    answer: 2,
    explanation:
      "브라우저는 다른 출처 스크립트의 에러 내용을 지워 \"Script error.\"만 넘긴다. 페이지는 crossorigin으로 CORS 요청을 하고 서버는 허용 헤더를 줘야 메시지와 스택이 보인다. 헤더 없이 속성만 붙이면 스크립트 로드가 막히니 헤더부터 맞춘다.",
    anchor: "다른-출처-스크립트는-script-error만-남긴다",
  },
  {
    id: "frontend-error-tracking-4",
    post: "frontend-error-tracking",
    question:
      "React 에러 경계로 앱을 감쌌다. 저장 버튼의 onClick 안에서 then 콜백이 던진 에러는 어디로 가나?",
    choices: [
      "가장 가까운 에러 경계의 componentDidCatch",
      "createRoot의 onCaughtError",
      "아무 데도 가지 않고 사라진다",
      "window의 unhandledrejection 이벤트",
    ],
    answer: 3,
    explanation:
      "에러 경계는 렌더링 중 에러만 잡고 이벤트 핸들러나 Promise 안의 에러는 잡지 않는다. then 안에서 던진 것은 Promise 거부이고 catch가 없으니 unhandledrejection으로 온다. 실습의 저장 버튼 에러가 이 길로 수집됐다.",
    anchor: "react가-잡은-에러는-window까지-오지-않는다",
  },
  {
    id: "frontend-error-tracking-5",
    post: "frontend-error-tracking",
    question: "소스맵을 번들 옆에 공개하지 않고 수집 서버에만 두는 가장 큰 이유는?",
    choices: [
      "맵의 sourcesContent에 원본 소스가 주석까지 들어 있어 누구나 읽을 수 있게 되기 때문",
      "맵을 공개하면 번들 다운로드가 느려지기 때문",
      "브라우저가 맵을 읽으면 에러 이벤트가 생기지 않기 때문",
      "맵을 공개하면 해시 파일 이름이 바뀌기 때문",
    ],
    answer: 0,
    explanation:
      "실습 맵에는 원본 소스 57만 자가 들어 있었다. 사용자는 맵을 받지 않으니 공개 여부가 성능과는 관계없고, 문제는 원본 코드 노출이다. 그래서 hidden-source-map처럼 주소 주석 없이 만들고 맵은 수집 서버에만 올린다.",
    anchor: "소스맵은-수집-서버만-갖는다",
  },
  {
    id: "frontend-error-tracking-6",
    post: "frontend-error-tracking",
    question:
      "코드 변경이 없는 배포 직후, 대시보드에 처음 보는 에러 그룹이 생겼고 스택이 압축된 이름 그대로다. 가장 먼저 의심할 것은?",
    choices: [
      "브라우저 업데이트로 스택 형식이 바뀌었다",
      "새 릴리스의 소스맵이 업로드되지 않아 그 릴리스 이름으로 맵을 찾지 못했다",
      "사용자가 확장 프로그램을 설치했다",
      "sendBeacon의 64KB 제한에 걸렸다",
    ],
    answer: 1,
    explanation:
      "맵을 못 찾으면 위치를 되돌리지 못할 뿐 아니라 지문도 압축된 이름으로 만들어져, 같은 버그가 새 에러처럼 보인다. 실습에서 1.4.3 맵을 지우자 정확히 이렇게 됐다. 맵 업로드를 배포 전에 하고 실패하면 배포를 멈춘다.",
    anchor: "릴리스-이름이-어긋나면-맵을-못-찾는다",
  },
  {
    id: "frontend-error-tracking-7",
    post: "frontend-error-tracking",
    question:
      "URL과 메시지에서 이메일을 가렸는데도 수집된 에러에 이메일이 남아 있었다. 실습에서 새어 나간 자리는?",
    choices: [
      "브레드크럼의 클릭 기록",
      "User-Agent 문자열",
      "인라인 스크립트 에러의 스택. 위치가 페이지 URL로 찍힌다",
      "릴리스 이름",
    ],
    answer: 2,
    explanation:
      "인라인 스크립트에서 난 에러는 스택 프레임 위치가 쿼리 문자열을 포함한 페이지 URL로 찍힌다. 그래서 URL, 메시지, 스택 세 곳을 모두 가려야 한다. 서버에서도 한 번 더 거르는 이유다.",
    anchor: "번들보다-먼저-난-에러는-놓친다",
  },
];
