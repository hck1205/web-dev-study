import type { QuizQuestion } from "../types";

export const PATTERN_STRATEGY: QuizQuestion[] = [
  {
    id: "pattern-strategy-1",
    post: "pattern-strategy",
    question: "정률, 정액, 구간 할인이 if 사다리로 늘어나고, 마케팅팀은 새 할인 방식을 사용자 절반에게만 실험하고 싶어 한다. 가장 알맞은 패턴은?",
    choices: ["템플릿 메서드", "전략", "상태", "싱글턴"],
    answer: 1,
    explanation:
      "같은 일(할인 계산)을 하는 방법이 여럿이고, 실행 중에 사용자마다 다른 방법을 골라 넣어야 하니 전략이다. 결제(Context)는 할인 인터페이스만 알고, 새 방식은 구현체 하나로 더한다. 상태는 객체가 스스로 단계를 바꿀 때 쓴다.",
    anchor: "할인-계산을-갈아-끼울-수-있게",
  },
  {
    id: "pattern-strategy-2",
    post: "pattern-strategy",
    question: "전략 패턴을 적용하면 쿠폰 종류를 고르는 if는 어떻게 되나?",
    choices: [
      "완전히 사라진다",
      "시스템 가장자리(핸들러, 설정을 읽는 곳)의 한 곳으로 모인다",
      "전략 객체마다 하나씩 복사된다",
      "Context의 모든 메서드로 퍼진다",
    ],
    answer: 1,
    explanation:
      "고르는 일은 없어지지 않고 요청을 받는 가장자리에서 이름으로 한 번 찾는 일로 바뀐다. 안쪽의 Checkout은 고른 결과만 받아 인터페이스대로 부른다. 여러 메서드에 흩어져 있던 분기가 한 곳으로 줄어드는 것이 이득이다.",
    anchor: "누가-전략을-고르나",
  },
  {
    id: "pattern-strategy-3",
    post: "pattern-strategy",
    question: "요청 바디의 coupon.type으로 평범한 객체 표 strategies[type]에서 전략을 찾았다. type이 \"toString\"이면 어떻게 되나?",
    choices: [
      "undefined가 나와 기본 전략이 쓰인다",
      "TypeError가 나서 요청이 실패한다",
      "Object.prototype의 toString이 찾아져 가격 자리에 문자열이 들어간다",
      "타입스크립트가 런타임에도 막아 준다",
    ],
    answer: 2,
    explanation:
      "평범한 객체는 프로토타입의 이름까지 찾기 때문에 toString, constructor가 표에 있는 것처럼 동작한다. 실제로 [object Undefined] 같은 문자열이 가격 자리에 들어갔다. 사용자 입력이 키라면 Map이나 Object.create(null)을 쓰거나 Object.hasOwn으로 확인한다.",
    anchor: "누가-전략을-고르나",
  },
  {
    id: "pattern-strategy-4",
    post: "pattern-strategy",
    question: "한글 이름 10만 개를 정렬할 때 a.localeCompare(b, \"ko\") 대신 new Intl.Collator(\"ko\").compare를 비교 전략으로 넣으면?",
    choices: [
      "결과 순서가 달라진다",
      "숫자를 수로 읽게 된다",
      "대소문자를 구분하지 않게 된다",
      "같은 규칙으로 정렬하면서 훨씬 빨라진다",
    ],
    answer: 3,
    explanation:
      "두 비교 함수는 같은 로케일 규칙을 쓰지만, 비교기를 한 번 만들어 재사용하는 Collator 쪽이 측정에서 두 배 넘게 빨랐다. 비교 함수는 정렬 한 번에 아주 많이 불리기 때문이다. 숫자를 수로 읽으려면 numeric: true 옵션을 따로 준다.",
    anchor: "비교-함수-하나로-정렬이-몇-배-느려진다",
  },
  {
    id: "pattern-strategy-5",
    post: "pattern-strategy",
    question: "passport.authenticate([\"apikey\", \"local\"])에서 요청에 API 키가 없을 때 일어나는 일은?",
    choices: [
      "바로 401로 응답한다",
      "apikey 전략이 fail을 부르고 Passport가 local 전략을 시도한다",
      "두 전략을 동시에 실행해 먼저 끝난 쪽을 쓴다",
      "local 전략이 apikey 전략을 직접 호출한다",
    ],
    answer: 1,
    explanation:
      "배열로 준 전략은 앞에서부터 차례로 시도하고, 앞 전략이 fail을 부르면 다음 전략으로 넘어간다. 모두 실패해야 401이다. 전략 하나일 때는 순수한 전략 패턴이고, 여러 개면 책임 연쇄와 섞인 모양이 된다.",
    anchor: "passport는-로그인-방법을-이름으로-등록한다",
  },
  {
    id: "pattern-strategy-6",
    post: "pattern-strategy",
    question: "정률 할인은 소계만, 새 할인은 추천 서버 클라이언트까지 필요하다. 전략 인터페이스를 정하는 깔끔한 방법은?",
    choices: [
      "공통 재료만 메서드 인자로 두고, 전략마다 다른 재료는 생성자로 받는다",
      "모든 전략이 추천 서버 클라이언트를 메서드 인자로 받게 한다",
      "전략마다 인터페이스를 따로 만든다",
      "추천 서버 클라이언트를 전역 변수로 둔다",
    ],
    answer: 0,
    explanation:
      "메서드 인자에는 모두에게 공통인 것만 남기고, 특정 전략만 필요한 의존성은 만들 때 넣으면 다른 전략과 테스트가 그 짐을 지지 않는다. 모든 재료를 인자로 넘기면 정률 할인 테스트까지 쓰지도 않는 클라이언트를 준비해야 한다. 전략마다 인터페이스가 다르면 갈아 끼울 수 없다.",
    anchor: "전략마다-필요한-재료가-다를-때",
  },
];
