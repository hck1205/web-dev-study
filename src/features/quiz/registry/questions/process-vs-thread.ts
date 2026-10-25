import type { QuizQuestion } from "../types";

export const PROCESS_VS_THREAD: QuizQuestion[] = [
  {
    id: "process-vs-thread-1",
    post: "process-vs-thread",
    question: "부모가 fork한 자식과, 부모가 만든 스레드가 각각 전역 변수 counter에 100을 더했다. 부모가 보는 값은?",
    choices: [
      "둘 다 부모에게 보여서 200이 된다",
      "자식이 더한 값은 안 보이고 스레드가 더한 값만 보여서 100이 된다",
      "자식이 더한 값만 보이고 스레드가 더한 값은 안 보인다",
      "둘 다 안 보여서 0이다",
    ],
    answer: 1,
    explanation:
      "fork한 자식은 copy-on-write로 자기 사본을 고치므로 부모의 값은 그대로다. 스레드는 같은 주소 공간을 쓰니 더한 값이 부모에게 바로 보인다.",
    anchor: "무엇을-같이-쓰고-무엇을-따로-갖나",
  },
  {
    id: "process-vs-thread-2",
    post: "process-vs-thread",
    question: "스레드 하나가 널 포인터를 밟아 SIGSEGV를 받았다. 어떻게 되나?",
    choices: [
      "그 스레드만 죽고 나머지 스레드는 계속 돈다",
      "커널이 그 스레드를 새로 띄운다",
      "주소 공간과 시그널 처리를 같이 쓰므로 프로세스 전체가 죽는다",
      "다른 스레드의 스택으로 옮겨 가 실행을 이어 간다",
    ],
    answer: 2,
    explanation:
      "스레드는 주소 공간과 시그널 처리기를 공유하므로 한 스레드의 치명적인 오류가 프로세스 전체를 끝낸다. 크롬이 탭과 사이트를 프로세스로 나누는 이유가 이 장애 격리다.",
    anchor: "무엇을-같이-쓰고-무엇을-따로-갖나",
  },
  {
    id: "process-vs-thread-3",
    post: "process-vs-thread",
    question: "힙 1GiB를 쓰는 프로세스의 fork가 힙이 없을 때보다 훨씬 느린 이유는?",
    choices: [
      "fork가 1GiB의 데이터를 그 자리에서 전부 복사하기 때문이다",
      "페이지는 복사하지 않지만 메모리에 비례하는 페이지 테이블을 복사해야 하기 때문이다",
      "자식이 exec할 때까지 부모가 반드시 멈춰 있어야 하기 때문이다",
      "TLB를 모든 코어에서 비워야 하기 때문이다",
    ],
    answer: 1,
    explanation:
      "copy-on-write라 페이지 자체는 쓰기 전까지 공유하지만, 페이지 테이블은 복사해야 하고 그 크기는 쓰는 메모리에 비례한다. 그래서 새 프로그램 실행이 목적이면 부모 크기와 상관없는 posix_spawn이 빠르다.",
    anchor: "fork는-복사하는-척만-한다",
  },
  {
    id: "process-vs-thread-4",
    post: "process-vs-thread",
    question: "4코어에서 CPU만 쓰는 계산을 스레드 4개에서 256개로 늘렸더니 시간은 그대로이고 nonvoluntary_ctxt_switches만 늘었다. 이 숫자가 뜻하는 것은?",
    choices: [
      "코어보다 달리려는 스레드가 많아서 타임 슬라이스마다 CPU를 빼앗기고 있다",
      "스레드들이 락을 기다리며 스스로 잠들었다",
      "디스크 I/O를 기다리는 스레드가 많다",
      "스레드가 메모리를 모두 써서 스왑이 일어났다",
    ],
    answer: 0,
    explanation:
      "비자발적 교환은 타임 슬라이스가 끝나 선점당한 횟수다. 코어 수보다 많은 CPU 스레드는 줄만 서므로 빨라지지 않는다. 락이나 I/O 대기로 스스로 잠드는 것은 voluntary 쪽에 잡힌다.",
    anchor: "동시에-한다는-말의-두-가지-뜻",
  },
  {
    id: "process-vs-thread-5",
    post: "process-vs-thread",
    question: "작업의 90%를 병렬로 나눌 수 있다. 코어를 아무리 늘려도 넘을 수 없는 속도 향상은?",
    choices: ["9배", "10배", "90배", "코어 수만큼 계속 는다"],
    answer: 1,
    explanation:
      "암달의 법칙에서 n이 무한히 커지면 1 / (1 − 0.9) = 10배가 상한이다. 나머지 10%가 한 줄로만 지나가기 때문이고, 실제로는 락 경합과 교환 비용 때문에 그보다 일찍 꺾인다.",
    anchor: "코어를-늘려도-빨라지지-않는-몫",
  },
  {
    id: "process-vs-thread-6",
    post: "process-vs-thread",
    question: "Gunicorn이 스레드보다 워커 프로세스를 늘려 CPU를 여러 개 쓰는 주된 이유는?",
    choices: [
      "파이썬 프로세스는 스레드를 만들 수 없기 때문이다",
      "프로세스 전환이 스레드 전환보다 항상 빠르기 때문이다",
      "프로세스끼리는 메모리를 자동으로 공유하기 때문이다",
      "GIL 때문에 한 프로세스에서 파이썬 코드를 실행하는 스레드는 한 번에 하나뿐이기 때문이다",
    ],
    answer: 3,
    explanation:
      "GIL이 있는 파이썬은 스레드를 늘려도 파이썬 코드 실행은 병렬이 되지 않는다. 그래서 CPU를 쓰려면 프로세스를 늘리고, I/O 대기를 겹치는 데만 스레드를 더한다.",
    anchor: "서버들은-각자-다른-모양을-골랐다",
  },
  {
    id: "process-vs-thread-7",
    post: "process-vs-thread",
    question: "컨테이너 안의 서비스에서 pthread_create가 Resource temporarily unavailable로 실패한다. 메모리는 넉넉하다. 먼저 볼 곳은?",
    choices: [
      "cgroup의 pids.max. 리눅스는 스레드도 task로 세기 때문이다",
      "memory.max. 스레드 스택이 메모리 한도를 넘었기 때문이다",
      "net.core.somaxconn. 연결 대기열이 찼기 때문이다",
      "파일 디스크립터 한도인 ulimit -n",
    ],
    answer: 0,
    explanation:
      "리눅스에서 스레드는 프로세스와 같은 task로 세어지므로 pids.max와 ulimit -u에 걸린다. 개수 한도에 걸린 경우가 많고, 어떤 풀이 커지는지 ps의 NLWP와 스레드 이름으로 찾는다.",
    anchor: "스레드가-너무-많을-때-나타나는-증상",
  },
];
