import type { QuizQuestion } from "../types";

export const K8S_PROJECT_STRUCTURE: QuizQuestion[] = [
  {
    id: "k8s-project-structure-1",
    post: "k8s-project-structure",
    question: "처음 `kubectl apply -R -f k8s/`를 쳤더니 configmap, deployment 등이 `namespaces \"shop\" not found`로 실패했다. 이유는?",
    choices: [
      "kubectl이 리소스 종류와 상관없이 폴더·파일 이름순으로 읽어서 namespace가 늦게 만들어졌다",
      "네임스페이스는 kubectl로 만들 수 없고 Terraform으로만 만들 수 있다",
      "-R 옵션이 하위 폴더를 병렬로 적용해서 순서가 무작위가 됐다",
      "API 서버가 새 네임스페이스를 만드는 데 몇 분이 걸린다",
    ],
    answer: 0,
    explanation:
      "kubectl은 config, deployment, hpa, ingress, namespace 순으로 이름순 적용을 해서 네임스페이스가 다섯 번째에 생긴다. 다시 치면 통과하지만 운영 절차로는 쓸 수 없으니 네임스페이스를 먼저 올리거나 종류별 순서를 아는 도구를 쓴다.",
    anchor: "kubectl-apply의-순서는-파일-이름순이다",
  },
  {
    id: "k8s-project-structure-2",
    post: "k8s-project-structure",
    question: "Deployment에 `replica: 2`라고 오타를 냈다. 이 오타를 잡는 검사는?",
    choices: [
      "kubectl apply --dry-run=client",
      "terraform validate",
      "kubectl apply --dry-run=server나 kubeconform -strict",
      "hadolint",
    ],
    answer: 2,
    explanation:
      "클라이언트 dry-run은 kubectl 안에서만 확인해서 모르는 필드를 그대로 통과시킨다. 서버 dry-run은 API 서버의 strict decoding이, kubeconform -strict는 버전별 스키마가 모르는 필드를 잡는다.",
    anchor: "클라이언트-검사만-믿으면-안-된다",
  },
  {
    id: "k8s-project-structure-3",
    post: "k8s-project-structure",
    question: "운영 DB 비밀번호가 든 secret.yaml을 이미 git에 푸시했다는 걸 알았다. 가장 먼저 할 일은?",
    choices: [
      "파일을 지우는 커밋을 올린다",
      "값을 base64로 한 번 더 인코딩해서 다시 올린다",
      "git 기록을 다시 쓰고 강제로 푸시한다",
      "DB 비밀번호를 바꾼다",
    ],
    answer: 3,
    explanation:
      "base64는 암호가 아니라 표기 방식이라 저장소를 읽은 사람은 이미 값을 안다. 기록을 다시 써도 받아 간 복사본, 포크, CI 캐시에는 남으므로 값 교체가 먼저고 기록 정리는 그 다음이다.",
    anchor: "secretyaml을-git에-두면-비밀이-아니다",
  },
  {
    id: "k8s-project-structure-4",
    post: "k8s-project-structure",
    question: "Terraform 파일 중 .gitignore로 막지 말고 커밋해야 하는 것은?",
    choices: [
      "terraform.tfstate",
      ".terraform.lock.hcl",
      "저장한 plan 파일(*.tfplan)",
      ".terraform/ 폴더",
    ],
    answer: 1,
    explanation:
      "lock 파일은 프로바이더 버전과 해시를 고정해서 모두가 같은 프로바이더로 plan을 돌리게 한다. state와 plan 파일에는 비밀 값이 평문으로 들어가고, .terraform/은 다시 받으면 되는 바이너리라 막는다.",
    anchor: "gitignore가-막아야-하는-것",
  },
  {
    id: "k8s-project-structure-5",
    post: "k8s-project-structure",
    question: "cleanup.sh가 Ingress를 지우지 않고 바로 terraform destroy를 부르면 어떻게 되나?",
    choices: [
      "Terraform이 ALB도 state에 있으니 함께 지운다",
      "Ingress는 VPC와 상관없으니 문제없이 끝난다",
      "컨트롤러가 만든 ALB와 보안 그룹이 서브넷을 붙잡아 VPC 삭제가 DependencyViolation으로 실패한다",
      "EKS 클러스터만 남고 VPC는 지워진다",
    ],
    answer: 2,
    explanation:
      "ALB는 클러스터 안의 로드 밸런서 컨트롤러가 Ingress를 보고 만든 것이라 Terraform state에 없다. 클러스터가 만든 클라우드 리소스를 먼저 지워야 Terraform이 만든 VPC를 지울 수 있다.",
    anchor: "scripts-손으로-치던-명령을-모은-곳",
  },
  {
    id: "k8s-project-structure-6",
    post: "k8s-project-structure",
    question: "스테이징 환경을 추가할 때 k8s/를 통째로 복사하는 것보다 Kustomize overlay가 나은 이유는?",
    choices: [
      "공통 base 한 벌에 환경별 차이만 적어 두니 두 환경이 어디서 다른지 diff로 바로 보인다",
      "Kustomize는 Secret을 자동으로 암호화해 준다",
      "overlay를 쓰면 kubectl 없이도 배포할 수 있다",
      "Kustomize는 조건문과 반복문을 써서 템플릿을 만들 수 있다",
    ],
    answer: 0,
    explanation:
      "복사한 폴더는 시간이 지나면 어디서 달라졌는지 아무도 모르게 된다. overlay는 이미지 태그, replicas, 네임스페이스처럼 다른 점만 적는다. 조건문과 반복이 필요하면 템플릿 방식인 Helm을 고른다.",
    anchor: "환경이-늘어날-때-복사-kustomize-helm",
  },
];
