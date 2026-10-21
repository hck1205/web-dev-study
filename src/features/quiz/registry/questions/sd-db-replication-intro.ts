import type { QuizQuestion } from "../types";

export const SD_DB_REPLICATION_INTRO: QuizQuestion[] = [
  {
    id: "sd-db-replication-intro-1",
    post: "sd-db-replication-intro",
    question: "복제 구성에서 웹 앱이 복제본에 INSERT를 보내면 어떻게 되나?",
    choices: [
      "복제본이 받아서 주 DB로 전달한다",
      "복제본에 저장되고 나중에 주 DB와 합쳐진다",
      "복제본은 읽기 전용이라 거절한다",
      "아무 복제본에나 저장되고 나머지는 모른다",
    ],
    answer: 2,
    explanation:
      "복제본이 쓰기를 받으면 주 DB와 내용이 달라지므로 읽기 전용으로 동작한다. Redis는 READONLY 오류를, PostgreSQL 스탠바이는 read-only transaction 오류를 돌려준다. 그래서 웹 앱이나 프록시가 쓰기는 주 DB로, 읽기는 복제본으로 나눠 보내야 한다.",
    anchor: "세-대로-복제를-걸어-보기",
  },
  {
    id: "sd-db-replication-intro-2",
    post: "sd-db-replication-intro",
    question: "리뷰를 쓰고 OK를 받았는데 곧바로 연 목록에 그 리뷰가 없다. 읽기는 복제본으로 간다. 가장 그럴듯한 이유는?",
    choices: [
      "비동기 복제라 로그가 아직 그 복제본에 도착하지 않아서",
      "주 DB가 쓰기를 거절했는데 OK를 잘못 보내서",
      "복제본이 읽기 전용이라 새 행을 보여 주지 않아서",
      "로드 밸런서가 응답을 캐시해서",
    ],
    answer: 0,
    explanation:
      "기본 설정의 비동기 복제는 주 DB가 복제본을 기다리지 않고 답한다. 그 사이 복제본에서 읽으면 아직 없는 것이 정상이고, 로그가 도착하면 따라잡는다. 쓴 사용자의 읽기를 잠깐 주 DB로 보내는 식으로 read-your-writes를 보장한다.",
    anchor: "방금-쓴-리뷰가-안-보인다",
  },
  {
    id: "sd-db-replication-intro-3",
    post: "sd-db-replication-intro",
    question: "Redis INFO replication에서 한 복제본이 offset=98, 다른 복제본이 offset=196, 둘 다 lag=0이다. 어떻게 읽어야 하나?",
    choices: [
      "lag가 0이니 둘 다 완전히 따라왔다",
      "offset=98인 복제본이 98바이트만큼 뒤처져 있다",
      "offset=196인 복제본이 너무 많이 받아 문제가 있다",
      "offset은 접속한 순서일 뿐 의미가 없다",
    ],
    answer: 1,
    explanation:
      "offset은 복제본이 받은 로그의 위치라서 차이가 곧 뒤처진 양이다. Redis의 lag는 마지막 확인 신호 이후 지난 초라서, 확인 신호만 오가면 0으로 보여도 데이터는 뒤처져 있을 수 있다.",
    anchor: "방금-쓴-리뷰가-안-보인다",
  },
  {
    id: "sd-db-replication-intro-4",
    post: "sd-db-replication-intro",
    question: "주 DB가 죽었다. 복제본 A는 offset 325, B는 210까지 받았다. 어느 쪽을 승격해야 하고 왜인가?",
    choices: [
      "B. 덜 받았으니 부하가 적어서",
      "아무 쪽이나. 결국 같은 데이터가 된다",
      "둘 다 승격해 쓰기를 나눠 받는다",
      "A. 더 많이 받아서 주 DB가 마지막에 응답한 쓰기를 가지고 있을 가능성이 높아서",
    ],
    answer: 3,
    explanation:
      "가장 앞선 복제본을 올려야 잃는 쓰기가 가장 적다. 실습에서도 리뷰 43은 A에만 있었고 B를 올렸다면 사라졌다. 둘 다 승격하면 주 DB가 둘이 되는 스플릿 브레인이 된다.",
    anchor: "주-db가-죽으면-누가-이어받나",
  },
  {
    id: "sd-db-replication-intro-5",
    post: "sd-db-replication-intro",
    question: "비동기 복제에서 성공 응답을 받은 쓰기를 잃지 않으려고 동기 복제를 켤 때의 대가는?",
    choices: [
      "쓰기마다 복제본까지 왕복 시간이 붙고, 그 복제본이 멈추면 쓰기도 멈출 수 있다",
      "복제본에서 읽기를 할 수 없게 된다",
      "백업이 필요 없어진다",
      "복제본 수를 하나로 줄여야 한다",
    ],
    answer: 0,
    explanation:
      "동기 복제는 복제본이 받았다는 확인을 기다린 뒤에 답한다. 그래서 쓰기가 느려지고 기다리는 복제본이 멈추면 쓰기도 함께 멈출 수 있다. 그래서 복제본 하나만 동기로 두거나 중요한 쓰기에만 거는 식으로 절충한다.",
    anchor: "주-db가-죽으면-누가-이어받나",
  },
  {
    id: "sd-db-replication-intro-6",
    post: "sd-db-replication-intro",
    question: "누군가 실수로 DELETE FROM reviews;를 실행했다. 복제본이 두 대 있다면?",
    choices: [
      "복제본에는 리뷰가 남아 있으니 복제본을 승격하면 된다",
      "복제본은 DELETE를 복제하지 않는다",
      "복제본도 몇 ms 뒤 똑같이 지워지므로 백업으로 되돌려야 한다",
      "주 DB가 DELETE를 자동으로 취소한다",
    ],
    answer: 2,
    explanation:
      "복제본은 주 DB의 기록을 충실히 따라 쓰므로 잘못된 명령도 함께 적용한다. 복제는 서버 고장에 대비하는 것이고, 잘못 바꾼 데이터는 백업과 WAL 보관으로 실수 직전 시점으로 복구해야 한다.",
    anchor: "복제는-백업이-아니다",
  },
  {
    id: "sd-db-replication-intro-7",
    post: "sd-db-replication-intro",
    question: "초당 읽기 6,000, 쓰기 1,800, 한 대 처리량 2,000이다. 복제본을 늘리는 효과가 작은 이유는?",
    choices: [
      "복제본은 읽기를 받을 수 없어서",
      "복제본마다 쓰기 1,800을 다시 적용해야 해서 읽기에 쓸 여유가 200뿐이라서",
      "주 DB가 읽기를 모두 처리해서",
      "복제본이 많으면 복제 지연이 0이 되어서",
    ],
    answer: 1,
    explanation:
      "복제본은 주 DB의 모든 쓰기를 똑같이 적용하므로 쓰기를 덜어 주지 못한다. 여유가 200이면 읽기 6,000을 위해 30대가 필요하다. 쓰기가 한 대의 한계에 가까워지면 샤딩을 검토할 때다.",
    anchor: "복제본은-몇-대가-필요할까",
  },
];
