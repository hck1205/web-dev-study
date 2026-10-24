import type { QuizQuestion } from "../types";

export const TS_DECORATORS: QuizQuestion[] = [
  {
    id: "ts-decorators-1",
    post: "ts-decorators",
    question: "메서드에 붙인 표준 데코레이터 @timed는 언제, 몇 번 실행되나?",
    choices: [
      "그 메서드를 호출할 때마다 한 번씩",
      "인스턴스를 new 할 때마다 한 번씩",
      "클래스를 정의하는 순간 한 번, 그리고 돌려준 함수가 이후 호출을 대신 받는다",
      "프로그램이 끝날 때 한 번",
    ],
    answer: 2,
    explanation:
      "데코레이터는 클래스 정의 시점에 한 번 불리는 함수다. 메서드 데코레이터가 새 함수를 돌려주면 프로토타입의 메서드가 그 함수로 바뀌고, 이후 호출은 바뀐 함수가 받는다. 호출마다 도는 건 데코레이터가 아니라 데코레이터가 돌려준 함수다.",
    anchor: "데코레이터는-정의할-때-한-번-부르는-함수다",
  },
  {
    id: "ts-decorators-2",
    post: "ts-decorators",
    question: "@trimmed name = \"  키보드  \" 로 만든 인스턴스에 나중에 p.name = \"  마우스 \"를 대입했다. name 값은?",
    choices: [
      "\"  마우스 \" — 필드 데코레이터는 초기값만 바꿀 수 있어서 이후 대입은 감시하지 못한다",
      "\"마우스\" — 대입할 때마다 trim이 돈다",
      "\"키보드\" — 데코레이터가 필드를 읽기 전용으로 만든다",
      "TypeError가 난다",
    ],
    answer: 0,
    explanation:
      "필드 데코레이터는 정의 시점에 값이 없어서, 초기값을 받아 새 초기값을 돌려주는 함수만 줄 수 있다. 그래서 처음 한 번만 공백이 지워진다. 대입할 때마다 무언가를 하려면 accessor 키워드로 get/set을 만들고 그걸 바꿔 끼운다.",
    anchor: "무엇에-붙이느냐에-따라-받는-것이-다르다",
  },
  {
    id: "ts-decorators-3",
    post: "ts-decorators",
    question: "표준 데코레이터에서 @a @b greet() 를 호출하면 어느 쪽 감싸기 코드가 먼저 실행되나?",
    choices: [
      "b가 먼저, 적용도 b가 먼저라서",
      "a가 먼저. b가 먼저 적용되고 a가 그 결과를 감싸서 a(b(greet))가 되기 때문",
      "순서가 정해져 있지 않다",
      "둘 중 하나만 적용된다",
    ],
    answer: 1,
    explanation:
      "같은 대상에서는 대상에 가까운 b가 먼저 적용되고, a는 b가 감싼 함수를 받는다. 결과가 a(b(greet))이니 호출하면 바깥인 a의 앞부분이 먼저 돈다. 평가(팩토리 호출)는 위에서부터라 a가 먼저라는 점도 헷갈리기 쉽다.",
    anchor: "실행-순서-먼저-다-평가하고-안쪽부터-붙인다",
  },
  {
    id: "ts-decorators-4",
    post: "ts-decorators",
    question: "NestJS가 지금도 experimentalDecorators(레거시)를 쓰는 가장 직접적인 이유는?",
    choices: [
      "표준 데코레이터는 클래스에 붙일 수 없어서",
      "표준 데코레이터가 더 느려서",
      "TypeScript 5.0 이후로 레거시 방식이 기본값이 되어서",
      "@Inject·@Body 같은 매개변수 데코레이터와 생성자 타입 메타데이터 자동 생성이 표준에는 없어서",
    ],
    answer: 3,
    explanation:
      "표준 데코레이터에는 생성자 매개변수에 붙이는 데코레이터가 없고(TS1206 오류), emitDecoratorMetadata에 해당하는 타입 자동 기록도 없다. Nest의 주입은 이 둘에 기대고 있어 레거시를 쓴다. TS 5.0부터 기본은 오히려 표준 방식이다.",
    anchor: "표준-데코레이터와-experimentaldecorators는-다른-물건이다",
  },
  {
    id: "ts-decorators-5",
    post: "ts-decorators",
    question: "emitDecoratorMetadata를 켰을 때 DI 컨테이너가 생성자 인자를 아는 방법은?",
    choices: [
      "런타임에 TypeScript 타입 검사기를 불러 타입을 묻는다",
      "컴파일러가 design:paramtypes 메타데이터로 생성자 매개변수의 클래스 값을 적어 두고, 컨테이너가 Reflect.getMetadata로 읽는다",
      "생성자 소스 문자열을 파싱해 매개변수 이름을 읽는다",
      "모든 클래스를 한 번씩 new 해 보며 맞는 것을 찾는다",
    ],
    answer: 1,
    explanation:
      "타입은 컴파일 후 사라지므로 컴파일러가 __metadata(\"design:paramtypes\", [UserRepository]) 같은 코드를 넣어 런타임 값으로 남긴다. 컨테이너는 reflect-metadata로 이 목록을 꺼내 의존성 그래프를 아래부터 만든다.",
    anchor: "송장을-몰래-붙여-주는-emitdecoratormetadata",
  },
  {
    id: "ts-decorators-6",
    post: "ts-decorators",
    question: "constructor(private mailer: Mailer)에서 Mailer가 인터페이스라면 design:paramtypes에는 무엇이 적히나?",
    choices: [
      "Object — 인터페이스는 런타임 값이 없어서 컴파일러가 대신 Object를 적는다",
      "Mailer 인터페이스의 정의 문자열",
      "undefined — 순환 참조로 처리된다",
      "Mailer를 구현한 첫 번째 클래스",
    ],
    answer: 0,
    explanation:
      "메타데이터는 런타임에 값으로 존재하는 것만 적을 수 있다. 인터페이스, 유니언, import type으로 가져온 클래스는 값이 없어 Object가 된다. 그래서 Nest는 이런 경우 @Inject(토큰)으로 무엇을 넣을지 명시하게 한다.",
    anchor: "메타데이터가-object로-찍히는-날",
  },
  {
    id: "ts-decorators-7",
    post: "ts-decorators",
    question: "Nest 테스트를 Vitest로 옮기자 주입된 서비스가 undefined가 됐다. 원인은?",
    choices: [
      "Vitest는 클래스 문법을 지원하지 않아서",
      "reflect-metadata가 테스트 환경에서 자동으로 지워져서",
      "Vitest가 쓰는 esbuild는 타입 정보 없이 변환해 emitDecoratorMetadata 출력을 만들지 않아서",
      "Vitest가 표준 데코레이터만 실행해서 클래스 데코레이터를 무시해서",
    ],
    answer: 2,
    explanation:
      "design:paramtypes는 타입을 아는 tsc가 만드는 코드다. esbuild는 파일 단위로 타입 없이 변환해 이 메타데이터를 내지 않으니 컨테이너가 생성자에 넣을 것을 모른다. unplugin-swc처럼 메타데이터를 지원하는 변환기로 바꿔서 고친다.",
    anchor: "메타데이터가-object로-찍히는-날",
  },
];
