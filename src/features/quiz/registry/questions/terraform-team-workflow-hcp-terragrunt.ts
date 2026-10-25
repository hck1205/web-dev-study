import type { QuizQuestion } from "../types";

export const TERRAFORM_TEAM_WORKFLOW_HCP_TERRAGRUNT: QuizQuestion[] = [
  {
    id: "terraform-team-workflow-hcp-terragrunt-1",
    post: "terraform-team-workflow-hcp-terragrunt",
    question:
      "db_password 변수에 sensitive = true를 걸고 terraform plan -out=tfplan으로 만든 파일을 CI 아티팩트로 올렸다. 이 파일을 내려받은 사람이 할 수 있는 일은?",
    choices: [
      "아무것도 못 한다. plan 파일은 암호화되어 있다",
      "plan 요약만 볼 수 있고 변수 값은 남지 않는다",
      "terraform show -json으로 꺼내 db_password 값을 평문으로 읽을 수 있다",
      "같은 plan을 다른 워크스페이스에 적용할 수 있다",
    ],
    answer: 2,
    explanation:
      "sensitive는 화면 출력을 가릴 뿐 plan 파일에는 변수 값과 state 사본이 그대로 들어 있어 show -json으로 보인다. 그래서 아티팩트 보존 기간을 짧게 하고 접근을 좁힌다. plan 파일은 만든 워크스페이스에 묶여 있어 다른 워크스페이스에는 적용되지 않는다.",
    anchor: "plan-파일은-그-자체로-민감한-산출물이다",
  },
  {
    id: "terraform-team-workflow-hcp-terragrunt-2",
    post: "terraform-team-workflow-hcp-terragrunt",
    question:
      "dev에서 리뷰와 승인을 끝낸 plan 파일을 그대로 prod에 적용해 승격하려 한다. 맞는 판단은?",
    choices: [
      "plan은 만든 환경의 state와 변수로 계산돼 다른 워크스페이스에서는 적용이 막히니, 모듈 버전을 옮기고 prod에서 plan을 새로 만들어 승인한다",
      "plan 파일을 복사하면 그대로 적용된다",
      "-replace 옵션을 주면 다른 환경에도 적용된다",
      "force-unlock 뒤에 적용한다",
    ],
    answer: 0,
    explanation:
      "Terraform은 plan을 만든 워크스페이스가 아닌 곳에서 적용하려 하면 오류로 멈춘다. 환경 승격에서 옮기는 것은 plan이 아니라 코드(모듈 버전)이고, prod plan이 dev와 다르게 나오면 그 차이가 승격 PR에서 잡아야 할 것이다.",
    anchor: "plan-파일은-그-자체로-민감한-산출물이다",
  },
  {
    id: "terraform-team-workflow-hcp-terragrunt-3",
    post: "terraform-team-workflow-hcp-terragrunt",
    question:
      "GitHub Actions에서 운영 apply 잡에 environment: production(필수 리뷰어)을 걸었다. 쓰기 역할의 OIDC 신뢰 정책까지 environment 조건으로 좁히는 이유는?",
    choices: [
      "그래야 apply가 더 빨라져서",
      "environment를 쓰면 OIDC가 꺼져서",
      "state 잠금을 OIDC가 대신 해 줘서",
      "승인 문을 통과한 잡만 쓰기 권한을 얻게 해, 다른 워크플로나 브랜치가 같은 역할을 맡지 못하게 하려고",
    ],
    answer: 3,
    explanation:
      "토큰의 sub가 repo:조직/저장소:environment:production일 때만 역할을 맡게 하면, 승인을 거친 잡만 운영 쓰기 권한을 얻는다. 승인 문만 있고 신뢰 정책이 넓으면 다른 잡이 같은 역할을 맡아 문을 우회할 수 있다.",
    anchor: "ci에서-직접-돌리기-무엇을-하든-뼈대는-같다",
  },
  {
    id: "terraform-team-workflow-hcp-terragrunt-4",
    post: "terraform-team-workflow-hcp-terragrunt",
    question: "HCP Terraform의 VCS 연동 워크스페이스에서 PR이 올라왔을 때 도는 speculative plan의 성질은?",
    choices: [
      "plan 뒤 승인하면 바로 apply된다",
      "plan만 하고 apply로 이어질 수 없으며 결과는 PR 상태 체크로 붙는다",
      "state를 잠그고 머지될 때까지 놓지 않는다",
      "로컬 노트북에서 실행된다",
    ],
    answer: 1,
    explanation:
      "speculative plan은 PR 커밋으로 변경을 미리 보여 주기만 하는 실행이라 적용될 수 없다. 실제 실행은 머지 뒤 main 기준으로 큐에 들어간다. PR이 잠금을 잡고 머지 전에 apply하는 쪽은 Atlantis 방식이다.",
    anchor: "hcp-terraform-실행-장소째로-빌린다",
  },
  {
    id: "terraform-team-workflow-hcp-terragrunt-5",
    post: "terraform-team-workflow-hcp-terragrunt",
    question:
      "Atlantis로 PR에서 apply까지 마쳤는데 머지 전에 다른 PR이 main에 먼저 들어왔다. 이 방식에서 생길 수 있는 일은?",
    choices: [
      "Atlantis가 자동으로 두 PR을 합쳐 다시 apply한다",
      "apply가 취소되고 인프라가 원래대로 돌아간다",
      "잠시 main의 코드와 실제 인프라가 어긋난다",
      "아무 일도 없다. Atlantis는 머지 뒤에만 apply한다",
    ],
    answer: 2,
    explanation:
      "Atlantis는 머지 전에 apply하는 모델이라 apply가 끝난 PR이 머지되기 전까지는 main이 실제 인프라를 다 담지 못한다. 같은 디렉터리는 PR 잠금으로 막지만 다른 변경이 main에 들어오는 것까지 막지는 않는다.",
    anchor: "atlantis-pr-댓글로-plan과-apply를-시킨다",
  },
  {
    id: "terraform-team-workflow-hcp-terragrunt-6",
    post: "terraform-team-workflow-hcp-terragrunt",
    question:
      "새 prod 환경에서 terragrunt run --all plan을 돌렸더니 app unit의 plan에 db 주소로 mock.cluster.local이 들어갔다. 이 plan을 어떻게 다뤄야 하나?",
    choices: [
      "참고용일 뿐 실제 apply의 계획과 다르니, 앞 unit을 먼저 적용한 뒤 app의 plan을 다시 만들어 승인한다",
      "그대로 저장해 apply한다",
      "mock_outputs를 지우면 진짜 값이 자동으로 들어간다",
      "Terragrunt 버그이므로 Terraform만 쓴다",
    ],
    answer: 0,
    explanation:
      "mock_outputs는 앞 unit이 아직 없을 때 plan을 계산하게 해 주는 가짜 값이라 그 plan은 실제와 다르다. 그래서 validate·plan에만 허용하고, 운영에서는 unit마다 실제 output으로 plan을 만들어 차례로 적용한다.",
    anchor: "terragrunt-스택이-늘어날-때-생기는-중복과-순서",
  },
  {
    id: "terraform-team-workflow-hcp-terragrunt-7",
    post: "terraform-team-workflow-hcp-terragrunt",
    question:
      "스택 여섯 개를 운영하는 작은 팀이 이미 GitHub Actions를 쓰고 있다. 실행 플랫폼과 Terragrunt 도입에 대한 판단으로 가장 알맞은 것은?",
    choices: [
      "스택이 적어도 Terragrunt와 HCP Terraform을 함께 들여야 한다",
      "CI에서 직접 돌리는 것으로 충분하고, 환경과 스택이 곱해져 중복이 괴로워질 때 Terragrunt를 따로 판단한다",
      "Atlantis만이 OIDC를 지원하니 Atlantis로 옮긴다",
      "노트북 apply를 유지하고 잠금만 건다",
    ],
    answer: 1,
    explanation:
      "스택이 적고 CI가 이미 있으면 승인과 OIDC를 CI 기능으로 풀 수 있어 추가 비용이 없다. Terragrunt는 실행 플랫폼과 별개로 설정 중복과 순서가 문제될 때 들이는 도구라, 스택이 몇 개뿐이면 배우는 비용이 더 크다.",
    anchor: "운영-여력과-규정이-고른다",
  },
];
