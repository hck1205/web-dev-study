import type { QuizQuestion } from "../types";

export const K8S_API_AGGREGATION_SCHEDULERS: QuizQuestion[] = [
  {
    id: "k8s-api-aggregation-schedulers-1",
    post: "k8s-api-aggregation-schedulers",
    question: "요청할 때마다 다른 객체를 읽어 계산하는 읽기 전용 API를 새로 만들려 한다. CRD보다 API 집계가 맞는 이유는?",
    choices: [
      "CRD는 네임스페이스 단위 리소스를 만들 수 없어서",
      "CRD는 etcd에 저장된 문서를 돌려줄 뿐 요청마다 계산한 값을 낼 수 없어서",
      "API 집계를 쓰면 RBAC 설정이 필요 없어서",
      "CRD는 kubectl get으로 조회할 수 없어서",
    ],
    answer: 1,
    explanation:
      "CRD는 kube-apiserver가 etcd에 저장하고 꺼내 주는 문서다. 값이 etcd 밖에 있거나 요청마다 계산해야 하면 APIService로 별도 서버를 붙인다. RBAC는 두 경우 모두 kube-apiserver가 똑같이 검사한다.",
    anchor: "api-서버-앞에-다른-api-서버를-붙인다",
  },
  {
    id: "k8s-api-aggregation-schedulers-2",
    post: "k8s-api-aggregation-schedulers",
    question: "권한 없는 사용자 jane이 집계 API를 불렀다가 Forbidden을 받았다. 집계 서버 로그에는 무엇이 남나?",
    choices: [
      "아무것도 남지 않는다. kube-apiserver가 인가에서 거절하고 넘기지 않는다",
      "X-Remote-User: jane인 요청이 남고 집계 서버가 403을 돌려준다",
      "system:anonymous로 바뀐 요청이 남는다",
      "front-proxy 인증서 검증 실패가 남는다",
    ],
    answer: 0,
    explanation:
      "인증과 RBAC 인가는 aggregator가 넘기기 전에 끝난다. 실습에서도 거절된 첫 요청은 집계 서버에 오지 않았고, 권한을 준 뒤의 요청만 X-Remote-User: jane으로 도착했다.",
    anchor: "인증은-api-서버가-하고-서버는-헤더를-믿는다",
  },
  {
    id: "k8s-api-aggregation-schedulers-3",
    post: "k8s-api-aggregation-schedulers",
    question: "집계 서버가 X-Remote-User 헤더를 믿어도 되는 조건은?",
    choices: [
      "요청이 클러스터 내부 IP에서 왔을 때",
      "헤더에 system:authenticated 그룹이 들어 있을 때",
      "클라이언트 인증서가 requestheader CA로 서명되고 허용된 이름일 때",
      "Authorization 헤더에 Bearer 토큰이 있을 때",
    ],
    answer: 2,
    explanation:
      "헤더는 누구나 꾸밀 수 있어서, 연결한 쪽이 kube-apiserver의 front-proxy 인증서인지 extension-apiserver-authentication ConfigMap의 requestheader CA로 확인해야 한다. k8s.io/apiserver 라이브러리가 이 검증을 해 준다.",
    anchor: "인증은-api-서버가-하고-서버는-헤더를-믿는다",
  },
  {
    id: "k8s-api-aggregation-schedulers-4",
    post: "k8s-api-aggregation-schedulers",
    question: "집계 서버 Deployment를 지웠더니 며칠 뒤 네임스페이스 삭제가 Terminating에 멈췄다. 무엇을 하나?",
    choices: [
      "네임스페이스의 finalizers를 바로 비운다",
      "kube-controller-manager를 재시작한다",
      "etcd에서 네임스페이스 키를 지운다",
      "AVAILABLE이 False인 APIService를 찾아 지운다",
    ],
    answer: 3,
    explanation:
      "서버 없이 APIService만 남으면 그 그룹을 읽을 수 없어 네임스페이스 컨트롤러가 정리를 끝내지 못한다. kubectl get apiservices에서 False인 것을 찾아 지우면 풀린다. 집계 서버를 지울 때는 APIService부터 지운다.",
    anchor: "집계-서버가-죽으면",
  },
  {
    id: "k8s-api-aggregation-schedulers-5",
    post: "k8s-api-aggregation-schedulers",
    question: "Pod가 Pending인데 describe의 Events가 `<none>`이다. 가장 먼저 볼 것은?",
    choices: [
      "노드의 CPU 여유",
      "spec.schedulerName과 그 이름의 스케줄러가 실제로 도는지",
      "Pod의 readinessProbe",
      "이미지 pull 권한",
    ],
    answer: 1,
    explanation:
      "자원 부족이면 FailedScheduling 이벤트가 남는다. 이벤트가 하나도 없으면 그 Pod를 맡은 스케줄러가 없다는 뜻이다. 기본 스케줄러는 다른 schedulerName의 Pod를 보지 않는다.",
    anchor: "두-번째-스케줄러로-배치-성향-바꾸기",
  },
  {
    id: "k8s-api-aggregation-schedulers-6",
    post: "k8s-api-aggregation-schedulers",
    question: "배치 작업을 노드에 몰아 담고 싶다. 별도 스케줄러보다 기본 스케줄러의 프로필을 하나 더 두는 편이 나은 이유는?",
    choices: [
      "프로필은 한 프로세스에서 캐시를 공유해 같은 자원을 두 번 내주지 않아서",
      "별도 스케줄러는 MostAllocated를 지원하지 않아서",
      "프로필을 쓰면 schedulerName을 적지 않아도 되어서",
      "별도 스케줄러는 Score 확장 지점을 쓸 수 없어서",
    ],
    answer: 0,
    explanation:
      "스케줄러 프로세스가 둘이면 서로의 예약을 몰라 같은 노드의 마지막 자원을 동시에 줄 수 있고, 늦은 Pod는 kubelet에서 OutOfcpu로 실패한다. 프로필은 같은 큐와 캐시를 쓰니 이 경합이 없다.",
    anchor: "두-번째-스케줄러로-배치-성향-바꾸기",
  },
  {
    id: "k8s-api-aggregation-schedulers-7",
    post: "k8s-api-aggregation-schedulers",
    question: "워커 넷이 들어가는 클러스터에 워커 셋이 필요한 작업 A, B를 동시에 띄웠더니 둘 다 둘씩만 떴다. PodGroup에 gang minCount 3을 주면 어떻게 되나?",
    choices: [
      "A와 B가 워커를 둘씩 유지한 채 세 번째를 기다린다",
      "스케줄러가 B의 워커를 선점해 A에 준다",
      "한 작업은 셋이 함께 배치되고, 다른 작업은 아무 자리도 잡지 않은 채 기다린다",
      "두 작업 모두 거절되어 Failed가 된다",
    ],
    answer: 2,
    explanation:
      "gang 정책은 최소 개수만큼 자리가 있을 때만 함께 배치하고 아니면 하나도 잡지 않는다. 실습에서 A는 셋이 모두 떴고 B는 Unschedulable로 기다리다 A가 끝나자 통째로 배치됐다.",
    anchor: "다-같이-뜨거나-아예-안-뜨거나",
  },
];
