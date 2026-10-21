import type { QuizQuestion } from "../types";

export const ENCRYPTION_IN_TRANSIT: QuizQuestion[] = [
  {
    id: "encryption-in-transit-1",
    post: "encryption-in-transit",
    question: "앱이 PostgreSQL에 sslmode=require로 붙고 있다. 이 설정이 막지 못하는 것은?",
    choices: [
      "같은 망에서 패킷을 떠서 쿼리 내용을 읽는 것",
      "중간에서 DB인 척하는 서버에 연결되는 것",
      "평문으로 연결되는 것",
      "TLS 1.3이 아닌 버전으로 연결되는 것",
    ],
    answer: 1,
    explanation:
      "require는 암호화를 강제할 뿐 서버 인증서를 검사하지 않는다. 실습에서 루트 인증서 없이도 연결됐다. 상대가 진짜 DB인지 확인하려면 CA 번들을 주고 verify-full을 쓴다.",
    anchor: "db-드라이버의-암호화됨은-확인이-아니다",
  },
  {
    id: "encryption-in-transit-2",
    post: "encryption-in-transit",
    question: "TLS 1.3 mTLS 서버에 클라이언트 인증서 없이 curl로 붙었더니 35가 아니라 56번 오류가 났다. 왜 그런가?",
    choices: [
      "서버가 TCP 연결 자체를 거부했기 때문에",
      "curl이 TLS 1.3을 지원하지 않기 때문에",
      "TLS 1.3에서는 클라이언트가 자기 쪽 핸드셰이크를 끝내고 요청을 보낸 뒤에야 서버의 거절을 받기 때문에",
      "서버 인증서가 만료됐기 때문에",
    ],
    answer: 2,
    explanation:
      "TLS 1.3 클라이언트는 인증서(없으면 빈 Certificate)와 Finished를 보내면 핸드셰이크가 끝난 것으로 보고 바로 요청을 보낸다. 서버가 그다음에 거절하니 클라이언트에게는 받기 실패(56)로 보인다. 핸드셰이크 실패(35)로 보이지 않는다는 점이 장애 대응에서 헷갈리는 부분이다.",
    anchor: "인증서가-없을-때-실제로-나는-오류",
  },
  {
    id: "encryption-in-transit-3",
    post: "encryption-in-transit",
    question: "내부 CA가 발급한 진짜 인증서를 가진 edge-gw가 payments를 불렀는데 403이 났다. 가장 그럴듯한 이유는?",
    choices: [
      "edge-gw 인증서의 체인 검증이 실패했다",
      "mTLS로 신원은 확인됐지만 그 신원이 payments의 허용 목록에 없다",
      "payments 서버 인증서가 만료됐다",
      "SNI를 보내지 않았다",
    ],
    answer: 1,
    explanation:
      "체인이나 이름 문제였다면 핸드셰이크에서 끊겨 응답 코드 자체가 없다. 403은 핸드셰이크가 성공하고 앱까지 갔다는 뜻이다. mTLS는 누구인지만 확인하고, 무엇을 해도 되는지는 별도 인가 정책이 정한다.",
    anchor: "인증은-통과했는데-403이-나는-이유",
  },
  {
    id: "encryption-in-transit-4",
    post: "encryption-in-transit",
    question: "nginx에서 proxy_pass를 https://로 바꿔 백엔드 구간을 암호화했다. 다른 설정은 건드리지 않았다면 어떤 상태인가?",
    choices: [
      "백엔드 인증서까지 검사하는 완전한 re-encryption이다",
      "암호화는 되지만 proxy_ssl_verify 기본값이 off라 백엔드가 누구인지 확인하지 않는다",
      "nginx가 설정 오류로 시작하지 않는다",
      "백엔드에 클라이언트 인증서가 자동으로 전달된다",
    ],
    answer: 1,
    explanation:
      "nginx의 proxy_ssl_verify는 기본값이 off다. 검사하려면 켜고 trusted_certificate와 검사할 이름(proxy_ssl_name)을 맞춰야 한다. 백엔드가 mTLS를 요구하면 proxy_ssl_certificate도 따로 줘야 한다.",
    anchor: "중간에서-풀고-다시-잠그기",
  },
  {
    id: "encryption-in-transit-5",
    post: "encryption-in-transit",
    question: "프록시 뒤에서 앱 로그엔 아무것도 없는 502가 난다. nginx error 로그에 'while SSL handshaking to upstream'이 보인다면 먼저 볼 것은?",
    choices: [
      "앱의 DB 커넥션 풀",
      "브라우저와 nginx 사이의 공개 인증서",
      "백엔드 인증서의 이름·체인과 nginx가 검사하는 이름(proxy_ssl_name)",
      "앱의 응답 시간 타임아웃",
    ],
    answer: 2,
    explanation:
      "이 문구는 nginx와 백엔드 사이의 TLS에서 실패했다는 뜻이라 요청이 앱까지 가지 못했다. 실습에서도 검사할 이름을 잘못 적자 이 로그와 함께 502가 났다. 바깥 공개 인증서는 이 구간과 관계없다.",
    anchor: "중간에서-풀고-다시-잠그기",
  },
  {
    id: "encryption-in-transit-6",
    post: "encryption-in-transit",
    question: "cert-manager가 Secret의 인증서를 제때 갱신했는데도 만료 시각에 장애가 났다. 가장 흔한 원인은?",
    choices: [
      "cert-manager가 같은 인증서를 다시 썼다",
      "앱이 시작할 때 읽은 옛 인증서를 계속 쓰고 있었다(리로드 없음, subPath·환경 변수 마운트)",
      "CA가 갱신 요청을 거부했다",
      "renewBefore가 너무 길었다",
    ],
    answer: 1,
    explanation:
      "Secret이 바뀌어도 subPath나 환경 변수로 넣었으면 파일이 그대로고, 파일이 바뀌어도 시작할 때 한 번만 읽는 서버는 옛 인증서를 쓴다. 그래서 파일이 아니라 서버가 실제로 내미는 인증서의 만료를 재는 지표에 경보를 건다.",
    anchor: "인증서를-사람이-갈아-끼우지-않는다",
  },
  {
    id: "encryption-in-transit-7",
    post: "encryption-in-transit",
    question: "내부 CA를 교체할 때 올바른 순서는?",
    choices: [
      "발급자를 새 CA로 바꾼다 → 신뢰 번들에서 옛 CA를 뺀다 → 새 CA를 번들에 넣는다",
      "신뢰 번들을 새 CA로 통째로 바꾼다 → 발급자를 바꾼다",
      "신뢰 번들에 새 CA를 더한다 → 발급자를 새 CA로 바꾼다 → 모든 리프가 바뀐 뒤 옛 CA를 번들에서 뺀다",
      "모든 서비스를 동시에 재시작하며 한 번에 바꾼다",
    ],
    answer: 2,
    explanation:
      "번들을 먼저 넓혀야 새 CA로 발급된 인증서를 모두가 믿는다. 옛 CA는 그 CA로 발급된 리프가 남지 않은 걸 확인한 뒤에 뺀다. 순서를 거꾸로 하면 옛 번들을 가진 쪽과 새 인증서를 가진 쪽이 서로를 거절한다.",
    anchor: "ca를-바꿀-때는-겹쳐서-믿는다",
  },
];
