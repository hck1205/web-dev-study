import type { QuizQuestion } from "../types";

export const GRAPHQL_BASICS: QuizQuestion[] = [
  {
    id: "graphql-basics-1",
    post: "graphql-basics",
    question: "글 목록 화면을 그리려고 GET /posts를 받은 뒤 글마다 GET /users/{id}를 또 부른다. 이 상황을 가리키는 말은?",
    choices: [
      "오버페칭: 필요 없는 필드까지 받는다",
      "언더페칭: 한 번에 다 못 받아 여러 번 요청한다",
      "N+1 쿼리: 서버가 DB를 여러 번 부른다",
      "캐시 스탬피드: 같은 요청이 한꺼번에 몰린다",
    ],
    answer: 1,
    explanation:
      "필요한 데이터를 한 응답에 못 받아 요청을 계단처럼 여러 번 보내는 것이 언더페칭이다. 본문까지 통째로 받는 GET /posts 쪽은 오버페칭이고, N+1은 같은 모양이 서버와 DB 사이에서 생기는 문제다.",
    anchor: "화면-하나에-요청-다섯-번-20kb",
  },
  {
    id: "graphql-basics-2",
    post: "graphql-basics",
    question: "글 10개와 댓글 30개를 받는 쿼리가 로더 없이 DB를 51번 불렀는데 응답은 17ms로 빨랐다. 그래도 문제가 되는 이유는?",
    choices: [
      "응답 바이트가 51배로 커지기 때문에",
      "graphql-js가 리졸버를 하나씩 순서대로 실행하기 때문에",
      "형제 리졸버가 병렬로 나가서 지연은 작아도 DB와 커넥션 풀이 51번을 다 받기 때문에",
      "51번 중 일부가 캐시되어 데이터가 어긋나기 때문에",
    ],
    answer: 2,
    explanation:
      "graphql-js는 형제 필드의 Promise를 동시에 기다리므로 호출이 단계마다 병렬로 나가 로컬에서는 느린 줄 모른다. 하지만 DB 부하와 커넥션 수는 그대로 51배라서 동시 사용자가 늘면 풀이 먼저 바닥난다.",
    anchor: "필드마다-함수가-하나씩",
  },
  {
    id: "graphql-basics-3",
    post: "graphql-basics",
    question: "DataLoader 인스턴스를 서버 전역에 하나만 만들어 모든 요청이 같이 쓰면 생기는 가장 큰 문제는?",
    choices: [
      "배치가 열리지 않아 N+1이 다시 생긴다",
      "캐시가 사용자 사이에 공유되어 권한이 다른 사람의 데이터가 나갈 수 있다",
      "nextTick이 막혀 이벤트 루프가 멈춘다",
      "키 순서가 섞여 배치 함수가 에러를 던진다",
    ],
    answer: 1,
    explanation:
      "로더는 같은 키를 캐시하므로 전역에 두면 한 사용자가 가져온 객체가 다른 사용자 요청에 그대로 재사용된다. 그래서 로더는 요청마다 새로 만들어 context에 넣는다.",
    anchor: "필드마다-함수가-하나씩",
  },
  {
    id: "graphql-basics-4",
    post: "graphql-basics",
    question: "스키마가 `user(id: ID!): User`, `email: String!`일 때 email 리졸버가 예외를 던지면 응답은?",
    choices: [
      "HTTP 500과 함께 data가 비어 온다",
      "user.email만 null이고 user.name은 그대로 온다",
      "user 전체가 null이 되고 errors에 path가 담겨 200으로 온다",
      "검증 단계에서 거절되어 400이 온다",
    ],
    answer: 2,
    explanation:
      "non-null 필드는 null이 될 수 없으니 null이 허용되는 가장 가까운 부모인 user까지 올라가 user를 null로 만든다. 실행 단계의 에러라 상태 코드는 200이고 errors 배열의 path로 어디서 시작했는지 알 수 있다.",
    anchor: "에러가-나도-200이-온다",
  },
  {
    id: "graphql-basics-5",
    post: "graphql-basics",
    question: "GraphQL 서버 앞의 nginx 캐시가 거의 동작하지 않는다. 가장 알맞은 개선은?",
    choices: [
      "proxy_cache_methods에 POST를 추가해 모든 쿼리를 캐시한다",
      "공개 데이터 쿼리를 persisted query 해시로 바꿔 GET으로 보낸다",
      "모든 응답에 Cache-Control: public을 붙인다",
      "introspection을 꺼서 응답 크기를 줄인다",
    ],
    answer: 1,
    explanation:
      "HTTP 캐시는 POST를 저장하지 않으니, 쿼리를 해시로 바꿔 짧고 일정한 GET URL로 보내면 캐시 키가 된다. POST를 억지로 캐시하거나 모든 응답을 public으로 두면 개인화된 응답이 다른 사용자에게 나갈 수 있다.",
    anchor: "post에는-캐시가-붙지-않는다",
  },
  {
    id: "graphql-basics-6",
    post: "graphql-basics",
    question: "깊이 한도 5를 두었는데도 `posts(first: 100) { comments(first: 100) { author { name } } }` 같은 쿼리로 서버가 느려졌다. 왜인가?",
    choices: [
      "깊이는 3이지만 목록 크기를 곱한 비용이 1만을 넘기 때문에",
      "fragment를 쓰면 깊이 제한이 무시되기 때문에",
      "DataLoader가 first 인자를 지원하지 않기 때문에",
      "깊이 제한은 mutation에만 적용되기 때문에",
    ],
    answer: 0,
    explanation:
      "깊이 제한은 중첩만 세므로 얕고 넓은 쿼리를 못 막는다. 목록 인자를 곱해 객체 수를 미리 계산하는 비용 한도와 first 상한을 같이 둬야 한다.",
    anchor: "클라이언트가-쿼리를-쓰니-서버가-막아야-할-것",
  },
  {
    id: "graphql-basics-7",
    post: "graphql-basics",
    question: "운영 GraphQL 서버에서 introspection을 껐다. 이것만으로 충분하지 않은 이유는?",
    choices: [
      "introspection을 끄면 클라이언트 쿼리가 모두 실패하기 때문에",
      "GET 요청에는 검증 규칙이 적용되지 않기 때문에",
      "\"Did you mean\" 제안으로 필드 이름을 알아낼 수 있고, 비용 제한과 권한 검사는 따로 필요하기 때문에",
      "introspection은 mutation으로도 실행할 수 있기 때문에",
    ],
    answer: 2,
    explanation:
      "introspection을 꺼도 오타에 대한 제안 메시지로 스키마를 조금씩 복원할 수 있다. 진짜 방어는 깊이·비용 제한, 허용 목록, 리졸버 단위 권한 검사다.",
    anchor: "클라이언트가-쿼리를-쓰니-서버가-막아야-할-것",
  },
];
