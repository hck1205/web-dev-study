import type { QuizQuestion } from "../types";

export const HASH_HMAC_PASSWORD_HASHING: QuizQuestion[] = [
  {
    id: "hash-hmac-password-hashing-1",
    post: "hash-hmac-password-hashing",
    question: "입력 hello와 hellp를 SHA-256으로 해시했더니 256비트 중 131비트가 서로 달랐다. 이 성질을 뭐라고 하나?",
    choices: ["충돌 저항", "눈사태 효과", "역상 저항", "길이 확장"],
    answer: 1,
    explanation:
      "입력이 한 비트만 바뀌어도 출력의 절반 가까이가 바뀌는 성질을 눈사태 효과라 한다. 이 덕분에 작은 변조도 지문에서 크게 드러난다. 충돌·역상 저항은 되돌리기나 같은 출력 찾기가 어렵다는 별개 성질이다.",
    anchor: "한-방향으로만-가는-계산",
  },
  {
    id: "hash-hmac-password-hashing-2",
    post: "hash-hmac-password-hashing",
    question: "sha256(key + message)로 메시지를 서명하면 안 되는 이유는?",
    choices: [
      "출력이 곧 내부 상태라 공격자가 키 없이 뒤에 내용을 덧붙여 유효한 태그를 만들 수 있다(길이 확장)",
      "SHA-256 출력이 너무 짧아서",
      "key를 두 번 써서 느려지기 때문에",
      "솔트를 넣을 수 없어서",
    ],
    answer: 0,
    explanation:
      "SHA-256은 블록을 순서대로 섞고 마지막 내부 상태를 출력하는데, 그 출력이 곧 거기까지의 상태다. 공격자는 키를 몰라도 그 상태에서 이어 계산해 메시지 뒤에 내용을 덧붙인 올바른 태그를 만들 수 있다. HMAC은 키를 안팎 두 번 섞어 이를 막는다.",
    anchor: "비밀-하나를-섞어야-위조를-막는다",
  },
  {
    id: "hash-hmac-password-hashing-3",
    post: "hash-hmac-password-hashing",
    question: "비밀번호 저장에 SHA-256 같은 빠른 해시가 오히려 위험한 이유는?",
    choices: [
      "빠른 해시는 충돌이 자주 일어나서",
      "출력 길이가 32바이트로 고정되어서",
      "빠를수록 공격자가 유출된 해시에 흔한 비밀번호를 초당 더 많이 대입할 수 있어서",
      "솔트를 지원하지 않아서",
    ],
    answer: 2,
    explanation:
      "유출된 해시를 쥔 공격자는 흔한 비밀번호를 하나씩 해시해 맞는 걸 찾는다. 해시가 빠를수록 초당 시도 횟수가 올라가고, SHA-256은 GPU로 초당 수십억 회에 이른다. 그래서 비밀번호는 일부러 느린 해시로 저장한다.",
    anchor: "빠른-해시가-비밀번호에서는-독이다",
  },
  {
    id: "hash-hmac-password-hashing-4",
    post: "hash-hmac-password-hashing",
    question: "사용자마다 다른 솔트를 비밀번호에 섞어 저장하면 무엇이 달라지나?",
    choices: [
      "해시 계산이 더 빨라진다",
      "비밀번호를 평문으로 복원할 수 있게 된다",
      "키를 DB 밖에 보관하게 된다",
      "같은 비밀번호도 저장값이 달라져 레인보우 테이블을 무력화하고 사용자마다 따로 공격하게 만든다",
    ],
    answer: 3,
    explanation:
      "솔트가 다르면 같은 비밀번호라도 저장값이 완전히 달라진다. 그래서 미리 계산한 레인보우 테이블을 못 쓰고, 공격자는 사용자 한 명씩 따로 공격해야 한다. 솔트는 비밀이 아니라 해시와 함께 저장한다.",
    anchor: "빠른-해시가-비밀번호에서는-독이다",
  },
  {
    id: "hash-hmac-password-hashing-5",
    post: "hash-hmac-password-hashing",
    question: "scrypt·bcrypt·Argon2의 비용 파라미터를 정하는 흔한 기준은?",
    choices: [
      "로그인 한 번에 사용자가 거의 못 느끼되 공격자의 초당 시도는 크게 떨어지도록(보통 50~100ms) 맞춘다",
      "가능한 한 빠르게, 1ms 아래로 맞춘다",
      "저장 문자열 길이가 짧아지도록 맞춘다",
      "솔트 길이와 똑같이 맞춘다",
    ],
    answer: 0,
    explanation:
      "로그인 한 번이 사용자에게는 체감되지 않으면서 공격자의 대입 속도는 수십만에서 열 몇 번으로 떨어지게 비용을 맞춘다. 이 컨테이너에서 scrypt는 N=32768일 때 약 97ms였다. 하드웨어가 빨라지면 이 값을 올린다.",
    anchor: "빠른-해시가-비밀번호에서는-독이다",
  },
  {
    id: "hash-hmac-password-hashing-6",
    post: "hash-hmac-password-hashing",
    question: "HMAC 태그를 ===가 아니라 상수 시간 비교(timingSafeEqual)로 확인하는 이유는?",
    choices: [
      "=== 는 길이가 다르면 예외를 던지기 때문에",
      "상수 시간 비교가 더 빠르기 때문에",
      "=== 는 Buffer를 비교하지 못해서",
      "문자열 비교는 첫 다른 글자에서 멈춰, 응답 시간으로 맞는 앞부분을 한 글자씩 알아낼 수 있어서",
    ],
    answer: 3,
    explanation:
      "일반 비교는 첫 글자가 다른 순간 멈춰서, 응답 시간을 많이 재면 맞는 앞부분을 한 글자씩 복원할 수 있다(타이밍 공격). 특히 공격자가 값을 마음대로 보내는 태그 검증에서 위험하다. 상수 시간 비교는 어디서 틀리든 같은 시간이 걸린다.",
    anchor: "맞는지-비교할-때도-시간이-샌다",
  },
  {
    id: "hash-hmac-password-hashing-7",
    post: "hash-hmac-password-hashing",
    question: "새 서비스의 비밀번호 저장에 Argon2id가 권장되는 이유로 가장 알맞은 것은?",
    choices: [
      "출력이 가장 짧아서",
      "솔트가 필요 없어서",
      "메모리를 많이 쓰게 만들어 GPU·ASIC 대량 공격에 더 강해서",
      "SHA-256보다 빨라서",
    ],
    answer: 2,
    explanation:
      "Argon2id는 메모리 비용을 크게 줄 수 있어, 메모리가 비싼 GPU·ASIC으로 대량 병렬 대입하기를 어렵게 한다. bcrypt도 널리 쓰이지만 입력을 72바이트에서 자르는 제약이 있다. 둘 다 사용자별 솔트와 충분한 비용 파라미터를 전제로 한다.",
    anchor: "빠른-해시가-비밀번호에서는-독이다",
  },
];
