import type { QuizQuestion } from "../types";

export const JS_CALL_APPLY_BIND: QuizQuestion[] = [
  {
    id: "js-call-apply-bind-1",
    post: "js-call-apply-bind",
    question: "open()에서 `addEventListener(\"keydown\", this.onKey.bind(this))`, close()에서 `removeEventListener(\"keydown\", this.onKey.bind(this))`를 불렀다. 어떻게 되나?",
    choices: [
      "정상적으로 떼어진다",
      "removeEventListener가 TypeError를 던진다",
      "bind가 매번 새 함수를 만들어 지울 대상을 못 찾고, 리스너가 조용히 남는다",
      "두 번째 bind가 첫 번째 bind를 덮어써서 떼어진다",
    ],
    answer: 2,
    explanation:
      "removeEventListener는 함수를 참조로 비교한다. bind는 부를 때마다 새 bound 함수를 만들어서 달 때와 뗄 때의 함수가 다르고, 에러 없이 아무 일도 하지 않는다. 생성자에서 한 번 묶어 저장하거나 AbortController의 signal로 뗀다.",
    anchor: "떼지-못한-리스너를-고치는-세-가지",
  },
  {
    id: "js-call-apply-bind-2",
    post: "js-call-apply-bind",
    question: "`const hiKim = greet.bind(kim, \"hello\"); const again = hiKim.bind({ name: \"lee\" }, \"?\");` 이후 `again()` 안에서 greet의 this와 인자는?",
    choices: [
      "this는 lee, 인자는 [\"?\"]",
      "this는 kim, 인자는 [\"hello\", \"?\"]",
      "this는 lee, 인자는 [\"hello\", \"?\"]",
      "this는 kim, 인자는 [\"hello\"]",
    ],
    answer: 1,
    explanation:
      "바깥 bound 함수가 넘긴 this는 안쪽 bound 함수가 버리고 자기가 묶은 kim으로 바꾼다. 인자는 버려지지 않고 안쪽에서 채운 것 뒤에 바깥 것이 이어 붙는다. 그래서 가장 안쪽 bind의 this가 이긴다.",
    anchor: "한-번-묶으면-다시-묶이지-않는다",
  },
  {
    id: "js-call-apply-bind-3",
    post: "js-call-apply-bind",
    question: "운영 데이터에서 `Math.max(...prices)`가 `RangeError: Maximum call stack size exceeded`로 터졌다. 원인과 대처로 알맞은 것은?",
    choices: [
      "배열 원소 수만큼 인자를 스택에 올려서 생긴 한계다. 크기를 모르는 배열은 reduce나 반복문으로 처리한다",
      "전개 문법의 버그다. Math.max.apply(null, prices)로 바꾸면 해결된다",
      "prices 안에 NaN이 있어서다",
      "재귀 함수가 끝나지 않아서다. 종료 조건을 추가한다",
    ],
    answer: 0,
    explanation:
      "전개와 apply는 둘 다 원소마다 인자 하나를 넘겨 같은 한계에 걸린다. Node.js 22 기본 설정에서는 12만 5천 개와 13만 개 사이에서 깨졌고 경계는 환경마다 다르다. 크기를 모르는 배열은 reduce로 최댓값을 구한다.",
    anchor: "배열을-펼쳐-넘기던-apply",
  },
  {
    id: "js-call-apply-bind-4",
    post: "js-call-apply-bind",
    question: "`Object.create(null)`로 만든 dict에서 키 존재 여부를 안전하게 확인하는 방법은?",
    choices: [
      "dict.hasOwnProperty(\"apple\")",
      "\"apple\" in Object.prototype",
      "dict.apple !== undefined만 쓸 수 있다",
      "Object.hasOwn(dict, \"apple\") 또는 Object.prototype.hasOwnProperty.call(dict, \"apple\")",
    ],
    answer: 3,
    explanation:
      "프로토타입이 없는 객체는 hasOwnProperty를 물려받지 않아 dict.hasOwnProperty는 TypeError가 난다. 원본 메서드를 call로 빌려 dict를 this로 부르거나 ES2022의 Object.hasOwn을 쓴다. undefined 비교는 값이 undefined인 키를 구분하지 못한다.",
    anchor: "남의-메서드를-빌려-쓰기",
  },
  {
    id: "js-call-apply-bind-5",
    post: "js-call-apply-bind",
    question: "`function greet(greeting, mark) {}`에서 `greet.bind(kim, \"hello\")`로 만든 함수의 name과 length는?",
    choices: [
      "\"greet\"와 2",
      "\"bound greet\"와 1",
      "\"bound greet\"와 2",
      "\"\"와 0",
    ],
    answer: 1,
    explanation:
      "bound 함수의 name은 원래 이름 앞에 \"bound \"가 붙고, length는 미리 채운 인자 수만큼 줄어든다. 스택 트레이스나 React 개발자 도구에서 bound로 시작하는 이름이 보이면 bind를 거친 함수다. prototype 속성은 없다.",
    anchor: "bind가-돌려주는-함수의-정체",
  },
  {
    id: "js-call-apply-bind-6",
    post: "js-call-apply-bind",
    question: "클래스 컴포넌트의 render에서 `onPick={this.pick.bind(this)}`를 memo된 자식에 넘겼다. 부모가 여섯 번 렌더링되면 자식은?",
    choices: [
      "memo 덕분에 처음 한 번만 렌더링된다",
      "bind 결과는 캐시되어 두 번만 렌더링된다",
      "렌더링마다 새 함수가 생겨 props 비교가 실패하고 여섯 번 렌더링된다",
      "bind한 함수는 props로 넘길 수 없어 에러가 난다",
    ],
    answer: 2,
    explanation:
      "bind는 렌더링마다 새 함수 객체를 만들고, memo는 props를 참조로 비교하니 매번 바뀐 것으로 본다. 실제로 render에서 bind한 쪽은 6번, 생성자에서 한 번 묶은 쪽은 1번 렌더링됐다. 함수 컴포넌트에서는 useCallback이 같은 역할을 한다.",
    anchor: "react에서-bind를-쓰는-자리",
  },
];
