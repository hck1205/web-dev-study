import type { QuizQuestion } from "../types";

export const TERRAFORM_STATE_REFACTORING_IMPORT: QuizQuestion[] = [
  {
    id: "terraform-state-refactoring-import-1",
    post: "terraform-state-refactoring-import",
    question: "코드를 한 글자도 안 바꾸고 리소스를 modules/network로 옮겼는데 plan이 삭제와 생성을 계획한다. 이유는?",
    choices: [
      "모듈 안의 리소스는 항상 새로 만들어진다",
      "프로바이더 버전이 모듈마다 따로 고정되어서",
      "주소에 module.network가 붙어 Terraform에게는 다른 리소스가 되었기 때문에",
      "state 잠금이 모듈 단위로 걸려서",
    ],
    answer: 2,
    explanation:
      "Terraform은 리소스를 주소로 식별한다. 옛 주소는 코드에 없어 삭제, 새 주소는 state에 없어 생성이 된다. moved 블록으로 두 주소를 이어 주면 변경이 0이 된다.",
    anchor: "주소를-읽는-법",
  },
  {
    id: "terraform-state-refactoring-import-2",
    post: "terraform-state-refactoring-import",
    question: "모듈 안 리소스 이름을 바꾸면서 moved 블록을 넣었다. 이 블록을 바로 다음 버전에서 지우면 생길 수 있는 일은?",
    choices: [
      "아직 새 버전을 apply하지 않은 환경이 나중에 올라올 때 삭제 후 생성이 계획된다",
      "아무 일도 없다. moved는 한 번 apply하면 의미가 없다",
      "state의 serial이 되돌아간다",
      "모든 환경의 state가 잠긴다",
    ],
    answer: 0,
    explanation:
      "moved는 그 코드를 처음 apply하는 state마다 적용된다. 늦게 업그레이드하는 환경이나 모듈 사용자가 있으면 블록이 남아 있어야 하므로, 모두 넘어온 것을 확인한 뒤 지운다.",
    anchor: "코드로-남기는-방식-moved-블록",
  },
  {
    id: "terraform-state-refactoring-import-3",
    post: "terraform-state-refactoring-import",
    question: "import 블록이 든 plan에 'Warning: this will destroy the imported resource'가 떴다. 올바른 대응은?",
    choices: [
      "경고이니 apply한다. 다음 plan에서 다시 만들어진다",
      "terraform import 명령으로 바꿔 실행한다",
      "-parallelism=1로 apply한다",
      "apply하지 않고 forces replacement가 붙은 속성을 코드에서 실제 값과 맞춘다",
    ],
    answer: 3,
    explanation:
      "코드가 실제 리소스와 교체가 필요한 속성에서 달라 가져오자마자 교체하려는 것이다. import로 읽히지 않아 기본값이 들어가는 속성도 있으니, add·change·destroy가 0이 될 때까지 코드를 맞춘다.",
    anchor: "state-사이로-리소스-옮기기",
  },
  {
    id: "terraform-state-refactoring-import-4",
    post: "terraform-state-refactoring-import",
    question: "removed 블록에 lifecycle { destroy = false }를 적고 apply하면?",
    choices: [
      "리소스가 지워지고 state에서도 빠진다",
      "state에서만 빠지고 실제 리소스는 남는다",
      "리소스에 prevent_destroy가 자동으로 걸린다",
      "다른 state로 리소스가 자동 이동한다",
    ],
    answer: 1,
    explanation:
      "removed + destroy = false는 state rm을 코드로 적는 방법이다. plan이 더는 관리하지 않지만 지우지 않는다고 보여 주고 기록도 남는다. 다른 state로 옮기려면 받는 쪽에서 import해야 한다.",
    anchor: "removed-코드에서-빼되-지우지-않는다",
  },
  {
    id: "terraform-state-refactoring-import-5",
    post: "terraform-state-refactoring-import",
    question: "terraform state push가 'cannot import state with serial 5 over newer state with serial 6'으로 거절했다. 무엇을 뜻하나?",
    choices: [
      "올리려는 파일이 지금 백엔드의 state보다 오래된 것이다",
      "다른 프로젝트의 state 파일이다",
      "state 잠금이 걸려 있다",
      "state 형식 버전이 다르다",
    ],
    answer: 0,
    explanation:
      "serial은 state가 바뀔 때마다 오르는 번호라 낮은 serial은 옛 백업이라는 뜻이다. 다른 프로젝트의 파일은 lineage 불일치로 거절된다. 일부러 되돌릴 때만 lineage를 확인하고 -force를 쓴다.",
    anchor: "state를-통째로-다루는-pull-push-replace-provider",
  },
  {
    id: "terraform-state-refactoring-import-6",
    post: "terraform-state-refactoring-import",
    question: "앱 팀이 terraform_remote_state로 네트워크 state의 출력을 읽게 할 때 보안상 걸리는 점은?",
    choices: [
      "출력은 항상 암호화되어 읽을 수 없다",
      "remote state는 로컬 백엔드에서만 동작한다",
      "백엔드 수준에서 state 파일 전체를 읽을 권한이 필요해 출력하지 않은 비밀 값까지 읽을 수 있다",
      "네트워크 state가 잠겨 apply할 수 없게 된다",
    ],
    answer: 2,
    explanation:
      "terraform_remote_state는 출력만 쓰지만 파일 단위 권한이 필요하다. 팀이 다르거나 비밀이 섞여 있으면 SSM 파라미터나 태그로 찾는 data source로 필요한 값만 연다.",
    anchor: "쪼갠-뒤-값을-넘기는-세-가지",
  },
  {
    id: "terraform-state-refactoring-import-7",
    post: "terraform-state-refactoring-import",
    question: "state를 명령으로 고치기 전에 원격 백엔드의 잠금만 믿으면 안 되는 이유는?",
    choices: [
      "원격 백엔드는 잠금을 지원하지 않는다",
      "잠금은 명령 하나가 도는 동안만 걸려, 여러 명령을 이어 치는 사이 다른 apply가 끼어들 수 있다",
      "잠금이 걸리면 state pull이 실패한다",
      "잠금은 plan에만 걸린다",
    ],
    answer: 1,
    explanation:
      "pull, mv, plan을 차례로 치는 동안 잠금은 계속 걸려 있지 않다. 그래서 파이프라인을 멈추고 팀에 알린 뒤 백업부터 뜬다.",
    anchor: "손으로-고치기-전-백업-순서",
  },
];
