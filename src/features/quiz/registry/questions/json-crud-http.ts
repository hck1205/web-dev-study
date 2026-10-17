import type { QuizQuestion } from "../types";

export const JSON_CRUD_HTTP: QuizQuestion[] = [
  {
    id: "json-crud-http-1",
    post: "json-crud-http",
    question: "fetch로 body에 JSON.stringify한 문자열만 넣고 헤더를 주지 않았더니 서버의 req.body가 비어 있다. 원인은?",
    choices: [
      "fetch가 POST 본문을 기본으로 압축해서 보낸다",
      "Content-Type이 text/plain;charset=UTF-8로 붙어 JSON 파서가 본문을 읽지 않았다",
      "JSON.stringify가 한글을 UTF-16으로 바꿔서 서버가 읽지 못했다",
      "같은 출처 요청이라 브라우저가 본문을 떼어 냈다",
    ],
    answer: 1,
    explanation:
      "fetch는 문자열 본문에 Content-Type을 text/plain;charset=UTF-8로 붙인다. Express의 express.json() 같은 파서는 형식이 JSON이 아니면 본문을 읽지 않고 넘긴다. 꼼꼼한 서버라면 415로 거절해서 원인이 더 빨리 보인다.",
    anchor: "형식이-다르면-415",
  },
  {
    id: "json-crud-http-2",
    post: "json-crud-http",
    question: "JSON.stringify({ memo: undefined, tags: new Map([[\"a\", 1]]), ratio: NaN })의 결과는?",
    choices: [
      "'{\"memo\":null,\"tags\":{\"a\":1},\"ratio\":null}'",
      "TypeError가 난다",
      "'{\"tags\":{},\"ratio\":null}'",
      "'{\"memo\":undefined,\"tags\":[[\"a\",1]],\"ratio\":NaN}'",
    ],
    answer: 2,
    explanation:
      "객체 안의 undefined는 키째로 빠지고, Map은 열거할 자기 속성이 없어 빈 객체가 되며, NaN은 null이 된다. TypeError는 BigInt나 순환 참조를 만났을 때 난다.",
    anchor: "stringify가-조용히-바꾸는-값",
  },
  {
    id: "json-crud-http-3",
    post: "json-crud-http",
    question: "64비트 정수 ID를 JSON 숫자로 보내면 브라우저에서 생길 수 있는 문제는?",
    choices: [
      "2⁵³을 넘는 값은 JSON.parse가 오류 없이 가까운 다른 값으로 바꾼다",
      "JSON 표준이 32비트를 넘는 숫자를 금지해서 파싱 오류가 난다",
      "숫자가 자동으로 BigInt가 되어 계산할 때 TypeError가 난다",
      "숫자가 지수 표기 문자열로 바뀌어 비교가 안 된다",
    ],
    answer: 0,
    explanation:
      "자바스크립트 숫자는 배정밀도 부동소수점이라 9007199254740993이 9007199254740992로 조용히 바뀐다. JSON 표준 자체는 크기를 제한하지 않는다. 그래서 큰 ID는 처음부터 문자열로 보낸다.",
    anchor: "큰-숫자-id는-문자열로-보낸다",
  },
  {
    id: "json-crud-http-4",
    post: "json-crud-http",
    question: "할 일 {title, done, dueDate}에 PUT으로 {\"title\":\"장보기\",\"done\":true}만 보냈다. 올바르게 구현된 서버에서 dueDate는?",
    choices: [
      "보내지 않았으니 원래 값이 그대로 남는다",
      "필드가 빠졌으니 400으로 거절해야만 한다",
      "PUT은 일부 수정을 허용하지 않아 405가 난다",
      "기본값(null)이 된다",
    ],
    answer: 3,
    explanation:
      "PUT은 본문이 자원의 새 모습 전체라는 뜻이라 본문에 없는 필드는 기본값으로 돌아간다. 원래 값을 남기고 일부만 바꾸려면 PATCH를 쓰거나, 현재 모습을 읽어 고친 전체를 PUT으로 보내야 한다.",
    anchor: "put은-빠진-필드를-기본값으로-만든다",
  },
  {
    id: "json-crud-http-5",
    post: "json-crud-http",
    question: "application/merge-patch+json으로 {\"memo\": null, \"remind\": {\"repeat\": null}}을 보내면 어떻게 되나?",
    choices: [
      "memo와 remind의 값이 둘 다 null로 저장된다",
      "memo는 지워지고, remind는 안쪽의 repeat만 지워진 채 나머지가 남는다",
      "remind 객체가 {repeat: null}로 통째로 바뀐다",
      "null이 들어 있어 422로 거절된다",
    ],
    answer: 1,
    explanation:
      "Merge Patch에서 null은 그 키를 지우라는 뜻이고, 값이 객체면 안쪽으로 들어가 같은 규칙을 적용한다. 그래서 remind.at 같은 다른 필드는 남는다. 같은 이유로 Merge Patch로는 필드를 진짜 null 값으로 저장할 수 없다.",
    anchor: "patch에서-null은-지우라는-뜻이다",
  },
  {
    id: "json-crud-http-6",
    post: "json-crud-http",
    question: "폰과 노트북이 같은 ETag \"3\"을 받아 둔 뒤 폰이 먼저 If-Match: \"3\"으로 수정했다. 노트북이 이어서 If-Match: \"3\"으로 수정하면?",
    choices: [
      "409 Conflict로 거절되고 노트북 수정이 대신 저장된다",
      "나중 요청이 이겨서 폰의 수정을 덮어쓴다",
      "현재 버전이 \"4\"라서 412 Precondition Failed로 거절되고 아무것도 바뀌지 않는다",
      "428 Precondition Required가 온다",
    ],
    answer: 2,
    explanation:
      "If-Match의 버전이 서버의 현재 ETag와 다르면 412로 거절한다. 409는 조건 헤더와 상관없이 지금 상태와 충돌할 때, 428은 조건 헤더를 아예 안 붙였을 때 쓴다.",
    anchor: "동시에-고치면-412",
  },
  {
    id: "json-crud-http-7",
    post: "json-crud-http",
    question: "DELETE 응답(204)에 res.json()을 불렀더니 SyntaxError가 났다. 가장 알맞은 처리는?",
    choices: [
      "상태 코드가 204이거나 Content-Type이 JSON 계열이 아니면 본문을 읽지 않는다",
      "서버가 204 대신 항상 200과 빈 문자열을 주게 바꾼다",
      "res.json()을 두 번 불러 다시 시도한다",
      "Accept: application/json을 붙이면 빈 본문도 {}로 바뀐다",
    ],
    answer: 0,
    explanation:
      "res.json()은 본문 전체를 JSON.parse하는 함수라 빈 본문이면 Unexpected end of JSON input으로 실패한다. 빈 문자열을 주는 200도 똑같이 실패하고, 본문은 한 번만 읽을 수 있다. 상태 코드와 Content-Type을 먼저 보는 공용 요청 함수로 처리를 모은다.",
    anchor: "resjson이-터지는-응답들",
  },
];
