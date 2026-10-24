import type { QuizQuestion } from "../types";

export const SOAP_AND_SOA: QuizQuestion[] = [
  {
    id: "soap-and-soa-1",
    post: "soap-and-soa",
    question: "SOAP API는 연산이 여러 개여도 엔드포인트가 하나뿐인 경우가 많다. 왜 그런가?",
    choices: [
      "SOAP은 GET만 쓰기 때문이다",
      "WSDL이 주소를 하나만 적을 수 있게 제한하기 때문이다",
      "무엇을 부르는지가 URL이 아니라 봉투의 Body(와 SOAPAction)에 들어 있어 HTTP는 운송 수단으로만 쓰기 때문이다",
      "SOAP은 WebSocket 위에서만 동작하기 때문이다",
    ],
    answer: 2,
    explanation:
      "SOAP은 연산 중심이라 요청 봉투 안의 요소가 어떤 연산인지 말한다. 그래서 모든 연산이 같은 주소로 POST되고, HTTP 메서드와 상태 코드는 크게 의미를 갖지 않는다. WSDL은 포트마다 주소를 따로 적을 수 있다.",
    anchor: "봉투-하나에-담기는-것",
  },
  {
    id: "soap-and-soa-2",
    post: "soap-and-soa",
    question: "WSDL에서 '어떤 연산이 있는가'와 '어떤 형식으로 실어 보내는가'를 각각 정하는 부분은?",
    choices: [
      "portType과 binding",
      "types와 message",
      "service와 types",
      "message와 service",
    ],
    answer: 0,
    explanation:
      "portType이 연산 목록(인터페이스), binding이 SOAP 버전·document/literal 같은 전송 형식, service가 실제 주소다. types와 message는 데이터 모양을 정한다. 이렇게 나뉘어 있어 같은 인터페이스를 여러 바인딩으로 열 수 있다.",
    anchor: "wsdl-한-장이-계약이다",
  },
  {
    id: "soap-and-soa-3",
    post: "soap-and-soa",
    question: "SOAP 1.1 서버가 없는 계좌 조회에 HTTP 500과 faultcode soap:Client를 돌려줬다. 올바른 해석은?",
    choices: [
      "서버 장애이니 즉시 재시도한다",
      "500이니 상대 서버의 배포 실패를 의심한다",
      "Fault는 무시하고 본문의 첫 요소만 읽는다",
      "규격상 Fault는 500으로 오며, Client는 요청이 잘못됐다는 뜻이라 같은 요청을 재시도해도 소용없다",
    ],
    answer: 3,
    explanation:
      "SOAP 1.1은 클라이언트 잘못이어도 Fault를 HTTP 500으로 보낸다. 그래서 상태 코드가 아니라 faultcode를 봐야 한다. Server라면 재시도를 고려할 수 있지만 Client는 요청을 고쳐야 한다.",
    anchor: "실패는-fault로-온다",
  },
  {
    id: "soap-and-soa-4",
    post: "soap-and-soa",
    question: "SOAP 1.1에서 1.2로 바꿀 때 요청에서 달라지는 것으로 맞는 것은?",
    choices: [
      "HTTP 메서드가 POST에서 PUT으로 바뀐다",
      "Content-Type이 application/soap+xml이 되고 액션이 그 매개변수로 들어가며, 봉투 네임스페이스도 바뀐다",
      "Body 요소가 없어진다",
      "WSDL 없이도 호출할 수 있게 된다",
    ],
    answer: 1,
    explanation:
      "1.1은 text/xml과 SOAPAction 헤더를, 1.2는 application/soap+xml의 action 매개변수를 쓴다. 봉투 네임스페이스도 schemas.xmlsoap.org에서 www.w3.org/2003/05/soap-envelope로 바뀌어, 버전이 어긋나면 서버가 바로 거절한다.",
    anchor: "curl로-직접-보내-본다",
  },
  {
    id: "soap-and-soa-5",
    post: "soap-and-soa",
    question: "WS-Security UsernameToken(PasswordDigest) 인증이 비밀번호를 여러 번 확인해도 계속 실패한다. 먼저 볼 것은?",
    choices: [
      "XML 접두사(acc:)를 다른 글자로 바꿔 본다",
      "HTTP를 GET으로 바꿔 본다",
      "두 서버의 시계 차이 때문에 Timestamp나 Created가 만료로 판정되는지 본다",
      "WSDL의 portType 이름을 바꿔 본다",
    ],
    answer: 2,
    explanation:
      "PasswordDigest는 nonce와 생성 시각을 섞은 해시를 보내고, 서버는 오래된 Created나 재사용된 nonce를 거절한다. 시계가 몇 분 어긋나면 비밀번호가 맞아도 인증 실패로만 보인다. 접두사는 네임스페이스 URI만 같으면 무엇이든 된다.",
    anchor: "봉투에-붙이는-보안-ws-security",
  },
  {
    id: "soap-and-soa-6",
    post: "soap-and-soa",
    question: "ESB 중심 SOA가 조직의 병목이 된 가장 큰 이유는?",
    choices: [
      "변환·라우팅·조율과 함께 업무 규칙까지 버스 안으로 들어가, 통합 팀 하나가 모든 변경과 배포를 쥐게 됐기 때문이다",
      "XML이 JSON보다 커서 네트워크가 막혔기 때문이다",
      "서비스를 너무 잘게 쪼갰기 때문이다",
      "ESB는 동기 호출을 지원하지 않았기 때문이다",
    ],
    answer: 0,
    explanation:
      "연결을 한곳에 모은 건 좋았지만 규칙까지 버스에 쌓이면서 어떤 연동을 바꾸든 통합 팀 일정에 줄을 서고 버스 전체를 다시 배포·테스트해야 했다. 공통 데이터 모델도 모든 부서의 요구를 담느라 바꾸기 어려워졌다.",
    anchor: "esb가-무거워진-이유",
  },
  {
    id: "soap-and-soa-7",
    post: "soap-and-soa",
    question: "마이크로서비스의 'smart endpoints and dumb pipes'를 어기는 예는?",
    choices: [
      "서비스마다 자기 DB를 갖는다",
      "서비스끼리 이벤트를 주고받는다",
      "게이트웨이에서 인증과 속도 제한을 처리한다",
      "API 게이트웨이에 요청 본문 변환과 업무 분기, 여러 서비스 조합 로직을 계속 넣는다",
    ],
    answer: 3,
    explanation:
      "통로(게이트웨이, 브로커)에 업무 규칙이 쌓이면 다시 ESB처럼 중앙 팀의 병목이 된다. 인증, 속도 제한, 라우팅 같은 공통 관심사는 게이트웨이의 원래 몫이고, 업무 로직은 서비스나 BFF가 맡는다.",
    anchor: "마이크로서비스는-무엇을-바꿨나",
  },
];
