import type { QuizQuestion } from "../types";

export const GRAPHQL_CLIENT_CACHING: QuizQuestion[] = [
  {
    id: "graphql-client-caching-1",
    post: "graphql-client-caching",
    question: "Apollo Client에서 toggleTodo 뮤테이션의 선택 집합을 { done }만 받도록 줄였더니 서버는 바뀌었는데 화면이 그대로다. 이유는?",
    choices: [
      "cache-first 정책이라 뮤테이션 뒤에 캐시를 읽지 않기 때문에",
      "뮤테이션 응답은 원래 캐시에 쓰이지 않기 때문에",
      "id가 없어 캐시가 이 done이 어느 Todo 칸의 값인지 알 수 없기 때문에",
      "__typename이 빠져서 서버가 에러를 냈기 때문에"
    ],
    answer: 2,
    explanation:
      "정규화 캐시는 __typename과 id로 만든 키로 칸을 찾는다. __typename은 Apollo가 자동으로 붙이지만 id는 쿼리에 적어야 하므로, 빼면 기존 칸을 갱신하지 못한다. 뮤테이션 응답에는 id와 화면에 보이는 필드를 함께 받는다.",
    anchor: "바뀐-필드는-알아서-새-항목은-직접",
  },
  {
    id: "graphql-client-caching-2",
    post: "graphql-client-caching",
    question: "addTodo 응답의 Todo:3은 캐시에 칸이 생겼는데 목록 화면에는 나오지 않는다. 정규화 캐시가 이걸 알아서 처리하지 못하는 이유는?",
    choices: [
      "목록 쿼리가 cache-only 정책으로 고정되어 있기 때문에",
      "Todo:3의 __typename이 목록의 것과 달라서",
      "새 객체는 다음 새로고침 때까지 캐시에 쓰이지 않기 때문에",
      "새 객체가 어느 목록의 어디에 들어가야 하는지는 필터와 정렬 같은 업무 규칙이라 캐시가 알 수 없기 때문에"
    ],
    answer: 3,
    explanation:
      "캐시는 칸 안의 값은 갱신하지만 목록 구성은 건드리지 않는다. 전체 목록인지, 미완료 목록인지, 맨 앞인지 뒤인지는 서버의 규칙이다. 그래서 update와 cache.modify로 참조를 넣거나 refetchQueries로 다시 받는다.",
    anchor: "바뀐-필드는-알아서-새-항목은-직접",
  },
  {
    id: "graphql-client-caching-3",
    post: "graphql-client-caching",
    question: "미완료 목록 todos(filter: \"open\")을 보는 중에 Todo:2를 완료로 토글했다. id까지 받았는데도 남는 문제는?",
    choices: [
      "완료된 Todo:2가 미완료 목록에 done: true로 그대로 남는다",
      "미완료 목록 전체가 캐시에서 지워진다",
      "전체 목록 todos(filter: \"all\")에서 Todo:2가 빠진다",
      "Todo:2의 done 값이 바뀌지 않는다"
    ],
    answer: 0,
    explanation:
      "id가 있으니 칸 값은 갱신되지만, 이 항목을 open 목록에서 빼야 한다는 건 캐시가 모르는 서버 규칙이다. 필터가 걸린 목록은 update에서 직접 고치거나 다시 받아야 한다.",
    anchor: "필터가-걸린-목록은-직접-맞춰야-한다",
  },
  {
    id: "graphql-client-caching-4",
    post: "graphql-client-caching",
    question: "id가 없는 settings 객체를 화면 A는 theme만, 화면 B는 lang만 묻는다. 둘이 동시에 떠 있을 때 생길 수 있는 증상과 해결로 맞는 것은?",
    choices: [
      "B의 응답이 무시되어 lang이 영원히 비어 있다. keyArgs: false로 고친다",
      "두 값이 자동으로 합쳐지므로 문제가 없다",
      "B의 응답이 A의 것을 갈아 끼워 A가 다시 요청하고, 서로 덮어쓰며 요청이 반복될 수 있다. Settings에 merge: true를 주거나 id를 준다",
      "A와 B가 같은 요청을 한 번으로 합쳐 보내므로 요청이 줄어든다"
    ],
    answer: 2,
    explanation:
      "id가 없으면 두 settings가 같은 객체인지 알 수 없어 나중 응답이 앞의 것을 통째로 바꾼다. 그러면 A는 theme이 없어 다시 서버에 묻는다. typePolicies에서 merge: true로 합치게 하거나 객체에 키를 준다.",
    anchor: "id-없는-객체가-서로를-지운다",
  },
  {
    id: "graphql-client-caching-5",
    post: "graphql-client-caching",
    question: "urql 기본 캐시에서 빈 목록 화면에 첫 할 일을 추가했더니 목록이 다시 받아지지 않았다. 두 번째 추가부터는 잘 된다. 이유는?",
    choices: [
      "문서 캐시는 뮤테이션 뒤에 아무 쿼리도 무효화하지 않기 때문에",
      "첫 요청의 변수가 달라서 다른 쿼리로 취급되기 때문에",
      "urql은 첫 뮤테이션을 항상 캐시하지 않기 때문에",
      "빈 결과에는 Todo라는 타입 이름이 없어서 Todo 뮤테이션과 관련된 쿼리로 인식되지 않기 때문에"
    ],
    answer: 3,
    explanation:
      "urql 문서 캐시는 뮤테이션 응답의 __typename을 보고 그 타입이 결과에 있던 쿼리를 무효화한다. 빈 목록은 타입 이름을 남기지 않아 대상에서 빠진다. 쿼리 context에 additionalTypenames를 주면 해결된다.",
    anchor: "문서-캐시는-응답을-통째로-둔다",
  },
  {
    id: "graphql-client-caching-6",
    post: "graphql-client-caching",
    question: "Apollo의 낙관적 응답이 실패했을 때 되돌리는 코드를 따로 쓰지 않아도 되는 이유는?",
    choices: [
      "예상 값을 진짜 칸이 아니라 그 위의 층에 써 두어서, 실패하면 층만 걷으면 되기 때문에",
      "낙관적 응답은 서버 응답이 올 때까지 화면에 반영되지 않기 때문에",
      "실패한 뮤테이션은 서버가 이전 값을 다시 보내 주기 때문에",
      "실패하면 Apollo가 페이지를 새로고침하기 때문에"
    ],
    answer: 0,
    explanation:
      "Apollo는 낙관적 값을 진짜 데이터 위의 얇은 층으로 기록하고 화면은 그 층까지 읽는다. 성공하면 층을 걷고 진짜 값을 쓰며, 실패하면 층만 걷어 원래 값으로 돌아간다. 데모에서도 진짜 값은 그동안 false로 남아 있었다.",
    anchor: "누르자마자-바꿔-두고-틀리면-되돌린다",
  },
  {
    id: "graphql-client-caching-7",
    post: "graphql-client-caching",
    question: "Relay의 프래그먼트 동거와 데이터 가리기가 큰 앱에서 주는 이점은?",
    choices: [
      "런타임에 쿼리 문자열을 조립해 요청 수를 줄여 준다",
      "서버가 node(id)나 전역 ID를 지원하지 않아도 되게 해 준다",
      "필드를 지울 때 그 필드를 쓰는 컴포넌트가 프래그먼트로 드러나서, 안전하게 지울 수 있는지 컴파일 때 알 수 있다",
      "정규화 없이 문서 캐시만으로 일관성을 지켜 준다"
    ],
    answer: 2,
    explanation:
      "컴포넌트는 자기 프래그먼트에 적은 필드만 읽을 수 있어서 필드 사용처가 프래그먼트에 모두 드러난다. 몰래 쓰던 곳이 있으면 타입 에러가 난다. 대신 Relay는 전역 ID와 node 같은 서버 규약을 요구하고, 쿼리는 컴파일러가 빌드 때 만든다.",
    anchor: "relay는-컴포넌트가-자기-데이터를-적는다",
  },
];
