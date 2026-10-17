import type { QuizQuestion } from "../types";

export const HTTP_METHODS: QuizQuestion[] = [
  {
    id: "http-methods-1",
    post: "http-methods",
    question: "메일로 보낸 일회용 로그인 링크(GET)가 사용자가 누르기도 전에 '이미 사용됨'이 되는 이유로 가장 알맞은 것은?",
    choices: [
      "GET 응답이 CDN에 캐시되어서",
      "브라우저가 GET을 자동으로 두 번 보내서",
      "토큰이 쿼리 문자열이라 서버가 읽지 못해서",
      "메일 보안 스캐너가 GET은 안전하다고 믿고 링크를 먼저 열어서",
    ],
    answer: 3,
    explanation:
      "메일 스캐너, 링크 미리보기, 크롤러는 GET이 서버 상태를 바꾸지 않는다는 약속을 믿고 사람 대신 주소를 연다. 링크가 그 약속을 어기고 토큰을 소모했기 때문에 생긴 일이다. 확인 페이지만 GET으로 보여 주고 실제 로그인은 버튼의 POST로 하면 된다.",
    anchor: "스펙대로-하지-않는-서버들",
  },
  {
    id: "http-methods-2",
    post: "http-methods",
    question: "DELETE /orders/7을 두 번 보냈더니 처음엔 204, 두 번째는 404가 왔다. 이 DELETE는 멱등한가?",
    choices: [
      "멱등하다. 두 번 보낸 뒤에도 서버 상태는 '주문 7이 없다'로 같다",
      "멱등하지 않다. 응답 코드가 달라졌다",
      "멱등하지 않다. DELETE는 안전하지 않은 메서드다",
      "두 번째 요청이 404이므로 판단할 수 없다",
    ],
    answer: 0,
    explanation:
      "멱등성은 응답이 아니라 서버에 미치는 의도한 효과에 대한 정의다. 응답이 달라도 상태가 같으면 멱등이다. 안전하지 않다는 것과 멱등하지 않다는 것은 별개라서, DELETE는 안전하지 않지만 멱등하다.",
    anchor: "안전-멱등-캐시-가능",
  },
  {
    id: "http-methods-3",
    post: "http-methods",
    question: "장바구니 { items, coupon }에 PUT { items: [\"pear\"] }를 보내면 coupon은 어떻게 되어야 하나?",
    choices: [
      "그대로 남는다. 보낸 필드만 바뀐다",
      "null 값으로 남는다",
      "사라진다. PUT은 본문을 자원 전체의 새 모습으로 본다",
      "서버가 400을 돌려준다",
    ],
    answer: 2,
    explanation:
      "PUT은 대상 자원을 보낸 본문으로 통째로 바꾸므로 본문에 없는 필드는 지워지는 게 맞다. 일부만 고치려면 PATCH를 쓴다. 보낸 필드만 고치는 PUT API는 클라이언트가 문서를 봐야만 동작을 알 수 있게 만든다.",
    anchor: "put은-통째로-patch는-일부만",
  },
  {
    id: "http-methods-4",
    post: "http-methods",
    question: "PATCH가 멱등을 보장하지 않는 이유를 보여 주는 예는?",
    choices: [
      "JSON Merge Patch로 memo 필드를 같은 값으로 덮어쓴다",
      "JSON Patch의 add로 /items/- 에 항목을 추가한다",
      "PATCH 요청에 If-Match 헤더를 붙인다",
      "PATCH 응답으로 204를 돌려준다",
    ],
    answer: 1,
    explanation:
      "/items/- 는 배열 끝을 가리켜서 같은 지시를 보낼 때마다 항목이 하나씩 늘어난다. 반면 Merge Patch처럼 값을 덮어쓰는 변경은 몇 번 보내도 결과가 같다. PATCH의 멱등성은 변경 지시를 어떻게 쓰느냐에 달려 있다.",
    anchor: "put은-통째로-patch는-일부만",
  },
  {
    id: "http-methods-5",
    post: "http-methods",
    question: "주문 POST의 응답이 유실되어 앱이 재시도할 때 주문이 두 번 생기지 않게 하는 방법으로 알맞은 것은?",
    choices: [
      "재시도할 때 메서드를 GET으로 바꾼다",
      "타임아웃을 더 짧게 잡는다",
      "응답에 Cache-Control: no-store를 붙인다",
      "요청마다 고유한 Idempotency-Key를 붙이고 서버가 키별로 처음 결과를 돌려준다",
    ],
    answer: 3,
    explanation:
      "응답만 사라지면 클라이언트는 서버가 처리했는지 알 수 없다. 같은 키로 재시도하면 서버는 주문을 새로 만들지 않고 저장해 둔 처음 응답을 돌려준다. 클라이언트가 주문 ID를 정해 PUT으로 보내는 방법도 같은 효과를 낸다.",
    anchor: "post를-다시-보내면-주문이-두-개",
  },
  {
    id: "http-methods-6",
    post: "http-methods",
    question: "fetch(url, { method: \"patch\" })가 서버에서 거절되는 이유는?",
    choices: [
      "fetch는 PATCH를 금지 메서드로 막는다",
      "fetch가 patch를 대문자로 바꿔 주지 않아 소문자 그대로 보내고, 메서드 이름은 대소문자를 가린다",
      "PATCH는 반드시 preflight를 거쳐야 한다",
      "PATCH 요청에는 본문을 실을 수 없다",
    ],
    answer: 1,
    explanation:
      "fetch는 get, post, put, delete, head, options만 대문자로 바꿔 준다. 메서드 이름은 헤더 이름과 달리 대소문자를 가리므로 서버는 patch를 모르는 메서드로 본다. 금지 메서드는 CONNECT, TRACE 같은 것이다.",
    anchor: "405와-allow-대소문자",
  },
  {
    id: "http-methods-7",
    post: "http-methods",
    question: "검색 조건이 길어 GET 요청에 JSON 본문을 싣는 방식을 피해야 하는 이유로 틀린 것은?",
    choices: [
      "브라우저 fetch는 GET에 body를 주면 TypeError를 던진다",
      "캐시는 본문을 키로 쓰지 않아 본문만 다른 요청이 같은 사본을 받을 수 있다",
      "GET 본문은 HTTP 표준에서 금지되어 서버가 반드시 400을 돌려준다",
      "일부 프록시와 게이트웨이가 GET 본문을 버리거나 요청을 거절한다",
    ],
    answer: 2,
    explanation:
      "표준은 GET 본문을 금지하지 않고, 정해진 의미가 없으며 일부 구현이 거절할 수 있다고만 한다. 그래서 Elasticsearch처럼 받아 주는 서버도 있다. 하지만 fetch 오류, 캐시 키, 중간 장비 문제가 있어 긴 조건은 POST로 보내는 게 현실적이다.",
    anchor: "get에-본문을-싣지-않는-이유",
  },
];
