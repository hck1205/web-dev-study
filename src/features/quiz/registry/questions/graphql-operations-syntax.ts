import type { QuizQuestion } from "../types";

export const GRAPHQL_OPERATIONS_SYNTAX: QuizQuestion[] = [
  {
    id: "graphql-operations-syntax-1",
    post: "graphql-operations-syntax",
    question: "검색어를 쿼리 문자열에 `search(text: \"${input}\")`처럼 이어 붙이면 생기는 문제로 가장 알맞은 것은?",
    choices: [
      "GraphQL은 문자열 인자를 지원하지 않아서 항상 실패한다",
      "입력에 따옴표가 섞이면 문법이 깨지고, 악의적인 입력이 다른 필드를 끼워 넣어 쿼리 구조를 바꿀 수 있다",
      "서버가 자동으로 이스케이프하지만 응답이 느려진다",
      "문자열 인자는 캐시되지 않아서 같은 결과를 매번 다시 계산한다",
    ],
    answer: 1,
    explanation:
      "입력의 큰따옴표가 GraphQL 문자열을 닫아 버리면 문법 에러가 나고, `a\") { name } users { email } ...` 같은 입력은 쿼리에 새 필드를 끼워 넣는다. SQL 인젝션과 같은 모양이다. 값은 변수로 떼어 JSON으로 보내면 구조와 섞이지 않는다.",
    anchor: "값은-변수로-떼어-보낸다",
  },
  {
    id: "graphql-operations-syntax-2",
    post: "graphql-operations-syntax",
    question: "`query($first: Int = 1)`로 선언하고 variables에 `{\"first\": null}`을 보내면 리졸버의 `first`는?",
    choices: [
      "기본값 1",
      "검증 에러로 실행되지 않는다",
      "0",
      "null",
    ],
    answer: 3,
    explanation:
      "변수 기본값은 변수를 아예 보내지 않았을 때만 쓰인다. null을 명시적으로 보내면 null이 들어간다. 이 구분 덕분에 수정 뮤테이션에서 '건드리지 않음'과 'null로 지우기'를 나눌 수 있다.",
    anchor: "값은-변수로-떼어-보낸다",
  },
  {
    id: "graphql-operations-syntax-3",
    post: "graphql-operations-syntax",
    question: "`{ product(id: 1) { name } product(id: 2) { name } }`가 검증에서 거절되는 이유는?",
    choices: [
      "응답 키가 필드 이름이라 같은 키에 인자가 다른 두 결과를 담을 수 없어서",
      "같은 필드를 한 쿼리에서 두 번 부를 수 없다는 규칙이 있어서",
      "최상위 필드는 하나만 쓸 수 있어서",
      "id 인자는 변수로만 넘길 수 있어서",
    ],
    answer: 0,
    explanation:
      "같은 응답 키로 합쳐질 필드들은 인자가 같아야 한다. 인자가 같으면 `product(id: 1)`을 두 번 써도 하나로 합쳐져 정상 실행된다. 인자가 다르면 별칭을 붙여 응답 키를 나눈다.",
    anchor: "같은-필드를-두-번-받을-때는-별칭을-붙인다",
  },
  {
    id: "graphql-operations-syntax-4",
    post: "graphql-operations-syntax",
    question: "문서 끝에 `fragment Card on Product { id }`를 정의만 하고 어디서도 펼치지 않았다. 어떻게 되나?",
    choices: [
      "프래그먼트는 무시되고 쿼리가 정상 실행된다",
      "Card의 필드가 최상위에 자동으로 추가된다",
      "'Fragment \"Card\" is never used' 검증 에러로 거절된다",
      "실행은 되지만 경고가 extensions에 담긴다",
    ],
    answer: 2,
    explanation:
      "쓰지 않는 프래그먼트가 문서에 있으면 검증 규칙이 거절한다. 그래서 공용 프래그먼트를 모든 쿼리에 일괄로 붙이는 방식은 통하지 않고, 실제로 쓰는 쿼리에만 붙여야 한다. 자기 자신을 펼치는 고리도 같은 단계에서 막힌다.",
    anchor: "프래그먼트로-선택을-나눠-갖는다",
  },
  {
    id: "graphql-operations-syntax-5",
    post: "graphql-operations-syntax",
    question: "`seller @include(if: $withSeller) { name }`에서 `withSeller`가 false면 응답의 `seller`는?",
    choices: [
      "`\"seller\": null`로 온다",
      "`\"seller\": {}` 빈 객체로 온다",
      "errors에 skipped 메시지가 담긴다",
      "키 자체가 응답에 없고 리졸버도 실행되지 않는다",
    ],
    answer: 3,
    explanation:
      "@include 조건이 거짓이면 그 필드는 실행되지 않고 응답에 키도 생기지 않는다. null과는 다르므로 화면 코드는 키가 없을 수 있다고 가정해야 하고, 코드 생성기는 이 필드를 선택적 속성으로 만든다.",
    anchor: "디렉티브로-실행을-바꾼다",
  },
  {
    id: "graphql-operations-syntax-6",
    post: "graphql-operations-syntax",
    question:
      "`mutation { a: add(n: 1) b: add(n: -1) c: add(n: 2) }`에서 b가 에러를 던졌고 `add`의 반환 타입은 `Int!`다. 결과는?",
    choices: [
      "세 필드가 한 트랜잭션이라 a도 되돌려진다",
      "a는 이미 반영됐고, data가 null이 되어 c는 실행되지 않는다",
      "a와 c가 실행되고 b만 null로 온다",
      "뮤테이션 필드는 병렬이라 a, b, c가 동시에 실행된다",
    ],
    answer: 1,
    explanation:
      "최상위 뮤테이션 필드는 순서대로 하나씩 실행되지만 트랜잭션은 아니라 a의 쓰기는 남는다. b의 반환 타입이 non-null이라 null이 data까지 올라가고, 그 뒤의 c는 실행되지 않는다. 반환 타입이 nullable이었다면 c까지 실행되고 b만 null로 왔다.",
    anchor: "뮤테이션의-필드는-적힌-순서대로-하나씩-돈다",
  },
  {
    id: "graphql-operations-syntax-7",
    post: "graphql-operations-syntax",
    question: "작업이 하나뿐인 문서에도 `query ProductPage`처럼 operationName을 붙이는 이유로 가장 알맞은 것은?",
    choices: [
      "이름이 있어야 서버가 쿼리를 병렬로 실행해서",
      "이름 없는 쿼리는 변수를 쓸 수 없어서",
      "URL이 모두 /graphql이라 로그와 지표에서 요청을 나눌 기준이 작업 이름이라서",
      "이름이 없으면 introspection이 꺼져서",
    ],
    answer: 2,
    explanation:
      "GraphQL은 엔드포인트가 하나라 접근 로그나 APM에서 어떤 화면의 요청인지 구분할 기준이 작업 이름밖에 없다. 문법상 작업이 하나면 이름 없이도 실행되고, 여럿일 때만 operationName이 필수다. 린트로 이름 없는 작업을 막아 두면 운영에서 편하다.",
    anchor: "문서에-작업이-여럿일-때",
  },
];
