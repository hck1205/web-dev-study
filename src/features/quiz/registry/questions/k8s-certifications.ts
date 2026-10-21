import type { QuizQuestion } from "../types";

export const K8S_CERTIFICATIONS: QuizQuestion[] = [
  {
    id: "k8s-certifications-1",
    post: "k8s-certifications",
    question: "CKA 시험에서 명령이 모두 성공했는데 그 문제가 0점이 나왔다. 가장 먼저 의심할 것은?",
    choices: [
      "kubectl 버전이 시험 클러스터와 달랐다",
      "YAML을 손으로 쓰지 않고 dry-run으로 뽑았다",
      "문제 첫 줄의 컨텍스트 전환이나 ssh를 건너뛰어 다른 클러스터에 만들었다",
      "kubectl explain으로 필드를 확인했다",
    ],
    answer: 2,
    explanation:
      "채점 스크립트는 문제가 지정한 클러스터와 네임스페이스의 상태만 본다. 다른 클러스터에 만들면 명령 출력은 정상이어도 점수가 없다. dry-run으로 뼈대를 뽑는 것은 점수와 상관없는 작업 방식이다.",
    anchor: "문제마다-컨텍스트부터-바꾼다",
  },
  {
    id: "k8s-certifications-2",
    post: "k8s-certifications",
    question: "kubectl create deployment web --image=nginx:1.27 --dry-run=client -o yaml로 뽑은 뼈대에서 컨테이너 이름은?",
    choices: ["web", "nginx", "web-0", "이름 칸이 비어 있다"],
    answer: 1,
    explanation:
      "create deployment는 컨테이너 이름을 이미지 이름에서 따와 nginx로 둔다. kubectl run web은 Pod 이름과 같은 web을 쓴다. 그래서 set image의 컨테이너 이름이나 문제의 이름 조건을 맞추려면 뽑은 뼈대를 확인해야 한다.",
    anchor: "yaml은-쓰지-말고-뽑는다",
  },
  {
    id: "k8s-certifications-3",
    post: "k8s-certifications",
    question: "--dry-run=client와 --dry-run=server의 차이로 맞는 것은?",
    choices: [
      "client는 API 서버에 보내지 않아 어드미션과 서버 검증을 거치지 않는다",
      "server는 객체를 실제로 저장한 뒤 바로 지운다",
      "client는 클러스터에 연결되지 않으면 실행되지 않는다",
      "둘은 출력 형식만 다르다",
    ],
    answer: 0,
    explanation:
      "client는 kubectl 안에서 객체를 만들어 출력만 한다. server는 API 서버까지 보내 검증과 변형 어드미션을 모두 돌리지만 저장은 하지 않는다. 시험에서 뼈대를 뽑을 때 client가 빠른 이유다.",
    anchor: "yaml은-쓰지-말고-뽑는다",
  },
  {
    id: "k8s-certifications-4",
    post: "k8s-certifications",
    question: "exam 네임스페이스에 Role과 RoleBinding을 만든 뒤 can-i로 검증한다. default 네임스페이스에서 list pods가 yes로 나왔다면?",
    choices: [
      "정상이다. RoleBinding은 모든 네임스페이스에 적용된다",
      "can-i는 네임스페이스를 무시하므로 의미가 없다",
      "Role 대신 ClusterRole을 만들어야 한다",
      "ClusterRoleBinding처럼 클러스터 범위로 권한을 잘못 묶었을 가능성이 크다",
    ],
    answer: 3,
    explanation:
      "Role과 RoleBinding은 그 네임스페이스 안에서만 통하므로 default에서는 no가 나와야 맞다. yes가 나오면 클러스터 범위로 권한을 준 것이다. 허용뿐 아니라 막혀야 할 곳이 막혔는지까지 봐야 검증이 끝난다.",
    anchor: "명령형으로-끝나는-문제들",
  },
  {
    id: "k8s-certifications-5",
    post: "k8s-certifications",
    question: "kwok 클러스터로 시험을 준비할 때 연습할 수 없는 것은?",
    choices: [
      "명령형으로 Deployment와 Role 만들기",
      "큰 requests로 Pending을 만들고 FailedScheduling 이벤트 읽기",
      "프로브 실패와 컨테이너 로그 보기",
      "롤아웃과 rollout history 보기",
    ],
    answer: 2,
    explanation:
      "kwok은 API 서버와 스케줄러, 컨트롤러는 진짜로 띄우지만 kubelet이 가짜라 컨테이너가 실제로 돌지 않는다. 그래서 로그, exec, 프로브, 네트워크 차단은 kind나 VM에서 연습한다.",
    anchor: "연습-환경은-셋으로-나눠-쓴다",
  },
  {
    id: "k8s-certifications-6",
    post: "k8s-certifications",
    question: "CKA v1.37 커리큘럼에서 비중이 가장 큰 영역은?",
    choices: [
      "Troubleshooting 30%",
      "클러스터 구조·설치·설정 25%",
      "서비스와 네트워킹 20%",
      "스토리지 10%",
    ],
    answer: 0,
    explanation:
      "Troubleshooting이 30%로 가장 크고, 구조·설치·설정이 25%로 뒤를 잇는다. 고장 난 노드와 부품을 고치는 연습이 준비 시간의 3분의 1쯤은 되어야 하는 이유다.",
    anchor: "영역-비중이-공부-순서를-정한다",
  },
  {
    id: "k8s-certifications-7",
    post: "k8s-certifications",
    question: "남은 문제를 고를 때 예상 시간이 남은 시간보다 긴 문제를 만나면 break로 멈추는 코드의 문제는?",
    choices: [
      "점수가 합격선을 넘어도 계속 풀게 된다",
      "뒤에 있는 짧은 문제까지 버리게 된다",
      "비율이 같은 문제의 순서가 바뀐다",
      "시간이 음수가 될 수 있다",
    ],
    answer: 1,
    explanation:
      "큰 문제 하나가 안 들어가도 그 뒤의 작은 문제는 들어갈 수 있다. continue로 건너뛰어야 남은 시간을 끝까지 쓴다. 시험장에서 긴 문제에 붙잡혀 뒤의 3분짜리 문제를 못 보는 실수와 같은 모양이다.",
    anchor: "120분을-나눠-쓰는-법",
  },
];
