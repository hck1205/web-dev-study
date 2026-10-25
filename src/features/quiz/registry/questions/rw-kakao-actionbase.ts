import type { QuizQuestion } from "../types";

export const RW_KAKAO_ACTIONBASE: QuizQuestion[] = [
  {
    id: "rw-kakao-actionbase-1",
    post: "rw-kakao-actionbase",
    question: "찜(t=100) → 취소(t=200) → 찜(t=300)이 찜(100), 찜(300), 취소(200) 순서로 도착했다. Actionbase 방식으로 처리하면 마지막 상태와 개수는?",
    choices: [
      "취소가 마지막에 도착했으니 비활성, 개수 0",
      "찜이 두 번 반영되어 활성, 개수 2",
      "가장 늦은 시각의 이벤트가 찜(300)이니 활성, 개수 1",
      "순서가 뒤바뀐 이벤트는 거절되어 활성, 개수 1이지만 취소는 재시도 큐로 간다",
    ],
    answer: 2,
    explanation:
      "Actionbase는 도착 순서가 아니라 이벤트에 붙은 클라이언트 시각으로 상태를 정한다. createdAt 300이 deletedAt 200보다 늦으니 활성이고, 개수는 활성 여부가 바뀔 때만 움직이므로 1이다. 늦게 온 이벤트를 거절하지 않고 받아서 반영할 뿐 결과에 영향이 없다.",
    anchor: "찜-취소-다시-찜이-뒤섞여-도착하면",
  },
  {
    id: "rw-kakao-actionbase-2",
    post: "rw-kakao-actionbase",
    question: "Actionbase가 HBase 행 키 맨 앞에 xxhash32 4바이트를 붙이는 이유와 그 대가로 맞는 것은?",
    choices: [
      "키를 암호화하려는 것이고, 대가로 읽기마다 복호화 비용이 든다",
      "행을 리전 전체에 흩어 쓰기 핫스폿을 막으려는 것이고, 대가로 여러 출발점을 가로지르는 전역 정렬 스캔을 할 수 없다",
      "중복 행을 막으려는 것이고, 대가로 같은 사용자의 행이 여러 리전에 흩어진다",
      "압축률을 높이려는 것이고, 대가로 쓰기 지연이 늘어난다",
    ],
    answer: 1,
    explanation:
      "HBase는 행 키 순서로 구간을 나눠서 비슷한 키가 몰리면 한 리전만 바빠진다. 해시를 앞에 두면 사용자들이 고르게 흩어지지만, 키 순서가 해시 순서가 되어 모든 사용자를 가로지르는 정렬 스캔은 이 키로 할 수 없다. 같은 사용자의 같은 테이블·같은 종류 행은 같은 해시라 한 구간에 모인다.",
    anchor: "행-키-앞에-붙인-4바이트-해시",
  },
  {
    id: "rw-kakao-actionbase-3",
    post: "rw-kakao-actionbase",
    question: "카카오가 State, Index, Count 사이의 어긋남을 다루는 방식으로 운영 사례 문서에 적은 것은?",
    choices: [
      "HBase 트랜잭션으로 세 행을 묶어 어긋남이 생기지 않게 한다",
      "Index와 Count를 진실로 두고 State를 거기서 다시 만든다",
      "어긋남이 생기면 해당 사용자의 데이터를 모두 지우고 다시 받는다",
      "스냅숏을 내보내 정기적으로 대조하고, State를 진실로 삼아 Index와 Count를 다시 만든다",
    ],
    answer: 3,
    explanation:
      "HBase의 여러 행 배치는 원자적이지 않아서 일부만 쓰이는 실패가 생길 수 있다. 카카오는 이를 막기보다 스냅숏과 Spark 검증으로 찾아내고, 원본인 State에서 파생 데이터를 재생성한다. 검증 주기는 서비스 SLA로 정한다.",
    anchor: "원자적이라는-문서와-원자적이지-않다는-문서",
  },
  {
    id: "rw-kakao-actionbase-4",
    post: "rw-kakao-actionbase",
    question: "Gift Wish 이전에서 읽기를 Actionbase로 넘긴 뒤에도 기존 MySQL에 계속 쓰기를 보낸 이유는?",
    choices: [
      "문제가 생기면 바로 기존 시스템으로 되돌릴 수 있게 하려고",
      "Actionbase가 쓰기를 처리하지 못해서 MySQL이 대신 받아야 해서",
      "Spring Batch가 MySQL에서만 역방향 개수를 모을 수 있어서",
      "규정상 원본을 두 곳에 보관해야 해서",
    ],
    answer: 0,
    explanation:
      "읽기를 넘기면 Actionbase가 원천이 되지만, 기존 시스템도 같은 데이터를 계속 받고 있으면 이상이 생겼을 때 읽기만 되돌리면 된다. 카카오는 몇 달 동안 문제가 없음을 확인한 뒤에야 기존 시스템을 걷어 냈다.",
    anchor: "다섯-단계로-옮긴-위시리스트",
  },
  {
    id: "rw-kakao-actionbase-5",
    post: "rw-kakao-actionbase",
    question: "이전 검증에서 HBase를 직접 읽지 않고 CDC로 쌓은 스냅숏을 원본 DB 덤프와 비교한 이유는?",
    choices: [
      "HBase는 외부에서 읽을 수 없어서",
      "CDC 스냅숏이 더 작아서 비교가 빨라서",
      "원본부터 CDC까지 전체 경로가 제대로 돌아야 둘이 맞으므로, 파이프라인 전체를 한 번에 검증할 수 있어서",
      "CDC 스냅숏에는 경계 데이터가 없어서",
    ],
    answer: 2,
    explanation:
      "다른 경로로 만든 같은 데이터를 맞대면 그 경로 어디서 잘못돼도 불일치로 드러난다. 덤프와 CDC의 시각이 정확히 맞지 않는 경계 데이터는 오히려 존재해서, 이번 창에서 빼고 다음 창에서 검증한다.",
    anchor: "테스트가-통과했는데도-불안해서-만든-검증-층",
  },
  {
    id: "rw-kakao-actionbase-6",
    post: "rw-kakao-actionbase",
    question: "카카오톡 친구 사례에서 Actionbase가 맡은 역할은?",
    choices: [
      "MySQL 샤드를 대체하는 새 원천 저장소",
      "Debezium CDC로 MySQL 변경을 받아 채우는 읽기 전용 뷰",
      "쓰기를 WAL에 넣고 바로 응답하는 비동기 처리기",
      "친구 관계를 계산하는 범용 그래프 질의 엔진",
    ],
    answer: 1,
    explanation:
      "친구 관계의 원천은 그대로 샤딩된 MySQL이고, Actionbase는 CDC로 변경을 받아 새 질의를 위한 뷰가 됐다. 쓰기 경로를 건드리지 않으니 이전 위험이 없다. WAL에 넣고 바로 응답하는 방식은 최근 본 상품 사례다.",
    anchor: "원천이-아닐-때와-바로-쓰지-않을-때",
  },
  {
    id: "rw-kakao-actionbase-7",
    post: "rw-kakao-actionbase",
    question: "Actionbase Benchmarks 문서의 \"60k\" 숫자를 인용할 때 주의할 점으로 맞는 것은?",
    choices: [
      "처음부터 운영 최대 처리량으로 일관되게 적혀 있어 그대로 인용하면 된다",
      "README의 분당 100만 건과 같은 뜻이다",
      "60k는 초당 쓰기 건수만 뜻한다",
      "2026년 1월 5일 판에는 운영 처리량으로, 이후 판에는 내부 시험 값으로 적혀 있어 어느 판인지 밝혀야 한다",
    ],
    answer: 3,
    explanation:
      "같은 문서가 몇 주 사이에 여러 번 바뀌었다. 지금 판은 운영 최대를 약 33k RPS로, 60k 이상은 내부 시험 값으로 적는다. 공개 자료의 숫자는 판마다 다를 수 있으니 날짜와 함께 인용해야 한다.",
    anchor: "숫자는-어느-판의-숫자인가",
  },
];
