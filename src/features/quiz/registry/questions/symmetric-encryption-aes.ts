import type { QuizQuestion } from "../types";

export const SYMMETRIC_ENCRYPTION_AES: QuizQuestion[] = [
  {
    id: "symmetric-encryption-aes-1",
    post: "symmetric-encryption-aes",
    question: "같은 쿠폰 문자열을 AES로 암호화했는데 두 암호문의 뒷부분이 똑같이 나왔다. 어떤 모드일 가능성이 가장 큰가?",
    choices: ["AES-GCM", "AES-CTR", "AES-ECB", "AES-CBC(무작위 IV)"],
    answer: 2,
    explanation:
      "ECB는 블록마다 독립적으로 암호화해서 같은 평문 블록이 항상 같은 암호문 블록이 된다. 그래서 공통된 꼬리 부분이 같은 암호문으로 찍힌다. CBC는 무작위 IV로 블록을 사슬로 묶고 GCM·CTR도 nonce가 들어가서 같은 평문이라도 매번 다른 암호문이 된다.",
    anchor: "블록을-따로따로-잠그면-무늬가-남는다",
  },
  {
    id: "symmetric-encryption-aes-2",
    post: "symmetric-encryption-aes",
    question: "ECB로 암호화한 토큰이 위험한 이유로 글에서 든 것은?",
    choices: [
      "암호문이 평문보다 길어져 저장 공간을 많이 쓴다",
      "블록이 독립적이라 암호문 블록을 오려 붙여 다른 메시지를 만들 수 있다",
      "IV를 매번 새로 만들어야 해서 느리다",
      "복호화할 때 패딩 오라클이 생긴다",
    ],
    answer: 1,
    explanation:
      "ECB는 블록 사이에 연결이 없어서, 서로 다른 토큰에서 얻은 블록을 재배치해 role=admin 같은 위조 토큰을 만들 수 있다. 글의 cut-and-paste 예제가 바로 이것이다. 암호를 깬 게 아니라 멀쩡한 블록을 재배치한 것이다.",
    anchor: "블록을-따로따로-잠그면-무늬가-남는다",
  },
  {
    id: "symmetric-encryption-aes-3",
    post: "symmetric-encryption-aes",
    question: "CBC 모드에서 IV에 대한 설명으로 옳은 것은?",
    choices: [
      "비밀로 유지해야 하므로 키처럼 안전하게 보관한다",
      "비밀일 필요는 없지만 예측 불가능하게 매번 새로 뽑아야 한다",
      "한 번 정하면 고정해서 재사용하는 것이 성능에 좋다",
      "평문 길이에 따라 자동으로 결정된다",
    ],
    answer: 1,
    explanation:
      "IV는 암호문 앞에 붙여 보내도 되는 공개 값이지만, 예측 가능하거나 고정되면 같은 평문이 같은 암호문이 되는 ECB류 누수가 첫 블록에서 되살아난다. 그래서 매번 예측 불가능하게 새로 뽑는다.",
    anchor: "앞-블록을-다음-블록에-섞는다",
  },
  {
    id: "symmetric-encryption-aes-4",
    post: "symmetric-encryption-aes",
    question: "공격자가 키 없이 CBC 암호문의 IV 바이트를 뒤집었더니 복호화된 평문의 role=user가 role=root로 바뀌고 오류 없이 복호화됐다. 이것이 보여 주는 CBC의 한계는?",
    choices: [
      "기밀성은 주지만 무결성은 주지 못한다",
      "무결성은 주지만 기밀성은 주지 못한다",
      "키 길이가 짧으면 안전하지 않다",
      "IV가 너무 짧으면 충돌한다",
    ],
    answer: 0,
    explanation:
      "CBC 평문 블록은 앞 암호문 블록(첫 블록은 IV)과 XOR한 결과라서, 바이트를 뒤집으면 평문이 그만큼 뒤집힌다. 키 없이 평문을 조작할 수 있고 복호화는 성공한다. 그래서 CBC는 기밀성만 주고, 변조를 막으려면 MAC을 따로 걸거나 AEAD를 써야 한다.",
    anchor: "암호문을-바꾸면-평문이-원하는-대로-바뀐다",
  },
  {
    id: "symmetric-encryption-aes-5",
    post: "symmetric-encryption-aes",
    question: "node:crypto로 AES-GCM을 복호화할 때 decipher.update()가 돌려준 평문을 final() 호출 전에 쓰면 안 되는 이유는?",
    choices: [
      "update()는 암호문을 아직 복호화하지 않은 상태로 반환한다",
      "update()는 패딩을 떼지 않은 평문을 반환한다",
      "태그 검증은 final()에서 일어나므로 update() 결과는 위조 여부가 확인되지 않은 값이다",
      "update()는 nonce를 설정하기 전이라 결과가 비어 있다",
    ],
    answer: 2,
    explanation:
      "GCM의 인증 태그 검증은 final()에서 이뤄진다. update()가 내놓는 평문은 검증 전 값이라, 변조된 암호문도 평문 비슷한 바이트가 나온다. 반드시 final()까지 예외 없이 끝난 뒤에 평문을 써야 한다.",
    anchor: "잠그면서-위조까지-잡는다",
  },
  {
    id: "symmetric-encryption-aes-6",
    post: "symmetric-encryption-aes",
    question: "AES-GCM에서 같은 키로 같은 nonce를 두 번 쓰면 가장 심각하게 무엇이 깨지나?",
    choices: [
      "암호문 길이가 길어진다",
      "복호화 속도만 느려진다",
      "기밀성뿐 아니라 인증 키가 노출되어 이후 메시지를 위조할 수 있다",
      "태그가 자동으로 짧아진다",
    ],
    answer: 2,
    explanation:
      "GCM은 내부가 CTR이라 nonce가 겹치면 키스트림이 같아져 평문이 드러난다. 게다가 GCM은 이때 인증 키까지 노출되어 위조까지 가능해진다. nonce는 키마다 유일해야 한다.",
    anchor: "잠그면서-위조까지-잡는다",
  },
  {
    id: "symmetric-encryption-aes-7",
    post: "symmetric-encryption-aes",
    question: "AES 전용 명령어(AES-NI)가 없는 저가 모바일·IoT 기기에서 유리한 AEAD로 글이 든 것은?",
    choices: ["AES-256-ECB", "ChaCha20-Poly1305", "3DES-CBC", "RC4"],
    answer: 1,
    explanation:
      "ChaCha20-Poly1305는 하드웨어 가속 없이 소프트웨어로만 돌려도 빠르게 설계됐다. 그래서 AES-NI가 없는 기기에서 AES-GCM보다 유리하고, TLS 1.3은 두 암호를 모두 두어 클라이언트가 기기에 맞는 쪽을 앞세우게 한다.",
    anchor: "모드를-고르는-기준과-속도",
  },
];
