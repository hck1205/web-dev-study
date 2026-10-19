import type { QuizQuestion } from "../types";

export const RENDERING_CSR_SPA: QuizQuestion[] = [
  {
    id: "rendering-csr-spa-1",
    post: "rendering-csr-spa",
    question: "느린 모바일 조건에서 CSR 상품 페이지가 1.8초 걸렸는데 API는 300ms였다. 나머지 시간의 주된 원인은?",
    choices: [
      "API 서버의 TTFB가 길어서",
      "HTML, 번들, 화면 청크, 데이터 요청이 서로를 기다리며 일렬로 이어져서",
      "브라우저가 HTML을 캐시하지 않아서",
      "React가 하이드레이션을 하느라",
    ],
    answer: 1,
    explanation:
      "CSR은 빈 HTML을 받고 JS를 실행해야 주소를 읽고, 화면 코드를 받아야 데이터를 부른다. 앞 요청이 끝나야 다음 요청을 알게 되는 폭포 때문에 시간이 쌓인다. CSR에는 서버 HTML이 없으니 하이드레이션도 없다.",
    anchor: "빈-html-한-장에서-화면이-되기까지",
  },
  {
    id: "rendering-csr-spa-2",
    post: "rendering-csr-spa",
    question: "컴포넌트의 useEffect에서 fetch하던 코드를, 주소를 읽자마자 fetch와 화면 코드 import를 함께 시작하게 바꿨다. 무엇이 좋아지나?",
    choices: [
      "데이터 요청이 화면 코드 다운로드 뒤에 줄을 서지 않아 내용이 더 일찍 뜬다",
      "API 응답 자체가 빨라진다",
      "번들 크기가 줄어든다",
      "데이터 요청이 HTML보다 먼저 나간다",
    ],
    answer: 0,
    explanation:
      "주소만 보고 알 수 있는 요청을 코드와 나란히 출발시키면 폭포가 한 단 줄어든다. 측정에서는 상품 이름이 1793ms에서 1434ms로 앞당겨졌다. 하지만 요청은 여전히 main.js 실행 뒤에 나가서, HTML 단계로 끌어올리려면 서버가 주소를 알아야 한다.",
    anchor: "코드를-기다린-뒤에야-데이터를-부른다",
  },
  {
    id: "rendering-csr-spa-3",
    post: "rendering-csr-spa",
    question: "history.pushState를 호출하면 어떤 일이 일어나나?",
    choices: [
      "서버에 새 주소로 문서를 요청한다",
      "popstate 이벤트가 발생해 라우터가 화면을 바꾼다",
      "주소창과 방문 기록만 바뀌고 요청도 popstate 이벤트도 생기지 않는다",
      "현재 기록 칸을 지우고 새 주소로 바꾼다",
    ],
    answer: 2,
    explanation:
      "pushState는 기록에 칸을 하나 쌓고 주소창을 바꿀 뿐이다. popstate는 사용자가 뒤로·앞으로 가기를 할 때만 오기 때문에 라우터가 화면을 직접 바꾸거나 이벤트를 따로 쏴야 한다.",
    anchor: "주소는-바뀌는데-문서는-다시-받지-않는다",
  },
  {
    id: "rendering-csr-spa-4",
    post: "rendering-csr-spa",
    question: "nginx에 SPA를 올렸더니 상품 페이지에서 새로고침하면 404가 난다. 왜 그런가?",
    choices: [
      "브라우저 캐시에 옛 HTML이 남아서",
      "/products/42는 브라우저 안에서만 만든 주소라 서버에 그런 파일이 없어서",
      "React Router가 서버 렌더링을 지원하지 않아서",
      "HTTP/2가 꺼져 있어서",
    ],
    answer: 1,
    explanation:
      "링크 클릭은 pushState로 주소만 바꿨지만 새로고침은 그 주소를 서버에 직접 묻는다. 정적 서버는 파일이 없으니 404를 준다. 모르는 화면 주소에는 index.html을 주는 폴백(try_files $uri $uri/ /index.html)을 둔다.",
    anchor: "새로고침-404는-서버가-주소를-몰라서-난다",
  },
  {
    id: "rendering-csr-spa-5",
    post: "rendering-csr-spa",
    question: "모든 주소에 index.html을 주도록 폴백을 걸었더니 배포 뒤 일부 사용자에게 흰 화면과 'Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of \"text/html\"' 오류가 난다. 알맞은 조치는?",
    choices: [
      "모든 JS 파일을 Content-Type: text/html로 보낸다",
      "type=\"module\"을 지운다",
      "/assets/ 같은 정적 파일 경로는 폴백에서 빼고 없으면 404를 내게 한다",
      "폴백을 없애고 해시 라우터로 바꾼다",
    ],
    answer: 2,
    explanation:
      "옛 HTML이 지워진 해시 이름의 JS를 요청했는데 폴백이 그 자리에 HTML을 200으로 줘서 생긴 오류다. 정적 파일 경로는 정직하게 404를 내야 앱이 청크 실패를 잡아 새로고침을 권할 수 있다. 해시 라우터도 동작은 하지만 원인을 고친 것이 아니다.",
    anchor: "폴백이-삼켜-버리는-오류들",
  },
  {
    id: "rendering-csr-spa-6",
    post: "rendering-csr-spa",
    question: "CSR이 가장 잘 맞는 화면은?",
    choices: [
      "검색과 공유로 처음 들어오는 사용자가 많은 상품 상세",
      "로그인 뒤에서 오래 머물며 많이 조작하는 관리자 대시보드",
      "메신저 미리보기가 중요한 블로그 글",
      "느린 휴대폰 비중이 큰 랜딩 페이지",
    ],
    answer: 1,
    explanation:
      "관리자 화면은 검색에 나올 이유가 없고, 첫 화면보다 이후 수백 번의 전환 속도가 중요하다. 정적 파일만 주면 되니 운영도 단순하다. 나머지는 빈 HTML과 늦은 첫 화면이라는 CSR의 약점을 그대로 맞는다.",
    anchor: "csr이-맞는-자리",
  },
];
