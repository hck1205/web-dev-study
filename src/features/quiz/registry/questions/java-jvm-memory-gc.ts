import type { QuizQuestion } from "../types";

export const JAVA_JVM_MEMORY_GC: QuizQuestion[] = [
  {
    id: "java-jvm-memory-gc-1",
    post: "java-jvm-memory-gc",
    question:
      "메모리 한도 512MiB 컨테이너에서 -Xmx480m으로 띄운 서비스가 OutOfMemoryError 로그 없이 exit 137로 죽었다. 가장 그럴듯한 원인은?",
    choices: [
      "힙이 480MB를 넘어 JVM이 스스로 종료했다",
      "힙에 메타스페이스, 스레드 스택, 다이렉트 버퍼, GC 자료 구조가 더해져 프로세스 전체가 한도를 넘었고 커널이 죽였다",
      "GC가 꺼져 있었다",
      "-Xmx 값이 한도보다 작으면 JVM이 시작하지 못한다",
    ],
    answer: 1,
    explanation:
      "-Xmx는 힙만 묶고 커널은 프로세스 전체 메모리로 한도를 지킨다. 힙 밖 몫이 더해져 한도를 넘으면 커널이 SIGKILL을 보내므로 JVM은 로그를 남길 틈이 없다. 힙이 넘쳤다면 Java heap space가 남았을 것이다.",
    anchor: "jvm-프로세스가-쓰는-메모리-지도",
  },
  {
    id: "java-jvm-memory-gc-2",
    post: "java-jvm-memory-gc",
    question: "NMT 출력에서 스레드 221개의 stack이 reserved=221MB, committed=22MB로 나왔다. 실제 물리 메모리 부담에 가까운 값은?",
    choices: [
      "reserved 221MB. 스레드 하나에 1MiB가 항상 든다",
      "둘을 더한 243MB",
      "committed 22MB. 예약은 주소 공간일 뿐이고 실제로 쓴 깊이만큼만 메모리를 받는다",
      "0MB. 스택은 힙 안에 있다",
    ],
    answer: 2,
    explanation:
      "reserved는 주소 공간만 잡아 둔 양이고 committed가 실제로 받은 메모리다. -Xss 1MiB는 예약 크기라 스레드가 깊이 들어가지 않으면 그보다 훨씬 적게 쓴다. 그래도 스레드 수가 늘면 힙 밖 몫이 함께 커진다.",
    anchor: "jvm-프로세스가-쓰는-메모리-지도",
  },
  {
    id: "java-jvm-memory-gc-3",
    post: "java-jvm-memory-gc",
    question: "다음 중 '메모리가 모자라서'보다 '개수 한도에 닿아서' 나는 경우가 많은 오류는?",
    choices: [
      "OutOfMemoryError: Metaspace",
      "OutOfMemoryError: unable to create native thread",
      "OutOfMemoryError: Java heap space",
      "OutOfMemoryError: GC overhead limit exceeded",
    ],
    answer: 1,
    explanation:
      "이름에 OutOfMemory가 붙었지만 대개 pids.max, ulimit -u 같은 태스크 수 한도에 닿아 pthread_create가 EAGAIN으로 실패한 것이다. 실험에서도 pids.max 120에서 스레드 100개 근처에서 났다.",
    anchor: "oom-메시지마다-다른-곳이-찼다",
  },
  {
    id: "java-jvm-memory-gc-4",
    post: "java-jvm-memory-gc",
    question: "512MiB 컨테이너에서 JDK 21을 아무 옵션 없이 띄웠을 때 일어나는 일로 맞는 것은?",
    choices: [
      "한도를 읽지 못해 호스트 메모리의 25%를 힙으로 잡는다",
      "힙을 한도의 75%로 잡고 G1을 쓴다",
      "한도를 읽고 힙을 25%인 128MiB로 잡으며, 작은 기계로 보고 Serial GC를 고른다",
      "힙을 512MiB 전부로 잡는다",
    ],
    answer: 2,
    explanation:
      "JDK 10부터 JVM은 cgroup 한도를 읽지만 기본 MaxRAMPercentage가 25라 힙이 매우 작다. 메모리가 1792MB 미만이면 서버급이 아니라고 보고 Serial GC를 고른다. 그래서 컨테이너에서는 비율과 GC를 직접 준다.",
    anchor: "컨테이너-한도에서-힙-몫을-정한다",
  },
  {
    id: "java-jvm-memory-gc-5",
    post: "java-jvm-memory-gc",
    question:
      "요청 스레드가 모두 응답 없는 하류를 기다려 서비스가 멈췄다. 스레드 덤프에서 이 스레드들의 상태는 RUNNABLE이고 맨 위가 SocketDispatcher.read0이다. 어떻게 해석하나?",
    choices: [
      "CPU를 쓰며 일하는 중이니 문제가 아니다",
      "데드락이다",
      "GC 중이다",
      "네이티브 소켓 읽기에서 기다리는 중이고, 하류 호출에 읽기 타임아웃이 없거나 너무 길다",
    ],
    answer: 3,
    explanation:
      "네이티브 읽기 안에서 기다리는 스레드는 JVM이 RUNNABLE로 보여 준다. 같은 프레임에 풀 스레드가 다 몰려 있고 CPU 시간이 늘지 않으면 기다리는 것이다. 서로 락을 기다리는 데드락이라면 BLOCKED와 대기 고리가 보인다.",
    anchor: "요청-스레드-네-개가-모두-결제를-기다린다",
  },
  {
    id: "java-jvm-memory-gc-6",
    post: "java-jvm-memory-gc",
    question:
      "JDK 21, 캐리어 4개에서 가상 스레드 100개가 각각 synchronized 블록 안에서 100ms를 잤다. 전체 시간이 약 2.5초 걸린 이유는?",
    choices: [
      "synchronized 안에서 기다리면 가상 스레드가 캐리어에 고정(pinning)되어 한 번에 4개씩만 진행됐다",
      "가상 스레드는 sleep을 지원하지 않아 바쁜 대기를 했다",
      "가상 스레드 생성 비용이 커서 오래 걸렸다",
      "모든 가상 스레드가 같은 락을 기다렸다",
    ],
    answer: 0,
    explanation:
      "JDK 21~23에서 모니터를 쥔 채 기다리는 가상 스레드는 캐리어에서 내려오지 못한다. 그래서 100 ÷ 4 × 100ms ≈ 2.5초가 됐고, ReentrantLock으로 바꾸자 0.1초였다. 락은 작업마다 새 객체라 서로 기다리지 않았다.",
    anchor: "가상-스레드는-기다림을-싸게-만든다",
  },
  {
    id: "java-jvm-memory-gc-7",
    post: "java-jvm-memory-gc",
    question: "가상 스레드로 바꾼 뒤 DB에 동시 쿼리가 폭증했다. 가장 알맞은 대응은?",
    choices: [
      "가상 스레드를 고정 크기 풀로 묶어 재사용한다",
      "가상 스레드는 그대로 작업마다 만들고, DB 호출 수를 Semaphore나 커넥션 풀로 따로 묶는다",
      "캐리어 스레드 수를 1로 줄인다",
      "플랫폼 스레드로 되돌리는 것 말고는 방법이 없다",
    ],
    answer: 1,
    explanation:
      "가상 스레드는 싸서 작업마다 만드는 게 전제라 풀로 묶지 않는다. 동시성 상한은 스레드 수가 아니라 하류 자원 쪽에서 Semaphore나 커넥션 풀로 건다. 캐리어를 줄이면 CPU 일까지 느려진다.",
    anchor: "가상-스레드는-기다림을-싸게-만든다",
  },
];
