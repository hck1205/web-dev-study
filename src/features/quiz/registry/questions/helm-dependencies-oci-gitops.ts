import type { QuizQuestion } from "../types";

export const HELM_DEPENDENCIES_OCI_GITOPS: QuizQuestion[] = [
  {
    id: "helm-dependencies-oci-gitops-1",
    post: "helm-dependencies-oci-gitops",
    question: "ArgoCD로 배포한 앱에서 helm history가 `release: not found`를 낸다. 가장 그럴듯한 이유는?",
    choices: [
      "릴리스 Secret이 history-max에 걸려 모두 지워졌다",
      "ArgoCD는 helm template으로 렌더링한 결과를 직접 적용해서 Helm 릴리스 기록을 만들지 않는다",
      "ArgoCD가 Helm 기록을 argocd 네임스페이스로 옮긴다",
      "OCI 차트는 helm history를 지원하지 않는다",
    ],
    answer: 1,
    explanation:
      "ArgoCD는 helm install을 하지 않고 렌더링만 한 뒤 자기가 적용하고 추적한다. 그래서 sh.helm.release.v1 Secret이 없고 helm list도 비어 있다. 되돌리기는 git revert나 ArgoCD 롤백으로 한다.",
    anchor: "argocd는-차트를-렌더링만-한다",
  },
  {
    id: "helm-dependencies-oci-gitops-2",
    post: "helm-dependencies-oci-gitops",
    question: "CI에서 같은 커밋을 빌드했는데 날마다 다른 하위 차트 버전이 들어간다. 무엇을 바꿔야 하나?",
    choices: [
      "Chart.lock을 git에 두고 CI에서 helm dependency build로 lock에 적힌 버전 그대로 받는다",
      "CI에서 매번 helm dependency update를 돌린다",
      "dependencies의 version을 *로 바꾼다",
      "charts/ 디렉터리를 .helmignore에 넣는다",
    ],
    answer: 0,
    explanation:
      "update는 범위를 다시 풀어서 그날의 최신 버전을 고르고 lock을 새로 쓴다. build는 lock의 정확한 버전을 받으므로 같은 커밋이 늘 같은 하위 차트로 빌드된다.",
    anchor: "차트가-다른-차트를-품는-의존성",
  },
  {
    id: "helm-dependencies-oci-gitops-3",
    post: "helm-dependencies-oci-gitops",
    question: "저장소에 0.1.0, 0.1.1, 0.2.0, 0.3.0-rc.1이 있다. 의존성 버전을 `^0.1.0`으로 적으면 어느 버전을 받나?",
    choices: [
      "0.3.0-rc.1",
      "0.2.0",
      "0.1.1",
      "0.1.0",
    ],
    answer: 2,
    explanation:
      "주 버전이 0이면 ^는 부 버전까지 고정해서 0.1.0 이상 0.2.0 미만이 된다. 사전 배포 버전은 범위에 사전 배포 표시가 없으면 고려하지 않으니 후보 중 가장 높은 0.1.1을 고른다.",
    anchor: "차트-버전과-앱-버전",
  },
  {
    id: "helm-dependencies-oci-gitops-4",
    post: "helm-dependencies-oci-gitops",
    question: "부모 차트와 모든 하위 차트가 같은 이미지 레지스트리 주소를 쓰게 하려면 값을 어디에 두나?",
    choices: [
      "각 하위 차트의 values.yaml을 직접 고친다",
      "부모 values의 하위 차트 이름 키 아래에 하나씩 적는다",
      "Chart.yaml의 annotations에 적는다",
      "부모 values의 global 아래에 둔다",
    ],
    answer: 3,
    explanation:
      "하위 차트는 부모나 형제의 값을 볼 수 없지만 global 아래 값은 부모와 모든 하위 차트에서 .Values.global로 보인다. 하위 차트 이름 키로 넘기는 값은 그 차트 하나에만 간다.",
    anchor: "부모-values가-하위-차트로-흘러가는-길",
  },
  {
    id: "helm-dependencies-oci-gitops-5",
    post: "helm-dependencies-oci-gitops",
    question: "library 차트에 define한 라벨 조각을 부모 템플릿에서 include했는데, 내가 쓴 내용이 아니라 다른 라벨이 나온다. 의심할 것은?",
    choices: [
      "library 차트는 include로 부를 수 없다",
      "같은 이름의 define이 다른 파일(예: 뼈대의 _helpers.tpl)에 또 있어서 하나가 다른 하나를 덮었다",
      "library 차트는 설치해야 조각이 등록된다",
      "부모 차트의 appVersion이 다르다",
    ],
    answer: 1,
    explanation:
      "define 이름은 부모와 모든 하위 차트가 한 공간을 같이 쓰고, 같은 이름이 둘이면 오류 없이 하나만 남는다. 이름 앞에 차트 이름을 붙이고, helm create로 만든 library 차트는 뼈대 _helpers.tpl을 지우고 시작한다.",
    anchor: "템플릿만-빌려주는-library-차트",
  },
  {
    id: "helm-dependencies-oci-gitops-6",
    post: "helm-dependencies-oci-gitops",
    question: "우리 팀 앱 세 개를 환경별로 조금씩 다르게 배포하려 한다. 차트가 열어 두지 않은 필드도 자유롭게 바꾸고 싶다. 더 단순한 선택은?",
    choices: [
      "Kustomize로 base 위에 환경별 overlay 패치를 덮는다",
      "Helm 차트를 만들고 모든 필드를 values로 연다",
      "helmfile만 쓴다",
      "OCI 레지스트리에 YAML을 올린다",
    ],
    answer: 0,
    explanation:
      "Kustomize는 완성된 YAML의 어느 필드든 패치할 수 있고 템플릿 문법이 없어 단순하다. Helm은 바꿀 손잡이를 values로 정하고 버전 있는 패키지로 나눠 주는 데 강해서 남에게 배포할 소프트웨어에 더 맞다.",
    anchor: "kustomize와-무엇이-다른가",
  },
];
