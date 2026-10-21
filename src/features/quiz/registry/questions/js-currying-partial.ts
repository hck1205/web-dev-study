import type { QuizQuestion } from "../types";

export const JS_CURRYING_PARTIAL: QuizQuestion[] = [
  {
    id: "js-currying-partial-1",
    post: "js-currying-partial",
    question: "React에서 `<button onClick={select(it.id)}>`로 썼더니 Too many re-renders 에러가 났다. 왜인가?",
    choices: [
      "onClick에는 화살표 함수만 넣을 수 있어서",
      "렌더링하면서 select가 바로 실행돼 상태를 바꾸고, 그래서 다시 렌더링되기를 반복해서",
      "it.id가 렌더링마다 바뀌어서",
      "버튼이 너무 많아 React의 렌더링 한도를 넘어서",
    ],
    answer: 1,
    explanation:
      "JSX의 onClick 자리 식은 렌더링할 때 평가된다. select(it.id)가 그 자리에서 setSelected를 부르니 렌더링이 업데이트를 낳고, 그 업데이트가 또 렌더링을 낳는다. () => select(it.id)로 감싸거나 select를 핸들러를 돌려주는 함수로 바꿔야 한다.",
    anchor: "인자를-나눠-받는-두-가지-방법",
  },
  {
    id: "js-currying-partial-2",
    post: "js-currying-partial",
    question: "커링과 부분 적용의 관계를 가장 잘 설명한 것은?",
    choices: [
      "둘은 같은 말이다",
      "부분 적용은 커링한 함수에만 할 수 있다",
      "커링은 인자를 하나씩 받는 함수 사슬로 바꾸는 변환이고, 부분 적용은 인자 일부를 채운 새 함수를 만드는 일이다",
      "커링은 this를 고정하고, 부분 적용은 인자를 고정한다",
    ],
    answer: 2,
    explanation:
      "커링은 f(a, b, c)를 f(a)(b)(c) 모양으로 바꾼다. 부분 적용은 bind나 화살표 함수로 커링 없이도 할 수 있고, 남은 인자를 한꺼번에 받는 함수가 나온다. 커링한 함수에 인자를 하나 넣는 것은 부분 적용의 한 형태다.",
    anchor: "인자를-나눠-받는-두-가지-방법",
  },
  {
    id: "js-currying-partial-3",
    post: "js-currying-partial",
    question:
      "인자를 바깥 배열 하나에 계속 push하는 curry로 `fromA = c(\"a\")`를 만들고 `fromA(\"b\")(\"c\")`를 한 번 쓴 뒤, `fromA(\"x\")(\"y\")`를 부르면?",
    choices: [
      "a-x-y가 나온다",
      "x-y-undefined가 나온다",
      "아직 인자가 모자라 함수가 나온다",
      "옛 인자로 바로 실행돼 문자열이 나오고, 그 문자열을 부르다 TypeError가 난다",
    ],
    answer: 3,
    explanation:
      "공유 배열에 a, b, c가 남아 있어서 x가 들어오는 순간 개수가 차 a-b-c를 돌려준다. 그 문자열에 (\"y\")를 하니 함수가 아니라는 에러가 난다. 호출마다 [...args, ...more]로 새 배열을 만들어야 한다.",
    anchor: "인자-배열을-같이-쓰면-두-번째-호출이-망가진다",
  },
  {
    id: "js-currying-partial-4",
    post: "js-currying-partial",
    question:
      "`async function request(baseURL, method = \"GET\", path)`를 fn.length 기반 curry로 감싸고 `req(\"https://api.example.com\")`를 불렀다. 결과는?",
    choices: [
      "length가 1이라 바로 실행되어, path가 undefined인 요청의 Promise가 나온다",
      "남은 두 인자를 기다리는 함수가 나온다",
      "기본값 때문에 method만 기다리는 함수가 나온다",
      "SyntaxError가 난다. 기본값 뒤에 기본값 없는 매개변수는 쓸 수 없다",
    ],
    answer: 0,
    explanation:
      "length는 기본값이 있는 첫 매개변수 앞까지만 세서 1이다. 그래서 인자 하나로 실행 조건이 차고, 주소 끝에 undefined가 붙은 요청이 나간다. curryN(3, fn)이나 _.curry(fn, 3)처럼 개수를 직접 정해야 한다.",
    anchor: "fnlength를-믿으면-생기는-일",
  },
  {
    id: "js-currying-partial-5",
    post: "js-currying-partial",
    question: "`const warnAuth = logger.log.bind(logger, \"WARN\", \"auth\")` 뒤 `warnAuth.call(other, \"msg\")`를 부르면 this는?",
    choices: [
      "other. call이 bind보다 우선한다",
      "logger. bind로 묶은 this는 call로도 바꿀 수 없다",
      "undefined. bind된 함수는 this가 없다",
      "전역 객체. call의 첫 인자는 무시된다",
    ],
    answer: 1,
    explanation:
      "bind는 this와 앞 인자를 고정한 새 함수를 만들고, 그 this는 call이나 apply로 다시 바꿀 수 없다. 함수 이름도 bound log로 바뀌고 length는 채운 인자 수만큼 준다.",
    anchor: "bind로-하는-부분-적용과-this",
  },
  {
    id: "js-currying-partial-6",
    post: "js-currying-partial",
    question: "Ramda나 lodash/fp가 `filter(pred, xs)`처럼 데이터를 마지막 인자에 두는 이유는?",
    choices: [
      "자바스크립트 엔진이 마지막 인자를 더 빨리 읽어서",
      "배열 메서드와 인자 순서를 맞추려고",
      "설정만 부분 적용한 함수를 만들어 pipe로 이어 붙이려고",
      "TypeScript가 마지막 인자만 추론할 수 있어서",
    ],
    answer: 2,
    explanation:
      "데이터가 마지막에 오면 filter(isActive)처럼 동작만 정해 둔 함수를 만들 수 있고, 그런 함수들을 pipe로 연결한 뒤 데이터를 나중에 흘려보낼 수 있다. Array.prototype.map은 반대로 데이터가 먼저라서 메서드 체이닝과 맞는다.",
    anchor: "데이터를-마지막-인자에-두는-이유",
  },
  {
    id: "js-currying-partial-7",
    post: "js-currying-partial",
    question:
      "memo로 감싼 줄 100개에 `onSelect={select(it.id)}`(select = id => () => ...)를 넘겼다. 부모의 다른 상태가 바뀌면?",
    choices: [
      "props가 같으니 한 줄도 다시 그리지 않는다",
      "선택된 줄만 다시 그린다",
      "React가 같은 함수로 합쳐서 처음 한 번만 다시 그린다",
      "select(it.id)가 매번 새 함수라서 100줄을 전부 다시 그린다",
    ],
    answer: 3,
    explanation:
      "핸들러 공장은 렌더링마다 새 함수를 만들고, memo는 함수를 참조로 비교하니 모든 줄의 props가 바뀐 것으로 본다. useCallback으로 고정한 함수 하나를 넘기고 id는 자식이 클릭할 때 넘기면 다시 그리는 줄이 0개가 된다.",
    anchor: "react에서-커링한-핸들러가-memo를-깬다",
  },
];
