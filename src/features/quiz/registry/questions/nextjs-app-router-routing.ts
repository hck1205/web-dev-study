import type { QuizQuestion } from "../types";

export const NEXTJS_APP_ROUTER_ROUTING: QuizQuestion[] = [
  {
    id: "nextjs-app-router-routing-1",
    post: "nextjs-app-router-routing",
    question: "app/dash/layout.js와 app/dash/template.js에 같은 카운터를 두고 Link로 /dash/a에서 /dash/b로 옮겼다. 어떤 결과가 나올까?",
    choices: [
      "둘 다 값이 유지된다",
      "둘 다 0으로 초기화된다",
      "layout의 값은 유지되고 template의 값만 0이 된다",
      "template의 값은 유지되고 layout의 값만 0이 된다",
    ],
    answer: 2,
    explanation:
      "소프트 내비게이션은 바뀐 세그먼트 아래만 교체하므로 공통 layout은 그 자리에 남아 상태가 유지된다. template은 세그먼트마다 고유한 key로 렌더링되어 새로 마운트되므로 상태가 초기화된다. 새로고침이라면 둘 다 0이 된다.",
    anchor: "레이아웃은-남고-템플릿은-다시-태어난다",
  },
  {
    id: "nextjs-app-router-routing-2",
    post: "nextjs-app-router-routing",
    question: "app/docs/[...slug]/page.js만 있을 때 /docs로 요청하면 어떻게 되나?",
    choices: [
      "params가 빈 객체로 들어와 200이 난다",
      "slug가 빈 배열로 들어와 200이 난다",
      "slug가 undefined로 들어와 200이 난다",
      "catch-all은 세그먼트가 하나 이상이어야 해서 404가 난다",
    ],
    answer: 3,
    explanation:
      "[...slug]는 세그먼트를 하나 이상 받는 catch-all이라 /docs처럼 하나도 없으면 맞지 않아 404다. 0개도 받으려면 [[...slug]] optional catch-all을 쓰고, 그때 params는 빈 객체다.",
    anchor: "대괄호-세-가지",
  },
  {
    id: "nextjs-app-router-routing-3",
    post: "nextjs-app-router-routing",
    question: "app/dash/layout.js가 데이터를 가져오다 에러를 던졌다. app/dash/error.js와 app/error.js가 모두 있다면 어느 화면이 보일까?",
    choices: [
      "app/error.js. 같은 세그먼트의 error 경계는 layout 안쪽에 있어서다",
      "app/dash/error.js. 가장 가까운 error.js가 잡아서다",
      "global-error.js. layout 에러는 항상 전역으로 간다",
      "아무것도 잡지 못해 빈 화면이 된다",
    ],
    answer: 0,
    explanation:
      "한 세그먼트의 파일은 layout, template, error, loading, page 순으로 감싸므로 error 경계는 같은 폴더의 layout을 감싸지 못한다. 그래서 그 에러는 부모 세그먼트의 error.js로 올라간다. global-error.js는 루트 layout의 에러를 위한 것이다.",
    anchor: "화면-조각이-겹치는-순서",
  },
  {
    id: "nextjs-app-router-routing-4",
    post: "nextjs-app-router-routing",
    question: "동적 라우트로 가는 링크를 누르면 한참 멈췄다가 화면이 바뀐다. 가장 먼저 의심할 것은?",
    choices: [
      "Link 대신 router.push를 써서",
      "그 세그먼트에 loading.js가 없어 미리 받은 것이 없고 서버 응답을 기다려서",
      "template.js가 없어 리마운트가 일어나지 않아서",
      "params를 await하지 않아서",
    ],
    answer: 1,
    explanation:
      "기본 prefetch는 동적 라우트를 가장 가까운 loading.js까지만 미리 받는다. loading.js가 없으면 받아 둔 로딩 화면이 없어 클릭 뒤 서버 응답이 올 때까지 화면이 그대로다. loading.js를 두면 클릭 즉시 로딩 화면으로 바뀐다.",
    anchor: "이동이-느리거나-상태가-이상할-때-보는-곳",
  },
  {
    id: "nextjs-app-router-routing-5",
    post: "nextjs-app-router-routing",
    question: "(marketing)과 (shop) 라우트 그룹이 각자 루트 레이아웃을 가진다. /about에서 /cart로 Link 이동하면?",
    choices: [
      "공통 부분만 바꾸는 소프트 내비게이션이 일어난다",
      "라우트 그룹은 주소에 없으니 이동이 무시된다",
      "빌드 에러가 나서 이런 구조는 만들 수 없다",
      "루트 레이아웃이 달라 전체 페이지를 새로 불러온다",
    ],
    answer: 3,
    explanation:
      "서로 다른 루트 레이아웃 사이의 이동은 공유할 트리가 없어서 전체 새로고침이 된다. 이건 버그가 아니라 규칙이다. 빌드 에러가 나는 경우는 두 그룹이 같은 주소를 만들 때다.",
    anchor: "주소에-나오지-않는-폴더",
  },
  {
    id: "nextjs-app-router-routing-6",
    post: "nextjs-app-router-routing",
    question: "검색어(?q=)가 바뀔 때마다 필터 입력을 비우고 싶다. dash/template.js로 옮기면 해결될까?",
    choices: [
      "된다. template은 주소가 조금이라도 바뀌면 다시 마운트된다",
      "된다. template은 useSearchParams를 자동으로 key로 쓴다",
      "안 된다. 검색어만 바뀌는 이동에서는 template이 다시 마운트되지 않는다",
      "안 된다. template은 서버 컴포넌트라 상태를 가질 수 없다",
    ],
    answer: 2,
    explanation:
      "template은 자기 바로 아래 세그먼트가 바뀔 때만 다시 마운트되고 검색어 변경에는 그대로다. 검색어마다 초기화하려면 필터 컴포넌트에 검색어로 만든 key를 직접 주거나 값을 URL에서 읽는다.",
    anchor: "레이아웃은-남고-템플릿은-다시-태어난다",
  },
];
