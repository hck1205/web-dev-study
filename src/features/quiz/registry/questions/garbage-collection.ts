import type { QuizQuestion } from "../types";

export const GARBAGE_COLLECTION: QuizQuestion[] = [
  {
    id: "garbage-collection-1",
    post: "garbage-collection",
    question: "CPython에서 두 객체가 서로를 가리킨 채 다른 참조가 모두 사라지면 어떻게 되나?",
    choices: [
      "참조 수가 0이 되는 순간 바로 해제된다",
      "참조 수가 1로 남아 고리 수집기가 돌 때까지 해제되지 않는다",
      "프로세스가 끝날 때까지 절대 해제되지 않는다",
      "인터프리터가 예외를 던진다",
    ],
    answer: 1,
    explanation:
      "서로를 가리키니 참조 수는 각각 1로 남아 참조 카운팅만으로는 해제되지 않는다. CPython은 이런 고리를 잡는 세대별 수집기를 따로 돌려서, gc.collect()나 임계값에 닿았을 때 풀린다.",
    anchor: "참조-카운팅은-즉시-치우지만-고리를-못-본다",
  },
  {
    id: "garbage-collection-2",
    post: "garbage-collection",
    question: "복사 방식 GC를 young 영역에 쓰는 이유로 가장 알맞은 것은?",
    choices: [
      "메모리를 절반만 써도 되기 때문에",
      "객체 주소가 바뀌지 않기 때문에",
      "비용이 살아남은 객체 수에만 비례해서, 대부분 금방 죽는 young에서는 싸기 때문에",
      "쓰기 장벽이 필요 없어지기 때문에",
    ],
    answer: 2,
    explanation:
      "복사 방식은 살아 있는 객체만 반대편으로 옮기고 원래 칸은 통째로 비우므로 죽은 객체는 비용이 없다. 대부분의 객체가 금방 죽는다는 세대별 가설과 잘 맞는다. 대신 공간을 둘로 나눠야 해서 메모리는 더 든다.",
    anchor: "대부분-금방-죽는다는-내기",
  },
  {
    id: "garbage-collection-3",
    post: "garbage-collection",
    question: "512Mi 한도의 Pod에서 Node 앱이 종료 코드 137로 죽었고 힙 OOM 로그가 없다. 가장 먼저 확인할 것은?",
    choices: [
      "컨테이너 안에서 V8의 heap_size_limit과 NODE_OPTIONS 값",
      "이벤트 루프 지연",
      "Scavenge 횟수",
      "Node 버전의 LTS 여부",
    ],
    answer: 0,
    explanation:
      "137은 커널이 SIGKILL로 죽인 것이라 V8이 GC를 세게 돌기 전에 컨테이너 한도에 먼저 닿았다는 뜻이다. 힙 한도가 컨테이너 한도에 비해 크거나 NODE_OPTIONS가 덮어쓰고 있지 않은지 보고, --max-old-space-size를 한도의 70~80%로 준다.",
    anchor: "힙-한도와-컨테이너-한도는-따로-논다",
  },
  {
    id: "garbage-collection-4",
    post: "garbage-collection",
    question: "--trace-gc 로그에서 메모리 누수를 의심하게 하는 신호는?",
    choices: [
      "Scavenge가 1초에 여러 번 찍힌다",
      "Mark-Compact 뒤에 남는 크기가 GC마다 계속 오른다",
      "reason이 allocation failure로 찍힌다",
      "mu 값이 1.000이다",
    ],
    answer: 1,
    explanation:
      "Mark-Compact 뒤의 값은 살아남은 데이터의 크기라서, 이 값이 계속 오르면 붙잡힌 객체가 늘고 있다는 뜻이다. Scavenge가 잦은 것은 할당이 많다는 뜻일 뿐 누수와는 다르다.",
    anchor: "힙이-한도에-닿으면",
  },
  {
    id: "garbage-collection-5",
    post: "garbage-collection",
    question: "오래 사는 거대한 Map에 요청마다 새 객체를 갈아 끼우는 서버에서 p99가 나빠졌다. 글의 측정에서 드러난 주된 이유는?",
    choices: [
      "Map 조회가 O(n)이 되어서",
      "Mark-Compact가 요청마다 돌아서",
      "old가 young을 가리키는 기록과 복사할 생존 객체가 늘어 Scavenge 한 번이 길어져서",
      "이벤트 루프가 Map을 잠가서",
    ],
    answer: 2,
    explanation:
      "old에 있는 Map이 young 객체를 가리킬 때마다 쓰기 장벽이 기억 집합에 기록하고, Scavenge는 그 목록을 훑고 살아남은 객체를 복사해야 한다. 측정에서 Scavenge 한 번이 2ms에서 4~19ms로 길어졌고 꼬리 지연이 두 배 넘게 뛰었다.",
    anchor: "멈춤은-평균이-아니라-꼬리에-나타난다",
  },
  {
    id: "garbage-collection-6",
    post: "garbage-collection",
    question: "JDK 21을 메모리 512MiB 컨테이너에서 기본값으로 띄우면 어떤 일이 생기나?",
    choices: [
      "힙이 512MiB 전부로 잡혀 커널에 죽는다",
      "컨테이너 한도를 읽지 못해 호스트 메모리 기준으로 힙을 잡는다",
      "ZGC가 자동으로 선택된다",
      "힙이 128MiB로 잡히고, 서버급이 아니라고 보고 Serial GC를 고른다",
    ],
    answer: 3,
    explanation:
      "기본 MaxRAMPercentage가 25라서 512MiB의 4분의 1만 힙이 되고, 메모리가 1792MB 미만이면 G1 대신 Serial GC가 선택된다. 그래서 작은 Pod에서는 MaxRAMPercentage와 GC 종류를 명시한다.",
    anchor: "힙-한도와-컨테이너-한도는-따로-논다",
  },
  {
    id: "garbage-collection-7",
    post: "garbage-collection",
    question: "Go 서비스에 GOGC=off만 설정하고 GOMEMLIMIT을 주지 않으면?",
    choices: [
      "GC가 돌지 않아 메모리가 계속 자라고 결국 컨테이너 한도에서 죽는다",
      "GC가 매 할당마다 돌아 CPU가 100%가 된다",
      "런타임이 자동으로 GOGC=100으로 되돌린다",
      "힙이 살아 있는 데이터의 두 배에서 멈춘다",
    ],
    answer: 0,
    explanation:
      "GOGC=off는 비율에 따른 GC를 끄는 설정이라 한도가 없으면 다음 GC 목표가 사라진다. GOMEMLIMIT을 함께 주면 그 한도 근처에서만 GC가 돌아 메모리를 묶을 수 있다.",
    anchor: "go에는-손잡이가-둘-있다",
  },
];
