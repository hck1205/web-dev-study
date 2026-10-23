import type { QuizQuestion } from "../types";

export const MUTEX_SEMAPHORE_MONITOR: QuizQuestion[] = [
  {
    id: "mutex-semaphore-monitor-1",
    post: "mutex-semaphore-monitor",
    question: "이진 세마포어 대신 뮤텍스를 써야 하는 가장 큰 이유는?",
    choices: [
      "세마포어는 한 번에 여러 스레드가 들어가서 하나만 들어가게 할 수 없다",
      "뮤텍스는 커널에 들어가지 않아 항상 더 빠르다",
      "뮤텍스는 주인이 있어서 잠근 스레드만 풀 수 있고, 잘못 푼 것을 잡아낸다",
      "세마포어는 시간 제한을 줄 수 없다",
    ],
    answer: 2,
    explanation:
      "이진 세마포어도 하나만 통과시키지만 주인이 없어서 아무 스레드나 풀 수 있고, 두 번 풀면 값이 1을 넘는다. 뮤텍스는 주인이 아닌 스레드가 풀면 예외를 던지고, 재진입과 우선순위 상속도 소유권이 있어야 가능하다.",
    anchor: "열쇠-하나와-숫자판-하나",
  },
  {
    id: "mutex-semaphore-monitor-2",
    post: "mutex-semaphore-monitor",
    question: "커넥션 풀을 세마포어로 짰는데 몇 시간 뒤 모든 요청이 커넥션을 못 받는다. 가장 의심되는 원인은?",
    choices: [
      "쿼리가 예외를 던질 때 release를 건너뛰어 허용 개수가 조금씩 줄었다",
      "세마포어의 처음 값이 너무 커서 넘쳤다",
      "공정하지 않은 세마포어라 특정 스레드만 받았다",
      "tryAcquire의 시간 제한이 너무 길었다",
    ],
    answer: 0,
    explanation:
      "release를 finally에 두지 않으면 예외가 날 때마다 숫자판이 하나씩 영영 줄어들고, 결국 0이 되어 아무도 들어가지 못한다. 커넥션 누수의 전형적인 모양이다.",
    anchor: "커넥션-10개에-요청-100개",
  },
  {
    id: "mutex-semaphore-monitor-3",
    post: "mutex-semaphore-monitor",
    question: "코어 4개에 스레드 16개가 pthread 스핀락을 다툴 때 뮤텍스보다 크게 느려지는 이유는?",
    choices: [
      "스핀락은 매번 시스템 콜로 커널에 들어가기 때문이다",
      "락을 쥔 스레드가 선점당하면 나머지 스레드가 풀릴 수 없는 락 앞에서 타임 슬라이스를 통째로 태우기 때문이다",
      "스핀락은 재진입이 되어 보유 횟수를 세는 비용이 크기 때문이다",
      "스핀락은 공정한 락이라 매번 잠든 스레드를 깨우기 때문이다",
    ],
    answer: 1,
    explanation:
      "사용자 공간에서는 선점을 끌 수 없어서 쥔 쪽이 밀려나면 기다리는 쪽이 헛돈다. 커널은 스핀락을 쥔 동안 선점을 꺼서 이 문제가 없다. 스핀락은 잠들지 않으니 오히려 시스템 콜이 없다.",
    anchor: "기다리는-동안-무엇을-하나-스핀락과-블로킹-락",
  },
  {
    id: "mutex-semaphore-monitor-4",
    post: "mutex-semaphore-monitor",
    question: "소비자 둘이 if (q.isEmpty()) wait(); 로 기다리다 생산자가 값 하나를 넣고 notifyAll()을 불렀다. 무슨 일이 생기나?",
    choices: [
      "notifyAll은 한 스레드만 깨우므로 문제없다",
      "둘 다 값을 하나씩 받는다",
      "생산자가 락을 놓지 않아 둘 다 영원히 잠든다",
      "둘 다 깨어나 한쪽이 값을 가져가고, 다른 쪽은 조건을 다시 보지 않아 빈 큐에서 꺼내다 실패한다",
    ],
    answer: 3,
    explanation:
      "깨어났다고 조건이 맞는다는 보장이 없다. while로 다시 확인하면 늦게 락을 잡은 소비자는 큐가 빈 것을 보고 도로 잠든다. 가짜 깨어남과 Mesa 방식의 틈도 같은 while로 막는다.",
    anchor: "깨어났다고-조건이-맞는-건-아니다",
  },
  {
    id: "mutex-semaphore-monitor-5",
    post: "mutex-semaphore-monitor",
    question: "Go에서 같은 고루틴이 RWMutex의 RLock을 쥔 채 다시 RLock을 불렀다가 멈췄다. 왜 그럴까?",
    choices: [
      "RLock은 재진입이 안 되어 언제나 바로 멈춘다",
      "그사이 쓰기가 줄을 서면 새 RLock이 막히고, 쓰기는 첫 RLock이 풀리기를 기다려 서로 기다리게 된다",
      "읽기 락 두 개가 쓰기 락으로 자동 승격되기 때문이다",
      "RWMutex는 고루틴 하나당 읽기 락을 하나만 허용하기 때문이다",
    ],
    answer: 1,
    explanation:
      "Go의 RWMutex는 쓰기 기아를 막으려고 쓰기가 기다리는 동안 새 읽기를 막는다. 쓰기가 끼어들지 않으면 멀쩡히 지나가기 때문에 부하가 있을 때만 가끔 멈추는 버그가 된다.",
    anchor: "읽는-사람이-많을-때-읽기-쓰기-락",
  },
  {
    id: "mutex-semaphore-monitor-6",
    post: "mutex-semaphore-monitor",
    question: "ReentrantLock(true)로 공정한 락을 쓰자 처리량이 크게 떨어졌다. 주된 이유는?",
    choices: [
      "락을 넘길 때마다 줄 맨 앞의 잠든 스레드를 깨워야 해서 컨텍스트 스위칭이 늘기 때문이다",
      "공정한 락은 스핀락으로 구현되어 CPU를 태우기 때문이다",
      "공정한 락은 재진입이 안 되기 때문이다",
      "공정한 락은 읽기와 쓰기를 구분하지 못하기 때문이다",
    ],
    answer: 0,
    explanation:
      "불공정한 락은 이미 달리고 있는 스레드가 이어서 잡아 캐시도 따뜻하고 교환도 적다. 공정한 락은 순서를 지키는 대신 매번 깨움 비용을 치른다. 그래서 기본값은 불공정이다.",
    anchor: "공정함은-처리량으로-산다",
  },
  {
    id: "mutex-semaphore-monitor-7",
    post: "mutex-semaphore-monitor",
    question: "높은 우선순위 작업이 낮은 우선순위 작업이 쥔 뮤텍스를 기다리는데, 중간 우선순위 작업 때문에 한참 늦어진다. 고치는 방법은?",
    choices: [
      "중간 우선순위 작업을 스핀락으로 바꾼다",
      "높은 우선순위 작업이 락 대신 세마포어를 쓴다",
      "락을 쥔 낮은 작업의 우선순위를 기다리는 쪽만큼 잠시 올리는 우선순위 상속을 켠다",
      "모든 작업을 공정한 락으로 바꾼다",
    ],
    answer: 2,
    explanation:
      "우선순위 상속을 켜면 락을 쥔 쪽이 중간 작업에 밀리지 않고 얼른 락을 푼다. 패스파인더도 이 옵션을 켜서 고쳤고, 리눅스에서는 PTHREAD_PRIO_INHERIT로 켠다.",
    anchor: "높은-우선순위가-낮은-쪽을-기다린다-우선순위-역전",
  },
];
