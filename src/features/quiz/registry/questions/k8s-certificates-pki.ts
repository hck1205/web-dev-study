import type { QuizQuestion } from "../types";

export const K8S_CERTIFICATES_PKI: QuizQuestion[] = [
  {
    id: "k8s-certificates-pki-1",
    post: "k8s-certificates-pki",
    question: "kubeadm이 etcd용 CA를 클러스터 CA와 따로 두는 가장 큰 이유는?",
    choices: [
      "etcd가 RSA가 아닌 다른 알고리즘만 지원해서",
      "클러스터 CA가 서명한 아무 클라이언트 인증서로 etcd에 직접 붙어 RBAC을 건너뛰는 일을 막으려고",
      "etcd 인증서의 유효 기간을 더 길게 잡으려고",
      "etcd는 TLS를 쓰지 않아서 CA가 필요 없기 때문에",
    ],
    answer: 1,
    explanation:
      "etcd에는 모든 Secret을 포함한 클러스터 상태가 평문에 가깝게 들어 있다. 같은 CA를 믿으면 개발자에게 발급한 인증서로도 etcd에 붙을 수 있다. 실습에서도 etcd 서버 인증서는 클러스터 CA로 검증되지 않았다.",
    anchor: "ca-세-개와-인증서-열-개",
  },
  {
    id: "k8s-certificates-pki-2",
    post: "k8s-certificates-pki",
    question: "API 서버가 클라이언트 인증서 `CN=jiwoo, O=dev`를 받았다. 이 인증서가 정하는 것은?",
    choices: [
      "사용자 jiwoo, 그룹 dev라는 신분. 권한은 RBAC이 따로 준다",
      "jiwoo가 dev 네임스페이스의 관리자라는 권한",
      "jiwoo가 접속할 수 있는 API 서버 주소",
      "jiwoo의 토큰 만료 시간",
    ],
    answer: 0,
    explanation:
      "CN은 사용자 이름, O는 그룹으로 쓰인다. 인증서는 신분만 정하고, 실습에서도 jiwoo는 인증서로 로그인했지만 pods list는 forbidden이었다. 예외는 O=system:masters로, RBAC을 거치지 않고 모든 권한을 받는다.",
    anchor: "사람에게-인증서-발급하기",
  },
  {
    id: "k8s-certificates-pki-3",
    post: "k8s-certificates-pki",
    question:
      "설치 1년 뒤 아침, kubectl이 `error: You must be logged in to the server (Unauthorized)`만 낸다. 무엇을 먼저 확인하나?",
    choices: [
      "RBAC RoleBinding이 지워졌는지",
      "kubeconfig의 클라이언트 인증서 만료일과 kubeadm certs check-expiration",
      "CoreDNS가 살아 있는지",
      "노드의 디스크 사용량",
    ],
    answer: 1,
    explanation:
      "만료된 클라이언트 인증서는 클라이언트 쪽에 Unauthorized 한 줄만 남기고, 진짜 이유(x509: certificate has expired)는 API 서버 로그에 있다. RBAC 문제라면 Forbidden이 나온다. kubeadm 인증서는 기본 1년이라 1년 뒤라는 단서가 중요하다.",
    anchor: "1년-뒤-아침에-일어나는-일",
  },
  {
    id: "k8s-certificates-pki-4",
    post: "k8s-certificates-pki",
    question: "`kubeadm certs renew all`을 실행했다. 그다음 꼭 해야 하는 일은?",
    choices: [
      "아무것도 없다. 구성 요소가 새 파일을 바로 읽는다",
      "CA도 새로 만든다",
      "kube-apiserver, controller-manager, scheduler, etcd를 다시 띄우고 새 admin.conf를 배포한다",
      "모든 워커 노드를 다시 kubeadm join한다",
    ],
    answer: 2,
    explanation:
      "renew는 파일만 바꾸고, 떠 있는 프로세스는 옛 인증서를 메모리에 들고 있다. 명령 출력도 restart를 하라고 알려 준다. CA는 10년짜리라 그대로 두고, 컨트롤 플레인이 여러 대면 etcd 쿼럼을 지키며 한 대씩 재시작한다.",
    anchor: "갱신하기",
  },
  {
    id: "k8s-certificates-pki-5",
    post: "k8s-certificates-pki",
    question: "kubeadm certs check-expiration 목록에 kubelet.conf가 없는 이유는?",
    choices: [
      "kubelet은 인증서 없이 토큰으로만 API 서버에 접속해서",
      "kubelet 클라이언트 인증서는 kubelet이 CSR로 스스로 갱신해서 kubeadm이 관리하지 않기 때문에",
      "kubelet 인증서는 만료되지 않아서",
      "워커 노드에서만 확인할 수 있어서",
    ],
    answer: 1,
    explanation:
      "rotateCertificates가 켜진 kubelet은 만료 전에 새 키로 CSR을 내고, csrapproving 컨트롤러가 자기 노드 요청임을 확인해 자동 승인한다. 실습에서도 system:node:node-1의 CSR이 AutoApproved로 3초 만에 발급됐다. 노드가 만료 뒤까지 꺼져 있었다면 자동 갱신이 안 된다.",
    anchor: "kubelet은-스스로-갱신한다",
  },
  {
    id: "k8s-certificates-pki-6",
    post: "k8s-certificates-pki",
    question: "퇴사자에게 1년짜리 클라이언트 인증서를 발급했었다. CSR 객체를 지우면?",
    choices: [
      "인증서가 즉시 폐기된다",
      "다음 API 서버 재시작 때 폐기된다",
      "인증서는 만료일까지 계속 유효하다. RBAC 바인딩을 지워야 권한이 사라진다",
      "CA가 자동으로 교체된다",
    ],
    answer: 2,
    explanation:
      "쿠버네티스는 클라이언트 인증서 폐기 목록을 확인하지 않는다. 실습에서도 CSR을 지운 뒤 auth whoami가 그대로 jiwoo를 보여 줬다. 그래서 사람에게는 짧은 expirationSeconds를 주거나 OIDC 같은 외부 인증을 쓴다.",
    anchor: "사람에게-인증서-발급하기",
  },
  {
    id: "k8s-certificates-pki-7",
    post: "k8s-certificates-pki",
    question:
      "API 서버 앞에 새 로드 밸런서 IP를 붙였더니 `x509: certificate is valid for ..., not 10.0.0.200`이 난다. 올바른 해결은?",
    choices: [
      "kubeconfig에 insecure-skip-tls-verify: true를 넣는다",
      "certSANs에 새 IP를 더하고 apiserver 인증서를 다시 만든 뒤 API 서버를 재시작한다",
      "클러스터 CA를 새로 만든다",
      "kubectl을 최신 버전으로 올린다",
    ],
    answer: 1,
    explanation:
      "클라이언트는 접속한 주소가 서버 인증서의 SAN에 있어야 받아들인다. kubeadm이면 ClusterConfiguration의 apiServer.certSANs에 주소를 더해 apiserver 인증서만 다시 만들면 된다. 검증을 끄면 중간자 공격을 막는 장치를 버리는 것이다.",
    anchor: "인증서-한-장-읽기",
  },
];
