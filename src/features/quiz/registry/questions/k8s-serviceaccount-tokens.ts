import type { QuizQuestion } from "../types";

export const K8S_SERVICEACCOUNT_TOKENS: QuizQuestion[] = [
  {
    id: "k8s-serviceaccount-tokens-1",
    post: "k8s-serviceaccount-tokens",
    question: "kubernetes.io/service-account-token 타입 Secret에 든 옛 토큰이 위험한 가장 큰 이유는?",
    choices: [
      "서명 알고리즘이 HS256이라 쉽게 위조된다",
      "exp와 aud가 없고 etcd에 저장돼서, 꺼낸 사람은 Secret이 지워질 때까지 어디서든 쓸 수 있다",
      "Pod가 재시작될 때마다 값이 바뀌어 앱이 끊긴다",
      "RBAC 권한이 무시되고 cluster-admin으로 동작한다",
    ],
    answer: 1,
    explanation:
      "디코드해 보면 옛 토큰에는 만료와 받는 쪽이 없고, 어느 Pod에도 묶여 있지 않다. Secret으로 저장되니 list 권한이나 etcd 백업으로도 샌다. 권한 자체는 다른 토큰처럼 RBAC가 정한다.",
    anchor: "옛-방식-secret에-든-영구-토큰",
  },
  {
    id: "k8s-serviceaccount-tokens-2",
    post: "k8s-serviceaccount-tokens",
    question: "Pod 안의 /var/run/secrets/kubernetes.io/serviceaccount/token 파일은 어떻게 만들어지나?",
    choices: [
      "ServiceAccount를 만들 때 생긴 Secret을 kubelet이 그대로 마운트한다",
      "컨테이너 런타임이 이미지 안에 미리 넣어 둔다",
      "kubelet이 TokenRequest로 그 Pod에 묶인 토큰을 받아 tmpfs에 쓴다",
      "API 서버가 Pod를 만들 때 etcd에 토큰을 저장하고 노드가 복사해 간다",
    ],
    answer: 2,
    explanation:
      "어드미션 플러그인이 kube-api-access projected 볼륨을 넣고, kubelet이 TokenRequest로 Pod에 묶인 토큰을 받아 메모리 파일 시스템에 쓴다. 토큰은 서명만 될 뿐 etcd에 저장되지 않는다.",
    anchor: "pod-안의-토큰은-어디서-오나",
  },
  {
    id: "k8s-serviceaccount-tokens-3",
    post: "k8s-serviceaccount-tokens",
    question:
      "kubelet이 3607초 토큰을 요청했는데 토큰 안의 exp는 1년 뒤다. 왜 이렇게 될까?",
    choices: [
      "API 서버가 오래된 클라이언트가 갑자기 끊기지 않게 수명을 늘리고, warnafter에 원래 만료를 적어 두기 때문에",
      "kwok 같은 테스트 클러스터에서만 생기는 버그라서",
      "3607은 최대값을 뜻하는 특수 값이라서",
      "kubelet이 토큰을 갱신하지 않기 때문에 API 서버가 대신 길게 준다",
    ],
    answer: 0,
    explanation:
      "--service-account-extend-token-expiration이 켜져 있으면 3607초 요청을 1년으로 늘린다. TokenRequest 응답의 만료 시각은 여전히 1시간 뒤라 kubelet은 제때 갱신한다. warnafter 이후에 쓰인 토큰은 stale-token으로 기록된다.",
    anchor: "1시간짜리-토큰이-1년을-사는-이유",
  },
  {
    id: "k8s-serviceaccount-tokens-4",
    post: "k8s-serviceaccount-tokens",
    question:
      "Pod에 묶인 토큰 파일을 누군가 복사해 갔다. Pod를 지우면 그 토큰은 어떻게 되나?",
    choices: [
      "exp까지는 계속 유효하다",
      "API 서버가 검증할 때 묶인 Pod가 없음을 확인하고 무효로 처리한다",
      "토큰을 쓰려면 같은 노드에서만 가능하니 안전하다",
      "Secret을 지워야만 무효가 된다",
    ],
    answer: 1,
    explanation:
      "바운드 토큰은 서명뿐 아니라 토큰에 적힌 Pod가 아직 있는지와 UID를 확인한다. 실습에서는 지운 뒤 십여 초 안에 service account token has been invalidated로 거절됐다. Pod 없이 받은 토큰은 SA에만 묶여 이 방식으로 회수되지 않는다.",
    anchor: "pod가-지워지면-토큰도-죽는다",
  },
  {
    id: "k8s-serviceaccount-tokens-5",
    post: "k8s-serviceaccount-tokens",
    question: "Vault 로그인에 쓸 토큰을 audience vault로 따로 받는 이유는?",
    choices: [
      "Vault는 RS256 서명을 검증하지 못해서",
      "기본 토큰은 10분보다 짧아서 Vault가 쓰기에 부족해서",
      "Vault가 토큰을 재사용해 API 서버를 부르지 못하게 하려고",
      "audience가 없으면 TokenReview를 쓸 수 없어서",
    ],
    answer: 2,
    explanation:
      "aud가 vault인 토큰은 API 서버가 자기 audience가 아니라며 거절한다. 그래서 Vault가 털려 토큰이 새도 API 서버는 안전하다. 받는 쪽도 서명만 보지 말고 aud를 꼭 확인해야 한다.",
    anchor: "audience로-받는-쪽을-정한다",
  },
  {
    id: "k8s-serviceaccount-tokens-6",
    post: "k8s-serviceaccount-tokens",
    question:
      "default ServiceAccount에 automountServiceAccountToken: false를 두고 Pod에는 true를 적었다. 결과는?",
    choices: [
      "SA 설정이 우선해서 토큰이 들어가지 않는다",
      "둘이 충돌해 Pod 생성이 거절된다",
      "토큰은 들어가지만 RBAC 권한이 모두 사라진다",
      "Pod 설정이 우선해서 토큰 볼륨이 들어간다",
    ],
    answer: 3,
    explanation:
      "SA의 값은 기본값이고 Pod에 적은 값이 이긴다. 실습에서도 needs-api Pod에만 kube-api-access 볼륨이 들어갔다. 그래서 SA에서 끄고 API가 필요한 Pod만 켜는 방식이 깔끔하다.",
    anchor: "필요-없으면-마운트하지-않는다",
  },
  {
    id: "k8s-serviceaccount-tokens-7",
    post: "k8s-serviceaccount-tokens",
    question: "IRSA에서 AWS STS는 Pod의 토큰을 어떻게 검증하나?",
    choices: [
      "클러스터의 OIDC 발급자가 공개한 JWKS로 서명을 보고, 신뢰 정책의 sub·aud 조건을 비교한다",
      "매번 클러스터 API 서버에 TokenReview를 보낸다",
      "노드의 IAM 역할로 토큰을 복호화한다",
      "토큰 안에 든 AWS 액세스 키를 꺼내 쓴다",
    ],
    answer: 0,
    explanation:
      "바운드 토큰은 OIDC 형식이라 발급자의 디스커버리 문서와 공개 키로 누구나 검증할 수 있다. STS는 서명을 확인한 뒤 sub가 system:serviceaccount:shop:orders인지, aud가 sts.amazonaws.com인지 조건과 비교한다. sub 조건을 넓히면 다른 SA도 역할을 맡게 된다.",
    anchor: "클러스터-밖에서-이-토큰을-믿게-하기",
  },
];
