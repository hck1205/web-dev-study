import type { QuizQuestion } from "../types";

export const K8S_RBAC: QuizQuestion[] = [
  {
    id: "k8s-rbac-1",
    post: "k8s-rbac",
    question: "kubeconfig에 아무 자격 증명도 없이 API 서버에 Pod 목록을 요청했다. 어떤 응답이 오나?",
    choices: [
      "401 Unauthorized, 누군지 모르니 인증 단계에서 끝난다",
      "403 Forbidden, system:anonymous로 인증된 뒤 RBAC가 거절한다",
      "200 OK, 익명 요청은 읽기가 기본으로 허용된다",
      "400 Bad Request, 헤더가 빠졌다는 오류가 난다",
    ],
    answer: 1,
    explanation:
      "자격 증명을 아예 보내지 않으면 익명 인증이 켜진 API 서버는 요청자를 system:anonymous로 본다. 그 사용자에게 권한이 없으니 403이 난다. 401은 틀린 토큰처럼 인증 자체가 실패할 때 나온다.",
    anchor: "401과-403은-다른-문에서-막힌다",
  },
  {
    id: "k8s-rbac-2",
    post: "k8s-rbac",
    question:
      "Role에 deployments/scale의 get·patch·update만 줬더니 kubectl scale이 deployments get에서 403이 난다. 왜 그럴까?",
    choices: [
      "RBAC 변경이 반영되는 데 몇 분이 걸려서",
      "scale 서브리소스는 apps가 아니라 autoscaling 그룹이라서",
      "kubectl scale이 scale을 바꾸기 전에 Deployment 본체를 먼저 get하기 때문에",
      "서브리소스 권한은 ClusterRole에만 쓸 수 있어서",
    ],
    answer: 2,
    explanation:
      "RBAC는 deployments와 deployments/scale을 별개 리소스로 본다. kubectl scale은 Deployment 본체를 먼저 GET하는데 그 권한이 없어서 막혔다. -v=6으로 실제 요청을 보면 바로 보이고, patch --subresource=scale로 직접 보내면 된다.",
    anchor: "role-한-장-읽기",
  },
  {
    id: "k8s-rbac-3",
    post: "k8s-rbac",
    question: "내장 ClusterRole cluster-admin을 RoleBinding으로 shop 네임스페이스에 묶으면 어떻게 되나?",
    choices: [
      "shop 네임스페이스 안에서만 모든 권한을 갖는다",
      "클러스터 전체의 관리자가 된다",
      "RoleBinding은 ClusterRole을 가리킬 수 없어서 생성이 거절된다",
      "노드와 PV 같은 클러스터 범위 리소스만 다룰 수 있다",
    ],
    answer: 0,
    explanation:
      "효력 범위는 역할이 아니라 바인딩이 정한다. ClusterRole을 RoleBinding으로 묶으면 그 네임스페이스 안에서만 효력이 있다. 실습에서도 jane이 shop의 Secret은 봤지만 default의 Secret은 거절당했다.",
    anchor: "네-가지-오브젝트를-짝지으면",
  },
  {
    id: "k8s-rbac-4",
    post: "k8s-rbac",
    question:
      "roles와 rolebindings 생성 권한만 가진 사용자가 Secret 읽기 Role을 만들려 했더니 거절됐다. 이 검사를 건너뛰게 해 주는 동사는?",
    choices: ["impersonate", "approve", "deletecollection", "escalate"],
    answer: 3,
    explanation:
      "RBAC는 Role에 담는 권한을 요청자가 이미 다 갖고 있는지 검사한다. escalate 동사가 있으면 자기에게 없는 권한도 Role에 써넣을 수 있다. RoleBinding으로 역할을 묶을 때 같은 검사를 건너뛰는 동사는 bind다.",
    anchor: "권한을-만드는-권한이-가장-위험하다",
  },
  {
    id: "k8s-rbac-5",
    post: "k8s-rbac",
    question:
      "팀원에게 내장 edit 역할만 줬는데 그 네임스페이스에 별표 Role을 가진 CI ServiceAccount가 있다. 무엇이 문제인가?",
    choices: [
      "edit는 Pod 로그를 읽을 수 없어서 디버깅이 막힌다",
      "edit에 ServiceAccount impersonate가 있어서 팀원이 CI 계정으로 행세해 권한을 넓힐 수 있다",
      "edit와 별표 Role이 충돌해서 둘 다 무효가 된다",
      "edit는 CRD 리소스를 볼 수 없어서 CI가 실패한다",
    ],
    answer: 1,
    explanation:
      "edit에는 serviceaccounts에 대한 impersonate와 토큰 발급 권한이 들어 있다. 같은 네임스페이스의 권한 큰 ServiceAccount로 행세하면 그 권한을 그대로 쓴다. 실습에서 edit만 가진 bob이 CI 계정으로 자기를 admin에 묶었다.",
    anchor: "edit만-있어도-serviceaccount가-될-수-있다",
  },
  {
    id: "k8s-rbac-6",
    post: "k8s-rbac",
    question:
      "kubectl auth can-i get nodes -n shop은 yes인데 kubectl get nodes는 403이다. 무엇이 일어난 걸까?",
    choices: [
      "can-i 결과가 캐시돼서 오래된 답을 줬다",
      "노드 권한은 kubelet만 가질 수 있다",
      "can-i가 네임스페이스가 붙은 질문을 보내 shop의 Role이 허락했지만, 실제 노드 요청은 클러스터 범위라 RoleBinding이 효력이 없다",
      "nodes는 apps 그룹이라 그룹을 잘못 물었다",
    ],
    answer: 2,
    explanation:
      "노드는 클러스터 범위 리소스라 실제 요청에는 네임스페이스가 없고 ClusterRoleBinding만 허락할 수 있다. can-i에 -n을 붙이면 네임스페이스 질문이 되어 별표 Role이 맞아 버린다. 출력의 not namespace scoped 경고가 그 신호다.",
    anchor: "별표-하나가-여는-것들",
  },
  {
    id: "k8s-rbac-7",
    post: "k8s-rbac",
    question: "edit는 주되 Secret만 막고 싶다. RBAC만으로 어떻게 해야 하나?",
    choices: [
      "Secret을 뺀 역할을 따로 만들어 준다. RBAC에는 거부 규칙이 없다",
      "edit 바인딩 위에 secrets를 deny하는 규칙을 하나 더 묶는다",
      "edit ClusterRole의 rules에서 secrets를 직접 지운다",
      "verbs에 \"!get\"을 적은 Role을 함께 묶는다",
    ],
    answer: 0,
    explanation:
      "RBAC는 허용 규칙을 더하기만 하고 IAM의 명시적 Deny 같은 것이 없다. 그래서 빼고 싶은 권한이 없는 역할을 처음부터 따로 만든다. aggregated 역할인 edit의 rules를 직접 고치면 컨트롤러가 덮어쓴다.",
    anchor: "iam-정책과-무엇이-다른가",
  },
];
