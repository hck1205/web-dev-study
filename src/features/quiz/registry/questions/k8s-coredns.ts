import type { QuizQuestion } from "../types";

export const K8S_COREDNS: QuizQuestion[] = [
  {
    id: "k8s-coredns-1",
    post: "k8s-coredns",
    question: "기본 설정(ndots:5, search 세 개)의 Pod가 `api.example.com`을 getaddrinfo로 풀 때 CoreDNS에 들어오는 질의 수는?",
    choices: [
      "2개 (A, AAAA)",
      "4개 (search 셋 + 원래 이름, A만)",
      "6개 (search 셋 × A·AAAA)",
      "8개 (search 셋 + 원래 이름, 각각 A·AAAA)",
    ],
    answer: 3,
    explanation:
      "점이 2개라 ndots 5보다 적으니 search 도메인 셋을 먼저 붙여 보고 마지막에 원래 이름을 묻는다. 이름마다 A와 AAAA를 함께 물어 8개가 되고, 그중 6개는 NXDOMAIN이다.",
    anchor: "이름-하나에-질의-여덟-개",
  },
  {
    id: "k8s-coredns-2",
    post: "k8s-coredns",
    question: "Pod의 dnsConfig로 ndots를 2로 낮췄을 때 생기는 부작용으로 알맞은 것은?",
    choices: [
      "같은 네임스페이스의 짧은 Service 이름이 더는 풀리지 않는다",
      "점이 둘 이상인 클러스터 안 이름(web.shop.svc 등)이 바깥 DNS에 먼저 물어진 뒤 search로 돌아온다",
      "AAAA 질의가 사라진다",
      "CoreDNS 캐시가 꺼진다",
    ],
    answer: 1,
    explanation:
      "점 개수가 ndots 이상이면 이름 그대로 먼저 묻는다. 바깥 이름에는 좋지만, 점이 많은 클러스터 안 이름은 먼저 바깥으로 나가 NXDOMAIN을 받고 나서야 search로 풀린다. 짧은 이름은 여전히 search로 풀린다.",
    anchor: "왜-5인가-그리고-줄이는-법",
  },
  {
    id: "k8s-coredns-3",
    post: "k8s-coredns",
    question: "Pod의 이름 풀이가 가끔 정확히 5초씩 늦는다. 가장 그럴듯한 설명은?",
    choices: [
      "같은 소켓으로 동시에 나간 A·AAAA UDP 질의 중 하나가 DNAT·conntrack 과정에서 버려져 리졸버가 timeout 5초를 기다렸다",
      "CoreDNS의 cache 30 설정 때문에 5초마다 캐시를 비운다",
      "kube-proxy가 5초마다 규칙을 다시 쓰기 때문이다",
      "ndots 값이 5라서 5초씩 기다린다",
    ],
    answer: 0,
    explanation:
      "glibc는 A와 AAAA를 한 소켓으로 나란히 보내고, ClusterIP로 DNAT될 때 conntrack 항목 삽입이 겹치면 하나가 버려질 수 있었다. 리졸버는 응답을 기본 timeout 5초만큼 기다린 뒤 다시 묻는다. ndots의 5는 점 개수 기준일 뿐 시간이 아니다.",
    anchor: "가끔-5초씩-늦는-이름-풀이",
  },
  {
    id: "k8s-coredns-4",
    post: "k8s-coredns",
    question: "NodeLocal DNSCache가 CoreDNS로 질의를 보낼 때 force_tcp를 쓰는 이유는?",
    choices: [
      "CoreDNS가 UDP를 지원하지 않아서",
      "TCP가 UDP보다 항상 빠르기 때문에",
      "UDP conntrack 항목과 그 경쟁 상태를 피하고, 잃은 질의를 TCP가 다시 보내게 하려고",
      "DNSSEC 서명을 확인하려고",
    ],
    answer: 2,
    explanation:
      "노드 캐시의 목적 중 하나가 UDP 질의가 conntrack과 DNAT을 지나며 버려지는 문제를 없애는 것이다. Pod와 캐시 사이는 NOTRACK으로 conntrack을 건너뛰고, 캐시에서 CoreDNS로는 TCP 연결을 써서 재전송을 TCP에 맡긴다.",
    anchor: "노드마다-캐시를-둔다",
  },
  {
    id: "k8s-coredns-5",
    post: "k8s-coredns",
    question: "Ubuntu 노드에서 CoreDNS Pod가 '[FATAL] plugin/loop: Loop ... detected'로 재시작을 반복한다. 알맞은 해결은?",
    choices: [
      "Corefile에서 loop 플러그인을 지운다",
      "kubelet의 resolvConf를 실제 업스트림이 적힌 /run/systemd/resolve/resolv.conf로 지정한다",
      "CoreDNS 레플리카를 늘린다",
      "ndots를 1로 낮춘다",
    ],
    answer: 1,
    explanation:
      "노드의 resolv.conf가 systemd-resolved의 127.0.0.53을 가리키면, 그걸 물려받은 CoreDNS의 forward가 Pod 자신의 루프백으로 가서 자기에게 묻게 된다. 업스트림이 적힌 파일을 kubelet에 지정하면 풀린다. loop를 지우면 질의가 끝없이 도는 상태를 숨길 뿐이다.",
    anchor: "coredns가-스스로-죽는-경우",
  },
  {
    id: "k8s-coredns-6",
    post: "k8s-coredns",
    question: "Service를 만든 직후 몇 초 동안 그 이름이 NXDOMAIN으로 풀린다. 왜 그런가?",
    choices: [
      "EndpointSlice가 만들어지기 전에는 DNS 레코드가 영원히 생기지 않는다",
      "CoreDNS가 API 서버를 1분마다만 조회한다",
      "kube-proxy 규칙이 생기기 전까지 DNS가 막힌다",
      "만들기 직전에 받은 NXDOMAIN이 CoreDNS·노드 캐시·앱의 negative 캐시에 남아 있다",
    ],
    answer: 3,
    explanation:
      "CoreDNS는 API 서버를 watch하므로 새 Service를 곧바로 안다. 다만 직전에 같은 이름으로 받은 '없다'는 답이 SOA의 negative TTL이나 cache의 denial 시간만큼 캐시에 남는다. NodeLocal DNSCache는 denial을 5초로 짧게 둔다.",
    anchor: "coredns가-답을-만드는-법",
  },
];
