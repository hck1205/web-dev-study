import type { QuizQuestion } from "../types";

export const TERRAFORM_HCL_EXPRESSIONS_DATA_SOURCES: QuizQuestion[] = [
  {
    id: "terraform-hcl-expressions-data-sources-1",
    post: "terraform-hcl-expressions-data-sources",
    question:
      "map(object({ public = optional(bool, false), ... })) 변수에 public 대신 pubic = true를 넣었다. 결과는?",
    choices: [
      "타입 에러로 plan이 멈춘다",
      "pubic은 조용히 버려지고 public에는 기본값 false가 들어간다",
      "pubic이라는 새 속성이 추가된다",
      "경고를 띄우고 public을 true로 고쳐 준다",
    ],
    answer: 1,
    explanation:
      "객체 타입으로 바꿀 때 타입에 없는 속성은 에러 없이 버려지고, 빠진 optional 속성에는 기본값이 채워진다. 그래서 기본값은 안전한 쪽으로 두고 중요한 플래그는 필수로 받는다.",
    anchor: "타입을-적어-두면-잘못된-값이-plan-전에-걸린다",
  },
  {
    id: "terraform-hcl-expressions-data-sources-2",
    post: "terraform-hcl-expressions-data-sources",
    question: "type = list(any)인 변수에 [1, \"2\"]를 넣으면 어떻게 될까?",
    choices: [
      "원소 타입이 섞여 있어 에러가 난다",
      "튜플로 그대로 저장된다",
      "공통 타입을 찾아 ['1', '2'] 같은 문자열 리스트가 된다",
      "숫자로 바꿀 수 있는 것만 남는다",
    ],
    answer: 2,
    explanation:
      "list(any)는 모든 원소가 같은 타입이어야 해서 Terraform이 공통 타입으로 맞춘다. 숫자가 문자열로 바뀌어 모듈 안의 계산이 깨질 수 있다. any 하나만 쓰면 튜플로 받는다.",
    anchor: "타입을-적어-두면-잘못된-값이-plan-전에-걸린다",
  },
  {
    id: "terraform-hcl-expressions-data-sources-3",
    post: "terraform-hcl-expressions-data-sources",
    question: "{ for s in local.subnets : s.az => s.name } 에서 같은 az가 두 번 나오면?",
    choices: [
      "키 중복 에러가 난다. 값을 모으려면 s.name 뒤에 ...을 붙인다",
      "뒤의 값이 앞의 값을 덮어쓴다",
      "앞의 값만 남고 뒤는 무시된다",
      "자동으로 리스트로 모인다",
    ],
    answer: 0,
    explanation:
      "맵을 만드는 for 표현식은 키가 겹치면 에러다. 값 뒤에 ...을 붙이면 같은 키의 값을 리스트로 모은다. 덮어쓰기는 merge 함수의 동작이다.",
    anchor: "for-표현식과-splat",
  },
  {
    id: "terraform-hcl-expressions-data-sources-4",
    post: "terraform-hcl-expressions-data-sources",
    question: "보안 그룹의 ingress 규칙을 dynamic 블록보다 규칙 리소스 + for_each로 만드는 편이 나은 이유는?",
    choices: [
      "dynamic 블록은 리스트를 받을 수 없어서",
      "dynamic 블록은 plan에 나오지 않아서",
      "규칙 리소스가 항상 더 빨리 만들어져서",
      "규칙마다 주소가 따로 생겨 하나만 바꾸거나 import·이동할 수 있고, 변경 범위가 작아서",
    ],
    answer: 3,
    explanation:
      "중첩 블록은 리소스 하나의 일부라 원소 하나만 바뀌어도 리소스 전체의 수정이고 따로 다룰 수 없다. 별도 리소스는 규칙마다 주소가 있어 plan도 읽기 쉽다.",
    anchor: "dynamic-블록은-반복이-필요한-중첩-블록에만",
  },
  {
    id: "terraform-hcl-expressions-data-sources-5",
    post: "terraform-hcl-expressions-data-sources",
    question:
      "data source의 filename에 random_pet.id.id를 넣었다. 아직 random_pet이 없을 때 plan에서 일어나는 일은?",
    choices: [
      "빈 문자열로 파일을 읽는다",
      "읽기가 apply로 미뤄지고 결과가 known after apply가 된다",
      "random_pet을 plan 중에 먼저 만든다",
      "data source는 리소스를 참조할 수 없어 에러가 난다",
    ],
    answer: 1,
    explanation:
      "인자에 아직 모르는 값이 섞이면 data source는 plan 때 읽을 수 없어 apply로 미룬다. plan에는 will be read during apply와 config refers to values not yet known이 찍힌다.",
    anchor: "data-source는-plan-때-읽힌다",
  },
  {
    id: "terraform-hcl-expressions-data-sources-6",
    post: "terraform-hcl-expressions-data-sources",
    question: "아무 코드도 안 바꿨는데 어느 날 plan에 인스턴스 교체가 떴다. data \"aws_ami\"에 most_recent = true가 있다. 가장 나은 대응은?",
    choices: [
      "plan을 여러 번 돌려 차이가 사라질 때까지 기다린다",
      "ignore_changes = all을 인스턴스에 건다",
      "이미지 ID를 변수나 SSM 파라미터로 고정해 교체 시점을 사람이 정하게 한다",
      "-parallelism을 낮춘다",
    ],
    answer: 2,
    explanation:
      "data source는 plan마다 다시 읽으니 새 이미지가 나오면 ami 값이 바뀌어 교체가 생긴다. 이미지를 고정하면 교체가 별도 PR로 분리된다. ignore_changes는 코드와 실제를 갈라놓아 마지막 수단이다.",
    anchor: "매-plan마다-diff를-만드는-data-source",
  },
  {
    id: "terraform-hcl-expressions-data-sources-7",
    post: "terraform-hcl-expressions-data-sources",
    question: "CI에 TF_CLI_ARGS_plan=\"-lock=false\"가 남아 있을 때 생기는 문제는?",
    choices: [
      "직접 친 옵션보다 앞에 붙어 잠금 없이 plan이 돌고, 사람이 알아채기 어렵다",
      "plan 명령에는 적용되지 않는다",
      "-lock=false는 환경 변수로 줄 수 없어 무시된다",
      "모든 명령이 실패한다",
    ],
    answer: 0,
    explanation:
      "TF_CLI_ARGS_명령의 옵션은 명령 이름 바로 뒤에 끼어든다. 화면에 보이지 않는 곳에서 동작을 바꾸므로 CI 설정 한곳에만 두고 내용을 리뷰한다.",
    anchor: "환경-변수로-terraform-다루기",
  },
];
