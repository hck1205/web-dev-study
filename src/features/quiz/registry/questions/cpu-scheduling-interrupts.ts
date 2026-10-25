import type { QuizQuestion } from "../types";

export const CPU_SCHEDULING_INTERRUPTS: QuizQuestion[] = [
  {
    id: "cpu-scheduling-interrupts-1",
    post: "cpu-scheduling-interrupts",
    question: "시스템 콜도 부르지 않고 무한 루프를 도는 스레드가 있어도 서버 전체가 얼지 않는 이유는?",
    choices: [
      "컴파일러가 무한 루프 안에 양보 명령을 자동으로 넣기 때문이다",
      "CPU의 로컬 타이머가 주기적으로 인터럽트를 걸어 커널이 끼어들 기회를 만들기 때문이다",
      "무한 루프는 캐시 미스가 많아 저절로 느려지기 때문이다",
      "커널이 다른 코어에서 그 스레드의 메모리를 읽어 멈추기 때문이다",
    ],
    answer: 1,
    explanation:
      "타이머 인터럽트가 오면 스레드의 의사와 상관없이 커널 처리기가 돌고, 몫을 다 썼으면 돌아가는 길에 다른 스레드로 바꾼다. 이것이 선점을 가능하게 하는 장치다.",
    anchor: "달리는-프로그램을-누가-끌어내리나",
  },
  {
    id: "cpu-scheduling-interrupts-2",
    post: "cpu-scheduling-interrupts",
    question: "트래픽이 많은 서버에서 한 코어만 si(softirq) 비율이 높고 나머지는 논다. 가장 먼저 의심할 것은?",
    choices: [
      "애플리케이션 스레드 풀이 너무 작다",
      "타이머 인터럽트 주기(HZ)가 너무 짧다",
      "네트워크 카드의 인터럽트가 한 코어로만 가고 있다",
      "스왑이 일어나고 있다",
    ],
    answer: 2,
    explanation:
      "장치 인터럽트를 받은 코어가 이어서 softirq도 처리하므로, 인터럽트가 한 코어에 몰리면 그 코어만 바빠진다. /proc/interrupts에서 쏠림을 확인하고 RSS 큐, irqbalance, smp_affinity_list로 나눈다.",
    anchor: "인터럽트-숫자-읽기",
  },
  {
    id: "cpu-scheduling-interrupts-3",
    post: "cpu-scheduling-interrupts",
    question: "작업 길이가 8, 4, 9, 5로 비슷하게 섞여 있을 때 라운드 로빈(조각 4)의 평균 대기가 FCFS보다 길게 나왔다. 그런데도 범용 OS가 라운드 로빈 계열을 쓰는 이유는?",
    choices: [
      "라운드 로빈은 언제나 평균 대기 시간이 최소이기 때문이다",
      "라운드 로빈은 컨텍스트 스위칭이 가장 적기 때문이다",
      "작업 길이를 미리 알아야 쓸 수 있어 정확하기 때문이다",
      "누구든 조각 하나만큼만 기다리면 차례가 와서 응답성이 좋고 아무도 굶지 않기 때문이다",
    ],
    answer: 3,
    explanation:
      "라운드 로빈이 사는 것은 평균 대기가 아니라 응답성과 공평함이다. 평균 대기를 최소로 하는 건 SJF지만 작업 길이를 미리 알아야 하고 긴 작업이 굶을 수 있다.",
    anchor: "직접-계산해-보기",
  },
  {
    id: "cpu-scheduling-interrupts-4",
    post: "cpu-scheduling-interrupts",
    question: "MLFQ에서 일정 시간마다 모든 작업을 맨 위 줄로 올리는 규칙이 없으면 어떻게 되나?",
    choices: [
      "아래 줄의 CPU 위주 작업이 위 줄 작업에 계속 밀려 굶는다",
      "대화형 작업이 아래 줄로 내려가 응답이 느려진다",
      "모든 작업이 같은 줄에 모여 FCFS가 된다",
      "타이머 인터럽트가 더 자주 와야 한다",
    ],
    answer: 0,
    explanation:
      "높은 줄이 비어 있지 않으면 낮은 줄은 돌지 않으므로, 대화형 작업이 끊이지 않으면 아래 줄 작업은 영원히 못 돈다. 주기적으로 끌어올리는 것이 MLFQ의 에이징이다.",
    anchor: "작업의-성격을-보고-줄을-옮긴다-mlfq",
  },
  {
    id: "cpu-scheduling-interrupts-5",
    post: "cpu-scheduling-interrupts",
    question: "한 코어에서 nice 0과 nice 10인 무한 루프가 다툰다. CPU 몫은 대략 어떻게 나뉘나?",
    choices: [
      "nice 차이 10만큼 10% 대 0%로 나뉜다",
      "가중치 1024 대 110이라 약 9대 1로 나뉜다",
      "둘 다 무한 루프라 반반으로 나뉜다",
      "nice 10은 다른 작업이 없을 때만 돌아서 0%가 된다",
    ],
    answer: 1,
    explanation:
      "nice는 가중치를 바꾸고, 한 단계마다 약 1.25배씩 달라져 nice 10은 110이 된다. 실험에서도 81.1% 대 8.6%로 나왔다. 아예 놀 때만 도는 것은 SCHED_IDLE이다.",
    anchor: "리눅스는-줄-대신-시간을-잰다-cfs에서-eevdf로",
  },
  {
    id: "cpu-scheduling-interrupts-6",
    post: "cpu-scheduling-interrupts",
    question: "CPU limit 2인 Pod의 평균 CPU 사용률은 1코어 남짓인데 p99 지연이 70ms씩 튄다. 스레드는 8개다. 원인으로 가장 그럴듯한 것은?",
    choices: [
      "노드의 다른 Pod가 nice 값을 낮춰 CPU를 빼앗았다",
      "타임 슬라이스가 너무 길어서 다른 스레드가 기다린다",
      "스레드 8개가 100ms 주기의 할당량 200ms를 앞부분에 다 써서 남은 시간 동안 cgroup 전체가 쓰로틀링된다",
      "EEVDF가 지연에 민감한 작업을 뒤로 미루기 때문이다",
    ],
    answer: 2,
    explanation:
      "cpu.max는 코어 수가 아니라 주기당 CPU 시간이라, 8개 코어에서 동시에 달리면 25ms 만에 할당량을 쓰고 75ms를 쉰다. cpu.stat의 nr_throttled로 확인하고 스레드 풀을 limit에 맞춘다.",
    anchor: "한도를-다-쓰면-쉰다-cgroup-cpumax와-쓰로틀링",
  },
  {
    id: "cpu-scheduling-interrupts-7",
    post: "cpu-scheduling-interrupts",
    question: "vmstat에서 r 열이 코어 수보다 꾸준히 크다. 이것이 뜻하는 것은?",
    choices: [
      "디스크 I/O를 기다리는 프로세스가 많다",
      "달릴 준비가 된 스레드가 코어보다 많아 CPU 줄이 밀리고 있다",
      "인터럽트가 너무 많이 온다",
      "하이퍼바이저가 CPU를 빼앗고 있다",
    ],
    answer: 1,
    explanation:
      "r은 실행 중이거나 실행 대기 줄에 있는 스레드 수다. 코어보다 많으면 누군가는 줄에서 기다리고, 그 시간이 지연에 더해진다. I/O 대기는 b 열, 하이퍼바이저에 빼앗긴 시간은 st 열에 나온다.",
    anchor: "현장에서-cpu-차례를-의심할-때",
  },
];
