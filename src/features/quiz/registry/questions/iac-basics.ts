import type { QuizQuestion } from "../types";

export const IAC_BASICS: QuizQuestion[] = [
  {
    id: "iac-basics-1",
    post: "iac-basics",
    question:
      "네임스페이스를 만드는 셸 스크립트를 두 번째 실행하자 첫 줄에서 File exists로 멈췄다. db만 사라진 상태에서도 같은 곳에서 멈춘다. 이 스크립트의 근본 문제는?",
    choices: [
      "set -e를 써서",
      "명령을 순서대로 적은 명령형이라 지금 모습을 확인하지 않고 이미 된 일을 다시 시켜서",
      "root 권한이 없어서",
      "네임스페이스 이름이 겹쳐서",
    ],
    answer: 1,
    explanation:
      "명령형 스크립트는 무엇을 하라는 목록이라 이미 있는 것을 다시 만들려다 실패하고, 중간에 깨진 상태에서 필요한 부분까지 가지 못한다. set -e를 빼면 멈추지는 않지만 에러를 무시하고 지나갈 뿐 문제는 그대로다.",
    anchor: "스크립트도-코드인데-무엇이-다른가",
  },
  {
    id: "iac-basics-2",
    post: "iac-basics",
    question: "IaC 도구에서 멱등성이 지켜진다는 것을 가장 잘 확인하는 방법은?",
    choices: [
      "적용 직후 같은 코드로 한 번 더 적용해 변경이 0인지 본다",
      "적용 시간이 짧은지 본다",
      "에러 없이 끝났는지만 본다",
      "state 파일 크기가 그대로인지 본다",
    ],
    answer: 0,
    explanation:
      "멱등이면 두 번째 실행은 아무것도 바꾸지 않아야 한다. Terraform은 No changes, 수렴 스크립트는 changed=0이 나와야 한다. 두 번째 실행에서도 변경이 나오면 어딘가 명령형으로 동작하는 부분이 있다는 신호다.",
    anchor: "원하는-모습을-적고-차이만-메운다",
  },
  {
    id: "iac-basics-3",
    post: "iac-basics",
    question: "Terraform이 state 파일로 리소스를 기억해야 하는 가장 큰 이유는?",
    choices: [
      "plan을 빠르게 만들려고",
      "프로바이더 버전을 고정하려고",
      "코드에서 빠진 리소스가 원래 내가 만든 것인지 알아야 지울 수 있어서",
      "비밀 값을 안전하게 보관하려고",
    ],
    answer: 2,
    explanation:
      "계정 안의 모든 리소스를 뒤져서는 무엇이 이 코드가 만든 것인지 알 수 없다. 주소와 실제 ID의 짝을 기억해야 코드에서 빠진 것을 삭제 대상으로 잡는다. 기억이 없는 Ansible은 그래서 state: absent를 직접 적어야 지운다. 오히려 state에는 비밀 값이 평문으로 남을 수 있어 보호가 필요하다.",
    anchor: "차이를-계산하려면-기억이-필요하다",
  },
  {
    id: "iac-basics-4",
    post: "iac-basics",
    question:
      "terraform_data와 local-exec로 ip netns add를 실행해 만든 네임스페이스를 손으로 지웠다. terraform plan의 결과는?",
    choices: [
      "네임스페이스를 다시 만들겠다는 + create가 나온다",
      "에러가 난다",
      "state가 자동으로 지워진다",
      "아무 변경도 나오지 않는다. 결과를 읽어 올 방법이 없어서다",
    ],
    answer: 3,
    explanation:
      "Terraform은 프로바이더가 지금 모습을 읽어 와야 차이를 안다. 프로비저너는 명령을 한 번 실행했다는 사실만 남기고 결과를 읽지 못하니 사라져도 plan에 나오지 않는다. 같은 실험에서 local_file은 내용이 바뀐 것을 알아채고 다시 만들겠다고 했다.",
    anchor: "도구가-읽지-못하는-것은-관리하지-못한다",
  },
  {
    id: "iac-basics-5",
    post: "iac-basics",
    question: "불변 인프라 방식으로 웹 서버의 타임아웃 값을 바꾸는 올바른 순서는?",
    choices: [
      "각 서버에 SSH로 들어가 설정을 고치고 reload한다",
      "설정을 바꾼 새 이미지를 굽고, 새 서버를 띄워 헬스 체크를 통과시킨 뒤 옛 서버를 뺀다",
      "Ansible로 모든 서버의 설정 파일을 동시에 바꾼다",
      "로드 밸런서의 타임아웃만 바꾼다",
    ],
    answer: 1,
    explanation:
      "불변 인프라는 띄운 서버를 고치지 않는다. 새 이미지로 새 서버를 만들고 교체하므로 손으로 고친 서버가 끼어들 틈이 없고, 되돌리기는 옛 이미지로 다시 띄우는 것이다. Ansible로 맞추는 건 가변 인프라를 같은 모습으로 유지하는 방식이다.",
    anchor: "고쳐-쓸까-새로-갈아-끼울까",
  },
  {
    id: "iac-basics-6",
    post: "iac-basics",
    question:
      "ArgoCD 같은 GitOps 도구가 도는 클러스터에서, 장애 중 콘솔로 늘린 값이 몇 분 뒤 원래대로 돌아갔다. 왜 그런가?",
    choices: [
      "조정 루프가 주기적으로 실제를 Git의 원하는 모습에 맞춰 되돌렸기 때문에",
      "콘솔 변경은 원래 저장되지 않기 때문에",
      "Terraform state가 덮어썼기 때문에",
      "클라우드 API가 자동으로 롤백했기 때문에",
    ],
    answer: 0,
    explanation:
      "pull 방식의 에이전트는 계속 돌며 차이를 찾아 메운다. 드리프트가 쌓이지 않는 장점이 있지만 급한 수동 수정도 똑같이 되돌린다. 핫픽스는 Git을 거치고, 긴급할 때 자동 동기화를 잠시 멈추는 절차를 미리 정해 둔다.",
    anchor: "한-번-맞추는-도구와-계속-맞추는-도구",
  },
  {
    id: "iac-basics-7",
    post: "iac-basics",
    question:
      "상관없는 PR의 plan에 ~ desired_capacity = 6 -> 3 이라는, 아무도 고치지 않은 줄이 나왔다. 가장 먼저 의심할 것은?",
    choices: [
      "Terraform 버그",
      "프로바이더 버전 업그레이드",
      "누군가 콘솔에서 6으로 바꾼 드리프트가 있어서 apply하면 코드 값 3으로 되돌아간다는 것",
      "state 잠금 실패",
    ],
    answer: 2,
    explanation:
      "plan은 코드와 실제의 차이를 보여 준다. 내가 바꾸지 않은 변경 줄은 대개 코드 밖에서 바뀐 드리프트다. 장애 중 늘린 값일 수 있으니 그대로 적용하지 말고 먼저 코드에 반영할지 판단한다.",
    anchor: "iac가-오히려-사고를-키우는-순간",
  },
];
