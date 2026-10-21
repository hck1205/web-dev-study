import type { QuizQuestion } from "../types";

export const SD_SPLIT_WEB_AND_DB: QuizQuestion[] = [
  {
    id: "sd-split-web-and-db-1",
    post: "sd-split-web-and-db",
    question: "웹 앱과 DB가 한 서버에 있을 때, 웹 앱이 메모리를 많이 쓴 직후 리뷰 작성이 모두 실패했다. 가장 그럴듯한 이유는?",
    choices: [
      "DNS 캐시가 만료돼서",
      "메모리가 바닥나 OOM killer가 PostgreSQL 프로세스를 강제로 꺼서",
      "웹 앱이 SQL 문법을 잘못 보내서",
      "DB의 serial 번호가 바닥나서",
    ],
    answer: 1,
    explanation:
      "한 대에서는 웹 앱과 DB가 같은 메모리를 나눠 쓴다. 메모리가 모자라면 리눅스의 OOM killer가 프로세스를 골라 끄는데, 메모리를 많이 쓰는 DB가 표적이 되기 쉽다.",
    anchor: "같은-집에-살면-생기는-다툼",
  },
  {
    id: "sd-split-web-and-db-2",
    post: "sd-split-web-and-db",
    question: "DB를 다른 서버로 옮겨 왕복 시간이 약 2.5ms 늘었다. 쿼리를 21번 보내는 N+1 화면과 JOIN 한 번짜리 화면은 각각 얼마쯤 느려지나?",
    choices: [
      "둘 다 약 2.5ms",
      "둘 다 약 52ms",
      "N+1은 약 52ms, JOIN은 약 2.5ms",
      "N+1은 약 2.5ms, JOIN은 약 52ms",
    ],
    answer: 2,
    explanation:
      "왕복 시간은 쿼리를 보낼 때마다 한 번씩 붙는다. 21번 왕복하는 화면은 21 × 2.5ms만큼, 한 번 왕복하는 화면은 한 번 치만큼 늘어난다. 데모에서도 27.8ms가 79.9ms로, 3.1ms가 5.3ms로 바뀌었다.",
    anchor: "대신-쿼리마다-길을-건넌다",
  },
  {
    id: "sd-split-web-and-db-3",
    post: "sd-split-web-and-db",
    question: "웹 서버에서 pg_isready를 돌렸더니 accepting connections가 나오는데 앱은 접속에 실패한다. 다음으로 볼 곳은?",
    choices: [
      "보안 그룹의 5432 포트 규칙",
      "DB 서버의 라우팅 테이블",
      "listen_addresses 설정",
      "계정, 비밀번호, pg_hba.conf 규칙",
    ],
    answer: 3,
    explanation:
      "accepting connections는 패킷이 DB까지 닿고 DB가 연결을 받는다는 뜻이라 네트워크 쪽은 괜찮다. 남은 것은 인증 쪽이다. no response였다면 방화벽, listen_addresses, 라우팅을 먼저 봤을 것이다.",
    anchor: "옮기는-일은-주소-한-줄이다",
  },
  {
    id: "sd-split-web-and-db-4",
    post: "sd-split-web-and-db",
    question: "웹 서버 4대가 각각 커넥션 풀을 30개씩 잡았다. PostgreSQL의 max_connections가 기본값이면 어떻게 되나?",
    choices: [
      "합이 120개라 기본값 100을 넘어 일부 연결이 거절된다",
      "풀은 필요할 때만 열리므로 아무 문제가 없다",
      "PostgreSQL이 자동으로 max_connections를 늘린다",
      "웹 서버가 4대면 연결이 4개만 필요하다",
    ],
    answer: 0,
    explanation:
      "DB 쪽에서 보는 연결 수는 서버 수 × 서버당 풀 크기다. 4 × 30 = 120으로 기본값 100을 넘는다. 웹 서버를 늘릴 때마다 이 곱을 다시 계산하고, 필요하면 풀 크기를 줄이거나 중간 풀을 둔다.",
    anchor: "연결도-이제-세어야-한다",
  },
  {
    id: "sd-split-web-and-db-5",
    post: "sd-split-web-and-db",
    question: "맛집 앱처럼 식당, 사용자, 리뷰가 얽혀 있고 새 질문이 계속 생길 때 관계형 DB가 기본값인 이유로 알맞은 것은?",
    choices: [
      "관계형 DB는 수평 확장이 가장 쉬워서",
      "JOIN으로 미리 몰랐던 질문에도 답하고, 외래 키와 CHECK로 잘못된 데이터를 막아서",
      "키 하나로 꺼내는 속도가 키-값 저장소보다 항상 빨라서",
      "스키마가 없어서 데이터 모양을 자유롭게 바꿀 수 있어서",
    ],
    answer: 1,
    explanation:
      "관계형 DB는 테이블을 키로 엮어 두고 SQL과 JOIN으로 새 질문에 답한다. 없는 식당에 리뷰를 달거나 별점 7을 넣는 것도 제약 조건이 거절한다. 키 하나로 아주 빠르게 꺼내는 일은 키-값 저장소가 더 잘한다.",
    anchor: "db를-옮기는-김에-종류도-고른다",
  },
  {
    id: "sd-split-web-and-db-6",
    post: "sd-split-web-and-db",
    question: "DB 서버를 더 큰 기종으로 바꾸는 수직 확장의 한계로 맞지 않는 것은?",
    choices: [
      "가장 큰 기종 다음은 없다",
      "큰 기종일수록 가격이 성능보다 빠르게 오른다",
      "코드를 대부분 다시 짜야 한다",
      "여전히 한 대라 그 서버가 멈추면 전부 멈춘다",
    ],
    answer: 2,
    explanation:
      "수직 확장의 장점이 바로 코드를 고치지 않아도 된다는 것이다. 한계는 하드웨어의 끝, 가파른 가격, 그리고 여전히 단일 장애 지점이라는 점이다.",
    anchor: "더-큰-서버냐-더-많은-서버냐",
  },
];
