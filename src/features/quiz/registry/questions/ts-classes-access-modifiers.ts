import type { QuizQuestion } from "../types";

export const TS_CLASSES_ACCESS_MODIFIERS: QuizQuestion[] = [
  {
    id: "ts-classes-access-modifiers-1",
    post: "ts-classes-access-modifiers",
    question: "클래스에 private apiKey를 두었는데 에러 로그에 JSON.stringify(client) 결과로 키가 찍혔다. 왜 그럴까?",
    choices: [
      "JSON.stringify가 private 속성을 일부러 포함하도록 TypeScript가 바꿔 놓았다",
      "private은 컴파일 때만 검사하고 결과 코드에서는 평범한 속성이 되기 때문이다",
      "strict 모드를 꺼서 private이 무시됐다",
      "로그 라이브러리가 #private 필드까지 읽기 때문이다",
    ],
    answer: 1,
    explanation:
      "TypeScript의 private은 컴파일하면 단어만 지워지고 평범한 속성으로 남아 Object.keys와 JSON.stringify에 그대로 나온다. 실행 중에도 숨겨야 하는 값은 엔진이 지키는 #private 필드로 둬야 직렬화에 나오지 않는다.",
    anchor: "private는-컴파일러에게-하는-약속이다",
  },
  {
    id: "ts-classes-access-modifiers-2",
    post: "ts-classes-access-modifiers",
    question: "Money 클래스의 equals(other: Money) 안에서 other.amount(private)를 읽었다. 컴파일 결과는?",
    choices: [
      "통과한다. private은 인스턴스가 아니라 클래스 단위라 같은 클래스 코드는 다른 인스턴스의 private도 읽는다",
      "에러가 난다. private은 this로만 접근할 수 있다",
      "에러가 난다. protected로 바꿔야 한다",
      "통과하지만 실행 중에 undefined가 나온다",
    ],
    answer: 0,
    explanation:
      "TypeScript의 private은 선언한 클래스 안의 코드라면 어느 인스턴스를 통해서든 접근을 허용한다. equals, compareTo 같은 비교 메서드를 쉽게 짜라고 이렇게 정했고 자바와 C#도 같다.",
    anchor: "private는-인스턴스가-아니라-클래스의-것이다",
  },
  {
    id: "ts-classes-access-modifiers-3",
    post: "ts-classes-access-modifiers",
    question: "class Q extends P 안의 메서드에서 P 타입으로 받은 other.secret(protected)을 읽으면 TS2446이 난다. 이유는?",
    choices: [
      "protected는 상위 클래스 안에서만 읽을 수 있다",
      "protected 필드는 메서드 안에서 읽을 수 없고 생성자에서만 읽는다",
      "P 타입 값은 P를 상속한 다른 형제 클래스의 인스턴스일 수 있어서, Q는 자기 계열 인스턴스를 통해서만 접근할 수 있다",
      "other가 readonly로 선언되지 않았기 때문이다",
    ],
    answer: 2,
    explanation:
      "하위 클래스는 자기나 자기 하위 클래스의 인스턴스를 통해서만 protected 멤버에 접근할 수 있다. P로 받은 값은 형제 클래스 R의 인스턴스일 수 있고, Q가 R의 내부를 볼 권리는 없다. 그래서 q.secret은 되지만 other.secret은 막힌다.",
    anchor: "protected는-내-쪽-계보에서만",
  },
  {
    id: "ts-classes-access-modifiers-4",
    post: "ts-classes-access-modifiers",
    question: "target을 ES2022로 올렸더니 constructor(public id: number)를 둔 클래스의 필드 label = `item-${this.id}`가 item-undefined가 됐다. 원인은?",
    choices: [
      "ES2022에서 템플릿 리터럴의 동작이 바뀌었다",
      "public 매개변수 속성은 ES2022에서 지원되지 않는다",
      "super()를 부르지 않아서 this가 없었다",
      "useDefineForClassFields가 기본으로 켜져 필드 정의가 super() 직후 먼저 돌고, 매개변수 속성 대입은 그 뒤에 돈다",
    ],
    answer: 3,
    explanation:
      "target이 ES2022 이상이면 useDefineForClassFields가 기본으로 켜져 표준 필드 의미를 따른다. 필드 초기값이 먼저 계산되고 this.id = id는 그 뒤에 실행되니 label은 undefined를 본다. TypeScript가 TS2729로 알려 주며, 생성자 본문이나 getter로 옮겨 고친다.",
    anchor: "필드가-매개변수-속성보다-먼저-돈다",
  },
  {
    id: "ts-classes-access-modifiers-5",
    post: "ts-classes-access-modifiers",
    question: "공유할 구현은 없고 여러 역할(캐시 가능, 직렬화 가능)을 한 클래스가 동시에 지켜야 한다. 무엇으로 계약을 정하는 게 맞나?",
    choices: [
      "abstract 클래스 두 개를 상속한다",
      "interface 여러 개를 implements한다",
      "protected 필드로 역할을 표시한다",
      "생성자 오버로드로 역할마다 시그니처를 만든다",
    ],
    answer: 1,
    explanation:
      "클래스는 하나만 상속할 수 있지만 interface는 여러 개를 구현할 수 있다. 공유 구현이 없다면 interface가 흔적 없이 계약만 정해 준다. abstract 클래스는 구현을 물려주거나 instanceof, 주입 토큰처럼 실행 중에 남아야 할 때 고른다.",
    anchor: "abstract-클래스와-interface-사이",
  },
  {
    id: "ts-classes-access-modifiers-6",
    post: "ts-classes-access-modifiers",
    question: "noImplicitOverride를 켠 프로젝트에서 상위 클래스의 save()를 persist()로 이름을 바꿨다. 하위 클래스의 override save()는 어떻게 되나?",
    choices: [
      "자동으로 persist()를 덮어쓰도록 바뀐다",
      "아무 에러 없이 새 메서드 save()가 된다",
      "TS4117 에러가 난다. override를 붙였는데 상위에 그 멤버가 없기 때문이다",
      "실행 중에 TypeError가 난다",
    ],
    answer: 2,
    explanation:
      "override를 붙이면 상위에 같은 이름의 멤버가 있는지 컴파일러가 확인한다. 이름이 바뀌어 상위에 save가 없으면 TS4117이 난다. override 없이 썼다면 조용히 새 메서드가 돼서 덮어쓰던 동작이 사라졌을 것이다.",
    anchor: "override와-noimplicitoverride",
  },
  {
    id: "ts-classes-access-modifiers-7",
    post: "ts-classes-access-modifiers",
    question: "CSV와 TSV 내보내기를 상속으로 만들었는데 BOM 붙이기, 헤더 빼기 같은 변형마다 하위 클래스가 늘어난다. 어떻게 바꾸는 게 좋나?",
    choices: [
      "구분자와 이스케이프를 Formatter 객체로, 변형은 옵션으로 받아 하나의 클래스에 끼운다",
      "상속 단계를 하나 더 만들어 공통 변형을 중간 클래스에 모은다",
      "모든 메서드를 protected로 바꿔 하위 클래스가 자유롭게 고치게 한다",
      "생성자 오버로드로 변형마다 시그니처를 추가한다",
    ],
    answer: 0,
    explanation:
      "바뀌는 축이 둘 이상이면 상속은 조합마다 클래스를 만든다. 바뀌는 부분을 인터페이스로 정해 객체로 주입하면 조합이 늘어도 클래스가 늘지 않고, 테스트에서 그 부분만 바꿔 끼울 수 있다. protected를 늘리면 상위 구현에 더 깊이 묶인다.",
    anchor: "상속보다-합성을-고르는-순간",
  },
];
