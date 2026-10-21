import type { QuizQuestion } from "../types";

export const PATTERN_BUILDER: QuizQuestion[] = [
  {
    id: "pattern-builder-1",
    post: "pattern-builder",
    question: "타입스크립트에서 인자가 많은 함수를 옵션 객체 대신 빌더로 바꿀 만한 이유로 가장 알맞은 것은?",
    choices: [
      "인자에 이름을 붙여 순서 실수를 막으려고",
      "기본값을 줄 수 있게 하려고",
      "여러 필드에 걸친 규칙을 완성 시점에 한 번에 검사하고 불변 결과물을 내려고",
      "런타임 성능을 높이려고",
    ],
    answer: 2,
    explanation:
      "이름 붙이기와 기본값은 옵션 객체도 해 준다. 빌더를 고를 이유는 조금씩 쌓아 가는 조립, 필드 사이 규칙을 build에서 한 번에 하는 검사, 그리고 얼린 결과물에 있다.",
    anchor: "객체-리터럴로-모자라는-순간",
  },
  {
    id: "pattern-builder-2",
    post: "pattern-builder",
    question: "\"POST를 재시도하려면 멱등성 키가 있어야 한다\"는 검사를 retry() 안이 아니라 build()에서 하는 이유는?",
    choices: [
      "retry()가 불린 뒤에 헤더가 붙을 수도 있어서, 중간 상태를 에러로 오해하지 않으려고",
      "build()가 더 빨리 실행되기 때문에",
      "retry()는 값을 돌려줄 수 없어서",
      "멱등성 키는 서버에서만 검사할 수 있어서",
    ],
    answer: 0,
    explanation:
      "빌더는 호출 순서가 자유로우니 retry 뒤에 header를 불러도 된다. 세터마다 검사하면 아직 완성되지 않았을 뿐인 상태를 에러로 본다. 한 필드만 보면 되는 값(limit 0 같은)은 그 자리에서 막아도 된다.",
    anchor: "한-단계씩-쌓고-build에서-검사한다",
  },
  {
    id: "pattern-builder-3",
    post: "pattern-builder",
    question: "GoF 빌더에서 Director가 맡는 일은?",
    choices: [
      "결과물의 클래스를 고른다",
      "조립 단계를 어떤 순서로 부를지 정하고, 결과물의 모양은 모른다",
      "완성된 결과물을 캐시한다",
      "Builder 인스턴스를 하나만 유지한다",
    ],
    answer: 1,
    explanation:
      "Director는 제목, 줄, 합계 같은 조립 순서만 안다. 마크다운이 될지 CSV가 될지는 넘겨받은 Builder가 정하고, 결과물도 Builder의 result()로 꺼낸다.",
    anchor: "gof의-빌더에는-감독이-있다",
  },
  {
    id: "pattern-builder-4",
    post: "pattern-builder",
    question: "공통 헤더를 붙인 가변 빌더 base에서 관리자 요청을 만든 뒤 base.build()로 손님 요청을 만들었다. 무슨 일이 생기나?",
    choices: [
      "손님 요청은 accept 헤더만 가진다",
      "build()를 두 번 불러서 에러가 난다",
      "손님 요청에 관리자 토큰이 실린다",
      "관리자 요청의 헤더가 사라진다",
    ],
    answer: 2,
    explanation:
      "가변 빌더의 header()는 새 빌더를 만들지 않고 base 자신을 고친다. 그래서 관리자 토큰이 base에 남아 손님 요청에도 실린다. 메서드가 사본을 돌려주는 불변 빌더로 바꾸거나 clone()을 거쳐야 한다.",
    anchor: "빌더를-재사용했더니-헤더가-섞였다",
  },
  {
    id: "pattern-builder-5",
    post: "pattern-builder",
    question: "스텝 빌더로 필수 단계를 빠뜨린 코드가 컴파일되지 않는 이유는?",
    choices: [
      "build()가 런타임에 필드를 검사해서",
      "단계마다 다음에 부를 수 있는 메서드만 가진 인터페이스를 돌려줘서",
      "모든 필드를 readonly로 선언해서",
      "Object.freeze가 컴파일 시점에 동작해서",
    ],
    answer: 1,
    explanation:
      "to() 다음에는 subject()만 가진 타입이 나오니 바로 text()를 부르면 그 메서드가 타입에 없다는 에러가 난다. 대신 필수 단계 수만큼 인터페이스가 늘어나는 비용이 있다.",
    anchor: "빠뜨린-단계를-컴파일러가-잡게-하기",
  },
  {
    id: "pattern-builder-6",
    post: "pattern-builder",
    question: "테스트 데이터 빌더에 paid()처럼 status와 paidAt을 함께 바꾸는 메서드를 두는 이유는?",
    choices: [
      "테스트 실행 속도를 높이려고",
      "필드 이름을 숨기려고",
      "결제됐는데 결제 시각이 없는 것처럼 현실에 없는 데이터가 테스트에 섞이지 않게 하려고",
      "빌더를 불변으로 만들려고",
    ],
    answer: 2,
    explanation:
      "함께 바뀌어야 하는 필드를 한 메서드로 묶으면 반쯤 설정된 상태가 생기지 않는다. 테스트는 관심 있는 부분만 말하고 나머지는 정상 기본값에 맡긴다.",
    anchor: "테스트-데이터를-만드는-빌더",
  },
];
