import type { QuizQuestion } from "../types";

export const PATTERN_VISITOR: QuizQuestion[] = [
  {
    id: "pattern-visitor-1",
    post: "pattern-visitor",
    question: "문서 트리의 노드 종류(제목, 문단, 텍스트, 링크)는 거의 그대로인데 글자 세기, 링크 검사, 목차 뽑기 같은 연산이 계속 늘어 노드 클래스마다 메서드가 쌓인다. 알맞은 패턴은?",
    choices: ["컴포지트", "데코레이터", "비지터", "템플릿 메서드"],
    answer: 2,
    explanation:
      "비지터는 연산을 노드 종류별 메서드를 가진 방문자 객체 하나로 꺼내, 새 연산을 더할 때 노드 클래스를 고치지 않게 한다. 컴포지트는 트리 구조 자체를 만드는 패턴이라 연산이 쌓이는 문제를 풀지 않는다. 노드 클래스가 라이브러리 안에 있어 고칠 수 없을 때도 비지터가 쓰인다.",
    anchor: "연산을-노드-밖으로-꺼낸다",
  },
  {
    id: "pattern-visitor-2",
    post: "pattern-visitor",
    question: "자바에서 visitor.visit(node)라고 바로 부르지 않고 node.accept(visitor)를 거쳐 visitor.visitLink(this)를 부르는 이유는?",
    choices: [
      "오버로딩은 컴파일 시점의 선언 타입으로 메서드를 고르므로, 노드의 실제 타입으로 고르려면 가상 메서드 호출을 한 번 더 거쳐야 해서",
      "accept가 있어야 트리를 깊이 우선으로 걸을 수 있어서",
      "방문자가 노드의 private 필드에 접근하기 위해서",
      "노드를 직렬화하기 위해서",
    ],
    answer: 0,
    explanation:
      "DocNode로 선언된 변수를 넘기면 오버로딩은 visit(DocNode)를 고른다. accept는 가상 메서드라 실제 타입의 것이 불리고, 그 안에서 this가 정확한 타입이 되어 방문자의 맞는 메서드를 고른다. 이렇게 두 번 고르는 것이 더블 디스패치다.",
    anchor: "accept가-한-번-더-부르는-이유",
  },
  {
    id: "pattern-visitor-3",
    post: "pattern-visitor",
    question: "ESLint 규칙에서 \"CallExpression[callee.name='fetch']\" 셀렉터로 fetch 호출을 막았다. window.fetch(url)는 어떻게 되나?",
    choices: [
      "잡힌다. 이름이 fetch이기 때문이다",
      "잡히지 않는다. callee가 MemberExpression이라 셀렉터에 맞지 않는다",
      "ESLint가 파싱 에러를 낸다",
      "Program:exit에서 한꺼번에 잡힌다",
    ],
    answer: 1,
    explanation:
      "셀렉터는 AST 모양에 정확히 맞아야 한다. fetch(url)의 callee는 Identifier지만 window.fetch(url)의 callee는 MemberExpression이라 name 속성이 없다. 그래서 규칙을 짤 때는 실제 노드 모양을 먼저 확인한다.",
    anchor: "eslint-규칙-하나가-방문자-하나다",
  },
  {
    id: "pattern-visitor-4",
    post: "pattern-visitor",
    question: "ESLint와 Babel이 규칙이나 플러그인마다 트리를 따로 걷지 않고 방문자를 합쳐 한 번만 걷는 이유와 그 전제는?",
    choices: [
      "메모리를 아끼려고. 방문자가 모두 같은 상태를 공유해야 한다",
      "순서를 보장하려고. 방문자끼리 서로 호출해야 한다",
      "트리를 걷는 비용을 한 번만 내려고. 방문자가 서로의 상태와 호출 순서에 기대지 않아야 한다",
      "병렬로 실행하려고. 방문자가 각자 다른 스레드에서 돌아야 한다",
    ],
    answer: 2,
    explanation:
      "노드 120만 개 문서에서 방문자 셋을 따로 걸으면 169ms, 합쳐 한 번 걸으면 86ms였다. 방문자가 각자 상태를 들고 서로를 모르기 때문에 합칠 수 있다. 같은 노드에서 누가 먼저 불리는지에 기대면 설정 순서가 바뀔 때 깨진다.",
    anchor: "한-번-걸으며-여럿이-본다",
  },
  {
    id: "pattern-visitor-5",
    post: "pattern-visitor",
    question: "모든 방문 메서드를 빈 함수로 구현한 기본 방문자 클래스를 두고 필요한 것만 재정의하게 했다. 문서에 callout 노드 종류를 새로 넣으면 생기는 위험은?",
    choices: [
      "컴파일 에러가 너무 많이 난다",
      "callout이 두 번 방문된다",
      "트리를 걷는 속도가 느려진다",
      "에러 없이 방문자들이 callout을 조용히 빼먹는다",
    ],
    answer: 3,
    explanation:
      "빈 기본 구현이 있으면 새 노드 종류가 생겨도 아무 방문자도 컴파일 에러를 내지 않는다. 글자 세기 방문자가 경고 상자 안 글자를 빼먹는 식의 버그가 숨어 버린다. 매핑 타입으로 노드 종류마다 함수를 강제하면 빠뜨린 방문자가 모두 에러로 드러난다.",
    anchor: "노드-종류가-늘면-모든-방문자가-아프다",
  },
  {
    id: "pattern-visitor-6",
    post: "pattern-visitor",
    question: "비지터를 쓰기 좋은 곳과 피하는 게 나은 곳을 바르게 짝지은 것은?",
    choices: [
      "좋음: 노드 종류가 고정이고 검사·변환이 계속 느는 AST / 피함: 종류가 자주 늘어나는 상품, 결제 수단 모델",
      "좋음: 상품 종류가 자주 늘어나는 도메인 모델 / 피함: 프로그래밍 언어 AST",
      "좋음: 원소를 하나씩 꺼내기만 하면 되는 배열 / 피함: 트리",
      "어디서나 비슷하다. 연산과 종류 모두 쉽게 늘어난다",
    ],
    answer: 0,
    explanation:
      "비지터는 연산을 더하기 쉬운 대신 노드 종류를 더하기 어렵다. 표현 문제의 한쪽을 고른 것이라 무엇이 더 자주 늘어나는지가 기준이다. 종류가 자주 늘어나는 도메인 모델에서는 노드에 메서드를 두는 객체지향 방식이 낫다.",
    anchor: "노드-종류가-늘면-모든-방문자가-아프다",
  },
];
