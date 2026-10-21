import type { QuizQuestion } from "../types";

export const CILIUM_EBPF: QuizQuestion[] = [
  {
    id: "cilium-ebpf-1",
    post: "cilium-ebpf",
    question: "eBPF 프로그램에 버그가 있어도 커널 모듈처럼 커널을 멈추게 하지 못하는 이유는?",
    choices: [
      "eBPF 프로그램은 사용자 공간에서 돌기 때문",
      "올리기 전에 검증기가 모든 경로를 따라가며 위험한 접근과 끝나지 않는 루프가 없음을 증명하기 때문",
      "JIT 컴파일러가 오류를 자동으로 고치기 때문",
      "eBPF 프로그램은 root만 쓸 수 있기 때문",
    ],
    answer: 1,
    explanation:
      "eBPF 프로그램은 커널 안에서 돌지만, 적재 전에 검증기를 통과해야만 JIT와 훅 연결로 넘어간다. root 권한은 누가 올릴 수 있는지를 정할 뿐 안전을 보장하지 않는다.",
    anchor: "커널에-작은-프로그램을-끼워-넣는다",
  },
  {
    id: "cilium-ebpf-2",
    post: "cilium-ebpf",
    question: "XDP 프로그램이 invalid access to packet, off=23, r=14로 거절됐다. 무엇을 고쳐야 하나?",
    choices: [
      "맵의 max_entries를 늘린다",
      "xdpgeneric 대신 native 모드로 건다",
      "IP 헤더를 읽기 전에 data_end와 비교해 IP 헤더 길이만큼 있는지 확인한다",
      "프로그램 라이선스를 GPL로 바꾼다",
    ],
    answer: 2,
    explanation:
      "r=14는 검증기가 이더넷 헤더 14바이트까지만 안전하다고 증명했다는 뜻이다. 23번째 바이트를 읽으려면 그 전에 data_end와 비교해 범위를 34바이트까지 늘려야 한다.",
    anchor: "검증기가-먼저-읽는다",
  },
  {
    id: "cilium-ebpf-3",
    post: "cilium-ebpf",
    question: "Cilium이 Service나 정책이 바뀔 때 iptables처럼 규칙 전체를 다시 쓰지 않아도 되는 이유는?",
    choices: [
      "프로그램은 그대로 두고 에이전트가 BPF 맵의 항목만 고치면 되기 때문",
      "Service가 바뀌면 노드를 재부팅하기 때문",
      "변경 사항을 다음 syncPeriod까지 미루기 때문",
      "eBPF 프로그램이 API 서버를 직접 조회하기 때문",
    ],
    answer: 0,
    explanation:
      "eBPF 프로그램은 상태를 맵에 두고 패킷마다 해시로 찾는다. 그래서 바뀐 Service나 identity만 맵에 반영하면 되고, 항목 수가 늘어도 조회 비용이 거의 일정하다.",
    anchor: "맵에-상태를-두고-바깥에서-읽는다",
  },
  {
    id: "cilium-ebpf-4",
    post: "cilium-ebpf",
    question: "tc egress 프로그램이 TCP 8080을 막고 있을 때 curl이 시간 초과로 끝나는 이유는?",
    choices: [
      "서버가 RST를 돌려줘서",
      "받는 쪽 XDP가 SYN을 버려서",
      "conntrack 테이블이 가득 차서",
      "SYN이 보내는 쪽 장치를 떠나기 전에 버려져 재전송만 반복하다 끝나서",
    ],
    answer: 3,
    explanation:
      "TC_ACT_SHOT은 패킷을 조용히 버리므로 상대에게 아무 응답도 가지 않는다. 클라이언트는 SYN을 재전송하다 -m 3의 시간을 채우고 종료 코드 28로 끝난다.",
    anchor: "패킷이-지나는-길목-xdp-tc-소켓",
  },
  {
    id: "cilium-ebpf-5",
    post: "cilium-ebpf",
    question: "Cilium의 소켓 단계 분산(Socket LB)을 켜면 노드에서 tcpdump를 떠도 ClusterIP가 보이지 않는 이유는?",
    choices: [
      "ClusterIP 패킷이 암호화되기 때문",
      "connect() 순간 목적지를 Pod 주소로 바꿔 써서 처음부터 Pod 주소로 연결이 맺어지기 때문",
      "Hubble이 패킷을 가로채기 때문",
      "kube-proxy가 ClusterIP를 지우기 때문",
    ],
    answer: 1,
    explanation:
      "cgroup 소켓 훅이 시스템 콜 단계에서 목적지를 바꾸므로 커널은 Pod 주소로 SYN을 만든다. 패킷마다 DNAT할 필요가 없고, getpeername 훅이 앱에는 원래 ClusterIP를 보여 준다.",
    anchor: "kube-proxy-없이-service를-푸는-법",
  },
  {
    id: "cilium-ebpf-6",
    post: "cilium-ebpf",
    question: "frontend Pod가 10개에서 100개로 늘었다. identity 기반 정책에서 backend 쪽 노드의 정책 맵은?",
    choices: [
      "같은 라벨 묶음은 identity 하나를 공유하므로 바뀌지 않는다",
      "새 Pod IP 90개가 추가된다",
      "모든 노드의 정책 맵을 비우고 다시 쓴다",
      "새 Pod마다 별도 정책 객체가 만들어진다",
    ],
    answer: 0,
    explanation:
      "Cilium은 라벨 묶음마다 숫자 identity를 주고 정책 맵에는 identity를 넣는다. Pod가 늘어도 identity는 그대로라 받는 쪽은 고칠 것이 없고, 새 Pod는 자기 identity만 알면 된다.",
    anchor: "ip-대신-identity로-정책을-건다",
  },
  {
    id: "cilium-ebpf-7",
    post: "cilium-ebpf",
    question: "Cilium 클러스터에서 Pod 사이 연결이 안 된다. 가장 먼저 쓸 만한 명령은?",
    choices: [
      "iptables-save | grep KUBE-SVC",
      "conntrack -L",
      "hubble observe --verdict DROPPED",
      "kubectl rollout restart",
    ],
    answer: 2,
    explanation:
      "Cilium은 Service와 정책을 eBPF로 처리하므로 iptables 규칙에는 단서가 거의 없다. Hubble은 판정마다 남긴 이벤트로 버려졌는지와 Policy denied 같은 이유를 바로 보여 준다.",
    anchor: "현장에서-ebpf-데이터패스를-의심할-때",
  },
];
