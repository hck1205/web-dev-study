import type { QuizQuestion } from "../types";

export const CORS: QuizQuestion[] = [
  {
    id: "cors-1",
    post: "cors",
    question: "다음 중 https://app.example.com 과 같은 출처(origin)인 것은?",
    choices: [
      "http://app.example.com",
      "https://api.example.com",
      "https://app.example.com:443/settings?tab=1",
      "https://app.example.com:8443",
    ],
    answer: 2,
    explanation:
      "출처는 스킴, 호스트, 포트 세 가지로 정해지고 경로와 쿼리는 보지 않는다. https의 기본 포트가 443이라 :443을 적어도 같은 출처다. 스킴이나 호스트, 포트가 하나라도 다르면 다른 출처다.",
    anchor: "출처를-가르는-세-가지",
  },
  {
    id: "cors-2",
    post: "cors",
    question: "단순 GET 요청에서 CORS 에러가 났을 때 실제로 일어난 일로 맞는 것은?",
    choices: [
      "브라우저가 요청을 보내기 전에 막아서 서버는 아무것도 받지 못했다",
      "서버가 Origin을 보고 요청을 거절했다",
      "요청은 서버에서 처리됐고, 브라우저가 응답을 페이지 코드에 넘겨주지 않았다",
      "네트워크 중간의 방화벽이 응답을 차단했다",
    ],
    answer: 2,
    explanation:
      "단순 요청은 일단 서버로 가서 처리되고, 응답에 허락 헤더가 없으면 브라우저가 읽기를 막는다. 그래서 서버 로그에는 200이 찍혀 있고, 페이지 코드는 TypeError만 받는다.",
    anchor: "서버는-응답했는데-콘솔은-빨갛다",
  },
  {
    id: "cors-3",
    post: "cors",
    question: "다음 중 preflight(OPTIONS) 요청이 먼저 나가지 않는 요청은?",
    choices: [
      "Content-Type: application/json 으로 보내는 POST",
      "Content-Type: application/x-www-form-urlencoded 로 보내는 POST",
      "Authorization 헤더를 붙인 GET",
      "본문 없는 DELETE",
    ],
    answer: 1,
    explanation:
      "메서드가 GET·HEAD·POST이고, 안전 목록 밖의 헤더가 없고, Content-Type이 폼·multipart·text/plain이면 단순 요청이다. JSON 본문, Authorization 헤더, DELETE 메서드는 각각 하나만으로도 preflight를 일으킨다.",
    anchor: "먼저-물어보는-요청-preflight",
  },
  {
    id: "cors-4",
    post: "cors",
    question: "fetch에 credentials: \"include\" 를 쓸 때 서버 응답으로 올바른 조합은?",
    choices: [
      "Access-Control-Allow-Origin: * 와 Access-Control-Allow-Credentials: true",
      "Access-Control-Allow-Origin: https://app.example.com 와 Access-Control-Allow-Credentials: true",
      "Access-Control-Allow-Origin: * 만 보내면 된다",
      "Access-Control-Allow-Credentials: false 와 정확한 출처",
    ],
    answer: 1,
    explanation:
      "쿠키를 실은 요청의 응답을 읽으려면 Allow-Credentials: true와 정확한 출처가 필요하다. *와 쿠키를 함께 허락하면 모든 사이트가 사용자 권한으로 응답을 읽을 수 있어서 스펙이 이 조합을 금지한다.",
    anchor: "쿠키까지-보내려면",
  },
  {
    id: "cors-5",
    post: "cors",
    question: "요청의 Origin에 따라 Access-Control-Allow-Origin 값을 바꿔 줄 때 함께 보내야 하는 헤더는?",
    choices: ["Vary: Origin", "Cache-Control: no-store", "Access-Control-Max-Age: 0", "Access-Control-Expose-Headers: Origin"],
    answer: 0,
    explanation:
      "Vary: Origin은 응답이 Origin 헤더에 따라 달라진다는 걸 캐시에 알린다. 없으면 CDN이나 브라우저가 다른 출처용 응답을 재사용해서 간헐적인 CORS 에러가 생긴다.",
    anchor: "허락-헤더-하나씩",
  },
  {
    id: "cors-6",
    post: "cors",
    question: "CORS와 CSRF의 관계로 맞는 것은?",
    choices: [
      "Allow-Origin을 좁게 설정하면 CSRF가 막힌다",
      "CORS는 응답 읽기를 막을 뿐이라, 요청이 실행되기만 하면 되는 CSRF는 따로 막아야 한다",
      "CSRF는 preflight가 항상 막아 준다",
      "CORS를 쓰면 SameSite 쿠키 설정이 필요 없다",
    ],
    answer: 1,
    explanation:
      "폼 전송 같은 단순 요청은 CORS와 상관없이 서버에서 처리된다. CSRF 공격자는 응답을 읽을 필요가 없으니 CORS로는 막히지 않고, SameSite 쿠키와 CSRF 토큰으로 막는다.",
    anchor: "cors는-csrf를-막지-못한다",
  },
  {
    id: "cors-7",
    post: "cors",
    question: "Postman이나 curl로는 잘 되는 API가 브라우저에서만 CORS 에러가 나는 이유는?",
    choices: [
      "Postman이 자동으로 Access-Control-Allow-Origin 헤더를 추가해서",
      "서버가 User-Agent를 보고 브라우저 요청만 거절해서",
      "CORS 검사는 브라우저가 하는 것이고, 브라우저가 아닌 클라이언트는 검사하지 않아서",
      "curl은 HTTP/1.0을 써서 CORS 대상이 아니라서",
    ],
    answer: 2,
    explanation:
      "서버는 허락 헤더를 적어 줄 뿐이고 그 헤더를 읽고 지키는 건 브라우저다. 그래서 CORS는 API 접근 제어 수단이 아니고, 데이터 보호는 인증과 인가로 해야 한다.",
    anchor: "cors는-브라우저가-지킨다",
  },
  {
    id: "cors-8",
    post: "cors",
    question: "평소엔 되는데 큰 파일을 올릴 때만 콘솔에 CORS 에러가 난다. nginx가 add_header로 허락 헤더를 붙이는 구성이라면 가장 그럴듯한 원인은?",
    choices: [
      "업로드 요청은 항상 preflight를 건너뛰어서",
      "Access-Control-Allow-Origin에 *를 써야 해서",
      "브라우저가 큰 요청에는 Origin 헤더를 붙이지 않아서",
      "413 같은 에러 응답에는 always 없이 add_header가 적용되지 않아서",
    ],
    answer: 3,
    explanation:
      "nginx의 add_header는 기본으로 200, 204, 301 같은 일부 응답에만 붙고 4xx·5xx에는 붙지 않는다. 413 응답에 허락 헤더가 없으니 브라우저는 CORS 에러로 보여 주고 진짜 원인을 가린다. always를 붙이면 모든 응답에 헤더가 붙는다.",
    anchor: "평소엔-되다가-가끔만-나는-cors-에러",
  },
];
