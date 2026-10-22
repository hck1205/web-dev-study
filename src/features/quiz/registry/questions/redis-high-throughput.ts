import type { QuizQuestion } from "../types";

export const REDIS_HIGH_THROUGHPUT: QuizQuestion[] = [
  {
    id: "redis-high-throughput-1",
    post: "redis-high-throughput",
    question:
      "파이프라인 없이 GET 10만 번을 보낼 때 strace로 Redis의 write 호출 수를 세면 대략 얼마가 나오고, -P 16이면 어떻게 바뀌나?",
    choices: [
      "둘 다 약 10만 번이다. 파이프라인은 네트워크만 줄인다",
      "약 10만 번에서 약 6,250번으로 준다",
      "약 6,250번에서 약 10만 번으로 는다",
      "둘 다 수백 번이다. Redis는 응답을 항상 모아서 쓴다",
    ],
    answer: 1,
    explanation:
      "파이프라인이 없으면 명령마다 read 한 번, write 한 번이 든다. 16개씩 묶으면 한 번의 read로 16개를 읽고 응답 16개를 한 번에 써서 10만/16에 가까운 6,251번이 나왔다.",
    anchor: "시간은-커널-안에서-더-많이-쓴다",
  },
  {
    id: "redis-high-throughput-2",
    post: "redis-high-throughput",
    question: "파이프라인 깊이를 1에서 256으로 올렸을 때 함께 일어난 일로 맞는 것은?",
    choices: [
      "처리량과 p50이 모두 줄었다",
      "처리량은 그대로이고 p50만 줄었다",
      "처리량은 크게 올랐지만 묶음 하나의 p50도 0.35ms에서 6ms대로 늘었다",
      "처리량은 오르고 명령이 원자적으로 실행되게 바뀌었다",
    ],
    answer: 2,
    explanation:
      "묶음이 커질수록 시스템 콜이 줄어 처리량이 오르지만, 첫 명령의 응답도 묶음 전체가 끝날 때까지 기다린다. 파이프라인은 원자적이지 않아 사이에 다른 클라이언트의 명령이 끼어들 수 있다.",
    anchor: "파이프라인을-깊게-하면-무엇이-오르고-무엇이-늘어나나",
  },
  {
    id: "redis-high-throughput-3",
    post: "redis-high-throughput",
    question:
      "RTT가 약 1ms인 Redis에서 상품 1000개 가격을 for 문 안의 await GET으로 읽는 코드가 1.2초 걸렸다. Redis CPU는 낮다. 가장 효과가 큰 고침은?",
    choices: [
      "Redis에 I/O 스레드를 켠다",
      "Redis Cluster로 샤드를 늘린다",
      "연결 풀 크기를 1000으로 늘린다",
      "MGET이나 파이프라인으로 한 번의 왕복에 실어 보낸다",
    ],
    answer: 3,
    explanation:
      "Redis가 아니라 앱이 왕복 1000번을 기다리고 있었다. 같은 조건에서 파이프라인은 10ms, MGET은 2ms였다. 서버 쪽 손잡이(I/O 스레드, 샤드)는 서버가 바쁠 때 듣는다.",
    anchor: "1ms-떨어진-서버에서-반복문을-돌리면",
  },
  {
    id: "redis-high-throughput-4",
    post: "redis-high-throughput",
    question:
      "INFO stats의 total_connections_received가 요청 수만큼 빠르게 오르고 처리량이 낮다. 무엇을 의심하나?",
    choices: [
      "요청마다 연결을 새로 열고 닫는 코드",
      "maxmemory가 너무 작다",
      "AOF가 켜져 있다",
      "핫 키가 있다",
    ],
    answer: 0,
    explanation:
      "redis-benchmark -k 0으로 매번 새 연결을 열자 처리량이 초당 8만에서 1만 4천으로 떨어졌다. 핸드셰이크와 accept, 클라이언트 구조체 생성이 명령마다 붙기 때문이다. 연결은 몇 개를 오래 쓰고 그 위에 요청을 겹친다.",
    anchor: "연결은-늘리되-매번-새로-열지-않는다",
  },
  {
    id: "redis-high-throughput-5",
    post: "redis-high-throughput",
    question:
      "4 vCPU 기계에서 Redis 7.0의 io-threads를 3으로 켜고 같은 기계에서 벤치마크를 돌렸더니 처리량이 오히려 크게 떨어졌다. 가장 그럴듯한 이유는?",
    choices: [
      "I/O 스레드가 명령을 동시에 실행하다 락 경합이 생겨서",
      "I/O 스레드가 일을 기다리며 돌아 코어를 쓰고, 남는 코어가 없어 메인 스레드의 시간을 빼앗아서",
      "io-threads를 켜면 파이프라인이 꺼져서",
      "I/O 스레드가 RDB 저장을 대신 해서",
    ],
    answer: 1,
    explanation:
      "ps -T로 보니 io_thd 스레드들이 메인 스레드와 같은 CPU 시간을 썼다. 명령 실행은 여전히 메인 스레드 하나라 락 경합 문제가 아니다. I/O 스레드는 남는 코어가 있고 시스템 콜이 병목일 때만 듣는다.",
    anchor: "io-스레드는-남는-코어가-있을-때-듣는다",
  },
  {
    id: "redis-high-throughput-6",
    post: "redis-high-throughput",
    question:
      "클러스터에서 노드 하나만 CPU가 100%이고 --hotkeys에 키 하나가 유난히 높게 나온다. 샤드를 두 배로 늘리면?",
    choices: [
      "그 키도 두 노드로 나뉘어 부하가 절반이 된다",
      "슬롯이 자동으로 복제되어 모든 노드가 그 키를 읽는다",
      "키 하나는 슬롯 하나, 노드 하나에 있으니 그 노드는 여전히 바쁘다",
      "핫 키가 자동으로 로컬 캐시로 옮겨진다",
    ],
    answer: 2,
    explanation:
      "샤딩은 전체 양을 나누지만 키 하나를 쪼개지 않는다. 핫 키는 앱 로컬 캐시와 CLIENT TRACKING, 키 복제로 따로 푼다.",
    anchor: "한-키에만-몰릴-때는-가까이에-둔다",
  },
  {
    id: "redis-high-throughput-7",
    post: "redis-high-throughput",
    question:
      "CLIENT TRACKING으로 로컬 캐시를 쓰는 앱이 Redis와 연결이 끊겼다가 다시 붙었다. 무엇을 해야 하나?",
    choices: [
      "로컬 캐시를 통째로 비운다",
      "아무것도 안 해도 된다. 서버가 끊긴 동안의 무효화를 다시 보내 준다",
      "TRACKING을 끄고 TTL만 쓴다",
      "모든 키에 대해 GET을 다시 보내 값을 비교한다",
    ],
    answer: 0,
    explanation:
      "끊긴 사이의 무효화 푸시는 잃어버리고 서버가 다시 보내 주지 않는다. 무엇이 바뀌었는지 모르니 가진 것을 모두 버리고 새로 읽는 게 안전하다.",
    anchor: "한-키에만-몰릴-때는-가까이에-둔다",
  },
];
