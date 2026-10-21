import type { QuizQuestion } from "../types";

export const ARGOCD_BASICS: QuizQuestion[] = [
  {
    id: "argocd-basics-1",
    post: "argocd-basics",
    question:
      "selfHeal이 켜진 Application에서 kubectl scale로 replicas를 5로 바꿨더니 1초도 안 돼 2로 돌아왔다. git 폴링 주기(최대 3분)보다 훨씬 빠른 이유는?",
    choices: [
      "kubectl scale이 ArgoCD API를 거쳐 실행되기 때문에",
      "controller가 클러스터 리소스를 watch하고 있어서 변경을 바로 받고, 캐시된 git 쪽 매니페스트와 비교하기 때문에",
      "repo-server가 1초마다 git을 다시 읽기 때문에",
      "Deployment 컨트롤러가 ArgoCD 설정을 읽어 replicas를 고정하기 때문에",
    ],
    answer: 1,
    explanation:
      "클러스터 쪽 변화는 watch 이벤트로 controller에 바로 오고, git 쪽 매니페스트는 같은 커밋이면 캐시에 있어서 비교가 즉시 끝난다. git을 다시 읽는 주기는 git 쪽 변화에만 해당한다.",
    anchor: "손으로-고친-것을-되돌리는-selfheal",
  },
  {
    id: "argocd-basics-2",
    post: "argocd-basics",
    question: "ArgoCD 화면에 Synced, Degraded가 함께 떠 있다. 가장 알맞은 해석은?",
    choices: [
      "git과 클러스터가 다르고, 적용 중 오류가 났다",
      "동기화가 아직 진행 중이라 상태가 잠시 섞여 보인다",
      "git에 적힌 대로 객체는 들어갔지만, 그 객체가 제 역할을 못 하고 있다(예: Deployment 기한 초과)",
      "AppProject 권한이 부족해 일부 리소스만 적용됐다",
    ],
    answer: 2,
    explanation:
      "동기화 상태는 git과 클러스터가 같은지를, 건강 상태는 객체가 잘 돌고 있는지를 따로 답한다. Deployment가 ProgressDeadlineExceeded 조건을 세우면 매니페스트는 같아도 Degraded가 된다.",
    anchor: "synced와-healthy는-다른-질문이다",
  },
  {
    id: "argocd-basics-3",
    post: "argocd-basics",
    question:
      "replicas에 ignoreDifferences를 걸었더니 HPA가 늘린 값에도 Synced가 유지됐다. 그런데 다른 파일을 커밋해 동기화가 일어나자 replicas가 git 값으로 돌아갔다. 무엇이 빠졌나?",
    choices: [
      "syncOptions의 RespectIgnoreDifferences=true",
      "automated.prune: true",
      "hard refresh",
      "sync-wave 어노테이션",
    ],
    answer: 0,
    explanation:
      "ignoreDifferences는 비교에서만 필드를 빼고, 동기화할 때는 매니페스트를 통째로 적용한다. 적용할 때도 live 값을 지키려면 RespectIgnoreDifferences=true를 함께 켜야 한다. prune은 지운 리소스를 다루는 옵션이라 상관이 없다.",
    anchor: "남이-바꾸는-필드는-ignoredifferences로-비켜-준다",
  },
  {
    id: "argocd-basics-4",
    post: "argocd-basics",
    question:
      "Deployment 하나가 건강해지지 않는 상태에서 동기화가 진행됐다. PostSync에 둔 스모크 테스트 Job은 어떻게 되나?",
    choices: [
      "Sync 단계가 끝나는 즉시 실행된다",
      "SyncFail hook으로 바뀌어 실행된다",
      "본 리소스가 모두 건강해질 때까지 시작하지 않고, 동기화가 그 자리에서 기다리다 실패한다",
      "PreSync로 옮겨져 다음 동기화 때 먼저 실행된다",
    ],
    answer: 2,
    explanation:
      "ArgoCD는 wave와 단계 사이에서 리소스가 건강해지기를 기다린다. 실습에서도 'waiting for healthy state of apps/Deployment/shop-worker'에서 멈췄다가 기한 초과로 Failed가 됐고, PostSync는 시작하지 않았다.",
    anchor: "순서가-필요할-때-sync-wave와-hook",
  },
  {
    id: "argocd-basics-5",
    post: "argocd-basics",
    question:
      "실패한 동기화의 원인을 AppProject 설정에서 고쳤다(git은 그대로). 자동 동기화가 켜져 있는데 몇 분째 아무 일도 없다. 이유와 대처로 알맞은 것은?",
    choices: [
      "AppProject는 controller 재시작 뒤에만 반영되니 controller를 재시작한다",
      "자동 동기화는 한 번 실패한 커밋을 다시 시도하지 않으니, 손으로 한 번 동기화하거나 새 커밋을 올린다",
      "selfHeal이 꺼져 있어서이니 selfHeal을 켠다",
      "repo-server 캐시 때문이니 redis를 비운다",
    ],
    answer: 1,
    explanation:
      "controller 로그에 'Skipping auto-sync: failed previous sync attempt to <커밋>'이 남는다. 같은 커밋으로는 자동 재시도를 하지 않으므로 수동 동기화나 새 커밋이 필요하다.",
    anchor: "고친-커밋을-올렸는데-예전-커밋만-재시도한다",
  },
  {
    id: "argocd-basics-6",
    post: "argocd-basics",
    question:
      "ApplicationSet의 git 폴더 생성기를 쓰는 중 envs/dev 폴더 이름을 바꿨다. 무엇이 일어날 수 있고, 무엇으로 막나?",
    choices: [
      "아무 일도 없다. Application은 한 번 만들어지면 생성기와 무관하다",
      "새 이름의 Application만 하나 더 생기고 옛것은 OutOfSync로 남는다",
      "옛 Application이 지워지고 finalizer 때문에 그 리소스까지 지워진다. preserveResourcesOnDeletion이나 create-update 정책으로 막는다",
      "ApplicationSet이 오류를 내고 멈춘다. goTemplateOptions로 막는다",
    ],
    answer: 2,
    explanation:
      "ApplicationSet이 만든 Application에는 resources-finalizer가 붙어서, 생성기 결과에서 빠지면 Application과 함께 리소스도 지워진다. preserveResourcesOnDeletion: true나 컨트롤러의 --policy create-update로 지우는 동작을 막아 둔다.",
    anchor: "앱이-많아지면-app-of-apps와-applicationset",
  },
  {
    id: "argocd-basics-7",
    post: "argocd-basics",
    question:
      "git에서 ConfigMap 파일을 지웠는데 클러스터에 남아 있고 Application은 OutOfSync다. controller 로그에 무엇이 보일 가능성이 가장 높나?",
    choices: [
      "Skipping auto-sync: need to prune extra resources only but automated prune is disabled",
      "InvalidSpecError: application destination ... do not match",
      "resource :ConfigMap is not permitted in project",
      "failed to generate manifest for source 1 of 1",
    ],
    answer: 0,
    explanation:
      "자동 동기화는 git에서 사라진 리소스를 prune이 켜져 있을 때만 지운다. 지울 것만 남았는데 prune이 꺼져 있으면 그 이유를 로그에 그대로 적고 동기화를 건너뛴다.",
    anchor: "git에서-지운-것은-prune이-있어야-지워진다",
  },
];
