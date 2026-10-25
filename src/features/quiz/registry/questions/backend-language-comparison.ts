import type { QuizQuestion } from "../types";

export const BACKEND_LANGUAGE_COMPARISON: QuizQuestion[] = [
  {
    id: "backend-language-comparison-1",
    post: "backend-language-comparison",
    question: "요청마다 50ms씩 DB를 기다리는 API를 고정 크기 16개 스레드 풀로 처리한다. 동시 연결을 200개로 늘려도 처리량이 초당 약 320건에서 멈추는 이유는?",
    choices: [
      "JVM의 GC가 요청마다 멈춤을 일으켜서",
      "스레드 16개가 모두 기다림에 묶여 있어 초당 16 × 20건이 상한이라서",
      "자바의 JSON 직렬화가 느려서",
      "운영체제가 한 프로세스의 연결 수를 320개로 제한해서",
    ],
    answer: 1,
    explanation:
      "스레드 하나가 요청 하나를 50ms 붙잡으면 1초에 20건을 처리하고, 16개면 320건이 상한이다. 나머지 요청은 줄을 서서 지연만 늘어난다. CPU나 GC가 아니라 기다리는 동안 일꾼을 붙잡는 모델이 상한을 정한다.",
    anchor: "일꾼-수와-기다림이-처리량-상한을-정한다",
  },
  {
    id: "backend-language-comparison-2",
    post: "backend-language-comparison",
    question: "asyncio 기반 핸들러에서 await asyncio.sleep(0.05) 대신 time.sleep(0.05)를 썼다. 동시 요청이 200개일 때 어떻게 되나?",
    choices: [
      "그 요청만 50ms 늦어지고 나머지는 영향이 없다",
      "파이썬이 자동으로 스레드 풀로 옮겨 실행한다",
      "이벤트 루프 전체가 멈춰 처리량이 초당 약 20건으로 떨어진다",
      "GIL이 풀리면서 오히려 더 빨라진다",
    ],
    answer: 2,
    explanation:
      "이벤트 루프는 스레드 하나라서 막는 호출이 들어오면 그동안 다른 요청을 하나도 받지 못한다. 측정에서도 초당 19.6건, p50 10초가 나왔다. 막는 함수는 asyncio.to_thread 같은 방법으로 루프 밖에서 돌린다.",
    anchor: "async-안에서-막는-한-줄",
  },
  {
    id: "backend-language-comparison-3",
    post: "backend-language-comparison",
    question: "Go의 고루틴과 자바 21의 가상 스레드가 공통으로 해결하는 문제는?",
    choices: [
      "네트워크 대기를 epoll 없이 처리한다",
      "GC를 없애서 메모리 멈춤을 없앤다",
      "CPU 계산을 코어 수보다 많이 병렬로 돌린다",
      "기다리는 동안 OS 스레드를 놓아줘서, 순서대로 쓴 코드로도 대기 중인 요청을 수만 개 들 수 있게 한다",
    ],
    answer: 3,
    explanation:
      "둘 다 적은 수의 OS 스레드 위에 많은 실행 단위를 올리는 M:N 모델이라, 기다리는 순간 실행 단위를 떼어 내고 다른 걸 올린다. CPU 계산의 상한은 여전히 코어 수이고, 네트워크 대기는 결국 epoll 같은 커널 기능 위에서 돈다.",
    anchor: "요청이-기다리는-동안-무엇이-묶여-있나",
  },
  {
    id: "backend-language-comparison-4",
    post: "backend-language-comparison",
    question: "CPU 1개, 메모리 1GB로 제한된 컨테이너에서 자바 서비스가 GC 때 유난히 멈칫거린다. 먼저 의심할 것은?",
    choices: [
      "G1이 너무 많은 스레드를 써서",
      "JVM이 서버급 머신이 아니라고 판단해 Serial GC를 골라서",
      "ZGC가 기본으로 켜져서",
      "가상 스레드가 GC를 막아서",
    ],
    answer: 1,
    explanation:
      "JVM은 CPU가 2개 미만이거나 메모리가 약 1.8GB보다 작으면 서버급 머신이 아니라고 보고 G1 대신 Serial GC를 고른다. 작은 Pod에서는 GC 종류부터 확인한다. ZGC는 직접 켜야 쓰인다.",
    anchor: "메모리는-누가-치우나-gc와-소유권",
  },
  {
    id: "backend-language-comparison-5",
    post: "backend-language-comparison",
    question: "같은 소수 세기 반복문을 돌렸더니 Node와 자바는 0.4초 안팎, 파이썬은 11초가 걸렸다. 이 결과를 가장 바르게 읽은 것은?",
    choices: [
      "Node가 Go보다 빠른 언어라는 순위가 정해졌다",
      "파이썬은 I/O 바운드 API에서도 30배 느리다",
      "JIT가 있는 런타임은 반복문을 기계어로 바꿔 미리 컴파일한 언어와 같은 자릿수에 들어가고, 인터프리터로 도는 파이썬 반복문만 자릿수가 다르다",
      "자바의 시작 시간이 0.4초라 계산은 0초에 끝났다",
    ],
    answer: 2,
    explanation:
      "마이크로벤치마크는 정수 폭 같은 사소한 차이로도 순서가 바뀌어서 순위로 읽지 않는다. 읽을 수 있는 건 JIT 런타임과 컴파일 언어가 같은 자릿수라는 것, 순수 파이썬 반복문이 크게 느리다는 것이다. I/O 바운드 API에서는 앞의 측정처럼 대기가 지배해서 이 차이가 거의 드러나지 않는다.",
    anchor: "일꾼-수와-기다림이-처리량-상한을-정한다",
  },
  {
    id: "backend-language-comparison-6",
    post: "backend-language-comparison",
    question: "서버리스 함수로 띄울 API의 언어를 고를 때 시작 시간이 특히 중요한 이유는?",
    choices: [
      "서버리스는 CPU를 더 비싸게 받기 때문에",
      "서버리스는 스레드를 하나만 허용하기 때문에",
      "서버리스에서는 GC가 동작하지 않기 때문에",
      "요청이 올 때 프로세스를 새로 띄우는 경우가 있어 시작 시간이 그대로 첫 요청의 지연이 되기 때문에",
    ],
    answer: 3,
    explanation:
      "서버리스와 공격적인 오토스케일링은 새 프로세스를 자주 띄워서 시작 시간이 사용자 지연이나 늦은 합류로 바로 나타난다. 그래서 Go의 정적 바이너리나 GraalVM 네이티브 이미지 같은 선택이 의미를 가진다. 한 번 뜨면 몇 주씩 도는 서비스에서는 시작 시간이 거의 중요하지 않다.",
    anchor: "시작-시간과-메모리-바닥",
  },
  {
    id: "backend-language-comparison-7",
    post: "backend-language-comparison",
    question: "PHP-FPM의 요청마다 새로 시작하는 모델이 가진 장점으로 맞는 것은?",
    choices: [
      "요청이 끝나면 그 요청이 만든 메모리를 통째로 버려 누수가 쌓이지 않고 한 요청의 실수가 다음 요청에 번지지 않는다",
      "연결 풀을 프로세스 사이에 공유해 DB 연결 비용이 없다",
      "요청마다 부트스트랩 비용이 전혀 들지 않는다",
      "GIL이 없어 한 요청이 여러 코어를 쓴다",
    ],
    answer: 0,
    explanation:
      "PHP-FPM은 요청 하나를 처리하고 상태를 모두 버리는 공유하지 않는 모델이라 누수와 상태 오염에 강하다. 대신 요청마다 부트스트랩 비용이 들고 연결 풀 같은 상태를 들고 있기 어려워서, Swoole이나 FrankenPHP 같은 오래 떠 있는 실행 방식이 그 약점을 메운다.",
    anchor: "언어마다-잘-맞는-자리",
  },
];
