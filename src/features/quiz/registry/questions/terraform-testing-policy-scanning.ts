import type { QuizQuestion } from "../types";

export const TERRAFORM_TESTING_POLICY_SCANNING: QuizQuestion[] = [
  {
    id: "terraform-testing-policy-scanning-1",
    post: "terraform-testing-policy-scanning",
    question: "instance_type = \"t3.smal\" 오타가 있는 코드를 terraform validate는 통과시켰다. 이 오타를 plan 전에 잡을 수 있는 도구는?",
    choices: [
      "terraform fmt -check",
      "AWS 규칙 묶음을 켠 TFLint",
      "mock provider를 쓴 terraform test",
      "terraform graph",
    ],
    answer: 1,
    explanation:
      "validate는 스키마상 문자열이면 통과시켜 값이 실제로 유효한지는 모른다. TFLint의 AWS 규칙 묶음은 AWS가 받아들이는 인스턴스 타입 목록을 갖고 있어 클라우드 접속 없이 잡는다. mock은 어떤 값이든 성공을 돌려준다.",
    anchor: "tflint-문법은-맞지만-틀린-코드",
  },
  {
    id: "terraform-testing-policy-scanning-2",
    post: "terraform-testing-policy-scanning",
    question: "terraform test의 run 블록에 expect_failures = [var.ingress]를 적는 목적은?",
    choices: [
      "var.ingress 검사가 실패해도 테스트를 계속하려고",
      "var.ingress의 값을 테스트에서 무시하려고",
      "막아야 할 입력을 주었을 때 그 변수의 검증이 정말 실패하는지 확인하려고",
      "var.ingress를 mock 값으로 바꾸려고",
    ],
    answer: 2,
    explanation:
      "expect_failures는 실패해야 통과다. 누군가 검증 조건을 풀어 버리면 Missing expected failure로 테스트가 깨져 보안 규칙의 회귀를 잡는다.",
    anchor: "terraform-test로-plan-단위-테스트",
  },
  {
    id: "terraform-testing-policy-scanning-3",
    post: "terraform-testing-policy-scanning",
    question: "AWS 프로바이더를 mock한 테스트가 모두 통과했는데 실제 apply에서 CIDR 범위 에러가 났다. 왜일까?",
    choices: [
      "mock 프로바이더는 클라우드의 규칙을 모르고 성공을 돌려주기 때문에",
      "terraform test는 plan만 실행할 수 있어서",
      "mock 테스트는 변수 검증을 건너뛰어서",
      "테스트 파일의 run 순서가 섞였기 때문에",
    ],
    answer: 0,
    explanation:
      "mock은 API를 부르지 않고 계산된 속성만 채운다. 표현식이 의도한 값을 만드는지는 알 수 있지만 클라우드가 그 값을 받아 주는지는 apply 테스트로만 안다.",
    anchor: "mock-provider로-클라우드-없이",
  },
  {
    id: "terraform-testing-policy-scanning-4",
    post: "terraform-testing-policy-scanning",
    question: "Terratest가 terraform test의 apply run보다 나은 경우는?",
    choices: [
      "모듈의 출력 이름을 검사할 때",
      "변수 검증이 실패하는지 볼 때",
      "만든 로드 밸런서 주소로 요청해 200이 오는지처럼 Terraform 밖의 동작을 볼 때",
      "형식 차이를 찾을 때",
    ],
    answer: 2,
    explanation:
      "terraform test는 Terraform이 아는 값만 assert할 수 있다. 실제 HTTP 응답이나 SSH 접속 같은 종단 검사는 Go로 쓰는 Terratest 같은 도구가 맡는다. 대신 느리고 비용이 든다.",
    anchor: "apply까지-하는-통합-테스트와-terratest",
  },
  {
    id: "terraform-testing-policy-scanning-5",
    post: "terraform-testing-policy-scanning",
    question: "오설정 스캐너를 코드가 아니라 plan JSON에 돌려야 더 정확한 이유는?",
    choices: [
      "plan JSON에는 규칙이 더 많이 들어 있어서",
      "plan에는 변수와 모듈을 거쳐 계산된 값과 삭제·교체 같은 변경 자체가 들어 있어서",
      "코드 스캔은 HCL을 읽을 수 없어서",
      "plan 스캔은 자격 증명이 필요 없어서",
    ],
    answer: 1,
    explanation:
      "cidr_ipv4 = var.cidr처럼 값이 변수로 들어오면 코드만으로는 무엇이 될지 모른다. plan은 계산이 끝난 결과라 정확하지만, 만들려면 자격 증명과 시간이 든다.",
    anchor: "오설정-스캐너",
  },
  {
    id: "terraform-testing-policy-scanning-6",
    post: "terraform-testing-policy-scanning",
    question: "스캐너 예외를 남길 때 지켜야 할 것으로 가장 알맞은 것은?",
    choices: [
      "걸리는 디렉터리 전체에서 스캐너를 끈다",
      "CI 설정에 무시할 규칙 목록을 모아 둔다",
      "예외는 남기지 않고 모든 위반을 고칠 때까지 스캐너를 꺼 둔다",
      "리소스 단위로 규칙 ID를 정확히 적고 같은 줄에 이유와 승인 근거를 남긴다",
    ],
    answer: 3,
    explanation:
      "넓게 끄면 진짜 위반까지 가려진다. 리소스 단위 예외에 이유와 티켓을 남기고 보안 리뷰를 거치게 한다. 기존 위반이 많으면 기준선으로 새 위반만 실패시키며 시작한다.",
    anchor: "예외를-코드에-남기는-법",
  },
  {
    id: "terraform-testing-policy-scanning-7",
    post: "terraform-testing-policy-scanning",
    question: "Sentinel 정책의 soft-mandatory 수준은 어떻게 동작하나?",
    choices: [
      "경고만 띄우고 계속 진행한다",
      "실패하지만 권한 있는 사람이 넘길 수 있다",
      "아무도 넘길 수 없다",
      "오픈소스 CLI에서만 동작한다",
    ],
    answer: 1,
    explanation:
      "advisory는 경고만, soft-mandatory는 실패하되 권한자가 넘길 수 있고, hard-mandatory는 아무도 넘길 수 없다. Sentinel은 HCP Terraform과 Enterprise에서 돌고 오픈소스 CLI에서는 쓸 수 없다.",
    anchor: "정책을-코드로-sentinel과-opa",
  },
];
