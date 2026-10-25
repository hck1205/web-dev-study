import type { QuizQuestion } from "../types";

export const OOP_FOUR_PILLARS: QuizQuestion[] = [
  {
    id: "oop-four-pillars-1",
    post: "oop-four-pillars",
    question:
      "포인트 잔액 필드를 private로 바꾸고 getBalance()와 setBalance()를 열었다. 그런데도 잔액이 음수가 된 회원이 또 나왔다. 무엇이 문제인가?",
    choices: [
      "private 대신 protected를 써야 했다",
      "setter가 불변식을 검사하지 않아 바깥에서 규칙을 깰 수 있으니, 캡슐화가 된 게 아니다",
      "getter를 열어서 잔액이 새어 나갔다",
      "필드를 #balance로 바꾸면 자동으로 음수가 막힌다",
    ],
    answer: 1,
    explanation:
      "누구나 setBalance(-999999)를 부를 수 있으면 필드를 공개한 것과 같다. 값을 바꾸는 이유를 charge, use 같은 메서드로 만들고 그 안에서 규칙을 검사해야 캡슐화다. #balance는 접근을 막을 뿐 규칙을 대신 지켜 주지 않는다.",
    anchor: "캡슐화는-규칙을-객체-안에-두는-일이다",
  },
  {
    id: "oop-four-pillars-2",
    post: "oop-four-pillars",
    question: "TypeScript의 `private` 필드와 `#` 필드의 차이로 맞는 것은?",
    choices: [
      "둘 다 자바스크립트 엔진이 막는다",
      "private는 타입 검사기만 막아서 `as any`로 우회하면 실행 중에 바뀌고, #은 엔진이 막는다",
      "#은 타입 검사기만 막고 private는 엔진이 막는다",
      "private는 하위 클래스에서만 보이고 #은 같은 파일에서만 보인다",
    ],
    answer: 1,
    explanation:
      "TypeScript private는 컴파일하면 평범한 속성으로 남아서 타입 검사만 피하면 값을 바꿀 수 있다. #필드는 클래스 밖에서 이름을 쓰는 순간 문법 오류라 이런 우회가 안 된다.",
    anchor: "접근-제한자와-스코프는-다른-이야기다",
  },
  {
    id: "oop-four-pillars-3",
    post: "oop-four-pillars",
    question:
      "Java에서 `Payment p = new Card();` 후 `describe(Payment)`와 `describe(Card)` 오버로드가 있을 때 `describe(p)`는 어느 쪽을 부르나?",
    choices: [
      "describe(Card). 실제 객체가 Card라서",
      "describe(Payment). 오버로딩은 컴파일 때 변수의 선언 타입으로 고르므로",
      "모호해서 컴파일 오류가 난다",
      "실행할 때마다 달라진다",
    ],
    answer: 1,
    explanation:
      "오버로딩은 컴파일 시점에 선언 타입 Payment를 보고 고른다. 실제 객체를 보고 고르는 건 오버라이딩(동적 디스패치)이다. 그래서 p.approve()는 Card의 구현으로 가지만 describe(p)는 describe(Payment)로 간다.",
    anchor: "다형성은-같은-호출로-다른-일을-시킨다",
  },
  {
    id: "oop-four-pillars-4",
    post: "oop-four-pillars",
    question:
      "add와 addAll을 둘 다 덮어써서 추가 횟수를 세던 하위 클래스가, 코드 변경 없이 라이브러리를 올리자 두 배로 세기 시작했다. 가장 그럴듯한 원인은?",
    choices: [
      "라이브러리가 addAll 안에서 this.add를 부르도록 바뀌어, 동적 디스패치로 우리가 덮어쓴 add가 다시 불렸다",
      "라이브러리가 Set을 Array로 바꿔서 중복이 생겼다",
      "하위 클래스의 필드가 부모 생성자보다 먼저 초기화됐다",
      "super 호출이 두 번 일어나는 자바스크립트 버그다",
    ],
    answer: 0,
    explanation:
      "상위 클래스가 자기 메서드를 안에서 어떻게 부르는지는 구현 세부인데, 하위 클래스가 거기에 기대고 있었다. 이것이 깨지기 쉬운 기반 클래스 문제다. 합성으로 바꾸면 안에 넣은 객체의 add는 우리 add가 아니라서 영향을 받지 않는다.",
    anchor: "상속은-구현까지-물려받는다",
  },
  {
    id: "oop-four-pillars-5",
    post: "oop-four-pillars",
    question: "상속 대신 합성을 쓸 때 치르는 대가로 맞는 것은?",
    choices: [
      "실행 속도가 크게 느려진다",
      "필요한 메서드마다 위임 코드를 직접 써야 하고, 감싼 객체는 원래 클래스 타입이 아니라 공통 인터페이스가 필요하다",
      "private 필드를 쓸 수 없다",
      "다형성을 쓸 수 없게 된다",
    ],
    answer: 1,
    explanation:
      "합성한 객체는 원래 클래스를 상속하지 않으니 그 타입을 받는 함수에 넘길 수 없고, 메서드를 하나씩 위임해야 한다. 그래서 보통 공통 인터페이스를 두고 둘 다 따르게 한다. 다형성은 인터페이스로 그대로 얻는다.",
    anchor: "물려받는-대신-안에-넣는다",
  },
  {
    id: "oop-four-pillars-6",
    post: "oop-four-pillars",
    question:
      "Java에서 같은 시그니처의 default 메서드 cancel()을 가진 인터페이스 두 개를 한 클래스가 함께 구현하면 어떻게 되나?",
    choices: [
      "먼저 적은 인터페이스의 default가 쓰인다",
      "나중에 적은 인터페이스의 default가 쓰인다",
      "컴파일 오류가 나고, 클래스가 cancel()을 직접 정의해 Voidable.super.cancel()처럼 골라야 한다",
      "실행 중에 IllegalStateException이 난다",
    ],
    answer: 2,
    explanation:
      "Java는 서로 관계없는 default 메서드 충돌을 알아서 고르지 않고 'inherits unrelated defaults' 오류로 컴파일을 멈춘다. 하위 클래스가 오버라이드하고 인터페이스이름.super로 쓸 쪽을 정한다. 클래스 다중 상속을 막아 상태 쪽 다이아몬드는 원래 생기지 않는다.",
    anchor: "다중-상속과-다이아몬드",
  },
  {
    id: "oop-four-pillars-7",
    post: "oop-four-pillars",
    question:
      "결제 수단은 세 가지에서 거의 안 느는데, 수수료·정산·부정 결제 점수처럼 결제 수단마다 하는 일이 계속 는다. 고칠 곳이 적은 설계는?",
    choices: [
      "결제 수단마다 클래스를 두고 일이 늘 때마다 메서드를 더한다",
      "추상 클래스를 세 층으로 쌓는다",
      "종류를 유니온으로 닫아 두고 동작마다 switch 함수를 쓰며, never 검사로 빠뜨린 경우를 잡는다",
      "모든 결제 수단을 하나의 클래스에 합친다",
    ],
    answer: 2,
    explanation:
      "새 동작이 자주 늘면 클래스 방식은 새 일마다 모든 클래스를 열어야 하고, 닫힌 유니온과 switch는 함수 하나만 더하면 된다. never 검사가 있으면 새 종류를 더했을 때 빠뜨린 switch를 컴파일러가 알려 준다. 새 종류가 자주 늘 때는 반대로 클래스와 다형성이 유리하다.",
    anchor: "객체-지향이-과해지는-순간",
  },
];
