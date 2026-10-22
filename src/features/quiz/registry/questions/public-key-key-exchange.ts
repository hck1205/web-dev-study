import type { QuizQuestion } from "../types";

export const PUBLIC_KEY_KEY_EXCHANGE: QuizQuestion[] = [
  {
    id: "public-key-key-exchange-1",
    post: "public-key-key-exchange",
    question: "공개 키 암호가 기대는 '한 방향으로만 쉬운' 수학 문제로 글이 든 두 가지는?",
    choices: [
      "덧셈과 뺄셈",
      "정렬과 탐색",
      "소인수분해의 어려움과 이산 로그의 어려움",
      "해시 충돌과 길이 확장",
    ],
    answer: 2,
    explanation:
      "큰 수를 곱하는 건 쉽지만 소수 둘로 쪼개는 건 어렵고(RSA), g^a를 계산하는 건 쉽지만 결과에서 a를 되찾는 건 어렵다(디피-헬먼·타원곡선). 이 비대칭이 공개 키 암호를 떠받친다.",
    anchor: "한쪽으로만-쉬운-자물쇠",
  },
  {
    id: "public-key-key-exchange-2",
    post: "public-key-key-exchange",
    question: "RSA로 10만 건짜리 CSV 본문을 통째로 암호화하지 않고 하이브리드 방식을 쓰는 이유는?",
    choices: [
      "RSA는 느리고 한 번에 다루는 크기가 키 길이보다 작다",
      "RSA는 무결성 검증을 지원하지 않는다",
      "RSA 공개 키를 숨겨야 하기 때문이다",
      "AES가 RSA보다 안전하기 때문이다",
    ],
    answer: 0,
    explanation:
      "RSA는 연산이 느리고 2048비트 키로 한 번에 200바이트 남짓만 처리한다. 그래서 본문은 빠른 AES로 암호화하고 그 AES 키만 RSA로 감싸 보낸다. 봉투 암호화와 같은 구조다.",
    anchor: "큰-데이터는-rsa로-직접-암호화하지-않는다",
  },
  {
    id: "public-key-key-exchange-3",
    post: "public-key-key-exchange",
    question: "p=23, g=5에서 A의 비밀이 a=6, B의 비밀이 b=15다. 선 위로 g^a=8, g^b=19가 지나갔다. 중간 도청자가 공유 비밀을 만들지 못하는 이유는?",
    choices: [
      "8과 19를 곱하면 안 되기 때문이다",
      "8이나 19에서 a 또는 b를 되찾으려면 이산 로그를 풀어야 한다",
      "p가 소수라서 복호화할 수 없다",
      "g가 공개되어 있지 않기 때문이다",
    ],
    answer: 1,
    explanation:
      "공유 비밀 g^(ab)를 만들려면 비밀 지수 a나 b가 필요하다. 도청자는 g^a=8, g^b=19만 보는데 여기서 지수를 되찾는 이산 로그 문제가 큰 수에서는 현실적으로 풀리지 않는다.",
    anchor: "열쇠를-보내지-않고-같은-열쇠를-만든다",
  },
  {
    id: "public-key-key-exchange-4",
    post: "public-key-key-exchange",
    question: "ECDHE의 마지막 E(ephemeral)가 주는 전방향 안전성에 대한 설명으로 옳은 것은?",
    choices: [
      "서버 인증서 개인 키가 유출되면 과거 트래픽도 모두 풀린다",
      "키 교환 없이 세션 키를 서버 공개 키로 감싸 보낸다",
      "RSA 키 교환에서만 얻을 수 있는 성질이다",
      "연결마다 일회용 키를 만들고 버려서, 나중에 인증서 키가 털려도 과거 녹화본은 복호화되지 않는다",
    ],
    answer: 3,
    explanation:
      "ECDHE는 연결마다 새 키 쌍을 만들고 핸드셰이크가 끝나면 버린다. 세션 키 계산에는 그 일회용 키만 쓰이고 인증서 키는 서명에만 쓰여서, 나중에 인증서 키가 털려도 과거 트래픽은 잠겨 있다. RSA 키 교환은 반대로 개인 키 하나가 과거 전체를 푸는 열쇠가 된다.",
    anchor: "타원곡선으로-더-짧고-빠르게",
  },
  {
    id: "public-key-key-exchange-5",
    post: "public-key-key-exchange",
    question: "ECDH만으로는 막지 못하고 인증서 서명으로 보완해야 하는 공격은?",
    choices: ["패딩 오라클", "중간자 공격", "nonce 재사용", "길이 확장 공격"],
    answer: 1,
    explanation:
      "ECDH는 같은 비밀을 만들게 해 줄 뿐, 받은 공개 값이 진짜 상대의 것인지는 보장하지 못한다. 공격자가 양쪽과 각각 키 교환을 하면 두 구간을 다 복호화할 수 있다. 그래서 서버가 키 교환 공개 값에 인증서 개인 키로 서명을 붙여 신원을 묶는다.",
    anchor: "타원곡선으로-더-짧고-빠르게",
  },
  {
    id: "public-key-key-exchange-6",
    post: "public-key-key-exchange",
    question: "X25519 같은 타원곡선 키 교환이 RSA 키 교환보다 연결마다 일회용 키를 쓰기에 적합한 결정적 이유는?",
    choices: [
      "공개 값이 1바이트로 매우 짧아서",
      "타원곡선은 복호화가 필요 없어서",
      "키 쌍 생성이 사실상 공짜라 매 연결마다 새로 만들어 버릴 수 있어서",
      "RSA보다 안전성이 떨어져 자주 바꿔야 해서",
    ],
    answer: 2,
    explanation:
      "이 컨테이너 측정에서도 RSA-2048 키 생성은 다섯 번에 200밀리초가 넘었지만 X25519는 측정 분해능 아래였다. 이 저렴함 덕분에 매 연결 일회용 키가 현실화되어 전방향 안전성을 얻는다.",
    anchor: "타원곡선으로-더-짧고-빠르게",
  },
  {
    id: "public-key-key-exchange-7",
    post: "public-key-key-exchange",
    question: "포스트 양자 하이브리드 키 교환(X25519MLKEM768 등)을 과도기에 쓰는 이유로 가장 알맞은 것은?",
    choices: [
      "격자 기반 알고리즘은 실전 검증이 짧아, 기존 X25519와 함께 돌려 둘 중 하나만 안전해도 전체가 안전하게 하려고",
      "ML-KEM이 X25519보다 항상 빠르기 때문에",
      "양자 컴퓨터가 이미 RSA를 상용으로 깨고 있어서",
      "브라우저가 X25519를 더 이상 지원하지 않아서",
    ],
    answer: 0,
    explanation:
      "큰 양자 컴퓨터는 쇼어 알고리즘으로 RSA·ECDH를 깰 수 있어 '지금 수집하고 나중에 복호화' 위협이 있다. 하지만 새 격자 기반 알고리즘은 검증 기간이 짧아, 기존 X25519와 섞어 둘 중 하나만 안전해도 전체가 버티게 한다. 지원 범위는 버전마다 다르다.",
    anchor: "양자-컴퓨터가-깨는-것과-그-대비",
  },
];
