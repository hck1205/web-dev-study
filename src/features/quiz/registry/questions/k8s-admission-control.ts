import type { QuizQuestion } from "../types";

export const K8S_ADMISSION_CONTROL: QuizQuestion[] = [
  {
    id: "k8s-admission-control-1",
    post: "k8s-admission-control",
    question:
      "team 라벨이 없으면 붙여 주는 MutatingAdmissionPolicy와, team 라벨이 없으면 막는 ValidatingAdmissionPolicy가 같은 네임스페이스에 함께 걸려 있다. 라벨 없이 Deployment를 만들면?",
    choices: [
      "검증이 먼저 돌아서 거절된다",
      "둘 중 어느 쪽이 먼저 돌지 정해져 있지 않아 결과가 매번 다르다",
      "변경이 먼저 라벨을 붙이고, 검증은 붙은 뒤의 모습을 봐서 통과한다",
      "두 정책이 충돌해 API 서버가 정책 생성을 거절한다",
    ],
    answer: 2,
    explanation:
      "어드미션은 변경 단계가 먼저, 검증 단계가 나중이다. 검증은 변경이 모두 끝난 최종 객체를 보기 때문에 실습에서도 team=unassigned가 붙은 채로 만들어졌다. 순서가 정해지지 않은 것은 변경 플러그인끼리의 순서다.",
    anchor: "mutatingadmissionpolicy로-기본값-채우기",
  },
  {
    id: "k8s-admission-control-2",
    post: "k8s-admission-control",
    question:
      "VAP 식 `object.metadata.labels.owner != ''`를 failurePolicy: Fail로 걸었다. labels가 아예 없는 Deployment가 들어오면?",
    choices: [
      "labels가 없으니 빈 문자열로 보고 거짓이 되어 위반 메시지가 나온다",
      "no such key 실행 에러가 나고, Fail이라 위반으로 처리돼 거절된다",
      "식을 평가할 수 없으니 정책을 건너뛰고 통과시킨다",
      "정책을 만들 때 타입 검사에서 이미 거절됐어야 한다",
    ],
    answer: 1,
    explanation:
      "CEL은 없는 키를 읽으면 undefined가 아니라 no such key 에러를 낸다. 실행 에러는 failurePolicy를 따르므로 Fail이면 거절된다. labels는 맵이라 어떤 키든 있을 수 있어서 타입 검사에는 걸리지 않으니, has()나 in으로 먼저 묻는다.",
    anchor: "없는-필드를-읽으면-에러가-난다",
  },
  {
    id: "k8s-admission-control-3",
    post: "k8s-admission-control",
    question:
      "운영 중인 클러스터에 새 VAP를 걸면서 기존 배포가 얼마나 깨질지 먼저 알고 싶다. 바인딩의 validationActions로 가장 알맞은 것은?",
    choices: ["[\"Deny\", \"Warn\"]", "[\"Deny\"]", "[\"Audit\"] 또는 [\"Warn\", \"Audit\"]", "validationActions를 비워 둔다"],
    answer: 2,
    explanation:
      "Audit은 요청을 통과시키면서 감사 이벤트에 validation_failure 어노테이션을 남기고, Warn은 사용자에게 경고 헤더를 보낸다. 위반 건수를 센 뒤 Deny로 바꾸는 순서가 안전하다. Deny와 Warn은 함께 적으면 바인딩 자체가 거절된다.",
    anchor: "바로-막지-않고-경고부터",
  },
  {
    id: "k8s-admission-control-4",
    post: "k8s-admission-control",
    question:
      "응답이 5초 걸리는 검증 웹훅에 timeoutSeconds: 2, failurePolicy: Ignore를 줬다. ConfigMap을 만들면 어떻게 되나?",
    choices: [
      "웹훅 응답을 5초 기다린 뒤 성공한다",
      "Ignore라서 웹훅을 아예 부르지 않고 즉시 성공한다",
      "2초 뒤 context deadline exceeded로 실패한다",
      "2초를 기다린 뒤 검사 없이 성공한다",
    ],
    answer: 3,
    explanation:
      "Ignore는 웹훅 호출이 실패했을 때 요청을 통과시킬 뿐, 호출은 그대로 하고 타임아웃까지 기다린다. 실습에서도 2.057초 뒤에 성공했다. 그래서 Ignore여도 timeoutSeconds를 짧게 잡고 fail_open_count를 감시한다.",
    anchor: "웹훅이-죽으면-요청이-같이-죽는다",
  },
  {
    id: "k8s-admission-control-5",
    post: "k8s-admission-control",
    question:
      "pods 대상 검증 웹훅(Fail)의 Pod가 노드 장애로 모두 사라진 뒤 다시 뜨지 않는다. ReplicaSet은 DESIRED 1, CURRENT 0이다. 왜 그런가?",
    choices: [
      "웹훅 Pod를 새로 만드는 Pod create 요청도 그 웹훅을 거쳐야 하는데 웹훅이 없어서 거절된다",
      "스케줄러가 웹훅 Pod를 우선순위가 낮다고 판단해 미룬다",
      "웹훅 Pod는 ServiceAccount 토큰이 만료돼 다시 뜰 수 없다",
      "ReplicaSet 컨트롤러가 웹훅 설정이 있는 동안에는 동작을 멈춘다",
    ],
    answer: 0,
    explanation:
      "웹훅이 자기 Pod의 생성까지 검사 대상으로 잡으면 스스로 회복하지 못한다. ReplicaSet 이벤트에 FailedCreate와 failed calling webhook이 남는다. namespaceSelector로 웹훅 자신의 네임스페이스를 빼 두면 이 교착을 피한다.",
    anchor: "자기-pod도-못-띄우는-웹훅",
  },
  {
    id: "k8s-admission-control-6",
    post: "k8s-admission-control",
    question: "웹훅이 모두 죽어 쓰기가 막힌 상황에서 웹훅 설정(ValidatingWebhookConfiguration)을 지울 수 있는 이유는?",
    choices: [
      "cluster-admin은 어드미션 단계를 건너뛰기 때문에",
      "웹훅은 웹훅 설정 객체에 대한 요청에는 불리지 않기 때문에",
      "delete 요청은 어드미션을 거치지 않기 때문에",
      "API 서버가 웹훅이 죽으면 자동으로 failurePolicy를 Ignore로 바꾸기 때문에",
    ],
    answer: 1,
    explanation:
      "웹훅이 자기 설정을 지우는 요청까지 막으면 아무도 풀 수 없으니, 웹훅 설정 객체는 웹훅 대상에서 빠진다. delete도 어드미션을 거치는 쓰기 요청이고, system:masters라고 어드미션이 면제되지는 않는다.",
    anchor: "자기-pod도-못-띄우는-웹훅",
  },
  {
    id: "k8s-admission-control-7",
    post: "k8s-admission-control",
    question: "kubelet fine-grained authorization이 해결한 문제로 가장 알맞은 것은?",
    choices: [
      "kubelet이 다른 노드의 Secret을 읽을 수 있던 문제",
      "kubelet 인증서가 1년마다 만료되던 문제",
      "Pod 목록만 읽으려는 모니터링 도구에도 exec까지 되는 nodes/proxy 권한을 줘야 했던 문제",
      "kubelet API가 HTTP로만 열려 있던 문제",
    ],
    answer: 2,
    explanation:
      "예전에는 kubelet의 /pods, /healthz, /configz 대부분이 nodes/proxy 하나로 검사됐고, nodes/proxy가 있으면 kubelet API로 컨테이너 exec도 된다. 이제 nodes/pods, nodes/healthz, nodes/configz로 따로 검사해 필요한 만큼만 줄 수 있다.",
    anchor: "kubelet-api-권한도-잘게-나뉘었다",
  },
];
