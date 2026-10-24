import type { QuizQuestion } from "../types";

export const CONTAINER_ORCHESTRATION_CHOICES: QuizQuestion[] = [
  {
    id: "container-orchestration-choices-1",
    post: "container-orchestration-choices",
    question: "replicas: 3인 Deployment의 Pod 하나를 지웠더니 3초 만에 이름이 다른 Pod가 생겼다. 누가 왜 만들었나?",
    choices: [
      "kubelet이 지워진 컨테이너를 같은 이름으로 재시작했다",
      "ReplicaSet 컨트롤러가 원하는 3개와 실제 2개의 차이를 보고 하나를 만들었다",
      "kubectl delete가 지우면서 새 Pod 생성 요청을 함께 보냈다",
      "스케줄러가 빈 노드를 발견하고 Pod를 복제했다",
    ],
    answer: 1,
    explanation:
      "선언형 API에서는 원하는 상태만 저장되고, 컨트롤러가 실제 상태와 비교해 차이를 메운다. 그래서 이름이 다른 새 Pod가 생긴다. 스케줄러는 만들어진 Pod를 어느 노드에 놓을지만 고른다.",
    anchor: "원하는-상태를-적으면-맞춰-주는-루프",
  },
  {
    id: "container-orchestration-choices-2",
    post: "container-orchestration-choices",
    question: "노드 CPU 사용률이 10%인데 새 Pod가 '3 Insufficient cpu'로 Pending이다. 가장 그럴듯한 이유는?",
    choices: [
      "kubelet이 CPU 사용률을 늦게 보고해서",
      "CPU limit을 넘긴 Pod가 있어서 노드가 잠겼다",
      "스케줄러는 실제 사용량이 아니라 이미 놓인 Pod들의 requests 합으로 남은 자리를 계산해서",
      "노드에 taint가 붙어 있어서",
    ],
    answer: 2,
    explanation:
      "스케줄러는 requests를 기준으로 자리를 계산하므로, 한가한 노드라도 요청량 합이 용량에 닿으면 더는 못 들어간다. 실습에서도 500m짜리 12개로 CPU 6개가 차자 13번째가 Pending이 됐다. taint 때문이라면 메시지에 taint가 나온다.",
    anchor: "어디에-놓을지-고르는-일",
  },
  {
    id: "container-orchestration-choices-3",
    post: "container-orchestration-choices",
    question: "남은 CPU가 가장 많은 노드에만 놓는 단순한 스케줄러로 a(2000m), b(1000m)에 500m짜리 3개를 놓으면 셋 다 a로 간다. 이게 왜 문제인가?",
    choices: [
      "a가 죽으면 복제본 셋이 한꺼번에 사라진다",
      "b의 CPU가 과열된다",
      "a의 requests 합이 limit을 넘는다",
      "서비스 발견이 a의 주소만 알게 된다",
    ],
    answer: 0,
    explanation:
      "자원 점수만 보면 큰 노드에 몰려서 노드 하나의 장애가 서비스 전체 장애가 된다. 그래서 실제 스케줄러는 topology spread constraints, anti-affinity, Nomad의 spread처럼 같은 앱을 펼치는 규칙을 더한다.",
    anchor: "어디에-놓을지-고르는-일",
  },
  {
    id: "container-orchestration-choices-4",
    post: "container-orchestration-choices",
    question: "Swarm 서버 세 대 중 서버 3에는 web 컨테이너가 없다. 사용자가 서버 3의 공개 포트 8080으로 요청하면?",
    choices: [
      "연결이 거절된다",
      "Swarm 매니저가 서버 3에 컨테이너를 새로 띄운 뒤 응답한다",
      "DNS가 서버 1의 주소로 리다이렉트한다",
      "라우팅 메시가 ingress 오버레이를 거쳐 컨테이너가 있는 서버로 넘긴다",
    ],
    answer: 3,
    explanation:
      "라우팅 메시는 공개 포트를 모든 서버에 열고, 어느 서버로 들어와도 IPVS가 살아 있는 컨테이너로 보낸다. 그래서 앞단 로드 밸런서는 컨테이너 위치를 몰라도 된다. 요청 때문에 새 컨테이너를 띄우지는 않는다.",
    anchor: "docker-swarm-compose-파일-그대로-여러-대로",
  },
  {
    id: "container-orchestration-choices-5",
    post: "container-orchestration-choices",
    question: "AWS에서 개발자 몇 명이 무상태 웹 서비스 몇 개를 운영한다. Helm 차트나 오퍼레이터는 필요 없다. 가장 일을 덜 남기는 선택은?",
    choices: [
      "EC2 세 대에 kubeadm으로 쿠버네티스 직접 구성",
      "ECS와 Fargate",
      "Nomad 서버 세 대",
      "OpenShift 구독",
    ],
    answer: 1,
    explanation:
      "ECS는 컨트롤 플레인을 AWS가 갖고 요금도 따로 받지 않으며, Fargate를 쓰면 노드 패치와 용량 계획도 사라진다. 쿠버네티스 생태계가 필요하거나 다른 환경과 같은 방식으로 배포해야 할 때 EKS를 검토한다.",
    anchor: "무엇을-고를까",
  },
  {
    id: "container-orchestration-choices-6",
    post: "container-orchestration-choices",
    question: "쿠버네티스가 Swarm이나 ECS와 가장 크게 다른 점으로 글에서 든 것은?",
    choices: [
      "롤링 배포를 지원한다는 것",
      "컨테이너가 죽으면 다시 띄운다는 것",
      "CRD로 API에 새 종류를 붙이고 컨트롤러로 동작을 더할 수 있다는 것",
      "Raft로 상태를 맞춘다는 것",
    ],
    answer: 2,
    explanation:
      "롤링 배포와 자가 복구, Raft 기반 상태 저장은 다른 도구도 한다. 쿠버네티스는 CRD 하나로 DbBackup 같은 새 리소스를 Deployment와 똑같이 다루게 하고, 그 위에 오퍼레이터 생태계가 생겼다.",
    anchor: "쿠버네티스가-표준이-된-이유",
  },
  {
    id: "container-orchestration-choices-7",
    post: "container-orchestration-choices",
    question: "쿠버네티스에서 잘 돌던 공식 nginx 이미지를 OpenShift에 올렸더니 권한 오류로 죽는다. 이유는?",
    choices: [
      "OpenShift는 Docker Hub 이미지를 막는다",
      "기본 SCC가 컨테이너를 임의 UID로 돌려 루트를 가정한 이미지가 실패한다",
      "OpenShift Route가 80번 포트를 이미 쓰고 있다",
      "S2I 빌드를 거치지 않은 이미지는 실행되지 않는다",
    ],
    answer: 1,
    explanation:
      "restricted-v2 SCC는 네임스페이스마다 정해진 범위의 임의 UID로 컨테이너를 돌린다. 루트로 80번을 열고 루트 소유 디렉터리에 쓰는 이미지는 실패하므로 비루트용 이미지를 쓰거나 쓰기 경로 권한을 맞춘다.",
    anchor: "openshift-쿠버네티스-위에-회사가-필요한-것을-얹었다",
  },
];
