import type { QuizQuestion } from "../types";

export const GRAPHQL_SUBSCRIPTIONS_DEFER: QuizQuestion[] = [
  {
    id: "graphql-subscriptions-defer-1",
    post: "graphql-subscriptions-defer",
    question: "배치 작업이 DB의 주문 상태를 직접 바꿨는데 구독자에게 아무것도 오지 않았다. 가장 알맞은 설명은?",
    choices: [
      "구독은 서버 코드가 낸 이벤트를 응답으로 바꾸는 것이라, 이벤트를 내지 않은 변경은 구독자가 알 수 없다",
      "구독은 DB 변경을 감지하지만 배치 작업은 트랜잭션이 길어서 늦게 온다",
      "WebSocket 연결이 HTTP/2를 쓰지 않아서",
      "구독 작업에 최상위 필드가 둘 이상이라서",
    ],
    answer: 0,
    explanation:
      "GraphQL 구독은 subscribe 함수가 만든 이벤트 원천에서 이벤트가 나올 때만 결과를 보낸다. 뮤테이션이든 배치든 변경한 쪽이 이벤트를 내야 한다. 데이터 변경을 스스로 감지하는 기능이 아니다.",
    anchor: "구독은-이벤트를-응답으로-바꾼다",
  },
  {
    id: "graphql-subscriptions-defer-2",
    post: "graphql-subscriptions-defer",
    question: "graphql-ws 클라이언트가 연결을 열고 `connection_init` 없이 바로 `subscribe`를 보냈다. 어떻게 되나?",
    choices: [
      "서버가 connection_ack를 대신 보내고 구독을 시작한다",
      "구독은 되지만 인증 정보 없이 익명으로 처리된다",
      "4401 Unauthorized로 연결이 닫힌다",
      "4408 Connection initialisation timeout으로 닫힌다",
    ],
    answer: 2,
    explanation:
      "graphql-transport-ws 프로토콜에서는 connection_init과 connection_ack가 먼저 오가야 구독을 보낼 수 있다. 인사 없이 subscribe를 보내면 4401로 닫힌다. 4408은 정해진 시간 안에 connection_init을 아예 보내지 않았을 때다.",
    anchor: "websocket-위에서-오가는-메시지",
  },
  {
    id: "graphql-subscriptions-defer-3",
    post: "graphql-subscriptions-defer",
    question: "서버 두 대에서 프로세스 안의 EventEmitter를 버스로 쓴다. 구독은 A에, 뮤테이션은 B에 갔을 때 결과는?",
    choices: [
      "로드 밸런서가 이벤트를 A로 복사해 준다",
      "A의 구독자는 이벤트를 받지 못하고 에러도 나지 않는다",
      "B가 A로 이벤트를 전달하다가 타임아웃 에러를 낸다",
      "뮤테이션이 실패한다",
    ],
    answer: 1,
    explanation:
      "B의 EventEmitter에 낸 이벤트는 B 프로세스 안에서만 돈다. A에 연결된 구독자는 알 길이 없고 어디에도 에러가 없어서 운영에서 확률적으로만 드러난다. Redis pub/sub 같은 공용 채널로 이벤트를 발행해야 모든 서버가 받는다.",
    anchor: "서버가-두-대가-되면-이벤트가-반만-간다",
  },
  {
    id: "graphql-subscriptions-defer-4",
    post: "graphql-subscriptions-defer",
    question: "구독 이벤트를 Redis pub/sub로 나를 때 클라이언트가 재연결 후 쿼리로 현재 상태를 다시 받아야 하는 이유는?",
    choices: [
      "Redis가 메시지 순서를 뒤집어 보내서",
      "재연결하면 구독 id가 바뀌어 이전 이벤트가 버려져서",
      "graphql-ws가 재연결 때 캐시를 지워서",
      "pub/sub는 메시지를 저장하지 않아, 끊긴 사이에 발행된 이벤트는 다시 받을 수 없어서",
    ],
    answer: 3,
    explanation:
      "Redis pub/sub는 발행하는 순간 듣고 있던 구독자에게만 전달하고 저장하지 않는다. 배포나 네트워크 끊김 사이의 이벤트는 사라지니 재연결 뒤 현재 상태를 쿼리로 다시 맞춘다. 놓치면 안 되는 이벤트라면 Redis Streams나 Kafka처럼 위치를 기억하는 저장소를 쓴다.",
    anchor: "서버가-두-대가-되면-이벤트가-반만-간다",
  },
  {
    id: "graphql-subscriptions-defer-5",
    post: "graphql-subscriptions-defer",
    question: "같은 주문을 1만 명이 구독할 때, 구독 결과에 DB를 부르는 `buyer` 필드를 넣으면 생기는 일은?",
    choices: [
      "이벤트 하나에 buyer 리졸버가 구독자 수만큼 불린다",
      "DataLoader가 구독자 사이에서 묶어 한 번만 부른다",
      "실행기가 같은 문서의 결과를 자동으로 공유해 한 번만 부른다",
      "구독에서는 객체 필드를 고를 수 없어 검증에서 막힌다",
    ],
    answer: 0,
    explanation:
      "실행기는 이벤트를 구독자마다 따로 실행한다. 측정에서 이벤트 하나에 buyer 리졸버가 1만 번 불렸고 전달에만 0.7초 가까이 걸렸다. 요청 단위 DataLoader는 구독자 사이에서 공유되지 않으니, 페이로드에는 이벤트에 이미 있는 값만 담는 편이 안전하다.",
    anchor: "이벤트-하나에-실행은-구독자-수만큼",
  },
  {
    id: "graphql-subscriptions-defer-6",
    post: "graphql-subscriptions-defer",
    question: "`@defer`에 대한 설명으로 맞는 것은?",
    choices: [
      "값이 바뀔 때마다 새 결과를 계속 보내는 기능이다",
      "서버가 반드시 나눠 보내야 하므로 지원하지 않는 서버는 에러를 낸다",
      "한 번의 응답을 준비된 순서로 나눠 받게 하는 허락이며, 2026년 현재 명세 제안 단계다",
      "서버가 하는 일의 총량을 줄여 준다",
    ],
    answer: 2,
    explanation:
      "@defer는 응답을 첫 결과와 이어지는 조각으로 나눠 받게 하고 hasNext가 false면 끝난다. 계속 바뀌는 값을 받는 구독과 다르다. 서버는 이를 무시하고 한 번에 보내도 되며, 줄어드는 것은 일의 총량이 아니라 첫 화면까지의 시간이다.",
    anchor: "느린-필드를-나중에-보내는-defer와-stream",
  },
  {
    id: "graphql-subscriptions-defer-7",
    post: "graphql-subscriptions-defer",
    question: "구독 이벤트가 서버 여러 대를 거치며 `DELIVERED` 뒤에 `SHIPPED`가 늦게 도착할 수 있다. 화면이 되돌아가지 않게 하는 방법은?",
    choices: [
      "구독을 서버 한 대에만 붙게 고정한다",
      "이벤트에 version이나 updatedAt을 두고 가진 것보다 오래된 이벤트는 버린다",
      "이벤트를 '수량을 1 늘린다'처럼 변화량으로 보낸다",
      "폴링 간격을 줄인다",
    ],
    answer: 1,
    explanation:
      "pub/sub와 서버 여러 대를 거치면 순서가 바뀔 수 있으니, 객체에 버전을 두고 클라이언트가 오래된 이벤트를 무시한다. 변화량 이벤트는 중복으로 받으면 결과가 틀려지므로 '상태를 이 값으로'처럼 멱등하게 설계한다.",
    anchor: "이벤트에는-무엇을-담을까",
  },
];
