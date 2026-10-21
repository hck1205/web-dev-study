import type { QuizQuestion } from "../types";

export const NETWORK_PARTITIONS: QuizQuestion[] = [
  {
    id: "network-partitions-1",
    post: "network-partitions",
    question:
      "iptables로 같은 연결을 막았는데 REJECT는 43ms 만에 'Connection refused', DROP은 3초 뒤 'timeout expired'로 끝났다. 실제 분할과 더 비슷한 것과 그 이유는?",
    choices: [
      "REJECT. 서버가 내려간 것과 같은 응답을 주기 때문",
      "DROP. 패킷이 아무 대답 없이 사라져 보낸 쪽이 원인을 모른 채 기다리기 때문",
      "둘 다 같다. 어느 쪽이든 연결이 안 되기 때문",
      "REJECT. RST가 오면 클라이언트가 바로 다른 서버로 넘어가기 때문",
    ],
    answer: 1,
    explanation:
      "실제 분할에서는 거절 응답이 오지 않는다. 보낸 쪽은 SYN을 계속 다시 보내다가 한도에 걸려 타임아웃으로 끝난다. 연결 거부는 '아무도 안 받는다'는 정보라도 주지만 타임아웃은 아무 정보도 주지 않는다.",
    anchor: "끊긴-회선은-어떻게-생겼나",
  },
  {
    id: "network-partitions-2",
    post: "network-partitions",
    question:
      "PostgreSQL 프로세스를 kill -STOP으로 멈췄을 때와 iptables DROP으로 회선을 끊었을 때 클라이언트가 받은 메시지가 같았다. 이 결과가 설계에 주는 의미는?",
    choices: [
      "프로세스 정지는 드문 일이라 무시해도 된다",
      "메시지만으로 죽음, 멈춤, 끊김을 구별할 수 없으니 장애 판정은 틀릴 수 있다는 전제로 설계해야 한다",
      "connect_timeout을 늘리면 둘을 구별할 수 있다",
      "TCP 연결이 맺어졌는지 보면 항상 구별된다",
    ],
    answer: 1,
    explanation:
      "비동기 네트워크에서 응답이 없다는 사실은 원인을 알려 주지 않는다. 장애 감지는 결국 추측이므로, 오판이 나도 데이터가 망가지지 않게 과반 쿼럼과 펜싱을 둔다.",
    anchor: "응답이-없다는-것만-안다",
  },
  {
    id: "network-partitions-3",
    post: "network-partitions",
    question:
      "스탠바이가 '프라이머리 접속 3회 실패'로 스스로 승격했고, 원래 프라이머리는 살아 있었다. 회선이 돌아온 뒤 pg_rewind로 옛 프라이머리를 되감으면 어떻게 되나?",
    choices: [
      "두 DB의 변경이 자동으로 병합된다",
      "옛 프라이머리가 분할 중에 받은 쓰기가 사라진다",
      "새 프라이머리가 분할 중에 받은 쓰기가 사라진다",
      "타임라인이 1로 돌아가 아무것도 잃지 않는다",
    ],
    answer: 1,
    explanation:
      "PostgreSQL 복제에는 두 역사를 합치는 기능이 없어 하나를 버린다. pg_rewind는 대상(옛 프라이머리)을 갈라진 지점까지 되감으므로, 사용자가 성공 응답을 받은 그쪽 쓰기가 사라진다. 그래서 되감기 전에 pg_waldump로 잃을 쓰기를 뽑아 둔다.",
    anchor: "회선이-돌아온-뒤",
  },
  {
    id: "network-partitions-4",
    post: "network-partitions",
    question: "노드 4대짜리 합의 클러스터가 2대 2로 쪼개졌다. 어떻게 되나?",
    choices: [
      "리더가 있던 쪽이 계속 쓰기를 받는다",
      "양쪽 모두 쓰기를 받고 나중에 병합한다",
      "어느 쪽도 과반(3)이 아니라 쓰기가 멈춘다",
      "살아 있는 노드 기준 과반(2)이라 양쪽 모두 쓴다",
    ],
    answer: 2,
    explanation:
      "과반은 원래 클러스터 크기 기준이라 4대의 과반은 3이다. 2대 2 분할에서는 아무 쪽도 과반이 아니어서 전체가 멈춘다. 4대는 3대보다 견디는 장애 수도 늘지 않아서 합의 클러스터는 홀수로 둔다.",
    anchor: "노드-수는-홀수로",
  },
  {
    id: "network-partitions-5",
    post: "network-partitions",
    question:
      "쓰기는 과반 확인을 받게 했는데 읽기는 각 노드가 로컬 값을 돌려주게 짰다. 분할 중 소수 쪽에서 읽으면?",
    choices: [
      "쓰기가 막혔으니 읽기도 자동으로 거절된다",
      "다수 쪽에서 이미 바뀐 값을 모른 채 옛 값을 돌려준다",
      "항상 최신 값을 돌려준다",
      "읽기가 다수 쪽으로 자동 전달된다",
    ],
    answer: 1,
    explanation:
      "실험에서 소수 쪽 노드는 stock=5를 돌려줬지만 다수 쪽은 이미 3이었다. 선형화 읽기가 필요하면 etcd의 ReadIndex처럼 읽을 때도 리더가 과반에게 아직 리더인지 확인해야 한다.",
    anchor: "과반만-쓸-수-있게-한다",
  },
  {
    id: "network-partitions-6",
    post: "network-partitions",
    question:
      "동기 복제 중 분할이 나서 INSERT가 SyncRep에서 멈췄다. statement_timeout 3초를 걸었는데도 끝나지 않아 pg_cancel_backend로 취소했다. 그 행은 어떤 상태인가?",
    choices: [
      "롤백되어 어디에도 없다",
      "스탠바이에만 있다",
      "프라이머리에는 커밋되어 보이지만 스탠바이에 복제됐는지는 모른다",
      "다음 재시작 때 자동으로 지워진다",
    ],
    answer: 2,
    explanation:
      "커밋 기록은 이미 로컬에 쓰였고 복제 확인만 기다리던 단계라 문장 타임아웃으로 끊기지 않는다. 취소하면 'already committed locally, but might not have been replicated' 경고가 나오고 행은 프라이머리에 남는다. 이걸 성공으로 처리하면 장애 조치 때 잃을 수 있다.",
    anchor: "동기-복제는-확인-응답한-쓰기를-지킨다",
  },
  {
    id: "network-partitions-7",
    post: "network-partitions",
    question: "장애 조치 뒤에도 일부 앱 서버가 옛 프라이머리에 계속 쓴다. 먼저 손볼 것은?",
    choices: [
      "DB의 shared_buffers를 늘린다",
      "커넥션 풀의 옛 연결을 정리하도록 keepalive와 연결 최대 수명을 줄이고, 연결 문자열에 target_session_attrs=read-write를 넣는다",
      "복제 슬롯을 지운다",
      "앱 서버의 DNS 캐시를 늘린다",
    ],
    answer: 1,
    explanation:
      "풀이 장애 조치 전에 연 연결을 붙들고 있으면 옛 프라이머리로 계속 간다. keepalive와 최대 수명으로 옛 연결을 끊고, target_session_attrs=read-write로 쓰기 가능한 서버에만 붙게 한다. 옛 프라이머리 자체의 쓰기를 막는 펜싱도 함께 필요하다.",
    anchor: "현장에서-분할을-의심하는-순간",
  },
];
