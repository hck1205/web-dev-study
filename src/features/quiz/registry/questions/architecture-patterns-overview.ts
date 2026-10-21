import type { QuizQuestion } from "../types";

export const ARCHITECTURE_PATTERNS_OVERVIEW: QuizQuestion[] = [
  {
    id: "architecture-patterns-overview-1",
    post: "architecture-patterns-overview",
    question: "머지한 코드가 다른 팀 배포를 기다리느라 반나절씩 묶여 있다. 이 증상은 어느 축의 문제인가?",
    choices: [
      "코드 구조 축: 헥사고날로 포트와 어댑터를 나눠야 한다",
      "데이터 축: CQRS로 읽기 모델을 분리해야 한다",
      "배포 구조 축: 무엇을 함께 배포하고 무엇을 따로 배포할지의 문제다",
      "통신 축: 동기 호출을 이벤트로 바꿔야 한다",
    ],
    answer: 2,
    explanation:
      "배포 대기열은 실행 덩어리를 몇 개로 나눠 누가 언제 배포하느냐, 즉 배포 구조 축의 증상이다. 헥사고날은 배포 단위 안의 코드를 정리할 뿐이라 대기열을 줄이지 못한다.",
    anchor: "세-가지-질문을-섞어서-하고-있다",
  },
  {
    id: "architecture-patterns-overview-2",
    post: "architecture-patterns-overview",
    question:
      "팀이 셋이고 배포 대기도 길다. 그런데 커밋의 35%가 모듈 두 개 이상을 함께 건드린다. 지금 할 일로 가장 알맞은 것은?",
    choices: [
      "모듈러 모놀리스로 경계부터 다져 함께 바뀌는 비율을 낮춘다",
      "부하가 큰 결제부터 바로 서비스로 떼어 낸다",
      "모든 모듈을 한 번에 마이크로서비스로 나눈다",
      "함께 바뀌는 비율은 배포와 상관없으니 무시한다",
    ],
    answer: 0,
    explanation:
      "함께 바뀌는 비율이 높을 때 서비스로 나누면 기능 하나를 고칠 때마다 여러 서비스를 같이 배포하는 분산 모놀리스가 된다. 그래서 이 신호를 부하 편차보다 먼저 보고, 모듈 경계로 비율을 낮춘 뒤에 떼어 낸다.",
    anchor: "언제-다음-단계로-넘어가나",
  },
  {
    id: "architecture-patterns-overview-3",
    post: "architecture-patterns-overview",
    question: "모놀리스에서 결제 모듈을 서비스로 떼어 내기 전, 모듈러 모놀리스 단계에서 반드시 끊어 둬야 하는 것은?",
    choices: [
      "결제 모듈 안의 레이어드 구조",
      "다른 모듈이 결제 테이블을 직접 읽는 접근",
      "결제 모듈의 단위 테스트",
      "결제 모듈이 쓰는 로깅 라이브러리",
    ],
    answer: 1,
    explanation:
      "남의 테이블 읽기를 남겨 둔 채 떼어 내면 새 서비스가 여전히 옛 DB에 묶여, 네트워크만 하나 더 끼운 꼴이 된다. 서비스 분리를 가능하게 하는 건 코드 모양보다 데이터 소유권이다.",
    anchor: "언제-다음-단계로-넘어가나",
  },
  {
    id: "architecture-patterns-overview-4",
    post: "architecture-patterns-overview",
    question: "서비스를 나눴는데 컬럼 하나를 바꿀 때 세 서비스를 같은 날 배포해야 한다. 원인과 고치는 방향으로 맞는 것은?",
    choices: [
      "서비스가 너무 커서 생긴 일이니 더 잘게 쪼갠다",
      "게이트웨이에 업무 규칙을 모아 서비스 사이 호출을 줄인다",
      "모든 서비스에 CQRS를 도입해 읽기 모델을 따로 둔다",
      "공유 DB로 생긴 분산 모놀리스이니 데이터 소유권으로 경계를 다시 긋거나 다시 합친다",
    ],
    answer: 3,
    explanation:
      "같은 테이블을 여러 서비스가 읽으면 테이블 구조가 숨은 API가 되어 늘 함께 배포하게 된다. 경계를 데이터 소유권 기준으로 다시 긋거나, 늘 함께 바뀌는 서비스는 합치는 것도 정상적인 선택이다.",
    anchor: "잘못-고르면-생기는-일",
  },
  {
    id: "architecture-patterns-overview-5",
    post: "architecture-patterns-overview",
    question: "회원 정보 수정 화면처럼 쓰는 모양과 읽는 모양이 거의 같은 곳에 CQRS 읽기 모델을 따로 두면 어떻게 되나?",
    choices: [
      "읽기 속도가 크게 빨라져 항상 이득이다",
      "얻는 것 없이 반영 지연과 프로젝터 운영 부담만 생긴다",
      "이벤트 소싱을 함께 쓰지 않으면 동작하지 않는다",
      "쓰기 트랜잭션이 더 안전해진다",
    ],
    answer: 1,
    explanation:
      "CQRS는 읽는 모양이 쓰는 모양과 크게 다르고 읽기가 훨씬 많은 화면에서 값을 한다. 모양이 같은 화면에서는 방금 바꾼 값이 안 보이는 지연과 프로젝터라는 운영 대상만 늘어난다.",
    anchor: "잘못-고르면-생기는-일",
  },
  {
    id: "architecture-patterns-overview-6",
    post: "architecture-patterns-overview",
    question: "헥사고날 코어, 아웃박스, CQRS를 함께 쓰는 주문 서비스에서 클라이언트에게 201 응답이 나가는 시점은?",
    choices: [
      "주문 행과 아웃박스 행이 한 트랜잭션으로 커밋된 직후",
      "릴레이가 브로커에 OrderPlaced를 발행한 뒤",
      "프로젝터가 읽기 모델을 갱신한 뒤",
      "모든 구독자가 이벤트 처리를 마친 뒤",
    ],
    answer: 0,
    explanation:
      "상태와 이벤트를 같은 트랜잭션에 남겼으니 커밋만 되면 이벤트는 언젠가 반드시 나간다. 그래서 응답은 브로커 전송이나 읽기 모델 갱신을 기다리지 않고, 그 사이의 틈은 조회 쪽에서 받아 낸다.",
    anchor: "패턴은-겹쳐서-쓴다",
  },
];
