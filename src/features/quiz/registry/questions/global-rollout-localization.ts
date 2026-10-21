import type { QuizQuestion } from "../types";

export const GLOBAL_ROLLOUT_LOCALIZATION: QuizQuestion[] = [
  {
    id: "global-rollout-localization-1",
    post: "global-rollout-localization",
    question: "금액을 최소 단위 정수로 저장하고 보여 줄 때 100으로 나누는 코드가 있다. 4,599만 원 상품이 ₩459,900으로 보인 이유는?",
    choices: [
      "부동소수점 오차가 쌓여서",
      "KRW는 소수 자릿수가 0인데 USD처럼 2자리라고 가정했기 때문에",
      "Intl.NumberFormat이 KRW를 지원하지 않아서",
      "로캘을 en-US로 지정했기 때문에",
    ],
    answer: 1,
    explanation:
      "원화에는 센트 같은 더 작은 단위가 없어서 원 단위 정수가 곧 최소 단위다. 계수를 100으로 박지 말고 통화의 자릿수에서 가져와야 한다. 로캘을 en-US로 바꿔도 ₩45,990,000으로 바르게 나온다.",
    anchor: "통화와-세금은-정수로-다룬다",
  },
  {
    id: "global-rollout-localization-2",
    post: "global-rollout-localization",
    question: "UTC 서버에서 `toISOString().slice(0, 10)`으로 주문 날짜를 정하면 한국 시장 리포트에 어떤 일이 생기나?",
    choices: [
      "모든 주문이 다음 날로 잡힌다",
      "아무 문제 없다. ISO 형식은 시간대와 무관하다",
      "한국 시간 0시~9시 사이의 주문이 전날로 잡힌다",
      "서머타임 기간에만 한 시간 밀린다",
    ],
    answer: 2,
    explanation:
      "서울은 UTC+9라서 한국 기준 0시~9시는 UTC로 아직 전날이다. 순간은 UTC로 저장하되 날짜로 자를 때는 시장 설정의 시간대(Asia/Seoul)를 써야 한다.",
    anchor: "같은-순간이-서울에서는-다음-날이다",
  },
  {
    id: "global-rollout-localization-3",
    post: "global-rollout-localization",
    question: "고객의 생일이나 배송 희망일은 어떻게 저장하는 게 안전한가?",
    choices: [
      "시간대 없는 DATE 타입으로 저장한다",
      "timestamptz에 그날 자정으로 저장한다",
      "UTC 자정의 유닉스 시각으로 저장한다",
      "사용자 로캘 형식의 문자열로 저장한다",
    ],
    answer: 0,
    explanation:
      "이 값들은 순간이 아니라 달력의 날짜다. timestamptz에 자정으로 넣으면 다른 시간대에서 읽을 때 하루가 밀린다. 로캘 형식 문자열은 정렬과 비교가 어려워진다.",
    anchor: "같은-순간이-서울에서는-다음-날이다",
  },
  {
    id: "global-rollout-localization-4",
    post: "global-rollout-localization",
    question: "DB에는 분명히 '홍길동'이 있는데 `name.includes(\"길동\")` 검색에서 빠지는 행이 있다. 문자열 길이를 찍었더니 9였다. 원인은?",
    choices: [
      "정렬 규칙(collation)이 달라서",
      "인코딩이 CP949라서",
      "공백 문자가 섞여서",
      "자모가 분리된 NFD 형태로 저장돼서",
    ],
    answer: 3,
    explanation:
      "완성형(NFC) 홍길동은 3글자지만 자모 분리형(NFD)은 9글자다. 모양이 달라 includes가 실패하므로 저장과 검색 모두 normalize(\"NFC\")로 맞춘다.",
    anchor: "한글-검색과-정렬은-따로-챙긴다",
  },
  {
    id: "global-rollout-localization-5",
    post: "global-rollout-localization",
    question: "새 시장 설정에서 반드시 덮어야 하는 키가 빠졌을 때 서버가 시작하지 못하게 하는 이유는?",
    choices: [
      "서버 메모리를 아끼려고",
      "빠진 값이 공통 기본값으로 조용히 채워져 다른 나라의 동작이 그대로 나가기 때문에",
      "피처 플래그 서비스가 설정을 읽지 못해서",
      "시장 설정은 런타임에 바꿀 수 없어서",
    ],
    answer: 1,
    explanation:
      "기본값 위에 덮는 방식에서는 덮지 않은 값이 기본값으로 쓰인다. 일본 화면에 미국 주소 칸이 나오는 식이다. 고객이 발견하기 전에 배포 단계에서 막는 편이 싸다.",
    anchor: "나라마다-다른-값은-코드-밖으로-뺀다",
  },
  {
    id: "global-rollout-localization-6",
    post: "global-rollout-localization",
    question: "개인정보 원본을 시장 리전에만 두는 구조에서 가장 새기 쉬운 곳은?",
    choices: [
      "가명 처리한 분석 데이터",
      "재고·가격 같은 공통 API 호출",
      "에러 추적 도구, 로그 플랫폼, 백업 같은 부수 경로",
      "시장 리전 안의 주문 DB",
    ],
    answer: 2,
    explanation:
      "기능 경로는 설계할 때 챙기지만 요청 본문을 통째로 싣는 에러 추적, 전화번호가 찍히는 로그, 다른 리전 버킷의 덤프는 놓치기 쉽다. 이런 경로까지 데이터 흐름도에 넣는다.",
    anchor: "데이터를-어디에-둘지가-구조를-바꾼다",
  },
  {
    id: "global-rollout-localization-7",
    post: "global-rollout-localization",
    question: "로컬 갭 중 '간편결제'를 카드 결제로 대신 열 수 있다면 어떻게 다루는 게 알맞나?",
    choices: [
      "출시를 미루고 간편결제부터 만든다",
      "시장 플래그를 꺼 둔 채 출시 후로 미루고, 언제 붙일지 적어 둔다",
      "갭 목록에서 지운다",
      "모든 시장에 간편결제를 동시에 연다",
    ],
    answer: 1,
    explanation:
      "임시 방편이 있는 갭은 출시를 막지 않는다. 플래그로 꺼 두고 다음 단계로 미루되, 임시 방편을 없앨 시점을 같이 적어야 그대로 굳지 않는다.",
    anchor: "로컬-갭은-목록으로-만들고-줄을-세운다",
  },
];
