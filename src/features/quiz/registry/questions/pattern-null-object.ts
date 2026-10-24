import type { QuizQuestion } from "../types";

export const PATTERN_NULL_OBJECT: QuizQuestion[] = [
  {
    id: "pattern-null-object-1",
    post: "pattern-null-object",
    question: "결제, 헤더, 메일 세 곳이 각자 `user?.plan?.discountRate ?? 0` 같은 검사를 하고 기본값도 조금씩 다르다. 널 객체 패턴이 바꾸는 것은?",
    choices: [
      "null 검사를 더 짧은 문법으로 바꾼다",
      "없을 때의 동작을 부르는 쪽에서 없음을 표현하는 객체 안으로 옮겨 한 곳에 모은다",
      "없는 사용자를 조회하면 예외를 던지게 한다",
      "모든 필드를 필수로 만들어 null이 생기지 않게 한다",
    ],
    answer: 1,
    explanation:
      "널 객체는 같은 인터페이스를 구현한 손님 객체가 할인율 0, 이름 \"손님\" 같은 기본 동작을 스스로 안다. 그래서 기본값이 한 곳에 모이고 호출부의 검사가 사라진다. 짧은 문법은 옵셔널 체이닝이 하는 일이고, 기본값을 정하는 일은 여전히 호출부에 남는다.",
    anchor: "아무-일도-하지-않는-손님-만들기",
  },
  {
    id: "pattern-null-object-2",
    post: "pattern-null-object",
    question: "고객 조회 함수가 `catch`에서 DB 오류를 잡아 손님 객체를 돌려준다. 무엇이 문제인가?",
    choices: [
      "손님 객체를 매번 새로 만들어 메모리를 낭비한다",
      "TypeScript가 반환 타입을 추론하지 못한다",
      "DB가 죽으면 모든 회원이 할인 없이 결제되는데 에러가 어디에도 남지 않는다",
      "손님 객체는 비동기 함수에서 돌려줄 수 없다",
    ],
    answer: 2,
    explanation:
      "비로그인 같은 설계상의 없음과 DB 오류 같은 실패를 섞었다. 실패를 손님으로 덮으면 장애가 조용히 지나가고 고객 문의가 쌓인 뒤에야 알게 된다. 실패는 예외나 Result로 위로 올려야 한다.",
    anchor: "손님이-사고를-숨기는-경우",
  },
  {
    id: "pattern-null-object-3",
    post: "pattern-null-object",
    question: "\"고객을 찾지 못했을 때\" 관리자 화면은 에러를 보여 주고, 결제는 손님으로 진행하고, 배치는 건너뛰어야 한다. 조회 함수는 무엇을 돌려주는 게 알맞나?",
    choices: [
      "어느 화면에서든 같은 손님 객체",
      "빈 문자열 이름을 가진 고객 객체",
      "항상 예외를 던지고 각자 catch에서 손님을 만든다",
      "없음을 드러내는 nullable 값이나 Option. 부르는 쪽이 각자 처리를 고른다",
    ],
    answer: 3,
    explanation:
      "널 객체는 없을 때 할 일이 하나로 정해져 있을 때 맞다. 처리가 호출부마다 다르면 없음을 숨기지 말고 타입에 드러내서 부르는 쪽이 고르게 한다. 없음은 정상 상태라 예외로 다루는 것도 어색하다.",
    anchor: "옵셔널-체이닝과-optional은-무엇이-다른가",
  },
  {
    id: "pattern-null-object-4",
    post: "pattern-null-object",
    question: "손님 객체를 `Object.freeze`로 얼린 객체 하나로 두는 이유로 가장 알맞은 것은?",
    choices: [
      "상태가 없으니 하나를 같이 쓰면 되고, 얼리지 않으면 누군가 고쳤을 때 모든 비로그인 사용자에게 번진다",
      "얼린 객체가 일반 객체보다 메서드 호출이 빠르다",
      "얼리지 않으면 인터페이스를 구현한 것으로 인정되지 않는다",
      "JSON으로 직렬화하려면 얼려야 한다",
    ],
    answer: 0,
    explanation:
      "널 객체에는 상태가 없어서 매번 만들 필요가 없고 모두가 같은 인스턴스를 쓴다. 그 대신 공유되므로 `GUEST.displayName`을 누가 바꾸면 모든 손님에게 영향을 준다. 그래서 얼려 두며, 상태가 없으니 싱글턴으로 둬도 전역 상태 문제가 생기지 않는다.",
    anchor: "널-객체는-하나만-만든다",
  },
  {
    id: "pattern-null-object-5",
    post: "pattern-null-object",
    question: "`renderPrice(item, isCompact)`에 영수증용 형식이 추가될 예정이다. 가장 알맞은 시그니처는?",
    choices: [
      "`renderPrice(item, isCompact, isReceipt)`처럼 불리언을 하나 더 둔다",
      "`renderPrice(item, variant: \"compact\" | \"full\" | \"receipt\")`처럼 문자열 유니언으로 받는다",
      "`renderPrice(item, isCompact: boolean | null)`로 null을 세 번째 상태로 쓴다",
      "전역 변수로 형식을 정해 두고 인자를 없앤다",
    ],
    answer: 1,
    explanation:
      "불리언 두 개는 둘 다 true인 말이 안 되는 조합을 만들고 호출부에서 뜻도 보이지 않는다. 유니언은 가능한 상태만 타입에 남기고 이름이 호출부에 그대로 보인다. null을 세 번째 상태로 쓰면 뜻이 더 흐려진다.",
    anchor: "불리언-인자가-함수-하나를-둘로-만든다",
  },
  {
    id: "pattern-null-object-6",
    post: "pattern-null-object",
    question: "`sendNotice(user, null, null, true)`를 고치는 방향으로 가장 알맞은 것은?",
    choices: [
      "null 대신 빈 문자열을 넘긴다",
      "인자 순서를 바꿔 자주 쓰는 것을 앞에 둔다",
      "필수 인자만 위치로 받고 나머지는 이름 있는 옵션 객체와 기본값으로 받는다",
      "Java처럼 모든 선택 인자를 Optional로 감싸 넘긴다",
    ],
    answer: 2,
    explanation:
      "옵션 객체로 받으면 기본값이 선언 한 곳에 모이고 호출부에서 무엇을 정했는지 이름으로 보인다. 빈 문자열은 null을 다른 가짜 값으로 바꿨을 뿐이다. Optional을 인자로 받는 것도 부르는 쪽이 empty를 만들어 넘겨야 해서 null을 넘기는 것과 크게 다르지 않다.",
    anchor: "null을-넘기지-않는-api",
  },
];
