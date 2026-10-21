import type { QuizQuestion } from "../types";

export const K8S_SECURITY_CONTEXT: QuizQuestion[] = [
  {
    id: "k8s-security-context-1",
    post: "k8s-security-context",
    question:
      "root로 도는 컨테이너에서 ip link add가 Operation not permitted로 실패했다. 가장 그럴듯한 이유는?",
    choices: [
      "컨테이너 안의 root는 UID가 0이 아니라서",
      "런타임 기본 capability 14개에 CAP_NET_ADMIN이 없어서",
      "readOnlyRootFilesystem이 켜져 있어서",
      "ServiceAccount 토큰이 마운트되지 않아서",
    ],
    answer: 1,
    explanation:
      "커널은 UID 0인지가 아니라 해당 capability가 있는지를 본다. containerd·Docker 기본 집합 14개에는 NET_ADMIN이 없어서 root여도 인터페이스를 못 만든다. 실습에서 setpriv로 기본 집합만 남기고 같은 오류를 재현했다.",
    anchor: "root를-조각낸-것이-capability다",
  },
  {
    id: "k8s-security-context-2",
    post: "k8s-security-context",
    question:
      "runAsUser: 101인 컨테이너에 capabilities.add: [\"NET_BIND_SERVICE\"]를 줬는데 80번 포트가 열리지 않는다. 왜일까?",
    choices: [
      "NET_BIND_SERVICE는 Pod 수준에만 쓸 수 있어서",
      "seccomp가 bind 시스템 콜을 막아서",
      "non-root 프로세스는 exec 때 capability를 잃고, 런타임이 ambient 집합을 채우지 않아서",
      "capability 이름에 CAP_ 접두사를 빠뜨려서",
    ],
    answer: 2,
    explanation:
      "root가 아닌 프로세스의 capability는 ambient 집합이나 실행 파일의 file capability가 있어야 exec 뒤에 남는다. 런타임은 add를 ambient에 넣지 않아서 효과가 없다. 1024 이상 포트를 쓰거나 setcap, ip_unprivileged_port_start sysctl로 푼다.",
    anchor: "non-root에게-capability를-더해도-안-되는-경우",
  },
  {
    id: "k8s-security-context-3",
    post: "k8s-security-context",
    question: "allowPrivilegeEscalation: false가 실제로 막는 것은?",
    choices: [
      "exec하는 setuid 바이너리와 file capability가 권한을 올리는 것",
      "컨테이너가 root UID로 시작하는 것",
      "컨테이너가 새 파일을 만드는 것",
      "컨테이너가 다른 Pod와 통신하는 것",
    ],
    answer: 0,
    explanation:
      "이 설정은 no_new_privs 비트를 켠다. 실습에서 setuid root 프로그램이 비트 없이는 euid 0으로, 비트를 켜면 euid 1000으로 돌았다. root로 시작하는 것 자체를 막는 건 runAsNonRoot다.",
    anchor: "exec로-권한을-올리지-못하게-allowprivilegeescalation",
  },
  {
    id: "k8s-security-context-4",
    post: "k8s-security-context",
    question:
      "앱이 종료 코드 159로, 로그 한 줄 없이 죽는다. securityContext 중 무엇을 먼저 의심하나?",
    choices: [
      "readOnlyRootFilesystem",
      "fsGroup",
      "runAsNonRoot",
      "seccomp 프로필의 KILL 동작",
    ],
    answer: 3,
    explanation:
      "159는 128+31, 즉 SIGSYS로 죽었다는 뜻이고 seccomp가 시스템 콜을 KILL로 막을 때 나온다. 실습에서도 Bad system call과 exit=159가 찍혔다. EPERM으로 막는 프로필이면 Operation not permitted 오류로 나타난다.",
    anchor: "시스템-콜을-거르는-seccomp",
  },
  {
    id: "k8s-security-context-5",
    post: "k8s-security-context",
    question: "Pod에 seccompProfile을 아무것도 적지 않으면 쿠버네티스의 기본 동작은?",
    choices: [
      "항상 RuntimeDefault가 적용된다",
      "kubelet seccompDefault를 켜지 않았다면 Unconfined다",
      "노드의 /var/lib/kubelet/seccomp/default.json이 적용된다",
      "Pod 생성이 거절된다",
    ],
    answer: 1,
    explanation:
      "쿠버네티스 기본은 필터 없는 Unconfined라 Docker로 그냥 띄울 때보다 느슨하다. kubelet 설정의 seccompDefault: true를 켜면 노드의 모든 Pod 기본이 RuntimeDefault가 된다. 그래서 매니페스트에 명시하거나 노드 기본을 바꾼다.",
    anchor: "시스템-콜을-거르는-seccomp",
  },
  {
    id: "k8s-security-context-6",
    post: "k8s-security-context",
    question:
      "runAsNonRoot: true를 넣었더니 Pod가 CreateContainerConfigError에서 멈추고 이벤트에 non-numeric user (nginx)가 보인다. 어떻게 고치나?",
    choices: [
      "runAsNonRoot를 빼는 수밖에 없다",
      "allowPrivilegeEscalation을 true로 바꾼다",
      "runAsUser에 숫자 UID(예: 101)를 적는다",
      "이미지의 /etc/passwd에 nginx 사용자를 추가한다",
    ],
    answer: 2,
    explanation:
      "kubelet은 이미지 USER가 이름이면 그 숫자를 몰라 root가 아닌지 확인하지 못한다. 이미지 안의 /etc/passwd를 열어 보지 않으니 passwd를 고쳐도 소용없다. runAsUser에 숫자를 적으면 검사를 통과한다.",
    anchor: "누구로-돌고-어떤-그룹으로-쓰나-runasnonroot와-fsgroup",
  },
  {
    id: "k8s-security-context-7",
    post: "k8s-security-context",
    question:
      "fsGroup을 넣은 뒤 파일이 수백만 개인 PVC를 붙인 Pod의 시작이 몇 분씩 걸린다. 무엇을 바꾸나?",
    choices: [
      "fsGroupChangePolicy: OnRootMismatch로 이미 맞는 볼륨은 재귀 변경을 건너뛴다",
      "readOnlyRootFilesystem을 끈다",
      "supplementalGroups를 비운다",
      "볼륨을 hostPath로 바꿔 fsGroup이 적용되게 한다",
    ],
    answer: 0,
    explanation:
      "kubelet은 기본으로 마운트마다 볼륨 전체를 재귀로 chown·chmod해서 파일이 많으면 느리다. OnRootMismatch는 볼륨 루트의 주인과 권한이 이미 맞으면 건너뛴다. hostPath는 오히려 fsGroup이 적용되지 않는 볼륨이다.",
    anchor: "누구로-돌고-어떤-그룹으로-쓰나-runasnonroot와-fsgroup",
  },
];
