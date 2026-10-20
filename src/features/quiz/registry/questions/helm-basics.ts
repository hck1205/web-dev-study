import type { QuizQuestion } from "../types";

export const HELM_BASICS: QuizQuestion[] = [
  {
    id: "helm-basics-1",
    post: "helm-basics",
    question: "같은 shop-api 차트를 shop-dev와 shop-prod 네임스페이스에 한 번씩 설치했다. 이때 맞는 설명은?",
    choices: [
      "차트가 하나이므로 릴리스도 하나다",
      "릴리스는 둘이고, 각 릴리스가 리비전 번호를 따로 센다",
      "두 번째 설치는 첫 번째 릴리스의 리비전 2가 된다",
      "이름이 같으므로 두 번째 설치는 실패한다",
    ],
    answer: 1,
    explanation:
      "릴리스는 차트를 특정 네임스페이스에 특정 이름으로 설치한 결과라서, 네임스페이스가 다르면 이름이 같아도 다른 릴리스다. 리비전은 릴리스마다 1부터 따로 쌓인다.",
    anchor: "차트-릴리스-리비전",
  },
  {
    id: "helm-basics-2",
    post: "helm-basics",
    question: "helm install이 STATUS: deployed로 끝났는데 Pod가 ImagePullBackOff다. 왜 이런 일이 생기나?",
    choices: [
      "Helm이 이미지 주소를 검증하지 않고 기본 이미지로 바꿨기 때문이다",
      "릴리스 Secret이 1MB를 넘었기 때문이다",
      "기본 동작에서 Helm은 API 서버가 리소스를 받아들이면 성공으로 기록하고 Pod Ready를 기다리지 않기 때문이다",
      "helm install은 항상 dry-run으로 먼저 실행되기 때문이다",
    ],
    answer: 2,
    explanation:
      "Helm은 렌더링한 매니페스트를 API 서버에 보내고, 요청이 받아들여지면 deployed로 기록한다. Pod가 Ready가 될 때까지 기다리게 하려면 --wait와 --timeout을 줘야 한다.",
    anchor: "install-한-번에-일어나는-일",
  },
  {
    id: "helm-basics-3",
    post: "helm-basics",
    question: "누군가 --set db.password=...로 비밀번호를 넣어 업그레이드했다. 이 값은 어디에 남나?",
    choices: [
      "업그레이드한 사람의 노트북 ~/.helm 디렉터리에만 남는다",
      "어디에도 남지 않는다",
      "kube-system 네임스페이스의 ConfigMap에 남는다",
      "릴리스 네임스페이스의 sh.helm.release.v1.* Secret 안에 사용자 값으로 남는다",
    ],
    answer: 3,
    explanation:
      "Helm 3는 리비전마다 차트, 사용자 값(config), 렌더링된 매니페스트를 그 네임스페이스의 Secret에 저장한다. 그래서 그 Secret을 읽을 수 있는 사람은 값을 꺼내 볼 수 있다. kube-system ConfigMap은 Helm 2의 Tiller가 쓰던 방식이다.",
    anchor: "릴리스-기록은-클러스터-안의-secret에-있다",
  },
  {
    id: "helm-basics-4",
    post: "helm-basics",
    question: "업그레이드가 실패한 뒤 helm rollback shop-api 2를 했다. history에는 어떻게 남나?",
    choices: [
      "2를 다시 적용한 새 리비전이 하나 더 생긴다",
      "실패한 리비전이 지워지고 2가 마지막 번호가 된다",
      "리비전 2의 상태만 deployed로 바뀌고 새 번호는 생기지 않는다",
      "모든 리비전이 지워지고 1부터 다시 센다",
    ],
    answer: 0,
    explanation:
      "롤백은 과거 리비전의 내용을 다시 적용하는 새 배포라서 번호가 늘어난다. 그래서 history만 봐도 언제 무엇으로 되돌렸는지 알 수 있다.",
    anchor: "설치하고-들여다보고-지우기",
  },
  {
    id: "helm-basics-5",
    post: "helm-basics",
    question: "kubectl로 만들어 둔 ServiceAccount가 있는 네임스페이스에 차트를 설치하자 invalid ownership metadata 오류가 났다. 무엇을 하면 되나?",
    choices: [
      "--force로 설치해 기존 리소스를 덮어쓴다",
      "기존 리소스에 managed-by: Helm 라벨과 release-name·release-namespace 어노테이션을 붙인 뒤 다시 설치한다",
      "릴리스 이름을 53자 이상으로 바꾼다",
      "HELM_DRIVER를 configmap으로 바꾼다",
    ],
    answer: 1,
    explanation:
      "Helm은 자기 소속 표시가 없는 같은 이름의 리소스를 덮어쓰지 않으려고 멈춘다. 오류 문구에 나온 라벨과 어노테이션을 붙이면 다음 설치가 그 리소스를 넘겨받는다.",
    anchor: "이미-있는-리소스와-이름이-겹칠-때",
  },
  {
    id: "helm-basics-6",
    post: "helm-basics",
    question: "Helm 3가 Helm 2의 Tiller를 없앤 가장 큰 이유는?",
    choices: [
      "Tiller가 템플릿 렌더링을 너무 느리게 했기 때문이다",
      "Tiller는 OCI 레지스트리를 지원하지 않았기 때문이다",
      "Tiller가 보통 cluster-admin 권한으로 돌아서 사용자별 RBAC가 사실상 무의미했기 때문이다",
      "Tiller가 리비전 기록을 남기지 않았기 때문이다",
    ],
    answer: 2,
    explanation:
      "Tiller는 어디에든 리소스를 만들어야 해서 강한 권한으로 돌았고, Tiller에 닿는 사람은 사실상 관리자가 됐다. Helm 3는 CLI가 사용자의 kubeconfig로 직접 요청해 RBAC가 그대로 적용된다.",
    anchor: "helm-2에는-서버가-있었다",
  },
];
