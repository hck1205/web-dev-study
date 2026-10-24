import type { QuizQuestion } from "../types";

export const DOCKER_RUNTIME_SECURITY: QuizQuestion[] = [
  {
    id: "docker-runtime-security-1",
    post: "docker-runtime-security",
    question: "user namespace를 켜지 않은 기본 컨테이너 안에서 프로세스가 root(uid 0)로 돌 때, 이 root는 호스트 커널에서 어떻게 보이는가?",
    choices: [
      "호스트 root와 완전히 동일해 아무 제한 없이 호스트를 제어한다",
      "호스트의 uid 0과 같은 숫자지만, Docker가 capability 대부분을 빼 두어 특권은 제한된다",
      "항상 호스트의 비특권 사용자로 자동 매핑되어 호스트에는 영향을 줄 수 없다",
      "컨테이너 전용 가상 uid라 호스트 커널에는 존재하지 않는다"
    ],
    answer: 1,
    explanation:
      "user namespace가 없으면 컨테이너 root의 uid 0은 호스트의 0과 같은 숫자다. 다만 Docker가 기본으로 capability를 14개만 남기고 seccomp 필터를 걸어 두어 진짜 전능한 root는 아니다. 비특권으로 매핑하려면 userns-remap이나 rootless를 켜야 한다.",
    anchor: "컨테이너-root는-호스트-root와-같은-숫자다",
  },
  {
    id: "docker-runtime-security-2",
    post: "docker-runtime-security",
    question: "컨테이너를 --user 65534로 비 root로 돌렸는데도 이미지에 있던 setuid root 바이너리를 실행하자 유효 UID가 0으로 올라갔다. 이를 막는 설정은?",
    choices: [
      "--read-only로 루트 파일 시스템을 읽기 전용으로 만든다",
      "--memory로 메모리 상한을 둔다",
      "--security-opt no-new-privileges로 no_new_privs 비트를 켠다",
      "--cap-add SETUID로 capability를 더한다"
    ],
    answer: 2,
    explanation:
      "no-new-privileges는 커널의 PR_SET_NO_NEW_PRIVS 비트를 켜서 이후 exec가 setuid 비트나 file capability로 권한을 올리지 못하게 한다. 쿠버네티스의 allowPrivilegeEscalation: false가 이 비트다. capability를 더하거나 파일을 읽기 전용으로 하는 것은 승격 자체를 막지 못한다.",
    anchor: "권한을-몰래-올리는-길-setuid와-no-new-privileges",
  },
  {
    id: "docker-runtime-security-3",
    post: "docker-runtime-security",
    question: "--cap-drop ALL --cap-add NET_BIND_SERVICE를 주고 --user 65534(비 root)로 80번 포트 바인딩을 시도하면 Permission denied가 난다. 이유로 맞는 것은?",
    choices: [
      "NET_BIND_SERVICE는 존재하지 않는 capability 이름이라 무시된다",
      "--cap-drop ALL이 --cap-add보다 늦게 적용되어 다시 전부 제거된다",
      "80번 포트는 Docker가 예약해 두어 어떤 설정으로도 열 수 없다",
      "--cap-add는 bounding·permitted 집합에만 넣어 줄 뿐, 비 root가 유효 집합에서 쓰려면 ambient·file capability가 더 필요하다"
    ],
    answer: 3,
    explanation:
      "root는 permitted에 있는 capability를 유효 집합으로 올려 쓰지만, 비 root 프로세스는 ambient capability나 file capability가 있어야 실제로 쓴다. 그래서 비 root로 낮은 포트를 열어야 하면 ip_unprivileged_port_start를 낮추거나 앞단 프록시가 낮은 포트를 받게 하는 편이 단순하다.",
    anchor: "공구를-다-빼고-쓸-것만-되돌린다",
  },
  {
    id: "docker-runtime-security-4",
    post: "docker-runtime-security",
    question: "--read-only로 컨테이너 루트 파일 시스템을 읽기 전용으로 올렸더니 임시 파일을 써야 하는 앱이 깨졌다. 가장 적절한 대응은?",
    choices: [
      "앱을 root로 돌리면 읽기 전용이 무시된다",
      "쓰기가 필요한 경로만 tmpfs(또는 emptyDir)로 따로 마운트한다",
      "--read-only를 빼고 루트 전체를 다시 쓰기 가능으로 되돌린다",
      "--privileged를 추가해 모든 제한을 함께 푼다"
    ],
    answer: 1,
    explanation:
      "루트는 읽기 전용으로 두고 /tmp 같은 쓰기 경로만 tmpfs로 열면 보호를 유지하면서 앱이 돈다. noexec를 붙이면 그 자리에 내려받은 것을 실행조차 못 한다. 읽기 전용을 통째로 되돌리거나 privileged로 푸는 것은 보호를 버리는 과한 대응이다.",
    anchor: "루트-파일-시스템을-읽기만-하게",
  },
  {
    id: "docker-runtime-security-5",
    post: "docker-runtime-security",
    question: "--privileged로 컨테이너를 띄우면 벌어지는 일이 아닌 것은?",
    choices: [
      "seccomp 시스템 콜 필터가 꺼진다(Seccomp 모드가 0이 된다)",
      "호스트의 블록 장치가 /dev에 노출되어 호스트 디스크를 마운트할 수 있다",
      "user namespace가 강제로 켜져 컨테이너 root가 호스트 비특권 UID로 매핑된다",
      "capability를 40여 개 전부 부여한다"
    ],
    answer: 2,
    explanation:
      "--privileged는 오히려 격리를 푸는 플래그다. capability 전부 부여, seccomp 해제, 호스트 장치 노출이 한꺼번에 일어나 사실상 격리가 사라진다. user namespace 매핑은 userns-remap이나 rootless에서 하는 일이고 privileged와는 반대 방향이다.",
    anchor: "--privileged가-실제로-푸는-것",
  },
  {
    id: "docker-runtime-security-6",
    post: "docker-runtime-security",
    question: "CI 컨테이너에 /var/run/docker.sock을 마운트하는 것이 호스트 root를 넘겨주는 것과 같은 까닭은?",
    choices: [
      "소켓 파일 자체가 setuid root라서 열면 권한이 올라가기 때문",
      "소켓을 마운트하면 컨테이너에 자동으로 --privileged가 붙기 때문",
      "docker.sock은 호스트의 /etc/shadow를 직접 담고 있기 때문",
      "소켓 너머의 Docker 데몬이 호스트 root로 돌아, 소켓에 명령할 수 있으면 호스트 루트를 마운트한 컨테이너를 띄워 호스트 파일을 고칠 수 있기 때문"
    ],
    answer: 3,
    explanation:
      "데몬이 호스트 root로 돌기 때문에, 소켓에 쓸 수 있는 프로세스는 호스트 루트를 마운트한 privileged 컨테이너를 새로 만들 수 있고 그 안에서 호스트를 장악한다. 내 컨테이너 권한이 낮아도 권한은 데몬이 행사한다. CI 빌드는 BuildKit·Kaniko·Buildah처럼 데몬 없이 빌드하는 도구로 대신한다.",
    anchor: "dockersock을-넘겨주는-것은-호스트-root를-넘겨주는-것",
  },
  {
    id: "docker-runtime-security-7",
    post: "docker-runtime-security",
    question: "컨테이너가 호스트 커널을 공유해서 생기는 탈출 위험(예: runc CVE-2019-5736 같은 커널·런타임 취약점)을 근본적으로 줄이려면?",
    choices: [
      "호스트 방화벽에서 외부 포트를 전부 닫으면 커널 취약점이 사라진다",
      "gVisor나 Kata Containers처럼 커널을 분리하는 런타임을 쓰고, capability·seccomp로 표면을 줄이며 런타임·커널을 최신으로 유지한다",
      "컨테이너를 모두 root로 돌려 커널 접근을 단순화한다",
      "모든 컨테이너에 --privileged를 주어 권한 경쟁을 없앤다"
    ],
    answer: 1,
    explanation:
      "컨테이너는 호스트 커널을 공유하므로 커널·런타임 버그가 탈출로 이어진다. capability와 seccomp로 공격 표면을 줄이고 런타임·커널을 꾸준히 올리는 것이 기본이고, 더 강하게는 gVisor·Kata처럼 커널을 분리하는 런타임으로 공유 자체를 끊는다. 방화벽은 네트워크 노출을 줄일 뿐 커널 취약점과 무관하다.",
    anchor: "컨테이너-탈출이-실제로-일어나는-경로",
  },
];
