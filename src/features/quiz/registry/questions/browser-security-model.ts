import type { QuizQuestion } from "../types";

export const BROWSER_SECURITY_MODEL: QuizQuestion[] = [
  {
    id: "browser-security-model-1",
    post: "browser-security-model",
    question: "다음 중 https://example.com과 같은 출처인 것은?",
    choices: [
      "http://example.com",
      "https://www.example.com",
      "https://example.com:8443",
      "https://example.com:443/cart?id=1",
    ],
    answer: 3,
    explanation:
      "출처는 스킴, 호스트, 포트이고 생략한 https 포트는 443으로 본다. 경로와 쿼리는 출처에 들어가지 않는다. 스킴이 http이거나, www가 붙거나, 포트가 8443이면 모두 다른 출처다.",
    anchor: "출처는-세-조각을-모두-비교한다",
  },
  {
    id: "browser-security-model-2",
    post: "browser-security-model",
    question: "api.example.test가 SameSite=Strict 쿠키를 심었다. app.example.test 페이지가 credentials를 포함해 api.example.test로 fetch하면 쿠키는?",
    choices: [
      "출처가 달라서 붙지 않는다",
      "같은 사이트라서 붙는다. SameSite는 출처가 아니라 사이트를 본다",
      "Lax 쿠키만 붙고 Strict 쿠키는 빠진다",
      "CORS 사전 요청이 성공해야만 쿠키가 저장된다",
    ],
    answer: 1,
    explanation:
      "두 호스트는 다른 출처지만 eTLD+1이 같아 같은 사이트다. 실험에서도 Strict 쿠키까지 붙었고, evil.test에서 보낸 요청에는 아무 쿠키도 없었다. 응답을 읽으려면 CORS 허락은 따로 필요하다.",
    anchor: "출처와-사이트는-다른-말이다",
  },
  {
    id: "browser-security-model-3",
    post: "browser-security-model",
    question: "같은 출처 정책 아래에서 app.example.test 페이지가 evil.test를 상대로 할 수 없는 것은?",
    choices: [
      "evil.test의 이미지를 img로 걸어 화면에 보이기",
      "evil.test로 폼 형식의 POST 요청 보내기",
      "evil.test의 응답 본문을 fetch로 읽어 오기(상대가 CORS 허락을 하지 않은 경우)",
      "evil.test의 스크립트를 script 태그로 불러 실행하기",
    ],
    answer: 2,
    explanation:
      "같은 출처 정책은 쓰기와 임베드는 두고 읽기를 막는다. 요청은 서버까지 가지만 응답을 자바스크립트에 넘기지 않아 TypeError가 난다. 폼 POST가 열려 있다는 것이 CSRF가 생기는 이유다.",
    anchor: "보내고-거는-건-되고-읽는-건-안-된다",
  },
  {
    id: "browser-security-model-4",
    post: "browser-security-model",
    question: "message 이벤트에서 event.origin.endsWith(\"example.com\")으로 출처를 확인했다. 무엇이 문제인가?",
    choices: [
      "notexample.com 같은 다른 도메인도 통과한다. 허용 목록과 문자열 전체가 같은지 비교해야 한다",
      "event.origin에는 경로가 붙어 있어 비교가 항상 실패한다",
      "endsWith는 대소문자를 구분하지 않아 위험하다",
      "출처 확인은 보내는 쪽 targetOrigin이 대신하므로 필요 없다",
    ],
    answer: 0,
    explanation:
      "endsWith는 앞부분만 다른 남의 도메인을, includes는 example.com.evil.test 같은 주소를 통과시킨다. 출처는 정확히 같은지 보고 event.source도 확인한다. targetOrigin은 보내는 쪽의 안전장치라 받는 쪽 확인을 대신하지 못한다.",
    anchor: "다른-출처-창과-대화하는-통로-postmessage",
  },
  {
    id: "browser-security-model-5",
    post: "browser-security-model",
    question: "부모와 같은 출처 문서를 iframe sandbox=\"allow-scripts allow-same-origin\"으로 띄우면 위험한 이유는?",
    choices: [
      "allow-same-origin이 있으면 팝업을 마음대로 띄울 수 있어서",
      "두 토큰을 함께 쓰면 브라우저가 sandbox를 무시하고 경고를 낸다",
      "iframe의 출처가 null이 되어 postMessage를 받을 수 없어서",
      "스크립트가 부모 DOM에 접근해 자기 iframe의 sandbox 속성을 지우고 다시 불러올 수 있어서",
    ],
    answer: 3,
    explanation:
      "같은 출처가 된 스크립트는 부모 문서를 만질 수 있으니 sandbox를 스스로 풀어 버릴 수 있다. allow-same-origin이 없으면 iframe은 불투명 출처 null을 받아 부모의 쿠키와 저장소를 못 본다. 믿기 어려운 HTML은 별도 사이트에서 내려 준다.",
    anchor: "iframe에-권한을-덜-주는-sandbox",
  },
  {
    id: "browser-security-model-6",
    post: "browser-security-model",
    question: "브라우저가 사이트마다 렌더러 프로세스를 나누게 된 직접적인 이유는?",
    choices: [
      "탭 하나가 죽어도 다른 탭이 살아 있게 하려고",
      "같은 출처 정책을 검사하는 코드가 너무 느려서",
      "스펙터 같은 부채널 공격으로 같은 프로세스 메모리에 있는 다른 사이트 데이터를 읽을 수 있게 되어서",
      "서드파티 쿠키를 막기 위해서",
    ],
    answer: 2,
    explanation:
      "브라우저 코드가 읽기를 막아도 데이터가 같은 프로세스 메모리에 있으면 CPU 부채널로 새어 나온다. 그래서 다른 사이트 데이터가 애초에 들어오지 않게 프로세스를 나눴다. 안정성도 좋아지지만 사이트 격리가 기본이 된 계기는 스펙터다.",
    anchor: "브라우저가-프로세스까지-나누는-이유",
  },
  {
    id: "browser-security-model-7",
    post: "browser-security-model",
    question: "태그 매니저 스크립트에 SRI integrity 해시를 걸려고 한다. 어떻게 되나?",
    choices: [
      "태그 매니저도 SRI로 안전하게 고정할 수 있다",
      "내용이 계속 바뀌는 스크립트라 업데이트될 때마다 해시가 맞지 않아 실행이 막힌다",
      "SRI는 같은 출처 스크립트에만 걸 수 있다",
      "crossorigin 속성 없이도 해시가 맞으면 실행된다",
    ],
    answer: 1,
    explanation:
      "SRI는 받은 내용의 해시가 적은 값과 다르면 실행하지 않으므로 내용이 고정된 파일에만 맞다. 다른 출처 응답 내용을 확인하므로 crossorigin 속성과 CORS 허락도 필요하다. 바뀌는 스크립트는 CSP로 출처를 좁히거나 민감한 페이지에서 빼는 식으로 다룬다.",
    anchor: "내가-부른-스크립트는-내-권한으로-돈다",
  },
];
