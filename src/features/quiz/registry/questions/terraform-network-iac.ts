import type { QuizQuestion } from "../types";

export const TERRAFORM_NETWORK_IAC: QuizQuestion[] = [
  {
    id: "terraform-network-iac-1",
    post: "terraform-network-iac",
    question:
      "서브넷 대역을 cidrsubnets(\"10.20.0.0/16\", 4, 4, 8, 8)로 만들어 쓰다가 목록 셋째 자리에 4를 하나 끼웠다. plan에서 무엇을 보게 되나?",
    choices: [
      "새 /20 서브넷 하나만 추가된다",
      "뒤에 있던 /24 서브넷들의 대역이 밀려 서브넷이 교체된다",
      "Terraform이 겹침을 감지해 자동으로 빈 대역을 고른다",
      "아무 변화가 없다. cidrsubnets 결과는 state에 고정되기 때문이다",
    ],
    answer: 1,
    explanation:
      "cidrsubnets는 앞에서부터 차례로 채우므로 중간에 하나를 끼우면 뒤의 대역이 전부 밀린다. 서브넷의 cidr_block은 교체 속성이라 기존 서브넷이 갈아 끼워진다. 그래서 서브넷마다 cidrsubnet(대역, 비트, 번호)로 번호를 고정해 둔다.",
    anchor: "주소-계획을-코드에-먼저-적는다",
  },
  {
    id: "terraform-network-iac-2",
    post: "terraform-network-iac",
    question:
      "plan을 돌릴 때마다 같은 8080 규칙을 지웠다가 다음 번엔 다시 만들겠다고 나온다. 먼저 의심할 것은?",
    choices: [
      "state 잠금이 풀려 있다",
      "프로바이더 버전이 고정되지 않았다",
      "한 보안 그룹에 인라인 ingress 블록과 개별 규칙 리소스가 섞여 있다",
      "보안 그룹에 create_before_destroy가 빠졌다",
    ],
    answer: 2,
    explanation:
      "인라인 블록은 그룹의 규칙 전체를 소유한다고 선언해서 개별 리소스가 만든 규칙을 지우고, 개별 리소스는 다음 plan에서 그 규칙을 다시 만든다. 두 쪽이 번갈아 이기며 apply할 때마다 연결이 끊긴다. 한 그룹에는 한 방식만 쓴다.",
    anchor: "인라인과-개별-규칙을-섞으면-plan이-끝나지-않는다",
  },
  {
    id: "terraform-network-iac-3",
    post: "terraform-network-iac",
    question:
      "보안 그룹에만 create_before_destroy를 걸고 그룹을 교체했다. apply 로그에서 연결이 끊길 수 있는 순간은?",
    choices: [
      "새 그룹이 만들어지는 순간",
      "옛 그룹이 마지막에 지워지는 순간",
      "규칙 리소스가 먼저 지워지고 ENI가 아직 옛 그룹을 달고 있는 동안",
      "끊기는 순간이 없다. create_before_destroy가 모든 순서를 보장한다",
    ],
    answer: 2,
    explanation:
      "실습 로그에서 그룹은 먼저 만들어졌지만 규칙 리소스는 여전히 지우고 나서 만들었다. ENI가 새 그룹으로 옮겨 가기 전까지 규칙이 빈 옛 그룹을 달고 있어 새 연결이 막힌다. 옛 그룹을 지우는 시점에는 이미 ENI가 옮겨 간 뒤라 문제가 없다.",
    anchor: "설명-한-줄-고쳤는데-보안-그룹이-갈아-끼워진다",
  },
  {
    id: "terraform-network-iac-4",
    post: "terraform-network-iac",
    question:
      "운영 트래픽이 지나는 보안 그룹을 다른 그룹으로 바꿀 때 틈을 없애는 방법으로 글에서 권한 것은?",
    choices: [
      "새 그룹을 ENI에 옛 그룹과 함께 단 뒤, 다음 apply에서 옛 그룹을 뺀다",
      "옛 그룹을 먼저 지우고 바로 새 그룹을 만든다",
      "-parallelism=1로 한 번에 apply한다",
      "terraform state rm으로 옛 그룹을 state에서 뺀다",
    ],
    answer: 0,
    explanation:
      "보안 그룹은 허용 규칙의 합집합이라 둘 다 달려 있는 동안에는 어느 쪽으로든 통한다. 규칙까지 create_before_destroy를 걸어도 ENI 이동과 규칙 생성·삭제 사이에는 의존 관계가 없어 동시에 돌기 때문에 두 단계로 나눈다. state rm은 실제 그룹을 남긴 채 기록만 지울 뿐이다.",
    anchor: "설명-한-줄-고쳤는데-보안-그룹이-갈아-끼워진다",
  },
  {
    id: "terraform-network-iac-5",
    post: "terraform-network-iac",
    question:
      "plan에 교체(-/+)는 없고 aws_route_table_association의 route_table_id만 ~로 바뀐다. 왜 다시 봐야 하나?",
    choices: [
      "연결 리소스는 바뀌면 항상 서브넷이 지워지기 때문이다",
      "서브넷이 다른 라우트 테이블로 옮겨 가 인터넷이나 NAT 경로를 잃을 수 있기 때문이다",
      "route_table_id는 태그라서 비용이 바뀌기 때문이다",
      "제자리 수정은 state 잠금을 오래 잡기 때문이다",
    ],
    answer: 1,
    explanation:
      "서브넷의 성격은 어느 라우트 테이블에 연결되느냐가 정한다. tier 오타 하나로 퍼블릭 서브넷이 프라이빗 테이블로 옮겨 가는 plan도 겉보기에는 제자리 수정이다. 이런 값은 precondition으로 막고 정책 검사로 경고를 띄운다.",
    anchor: "물결표-하나가-서브넷을-인터넷에서-떼어-낸다",
  },
  {
    id: "terraform-network-iac-6",
    post: "terraform-network-iac",
    question:
      "import 블록과 -generate-config-out으로 손으로 만든 규칙을 가져왔다. 생성된 코드에서 꼭 고쳐야 할 것은?",
    choices: [
      "규칙의 from_port를 0으로 바꾼다",
      "문자열로 박힌 security_group_id를 보안 그룹 리소스 참조로 바꾼다",
      "import 블록을 영구히 남겨 둔다",
      "description을 지운다",
    ],
    answer: 1,
    explanation:
      "ID가 문자열로 박혀 있으면 Terraform 그래프에서 이 규칙과 그룹 사이에 선이 없다. 실습에서 그룹을 교체하는 plan에 SSH 규칙은 교체 목록에 오르지 않았고, 그룹이 지워질 때 함께 사라질 일을 Terraform은 모른다. 가져온 뒤 plan이 No changes가 되면 import 블록은 지운다.",
    anchor: "콘솔에서-연-규칙을-코드로-데려오기",
  },
  {
    id: "terraform-network-iac-7",
    post: "terraform-network-iac",
    question: "tfsec·checkov 같은 정적 검사기가 있어도 conftest로 plan JSON을 검사하는 이유는?",
    choices: [
      "정적 검사기는 HCL 문법 오류를 못 찾기 때문이다",
      "conftest가 더 빨라서 CI 시간이 줄기 때문이다",
      "이번 변경이 무엇을 지우거나 교체하는지는 plan을 봐야 알 수 있기 때문이다",
      "정적 검사기는 AWS 리소스를 지원하지 않기 때문이다",
    ],
    answer: 2,
    explanation:
      "정적 검사기는 코드 모양을 보고 열린 포트나 빠진 로그를 찾는다. 네트워크 리소스 교체처럼 변경 자체에 거는 규칙은 resource_changes의 actions를 봐야 한다. 실습의 tfsec 1.28.11은 새 규칙 리소스 타입으로 연 22번을 놓치기도 했다.",
    anchor: "plan을-사람-눈-대신-정책으로-한-번-더-본다",
  },
];
