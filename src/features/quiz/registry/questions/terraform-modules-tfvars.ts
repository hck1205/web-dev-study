import type { QuizQuestion } from "../types";

export const TERRAFORM_MODULES_TFVARS: QuizQuestion[] = [
  {
    id: "terraform-modules-tfvars-1",
    post: "terraform-modules-tfvars",
    question: "EKS 모듈에 VPC 모듈이 만든 서브넷 ID를 넘기려면 어떻게 하나?",
    choices: [
      "EKS 모듈 안에서 aws_subnet.private를 직접 참조한다",
      "VPC 모듈이 output으로 내보내고, 루트에서 module.vpc.private_subnet_ids를 EKS 모듈 변수로 넘긴다",
      "terraform.tfvars에 서브넷 ID를 손으로 적는다",
      "두 모듈을 같은 디렉터리에 두면 자동으로 공유된다",
    ],
    answer: 1,
    explanation:
      "자식 모듈은 받은 변수와 자기 리소스만 볼 수 있고, 밖으로는 output으로만 값을 내보낸다. 루트가 그 출력을 다른 모듈의 입력으로 이어 주고, 이 참조가 생성 순서도 정한다.",
    anchor: "모듈의-값은-outputs로만-나온다",
  },
  {
    id: "terraform-modules-tfvars-2",
    post: "terraform-modules-tfvars",
    question: "count로 만든 서브넷 목록 가운데에 AZ 하나를 끼웠더니 기존 서브넷이 갈아 끼워진다. 왜 그런가?",
    choices: [
      "AWS가 서브넷을 세 개 이상 허용하지 않아서",
      "잠금 파일의 프로바이더 버전이 바뀌어서",
      "count는 위치로 리소스를 기억해서, 뒤의 항목이 한 칸씩 밀려 다른 AZ와 CIDR를 받기 때문에",
      "for_each보다 count가 느려서",
    ],
    answer: 2,
    explanation:
      "count 주소는 [0], [1] 같은 위치라서 가운데에 끼우면 [1]이 다른 값을 받는다. AZ와 CIDR는 갈아 끼워야 하는 속성이라 교체가 일어난다. 키로 기억하는 for_each를 쓰고 속성 값도 순서에 기대지 않게 만든다.",
    anchor: "count로-만들면-순서가-주소가-된다",
  },
  {
    id: "terraform-modules-tfvars-3",
    post: "terraform-modules-tfvars",
    question: "CI에서 TF_VAR_env=prod를 넣었는데 plan에는 stg가 쓰인다. 가장 먼저 의심할 것은?",
    choices: [
      "작업 디렉터리에 env = \"stg\"가 적힌 terraform.tfvars가 있다",
      "TF_VAR_ 접두사는 대문자 변수에만 쓴다",
      "환경 변수는 plan에서 무시되고 apply에서만 쓰인다",
      "state에 예전 값이 저장되어 있다",
    ],
    answer: 0,
    explanation:
      "환경 변수 TF_VAR_는 가장 먼저, 가장 약하게 들어가고 자동으로 읽히는 terraform.tfvars가 그 위를 덮는다. 명령줄의 -var-file과 -var는 그보다 나중이라 더 세다.",
    anchor: "값은-어디서-들어오나",
  },
  {
    id: "terraform-modules-tfvars-4",
    post: "terraform-modules-tfvars",
    question: "dev와 prod를 workspace로만 나눌 때의 위험으로 가장 알맞은 것은?",
    choices: [
      "workspace마다 프로바이더를 따로 받아야 해서 느리다",
      "현재 workspace가 명령에 드러나지 않고 같은 자격 증명으로 모든 state에 닿아, 잘못 선택한 채 apply하기 쉽다",
      "workspace는 S3 backend에서 쓸 수 없다",
      "workspace를 바꾸면 잠금 파일이 지워진다",
    ],
    answer: 1,
    explanation:
      "workspace는 같은 backend 설정 안에서 state만 여러 벌 두는 기능이라 권한과 설정이 분리되지 않는다. 운영 분리는 환경마다 tfvars, backend 키, IAM 역할을 따로 두고, workspace는 잠깐 쓰는 복제본에 쓴다.",
    anchor: "workspace는-언제-쓰나",
  },
  {
    id: "terraform-modules-tfvars-5",
    post: "terraform-modules-tfvars",
    question: "version 조건을 ~> 3.6.0으로 좁혔더니 init이 locked provider ... does not match 에러로 멈춘다. 의미는?",
    choices: [
      "레지스트리가 3.6.x를 지웠다",
      "모듈 버전이 잠금 파일과 다르다",
      "state 파일의 Terraform 버전이 너무 높다",
      "잠금 파일에 적힌 버전이 새 조건 밖에 있다. 바꾸려면 init -upgrade로 다시 골라야 한다",
    ],
    answer: 3,
    explanation:
      ".terraform.lock.hcl은 조건 안에서 고른 정확한 버전을 기억하고, 다음 init은 그 버전을 그대로 쓴다. 조건을 바꿔 그 버전이 범위 밖이 되면 멈추고, init -upgrade로 새로 고른 뒤 잠금 파일을 커밋한다.",
    anchor: "버전을-묶는-세-군데",
  },
  {
    id: "terraform-modules-tfvars-6",
    post: "terraform-modules-tfvars",
    question: "모듈 안에 provider \"aws\" 블록을 넣으면 생기는 문제는?",
    choices: [
      "모듈을 count나 for_each로 부를 수 없고, 모듈을 지울 때 안의 리소스를 지우지 못한다",
      "plan 출력이 길어진다",
      "모듈의 output을 쓸 수 없다",
      "tfvars 파일을 읽지 못한다",
    ],
    answer: 0,
    explanation:
      "프로바이더 설정이 모듈과 함께 사라지면 그 모듈의 리소스를 지울 방법이 없어진다. 그래서 설정은 루트에만 두고 모듈은 required_providers만 적으며, 다른 리전은 별칭 프로바이더를 providers 인자로 넘긴다.",
    anchor: "모듈을-나누다-생기는-사고",
  },
];
