import type { QuizQuestion } from "../types";

export const NETWORK_CONFIG_CICD: QuizQuestion[] = [
  {
    id: "network-config-cicd-1",
    post: "network-config-cicd",
    question:
      "PR에서 plan을 저장해 두었는데, 그 사이 다른 PR이 먼저 apply됐다. 저장한 plan을 apply하면 어떻게 되나?",
    choices: [
      "두 변경이 자동으로 합쳐져 적용된다",
      "Saved plan is stale로 거부되어 다시 plan해야 한다",
      "먼저 apply된 변경을 되돌리고 이 plan을 적용한다",
      "경고만 찍고 그대로 적용한다",
    ],
    answer: 1,
    explanation:
      "저장한 plan은 만들 때의 state를 기준으로 계산됐으니 state가 바뀌면 Terraform이 적용을 거부한다. 리뷰어가 본 계획과 실제 변경이 달라지는 것을 막는 장치다. 그래서 머지 뒤 main에서 다시 plan하고 그 파일을 apply한다.",
    anchor: "plan은-한-번-만들고-그대로-apply한다",
  },
  {
    id: "network-config-cicd-2",
    post: "network-config-cicd",
    question:
      "main에 머지했는데 apply 잡이 에러 없이 건너뛰어졌다. 워크플로에서 먼저 확인할 것은?",
    choices: [
      "러너의 디스크 용량",
      "terraform 버전 고정 여부",
      "apply 잡의 if 조건이 참조하는 출력 이름과, plan 스텝이 exit 2를 실패로 처리하지 않는지",
      "PR에 라벨이 붙었는지",
    ],
    answer: 2,
    explanation:
      "needs.plan.outputs.chaged 같은 오타는 YAML로는 멀쩡해서 빈 값이 되고 조건이 늘 거짓이 된다. actionlint가 이런 오타를 잡는다. 또 기본 셸이 -e로 돌아 -detailed-exitcode의 2를 실패로 보면 출력이 써지지 않으니 set +e로 받아야 한다.",
    anchor: "pr이-올라오면-기계가-먼저-본다",
  },
  {
    id: "network-config-cicd-3",
    post: "network-config-cicd",
    question: "PR에서 도는 terraform plan에 읽기 전용 역할만 주는 이유는?",
    choices: [
      "plan은 API를 전혀 호출하지 않기 때문이다",
      "plan도 PR 작성자의 코드를 실행하므로 external 데이터 소스 등으로 리뷰 전에 인프라를 바꿀 수 있기 때문이다",
      "쓰기 역할은 OIDC로 빌릴 수 없기 때문이다",
      "읽기 역할이 더 빨라서다",
    ],
    answer: 1,
    explanation:
      "plan은 refresh를 위해 API를 읽고, 코드에 따라 임의의 프로그램을 돌릴 수도 있다. 쓰기 권한이 있으면 리뷰를 거치지 않은 변경이 가능해진다. 쓰기 역할은 main의 apply 잡과 보호된 environment에서만 빌리게 sub 조건으로 묶는다.",
    anchor: "권한은-plan과-apply를-나눈다",
  },
  {
    id: "network-config-cicd-4",
    post: "network-config-cicd",
    question:
      "drift 워크플로에서 terraform plan -refresh-only -detailed-exitcode가 1을 돌려줬다. 어떻게 해석하나?",
    choices: [
      "코드 밖에서 리소스가 바뀌었다",
      "바뀐 것이 없다",
      "drift가 아니라 자격 증명 만료나 잠금 같은 실행 오류다",
      "리소스가 하나 바뀌었다는 뜻이다",
    ],
    answer: 2,
    explanation:
      "0은 변경 없음, 2는 변경 있음(drift), 1은 오류다. 1과 2를 구분하지 않으면 오류를 drift로 착각하거나 drift를 놓친다. 오류는 drift 이슈가 아니라 파이프라인 담당에게 따로 알린다.",
    anchor: "코드-밖에서-바뀐-것-찾기",
  },
  {
    id: "network-config-cicd-5",
    post: "network-config-cicd",
    question:
      "콘솔에서 지운 라우트를 모른 채 태그만 바꾸는 PR을 apply했다. 무슨 일이 생기나?",
    choices: [
      "태그만 바뀌고 라우트는 계속 없다",
      "plan에 라우트를 되살리는 변경이 섞여 함께 적용된다",
      "Terraform이 drift를 감지하고 apply를 거부한다",
      "state에서 라우트가 지워진다",
    ],
    answer: 1,
    explanation:
      "일반 plan은 실제를 다시 읽고 코드와 비교하므로 코드에 있는 라우트를 되살리려 한다. 실습에서도 같은 상태에서 일반 plan은 Plan: 0 to add, 1 to change를 냈다. drift를 먼저 알았다면 그 변경이 맞는지 따로 판단할 수 있었다.",
    anchor: "코드-밖에서-바뀐-것-찾기",
  },
  {
    id: "network-config-cicd-6",
    post: "network-config-cicd",
    question: "변경 창 검사에서 UTC 기준 요일로 판단하면 생기는 문제는?",
    choices: [
      "UTC 수요일 16:00이 KST로는 목요일 01:00인데 업무 시간으로 착각할 수 있다",
      "UTC는 윤초 때문에 시간이 틀린다",
      "러너가 UTC를 지원하지 않는다",
      "문제없다. 요일은 시간대와 상관없다",
    ],
    answer: 0,
    explanation:
      "러너의 시계는 UTC라서 시간대를 옮기지 않으면 날짜와 요일이 함께 어긋난다. 스크립트는 TZ=Asia/Seoul을 명시하고, 함수로 짤 때는 9시간을 더한 뒤 요일과 시각을 본다.",
    anchor: "언제-바꿀지도-코드로-정한다",
  },
  {
    id: "network-config-cicd-7",
    post: "network-config-cicd",
    question: "잘못 나간 네트워크 변경을 되돌리는 기본 방법으로 알맞은 것은?",
    choices: [
      "state 파일을 이전 버전으로 바꿔 끼운다",
      "해당 커밋을 git revert한 PR을 같은 파이프라인으로 적용한다",
      "terraform destroy 후 다시 apply한다",
      "콘솔에서 고치고 코드는 그대로 둔다",
    ],
    answer: 1,
    explanation:
      "revert PR도 plan과 리뷰를 거쳐 원래대로 돌아가는 변경이 맞는지 확인할 수 있다. state만 옛날로 돌리면 실제와 기록이 어긋난다. 다만 지운 리소스는 새 ID로 되살아나고 교체가 든 변경은 revert 때도 끊김이 생긴다.",
    anchor: "되돌리기는-git-revert부터",
  },
];
