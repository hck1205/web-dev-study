import type { QuizQuestion } from "../types";

export const MONOLITH_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "monolith-architecture-1",
    post: "monolith-architecture",
    question: "같은 이미지를 서버 열 대에 띄워 로드 밸런서 뒤에 두었다. 이 구조는 무엇인가?",
    choices: [
      "서버가 여러 대이므로 마이크로서비스다",
      "배포 단위가 하나이므로 여전히 모놀리스다",
      "인스턴스마다 DB가 따로 있어야 모놀리스다",
      "수평 확장을 했으므로 분산 모놀리스다",
    ],
    answer: 1,
    explanation:
      "모놀리스를 가르는 기준은 서버 대수가 아니라 배포 단위다. 같은 코드를 한 번에 빌드해 한 번에 내보낸다면 몇 대를 띄우든 모놀리스다. 분산 모놀리스는 서비스를 나눴는데도 함께 배포해야 하는 상태를 말한다.",
    anchor: "하나로-빌드하고-하나로-배포한다",
  },
  {
    id: "monolith-architecture-2",
    post: "monolith-architecture",
    question:
      "재고 1개인 상품에 대해 한 트랜잭션 안에서 주문을 INSERT하고, 재고를 2 줄이는 UPDATE가 CHECK (qty >= 0)에 걸렸다. COMMIT 뒤의 상태는?",
    choices: [
      "주문 1건이 남고 재고는 1이다",
      "주문 1건이 남고 재고는 -1이다",
      "주문 0건, 재고 1로 아무 일도 없던 것이 된다",
      "주문 0건, 재고 0이다",
    ],
    answer: 2,
    explanation:
      "트랜잭션 안에서 에러가 나면 그 트랜잭션은 실패 상태가 되고, COMMIT을 보내도 ROLLBACK으로 끝난다. 이미 성공한 주문 INSERT까지 함께 취소된다. 서비스 두 개와 DB 두 개로 나누면 이 보장이 사라져 보상 절차가 필요해진다.",
    anchor: "트랜잭션-하나가-지켜-주는-것",
  },
  {
    id: "monolith-architecture-3",
    post: "monolith-architecture",
    question:
      "Node 모놀리스에서 /report가 2초짜리 동기 반복문을 도는 동안 /orders 응답이 모두 2초 가까이 늦어졌다. 가장 알맞은 해결은?",
    choices: [
      "리포트 작업을 worker_threads나 별도 워커 프로세스로 옮긴다",
      "/orders 핸들러를 async 함수로 바꾼다",
      "DB 커넥션 풀 크기를 늘린다",
      "/orders 응답을 캐시한다",
    ],
    answer: 0,
    explanation:
      "자바스크립트가 도는 스레드가 하나라서 동기 CPU 작업이 그 스레드를 쥐면 다른 요청이 모두 기다린다. 리포트를 다른 스레드나 프로세스로 옮기면 주문 요청은 몇 ms에 끝난다. 주문 쪽을 async로 바꿔도 스레드가 막혀 있으면 소용없다.",
    anchor: "리포트-하나가-주문-api를-멈춘-이유",
  },
  {
    id: "monolith-architecture-4",
    post: "monolith-architecture",
    question:
      "쿠폰 핸들러의 setTimeout 콜백에서 TypeError가 났다. 직후 /orders를 호출한 사용자가 받는 결과로 가장 알맞은 것은?",
    choices: [
      "정상 응답. 예외는 쿠폰 요청에만 영향을 준다",
      "500 Internal Server Error",
      "쿠폰 요청이 끝날 때까지 대기한 뒤 정상 응답",
      "연결 거부. 프로세스가 종료되어 받아 줄 곳이 없다",
    ],
    answer: 3,
    explanation:
      "비동기 콜백에서 던진 예외를 잡는 곳이 없으면 Node 프로세스가 종료된다. 그 프로세스가 맡던 주문·결제 기능도 함께 내려가 연결 거부가 난다. 요청 단위 예외 처리, 여러 프로세스, 재시작 감시자로 피해를 줄인다.",
    anchor: "한-기능의-예외가-프로세스를-끝낸다",
  },
  {
    id: "monolith-architecture-5",
    post: "monolith-architecture",
    question: "모놀리스를 여러 인스턴스로 수평 확장했더니 사용자가 자꾸 로그아웃된다. 원인으로 가장 그럴듯한 것은?",
    choices: [
      "로드 밸런서가 HTTPS를 지원하지 않는다",
      "로그인 세션을 각 프로세스 메모리에 저장하고 있다",
      "DB 읽기 복제본의 복제 지연",
      "워커 프로세스가 세션을 지운다",
    ],
    answer: 1,
    explanation:
      "세션이 프로세스 메모리에 있으면 다음 요청이 다른 인스턴스로 갈 때 세션을 찾지 못한다. 세션을 Redis나 DB로 빼서 인스턴스가 상태를 들고 있지 않게 해야 수평 확장이 된다.",
    anchor: "한-덩어리를-여러-개로-늘리는-법",
  },
  {
    id: "monolith-architecture-6",
    post: "monolith-architecture",
    question: "서비스 A를 배포할 때마다 B와 C도 같은 날 배포해야 하고, 셋이 같은 orders 테이블을 읽고 쓴다. 이 상태를 무엇이라 부르나?",
    choices: ["모듈러 모놀리스", "레이어드 아키텍처", "이벤트 소싱", "분산 모놀리스"],
    answer: 3,
    explanation:
      "서비스는 나뉘었는데 함께 배포해야 하고 데이터까지 공유하면 분산 모놀리스다. 모놀리스의 함께 배포하는 문제와 마이크로서비스의 네트워크 문제를 모두 가진다. 모듈러 모놀리스는 반대로 배포는 하나지만 코드 안의 경계가 단단한 구조다.",
    anchor: "쪼갰는데도-모놀리스인-경우",
  },
  {
    id: "monolith-architecture-7",
    post: "monolith-architecture",
    question: "바뀐 모듈과 그 모듈에 기대는 모듈만 테스트하는 방식이 거의 효과가 없는 경우는?",
    choices: [
      "모듈 사이에 순환 의존이 많을 때",
      "모듈 수가 적을 때",
      "테스트가 단위 테스트 위주일 때",
      "모노레포를 쓸 때",
    ],
    answer: 0,
    explanation:
      "순환이 있으면 하나를 고쳐도 순환 안의 모든 모듈이 영향 범위에 들어간다. 순환이 많을수록 바뀐 것만 테스트하는 일이 전부 테스트하는 일과 같아진다. 그래서 순환을 끊는 작업이 먼저다.",
    anchor: "크면서-생기는-진짜-문제는-배포다",
  },
];
