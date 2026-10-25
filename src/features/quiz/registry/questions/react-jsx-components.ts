import type { QuizQuestion } from "../types";

export const REACT_JSX_COMPONENTS: QuizQuestion[] = [
  {
    id: "react-jsx-components-1",
    post: "react-jsx-components",
    question: "React 17 이전에는 JSX를 쓰는 파일마다 `import React from \"react\"`가 있어야 했다. 이유는?",
    choices: [
      "JSX가 `React.createElement` 호출로 바뀌어서, 변환된 코드가 `React`라는 이름을 직접 쓰기 때문에",
      "React가 import된 파일에서만 컴포넌트를 렌더링할 수 있어서",
      "import가 있어야 번들러가 JSX 파일을 찾아낼 수 있어서",
      "React 객체가 있어야 브라우저가 JSX 문법을 해석할 수 있어서",
    ],
    answer: 0,
    explanation:
      "예전 변환은 JSX를 `React.createElement(...)`로 바꿨고, 그 코드가 `React` 변수를 쓰니 지우면 `React is not defined`가 났다. 새 변환은 컴파일러가 `react/jsx-runtime`에서 필요한 함수를 알아서 import한다. 브라우저는 어느 쪽이든 JSX를 해석하지 않는다.",
    anchor: "jsx는-함수-호출로-바뀐다",
  },
  {
    id: "react-jsx-components-2",
    post: "react-jsx-components",
    question: "`<Avatar key=\"a1\" size={48} />`로 만든 엘리먼트에 대한 설명으로 맞는 것은?",
    choices: [
      "만드는 순간 Avatar 함수가 호출되고 그 결과가 담긴다",
      "`props`에 `key`와 `size`가 함께 들어 있다",
      "`type`은 Avatar 함수, `key`는 'a1'이고, Avatar 안에서 `props.key`를 읽으면 undefined다",
      "`$$typeof`는 문자열 'react.element'라서 JSON으로 그대로 주고받을 수 있다",
    ],
    answer: 2,
    explanation:
      "엘리먼트는 `type`, `key`, `props`를 가진 객체이고 key는 props 바깥 칸에 따로 있다. 엘리먼트를 만들어도 컴포넌트는 호출되지 않고, 부르는 건 React다. `$$typeof`는 Symbol이라 JSON에 담을 수 없고, 그 덕에 JSON으로 심은 가짜 엘리먼트가 걸러진다.",
    anchor: "엘리먼트는-그냥-객체다",
  },
  {
    id: "react-jsx-components-3",
    post: "react-jsx-components",
    question: "`function myButton() { ... }`을 만들고 `<myButton />`으로 썼더니 버튼이 보이지 않는다. 무슨 일이 일어났나?",
    choices: [
      "React가 오류를 던져 그 아래 화면 전체가 사라졌다",
      "소문자 태그는 문자열 \"myButton\"으로 변환되어 빈 HTML 요소가 만들어졌다",
      "함수 이름이 소문자면 React가 훅을 쓸 수 없어 렌더링을 건너뛴다",
      "myButton 함수가 두 번 호출되어 결과가 지워졌다",
    ],
    answer: 1,
    explanation:
      "JSX 변환은 소문자로 시작하는 태그를 문자열로, 대문자로 시작하는 태그를 변수로 바꾼다. 그래서 `myButton` 함수는 쓰이지 않고 `mybutton`이라는 빈 태그만 생기며, 개발 빌드는 경고만 남긴다. 오류가 아니라서 나머지 화면은 그대로 뜬다.",
    anchor: "이름이-소문자면-태그가-된다",
  },
  {
    id: "react-jsx-components-4",
    post: "react-jsx-components",
    question: "자식 컴포넌트가 받은 props 객체의 값을 직접 바꿨다. 개발 빌드와 프로덕션 빌드에서 각각 어떻게 되나?",
    choices: [
      "둘 다 조용히 바뀌고 부모도 즉시 다시 렌더링된다",
      "둘 다 TypeError가 난다",
      "개발 빌드는 경고만 찍고, 프로덕션은 TypeError가 난다",
      "개발 빌드는 props가 얼어 있어 엄격 모드 코드에서 TypeError가 나고, 프로덕션은 조용히 바뀌지만 부모는 모른다",
    ],
    answer: 3,
    explanation:
      "개발 빌드는 props를 `Object.freeze`로 얼려 두어 엄격 모드 코드(ES 모듈 포함)에서 대입하면 TypeError가 난다. 프로덕션은 얼리지 않아 값이 바뀌지만, 부모는 그 사실을 모르고 다시 렌더링하지 않으니 화면과 데이터가 어긋난다. 버그가 사라진 게 아니라 숨은 것이다.",
    anchor: "props는-읽기-전용이다",
  },
  {
    id: "react-jsx-components-5",
    post: "react-jsx-components",
    question: "렌더링할 때마다 모듈 변수 `ticket`을 1씩 올려 화면에 보여 주는 컴포넌트가 StrictMode 개발 모드에서 2, 4, 6번을 보여 준다. 가장 알맞은 해석은?",
    choices: [
      "StrictMode가 렌더링을 일부러 두 번 불러, 렌더링 중에 바깥을 바꾸는 순수하지 않은 코드가 드러났다",
      "StrictMode의 버그라서 끄면 해결된다",
      "프로덕션에서도 똑같이 2, 4, 6이 나온다",
      "key가 없어서 React가 컴포넌트를 두 번 마운트했다",
    ],
    answer: 0,
    explanation:
      "React는 렌더링을 몇 번 할지 약속하지 않고, 개발 모드의 StrictMode는 순수하지 않은 코드를 드러내려고 컴포넌트를 두 번 부른다. 프로덕션에서는 1, 2, 3이 나오지만 부모가 한 번 더 렌더링되기만 해도 숫자가 바뀌는 같은 버그다. StrictMode를 끄면 증상만 가려진다.",
    anchor: "렌더링은-같은-입력에-같은-결과를-내야-한다",
  },
  {
    id: "react-jsx-components-6",
    post: "react-jsx-components",
    question: "`SearchBox` 안에서 `function Field() { return <input ... /> }`를 정의해 쓰면 글자를 칠 때마다 포커스가 사라진다. 원인은?",
    choices: [
      "input에 key가 없어서 React가 순서를 잃었다",
      "setQ가 비동기라 값이 한 박자 늦게 들어가서",
      "SearchBox가 렌더링될 때마다 Field가 새 함수가 되어, React가 다른 타입으로 보고 자리를 새로 마운트해서",
      "input의 value와 onChange가 같은 렌더링에 묶여 있어서",
    ],
    answer: 2,
    explanation:
      "React는 같은 자리의 `type`을 참조로 비교하는데, 안쪽에서 정의한 함수는 렌더링마다 새로 만들어진다. 타입이 다르면 이전 자리와 그 아래 DOM, state를 버리고 새로 만드니 input 노드가 바뀌어 포커스가 날아간다. Field를 모듈 최상위로 꺼내고 값은 props로 넘긴다.",
    anchor: "컴포넌트-안에서-컴포넌트를-정의하면",
  },
  {
    id: "react-jsx-components-7",
    post: "react-jsx-components",
    question: "`<ul>{orders.map((o) => <OrderRow order={o} />)}</ul>`에서 key 경고를 없애려 한다. 어디에 무엇을 주는 게 맞나?",
    choices: [
      "OrderRow 안의 `li`에 `key={order.id}`를 준다",
      "`map`이 돌려주는 `OrderRow`에 `key={o.id}`를 준다",
      "`ul`에 `key=\"orders\"`를 준다",
      "렌더링마다 바뀌지 않도록 `key={Math.random()}`을 준다",
    ],
    answer: 1,
    explanation:
      "key는 배열의 원소, 즉 `map`이 바로 돌려주는 엘리먼트에 준다. 안쪽 `li`는 배열 원소가 아니라서 의미가 없다. `Math.random()`은 렌더링마다 값이 바뀌어 모든 줄이 새로 만들어진다.",
    anchor: "배열을-그리면-key를-묻는다",
  },
];
