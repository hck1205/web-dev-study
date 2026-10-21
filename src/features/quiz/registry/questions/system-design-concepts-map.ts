import type { QuizQuestion } from "../types";

export const SYSTEM_DESIGN_CONCEPTS_MAP: QuizQuestion[] = [
  {
    id: "system-design-concepts-map-1",
    post: "system-design-concepts-map",
    question: "시스템 설계 면접에서 지연·처리량·가용성 같은 '재는 말'을 가장 먼저 꺼내는 이유는?",
    choices: [
      "면접관이 용어 정의를 먼저 묻는 경우가 많아서",
      "구성 요소를 그리기 전에 숫자 목표가 있어야 캐시, 복제, 샤딩을 넣을 근거가 생겨서",
      "다른 개념보다 외우기 쉬워서",
      "로드 밸런서를 고를 때만 필요한 숫자라서",
    ],
    answer: 1,
    explanation:
      "p99, 초당 요청 수, 가용성 목표가 정해져야 \"왜 이 칸이 필요한가\"라는 꼬리 질문에 답할 수 있다. 숫자 없이 구성 요소부터 그리면 단어 나열이 된다.",
    anchor: "재는-말부터-익힌다",
  },
  {
    id: "system-design-concepts-map-2",
    post: "system-design-concepts-map",
    question:
      "app-2가 죽었을 때 LB가 그 서버로 간 GET 요청을 app-1로 다시 보내 사용자가 고장을 모르게 했다. 이것에 가장 가까운 개념은?",
    choices: ["확장성", "고가용성", "내결함성", "처리량"],
    answer: 2,
    explanation:
      "고장 난 부품의 결함을 가려 요청이 올바르게 끝나게 한 것이니 내결함성이다. 헬스 체크로 app-2를 빼고 나머지가 계속 응답하는 것은 가용성 쪽 이야기이고, 서버를 하나 더 넣는 것이 확장성이다.",
    anchor: "재는-말부터-익힌다",
  },
  {
    id: "system-design-concepts-map-3",
    post: "system-design-concepts-map",
    question: "주문을 커밋하고 201을 받은 직후 목록을 조회했더니 방금 만든 주문이 없다. 목록 조회가 비동기 복제본으로 갔다면 어떤 약속이 깨진 것인가?",
    choices: [
      "ACID의 원자성",
      "내 쓰기 읽기(read-your-writes)",
      "요청 수 제한",
      "DNS TTL 캐시",
    ],
    answer: 1,
    explanation:
      "primary에는 커밋됐지만 replica가 아직 WAL을 따라오지 못해 내가 쓴 값을 내가 못 본 것이다. 트랜잭션 자체는 온전히 커밋됐으니 원자성은 깨지지 않았다. 커밋 때 받은 LSN까지 replica가 따라왔는지 보고 읽으면 막을 수 있다.",
    anchor: "사본이-여럿이면-무엇을-약속하나",
  },
  {
    id: "system-design-concepts-map-4",
    post: "system-design-concepts-map",
    question: "ACID의 C와 CAP의 C에 대한 설명으로 옳은 것은?",
    choices: [
      "ACID의 C는 제약 같은 규칙이 지켜진다는 뜻이고, CAP의 C는 사본들이 선형화된다는 뜻이다",
      "둘 다 여러 사본이 하나처럼 보인다는 뜻이다",
      "둘 다 트랜잭션 격리 수준을 가리킨다",
      "ACID의 C는 분산 시스템에서만 의미가 있다",
    ],
    answer: 0,
    explanation:
      "ACID의 C는 한 DB 안에서 트랜잭션이 끝난 뒤 적어 둔 규칙이 지켜진다는 약속이다. CAP의 C는 여러 사본이 하나처럼 보이는 선형화다. 그래서 단일 PostgreSQL은 ACID를 지켜도 비동기 복제본 읽기는 CAP의 C를 지키지 못한다.",
    anchor: "사본이-여럿이면-무엇을-약속하나",
  },
  {
    id: "system-design-concepts-map-5",
    post: "system-design-concepts-map",
    question: "'주문이 생겼다'는 사실을 결제, 재고, 알림 서비스가 모두 각자 알아야 한다. 어떤 구조가 맞나?",
    choices: [
      "메시지 큐 하나에 넣고 세 서비스가 경쟁하는 컨슈머로 꺼낸다",
      "주문 서비스가 응답 안에서 세 서비스를 차례로 동기 호출한다",
      "토픽에 발행하고 서비스마다 구독한다(필요하면 구독자마다 큐를 붙인다)",
      "세 서비스가 주문 DB를 직접 폴링한다",
    ],
    answer: 2,
    explanation:
      "같은 사실을 여럿이 각자 받아야 하면 메시지를 구독자 모두에게 복사하는 Pub/Sub이다. 큐 하나에 경쟁하는 컨슈머를 두면 메시지가 셋 중 한 서비스에만 간다.",
    anchor: "지금-안-해도-되는-일은-미룬다",
  },
  {
    id: "system-design-concepts-map-6",
    post: "system-design-concepts-map",
    question: "인가를 API 게이트웨이에서 모두 처리하면 생기는 문제는?",
    choices: [
      "게이트웨이는 토큰 서명을 확인할 수 없다",
      "401과 403을 구분할 수 없게 된다",
      "요청 수 제한이 동작하지 않는다",
      "게이트웨이는 '이 주문의 주인이 이 사용자인가'를 몰라 객체 수준 검사가 빠지고 BOLA(IDOR)가 생긴다",
    ],
    answer: 3,
    explanation:
      "게이트웨이는 로그인 여부와 역할까지는 알지만 주문 데이터를 가진 서비스만 소유 관계를 안다. 그 검사를 빠뜨리면 주소의 숫자만 바꿔 남의 데이터를 보는 구멍이 생긴다. 그래서 거친 검사는 입구에서, 객체 수준 검사는 서비스에서 한다.",
    anchor: "누가-무엇을-얼마나",
  },
];
