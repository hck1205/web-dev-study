import type { QuizQuestion } from "../types";

export const NEXTJS_STATIC_DYNAMIC_RENDERING: QuizQuestion[] = [
  {
    id: "nextjs-static-dynamic-rendering-1",
    post: "nextjs-static-dynamic-rendering",
    question: "Next.js App Router가 라우트를 동적(ƒ)으로 표시하는 방식에 가장 가까운 것은?",
    choices: [
      "빌드 때 코드를 정적 분석해서 import한 함수 이름으로 정한다",
      "빌드 때 라우트를 실제로 렌더링해 보다가 요청 시점 API를 만나면 동적으로 넘긴다",
      "첫 요청이 올 때 응답 시간을 재서 정한다",
      "page.tsx에 async가 붙어 있으면 동적으로 만든다",
    ],
    answer: 1,
    explanation:
      "next build는 각 라우트를 렌더링해 보고 cookies(), searchParams, connection() 같은 값에 손을 대는 순간 그 라우트를 요청마다 렌더링하도록 표시한다. async 페이지라도 그런 값을 건드리지 않으면 정적으로 남는다.",
    anchor: "next는-빌드-때-일단-렌더링해-본다",
  },
  {
    id: "nextjs-static-dynamic-rendering-2",
    post: "nextjs-static-dynamic-rendering",
    question: "옵션 없이 `fetch(priceApi)`를 부르는 페이지가 ○로 빌드됐다. 배포 뒤 가격 API 값이 바뀌면?",
    choices: [
      "fetch는 기본으로 캐시하지 않으니 요청마다 새 가격이 보인다",
      "60초 뒤 첫 요청에서 새 가격으로 바뀐다",
      "다시 빌드하거나 갱신하기 전까지 빌드 때 가격이 보인다",
      "첫 요청에서 에러가 난다",
    ],
    answer: 2,
    explanation:
      "요청 시점 API보다 앞에서 불린 fetch는 빌드 때 라우트를 미리 렌더링하면서 한 번 실행되고, 그 결과가 정적 HTML에 굳는다. 실험에서도 응답의 시각이 빌드 시각으로 고정됐다.",
    anchor: "fetch는-캐시하지-않는데-빌드-때-한-번은-부른다",
  },
  {
    id: "nextjs-static-dynamic-rendering-3",
    post: "nextjs-static-dynamic-rendering",
    question: "`searchParams`를 읽는 페이지에 `export const dynamic = \"force-static\"`을 붙이고 `?q=ab`로 요청하면?",
    choices: [
      "빌드가 실패한다",
      "ƒ로 바뀌어 검색어가 보인다",
      "검색어가 브라우저에서 채워진다",
      "○로 빌드되고 검색어는 빈 값으로 나온다",
    ],
    answer: 3,
    explanation:
      "force-static은 cookies, headers, searchParams를 빈 값으로 바꿔 정적으로 만든다. 경고 없이 검색어가 사라지니, 정적이어야 하는 라우트를 지키려면 실수를 빌드 에러로 알려 주는 dynamic = \"error\"가 낫다.",
    anchor: "직접-정해-버리는-설정",
  },
  {
    id: "nextjs-static-dynamic-rendering-4",
    post: "nextjs-static-dynamic-rendering",
    question: "이 블로그에서 클라이언트 컴포넌트 PostLayout을 MDX wrapper로 바로 연결하자 글이 모두 ƒ가 된 이유는?",
    choices: [
      "MDX가 받은 searchParams가 wrapper props로 넘어가 payload에 직렬화되면서 요청의 쿼리를 읽어야 했다",
      "클라이언트 컴포넌트는 정적으로 빌드할 수 없다",
      "PostLayout이 내부에서 cookies()를 부른다",
      "MDX 파일은 원래 동적 라우트다",
    ],
    answer: 0,
    explanation:
      "MDX 페이지는 Next가 준 params와 searchParams를 wrapper에 그대로 넘긴다. wrapper가 클라이언트 컴포넌트면 그 Promise를 payload에 적어야 해서 요청 시점 값에 손을 대게 되고, children만 넘기는 서버 래퍼를 두면 정적으로 남는다.",
    anchor: "이-블로그의-mdxwrapper가-동적이-된-이유",
  },
  {
    id: "nextjs-static-dynamic-rendering-5",
    post: "nextjs-static-dynamic-rendering",
    question: "정적 페이지의 클라이언트 컴포넌트가 `useSearchParams()`를 Suspense 없이 쓰면 어떻게 되나?",
    choices: [
      "페이지가 ƒ로 바뀐다",
      "빌드 때 \"should be wrapped in a suspense boundary\" 에러로 실패한다",
      "검색어가 항상 null이 된다",
      "아무 일도 없다",
    ],
    answer: 1,
    explanation:
      "Next는 정적 렌더링 중 useSearchParams를 만나면 가장 가까운 Suspense까지 클라이언트 렌더링으로 넘겨야 하는데, 경계가 없으면 빌드를 멈춘다. 감싸면 페이지는 ○로 남고 그 자리에 <!--$!--> 표시와 fallback만 들어간다.",
    anchor: "클라이언트-컴포넌트의-usesearchparams",
  },
  {
    id: "nextjs-static-dynamic-rendering-6",
    post: "nextjs-static-dynamic-rendering",
    question: "cacheComponents를 켠 Next 16에서 Suspense 밖에서 cookies()를 부르는 페이지를 빌드하면?",
    choices: [
      "예전처럼 조용히 ƒ로 빌드된다",
      "◐로 빌드되어 쿠키 부분만 스트리밍된다",
      "빌드가 실패하고 Suspense로 감싸거나 \"use cache\"를 쓰라고 안내한다",
      "쿠키가 빈 값으로 바뀌어 ○로 빌드된다",
    ],
    answer: 2,
    explanation:
      "이 모드에서는 요청 시점 데이터를 Suspense 밖에서 쓰면 셸을 미리 만들 수 없어 빌드 에러가 난다. Suspense로 감싸면 셸을 빌드 때 만들고 그 부분만 요청 때 채우는 ◐가 된다.",
    anchor: "cache-components를-켜면-판단-기준이-바뀐다",
  },
];
