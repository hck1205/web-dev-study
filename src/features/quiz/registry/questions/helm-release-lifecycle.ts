import type { QuizQuestion } from "../types";

export const HELM_RELEASE_LIFECYCLE: QuizQuestion[] = [
  {
    id: "helm-release-lifecycle-1",
    post: "helm-release-lifecycle",
    question: "CI가 중간에 취소된 뒤 helm upgrade가 `another operation (install/upgrade/rollback) is in progress`로 실패하고, helm list에는 릴리스가 보이지 않는다. 먼저 무엇을 보나?",
    choices: [
      "kubectl get pods로 CrashLoopBackOff인 Pod를 찾는다",
      "helm repo update로 차트 저장소를 갱신한다",
      "helm history로 최신 리비전이 pending-upgrade로 남았는지 보고, 다른 작업이 없으면 마지막 deployed 리비전으로 rollback한다",
      "네임스페이스를 지우고 다시 설치한다",
    ],
    answer: 2,
    explanation:
      "Helm은 작업 시작 때 리비전을 pending으로 기록하고 끝날 때 바꾸는데, 프로세스가 죽으면 pending이 남아 다음 작업을 막는다. helm list는 기본으로 pending을 숨긴다. 롤백은 pending을 무시하고 새 정상 리비전을 만든다.",
    anchor: "another-operation-is-in-progress",
  },
  {
    id: "helm-release-lifecycle-2",
    post: "helm-release-lifecycle",
    question: "장애 중 kubectl scale로 레플리카를 6으로 늘렸다. 차트 값(replicaCount: 2)을 그대로 두고 업그레이드하면?",
    choices: [
      "레플리카가 2로 돌아간다. 새 매니페스트에 적힌 필드는 그 값으로 맞추기 때문이다",
      "레플리카가 6으로 유지된다. Helm은 클러스터의 현재 값을 우선하기 때문이다",
      "업그레이드가 drift 오류로 실패한다",
      "레플리카가 8이 된다",
    ],
    answer: 0,
    explanation:
      "Helm 3의 three-way merge는 지난 매니페스트, 현재 상태, 새 매니페스트를 비교해 새 매니페스트에 적힌 필드를 그 값으로 맞춘다. 차트가 모르는 필드(손으로 단 어노테이션)는 남는다. 급하게 바꾼 값은 values에도 반영해야 한다.",
    anchor: "손으로-고친-값은-다음-배포에-어떻게-되나",
  },
  {
    id: "helm-release-lifecycle-3",
    post: "helm-release-lifecycle",
    question: "셀렉터 라벨을 바꾼 업그레이드가 `field is immutable`로 실패한 직후 503이 쏟아진다. 왜인가?",
    choices: [
      "Helm이 실패하면 Deployment를 지우기 때문이다",
      "Service가 Deployment보다 먼저 적용돼 셀렉터가 새 라벨로 바뀌었고, 아직 그 라벨이 있는 Pod가 없어 엔드포인트가 비었기 때문이다",
      "immutable 오류가 나면 쿠버네티스가 Pod를 모두 재시작하기 때문이다",
      "--atomic이 Service를 지웠기 때문이다",
    ],
    answer: 1,
    explanation:
      "Helm은 리소스를 종류 순서대로 적용해서 Service가 먼저 바뀐다. Deployment 셀렉터는 바꿀 수 없어 실패하니 반쯤 적용된 상태가 남는다. 즉시 롤백하고 엔드포인트를 확인한다.",
    anchor: "바꿀-수-없는-필드를-바꾸면",
  },
  {
    id: "helm-release-lifecycle-4",
    post: "helm-release-lifecycle",
    question: "pre-upgrade 훅의 마이그레이션 Job이 실패했다. 이때 클러스터 상태는?",
    choices: [
      "새 이미지로 Deployment가 이미 바뀌었고 Job만 실패로 남는다",
      "Helm이 자동으로 이전 리비전으로 롤백하고 Job을 지운다",
      "Job은 지워지고 리비전은 deployed로 기록된다",
      "본 리소스는 적용되지 않아 옛 이미지 그대로이고, 리비전은 failed, 실패한 Job은 남아 있다",
    ],
    answer: 3,
    explanation:
      "pre 훅이 끝나야 본 리소스를 적용하므로 실패하면 Deployment는 바뀌지 않는다. hook-succeeded 정책이라 실패한 Job은 남아 로그를 볼 수 있고, 다음 업그레이드 때 before-hook-creation이 지운다.",
    anchor: "훅은-릴리스-밖에서-돈다",
  },
  {
    id: "helm-release-lifecycle-5",
    post: "helm-release-lifecycle",
    question: "새 차트 버전의 crds/ 디렉터리에 CRD 필드를 추가하고 helm upgrade를 했다. 클러스터의 CRD는?",
    choices: [
      "그대로다. Helm은 crds/의 CRD를 처음 설치할 때만 만든다",
      "새 필드가 추가된다",
      "CRD가 지워지고 다시 만들어진다",
      "업그레이드가 실패한다",
    ],
    answer: 0,
    explanation:
      "CRD는 클러스터에 하나뿐이고 지우면 모든 네임스페이스의 커스텀 리소스가 사라지므로, Helm은 crds/의 CRD를 업그레이드나 삭제 때 건드리지 않는다. 변경은 kubectl apply --server-side로 따로 올린다.",
    anchor: "crd는-처음-한-번만-설치된다",
  },
  {
    id: "helm-release-lifecycle-6",
    post: "helm-release-lifecycle",
    question: "누군가 kubectl로 레플리카를 바꿔 둔 상태에서 helm diff upgrade를 돌렸는데 레플리카 변경이 안 보인다. 왜인가?",
    choices: [
      "helm diff는 Deployment를 비교하지 않기 때문이다",
      "-C 옵션이 레플리카 줄을 숨겼기 때문이다",
      "기본 모드는 지난 리비전 매니페스트와 새 매니페스트만 비교하기 때문이다. --three-way-merge를 줘야 현재 상태까지 본다",
      "레플리카는 HPA가 관리하기 때문이다",
    ],
    answer: 2,
    explanation:
      "helm-diff의 기본 비교는 Helm 기록끼리의 비교라 클러스터에서 직접 바뀐 값을 모른다. --three-way-merge를 주면 실제 업그레이드처럼 현재 상태를 넣어 비교해서, 레플리카가 줄어드는 것까지 보인다.",
    anchor: "바꾸기-전에-diff로-보기",
  },
];
