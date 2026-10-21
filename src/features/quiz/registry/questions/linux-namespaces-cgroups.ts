import type { QuizQuestion } from "../types";

export const LINUX_NAMESPACES_CGROUPS: QuizQuestion[] = [
  {
    id: "linux-namespaces-cgroups-1",
    post: "linux-namespaces-cgroups",
    question: "`unshare --pid --fork bash`로 들어간 bash는 자기 PID가 1인데 ps에는 호스트 프로세스가 다 나온다. 왜 그런가?",
    choices: [
      "--fork 때문에 bash가 호스트 PID namespace에 남았다",
      "ps는 /proc을 읽는데, 예전 PID namespace 기준으로 마운트된 /proc이 그대로 붙어 있다",
      "PID namespace는 root로 만들면 격리가 꺼진다",
      "user namespace를 함께 만들지 않아서 프로세스가 다 보인다",
    ],
    answer: 1,
    explanation:
      "ps는 시스템 콜이 아니라 /proc 디렉터리를 읽는 프로그램이고, /proc은 마운트할 때의 PID namespace를 보여 준다. 그래서 새 mount namespace에 /proc을 다시 붙이는 --mount-proc이 함께 필요하다. --fork는 오히려 bash를 새 namespace의 PID 1로 만들어 주는 옵션이다.",
    anchor: "새-pid-공간에서는-내가-1번이-된다",
  },
  {
    id: "linux-namespaces-cgroups-2",
    post: "linux-namespaces-cgroups",
    question: "일반 사용자가 `unshare --user --map-root-user`로 root가 되었다. 그런데 `hostname x`는 실패하고 `--uts`를 더하면 성공한다. 이유는?",
    choices: [
      "--map-root-user가 capability를 모두 지우기 때문이다",
      "hostname 명령은 user namespace 안에서 항상 실패하도록 막혀 있다",
      "안쪽 root의 capability는 그 user namespace가 소유한 자원에만 통하고, 호스트 UTS는 바깥 user namespace 소유다",
      "--uts를 주면 커널이 바깥 root 권한을 빌려 준다",
    ],
    answer: 2,
    explanation:
      "user namespace 안의 root는 CapEff가 전부 켜져 있지만, 그 권한은 자기 user namespace가 만든 namespace에만 쓸 수 있다. --uts로 새 UTS namespace를 함께 만들면 안쪽 소유라 hostname을 바꿀 수 있다. rootless 컨테이너가 이 원리로 돈다.",
    anchor: "안에서는-root-밖에서는-nobody",
  },
  {
    id: "linux-namespaces-cgroups-3",
    post: "linux-namespaces-cgroups",
    question: "노드에서 nsenter로 Pod의 net namespace에 들어가 무거운 tcpdump를 오래 돌렸다. 이 프로세스의 메모리는 어디에 청구되나?",
    choices: [
      "nsenter를 띄운 쪽(노드 셸)의 cgroup. nsenter는 namespace만 바꾼다",
      "Pod의 메모리 cgroup. namespace에 들어가면 cgroup도 따라간다",
      "어느 cgroup에도 속하지 않는다",
      "kubelet이 자동으로 임시 컨테이너 cgroup을 만들어 넣는다",
    ],
    answer: 0,
    explanation:
      "nsenter는 setns()로 namespace만 바꾸고 cgroup, seccomp, capability는 띄운 쪽 것을 그대로 쓴다. 그래서 Pod의 메모리 한도에 걸리지 않고 부하는 노드에 얹힌다. 임시 컨테이너는 kubectl debug를 쓸 때의 이야기다.",
    anchor: "실행-중인-칸막이-안으로-들어간다-nsenter",
  },
  {
    id: "linux-namespaces-cgroups-4",
    post: "linux-namespaces-cgroups",
    question: "cpu.max가 `50000 100000`인 cgroup에서 바쁜 스레드 2개가 돈다. 한 주기 안에서 일어나는 일은?",
    choices: [
      "스레드마다 50ms씩, 합쳐서 100ms를 쓴다",
      "50ms를 쓰고 50ms를 쉰다. 스레드 수와 상관없다",
      "약 25ms 만에 할당량 50ms를 함께 다 쓰고, 나머지 약 75ms 동안 둘 다 멈춘다",
      "할당량을 넘기면 SIGKILL로 죽는다",
    ],
    answer: 2,
    explanation:
      "할당량은 cgroup 안 모든 스레드가 함께 쓰는 시간이다. 두 스레드가 코어 두 개에서 동시에 달리면 25ms 만에 50ms를 소진하고 다음 주기까지 멈춘다. CPU는 넘겨도 죽이지 않고 기다리게 하는 것이 메모리와 다른 점이다.",
    anchor: "cpumax는-주기마다-쓸-시간을-나눠-준다",
  },
  {
    id: "linux-namespaces-cgroups-5",
    post: "linux-namespaces-cgroups",
    question: "컨테이너가 종료 코드 137로 재시작되는데 앱 로그는 깨끗하다. 커널 로그에 'Out of memory: Killed process'가 있다. 무엇을 의심하나?",
    choices: [
      "컨테이너 memory.max에 걸렸다. limits를 올린다",
      "pids.max에 걸렸다",
      "SIGTERM 핸들러가 없어서 137이 났다",
      "노드 전체 메모리가 바닥났다. cgroup 한도가 아니라 노드에 올린 양을 본다",
    ],
    answer: 3,
    explanation:
      "cgroup 한도에 걸린 OOM은 'Memory cgroup out of memory'로 시작하고, 'Out of memory:'는 노드 전체가 모자란 경우다. 둘은 고칠 곳이 다르다. SIGTERM으로 끝나면 137이 아니라 143이다.",
    anchor: "memorymax를-넘으면-그-cgroup-안에서-죽인다",
  },
  {
    id: "linux-namespaces-cgroups-6",
    post: "linux-namespaces-cgroups",
    question: "메모리 limits 512Mi인 컨테이너 안에서 free -m을 치면 노드의 16GB가 나온다. 실제 한도는 어디서 읽나?",
    choices: [
      "/proc/meminfo의 MemTotal",
      "ulimit -v",
      "/sys/fs/cgroup/memory.max (v2, 컨테이너 안에서는 cgroup namespace 덕에 자기 cgroup이 루트다)",
      "hostname에 붙은 Pod 이름으로 API 서버에 물어야만 알 수 있다",
    ],
    answer: 2,
    explanation:
      "/proc/meminfo는 namespace로도 cgroup으로도 가려지지 않아서 free는 호스트 값을 보여 준다. 진짜 한도는 cgroup 파일 memory.max에, 사용량은 memory.current에 있다. 이 값을 보지 않고 힙 크기를 정하는 런타임은 한도를 넘겨 OOM kill을 당한다.",
    anchor: "컨테이너-안에서-본-숫자가-이상할-때",
  },
];
