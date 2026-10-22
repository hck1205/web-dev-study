import type { QuizQuestion } from "../types";

export const JENKINS_ON_KUBERNETES: QuizQuestion[] = [
  {
    id: "jenkins-on-kubernetes-1",
    post: "jenkins-on-kubernetes",
    question: "Kubernetes 플러그인으로 만든 에이전트 파드에서 jnlp 컨테이너가 맡는 일은?",
    choices: [
      "Jenkinsfile을 해석해 단계 순서를 정한다",
      "컨트롤러로 먼저 접속해 이 파드를 에이전트로 등록한다",
      "빌드 이미지를 레지스트리에 푸시한다",
      "다른 컨테이너의 리소스 요청량을 정한다",
    ],
    answer: 1,
    explanation:
      "jnlp 컨테이너는 jenkins/inbound-agent 이미지로 컨트롤러에 인바운드 접속해 에이전트로 등록한다. Jenkinsfile 해석은 컨트롤러가 하고, 빌드 명령은 container()로 고른 다른 컨테이너에서 돈다.",
    anchor: "빌드가-들어올-때-파드가-생긴다",
  },
  {
    id: "jenkins-on-kubernetes-2",
    post: "jenkins-on-kubernetes",
    question:
      "에이전트 로그에는 'Failed to connect: Handshake error.'만 반복된다. 컨트롤러 로그에서 함께 확인하면 원인을 바로 알 수 있는 줄은?",
    choices: [
      "Jenkins is fully up and running",
      "Error checking update sites",
      "incorrect secret for <에이전트 이름>",
      "Started initialization",
    ],
    answer: 2,
    explanation:
      "에이전트 쪽 메시지는 핸드셰이크가 실패했다는 사실만 알려 준다. 컨트롤러 로그의 incorrect secret 줄이 비밀값이 틀렸다는 원인을 말해 준다. 업데이트 센터 오류는 플러그인 설치와 관련된 것이라 접속과는 상관없다.",
    anchor: "파드-안의-jnlp-컨테이너가-하는-일",
  },
  {
    id: "jenkins-on-kubernetes-3",
    post: "jenkins-on-kubernetes",
    question:
      "podTemplate에 maven(1 CPU), kaniko(500m), jnlp(100m) 컨테이너가 있고 남은 CPU가 1500m인 노드만 있다. 빌드는 어떻게 되나?",
    choices: [
      "가장 큰 컨테이너인 maven만 들어가면 되므로 바로 시작한다",
      "컨테이너마다 다른 노드에 나뉘어 뜬다",
      "jnlp만 먼저 떠서 빌드가 시작되고 나머지는 나중에 붙는다",
      "요청량 합 1600m가 들어갈 노드가 없어 파드가 Pending이고 빌드는 기다린다",
    ],
    answer: 3,
    explanation:
      "파드는 한 노드에 통째로 올라가므로 모든 컨테이너 요청량의 합이 한 노드에 들어가야 한다. 들어갈 노드가 없으면 FailedScheduling으로 Pending이 되고, Jenkins 쪽에서는 에이전트가 오프라인이라며 기다리기만 한다.",
    anchor: "빌드-파드가-pending에서-멈출-때",
  },
  {
    id: "jenkins-on-kubernetes-4",
    post: "jenkins-on-kubernetes",
    question: "빌드 파드에 노드의 /var/run/docker.sock을 마운트하는 것이 위험한 이유는?",
    choices: [
      "그 소켓으로 privileged 컨테이너를 띄워 노드 전체에 닿을 수 있어서",
      "이미지 빌드 속도가 느려져서",
      "레지스트리 인증 정보를 쓸 수 없어서",
      "작업 공간을 다른 컨테이너와 나눌 수 없어서",
    ],
    answer: 0,
    explanation:
      "docker 데몬은 노드에서 root로 돌기 때문에 소켓을 쓸 수 있으면 노드 root와 다름없다. 빌드 스크립트는 PR로 바뀔 수 있으니 PR 하나가 노드를 차지할 수 있다. 그래서 데몬 없는 빌드 도구를 쓰고 hostPath를 정책으로 막는다.",
    anchor: "docker-소켓-없이-이미지를-만든다",
  },
  {
    id: "jenkins-on-kubernetes-5",
    post: "jenkins-on-kubernetes",
    question:
      "Maven 캐시용 EBS 기반 PVC를 빌드 파드에 붙였더니, 다른 노드에 뜬 두 번째 빌드 파드가 Multi-Attach error로 멈췄다. 왜인가?",
    choices: [
      "PVC 용량이 부족해서",
      "Maven 저장소가 손상돼서",
      "블록 스토리지가 ReadWriteOnce라 한 노드에서만 붙기 때문에",
      "jnlp 컨테이너가 볼륨을 잠가서",
    ],
    answer: 2,
    explanation:
      "EBS 같은 블록 스토리지는 대부분 ReadWriteOnce라 한 노드에만 연결된다. 여러 노드의 파드가 함께 쓰려면 ReadWriteMany를 지원하는 파일 스토리지가 필요하고, 그때는 동시 쓰기로 캐시가 깨지지 않게 따로 다뤄야 한다.",
    anchor: "빈-디스크에서-시작하는-빌드의-캐시",
  },
  {
    id: "jenkins-on-kubernetes-6",
    post: "jenkins-on-kubernetes",
    question: "JCasC의 Kubernetes cloud 설정에서 jenkinsUrl을 클러스터 안 서비스 주소로 적는 이유는?",
    choices: [
      "사용자가 브라우저에서 보는 주소를 바꾸려고",
      "에이전트 파드가 안에서 닿을 수 있는 주소로 접속하게 하려고",
      "플러그인 업데이트 센터에 접속하려고",
      "컨트롤러의 executor 수를 늘리려고",
    ],
    answer: 1,
    explanation:
      "jnlp 컨테이너는 이 주소로 컨트롤러에 접속한다. 화면용 외부 주소를 쓰면 파드가 바깥을 돌아 접속하려다 실패하거나 느려진다. 사람이 보는 주소와 에이전트가 붙는 주소를 나눠 두면 Handshake 문제를 피할 수 있다.",
    anchor: "컨트롤러도-코드로-둔다",
  },
];
