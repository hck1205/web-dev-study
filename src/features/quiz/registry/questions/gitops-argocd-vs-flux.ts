import type { QuizQuestion } from "../types";

export const GITOPS_ARGOCD_VS_FLUX: QuizQuestion[] = [
  {
    id: "gitops-argocd-vs-flux-1",
    post: "gitops-argocd-vs-flux",
    question:
      "flux get으로 보니 GitRepository의 REVISION은 새 커밋인데 Kustomization의 REVISION은 옛 커밋이다. 어디부터 보나?",
    choices: [
      "git 서버 자격 증명과 네트워크",
      "kustomize build나 적용 단계(빌드 오류, 권한, 헬스 체크 대기)",
      "image-reflector-controller의 태그 목록",
      "notification-controller의 웹훅 설정",
    ],
    answer: 1,
    explanation:
      "소스가 이미 새 커밋을 artifact로 만들었으니 git 접근은 문제없다. 그 artifact를 받아 빌드하고 적용하는 Kustomization 쪽에서 막힌 것이다. 소스까지 옛 커밋이었다면 git 접근을 먼저 봤을 것이다.",
    anchor: "flux는-컨트롤러-여러-개가-리소스로-이어진다",
  },
  {
    id: "gitops-argocd-vs-flux-2",
    post: "gitops-argocd-vs-flux",
    question:
      "누군가 kubectl로 git에 있는 replicas를 바꿨다. Flux Kustomization(interval: 10m)과 selfHeal을 켠 ArgoCD는 각각 언제 되돌리나?",
    choices: [
      "둘 다 즉시 되돌린다",
      "둘 다 다음 git 커밋이 들어올 때 되돌린다",
      "Flux는 다음 interval 주기에 다시 적용하며 되돌리고, ArgoCD는 watch로 바로 감지해 되돌린다",
      "Flux는 즉시, ArgoCD는 3분 뒤 되돌린다",
    ],
    answer: 2,
    explanation:
      "Flux는 주기마다 다시 적용하는 방식이라 drift가 interval 동안 남을 수 있다. ArgoCD는 관리하는 리소스를 watch해서 변경을 바로 받고, selfHeal이면 곧바로 동기화한다.",
    anchor: "flux는-컨트롤러-여러-개가-리소스로-이어진다",
  },
  {
    id: "gitops-argocd-vs-flux-3",
    post: "gitops-argocd-vs-flux",
    question:
      "Flux에서 테넌트마다 serviceAccountName을 적어 권한을 나눴다. 그래도 남는 빈틈을 막는 컨트롤러 설정은?",
    choices: [
      "--default-service-account와 --no-cross-namespace-refs=true",
      "--components-extra와 --export",
      "prune: true와 wait: true",
      "driftDetection.mode: enabled",
    ],
    answer: 0,
    explanation:
      "기본 SA를 정하지 않으면 serviceAccountName을 빼먹은 Kustomization이 컨트롤러 자신의 넓은 권한으로 적용된다. 다른 네임스페이스의 소스를 참조하지 못하게 하는 설정도 함께 켜야 테넌트 경계가 지켜진다.",
    anchor: "팀을-나눌-때-appproject와-serviceaccount",
  },
  {
    id: "gitops-argocd-vs-flux-4",
    post: "gitops-argocd-vs-flux",
    question: "ArgoCD로 배포한 차트는 helm list에 없고, Flux HelmRelease로 배포한 차트는 보인다. 이유는?",
    choices: [
      "ArgoCD는 Helm 3를 지원하지 않아서",
      "ArgoCD는 helm template으로 렌더링만 하고 직접 적용하지만, helm-controller는 Helm SDK로 실제 설치해 릴리스 기록을 남겨서",
      "Flux가 릴리스 기록을 별도 DB에 저장해서",
      "ArgoCD가 릴리스 Secret을 동기화 후 prune으로 지워서",
    ],
    answer: 1,
    explanation:
      "helm-controller는 실제 install과 upgrade를 해서 storageNamespace에 릴리스 Secret을 남긴다. 그래서 helm history와 Helm 훅, 실패 시 롤백을 Helm 방식 그대로 쓴다. ArgoCD는 렌더링 결과를 자기가 적용하므로 Helm은 그 릴리스를 모른다.",
    anchor: "helm-차트를-다루는-방식",
  },
  {
    id: "gitops-argocd-vs-flux-5",
    post: "gitops-argocd-vs-flux",
    question:
      "ImagePolicy를 semver '>=1.4.0 <2.0.0'으로 두었다. 태그가 1.4.2, 1.10.0, 2.0.0, latest, 1.5.0-rc.1이면 무엇이 골라지나?",
    choices: ["1.4.2", "2.0.0", "1.5.0-rc.1", "1.10.0"],
    answer: 3,
    explanation:
      "semver는 숫자로 비교하므로 1.10.0이 1.4.2보다 크다. 2.0.0은 범위 밖이고, latest는 버전이 아니며, 프리릴리스는 범위에 프리릴리스를 적지 않으면 제외된다.",
    anchor: "새-이미지가-나오면-누가-git을-고치나",
  },
  {
    id: "gitops-argocd-vs-flux-6",
    post: "gitops-argocd-vs-flux",
    question:
      "External Secrets Operator를 쓰는 저장소에서 ExternalSecret 파일을 지우는 커밋이 prune이 켜진 GitOps 도구로 배포됐다. 무엇이 일어날 수 있나?",
    choices: [
      "아무 일도 없다. Secret은 ESO가 따로 관리한다",
      "ExternalSecret이 지워지면서 ESO가 만든 Secret도 사라져, 그 Secret을 읽는 Pod가 다음 재시작 때 뜨지 못한다",
      "AWS Secrets Manager의 원본 값이 지워진다",
      "GitOps 도구가 Secret을 평문으로 git에 다시 커밋한다",
    ],
    answer: 1,
    explanation:
      "ESO가 만든 Secret은 ExternalSecret에 딸려 있어서 원본 객체가 지워지면 같이 정리된다. 바깥 저장소의 값은 그대로지만 클러스터 안의 Secret이 없어져 다음에 뜨는 Pod가 실패한다.",
    anchor: "git에-비밀-값을-어떻게-두나",
  },
];
