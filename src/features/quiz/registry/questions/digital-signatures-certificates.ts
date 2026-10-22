import type { QuizQuestion } from "../types";

export const DIGITAL_SIGNATURES_CERTIFICATES: QuizQuestion[] = [
  {
    id: "digital-signatures-certificates-1",
    post: "digital-signatures-certificates",
    question: "전자 서명을 만들 때 쓰는 키와 검증할 때 쓰는 키는 각각 무엇인가?",
    choices: [
      "둘 다 공개 키",
      "서명은 개인 키, 검증은 공개 키",
      "서명은 공개 키, 검증은 개인 키",
      "둘 다 대칭 키",
    ],
    answer: 1,
    explanation:
      "서명은 나만 가진 개인 키로 만들고, 누구나 가진 공개 키로 검증한다. 암호화(공개 키로 잠그고 개인 키로 염)와 키의 역할이 반대다. 그래서 출처와 무결성을 동시에 보장한다.",
    anchor: "거꾸로-쓰는-자물쇠",
  },
  {
    id: "digital-signatures-certificates-2",
    post: "digital-signatures-certificates",
    question: "ECDSA로 서로 다른 두 메시지를 같은 nonce(k)로 서명하면 생기는 일은?",
    choices: [
      "서명이 더 짧아진다",
      "검증이 느려질 뿐 안전하다",
      "두 서명값에서 개인 키가 역산되어 통째로 유출된다",
      "서명값이 완전히 같아진다",
    ],
    answer: 2,
    explanation:
      "같은 nonce로 두 메시지를 서명하면 두 서명에서 개인 키를 대수적으로 계산해 낼 수 있다. 플레이스테이션3 키가 이렇게 털렸다. 그래서 nonce를 결정적으로 뽑고(RFC 6979), Ed25519는 이 방식이 내장돼 재사용 사고가 불가능하다.",
    anchor: "서명마다-달라지는-값과-그-함정",
  },
  {
    id: "digital-signatures-certificates-3",
    post: "digital-signatures-certificates",
    question: "새 서비스에 서명 알고리즘을 고를 때 Ed25519가 안전한 기본값으로 꼽히는 이유는?",
    choices: [
      "서명값이 가장 커서 안전하다",
      "RSA보다 호환성이 넓어서",
      "해시를 쓰지 않아서",
      "nonce를 결정적으로 뽑는 방식이 내장돼 재사용 사고가 구조적으로 불가능하다",
    ],
    answer: 3,
    explanation:
      "Ed25519는 서명이 64바이트로 짧고 빠르며, nonce를 개인 키와 메시지에서 결정적으로 뽑는 방식이 알고리즘에 내장돼 있다. 그래서 ECDSA의 치명적 약점인 nonce 재사용이 설계상 일어날 수 없다. RSA는 호환성이 넓지만 서명이 크고 느리다.",
    anchor: "서명마다-달라지는-값과-그-함정",
  },
  {
    id: "digital-signatures-certificates-4",
    post: "digital-signatures-certificates",
    question: "X.509 인증서란 본질적으로 무엇인가?",
    choices: [
      "이 공개 키가 이 이름(도메인)의 것이라는 문장에 CA가 서명한 것",
      "서버의 개인 키를 암호화해 저장한 파일",
      "TLS 세션 키를 담은 봉투",
      "비밀번호 해시 목록",
    ],
    answer: 0,
    explanation:
      "인증서는 공개 키에 도메인 이름과 유효 기간을 붙이고 CA가 그 묶음에 서명한 문서다. 그래서 issuer 필드가 가리키는 CA의 공개 키로 서명을 검증할 수 있고, 그 CA 인증서도 또 위로 검증되며 체인을 이룬다.",
    anchor: "인증서는-서명된-공개-키다",
  },
  {
    id: "digital-signatures-certificates-5",
    post: "digital-signatures-certificates",
    question: "서버가 리프 인증서만 보내고 중간 인증서를 빠뜨렸을 때, 브라우저는 열리는데 curl은 'unable to get local issuer certificate'로 실패하는 이유는?",
    choices: [
      "curl이 TLS 1.3을 지원하지 않아서",
      "브라우저는 과거에 받은 중간 인증서를 캐시해 체인을 이어 붙일 수 있지만 curl은 그렇지 않아서",
      "리프 인증서의 서명이 깨졌기 때문에",
      "curl이 루트 인증서를 신뢰하지 않아서",
    ],
    answer: 1,
    explanation:
      "리프의 발급자(중간 CA)가 없으면 체인이 끊긴다. 브라우저는 예전에 받아 둔 중간 인증서를 캐시에서 꺼내 넘어가기도 하지만, curl은 그 캐시가 없어 바로 실패한다. 서버가 리프와 중간을 함께(full chain) 보내야 한다.",
    anchor: "사슬을-손으로-만들고-끊어-본다",
  },
  {
    id: "digital-signatures-certificates-6",
    post: "digital-signatures-certificates",
    question: "중간 CA에 Basic Constraints의 pathlen:0을 박아 두면 무엇을 막나?",
    choices: [
      "그 CA가 인증서를 하나도 발급하지 못하게 막는다",
      "인증서 유효 기간이 0일이 된다",
      "리프 인증서의 서명을 금지한다",
      "그 CA 아래로 또 다른 중간 CA를 만들어 하위 인증서를 찍어 내는 것을 막는다",
    ],
    answer: 3,
    explanation:
      "pathlen:0은 그 CA 아래에 더 이상 하위 CA를 둘 수 없다는 제약이다. 리프는 발급할 수 있지만 또 다른 중간 CA는 못 만든다. 중간 CA가 몰래 하위 CA를 만들어 아무 도메인이나 찍어 내는 걸 막는다.",
    anchor: "사슬을-손으로-만들고-끊어-본다",
  },
  {
    id: "digital-signatures-certificates-7",
    post: "digital-signatures-certificates",
    question: "체인 검증을 멀쩡히 통과해도 서명만으로는 못 잡는 오발급(CA가 엉뚱한 도메인 인증서를 발급)을 드러내는 장치는?",
    choices: [
      "OCSP 스테이플링",
      "RSA-PSS 패딩",
      "Certificate Transparency 로그와 SCT",
      "pathlen 제약",
    ],
    answer: 2,
    explanation:
      "오발급된 인증서는 체인이 정상이라 서명 검증을 통과한다. Certificate Transparency는 공개 CA가 발급한 모든 인증서를 공개 로그에 올리게 하고 영수증(SCT)을 붙여, 몰래 발급한 인증서가 드러나게 한다. 폐기(OCSP 등)는 이미 유출된 키를 막는 별개 장치다.",
    anchor: "서명이-맞아도-남는-문제",
  },
];
