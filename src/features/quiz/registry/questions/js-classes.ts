import type { QuizQuestion } from "../types";

export const JS_CLASSES: QuizQuestion[] = [
  {
    id: "js-classes-1",
    post: "js-classes",
    question: "부모 생성자가 `this.render()`를 부르고, 하위 클래스 Label이 `text = \"hello\"` 필드와 `render() { console.log(this.text) }`를 가진다. `new Label()`은 무엇을 출력하나?",
    choices: [
      "hello",
      "undefined",
      "ReferenceError",
      "아무것도 출력하지 않는다. 부모 생성자에서는 부모의 render가 불린다",
    ],
    answer: 1,
    explanation:
      "부모 생성자 안에서도 체인을 따라 덮어쓴 Label의 render가 불린다. 그런데 하위 클래스의 필드는 super()가 돌아온 뒤에 붙어서 그 순간 text는 아직 없다. #text였다면 칸이 없어 TypeError가 난다.",
    anchor: "하위-클래스는-부모가-먼저-만든다",
  },
  {
    id: "js-classes-2",
    post: "js-classes",
    question: "`class Model { static create() { return new this(); } }`, `class Post extends Model {}`일 때 `Post.create()`의 결과는?",
    choices: [
      "Model 인스턴스. create가 Model에 정의되어 있으니까",
      "TypeError. 정적 메서드는 상속되지 않는다",
      "Post 인스턴스. 정적 메서드도 점 앞의 클래스가 this다",
      "undefined",
    ],
    answer: 2,
    explanation:
      "extends는 Post 자체의 [[Prototype]]을 Model로 이어서 Post.create를 Model에서 찾는다. 호출은 Post.create()라 this는 Post이고 new this()는 Post를 만든다. 팩토리에서 new this()를 쓰는 이유다.",
    anchor: "static은-클래스-쪽-체인을-탄다",
  },
  {
    id: "js-classes-3",
    post: "js-classes",
    question: "`#balance`를 가진 Account 인스턴스를 `new Proxy(acc, {})`로 감싸고 `proxied.deposit(1)`을 부르면?",
    choices: [
      "정상 동작한다. Proxy는 투명하다",
      "TypeError. 메서드 안의 this가 프록시인데 프록시에는 #balance 칸이 없다",
      "SyntaxError. 프록시 안에서는 #을 쓸 수 없다",
      "deposit은 되지만 잔액이 프록시에 따로 쌓인다",
    ],
    answer: 1,
    explanation:
      "proxied.deposit()의 this는 프록시 객체다. #private 칸은 생성자를 거친 원래 객체에만 붙어 있어 프록시에서 읽으면 Cannot read private member 에러가 난다. 객체를 프록시로 감싸는 상태 라이브러리와 섞을 때 만나는 문제다.",
    anchor: "정말로-숨기는-private",
  },
  {
    id: "js-classes-4",
    post: "js-classes",
    question: "TypeScript의 `private balance = 100`과 자바스크립트의 `#balance = 100`의 차이로 옳은 것은?",
    choices: [
      "TypeScript private은 실행 중에 평범한 속성이라 Object.keys에 나오고, #balance는 나오지 않는다",
      "둘 다 실행 중에 접근을 막는다",
      "#balance는 컴파일할 때만 검사한다",
      "TypeScript private은 하위 클래스에서도 접근할 수 없는 SyntaxError를 낸다",
    ],
    answer: 0,
    explanation:
      "TypeScript의 private은 타입 검사 단계에서만 막고 출력된 코드에서는 일반 속성이라 키 목록과 JSON에 그대로 나온다. #private는 엔진이 실행 중에 지키는 칸이라 밖에서는 보이지 않는다. 값이 새면 안 된다면 #을 쓴다.",
    anchor: "정말로-숨기는-private",
  },
  {
    id: "js-classes-5",
    post: "js-classes",
    question: "부모에 `set value(v)`가 있고 하위 클래스가 `value = 1` 필드를 선언했다. 표준 클래스 필드 시맨틱에서 일어나는 일은?",
    choices: [
      "부모 setter가 1로 불린다",
      "TypeError가 난다",
      "부모 setter는 불리지 않고 인스턴스에 value 자기 속성이 정의된다",
      "부모의 getter와 setter가 모두 지워진다",
    ],
    answer: 2,
    explanation:
      "클래스 필드는 대입이 아니라 defineProperty와 같은 정의라서 체인 위의 setter를 무시한다. TypeScript는 target이 ES2022 이상이면 useDefineForClassFields가 기본 true라서, target만 올려도 setter에 기대던 코드가 동작을 바꾼다.",
    anchor: "필드-선언은-대입이-아니다",
  },
  {
    id: "js-classes-6",
    post: "js-classes",
    question: "메서드를 다른 객체로 옮겨 붙였을 때 그 메서드 안의 `super.speak()`가 부르는 것은?",
    choices: [
      "새 객체의 [[Prototype]]에 있는 speak",
      "항상 Object.prototype의 speak",
      "옮긴 순간 super가 끊겨 TypeError",
      "원래 정의된 객체([[HomeObject]])의 [[Prototype]]에 있는 speak",
    ],
    answer: 3,
    explanation:
      "super는 메서드가 정의될 때 기록된 [[HomeObject]]를 기준으로 찾는다. 그래서 this와 달리 호출 방식에 따라 바뀌지 않는다. 실제로 robot을 프로토타입으로 둔 객체에서도 Animal의 speak가 불렸다.",
    anchor: "super가-찾아가는-곳",
  },
  {
    id: "js-classes-7",
    post: "js-classes",
    question: "React 19에서 여전히 클래스 컴포넌트로 만들어야 하는 것은?",
    choices: [
      "상태를 가진 모든 컴포넌트",
      "ref를 받는 컴포넌트",
      "렌더링 중 에러를 잡는 에러 경계",
      "서버 컴포넌트",
    ],
    answer: 2,
    explanation:
      "에러 경계는 static getDerivedStateFromError와 componentDidCatch 같은 클래스 생명주기로만 만들 수 있다. getDerivedStateFromError가 static이라 그 안에서는 this를 쓸 수 없다. react-error-boundary 같은 패키지도 안은 클래스다.",
    anchor: "react에-남은-클래스",
  },
];
