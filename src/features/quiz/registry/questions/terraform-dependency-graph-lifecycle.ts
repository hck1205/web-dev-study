import type { QuizQuestion } from "../types";

export const TERRAFORM_DEPENDENCY_GRAPH_LIFECYCLE: QuizQuestion[] = [
  {
    id: "terraform-dependency-graph-lifecycle-1",
    post: "terraform-dependency-graph-lifecycle",
    question: "코드에 순서를 적지 않았는데 Terraform이 random_pet을 local_file보다 먼저 만든 이유는?",
    choices: [
      "파일에 적힌 순서대로 만들기 때문에",
      "local_file의 content가 random_pet.name.id를 참조해 그래프에 간선이 생겼기 때문에",
      "리소스 이름의 알파벳 순서로 만들기 때문에",
      "random 프로바이더가 항상 먼저 초기화되기 때문에",
    ],
    answer: 1,
    explanation:
      "Terraform은 참조를 읽어 의존 그래프를 그리고, 기다릴 것이 없는 노드부터 처리한다. 파일 안의 순서나 이름 순서는 생성 순서와 상관없다.",
    anchor: "참조가-곧-순서다",
  },
  {
    id: "terraform-dependency-graph-lifecycle-2",
    post: "terraform-dependency-graph-lifecycle",
    question:
      "data source에 depends_on으로 리소스를 걸어 두었다. 그 리소스만 바뀌는 plan에서 일어나는 일은?",
    choices: [
      "data source가 plan 때 두 번 읽힌다",
      "depends_on은 data source에 쓸 수 없어 에러가 난다",
      "data source 읽기가 apply 때로 미뤄져, 그 값을 쓰는 리소스까지 known after apply로 표시된다",
      "아무 영향 없이 data source가 plan 때 그대로 읽힌다",
    ],
    answer: 2,
    explanation:
      "걸어 둔 대상에 바뀔 것이 있으면 Terraform은 바뀐 뒤에 읽어야 맞다고 보고 읽기를 apply로 미룬다. 실제 값은 그대로여도 그 값을 쓰는 리소스가 모두 변경 후보로 plan에 나와 진짜 변경이 가려진다.",
    anchor: "depends_on은-보이지-않는-의존에만",
  },
  {
    id: "terraform-dependency-graph-lifecycle-3",
    post: "terraform-dependency-graph-lifecycle",
    question: "-parallelism=50으로 올렸는데도 apply가 빨라지지 않았다. 가장 그럴듯한 이유는?",
    choices: [
      "리소스들이 서로를 기다리며 길게 줄 서 있어 동시에 처리할 노드가 적다",
      "parallelism은 plan에만 적용된다",
      "parallelism의 최대값이 10이라 무시된다",
      "state 잠금이 parallelism을 1로 고정한다",
    ],
    answer: 0,
    explanation:
      "동시에 돌 수 있는 노드 수는 그래프 모양이 정하고 -parallelism은 상한일 뿐이다. 의존이 한 줄로 이어져 있으면 상한을 올려도 한 번에 하나씩만 처리된다.",
    anchor: "동시에-몇-개를-만드나",
  },
  {
    id: "terraform-dependency-graph-lifecycle-4",
    post: "terraform-dependency-graph-lifecycle",
    question:
      "같은 경로의 local_file에 create_before_destroy를 걸고 교체했더니 apply는 성공했는데 파일이 사라졌다. 왜일까?",
    choices: [
      "create_before_destroy는 local_file에서 지원되지 않는다",
      "새 파일이 먼저 같은 경로에 쓰였고, 헌 객체를 지우는 단계가 그 경로의 파일을 지웠다",
      "Terraform이 deposed 객체를 지우지 못해 롤백했다",
      "apply 뒤 refresh가 파일을 지웠다",
    ],
    answer: 1,
    explanation:
      "헌 객체와 새 객체가 같은 이름을 쓰면 만들고 나서 지우는 순서가 오히려 새 것을 지운다. 클라우드에서는 이름 충돌 에러로 나타나는 일이 많아 name_prefix나 버전이 든 이름과 함께 쓴다.",
    anchor: "교체-순서를-뒤집는-create_before_destroy",
  },
  {
    id: "terraform-dependency-graph-lifecycle-5",
    post: "terraform-dependency-graph-lifecycle",
    question: "prevent_destroy = true를 걸어 둔 운영 DB가 지워질 수 있는 경우는?",
    choices: [
      "terraform plan을 -out 없이 돌렸을 때",
      "다른 리소스에 create_before_destroy가 걸려 있을 때",
      "DB의 태그만 바꿨을 때",
      "리소스 블록을 코드에서 통째로 지운 PR을 apply했을 때",
    ],
    answer: 3,
    explanation:
      "설정이 리소스 블록 안에 있으니 블록이 사라지면 보호도 함께 사라지고, plan은 에러 없이 삭제를 계획한다. 그래서 클라우드 쪽 삭제 보호나 정책 검사를 함께 쓴다.",
    anchor: "지우면-안-되는-것-무시할-것-같이-바꿀-것",
  },
  {
    id: "terraform-dependency-graph-lifecycle-6",
    post: "terraform-dependency-graph-lifecycle",
    question: "terraform taint 대신 -replace를 권하는 이유는?",
    choices: [
      "-replace는 state에 표시를 남기지 않고 그 plan과 apply 안에서만 교체가 일어나 리뷰를 거칠 수 있다",
      "-replace는 리소스를 지우지 않고 고쳐 쓴다",
      "taint는 원격 백엔드에서 동작하지 않는다",
      "-replace는 의존하는 리소스까지 모두 교체한다",
    ],
    answer: 0,
    explanation:
      "taint는 치는 순간 state가 바뀌어 같은 백엔드를 쓰는 다른 사람의 plan에도 교체가 끼어든다. -replace는 계획 안에만 있어서 리뷰한 그 apply에서만 일어난다.",
    anchor: "일부러-갈아-끼우기--replace",
  },
  {
    id: "terraform-dependency-graph-lifecycle-7",
    post: "terraform-dependency-graph-lifecycle",
    question: "when = destroy provisioner로 정리 작업을 맡긴 리소스를 안전하게 없애는 방법은?",
    choices: [
      "리소스 블록을 지우고 바로 apply한다",
      "on_failure = continue를 추가하고 블록을 지운다",
      "먼저 count = 0으로 블록은 남긴 채 인스턴스를 지워 provisioner를 돌리고, 다음 변경에서 블록을 지운다",
      "terraform taint로 표시한 뒤 apply한다",
    ],
    answer: 2,
    explanation:
      "블록을 통째로 지우면 실행할 명령도 함께 사라져 정리 작업이 돌지 않는다. tainted 객체의 삭제 시점 provisioner도 건너뛰니 taint로 우회할 수도 없다.",
    anchor: "삭제-시점-provisioner가-돌지-않는-경우",
  },
];
