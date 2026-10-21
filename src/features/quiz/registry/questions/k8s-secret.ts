import type { QuizQuestion } from "../types";

export const K8S_SECRET: QuizQuestion[] = [
  {
    id: "k8s-secret-1",
    post: "k8s-secret",
    question: "Secret의 data에 들어 있는 czNjcjN0LVByMGQh 같은 값에 대한 설명으로 맞는 것은?",
    choices: [
      "API 서버의 키로 암호화된 값이라 키 없이는 풀 수 없다",
      "etcd에 저장될 때 자동으로 해시된 값이다",
      "base64로 인코딩했을 뿐이라 누구나 base64 -d로 원래 값을 얻는다",
      "kubelet만 풀 수 있는 형식이다",
    ],
    answer: 2,
    explanation:
      "base64는 바이너리 값을 글자로 옮기는 인코딩이고 키가 없다. 그래서 Secret을 읽을 수 있는 사람은 곧 값을 아는 사람이다. 보호는 RBAC와 저장 시 암호화가 맡는다.",
    anchor: "base64는-암호가-아니다",
  },
  {
    id: "k8s-secret-2",
    post: "k8s-secret",
    question: "API 서버에 암호화 설정을 켠 뒤 etcd를 보니 새 Secret은 k8s:enc:로 시작하는데 예전 Secret은 여전히 평문이다. 무엇을 해야 하나?",
    choices: [
      "모든 Secret을 한 번씩 다시 써서(get 후 replace) 새 설정으로 저장되게 한다",
      "etcd를 재시작하면 기존 값도 암호화된다",
      "identity provider를 목록 맨 위로 올린다",
      "API 서버를 한 번 더 재시작하면 자동으로 바뀐다",
    ],
    answer: 0,
    explanation:
      "암호화 설정은 앞으로 쓰는 값에만 적용된다. kubectl get secrets -A -o json | kubectl replace -f -처럼 다시 써야 맨 위 provider로 암호화된다. identity를 맨 위에 두면 오히려 새 값이 평문으로 저장된다.",
    anchor: "api-서버가-etcd에-쓰기-전에-암호화하기",
  },
  {
    id: "k8s-secret-3",
    post: "k8s-secret",
    question: "대시보드용 ServiceAccount에 Secret의 list 권한만 주었다. 이 권한으로 할 수 있는 것은?",
    choices: [
      "Secret 이름 목록만 볼 수 있고 값은 볼 수 없다",
      "list 응답에 data가 들어 있어 사실상 모든 Secret의 값을 읽을 수 있다",
      "get 권한이 없으니 아무것도 볼 수 없다",
      "describe처럼 각 값의 바이트 수만 볼 수 있다",
    ],
    answer: 1,
    explanation:
      "list와 watch의 응답에는 각 Secret 객체가 data까지 통째로 들어 있다. 실습에서도 get은 Forbidden인데 list로 비밀번호가 나왔다. 앱에는 resourceNames로 이름을 못 박은 get만 준다.",
    anchor: "누가-secret을-읽을-수-있나",
  },
  {
    id: "k8s-secret-4",
    post: "k8s-secret",
    question: "stringData로 쓴 Secret YAML을 kubectl apply로 올렸다. 나중에 kubectl get secret -o yaml을 장애 티켓에 붙였을 때 생기는 문제는?",
    choices: [
      "stringData가 data를 덮어써서 값이 사라진다",
      "base64가 두 번 적용돼 값이 깨진다",
      "stringData는 저장되지 않아 Secret이 비어 있다",
      "last-applied-configuration 어노테이션에 평문 비밀번호가 그대로 남아 함께 노출된다",
    ],
    answer: 3,
    explanation:
      "클라이언트 쪽 apply는 적용한 원본 전체를 last-applied-configuration 어노테이션에 저장한다. stringData의 평문이 그대로 들어간다. 서버 쪽 apply나 kubectl create는 이 어노테이션을 만들지 않는다.",
    anchor: "stringdata와-last-applied에-남는-평문",
  },
  {
    id: "k8s-secret-5",
    post: "k8s-secret",
    question: "Secret을 환경 변수 대신 볼륨 파일로 넣을 때의 장점이 아닌 것은?",
    choices: [
      "Secret을 바꾸면 kubelet이 지연을 두고 파일을 갱신한다",
      "Pod를 만들 권한이 있는 사람도 그 Secret을 읽을 수 없게 된다",
      "자식 프로세스나 /proc/PID/environ, 설정 로그로 새는 일이 줄어든다",
      "노드의 tmpfs에 쓰여 파일 권한으로 읽는 사람을 좁힐 수 있다",
    ],
    answer: 1,
    explanation:
      "넣는 방식과 상관없이 Pod를 만들 수 있는 사람은 아무 Secret이나 마운트한 Pod를 띄워 읽을 수 있다. 파일로 넣는 장점은 새는 길이 줄고 갱신된다는 것이다. 강하게 나누려면 네임스페이스를 나눈다.",
    anchor: "환경-변수로-넣을까-파일로-넣을까",
  },
  {
    id: "k8s-secret-6",
    post: "k8s-secret",
    question: "ECR 토큰으로 만든 imagePullSecrets로 잘 돌던 클러스터가 반나절 뒤 새 노드에서만 ImagePullBackOff를 낸다. 원인으로 가장 그럴듯한 것은?",
    choices: [
      "ECR 로그인 토큰이 12시간 뒤 만료됐고, 이미 이미지를 받아 둔 노드만 멀쩡해 보인다",
      "새 노드에는 ServiceAccount가 없다",
      "dockerconfigjson Secret은 노드마다 하나씩 따로 만들어야 한다",
      "imagePullSecrets는 Deployment에만 쓸 수 있다",
    ],
    answer: 0,
    explanation:
      "ECR 토큰은 12시간짜리라 그 뒤로는 401을 받는다. 이미 받아 둔 이미지는 다시 받지 않으니 기존 노드는 멀쩡하고, 새 노드나 새 이미지에서만 실패한다. EKS에서는 노드 IAM 역할로 받게 하고, 다른 환경에서는 토큰을 주기적으로 갱신한다.",
    anchor: "레지스트리-인증-imagepullsecrets",
  },
];
