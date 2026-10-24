import type { QuizQuestion } from "../types";

export const HTML_SEMANTICS: QuizQuestion[] = [
  {
    id: "html-semantics-1",
    post: "html-semantics",
    question: "메뉴 항목을 div onclick으로 만든 페이지에서 Tab을 눌러도 포커스가 메뉴로 가지 않는다. 가장 직접적인 이유는?",
    choices: [
      "onclick 핸들러가 키보드 이벤트를 막아서",
      "div는 기본으로 포커스를 받지 않고 역할도 generic이어서",
      "CSS의 cursor: pointer가 없어서",
      "스크린리더가 켜져 있지 않아서",
    ],
    answer: 1,
    explanation:
      "div는 포커스 순서에 들어가지 않고 접근성 트리에서 역할이 generic이라 버튼이나 링크로 알려지지도 않는다. 이동이면 a href, 동작이면 button을 쓰면 포커스와 키보드 동작이 기본으로 따라온다. cursor 스타일은 마우스 모양만 바꿀 뿐이다.",
    anchor: "눌리는-것은-button과-a-중-하나다",
  },
  {
    id: "html-semantics-2",
    post: "html-semantics",
    question: "opacity: 0으로 감춘 메뉴가 스크린리더에서는 계속 읽힌다. 왜 그런가?",
    choices: [
      "opacity는 접근성 트리에서 요소를 빼지 않기 때문에",
      "스크린리더가 CSS를 전혀 읽지 않기 때문에",
      "opacity: 0은 display: none과 같지만 브라우저 버그가 있어서",
      "메뉴에 aria-label이 없어서",
    ],
    answer: 0,
    explanation:
      "접근성 트리는 DOM과 CSS를 함께 보고 만들어지며 display: none, visibility: hidden, hidden 속성은 노드를 빼지만 opacity: 0이나 화면 밖 배치는 그대로 남긴다. 스크린리더가 CSS를 무시하는 게 아니라, 이 속성들은 숨김으로 취급되지 않는 것이다.",
    anchor: "브라우저가-dom-옆에-트리를-하나-더-만든다",
  },
  {
    id: "html-semantics-3",
    post: "html-semantics",
    question: "블로그 글 카드마다 article 안에 header를 넣었다. 이 header는 접근성 트리에서 어떻게 되나?",
    choices: [
      "페이지마다 banner 랜드마크가 여러 개 생긴다",
      "header는 항상 banner이므로 article 밖으로 옮겨야 한다",
      "article 안에 있으므로 banner 랜드마크가 되지 않는다",
      "브라우저가 자동으로 h1으로 바꾼다",
    ],
    answer: 2,
    explanation:
      "header는 article, aside, main, nav, section 안에 있지 않을 때만 banner가 된다. 카드 안의 header는 그 카드의 머리글일 뿐이라 써도 된다. footer와 contentinfo도 같은 조건이다.",
    anchor: "랜드마크는-페이지의-목차다",
  },
  {
    id: "html-semantics-4",
    post: "html-semantics",
    question: "section 안에 h1을 넣으면 스크린리더는 그 제목을 몇 수준으로 읽나?",
    choices: [
      "section 깊이만큼 한 단계씩 내려 h2, h3으로 읽는다",
      "제목으로 읽지 않는다",
      "브라우저마다 문서 개요 알고리즘으로 다르게 계산한다",
      "그대로 수준 1로 읽는다",
    ],
    answer: 3,
    explanation:
      "예전 명세의 문서 개요 알고리즘은 브라우저가 접근성 트리에 구현한 적이 없고 2022년에 명세에서 빠졌다. 그래서 section 안의 h1도 수준 1이다. 제목 번호는 구조에 맞게 직접 정하고 크기는 CSS로 맞춘다.",
    anchor: "제목-번호는-글자-크기가-아니다",
  },
  {
    id: "html-semantics-5",
    post: "html-semantics",
    question: "React 컴포넌트가 p 안에 div를 그렸더니 CSR에서는 멀쩡한데 SSR에서만 하이드레이션 오류가 난다. 이유는?",
    choices: [
      "SSR에서는 div를 렌더링할 수 없어서",
      "서버 HTML을 브라우저 파서가 p를 닫고 빈 p를 만드는 식으로 고쳐 DOM이 달라져서",
      "React가 서버에서 p 태그를 생략해서",
      "CSR에서는 React가 div를 span으로 바꿔서",
    ],
    answer: 1,
    explanation:
      "HTML 파서는 p 안에서 div 시작 태그를 만나면 p를 먼저 닫고, 짝 없는 끝 태그에는 빈 p를 만든다. SSR은 이 파서를 거치므로 React가 기대한 트리와 DOM이 달라진다. CSR은 DOM API로 직접 노드를 만들어 파서를 거치지 않아 그대로 들어간다.",
    anchor: "파서는-틀린-html도-고쳐서-읽는다",
  },
  {
    id: "html-semantics-6",
    post: "html-semantics",
    question: "한 페이지에서만 표 안 글자가 body의 글자 크기를 따르지 않고 body가 창 높이를 꽉 채운다. 먼저 확인할 것은?",
    choices: [
      "document.compatMode가 BackCompat인지",
      "meta viewport에 initial-scale이 있는지",
      "html의 lang 속성이 ko인지",
      "meta charset이 1024바이트 안에 있는지",
    ],
    answer: 0,
    explanation:
      "DOCTYPE이 없으면 쿼크 모드가 되어 표가 글자 크기를 물려받지 않고 body가 창 높이를 채우는 옛 동작이 나온다. document.compatMode가 BackCompat이면 쿼크 모드다. viewport와 charset은 각각 모바일 너비와 인코딩 문제를 일으킨다.",
    anchor: "문서-맨-위-세-줄",
  },
  {
    id: "html-semantics-7",
    post: "html-semantics",
    question: "회원 정보 폼 안에 '비밀번호 보기' 버튼을 넣었더니 누를 때마다 폼이 제출된다. 고치는 방법은?",
    choices: [
      "버튼을 div로 바꾼다",
      "버튼에 aria-pressed를 붙인다",
      "버튼에 type=\"button\"을 준다",
      "폼에 novalidate를 준다",
    ],
    answer: 2,
    explanation:
      "form 안의 button은 type을 쓰지 않으면 기본값이 submit이라 누르면 폼이 제출된다. 제출이 아닌 버튼은 type=\"button\"으로 둔다. div로 바꾸면 키보드와 스크린리더 지원을 잃고, novalidate는 브라우저 검증만 끈다.",
    anchor: "눌리는-것은-button과-a-중-하나다",
  },
];
