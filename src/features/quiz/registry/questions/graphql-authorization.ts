import type { QuizQuestion } from "../types";

export const GRAPHQL_AUTHORIZATION: QuizQuestion[] = [
  {
    id: "graphql-authorization-1",
    post: "graphql-authorization",
    question: "order(id) 리졸버에 주인 검사를 넣었는데, 같은 주문을 node(id)로 물으니 남의 주문이 그대로 나왔다. 가장 근본적인 해결책은?",
    choices: [
      "node 리졸버에도 같은 if 문을 복사해 넣는다",
      "Global ID를 Base64 대신 암호화한 값으로 바꾼다",
      "주문을 꺼내는 업무 계층 함수 하나가 viewer를 받아 판정하게 하고, 모든 리졸버가 그 함수만 부르게 한다",
      "게이트웨이에서 node 쿼리가 들어오면 거절한다",
    ],
    answer: 2,
    explanation:
      "GraphQL은 같은 타입에 닿는 길이 여러 개라서 리졸버마다 검사를 복사하면 새 길이 생길 때 또 샌다. 객체를 꺼내는 함수 한곳에서 판정하면 어느 길로 오든 같은 검사를 지난다. ID를 숨기는 건 목록이나 링크로 ID가 한 번 새면 소용없다.",
    anchor: "검사를-업무-계층으로-내린다",
  },
  {
    id: "graphql-authorization-2",
    post: "graphql-authorization",
    question: "@auth 디렉티브를 붙인 order 필드로 일반 사용자가 남의 주문을 꺼낼 수 있었다. 디렉티브가 이걸 막지 못한 이유는?",
    choices: [
      "디렉티브는 뮤테이션에만 적용되기 때문에",
      "디렉티브는 요청한 사람의 역할은 보지만, 객체가 그 사람 것인지는 DB에서 꺼내 봐야 알 수 있기 때문에",
      "디렉티브는 introspection이 켜져 있으면 무시되기 때문에",
      "디렉티브가 타입이 아니라 필드에 붙어 있었기 때문에",
    ],
    answer: 1,
    explanation:
      "디렉티브는 로그인 여부나 역할 같은 요청자 정보로 판정하는 거친 그물이다. 소유 여부는 대상 객체의 데이터가 있어야 판정할 수 있어서 업무 계층에서 한다. 타입에 붙여도 USER 역할인 사람은 통과하므로 결과는 같다.",
    anchor: "디렉티브로-스키마에-적으면",
  },
  {
    id: "graphql-authorization-3",
    post: "graphql-authorization",
    question: "users: [User!]! 목록에서 email을 String!로 선언했고, 한 사용자의 email이 권한 때문에 막혔다. 응답은 어떻게 되나?",
    choices: [
      "그 사용자의 email만 null이 된다",
      "그 사용자 객체만 목록에서 빠진다",
      "null이 null 가능한 부모를 찾아 루트까지 올라가 data 전체가 null이 된다",
      "HTTP 403이 오고 errors는 비어 있다",
    ],
    answer: 2,
    explanation:
      "null 불가 필드에서 에러가 나면 null이 허용되는 가장 가까운 부모까지 번진다. User!와 [User!]!가 모두 null 불가라 data 전체가 null이 됐다. 권한에 따라 비어 있을 수 있는 필드는 null 가능으로 선언해야 한다.",
    anchor: "필드-하나만-가려야-할-때",
  },
  {
    id: "graphql-authorization-4",
    post: "graphql-authorization",
    question: "남의 주문을 조회했을 때 FORBIDDEN 에러 대신 null을 돌려주는 편이 안전한 이유는?",
    choices: [
      "null이 FORBIDDEN보다 응답 크기가 작아서",
      "없는 ID와 남의 ID에 다른 응답을 주면 ID를 바꿔 가며 존재하는 객체를 골라낼 수 있어서",
      "GraphQL 명세가 읽기에서 에러를 금지해서",
      "null을 주면 클라이언트 캐시가 그 객체를 지우기 때문에",
    ],
    answer: 1,
    explanation:
      "FORBIDDEN은 그 ID의 객체가 존재한다는 사실을 알려 준다. 못 보는 것을 없는 것과 같은 모양으로 주면 이 정보가 새지 않는다. 다만 뮤테이션은 성공 여부를 알려야 하니 NOT_FOUND 같은 에러를 분명히 준다.",
    anchor: "없는-것과-못-보는-것을-같은-모양으로",
  },
  {
    id: "graphql-authorization-5",
    post: "graphql-authorization",
    question: "서버 시작 때 만든 DataLoader 하나를 모든 요청이 쓰고, 배치 함수 안에서 현재 viewer로 판정했다. 운영자가 먼저 o2를 읽은 뒤 일반 사용자가 o2를 물으면?",
    choices: [
      "배치 함수가 다시 불려 일반 사용자 기준으로 null이 나온다",
      "로더 캐시에 남은 운영자용 결과가 판정 없이 그대로 나간다",
      "로더가 요청이 다르다는 걸 알아채고 에러를 낸다",
      "캐시는 같은 틱 안에서만 유지되므로 문제가 없다",
    ],
    answer: 1,
    explanation:
      "DataLoader는 키별로 결과를 캐시하므로 같은 키는 배치 함수를 다시 부르지 않는다. 판정이 캐시 안쪽에 있으면 먼저 읽은 사람의 결과가 다음 사람에게 나간다. 로더는 요청마다 만들고 viewer에 묶어 둔다.",
    anchor: "dataloader-캐시가-권한을-넘는다",
  },
  {
    id: "graphql-authorization-6",
    post: "graphql-authorization",
    question: "직원이 주문 50건을 볼 때 주문마다 가게 소속을 DB에 물어 조회가 50번 나갔다. 결과를 유지하면서 조회를 줄이는 방법으로 맞지 않는 것은?",
    choices: [
      "viewer에 묶인 요청별 로더로 가게 ID를 모아 한 번에 묻는다",
      "소속 조건을 SQL JOIN으로 넣어 볼 수 있는 주문만 가져온다",
      "판정 결과를 사용자 구분 없이 가게 ID만 키로 해서 Redis에 캐시한다",
      "관계 기반 인가 서버에서 볼 수 있는 객체 ID 목록을 받아 조건으로 쓴다",
    ],
    answer: 2,
    explanation:
      "판정 결과는 사람마다 다르니 캐시 키에 viewer나 권한 범위가 빠지면 다른 사람의 결과가 섞인다. 나머지는 권한 판정 데이터를 배치로 가져오거나 판정을 쿼리 조건으로 바꾸는 방법이다.",
    anchor: "권한-확인도-n1이-된다",
  },
  {
    id: "graphql-authorization-7",
    post: "graphql-authorization",
    question: "자사 앱 쿼리만 받는 trusted documents와 introspection 끄기를 적용했다. 그래도 남는 위험은?",
    choices: [
      "허용된 쿼리에 남의 객체 ID를 변수로 넣어 보내는 요청",
      "스키마에 없는 필드를 묻는 요청",
      "처음 보는 깊은 쿼리로 서버를 멈추게 하는 요청",
      "필드 이름을 추측하는 요청",
    ],
    answer: 0,
    explanation:
      "허용 목록은 쿼리 모양을 막을 뿐 변수 값은 막지 않는다. 원래 앱이 쓰던 쿼리에 다른 사람의 ID를 넣으면 통과하므로 객체 단위 인가가 여전히 필요하다. 나머지는 허용 목록이나 검증 단계가 막는 요청이다.",
    anchor: "허용-목록과-introspection-끄기는-인가가-아니다",
  },
];
