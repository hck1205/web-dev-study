import type { QuizQuestion } from "../types";

export const DDD_TACTICAL_PATTERNS: QuizQuestion[] = [
  {
    id: "ddd-tactical-patterns-1",
    post: "ddd-tactical-patterns",
    question: "장바구니, 주문, 정산이 같은 주문 금액을 13,614원, 13,612원, 13,609원으로 다르게 냈다. 근본 원인과 해법으로 가장 알맞은 것은?",
    choices: [
      "부동소수점 오차이니 모든 곳에서 toFixed(2)를 쓴다",
      "정산 서버의 시간대가 달라서이니 UTC로 맞춘다",
      "할인 시점과 끝자리 처리 규칙이 곳곳에 흩어져 있으니 금액 값 객체 한 곳에 그 규칙을 둔다",
      "DB 컬럼 타입이 달라서이니 모두 numeric으로 바꾼다",
    ],
    answer: 2,
    explanation:
      "세 계산은 각자 맞았지만 줄마다 반올림, 합계 후 내림, 단가 내림 후 곱하기로 규칙이 달랐다. 규칙을 Money 같은 값 객체 한 곳에 두면 어디서 계산하든 같은 숫자가 나온다.",
    anchor: "값-객체는-바뀌지-않고-스스로-검사한다",
  },
  {
    id: "ddd-tactical-patterns-2",
    post: "ddd-tactical-patterns",
    question: "쇼핑몰의 배송지 주소를 값 객체로 보는 근거로 가장 알맞은 것은?",
    choices: [
      "주소 문자열이 짧아서",
      "같은 값의 다른 주소로 바꿔 써도 업무에 아무 문제가 없어서",
      "주소는 DB에 따로 테이블을 둘 수 없어서",
      "주소는 절대 바뀌지 않아서",
    ],
    answer: 1,
    explanation:
      "값 객체는 값이 같으면 같은 것으로 본다. 주문의 배송지가 바뀌면 주소 객체를 고치는 게 아니라 새 값으로 갈아 끼운다. 배달 경로와 이력을 관리하는 시스템이라면 같은 주소가 엔티티일 수 있다.",
    anchor: "같음을-무엇으로-판단하나",
  },
  {
    id: "ddd-tactical-patterns-3",
    post: "ddd-tactical-patterns",
    question: "Money.of(1000)으로 만든 두 객체를 Set에 넣었더니 두 개가 들어갔다. 왜 그런가?",
    choices: [
      "Set은 객체를 참조로 비교해서 값이 같아도 다른 객체로 보기 때문에",
      "Object.freeze한 객체는 Set에서 해시가 바뀌어서",
      "readonly 필드는 비교에서 빠지기 때문에",
      "private 생성자로 만든 객체는 Set에 넣을 수 없어서",
    ],
    answer: 0,
    explanation:
      "JavaScript의 ===와 Set, Map은 객체의 주소를 비교한다. 값 객체에는 equals를 따로 두고, 컬렉션의 키가 필요하면 '1000:KRW'처럼 값으로 만든 문자열을 쓴다.",
    anchor: "값-객체는-바뀌지-않고-스스로-검사한다",
  },
  {
    id: "ddd-tactical-patterns-4",
    post: "ddd-tactical-patterns",
    question: "13,612원을 세 줄에 비율대로 나눠 각자 내림했더니 합이 13,611원이 됐다. 1원도 잃지 않는 방법은?",
    choices: [
      "모든 몫을 반올림한다",
      "마지막 줄에 소수점 금액을 그대로 둔다",
      "남은 1원은 버리고 정산 리포트에 각주를 단다",
      "내림한 뒤 남은 금액을 앞 칸부터 1원씩 나눠 준다",
    ],
    answer: 3,
    explanation:
      "반올림은 합이 원래 금액보다 커지거나 작아질 수 있다. 내림 후 남은 몇 원을 정해진 순서로 나눠 주면 합이 항상 원래 금액과 같다. 이 규칙을 금액 객체에 두면 환불, 정산 분배가 모두 같은 결과를 낸다.",
    anchor: "나머지-1원은-누구에게-가나",
  },
  {
    id: "ddd-tactical-patterns-5",
    post: "ddd-tactical-patterns",
    question: "공지사항 게시판의 Notice 객체에 getter, setter만 있고 규칙은 없다. 이걸 풍부한 모델로 바꿔야 하나?",
    choices: [
      "그렇다. 빈약한 모델은 언제나 안티패턴이다",
      "그렇다. 모든 엔티티에는 도메인 이벤트가 있어야 한다",
      "아니다. 지킬 불변식이 없는 CRUD라면 데이터 객체와 단순한 절차가 더 정직하다",
      "아니다. 게시판은 값 객체로만 만들어야 한다",
    ],
    answer: 2,
    explanation:
      "빈약한 모델이 문제가 되는 건 지켜야 할 불변식이 서비스 곳곳에 흩어질 때다. 입력을 검증해 그대로 저장하는 CRUD에 업무 메서드를 만들면 한 줄짜리 메서드만 쌓인다.",
    anchor: "빈약한-모델이-오히려-맞는-곳",
  },
  {
    id: "ddd-tactical-patterns-6",
    post: "ddd-tactical-patterns",
    question: "판매자 묶음별로 3만 원 이상이면 배송비가 무료인 규칙은 어디에 두는 게 알맞나?",
    choices: [
      "트랜잭션을 여는 애플리케이션 서비스",
      "여러 주문 줄을 받아 규칙 하나를 계산하는, 상태 없는 도메인 서비스",
      "각 OrderLine 엔티티",
      "배송비를 컬럼으로 가진 DB 트리거",
    ],
    answer: 1,
    explanation:
      "여러 줄에 걸친 규칙이라 한 줄 엔티티에 넣기 어색하다. 애플리케이션 서비스는 순서만 정하고 규칙을 갖지 않으므로, 상태 없이 규칙만 아는 도메인 서비스가 맞다.",
    anchor: "어느-객체의-일도-아닌-규칙",
  },
  {
    id: "ddd-tactical-patterns-7",
    post: "ddd-tactical-patterns",
    question: "order.cancel() 안에서 OrderCanceled 이벤트를 바로 쿠폰 서비스에 보냈는데, 그 뒤 저장이 실패해 롤백됐다. 무엇이 잘못됐나?",
    choices: [
      "이벤트를 커밋 전에 내보내서 일어나지 않은 취소에 쿠폰이 반응했다",
      "이벤트 이름이 과거형이라서",
      "이벤트에 orderId가 없어서",
      "쿠폰 서비스가 이벤트를 두 번 받아서",
    ],
    answer: 0,
    explanation:
      "엔티티는 이벤트를 기록만 하고, 커밋이 끝난 뒤에 꺼내 보내야 한다. 다른 서비스로 가는 이벤트처럼 잃으면 안 되는 경우는 같은 트랜잭션에서 아웃박스 테이블에 적는다.",
    anchor: "일어난-일을-남기는-도메인-이벤트",
  },
];
