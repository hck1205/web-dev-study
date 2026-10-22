import type { QuizQuestion } from "../types";

export const SECCOMP_APPARMOR: QuizQuestion[] = [
  {
    id: "seccomp-apparmor-1",
    post: "seccomp-apparmor",
    question: "\"/etc 아래에는 쓰지 못하게\"를 걸고 싶다. seccomp가 아니라 AppArmor가 맞는 이유는?",
    choices: [
      "seccomp는 root 프로세스에는 적용되지 않아서",
      "seccomp는 시스템 콜 번호와 숫자 인자만 보고, 포인터가 가리키는 경로 문자열은 읽지 못해서",
      "AppArmor가 seccomp보다 먼저 검사해서",
      "seccomp는 쓰기 시스템 콜을 다룰 수 없어서",
    ],
    answer: 1,
    explanation:
      "seccomp BPF 필터는 시스템 콜 번호와 인자 값을 숫자로만 비교한다. 경로처럼 포인터 뒤에 있는 내용은 볼 수 없어서 경로 단위 규칙은 LSM인 AppArmor가 맡는다.",
    anchor: "시스템-콜-하나가-지나는-관문",
  },
  {
    id: "seccomp-apparmor-2",
    post: "seccomp-apparmor",
    question:
      "--security-opt seccomp=unconfined로 띄운 alpine 컨테이너에서 unshare -U -r id가 성공했다. 기본 프로필에서는 왜 실패하나?",
    choices: [
      "기본 프로필이 id 명령을 막아서",
      "기본 프로필이 root 사용자를 막아서",
      "unshare는 CAP_SYS_ADMIN이 있을 때만 허용되는데 기본 컨테이너에는 그 capability가 없어서",
      "기본 프로필이 user namespace를 만들면 프로세스를 죽여서",
    ],
    answer: 2,
    explanation:
      "Docker 기본 프로필은 unshare, mount, bpf 같은 시스템 콜을 CAP_SYS_ADMIN이 있는 컨테이너에서만 연다. 그래서 EPERM을 받고 종료 코드 1로 끝난다. 프로세스를 죽이는 것이 아니라 오류를 돌려준다.",
    anchor: "기본-프로필이-막는-것",
  },
  {
    id: "seccomp-apparmor-3",
    post: "seccomp-apparmor",
    question:
      "strace로 앱이 부른 시스템 콜만 모아 ERRNO 허용 목록을 걸었더니 앱이 아니라 runc가 fstatfs ... operation not permitted로 실패했다. 이유는?",
    choices: [
      "runc는 필터를 건 뒤 앱을 exec하기 전까지 몇몇 시스템 콜을 더 부르는데, 그것도 같은 필터를 지나야 해서",
      "runc는 seccomp 프로필을 지원하지 않아서",
      "strace가 결과를 잘못 기록해서",
      "프로필의 architectures가 비어 있어서",
    ],
    answer: 0,
    explanation:
      "runc는 필터를 적용한 다음 열린 파일 정리(close_range), capability 설정(capget, capset), 실행 파일 확인 같은 일을 하고 나서 execve한다. 앱만 추적해서는 이 호출이 빠지므로 LOG 모드로 돌려 찾아 채운다.",
    anchor: "허용-목록을-직접-만든다",
  },
  {
    id: "seccomp-apparmor-4",
    post: "seccomp-apparmor",
    question:
      "auditd가 없는 노드에서 기본 동작이 SCMP_ACT_LOG인 프로필로 돌렸는데 커널 로그에 기록이 10줄뿐이다. 무엇을 의심해야 하나?",
    choices: [
      "앱이 시스템 콜을 10개만 썼다",
      "LOG 동작은 처음 10개 시스템 콜만 기록한다",
      "seccomp 필터가 적용되지 않았다",
      "커널 로그의 속도 제한(5초에 10줄)에 걸려 나머지 기록이 버려졌다",
    ],
    answer: 3,
    explanation:
      "auditd가 없으면 seccomp 기록은 printk로 나가고, printk 속도 제한 때문에 짧은 시간에 몰린 기록은 버려진다. 그래서 찾은 것을 목록에 더하며 여러 번 돌리거나 auditd를 켜서 빠짐없이 모은다.",
    anchor: "허용-목록을-직접-만든다",
  },
  {
    id: "seccomp-apparmor-5",
    post: "seccomp-apparmor",
    question:
      "직접 만든 nginx 프로필로 잘 돌던 컨테이너에서 nginx -s reload가 kill(1, 1) failed (1: Operation not permitted)를 낸다. 가장 그럴듯한 원인은?",
    choices: [
      "nginx 마스터가 root가 아니라서",
      "프로필을 수집할 때 리로드를 하지 않아 kill 시스템 콜이 목록에 없다",
      "AppArmor가 신호를 막았다",
      "PID 1에는 신호를 보낼 수 없다",
    ],
    answer: 1,
    explanation:
      "허용 목록은 수집할 때 실행한 동작만 담는다. 시작과 요청 처리에서는 kill을 부르지 않으니 목록에서 빠졌고, 리로드 때 처음 부르면서 EPERM을 받았다. 운영 동작을 수집 단계에 일부러 넣어야 하는 이유다.",
    anchor: "허용-목록을-직접-만든다",
  },
  {
    id: "seccomp-apparmor-6",
    post: "seccomp-apparmor",
    question:
      "Localhost seccomp 프로필을 쓰는 Deployment에서 일부 Pod만 CreateContainerError로 멈췄고, 모두 최근에 추가된 노드에 있다. 맞는 해결은?",
    choices: [
      "프로필 파일을 모든 노드에 깔리도록 DaemonSet이나 SPO, 노드 이미지로 배포한다",
      "Pod를 지웠다가 다시 만든다",
      "kube-scheduler에 프로필 위치를 등록한다",
      "seccompProfile.type을 RuntimeDefault로 바꾸면 새 노드에도 같은 프로필이 생긴다",
    ],
    answer: 0,
    explanation:
      "Localhost 프로필은 노드의 파일이고 쿠버네티스는 그 파일을 배포하지 않으며 스케줄러도 위치를 모른다. 새 노드에 파일이 없으면 그 노드에 간 Pod만 실패한다. 모든 노드에 깔거나 라벨과 nodeSelector로 프로필이 있는 노드만 고르게 한다.",
    anchor: "프로필을-노드에-나눠-주는-일",
  },
  {
    id: "seccomp-apparmor-7",
    post: "seccomp-apparmor",
    question: "AppArmor에서 seccomp의 SCMP_ACT_LOG와 같은 역할, 즉 막지 않고 기록만 하게 하는 방법은?",
    choices: [
      "프로필에 deny /** w,를 넣는다",
      "appArmorProfile.type을 RuntimeDefault로 둔다",
      "aa-complain으로 프로필을 complain 모드로 바꾼다",
      "apparmor_parser -r로 프로필을 다시 올린다",
    ],
    answer: 2,
    explanation:
      "complain 모드에서는 위반을 막지 않고 커널 로그에 기록만 남긴다. 기록을 보고 규칙을 채운 뒤 aa-enforce로 다시 막는 모드로 돌린다. apparmor_parser -r은 프로필을 교체할 뿐 모드를 바꾸지 않는다.",
    anchor: "apparmor는-경로로-막는다",
  },
];
