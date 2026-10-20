import type { QuizQuestion } from "../types";

export const PATTERN_INTERPRETER: QuizQuestion[] = [
  {
    id: "pattern-interpreter-1",
    post: "pattern-interpreter",
    question:
      "마케팅 팀이 'country == \"KR\" and (age >= 19 or vip)' 같은 쿠폰 조건을 관리자 화면에 직접 쓰고 싶어 한다. 문법 규칙마다 클래스를 두고 그 객체 트리가 스스로 값을 계산하게 하는 패턴은?",
    choices: ["전략", "커맨드", "인터프리터", "책임 연쇄"],
    answer: 2,
    explanation:
      "인터프리터는 변수·값 같은 끝 기호와 And·Or 같은 비끝 기호를 클래스로 만들고, 트리의 루트에 interpret(ctx)를 부르면 답이 잎에서 위로 올라온다. 전략은 미리 만들어 둔 알고리즘을 갈아 끼울 뿐 사용자가 쓴 식을 해석하지 않는다.",
    anchor: "문법-한-줄이-클래스-하나가-된다",
  },
  {
    id: "pattern-interpreter-2",
    post: "pattern-interpreter",
    question: "GoF 인터프리터 패턴의 범위에 대한 설명으로 맞는 것은?",
    choices: [
      "문자열을 토큰으로 자르는 일까지 패턴이 정해 준다",
      "트리가 이미 있다고 보고 해석만 다루므로, 문자열을 트리로 만드는 파서는 따로 만들어야 한다",
      "파서 생성기를 반드시 함께 써야 한다",
      "트리 없이 문자열을 바로 해석하는 방법이다",
    ],
    answer: 1,
    explanation:
      "인터프리터 패턴은 AST가 주어졌을 때 노드마다 interpret로 계산하는 부분만 다룬다. 토큰화와 파싱은 재귀 하강 파서나 파서 생성기로 따로 만들고, 규칙을 JSON 트리로 받으면 이 단계를 건너뛸 수 있다.",
    anchor: "문자열에서-트리까지는-패턴-밖의-일",
  },
  {
    id: "pattern-interpreter-3",
    post: "pattern-interpreter",
    question: "관리자가 쓴 규칙을 new Function으로 실행하는 대신 직접 만든 파서로 해석해야 하는 가장 큰 이유는?",
    choices: [
      "new Function은 타입스크립트에서 쓸 수 없어서",
      "new Function이 항상 더 느려서",
      "식이 언어 전체에 접근해 process.env를 읽거나 전역 객체를 바꿀 수 있어서",
      "new Function은 and, or 키워드를 이해하지 못해서",
    ],
    answer: 2,
    explanation:
      "new Function에 넘긴 규칙은 자바스크립트 코드로 실행되니 환경 변수 읽기나 전역 변경도 그대로 된다. 직접 만든 문법은 정한 연산자와 허용 목록의 변수만 읽어서, 점이 들어간 process.env 같은 입력은 토큰화 단계에서 실패한다.",
    anchor: "eval로-끝내면-안-되는-이유",
  },
  {
    id: "pattern-interpreter-4",
    post: "pattern-interpreter",
    question: "같은 규칙을 요청 100만 건에 적용할 때 가장 먼저 해야 할 최적화는?",
    choices: [
      "파싱한 트리를 규칙 id로 캐시해 두고 해석만 반복한다",
      "모든 노드를 판별 유니온으로 바꾼다",
      "규칙을 new Function으로 바꿔 실행한다",
      "요청마다 규칙을 데이터베이스에서 새로 읽는다",
    ],
    answer: 0,
    explanation:
      "실험에서 요청마다 파싱하면 캐시한 트리를 해석할 때보다 100배 가까이 느렸다. 규칙 문자열은 거의 바뀌지 않으니 트리를 재사용하는 것이 첫 번째이고, 클로저로 컴파일하는 것은 그다음에 고려할 일이다.",
    anchor: "매번-파싱하면-백-배-느리다",
  },
  {
    id: "pattern-interpreter-5",
    post: "pattern-interpreter",
    question: "깊이 제한 없는 재귀 하강 파서에 괄호를 5000겹 넣은 규칙이 들어오면 어떻게 되나?",
    choices: [
      "괄호가 많아도 결과는 같아서 문제가 없다",
      "파서가 괄호를 무시하고 안쪽 식만 읽는다",
      "파싱은 되지만 해석할 때만 느려진다",
      "호출 스택이 넘쳐 RangeError가 나고, 잡지 못하면 프로세스가 죽을 수 있다",
    ],
    answer: 3,
    explanation:
      "괄호 한 겹마다 parseOr부터 다시 호출되니 호출 스택이 쌓인다. 실험에서 5000겹에 Maximum call stack size exceeded가 났다. 그래서 괄호 깊이, 원문 길이, 노드 수에 상한을 둔다.",
    anchor: "괄호-오천-개에-서버가-넘어진다",
  },
  {
    id: "pattern-interpreter-6",
    post: "pattern-interpreter",
    question:
      "노드 종류는 거의 그대로인데 '해석', '왜 탈락했는지 설명', '최적화' 같은 연산이 계속 늘어난다. 클래스형 인터프리터에서 어떤 방향이 맞나?",
    choices: [
      "노드 클래스마다 메서드를 계속 추가한다",
      "연산을 노드 밖으로 떼어 내는 비지터를 쓴다",
      "규칙을 문자열 그대로 두고 정규식으로 처리한다",
      "노드를 싱글턴으로 만든다",
    ],
    answer: 1,
    explanation:
      "클래스 버전은 새 노드를 더하기 쉽지만 새 연산을 더하려면 모든 노드 클래스를 고쳐야 한다. 노드가 안정적이고 연산이 늘어난다면 비지터로 연산을 따로 두는 편이 낫다. Babel과 ESLint가 노드 종류별 방문 함수를 등록하는 방식이 그 예다.",
    anchor: "노드를-더하기-쉬운-쪽-연산을-더하기-쉬운-쪽",
  },
];
