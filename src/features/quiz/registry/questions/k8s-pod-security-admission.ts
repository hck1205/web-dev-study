import type { QuizQuestion } from "../types";

export const K8S_POD_SECURITY_ADMISSION: QuizQuestion[] = [
  {
    id: "k8s-pod-security-admission-1",
    post: "k8s-pod-security-admission",
    question: "보안 설정이 하나도 없는 평범한 busybox Pod는 어느 수준까지 통과하나?",
    choices: [
      "privileged만 통과한다",
      "restricted까지 통과한다",
      "baseline은 통과하고 restricted에서 걸린다",
      "어느 수준도 통과하지 못한다",
    ],
    answer: 2,
    explanation:
      "baseline은 hostNetwork, privileged, hostPath처럼 알려진 권한 상승 경로만 막아서 보통 Pod는 통과한다. restricted는 allowPrivilegeEscalation false, drop ALL, runAsNonRoot, seccomp를 명시하라고 요구해서 설정 없는 Pod는 걸린다. 실습의 plain Pod가 baseline enforce를 통과하고 restricted 경고를 받았다.",
    anchor: "세-수준은-겹겹이-좁아진다",
  },
  {
    id: "k8s-pod-security-admission-2",
    post: "k8s-pod-security-admission",
    question:
      "enforce=baseline인 네임스페이스에 hostPath를 쓰는 Deployment를 apply했더니 created가 나왔다. 그다음 일어나는 일은?",
    choices: [
      "Pod도 정상적으로 뜬다. enforce는 Deployment에서 이미 통과했다",
      "ReplicaSet 컨트롤러가 Pod를 만들 때 거절되어 READY 0/1과 FailedCreate 이벤트가 남는다",
      "API 서버가 Deployment를 자동으로 지운다",
      "PSA가 hostPath를 emptyDir로 바꿔서 Pod를 띄운다",
    ],
    answer: 1,
    explanation:
      "enforce는 워크로드 오브젝트가 아니라 Pod 생성에만 적용된다. 그래서 apply는 성공하고 컨트롤러가 만드는 Pod가 막혀 이벤트에만 흔적이 남는다. PSA는 값을 고치지 않으니 다른 볼륨으로 바꿔 주는 일도 없다.",
    anchor: "경고는-deployment에-거절은-pod에",
  },
  {
    id: "k8s-pod-security-admission-3",
    post: "k8s-pod-security-admission",
    question: "enforce-version을 latest 대신 현재 버전(예: v1.37)으로 고정하는 이유는?",
    choices: [
      "latest는 성능이 느려서",
      "고정하지 않으면 warn 모드가 동작하지 않아서",
      "버전을 적어야 audit 로그에 기록되어서",
      "검사 규칙이 쿠버네티스 버전마다 늘어서, 업그레이드 날 갑자기 거절되는 Pod가 생길 수 있어서",
    ],
    answer: 3,
    explanation:
      "restricted의 검사 항목은 버전과 함께 바뀌어 왔다. 실습에서 runAsUser: 0 Pod가 v1.22 규칙으로는 통과하고 latest로는 거절됐다. enforce는 고정하고 warn·audit는 latest로 둬서 다음 규칙의 위반을 미리 본다.",
    anchor: "버전을-고정하는-이유",
  },
  {
    id: "k8s-pod-security-admission-4",
    post: "k8s-pod-security-admission",
    question:
      "restricted 네임스페이스에서 capabilities.drop: [\"all\"]을 적은 Pod가 거절됐다. 왜일까?",
    choices: [
      "PSA는 대문자 ALL을 정확히 찾기 때문에",
      "drop과 add를 함께 적지 않아서",
      "capability는 Pod 수준에 적어야 해서",
      "소문자 all은 API 검증에서 이미 거절되기 때문에",
    ],
    answer: 0,
    explanation:
      "API 서버의 기본 검증은 소문자 all을 받아 주지만 PSA의 restricted 검사는 정확히 ALL을 요구한다. 그래서 unrestricted capabilities로 거절된다. 추가는 NET_BIND_SERVICE 하나만 허용된다.",
    anchor: "판정은-한-번에-하나씩-쌓인다",
  },
  {
    id: "k8s-pod-security-admission-5",
    post: "k8s-pod-security-admission",
    question: "라벨이 없는 새 네임스페이스에도 baseline을 강제하고, monitoring은 검사에서 빼고 싶다. 어디서 정하나?",
    choices: [
      "kube-system 네임스페이스에 라벨을 건다",
      "API 서버의 AdmissionConfiguration에서 PodSecurity의 defaults와 exemptions를 정한다",
      "각 Pod에 pod-security.kubernetes.io/exempt 어노테이션을 단다",
      "RBAC로 monitoring에 privileged 동사를 준다",
    ],
    answer: 1,
    explanation:
      "라벨 없는 네임스페이스의 기본 수준과 예외는 API 서버 설정 파일에서만 정할 수 있다. 실습에서 defaults를 baseline으로 두자 team-a의 hostNetwork Pod가 거절되고, exemptions의 monitoring은 그대로 만들어졌다. Pod 어노테이션으로 예외를 만드는 방법은 없다.",
    anchor: "클러스터-기본값과-예외",
  },
  {
    id: "k8s-pod-security-admission-6",
    post: "k8s-pod-security-admission",
    question: "restricted로 올리기 전에 CI나 컨트롤러가 만든 Pod의 위반까지 모으려면 무엇을 쓰나?",
    choices: [
      "warn 모드. kubectl 출력에 다 나온다",
      "enforce 모드를 잠깐 켰다 끈다",
      "audit 모드. 감사 이벤트에 audit-violations 주석이 남는다",
      "kubectl describe ns",
    ],
    answer: 2,
    explanation:
      "warn은 요청한 클라이언트에게 경고를 돌려줄 뿐이라 컨트롤러가 만든 Pod의 경고는 사람이 못 본다. audit는 감사 로그에 위반을 주석으로 남겨 네임스페이스별로 셀 수 있다. pod_security_evaluations_total 메트릭으로도 판정 수를 볼 수 있다.",
    anchor: "감사-로그로-위반을-모은다",
  },
  {
    id: "k8s-pod-security-admission-7",
    post: "k8s-pod-security-admission",
    question: "PodSecurityPolicy에서 PSA로 옮길 때 가장 먼저 처리해야 하는 차이는?",
    choices: [
      "PSA는 RBAC use 동사가 필요하다는 점",
      "PSA는 Pod 값을 고치지 않으니, PSP가 채워 주던 기본값을 매니페스트로 옮겨야 한다는 점",
      "PSA는 네임스페이스마다 정책을 여러 개 둘 수 있다는 점",
      "PSA는 1.25 전에는 쓸 수 없다는 점",
    ],
    answer: 1,
    explanation:
      "PSP는 runAsUser나 seccomp 같은 값을 채워 넣는 변형을 했지만 PSA는 검사만 한다. 그 기본값에 기대던 Pod는 옮긴 뒤 거절되니 매니페스트에 명시하거나 변형 정책으로 대신한다. PSA는 RBAC가 아니라 네임스페이스 라벨로 정해지고, 1.23부터 베타로 기본 켜져 있었다.",
    anchor: "podsecuritypolicy에서-넘어오기",
  },
];
