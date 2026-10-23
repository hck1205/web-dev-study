import type { QuizQuestion } from "../types";

export const REACT_CLIENT_ROUTING: QuizQuestion[] = [
  {
    id: "react-client-routing-1",
    post: "react-client-routing",
    question: "React Router 라우트 배열에 /products/:id를 /products/new보다 먼저 적었다. /products/new로 들어가면 어떤 라우트가 걸리나?",
    choices: [
      "/products/:id. 먼저 적은 라우트가 이긴다",
      "둘 다 렌더링되고 콘솔에 경고가 뜬다",
      "/products/new. 정적 조각이 점수가 더 높아 순서와 상관없이 이긴다",
      "아무것도 걸리지 않고 404 라우트로 간다",
    ],
    answer: 2,
    explanation:
      "v6 이후 React Router는 적은 순서가 아니라 점수로 고른다. 정적 조각은 10점, 동적 조각은 3점이라 /products/new가 24점, /products/:id가 17점이다. 먼저 적은 순서는 점수가 같을 때만 따진다.",
    anchor: "어떤-라우트가-이기나",
  },
  {
    id: "react-client-routing-2",
    post: "react-client-routing",
    question: "루트, 상품 레이아웃, 상품 상세가 각자 useEffect로 300ms짜리 요청을 보내고, 데이터가 오기 전에는 Outlet을 그리지 않는다. 상세 데이터까지 보이려면 얼마나 걸리고 왜 그런가?",
    choices: [
      "약 900ms. 부모가 데이터를 받아 자식을 그린 뒤에야 자식의 요청이 출발한다",
      "약 300ms. useEffect는 컴포넌트 트리 전체에서 동시에 실행된다",
      "약 600ms. 브라우저가 같은 도메인 요청을 두 개씩만 보낸다",
      "약 300ms. React 19가 자동으로 요청을 묶는다",
    ],
    answer: 0,
    explanation:
      "자식 컴포넌트는 부모가 Outlet을 그려야 마운트되고, 그때 비로소 자식의 useEffect가 돈다. 그래서 중첩 깊이만큼 요청이 줄을 서는 fetch-on-render 폭포가 생긴다. 라우트 loader로 옮기면 세 요청이 렌더링 전에 함께 출발해 300ms로 줄어든다.",
    anchor: "컴포넌트가-데이터를-부르면-폭포가-된다",
  },
  {
    id: "react-client-routing-3",
    post: "react-client-routing",
    question: "lazy 라우트에서 컴포넌트와 loader를 같은 파일에 두고 그 파일 하나를 import했다. 무엇이 문제인가?",
    choices: [
      "loader가 서버에서만 실행된다",
      "청크를 내려받아야 loader를 알 수 있어 청크 다운로드 뒤에야 데이터 요청이 출발한다",
      "lazy로 불러온 컴포넌트는 Outlet에 들어가지 못한다",
      "loader가 두 번 실행된다",
    ],
    answer: 1,
    explanation:
      "loader가 무거운 컴포넌트 청크 안에 있으면 청크 다운로드와 데이터 요청이 다시 차례로 진행된다. loader를 작은 별도 모듈로 나눠 Promise.all로 함께 불러오거나 처음 번들에 두면 둘이 나란히 진행된다. TanStack Router의 자동 코드 분할이 기본으로 loader를 떼지 않는 것도 같은 이유다.",
    anchor: "라우트-단위로-코드를-자른다",
  },
  {
    id: "react-client-routing-4",
    post: "react-client-routing",
    question: "검색어 입력창의 값을 글자마다 setSearchParams로 주소에 반영했더니 뒤로 가기를 누를 때마다 한 글자씩 지워진다. 어떻게 고치나?",
    choices: [
      "검색어를 useState로 옮긴다",
      "검색어를 해시(#q=)로 옮긴다",
      "setSearchParams에 replace: true를 줘서 현재 히스토리 항목을 덮어쓴다",
      "ScrollRestoration의 getKey를 pathname으로 바꾼다",
    ],
    answer: 2,
    explanation:
      "setSearchParams는 기본으로 히스토리에 새 항목을 쌓는다. 글자마다 바뀌는 값은 replace로 덮어써야 뒤로 가기 한 번이 이전 화면으로 간다. useState로 옮기면 새로고침과 공유 때 값이 사라지니 주소에 두는 이점을 잃는다.",
    anchor: "검색-파라미터를-상태로-쓰기",
  },
  {
    id: "react-client-routing-5",
    post: "react-client-routing",
    question: "주문 목록 라우트에 로그인 검사 미들웨어를 넣었다. 이것만으로 주문 데이터를 보호할 수 있나?",
    choices: [
      "그렇다. 미들웨어는 렌더링 전에 돌아서 우회할 수 없다",
      "그렇다. redirect를 던지면 번들에서 해당 코드가 빠진다",
      "아니다. 미들웨어는 서버 렌더링에서만 동작한다",
      "아니다. 클라이언트 코드는 누구나 고칠 수 있으니 API 서버가 요청마다 권한을 검사해야 한다",
    ],
    answer: 3,
    explanation:
      "클라이언트 가드는 보호된 화면이 깜빡이지 않게 하는 사용자 경험 장치다. 번들의 코드는 사용자가 읽고 바꿀 수 있으니 실제 보호는 서버가 한다. 가드를 만들 때는 redirect 쿼리로 외부 주소가 들어오는 오픈 리다이렉트도 막는다.",
    anchor: "들어가기-전에-막는-자리",
  },
  {
    id: "react-client-routing-6",
    post: "react-client-routing",
    question: "TanStack Router에서 Register 인터페이스에 router 타입을 등록한 뒤 Link to=\"/prodcts\"라고 쓰면 어떻게 되나?",
    choices: [
      "컴파일 에러가 난다. 등록된 라우트 트리의 경로만 to에 들어갈 수 있다",
      "실행하면 가장 비슷한 /products로 자동 이동한다",
      "컴파일은 통과하고 누르면 404 라우트가 나온다",
      "개발 서버에서만 경고가 뜬다",
    ],
    answer: 0,
    explanation:
      "Register에 router를 등록하면 앱 전체의 Link와 navigate가 라우트 트리의 타입을 안다. to는 실제 경로들의 유니온이 되고, 오타는 TS2820 에러와 함께 비슷한 경로를 제안받는다. 파라미터 이름과 validateSearch를 거친 검색 파라미터 값도 같은 방식으로 검사된다.",
    anchor: "tanstack-router-타입이-주소를-안다",
  },
  {
    id: "react-client-routing-7",
    post: "react-client-routing",
    question: "React Router v6 코드를 v8로 올릴 때 import에서 먼저 손봐야 할 것은?",
    choices: [
      "모든 import를 @react-router/dev로 바꾼다",
      "react-router-dom이 없어졌으니 RouterProvider는 react-router/dom에서, 나머지는 react-router에서 가져온다",
      "Outlet과 Link를 @tanstack/react-router에서 가져온다",
      "CommonJS require로 바꾼다",
    ],
    answer: 1,
    explanation:
      "v7에서 DOM 관련 기능이 react-router/dom으로 합쳐졌고 react-router-dom은 호환용으로만 남았다가 v8에서 제거됐다. v8은 ESM 전용이라 require로 바꾸는 건 반대 방향이다. @react-router/dev는 프레임워크 모드의 라우트 설정과 Vite 플러그인용이다.",
    anchor: "react-router의-세-가지-모드",
  },
];
