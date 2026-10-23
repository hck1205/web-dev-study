import type { QuizQuestion } from "../types";

export const WEB_COMPONENTS_SHADOW_DOM: QuizQuestion[] = [
  {
    id: "web-components-shadow-dom-1",
    post: "web-components-shadow-dom",
    question:
      'HTML에 이미 있던 <ds-button variant="primary">가 define으로 업그레이드될 때 콜백이 불리는 순서는?',
    choices: [
      "constructor → connectedCallback → attributeChangedCallback",
      "constructor → attributeChangedCallback → connectedCallback",
      "connectedCallback → constructor → attributeChangedCallback",
      "constructor → connectedCallback만 불리고 처음 있던 속성은 콜백이 오지 않는다",
    ],
    answer: 1,
    explanation:
      "처음부터 적힌 속성도 없음에서 primary로 바뀐 것으로 attributeChangedCallback이 한 번 불리고, 그 뒤에 connectedCallback이 온다. 그래서 속성에 따라 그리는 코드가 connected보다 먼저 돌 수 있다는 걸 염두에 둬야 한다.",
    anchor: "생명주기-콜백이-불리는-순서",
  },
  {
    id: "web-components-shadow-dom-2",
    post: "web-components-shadow-dom",
    question:
      "페이지 CSS에 button { border: 3px solid red; color: red }와 body { color: blue; --ds-accent: green }이 있다. 그림자 트리 안 button은 무엇을 받나?",
    choices: [
      "빨간 테두리와 빨간 글자를 모두 받는다",
      "아무것도 받지 않는다. 그림자 트리는 바깥 영향을 완전히 끊는다",
      "선택자 규칙은 받지 않고, 상속된 파란 글자와 --ds-accent 변수는 받는다",
      "--ds-accent만 받고 상속 속성은 경계에서 끊긴다",
    ],
    answer: 2,
    explanation:
      "바깥 선택자는 그림자 트리 안 요소에 맞지 않아 button 규칙은 닿지 않는다. 하지만 상속은 트리를 따라 흘러내리고 CSS 변수도 상속되는 속성이라 경계를 넘는다. 완전히 끊으려면 :host에 all: initial을 줘야 하는데, 그래도 변수는 넘어온다.",
    anchor: "경계를-넘는-것은-상속-변수-part-셋뿐이다",
  },
  {
    id: "web-components-shadow-dom-3",
    post: "web-components-shadow-dom",
    question:
      "그림자 트리 안의 :host { display: inline-block }과 바깥의 ds-button { display: block }이 부딪히면?",
    choices: [
      ":host가 이긴다. 컴포넌트 작성자의 스타일이 우선이다",
      "명시도가 같으니 나중에 불러온 쪽이 이긴다",
      "바깥 규칙이 이긴다. :host는 쓰는 사람이 덮어쓸 수 있는 기본값이다",
      "둘 다 무시되고 브라우저 기본값 inline이 된다",
    ],
    answer: 2,
    explanation:
      "캐스케이드는 명시도보다 먼저 문맥을 본다. 중요도가 없는 선언끼리는 바깥 문맥이 그림자 트리 안 규칙을 이기고, !important를 붙이면 순서가 뒤집혀 안쪽이 이긴다. 그래서 반드시 지킬 값만 !important로 잠근다.",
    anchor: "호스트-스타일은-바깥-규칙에-진다",
  },
  {
    id: "web-components-shadow-dom-4",
    post: "web-components-shadow-dom",
    question:
      "안쪽 버튼에서 new CustomEvent(\"ds-select\", { bubbles: true })를 보냈는데 호스트 요소에 단 리스너가 아무것도 받지 못한다. 왜인가?",
    choices: [
      "composed 기본값이 false라 그림자 루트에서 멈추고, 호스트는 그림자 트리 바깥에 있기 때문이다",
      "커스텀 이벤트는 원래 버블링하지 않기 때문이다",
      "이벤트 이름에 하이픈이 있으면 리스너가 매칭되지 않기 때문이다",
      "closed 모드에서만 생기는 문제라 open으로 바꾸면 된다",
    ],
    answer: 0,
    explanation:
      "bubbles는 트리 안에서 올라가게 할 뿐이고, 그림자 경계를 넘는 건 composed가 정한다. 기본값 false면 그림자 루트까지만 가고 호스트에도 닿지 않는다. composed: true를 주거나 호스트 자신에서 dispatchEvent를 부르면 된다.",
    anchor: "이벤트는-경계에서-주인이-바뀐다",
  },
  {
    id: "web-components-shadow-dom-5",
    post: "web-components-shadow-dom",
    question:
      "문서의 click 리스너에서 event.target이 안쪽 button이 아니라 ds-button으로 보이는 이유와, 진짜 출발점을 찾는 방법은?",
    choices: [
      "이벤트가 호스트에서 새로 만들어지기 때문이고, 진짜 출발점은 알 수 없다",
      "경계를 넘을 때 대상이 호스트로 리타깃되기 때문이고, composedPath()의 첫 칸에서 찾는다",
      "브라우저 버그이고 event.currentTarget을 보면 된다",
      "slot이 있어서 생기는 현상이고 assignedNodes()로 찾는다",
    ],
    answer: 1,
    explanation:
      "안쪽 구조를 바깥에 드러내지 않으려고 이벤트가 경계를 넘는 순간 target을 호스트로 바꿔 보여 준다. 실제 경로는 composedPath()에 남아 있다. 다만 closed 모드면 그 경로에서도 안쪽 노드가 빠진다.",
    anchor: "이벤트는-경계에서-주인이-바뀐다",
  },
  {
    id: "web-components-shadow-dom-6",
    post: "web-components-shadow-dom",
    question:
      "서버가 template shadowrootmode=\"open\"으로 그림자 루트를 그려 보냈다. 클래스 생성자를 어떻게 써야 내용이 깜빡이지 않나?",
    choices: [
      "항상 attachShadow를 새로 불러 루트를 다시 만든다",
      "connectedCallback에서 innerHTML로 같은 문자열을 다시 넣는다",
      "this.shadowRoot가 이미 있으면 그대로 쓰고, 없을 때만 attachShadow를 부른다",
      "closed 모드로 바꿔 서버 내용을 숨긴다",
    ],
    answer: 2,
    explanation:
      "선언형 루트가 있는 요소에서 attachShadow를 다시 부르면 같은 루트를 돌려주지만 안을 비워서 서버가 그린 내용이 사라진다. 그래서 this.shadowRoot ?? this.attachShadow(...)처럼 있는지부터 확인한다. innerHTML로 넣는 선언형 문법은 파서가 처리하지 않아 그림자 루트가 생기지도 않는다.",
    anchor: "서버에서-그리려면-선언형-shadow-dom",
  },
  {
    id: "web-components-shadow-dom-7",
    post: "web-components-shadow-dom",
    question: "별점 커스텀 요소를 form에 넣었을 때 FormData와 form.reset()에 참여시키는 방법은?",
    choices: [
      "그림자 트리 안에 input을 넣으면 자동으로 바깥 폼에 들어간다",
      "static formAssociated = true와 attachInternals()의 setFormValue, setValidity를 쓴다",
      "name 속성만 주면 브라우저가 textContent를 값으로 보낸다",
      "submit 이벤트에서 FormData에 직접 append하는 방법밖에 없다",
    ],
    answer: 1,
    explanation:
      "그림자 트리 안 input은 바깥 폼과 다른 트리라 제출 값에 들어가지 않는다. 폼 연동 커스텀 요소로 선언하고 ElementInternals로 값과 유효성을 알려 주면 FormData, checkValidity, formResetCallback이 일반 입력처럼 동작한다.",
    anchor: "폼에-끼려면-elementinternals",
  },
];
