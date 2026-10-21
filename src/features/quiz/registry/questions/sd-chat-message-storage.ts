import type { QuizQuestion } from "../types";

export const SD_CHAT_MESSAGE_STORAGE: QuizQuestion[] = [
  {
    id: "sd-chat-message-storage-1",
    post: "sd-chat-message-storage",
    question:
      "전체 일련번호(id)만 기본 키인 테이블에서 `WHERE channel_id = 42 ORDER BY id DESC LIMIT 20`이 144ms 걸렸고 계획에 `Rows Removed by Filter: 939940`이 보인다. 무엇이 문제인가?",
    choices: [
      "id 인덱스를 거꾸로 훑으며 다른 방의 줄을 버리느라 조용한 방일수록 많이 읽는다",
      "LIMIT이 무시되어 테이블 전체를 정렬했다",
      "통계가 없어 순차 스캔을 골랐다",
      "body 열이 너무 길어 디스크를 많이 읽었다",
    ],
    answer: 0,
    explanation:
      "계획은 Index Scan Backward에 Filter가 붙은 모양이다. 큰 번호부터 거꾸로 보며 42번 방이 아닌 줄을 하나씩 버렸고, 42번 방은 오래전에 조용해져 94만 줄을 넘겼다. 기본 키를 (channel_id, message_id)로 바꾸면 Index Cond로 바로 그 방에 간다.",
    anchor: "조용한-방이-느려지는-이유",
  },
  {
    id: "sd-chat-message-storage-2",
    post: "sd-chat-message-storage",
    question: "채팅 기록을 Cassandra에 `(channel_id, message_id)` 키로 둘 때 각 부분의 역할로 맞는 것은?",
    choices: [
      "channel_id는 정렬 순서를, message_id는 저장할 노드를 정한다",
      "channel_id는 저장할 노드를, message_id는 그 안의 정렬 순서를 정한다",
      "둘을 합친 해시로 노드를 정하고 순서는 없다",
      "message_id만 파티션 키이고 channel_id는 보조 인덱스다",
    ],
    answer: 1,
    explanation:
      "channel_id가 파티션 키라서 한 방의 메시지가 같은 노드에 모이고, message_id가 클러스터링 키라서 그 안에서 번호 순으로 붙어 저장된다. 그래서 방 하나를 번호 순서로 읽는 질문이 한 곳에서 연속으로 끝난다.",
    anchor: "키-값-저장소로-옮길-때",
  },
  {
    id: "sd-chat-message-storage-3",
    post: "sd-chat-message-storage",
    question:
      "준호의 답장이 민지의 질문보다 15ms 늦게 저장됐는데 화면에서는 위에 보인다. 가장 그럴듯한 원인은?",
    choices: [
      "WebSocket 프레임이 순서 없이 도착해서",
      "Redis INCR이 같은 번호를 두 번 줘서",
      "서버마다 시계가 달라 created_at으로 정렬하면 순서가 뒤집혀서",
      "클러스터링 키가 내림차순이라서",
    ],
    answer: 2,
    explanation:
      "답장을 저장한 서버의 시계가 늦으면 더 이른 시각이 찍혀 정렬에서 앞선다. NTP로도 몇 ms 차이는 남으니, 순서는 방마다 하나씩 올리는 번호로 정하고 시각은 표시용으로만 쓴다.",
    anchor: "메시지-번호가-지켜야-할-것",
  },
  {
    id: "sd-chat-message-storage-4",
    post: "sd-chat-message-storage",
    question: "작은 단체방에서 멤버별 받은편지함에 메시지를 복사해 넣는 방식의 장점은?",
    choices: [
      "쓰기 횟수가 메시지당 한 번으로 줄어든다",
      "수만 명 공개 채널에도 그대로 쓸 수 있다",
      "메시지 번호를 시각으로 매길 수 있다",
      "기기가 커서 하나만 들고 질문 하나로 모든 방의 새 메시지를 따라잡는다",
    ],
    answer: 3,
    explanation:
      "받은편지함은 사람마다 번호를 세니 기기는 그 번호 커서 하나만 들고 다니면 된다. 대신 메시지 하나를 멤버 수만큼 써야 하므로 멤버 수에 상한이 있는 작은 방에 맞고, 큰 방은 방 기록에 한 번만 쓰고 각자 읽게 한다.",
    anchor: "단체방은-복사할까-한-곳에서-읽을까",
  },
  {
    id: "sd-chat-message-storage-5",
    post: "sd-chat-message-storage",
    question: "확인(ack)이 늦어 앱이 같은 메시지를 다시 보냈다. 두 번 저장되지 않게 하려면?",
    choices: [
      "앱이 만든 clientMsgId를 저장 전에 SET NX나 유일 제약으로 확인하고, 이미 본 ID면 처음 번호로 확인만 다시 준다",
      "서버가 확인을 먼저 보내고 저장은 나중에 한다",
      "앱이 재전송을 하지 않게 막는다",
      "본문이 같은 메시지를 1초 안에 받으면 버린다",
    ],
    answer: 0,
    explanation:
      "재전송한 요청도 같은 clientMsgId를 들고 오니, 처음 본 ID인지 원자적으로 확인하면 중복 저장을 막는다. 확인을 저장보다 먼저 보내면 저장이 실패한 메시지를 성공으로 알리게 되고, 본문 비교는 같은 말을 일부러 두 번 보낸 경우까지 지운다.",
    anchor: "메시지-하나가-저장되고-전달되기까지",
  },
  {
    id: "sd-chat-message-storage-6",
    post: "sd-chat-message-storage",
    question:
      "커서가 3인 기기에 실시간으로 #6과 #4가 도착했다. 커서를 어떻게 다뤄야 하나?",
    choices: [
      "가장 큰 번호인 6으로 올린다",
      "4까지만 올리고 빠진 #5는 잠시 기다렸다가 저장소에 물어 채운다",
      "순서가 섞였으니 커서를 0으로 되돌린다",
      "#6과 #4를 버리고 다음 연결 때 다시 받는다",
    ],
    answer: 1,
    explanation:
      "커서를 6으로 올리면 다음 따라잡기에서 #5를 다시는 묻지 않아 영영 빠진다. 커서는 빈칸 없이 이어진 데까지만 올리고, 빈칸은 잠깐 기다린 뒤에도 안 채워지면 저장소에 묻는다.",
    anchor: "커서를-함부로-올리면-빠진다",
  },
  {
    id: "sd-chat-message-storage-7",
    post: "sd-chat-message-storage",
    question: "휴대폰과 노트북을 함께 쓰는 사용자의 동기화 커서는 어디에 두어야 하나?",
    choices: [
      "사용자마다 하나, 서버에",
      "방마다 하나, 모든 기기가 공유해서",
      "기기마다, 방별 마지막으로 받은 번호로",
      "커서 없이 다시 연결할 때마다 최근 100개를 받는다",
    ],
    answer: 2,
    explanation:
      "기기마다 연결이 끊긴 시간이 다르니 어디까지 받았는지도 다르다. 그래서 기기가 방별 커서를 들고 다시 연결할 때 커서 다음부터 묻는다. 최근 100개만 받으면 오래 꺼져 있던 기기는 그 앞의 메시지를 놓친다.",
    anchor: "휴대폰과-노트북이-각자-따라잡기",
  },
];
