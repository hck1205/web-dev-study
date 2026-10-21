import type { QuizQuestion } from "../types";

export const KUBECONFIG_CONTEXTS: QuizQuestion[] = [
  {
    id: "kubeconfig-contexts-1",
    post: "kubeconfig-contexts",
    question: "터미널 A에서 kubectl config use-context prod를 쳤더니 터미널 B의 kubectl도 prod를 본다. 왜 그런가?",
    choices: [
      "kubectl이 백그라운드 데몬으로 상태를 공유해서",
      "current-context가 두 터미널이 함께 읽는 kubeconfig 파일에 적혀 있어서",
      "API 서버가 사용자별로 마지막 컨텍스트를 기억해서",
      "셸 환경 변수가 터미널 사이에 복사돼서",
    ],
    answer: 1,
    explanation:
      "use-context는 셸 상태가 아니라 파일의 current-context 한 줄을 고친다. kubectl은 실행할 때마다 파일을 다시 읽으니 같은 파일을 쓰는 모든 터미널이 바뀐다. 터미널마다 다른 KUBECONFIG를 쓰거나 --context를 명시해 막는다.",
    anchor: "엉뚱한-클러스터에-명령이-닿는-길",
  },
  {
    id: "kubeconfig-contexts-2",
    post: "kubeconfig-contexts",
    question:
      "KUBECONFIG=dev.yaml:prod.yaml로 합친 뒤 --context=prod로 요청하니 401 Unauthorized가 난다. 각 파일은 따로 쓰면 잘 된다. 가장 그럴듯한 원인은?",
    choices: [
      "두 파일의 사용자 이름이 같아서 앞 파일(dev)의 자격 증명이 이겼다",
      "prod 파일이 KUBECONFIG에서 무시됐다",
      "합치면 인증서가 자동으로 만료된다",
      "prod API 서버가 꺼졌다",
    ],
    answer: 0,
    explanation:
      "합칠 때 같은 이름의 항목은 먼저 나온 파일의 것만 남는다. prod 컨텍스트가 prod 서버로 가면서도 dev CA가 발급한 인증서를 내밀어 401이 된다. 사용자와 클러스터 이름에 클러스터 이름을 붙여 겹치지 않게 짓는다.",
    anchor: "kubeconfig로-여러-파일-합치기",
  },
  {
    id: "kubeconfig-contexts-3",
    post: "kubeconfig-contexts",
    question: "kubeconfig가 없을 때 kubectl get pods가 내는 메시지는?",
    choices: [
      "error: You must be logged in to the server (Unauthorized)",
      "Error in configuration: context was not found",
      "The connection to the server localhost:8080 was refused",
      "No resources found in default namespace.",
    ],
    answer: 2,
    explanation:
      "파일을 하나도 못 찾으면 kubectl은 예전 기본값인 localhost:8080으로 간다. API 서버 장애로 오해하기 쉬운데, 이 메시지는 kubeconfig를 못 찾았다는 뜻이라 KUBECONFIG와 ~/.kube부터 본다.",
    anchor: "kubectl이-설정을-고르는-순서",
  },
  {
    id: "kubeconfig-contexts-4",
    post: "kubeconfig-contexts",
    question: "Unable to connect to the server: getting credentials: exec: ... failed with exit code 1 이 나왔다. 먼저 볼 것은?",
    choices: [
      "API 서버로 가는 방화벽",
      "Pod의 ServiceAccount 권한",
      "클러스터의 DNS",
      "자격 증명 플러그인의 로그인 상태와 설치 여부",
    ],
    answer: 3,
    explanation:
      "getting credentials 단계는 kubectl이 서버에 요청을 보내기 전에 exec 플러그인을 실행하는 부분이다. 플러그인이 없거나 SSO 세션이 끝나 실패한 것이니 네트워크보다 플러그인 쪽을 먼저 본다.",
    anchor: "비밀-대신-명령을-적는-exec-플러그인",
  },
  {
    id: "kubeconfig-contexts-5",
    post: "kubeconfig-contexts",
    question: "kubeconfig에 인증서 대신 exec 플러그인을 쓰는 가장 큰 이유는?",
    choices: [
      "요청이 더 빨라져서",
      "파일에 오래 사는 비밀을 두지 않고 짧게 사는 자격 증명을 그때그때 받으려고",
      "API 서버가 인증서를 지원하지 않아서",
      "RBAC를 쓰지 않아도 돼서",
    ],
    answer: 1,
    explanation:
      "파일에는 실행할 명령만 남고, 토큰은 IAM이나 SSO 세션으로 매번 짧게 받는다. 파일이 새도 그 세션이 없으면 쓸 수 없다. 반대로 인증서를 넣은 파일은 그 자체가 열쇠다.",
    anchor: "비밀-대신-명령을-적는-exec-플러그인",
  },
  {
    id: "kubeconfig-contexts-6",
    post: "kubeconfig-contexts",
    question: "운영 클러스터에 실수로 delete를 치는 사고를 가장 확실하게 막는 장치는?",
    choices: [
      "kubectx로 빠르게 전환한다",
      "kubeconfig를 하나로 합친다",
      "운영의 기본 컨텍스트를 읽기 전용 권한 사용자로 둔다",
      "current-context를 자주 바꾼다",
    ],
    answer: 2,
    explanation:
      "프롬프트와 터미널별 파일은 실수를 줄여 주지만, 실수를 쳤을 때 막는 것은 권한이다. 읽기 전용 사용자라면 delete가 Forbidden으로 끝난다. kubectx도 결국 파일을 고치니 전환이 편해질수록 사고가 쉬워진다.",
    anchor: "실수를-막는-장치들",
  },
];
