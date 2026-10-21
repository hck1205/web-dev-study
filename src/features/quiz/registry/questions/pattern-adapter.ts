import type { QuizQuestion } from "../types";

export const PATTERN_ADAPTER: QuizQuestion[] = [
  {
    id: "pattern-adapter-1",
    post: "pattern-adapter",
    question: "winston에서 pino로 바꾼 뒤 logger.info(\"결제 실패\", { orderId })의 orderId가 로그에서 사라졌다. 앱 코드를 고치지 않고 해결하는 방법은?",
    choices: [
      "pino의 로그 레벨을 debug로 낮춘다",
      "앱이 기대하는 Logger 모양을 구현하고 안에서 pino.info(meta, msg) 순서로 넘기는 어댑터를 둔다",
      "pino 인스턴스를 싱글턴으로 만든다",
      "메타데이터를 JSON.stringify해서 메시지에 붙인다",
    ],
    answer: 1,
    explanation:
      "pino는 객체를 첫 인자로, 메시지를 두 번째로 받고 순서가 반대면 메타데이터를 버린다. Logger 인터페이스를 구현한 어댑터가 순서를 바꿔 주면 앱 코드 수백 곳은 그대로 둘 수 있다. 메시지에 문자열로 붙이면 필드로 검색할 수 없게 된다.",
    anchor: "모양이-다른-플러그에-끼우는-변환기",
  },
  {
    id: "pattern-adapter-2",
    post: "pattern-adapter",
    question: "LegacyPayClient를 상속해 approve를 Promise 버전으로 재정의한 클래스 어댑터를, 콜백을 넘기던 옛 코드에 넣으면?",
    choices: [
      "컴파일 에러가 난다",
      "콜백과 Promise가 둘 다 동작한다",
      "컴파일도 되고 에러도 없지만 콜백이 불리지 않는다",
      "런타임에 TypeError가 난다",
    ],
    answer: 2,
    explanation:
      "인자가 적은 메서드와 void 자리에 Promise를 돌려주는 재정의를 타입스크립트가 받아 준다. 그래서 부모 타입으로 쓰던 코드는 조용히 콜백을 잃는다. 같은 이름을 재정의하는 클래스 어댑터가 위험한 이유이고, 그래서 객체 어댑터를 주로 쓴다.",
    anchor: "객체-어댑터와-클래스-어댑터",
  },
  {
    id: "pattern-adapter-3",
    post: "pattern-adapter",
    question: "결제 어댑터에서 모르는 resultCode가 왔을 때 가장 알맞은 처리는?",
    choices: [
      "else로 거절 처리한다",
      "else로 승인 처리한다",
      "null을 돌려준다",
      "에러를 던져 모르는 상황임을 알린다",
    ],
    answer: 3,
    explanation:
      "모르는 코드를 승인이나 거절로 넣으면 어댑터가 모르는 상황을 아는 척하게 된다. 돈이 걸린 경계에서는 명시적으로 실패시켜야 원인을 바로 찾을 수 있다. 지원하지 않는 부분 환불을 전액 환불로 바꿔 보내지 않는 것도 같은 이유다.",
    anchor: "이름만-바꾸는-게-아니다",
  },
  {
    id: "pattern-adapter-4",
    post: "pattern-adapter",
    question: "promisify(client.approve)로 만든 함수를 부르자 Cannot read properties of undefined (reading 'apiKey')가 났다. 원인은?",
    choices: [
      "메서드를 꺼내 넘기면서 this가 끊겨, 원래 메서드 안의 this가 undefined라서",
      "promisify가 콜백이 없는 함수에만 동작해서",
      "apiKey가 환경 변수에 없어서",
      "Promise가 아직 끝나지 않아서",
    ],
    answer: 0,
    explanation:
      "client.approve를 값으로 꺼내면 client와의 연결이 사라진다. 변환된 함수가 원래 메서드를 부를 때 this가 undefined라 this.apiKey에서 터진다. bind(client)로 묶거나 화살표 함수로 감싸서 넘긴다.",
    anchor: "콜백을-promise로-바꾸는-것도-어댑터다",
  },
  {
    id: "pattern-adapter-5",
    post: "pattern-adapter",
    question: "로그 어댑터의 계약 테스트에서 pino와 winston을 가짜로 바꾸지 않고 진짜를 쓰는 이유는?",
    choices: [
      "가짜를 만들기가 더 어려워서",
      "테스트 속도가 더 빨라서",
      "어댑터 테스트의 목적이 실제 라이브러리가 인자를 어떻게 다루는지 확인하는 것이라서",
      "라이브러리 버전을 고정하려고",
    ],
    answer: 2,
    explanation:
      "가짜 pino는 우리가 생각하는 pino의 동작만 흉내 내서, 인자 순서를 잘못 넘겨도 통과한다. 진짜를 쓰고 출력만 메모리로 받으면 메타데이터가 사라지는 사고를 테스트가 잡는다.",
    anchor: "어댑터를-바꾸기-전에-계약-테스트부터",
  },
  {
    id: "pattern-adapter-6",
    post: "pattern-adapter",
    question: "감싼 객체와 같은 인터페이스를 유지하면서 재시도 기능을 덧붙이는 감싸개는 어떤 패턴인가?",
    choices: ["어댑터", "데코레이터", "퍼사드", "브리지"],
    answer: 1,
    explanation:
      "인터페이스를 그대로 두고 기능을 더하면 데코레이터다. 어댑터는 인터페이스를 다른 모양으로 바꾸고, 퍼사드는 여러 객체를 묶은 새 입구를 만든다. 브리지는 처음부터 추상과 구현을 나눠 설계하는 패턴이다.",
    anchor: "비슷한-구조-패턴과-헷갈릴-때",
  },
];
