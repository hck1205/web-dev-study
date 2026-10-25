import type { QuizQuestion } from "../types";

export const RW_KAKAOTALK_CACHE_FARM: QuizQuestion[] = [
  {
    id: "rw-kakaotalk-cache-farm-1",
    post: "rw-kakaotalk-cache-farm",
    question: "톡서버 캐시는 일관된 해싱으로 묶여 있었는데도 노드 교체를 새벽에 해야 했다. 이유는?",
    choices: [
      "일관된 해싱은 노드를 바꾸면 모든 키를 다시 해싱해서",
      "노드 하나의 트래픽이 커서, n분의 1만 다시 채워도 그 미스 트래픽이 DB에 너무 컸기 때문에",
      "ZooKeeper가 낮에는 호스트 목록 변경을 막아서",
      "Memcached는 낮에 재시작하면 데이터가 디스크에 남지 않아서",
    ],
    answer: 1,
    explanation:
      "일관된 해싱은 옮기는 키를 전체의 n분의 1로 줄이지만, 그 몫이 작다는 보장은 없다. 글은 톡서버에서는 노드 하나의 트래픽이 워낙 커서 다시 채우는 트래픽 자체가 너무 크다고 적는다. 그래서 트래픽이 가장 적은 새벽에 DB를 지켜보며 작업했다.",
    anchor: "캐시-장비-90대를-옮겨야-한다는-연락",
  },
  {
    id: "rw-kakaotalk-cache-farm-2",
    post: "rw-kakaotalk-cache-farm",
    question: "어떤 캐시 클러스터가 32GB 장비 60대에서 노드당 300MB만 쓰고 있었다. 이런 상태가 생긴 원인으로 가장 맞는 것은?",
    choices: [
      "eviction 설정이 잘못돼 데이터가 계속 지워져서",
      "TTL이 너무 짧아서",
      "노드 수를 메모리가 아니라 처리량에 맞춰 늘렸는데 장비 크기는 32GB로 고정이어서",
      "Memcached가 32GB 이상을 쓰지 못해서",
    ],
    answer: 2,
    explanation:
      "트래픽을 나누려고 노드를 늘릴수록 노드 하나에 담긴 데이터는 줄었다. 장비 사양은 메모리 기준으로 고정돼 있으니 그만큼 메모리가 남았다. 전체로는 6.5TB 중 1.8TB만 써서 가용률이 약 28%였다.",
    anchor: "메모리는-남는데-장비는-모자랐다",
  },
  {
    id: "rw-kakaotalk-cache-farm-3",
    post: "rw-kakaotalk-cache-farm",
    question: "캐시 팜의 Redis StatefulSet에 OnDelete 업데이트 전략을 쓴 이유는?",
    choices: [
      "파드가 다시 뜨면 캐시가 비니, 한 대씩 지우며 DB 부하 회복을 지켜보려고",
      "OnDelete가 가장 빠르게 모든 파드를 바꿔서",
      "PersistentVolume을 지우지 않으려고",
      "hostNetwork에서는 롤링 업데이트를 쓸 수 없어서",
    ],
    answer: 0,
    explanation:
      "OnDelete는 템플릿을 바꿔도 파드를 지울 때만 새 설정으로 만든다. 캐시 파드는 다시 뜨면 비어서 그 몫이 DB로 간다. 자동으로 연달아 바꾸면 미스가 겹치니, 사람이 하나씩 지우며 서비스와 DB가 회복하는 걸 지켜보려 했다.",
    anchor: "쿠버네티스-위에-redis를-키우는-캐시-팜",
  },
  {
    id: "rw-kakaotalk-cache-farm-4",
    post: "rw-kakaotalk-cache-farm",
    question: "Redis 파드에 hostNetwork를 쓰면서 생긴 문제는?",
    choices: [
      "Redis가 6379 포트만 쓸 수 있게 돼서",
      "파드 간 복제가 불가능해져서",
      "오버레이 네트워크 때문에 지연이 늘어서",
      "다시 뜬 파드가 다른 장비·포트로 가면, Service 없이 장비 주소로 붙던 클라이언트가 Redis를 잃어서",
    ],
    answer: 3,
    explanation:
      "Service와 Ingress를 빼고 장비의 IP와 포트를 직접 쓰면 네트워크 오버헤드는 줄지만 주소를 숨겨 주는 계층이 사라진다. 쿠버네티스는 다시 띄운 파드를 같은 자리에 둔다는 보장이 없다. 그래서 파티션 이름으로 주소를 찾게 하는 센티넬을 붙였다.",
    anchor: "추상화를-빼고-속도를-얻으니-주소가-흔들렸다",
  },
  {
    id: "rw-kakaotalk-cache-farm-5",
    post: "rw-kakaotalk-cache-farm",
    question: "카카오 톡서버가 캐시 클러스터에 Redis 복제를 보통 쓰지 않는 이유로 글이 드는 것은?",
    choices: [
      "복제를 켜면 메모리가 두 배로 들어서",
      "복제가 비동기라 장애 조치 과정에서 정합성이 깨질 수 있어서",
      "센티넬이 복제본을 지원하지 않아서",
      "쿠버네티스에서 복제 트래픽이 막혀서",
    ],
    answer: 1,
    explanation:
      "글은 Redis 복제가 비동기라 failover 중에 정합성이 깨질 수 있다고 적는다. 복제본에 아직 안 간 갱신이 있으면 승격된 쪽이 옛 값을 내준다. 대신 복제 없이 빈 파드로 갈아 끼우고 DB에서 다시 채우는 길을 골랐다.",
    anchor: "센티넬이-이름을-들고-barn이-빈-파드를-골라-붙인다",
  },
  {
    id: "rw-kakaotalk-cache-farm-6",
    post: "rw-kakaotalk-cache-farm",
    question: "복제본이 없는 파티션의 Redis가 죽었다. 센티넬 목록에서 이 상태를 찾아 대기 파드를 그 이름의 마스터로 다시 등록하는 것은 누구인가?",
    choices: [
      "Redis Sentinel이 스스로",
      "쿠버네티스 StatefulSet 컨트롤러",
      "Barn의 컨트롤 루프",
      "톡서버의 Lettuce 클라이언트",
    ],
    answer: 2,
    explanation:
      "센티넬은 복제본을 올릴 수는 있지만 다른 Redis를 찾아 모니터링 주소를 바꾸지는 못한다. Barn이 ODOWN이면서 복제본이 0인 파티션을 찾아, 노드·IDC·클러스터 분포를 보고 대기 파드를 골라 센티넬에 등록한다. 쿠버네티스는 죽은 파드를 되살리는 일을 따로 한다.",
    anchor: "센티넬이-이름을-들고-barn이-빈-파드를-골라-붙인다",
  },
  {
    id: "rw-kakaotalk-cache-farm-7",
    post: "rw-kakaotalk-cache-farm",
    question: "일관된 해싱 링 대신 고정 파티션 + 빈 파드 교체를 쓰면 노드가 죽을 때 무엇이 달라지나?",
    choices: [
      "죽은 노드의 몫을 이웃 노드가 떠안지 않고 새 파드 하나가 받는다",
      "죽은 노드의 데이터가 그대로 보존된다",
      "파티션 수를 바꾸기가 더 쉬워진다",
      "DB로 가는 미스가 전혀 생기지 않는다",
    ],
    answer: 0,
    explanation:
      "링에서는 빠진 노드의 구간을 다음 노드가 맡아 그 노드의 부하가 갑자기 는다. 고정 파티션에서는 이름 뒤의 Redis만 바꿔 끼우니 이웃은 그대로다. 대신 새 파드는 비어 있어 DB 미스는 생기고, 파티션 수를 바꾸는 일은 링보다 어렵다.",
    anchor: "결과-장비-256대가-180대로",
  },
];
