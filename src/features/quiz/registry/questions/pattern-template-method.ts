import type { QuizQuestion } from "../types";

export const PATTERN_TEMPLATE_METHOD: QuizQuestion[] = [
  {
    id: "pattern-template-method-1",
    post: "pattern-template-method",
    question: "상품 CSV, 쿠폰 JSON 가져오기가 '읽기 → 나누기 → 검사 → 저장 → 알림' 순서를 각자 복사해 들고 있어서, 빈 줄 처리 같은 수정이 한쪽에만 들어간다. 순서를 한 곳에 고정하고 달라지는 단계만 하위 클래스가 채우게 하는 패턴은?",
    choices: ["템플릿 메서드", "데코레이터", "옵서버", "빌더"],
    answer: 0,
    explanation:
      "템플릿 메서드는 상위 클래스의 run() 하나에 순서와 공통 규칙을 두고, parse나 validate처럼 달라지는 단계만 하위 클래스가 구현하게 한다. 그래서 공통 수정이 한 곳에서 끝난다. 데코레이터는 기능을 겹겹이 더할 뿐 흐름의 순서를 고정하지 않는다.",
    anchor: "순서는-위에서-단계는-아래에서",
  },
  {
    id: "pattern-template-method-2",
    post: "pattern-template-method",
    question: "ImportJob의 afterImport처럼 상위 클래스가 빈 기본 구현을 주고, 필요한 하위 클래스만 재정의하는 단계를 무엇이라 부르나?",
    choices: ["추상 메서드", "팩토리 메서드", "훅", "템플릿 메서드"],
    answer: 2,
    explanation:
      "훅은 기본 구현이 있어 재정의하지 않아도 되는 단계로, 확장 지점을 미리 열어 두는 역할을 한다. 추상 메서드는 하위 클래스가 반드시 구현해야 하는 단계다. 템플릿 메서드는 이 단계들을 순서대로 부르는 run() 자체를 가리킨다.",
    anchor: "순서는-위에서-단계는-아래에서",
  },
  {
    id: "pattern-template-method-3",
    post: "pattern-template-method",
    question: "'재정의할 때 super.setup()을 꼭 먼저 부르세요' 같은 규칙보다 템플릿 메서드가 안전한 이유는?",
    choices: [
      "타입스크립트가 super 호출 여부를 검사해 주기 때문에",
      "상위 클래스가 순서를 쥐고 하위 단계를 부르므로, 하위 클래스가 빠뜨릴 super 호출이 없기 때문에",
      "하위 클래스가 상위 클래스의 모든 메서드를 복사하기 때문에",
      "상속 대신 합성을 쓰기 때문에",
    ],
    answer: 1,
    explanation:
      "super를 불러야 하는 규칙은 지키지 않아도 컴파일되어 조용히 깨진다. 템플릿 메서드는 할리우드 원칙대로 상위 클래스가 하위 클래스의 단계를 부르므로 하위 클래스는 채울 것만 구현하면 된다. 템플릿 메서드는 합성이 아니라 상속을 쓰는 패턴이다.",
    anchor: "부르는-쪽은-상위-클래스다",
  },
  {
    id: "pattern-template-method-4",
    post: "pattern-template-method",
    question: "Node.js에서 Transform을 상속해 줄 단위 변환 스트림을 만들 때, 하위 클래스가 구현하는 것과 상위 클래스가 맡는 것을 바르게 나눈 것은?",
    choices: [
      "하위: 배압과 버퍼 관리 / 상위: 조각 하나를 바꾸는 일",
      "하위: _transform과 _flush / 상위: 버퍼, 배압, 에러 전파",
      "하위: pipe 연결 / 상위: _transform",
      "하위: 모든 것 / 상위: 아무것도 하지 않는다",
    ],
    answer: 1,
    explanation:
      "Transform은 템플릿 메서드 구조라서 하위 클래스는 조각 하나를 처리하는 _transform과 끝에 남은 것을 밀어내는 _flush만 채운다. 받는 쪽이 느릴 때 앞 스트림을 늦추는 배압과 버퍼는 상위 클래스가 맡는다. 문서도 _transform을 애플리케이션 코드가 직접 부르지 말라고 한다.",
    anchor: "nodejs-스트림은-_transform만-채우게-한다",
  },
  {
    id: "pattern-template-method-5",
    post: "pattern-template-method",
    question: "상위 클래스 생성자에서 this.setup()을 불렀고, 하위 클래스의 setup은 필드 delimiter를 읽고 header를 채운다. 실제로 일어나는 일은?",
    choices: [
      "정상 동작한다",
      "컴파일 에러가 난다",
      "setup이 두 번 불린다",
      "setup에서 본 delimiter는 undefined이고, 채운 header는 뒤늦은 필드 초기화에 덮어써진다",
    ],
    answer: 3,
    explanation:
      "하위 클래스의 필드 초기화는 super()가 끝난 뒤에 실행된다. 그래서 상위 생성자 안에서 불린 setup은 아직 초기화되지 않은 필드를 보고, 그 뒤 header = \"\" 초기화가 setup이 채운 값을 덮어쓴다. 타입 검사는 이를 잡지 못하므로 템플릿 메서드는 생성자 밖의 run() 같은 메서드에 둔다.",
    anchor: "생성자에서-단계를-부르면-생기는-일",
  },
  {
    id: "pattern-template-method-6",
    post: "pattern-template-method",
    question: "읽는 형식(CSV, JSON, 엑셀)과 저장할 곳(상품, 쿠폰, 회원)이 따로 늘어난다. 템플릿 메서드를 계속 쓰면 생기는 문제와 대안은?",
    choices: [
      "조합마다 하위 클래스가 생긴다. 단계를 객체나 함수 인자로 받는 합성으로 옮긴다",
      "run()이 느려진다. 단계를 비동기로 바꾼다",
      "훅이 너무 많아진다. 훅을 모두 추상 메서드로 바꾼다",
      "문제가 없다. 상속 계층을 더 깊게 만든다",
    ],
    answer: 0,
    explanation:
      "상속은 축 하나에 맞는 도구라서 축이 둘이 되면 조합 수만큼 하위 클래스가 필요하다. 순서는 함수 하나가 쥐고 단계 묶음을 인자로 받으면 각 축을 따로 골라 끼울 수 있다. 사실상 단계를 전략으로 받는 모양이다.",
    anchor: "상속이-무거워지는-순간",
  },
];
