import type { QuizQuestion } from "../types";

export const RENDERING_STRATEGIES: QuizQuestion[] = [
  {
    id: "rendering-strategies-1",
    post: "rendering-strategies",
    question: "CSR로 만든 상품 페이지 링크를 메신저에 붙였더니 미리보기에 상품 이름이 안 나온다. 가장 그럴듯한 이유는?",
    choices: [
      "CDN이 HTML을 압축해서 보내서",
      "상품 API에 CORS 설정이 없어서",
      "미리보기 봇이 JS를 실행하지 않고 처음 받은 빈 HTML만 봐서",
      "브라우저 캐시에 옛 페이지가 남아 있어서",
    ],
    answer: 2,
    explanation:
      "CSR의 HTML에는 빈 div와 스크립트 태그뿐이고, 상품 내용은 JS 실행과 API 호출 뒤에야 생긴다. 메신저·SNS 미리보기 봇 상당수는 JS를 실행하지 않으니 내용을 볼 수 없다. CORS는 브라우저 안의 스크립트가 응답을 읽을 때의 문제라 봇과는 관계없다.",
    anchor: "csr-빈-html과-큰-js",
  },
  {
    id: "rendering-strategies-2",
    post: "rendering-strategies",
    question: "SSR 페이지에서 화면은 다 보이는데 버튼을 눌러도 잠시 반응이 없다. 이 구간은 무엇을 기다리는 중인가?",
    choices: [
      "JS가 내려와 하이드레이션이 끝나기를",
      "서버가 HTML 렌더링을 마치기를",
      "CDN 캐시가 갱신되기를",
      "LCP 이미지가 다 그려지기를",
    ],
    answer: 0,
    explanation:
      "SSR HTML은 받자마자 그려지지만 이벤트 핸들러는 없다. React가 같은 컴포넌트를 브라우저에서 다시 실행해 DOM과 짝을 맞추고 핸들러를 붙이는 하이드레이션이 끝나야 동작한다. 서버 렌더링은 이미 끝났기 때문에 화면이 보이는 것이다.",
    anchor: "ssr-요청마다-서버가-html을-만든다",
  },
  {
    id: "rendering-strategies-3",
    post: "rendering-strategies",
    question: "컴포넌트에서 new Date().toLocaleTimeString()을 바로 렌더링했더니 하이드레이션 오류가 난다. 가장 알맞은 고침은?",
    choices: [
      "페이지 전체를 suppressHydrationWarning으로 감싼다",
      "첫 렌더는 서버와 같게 두고, 브라우저 시각은 useEffect에서 state로 반영한다",
      "서버와 브라우저의 시계를 NTP로 맞춘다",
      "해당 컴포넌트를 memo로 감싼다",
    ],
    answer: 1,
    explanation:
      "서버와 브라우저가 렌더링하는 순간이 다르니 시각 텍스트가 어긋난다. 첫 렌더 결과를 서버와 같게 만들고 브라우저 전용 값은 effect에서 바꾸면 불일치가 없다. suppressHydrationWarning은 그 요소 한 단계에만 쓰는 탈출구라 넓게 감싸는 용도가 아니다.",
    anchor: "하이드레이션은-공짜가-아니다",
  },
  {
    id: "rendering-strategies-4",
    post: "rendering-strategies",
    question: "revalidate를 60초로 둔 ISR 페이지에서, 마지막 생성 후 90초 뒤 처음 들어온 사용자는 무엇을 받나?",
    choices: [
      "서버가 새로 만든 페이지를 기다렸다가 받는다",
      "60초가 지나는 순간 이미 자동으로 새로 만들어진 페이지를 받는다",
      "캐시가 만료되어 오류 페이지를 받는다",
      "옛 페이지를 바로 받고, 그 요청이 뒤에서 재생성을 시작한다",
    ],
    answer: 3,
    explanation:
      "ISR은 stale-while-revalidate 방식이라 만료 뒤 첫 요청에는 옛 페이지를 주면서 뒤에서 다시 만든다. 60초마다 저절로 만드는 게 아니라 만료 뒤 요청이 와야 갱신된다. 즉시 반영이 필요하면 revalidatePath 같은 요청 기반 갱신을 쓴다.",
    anchor: "isr-정적-페이지를-뒤에서-다시-만든다",
  },
  {
    id: "rendering-strategies-5",
    post: "rendering-strategies",
    question: "스트리밍 SSR에서 리뷰를 Suspense 안에서 읽다가 상품이 없다는 걸 알았다. 404 상태 코드를 줄 수 없는 이유는?",
    choices: [
      "Suspense 안에서는 예외를 던질 수 없어서",
      "첫 조각을 보낼 때 상태 코드와 헤더가 이미 나갔기 때문에",
      "404는 CSR에서만 쓸 수 있어서",
      "브라우저가 스트리밍 응답의 상태 코드를 무시해서",
    ],
    answer: 1,
    explanation:
      "HTTP 응답은 상태 코드와 헤더가 본문보다 먼저 나간다. 셸을 보내는 순간 200이 확정되므로 그 뒤에 404나 리다이렉트로 바꿀 수 없다. 이런 판단에 필요한 데이터는 셸을 보내기 전, Suspense 경계 밖에서 기다려야 한다.",
    anchor: "스트리밍-준비된-부분부터-보낸다",
  },
  {
    id: "rendering-strategies-6",
    post: "rendering-strategies",
    question: "React Server Components와 SSR의 관계로 맞는 것은?",
    choices: [
      "서버 컴포넌트는 코드가 번들에 들어가지 않고, 클라이언트 컴포넌트도 첫 요청에서는 SSR된다",
      "RSC는 SSR의 새 이름이다",
      "클라이언트 컴포넌트는 브라우저에서만 실행되고 서버에서는 렌더링되지 않는다",
      "서버 컴포넌트도 브라우저에서 하이드레이션된다",
    ],
    answer: 0,
    explanation:
      "SSR은 첫 HTML을 서버에서 만드는 시점의 이야기고, RSC는 어떤 컴포넌트 코드가 브라우저로 가는지의 이야기다. 서버 컴포넌트는 결과만 보내므로 번들에도 없고 하이드레이션도 하지 않는다. 클라이언트 컴포넌트는 브라우저에서도 실행될 뿐, 첫 요청에서는 서버에서 HTML로 렌더링된다.",
    anchor: "서버-컴포넌트는-ssr과-다른-이야기다",
  },
  {
    id: "rendering-strategies-7",
    post: "rendering-strategies",
    question: "쿠키로 사용자 이름과 장바구니 수를 HTML에 넣는 페이지에 Cache-Control: public, s-maxage=60을 붙이면?",
    choices: [
      "사용자마다 따로 캐시되어 안전하다",
      "브라우저만 캐시하므로 문제없다",
      "CDN이 한 사람의 페이지를 다른 사용자에게도 내줘서 개인 정보가 노출될 수 있다",
      "CDN이 쿠키가 있는 응답은 자동으로 캐시하지 않는다",
    ],
    answer: 2,
    explanation:
      "public과 s-maxage는 CDN 같은 공유 캐시가 응답을 저장해 모든 요청자에게 내줘도 된다는 뜻이다. 개인화된 HTML이 여기 들어가면 남의 이름과 장바구니가 보인다. 이런 페이지는 private, no-store로 응답하거나 개인화 부분을 HTML 밖으로 뺀다.",
    anchor: "큰-쇼핑몰에서-페이지마다-고르기",
  },
];
