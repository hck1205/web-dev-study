import type { QuizQuestion } from "../types";

export const K8S_DEPLOY_PIPELINE_EKS: QuizQuestion[] = [
  {
    id: "k8s-deploy-pipeline-eks-1",
    post: "k8s-deploy-pipeline-eks",
    question: "배포 잡이 `kubectl set image`만 하고 끝나서 초록색인데 운영에는 옛 버전이 떠 있다. 왜 이런 일이 생기나?",
    choices: [
      "set image는 이미지를 ECR에서 미리 받아 두기만 하기 때문이다",
      "set image는 원하는 상태를 API 서버에 적으면 성공으로 끝나고, 새 Pod가 실제로 떴는지는 기다리지 않기 때문이다",
      "Actions 러너가 kubectl 종료 코드를 무시하기 때문이다",
      "maxUnavailable: 0이면 새 템플릿이 저장되지 않기 때문이다",
    ],
    answer: 1,
    explanation:
      "kubectl은 API 서버가 새 템플릿을 저장하면 0으로 끝난다. 새 Pod가 이미지를 못 받아도 그 뒤의 일이라 CI는 모르므로, `rollout status --timeout`으로 끝까지 기다리는 단계가 필요하다.",
    anchor: "실패는-원인보다-늦게-드러난다",
  },
  {
    id: "k8s-deploy-pipeline-eks-2",
    post: "k8s-deploy-pipeline-eks",
    question: "ECR 이미지를 받는 Pod의 이벤트 끝에 `403 Forbidden`이 찍혔다. 가장 먼저 볼 곳은?",
    choices: [
      "Pod의 imagePullSecrets에 ECR 비밀번호가 들어 있는지",
      "CI 빌드 역할에 ecr:PutImage 권한이 있는지",
      "노드 역할에 ECR 읽기 권한이 있는지, 다른 계정 저장소라면 그 저장소 정책이 노드 역할을 허락하는지",
      "NAT 게이트웨이가 살아 있는지",
    ],
    answer: 2,
    explanation:
      "403은 레지스트리까지 닿았고 자격 증명도 보냈지만 권한이 없다는 뜻이다. EKS에서 ECR 이미지는 노드 역할로 받으므로 imagePullSecrets나 빌드 역할과는 상관없다. 네트워크 문제라면 403이 아니라 i/o timeout이 찍힌다.",
    anchor: "노드가-이미지를-받지-못하는-세-가지-이유",
  },
  {
    id: "k8s-deploy-pipeline-eks-3",
    post: "k8s-deploy-pipeline-eks",
    question: "클러스터를 만든 사람의 노트북에서는 kubectl이 되는데, CI에서만 `You must be logged in to the server (Unauthorized)`가 난다. 무엇을 확인하나?",
    choices: [
      "배포 역할의 ARN이 EKS access entry에 등록돼 있는지",
      "배포 계정에 묶인 Role에 patch 권한이 있는지",
      "Deployment의 progressDeadlineSeconds 값",
      "ECR 저장소가 IMMUTABLE인지",
    ],
    answer: 0,
    explanation:
      "Unauthorized는 401로, API 서버가 신원부터 알아보지 못한 것이다. 클러스터를 만든 주체는 자동으로 관리자가 되지만 CI 역할은 따로 access entry에 등록해야 한다. Role의 권한 부족은 신원을 안 다음의 문제라 403 Forbidden으로 나온다.",
    anchor: "클러스터가-ci를-모를-때-unauthorized와-forbidden",
  },
  {
    id: "k8s-deploy-pipeline-eks-4",
    post: "k8s-deploy-pipeline-eks",
    question: "장애 중에 두 사람이 각자 `kubectl rollout undo`를 한 번씩 쳤다. 어떻게 되나?",
    choices: [
      "두 번째 명령은 이미 되돌렸으니 아무 일도 하지 않는다",
      "리비전이 두 단계 전, 즉 더 오래된 좋은 버전으로 간다",
      "Deployment가 잠겨서 두 번째 명령은 오류로 끝난다",
      "되돌린 결과도 새 리비전이 되므로, 두 번째 undo는 직전인 나쁜 버전으로 다시 간다",
    ],
    answer: 3,
    explanation:
      "undo는 직전 리비전의 템플릿을 꺼내 새 리비전으로 만든다. 두 번째 undo의 직전은 나쁜 버전이라 다시 실패한다. `rollout history`로 번호를 보고 `--to-revision`으로 짚어서 되돌린다.",
    anchor: "되돌리기는-어디를-되돌리느냐의-문제",
  },
  {
    id: "k8s-deploy-pipeline-eks-5",
    post: "k8s-deploy-pipeline-eks",
    question: "EKS API 엔드포인트를 프라이빗으로만 열었다. GitHub 호스티드 러너로 배포하려 할 때 pull 방식(ArgoCD)이 잘 맞는 이유는?",
    choices: [
      "ArgoCD는 API 서버를 거치지 않고 노드에 직접 Pod를 띄우기 때문이다",
      "ArgoCD가 클러스터 안에서 git으로 나가는 연결만 쓰므로, 러너가 API 서버에 들어올 필요가 없기 때문이다",
      "ArgoCD를 쓰면 프라이빗 엔드포인트가 자동으로 퍼블릭이 되기 때문이다",
      "pull 방식에서는 이미지를 ECR이 아니라 git에 저장하기 때문이다",
    ],
    answer: 1,
    explanation:
      "push 방식은 러너가 밖에서 API 서버에 닿아야 해서 프라이빗 엔드포인트면 막힌다. pull 방식은 CI가 배포 저장소에 태그만 커밋하고, 클러스터 안의 ArgoCD가 git을 읽어 적용하므로 클러스터 자격 증명도 CI 밖으로 나가지 않는다.",
    anchor: "밀어-넣는-배포와-끌어오는-배포",
  },
  {
    id: "k8s-deploy-pipeline-eks-6",
    post: "k8s-deploy-pipeline-eks",
    question: "`set -euo pipefail` 없이 쓴 deploy.sh에서 kubectl 명령이 모두 실패했는데 파이프라인이 성공으로 끝났다. 이유는?",
    choices: [
      "bash는 실패한 명령이 있어도 다음 줄로 넘어가고, 스크립트의 종료 코드는 마지막 echo의 0이기 때문이다",
      "kubectl은 NotFound 오류일 때 종료 코드 0을 돌려주기 때문이다",
      "GitHub Actions는 run 스텝의 종료 코드를 보지 않기 때문이다",
      "tee가 kubectl의 오류 메시지를 지웠기 때문이다",
    ],
    answer: 0,
    explanation:
      "옵션이 없는 bash는 실패를 지나쳐 끝까지 실행하고 마지막 명령의 종료 코드를 돌려준다. `-e`는 첫 실패에서 멈추고, `pipefail`은 `kubectl apply | tee`처럼 파이프 중간의 실패도 실패로 친다.",
    anchor: "배포-잡과-deploysh",
  },
  {
    id: "k8s-deploy-pipeline-eks-7",
    post: "k8s-deploy-pipeline-eks",
    question: "리뷰한 plan 파일로 `terraform apply tfplan`을 했더니 `Saved plan is stale`로 거부됐다. 무엇을 뜻하나?",
    choices: [
      "plan 파일이 24시간이 지나 만료됐다",
      "프로바이더 버전이 lock 파일과 다르다",
      "plan을 만든 뒤 다른 작업이 state를 바꿔서, 리뷰한 변경을 그대로 적용할 수 없다",
      "plan 파일에 비밀 값이 들어 있어 적용을 막았다",
    ],
    answer: 2,
    explanation:
      "저장한 plan은 리뷰한 그대로만 적용한다는 약속이라, 그 사이 state가 바뀌면 Terraform이 적용을 거부한다. 다시 plan하고 다시 리뷰하면 된다. 시간이 지났다고 만료되는 것은 아니다.",
    anchor: "terraform은-같은-파이프라인에-넣지-않는다",
  },
];
