import type { QuizQuestion } from "../types";

export const SEO_FOR_SPA: QuizQuestion[] = [
  {
    id: "seo-for-spa-1",
    post: "seo-for-spa",
    question: "첫 HTML에 noindex 메타가 있고, 자바스크립트가 실행되면 그 태그를 지운다. 구글 색인은 어떻게 되나?",
    choices: [
      "렌더링 뒤 noindex가 사라지므로 색인된다",
      "첫 HTML에서 noindex를 보고 렌더링하지 않으므로 색인되지 않는다",
      "두 상태가 섞여 절반만 색인된다",
      "robots.txt에 따라 결정되므로 메타 태그와 상관없다",
    ],
    answer: 1,
    explanation:
      "구글은 렌더링 전에 첫 HTML의 robots 메타를 먼저 읽고, noindex가 있으면 렌더링 자체를 건너뛴다. 그래서 지우는 코드는 실행될 기회가 없다. 반대로 자바스크립트로 noindex를 추가하는 것은 렌더링 뒤에 반영된다.",
    anchor: "구글봇이-페이지를-읽는-세-단계",
  },
  {
    id: "seo-for-spa-2",
    post: "seo-for-spa",
    question: "카카오톡에 상품 링크를 붙이면 미리보기 제목이 'Shop'으로 나온다. 구글 검색에는 상품 이름이 잘 나온다. 이유는?",
    choices: [
      "카카오톡이 Open Graph를 지원하지 않아서",
      "구글은 렌더링해서 바뀐 title을 읽지만, 미리보기 봇은 자바스크립트를 실행하지 않고 첫 HTML만 봐서",
      "카카오톡이 canonical 주소의 title을 쓰기 때문에",
      "구글이 meta description으로 제목을 다시 써서",
    ],
    answer: 1,
    explanation:
      "구글은 렌더 큐에서 자바스크립트를 실행한 DOM을 색인하지만 SNS와 메신저의 미리보기 봇은 자바스크립트를 실행하지 않는다. 그래서 title과 Open Graph 태그를 첫 HTML에 넣어야 양쪽 모두 상품 이름을 본다.",
    anchor: "구글봇이-페이지를-읽는-세-단계",
  },
  {
    id: "seo-for-spa-3",
    post: "seo-for-spa",
    question: "장바구니 페이지를 검색에서 빼려고 robots.txt에 Disallow: /cart를 넣었다. 무엇이 문제인가?",
    choices: [
      "Disallow는 크롤링만 막아서 링크된 주소가 내용 없이 색인될 수 있고, 페이지 안 noindex도 읽지 못한다",
      "Disallow는 구글이 무시하는 지시라 아무 효과가 없다",
      "Disallow를 쓰면 사이트 전체가 색인에서 빠진다",
      "robots.txt는 HTML 페이지에는 적용되지 않는다",
    ],
    answer: 0,
    explanation:
      "robots.txt의 Disallow는 가져가지 말라는 뜻이지 색인하지 말라는 뜻이 아니다. 막으면 크롤러가 페이지를 받지 못해 noindex도 볼 수 없다. 색인에서 빼려면 크롤링은 허락하고 noindex 메타나 X-Robots-Tag를 준다.",
    anchor: "색인하지-말라는-두-가지-방법",
  },
  {
    id: "seo-for-spa-4",
    post: "seo-for-spa",
    question: "상품 목록의 2페이지(?page=2)에 첫 페이지를 가리키는 canonical을 걸면 어떻게 되나?",
    choices: [
      "중복이 사라져 모든 상품이 더 잘 색인된다",
      "구글이 page 파라미터를 자동으로 무시하므로 차이가 없다",
      "2페이지가 1페이지의 사본으로 취급되어 2페이지 이후 상품이 색인되기 어려워진다",
      "canonical은 쿼리가 있는 주소에는 쓸 수 없다",
    ],
    answer: 2,
    explanation:
      "canonical은 같은 내용의 대표 주소를 알리는 힌트라, 내용이 다른 2페이지에 1페이지를 걸면 2페이지가 사본이라고 말하는 셈이다. 페이지 번호가 다른 목록은 각자 자기 주소를 canonical로 둔다. 추적 파라미터처럼 내용이 같은 주소만 하나로 모은다.",
    anchor: "같은-페이지-여러-주소",
  },
  {
    id: "seo-for-spa-5",
    post: "seo-for-spa",
    question: "/#/products/42 같은 해시 라우팅을 쓰는 쇼핑몰에서 상품 페이지가 따로 검색되지 않는 이유는?",
    choices: [
      "해시 주소는 HTTPS로 접속할 수 없어서",
      "구글이 색인할 때 # 뒤를 무시해 모든 상품이 같은 주소로 취급되어서",
      "해시 라우팅은 자바스크립트를 쓰지 않아서",
      "구글봇이 History API를 지원하지 않아서",
    ],
    answer: 1,
    explanation:
      "프래그먼트는 서버로 가지 않고 구글은 색인할 때 # 뒤를 무시한다. 그래서 모든 상품이 / 하나로 합쳐진다. 해시뱅 크롤링 방식도 2015년에 폐기됐으니 History API로 실제 경로를 쓰고 서버에 SPA 폴백을 둔다.",
    anchor: "해시-라우팅은-주소가-하나다",
  },
  {
    id: "seo-for-spa-6",
    post: "seo-for-spa",
    question: "SPA에서 없는 상품 주소가 '상품이 없습니다' 화면과 함께 200을 준다. 이 상태를 무엇이라 하고, 어떻게 고치나?",
    choices: [
      "리디렉션 루프이며 301로 홈에 보내 고친다",
      "중복 콘텐츠이며 canonical을 홈으로 걸어 고친다",
      "소프트 404이며 서버에서 404를 주거나, 어려우면 noindex를 추가한다",
      "크롤 예산 초과이며 sitemap에서 빼서 고친다",
    ],
    answer: 2,
    explanation:
      "없는 페이지가 200과 없음 화면을 주는 것을 소프트 404라고 한다. 서버에서 판단할 수 있으면 404를 주고, CSR에서만 알 수 있으면 noindex를 추가하거나 404를 주는 주소로 보낸다. 모든 것을 홈으로 보내거나 canonical을 홈으로 거는 건 또 다른 문제를 만든다.",
    anchor: "배포하고-나서-터지는-실수",
  },
  {
    id: "seo-for-spa-7",
    post: "seo-for-spa",
    question: "한국어·영어 페이지에 hreflang을 달았는데 영어 페이지의 canonical이 한국어 페이지를 가리킨다. 무엇이 문제인가?",
    choices: [
      "영어 페이지를 한국어 페이지의 사본이라고 말하는 셈이라 hreflang 신호와 부딪친다",
      "canonical과 hreflang은 함께 쓸 수 없는 태그다",
      "hreflang에는 x-default만 있으면 되므로 문제가 없다",
      "html lang 속성이 우선하므로 영향이 없다",
    ],
    answer: 0,
    explanation:
      "각 언어 페이지는 자기 자신을 canonical로 두고, 서로를 hreflang으로 가리켜야 한다. canonical을 한 언어로 몰면 다른 언어 페이지가 사본으로 취급되어 hreflang과 충돌한다. 구글은 html의 lang 속성으로 언어 버전을 묶지 않는다.",
    anchor: "언어마다-다른-페이지",
  },
];
