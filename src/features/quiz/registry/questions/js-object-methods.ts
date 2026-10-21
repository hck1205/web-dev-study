import type { QuizQuestion } from "../types";

export const JS_OBJECT_METHODS: QuizQuestion[] = [
  {
    id: "js-object-methods-1",
    post: "js-object-methods",
    question: 'JSON.parse(\'{"latte":120,"3001":95,"1002":60}\')의 Object.keys 결과는?',
    choices: [
      '["latte", "3001", "1002"]',
      '["1002", "3001", "latte"]',
      '["3001", "1002", "latte"]',
      '["latte", "1002", "3001"]',
    ],
    answer: 1,
    explanation:
      "자기 속성 키는 배열 인덱스 모양의 정수 키가 오름차순으로 먼저 오고, 그다음 문자열 키가 만들어진 순서대로 온다. JSON 문자열의 순서는 객체가 되는 순간 이 규칙으로 다시 정해지니, 순서가 뜻을 가지면 배열이나 Map에 담는다.",
    anchor: "숫자처럼-생긴-키가-먼저-선다",
  },
  {
    id: "js-object-methods-2",
    post: "js-object-methods",
    question: "프로토타입에 inherited, 자기 속성으로 name과 열거 불가인 cost가 있는 객체를 for...in으로 돌리면 나오는 키는?",
    choices: ["name", "name, cost", "name, inherited", "name, cost, inherited"],
    answer: 2,
    explanation:
      "for...in은 자기 속성과 프로토타입에서 물려받은 속성 중 열거 가능한 것만 돈다. 열거 불가인 cost는 빠지고 inherited는 들어간다. Object.keys라면 inherited도 빠져 name만 나온다.",
    anchor: "꺼내는-함수마다-보는-속성이-다르다",
  },
  {
    id: "js-object-methods-3",
    post: "js-object-methods",
    question: "Object.defineProperty(user, \"id\", { value: 42 })로 만든 id 속성에 대한 설명으로 맞는 것은?",
    choices: [
      "읽기 전용이고 목록과 JSON에서 빠지며 지울 수도 없다",
      "대입으로 만든 속성과 똑같이 바꾸고 지울 수 있다",
      "읽기 전용이지만 Object.keys에는 나온다",
      "값을 적지 않은 스위치는 true가 되어 열려 있다",
    ],
    answer: 0,
    explanation:
      "defineProperty로 새 속성을 만들 때 적지 않은 writable, enumerable, configurable은 모두 false가 된다. 그래서 값만 넘기면 읽기 전용에 숨겨진, 지울 수 없는 속성이 된다. 대입으로 만든 속성은 셋 다 true라서 차이가 크다.",
    anchor: "속성-하나에-스위치가-네-개-붙어-있다",
  },
  {
    id: "js-object-methods-4",
    post: "js-object-methods",
    question: "const broken = { set name(v) { this.name = v; } }; broken.name = \"kim\"을 실행하면?",
    choices: [
      "name에 kim이 저장된다",
      "setter가 무시되고 일반 속성이 생긴다",
      "TypeError: Cannot assign to read only property가 난다",
      "RangeError: Maximum call stack size exceeded가 난다",
    ],
    answer: 3,
    explanation:
      "setter 안에서 같은 이름에 대입하면 그 대입이 다시 setter를 부르고, 이것이 끝없이 반복돼 스택이 넘친다. 실제 값은 _name처럼 다른 이름의 칸이나 #private 필드에 저장해야 한다.",
    anchor: "읽고-쓸-때-함수를-부르는-속성",
  },
  {
    id: "js-object-methods-5",
    post: "js-object-methods",
    question: "Object.seal로 잠근 객체에서 여전히 할 수 있는 것은?",
    choices: [
      "새 속성 추가",
      "기존 속성 삭제",
      "기존 속성을 열거 불가로 재정의",
      "기존 속성의 값 변경",
    ],
    answer: 3,
    explanation:
      "seal은 추가를 막고 모든 속성을 configurable: false로 만들어 삭제와 재정의도 막지만, writable은 그대로 두어 값은 바꿀 수 있다. 값 변경까지 막는 것은 writable을 false로 만드는 freeze다.",
    anchor: "잠금은-세-단계다",
  },
  {
    id: "js-object-methods-6",
    post: "js-object-methods",
    question: "React 개발 모드에서 props.style.color = \"blue\"는 에러 없이 통과하는데 props.label = \"sale\"은 TypeError가 나는 이유는?",
    choices: [
      "React가 props 객체를 한 층만 얼려서 안쪽 style 객체는 열려 있기 때문에",
      "React가 style prop만 따로 복사해 두기 때문에",
      "문자열 prop만 읽기 전용으로 정의되기 때문에",
      "style은 DOM에 직접 연결된 객체라서",
    ],
    answer: 0,
    explanation:
      "개발 빌드는 요소와 props를 Object.freeze로 얼리는데, freeze는 한 층만 얼린다. 그래서 props의 칸을 바꾸면 막히지만 칸이 가리키는 안쪽 객체는 고칠 수 있다. 프로덕션 빌드는 아예 얼리지 않는다.",
    anchor: "react-개발-모드는-props를-얼려-둔다",
  },
  {
    id: "js-object-methods-7",
    post: "js-object-methods",
    question: "TypeScript에서 Object.keys(obj)의 반환 타입이 (keyof T)[]가 아니라 string[]인 이유는?",
    choices: [
      "타입 추론 성능을 위해서",
      "심볼 키를 포함하기 때문에",
      "구조적 타이핑 때문에 T 타입 값에 키가 더 있을 수 있어서",
      "Object.keys가 프로토타입의 키까지 돌려줘서",
    ],
    answer: 2,
    explanation:
      "TypeScript는 구조로 타입을 맞추니 T 타입 변수에 키가 더 많은 객체가 들어올 수 있고, 런타임 Object.keys는 그 키도 돌려준다. keyof T라고 하면 여분의 키를 숨겨 런타임 버그를 놓치게 된다. Object.keys는 심볼과 상속된 키는 돌려주지 않는다.",
    anchor: "typescript가-objectkeys를-string로-두는-이유",
  },
];
