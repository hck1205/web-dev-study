import type { QuizQuestion } from "../types";

export const RW_AMAZON_DISTRIBUTED_COMPUTING_MANIFESTO: QuizQuestion[] = [
  {
    id: "rw-amazon-distributed-computing-manifesto-1",
    post: "rw-amazon-distributed-computing-manifesto",
    question: "1998년 선언문이 당시 2계층 구조의 가장 큰 문제로 꼽은 것은?",
    choices: [
      "웹 서버가 상태를 가지고 있어서 늘릴 수 없었다",
      "애플리케이션이 DB에 직접 접근하고 데이터 모델을 품고 있어서, 데이터 모델이 바뀌면 기능이 같아도 앱을 고쳐야 했다",
      "Perl이 느려서 주문 처리가 밀렸다",
      "데이터베이스를 하나만 써서 디스크가 부족했다",
    ],
    answer: 1,
    explanation:
      "선언문은 당시 구조를 data bound라고 부르며, 앱과 데이터 모델이 강하게 묶여 있다고 짚는다. 앱 Obidos는 오히려 상태 없는 모놀리스였고, 데이터베이스는 여러 개였지만 모두가 같이 쓰는 자원이라 병목이 됐다.",
    anchor: "앱이-테이블을-직접-읽던-2계층",
  },
  {
    id: "rw-amazon-distributed-computing-manifesto-2",
    post: "rw-amazon-distributed-computing-manifesto",
    question: "서비스를 여러 개로 나눴지만 각 서비스가 여전히 같은 테이블을 직접 읽는다. 선언문의 관점에서 이 상태를 어떻게 봐야 하나?",
    choices: [
      "테이블이 여전히 모두의 계약이라 데이터 모델 변경이 모두를 묶으므로, 선언문이 풀려던 문제가 남아 있다",
      "프로세스가 나뉘었으니 선언문의 목표를 이룬 것이다",
      "읽기만 공유하면 문제가 없고 쓰기만 나누면 된다",
      "서비스 수가 충분히 많으면 문제가 저절로 사라진다",
    ],
    answer: 0,
    explanation:
      "선언문이 겨냥한 것은 프로세스 개수가 아니라 데이터 접근 경로다. 클라이언트가 인터페이스로만 데이터에 접근해야 데이터 구조와 위치가 바뀌어도 클라이언트가 그대로 남는다.",
    anchor: "첫째-제안-데이터-앞에-창구를-세운다",
  },
  {
    id: "rw-amazon-distributed-computing-manifesto-3",
    post: "rw-amazon-distributed-computing-manifesto",
    question: "선언문이 결제 노드에는 지휘형(directed), 여러 권 출고의 picklist → rebin에는 자율형(autonomous)이 맞다고 본 이유는?",
    choices: [
      "결제는 여러 맥락에서 불려서 바꿔 끼울 수 있는 블록이 유리하고, picklist → rebin은 이웃 관계가 고정돼 있어서",
      "결제는 느리고 picklist는 빨라서",
      "결제는 동기 호출만 가능하고 rebin은 비동기만 가능해서",
      "자율형은 데이터베이스가 필요 없고 지휘형은 필요해서",
    ],
    answer: 0,
    explanation:
      "지휘형은 조정자가 노드 사이 일을 옮겨 노드를 다른 조합에 다시 쓸 수 있다. 다음 단계가 언제나 같은 일은 노드가 스스로 넘기는 편이 단순하다. 지금 사가의 오케스트레이션과 코레오그래피 선택과 같은 축이다.",
    anchor: "둘째-제안-데이터가-일하는-곳으로-간다",
  },
  {
    id: "rw-amazon-distributed-computing-manifesto-4",
    post: "rw-amazon-distributed-computing-manifesto",
    question: "선언문이 피킹 목록용 출고 데이터를 순차 큐도 데이터 도메인도 아닌 '집계 큐'로 따로 분류한 이유는?",
    choices: [
      "데이터가 너무 커서 큐에 들어가지 않아서",
      "다른 부서에서도 널리 읽어야 해서",
      "DC 안에서만 잠깐 쓰지만 하나씩이 아니라 어느 정도 모아서 처리해야 해서",
      "영국과 독일에 복제해야 해서",
    ],
    answer: 2,
    explanation:
      "출고 방법별로 피킹 목록을 뽑으려면 출고분이 쌓여야 한다. 그래서 큐와 테이블 성질을 함께 가진 보관소가 필요했다. 널리 읽히는 재고 정보는 도메인, 차례로 처리하는 입고 품목은 큐로 분류했다.",
    anchor: "큐-도메인-그리고-집계-큐",
  },
  {
    id: "rw-amazon-distributed-computing-manifesto-5",
    post: "rw-amazon-distributed-computing-manifesto",
    question: "처리 중인 주문의 배송지를 바꾸는 문제에 선언문이 제안한 방법은?",
    choices: [
      "주문을 모두 중앙 DB로 되돌려 고친 뒤 다시 보낸다",
      "변경을 구독한 노드에 메시지로 보내고, 추적 테이블에 요청과 반영 여부를 각각 한 줄씩 남긴다",
      "주문이 끝날 때까지 변경을 받지 않는다",
      "모든 노드를 잠시 멈추고 동기로 고치는 것만 허용한다",
    ],
    answer: 1,
    explanation:
      "선언문은 발행·구독으로 변경을 퍼뜨리고, 요청 줄과 반영 줄을 남겨 영구 기록을 만들자고 한다. 동기 반영도 대안으로 들지만 모든 노드가 살아 있어야 하므로 실패해도 괜찮은 변경에만 쓰라고 한다.",
    anchor: "흘러가는-주문을-고치려면",
  },
  {
    id: "rw-amazon-distributed-computing-manifesto-6",
    post: "rw-amazon-distributed-computing-manifesto",
    question: "PostgreSQL 실험에서 report_script의 테이블 직접 접근을 막아 둔 것이 중요한 이유는?",
    choices: [
      "SECURITY DEFINER 함수는 테이블 권한이 없으면 실행되지 않아서",
      "테이블을 직접 읽으면 쿼리가 더 느려져서",
      "함수가 결과를 캐시하려면 테이블이 잠겨 있어야 해서",
      "직접 접근이 열려 있으면 결국 누군가 테이블을 읽게 되고, 컬럼 이름이 다시 모두의 계약이 되기 때문에",
    ],
    answer: 3,
    explanation:
      "창구는 유일한 길일 때 계약이 된다. 실험에서 컬럼 이름을 바꿔도 함수 본문만 고치면 스크립트는 그대로였다. 함수는 소유자 권한으로 실행되므로 호출자에게 테이블 권한이 없어도 동작한다.",
    anchor: "두-장치를-postgresql로-작게-만들어-보기",
  },
  {
    id: "rw-amazon-distributed-computing-manifesto-7",
    post: "rw-amazon-distributed-computing-manifesto",
    question: "Werner Vogels가 2023년 글에서 서비스들을 합쳐 볼 만하다고 한 조건에 들지 않는 것은?",
    choices: [
      "늘 함께 응답에 참여한다",
      "확장과 성능 요구가 같다",
      "한 팀이 관리한다",
      "서로 다른 프로그래밍 언어로 작성되어 있다",
    ],
    answer: 3,
    explanation:
      "Vogels가 든 조건은 늘 함께 응답에 참여하고, 확장·성능 요구와 보안 측면이 같고, 무엇보다 한 팀이 관리하는 것이다. 언어가 다르다는 건 오히려 합치기 어렵게 만드는 요소다.",
    anchor: "25년-뒤-모놀리스는-공룡이-아니다",
  },
];
