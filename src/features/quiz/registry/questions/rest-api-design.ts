import type { QuizQuestion } from "../types";

export const REST_API_DESIGN: QuizQuestion[] = [
  {
    id: "rest-api-design-1",
    post: "rest-api-design",
    question: "42번 주문을 지우는 API로 가장 REST다운 것은?",
    choices: [
      "POST /orders/delete/42",
      "GET /deleteOrder?id=42",
      "DELETE /orders/42",
      "POST /orders/42 { \"action\": \"delete\" }",
    ],
    answer: 2,
    explanation:
      "URL은 자원을 명사로 가리키고 무엇을 할지는 HTTP 메서드가 말한다. GET으로 지우면 링크 미리보기 봇이 들르기만 해도 데이터가 사라질 수 있다.",
    anchor: "주소는-자원의-이름이다",
  },
  {
    id: "rest-api-design-2",
    post: "rest-api-design",
    question: "무한 스크롤 피드를 offset으로 넘기는데 같은 글이 두 번 나온다. 왜 그럴까?",
    choices: [
      "데이터베이스가 정렬을 보장하지 않아서",
      "페이지 사이에 새 글이 맨 위에 추가되어 기존 글이 뒤로 밀려서",
      "클라이언트가 응답을 캐시해서",
      "limit이 너무 커서",
    ],
    answer: 1,
    explanation:
      "offset은 앞에서 몇 개를 건너뛸지로 페이지를 정한다. 그 사이 글이 추가되면 기존 글이 밀려 다음 페이지에 다시 나오고, 삭제되면 반대로 건너뛴다. 커서는 마지막으로 본 위치 다음부터 가져와서 이 문제가 없다.",
    anchor: "같은-글이-두-번-나온-이유",
  },
  {
    id: "rest-api-design-3",
    post: "rest-api-design",
    question: "커서 페이지네이션의 정렬 키로 createdAt 하나만 쓰면 생기는 문제는?",
    choices: [
      "같은 시각에 만든 항목이 페이지 경계에서 빠지거나 겹친다",
      "커서 문자열이 너무 길어진다",
      "인덱스를 쓸 수 없다",
      "내림차순 정렬을 할 수 없다",
    ],
    answer: 0,
    explanation:
      "정렬 키가 유일하지 않으면 커서보다 뒤라는 조건이 같은 값의 항목들을 제대로 가르지 못한다. (createdAt, id)처럼 유일한 값을 덧붙이고 같은 순서의 복합 인덱스를 만든다.",
    anchor: "같은-글이-두-번-나온-이유",
  },
  {
    id: "rest-api-design-4",
    post: "rest-api-design",
    question: "RFC 9457 Problem Details에서 클라이언트가 에러 종류로 분기할 때 보는 값은?",
    choices: [
      "title",
      "detail",
      "instance",
      "type",
    ],
    answer: 3,
    explanation:
      "type은 문제의 종류를 가리키는 URI라 계약처럼 유지한다. title과 detail은 사람이 읽는 문구라 고칠 수 있으니 분기 기준으로 쓰지 않는다.",
    anchor: "에러-응답도-모양을-정한다",
  },
  {
    id: "rest-api-design-5",
    post: "rest-api-design",
    question: "다음 중 기존 클라이언트를 깨뜨릴 위험이 가장 큰 변경은?",
    choices: [
      "응답에 새 필드를 추가한다",
      "새 엔드포인트를 만든다",
      "status 값 \"done\"의 의미를 결제 완료에서 배송 완료로 바꾼다",
      "요청에 선택 파라미터를 추가한다",
    ],
    answer: 2,
    explanation:
      "필드의 의미만 바꾸면 이름과 타입이 그대로라 테스트와 파싱이 모두 통과하고, 옛 클라이언트는 에러 없이 틀린 화면을 보여 준다. 의미가 바뀌면 새 필드를 만들고 옛 필드는 남겨 둔다.",
    anchor: "버전을-올리지-않고-바꾸는-법",
  },
  {
    id: "rest-api-design-6",
    post: "rest-api-design",
    question: "두 관리자가 같은 상품을 동시에 고칠 때 한쪽 수정이 덮어써지지 않게 하려면?",
    choices: [
      "수정 요청에 If-Match로 받은 ETag를 실어 보내고, 버전이 다르면 412로 거절한다",
      "PUT 대신 POST를 쓴다",
      "응답에 Cache-Control: no-store를 붙인다",
      "수정 요청마다 Idempotency-Key를 붙인다",
    ],
    answer: 0,
    explanation:
      "If-Match는 내가 본 버전일 때만 바꾸라는 조건이다. 서버의 현재 버전이 다르면 412 Precondition Failed로 거절해 낙관적 잠금이 된다. 멱등성 키는 같은 요청의 중복 처리를 막을 뿐 다른 사람의 수정과의 충돌은 막지 못한다.",
    anchor: "메서드와-상태-코드를-제대로-쓴다",
  },
  {
    id: "rest-api-design-7",
    post: "rest-api-design",
    question: "큰 숫자 id를 JSON 숫자 대신 문자열로 주는 이유는?",
    choices: [
      "문자열이 숫자보다 전송 크기가 작아서",
      "자바스크립트 숫자는 2^53 - 1을 넘으면 정확하지 않아 다른 id로 바뀔 수 있어서",
      "JSON 명세가 숫자 id를 금지해서",
      "정렬이 더 빨라서",
    ],
    answer: 1,
    explanation:
      "자바스크립트의 숫자는 9007199254740991까지만 정확하다. 그보다 큰 id를 숫자로 주면 JSON.parse 결과가 이웃한 다른 값으로 바뀐다. 트위터 API가 id_str을 따로 둔 이유다.",
    anchor: "이름과-값의-모양을-통일한다",
  },
];
