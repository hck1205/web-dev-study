import type { QuizQuestion } from "../types";

export const LINUX_PERFORMANCE_TRIAGE: QuizQuestion[] = [
  {
    id: "linux-performance-triage-1",
    post: "linux-performance-triage",
    question: "uptime이 load average: 2.46, 2.70, 3.45를 보여 준다. 가장 알맞은 해석은?",
    choices: [
      "부하가 빠르게 오르는 중이다",
      "15분 전에 더 바빴고 지금은 내려가는 중이다",
      "CPU 사용률이 246%다",
      "디스크를 기다리는 프로세스가 없다",
    ],
    answer: 1,
    explanation:
      "세 숫자는 1분, 5분, 15분 평균이라 1분 값이 15분 값보다 작으면 부하가 내려가는 중이다. 장애가 이미 지나가는 중이라면 지나간 기록을 볼 차례다. load average는 D 상태도 세므로 CPU 사용률과 같지 않다.",
    anchor: "부하가-오르는-중인가-내리는-중인가",
  },
  {
    id: "linux-performance-triage-2",
    post: "linux-performance-triage",
    question: "vmstat 1을 쳤더니 첫 줄은 us 44 wa 2, 둘째 줄부터는 us 40 wa 18이었다. 첫 줄을 버리는 이유는?",
    choices: [
      "첫 줄은 측정 오차가 크게 들어가서",
      "첫 줄은 vmstat 자신이 쓴 CPU가 섞여서",
      "첫 줄은 부팅 이후 평균이라 지금 상태가 아니어서",
      "첫 줄은 단위가 다르기 때문에",
    ],
    answer: 2,
    explanation:
      "vmstat, iostat, mpstat의 첫 보고는 부팅 이후 누적 평균이다. 지금 상태는 간격을 주고 둘째 보고부터 읽는다. iostat은 -y로 첫 보고를 생략할 수 있다.",
    anchor: "vmstat-한-줄에-서버-전체가-있다",
  },
  {
    id: "linux-performance-triage-3",
    post: "linux-performance-triage",
    question: "4코어 평균 CPU 사용률은 61%인데 mpstat -P ALL에서 CPU2만 %usr 98%다. 코어를 8개로 늘리면?",
    choices: [
      "평균이 낮아지니 응답도 빨라진다",
      "CPU2의 일이 다른 코어로 자동으로 나뉜다",
      "steal이 줄어 빨라진다",
      "단일 스레드 병목이라면 나아지지 않는다. 그 스레드의 일을 줄이거나 나눠야 한다",
    ],
    answer: 3,
    explanation:
      "한 코어만 붙어 있는 모양은 스레드 하나가 일을 다 하고 있다는 신호다. 코어가 늘어도 그 스레드는 여전히 한 코어만 쓴다. node 이벤트 루프, Redis, 락을 잡은 스레드가 흔한 예다.",
    anchor: "코어-하나만-뜨거운가",
  },
  {
    id: "linux-performance-triage-4",
    post: "linux-performance-triage",
    question: "CPU가 다른 일로 바쁜 서버에서 vmstat의 wa가 2%로 낮다. 디스크에 대해 무엇을 말할 수 있나?",
    choices: [
      "디스크는 여유가 있다고 확신할 수 있다",
      "wa만으로는 알 수 없다. CPU가 바쁘면 I/O 대기가 wa로 잡히지 않으니 iostat과 b 칸, PSI io로 본다",
      "디스크가 고장 났다",
      "스왑이 일어나고 있다",
    ],
    answer: 1,
    explanation:
      "wa는 CPU가 놀면서 마침 I/O를 기다리는 작업이 있던 시간이라 CPU 시간의 한 갈래일 뿐이다. CPU가 바쁘면 I/O 대기가 있어도 작게 나온다. 디스크 포화는 await, aqu-sz, f/s, vmstat의 b, /proc/pressure/io로 직접 본다.",
    anchor: "vmstat-한-줄에-서버-전체가-있다",
  },
  {
    id: "linux-performance-triage-5",
    post: "linux-performance-triage",
    question: "iostat에서 w/s 9,906, f/s 4,484, w_await 0.08ms, aqu-sz 1.8이 나왔다. 가장 그럴듯한 원인은?",
    choices: [
      "작은 쓰기마다 fsync를 부르는 작업이 있다",
      "디스크 대기열이 넘쳐 요청이 몇 초씩 밀린다",
      "읽기 캐시가 비어 있다",
      "네트워크 재전송이 많다",
    ],
    answer: 0,
    explanation:
      "쓰기 두 번에 flush가 한 번꼴이고 쓰기 크기도 2KiB 남짓으로 작다. 4KiB마다 fsync하는 작업의 모습이다. 대기 시간과 대기열은 작아서 디스크 자체보다 쓰는 쪽의 패턴이 문제다.",
    anchor: "디스크가-넘치는가",
  },
  {
    id: "linux-performance-triage-6",
    post: "linux-performance-triage",
    question: "/proc/pressure/io에 some avg10=19.49, full avg10=15.82가 보인다. full은 무엇을 뜻하나?",
    choices: [
      "디스크 용량의 15.82%가 찼다",
      "I/O 요청의 15.82%가 실패했다",
      "지난 10초 중 15.82%의 시간 동안 실행할 수 있는 작업 전부가 I/O에 막혀 있었다",
      "I/O 스케줄러 대기열이 15.82개다",
    ],
    answer: 2,
    explanation:
      "PSI의 some은 최소 한 작업이, full은 실행할 수 있는 작업 전부가 그 자원을 기다리며 멈춘 시간의 비율이다. avg10은 10초 평균이다. 사용률이 아니라 기다린 시간을 직접 재서 포화를 판단하기 좋다.",
    anchor: "기다린-시간을-한-파일로-본다-psi",
  },
  {
    id: "linux-performance-triage-7",
    post: "linux-performance-triage",
    question: "node 프로세스가 CPU 100%를 쓴다. perf record로 어느 JavaScript 함수인지 보려면 무엇이 필요했나?",
    choices: [
      "node를 --inspect로 띄운다",
      "node를 --perf-basic-prof로 띄워 JIT 함수 이름 표를 남긴다",
      "perf를 -F 10000으로 높여 찍는다",
      "아무 준비 없이도 JS 함수 이름이 나온다",
    ],
    answer: 1,
    explanation:
      "JIT으로 만든 코드는 perf가 이름을 모르니, --perf-basic-prof로 /tmp/perf-<PID>.map에 이름 표를 남기게 한다. 그러면 스택에 JS:*renderReport처럼 함수가 보인다. 샘플링 빈도는 99Hz 정도면 충분하다.",
    anchor: "뜨거운-함수까지-내려간다",
  },
];
