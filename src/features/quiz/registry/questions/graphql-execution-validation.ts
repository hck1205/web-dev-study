import type { QuizQuestion } from "../types";

export const GRAPHQL_EXECUTION_VALIDATION: QuizQuestion[] = [
  {
    id: "graphql-execution-validation-1",
    post: "graphql-execution-validation",
    question: "응답에 `errors`만 있고 `data` 키 자체가 없다. 가장 먼저 의심할 곳은?",
    choices: [
      "리졸버가 DB 호출 중 예외를 던졌다",
      "non-null 최상위 필드가 null을 받았다",
      "DataLoader 배치 함수가 순서를 틀렸다",
      "문서나 변수가 틀려서 파싱·검증·변수 변환 단계에서 막혔다",
    ],
    answer: 3,
    explanation:
      "파싱, 검증, 변수 변환에서 나는 요청 에러는 실행을 시작하지 않으므로 data 키가 없다. 리졸버에서 난 필드 에러는 data가 있고 일부가 null이며, 최상위까지 null이 올라가도 `data: null`로 키는 남는다. 그래서 data 키가 없으면 클라이언트가 보낸 본문부터 본다.",
    anchor: "실행-전에-변수-값부터-맞춘다",
  },
  {
    id: "graphql-execution-validation-2",
    post: "graphql-execution-validation",
    question: "파싱·검증 결과를 문서 문자열 단위로 캐시할 수 있는 이유는?",
    choices: [
      "검증 결과는 문서와 스키마에만 달려 있고 변수 값과는 상관없어서",
      "검증은 리졸버 결과를 보고 판단하므로 결과가 같으면 재사용해서",
      "GraphQL 명세가 검증을 한 번만 하라고 정해서",
      "변수 값까지 포함해 해시를 만들기 때문에",
    ],
    answer: 0,
    explanation:
      "검증은 문서가 스키마에 맞는지만 보고 데이터나 변수 값은 보지 않는다. 그래서 같은 문서 문자열이면 결과가 항상 같다. 측정에서 검증이 실행보다 몇 배 비쌌으니 캐시 효과가 크고, 값을 문서에 이어 붙이면 이 캐시가 맞지 않는다.",
    anchor: "검증-규칙-27개",
  },
  {
    id: "graphql-execution-validation-3",
    post: "graphql-execution-validation",
    question:
      "`shipping`(40ms)과 `buyer`(10ms)가 비동기 형제 필드다. 쿼리에 `shipping`을 먼저 적었을 때 일어나는 일로 맞는 것은?",
    choices: [
      "shipping이 끝나야 buyer 리졸버가 불린다",
      "buyer가 먼저 끝나 응답에서도 buyer가 shipping보다 앞에 온다",
      "둘이 동시에 진행되고 buyer의 하위 필드가 먼저 실행되지만, 응답 키는 shipping이 앞에 온다",
      "실행기는 같은 깊이의 필드가 모두 끝날 때까지 다음 깊이로 내려가지 않는다",
    ],
    answer: 2,
    explanation:
      "실행기는 형제 리졸버를 부르기만 하고 기다리지 않아서 둘이 동시에 진행되고, 먼저 끝난 buyer는 바로 하위 필드로 내려간다. 응답 키 순서는 실행 순서가 아니라 선택 집합에 적힌 순서로 정해진다. 그래서 리졸버끼리 실행 순서에 기대면 안 된다.",
    anchor: "형제-필드는-서로를-기다리지-않는다",
  },
  {
    id: "graphql-execution-validation-4",
    post: "graphql-execution-validation",
    question: "`recs: [Product!]`에서 1번 상품의 `price: Int!` 리졸버가 실패했다. `recs`는 어떻게 되나?",
    choices: [
      "1번 원소만 null인 배열이 된다",
      "목록 전체가 null이 된다",
      "1번 원소의 price만 null이 된다",
      "1번 원소가 빠진 두 개짜리 배열이 된다",
    ],
    answer: 1,
    explanation:
      "price가 non-null이라 1번 상품 객체가 null이 되려 하고, 원소 타입도 Product!라 원소를 null로 둘 수 없어 목록 전체가 null이 된다. 원소 타입이 nullable인 `[Product]`였다면 1번 원소만 null이 되고 나머지 둘은 살아남는다.",
    anchor: "결과를-만들며-null을-올린다",
  },
  {
    id: "graphql-execution-validation-5",
    post: "graphql-execution-validation",
    question: "같은 객체 아래 non-null 필드 a, b가 모두 실패할 때 errors가 1개일 수도 2개일 수도 있는 이유는?",
    choices: [
      "errors 배열은 최대 하나만 담도록 명세가 정해서",
      "graphql-js가 같은 메시지의 에러를 합치기 때문에",
      "에러가 둘 이상이면 HTTP 상태가 500으로 바뀌어서",
      "동기면 a가 실패하는 순간 부모가 null로 정해져 b가 실행되지 않고, 비동기면 이미 불린 리졸버의 실패가 기록되어서",
    ],
    answer: 3,
    explanation:
      "동기 실행에서는 첫 non-null 실패가 부모를 null로 만들면 남은 형제는 실행되지 않는다. 비동기에서는 형제가 모두 불린 상태라 먼저 끝난 실패들이 기록되고, 부모가 null로 정해진 뒤에 늦게 끝난 실패는 버려진다. 그래서 errors 개수로 실패 지점 수를 세면 안 된다.",
    anchor: "결과를-만들며-null을-올린다",
  },
  {
    id: "graphql-execution-validation-6",
    post: "graphql-execution-validation",
    question: "서버가 타임아웃으로 응답을 끊었는데도 DB 부하가 줄지 않는다. graphql-js 16 기준으로 가장 알맞은 설명은?",
    choices: [
      "실행기에 취소 기능이 없어 이미 시작된 리졸버가 끝까지 돈다",
      "타임아웃이 나면 실행기가 모든 리졸버를 처음부터 다시 실행한다",
      "검증 캐시가 무효화되어 매 요청 검증을 다시 해서",
      "graphqlSync로 바뀌어 동기 실행이 되어서",
    ],
    answer: 0,
    explanation:
      "graphql-js 16은 실행 중인 요청을 취소하지 못해서 응답을 끊어도 이미 시작된 Promise는 계속 진행된다. graphqlSync가 실패할 때도 비동기 리졸버가 끝까지 돌았다. 요청의 AbortSignal을 context로 리졸버까지 내려 DB 드라이버나 fetch에 넘기고, DB에도 문장 타임아웃을 둔다.",
    anchor: "동기-리졸버와-비동기-리졸버",
  },
  {
    id: "graphql-execution-validation-7",
    post: "graphql-execution-validation",
    question: "리졸버 예외 메시지가 `relation \"order_notes\" does not exist`로 클라이언트에 보였다. 올바른 처리는?",
    choices: [
      "검증 규칙을 더해 해당 필드를 막는다",
      "에러가 나면 HTTP 500을 보내도록 바꾼다",
      "보여 줄 에러는 GraphQLError와 extensions.code로 던지고, 나머지는 일반 메시지로 가리고 원문은 서버 로그에만 남긴다",
      "errors 배열을 응답에서 지워 data만 보낸다",
    ],
    answer: 2,
    explanation:
      "graphql-js는 예외 메시지를 그대로 errors에 실어 내부 정보가 샌다. 클라이언트용 에러와 내부 예외를 나눠, 내부 예외는 'Unexpected error.' 같은 메시지로 가린다. errors를 지우면 부분 실패를 알릴 수 없고, 클라이언트는 메시지 대신 코드로 분기한다.",
    anchor: "에러-메시지가-밖으로-새는-곳",
  },
];
