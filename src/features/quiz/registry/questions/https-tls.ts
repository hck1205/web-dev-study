import type { QuizQuestion } from "../types";

export const HTTPS_TLS: QuizQuestion[] = [
  {
    id: "https-tls-1",
    post: "https-tls",
    question: "HTTPS로 접속해도 같은 네트워크의 관찰자가 여전히 알 수 있는 것은? (ECH를 쓰지 않는 경우)",
    choices: [
      "요청 경로와 쿼리 문자열",
      "쿠키와 Authorization 헤더",
      "ClientHello의 SNI에 적힌 도메인 이름",
      "응답 본문의 HTML",
    ],
    answer: 2,
    explanation:
      "서버가 맞는 인증서를 고르려면 암호화 전에 이름을 알아야 해서 SNI는 평문으로 간다. 경로, 쿼리, 헤더, 본문은 모두 암호화된다. ECH는 진짜 ClientHello를 암호화해 이 이름까지 숨긴다.",
    anchor: "암호화해도-보이는-것",
  },
  {
    id: "https-tls-2",
    post: "https-tls",
    question: "서버가 루트 CA 인증서를 체인에 보내지 않아도 되는 이유는?",
    choices: [
      "루트 인증서는 용량이 커서 핸드셰이크가 느려지기 때문에",
      "브라우저는 자기 신뢰 저장소에 있는 루트만 믿기 때문에",
      "루트 CA는 이미 폐기되어 쓰지 않기 때문에",
      "TLS 1.3에서는 인증서를 아예 보내지 않기 때문에",
    ],
    answer: 1,
    explanation:
      "루트는 자기 서명 인증서라 검증할 위가 없고, 신뢰 저장소에 들어 있다는 사실이 믿음의 근거다. 서버가 보낸 루트가 있어도 브라우저는 자기 저장소의 루트로 판단한다. 대신 중간 인증서는 반드시 보내야 한다.",
    anchor: "믿음은-루트에서-내려온다",
  },
  {
    id: "https-tls-3",
    post: "https-tls",
    question: "TLS 1.3 핸드셰이크가 1-RTT로 끝날 수 있는 이유는?",
    choices: [
      "클라이언트가 ClientHello에 키 교환용 공개 값(key_share)을 미리 실어 보내서",
      "인증서 검증을 생략해서",
      "TCP 핸드셰이크와 합쳐서",
      "대칭키를 미리 서버와 공유해 두어서",
    ],
    answer: 0,
    explanation:
      "TLS 1.2는 방식을 정하는 왕복 뒤에 키 재료를 보냈지만, 1.3은 서버가 고를 만한 방식을 짐작해 key_share를 첫 메시지에 넣는다. 짐작이 틀리면 HelloRetryRequest로 왕복이 하나 늘어난다. TCP와 합치는 건 TLS가 아니라 QUIC 이야기다.",
    anchor: "tls-13-핸드셰이크-한-단계씩",
  },
  {
    id: "https-tls-4",
    post: "https-tls",
    question: "1년 뒤 서버의 인증서 개인 키가 유출됐다. ECDHE로 맺었던 과거 연결의 녹화본은 어떻게 되나?",
    choices: [
      "개인 키로 세션 키를 풀 수 있어 모두 복호화된다",
      "인증서가 만료됐다면 복호화된다",
      "0-RTT가 아닌 부분만 복호화된다",
      "세션 키 계산에 쓴 일회용 키가 이미 사라져 복호화할 수 없다",
    ],
    answer: 3,
    explanation:
      "ECDHE는 연결마다 일회용 키를 만들고 버리며, 인증서 키는 서명에만 쓴다. 그래서 인증서 키가 새도 과거 세션 키를 계산할 수 없다. 전방향 안전성이고, 개인 키 하나로 녹화본이 다 풀리는 건 RSA 키 교환의 문제였다.",
    anchor: "키를-보내지-않고-같은-키를-만든다",
  },
  {
    id: "https-tls-5",
    post: "https-tls",
    question: "TLS 1.3 0-RTT(early data)로 송금 POST를 받으면 생기는 위험은?",
    choices: [
      "요청 본문이 평문으로 노출된다",
      "공격자가 패킷을 그대로 다시 보내 같은 요청이 두 번 처리될 수 있다",
      "서버 인증서 검증이 실패한다",
      "응답이 한 RTT 늦어진다",
    ],
    answer: 1,
    explanation:
      "early data는 암호화되지만 재전송을 막을 수 없다. 공격자는 내용을 몰라도 복사한 패킷을 다시 보내면 되고, 서버는 정상 요청과 구별하지 못한다. 그래서 멱등한 요청만 0-RTT로 받고 나머지는 425 Too Early로 돌려보낸다.",
    anchor: "다시-올-때는-0-rtt-대신-재전송을-조심",
  },
  {
    id: "https-tls-6",
    post: "https-tls",
    question: "브라우저에서는 잘 열리는데 curl은 'unable to get local issuer certificate'로 실패한다. 가장 흔한 원인은?",
    choices: [
      "서버가 중간 인증서를 보내지 않았다",
      "인증서의 유효 기간이 지났다",
      "SAN에 도메인이 빠져 있다",
      "HSTS가 설정되지 않았다",
    ],
    answer: 0,
    explanation:
      "브라우저는 AIA로 중간 인증서를 받아 오거나 캐시와 내장 목록으로 빈칸을 메우지만 curl과 Node는 그러지 않는다. 만료나 이름 불일치였다면 브라우저도 경고를 띄웠을 것이다. leaf만 담긴 cert.pem 대신 fullchain.pem을 설정해서 고친다.",
    anchor: "자주-마주치는-인증서-오류",
  },
  {
    id: "https-tls-7",
    post: "https-tls",
    question: "로드 밸런서에서 TLS를 종료한 뒤 앱이 HTTPS 리다이렉트를 하다가 무한 루프가 생겼다. 원인은?",
    choices: [
      "로드 밸런서 인증서의 SAN이 틀렸다",
      "앱 서버에 mTLS가 켜져 있지 않다",
      "앱이 X-Forwarded-Proto를 보지 않고 자기에게 온 HTTP 요청만으로 판단했다",
      "HTTP/2를 쓰지 않았다",
    ],
    answer: 2,
    explanation:
      "로드 밸런서가 TLS를 풀고 HTTP로 넘기면 앱에는 모든 요청이 HTTP로 보인다. 앱은 원래 요청이 HTTPS였는지를 로드 밸런서가 붙여 주는 X-Forwarded-Proto로 판단해야 한다.",
    anchor: "tls를-어디서-끝낼까",
  },
];
