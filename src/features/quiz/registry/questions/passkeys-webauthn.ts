import type { QuizQuestion } from "../types";

export const PASSKEYS_WEBAUTHN: QuizQuestion[] = [
  {
    id: "passkeys-webauthn-1",
    post: "passkeys-webauthn",
    question: "패스키로 로그인할 때 서버 DB가 통째로 털려도 공격자가 그 정보로 로그인할 수 없는 이유는?",
    choices: [
      "서버에 저장된 비밀번호 해시가 아주 강한 알고리즘이라서",
      "서버에는 공개 키만 있고, 로그인에 필요한 개인 키는 사용자 인증기 밖으로 나오지 않아서",
      "자격 증명 id가 암호화되어 저장돼서",
      "challenge가 DB에 저장되지 않아서",
    ],
    answer: 1,
    explanation:
      "WebAuthn은 나눠 가진 비밀 대신 공개 키 쌍을 쓴다. 서버가 가진 공개 키로는 서명을 검증만 할 수 있고 만들 수는 없다. 해시가 강한지와는 상관없는 구조의 차이다.",
    anchor: "비밀번호는-서버와-나눠-가진-비밀이다",
  },
  {
    id: "passkeys-webauthn-2",
    post: "passkeys-webauthn",
    question:
      "evil.localhost 페이지가 navigator.credentials.get에 rpId로 \"localhost\"를 넣었다. 어떻게 되나?",
    choices: [
      "인증기가 localhost용 패스키로 서명해 준다",
      "사용자가 허용하면 서명이 나온다",
      "서명은 나오지만 서버가 카운터로 거절한다",
      "브라우저가 인증기를 부르기 전에 SecurityError로 거절한다",
    ],
    answer: 3,
    explanation:
      "rpId는 지금 도메인과 같거나 그 상위 도메인이어야 한다. evil.localhost는 localhost의 하위 도메인이 아니라서 브라우저가 SecurityError를 낸다. 사용자의 선택이 끼어들 틈이 없다.",
    anchor: "가짜-사이트에서는-열쇠가-나오지-않는다",
  },
  {
    id: "passkeys-webauthn-3",
    post: "passkeys-webauthn",
    question: "OTP는 실시간 피싱 중계에 뚫리는데 패스키는 막히는 가장 직접적인 이유는?",
    choices: [
      "패스키의 숫자가 OTP보다 길어서",
      "패스키는 30초가 아니라 5초 만에 만료돼서",
      "브라우저가 현재 origin을 clientDataJSON에 넣고 그것까지 서명되기 때문에",
      "패스키는 SMS로 오지 않아서",
    ],
    answer: 2,
    explanation:
      "OTP는 어느 사이트에 입력되는지 모르는 숫자라서 사람이 옮겨 적으면 그대로 쓰인다. 패스키는 브라우저가 적은 origin이 서명 안에 들어가므로, 가짜 사이트에서 만든 응답은 진짜 서버의 origin 검사에서 걸린다.",
    anchor: "가짜-사이트에서는-열쇠가-나오지-않는다",
  },
  {
    id: "passkeys-webauthn-4",
    post: "passkeys-webauthn",
    question: "로그인 응답을 가로채 다시 보내는 재전송을 막는 주된 장치는?",
    choices: [
      "검증이 끝나면 지우는 일회용 challenge",
      "signCount 비교",
      "자격 증명 id",
      "attestation 형식 none",
    ],
    answer: 0,
    explanation:
      "challenge는 서명 대상에 들어가므로, 서버가 쓴 challenge를 지우면 같은 응답은 다시 통과하지 못한다. signCount는 동기화 패스키가 0을 보내는 경우가 많아 보조 장치로만 본다.",
    anchor: "같은-응답을-두-번-보내면",
  },
  {
    id: "passkeys-webauthn-5",
    post: "passkeys-webauthn",
    question: "authenticatorData의 flags가 00011101이다. 무엇을 알 수 있나?",
    choices: [
      "본인 확인 없이 버튼만 눌렀다",
      "등록 응답이라 공개 키가 들어 있다",
      "카운터를 지원하지 않는 인증기다",
      "본인 확인을 거쳤고, 백업 가능한 열쇠이며 실제로 백업돼 있다",
    ],
    answer: 3,
    explanation:
      "0번 UP, 2번 UV, 3번 BE, 4번 BS가 켜져 있다. 동기화 패스키처럼 백업된 열쇠라는 뜻이다. 공개 키 포함을 뜻하는 AT는 6번 비트라 꺼져 있다.",
    anchor: "서명된-바이트를-뜯어보면",
  },
  {
    id: "passkeys-webauthn-6",
    post: "passkeys-webauthn",
    question: "개발 중 http://127.0.0.1:3000에서 패스키 등록을 눌렀더니 SecurityError가 났다. 가장 그럴듯한 원인은?",
    choices: [
      "HTTPS가 아니라서",
      "IP 주소는 rpId가 될 수 없어서",
      "가상 인증기가 꺼져 있어서",
      "excludeCredentials에 이미 등록된 열쇠가 있어서",
    ],
    answer: 1,
    explanation:
      "127.0.0.1도 보안 컨텍스트로 인정되지만 rpId는 도메인이어야 해서 \"invalid domain\" SecurityError가 난다. localhost로 열면 된다. 이미 등록된 열쇠가 있을 때는 InvalidStateError가 난다.",
    anchor: "패스키-로그인이-안-될-때-보는-곳",
  },
];
