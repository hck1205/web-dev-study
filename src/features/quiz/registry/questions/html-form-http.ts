import type { QuizQuestion } from "../types";

export const HTML_FORM_HTTP: QuizQuestion[] = [
  {
    id: "html-form-http-1",
    post: "html-form-http",
    question: "폼을 제출했는데 체크하지 않은 체크박스의 값은 서버에 어떻게 도착하나?",
    choices: [
      "이름=false 로 도착한다",
      "이름= 처럼 빈 값으로 도착한다",
      "아예 쌍이 만들어지지 않아 필드가 없다",
      "이름=off 로 도착한다",
    ],
    answer: 2,
    explanation:
      "체크하지 않은 체크박스는 form data set에서 빠진다. 그래서 서버는 해제와 미전송을 구별하지 못하고, 없는 필드를 false로 읽거나 같은 이름의 숨은 입력으로 기본값을 둬야 한다. 체크했는데 value가 없을 때 가는 값은 on이다.",
    anchor: "입력값이-쿼리-문자열이-되기까지",
  },
  {
    id: "html-form-http-2",
    post: "html-form-http",
    question: "urlencoded 폼으로 전화번호 \"+82\"를 보냈는데 서버에서 \" 82\"가 됐다. 원인은?",
    choices: [
      "서버가 UTF-8 대신 Latin-1로 해석해서",
      "+를 %2B로 인코딩하지 않아 서버가 공백으로 읽어서",
      "브라우저가 숫자 앞의 기호를 지워서",
      "Content-Length가 한 바이트 모자라서",
    ],
    answer: 1,
    explanation:
      "이 형식에서 +는 공백을 뜻하므로, 값에 든 진짜 +는 %2B로 보내야 한다. 문자열을 직접 이어 붙이면 이 규칙이 빠진다. URLSearchParams나 브라우저의 폼 제출은 알아서 %2B로 바꾼다.",
    anchor: "공백은-더하기-나머지는-퍼센트로",
  },
  {
    id: "html-form-http-3",
    post: "html-form-http",
    question: "fetch로 FormData를 보내면서 Content-Type: multipart/form-data 를 직접 적으면?",
    choices: [
      "boundary 값이 빠져 서버가 본문을 나누지 못한다",
      "브라우저가 헤더를 무시하고 JSON으로 보낸다",
      "CORS preflight가 강제로 일어나 요청이 막힌다",
      "아무 문제 없다. 브라우저가 같은 값을 넣기 때문이다",
    ],
    answer: 0,
    explanation:
      "multipart 본문은 헤더의 boundary 값으로 잘린다. FormData를 body로 넘기면 브라우저가 경계 값을 만들어 헤더에 붙이는데, 직접 적은 헤더에는 그 값이 없어 서버 파싱이 실패한다. 헤더는 비워 둔다.",
    anchor: "fetch로-보낼-때는-formdata를-쓴다",
  },
  {
    id: "html-form-http-4",
    post: "html-form-http",
    question: "주문 폼 제출 뒤 서버가 303 See Other로 결과 주소를 주는 이유는?",
    choices: [
      "주문 결과를 브라우저가 캐시하지 못하게 하려고",
      "POST 본문을 결과 주소로 그대로 다시 보내게 하려고",
      "마지막 요청을 GET으로 바꿔 새로고침해도 주문이 다시 가지 않게 하려고",
      "HTTPS로 강제로 옮기려고",
    ],
    answer: 2,
    explanation:
      "303은 다음 요청을 무조건 GET으로 하라는 뜻이라, 결과 화면의 새로고침은 GET만 다시 보낸다. 이게 PRG 패턴이다. POST를 그대로 다시 보내는 것은 307·308의 동작이라 PRG가 되지 않는다.",
    anchor: "새로고침하면-두-번-주문된다",
  },
  {
    id: "html-form-http-5",
    post: "html-form-http",
    question: "공격자 사이트의 숨은 폼이 은행으로 POST를 보낼 때 CORS가 막아 주지 못하는 이유는?",
    choices: [
      "CORS는 GET 요청에만 적용돼서",
      "폼 제출은 preflight 없는 단순 요청이고, CORS는 응답을 JS가 읽는 것만 막아서",
      "브라우저가 폼 요청에는 Origin 헤더를 붙이지 않아서",
      "은행 서버가 Access-Control-Allow-Origin을 *로 두었기 때문에만",
    ],
    answer: 1,
    explanation:
      "폼의 세 가지 enctype은 모두 단순 요청이라 서버에 바로 도착해 처리된다. CORS는 다른 출처의 응답 읽기를 막을 뿐이다. 그래서 SameSite 쿠키와 CSRF 토큰으로 따로 막는다.",
    anchor: "다른-사이트도-내-서버로-폼을-보낼-수-있다",
  },
  {
    id: "html-form-http-6",
    post: "html-form-http",
    question: "로그인 폼을 method=\"get\"으로 만들면 생기는 문제로 가장 알맞은 것은?",
    choices: [
      "HTTPS에서는 GET 요청이 암호화되지 않는다",
      "비밀번호가 URL에 실려 방문 기록, 서버 로그, Referer에 남는다",
      "GET 요청에는 쿠키가 실리지 않아 로그인이 안 된다",
      "브라우저가 GET 폼의 비밀번호 필드를 비워서 보낸다",
    ],
    answer: 1,
    explanation:
      "GET 폼은 값을 쿼리 문자열로 주소에 붙인다. TLS는 길에서 엿보는 것만 막고, 양 끝의 방문 기록과 접근 로그, 다른 사이트로 가는 Referer에는 주소가 그대로 남는다.",
    anchor: "주소에-실리면-남는다",
  },
  {
    id: "html-form-http-7",
    post: "html-form-http",
    question: "input에 required와 pattern을 넣었는데도 서버 검증이 꼭 필요한 이유는?",
    choices: [
      "브라우저 검증은 curl이나 다른 사이트의 폼처럼 브라우저를 거치지 않는 요청을 막지 못해서",
      "pattern은 부분 일치라서 잘못된 값이 통과하기 때문에",
      "required는 공백 한 칸을 빈 값으로 보지 않기 때문에",
      "서버가 검증하지 않으면 브라우저가 제출을 거부하기 때문에",
    ],
    answer: 0,
    explanation:
      "브라우저 검증은 개발자 도구로 지우거나 요청을 직접 만들면 그대로 우회된다. 서버는 요청이 어디서 왔는지 모르니 모든 값을 다시 검증해야 한다. 참고로 pattern은 부분 일치가 아니라 값 전체와 맞아야 통과한다.",
    anchor: "브라우저-검증은-친절일-뿐이다",
  },
  {
    id: "html-form-http-8",
    post: "html-form-http",
    question: "손으로 '/search?q=' + keyword 처럼 주소를 이어 붙였더니 검색어 'C++'가 서버에서 'C'와 공백 두 칸으로 보인다. 이유는?",
    choices: [
      "서버가 UTF-8이 아닌 인코딩으로 풀어서",
      "브라우저가 +를 %2B로 바꿔 보내서",
      "폼 형식 규칙에서 +는 공백이라, 인코딩하지 않은 +가 공백으로 풀려서",
      "쿼리 문자열은 특수문자를 담을 수 없어서",
    ],
    answer: 2,
    explanation:
      "폼 형식(URLSearchParams)은 +를 공백으로 푼다. 브라우저 폼은 +를 %2B로 바꿔 보내니 문제가 없지만, 문자열을 그냥 이어 붙이면 +가 그대로 나가 공백이 된다. 보내는 쪽은 URLSearchParams나 encodeURIComponent로 만든다.",
    anchor: "보낸-값과-받은-값이-다를-때",
  },
];
