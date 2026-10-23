import type { QuizQuestion } from "../types";

export const GRAPHQL_PAGINATION_CONNECTIONS: QuizQuestion[] = [
  {
    id: "graphql-pagination-connections-1",
    post: "graphql-pagination-connections",
    question:
      "피드를 `offset: 0, limit: 3`으로 받은 뒤 맨 앞에 새 글이 하나 들어왔다. `offset: 3, limit: 3`으로 다음 페이지를 받으면?",
    choices: [
      "첫 페이지의 마지막 글이 다시 나온다",
      "새 글이 둘째 페이지 맨 앞에 나온다",
      "글 하나를 건너뛴다",
      "서버가 변경을 감지해 첫 페이지부터 다시 준다",
    ],
    answer: 0,
    explanation:
      "offset은 '앞에서 몇 개 건너뛰기'라서 앞에 하나가 끼면 목록 전체가 한 칸 밀린다. 그래서 첫 페이지의 마지막 글이 둘째 페이지 첫 글로 또 나온다. 앞쪽 글이 지워지면 반대로 하나를 건너뛴다. 커서는 '이 글 다음'을 가리켜 이런 일이 없다.",
    anchor: "인자-네-개와-pageinfo",
  },
  {
    id: "graphql-pagination-connections-2",
    post: "graphql-pagination-connections",
    question: "커넥션에서 `nodes`를 바로 주지 않고 `edges { cursor node }`로 한 겹 감싸는 이유는?",
    choices: [
      "GraphQL은 목록 안에 객체를 바로 담을 수 없어서",
      "엣지가 있어야 DataLoader가 배치할 수 있어서",
      "응답 크기를 줄이려고",
      "커서나 관계의 속성처럼 항목이 아니라 '목록 안의 자리'에 붙는 값을 둘 곳이 필요해서",
    ],
    answer: 3,
    explanation:
      "커서는 항목 자체가 아니라 그 목록 안에서의 위치이고, 친구가 된 날짜나 검색 점수도 관계의 속성이다. 이런 값은 node 객체에 넣을 수 없어 엣지에 둔다. 커서가 필요 없는 화면을 위해 nodes 단축 필드를 함께 두는 API도 있다.",
    anchor: "목록-대신-커넥션을-돌려준다",
  },
  {
    id: "graphql-pagination-connections-3",
    post: "graphql-pagination-connections",
    question: "커서를 base64로 감싸 불투명하게 만드는 것에 대한 설명으로 맞는 것은?",
    choices: [
      "base64라서 클라이언트가 커서를 위조할 수 없다",
      "클라이언트가 내용에 기대지 않게 해서 서버가 커서 내용을 바꿀 수 있게 하는 약속이며, 보안 장치는 아니다",
      "불투명한 커서는 서버가 검사하지 않아도 된다",
      "커서 타입을 ID로 선언해야 불투명해진다",
    ],
    answer: 1,
    explanation:
      "base64는 누구나 풀 수 있어서 숨기거나 위조를 막지 못한다. 불투명하다는 것은 클라이언트가 커서를 해석하지 않는다는 약속이고, 그 덕분에 서버가 정렬 키를 바꿔도 클라이언트가 깨지지 않는다. 서버는 받은 커서를 검사하고, 권한 관련 값이 있으면 서명한다.",
    anchor: "커서를-불투명하게-만드는-이유",
  },
  {
    id: "graphql-pagination-connections-4",
    post: "graphql-pagination-connections",
    question: "COUNT를 따로 돌리지 않고 `hasNextPage`를 계산하는 흔한 방법은?",
    choices: [
      "edges.length가 0이 아니면 참으로 한다",
      "endCursor가 null이 아니면 참으로 한다",
      "first보다 하나 더 가져와서 그만큼 왔으면 참으로 하고 응답에는 first개만 싣는다",
      "hasPreviousPage를 뒤집어 쓴다",
    ],
    answer: 2,
    explanation:
      "LIMIT first+1로 가져오면 하나가 더 왔는지로 뒤에 항목이 있는지 알 수 있다. edges 길이나 endCursor로 판단하면 정확히 first개 남았을 때 빈 페이지를 한 번 더 받는다. hasPreviousPage는 반대 방향 정보라 상관이 없다.",
    anchor: "다음-페이지를-이어-받는-흐름",
  },
  {
    id: "graphql-pagination-connections-5",
    post: "graphql-pagination-connections",
    question:
      "회원 여러 명의 최근 글 3개씩을 한 번에 가져오려고 `WHERE author_id IN (...) ORDER BY ... LIMIT 3`을 썼다. 무엇이 잘못됐나?",
    choices: [
      "LIMIT이 결과 전체에 걸려 회원마다가 아니라 합쳐서 3개만 온다",
      "IN 조건은 인덱스를 쓰지 못해 항상 느리다",
      "ORDER BY와 LIMIT을 함께 쓸 수 없다",
      "결과가 맞지만 커서를 만들 수 없다",
    ],
    answer: 0,
    explanation:
      "LIMIT은 쿼리 결과 전체에 한 번 걸리므로 어떤 회원은 글이 하나도 안 나온다. 부모마다 잘라야 하니 윈도 함수로 회원별 순번을 매기거나 LATERAL로 회원마다 LIMIT을 건다. 측정에서 LATERAL은 회원마다 인덱스에서 3개씩만 읽어 훨씬 적게 읽었다.",
    anchor: "중첩된-커넥션은-부모마다-잘라야-한다",
  },
  {
    id: "graphql-pagination-connections-6",
    post: "graphql-pagination-connections",
    question: "`totalCount`를 커넥션에 넣을 때 비용을 줄이는 방법으로 가장 알맞은 것은?",
    choices: [
      "커넥션 리졸버에서 페이지와 개수를 항상 함께 계산한다",
      "totalCount를 non-null로 선언한다",
      "totalCount를 엣지마다 넣는다",
      "totalCount를 별도 리졸버로 두어 쿼리가 그 필드를 고를 때만 세게 한다",
    ],
    answer: 3,
    explanation:
      "전체 개수는 조건에 맞는 행을 모두 세야 해서 키셋 페이지 조회보다 훨씬 비쌀 수 있다. 별도 리졸버로 두면 무한 스크롤처럼 개수를 고르지 않는 쿼리에서는 COUNT가 돌지 않는다. 비용 계산에도 큰 가중치를 준다.",
    anchor: "totalcount는-공짜가-아니다",
  },
  {
    id: "graphql-pagination-connections-7",
    post: "graphql-pagination-connections",
    question: "Apollo Client에서 `relayStylePagination([\"orderBy\", \"filter\"])`의 인자 배열이 하는 일은?",
    choices: [
      "이 인자들을 서버에 보내지 않게 한다",
      "이 인자가 다르면 다른 목록으로 보고, first·after 같은 나머지는 같은 목록의 페이지로 이어 붙인다",
      "이 인자들로 결과를 클라이언트에서 다시 정렬한다",
      "이 인자가 바뀌면 커서를 자동으로 다시 만든다",
    ],
    answer: 1,
    explanation:
      "인자 배열은 keyArgs다. 정렬이나 필터가 다르면 서로 다른 목록으로 저장하고, 페이지 인자만 다른 요청은 같은 목록의 조각으로 합친다. 이걸 빠뜨리면 인기순 목록 뒤에 최신순 페이지가 이어 붙는 식으로 목록이 섞인다.",
    anchor: "클라이언트-캐시가-페이지를-이어-붙이는-법",
  },
];
