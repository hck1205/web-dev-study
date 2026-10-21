import type { QuizQuestion } from "../types";

export const SD_NEARBY_FRIENDS: QuizQuestion[] = [
  {
    id: "sd-nearby-friends-1",
    post: "sd-nearby-friends",
    question: "동시 사용자 100만 명이 30초마다 위치를 올리고, 켜 둔 친구가 평균 30명이면 서버가 밀어내야 하는 메시지는 초당 대략 몇 건인가?",
    choices: ["약 3만 3천 건", "약 100만 건", "약 3,000만 건", "약 1만 건"],
    answer: 1,
    explanation:
      "들어오는 갱신은 100만 ÷ 30 ≈ 33,333건이고, 하나가 친구 30명에게 가니 약 100만 건이 된다. 3만 3천은 들어오는 양만 센 값이다. 나가는 양이 들어오는 양의 30배라서 설계의 부담이 대부분 팬아웃에서 나온다.",
    anchor: "가게와-달리-계속-움직인다",
  },
  {
    id: "sd-nearby-friends-2",
    post: "sd-nearby-friends",
    question: "실험에서 앨리스의 친구는 셋인데 PUBLISH loc:alice의 반환값이 2였다. 이유는?",
    choices: [
      "친구 하나가 오프라인이라서",
      "Redis가 메시지 하나를 잃어서",
      "밥과 캐럴이 같은 ws-2에 붙어 있어 ws-2가 채널을 한 번만 구독했기 때문에",
      "데이브가 5km 밖이라 Redis가 걸러서",
    ],
    answer: 2,
    explanation:
      "PUBLISH는 구독한 연결 수를 돌려준다. 구독은 사용자가 아니라 WebSocket 서버 단위라서, 같은 서버의 친구 둘은 연결 하나로 받는다. 거리 거르기는 Redis가 아니라 받은 서버가 한다.",
    anchor: "실제로-퍼뜨려-보기",
  },
  {
    id: "sd-nearby-friends-3",
    post: "sd-nearby-friends",
    question: "반경 5km 판정을 발행하는 서버가 아니라 받는 서버에서 하는 이유는?",
    choices: [
      "받는 서버가 자기 사용자의 위치를 메모리에 들고 있어서 추가로 읽을 게 없기 때문에",
      "발행하는 서버는 하버사인 공식을 쓸 수 없어서",
      "Redis Pub/Sub이 거리 필터를 지원해서",
      "받는 쪽에서 재야 메시지가 덜 날아가서",
    ],
    answer: 0,
    explanation:
      "발행하는 쪽에서 재려면 발행할 때마다 친구 300명의 위치를 캐시에서 읽어야 한다. 받는 쪽은 메시지 하나와 메모리의 값으로 끝난다. 반경 밖 메시지가 한 번 날아가는 낭비는 감수한다.",
    anchor: "거리는-받는-쪽에서-거른다",
  },
  {
    id: "sd-nearby-friends-4",
    post: "sd-nearby-friends",
    question: "앱을 끈 친구를 목록에서 빼는 방법으로 이 설계가 고른 것은?",
    choices: [
      "앱이 종료할 때 보내는 로그아웃 요청을 기다린다",
      "마지막 위치를 10분 만료로 캐시에 쓰고, 갱신될 때마다 기한을 다시 늘린다",
      "매분 전체 사용자를 훑는 배치 작업을 돌린다",
      "위치 이력 DB에서 마지막 기록 시각을 조회한다",
    ],
    answer: 1,
    explanation:
      "만료가 걸린 캐시면 갱신이 끊긴 사람은 저절로 사라져서 오프라인 처리를 따로 짤 필요가 없다. 앱이 죽거나 신호가 끊기면 종료 요청은 오지 않을 수 있다. 메모리도 동시 사용자 수에 묶인다.",
    anchor: "마지막-위치는-만료와-함께-이력은-따로",
  },
  {
    id: "sd-nearby-friends-5",
    post: "sd-nearby-friends",
    question: "같은 서버에서 두 사용자가 loc:alice를 필요로 하다가 한 명이 앱을 껐다. 서버는 어떻게 해야 하나?",
    choices: [
      "바로 loc:alice 구독을 끊는다",
      "모든 구독을 끊고 다시 구독한다",
      "채널별 사용자 수를 하나 줄이고, 0이 아니니 구독을 유지한다",
      "Redis에 UNSUBSCRIBE를 두 번 보낸다",
    ],
    answer: 2,
    explanation:
      "서버는 채널마다 그 채널이 필요한 사용자 수를 세고 0이 될 때만 끊는다. 바로 끊으면 남은 사용자가 앨리스의 소식을 못 받는다.",
    anchor: "친구가-들어오고-나갈-때",
  },
  {
    id: "sd-nearby-friends-6",
    post: "sd-nearby-friends",
    question: "Pub/Sub 노드를 10대에서 11대로 늘릴 때 채널 배치에 안정 해시를 쓰는 이유는?",
    choices: [
      "메시지가 디스크에 남게 하려고",
      "옮겨 가는 채널이 약 9%로 줄어 다시 구독하는 양과 잃는 위치가 줄기 때문에",
      "채널 이름을 짧게 만들려고",
      "Redis Cluster의 PUBLISH가 모든 노드로 퍼지게 하려고",
    ],
    answer: 1,
    explanation:
      "나머지로 나누면 채널 10만 개 중 91%가 옮겨 갔고, 해시 링은 9.3%만 옮겼다. 옮긴 채널마다 모든 구독 서버가 다시 구독해야 하고 그 사이 위치를 잃는다. 클러스터 전체로 퍼지는 PUBLISH는 오히려 밀어내는 양을 나누지 못하는 문제다.",
    anchor: "채널을-노드에-나누고-노드를-늘릴-때",
  },
  {
    id: "sd-nearby-friends-7",
    post: "sd-nearby-friends",
    question: "WebSocket 서버 한 대를 내려야 할 때 맞는 순서는?",
    choices: [
      "프로세스를 바로 끄고 앱이 알아서 다시 붙게 한다",
      "Redis 구독을 먼저 모두 끊는다",
      "사용자 DB에 서버 이름을 지운다",
      "비우는 중으로 표시해 새 연결을 막고, 연결을 몇 분에 걸쳐 조금씩 닫은 뒤 끈다",
    ],
    answer: 3,
    explanation:
      "바로 끄면 수만 명이 동시에 끊기고 동시에 다시 붙어 사용자 DB와 캐시가 몰린다. 조금씩 닫으면 다른 서버로 고르게 옮겨 간다. 앱 쪽에는 지수적 대기와 무작위 지연을 둔다.",
    anchor: "websocket-서버를-내릴-때",
  },
];
