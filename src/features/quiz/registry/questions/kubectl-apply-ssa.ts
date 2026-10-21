import type { QuizQuestion } from "../types";

export const KUBECTL_APPLY_SSA: QuizQuestion[] = [
  {
    id: "kubectl-apply-ssa-1",
    post: "kubectl-apply-ssa",
    question:
      "손으로 replicas를 6으로 늘리고 누군가 oncall 라벨도 붙였다. 파일(replicas: 3, oncall 없음)을 클라이언트 쪽 apply하면 어떻게 되나?",
    choices: [
      "replicas는 6, oncall은 지워진다",
      "replicas는 3, oncall은 지워진다",
      "replicas는 3, oncall은 남는다",
      "replicas는 6, oncall은 남는다",
    ],
    answer: 2,
    explanation:
      "파일에 있는 replicas는 지금 값과 다르니 파일 값 3으로 되돌린다. oncall은 지난번 파일에도 이번 파일에도 없어 남이 관리하는 값으로 보고 건드리지 않는다.",
    anchor: "클라이언트-쪽-apply는-셋을-비교한다",
  },
  {
    id: "kubectl-apply-ssa-2",
    post: "kubectl-apply-ssa",
    question:
      "HPA에 맡기려고 클라이언트 쪽 apply로 관리하던 파일에서 replicas 줄만 지우고 apply했다. 무슨 일이 생기나?",
    choices: [
      "replicas가 1로 바뀐다",
      "아무 변화가 없다",
      "HPA가 자동으로 주인이 된다",
      "apply가 충돌 에러로 멈춘다",
    ],
    answer: 0,
    explanation:
      "last-applied에 있던 필드가 이번 파일에서 빠졌으니 kubectl은 지우라는 patch를 보내고, 지워진 replicas는 기본값 1이 된다. 먼저 set-last-applied나 edit-last-applied로 기록에서 replicas를 지워야 한다.",
    anchor: "클라이언트-쪽-apply는-셋을-비교한다",
  },
  {
    id: "kubectl-apply-ssa-3",
    post: "kubectl-apply-ssa",
    question: "300KB짜리 ConfigMap을 kubectl apply하자 metadata.annotations: Too long 에러가 났다. 가장 알맞은 해결은?",
    choices: [
      "ConfigMap의 1MiB 한도를 늘린다",
      "kubectl apply --server-side로 올린다",
      "--force-conflicts를 붙인다",
      "--dry-run=client로 먼저 확인한다",
    ],
    answer: 1,
    explanation:
      "클라이언트 쪽 apply는 객체 전체를 last-applied 어노테이션에 한 번 더 넣는데, 어노테이션 합계는 256KiB를 넘을 수 없다. 서버 쪽 apply는 이 어노테이션을 쓰지 않아서 객체 한도 안이면 올라간다.",
    anchor: "last-applied가-남기는-문제",
  },
  {
    id: "kubectl-apply-ssa-4",
    post: "kubectl-apply-ssa",
    question: "서버 쪽 apply에서 conflict with \"kubectl\" with subresource \"scale\": .spec.replicas 에러가 났다. 무슨 뜻인가?",
    choices: [
      "kubectl 버전이 서버와 맞지 않는다",
      "scale 하위 리소스가 꺼져 있다",
      "replicas 값의 형식이 틀렸다",
      "누군가 kubectl scale로 replicas를 바꿔 그 필드의 주인이 됐다",
    ],
    answer: 3,
    explanation:
      "명령형 변경(Update)도 managedFields에 주인으로 기록된다. 그래서 옛 파일로 apply하면 남의 필드를 덮으려는 것으로 보고 멈춘다. 손으로 바꾼 값을 말없이 되돌리지 않게 해 주는 장치다.",
    anchor: "남의-필드를-건드리면-충돌이-난다",
  },
  {
    id: "kubectl-apply-ssa-5",
    post: "kubectl-apply-ssa",
    question: "CI에서 충돌이 귀찮아 서버 쪽 apply에 --force-conflicts를 항상 붙였다. 무엇이 문제인가?",
    choices: [
      "apply가 느려진다",
      "managedFields가 지워진다",
      "남이 관리하는 필드를 매번 가져와 덮어서 클라이언트 쪽 apply처럼 된다",
      "dry-run이 동작하지 않는다",
    ],
    answer: 2,
    explanation:
      "강제하면 충돌한 필드의 주인을 가져오면서 값을 덮는다. HPA나 GitOps 도구가 관리하는 값도 매 배포마다 덮이니 서버 쪽 apply로 얻은 보호가 사라진다.",
    anchor: "남의-필드를-건드리면-충돌이-난다",
  },
  {
    id: "kubectl-apply-ssa-6",
    post: "kubectl-apply-ssa",
    question: "Deployment 셀렉터를 바꾼 파일이 --dry-run=client는 통과했는데 --dry-run=server에서 막혔다. 왜 그런가?",
    choices: [
      "서버 dry-run은 병합, 어드미션, 검증까지 거쳐 바꿀 수 없는 필드를 잡기 때문에",
      "클라이언트 dry-run은 YAML 문법만 보기 때문에",
      "서버 dry-run이 실제로 저장하다 실패했기 때문에",
      "셀렉터는 클라이언트에서만 검사되기 때문에",
    ],
    answer: 0,
    explanation:
      "서버 dry-run은 저장 직전까지 모든 단계를 거치고 저장만 하지 않는다. 셀렉터가 immutable이라는 검증은 API 서버에 있어서 클라이언트 검사는 그 칸까지 가지 못한다.",
    anchor: "적용하기-전에-결과를-본다",
  },
  {
    id: "kubectl-apply-ssa-7",
    post: "kubectl-apply-ssa",
    question: "kubectl apply -f other/ -l part-of=orders --prune이 다른 디렉터리의 ConfigMap을 지우려 한다. 이유는?",
    choices: [
      "그 ConfigMap에 last-applied 어노테이션이 없어서",
      "라벨이 맞고 apply로 만든 객체인데 이번 파일 목록에 없어서",
      "prune은 네임스페이스의 모든 객체를 지워서",
      "ConfigMap은 prune 기본 대상이 아니어서",
    ],
    answer: 1,
    explanation:
      "prune은 셀렉터에 맞고 last-applied가 있는 객체 중 이번 파일에 없는 것을 지운다. 어느 디렉터리의 것인지는 모르니 라벨이 겹치면 남의 객체도 지운다. 그래서 서버 dry-run으로 pruned 목록부터 본다.",
    anchor: "prune은-파일에-없는-것을-지운다",
  },
];
