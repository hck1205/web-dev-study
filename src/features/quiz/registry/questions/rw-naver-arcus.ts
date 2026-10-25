import type { QuizQuestion } from "../types";

export const RW_NAVER_ARCUS: QuizQuestion[] = [
  {
    id: "rw-naver-arcus-1",
    post: "rw-naver-arcus",
    question: "ARCUS 캐시 노드가 죽으면 ZooKeeper 명단에서 이름이 사라진다. 노드가 따로 알리지 않아도 지워지는 이유는?",
    choices: [
      "클라이언트가 실패한 요청을 모아 ZooKeeper에 삭제를 요청해서",
      "운영자가 arcus.sh memcached unregister를 실행해서",
      "노드가 cache_list 아래에 임시 znode로 등록해 두어, 세션이 끝나면 ZooKeeper가 지워서",
      "다른 캐시 노드들이 투표로 죽은 노드를 빼서",
    ],
    answer: 2,
    explanation:
      "arcus_zk.c는 캐시 리스트 경로에 자기 이름의 znode를 ZOO_EPHEMERAL로 만든다. 임시 노드는 만든 쪽의 세션이 만료되면 ZooKeeper가 지운다. unregister는 클라우드 정보 전체를 지우는 명령이라 노드 장애 처리와는 다르다.",
    anchor: "zookeeper가-들고-있는-살아-있는-노드-명단",
  },
  {
    id: "rw-naver-arcus-2",
    post: "rw-naver-arcus",
    question: "ARCUS 구조에서 ZooKeeper 앙상블이 잠깐 느려졌다. get·set 요청에 바로 영향이 크지 않은 이유는?",
    choices: [
      "클라이언트가 받아 둔 캐시 리스트로 링을 만들어 두고 요청은 캐시 노드로 바로 보내서",
      "ZooKeeper가 요청을 큐에 쌓아 두었다가 나중에 전달해서",
      "캐시 노드가 ZooKeeper 대신 요청을 다른 노드로 넘겨줘서",
      "Front Cache가 모든 요청을 대신 처리해서",
    ],
    answer: 0,
    explanation:
      "ZooKeeper는 명단이 바뀔 때만 watch로 알리고, 데이터 요청 경로에는 없다. 클라이언트는 이미 가진 링으로 담당 노드를 계산해 바로 보낸다. Front Cache는 키-값 get/set 일부에만 쓰는 선택 기능이라 이유가 될 수 없다.",
    anchor: "zookeeper가-들고-있는-살아-있는-노드-명단",
  },
  {
    id: "rw-naver-arcus-3",
    post: "rw-naver-arcus",
    question: "노드 6개 ketama 링에 7번째 노드를 넣었을 때 위치가 바뀌는 키는 어떤 키인가?",
    choices: [
      "모든 키의 약 6/7",
      "새 노드가 링에서 가져간 구간의 키만",
      "해시 값이 짝수인 키 전부",
      "가장 최근에 쓴 키부터 순서대로",
    ],
    answer: 1,
    explanation:
      "일관된 해싱에서는 새 노드가 찍은 점 바로 앞 구간만 주인이 바뀐다. 글의 계산에서도 10만 개 중 12,088개가 움직였고 전부 새 노드로 갔다. 대부분의 키가 움직이는 건 해시 % N 방식일 때다.",
    anchor: "명단을-받은-클라이언트가-키의-주인을-찾는-법",
  },
  {
    id: "rw-naver-arcus-4",
    post: "rw-naver-arcus",
    question: "ARCUS가 노드 추가 뒤 기존 노드에서 자동 scrub을 하는 이유로 맞는 것은?",
    choices: [
      "메모리 단편화를 줄이려고",
      "만료된 item의 TTL을 다시 계산하려고",
      "ZooKeeper 세션을 새로 맺으려고",
      "새 노드가 죽어 구간이 되돌아오면 남아 있던 옛 값이 다시 읽힐 수 있어서",
    ],
    answer: 3,
    explanation:
      "새 노드가 가져간 구간의 키는 기존 노드에 그대로 남는다. 새 노드가 죽으면 그 구간이 기존 노드로 돌아와 갱신 전 값이 노출된다. 그래서 기존 노드가 30초 뒤 자기 담당이 아닌 키를 지운다.",
    anchor: "노드를-더하면-남는-낡은-값",
  },
  {
    id: "rw-naver-arcus-5",
    post: "rw-naver-arcus",
    question: "ARCUS 컬렉션의 maxcount를 기본 4,000, 최대 50,000으로 작게 묶은 이유는?",
    choices: [
      "이벤트 기반 서버에서 요청 하나가 오래 걸리면 같은 워커 스레드의 다른 요청이 기다리게 되어서",
      "b+tree의 bkey가 4바이트라 그 이상 담을 수 없어서",
      "ZooKeeper znode 하나의 크기 제한 때문에",
      "자바 클라이언트의 직렬화 버퍼가 작아서",
    ],
    answer: 0,
    explanation:
      "속성 문서는 워커 스레드 하나가 여러 요청을 비동기로 처리하므로 요청 하나의 비용을 O(small N)으로 묶으려 했다고 설명한다. bkey는 8바이트 정수나 1~31바이트 16진 값이라 개수 제한과 상관없다.",
    anchor: "값-하나-대신-정렬된-목록을-캐시에-둔다",
  },
  {
    id: "rw-naver-arcus-6",
    post: "rw-naver-arcus",
    question: "bop smget 응답의 TRIMMED_KEYS에 키가 들어 있다. 응용은 무엇을 해야 하나?",
    choices: [
      "그 키를 캐시에서 지우고 결과를 그대로 쓴다",
      "maxcount를 늘린 뒤 같은 명령을 다시 보낸다",
      "trim으로 잘려 캐시에 없는 원소를 DB에서 읽어 결과에 합친다",
      "그 키는 다른 노드에 있으니 다른 노드에 다시 묻는다",
    ],
    answer: 2,
    explanation:
      "trimmed keys는 조건에 맞는 원소를 읽다가 trim 때문에 더 읽을 수 없게 된 키다. 문서는 missed keys와 trimmed keys 모두 응용이 백엔드 DB에서 읽어 최종 결과에 반영하라고 적는다. 캐시는 원본이 아니라 모르는 부분을 알려 줄 뿐이다.",
    anchor: "값-하나-대신-정렬된-목록을-캐시에-둔다",
  },
  {
    id: "rw-naver-arcus-7",
    post: "rw-naver-arcus",
    question: "ARCUS 자바 클라이언트에서 시간 초과가 한꺼번에 몇십 개씩 났다. 문서가 가장 흔한 원인으로 드는 것은?",
    choices: [
      "ZooKeeper 세션 만료",
      "애플리케이션 JVM의 긴 full GC",
      "캐시 노드의 eviction",
      "shard key 중괄호 오류",
    ],
    answer: 1,
    explanation:
      "클라이언트 노트는 대부분 full GC 시간이 길어서 생긴다고 적는다. GC로 멈춘 동안에는 응답이 와도 처리하지 못해 시간 초과가 된다. 그래서 timeout은 TCP 재전송(최소 200ms)과 GC 시간을 견딜 만큼, 예를 들어 300ms나 700ms로 정하라고 권한다.",
    anchor: "한-키에-몰릴-때와-클라이언트-쪽-시간-초과",
  },
];
