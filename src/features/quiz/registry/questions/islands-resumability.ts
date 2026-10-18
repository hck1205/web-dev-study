import type { QuizQuestion } from "../types";

export const ISLANDS_RESUMABILITY: QuizQuestion[] = [
  {
    id: "islands-resumability-1",
    post: "islands-resumability",
    question: "React 18의 선택적 하이드레이션을 써도 아일랜드만큼 JS 실행이 줄지 않는 이유는?",
    choices: [
      "Suspense 경계는 서버에서만 동작하기 때문에",
      "순서와 우선순위만 바꿀 뿐 결국 페이지 전체를 하이드레이션하기 때문에",
      "선택적 하이드레이션은 스트리밍을 끄기 때문에",
      "React는 이벤트 핸들러를 하이드레이션 전에 붙일 수 없기 때문에",
    ],
    answer: 1,
    explanation:
      "선택적 하이드레이션은 경계 단위로 나눠 누른 곳부터 처리해 주지만, 하나의 루트 아래 모든 컴포넌트를 결국 실행한다. 아일랜드는 섬이 아닌 부분은 코드를 받지도 실행하지도 않는다.",
    anchor: "정적인-문단도-하이드레이션-비용을-치른다",
  },
  {
    id: "islands-resumability-2",
    post: "islands-resumability",
    question: "Astro에서 지시어 없이 `<Comments />`처럼 React 컴포넌트를 쓰면 어떻게 되나?",
    choices: [
      "서버에서 HTML로만 렌더링되고 JS는 보내지 않는다",
      "client:load와 같이 바로 하이드레이션된다",
      "브라우저에서만 렌더링된다",
      "빌드 에러가 난다",
    ],
    answer: 0,
    explanation:
      "Astro는 지시어가 없는 컴포넌트를 astro-island로 감싸지 않고 HTML만 남긴다. 상호작용이 필요한 컴포넌트에만 client:* 지시어를 붙여 섬으로 만든다.",
    anchor: "바다-위에-섬-몇-개",
  },
  {
    id: "islands-resumability-3",
    post: "islands-resumability",
    question: "댓글 200개에 좋아요 섬을 붙인 페이지를 client:visible로 바꿨을 때 처음 스크립트 실행 시간이 크게 준 이유는?",
    choices: [
      "React 런타임을 받지 않아서",
      "섬 코드가 더 작게 압축되어서",
      "서버 렌더링을 건너뛰어서",
      "첫 화면에 보이는 10개 정도만 살리고 나머지는 스크롤할 때로 미뤄서",
    ],
    answer: 3,
    explanation:
      "client:visible은 IntersectionObserver로 화면에 들어온 섬만 하이드레이션한다. 실험에서 200개 중 10개만 처음에 살아났고, 런타임은 섬 하나가 살아나는 순간 여전히 받는다.",
    anchor: "언제-살릴지를-섬마다-고른다",
  },
  {
    id: "islands-resumability-4",
    post: "islands-resumability",
    question: "장바구니 버튼 섬의 수량을 헤더의 아이콘 섬에 보여 주려면?",
    choices: [
      "두 섬을 감싸는 React context를 만든다",
      "props로 서로의 setState 함수를 넘긴다",
      "두 섬이 함께 import하는 프레임워크 바깥 저장소나 CustomEvent를 쓴다",
      "client:only로 바꾸면 자동으로 공유된다",
    ],
    answer: 2,
    explanation:
      "섬은 공통 React 조상이 없는 별개의 루트라 context로 이어지지 않고, props는 JSON으로 직렬화되어 함수를 넘길 수 없다. nanostores 같은 바깥 저장소나 브라우저 이벤트로 연결한다.",
    anchor: "섬끼리는-말을-걸기-어렵다",
  },
  {
    id: "islands-resumability-5",
    post: "islands-resumability",
    question: "Qwik이 하이드레이션 없이 버튼 클릭을 처리할 수 있는 이유는?",
    choices: [
      "버튼마다 인라인 onclick 자바스크립트를 서버가 붙여 두어서",
      "핸들러가 있는 청크의 위치와 상태를 HTML(on:click 속성, qwik/json)에 적어 두고 이벤트가 올 때 그 함수만 실행해서",
      "Service Worker가 클릭을 가로채 서버에서 처리해서",
      "페이지 로드 때 컴포넌트를 모두 실행해 두어서",
    ],
    answer: 1,
    explanation:
      "Qwik은 서버가 알아낸 핸들러 주소와 상태를 직렬화해 두고, 로더가 이벤트를 받으면 on:click에 적힌 청크를 불러 실행한다. 컴포넌트를 다시 실행해 재구성하는 하이드레이션 과정이 없다.",
    anchor: "하이드레이션을-아예-하지-않는다",
  },
  {
    id: "islands-resumability-6",
    post: "islands-resumability",
    question: "Qwik 1.20 기본 빌드를 Chromium으로 열었을 때 클릭 핸들러 청크는 언제 받아졌나?",
    choices: [
      "클릭하기 전에 modulepreload로 미리 받아졌다",
      "클릭한 순간에 처음 받아졌다",
      "끝내 받지 않고 서버에서 처리했다",
      "HTML 안에 인라인으로 들어 있었다",
    ],
    answer: 0,
    explanation:
      "실측에서 핸들러 청크와 코어 청크가 클릭 전에 이미 와 있었고 클릭 뒤에는 새 요청이 없었다. 재개 가능성이 아끼는 건 다운로드보다 실행이고, 미리 받아 첫 클릭의 네트워크 지연을 없앤다.",
    anchor: "하이드레이션을-아예-하지-않는다",
  },
];
