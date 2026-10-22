import type { QuizQuestion } from "../types";

export const VIRTUAL_MEMORY_PAGING: QuizQuestion[] = [
  {
    id: "virtual-memory-paging-1",
    post: "virtual-memory-paging",
    question: "64MiB를 mmap한 직후 VmSize는 67MiB인데 VmRSS는 1.7MiB였다. 왜 그런가?",
    choices: [
      "커널이 64MiB를 압축해서 저장했기 때문에",
      "주소 공간만 예약했고, 페이지는 처음 만질 때 page fault로 받기 때문에",
      "64MiB가 바로 스왑으로 내려갔기 때문에",
      "VmRSS는 1초마다 한 번씩만 갱신되기 때문에",
    ],
    answer: 1,
    explanation:
      "mmap은 VMA만 만들고 페이지 테이블 칸은 비워 둔다. 처음 읽거나 쓸 때 page fault가 나서 그때 프레임을 받으니, 아무것도 만지지 않은 64MiB는 RSS에 잡히지 않는다. 이 머신에는 스왑이 없었다.",
    anchor: "프로세스마다-따로-보는-주소",
  },
  {
    id: "virtual-memory-paging-2",
    post: "virtual-memory-paging",
    question: "x86-64가 페이지 테이블을 평평한 표 하나가 아니라 4단으로 나누는 가장 큰 이유는?",
    choices: [
      "주소 변환을 한 번의 메모리 읽기로 끝내려고",
      "쓰지 않는 주소 구역의 표를 만들지 않아 표 크기를 작게 유지하려고",
      "TLB를 없애도 되게 하려고",
      "프로세스끼리 페이지 테이블을 공유하려고",
    ],
    answer: 1,
    explanation:
      "48비트 주소 공간을 평평한 표로 덮으면 프로세스마다 512GiB가 필요하다. 9비트씩 4단으로 나누면 쓰는 구역의 표만 만들면 되고, 표 하나가 4KiB라 페이지 한 장에 들어간다. 대신 변환할 때 메모리를 네 번 읽어야 해서 TLB가 필요해진다.",
    anchor: "주소-하나를-네-번-나눠-찾는다",
  },
  {
    id: "virtual-memory-paging-3",
    post: "virtual-memory-paging",
    question: "1GiB 배열을 무작위로 읽는 프로그램이 MADV_HUGEPAGE를 켜자 25~30% 빨라졌다. 무엇이 줄었나?",
    choices: [
      "디스크에서 읽는 횟수",
      "CPU가 실행하는 명령 수",
      "주소 변환 비용(TLB miss와 페이지 워크)",
      "GC 멈춤 시간",
    ],
    answer: 2,
    explanation:
      "2MiB 페이지 하나는 4KiB 페이지 512장을 TLB 한 칸으로 덮는다. 데이터와 코드는 같고 바뀐 건 주소 변환뿐이라, TLB miss와 페이지 워크가 줄어든 만큼 빨라졌다. 메모리는 이미 다 채워져 있어 디스크 읽기는 없었다.",
    anchor: "큰-페이지로-tlb-칸을-아낀다",
  },
  {
    id: "virtual-memory-paging-4",
    post: "virtual-memory-paging",
    question: "캐시를 비운 128MiB 파일을 mmap해서 4KiB마다 읽었는데 major fault가 1번뿐이었다. MADV_RANDOM을 주자 32,768번이 됐다. 이유는?",
    choices: [
      "MADV_RANDOM이 페이지 크기를 4KiB보다 작게 바꿔서",
      "순차 접근에서는 커널이 미리 읽기(readahead)로 뒤 페이지를 캐시에 올려 두는데, MADV_RANDOM이 그걸 꺼서",
      "첫 실행에서는 perf가 major fault를 세지 못해서",
      "MADV_RANDOM이 페이지 캐시를 매번 비워서",
    ],
    answer: 1,
    explanation:
      "순차로 읽으면 커널이 패턴을 알아채고 뒤쪽 페이지를 미리 읽어 두니, 나머지 fault는 캐시에 있는 페이지를 연결하는 minor fault로 끝난다. MADV_RANDOM은 미리 읽기를 꺼서 페이지마다 디스크를 기다리는 major fault가 났고 시간이 1.7초로 늘었다.",
    anchor: "디스크까지-가야-하는-major-fault",
  },
  {
    id: "virtual-memory-paging-5",
    post: "virtual-memory-paging",
    question: "vm.overcommit_memory=0인 16GiB 머신에서 malloc(8 GiB)를 세 번 부르면 어떻게 되나?",
    choices: [
      "세 번 모두 성공하고 RSS는 거의 늘지 않는다",
      "두 번째부터 NULL이 돌아온다",
      "첫 번째부터 NULL이 돌아온다",
      "세 번째 호출에서 즉시 OOM kill이 난다",
    ],
    answer: 0,
    explanation:
      "모드 0은 한 번에 램과 스왑을 합친 것보다 큰 요청만 거절하는 휴리스틱이라 8GiB는 매번 통과한다. 주소 공간만 예약하니 RSS도 그대로다. 실험에서 20GiB 한 번은 NULL이었고, CommitLimit을 지키는 건 모드 2다.",
    anchor: "커널은-약속을-넉넉하게-한다",
  },
  {
    id: "virtual-memory-paging-6",
    post: "virtual-memory-paging",
    question: "스왑이 없는 160MiB cgroup에서 익명 메모리 128MiB를 잡고 64MiB 파일을 반복해 읽었다. 무슨 일이 일어났나?",
    choices: [
      "즉시 OOM kill로 프로세스가 죽었다",
      "익명 메모리가 디스크로 내려가 파일 읽기가 빨라졌다",
      "아무 변화 없이 두 번째부터 캐시에서 1ms에 읽혔다",
      "파일 페이지가 계속 밀려나 매 바퀴 major fault가 나며 수백 배 느려졌다",
    ],
    answer: 3,
    explanation:
      "익명 메모리는 내보낼 곳이 없으니 커널이 파일 페이지를 버려 자리를 만들고, 그걸 곧바로 다시 읽어 온다. 프로세스는 죽지 않았지만 한 바퀴가 1ms에서 700ms대로 늘었다. 스왑을 꺼도 thrashing은 파일 페이지로 일어난다.",
    anchor: "메모리가-모자라면-먼저-느려진다",
  },
  {
    id: "virtual-memory-paging-7",
    post: "virtual-memory-paging",
    question: "커널 로그에 constraint=CONSTRAINT_MEMCG가 찍힌 OOM kill이 났다. 무엇을 먼저 의심해야 하나?",
    choices: [
      "노드 전체의 램이 모자랐다",
      "그 프로세스가 속한 cgroup(컨테이너)의 메모리 한도에 닿았다",
      "커널 메모리 누수가 있다",
      "overcommit_memory가 2로 설정되어 있다",
    ],
    answer: 1,
    explanation:
      "CONSTRAINT_MEMCG와 oom_memcg 칸은 cgroup 한도에 걸린 OOM이라는 표시다. 노드가 모자랐다면 CONSTRAINT_NONE이 찍힌다. 그래서 노드에 메모리가 남아 있어도 컨테이너는 죽을 수 있고, 고칠 곳은 그 한도나 프로세스의 메모리 사용이다.",
    anchor: "누구를-죽일지-고르는-oom-killer",
  },
];
