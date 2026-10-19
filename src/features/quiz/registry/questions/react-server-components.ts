import type { QuizQuestion } from "../types";

export const REACT_SERVER_COMPONENTS: QuizQuestion[] = [
  {
    id: "react-server-components-1",
    post: "react-server-components",
    question: "App Router에서 `\"use client\"`를 붙인 컴포넌트에 대한 설명으로 맞는 것은?",
    choices: [
      "브라우저에서만 실행되고 서버에서는 렌더링되지 않는다",
      "서버에서만 실행되고 결과만 브라우저로 간다",
      "첫 요청에서 서버에서 HTML로 렌더링되고, 코드가 번들에 들어가 브라우저에서 하이드레이션된다",
      "하이드레이션 없이 payload로만 그려진다",
    ],
    answer: 2,
    explanation:
      "클라이언트 컴포넌트는 브라우저에서만 도는 게 아니라 브라우저에서도 도는 컴포넌트다. 첫 요청에서는 SSR 단계가 payload의 참조 자리에서 이 컴포넌트를 실행해 HTML을 만들고, 브라우저가 같은 코드로 하이드레이션한다.",
    anchor: "ssr은-시점의-이야기-rsc는-코드의-이야기",
  },
  {
    id: "react-server-components-2",
    post: "react-server-components",
    question: "RSC payload의 `13:I[10822,[\"$2\",\"$12\"],\"LikeButton\"]` 줄이 뜻하는 것은?",
    choices: [
      "LikeButton 컴포넌트의 소스 코드",
      "LikeButton을 어느 청크의 어떤 export에서 가져올지 알려 주는 참조",
      "LikeButton이 서버에서 렌더링한 HTML",
      "LikeButton에 넘긴 props",
    ],
    answer: 1,
    explanation:
      "I 줄은 클라이언트 컴포넌트의 코드가 아니라 모듈 id, 먼저 받을 청크, export 이름을 담은 주소다. props는 이 참조를 `$L13`로 쓰는 엘리먼트 쪽에 따로 적힌다.",
    anchor: "서버가-보내는-것은-html이-아니다",
  },
  {
    id: "react-server-components-3",
    post: "react-server-components",
    question: "지시어가 없는 `format.ts`를 서버 컴포넌트와 `\"use client\"` 컴포넌트가 둘 다 import한다. 어떻게 되나?",
    choices: [
      "지시어가 없으니 서버에만 들어간다",
      "빌드 에러가 난다",
      "클라이언트 쪽에서 import하면 undefined가 된다",
      "서버용과 브라우저용 번들 양쪽에 들어간다",
    ],
    answer: 3,
    explanation:
      "경계는 파일 단위로 그어지고, use client 파일이 import하는 모듈은 지시어가 없어도 클라이언트 그래프로 끌려간다. 그래서 양쪽에서 쓰는 유틸은 서버 비밀값이나 브라우저 API에 기대지 않게 짠다.",
    anchor: "경계는-파일-단위로-그어진다",
  },
  {
    id: "react-server-components-4",
    post: "react-server-components",
    question: "서버 컴포넌트가 클라이언트 컴포넌트에 넘길 수 없는 prop은?",
    choices: [
      "`new Date()`",
      "`new Set([\"a\"])`",
      "`new Price(89000)` 같은 클래스 인스턴스",
      "아직 끝나지 않은 `Promise`",
    ],
    answer: 2,
    explanation:
      "React 19는 Date, Map, Set, BigInt, Promise 같은 내장 값은 직렬화하지만 클래스 인스턴스와 함수는 거부한다. 실험에서도 Date와 Set은 통과하고 Price 인스턴스에서 \"Classes or null prototypes are not supported\" 에러가 났다.",
    anchor: "경계를-넘을-수-있는-값",
  },
  {
    id: "react-server-components-5",
    post: "react-server-components",
    question: "버튼이 수량 2만 보내게 만든 서버 액션에 `curl`로 수량 999를 보냈다. 결과는?",
    choices: [
      "그대로 실행되어 999가 처리된다",
      "Next가 UI와 다른 인자를 감지해 403을 돌려준다",
      "Next-Action id가 요청마다 바뀌어 실행되지 않는다",
      "브라우저가 아니라서 CORS로 막힌다",
    ],
    answer: 0,
    explanation:
      "서버 액션은 Next-Action 헤더와 인자 배열을 받는 공개 POST 엔드포인트라서 누구나 다른 인자로 부를 수 있다. 실험에서도 999가 그대로 처리됐으니 인증·권한·입력값 검증은 액션 안에서 매번 해야 한다.",
    anchor: "서버-액션은-경계를-넘는-함수다",
  },
  {
    id: "react-server-components-6",
    post: "react-server-components",
    question: "서버 컴포넌트에서 상품 500개 객체를 통째로 클라이언트 목록에 넘겼더니 HTML이 483KB가 됐다. 가장 알맞은 해결은?",
    choices: [
      "목록 컴포넌트도 서버 컴포넌트로 바꿔 상태를 없앤다",
      "목록이 쓰는 필드만 골라 넘긴다",
      "gzip 압축 수준을 올린다",
      "payload를 localStorage에 캐시한다",
    ],
    answer: 1,
    explanation:
      "넘긴 props는 쓰든 안 쓰든 payload에 적혀 첫 HTML에 실린다. 세 필드만 넘기자 52KB로 줄었고, 화면에 안 보이던 판매자 메모가 소스에 노출되는 문제도 함께 사라진다.",
    anchor: "props가-무거우면-payload도-무겁다",
  },
];
