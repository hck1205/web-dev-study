import type { QuizQuestion } from "../types";

export const PATTERN_DECORATOR: QuizQuestion[] = [
  {
    id: "pattern-decorator-1",
    post: "pattern-decorator",
    question: "fetchJson에 retry, log, timeoutMs, cache 옵션이 계속 붙고 있다. 데코레이터로 바꿀 때 각 기능을 어떤 모양으로 만들까?",
    choices: [
      "FetchClient를 상속한 RetryFetchClient, LogRetryFetchClient 같은 하위 클래스로",
      "HttpClient를 구현하면서 HttpClient 하나를 품고, 호출을 넘기는 앞뒤에 자기 일을 하는 클래스로",
      "옵션 객체를 받아 내부에서 if로 분기하는 하나의 함수로",
      "모든 기능을 담은 HttpClient 싱글턴으로",
    ],
    answer: 1,
    explanation:
      "데코레이터는 감싼 객체와 같은 인터페이스를 구현하고 안쪽 객체에 호출을 넘기면서 앞뒤에 기능을 더한다. 같은 인터페이스라 겹쳐 쌓을 수 있고 조립하는 곳에서 필요한 것만 고른다. 상속으로 조합하면 기능 조합마다 하위 클래스가 생긴다.",
    anchor: "같은-모양으로-감싸고-앞뒤에-일을-더한다",
  },
  {
    id: "pattern-decorator-2",
    post: "pattern-decorator",
    question: "처음 두 번은 503, 세 번째에 성공하는 서버를 Logging(Retry(x))로 감쌌다. 로그는 몇 줄 남을까?",
    choices: ["0줄", "1줄", "2줄", "3줄"],
    answer: 1,
    explanation:
      "재시도는 Retry 겹 안에서 끝나고 바깥의 Logging은 성공한 결과 하나만 본다. 그래서 요청당 한 줄이다. Retry(Logging(x))로 순서를 바꾸면 시도마다 한 줄씩 3줄이 남는다.",
    anchor: "감싸는-순서가-결과를-바꾼다",
  },
  {
    id: "pattern-decorator-3",
    post: "pattern-decorator",
    question: "첫 시도에서 연결이 멈추는 서버에 Timeout(Retry(x, 3회), 300ms)를 썼더니 재시도가 전혀 도움이 안 됐다. 이유는?",
    choices: [
      "Retry가 타임아웃 에러는 잡지 않기 때문이다",
      "타임아웃이 바깥에 있어 전체 예산이 300ms가 되고, 첫 시도가 멈춘 사이에 끝나 버리기 때문이다",
      "Promise.race가 재시도를 취소하기 때문이다",
      "300ms가 시도마다 따로 적용되어 너무 짧기 때문이다",
    ],
    answer: 1,
    explanation:
      "바깥 겹은 안쪽 전체를 한 번의 호출로 본다. 타임아웃이 바깥에 있으면 재시도까지 합친 전체에 300ms를 주니 멈춘 첫 시도가 그 시간을 다 쓴다. 시도별 타임아웃은 Retry 안쪽에 두고, 필요하면 바깥에 전체 마감 시간을 따로 둔다.",
    anchor: "감싸는-순서가-결과를-바꾼다",
  },
  {
    id: "pattern-decorator-4",
    post: "pattern-decorator",
    question: "TypeScript 5의 @logged 같은 메서드 데코레이터 문법과 GoF 데코레이터 패턴의 차이로 맞는 것은?",
    choices: [
      "@ 문법은 클래스 정의 시점에 모든 인스턴스에 고정되고, GoF 데코레이터는 실행 중 객체마다 다른 조합을 고를 수 있다",
      "@ 문법은 감싸지 않고 메서드를 지운다",
      "GoF 데코레이터는 컴파일 시점에만 동작한다",
      "둘은 완전히 같은 것이라 차이가 없다",
    ],
    answer: 0,
    explanation:
      "@logged는 클래스를 정의할 때 메서드를 감싼 함수로 바꿔 끼우니 그 클래스의 모든 인스턴스가 같은 겹을 갖는다. GoF 데코레이터는 실행 중 객체 하나를 감싸서 결제용 인스턴스에는 재시도, 관리용에는 로그만 붙이는 식의 선택이 가능하다. @ 문법은 패턴을 구현하는 도구 중 하나다.",
    anchor: "메서드-위의-는-데코레이터-패턴인가",
  },
  {
    id: "pattern-decorator-5",
    post: "pattern-decorator",
    question: "LoggingClient로 감싼 뒤 기존 코드 일부가 조용히 다른 분기로 빠지기 시작했다. 가장 그럴듯한 원인은?",
    choices: [
      "LoggingClient가 응답 본문을 바꿔서",
      "감싼 객체는 원래 객체가 아니라서 instanceof FetchClient나 동등성 비교가 false가 되어서",
      "데코레이터가 비동기 함수를 동기로 바꿔서",
      "인터페이스가 너무 좁아서",
    ],
    answer: 1,
    explanation:
      "데코레이터는 새 객체라 api === base도, api instanceof FetchClient도 false다. 구체 클래스로 분기하거나 원래 객체를 키로 찾던 코드가 조용히 틀린다. 데코레이터를 쓰려면 인터페이스로만 다루는 습관이 필요하다.",
    anchor: "감쌌더니-달라진-것들",
  },
  {
    id: "pattern-decorator-6",
    post: "pattern-decorator",
    question: "데코레이터와 책임 연쇄를 가르는 기준으로 가장 알맞은 것은?",
    choices: [
      "데코레이터는 원칙적으로 항상 안쪽을 부르고 결과에 무언가를 더하지만, 책임 연쇄의 처리기는 요청을 처리하고 사슬을 끝낼 수 있다",
      "책임 연쇄는 인터페이스를 바꾸고 데코레이터는 그대로 둔다",
      "데코레이터는 여러 자식의 결과를 모은다",
      "책임 연쇄는 상속으로만 구현할 수 있다",
    ],
    answer: 0,
    explanation:
      "둘 다 다음 객체를 부르지만 책임 연쇄는 처리할 곳을 찾으면 넘기기를 멈출 수 있다는 점이 다르다. 데코레이터는 안쪽을 부르는 것이 전제이고 앞뒤에 기능을 더한다. 인터페이스를 바꾸는 건 어댑터, 여러 자식을 모으는 건 컴포지트다.",
    anchor: "프록시-어댑터와-갈리는-지점",
  },
];
