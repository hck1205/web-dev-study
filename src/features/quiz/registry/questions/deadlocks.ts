import type { QuizQuestion } from "../types";

export const DEADLOCKS: QuizQuestion[] = [
  {
    id: "deadlocks-1",
    post: "deadlocks",
    question: "요청 지연이 치솟는데 프로세스의 CPU 사용률은 0%이고 스레드는 모두 S 상태다. 가장 먼저 할 일은?",
    choices: [
      "바로 재시작해서 서비스를 살린 뒤 로그를 본다",
      "재시작 전에 스레드 덤프를 간격을 두고 두 번 떠서 같은 자리에서 기다리는지 본다",
      "CPU가 놀고 있으니 워커 수를 늘린다",
      "무한 루프이므로 프로파일러로 뜨거운 함수를 찾는다",
    ],
    answer: 1,
    explanation:
      "CPU가 0%인데 멈췄다면 무언가를 기다리는 쪽이라 데드락을 의심한다. 재시작하면 고리가 사라져 원인을 알 수 없으니 덤프부터 남긴다. 무한 루프라면 코어 하나가 100%로 탔을 것이다.",
    anchor: "멈춘-프로세스를-들여다보는-순서",
  },
  {
    id: "deadlocks-2",
    post: "deadlocks",
    question: "transfer(a, b)와 transfer(b, a)가 동시에 불려 멈춘다. 순환 대기를 없애는 가장 확실한 고침은?",
    choices: [
      "두 락 사이의 작업 시간을 줄인다",
      "방향과 상관없이 ID가 작은 계좌부터 잠근다",
      "첫 락을 잡기 전에 잠깐 무작위로 쉰다",
      "락을 RWMutex로 바꾼다",
    ],
    answer: 1,
    explanation:
      "모든 코드가 같은 순서로 잠그면 쥔 채 거꾸로 기다리는 경우가 없어 고리가 생기지 않는다. 작업 시간을 줄이거나 무작위로 쉬면 확률만 줄 뿐 고리의 가능성은 남는다. 실험에서 ID 순서로 고친 코드는 110 90으로 정상 종료했다.",
    anchor: "언제나-같은-순서로-잠근다",
  },
  {
    id: "deadlocks-3",
    post: "deadlocks",
    question:
      "HTTP 서버를 띄운 Go 프로그램에서 두 고루틴이 반대 순서로 뮤텍스를 잡아 멈췄다. 런타임은 어떻게 반응하나?",
    choices: [
      "fatal error: all goroutines are asleep - deadlock!으로 즉시 종료한다",
      "멈춘 고루틴 하나를 강제로 깨운다",
      "리스너 고루틴이 깨어 있어 아무 메시지 없이 멈춰 있는다",
      "1초 뒤 한쪽 Lock 호출이 에러를 돌려준다",
    ],
    answer: 2,
    explanation:
      "Go의 데드락 감지는 모든 고루틴이 잠들었을 때만 동작한다. HTTP 리스너처럼 깨어 있는 고루틴이 있으면 런타임은 아무것도 알리지 않는다. 그래서 pprof 고루틴 덤프나 SIGQUIT로 직접 스택을 봐야 한다.",
    anchor: "서버는-멈춰도-런타임이-알려-주지-않는다",
  },
  {
    id: "deadlocks-4",
    post: "deadlocks",
    question:
      "두 이체를 tryLock(500ms)로 바꾸고 실패하면 쥔 락을 놓고 같은 간격으로 바로 다시 시도하게 했다. 부하가 높을 때 생길 수 있는 문제는?",
    choices: [
      "둘이 같은 순간에 잡고 포기하기를 반복하는 라이브락",
      "락이 풀리지 않아 영원히 멈추는 데드락",
      "tryLock이 락을 두 번 잡아 잔액이 두 번 빠진다",
      "타임아웃 때문에 메모리 누수가 생긴다",
    ],
    answer: 0,
    explanation:
      "실험에서도 두 스레드가 같은 순간에 시작해 같은 순간에 포기했다. 똑같은 간격으로 다시 시도하면 같은 충돌을 되풀이하며 일을 끝내지 못할 수 있다. 재시도 간격에 무작위 값을 섞어 서로 어긋나게 한다.",
    anchor: "기다리는-시간에-끝을-둔다",
  },
  {
    id: "deadlocks-5",
    post: "deadlocks",
    question:
      "Node 풀(max 2)에서 요청이 pool.connect()로 커넥션을 쥔 채 헬퍼에서 pool.query()를 부른다. 동시 요청 2개가 오면 DB의 pg_stat_activity에는 무엇이 보이나?",
    choices: [
      "두 세션이 서로의 행 락을 기다리는 Lock 대기",
      "deadlock detected 에러로 한쪽이 롤백된 기록",
      "두 세션 모두 idle in transaction",
      "세션이 하나도 없다",
    ],
    answer: 2,
    explanation:
      "고리는 DB가 아니라 앱의 풀 안에 있다. 두 요청이 커넥션을 하나씩 쥔 채 세 번째 커넥션을 기다리니, DB 쪽 세션은 트랜잭션을 연 채 아무것도 하지 않는다. DB 락 대기가 아니라서 deadlock detected도 나오지 않는다.",
    anchor: "락이-아닌-자원도-고리를-만든다",
  },
  {
    id: "deadlocks-6",
    post: "deadlocks",
    question:
      "Go에서 RLock을 쥔 함수가 안에서 RLock을 쓰는 다른 함수를 불렀다. 평소엔 괜찮다가 가끔 멈추는 이유는?",
    choices: [
      "RLock은 같은 고루틴에서 두 번 잡을 수 없게 막혀 있다",
      "그사이 다른 고루틴이 Lock으로 줄을 서면 새 RLock이 쓰기 락 뒤로 밀리기 때문이다",
      "RUnlock을 defer로 부르면 순서가 뒤바뀌기 때문이다",
      "RWMutex는 읽기 락을 동시에 하나만 허용하기 때문이다",
    ],
    answer: 1,
    explanation:
      "RWMutex는 쓰는 쪽이 굶지 않게, 쓰기 락이 기다리면 새 읽기 락을 막는다. 쓰기 락은 바깥 RLock이 풀리길, 바깥 RLock은 안쪽 RLock을 기다리니 고리가 된다. 쓰기와 타이밍이 맞을 때만 터져서 가끔 멈춘다.",
    anchor: "락-하나로도-멈춘다",
  },
  {
    id: "deadlocks-7",
    post: "deadlocks",
    question: "jstack 출력에서 어떤 스레드가 다른 스레드를 막고 있는 주인인지 알아내는 방법은?",
    choices: [
      "cpu= 값이 가장 큰 스레드를 찾는다",
      "한 스레드의 - waiting to lock <주소>와 같은 주소가 - locked <주소>로 나오는 스레드를 찾는다",
      "prio가 가장 높은 스레드를 찾는다",
      "RUNNABLE 상태인 스레드가 언제나 주인이다",
    ],
    answer: 1,
    explanation:
      "waiting to lock에 적힌 객체 주소가 다른 스레드의 locked 줄에 있으면 그 스레드가 락을 쥔 주인이다. 쥔 것과 기다리는 것을 이어 가면 고리가 보인다. 데드락에 걸린 스레드는 기다리기만 하니 cpu 값은 오히려 작다.",
    anchor: "스레드-덤프-읽기-자바와-파이썬",
  },
];
