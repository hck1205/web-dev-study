import type { QuizQuestion } from "../types";

export const TERRAFORM_BASICS: QuizQuestion[] = [
  {
    id: "terraform-basics-1",
    post: "terraform-basics",
    question: "terraform plan이 차이를 계산하기 전에 state에 있는 리소스마다 하는 일은?",
    choices: [
      "코드를 다시 포맷한다",
      "프로바이더를 최신 버전으로 올린다",
      "프로바이더가 API로 실제 모습을 다시 읽는다(refresh)",
      "state 파일을 git에 커밋한다",
    ],
    answer: 2,
    explanation:
      "plan은 state의 기록을 꺼낸 뒤 프로바이더가 API로 지금 모습을 다시 읽고, 그 결과를 코드와 비교한다. 그래서 콘솔에서 바꾼 것(drift)도 이 단계에서 드러난다.",
    anchor: "plan은-세-가지를-맞대-본다",
  },
  {
    id: "terraform-basics-2",
    post: "terraform-basics",
    question: "random_pet의 length만 바꿨는데 이를 참조하는 local_file까지 -/+로 나온다. 이유는?",
    choices: [
      "local_file은 항상 매번 다시 만들어진다",
      "이름이 바뀌면 파일 content가 바뀌고, content는 갈아 끼워야 하는 속성이라서",
      "state 잠금이 걸려 있어서",
      "lock 파일의 프로바이더 버전이 달라서",
    ],
    answer: 1,
    explanation:
      "참조하는 값이 바뀌면 그 값을 쓰는 리소스의 속성도 바뀐다. 바뀐 속성에 forces replacement가 붙으면 연쇄로 갈아 끼워진다. 실제 클라우드에서 이 연쇄가 다운타임을 만들기 때문에 리뷰에서 destroy 숫자를 먼저 본다.",
    anchor: "기호-하나가-다운타임을-말한다",
  },
  {
    id: "terraform-basics-3",
    post: "terraform-basics",
    question: "terraform state show에서 (sensitive value)로 가려진 비밀번호에 대한 설명으로 맞는 것은?",
    choices: [
      "state 파일에도 암호화되어 저장된다",
      "state 파일에는 저장되지 않는다",
      "화면에서만 가려지고 state 파일에는 평문으로 들어 있다",
      "plan 파일에만 들어 있다",
    ],
    answer: 2,
    explanation:
      "sensitive는 출력에서 가리는 표시일 뿐이고 state JSON에는 값이 그대로 있다. 그래서 state를 git에 넣지 않고, 암호화된 원격 저장소에 두고 읽기 권한까지 좁힌다.",
    anchor: "state를-git에-넣지-않는-이유",
  },
  {
    id: "terraform-basics-4",
    post: "terraform-basics",
    question: "코드에서 리소스 이름만 바꿨더니 지우고 새로 만드는 계획이 나온다. 가장 알맞은 대응은?",
    choices: [
      "moved 블록에 옛 주소와 새 주소를 적는다",
      "terraform apply -refresh-only를 실행한다",
      "force-unlock으로 잠금을 푼다",
      "terraform init -upgrade를 실행한다",
    ],
    answer: 0,
    explanation:
      "state는 리소스를 주소로 기억하므로 주소가 바뀌면 다른 리소스로 본다. moved 블록을 적으면 실제 리소스는 그대로 두고 state 안의 주소만 옮긴다. -refresh-only는 실제 모습을 state에 반영할 뿐 주소를 옮기지 않는다.",
    anchor: "state를-손보는-명령",
  },
  {
    id: "terraform-basics-5",
    post: "terraform-basics",
    question: "Terraform 1.11 이상에서 S3 백엔드의 잠금을 새로 설정한다면?",
    choices: [
      "dynamodb_table만 설정한다",
      "use_lockfile = true로 S3 객체 잠금을 쓴다",
      "잠금은 필요 없으니 -lock=false를 기본으로 쓴다",
      "버킷 버전 관리를 켜면 잠금이 자동으로 된다",
    ],
    answer: 1,
    explanation:
      "S3 조건부 쓰기로 .tflock 객체를 만드는 use_lockfile이 정식이 됐고 dynamodb_table은 deprecated다. 옛 파이프라인이 남아 있는 동안에는 둘을 같이 켜 두면 두 잠금을 모두 잡는다. 버전 관리는 복구용이지 잠금이 아니다.",
    anchor: "원격-백엔드로-옮기기",
  },
  {
    id: "terraform-basics-6",
    post: "terraform-basics",
    question: "Error acquiring the state lock이 났다. force-unlock보다 먼저 할 일은?",
    choices: [
      "-lock=false로 apply를 다시 돌린다",
      "state 파일을 열어 lock 항목을 지운다",
      "Lock Info의 Who와 Created를 보고 그 작업이 정말 끝났는지 확인한다",
      "버킷을 새로 만든다",
    ],
    answer: 2,
    explanation:
      "살아 있는 apply의 잠금을 풀면 두 apply가 같은 state를 덮어써 리소스를 잃는다. 주인이 죽은 것을 확인한 뒤에만 force-unlock을 하고, 푼 뒤에는 plan으로 중간에 끊긴 흔적부터 본다.",
    anchor: "force-unlock을-치기-전에",
  },
  {
    id: "terraform-basics-7",
    post: "terraform-basics",
    question: "노트북에서는 No changes인데 CI의 plan에서는 변경이 잔뜩 나온다. 먼저 의심할 것은?",
    choices: [
      "두 곳이 서로 다른 state(로컬 백엔드나 다른 key)를 보고 있다",
      "CI의 CPU가 부족하다",
      "프로바이더가 무작위로 결과를 낸다",
      "plan은 원래 실행할 때마다 결과가 다르다",
    ],
    answer: 0,
    explanation:
      "같은 코드라도 state가 다르면 plan이 다르게 나온다. terraform state pull로 양쪽의 lineage와 serial을 비교하면 같은 state인지 바로 보인다.",
    anchor: "현장에서-state-때문에-막히는-순간",
  },
];
