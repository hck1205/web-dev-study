import type { QuizQuestion } from "../types";

export const K8S_SERVICE_TYPES: QuizQuestion[] = [
  {
    id: "k8s-service-types-1",
    post: "k8s-service-types",
    question: "NodePort Service 뒤의 앱 로그에 클라이언트 IP가 전부 노드 주소로 찍힌다. 왜 그런가?",
    choices: [
      "kubelet이 요청을 대신 받아 Pod에 넘기기 때문이다",
      "기본 externalTrafficPolicy(Cluster)는 다른 노드의 Pod로 넘길 수 있도록 출발지를 들어온 노드 주소로 SNAT한다",
      "CoreDNS가 클라이언트 주소를 노드 주소로 바꿔 답하기 때문이다",
      "NodePort는 L7 프록시라서 X-Forwarded-For에만 원래 주소를 남긴다",
    ],
    answer: 1,
    explanation:
      "Cluster 정책은 KUBE-EXT에서 무조건 MASQ 표시를 해서, 다른 노드의 Pod가 응답을 들어온 노드로 돌려보내게 만든다. 그 대가로 Pod는 노드 주소를 본다. kube-proxy는 패킷을 중계하지 않고 규칙만 쓰니 L7 헤더를 붙이지도 않는다.",
    anchor: "nodeport-모든-노드에-같은-문을-연다",
  },
  {
    id: "k8s-service-types-2",
    post: "k8s-service-types",
    question: "externalTrafficPolicy를 Local로 바꾼 뒤 특정 노드로 들어온 요청만 시간 초과가 난다. 무엇이 일어나고 있나?",
    choices: [
      "그 노드에 이 Service의 ready Pod가 없어서 '… has no local endpoints' DROP 규칙에 걸린다",
      "Local 정책은 노드 포트를 하나의 노드에만 열기 때문이다",
      "conntrack 테이블이 노드마다 따로라서 응답이 섞인다",
      "Local 정책에서는 ClusterIP가 사라져 DNS가 실패한다",
    ],
    answer: 0,
    explanation:
      "Local은 들어온 노드의 Pod로만 보내므로 Pod가 없는 노드에는 보낼 곳이 없고 kube-proxy가 버린다. 그래서 앞단 로드 밸런서가 healthCheckNodePort로 Pod 없는 노드를 빼 주는 구성에서 써야 한다.",
    anchor: "externaltrafficpolicy-local",
  },
  {
    id: "k8s-service-types-3",
    post: "k8s-service-types",
    question: "selector에 오타가 있는 Service의 ClusterIP로 curl을 보내면 기다림 없이 'Couldn't connect to server'로 끝난다. 이 증상이 가리키는 것은?",
    choices: [
      "Pod가 targetPort에서 듣고 있지 않다",
      "NetworkPolicy가 패킷을 버리고 있다",
      "엔드포인트가 비어 kube-proxy가 그 VIP 포트를 REJECT한다",
      "노드 사이 라우팅이 끊겼다",
    ],
    answer: 2,
    explanation:
      "엔드포인트가 없으면 kube-proxy는 filter 테이블에 '… has no endpoints' REJECT 규칙을 넣어 바로 거절한다. targetPort가 틀리면 DNAT 후 Pod가 RST를 돌려주고, 버려지는 경우(NetworkPolicy, 경로 끊김)는 시간 초과로 보인다.",
    anchor: "엔드포인트가-없을-때와-포트가-틀렸을-때",
  },
  {
    id: "k8s-service-types-4",
    post: "k8s-service-types",
    question: "Pod 하나의 Ready가 False가 됐다. `kubectl get endpointslices`의 ENDPOINTS 칸에는 여전히 세 주소가 다 보인다. 트래픽은 어떻게 되나?",
    choices: [
      "세 Pod 모두로 계속 간다",
      "ENDPOINTS 칸은 준비 여부를 가리지 않으므로, 실제로는 conditions.ready가 true인 두 Pod로만 간다",
      "EndpointSlice가 다시 만들어질 때까지 모든 트래픽이 멈춘다",
      "Ready가 아닌 Pod로는 가지만 SNAT 없이 간다",
    ],
    answer: 1,
    explanation:
      "요약 목록은 주소를 모두 찍지만 kube-proxy와 CoreDNS는 ready 조건을 보고 고른다. 그래서 headless DNS 답에서도 그 Pod가 빠진다. 엔드포인트 상태는 conditions까지 봐야 한다.",
    anchor: "엔드포인트가-없을-때와-포트가-틀렸을-때",
  },
  {
    id: "k8s-service-types-5",
    post: "k8s-service-types",
    question: "외부 HTTPS API를 ExternalName Service `payments`로 감싸 `https://payments/`로 호출했더니 인증서 오류가 난다. 원인은?",
    choices: [
      "ExternalName은 TCP만 중계하고 TLS는 중계하지 못한다",
      "kube-proxy가 TLS를 종료하면서 자기 인증서를 쓴다",
      "CoreDNS가 CNAME 대신 ClusterIP를 돌려준다",
      "DNS만 CNAME으로 바뀌고 앱은 SNI와 Host에 짧은 이름 payments를 실어 보내서, 상대 인증서의 이름과 맞지 않는다",
    ],
    answer: 3,
    explanation:
      "ExternalName은 DNS에서 CNAME만 돌려주고 아무것도 중계하지 않는다. 연결은 앱이 직접 맺으니 TLS와 HTTP에는 앱이 접속한 이름이 실린다. 원래 이름으로 SNI와 Host를 보내도록 설정할 수 없다면 ExternalName이 맞지 않는다.",
    anchor: "headless와-externalname-가상-ip-없이-이름만",
  },
  {
    id: "k8s-service-types-6",
    post: "k8s-service-types",
    question: "온프레미스 클러스터에서 LoadBalancer Service의 EXTERNAL-IP가 계속 <pending>이다. 가장 그럴듯한 이유는?",
    choices: [
      "로드 밸런서를 만들고 status에 주소를 적어 줄 컨트롤러(클라우드 컨트롤러나 MetalLB)가 없다",
      "nodePort 범위가 바닥났다",
      "kube-proxy가 IPVS 모드가 아니다",
      "Service에 selector가 없다",
    ],
    answer: 0,
    explanation:
      "쿠버네티스는 NodePort까지만 만들고 바깥 로드 밸런서는 컨트롤러가 만든다. 컨트롤러가 없으면 controller-manager가 'no cloud provider provided' 경고를 남기고 status는 비어 있다. 그동안에도 노드 포트로는 접속된다.",
    anchor: "loadbalancer-바깥-로드-밸런서를-붙이는-약속",
  },
  {
    id: "k8s-service-types-7",
    post: "k8s-service-types",
    question: "같은 노드에서 Pod가 자기 Service의 ClusterIP로 접속했는데 DNAT이 자기 자신을 골랐다. Pod가 본 출발지가 노드의 cni0 주소인 이유는?",
    choices: [
      "ClusterIP 연결은 항상 SNAT되기 때문이다",
      "브리지가 같은 포트로 돌아오는 프레임의 MAC을 바꾸기 때문이다",
      "출발지와 목적지가 같으면 응답이 성립하지 않아 KUBE-SEP의 '-s 자기IP' 줄이 SNAT 표시를 하기 때문이다",
      "CoreDNS가 자기 자신을 가리키는 답을 피하려고 노드 주소를 주기 때문이다",
    ],
    answer: 2,
    explanation:
      "헤어핀 경우에 출발지를 그대로 두면 Pod가 자기 자신에게 응답을 보내 연결이 깨진다. 그래서 그 경우에만 MASQUERADE해서 응답이 노드를 거치게 한다. 다른 Pod로 간 연결은 출발지가 원래 Pod IP 그대로였다.",
    anchor: "clusterip-어느-장치에도-없는-주소",
  },
];
