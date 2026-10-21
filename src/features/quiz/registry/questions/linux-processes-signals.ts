import type { QuizQuestion } from "../types";

export const LINUX_PROCESSES_SIGNALS: QuizQuestion[] = [
  {
    id: "linux-processes-signals-1",
    post: "linux-processes-signals",
    question: "load average가 8인데 top의 CPU는 절반 넘게 idle이다. 먼저 찾아볼 것은?",
    choices: [
      "STAT이 R인 프로세스 중 %CPU가 높은 것",
      "STAT이 D인 프로세스와 그 wchan. load average는 I/O를 기다리는 D도 센다",
      "STAT이 Z인 좀비 프로세스. 좀비가 CPU를 쓴다",
      "nice 값이 음수인 프로세스",
    ],
    answer: 1,
    explanation:
      "리눅스의 load average는 실행 중이거나 실행을 기다리는 R과, 끊을 수 없는 I/O 대기인 D를 함께 센다. CPU가 놀아도 디스크나 NFS를 기다리는 프로세스가 많으면 부하가 높게 나온다. 좀비는 CPU를 쓰지 않는다.",
    anchor: "상태-글자-하나가-말해-주는-것",
  },
  {
    id: "linux-processes-signals-2",
    post: "linux-processes-signals",
    question: "STAT이 Z인 프로세스에 kill -9를 보냈는데 그대로 남아 있다. 왜 그런가?",
    choices: [
      "SIGKILL이 D 상태처럼 쌓여서 나중에 처리된다",
      "root가 아니라서 권한이 없다",
      "이미 끝난 프로세스라 죽일 것이 없고, 부모가 wait로 거둬야 표에서 사라진다",
      "좀비는 SIGTERM만 받는다",
    ],
    answer: 2,
    explanation:
      "좀비는 이미 끝나서 종료 상태만 프로세스 표에 남은 것이다. 부모가 wait를 부르거나, 부모가 끝나서 PID 1이 입양해 거둬야 사라진다.",
    anchor: "좀비와-고아",
  },
  {
    id: "linux-processes-signals-3",
    post: "linux-processes-signals",
    question: "SIGTERM 핸들러가 없는 프로그램이 kill로 끝났다. 부모 셸에서 본 종료 코드는?",
    choices: ["0", "1", "137", "143"],
    answer: 3,
    explanation:
      "시그널로 죽은 프로세스의 종료 코드는 128에 시그널 번호를 더해 보인다. SIGTERM은 15라 143이고, SIGKILL(9)이면 137이다. 핸들러가 정리하고 exit(0)을 불렀다면 0이 된다.",
    anchor: "핸들러를-등록한-프로그램과-안-한-프로그램",
  },
  {
    id: "linux-processes-signals-4",
    post: "linux-processes-signals",
    question:
      "로그 파일을 mv로 돌렸는데 nginx가 계속 이름을 바꾼 옛 파일에 쓴다. 무엇을 보내야 하나?",
    choices: [
      "마스터에 SIGUSR1. 로그 파일을 다시 연다",
      "워커에 SIGKILL. 워커가 다시 뜨면서 새 파일을 연다",
      "마스터에 SIGSTOP 후 SIGCONT",
      "아무것도 필요 없다. 다음 요청부터 자동으로 새 파일에 쓴다",
    ],
    answer: 0,
    explanation:
      "nginx는 이름이 아니라 열어 둔 파일 디스크립터로 쓰기 때문에 이름을 바꿔도 같은 파일에 쓴다. SIGUSR1을 받으면 로그 파일을 다시 열고, logrotate의 postrotate도 같은 일을 한다.",
    anchor: "nginx가-시그널로-일하는-법",
  },
  {
    id: "linux-processes-signals-5",
    post: "linux-processes-signals",
    question:
      "오래 돈 컨테이너에서 ps에 [sleep] <defunct>가 수백 개 보이고, 모두 PPID가 1이다. 가장 알맞은 해결은?",
    choices: [
      "좀비들에게 kill -9를 보낸다",
      "앱 대신 tini 같은 init을 PID 1로 두어 고아를 거두게 한다",
      "nice 값을 올려 좀비가 CPU를 덜 쓰게 한다",
      "terminationGracePeriodSeconds를 늘린다",
    ],
    answer: 1,
    explanation:
      "고아는 PID 1에게 입양되는데, 앱이 PID 1이면 자기가 만들지 않은 자식을 wait하지 않아 좀비가 쌓인다. tini는 SIGCHLD를 받아 좀비를 거두고 시그널도 앱에 전달한다.",
    anchor: "컨테이너의-pid-1은-좀비를-거둬야-한다",
  },
  {
    id: "linux-processes-signals-6",
    post: "linux-processes-signals",
    question:
      "stop_queue_worker.sh 안에 pkill -f queue_worker를 넣었더니 worker는 멈췄는데 스크립트의 다음 줄이 실행되지 않았다. 이유는?",
    choices: [
      "pkill이 SIGKILL을 기본으로 보내서",
      "스크립트의 명령줄에도 queue_worker가 들어 있어 스크립트 자신도 SIGTERM을 받아서",
      "pkill이 끝날 때까지 스크립트가 멈춰 있어서",
      "pkill -f는 프로세스 그룹 전체를 죽여서",
    ],
    answer: 1,
    explanation:
      "pkill -f는 명령줄 전체에서 패턴을 찾는다. pkill은 자기 자신은 빼지만 자기를 부른 셸은 빼지 않아서 bash stop_queue_worker.sh도 맞는다. pgrep -af로 먼저 보고 패턴을 좁힌다.",
    anchor: "kill-pkill-killall-고르기",
  },
  {
    id: "linux-processes-signals-7",
    post: "linux-processes-signals",
    question:
      "CPU 하나를 두 무한 루프가 다툴 때 한쪽만 nice 10이면 CPU는 대략 어떻게 나뉘나?",
    choices: ["50 대 50", "약 90 대 10", "100 대 0", "약 60 대 40"],
    answer: 1,
    explanation:
      "스케줄러는 nice 0에 1024, nice 10에 110의 가중치를 둬서 약 9 대 1로 나눈다. 실습에서도 88.6%와 9.5%가 나왔다. CPU가 남을 때는 nice가 아무 차이를 만들지 않는다.",
    anchor: "nice로-cpu를-양보한다",
  },
];
