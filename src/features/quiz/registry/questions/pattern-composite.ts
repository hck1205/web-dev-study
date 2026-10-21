import type { QuizQuestion } from "../types";

export const PATTERN_COMPOSITE: QuizQuestion[] = [
  {
    id: "pattern-composite-1",
    post: "pattern-composite",
    question: "세트 상품 안에 세트가 들어가면서 금액, 무게, 개수 함수가 각자 \"세트면 안을 뒤진다\"는 재귀를 따로 갖고 있다. 개수만 틀리는 버그가 났을 때 컴포지트가 고치는 근본 원인은?",
    choices: [
      "재귀 대신 반복문을 써야 하는데 재귀를 썼다",
      "같은 순회 규칙이 계산 함수마다 복사되어 있어 그중 하나가 틀릴 수 있다",
      "세트와 상품의 타입을 구분하지 않았다",
      "세트의 할인율을 상품에 저장하지 않았다",
    ],
    answer: 1,
    explanation:
      "버그는 \"세트면 자식에게 묻는다\"는 같은 규칙을 함수마다 따로 짠 데서 나왔다. 컴포지트는 모든 항목에 같은 메서드를 두고 세트가 자식에게 같은 질문을 넘기게 해서 재귀를 한 곳에만 남긴다. 타입 구분은 이미 kind로 하고 있었다.",
    anchor: "세트-안에-세트가-들어오던-날",
  },
  {
    id: "pattern-composite-2",
    post: "pattern-composite",
    question: "add, remove 같은 자식 관리 메서드를 Composite에만 두는 설계(안전성)의 대가는?",
    choices: [
      "Leaf에서 add를 부르면 실행 중에 에러를 던져야 한다",
      "Composite가 자식의 결과를 모을 수 없게 된다",
      "트리를 조립하는 코드가 Composite 타입을 알아야 한다",
      "트리를 읽는 코드가 Leaf와 Composite를 구분해야 한다",
    ],
    answer: 2,
    explanation:
      "add가 Composite에만 있으면 Leaf에 자식을 넣는 코드는 컴파일 단계에서 막히지만, 조립하는 쪽은 Composite 타입을 알고 있어야 한다. 실행 중 에러로 막아야 하는 건 add를 Component에 두는 투명성 쪽의 대가다. 읽는 쪽은 공통 메서드만 쓰니 구분할 필요가 없다.",
    anchor: "add를-어디에-둘-것인가",
  },
  {
    id: "pattern-composite-3",
    post: "pattern-composite",
    question: "Express에서 app.use(\"/api\", apiRouter)처럼 라우터를 미들웨어 자리에 넣고, 라우터 안에 라우터를 또 넣을 수 있는 이유는?",
    choices: [
      "Router가 미들웨어와 같은 (req, res, next) 함수라서 같은 자리에 들어갈 수 있다",
      "Express가 라우터를 만나면 내부 라우트를 app으로 복사하기 때문이다",
      "Router가 http.Server를 상속하기 때문이다",
      "app.use가 첫 인자가 문자열이면 다른 함수로 바뀌기 때문이다",
    ],
    answer: 0,
    explanation:
      "Express의 Router는 typeof가 function이고 인자가 셋인 미들웨어와 같은 모양이다. 그래서 하나짜리 미들웨어와 미들웨어 묶음(라우터)을 같은 자리에서 다룰 수 있고, 이게 컴포지트다. 라우트를 복사하는 게 아니라 요청이 들어오면 라우터에게 넘긴다.",
    anchor: "매일-쓰는-트리들",
  },
  {
    id: "pattern-composite-4",
    post: "pattern-composite",
    question: "관리자가 세트 B 안에 세트 A를 넣었는데 A 안에 이미 B가 있었다. price()를 부르면 어떻게 되고, 어디서 막는 게 좋을까?",
    choices: [
      "A와 B의 가격이 두 번씩 더해진다. 계산할 때 중복을 빼면 된다",
      "가격이 0으로 나온다. 화면에서 0원 세트를 숨기면 된다",
      "재귀가 끝나지 않아 Maximum call stack size exceeded가 난다. 조립할 때 넣을 항목이 나를 포함하는지 검사한다",
      "자바스크립트 엔진이 순환을 감지해 한 번만 계산한다",
    ],
    answer: 2,
    explanation:
      "A의 price()가 B를, B가 다시 A를 부르니 호출이 끝나지 않고 스택이 넘친다. 읽을 때마다 방문 집합을 들고 다니기보다 add에서 contains로 순환을 막고, DB에 저장할 때도 같은 검사를 한다. 두 번 더해지는 건 순환이 아니라 공유된 자식의 문제다.",
    anchor: "트리가-그래프가-되는-순간",
  },
  {
    id: "pattern-composite-5",
    post: "pattern-composite",
    question: "컴포지트와 데코레이터는 둘 다 같은 인터페이스를 구현하며 같은 인터페이스의 객체를 품는다. 둘을 가르는 기준으로 맞는 것은?",
    choices: [
      "컴포지트는 상속을 쓰고 데코레이터는 합성을 쓴다",
      "컴포지트는 자식을 여럿 품고 결과를 모으며, 데코레이터는 하나를 감싸 호출 앞뒤에 기능을 더한다",
      "컴포지트는 생성 패턴이고 데코레이터는 구조 패턴이다",
      "데코레이터는 인터페이스를 바꾸고 컴포지트는 그대로 둔다",
    ],
    answer: 1,
    explanation:
      "구조가 닮았어도 목적이 다르다. 세트 가격 합산처럼 여러 자식의 결과를 모으면 컴포지트, 상품 하나에 부가세 표시를 덧붙이듯 하나를 감싸 기능을 더하면 데코레이터다. 둘 다 합성을 쓰는 구조 패턴이고, 인터페이스를 바꾸는 건 어댑터다.",
    anchor: "데코레이터와-같은-모양-다른-목적",
  },
  {
    id: "pattern-composite-6",
    post: "pattern-composite",
    question: "노드 종류는 상품과 세트로 고정인데 가격, 무게, 쿠폰 가능 여부처럼 계산 종류가 자주 는다. 어느 쪽이 더 편할까?",
    choices: [
      "노드마다 클래스를 만들고 계산마다 모든 클래스에 메서드를 추가한다",
      "계산마다 kind 검사가 든 재귀 함수를 새로 짠다",
      "판별 유니온 트리에 순회를 담당하는 fold 하나를 두고 계산마다 잎과 묶음 처리만 넘긴다",
      "트리를 배열로 펼쳐 저장하고 계산 때마다 다시 트리로 만든다",
    ],
    answer: 2,
    explanation:
      "계산이 자주 늘고 노드 종류가 고정이면 fold 쪽이 계산 하나를 함수 하나로 추가하게 해 준다. 재귀는 fold 안에 한 번만 있으니 처음 버그 같은 실수가 생길 자리가 없다. 노드 종류가 자주 는다면 반대로 클래스 다형성이 낫다.",
    anchor: "클래스-없이-트리-하나와-fold-하나",
  },
];
