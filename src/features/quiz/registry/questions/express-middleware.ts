import type { QuizQuestion } from "../types";

export const EXPRESS_MIDDLEWARE: QuizQuestion[] = [
  {
    id: "express-middleware-1",
    post: "express-middleware",
    question:
      "Express 4에서 async 핸들러가 await 뒤에 에러를 던졌다. 인자 4개짜리 에러 처리기는 맨 아래에 등록돼 있다. Node 22에서 어떻게 되나?",
    choices: [
      "에러 처리기가 불려 500이 나간다",
      "Express가 자동으로 재시도한다",
      "처리되지 않은 Promise 거부가 되어 프로세스가 종료되고 요청은 응답 없이 끊긴다",
      "요청만 매달리고 프로세스는 멀쩡하다",
    ],
    answer: 2,
    explanation:
      "Express 4는 핸들러를 try/catch로 부를 뿐 반환된 Promise를 보지 않는다. Node 15부터 처리되지 않은 거부는 기본으로 프로세스를 끝낸다. Express 5는 거부를 next(err)로 넘겨 500이 나간다.",
    anchor: "async-핸들러가-던진-에러",
  },
  {
    id: "express-middleware-2",
    post: "express-middleware",
    question: "에러 처리 미들웨어를 라우트보다 위에 등록했다. 라우트에서 에러가 나면?",
    choices: [
      "등록 위치와 상관없이 에러 처리기가 불린다",
      "에러는 아래로만 흐르므로 그 처리기는 불리지 않고 기본 처리기가 응답한다",
      "Express가 앱을 띄울 때 에러를 낸다",
      "에러 처리기가 두 번 불린다",
    ],
    answer: 1,
    explanation:
      "Express는 등록 순서대로 미들웨어를 시험하고, next(err)는 그 아래쪽의 에러 처리기만 찾는다. 기본 처리기는 NODE_ENV가 production이 아니면 스택 트레이스를 HTML로 내보낸다.",
    anchor: "등록-순서가-곧-동작이다",
  },
  {
    id: "express-middleware-3",
    post: "express-middleware",
    question:
      "Express 5에서 클라이언트가 Content-Type 없이 JSON 문자열을 보냈다. express.json()을 거친 뒤 req.body는?",
    choices: ["파싱된 객체", "빈 객체 {}", "400 에러가 난다", "undefined"],
    answer: 3,
    explanation:
      "파서는 타입이 JSON이 아니면 에러 없이 건너뛴다. Express 5에서는 이때 req.body가 undefined이고, Express 4에서는 {}였다. 그래서 5로 올린 뒤 req.body.x에서 TypeError가 나기도 한다.",
    anchor: "본문은-의심하면서-읽는다",
  },
  {
    id: "express-middleware-4",
    post: "express-middleware",
    question: "검증 미들웨어에서 safeParse에 성공한 뒤 req.body = r.data로 바꿔 끼우는 이유로 가장 알맞은 것은?",
    choices: [
      "스키마에 없는 필드(isAdmin, price 등)를 버려 매스 어사인먼트를 막으려고",
      "JSON 파싱을 다시 하지 않으려고",
      "응답 속도를 높이려고",
      "Express 5에서 req.body가 읽기 전용이라서",
    ],
    answer: 0,
    explanation:
      "zod의 z.object는 모르는 키를 버린 값을 돌려준다. 원본 본문을 그대로 DB에 넣으면 클라이언트가 섞어 보낸 필드까지 저장된다.",
    anchor: "검증은-핸들러-앞에서-한-번",
  },
  {
    id: "express-middleware-5",
    post: "express-middleware",
    question:
      "404를 응답한 줄에 return이 없어서 코드가 내려가 res.json을 한 번 더 불렀다. 무슨 일이 생기나?",
    choices: [
      "두 번째 응답이 첫 응답을 덮어쓴다",
      "클라이언트가 응답 두 개를 받는다",
      "클라이언트는 404를 받고, 서버에는 ERR_HTTP_HEADERS_SENT가 나며 그 사이 코드는 실행된다",
      "Express가 두 번째 호출을 조용히 무시한다",
    ],
    answer: 2,
    explanation:
      "헤더는 이미 나갔으니 다시 쓸 수 없어 에러가 난다. 사용자는 정상으로 보이지만 두 번째 응답 전의 부수 효과는 실제로 실행되므로 위험하다.",
    anchor: "응답은-한-번만-보낸다",
  },
  {
    id: "express-middleware-6",
    post: "express-middleware",
    question:
      "SIGTERM을 받자마자 server.close()를 부르는 Express 앱을 쿠버네티스에 배포하면 배포 때마다 502가 몇 건 난다. 왜인가?",
    choices: [
      "server.close()가 처리 중인 요청을 강제로 끊어서",
      "엔드포인트 제거가 퍼지기 전 몇 초 동안 들어온 새 요청이 닫힌 포트로 가서",
      "Node가 SIGTERM을 무시해서",
      "keep-alive 연결이 영원히 열려 있어서",
    ],
    answer: 1,
    explanation:
      "SIGTERM 전달과 엔드포인트 제거는 동시에 시작하고, LB가 알기까지 시간이 걸린다. 그래서 readiness를 먼저 실패시키고 몇 초 기다린 뒤 close()를 부른다. close()는 처리 중인 요청은 끝까지 기다린다.",
    anchor: "끄는-것도-요청-처리다",
  },
  {
    id: "express-middleware-7",
    post: "express-middleware",
    question: "Express 4 앱을 5로 올렸더니 앱이 뜰 때 PathError가 난다. 가장 그럴듯한 원인은?",
    choices: [
      "app.get(\"*\")처럼 이름 없는 와일드카드를 썼다",
      "async 핸들러를 썼다",
      "express.json()의 limit을 지정하지 않았다",
      "req.query를 읽었다",
    ],
    answer: 0,
    explanation:
      "Express 5의 경로 문법에서는 와일드카드에 이름이 필요해 /*splat처럼 쓴다. 이 문제는 뜨는 순간 드러나지만, req.query 파서와 req.body 기본값 변화는 특정 요청에서만 드러난다.",
    anchor: "4에서-5로-옮길-때-바뀌는-것",
  },
];
