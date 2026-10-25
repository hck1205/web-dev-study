import type { QuizQuestion } from "../types";

export const RW_AIRBNB_SKIPPER: QuizQuestion[] = [
  {
    id: "rw-airbnb-skipper-1",
    post: "rw-airbnb-skipper",
    question: "에어비앤비가 외부 오케스트레이션 엔진을 쓰지 않고 Skipper를 서비스 안에 박아 넣은 가장 큰 이유는?",
    choices: [
      "외부 엔진은 정확히 한 번 의미를 주지 못해서",
      "외부 엔진은 Kotlin을 지원하지 않아서",
      "Tier 0 서비스에 새로운 핵심 의존을 더하면, 그 클러스터가 멈출 때 모든 서비스의 워크플로가 멈추기 때문에",
      "외부 엔진이 결제 데이터를 암호화하지 않아서",
    ],
    answer: 2,
    explanation:
      "글은 외부 엔진이 정확히 한 번 의미와 검증된 신뢰성을 준다고 인정하면서도, 클러스터와 저장 계층과 운영 전문성이 필요한 새 의존이라는 점을 문제로 꼽았다. 오케스트레이션 클러스터가 멈추면 기대는 모든 서비스가 워크플로를 시작하지도 진행하지도 못한다. 그래서 서비스가 이미 쓰는 DB 위에서 도는 라이브러리를 택했다.",
    anchor: "바깥-엔진을-두지-않은-이유",
  },
  {
    id: "rw-airbnb-skipper-2",
    post: "rw-airbnb-skipper",
    question: "Skipper에서 서비스가 크래시 난 뒤 워크플로가 이어지는 방식으로 옳은 것은?",
    choices: [
      "리스가 끝나면 영속 스케줄러가 워크플로를 처음부터 재생하고, 체크포인트된 액션은 결과만 돌려준다",
      "중앙 클러스터가 다른 서버에 워크플로를 옮긴다",
      "사람이 대사 스크립트를 돌려 끊긴 지점을 찾는다",
      "모든 액션을 처음부터 다시 실행한다",
    ],
    answer: 0,
    explanation:
      "시작할 때 지연 시간 초과 작업을 예약해 두고, 프로세스가 죽어 리스가 만료되면 스케줄러가 그 워크플로를 재생한다. 이미 체크포인트된 액션은 다시 실행하지 않고 결과만 받는다. 정상적으로 끝나면 시간 초과 작업은 버려진다.",
    anchor: "체크포인트를-들고-처음부터-다시-돌린다",
  },
  {
    id: "rw-airbnb-skipper-3",
    post: "rw-airbnb-skipper",
    question: "Skipper가 이벤트 소싱 방식 엔진과 달리 상태 필드를 직접 저장해서 얻는 것과 내주는 것은?",
    choices: [
      "얻는 것: 감사 가능성, 내주는 것: 속도",
      "얻는 것: 신호가 많거나 기록이 긴 워크플로에서 가벼운 실행, 내주는 것: 일부 감사 가능성",
      "얻는 것: 여러 언어 지원, 내주는 것: 결정성",
      "얻는 것: 정확히 한 번 실행, 내주는 것: 보상 기능",
    ],
    answer: 1,
    explanation:
      "Skipper는 다시 읽을 사건 로그 없이 지금 상태와 체크포인트된 결과만 둔다. 글은 이 덕분에 실행이 가볍지만 감사 가능성을 일부 내준다고 적었다. 재생을 하니 결정성 요구는 그대로 남는다.",
    anchor: "상태를-직접-저장하는-재생-사건을-쌓는-재생",
  },
  {
    id: "rw-airbnb-skipper-4",
    post: "rw-airbnb-skipper",
    question: "Skipper가 \"액션은 멱등해야 한다\"고 요구하는 이유는?",
    choices: [
      "액션 결과를 캐시에 저장하기 위해",
      "보상 메서드가 액션을 다시 부르기 때문에",
      "액션은 여러 서버에서 동시에 실행되기 때문에",
      "액션을 실행한 뒤 체크포인트하기 전에 크래시가 나면 재생 때 그 액션이 한 번 더 실행되기 때문에",
    ],
    answer: 3,
    explanation:
      "Skipper는 최소 한 번 실행이다. 실행과 체크포인트 사이에서 죽으면 체크포인트가 없으니 재생 때 다시 실행된다. 결제처럼 두 번 하면 안 되는 액션은 같은 요청에 같은 멱등 키를 실어 결제사가 두 번째를 같은 결과로 돌려주게 해야 한다.",
    anchor: "한-번-더-실행될-수-있다는-것",
  },
  {
    id: "rw-airbnb-skipper-5",
    post: "rw-airbnb-skipper",
    question: "청구 액션의 멱등 키를 호출할 때마다 새로 만든 무작위 UUID로 하면 재생 때 무슨 일이 생기나?",
    choices: [
      "재생할 때 키가 바뀌어 결제사가 다른 요청으로 보고 두 번 청구한다",
      "결제사가 두 요청을 같은 것으로 알아보고 한 번만 청구한다",
      "UUID는 충돌할 수 있어 첫 청구가 거절된다",
      "Skipper가 무작위 값을 자동으로 체크포인트해 문제가 없다",
    ],
    answer: 0,
    explanation:
      "PostgreSQL 실험에서 무작위 키로 두 번 넣으면 120,000짜리 예약에 240,000이 청구됐다. 워크플로 ID와 액션 이름처럼 재생해도 바뀌지 않는 값으로 키를 만들면 두 번째 호출은 아무것도 넣지 않는다. 무작위 값을 쓰려면 먼저 상태나 체크포인트에 저장해 두고 꺼내 써야 한다.",
    anchor: "한-번-더-실행될-수-있다는-것",
  },
  {
    id: "rw-airbnb-skipper-6",
    post: "rw-airbnb-skipper",
    question: "holdInventory → chargeCard → confirmBooking 순서에서 confirmBooking이 재시도 불가 오류로 실패하면 Skipper의 보상 순서는?",
    choices: [
      "undo:holdInventory → undo:chargeCard",
      "undo:chargeCard → undo:holdInventory",
      "undo:confirmBooking → undo:chargeCard → undo:holdInventory",
      "보상하지 않고 대사 스크립트에 맡긴다",
    ],
    answer: 1,
    explanation:
      "앞서 성공한 액션의 보상 메서드를 거꾸로 실행하니 환불이 먼저, 재고 풀기가 나중이다. 실패한 액션 자신은 일어나지 않았으니 보상하지 않는다. 글은 이것을 분산 트랜잭션 없는 최종 일관성이라고 불렀다.",
    anchor: "오류의-두-종류와-보상",
  },
  {
    id: "rw-airbnb-skipper-7",
    post: "rw-airbnb-skipper",
    question: "Pay as a Local 글이 지역 결제 수단의 관측에서 \"결제 성공률\" 하나로는 부족하다고 한 이유는?",
    choices: [
      "성공률은 실시간으로 계산할 수 없어서",
      "결제사가 성공률을 공개하지 않아서",
      "카드와 redirect·async 결제는 기술 경로가 달라, 하나의 성공률이 비동기 결제 수단의 건강을 말해 주지 못해서",
      "성공률은 법적으로 공개해야 해서",
    ],
    answer: 2,
    explanation:
      "카드 결제와 Naver Pay 같은 redirect 흐름은 완전히 다른 경로를 탄다. 그래서 클라이언트, 결제 백엔드, PSP, 웹훅 네 층의 지표를 결제 수단별로 나누고, 실패 횟수·비율·시간 창을 묶은 복합 경보로 트래픽이 적을 때의 거짓 경보를 줄였다.",
    anchor: "운영에서-나온-숫자와-아직-아픈-곳",
  },
];
