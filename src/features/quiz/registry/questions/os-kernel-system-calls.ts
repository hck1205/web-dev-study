import type { QuizQuestion } from "../types";

export const OS_KERNEL_SYSTEM_CALLS: QuizQuestion[] = [
  {
    id: "os-kernel-system-calls-1",
    post: "os-kernel-system-calls",
    question:
      "C 프로그램이 printf를 1000번 불렀다. 출력을 파일로 돌렸을 때 strace -c로 센 write가 1000번이 아니라 3번이었다. 왜 그런가?",
    choices: [
      "커널이 같은 fd에 오는 write를 모아서 한 번으로 합쳤다",
      "strace가 짧은 시스템 콜은 세지 않는다",
      "glibc가 파일 출력일 때 stdout을 꽉 찬 버퍼로 모았다가 한꺼번에 write했다",
      "printf는 시스템 콜 없이 vDSO로 파일에 쓴다",
    ],
    answer: 2,
    explanation:
      "출력이 터미널이 아니면 glibc는 stdout을 full buffering으로 두고 버퍼(여기서는 4096바이트)가 찰 때 write를 부른다. 8890바이트라 4096, 4096, 698 세 번에 나갔다. 커널이 합쳐 준 게 아니라 사용자 공간 라이브러리가 벽을 덜 넘게 모은 것이다.",
    anchor: "벽을-덜-넘는-꾀",
  },
  {
    id: "os-kernel-system-calls-2",
    post: "os-kernel-system-calls",
    question:
      "clock_gettime을 1000번, getppid를 1000번 부르는 프로그램을 strace -c로 봤더니 getppid만 1000번 찍히고 clock_gettime은 없었다. 이유는?",
    choices: [
      "clock_gettime은 vDSO가 사용자 모드에서 처리해 커널에 들어가지 않았다",
      "컴파일러가 반복되는 clock_gettime을 최적화로 지웠다",
      "strace -c는 시간 관련 시스템 콜을 숨긴다",
      "clock_gettime은 인터럽트로 처리되어 시스템 콜로 세지 않는다",
    ],
    answer: 0,
    explanation:
      "커널은 모든 프로세스에 vDSO를 붙이고 시간 값을 공유 페이지에 써 둔다. glibc의 clock_gettime은 그 값을 사용자 모드에서 읽어 계산하므로 syscall 명령이 실행되지 않는다. 그래서 진짜 시스템 콜로 부를 때보다 몇 배 빠르다.",
    anchor: "벽을-덜-넘는-꾀",
  },
  {
    id: "os-kernel-system-calls-3",
    post: "os-kernel-system-calls",
    question: "다음 중 동기적으로, 실행 중인 명령 때문에 커널 모드로 들어가는 '예외'에 해당하는 것은?",
    choices: [
      "네트워크 카드가 패킷 도착을 알림",
      "아직 물리 메모리에 올라오지 않은 주소를 읽어 생긴 페이지 폴트",
      "프로그램이 read를 부름",
      "로컬 타이머가 정해진 시간을 알림",
    ],
    answer: 1,
    explanation:
      "예외는 지금 실행하던 명령이 원인이 되어 CPU가 멈춰 세우는 동기 진입이고, 페이지 폴트가 대표적이다. read는 프로그램이 일부러 부르는 시스템 콜이고, NIC와 타이머는 바깥에서 오는 비동기 인터럽트다.",
    anchor: "커널로-들어오는-문은-셋이다",
  },
  {
    id: "os-kernel-system-calls-4",
    post: "os-kernel-system-calls",
    question:
      "getppid 같은 가벼운 시스템 콜을 부를 때 반드시 일어나는 것과 꼭 일어나지 않는 것을 바르게 짝지은 것은?",
    choices: [
      "반드시 컨텍스트 스위치, 꼭은 아닌 모드 전환",
      "반드시 TLB 전체 비우기, 꼭은 아닌 레지스터 저장",
      "둘 다 반드시 일어난다",
      "반드시 모드 전환, 꼭은 아닌 컨텍스트 스위치",
    ],
    answer: 3,
    explanation:
      "시스템 콜은 같은 스레드가 커널 모드에 들어갔다 나오는 모드 전환이라 항상 일어난다. 다른 스레드로 갈아타는 컨텍스트 스위치는 데이터를 기다려야 하는 블로킹 호출처럼 스레드가 잠들 때만 생긴다.",
    anchor: "벽을-넘는-데-드는-값",
  },
  {
    id: "os-kernel-system-calls-5",
    post: "os-kernel-system-calls",
    question:
      "연결을 받고 닫지 않는 버그가 있는 서버가 며칠 뒤 accept에서 EMFILE(Too many open files)을 낸다. 이 오류가 나는 이유로 맞는 것은?",
    choices: [
      "디스크에 파일이 너무 많이 쌓였다",
      "커널의 TCP 포트 번호가 바닥났다",
      "소켓도 파일 디스크립터라서 프로세스의 fd 한도를 다 썼다",
      "메모리가 부족해 OOM killer가 소켓을 정리하지 못했다",
    ],
    answer: 2,
    explanation:
      "리눅스는 소켓, 파이프, 장치를 모두 fd로 다룬다. 프로세스마다 열 수 있는 fd 수에 한도(ulimit -n)가 있어서 닫지 않은 소켓이 쌓이면 새 연결을 받을 번호가 없다. /proc/PID/fd를 세어 보면 확인할 수 있다.",
    anchor: "모든-것은-파일이라는-말",
  },
  {
    id: "os-kernel-system-calls-6",
    post: "os-kernel-system-calls",
    question:
      "트래픽을 받는 운영 서버 프로세스가 느리다. strace -p로 오래 붙여 두고 보려 한다. 글에서 짚은 문제는?",
    choices: [
      "strace는 시스템 콜마다 프로세스를 멈춰 세워 수십~수백 배 느리게 만들 수 있다",
      "strace는 root가 아니면 출력이 없다",
      "strace를 붙이면 프로세스가 재시작된다",
      "strace는 실행 중인 프로세스에는 붙을 수 없다",
    ],
    answer: 0,
    explanation:
      "글의 측정에서 getppid 한 번이 94ns에서 strace 아래 11µs로 늘었다. 운영 서버에서는 범위를 좁혀 짧게 보고 떼거나, 커널 안에서 집계하는 perf trace·bpftrace를 쓴다. strace는 -p로 실행 중인 프로세스에 붙을 수 있고 떼어도 프로세스는 계속 돈다.",
    anchor: "현장에서-strace를-꺼내는-순간",
  },
  {
    id: "os-kernel-system-calls-7",
    post: "os-kernel-system-calls",
    question: "사용자 모드 프로그램이 커널 메모리를 직접 읽으려 하면 어떻게 되나?",
    choices: [
      "읽기는 되지만 쓰기만 막힌다",
      "CPU가 예외를 일으키고 커널이 그 프로그램에 시그널을 보내 끝낸다",
      "커널이 값을 복사해 대신 돌려준다",
      "다른 프로세스의 메모리가 대신 읽힌다",
    ],
    answer: 1,
    explanation:
      "커널 영역은 사용자 모드에서 접근할 수 없게 표시되어 있어 CPU가 예외를 낸다. 커널은 보통 SIGSEGV를 보내 프로그램을 끝낸다. 이 벽 덕분에 한 프로그램의 버그가 커널이나 다른 프로그램을 망가뜨리지 못한다.",
    anchor: "프로그램과-커널-사이에-벽이-있다",
  },
];
